// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './code_section.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './load_error.css.js';
import { getHtml } from './load_error.html.js';
export class LoadErrorElement extends CrLitElement {
    static get is() {
        return 'extensions-load-error';
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
            loadError: { type: Object },
            file_: { type: String },
            error_: { type: String },
            retrying_: { type: Boolean },
            isCodeSectionActive_: { type: Boolean },
            codeSectionProperties_: { type: Object },
        };
    }
    static get observers() {
        return [
            'observeLoadErrorChanges_(loadError)',
        ];
    }
    #delegate_accessor_storage;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #loadError_accessor_storage;
    get loadError() { return this.#loadError_accessor_storage; }
    set loadError(value) { this.#loadError_accessor_storage = value; }
    #codeSectionProperties__accessor_storage = null;
    get codeSectionProperties_() { return this.#codeSectionProperties__accessor_storage; }
    set codeSectionProperties_(value) { this.#codeSectionProperties__accessor_storage = value; }
    #file__accessor_storage;
    get file_() { return this.#file__accessor_storage; }
    set file_(value) { this.#file__accessor_storage = value; }
    #error__accessor_storage = null;
    get error_() { return this.#error__accessor_storage; }
    set error_(value) { this.#error__accessor_storage = value; }
    #isCodeSectionActive__accessor_storage;
    get isCodeSectionActive_() { return this.#isCodeSectionActive__accessor_storage; }
    set isCodeSectionActive_(value) { this.#isCodeSectionActive__accessor_storage = value; }
    #retrying__accessor_storage = false;
    get retrying_() { return this.#retrying__accessor_storage; }
    set retrying_(value) { this.#retrying__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('loadError')) {
            assert(this.loadError);
            if (this.loadError instanceof Error) {
                this.file_ = undefined;
                this.error_ = this.loadError.message;
                this.isCodeSectionActive_ = false;
                return;
            }
            this.file_ = this.loadError.path;
            this.error_ = this.loadError.error;
            if (this.loadError.source) {
                this.codeSectionProperties_ = {
                    source: this.loadError.source,
                    title: '',
                    message: this.loadError.error,
                };
                this.isCodeSectionActive_ = true;
            }
            else {
                this.isCodeSectionActive_ = false;
            }
        }
    }
    show() {
        this.$.dialog.showModal();
    }
    onCloseClick_() {
        this.close();
    }
    close() {
        this.$.dialog.close();
    }
    onRetryClick_() {
        this.retrying_ = true;
        assert(this.delegate);
        assert(this.loadError);
        this.delegate
            .retryLoadUnpacked(this.loadError instanceof Error ? undefined :
            this.loadError.retryGuid)
            .then(() => {
            this.close();
        }, loadError => {
            this.loadError = loadError;
            this.retrying_ = false;
        });
    }
}
customElements.define(LoadErrorElement.is, LoadErrorElement);
