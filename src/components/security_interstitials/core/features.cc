// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "components/security_interstitials/core/features.h"

#include "base/feature_list.h"
#include "build/build_config.h"

namespace security_interstitials::features {

// Enables a dialog-based UI for HTTPS-First Mode.
BASE_OVERRIDDEN_FEATURE(kHttpsFirstDialogUi, 
#if BUILDFLAG(IS_ANDROID)
  base::FEATURE_DISABLED_BY_DEFAULT
#else
  base::FEATURE_ENABLED_BY_DEFAULT
#endif
);

BASE_FEATURE(kInsecureFormNavigationThrottleForPrerender,
             base::FEATURE_ENABLED_BY_DEFAULT);
}  // namespace security_interstitials::features
