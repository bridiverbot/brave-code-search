// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated from template:
//   templates/make_names.h.tmpl
// and input files:
//   ../../third_party/blink/renderer/modules/indexeddb/indexed_db_names.json5


#ifndef THIRD_PARTY_BLINK_RENDERER_MODULES_INDEXED_DB_NAMES_H_
#define THIRD_PARTY_BLINK_RENDERER_MODULES_INDEXED_DB_NAMES_H_

#include "third_party/blink/renderer/platform/wtf/text/atomic_string.h"
#include "third_party/blink/renderer/platform/platform_export.h"

namespace blink {
namespace indexed_db_names {

extern const AtomicString& kDefault;
extern const AtomicString& kDone;
extern const AtomicString& kIndexedDB;
extern const AtomicString& kNext;
extern const AtomicString& kNextunique;
extern const AtomicString& kNone;
extern const AtomicString& kPending;
extern const AtomicString& kPrev;
extern const AtomicString& kPrevunique;
extern const AtomicString& kReadonly;
extern const AtomicString& kReadwrite;
extern const AtomicString& kRelaxed;
extern const AtomicString& kStrict;
extern const AtomicString& kTotal;
extern const AtomicString& kVersionchange;

constexpr unsigned kNamesCount = 15;

void Init();

}  // namespace indexed_db_names
}  // namespace blink

#endif  // THIRD_PARTY_BLINK_RENDERER_MODULES_INDEXED_DB_NAMES_H_
