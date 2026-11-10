// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 *
 * 'settings-reset-profile-dialog' is the dialog shown for clearing profile
 * settings. A triggered variant of this dialog can be shown under certain
 * circumstances. See triggered_profile_resetter.h for when the triggered
 * variant will be used.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/js/action_link.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { ResetBrowserProxyImpl } from './reset_browser_proxy.js';
import { getCss } from './reset_profile_dialog.css.js';
import { getHtml } from './reset_profile_dialog.html.js';
const SettingsResetProfileDialogElementBase = I18nMixinLit(CrLitElement);
export class SettingsResetProfileDialogElement extends SettingsResetProfileDialogElementBase {
    static get is() {
        return 'settings-reset-profile-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // TODO(dpapad): Evaluate whether this needs to be synced across different
            // settings tabs.
            isTriggered_: { type: Boolean },
            triggeredResetToolName_: { type: String },
            resetRequestOrigin_: { type: String },
            clearingInProgress_: { type: Boolean },
        };
    }
    #isTriggered__accessor_storage = false;
    get isTriggered_() { return this.#isTriggered__accessor_storage; }
    set isTriggered_(value) { this.#isTriggered__accessor_storage = value; }
    #triggeredResetToolName__accessor_storage = '';
    get triggeredResetToolName_() { return this.#triggeredResetToolName__accessor_storage; }
    set triggeredResetToolName_(value) { this.#triggeredResetToolName__accessor_storage = value; }
    #resetRequestOrigin__accessor_storage = '';
    get resetRequestOrigin_() { return this.#resetRequestOrigin__accessor_storage; }
    set resetRequestOrigin_(value) { this.#resetRequestOrigin__accessor_storage = value; }
    #clearingInProgress__accessor_storage = false;
    get clearingInProgress_() { return this.#clearingInProgress__accessor_storage; }
    set clearingInProgress_(value) { this.#clearingInProgress__accessor_storage = value; }
    browserProxy_ = ResetBrowserProxyImpl.getInstance();
    firstUpdated() {
        this.addEventListener('cancel', () => {
            this.browserProxy_.onHideResetProfileDialog();
        });
        this.shadowRoot.querySelector('cr-checkbox a').addEventListener('click', this.onShowReportedSettingsClick_.bind(this));
    }
    getExplanationText_() {
        if (this.isTriggered_) {
            return this.i18nAdvanced('triggeredResetPageExplanation', { substitutions: [this.triggeredResetToolName_] });
        }
        return this.i18nAdvanced('resetPageExplanationBulletPoints', {
            tags: ['LINE_BREAKS', 'LINE_BREAK'],
        });
    }
    getPageTitle_() {
        if (this.isTriggered_) {
            return loadTimeData.getStringF('triggeredResetPageTitle', this.triggeredResetToolName_);
        }
        return loadTimeData.getStringF('resetDialogTitle');
    }
    showDialog_() {
        if (!this.$.dialog.open) {
            this.$.dialog.showModal();
        }
        this.browserProxy_.onShowResetProfileDialog();
    }
    show() {
        this.isTriggered_ = Router.getInstance().getCurrentRoute() ===
            routes.TRIGGERED_RESET_DIALOG;
        if (this.isTriggered_) {
            this.browserProxy_.getTriggeredResetToolName().then(name => {
                this.resetRequestOrigin_ = 'triggeredreset';
                this.triggeredResetToolName_ = name;
                this.showDialog_();
            });
        }
        else {
            this.resetRequestOrigin_ =
                Router.getInstance().getQueryParameters().get('origin') || '';
            this.showDialog_();
        }
    }
    onCancelClick_() {
        this.cancel();
    }
    cancel() {
        if (this.$.dialog.open) {
            this.$.dialog.cancel();
        }
    }
    onResetClick_() {
        this.clearingInProgress_ = true;
        this.browserProxy_
            .performResetProfileSettings(this.$.sendSettings.checked, this.resetRequestOrigin_)
            .then(() => {
            this.clearingInProgress_ = false;
            if (this.$.dialog.open) {
                this.$.dialog.close();
            }
            this.fire('reset-done');
        });
    }
    /**
     * Displays the settings that will be reported in a new tab.
     */
    onShowReportedSettingsClick_(e) {
        this.browserProxy_.showReportedSettings();
        e.stopPropagation();
    }
}
customElements.define(SettingsResetProfileDialogElement.is, SettingsResetProfileDialogElement);
