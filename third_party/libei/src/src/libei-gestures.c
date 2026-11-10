/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2024 Red Hat, Inc.
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
#include <stdbool.h>

#include "util-bits.h"
#include "util-io.h"
#include "util-macros.h"
#include "util-mem.h"
#include "util-strings.h"
#include "util-version.h"

#include "ei-proto.h"
#include "libei-private.h"

static void
ei_gesture_swipe_destroy(struct ei_gesture_swipe *swipe)
{
	struct ei *ei = ei_gesture_swipe_get_context(swipe);
	ei_unregister_object(ei, &swipe->proto_object);
}

OBJECT_IMPLEMENT_REF(ei_gesture_swipe);
OBJECT_IMPLEMENT_UNREF_CLEANUP(ei_gesture_swipe);

static OBJECT_IMPLEMENT_CREATE(ei_gesture_swipe);
static OBJECT_IMPLEMENT_PARENT(ei_gesture_swipe, ei_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(ei_gesture_swipe, proto_object, const struct brei_object *);

struct ei_device *
ei_gesture_swipe_get_device(struct ei_gesture_swipe *swipe)
{
	return ei_gesture_swipe_parent(swipe);
}

struct ei *
ei_gesture_swipe_get_context(struct ei_gesture_swipe *swipe)
{
	return ei_device_get_context(ei_gesture_swipe_get_device(swipe));
}

const struct ei_gesture_swipe_interface *
ei_gesture_swipe_get_interface(struct ei_gesture_swipe *swipe)
{
	struct ei_device *device = ei_gesture_swipe_get_device(swipe);
	return ei_device_get_gesture_swipe_interface(device);
}

struct ei_gesture_swipe *
ei_gesture_swipe_new(struct ei_device *device, object_id_t id, uint32_t version)
{
	struct ei_gesture_swipe *swipe = ei_gesture_swipe_create(&device->object);
	struct ei *ei = ei_device_get_context(device);

	swipe->proto_object.id = id;
	swipe->proto_object.implementation = swipe;
	swipe->proto_object.interface = &ei_gesture_swipe_proto_interface;
	swipe->proto_object.version = version;
	ei_register_object(ei, &swipe->proto_object);

	return swipe; /* ref owned by caller */
}

static void
ei_gesture_pinch_destroy(struct ei_gesture_pinch *pinch)
{
	struct ei *ei = ei_gesture_pinch_get_context(pinch);
	ei_unregister_object(ei, &pinch->proto_object);
}

OBJECT_IMPLEMENT_REF(ei_gesture_pinch);
OBJECT_IMPLEMENT_UNREF_CLEANUP(ei_gesture_pinch);

static OBJECT_IMPLEMENT_CREATE(ei_gesture_pinch);
static OBJECT_IMPLEMENT_PARENT(ei_gesture_pinch, ei_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(ei_gesture_pinch, proto_object, const struct brei_object *);

struct ei_device *
ei_gesture_pinch_get_device(struct ei_gesture_pinch *pinch)
{
	return ei_gesture_pinch_parent(pinch);
}

struct ei *
ei_gesture_pinch_get_context(struct ei_gesture_pinch *pinch)
{
	return ei_device_get_context(ei_gesture_pinch_get_device(pinch));
}

const struct ei_gesture_pinch_interface *
ei_gesture_pinch_get_interface(struct ei_gesture_pinch *pinch)
{
	struct ei_device *device = ei_gesture_pinch_get_device(pinch);
	return ei_device_get_gesture_pinch_interface(device);
}

struct ei_gesture_pinch *
ei_gesture_pinch_new(struct ei_device *device, object_id_t id, uint32_t version)
{
	struct ei_gesture_pinch *pinch = ei_gesture_pinch_create(&device->object);
	struct ei *ei = ei_device_get_context(device);

	pinch->proto_object.id = id;
	pinch->proto_object.implementation = pinch;
	pinch->proto_object.interface = &ei_gesture_pinch_proto_interface;
	pinch->proto_object.version = version;
	ei_register_object(ei, &pinch->proto_object);

	return pinch; /* ref owned by caller */
}

static void
ei_gesture_hold_destroy(struct ei_gesture_hold *hold)
{
	struct ei *ei = ei_gesture_hold_get_context(hold);
	ei_unregister_object(ei, &hold->proto_object);
}

OBJECT_IMPLEMENT_REF(ei_gesture_hold);
OBJECT_IMPLEMENT_UNREF_CLEANUP(ei_gesture_hold);

static OBJECT_IMPLEMENT_CREATE(ei_gesture_hold);
static OBJECT_IMPLEMENT_PARENT(ei_gesture_hold, ei_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(ei_gesture_hold, proto_object, const struct brei_object *);

struct ei_device *
ei_gesture_hold_get_device(struct ei_gesture_hold *hold)
{
	return ei_gesture_hold_parent(hold);
}

struct ei *
ei_gesture_hold_get_context(struct ei_gesture_hold *hold)
{
	return ei_device_get_context(ei_gesture_hold_get_device(hold));
}

const struct ei_gesture_hold_interface *
ei_gesture_hold_get_interface(struct ei_gesture_hold *hold)
{
	struct ei_device *device = ei_gesture_hold_get_device(hold);
	return ei_device_get_gesture_hold_interface(device);
}

struct ei_gesture_hold *
ei_gesture_hold_new(struct ei_device *device, object_id_t id, uint32_t version)
{
	struct ei_gesture_hold *hold = ei_gesture_hold_create(&device->object);
	struct ei *ei = ei_device_get_context(device);

	hold->proto_object.id = id;
	hold->proto_object.implementation = hold;
	hold->proto_object.interface = &ei_gesture_hold_proto_interface;
	hold->proto_object.version = version;
	ei_register_object(ei, &hold->proto_object);

	return hold; /* ref owned by caller */
}

static bool
ei_device_accept_gesture(struct ei_device *device)
{
	switch (device->state) {
	case EI_DEVICE_STATE_NEW:
		break; /* unreachable */
	case EI_DEVICE_STATE_PAUSED:
		break;
	case EI_DEVICE_STATE_RESUMED:
		log_bug_client(ei_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		break;
	case EI_DEVICE_STATE_EMULATING:
		return true;
	case EI_DEVICE_STATE_REMOVED_FROM_CLIENT:
	case EI_DEVICE_STATE_REMOVED_FROM_SERVER:
	case EI_DEVICE_STATE_DEAD:
		break;
	}
	return false;
}

_public_ void
ei_device_swipe_begin(struct ei_device *device, uint32_t nfingers)
{
	struct ei *ei = ei_device_get_context(device);

	if (!ei_device_has_capability(device, EI_DEVICE_CAP_GESTURES)) {
		log_bug_client(ei, "%s: device is not a gesture device", __func__);
		return;
	}

	if (device->gesture_state.swipe.is_active) {
		log_bug_client(ei, "a swipe gesture is already in progress, ignoring");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	if (nfingers == 0 || nfingers > 5) {
		log_bug_client(ei, "invalid finger count %u, must be between 1 and 5", nfingers);
		return;
	}

	device->gesture_state.swipe.is_active = true;
	device->gesture_state.swipe.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = ei_gesture_swipe_request_begin(device->swipe, nfingers);
	if (rc)
		ei_disconnect(ei);
}

_public_ void
ei_device_swipe_update(struct ei_device *device, double dx, double dy)
{
	struct ei *ei = ei_device_get_context(device);

	if (!device->gesture_state.swipe.is_active) {
		log_bug_client(ei, "no swipe gesture in progress for update");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	device->send_frame_event = true;

	int rc = ei_gesture_swipe_request_update(device->swipe, dx, dy);
	if (rc)
		ei_disconnect(ei);
}

static void
ei_device_swipe_end_cancel(struct ei_device *device, bool is_cancel)
{
	struct ei *ei = ei_device_get_context(device);

	if (!device->gesture_state.swipe.is_active) {
		log_bug_client(ei, "no swipe gesture in progress for end/cancel");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	device->gesture_state.swipe.is_active = false;
	device->send_frame_event = true;

	int rc = ei_gesture_swipe_request_end(device->swipe, is_cancel);
	if (rc)
		ei_disconnect(ei);
}

_public_ void
ei_device_swipe_end(struct ei_device *device)
{
	ei_device_swipe_end_cancel(device, false);
}

_public_ void
ei_device_swipe_cancel(struct ei_device *device)
{
	ei_device_swipe_end_cancel(device, true);
}

_public_ void
ei_device_pinch_begin(struct ei_device *device, uint32_t nfingers)
{
	struct ei *ei = ei_device_get_context(device);

	if (!ei_device_has_capability(device, EI_DEVICE_CAP_GESTURES)) {
		log_bug_client(ei, "%s: device is not a gesture device", __func__);
		return;
	}

	if (device->gesture_state.pinch.is_active) {
		log_bug_client(ei, "a pinch gesture is already in progress, ignoring");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	if (nfingers < 2 || nfingers > 5) {
		log_bug_client(ei,
			       "invalid finger count %u for pinch, must be between 2 and 5",
			       nfingers);
		return;
	}

	device->gesture_state.pinch.is_active = true;
	device->gesture_state.pinch.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = ei_gesture_pinch_request_begin(device->pinch, nfingers);
	if (rc)
		ei_disconnect(ei);
}

_public_ void
ei_device_pinch_update(struct ei_device *device,
		       double dx,
		       double dy,
		       double scale,
		       double rotation)
{
	struct ei *ei = ei_device_get_context(device);

	if (!device->gesture_state.pinch.is_active) {
		log_bug_client(ei, "no pinch gesture in progress for update");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	device->send_frame_event = true;

	int rc = ei_gesture_pinch_request_update(device->pinch, dx, dy, scale, rotation);
	if (rc)
		ei_disconnect(ei);
}

static void
ei_device_pinch_end_cancel(struct ei_device *device, bool is_cancel)
{
	struct ei *ei = ei_device_get_context(device);

	if (!device->gesture_state.pinch.is_active) {
		log_bug_client(ei, "no pinch gesture in progress for end/cancel");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	device->gesture_state.pinch.is_active = false;
	device->send_frame_event = true;

	int rc = ei_gesture_pinch_request_end(device->pinch, is_cancel);
	if (rc)
		ei_disconnect(ei);
}

_public_ void
ei_device_pinch_end(struct ei_device *device)
{
	ei_device_pinch_end_cancel(device, false);
}

_public_ void
ei_device_pinch_cancel(struct ei_device *device)
{
	ei_device_pinch_end_cancel(device, true);
}

_public_ void
ei_device_hold_begin(struct ei_device *device, uint32_t nfingers)
{
	struct ei *ei = ei_device_get_context(device);

	if (!ei_device_has_capability(device, EI_DEVICE_CAP_GESTURES)) {
		log_bug_client(ei, "%s: device is not a gesture device", __func__);
		return;
	}

	if (device->gesture_state.hold.is_active) {
		log_bug_client(ei, "a hold gesture is already in progress, ignoring");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->hold)
		return;

	if (nfingers == 0 || nfingers > 5) {
		log_bug_client(ei, "invalid finger count %u, must be between 1 and 5", nfingers);
		return;
	}

	device->gesture_state.hold.is_active = true;
	device->gesture_state.hold.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = ei_gesture_hold_request_begin(device->hold, nfingers);
	if (rc)
		ei_disconnect(ei);
}

static void
ei_device_hold_end_cancel(struct ei_device *device, bool is_cancel)
{
	struct ei *ei = ei_device_get_context(device);

	if (!device->gesture_state.hold.is_active) {
		log_bug_client(ei, "no hold gesture in progress for end/cancel");
		return;
	}

	if (!ei_device_accept_gesture(device))
		return;

	if (ei->state == EI_STATE_NEW || ei->state == EI_STATE_DISCONNECTED)
		return;

	if (!device->hold)
		return;

	device->gesture_state.hold.is_active = false;
	device->send_frame_event = true;

	int rc = ei_gesture_hold_request_end(device->hold, is_cancel);
	if (rc)
		ei_disconnect(ei);
}

_public_ void
ei_device_hold_end(struct ei_device *device)
{
	ei_device_hold_end_cancel(device, false);
}

_public_ void
ei_device_hold_cancel(struct ei_device *device)
{
	ei_device_hold_end_cancel(device, true);
}
