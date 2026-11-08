// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyElementInteractions } from '../metrics_browser_proxy.js';
import { getCss } from './do_not_track_toggle.css.js';
import { getHtml } from './do_not_track_toggle.html.js';
const SettingsDoNotTrackToggleElementBase = I18nMixinLit(CrLitElement);
export class SettingsDoNotTrackToggleElement extends SettingsDoNotTrackToggleElementBase {
    static get is() {
        return 'settings-do-not-track-toggle';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showDialog_: { type: Boolean },
            showUniversalOptOutSettings_: { type: Boolean },
            doNotTrackSublabel_: { type: String },
        };
    }
    #showDialog__accessor_storage = false;
    get showDialog_() { return this.#showDialog__accessor_storage; }
    set showDialog_(value) { this.#showDialog__accessor_storage = value; }
    #showUniversalOptOutSettings__accessor_storage = loadTimeData.getBoolean('showUniversalOptOutSettings');
    get showUniversalOptOutSettings_() { return this.#showUniversalOptOutSettings__accessor_storage; }
    set showUniversalOptOutSettings_(value) { this.#showUniversalOptOutSettings__accessor_storage = value; }
    #doNotTrackSublabel__accessor_storage = '';
    get doNotTrackSublabel_() { return this.#doNotTrackSublabel__accessor_storage; }
    set doNotTrackSublabel_(value) { this.#doNotTrackSublabel__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showUniversalOptOutSettings_')) {
            this.doNotTrackSublabel_ = this.computeDoNotTrackToggleSubLabel_();
        }
    }
    /**
     * Handles the change event for the do-not-track toggle. Shows a
     * confirmation dialog when enabling the setting.
     */
    onSettingsBooleanControlChange_(event) {
        MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.DO_NOT_TRACK);
        const target = event.target;
        if (!target.checked) {
            // Always allow disabling the pref.
            target.sendPrefChange();
            return;
        }
        this.showDialog_ = true;
    }
    closeDialog_() {
        this.shadowRoot.querySelector('cr-dialog').close();
        this.showDialog_ = false;
    }
    onDialogClose_() {
        focusWithoutInk(this.$.toggle);
    }
    /**
     * Handles the shared proxy confirmation dialog 'Confirm' button.
     */
    onConfirmClick_() {
        this.$.toggle.sendPrefChange();
        this.closeDialog_();
    }
    /**
     * Handles the shared proxy confirmation dialog 'Cancel' button.
     */
    onCancelClick_() {
        this.$.toggle.resetToPrefValue();
        this.closeDialog_();
    }
    /**
     * Handles the shared proxy confirmation dialog cancel event.
     */
    onDialogCancel_() {
        this.onCancelClick_();
    }
    computeDoNotTrackToggleSubLabel_() {
        return this.i18n(this.showUniversalOptOutSettings_ ?
            'trackingProtectionDoNotTrackDisclaimerToggleSubLabel' :
            'trackingProtectionDoNotTrackToggleSubLabel');
    }
}
customElements.define(SettingsDoNotTrackToggleElement.is, SettingsDoNotTrackToggleElement);
