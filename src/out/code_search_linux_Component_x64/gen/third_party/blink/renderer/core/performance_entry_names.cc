// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/timing/performance_entry_names.json5


#include "third_party/blink/renderer/core/performance_entry_names.h"

#include <iterator>

#include "base/containers/span.h"
#include "third_party/blink/renderer/platform/wtf/std_lib_extras.h"
#include "third_party/blink/renderer/platform/wtf/text/string_hasher.h"

namespace blink {
namespace performance_entry_names {

void* names_storage[kNamesCount * ((sizeof(AtomicString) + sizeof(void *) - 1) / sizeof(void *))];

const AtomicString& kBackForwardCacheRestoration = reinterpret_cast<AtomicString*>(&names_storage)[0];
const AtomicString& kContainer = reinterpret_cast<AtomicString*>(&names_storage)[1];
const AtomicString& kElement = reinterpret_cast<AtomicString*>(&names_storage)[2];
const AtomicString& kEvent = reinterpret_cast<AtomicString*>(&names_storage)[3];
const AtomicString& kFirstContentfulPaint = reinterpret_cast<AtomicString*>(&names_storage)[4];
const AtomicString& kFirstInput = reinterpret_cast<AtomicString*>(&names_storage)[5];
const AtomicString& kFirstPaint = reinterpret_cast<AtomicString*>(&names_storage)[6];
const AtomicString& kInteractionContentfulPaint = reinterpret_cast<AtomicString*>(&names_storage)[7];
const AtomicString& kLargestContentfulPaint = reinterpret_cast<AtomicString*>(&names_storage)[8];
const AtomicString& kLayoutShift = reinterpret_cast<AtomicString*>(&names_storage)[9];
const AtomicString& kLongAnimationFrame = reinterpret_cast<AtomicString*>(&names_storage)[10];
const AtomicString& kLongtask = reinterpret_cast<AtomicString*>(&names_storage)[11];
const AtomicString& kMark = reinterpret_cast<AtomicString*>(&names_storage)[12];
const AtomicString& kMarkConditional = reinterpret_cast<AtomicString*>(&names_storage)[13];
const AtomicString& kMeasure = reinterpret_cast<AtomicString*>(&names_storage)[14];
const AtomicString& kMeasureConditional = reinterpret_cast<AtomicString*>(&names_storage)[15];
const AtomicString& kNavigation = reinterpret_cast<AtomicString*>(&names_storage)[16];
const AtomicString& kPaint = reinterpret_cast<AtomicString*>(&names_storage)[17];
const AtomicString& kResource = reinterpret_cast<AtomicString*>(&names_storage)[18];
const AtomicString& kScript = reinterpret_cast<AtomicString*>(&names_storage)[19];
const AtomicString& kScroll = reinterpret_cast<AtomicString*>(&names_storage)[20];
const AtomicString& kSoftNavigation = reinterpret_cast<AtomicString*>(&names_storage)[21];
const AtomicString& kTaskattribution = reinterpret_cast<AtomicString*>(&names_storage)[22];
const AtomicString& kUnknown = reinterpret_cast<AtomicString*>(&names_storage)[23];
const AtomicString& kVisibilityState = reinterpret_cast<AtomicString*>(&names_storage)[24];
const AtomicString& kWindow = reinterpret_cast<AtomicString*>(&names_storage)[25];

void Init() {
  static bool is_loaded = false;
  if (is_loaded) return;
  is_loaded = true;

  struct NameEntry {
    const char* name;
    unsigned char length;
  };

  static constexpr NameEntry kNames[] = {
    { "back-forward-cache-restoration", 30 },
    { "container", 9 },
    { "element", 7 },
    { "event", 5 },
    { "first-contentful-paint", 22 },
    { "first-input", 11 },
    { "first-paint", 11 },
    { "interaction-contentful-paint", 28 },
    { "largest-contentful-paint", 24 },
    { "layout-shift", 12 },
    { "long-animation-frame", 20 },
    { "longtask", 8 },
    { "mark", 4 },
    { "mark-conditional", 16 },
    { "measure", 7 },
    { "measure-conditional", 19 },
    { "navigation", 10 },
    { "paint", 5 },
    { "resource", 8 },
    { "script", 6 },
    { "scroll", 6 },
    { "soft-navigation", 15 },
    { "taskattribution", 15 },
    { "unknown", 7 },
    { "visibility-state", 16 },
    { "window", 6 },
  };

  for (size_t i = 0; i < std::size(kNames); ++i) {
    StringImpl* impl = StringImpl::CreateStatic(base::span(kNames[i].name, kNames[i].length));
    void* address = reinterpret_cast<AtomicString*>(&names_storage) + i;
    new (address) AtomicString(impl);
  }
}

}  // namespace performance_entry_names
}  // namespace blink
