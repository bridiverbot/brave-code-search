// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of all safe browsing modes. Must be kept in sync with the enum
 * of the same name located in:
 * components/safe_browsing/core/common/safe_browsing_prefs.h
 */
// LINT.IfChange(SafeBrowsingSetting)
export var SafeBrowsingSetting;
(function (SafeBrowsingSetting) {
    SafeBrowsingSetting[SafeBrowsingSetting["DISABLED"] = 0] = "DISABLED";
    SafeBrowsingSetting[SafeBrowsingSetting["STANDARD"] = 1] = "STANDARD";
    SafeBrowsingSetting[SafeBrowsingSetting["ENHANCED"] = 2] = "ENHANCED";
})(SafeBrowsingSetting || (SafeBrowsingSetting = {}));
// LINT.ThenChange(/components/safe_browsing/core/common/safe_browsing_prefs.h:SafeBrowsingState)
