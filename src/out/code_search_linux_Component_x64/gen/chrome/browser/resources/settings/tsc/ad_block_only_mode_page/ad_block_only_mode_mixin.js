// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
const AD_BLOCK_ONLY_MODE_ENABLED_PREF = 'brave.shields.adblock_only_mode_enabled';
export const AdBlockOnlyModeMixin = dedupingMixin((superClass) => {
    class AdBlockOnlyModeMixin extends superClass {
        static get properties() {
            return {
                isAdBlockOnlyModeEnabled_: {
                    type: Boolean,
                    value: false,
                },
            };
        }
        ready() {
            super.ready();
            chrome.settingsPrivate.getPref(AD_BLOCK_ONLY_MODE_ENABLED_PREF)
                .then((pref) => this.onAdBlockOnlyModeEnabledPrefChanged(pref));
            chrome.settingsPrivate.onPrefsChanged.addListener((prefs) => {
                const pref = prefs.find(p => p.key === AD_BLOCK_ONLY_MODE_ENABLED_PREF);
                if (pref) {
                    this.onAdBlockOnlyModeEnabledPrefChanged(pref);
                }
            });
        }
        onAdBlockOnlyModeEnabledPrefChanged(pref) {
            this.isAdBlockOnlyModeEnabled_ =
                pref.value &&
                    loadTimeData.getBoolean('isAdBlockOnlyModeSupportedAndFeatureEnabled');
        }
        setAdBlockOnlyModeEnabled(enabled) {
            chrome.settingsPrivate.setPref(AD_BLOCK_ONLY_MODE_ENABLED_PREF, enabled);
        }
    }
    return AdBlockOnlyModeMixin;
});
