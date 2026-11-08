// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/brave/leo.bundle.js';
import '../relaunch_confirmation_dialog.js';
import './brave_origin_onboarding.js';
import './origin_toggle_button.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { getSearchManager } from '../search_settings.js';
import * as BraveOriginMojom from '../brave_origin_settings.mojom-webui.js';
import { getCss } from './brave_origin_page.css.js';
import { getHtml } from './brave_origin_page.html.js';
const SettingsBraveOriginPageElementBase = RelaunchMixinLit(CrLitElement);
/**
 * 'settings-brave-origin-page' is the settings page containing
 * Brave Origin features.
 */
export class SettingsBraveOriginPageElement extends SettingsBraveOriginPageElementBase {
    static get is() {
        return 'settings-brave-origin-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isPurchased_: { type: Boolean },
            showRestartToast_: { type: Boolean },
            isPlaylistFeatureEnabled_: { type: Boolean },
            // 
            isPsstEnabled_: { type: Boolean },
            // 
        };
    }
    #isPurchased__accessor_storage = true;
    get isPurchased_() { return this.#isPurchased__accessor_storage; }
    set isPurchased_(value) { this.#isPurchased__accessor_storage = value; }
    #showRestartToast__accessor_storage = false;
    get showRestartToast_() { return this.#showRestartToast__accessor_storage; }
    set showRestartToast_(value) { this.#showRestartToast__accessor_storage = value; }
    #isPlaylistFeatureEnabled__accessor_storage = loadTimeData.getBoolean('isPlaylistFeatureEnabled');
    get isPlaylistFeatureEnabled_() { return this.#isPlaylistFeatureEnabled__accessor_storage; }
    set isPlaylistFeatureEnabled_(value) { this.#isPlaylistFeatureEnabled__accessor_storage = value; }
    #isPsstEnabled__accessor_storage = loadTimeData.getBoolean('isPsstEnabled');
    // 
    get isPsstEnabled_() { return this.#isPsstEnabled__accessor_storage; }
    set isPsstEnabled_(value) { this.#isPsstEnabled__accessor_storage = value; }
    // 
    braveOriginHandler_ = BraveOriginMojom.BraveOriginSettingsHandler.getRemote();
    boundOnVisibilityChange_ = null;
    connectedCallback() {
        super.connectedCallback();
        // Check if a restart is needed from a prior settings change
        this.checkNeedsRestart_();
        // For branded builds, always show as purchased
        if (loadTimeData.getBoolean('isBraveOriginBrandedBuild')) {
            this.isPurchased_ = true;
            return;
        }
        // Check purchase state
        this.checkPurchaseState_();
        // Re-check when the tab becomes visible (user may return from
        // account page after purchasing)
        this.boundOnVisibilityChange_ = this.onVisibilityChange_.bind(this);
        document.addEventListener('visibilitychange', this.boundOnVisibilityChange_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.boundOnVisibilityChange_) {
            document.removeEventListener('visibilitychange', this.boundOnVisibilityChange_);
            this.boundOnVisibilityChange_ = null;
        }
    }
    onVisibilityChange_() {
        if (document.visibilityState === 'visible') {
            this.checkPurchaseState_();
        }
    }
    async checkPurchaseState_() {
        const { isPurchased } = await this.braveOriginHandler_.refreshPurchaseState();
        this.isPurchased_ = isPurchased;
    }
    async onResetToDefaultsClick_() {
        // Query all origin-toggle-button elements
        const toggles = this.shadowRoot.querySelectorAll('origin-toggle-button');
        // Turn off all toggles that are currently on
        for (const toggle of toggles) {
            const toggleElement = toggle;
            if (toggleElement.checked) {
                // Set to off (accounting for inverted toggles)
                const valueToSet = toggleElement.inverted ? true : false;
                await this.braveOriginHandler_.setPolicyValue(toggleElement.policyKey, valueToSet);
            }
        }
        // Reload all toggle states
        for (const toggle of toggles) {
            await toggle.loadPolicyValue_();
        }
        // Check if restart is needed after reset
        this.checkNeedsRestart_();
    }
    onPolicyValueChanged_() {
        this.checkNeedsRestart_();
    }
    async checkNeedsRestart_() {
        const { needsRestart } = await this.braveOriginHandler_.getNeedsRestart();
        this.showRestartToast_ = needsRestart;
    }
    getOriginRestartPaddingClass_(showRestartToast) {
        return showRestartToast ? 'origin-restart-padding-spacer' : '';
    }
    onRestartClick_(e) {
        e.stopPropagation();
        this.performRestart(RestartType.RESTART);
    }
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
customElements.define(SettingsBraveOriginPageElement.is, SettingsBraveOriginPageElement);
