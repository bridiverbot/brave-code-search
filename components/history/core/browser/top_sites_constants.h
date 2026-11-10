// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef COMPONENTS_HISTORY_CORE_BROWSER_TOP_SITES_CONSTANTS_H_
#define COMPONENTS_HISTORY_CORE_BROWSER_TOP_SITES_CONSTANTS_H_

#include <stddef.h>

namespace history {
// How many top sites to store in the cache.
static constexpr size_t kTopSitesNumber = 
// Brave replacement: 12 for Desktop and 15 (4 rows x 4 element -1 for
// plus button) items for Android
#if BUILDFLAG(IS_ANDROID)
  15;
#else
  12;
#endif  // BUILDFLAG(IS_ANDROID)

}  // namespace history

#endif  // COMPONENTS_HISTORY_CORE_BROWSER_TOP_SITES_CONSTANTS_H_
