// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './pack_dialog_alert.css.js';
import { getHtml } from './pack_dialog_alert.html.js';
export class ExtensionsPackDialogAlertElement extends CrLitElement {
    static get is() {
        return 'extensions-pack-dialog-alert';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            model: { type: Object },
            cancelLabel_: { type: String },
            confirmLabel_: { type: String },
            title_: { type: String },
        };
    }
    #model_accessor_storage = {
        message: '',
        item_path: '',
        pem_path: '',
        override_flags: 0,
        status: chrome.developerPrivate.PackStatus.SUCCESS,
    };
    get model() { return this.#model_accessor_storage; }
    set model(value) { this.#model_accessor_storage = value; }
    #cancelLabel__accessor_storage = null;
    get cancelLabel_() { return this.#cancelLabel__accessor_storage; }
    set cancelLabel_(value) { this.#cancelLabel__accessor_storage = value; }
    #confirmLabel__accessor_storage = '';
    /** This needs to be initialized to trigger data-binding. */
    get confirmLabel_() { return this.#confirmLabel__accessor_storage; }
    set confirmLabel_(value) { this.#confirmLabel__accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    get returnValue() {
        return this.$.dialog.getNative().returnValue;
    }
    firstUpdated() {
        // Initialize button label values for initial html binding.
        this.cancelLabel_ = null;
        this.confirmLabel_ = null;
        switch (this.model.status) {
            case chrome.developerPrivate.PackStatus.WARNING:
                this.title_ = loadTimeData.getString('packDialogWarningTitle');
                this.cancelLabel_ = loadTimeData.getString('cancel');
                this.confirmLabel_ = loadTimeData.getString('packDialogProceedAnyway');
                break;
            case chrome.developerPrivate.PackStatus.ERROR:
                this.title_ = loadTimeData.getString('packDialogErrorTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            case chrome.developerPrivate.PackStatus.SUCCESS:
                this.title_ = loadTimeData.getString('packDialogTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            default:
                assertNotReached();
        }
    }
    getCancelButtonClass_() {
        return this.confirmLabel_ ? 'cancel-button' : 'action-button';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        // The confirm button should only be available in WARNING state.
        assert(this.model.status === chrome.developerPrivate.PackStatus.WARNING);
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsPackDialogAlertElement.is, ExtensionsPackDialogAlertElement);
