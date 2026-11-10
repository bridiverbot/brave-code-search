// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { PageHandlerFactory, PageHandlerRemote } from '../cross_device_signin_qr_bubble.mojom-webui.js';
import { getCss } from './cross_device_signin_qr_bubble_app.css.js';
import { getHtml } from './cross_device_signin_qr_bubble_app.html.js';
const CrossDeviceSigninQrBubbleAppElementBase = I18nMixinLit(CrLitElement);
export class CrossDeviceSigninQrBubbleAppElement extends CrossDeviceSigninQrBubbleAppElementBase {
    static get is() {
        return 'cross-device-signin-qr-bubble-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            fullName: { type: String },
            email: { type: String },
            qrCodeDataUri: { type: String },
        };
    }
    #fullName_accessor_storage = '';
    get fullName() { return this.#fullName_accessor_storage; }
    set fullName(value) { this.#fullName_accessor_storage = value; }
    #email_accessor_storage = '';
    get email() { return this.#email_accessor_storage; }
    set email(value) { this.#email_accessor_storage = value; }
    #qrCodeDataUri_accessor_storage = '';
    get qrCodeDataUri() { return this.#qrCodeDataUri_accessor_storage; }
    set qrCodeDataUri(value) { this.#qrCodeDataUri_accessor_storage = value; }
    handler_ = new PageHandlerRemote();
    async connectedCallback() {
        super.connectedCallback();
        PageHandlerFactory.getRemote().createCrossDeviceSigninQrBubbleHandler(this.handler_.$.bindNewPipeAndPassReceiver());
        const response = await this.handler_.getRegistrationData();
        if (!response.data) {
            return;
        }
        const data = response.data;
        this.fullName = data.fullName;
        this.email = data.email;
        this.qrCodeDataUri = data.qrCodeDataUri;
    }
}
customElements.define(CrossDeviceSigninQrBubbleAppElement.is, CrossDeviceSigninQrBubbleAppElement);
