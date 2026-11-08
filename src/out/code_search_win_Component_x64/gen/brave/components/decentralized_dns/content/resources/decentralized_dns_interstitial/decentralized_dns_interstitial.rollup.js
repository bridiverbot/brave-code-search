// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This is the shared code for security interstitials. It is used for both SSL
// interstitials and Safe Browsing interstitials.

/**
 * @typedef {{
 *   dontProceed: function(),
 *   proceed: function(),
 *   showMoreSection: function(),
 *   openHelpCenter: function(),
 *   openDiagnostic: function(),
 *   reload: function(),
 *   openDateSettings: function(),
 *   openLogin: function(),
 *   doReport: function(),
 *   dontReport: function(),
 *   openReportingPrivacy: function(),
 *   openWhitepaper: function(),
 *   reportPhishingError: function(),
 *   openAndroidAdvancedProtectionSettings: function(),
 *   openHelpCenterInNewTab: function(),
 *   openDiagnosticInNewTab: function(),
 *   openReportingPrivacyInNewTab: function(),
 *   openWhitepaperInNewTab: function(),
 *   reportPhishingErrorInNewTab: function(),
 * }}
 */
// eslint-disable-next-line no-var
var certificateErrorPageController;

// Should match security_interstitials::SecurityInterstitialCommand
/** @enum {number} */
const SecurityInterstitialCommandId = {
  CMD_DONT_PROCEED: 0,
  CMD_PROCEED: 1,
  // Ways for user to get more information
  CMD_SHOW_MORE_SECTION: 2,
  CMD_OPEN_HELP_CENTER: 3,
  CMD_OPEN_DIAGNOSTIC: 4,
  // Primary button actions
  CMD_RELOAD: 5,
  CMD_OPEN_DATE_SETTINGS: 6,
  CMD_OPEN_LOGIN: 7,
  // Safe Browsing Extended Reporting
  CMD_DO_REPORT: 8,
  CMD_DONT_REPORT: 9,
  CMD_OPEN_REPORTING_PRIVACY: 10,
  CMD_OPEN_WHITEPAPER: 11,
  // Report a phishing error.
  CMD_REPORT_PHISHING_ERROR: 12,
  // Open enhanced protection settings.
  CMD_OPEN_ENHANCED_PROTECTION_SETTINGS: 13,
  CMD_OPEN_ANDROID_ADVANCED_PROTECTION_SETTINGS: 16,
  // Commands for opening links in a new tab, used by middle-clicks.
  CMD_OPEN_HELP_CENTER_IN_NEW_TAB: 17,
  CMD_OPEN_DIAGNOSTIC_IN_NEW_TAB: 18,
  CMD_OPEN_REPORTING_PRIVACY_IN_NEW_TAB: 19,
  CMD_OPEN_WHITEPAPER_IN_NEW_TAB: 20,
  CMD_REPORT_PHISHING_ERROR_IN_NEW_TAB: 21,
  // View the certificate.
  CMD_SHOW_CERTIFICATE_VIEWER: 22,
};

const HIDDEN_CLASS = 'hidden';

/**
 * A convenience method for sending commands to the parent page.
 * @param {SecurityInterstitialCommandId} cmd  The command to send.
 */
function sendCommand(cmd) {
  if (window.certificateErrorPageController) {
    switch (cmd) {
      case SecurityInterstitialCommandId.CMD_DONT_PROCEED:
        certificateErrorPageController.dontProceed();
        break;
      case SecurityInterstitialCommandId.CMD_PROCEED:
        certificateErrorPageController.proceed();
        break;
      case SecurityInterstitialCommandId.CMD_SHOW_MORE_SECTION:
        certificateErrorPageController.showMoreSection();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER:
        certificateErrorPageController.openHelpCenter();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC:
        certificateErrorPageController.openDiagnostic();
        break;
      case SecurityInterstitialCommandId.CMD_RELOAD:
        certificateErrorPageController.reload();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DATE_SETTINGS:
        certificateErrorPageController.openDateSettings();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_LOGIN:
        certificateErrorPageController.openLogin();
        break;
      case SecurityInterstitialCommandId.CMD_DO_REPORT:
        certificateErrorPageController.doReport();
        break;
      case SecurityInterstitialCommandId.CMD_DONT_REPORT:
        certificateErrorPageController.dontReport();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY:
        certificateErrorPageController.openReportingPrivacy();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER:
        certificateErrorPageController.openWhitepaper();
        break;
      case SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR:
        certificateErrorPageController.reportPhishingError();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_ENHANCED_PROTECTION_SETTINGS:
        certificateErrorPageController.openEnhancedProtectionSettings();
        break;
      case SecurityInterstitialCommandId
          .CMD_OPEN_ANDROID_ADVANCED_PROTECTION_SETTINGS:
        certificateErrorPageController.openAndroidAdvancedProtectionSettings();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER_IN_NEW_TAB:
        certificateErrorPageController.openHelpCenterInNewTab();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC_IN_NEW_TAB:
        certificateErrorPageController.openDiagnosticInNewTab();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY_IN_NEW_TAB:
        certificateErrorPageController.openReportingPrivacyInNewTab();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER_IN_NEW_TAB:
        certificateErrorPageController.openWhitepaperInNewTab();
        break;
      case SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR_IN_NEW_TAB:
        certificateErrorPageController.reportPhishingErrorInNewTab();
        break;
      case SecurityInterstitialCommandId.CMD_SHOW_CERTIFICATE_VIEWER:
        certificateErrorPageController.showCertificateViewer();
        break;
    }
    return;
  }
  // 
  if (window.domAutomationController) {
    window.domAutomationController.send(cmd);
  }
  // 
  // 
}

// 

//

// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.


// Clickjacking protection: delay before accepting proceed clicks
const PROCEED_CLICK_DELAY_MS = 500;
let proceedClicksEnabled = false;

function setupEvents() {
  const body = document.querySelector('#body');
  body.classList.add('decentralized_dns');
  const icon = document.querySelector('#icon');
  icon.classList.add('icon');

  const primaryButton = document.querySelector('#primary-button');
  primaryButton.addEventListener('click', function(event) {
    // Prevent clickjacking by requiring a delay before allowing proceed
    if (!proceedClicksEnabled) {
      event.preventDefault();
      return;
    }
    sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
  });

  const mainContent = document.querySelector('#main-content');
  mainContent.classList.remove(HIDDEN_CLASS);

  const dontProceedButton = document.querySelector('#dont-proceed-button');
  dontProceedButton.addEventListener('click', function() {
    // Don't proceed is always allowed (safer action)
    sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
  });

  // Enable proceed clicks after delay to prevent clickjacking
  setTimeout(function() {
    proceedClicksEnabled = true;
  }, PROCEED_CLICK_DELAY_MS);
}

document.addEventListener('DOMContentLoaded', setupEvents);
//# sourceMappingURL=decentralized_dns_interstitial.rollup.js.map
