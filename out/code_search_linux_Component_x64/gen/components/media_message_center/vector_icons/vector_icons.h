// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// vector_icons.h.template is used to generate vector_icons.h. Edit the former
// rather than the latter.

#ifndef COMPONENTS_MEDIA_MESSAGE_CENTER_VECTOR_ICONS_H_
#define COMPONENTS_MEDIA_MESSAGE_CENTER_VECTOR_ICONS_H_

namespace gfx {
struct VectorIcon;
}

namespace media_message_center {

#define VECTOR_ICON_TEMPLATE_H(icon_name) \
extern const gfx::VectorIcon icon_name;

VECTOR_ICON_TEMPLATE_H(kCastIcon)
VECTOR_ICON_TEMPLATE_H(kChevronRightIcon)
VECTOR_ICON_TEMPLATE_H(kChevronRightOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaCastStartOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaCastStopOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaEnterPipOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaExitPipOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaNextTrackOldIcon)
VECTOR_ICON_TEMPLATE_H(kMediaPreviousTrackOldIcon)
VECTOR_ICON_TEMPLATE_H(kPauseFilledIcon)
VECTOR_ICON_TEMPLATE_H(kPauseOldIcon)
VECTOR_ICON_TEMPLATE_H(kPipIcon)
VECTOR_ICON_TEMPLATE_H(kPipExitIcon)
VECTOR_ICON_TEMPLATE_H(kPlayArrowFilledIcon)
VECTOR_ICON_TEMPLATE_H(kPlayArrowOldIcon)
VECTOR_ICON_TEMPLATE_H(kSkipNextFilledIcon)
VECTOR_ICON_TEMPLATE_H(kSkipPreviousFilledIcon)
VECTOR_ICON_TEMPLATE_H(kStopCircleIcon)

#undef VECTOR_ICON_TEMPLATE_H

}

#endif  // COMPONENTS_MEDIA_MESSAGE_CENTER_VECTOR_ICONS_H_
