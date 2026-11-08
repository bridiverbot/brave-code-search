// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.h.tmpl
// and input files:
//   gen/third_party/blink/renderer/core/event_interface_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_EVENT_INTERFACE_NAMES_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_EVENT_INTERFACE_NAMES_H_

#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/core/core_export.h"

namespace blink {
namespace event_interface_names {

CORE_EXPORT extern const AtomicString& kAnimationEvent;
CORE_EXPORT extern const AtomicString& kAnimationPlaybackEvent;
CORE_EXPORT extern const AtomicString& kAutofillEvent;
CORE_EXPORT extern const AtomicString& kBeforeUnloadEvent;
CORE_EXPORT extern const AtomicString& kCanvasPaintEvent;
CORE_EXPORT extern const AtomicString& kCharacterBoundsUpdateEvent;
CORE_EXPORT extern const AtomicString& kClipboardEvent;
CORE_EXPORT extern const AtomicString& kCommandEvent;
CORE_EXPORT extern const AtomicString& kCompositionEvent;
CORE_EXPORT extern const AtomicString& kContentVisibilityAutoStateChangeEvent;
CORE_EXPORT extern const AtomicString& kCustomEvent;
CORE_EXPORT extern const AtomicString& kDragEvent;
CORE_EXPORT extern const AtomicString& kElementGeometryUpdateEvent;
CORE_EXPORT extern const AtomicString& kErrorEvent;
CORE_EXPORT extern const AtomicString& kEvent;
CORE_EXPORT extern const AtomicString& kFocusEvent;
CORE_EXPORT extern const AtomicString& kFontFaceSetLoadEvent;
CORE_EXPORT extern const AtomicString& kFormDataEvent;
CORE_EXPORT extern const AtomicString& kHashChangeEvent;
CORE_EXPORT extern const AtomicString& kInputEvent;
CORE_EXPORT extern const AtomicString& kInstallResultEvent;
CORE_EXPORT extern const AtomicString& kInterestEvent;
CORE_EXPORT extern const AtomicString& kKeyboardEvent;
CORE_EXPORT extern const AtomicString& kMediaQueryListEvent;
CORE_EXPORT extern const AtomicString& kMessageEvent;
CORE_EXPORT extern const AtomicString& kMojoInterfaceRequestEvent;
CORE_EXPORT extern const AtomicString& kMouseEvent;
CORE_EXPORT extern const AtomicString& kNavigateEvent;
CORE_EXPORT extern const AtomicString& kNavigationCurrentEntryChangeEvent;
CORE_EXPORT extern const AtomicString& kOverscrollEvent;
CORE_EXPORT extern const AtomicString& kPageRevealEvent;
CORE_EXPORT extern const AtomicString& kPageSwapEvent;
CORE_EXPORT extern const AtomicString& kPageTransitionEvent;
CORE_EXPORT extern const AtomicString& kPointerEvent;
CORE_EXPORT extern const AtomicString& kPopStateEvent;
CORE_EXPORT extern const AtomicString& kProgressEvent;
CORE_EXPORT extern const AtomicString& kPromiseRejectionEvent;
CORE_EXPORT extern const AtomicString& kResourceProgressEvent;
CORE_EXPORT extern const AtomicString& kSecurityPolicyViolationEvent;
CORE_EXPORT extern const AtomicString& kSnapEvent;
CORE_EXPORT extern const AtomicString& kSubmitEvent;
CORE_EXPORT extern const AtomicString& kTaskPriorityChangeEvent;
CORE_EXPORT extern const AtomicString& kTextEvent;
CORE_EXPORT extern const AtomicString& kTextFormatUpdateEvent;
CORE_EXPORT extern const AtomicString& kTextUpdateEvent;
CORE_EXPORT extern const AtomicString& kToggleEvent;
CORE_EXPORT extern const AtomicString& kToolActivatedEvent;
CORE_EXPORT extern const AtomicString& kToolCancelEvent;
CORE_EXPORT extern const AtomicString& kTouchEvent;
CORE_EXPORT extern const AtomicString& kTrackEvent;
CORE_EXPORT extern const AtomicString& kTransitionEvent;
CORE_EXPORT extern const AtomicString& kUIEvent;
CORE_EXPORT extern const AtomicString& kWheelEvent;

constexpr unsigned kNamesCount = 53;

CORE_EXPORT void Init();

}  // namespace event_interface_names
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_EVENT_INTERFACE_NAMES_H_
