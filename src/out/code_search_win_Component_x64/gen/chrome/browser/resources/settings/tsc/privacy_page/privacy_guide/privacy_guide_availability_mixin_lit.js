// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { dedupingMixin } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
export const PrivacyGuideAvailabilityMixinLit = dedupingMixin((superClass) => {
    const superClassBase = WebUiListenerMixinLit(superClass);
    class PrivacyGuideAvailabilityMixinLit extends superClassBase {
        static get properties() {
            return {
                isPrivacyGuideAvailable: { type: Boolean },
            };
        }
        #isPrivacyGuideAvailable_accessor_storage = loadTimeData.getBoolean('showPrivacyGuide');
        get isPrivacyGuideAvailable() { return this.#isPrivacyGuideAvailable_accessor_storage; }
        set isPrivacyGuideAvailable(value) { this.#isPrivacyGuideAvailable_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.addWebUiListener('is-managed-changed', (isManaged) => this.onPrivacyGuideAvailabilityChanged_(!isManaged));
            this.addWebUiListener('sync-status-changed', (syncStatus) => this.onPrivacyGuideAvailabilityChanged_(!syncStatus.supervisedUser));
        }
        onPrivacyGuideAvailabilityChanged_(isAvailable) {
            // If the Privacy Guide becomes unavailable, then hide the entry
            // point. However, if the Privacy Guide was unavailable before, but
            // now is, then do not make the privacy guide entry point visible,
            // as the Settings route for privacy guide would still be unavailable
            // until the page is reloaded.
            this.isPrivacyGuideAvailable =
                this.isPrivacyGuideAvailable && isAvailable;
        }
    }
    return PrivacyGuideAvailabilityMixinLit;
});
