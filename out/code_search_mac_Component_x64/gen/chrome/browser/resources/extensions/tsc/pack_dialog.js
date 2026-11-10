// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './pack_dialog_alert.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './pack_dialog.css.js';
import { getHtml } from './pack_dialog.html.js';
class DummyPackDialogDelegate {
    choosePackRootDirectory() {
        return Promise.resolve('');
    }
    choosePrivateKeyPath() {
        return Promise.resolve('');
    }
    packExtension(_rootPath, _keyPath, _flag) {
        return Promise.resolve({
            message: '',
            item_path: '',
            pem_path: '',
            override_flags: 0,
            status: chrome.developerPrivate.PackStatus.SUCCESS,
        });
    }
}
export class ExtensionsPackDialogElement extends CrLitElement {
    static get is() {
        return 'extensions-pack-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            packDirectory_: { type: String },
            keyFile_: { type: String },
            lastResponse_: { type: Object },
        };
    }
    #delegate_accessor_storage = new DummyPackDialogDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #packDirectory__accessor_storage = '';
    get packDirectory_() { return this.#packDirectory__accessor_storage; }
    set packDirectory_(value) { this.#packDirectory__accessor_storage = value; }
    #keyFile__accessor_storage = '';
    get keyFile_() { return this.#keyFile__accessor_storage; }
    set keyFile_(value) { this.#keyFile__accessor_storage = value; }
    #lastResponse__accessor_storage = null;
    get lastResponse_() { return this.#lastResponse__accessor_storage; }
    set lastResponse_(value) { this.#lastResponse__accessor_storage = value; }
    onKeyFileValueChanged_(e) {
        this.keyFile_ = e.detail.value;
    }
    onPackDirectoryValueChanged_(e) {
        this.packDirectory_ = e.detail.value;
    }
    onRootBrowseClick_() {
        this.delegate.choosePackRootDirectory().then(path => {
            if (path) {
                this.packDirectory_ = path;
            }
        });
    }
    onKeyBrowseClick_() {
        this.delegate.choosePrivateKeyPath().then(path => {
            if (path) {
                this.keyFile_ = path;
            }
        });
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        this.delegate.packExtension(this.packDirectory_, this.keyFile_, 0)
            .then(response => this.onPackResponse_(response));
    }
    /**
     * @param response The response from request to pack an extension.
     */
    onPackResponse_(response) {
        this.lastResponse_ = response;
    }
    /**
     * In the case that the alert dialog was a success message, the entire
     * pack-dialog should close. Otherwise, we detach the alert by setting
     * lastResponse_ null. Additionally, if the user selected "proceed anyway"
     * in the dialog, we pack the extension again with override flags.
     */
    onAlertClose_(e) {
        e.stopPropagation();
        if (this.lastResponse_.status ===
            chrome.developerPrivate.PackStatus.SUCCESS) {
            this.$.dialog.close();
            return;
        }
        // This is only possible for a warning dialog.
        if (this.shadowRoot.querySelector('extensions-pack-dialog-alert').returnValue ===
            'success') {
            this.delegate
                .packExtension(this.lastResponse_.item_path, this.lastResponse_.pem_path, this.lastResponse_.override_flags)
                .then(response => this.onPackResponse_(response));
        }
        this.lastResponse_ = null;
    }
}
customElements.define(ExtensionsPackDialogElement.is, ExtensionsPackDialogElement);
