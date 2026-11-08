// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const CrPolicyPrefMixinLit = (superClass) => {
    class CrPolicyPrefMixinLit extends superClass {
        static get properties() {
            return {
                noExtensionIndicator: { type: Boolean },
                pref: { type: Object },
            };
        }
        #noExtensionIndicator_accessor_storage = false;
        get noExtensionIndicator() { return this.#noExtensionIndicator_accessor_storage; }
        set noExtensionIndicator(value) { this.#noExtensionIndicator_accessor_storage = value; }
        #pref_accessor_storage = undefined;
        get pref() { return this.#pref_accessor_storage; }
        set pref(value) { this.#pref_accessor_storage = value; }
        /**
         * Is the |pref| controlled by something that prevents user control of
         * the preference.
         * @return True if |this.pref| is controlled by an enforced policy.
         */
        isPrefEnforced() {
            return !!this.pref &&
                this.pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
        }
        /**
         * @return True if |this.pref| has a recommended or enforced policy.
         */
        hasPrefPolicyIndicator() {
            if (!this.pref) {
                return false;
            }
            if (this.noExtensionIndicator &&
                this.pref.controlledBy ===
                    chrome.settingsPrivate.ControlledBy.EXTENSION) {
                return false;
            }
            return this.isPrefEnforced() ||
                this.pref.enforcement ===
                    chrome.settingsPrivate.Enforcement.RECOMMENDED;
        }
    }
    return CrPolicyPrefMixinLit;
};
