// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Steps in the privacy guide flow in their order of appearance. The page
 * updates from those steps to show the corresponding page content.
 */
export var PrivacyGuideStep;
(function (PrivacyGuideStep) {
    PrivacyGuideStep["WELCOME"] = "welcome";
    PrivacyGuideStep["MSBB"] = "msbb";
    PrivacyGuideStep["HISTORY_SYNC"] = "historySync";
    PrivacyGuideStep["SAFE_BROWSING"] = "safeBrowsing";
    PrivacyGuideStep["COOKIES"] = "cookies";
    PrivacyGuideStep["COMPLETION"] = "completion";
})(PrivacyGuideStep || (PrivacyGuideStep = {}));
