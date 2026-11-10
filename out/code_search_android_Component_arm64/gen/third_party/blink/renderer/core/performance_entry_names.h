// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/timing/performance_entry_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_CORE_PERFORMANCE_ENTRY_NAMES_H_
#define THIRD_PARTY_BLINK_RENDERER_CORE_PERFORMANCE_ENTRY_NAMES_H_

#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/core/core_export.h"

namespace blink {
namespace performance_entry_names {

CORE_EXPORT extern const AtomicString& kBackForwardCacheRestoration;
CORE_EXPORT extern const AtomicString& kContainer;
CORE_EXPORT extern const AtomicString& kElement;
CORE_EXPORT extern const AtomicString& kEvent;
CORE_EXPORT extern const AtomicString& kFirstContentfulPaint;
CORE_EXPORT extern const AtomicString& kFirstInput;
CORE_EXPORT extern const AtomicString& kFirstPaint;
CORE_EXPORT extern const AtomicString& kInteractionContentfulPaint;
CORE_EXPORT extern const AtomicString& kLargestContentfulPaint;
CORE_EXPORT extern const AtomicString& kLayoutShift;
CORE_EXPORT extern const AtomicString& kLongAnimationFrame;
CORE_EXPORT extern const AtomicString& kLongtask;
CORE_EXPORT extern const AtomicString& kMark;
CORE_EXPORT extern const AtomicString& kMarkConditional;
CORE_EXPORT extern const AtomicString& kMeasure;
CORE_EXPORT extern const AtomicString& kMeasureConditional;
CORE_EXPORT extern const AtomicString& kNavigation;
CORE_EXPORT extern const AtomicString& kPaint;
CORE_EXPORT extern const AtomicString& kResource;
CORE_EXPORT extern const AtomicString& kScript;
CORE_EXPORT extern const AtomicString& kScroll;
CORE_EXPORT extern const AtomicString& kSoftNavigation;
CORE_EXPORT extern const AtomicString& kTaskattribution;
CORE_EXPORT extern const AtomicString& kUnknown;
CORE_EXPORT extern const AtomicString& kVisibilityState;
CORE_EXPORT extern const AtomicString& kWindow;

constexpr unsigned kNamesCount = 26;

CORE_EXPORT void Init();

}  // namespace performance_entry_names
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_CORE_PERFORMANCE_ENTRY_NAMES_H_
