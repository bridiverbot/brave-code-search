// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/strings.m.js';
import { getCss as getSharedStyleCss } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './site_permissions_edit_url_dialog.html.js';
import { DummySiteSettingsDelegate } from './site_settings_mixin.js';
// A RegExp to roughly match acceptable patterns entered by the user.
// exec'ing() this RegExp will match the following groups:
// 0: Full matched string.
// 1: Scheme + scheme separator (e.g., 'https://').
// 2: Scheme only (e.g., 'https').
// 3: Hostname (e.g., 'example.com').
// 4: Port, including ':' separator (e.g., ':80').
export const sitePermissionsPatternRegExp = new RegExp('^' +
    // Scheme; optional.
    '((http|https)://)?' +
    // Hostname or localhost, required.
    '([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)' +
    // Port, optional.
    '(:[0-9]+)?' +
    '$');
export function getSitePermissionsPatternFromSite(site) {
    const res = sitePermissionsPatternRegExp.exec(site);
    assert(res);
    const scheme = res[1] || 'https://';
    const host = res[3];
    const port = res[4] || '';
    return scheme + host + port;
}
export class SitePermissionsEditUrlDialogElement extends CrLitElement {
    static get is() {
        return 'site-permissions-edit-url-dialog';
    }
    static get styles() {
        return getSharedStyleCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            siteSet: { type: String },
            /**
             * The site that this entry is currently managing. Only non-empty if this
             * is for editing an existing entry.
             */
            siteToEdit: { type: String },
            site_: { type: String },
            /** Whether the currently-entered input is valid. */
            inputValid_: { type: Boolean },
        };
    }
    #delegate_accessor_storage = new DummySiteSettingsDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #siteSet_accessor_storage = chrome.developerPrivate.SiteSet.USER_PERMITTED;
    get siteSet() { return this.#siteSet_accessor_storage; }
    set siteSet(value) { this.#siteSet_accessor_storage = value; }
    #siteToEdit_accessor_storage = null;
    get siteToEdit() { return this.#siteToEdit_accessor_storage; }
    set siteToEdit(value) { this.#siteToEdit_accessor_storage = value; }
    #site__accessor_storage = '';
    get site_() { return this.#site__accessor_storage; }
    set site_(value) { this.#site__accessor_storage = value; }
    #inputValid__accessor_storage = true;
    get inputValid_() { return this.#inputValid__accessor_storage; }
    set inputValid_(value) { this.#inputValid__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        if (this.siteToEdit !== null) {
            this.site_ = this.siteToEdit;
            this.validate_();
        }
    }
    /**
     * Validates that the pattern entered is valid by testing it against the
     * regex. An empty patterh is considered "valid" as the invalid message will
     * not be shown, but the input cannot be submitted as the action button will
     * be disabled.
     */
    validate_() {
        this.inputValid_ = this.site_.trim().length === 0 ||
            sitePermissionsPatternRegExp.test(this.site_);
    }
    computeDialogTitle_() {
        return loadTimeData.getString(this.siteToEdit === null ? 'sitePermissionsAddSiteDialogTitle' :
            'sitePermissionsEditSiteDialogTitle');
    }
    computeSubmitButtonDisabled_() {
        // If input is empty, disable the action button.
        return !this.inputValid_ || this.site_.trim().length === 0;
    }
    computeSubmitButtonLabel_() {
        return loadTimeData.getString(this.siteToEdit === null ? 'add' : 'save');
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        const pattern = getSitePermissionsPatternFromSite(this.site_);
        if (this.siteToEdit !== null) {
            this.handleEdit_(pattern);
        }
        else {
            this.handleAdd_(pattern);
        }
    }
    onSiteValueChanged_(e) {
        this.site_ = e.detail.value;
    }
    onInput_() {
        this.validate_();
    }
    handleEdit_(pattern) {
        assert(this.siteToEdit);
        if (pattern === this.siteToEdit) {
            this.$.dialog.close();
            return;
        }
        this.delegate.removeUserSpecifiedSites(this.siteSet, [this.siteToEdit])
            .then(() => {
            this.addUserSpecifiedSite_(pattern);
        });
    }
    handleAdd_(pattern) {
        assert(!this.siteToEdit);
        this.addUserSpecifiedSite_(pattern);
    }
    addUserSpecifiedSite_(pattern) {
        this.delegate.addUserSpecifiedSites(this.siteSet, [pattern])
            .then(() => {
            this.$.dialog.close();
        }, () => {
            this.inputValid_ = false;
        });
    }
}
customElements.define(SitePermissionsEditUrlDialogElement.is, SitePermissionsEditUrlDialogElement);
