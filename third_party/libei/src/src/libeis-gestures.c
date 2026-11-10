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

#include "eis-proto.h"
#include "libeis-client.h"
#include "libeis-gestures.h"
#include "libeis-private.h"

static void
eis_gesture_swipe_destroy(struct eis_gesture_swipe *swipe)
{
	struct eis_client *client = eis_gesture_swipe_get_client(swipe);
	eis_client_unregister_object(client, &swipe->proto_object);
}

OBJECT_IMPLEMENT_REF(eis_gesture_swipe);
OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_gesture_swipe);

static OBJECT_IMPLEMENT_CREATE(eis_gesture_swipe);
static OBJECT_IMPLEMENT_PARENT(eis_gesture_swipe, eis_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(eis_gesture_swipe, proto_object, const struct brei_object *);

uint32_t
eis_gesture_swipe_get_version(struct eis_gesture_swipe *swipe)
{
	return swipe->proto_object.version;
}

object_id_t
eis_gesture_swipe_get_id(struct eis_gesture_swipe *swipe)
{
	return swipe->proto_object.id;
}

struct eis_device *
eis_gesture_swipe_get_device(struct eis_gesture_swipe *swipe)
{
	return eis_gesture_swipe_parent(swipe);
}

struct eis_client *
eis_gesture_swipe_get_client(struct eis_gesture_swipe *swipe)
{
	return eis_device_get_client(eis_gesture_swipe_get_device(swipe));
}

struct eis *
eis_gesture_swipe_get_context(struct eis_gesture_swipe *swipe)
{
	return eis_device_get_context(eis_gesture_swipe_get_device(swipe));
}

const struct eis_gesture_swipe_interface *
eis_gesture_swipe_get_interface(struct eis_gesture_swipe *swipe)
{
	struct eis_device *device = eis_gesture_swipe_get_device(swipe);
	return eis_device_get_gesture_swipe_interface(device);
}

struct eis_gesture_swipe *
eis_gesture_swipe_new(struct eis_device *device)
{
	struct eis_gesture_swipe *swipe = eis_gesture_swipe_create(&device->object);
	struct eis_client *client = eis_device_get_client(device);

	swipe->proto_object.id = eis_client_get_new_id(client);
	swipe->proto_object.implementation = swipe;
	swipe->proto_object.interface = &eis_gesture_swipe_proto_interface;
	swipe->proto_object.version = client->interface_versions.ei_gesture_swipe;
	eis_client_register_object(client, &swipe->proto_object);

	return swipe; /* ref owned by caller */
}

static void
eis_gesture_pinch_destroy(struct eis_gesture_pinch *pinch)
{
	struct eis_client *client = eis_gesture_pinch_get_client(pinch);
	eis_client_unregister_object(client, &pinch->proto_object);
}

OBJECT_IMPLEMENT_REF(eis_gesture_pinch);
OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_gesture_pinch);

static OBJECT_IMPLEMENT_CREATE(eis_gesture_pinch);
static OBJECT_IMPLEMENT_PARENT(eis_gesture_pinch, eis_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(eis_gesture_pinch, proto_object, const struct brei_object *);

uint32_t
eis_gesture_pinch_get_version(struct eis_gesture_pinch *pinch)
{
	return pinch->proto_object.version;
}

object_id_t
eis_gesture_pinch_get_id(struct eis_gesture_pinch *pinch)
{
	return pinch->proto_object.id;
}

struct eis_device *
eis_gesture_pinch_get_device(struct eis_gesture_pinch *pinch)
{
	return eis_gesture_pinch_parent(pinch);
}

struct eis_client *
eis_gesture_pinch_get_client(struct eis_gesture_pinch *pinch)
{
	return eis_device_get_client(eis_gesture_pinch_get_device(pinch));
}

struct eis *
eis_gesture_pinch_get_context(struct eis_gesture_pinch *pinch)
{
	return eis_device_get_context(eis_gesture_pinch_get_device(pinch));
}

const struct eis_gesture_pinch_interface *
eis_gesture_pinch_get_interface(struct eis_gesture_pinch *pinch)
{
	struct eis_device *device = eis_gesture_pinch_get_device(pinch);
	return eis_device_get_gesture_pinch_interface(device);
}

struct eis_gesture_pinch *
eis_gesture_pinch_new(struct eis_device *device)
{
	struct eis_gesture_pinch *pinch = eis_gesture_pinch_create(&device->object);
	struct eis_client *client = eis_device_get_client(device);

	pinch->proto_object.id = eis_client_get_new_id(client);
	pinch->proto_object.implementation = pinch;
	pinch->proto_object.interface = &eis_gesture_pinch_proto_interface;
	pinch->proto_object.version = client->interface_versions.ei_gesture_pinch;
	eis_client_register_object(client, &pinch->proto_object);

	return pinch; /* ref owned by caller */
}

static void
eis_gesture_hold_destroy(struct eis_gesture_hold *hold)
{
	struct eis_client *client = eis_gesture_hold_get_client(hold);
	eis_client_unregister_object(client, &hold->proto_object);
}

OBJECT_IMPLEMENT_REF(eis_gesture_hold);
OBJECT_IMPLEMENT_UNREF_CLEANUP(eis_gesture_hold);

static OBJECT_IMPLEMENT_CREATE(eis_gesture_hold);
static OBJECT_IMPLEMENT_PARENT(eis_gesture_hold, eis_device);
OBJECT_IMPLEMENT_GETTER_AS_REF(eis_gesture_hold, proto_object, const struct brei_object *);

uint32_t
eis_gesture_hold_get_version(struct eis_gesture_hold *hold)
{
	return hold->proto_object.version;
}

object_id_t
eis_gesture_hold_get_id(struct eis_gesture_hold *hold)
{
	return hold->proto_object.id;
}

struct eis_device *
eis_gesture_hold_get_device(struct eis_gesture_hold *hold)
{
	return eis_gesture_hold_parent(hold);
}

struct eis_client *
eis_gesture_hold_get_client(struct eis_gesture_hold *hold)
{
	return eis_device_get_client(eis_gesture_hold_get_device(hold));
}

struct eis *
eis_gesture_hold_get_context(struct eis_gesture_hold *hold)
{
	return eis_device_get_context(eis_gesture_hold_get_device(hold));
}

const struct eis_gesture_hold_interface *
eis_gesture_hold_get_interface(struct eis_gesture_hold *hold)
{
	struct eis_device *device = eis_gesture_hold_get_device(hold);
	return eis_device_get_gesture_hold_interface(device);
}

struct eis_gesture_hold *
eis_gesture_hold_new(struct eis_device *device)
{
	struct eis_gesture_hold *hold = eis_gesture_hold_create(&device->object);
	struct eis_client *client = eis_device_get_client(device);

	hold->proto_object.id = eis_client_get_new_id(client);
	hold->proto_object.implementation = hold;
	hold->proto_object.interface = &eis_gesture_hold_proto_interface;
	hold->proto_object.version = client->interface_versions.ei_gesture_hold;
	eis_client_register_object(client, &hold->proto_object);

	return hold; /* ref owned by caller */
}

_public_ void
eis_device_swipe_begin(struct eis_device *device, uint32_t nfingers)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (device->gesture_state.swipe.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "a swipe gesture is already in progress, ignoring");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	if (nfingers == 0 || nfingers > 5) {
		log_bug_client(eis_device_get_context(device),
			       "invalid finger count %u, must be between 1 and 5",
			       nfingers);
		return;
	}

	device->gesture_state.swipe.is_active = true;
	device->gesture_state.swipe.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = eis_gesture_swipe_event_begin(device->swipe, nfingers);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_swipe_update(struct eis_device *device, double dx, double dy)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!device->gesture_state.swipe.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "no swipe gesture in progress for update");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	device->send_frame_event = true;

	int rc = eis_gesture_swipe_event_update(device->swipe, dx, dy);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_swipe_end(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!device->gesture_state.swipe.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "no swipe gesture in progress for end");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->swipe)
		return;

	device->gesture_state.swipe.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_swipe_event_end(device->swipe, false);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_swipe_cancel(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!device->swipe)
		return;

	if (!device->gesture_state.swipe.is_active)
		return;

	device->gesture_state.swipe.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_swipe_event_end(device->swipe, true);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_swipe_abort(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!eis_client_is_sender(client)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: abort is only available for sender clients",
			       __func__);
		return;
	}

	if (!device->swipe)
		return;

	if (!device->gesture_state.swipe.is_active)
		return;

	device->gesture_state.swipe.is_active = false;

	eis_gesture_swipe_event_aborted(device->swipe, eis_client_get_next_serial(client));
}

_public_ void
eis_device_pinch_begin(struct eis_device *device, uint32_t nfingers)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (device->gesture_state.pinch.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "a pinch gesture is already in progress, ignoring");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	if (nfingers < 2 || nfingers > 5) {
		log_bug_client(eis_device_get_context(device),
			       "invalid finger count %u for pinch, must be between 2 and 5",
			       nfingers);
		return;
	}

	device->gesture_state.pinch.is_active = true;
	device->gesture_state.pinch.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = eis_gesture_pinch_event_begin(device->pinch, nfingers);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_pinch_update(struct eis_device *device,
			double dx,
			double dy,
			double scale,
			double rotation)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!device->gesture_state.pinch.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "no pinch gesture in progress for update");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	device->send_frame_event = true;

	int rc = eis_gesture_pinch_event_update(device->pinch, dx, dy, scale, rotation);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_pinch_end(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!device->gesture_state.pinch.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "no pinch gesture in progress for end");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->pinch)
		return;

	device->gesture_state.pinch.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_pinch_event_end(device->pinch, false);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_pinch_cancel(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!device->pinch)
		return;

	if (!device->gesture_state.pinch.is_active)
		return;

	device->gesture_state.pinch.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_pinch_event_end(device->pinch, true);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_pinch_abort(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!eis_client_is_sender(client)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: abort is only available for sender clients",
			       __func__);
		return;
	}

	if (!device->pinch)
		return;

	if (!device->gesture_state.pinch.is_active)
		return;

	device->gesture_state.pinch.is_active = false;

	eis_gesture_pinch_event_aborted(device->pinch, eis_client_get_next_serial(client));
}

_public_ void
eis_device_hold_begin(struct eis_device *device, uint32_t nfingers)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (device->gesture_state.hold.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "a hold gesture is already in progress, ignoring");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->hold)
		return;

	if (nfingers == 0 || nfingers > 5) {
		log_bug_client(eis_device_get_context(device),
			       "invalid finger count %u, must be between 1 and 5",
			       nfingers);
		return;
	}

	device->gesture_state.hold.is_active = true;
	device->gesture_state.hold.nfingers = nfingers;
	device->send_frame_event = true;

	int rc = eis_gesture_hold_event_begin(device->hold, nfingers);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_hold_end(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!device->gesture_state.hold.is_active) {
		log_bug_client(eis_device_get_context(device),
			       "no hold gesture in progress for end");
		return;
	}

	if (device->state != EIS_DEVICE_STATE_EMULATING) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not emulating",
			       __func__);
		return;
	}

	if (client->state == EIS_CLIENT_STATE_NEW || client->state == EIS_CLIENT_STATE_DISCONNECTED)
		return;

	if (!device->hold)
		return;

	device->gesture_state.hold.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_hold_event_end(device->hold, false);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_hold_cancel(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!device->hold)
		return;

	if (!device->gesture_state.hold.is_active)
		return;

	device->gesture_state.hold.is_active = false;
	device->send_frame_event = true;

	int rc = eis_gesture_hold_event_end(device->hold, true);
	if (rc)
		eis_client_disconnect(client);
}

_public_ void
eis_device_hold_abort(struct eis_device *device)
{
	struct eis_client *client = eis_device_get_client(device);

	if (!eis_device_has_capability(device, EIS_DEVICE_CAP_GESTURES)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: device is not a gesture device",
			       __func__);
		return;
	}

	if (!eis_client_is_sender(client)) {
		log_bug_client(eis_device_get_context(device),
			       "%s: abort is only available for sender clients",
			       __func__);
		return;
	}

	if (!device->hold)
		return;

	if (!device->gesture_state.hold.is_active)
		return;

	device->gesture_state.hold.is_active = false;

	eis_gesture_hold_event_aborted(device->hold, eis_client_get_next_serial(client));
}
