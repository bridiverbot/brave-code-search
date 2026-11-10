// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss as getSettingsSharedCss } from '../settings_shared_lit.css.js';
import { getHtml } from './startup_url_dialog.html.js';
import { StartupUrlsPageBrowserProxyImpl } from './startup_urls_page_browser_proxy.js';
/**
 * Describe the current URL input error status.
 * @enum {number}
 */
var UrlInputError;
(function (UrlInputError) {
    UrlInputError[UrlInputError["NONE"] = 0] = "NONE";
    UrlInputError[UrlInputError["INVALID_URL"] = 1] = "INVALID_URL";
    UrlInputError[UrlInputError["TOO_LONG"] = 2] = "TOO_LONG";
})(UrlInputError || (UrlInputError = {}));
export class SettingsStartupUrlDialogElement extends CrLitElement {
    static get is() {
        return 'settings-startup-url-dialog';
    }
    static get styles() {
        return [getSettingsSharedCss()];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            error_: { type: Number },
            url_: { type: String },
            urlLimit_: { type: Number },
            model: { type: Object },
            dialogTitle_: { type: String },
            actionButtonText_: { type: String },
        };
    }
    #error__accessor_storage = UrlInputError.NONE;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    #url__accessor_storage = '';
    get url_() { return this.#url__accessor_storage; }
    set url_(value) { this.#url__accessor_storage = value; }
    #urlLimit__accessor_storage = 100 * 1024;
    get urlLimit_() { return this.#urlLimit__accessor_storage; } // 100 KB.
    set urlLimit_(value) { this.#urlLimit__accessor_storage = value; }
    #model_accessor_storage = null;
    get model() { return this.#model_accessor_storage; }
    set model(value) { this.#model_accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    #actionButtonText__accessor_storage = '';
    get actionButtonText_() { return this.#actionButtonText__accessor_storage; }
    set actionButtonText_(value) { this.#actionButtonText__accessor_storage = value; }
    browserProxy_ = StartupUrlsPageBrowserProxyImpl.getInstance();
    connectedCallback() {
        if (this.model) {
            this.dialogTitle_ = loadTimeData.getString('onStartupEditPage');
            this.actionButtonText_ = loadTimeData.getString('save');
            // Pre-populate the input field.
            this.url_ = this.model.url;
        }
        else {
            this.dialogTitle_ = loadTimeData.getString('onStartupAddNewPage');
            this.actionButtonText_ = loadTimeData.getString('add');
        }
        super.connectedCallback();
        this.$.actionButton.disabled = !this.model;
        this.$.dialog.showModal();
    }
    onUrlValueChanged_(e) {
        this.url_ = e.detail.value;
    }
    hasError_() {
        return this.error_ !== UrlInputError.NONE;
    }
    getErrorMessage_() {
        switch (this.error_) {
            case UrlInputError.INVALID_URL:
                return loadTimeData.getString('onStartupInvalidUrl');
            case UrlInputError.TOO_LONG:
                return loadTimeData.getString('onStartupUrlTooLong');
            default:
                return '';
        }
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    onActionButtonClick_() {
        const whenDone = this.model ?
            this.browserProxy_.editStartupPage(this.model.modelIndex, this.url_) :
            this.browserProxy_.addStartupPage(this.url_);
        whenDone.then(success => {
            if (success) {
                this.$.dialog.close();
            }
            // If the URL was invalid, there is nothing to do, just leave the dialog
            // open and let the user fix the URL or cancel.
        });
    }
    onInput_() {
        if (this.url_.length === 0) {
            this.$.actionButton.disabled = true;
            this.error_ = UrlInputError.NONE;
            return;
        }
        if (this.url_.length >= this.urlLimit_) {
            this.$.actionButton.disabled = true;
            this.error_ = UrlInputError.TOO_LONG;
            return;
        }
        this.browserProxy_.validateStartupPage(this.url_).then(isValid => {
            this.$.actionButton.disabled = !isValid;
            this.error_ = isValid ? UrlInputError.NONE : UrlInputError.INVALID_URL;
        });
    }
}
customElements.define(SettingsStartupUrlDialogElement.is, SettingsStartupUrlDialogElement);
