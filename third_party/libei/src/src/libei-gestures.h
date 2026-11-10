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

#pragma once

#include "util-list.h"
#include "util-object.h"

#include "brei-shared.h"

struct ei;
struct ei_device;

struct ei_gesture_swipe {
	struct object object;
	struct brei_object proto_object;
};

OBJECT_DECLARE_GETTER(ei_gesture_swipe, context, struct ei *);
OBJECT_DECLARE_GETTER(ei_gesture_swipe, device, struct ei_device *);
OBJECT_DECLARE_GETTER(ei_gesture_swipe, proto_object, const struct brei_object *);
OBJECT_DECLARE_GETTER(ei_gesture_swipe, interface, const struct ei_gesture_swipe_interface *);
OBJECT_DECLARE_REF(ei_gesture_swipe);
OBJECT_DECLARE_UNREF(ei_gesture_swipe);

struct ei_gesture_swipe *
ei_gesture_swipe_new(struct ei_device *device, object_id_t id, uint32_t version);

struct ei_gesture_pinch {
	struct object object;
	struct brei_object proto_object;
};

OBJECT_DECLARE_GETTER(ei_gesture_pinch, context, struct ei *);
OBJECT_DECLARE_GETTER(ei_gesture_pinch, device, struct ei_device *);
OBJECT_DECLARE_GETTER(ei_gesture_pinch, proto_object, const struct brei_object *);
OBJECT_DECLARE_GETTER(ei_gesture_pinch, interface, const struct ei_gesture_pinch_interface *);
OBJECT_DECLARE_REF(ei_gesture_pinch);
OBJECT_DECLARE_UNREF(ei_gesture_pinch);

struct ei_gesture_pinch *
ei_gesture_pinch_new(struct ei_device *device, object_id_t id, uint32_t version);

struct ei_gesture_hold {
	struct object object;
	struct brei_object proto_object;
};

OBJECT_DECLARE_GETTER(ei_gesture_hold, context, struct ei *);
OBJECT_DECLARE_GETTER(ei_gesture_hold, device, struct ei_device *);
OBJECT_DECLARE_GETTER(ei_gesture_hold, proto_object, const struct brei_object *);
OBJECT_DECLARE_GETTER(ei_gesture_hold, interface, const struct ei_gesture_hold_interface *);
OBJECT_DECLARE_REF(ei_gesture_hold);
OBJECT_DECLARE_UNREF(ei_gesture_hold);

struct ei_gesture_hold *
ei_gesture_hold_new(struct ei_device *device, object_id_t id, uint32_t version);
