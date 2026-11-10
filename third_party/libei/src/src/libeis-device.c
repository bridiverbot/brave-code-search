/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2020 Red Hat, Inc.
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

#include "config.h"

#include <errno.h>
#include <math.h>
#include <stdint.h>

#include "util-bits.h"
#include "util-io.h"
#include "util-macros.h"
#include "util-time.h"

#include "eis-proto.h"
#include "libeis-gestures.h"
#include "libeis-private.h"

static_assert((int)EIS_DEVICE_TYPE_VIRTUAL == EIS_DEVICE_DEVICE_TYPE_VIRTUAL, "ABI mismatch");
static_assert((int)EIS_DEVICE_TYPE_PHYSICAL == EIS_DEVICE_DEVICE_TYPE_PHYSICAL, "ABI mismatch");

_public_ OBJECT_IMPLEMENT_REF(eis_keymap);
_public_ OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_keymap);
_public_ OBJECT_IMPLEMENT_GETTER(eis_keymap, type, enum eis_keymap_type);
_public_
OBJECT_IMPLEMENT_GETTER(eis_keymap, fd, int);
_public_
OBJECT_IMPLEMENT_GETTER(eis_keymap, size, size_t);
_public_
OBJECT_IMPLEMENT_GETTER(eis_keymap, device, struct eis_device *);
_public_
OBJECT_IMPLEMENT_GETTER(eis_keymap, user_data, void *);
_public_
OBJECT_IMPLEMENT_SETTER(eis_keymap, user_data, void *);

static void
eis_keymap_destroy(struct eis_keymap *keymap)
{
	if (!keymap->assigned)
		eis_device_unref(keymap->device);
	xclose(keymap->fd);
}

static OBJECT_IMPLEMENT_CREATE(eis_keymap);

_public_ struct eis_keymap *
eis_device_new_keymap(struct eis_device *device, enum eis_keymap_type type, int fd, size_t size)
{
	switch (type) {
	case EIS_KEYMAP_TYPE_XKB:
		break;
	default:
		return NULL;
	}

	if (fd < 0 || size == 0)
		return NULL;

	int newfd = xdup(fd);
	if (newfd < 0)
		return NULL;

	struct eis_keymap *keymap = eis_keymap_create(NULL);
	keymap->device = eis_device_ref(device);
	keymap->fd = newfd;
	keymap->type = type;
	keymap->size = size;

	return keymap;
}

_public_ struct eis *
eis_device_get_context(struct eis_device *device)
{
	return eis_client_get_context(eis_device_get_client(device));
}

_public_ void
eis_keymap_add(struct eis_keymap *keymap)
{
	struct eis_device *device = eis_keymap_get_device(keymap);

	if (device->state != EIS_DEVICE_STATE_NEW) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device already (dis)connected",
			       __func__);
		return;
	}

	if (device->keymap) {
		log_bug_client(eis_device_get_context(device),
			       "%s: only one keymap can only be assigned and only once",
			       __func__);
		return;
	}

	/* New keymap holds ref to the device, for assigned keymap the device
	 * holds the ref to the keymap instead */
	device->keymap = eis_keymap_ref(keymap);
	keymap->assigned = true;
	eis_device_unref(keymap->device);
}

_public_ struct eis_keymap *
eis_device_keyboard_get_keymap(struct eis_device *device)
{
	return device->keymap;
}

static void
eis_device_destroy(struct eis_device *device)
{
	struct eis_region *r;
	struct eis_event *event;

	list_for_each_safe(r, &device->regions, link)
		eis_region_unref(r);

	/* regions_new does not own a ref */

	eis_keymap_unref(device->keymap);

	list_for_each_safe(event, &device->pending_event_queue, link) {
		list_remove(&event->link);
		eis_event_unref(event);
	}

	eis_pointer_unref(device->pointer);
	eis_touchscreen_unref(device->touchscreen);
	eis_keyboard_unref(device->keyboard);
	eis_text_unref(device->text);
	eis_gesture_swipe_unref(device->swipe);
	eis_gesture_pinch_unref(device->pinch);
	eis_gesture_hold_unref(device->hold);
	eis_stylus_unref(device->stylus);

	free(device->name);
}

_public_ OBJECT_IMPLEMENT_REF(eis_device);
_public_ OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_device);
static OBJECT_IMPLEMENT_CREATE(eis_device);
static OBJECT_IMPLEMENT_PARENT(eis_device, eis_seat);
_public_
OBJECT_IMPLEMENT_GETTER(eis_device, user_data, void *);
_public_
OBJECT_IMPLEMENT_SETTER(eis_device, user_data, void *);
_public_
OBJECT_IMPLEMENT_GETTER(eis_device, name, const char *);
_public_ OBJECT_IMPLEMENT_GETTER(eis_device, type, enum eis_device_type);
_public_
OBJECT_IMPLEMENT_GETTER(eis_device, width, uint32_t);
_public_
OBJECT_IMPLEMENT_GETTER(eis_device, height, uint32_t);
OBJECT_IMPLEMENT_GETTER_AS_REF(eis_device, proto_object, const struct brei_object *);

object_id_t
eis_device_get_id(struct eis_device *device)
{
	return device->proto_object.id;
}

_public_ struct eis_seat *
eis_device_get_seat(struct eis_device *device)
{
	return eis_device_parent(device);
}

_public_ struct eis_region *
eis_device_get_region(struct eis_device *device, size_t index)
{
	return list_nth_entry(struct eis_region, &device->regions, link, index);
}

_public_ struct eis_region *
eis_device_get_region_at(struct eis_device *device, double x, double y)
{
	struct eis_region *r;

	list_for_each(r, &device->regions, link) {
		if (eis_region_contains(r, x, y))
			return r;
	}
	return NULL;
}

_public_ struct eis_client *
eis_device_get_client(struct eis_device *device)
{
	return eis_seat_get_client(eis_device_get_seat(device));
}

static inline bool
eis_device_in_region(struct eis_device *device, double x, double y)
{
	struct eis_region *r;

	if (list_empty(&device->regions))
		return true;

	list_for_each(r, &device->regions, link) {
		if (eis_region_contains(r, x, y))
			return true;
	}

	return false;
}

static struct brei_result *
client_msg_release(struct eis_device *device)
{
	eis_device_closed_by_client(device);
	return NULL;
}

#define DISCONNECT_IF_RECEIVER_CONTEXT(device_) do { \
	struct eis_client *client_ = eis_device_get_client(device_); \
	if (!eis_client_is_sender(client_)) { \
		struct eis *_ctx = eis_client_get_context(client_); \
		log_bug_client(_ctx, "Invalid event from receiver ei context. Disconnecting client"); \
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_MODE, "Invalid event from receiver ei context"); \
	} \
} while(0)

#define DISCONNECT_IF_IS_NAN(arg_) do { \
	auto arg = arg_; \
	if (isnan(arg) || isinf(arg)) { \
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_VALUE, \
				       "Received NaN or Inf from ei context. Disconnecting"); \
	} \
} while(0)

static struct brei_result *
client_msg_start_emulating(struct eis_device *device, uint32_t serial, uint32_t sequence)
{
	struct brei_result *result = NULL;

	eis_client_update_client_serial(eis_device_get_client(device), serial);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	switch (device->state) {
	case EIS_DEVICE_STATE_DEAD:
	case EIS_DEVICE_STATE_CLOSED_BY_CLIENT:
	case EIS_DEVICE_STATE_NEW:
	case EIS_DEVICE_STATE_AWAITING_READY:
	case EIS_DEVICE_STATE_EMULATING:
		result = brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					 "Invalid device state %u for a start_emulating event",
					 device->state);
		break;
	case EIS_DEVICE_STATE_RESUMED:
		eis_queue_device_start_emulating_event(device, sequence);
		device->state = EIS_DEVICE_STATE_EMULATING;
		break;
	case EIS_DEVICE_STATE_PAUSED:
		/* race condition, that's fine */
		break;
	}

	return result;
}

static struct brei_result *
client_msg_stop_emulating(struct eis_device *device, uint32_t serial)
{
	struct brei_result *result = NULL;

	eis_client_update_client_serial(eis_device_get_client(device), serial);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	switch (device->state) {
	case EIS_DEVICE_STATE_DEAD:
	case EIS_DEVICE_STATE_CLOSED_BY_CLIENT:
	case EIS_DEVICE_STATE_NEW:
	case EIS_DEVICE_STATE_AWAITING_READY:
	case EIS_DEVICE_STATE_RESUMED:
		result = brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					 "Invalid device state %u for a stop_emulating event",
					 device->state);
		break;
	case EIS_DEVICE_STATE_EMULATING:
		eis_queue_device_stop_emulating_event(device);
		device->state = EIS_DEVICE_STATE_RESUMED;
		break;
	case EIS_DEVICE_STATE_PAUSED:
		/* race condition, that's fine */
		break;
	}

	return result;
}

static struct brei_result *
maybe_error_on_device_state(struct eis_device *device, const char *event_type)
{
	switch (device->state) {
	case EIS_DEVICE_STATE_RESUMED:
		/* could be a race condition, but it's unlikely unless the
		 * EIS implementation pauses and resumes immediately without
		 * giving the client a chance to catch up. So let's
		 * treat this as error until we see real issues.
		 */
		break;
	case EIS_DEVICE_STATE_PAUSED:
		/* we paused the device but the client sent us an event
		 * - most likely a race condition, so let's ignore it */
		return NULL;
	case EIS_DEVICE_STATE_EMULATING:
		return NULL;
	case EIS_DEVICE_STATE_NEW:
	case EIS_DEVICE_STATE_AWAITING_READY:
	case EIS_DEVICE_STATE_CLOSED_BY_CLIENT:
	case EIS_DEVICE_STATE_DEAD:
		break;
	}

	return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			       "Invalid device state %u for a %s event",
			       device->state,
			       event_type);
}

static struct brei_result *
client_msg_frame(struct eis_device *device, uint32_t serial, uint64_t time)
{
	eis_client_update_client_serial(eis_device_get_client(device), serial);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_PROXIMITY_IN) &&
		    bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_PROXIMITY_OUT))
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Stylus proximity in and out in the same frame");
		if (bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_TIP_DOWN) &&
		    bitmask_bit_is_set(device->stylus_state.pending_events, STYLUS_PENDING_TIP_UP))
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Stylus tip down and up in the same frame");
		if (bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_ERASE_START) &&
		    bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_ERASE_STOP))
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Stylus erase start and stop in the same frame");

		if (bitmask_bit_is_set(device->stylus_state.pending_events,
				       STYLUS_PENDING_PROXIMITY_IN) &&
		    !bitmask_all(device->stylus_state.pending_events,
				 device->stylus_state.required_at_prox_in)) {
			bitmask_t missing =
				bitmask_and(device->stylus_state.required_at_prox_in,
					    bitmask_not(device->stylus_state.pending_events));
			return brei_result_new(
				EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				"Stylus proximity in without initial values for:%s%s%s%s%s%s",
				bitmask_bit_is_set(missing, STYLUS_PENDING_MOTION) ? " motion" : "",
				bitmask_bit_is_set(missing, STYLUS_PENDING_PRESSURE) ? " pressure"
										     : "",
				bitmask_bit_is_set(missing, STYLUS_PENDING_DISTANCE) ? " distance"
										     : "",
				bitmask_bit_is_set(missing, STYLUS_PENDING_TILT) ? " tilt" : "",
				bitmask_bit_is_set(missing, STYLUS_PENDING_ROTATION) ? " rotation"
										     : "",
				bitmask_bit_is_set(missing, STYLUS_PENDING_AIRBRUSH_FLOW)
					? " airbrush_flow"
					: "");
		}

		device->gesture_state.swipe.needs_frame = false;
		device->gesture_state.pinch.needs_frame = false;
		device->gesture_state.hold.needs_frame = false;
		eis_queue_frame_event(device, time);
		return NULL;
	}

	return maybe_error_on_device_state(device, "frame");
}

static struct brei_result *
client_msg_ready(struct eis_device *device)
{
	if (device->state != EIS_DEVICE_STATE_AWAITING_READY)
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Invalid device state %u for a ready event",
				       device->state);

	device->state = EIS_DEVICE_STATE_PAUSED;
	eis_queue_device_ready_event(device);

	return NULL;
}

static const struct eis_device_interface interface = {
	.release = client_msg_release,
	.start_emulating = client_msg_start_emulating,
	.stop_emulating = client_msg_stop_emulating,
	.frame = client_msg_frame,
	.ready = client_msg_ready,
};

const struct eis_device_interface *
eis_device_get_interface(struct eis_device *device)
{
	return &interface;
}

static struct brei_result *
client_msg_pointer_rel(struct eis_pointer *pointer, float x, float y)
{
	struct eis_device *device = eis_pointer_get_device(pointer);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(x);
	DISCONNECT_IF_IS_NAN(y);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pointer rel event for non-pointer device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_pointer_rel_event(device, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer rel");
}

static struct brei_result *
client_msg_pointer_abs(struct eis_pointer_absolute *pointer, float x, float y)
{
	struct eis_device *device = eis_pointer_absolute_get_device(pointer);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(x);
	DISCONNECT_IF_IS_NAN(y);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER_ABSOLUTE)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pointer abs event for non-pointer device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (eis_device_in_region(device, x, y))
			eis_queue_pointer_abs_event(device, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer abs");
}

static struct brei_result *
client_msg_button(struct eis_button *button, uint32_t btn, uint32_t state)
{
	struct eis_device *device = eis_button_get_device(button);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_BUTTON)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Button event for non-button device");
	}

	if (btn >= KEY_CNT)
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Button event for invalid button %x (KEY_CNT is %#x)",
				       btn,
				       KEY_CNT);

	if (!eis_device_update_key_button_state(device, btn, state))
		return NULL;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_pointer_button_event(device, btn, !!state);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer button");
}

static struct brei_result *
client_msg_scroll(struct eis_scroll *scroll, float x, float y)
{
	struct eis_device *device = eis_scroll_get_device(scroll);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(x);
	DISCONNECT_IF_IS_NAN(y);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Scroll event for non-scroll device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_pointer_scroll_event(device, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer scroll");
}

static struct brei_result *
client_msg_scroll_discrete(struct eis_scroll *scroll, int32_t x, int32_t y)
{
	struct eis_device *device = eis_scroll_get_device(scroll);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Scroll discrete event for non-scroll device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_pointer_scroll_discrete_event(device, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer scroll discrete");
}

static struct brei_result *
client_msg_scroll_stop(struct eis_scroll *scroll, uint32_t x, uint32_t y, uint32_t is_cancel)
{
	struct eis_device *device = eis_scroll_get_device(scroll);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Scroll stop event for non-scroll device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (is_cancel)
			eis_queue_pointer_scroll_cancel_event(device, !!x, !!y);
		else
			eis_queue_pointer_scroll_stop_event(device, !!x, !!y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pointer scroll stop");
}

static struct brei_result *
client_msg_pointer_release(struct eis_pointer *pointer)
{
	struct eis_device *device = eis_pointer_get_device(pointer);
	eis_pointer_event_destroyed(device->pointer,
				    eis_client_get_next_serial(eis_device_get_client(device)));
	eis_pointer_unref(steal(&device->pointer));
	return 0;
}

static struct brei_result *
client_msg_pointer_absolute_release(struct eis_pointer_absolute *pointer)
{
	struct eis_device *device = eis_pointer_absolute_get_device(pointer);
	eis_pointer_absolute_event_destroyed(
		device->pointer_absolute,
		eis_client_get_next_serial(eis_device_get_client(device)));
	eis_pointer_absolute_unref(steal(&device->pointer_absolute));
	return 0;
}

static struct brei_result *
client_msg_scroll_release(struct eis_scroll *scroll)
{
	struct eis_device *device = eis_scroll_get_device(scroll);
	eis_scroll_event_destroyed(device->scroll,
				   eis_client_get_next_serial(eis_device_get_client(device)));
	eis_scroll_unref(steal(&device->scroll));
	return 0;
}

static struct brei_result *
client_msg_button_release(struct eis_button *button)
{
	struct eis_device *device = eis_button_get_device(button);
	eis_button_event_destroyed(device->button,
				   eis_client_get_next_serial(eis_device_get_client(device)));
	eis_button_unref(steal(&device->button));
	return 0;
}

static const struct eis_pointer_interface pointer_interface = {
	.release = client_msg_pointer_release,
	.motion_relative = client_msg_pointer_rel,
};

static const struct eis_pointer_absolute_interface pointer_absolute_interface = {
	.release = client_msg_pointer_absolute_release,
	.motion_absolute = client_msg_pointer_abs,
};

static const struct eis_scroll_interface scroll_interface = {
	.release = client_msg_scroll_release,
	.scroll = client_msg_scroll,
	.scroll_discrete = client_msg_scroll_discrete,
	.scroll_stop = client_msg_scroll_stop,
};

static const struct eis_button_interface button_interface = {
	.release = client_msg_button_release,
	.button = client_msg_button,
};

const struct eis_pointer_interface *
eis_device_get_pointer_interface(struct eis_device *device)
{
	return &pointer_interface;
}

const struct eis_pointer_absolute_interface *
eis_device_get_pointer_absolute_interface(struct eis_device *device)
{
	return &pointer_absolute_interface;
}

const struct eis_scroll_interface *
eis_device_get_scroll_interface(struct eis_device *device)
{
	return &scroll_interface;
}

const struct eis_button_interface *
eis_device_get_button_interface(struct eis_device *device)
{
	return &button_interface;
}

static struct brei_result *
client_msg_keyboard_key(struct eis_keyboard *keyboard, uint32_t key, uint32_t state)
{
	struct eis_device *device = eis_keyboard_get_device(keyboard);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_KEYBOARD)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Key event for non-keyboard device");
	}

	if (key >= KEY_CNT)
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Key event for invalid key %x (KEY_CNT is %#x)",
				       key,
				       KEY_CNT);

	if (!eis_device_update_key_button_state(device, key, state))
		return NULL;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_keyboard_key_event(device, key, !!state);
		return NULL;
	}

	return maybe_error_on_device_state(device, "key");
}

static struct brei_result *
client_msg_keyboard_release(struct eis_keyboard *keyboard)
{
	struct eis_device *device = eis_keyboard_get_device(keyboard);
	eis_keyboard_event_destroyed(device->keyboard,
				     eis_client_get_next_serial(eis_device_get_client(device)));
	eis_keyboard_unref(steal(&device->keyboard));
	return 0;
}

static const struct eis_keyboard_interface keyboard_interface = {
	.release = client_msg_keyboard_release,
	.key = client_msg_keyboard_key,
};

const struct eis_keyboard_interface *
eis_device_get_keyboard_interface(struct eis_device *device)
{
	return &keyboard_interface;
}

/* Returns true and the position of the touch with the given ID, or
 * false and the first position that is available
 */
static bool
find_touch(struct eis_device *device, uint32_t touchid, size_t *index)
{
	ssize_t first_available = -1;
	for (size_t i = 0; i < ARRAY_LENGTH(device->touch_state.down); i++) {
		if (device->touch_state.down[i] != UINT64_MAX) {
			if (device->touch_state.down[i] == touchid) {
				if (index)
					*index = i;
				return true;
			}
		} else if (first_available < 0) {
			first_available = i;
		}
	}

	if (index) {
		if (first_available < 0)
			*index = EIS_MAX_TOUCHES;
		else
			*index = (size_t)first_available;
	}

	return false;
}

static struct brei_result *
client_msg_touch_down(struct eis_touchscreen *touchscreen, uint32_t touchid, float x, float y)
{
	struct eis_device *device = eis_touchscreen_get_device(touchscreen);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(x);
	DISCONNECT_IF_IS_NAN(y);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TOUCH)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Touch down event for non-touch device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		size_t first_available;
		if (find_touch(device, touchid, &first_available)) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Touch down event for duplicated touch ID");
		}

		if (first_available >= EIS_MAX_TOUCHES)
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_ERROR,
					       "Too many simultaneous touch events");

		device->touch_state.down[first_available] = touchid;
		eis_queue_touch_down_event(device, touchid, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "touch down");
}

static struct brei_result *
client_msg_touch_motion(struct eis_touchscreen *touchscreen, uint32_t touchid, float x, float y)
{
	struct eis_device *device = eis_touchscreen_get_device(touchscreen);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(x);
	DISCONNECT_IF_IS_NAN(y);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TOUCH)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Touch motion event for non-touch device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		/* Silently ignore motion for non-existing touches */
		if (find_touch(device, touchid, NULL))
			eis_queue_touch_motion_event(device, touchid, x, y);
		return NULL;
	}

	return maybe_error_on_device_state(device, "touch motion");
}

static bool
release_touch(struct eis_device *device, uint32_t touchid)
{
	size_t index;
	bool rc = find_touch(device, touchid, &index);
	if (rc)
		device->touch_state.down[index] = UINT64_MAX;

	return rc;
}

static struct brei_result *
client_msg_touch_up(struct eis_touchscreen *touchscreen, uint32_t touchid)
{
	struct eis_device *device = eis_touchscreen_get_device(touchscreen);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TOUCH)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Touch up event for non-touch device");
	}

	/* End the touch locally even if we're not emulating, but
	 * silently ignore touch end/cancel for non-existing touches */
	if (release_touch(device, touchid)) {
		if (device->state == EIS_DEVICE_STATE_EMULATING)
			eis_queue_touch_up_event(device, touchid);
		return NULL;
	}

	return maybe_error_on_device_state(device, "touch up");
}

static struct brei_result *
client_msg_touch_cancel(struct eis_touchscreen *touchscreen, uint32_t touchid)
{
	struct eis_device *device = eis_touchscreen_get_device(touchscreen);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TOUCH)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Touch cancel event for non-touch device");
	}

	struct eis_client *client = eis_device_get_client(device);
	if (client->interface_versions.ei_touchscreen <
	    EIS_TOUCHSCREEN_EVENT_CANCEL_SINCE_VERSION) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Touch cancel event for touchscreen version v1");
	}

	/* End the touch locally even if we're not emulating, but
	 * silently ignore touch end/cancel for non-existing touches */
	if (release_touch(device, touchid)) {
		if (device->state == EIS_DEVICE_STATE_EMULATING)
			eis_queue_touch_cancel_event(device, touchid);
		return NULL;
	}

	return maybe_error_on_device_state(device, "touch cancel");
}

static struct brei_result *
client_msg_touchscreen_release(struct eis_touchscreen *touchscreen)
{
	struct eis_device *device = eis_touchscreen_get_device(touchscreen);
	eis_touchscreen_event_destroyed(device->touchscreen,
					eis_client_get_next_serial(eis_device_get_client(device)));
	eis_touchscreen_unref(steal(&device->touchscreen));
	return NULL;
}

static const struct eis_touchscreen_interface touchscreen_interface = {
	.release = client_msg_touchscreen_release,
	.down = client_msg_touch_down,
	.motion = client_msg_touch_motion,
	.up = client_msg_touch_up,
	.cancel = client_msg_touch_cancel,
};

const struct eis_touchscreen_interface *
eis_device_get_touchscreen_interface(struct eis_device *device)
{
	return &touchscreen_interface;
}

static struct brei_result *
client_msg_gesture_swipe_release(struct eis_gesture_swipe *swipe)
{
	auto device = eis_gesture_swipe_get_device(swipe);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Swipe release event for non-gesture device");
	}

	if (device->swipe) {
		eis_gesture_swipe_event_destroyed(
			device->swipe,
			eis_client_get_next_serial(eis_device_get_client(device)));
		eis_gesture_swipe_unref(steal(&device->swipe));
	}

	return 0;
}

static struct brei_result *
client_msg_gesture_swipe_begin(struct eis_gesture_swipe *swipe, uint32_t nfingers)
{
	auto device = eis_gesture_swipe_get_device(swipe);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Swipe begin event for non-gesture device");
	}

	if (nfingers == 0 || nfingers > 5) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Swipe begin event with invalid finger count");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (device->gesture_state.swipe.is_active) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Swipe begin event while swipe is active");
		}
		if (device->gesture_state.swipe.needs_frame) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Swipe begin event without preceding frame event");
		}
		device->gesture_state.swipe.is_active = true;
		device->gesture_state.swipe.needs_frame = true;
		device->gesture_state.swipe.nfingers = nfingers;
		eis_queue_swipe_begin_event(device, nfingers);
		return NULL;
	}

	return maybe_error_on_device_state(device, "swipe begin");
}

static struct brei_result *
client_msg_gesture_swipe_update(struct eis_gesture_swipe *swipe, float dx, float dy)
{
	auto device = eis_gesture_swipe_get_device(swipe);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(dx);
	DISCONNECT_IF_IS_NAN(dy);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Swipe update event for non-gesture device");
	}

	if (device->gesture_state.swipe.is_active) {
		if (device->state == EIS_DEVICE_STATE_EMULATING) {
			if (device->gesture_state.swipe.needs_frame) {
				return brei_result_new(
					EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					"Swipe update event without preceding frame event");
			}
			device->gesture_state.swipe.needs_frame = true;
			eis_queue_swipe_update_event(device, dx, dy);
		}
		return NULL;
	}

	return maybe_error_on_device_state(device, "swipe update");
}

static struct brei_result *
client_msg_gesture_swipe_end(struct eis_gesture_swipe *swipe, uint32_t is_cancelled)
{
	auto device = eis_gesture_swipe_get_device(swipe);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Swipe end event for non-gesture device");
	}

	if (device->gesture_state.swipe.is_active) {
		if (device->state == EIS_DEVICE_STATE_EMULATING) {
			if (device->gesture_state.swipe.needs_frame) {
				return brei_result_new(
					EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					"Swipe end event without preceding frame event");
			}
			device->gesture_state.swipe.needs_frame = true;
			eis_queue_swipe_end_event(device, !!is_cancelled);
		}
		device->gesture_state.swipe.is_active = false;
		return NULL;
	}

	return maybe_error_on_device_state(device, "swipe end");
}

static const struct eis_gesture_swipe_interface swipe_interface = {
	.release = client_msg_gesture_swipe_release,
	.begin = client_msg_gesture_swipe_begin,
	.update = client_msg_gesture_swipe_update,
	.end = client_msg_gesture_swipe_end,
};

const struct eis_gesture_swipe_interface *
eis_device_get_gesture_swipe_interface(struct eis_device *device)
{
	return &swipe_interface;
}

static struct brei_result *
client_msg_gesture_pinch_release(struct eis_gesture_pinch *pinch)
{
	auto device = eis_gesture_pinch_get_device(pinch);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pinch release event for non-gesture device");
	}

	if (device->pinch) {
		eis_gesture_pinch_event_destroyed(
			device->pinch,
			eis_client_get_next_serial(eis_device_get_client(device)));
		eis_gesture_pinch_unref(steal(&device->pinch));
	}

	return 0;
}

static struct brei_result *
client_msg_gesture_pinch_begin(struct eis_gesture_pinch *pinch, uint32_t nfingers)
{
	auto device = eis_gesture_pinch_get_device(pinch);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pinch begin event for non-gesture device");
	}

	if (nfingers < 2 || nfingers > 5) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pinch begin event with invalid finger count");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (device->gesture_state.pinch.is_active) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Pinch begin event while pinch is active");
		}
		if (device->gesture_state.pinch.needs_frame) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Pinch begin event without preceding frame event");
		}
		device->gesture_state.pinch.is_active = true;
		device->gesture_state.pinch.needs_frame = true;
		device->gesture_state.pinch.nfingers = nfingers;
		eis_queue_pinch_begin_event(device, nfingers);
		return NULL;
	}

	return maybe_error_on_device_state(device, "pinch begin");
}

static struct brei_result *
client_msg_gesture_pinch_update(struct eis_gesture_pinch *pinch,
				float dx,
				float dy,
				float scale,
				float rotation)
{
	auto device = eis_gesture_pinch_get_device(pinch);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);
	DISCONNECT_IF_IS_NAN(dx);
	DISCONNECT_IF_IS_NAN(dy);
	DISCONNECT_IF_IS_NAN(scale);
	DISCONNECT_IF_IS_NAN(rotation);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pinch update event for non-gesture device");
	}

	if (device->gesture_state.pinch.is_active) {
		if (device->state == EIS_DEVICE_STATE_EMULATING) {
			if (device->gesture_state.pinch.needs_frame) {
				return brei_result_new(
					EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					"Pinch update event without preceding frame event");
			}
			device->gesture_state.pinch.needs_frame = true;
			eis_queue_pinch_update_event(device, dx, dy, scale, rotation);
		}
		return NULL;
	}

	return maybe_error_on_device_state(device, "pinch update");
}

static struct brei_result *
client_msg_gesture_pinch_end(struct eis_gesture_pinch *pinch, uint32_t is_cancelled)
{
	auto device = eis_gesture_pinch_get_device(pinch);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Pinch end event for non-gesture device");
	}

	if (device->gesture_state.pinch.is_active) {
		if (device->state == EIS_DEVICE_STATE_EMULATING) {
			if (device->gesture_state.pinch.needs_frame) {
				return brei_result_new(
					EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					"Pinch end event without preceding frame event");
			}
			device->gesture_state.pinch.needs_frame = true;
			eis_queue_pinch_end_event(device, !!is_cancelled);
		}
		device->gesture_state.pinch.is_active = false;
		return NULL;
	}

	return maybe_error_on_device_state(device, "pinch end");
}

static const struct eis_gesture_pinch_interface pinch_interface = {
	.release = client_msg_gesture_pinch_release,
	.begin = client_msg_gesture_pinch_begin,
	.update = client_msg_gesture_pinch_update,
	.end = client_msg_gesture_pinch_end,
};

const struct eis_gesture_pinch_interface *
eis_device_get_gesture_pinch_interface(struct eis_device *device)
{
	return &pinch_interface;
}

static struct brei_result *
client_msg_gesture_hold_release(struct eis_gesture_hold *hold)
{
	auto device = eis_gesture_hold_get_device(hold);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Hold release event for non-gesture device");
	}

	if (device->hold) {
		eis_gesture_hold_event_destroyed(
			device->hold,
			eis_client_get_next_serial(eis_device_get_client(device)));
		eis_gesture_hold_unref(steal(&device->hold));
	}

	return 0;
}

static struct brei_result *
client_msg_gesture_hold_begin(struct eis_gesture_hold *hold, uint32_t nfingers)
{
	auto device = eis_gesture_hold_get_device(hold);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Hold begin event for non-gesture device");
	}

	if (nfingers == 0 || nfingers > 5) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Hold begin event with invalid finger count");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		if (device->gesture_state.hold.is_active) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Hold begin event while hold is active");
		}
		if (device->gesture_state.hold.needs_frame) {
			return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					       "Hold begin event without preceding frame event");
		}
		device->gesture_state.hold.is_active = true;
		device->gesture_state.hold.needs_frame = true;
		device->gesture_state.hold.nfingers = nfingers;
		eis_queue_hold_begin_event(device, nfingers);
		return NULL;
	}

	return maybe_error_on_device_state(device, "hold begin");
}

static struct brei_result *
client_msg_gesture_hold_end(struct eis_gesture_hold *hold, uint32_t is_cancelled)
{
	auto device = eis_gesture_hold_get_device(hold);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Hold end event for non-gesture device");
	}

	if (device->gesture_state.hold.is_active) {
		if (device->state == EIS_DEVICE_STATE_EMULATING) {
			if (device->gesture_state.hold.needs_frame) {
				return brei_result_new(
					EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
					"Hold end event without preceding frame event");
			}
			device->gesture_state.hold.needs_frame = true;
			eis_queue_hold_end_event(device, !!is_cancelled);
		}
		device->gesture_state.hold.is_active = false;
		return NULL;
	}

	return maybe_error_on_device_state(device, "hold end");
}

static const struct eis_gesture_hold_interface hold_interface = {
	.release = client_msg_gesture_hold_release,
	.begin = client_msg_gesture_hold_begin,
	.end = client_msg_gesture_hold_end,
};

const struct eis_gesture_hold_interface *
eis_device_get_gesture_hold_interface(struct eis_device *device)
{
	return &hold_interface;
}

static struct brei_result *
client_msg_text_release(struct eis_text *text)
{
	struct eis_device *device = eis_text_get_device(text);
	eis_text_event_destroyed(device->text,
				 eis_client_get_next_serial(eis_device_get_client(device)));
	eis_text_unref(steal(&device->text));
	return NULL;
}

static struct brei_result *
client_msg_text_keysym(struct eis_text *text, uint32_t keysym, uint32_t state)
{
	struct eis_device *device = eis_text_get_device(text);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TEXT)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "keysym event for non-text device");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_text_keysym_event(device, keysym, !!state);
		return NULL;
	}

	return maybe_error_on_device_state(device, "text keysym");
}

static struct brei_result *
client_msg_text_utf8(struct eis_text *text, const char *utf8)
{
	struct eis_device *device = eis_text_get_device(text);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TEXT)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "utf8 event for non-text device");
	}

	if (!utf8 || utf8[0] == '\0') {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "utf8 text is NULL or the empty string");
	}

	if (strlen(utf8) > 254) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "utf8 string exceeds max length of 255 bytes");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		eis_queue_text_utf8_event(device, utf8);
		return NULL;
	}

	return maybe_error_on_device_state(device, "text utf8");
}

static const struct eis_text_interface text_interface = {
	.release = client_msg_text_release,
	.keysym = client_msg_text_keysym,
	.utf8 = client_msg_text_utf8,
};

const struct eis_text_interface *
eis_device_get_text_interface(struct eis_device *device)
{
	return &text_interface;
}

static inline struct brei_result *
check_stylus_capability_bound(struct eis_device *device,
			      enum eis_stylus_capability cap,
			      const char *event_name)
{
	if (!bitmask_flag_is_set(device->stylus_state.bound_capabilities, cap)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus %s event for unbound capability",
				       event_name);
	}
	return NULL;
}

static struct brei_result *
client_msg_stylus_bind_capabilities(struct eis_stylus *stylus, uint32_t capabilities)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus capabilities event for non-stylus device");
	}

	if (device->state == EIS_DEVICE_STATE_AWAITING_READY) {
		bitmask_t bound = bitmask_new();
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_ERASE)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_ERASE);
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_PRESSURE)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_PRESSURE);
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_DISTANCE)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_DISTANCE);
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_TILT)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_TILT);
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_ROTATION)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_ROTATION);
		if (capabilities & EIS_STYLUS_TOOL_CAPABILITY_AIRBRUSH_FLOW)
			bitmask_set_flag(&bound, EIS_STYLUS_CAP_AIRBRUSH_FLOW);

		bitmask_t excess =
			bitmask_and(bound, bitmask_not(device->stylus_state.capabilities));
		if (!bitmask_is_empty(excess)) {
			return brei_result_new(
				EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				"Client bound stylus capabilities not offered by the server");
		}
		device->stylus_state.bound_capabilities = bound;

		/* STYLUS_PENDING .. is ABI compat with protocol capabilities, any
		 * cap other than eraser is required, and motion is always required */
		bitmask_t required = bound;
		bitmask_clear_flag(&required, EIS_STYLUS_CAP_ERASE);
		bitmask_set_bit(&required, STYLUS_PENDING_MOTION);
		device->stylus_state.required_at_prox_in = required;

		eis_queue_stylus_bind_capabilities_event(device, bound);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus capabilities");
}

static struct brei_result *
client_msg_stylus_proximity_in(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus proximity in event for non-stylus device");
	}

	if (device->stylus_state.in_proximity) {
		return brei_result_new(
			EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			"Stylus proximity in event for stylus that is already in prox.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.in_proximity = true;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_PROXIMITY_IN);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus proximity in");
}

static struct brei_result *
client_msg_stylus_proximity_out(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus proximity out event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(
			EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			"Stylus proximity out event for stylus that is already out of prox.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.in_proximity = false;
		device->stylus_state.tip_is_down = false;
		device->stylus_state.is_erasing = false;
		device->stylus_state.x = 0;
		device->stylus_state.y = 0;
		device->stylus_state.pressure = 0;
		device->stylus_state.distance = 0;
		device->stylus_state.tilt_x = 0;
		device->stylus_state.tilt_y = 0;
		device->stylus_state.rotation = 0;
		device->stylus_state.flow = 0;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_PROXIMITY_OUT);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus proximity out");
}

static struct brei_result *
client_msg_stylus_erase_start(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus erase start event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus erase start event for stylus that is out of prox.");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_ERASE, "erase start");
	if (rc)
		return rc;

	if (device->stylus_state.is_erasing) {
		return brei_result_new(
			EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			"Stylus erase start event for stylus that is already erasing.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.is_erasing = true;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_ERASE_START);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus erase start");
}

static struct brei_result *
client_msg_stylus_erase_stop(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus erase stop event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus erase stop event for stylus that is out of prox.");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_ERASE, "erase stop");
	if (rc)
		return rc;

	if (!device->stylus_state.is_erasing) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus erase stop event for stylus that is not erasing.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.is_erasing = false;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_ERASE_STOP);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus erase stop");
}

static struct brei_result *
client_msg_stylus_tip_down(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tip_down event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tip_down event for stylus that is out of prox.");
	}

	if (device->stylus_state.tip_is_down) {
		return brei_result_new(
			EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			"Stylus tip_down event for stylus that is already in contact.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.tip_is_down = true;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_TIP_DOWN);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus tip down");
}

static struct brei_result *
client_msg_stylus_tip_up(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tip_up event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tip_up event for stylus that is out of prox.");
	}

	if (!device->stylus_state.tip_is_down) {
		return brei_result_new(
			EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
			"Stylus tip_up event for stylus that is already not in contact.");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.tip_is_down = false;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_TIP_UP);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus tip up");
}

static struct brei_result *
client_msg_stylus_motion(struct eis_stylus *stylus, float x, float y)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus motion event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus motion event for stylus out of prox");
	}

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.x = x;
		device->stylus_state.y = y;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_MOTION);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus motion");
}

static struct brei_result *
client_msg_stylus_pressure(struct eis_stylus *stylus, float pressure)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus pressure event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus pressure event for stylus out of prox");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_PRESSURE, "pressure");
	if (rc)
		return rc;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.pressure = pressure;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_PRESSURE);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus pressure");
}

static struct brei_result *
client_msg_stylus_distance(struct eis_stylus *stylus, float distance)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus distance event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus distance event for stylus out of prox");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_DISTANCE, "distance");
	if (rc)
		return rc;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.distance = distance;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_DISTANCE);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus distance");
}

static struct brei_result *
client_msg_stylus_tilt(struct eis_stylus *stylus, float tilt_x, float tilt_y)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tilt event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus tilt event for stylus out of prox");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_TILT, "tilt");
	if (rc)
		return rc;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.tilt_x = tilt_x;
		device->stylus_state.tilt_y = tilt_y;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_TILT);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus tilt");
}

static struct brei_result *
client_msg_stylus_rotation(struct eis_stylus *stylus, float rotation)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus rotation event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus rotation event for stylus out of prox");
	}

	auto rc = check_stylus_capability_bound(device, EIS_STYLUS_CAP_ROTATION, "rotation");
	if (rc)
		return rc;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.rotation = rotation;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_ROTATION);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus rotation");
}

static struct brei_result *
client_msg_stylus_airbrush_flow(struct eis_stylus *stylus, float flow)
{
	auto device = eis_stylus_get_device(stylus);

	DISCONNECT_IF_RECEIVER_CONTEXT(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus airbrush_flow event for non-stylus device");
	}

	if (!device->stylus_state.in_proximity) {
		return brei_result_new(EIS_CONNECTION_DISCONNECT_REASON_PROTOCOL,
				       "Stylus airbrush_flow event for stylus out of prox");
	}

	auto rc = check_stylus_capability_bound(device,
						EIS_STYLUS_CAP_AIRBRUSH_FLOW,
						"airbrush_flow");
	if (rc)
		return rc;

	if (device->state == EIS_DEVICE_STATE_EMULATING) {
		device->stylus_state.flow = flow;
		bitmask_set_bit(&device->stylus_state.pending_events, STYLUS_PENDING_AIRBRUSH_FLOW);
		return NULL;
	}

	return maybe_error_on_device_state(device, "stylus airbrush_flow");
}

static struct brei_result *
client_msg_stylus_release(struct eis_stylus *stylus)
{
	auto device = eis_stylus_get_device(stylus);
	eis_stylus_event_destroyed(device->stylus,
				   eis_client_get_next_serial(eis_device_get_client(device)));
	eis_stylus_unref(steal(&device->stylus));
	return NULL;
}

static const struct eis_stylus_interface stylus_interface = {
	.release = client_msg_stylus_release,
	.airbrush_flow = client_msg_stylus_airbrush_flow,
	.rotation = client_msg_stylus_rotation,
	.tilt = client_msg_stylus_tilt,
	.distance = client_msg_stylus_distance,
	.pressure = client_msg_stylus_pressure,
	.motion = client_msg_stylus_motion,
	.tip_up = client_msg_stylus_tip_up,
	.tip_down = client_msg_stylus_tip_down,
	.erase_stop = client_msg_stylus_erase_stop,
	.erase_start = client_msg_stylus_erase_start,
	.proximity_out = client_msg_stylus_proximity_out,
	.proximity_in = client_msg_stylus_proximity_in,
	.bind_capabilities = client_msg_stylus_bind_capabilities,
};

const struct eis_stylus_interface *
eis_device_get_stylus_interface(struct eis_device *device)
{
	return &stylus_interface;
}

_public_ struct eis_device *
eis_seat_new_device(struct eis_seat *seat)
{
	struct eis_device *device = eis_device_create(&seat->object);
	struct eis_client *client = eis_seat_get_client(seat);

	device->proto_object.id = eis_client_get_new_id(client);
	device->proto_object.implementation = device;
	device->proto_object.interface = &eis_device_proto_interface;
	device->proto_object.version = client->interface_versions.ei_device;
	assert(device->proto_object.version != 0);
	list_init(&device->proto_object.link);

	device->name = xstrdup("unnamed device");
	device->capabilities = 0;
	device->state = EIS_DEVICE_STATE_NEW;
	device->type = EIS_DEVICE_TYPE_VIRTUAL;
	list_init(&device->regions);
	list_init(&device->regions_new);
	list_init(&device->pending_event_queue);

	list_append(&seat->devices, &device->link);

	for (size_t i = 0; i < ARRAY_LENGTH(device->touch_state.down); i++) {
		device->touch_state.down[i] = UINT64_MAX;
	}

	return eis_device_ref(device);
}

_public_ void
eis_device_configure_type(struct eis_device *device, enum eis_device_type type)
{
	if (device->state != EIS_DEVICE_STATE_NEW)
		return;

	switch (type) {
	case EIS_DEVICE_TYPE_VIRTUAL:
	case EIS_DEVICE_TYPE_PHYSICAL:
		break;
	default:
		log_bug_client(eis_device_get_context(device), "Invalid device type %u", type);
		return;
	}

	device->type = type;
}

_public_ void
eis_device_configure_name(struct eis_device *device, const char *name)
{
	if (device->state != EIS_DEVICE_STATE_NEW)
		return;

	free(device->name);
	device->name = xstrdup(name);
}

_public_ void
eis_device_configure_capability(struct eis_device *device, enum eis_device_capability cap)
{
	if (device->state != EIS_DEVICE_STATE_NEW)
		return;

	if (!eis_seat_has_capability(eis_device_get_seat(device), cap))
		return;

	switch (cap) {
	case EIS_DEVICE_CAP_POINTER:
	case EIS_DEVICE_CAP_POINTER_ABSOLUTE:
	case EIS_DEVICE_CAP_KEYBOARD:
	case EIS_DEVICE_CAP_TOUCH:
	case EIS_DEVICE_CAP_BUTTON:
	case EIS_DEVICE_CAP_SCROLL:
	case EIS_DEVICE_CAP_TEXT:
	case EIS_DEVICE_CAP_GESTURES:
	case EIS_DEVICE_CAP_STYLUS:
		mask_add(device->capabilities, cap);
		break;
	}
}

_public_ void
eis_device_configure_size(struct eis_device *device, uint32_t width, uint32_t height)
{
	if (device->type != EIS_DEVICE_TYPE_PHYSICAL) {
		log_bug_client(eis_device_get_context(device),
			       "Device type physical required for size");
		return;
	}

	if (width > 2000 || height > 2000)
		log_warn(eis_device_get_context(device),
			 "Suspicious device size: %ux%umm",
			 width,
			 height);

	device->width = width;
	device->height = height;
}

_public_ void
eis_device_add(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);
	struct eis_seat *seat = eis_device_get_seat(device);

	if (device->state != EIS_DEVICE_STATE_NEW) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device already (dis)connected",
			       __func__);
		return;
	}

	if (!device->capabilities) {
		log_bug_client(eis_device_get_context(device),
			       "%s: adding device without capabilities",
			       __func__);
	}

	eis_client_register_object(client, &device->proto_object);
	eis_seat_event_device(seat, device->proto_object.id, device->proto_object.version);
	int rc = eis_device_event_name(device, device->name);
	if (rc < 0)
		goto out;

	rc = eis_device_event_device_type(device, device->type);
	if (rc < 0)
		goto out;

	if (device->type == EIS_DEVICE_TYPE_PHYSICAL) {
		rc = eis_device_event_dimensions(device, device->width, device->height);
		if (rc < 0)
			goto out;
	}
	if (device->type == EIS_DEVICE_TYPE_VIRTUAL) {
		struct eis_region *r;
		list_for_each(r, &device->regions, link) {
			if (r->mapping_id) {
				if (client->interface_versions.ei_device >=
				    EIS_DEVICE_EVENT_REGION_MAPPING_ID_SINCE_VERSION) {
					rc = eis_device_event_region_mapping_id(device,
										r->mapping_id);
					if (rc < 0)
						goto out;
				} else {
					/* If our client doesn't support mapping_id, drop it */
					free(r->mapping_id);
					r->mapping_id = NULL;
				}
			}
			rc = eis_device_event_region(device,
						     r->x,
						     r->y,
						     r->width,
						     r->height,
						     r->physical_scale);
			if (rc < 0)
				goto out;
		}
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER)) {
		device->pointer = eis_pointer_new(device);
		rc = eis_device_event_interface(device,
						eis_pointer_get_id(device->pointer),
						EIS_POINTER_INTERFACE_NAME,
						eis_pointer_get_version(device->pointer));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER_ABSOLUTE)) {
		device->pointer_absolute = eis_pointer_absolute_new(device);
		rc = eis_device_event_interface(
			device,
			eis_pointer_absolute_get_id(device->pointer_absolute),
			EIS_POINTER_ABSOLUTE_INTERFACE_NAME,
			eis_pointer_absolute_get_version(device->pointer_absolute));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		device->scroll = eis_scroll_new(device);
		rc = eis_device_event_interface(device,
						eis_scroll_get_id(device->scroll),
						EIS_SCROLL_INTERFACE_NAME,
						eis_scroll_get_version(device->scroll));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_BUTTON)) {
		device->button = eis_button_new(device);
		rc = eis_device_event_interface(device,
						eis_button_get_id(device->button),
						EIS_BUTTON_INTERFACE_NAME,
						eis_button_get_version(device->button));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_KEYBOARD)) {
		device->keyboard = eis_keyboard_new(device);
		rc = eis_device_event_interface(device,
						eis_keyboard_get_id(device->keyboard),
						EIS_KEYBOARD_INTERFACE_NAME,
						eis_keyboard_get_version(device->keyboard));
		if (rc < 0)
			goto out;

		if (device->keymap)
			rc = eis_keyboard_event_keymap(device->keyboard,
						       device->keymap->type,
						       device->keymap->size,
						       device->keymap->fd);
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_TOUCH)) {
		device->touchscreen = eis_touchscreen_new(device);
		rc = eis_device_event_interface(device,
						eis_touchscreen_get_id(device->touchscreen),
						EIS_TOUCHSCREEN_INTERFACE_NAME,
						eis_touchscreen_get_version(device->touchscreen));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_TEXT)) {
		device->text = eis_text_new(device);
		rc = eis_device_event_interface(device,
						eis_text_get_id(device->text),
						EIS_TEXT_INTERFACE_NAME,
						eis_text_get_version(device->text));
		if (rc < 0)
			goto out;
	}
	if (eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		device->swipe = eis_gesture_swipe_new(device);
		rc = eis_device_event_interface(device,
						eis_gesture_swipe_get_id(device->swipe),
						EIS_GESTURE_SWIPE_INTERFACE_NAME,
						eis_gesture_swipe_get_version(device->swipe));
		if (rc < 0)
			goto out;

		device->pinch = eis_gesture_pinch_new(device);
		rc = eis_device_event_interface(device,
						eis_gesture_pinch_get_id(device->pinch),
						EIS_GESTURE_PINCH_INTERFACE_NAME,
						eis_gesture_pinch_get_version(device->pinch));
		if (rc < 0)
			goto out;

		device->hold = eis_gesture_hold_new(device);
		rc = eis_device_event_interface(device,
						eis_gesture_hold_get_id(device->hold),
						EIS_GESTURE_HOLD_INTERFACE_NAME,
						eis_gesture_hold_get_version(device->hold));
		if (rc < 0)
			goto out;
	}

	if (eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		device->stylus = eis_stylus_new(device);
		rc = eis_device_event_interface(device,
						eis_stylus_get_id(device->stylus),
						EIS_STYLUS_INTERFACE_NAME,
						eis_stylus_get_version(device->stylus));
		if (rc < 0)
			goto out;

		rc = eis_stylus_event_capabilities(
			device->stylus,
			bitmask_as_u32(device->stylus_state.capabilities));
		if (rc < 0)
			goto out;
	}

	device->state = EIS_DEVICE_STATE_AWAITING_READY;

	rc = eis_device_event_done(device);
	if (rc < 0)
		goto out;

	struct eis *eis = eis_device_get_context(device);
	if (client->interface_versions.ei_device < EIS_DEVICE_REQUEST_READY_SINCE_VERSION) {
		device->state = EIS_DEVICE_STATE_PAUSED;
		if (flag_is_set(eis->flags, EIS_FLAG_DEVICE_READY))
			eis_queue_device_ready_event(device);
	}

out:
	if (rc < 0) {
		log_error(eis_client_get_context(client),
			  "Failed to add device, disconnecting client");
		eis_client_disconnect(client);
	}
	return;
}

_public_ void
eis_device_remove(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (device->state == EIS_DEVICE_STATE_DEAD)
		return;

	if (device->state == EIS_DEVICE_STATE_EMULATING &&
	    !eis_client_is_sender(eis_device_get_client(device)))
		eis_device_stop_emulating(device);

	if (device->pointer) {
		eis_pointer_event_destroyed(device->pointer, eis_client_get_next_serial(client));
		eis_pointer_unref(steal(&device->pointer));
	}
	if (device->pointer_absolute) {
		eis_pointer_absolute_event_destroyed(device->pointer_absolute,
						     eis_client_get_next_serial(client));
		eis_pointer_absolute_unref(steal(&device->pointer_absolute));
	}
	if (device->button) {
		eis_button_event_destroyed(device->button, eis_client_get_next_serial(client));
		eis_button_unref(steal(&device->button));
	}
	if (device->scroll) {
		eis_scroll_event_destroyed(device->scroll, eis_client_get_next_serial(client));
		eis_scroll_unref(steal(&device->scroll));
	}
	if (device->touchscreen) {
		eis_touchscreen_event_destroyed(device->touchscreen,
						eis_client_get_next_serial(client));
		eis_touchscreen_unref(steal(&device->touchscreen));
	}
	if (device->keyboard) {
		eis_keyboard_event_destroyed(device->keyboard, eis_client_get_next_serial(client));
		eis_keyboard_unref(steal(&device->keyboard));
	}
	if (device->text) {
		eis_text_event_destroyed(device->text, eis_client_get_next_serial(client));
		eis_text_unref(steal(&device->text));
	}
	if (device->swipe) {
		eis_gesture_swipe_event_destroyed(device->swipe,
						  eis_client_get_next_serial(client));
		eis_gesture_swipe_unref(steal(&device->swipe));
	}
	if (device->pinch) {
		eis_gesture_pinch_event_destroyed(device->pinch,
						  eis_client_get_next_serial(client));
		eis_gesture_pinch_unref(steal(&device->pinch));
	}
	if (device->hold) {
		eis_gesture_hold_event_destroyed(device->hold, eis_client_get_next_serial(client));
		eis_gesture_hold_unref(steal(&device->hold));
	}
	if (device->stylus) {
		eis_stylus_event_destroyed(device->stylus, eis_client_get_next_serial(client));
		eis_stylus_unref(steal(&device->stylus));
	}

	if (device->state != EIS_DEVICE_STATE_NEW)
		eis_device_event_destroyed(device, eis_client_get_next_serial(client));

	struct eis_event *event;
	list_for_each_safe(event, &device->pending_event_queue, link) {
		list_remove(&event->link);
		eis_event_unref(event);
	}

	device->state = EIS_DEVICE_STATE_DEAD;
	eis_client_unregister_object(client, &device->proto_object);
	list_remove(&device->link);
	eis_device_unref(device);
}

_public_ bool
eis_device_has_capability(struct eis_device *device, enum eis_device_capability cap)
{
	switch (cap) {
	case EIS_DEVICE_CAP_POINTER:
	case EIS_DEVICE_CAP_POINTER_ABSOLUTE:
	case EIS_DEVICE_CAP_KEYBOARD:
	case EIS_DEVICE_CAP_TOUCH:
	case EIS_DEVICE_CAP_BUTTON:
	case EIS_DEVICE_CAP_SCROLL:
	case EIS_DEVICE_CAP_TEXT:
	case EIS_DEVICE_CAP_GESTURES:
	case EIS_DEVICE_CAP_STYLUS:
		return mask_all(device->capabilities, cap);
	}
	return false;
}

static void
eis_device_frame_now(struct eis_device *device)
{
	uint64_t now = eis_now(eis_device_get_context(device));

	eis_device_frame(device, now);
}

static void
_flush_frame(struct eis_device *device, const char *func)
{
	if (device->send_frame_event) {
		log_bug_client(eis_device_get_context(device),
			       "%s: missing call to eis_device_frame()",
			       func);
		eis_device_frame_now(device);
	}
}
#define eis_device_flush_frame(d_) _flush_frame(d_, __func__)

_public_ void
eis_device_start_emulating(struct eis_device *device, uint32_t sequence)
{
	struct eis_client *client = eis_device_get_client(device);

	if (device->state != EIS_DEVICE_STATE_RESUMED)
		return;

	assert(!device->send_frame_event);

	device->state = EIS_DEVICE_STATE_EMULATING;

	eis_device_event_start_emulating(device, eis_client_get_next_serial(client), sequence);
}

_public_ void
eis_device_stop_emulating(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	eis_device_flush_frame(device);

	device->state = EIS_DEVICE_STATE_RESUMED;

	eis_device_event_stop_emulating(device, eis_client_get_next_serial(client));
}

_public_ void
eis_device_pointer_motion(struct eis_device *device, double x, double y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a pointer",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	device->send_frame_event = true;

	eis_pointer_event_motion_relative(device->pointer, x, y);
}

_public_ void
eis_device_pointer_motion_absolute(struct eis_device *device, double x, double y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_POINTER_ABSOLUTE)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not an absolute pointer",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!eis_device_in_region(device, x, y))
		return;

	device->send_frame_event = true;

	eis_pointer_absolute_event_motion_absolute(device->pointer_absolute, x, y);
}

_public_ void
eis_device_button_button(struct eis_device *device, uint32_t button, bool is_press)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_BUTTON)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a button device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	/* Ignore anything < BTN_MOUSE. Avoids the common error of sending
	 * numerical buttons instead of BTN_LEFT and friends. */
	if (button < 0x110) {
		log_bug_client(eis_device_get_context(device),
			       "%s: button code must be one of BTN_*",
			       __func__);
		return;
	}

	device->send_frame_event = true;

	eis_button_event_button(device->button, button, is_press);
}

static inline void
eis_device_resume_scrolling(struct eis_device *device, double x, double y)
{
	if (x) {
		device->scroll_state.x_is_stopped = false;
		device->scroll_state.x_is_cancelled = false;
	}
	if (y) {
		device->scroll_state.y_is_stopped = false;
		device->scroll_state.y_is_cancelled = false;
	}
}

_public_ void
eis_device_scroll_delta(struct eis_device *device, double x, double y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a scroll device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	eis_device_resume_scrolling(device, x, y);

	device->send_frame_event = true;

	eis_scroll_event_scroll(device->scroll, x, y);
}

_public_ void
eis_device_scroll_stop(struct eis_device *device, bool x, bool y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a scroll device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	/* Filter out duplicate scroll stop requests */
	if (x && !device->scroll_state.x_is_stopped)
		device->scroll_state.x_is_stopped = true;
	else
		x = false;

	if (y && !device->scroll_state.y_is_stopped)
		device->scroll_state.y_is_stopped = true;
	else
		y = false;

	if (x || y) {
		device->send_frame_event = true;
		eis_scroll_event_scroll_stop(device->scroll, x, y, false);
	}
}

_public_ void
eis_device_scroll_cancel(struct eis_device *device, bool x, bool y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a scroll device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	/* Filter out duplicate scroll cancelled requests */
	if (x && !device->scroll_state.x_is_cancelled) {
		device->scroll_state.x_is_stopped = true;
		device->scroll_state.x_is_cancelled = true;
	} else {
		x = false;
	}

	if (y && !device->scroll_state.y_is_cancelled) {
		device->scroll_state.y_is_stopped = true;
		device->scroll_state.y_is_cancelled = true;
	} else {
		y = false;
	}

	if (x || y) {
		device->send_frame_event = true;
		eis_scroll_event_scroll_stop(device->scroll, x, y, true);
	}
}

_public_ void
eis_device_scroll_discrete(struct eis_device *device, int32_t x, int32_t y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_SCROLL)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a scroll device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (abs(x) == 1 || abs(y) == 1) {
		log_bug_client(eis_device_get_context(device),
			       "%s: suspicious discrete event value 1, did you mean 120?",
			       __func__);
	}

	eis_device_resume_scrolling(device, x, y);

	device->send_frame_event = true;

	eis_scroll_event_scroll_discrete(device->scroll, x, y);
}

_public_ void
eis_device_keyboard_key(struct eis_device *device, uint32_t key, bool is_press)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_KEYBOARD)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a keyboard",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	device->send_frame_event = true;

	eis_keyboard_event_key(device->keyboard, key, is_press);
}

_public_ OBJECT_IMPLEMENT_REF(eis_touch);
_public_ OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_touch);
_public_
OBJECT_IMPLEMENT_GETTER(eis_touch, device, struct eis_device *);
_public_
OBJECT_IMPLEMENT_GETTER(eis_touch, user_data, void *);
_public_
OBJECT_IMPLEMENT_SETTER(eis_touch, user_data, void *);

static void
eis_touch_destroy(struct eis_touch *touch)
{
	if (touch->state == TOUCH_IS_DOWN)
		eis_touch_up(touch);
	/* Enforce a frame, otherwise we're just pending. If the client
	 * doesn't want this, it needs to eis_touch_up() */
	eis_device_frame_now(touch->device);
	eis_device_unref(touch->device);
}

static OBJECT_IMPLEMENT_CREATE(eis_touch);

_public_ struct eis_touch *
eis_device_touch_new(struct eis_device *device)
{
	static uint32_t tracking_id = 0;

	/* Not using the device as parent object because we need a ref
	 * to it */
	struct eis_touch *touch = eis_touch_create(NULL);

	touch->device = eis_device_ref(device);
	touch->state = TOUCH_IS_NEW;
	touch->tracking_id = ++tracking_id;

	return touch;
}

_public_ void
eis_touch_down(struct eis_touch *touch, double x, double y)
{
	struct eis_device *device = eis_touch_get_device(touch);

	if (touch->state != TOUCH_IS_NEW) {
		log_bug_client(eis_device_get_context(device),
			       "%s: touch %u already down or up",
			       __func__,
			       touch->tracking_id);
		return;
	}

	if (!eis_device_in_region(device, x, y)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: touch %u has invalid x/y coordinates",
			       __func__,
			       touch->tracking_id);
		touch->state = TOUCH_IS_UP;
		return;
	}

	touch->state = TOUCH_IS_DOWN;
	device->send_frame_event = true;

	eis_touchscreen_event_down(device->touchscreen, touch->tracking_id, x, y);
}

_public_ void
eis_touch_motion(struct eis_touch *touch, double x, double y)
{
	if (touch->state != TOUCH_IS_DOWN)
		return;

	struct eis_device *device = eis_touch_get_device(touch);
	if (!eis_device_in_region(device, x, y)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: touch %u has invalid x/y coordinates",
			       __func__,
			       touch->tracking_id);
		eis_touch_up(touch);
		return;
	}

	device->send_frame_event = true;

	eis_touchscreen_event_motion(device->touchscreen, touch->tracking_id, x, y);
}

_public_ void
eis_touch_up(struct eis_touch *touch)
{
	struct eis_device *device = eis_touch_get_device(touch);

	if (touch->state != TOUCH_IS_DOWN) {
		log_bug_client(eis_device_get_context(device),
			       "%s: touch %u is not currently down",
			       __func__,
			       touch->tracking_id);
		return;
	}

	touch->state = TOUCH_IS_UP;
	device->send_frame_event = true;

	eis_touchscreen_event_up(device->touchscreen, touch->tracking_id);
}

_public_ void
eis_touch_cancel(struct eis_touch *touch)
{
	struct eis_device *device = eis_touch_get_device(touch);

	if (touch->state != TOUCH_IS_DOWN) {
		log_bug_client(eis_device_get_context(device),
			       "%s: touch %u is not currently down",
			       __func__,
			       touch->tracking_id);
		return;
	}

	touch->state = TOUCH_IS_UP;
	device->send_frame_event = true;

	struct eis_client *client = eis_device_get_client(device);
	if (client->interface_versions.ei_touchscreen >= EIS_TOUCHSCREEN_EVENT_CANCEL_SINCE_VERSION)
		eis_touchscreen_event_cancel(device->touchscreen, touch->tracking_id);
	else
		eis_touchscreen_event_up(device->touchscreen, touch->tracking_id);
}

_public_ void
eis_device_text_keysym(struct eis_device *device, uint32_t keysym, bool is_press)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TEXT)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a text device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	device->send_frame_event = true;

	eis_text_event_keysym(device->text, keysym, is_press);
}

_public_ void
eis_device_text_utf8(struct eis_device *device, const char *utf8)
{
	eis_device_text_utf8_with_length(device, utf8, utf8 ? strlen(utf8) : 0);
}

_public_ void
eis_device_text_utf8_with_length(struct eis_device *device, const char *utf8, size_t length)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_TEXT)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a text device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!utf8) {
		log_bug_client(eis_device_get_context(device), "%s: utf8 is NULL", __func__);
		return;
	}

	if (length == 0) {
		log_bug_client(eis_device_get_context(device),
			       "%s: zero-length utf8 string",
			       __func__);
		return;
	}

	if (length > 254) {
		log_bug_client(eis_device_get_context(device),
			       "%s: utf8 string exceeds max length of 255 bytes",
			       __func__);
		return;
	}

	device->send_frame_event = true;

	char buf[255] = { 0 };
	memcpy(buf, utf8, length);
	eis_text_event_utf8(device->text, buf);
}

_public_ void
eis_device_frame(struct eis_device *device, uint64_t time)
{
	struct eis_client *client = eis_device_get_client(device);

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->send_frame_event)
		return;

	device->send_frame_event = false;

	eis_device_event_frame(device, eis_client_get_next_serial(client), time);
}

void
eis_device_closed_by_client(struct eis_device *device)
{
	switch (device->state) {
	case EIS_DEVICE_STATE_DEAD:
	case EIS_DEVICE_STATE_CLOSED_BY_CLIENT:
		/* libei bug, ignore */
		break;
	case EIS_DEVICE_STATE_EMULATING:
		if (!eis_client_is_sender(eis_device_get_client(device)))
			eis_queue_device_stop_emulating_event(device);
		_fallthrough_;
	case EIS_DEVICE_STATE_AWAITING_READY:
		eis_queue_device_ready_event(device);
		_fallthrough_;
	case EIS_DEVICE_STATE_NEW:
	case EIS_DEVICE_STATE_PAUSED:
	case EIS_DEVICE_STATE_RESUMED:
		eis_queue_device_closed_event(device);
		device->state = EIS_DEVICE_STATE_CLOSED_BY_CLIENT;
		break;
	}
}

_public_ void
eis_device_pause(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	switch (device->state) {
	case EIS_DEVICE_STATE_RESUMED:
	case EIS_DEVICE_STATE_EMULATING:
		break;
	default:
		return;
	}

	device->state = EIS_DEVICE_STATE_PAUSED;
	eis_device_event_paused(device, eis_client_get_next_serial(client));

	memset(device->key_button_state.down, 0, sizeof(device->key_button_state.down));

	for (size_t i = 0; i < ARRAY_LENGTH(device->touch_state.down); i++) {
		device->touch_state.down[i] = UINT64_MAX;
	}
	device->gesture_state.swipe.is_active = false;
	device->gesture_state.swipe.needs_frame = false;
	device->gesture_state.pinch.is_active = false;
	device->gesture_state.pinch.needs_frame = false;
	device->gesture_state.hold.is_active = false;
	device->gesture_state.hold.needs_frame = false;
	device->stylus_state.in_proximity = false;
	device->stylus_state.tip_is_down = false;
	device->stylus_state.is_erasing = false;
	device->stylus_state.x = 0;
	device->stylus_state.y = 0;
	device->stylus_state.pressure = 0;
	device->stylus_state.distance = 0;
	device->stylus_state.tilt_x = 0;
	device->stylus_state.tilt_y = 0;
	device->stylus_state.rotation = 0;
	device->stylus_state.flow = 0;
	device->stylus_state.pending_events = bitmask_new();
}

_public_ void
eis_device_resume(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (device->state == EIS_DEVICE_STATE_AWAITING_READY) {
		log_bug_client(eis_client_get_context(client),
			       "Attempting to resume a device before DEVICE_READY");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_PAUSED)
		return;

	device->state = EIS_DEVICE_STATE_RESUMED;
	eis_device_event_resumed(device, eis_client_get_next_serial(client));
}

_public_ void
eis_device_keyboard_send_xkb_modifiers(struct eis_device *device,
				       uint32_t depressed,
				       uint32_t latched,
				       uint32_t locked,
				       uint32_t group)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_KEYBOARD)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a keyboard",
			       __func__);
		return;
	}

	eis_keyboard_event_modifiers(device->keyboard,
				     eis_client_get_next_serial(eis_device_get_client(device)),
				     depressed,
				     locked,
				     latched,
				     group);
}

_public_ void
eis_device_configure_stylus_capability(struct eis_device *device, enum eis_stylus_capability cap)
{
	auto client = eis_device_get_client(device);

	if (device->state != EIS_DEVICE_STATE_NEW)
		return;

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	switch (cap) {
	case EIS_STYLUS_CAP_ERASE:
	case EIS_STYLUS_CAP_PRESSURE:
	case EIS_STYLUS_CAP_DISTANCE:
	case EIS_STYLUS_CAP_TILT:
	case EIS_STYLUS_CAP_ROTATION:
	case EIS_STYLUS_CAP_AIRBRUSH_FLOW:
		bitmask_set_flag(&device->stylus_state.capabilities, cap);
		if (!eis_client_is_sender(client))
			bitmask_set_flag(&device->stylus_state.bound_capabilities, cap);
		return;
	}

	log_bug_client(eis_device_get_context(device),
		       "%s: invalid stylus capability %u",
		       __func__,
		       cap);
}

_public_ void
eis_device_stylus_proximity_in(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_proximity_in(device->stylus);
}

_public_ void
eis_device_stylus_proximity_out(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_proximity_out(device->stylus);
}

_public_ void
eis_device_stylus_erase_start(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_ERASE)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: erase capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_erase_start(device->stylus);
}

_public_ void
eis_device_stylus_erase_stop(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_ERASE)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: erase capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_erase_stop(device->stylus);
}

_public_ void
eis_device_stylus_tip_down(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_tip_down(device->stylus);
}

_public_ void
eis_device_stylus_tip_up(struct eis_device *device)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_tip_up(device->stylus);
}

_public_ void
eis_device_stylus_motion(struct eis_device *device, double x, double y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!eis_device_in_region(device, x, y))
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_motion(device->stylus, x, y);
}

_public_ void
eis_device_stylus_pressure(struct eis_device *device, double pressure)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_PRESSURE)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: pressure capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_pressure(device->stylus, pressure);
}

_public_ void
eis_device_stylus_distance(struct eis_device *device, double distance)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_DISTANCE)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: distance capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_distance(device->stylus, distance);
}

_public_ void
eis_device_stylus_tilt(struct eis_device *device, double tilt_x, double tilt_y)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_TILT)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: tilt capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_tilt(device->stylus, tilt_x, tilt_y);
}

_public_ void
eis_device_stylus_rotation(struct eis_device *device, double rotation)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_ROTATION)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: rotation capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_rotation(device->stylus, rotation);
}

_public_ void
eis_device_stylus_airbrush_flow(struct eis_device *device, double flow)
{
	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_STYLUS)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a stylus device",
			       __func__);
		return;
	}

	if (!bitmask_flag_is_set(device->stylus_state.capabilities, EIS_STYLUS_CAP_AIRBRUSH_FLOW)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: airbrush_flow capability not configured",
			       __func__);
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING)
		return;

	if (!device->stylus)
		return;

	device->send_frame_event = true;

	eis_stylus_event_airbrush_flow(device->stylus, flow);
}
