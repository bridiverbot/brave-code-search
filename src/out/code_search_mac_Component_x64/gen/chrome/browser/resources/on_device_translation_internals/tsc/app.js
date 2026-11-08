// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory } from './on_device_translation_internals.mojom-webui.js';
import { LanguagePackStatus } from './on_device_translation_internals.mojom-webui.js';
export class OnDeviceTranslationInternalsAppElement extends CrLitElement {
    static get is() {
        return 'on-device-translation-internals-app';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            languagePackStatus_: { type: Array },
        };
    }
    proxy_ = browserProxyFactory.getInstance();
    onLanguagePackStatusListenerId_ = null;
    #languagePackStatus__accessor_storage = [];
    get languagePackStatus_() { return this.#languagePackStatus__accessor_storage; }
    set languagePackStatus_(value) { this.#languagePackStatus__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.onLanguagePackStatusListenerId_ =
            this.proxy_.callbackRouter.onLanguagePackStatus.addListener(this.onLanguagePackStatus_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onLanguagePackStatusListenerId_);
        this.proxy_.callbackRouter.removeListener(this.onLanguagePackStatusListenerId_);
    }
    onLanguagePackStatus_(status) {
        this.languagePackStatus_ = status;
    }
    getStatusString_(status) {
        switch (status) {
            case LanguagePackStatus.kNotInstalled:
                return 'Not installed';
            case LanguagePackStatus.kInstalling:
                return 'Installing';
            case LanguagePackStatus.kInstalled:
                return 'Installed';
            default:
                assertNotReached('Invalid status type.');
        }
    }
    getButtonString_(status) {
        return status === LanguagePackStatus.kNotInstalled ? 'Install' :
            'Uninstall';
    }
    onButtonClick_(e) {
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        if (this.languagePackStatus_[index].status ===
            LanguagePackStatus.kNotInstalled) {
            this.proxy_.handler.installLanguagePackage(index);
        }
        else {
            this.proxy_.handler.uninstallLanguagePackage(index);
        }
    }
}
customElements.define(OnDeviceTranslationInternalsAppElement.is, OnDeviceTranslationInternalsAppElement);
