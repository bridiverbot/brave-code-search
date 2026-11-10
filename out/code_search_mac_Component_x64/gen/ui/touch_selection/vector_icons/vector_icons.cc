// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// vector_icons.cc.template is used to generate vector_icons.cc. Edit the former
// rather than the latter.

#include "ui/touch_selection/vector_icons/vector_icons.h"

#include "components/vector_icons/cc_macros.h"
#include "ui/gfx/animation/tween.h"
#include "ui/gfx/vector_icon_types.h"

#define DECLARE_VECTOR_COMMAND(x) using gfx::x;
DECLARE_VECTOR_COMMANDS

namespace ui {

VECTOR_ICON_REP_TEMPLATE(kTextSelectionHandleCenterCustomPath, CANVAS_DIMENSIONS, 39,
MOVE_TO, 8.19, 33.94,
R_CUBIC_TO, 6.25, 6.25, 16.38, 6.25, 22.63, 0,
R_CUBIC_TO, 6.25, -6.25, 6.25, -16.38, 0, -22.63,
R_LINE_TO, 0, 0,
LINE_TO, 19.5, 0,
LINE_TO, 8.19, 11.31,
R_LINE_TO, 0, 0,
R_CUBIC_TO, -6.25, 6.25, -6.25, 16.38, 0, 22.63,
CLOSE)
VECTOR_ICON_TEMPLATE_CC(kTextSelectionHandleCenterCustomRepList, kTextSelectionHandleCenterCustomIcon, {kTextSelectionHandleCenterCustomPath})
VECTOR_ICON_REP_TEMPLATE(kTextSelectionHandleLeftCustomPath, CANVAS_DIMENSIONS, 32,
MOVE_TO, 0, 16,
R_CUBIC_TO, 0, 8.84, 7.16, 16, 16, 16,
R_CUBIC_TO, 8.84, 0, 16, -7.16, 16, -16,
V_LINE_TO, 0,
H_LINE_TO, 16,
CUBIC_TO, 7.16, 0, 0, 7.16, 0, 16,
CLOSE)
VECTOR_ICON_TEMPLATE_CC(kTextSelectionHandleLeftCustomRepList, kTextSelectionHandleLeftCustomIcon, {kTextSelectionHandleLeftCustomPath})
VECTOR_ICON_REP_TEMPLATE(kTextSelectionHandleRightCustomPath, CANVAS_DIMENSIONS, 32,
MOVE_TO, 32, 16,
R_CUBIC_TO, 0, 8.84, -7.16, 16, -16, 16,
CUBIC_TO_SHORTHAND, 0, 24.84, 0, 16,
V_LINE_TO, 0,
R_H_LINE_TO, 16,
R_CUBIC_TO, 8.84, 0, 16, 7.16, 16, 16,
CLOSE)
VECTOR_ICON_TEMPLATE_CC(kTextSelectionHandleRightCustomRepList, kTextSelectionHandleRightCustomIcon, {kTextSelectionHandleRightCustomPath})

}  // namespace ui
