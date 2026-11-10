/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2026 Red Hat, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/*
 * A tool that grabs a tablet device via libinput and forwards its
 * events as ei stylus events.
 *
 * Usage:
 *   export LIBEI_SOCKET=eis-0
 *   ei-libinput-stylus /dev/input/event<N>
 *
 * The device is grabbed (EVIOCGRAB) on open to prevent duplicate
 * events in the compositor.
 */

#include "config.h"

#include <dirent.h>
#include <errno.h>
#include <fcntl.h>
#include <libinput.h>
#include <limits.h>
#include <linux/input.h>
#include <poll.h>
#include <signal.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ioctl.h>
#include <unistd.h>

#include "util-bits.h"
#include "util-color.h"
#include "util-logger.h"
#include "util-macros.h"
#include "util-mem.h"
#include "util-strings.h"

#include "libei.h"

static volatile sig_atomic_t stop = 0;

static struct {
	struct logger *logger;
} log_ctx;

static void
sighandler(int signo)
{
	stop = 1;
}

static int
open_restricted(const char *path, int flags, void *user_data)
{
	int fd = open(path, flags | O_CLOEXEC);
	if (fd < 0)
		return -errno;

	/* Grab devices to avoid duplicate events */
	if (strncmp(path, "/dev/input/event", sizeof("/dev/input/event") - 1) == 0) {
		if (ioctl(fd, EVIOCGRAB, 1) < 0) {
			log_warn(&log_ctx, "failed to grab %s: %s\n", path, strerror(errno));
		}
	}

	return fd;
}

static void
close_restricted(int fd, void *user_data)
{
	close(fd);
}

static const struct libinput_interface li_interface = {
	.open_restricted = open_restricted,
	.close_restricted = close_restricted,
};

static void LIBINPUT_ATTRIBUTE_PRINTF(3, 0) log_handler(struct libinput *li,
							enum libinput_log_priority priority,
							const char *format,
							va_list args)
{
	static bool use_color = true;
	run_only_once {
		use_color = isatty(STDERR_FILENO);
	}

	_cleanup_free_ char *msg = xvaprintf(format, args);
	fprintf(stderr,
		"%slibinput: %s%s",
		use_color ? ansi_colorcode[BLUE] : "",
		msg,
		use_color ? ansi_colorcode[RESET] : "");
}

struct context {
	struct libinput *li;
	struct ei *ei;
	struct ei_device *device;
	struct libinput_tablet_tool *tool;
	bool in_proximity;    /* libinput says we're in proximity */
	bool ei_in_proximity; /* we've sent proximity-in to EI */
	bool tip_down;        /* libinput tip state */
	bool ei_connected;
	bitmask_t bound_caps; /* bitmask of bound ei_stylus_capability */
};

static bool
setup_ei(struct context *ctx)
{
	struct ei *ei = ei_new_sender(NULL);
	if (!ei) {
		log_error(&log_ctx, "Failed to create ei context\n");
		return false;
	}

	ei_configure_name(ei, "ei-libinput-stylus");

	int rc = ei_setup_backend_socket(ei, NULL);
	if (rc != 0) {
		log_error(&log_ctx, "Failed to set up ei socket (is LIBEI_SOCKET set?)\n");
		ei_unref(ei);
		return false;
	}

	ctx->ei = ei;
	return true;
}

static void
handle_ei_event(struct context *ctx, struct ei_event *event)
{
	switch (ei_event_get_type(event)) {
	case EI_EVENT_CONNECT:
		break;
	case EI_EVENT_DISCONNECT:
		log_info(&log_ctx, "Disconnected from EIS\n");
		stop = 1;
		break;
	case EI_EVENT_SEAT_ADDED: {
		struct ei_seat *seat = ei_event_get_seat(event);
		ei_seat_bind_capabilities(seat, EI_DEVICE_CAP_STYLUS, NULL);
		break;
	}
	case EI_EVENT_DEVICE_ADDED: {
		struct ei_device *device = ei_event_get_device(event);
		if (ei_device_has_capability(device, EI_DEVICE_CAP_STYLUS) && !ctx->device) {
			ctx->device = ei_device_ref(device);

			/* Bind stylus capabilities based on the libinput tool */
			struct {
				enum ei_stylus_capability ei_cap;
				int (*has_cap)(struct libinput_tablet_tool *);
				const char *name;
			} const cap_map[] = {
				{ EI_STYLUS_CAP_PRESSURE,
				  libinput_tablet_tool_has_pressure,
				  "pressure" },
				{ EI_STYLUS_CAP_DISTANCE,
				  libinput_tablet_tool_has_distance,
				  "distance" },
				{ EI_STYLUS_CAP_TILT, libinput_tablet_tool_has_tilt, "tilt" },
				{ EI_STYLUS_CAP_ROTATION,
				  libinput_tablet_tool_has_rotation,
				  "rotation" },
				{ EI_STYLUS_CAP_AIRBRUSH_FLOW,
				  libinput_tablet_tool_has_slider,
				  "airbrush flow" },
			};
			for (size_t i = 0; i < ARRAY_LENGTH(cap_map); i++) {
				if (!ctx->tool || !cap_map[i].has_cap(ctx->tool))
					continue;

				if (ei_event_device_has_stylus_capability(event,
									  cap_map[i].ei_cap)) {
					ei_event_device_bind_stylus_capability(event,
									       cap_map[i].ei_cap);
					bitmask_set_flag(&ctx->bound_caps, cap_map[i].ei_cap);
				} else {
					log_warn(&log_ctx,
						 "EI device does not support %s capability\n",
						 cap_map[i].name);
				}
			}
			log_info(&log_ctx,
				 "Using EI stylus device: %s\n",
				 ei_device_get_name(device));
		}
		break;
	}
	case EI_EVENT_DEVICE_RESUMED:
		if (ctx->device) {
			ei_device_start_emulating(ctx->device, 1);
			log_info(&log_ctx, "Started emulating\n");
		}
		break;
	case EI_EVENT_DEVICE_REMOVED:
		if (ctx->device)
			ctx->device = ei_device_unref(ctx->device);
		break;
	default:
		break;
	}
}

static void
dispatch_ei(struct context *ctx)
{
	ei_dispatch(ctx->ei);

	struct ei_event *event;
	while ((event = ei_get_event(ctx->ei)) != NULL) {
		handle_ei_event(ctx, event);
		ei_event_unref(event);
	}
}

static void
handle_tablet_axes(struct context *ctx, struct libinput_event_tablet_tool *tevent)
{
	struct ei_device *device = ctx->device;
	double x = libinput_event_tablet_tool_get_x(tevent);
	double y = libinput_event_tablet_tool_get_y(tevent);
	ei_device_stylus_motion(device, x, y);

	if (bitmask_flag_is_set(ctx->bound_caps, EI_STYLUS_CAP_PRESSURE))
		ei_device_stylus_pressure(device, libinput_event_tablet_tool_get_pressure(tevent));
	if (bitmask_flag_is_set(ctx->bound_caps, EI_STYLUS_CAP_DISTANCE))
		ei_device_stylus_distance(device, libinput_event_tablet_tool_get_distance(tevent));
	if (bitmask_flag_is_set(ctx->bound_caps, EI_STYLUS_CAP_TILT))
		ei_device_stylus_tilt(device,
				      libinput_event_tablet_tool_get_tilt_x(tevent),
				      libinput_event_tablet_tool_get_tilt_y(tevent));
	if (bitmask_flag_is_set(ctx->bound_caps, EI_STYLUS_CAP_ROTATION))
		ei_device_stylus_rotation(device, libinput_event_tablet_tool_get_rotation(tevent));
	/* libinput uses [-1, 1], ei uses [0, 1] */
	if (bitmask_flag_is_set(ctx->bound_caps, EI_STYLUS_CAP_AIRBRUSH_FLOW))
		ei_device_stylus_airbrush_flow(
			device,
			(libinput_event_tablet_tool_get_slider_position(tevent) + 1) / 2);
}

/**
 * If we're in proximity according to libinput but haven't sent the
 * proximity-in to EI yet (because the device wasn't ready), replay the
 * cached state now. This is called on every tablet event so we catch
 * up as soon as the EI device becomes available.
 */
static bool
maybe_replay_cached_state(struct context *ctx, struct libinput_event_tablet_tool *tevent)
{
	if (ctx->ei_in_proximity || !ctx->in_proximity || !ctx->device)
		return false;

	log_debug(&log_ctx,
		  "replaying cached state: proximity in%s\n",
		  ctx->tip_down ? " + tip down" : "");

	ei_device_stylus_proximity_in(ctx->device);
	if (ctx->tip_down)
		ei_device_stylus_tip_down(ctx->device);
	handle_tablet_axes(ctx, tevent);
	ei_device_frame(ctx->device, ei_now(ctx->ei));
	ctx->ei_in_proximity = true;

	return true;
}

static void
handle_tablet_proximity(struct context *ctx, struct libinput_event_tablet_tool *tevent)
{
	enum libinput_tablet_tool_proximity_state state =
		libinput_event_tablet_tool_get_proximity_state(tevent);

	if (state == LIBINPUT_TABLET_TOOL_PROXIMITY_STATE_IN) {
		log_debug(&log_ctx, "proximity in\n");
		ctx->in_proximity = true;
		if (ctx->tool)
			libinput_tablet_tool_unref(ctx->tool);
		ctx->tool = libinput_tablet_tool_ref(libinput_event_tablet_tool_get_tool(tevent));

		/* Connect to EI on the first proximity event so the
		 * compositor can initialize the stylus with the right
		 * capabilities as reported by the libinput tool. */
		if (!ctx->ei_connected) {
			if (!setup_ei(ctx)) {
				stop = 1;
				return;
			}
			ctx->ei_connected = true;
		}

		if (ctx->device) {
			ei_device_stylus_proximity_in(ctx->device);
			handle_tablet_axes(ctx, tevent);
			ei_device_frame(ctx->device, ei_now(ctx->ei));
			ctx->ei_in_proximity = true;
		} else {
			log_debug(&log_ctx,
				  "EI device not ready, caching state for later replay\n");
		}
	} else {
		log_debug(&log_ctx, "proximity out\n");
		ctx->in_proximity = false;
		if (ctx->tool) {
			libinput_tablet_tool_unref(ctx->tool);
			ctx->tool = NULL;
		}
		if (ctx->device && ctx->ei_in_proximity) {
			if (ctx->tip_down)
				ei_device_stylus_tip_up(ctx->device);
			ei_device_stylus_proximity_out(ctx->device);
			ei_device_frame(ctx->device, ei_now(ctx->ei));
		}
		ctx->tip_down = false;
		ctx->ei_in_proximity = false;
	}
}

static void
handle_tablet_tip(struct context *ctx, struct libinput_event_tablet_tool *tevent)
{
	enum libinput_tablet_tool_tip_state state =
		libinput_event_tablet_tool_get_tip_state(tevent);

	ctx->tip_down = (state == LIBINPUT_TABLET_TOOL_TIP_DOWN);

	if (maybe_replay_cached_state(ctx, tevent))
		return;

	if (!ctx->device || !ctx->ei_in_proximity)
		return;

	if (ctx->tip_down) {
		log_debug(&log_ctx, "tip down\n");
		ei_device_stylus_tip_down(ctx->device);
	} else {
		log_debug(&log_ctx, "tip up\n");
		ei_device_stylus_tip_up(ctx->device);
	}

	handle_tablet_axes(ctx, tevent);
	ei_device_frame(ctx->device, ei_now(ctx->ei));
}

static void
handle_tablet_axis(struct context *ctx, struct libinput_event_tablet_tool *tevent)
{
	if (maybe_replay_cached_state(ctx, tevent))
		return;

	if (!ctx->device || !ctx->ei_in_proximity)
		return;

	handle_tablet_axes(ctx, tevent);
	ei_device_frame(ctx->device, ei_now(ctx->ei));
}

static void
dispatch_libinput(struct context *ctx)
{
	libinput_dispatch(ctx->li);

	struct libinput_event *event;
	while ((event = libinput_get_event(ctx->li)) != NULL) {
		enum libinput_event_type type = libinput_event_get_type(event);

		switch (type) {
		case LIBINPUT_EVENT_TABLET_TOOL_PROXIMITY:
			handle_tablet_proximity(ctx, libinput_event_get_tablet_tool_event(event));
			break;
		case LIBINPUT_EVENT_TABLET_TOOL_TIP:
			handle_tablet_tip(ctx, libinput_event_get_tablet_tool_event(event));
			break;
		case LIBINPUT_EVENT_TABLET_TOOL_AXIS:
			handle_tablet_axis(ctx, libinput_event_get_tablet_tool_event(event));
			break;
		default:
			break;
		}

		libinput_event_destroy(event);
	}
}

static void
list_devices(void)
{
	struct dirent **namelist;
	int n;

	n = scandir("/dev/input", &namelist, NULL, alphasort);
	if (n < 0) {
		fprintf(stderr, "Failed to scan /dev/input: %s\n", strerror(errno));
		return;
	}

	fprintf(stderr, "Available input devices:\n");
	for (int i = 0; i < n; i++) {
		if (strncmp(namelist[i]->d_name, "event", 5) != 0) {
			free(namelist[i]);
			continue;
		}

		char path[PATH_MAX];
		snprintf(path, sizeof(path), "/dev/input/%s", namelist[i]->d_name);

		int fd = open(path, O_RDONLY | O_NONBLOCK | O_CLOEXEC);
		if (fd < 0) {
			free(namelist[i]);
			continue;
		}

		char name[256] = "unknown";
		ioctl(fd, EVIOCGNAME(sizeof(name) - 1), name);
		close(fd);

		fprintf(stderr, "  %s\t%s\n", path, name);
		free(namelist[i]);
	}
	free(namelist);
}

int
main(int argc, char *argv[])
{
	if (argc < 2) {
		list_devices();
		fprintf(stderr, "\nUsage: %s /dev/input/eventN\n", argv[0]);
		return 1;
	}

	const char *devpath = argv[1];

	struct sigaction act = { .sa_handler = sighandler };
	sigaction(SIGINT, &act, NULL);
	sigaction(SIGTERM, &act, NULL);

	struct context ctx = { 0 };

	ctx.li = libinput_path_create_context(&li_interface, NULL);
	if (!ctx.li) {
		fprintf(stderr, "Failed to create libinput context\n");
		return 1;
	}

	_unref_(logger) *l = logger_new("ei", NULL);
	log_ctx.logger = l;
	logger_set_priority(log_ctx.logger, LOGGER_DEBUG);

	libinput_log_set_priority(ctx.li, LIBINPUT_LOG_PRIORITY_DEBUG);
	libinput_log_set_handler(ctx.li, log_handler);

	struct libinput_device *dev = libinput_path_add_device(ctx.li, devpath);
	if (!dev) {
		log_error(&log_ctx, "Failed to add device %s\n", devpath);
		libinput_unref(ctx.li);
		return 1;
	}

	if (!libinput_device_has_capability(dev, LIBINPUT_DEVICE_CAP_TABLET_TOOL)) {
		log_error(&log_ctx, "%s is not a tablet device\n", devpath);
		libinput_unref(ctx.li);
		return 1;
	}

	log_info(&log_ctx, "Tablet on %s: %s\n", devpath, libinput_device_get_name(dev));
	log_info(&log_ctx, "Waiting for proximity event to connect to EI...\n");

	int li_fd = libinput_get_fd(ctx.li);

	while (!stop) {
		struct pollfd fds[2] = {
			{ .fd = li_fd, .events = POLLIN },
			{ .fd = -1, .events = 0 },
		};
		int nfds = 1;

		if (ctx.ei) {
			fds[1].fd = ei_get_fd(ctx.ei);
			fds[1].events = POLLIN;
			nfds = 2;
		}

		int rc = poll(fds, nfds, -1);
		if (rc < 0) {
			if (errno == EINTR)
				continue;
			break;
		}

		if (fds[0].revents & (POLLERR | POLLHUP))
			break;
		if (nfds > 1 && fds[1].revents & (POLLERR | POLLHUP))
			break;
		if (fds[0].revents & POLLIN)
			dispatch_libinput(&ctx);
		if (nfds > 1 && fds[1].revents & POLLIN)
			dispatch_ei(&ctx);
	}

	log_info(&log_ctx, "Shutting down\n");

	if (ctx.device) {
		ei_device_stop_emulating(ctx.device);
		ei_device_close(ctx.device);
		ei_device_unref(ctx.device);
	}
	if (ctx.tool)
		libinput_tablet_tool_unref(ctx.tool);
	if (ctx.ei)
		ei_unref(ctx.ei);
	libinput_unref(ctx.li);

	return 0;
}
