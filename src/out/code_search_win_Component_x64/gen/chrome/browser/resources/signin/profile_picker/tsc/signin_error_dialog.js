// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './signin_error_dialog.css.js';
import { getHtml } from './signin_error_dialog.html.js';
import { ManageProfilesBrowserProxyImpl } from './manage_profiles_browser_proxy.js';
const SigninErrorDialogElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class SigninErrorDialogElement extends SigninErrorDialogElementBase {
    static get is() {
        return 'signin-error-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            signinErrorDialogTitle_: { type: String },
            signinErrorDialogBody_: { type: String },
            shouldShowSigninButton_: { type: Boolean },
        };
    }
    #signinErrorDialogTitle__accessor_storage = '';
    get signinErrorDialogTitle_() { return this.#signinErrorDialogTitle__accessor_storage; }
    set signinErrorDialogTitle_(value) { this.#signinErrorDialogTitle__accessor_storage = value; }
    #signinErrorDialogBody__accessor_storage = '';
    get signinErrorDialogBody_() { return this.#signinErrorDialogBody__accessor_storage; }
    set signinErrorDialogBody_(value) { this.#signinErrorDialogBody__accessor_storage = value; }
    #shouldShowSigninButton__accessor_storage = false;
    get shouldShowSigninButton_() { return this.#shouldShowSigninButton__accessor_storage; }
    set shouldShowSigninButton_(value) { this.#shouldShowSigninButton__accessor_storage = value; }
    forceSigninErrorProfilePath_ = '';
    manageProfilesBrowserProxy_ = ManageProfilesBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('display-signin-error-dialog', (title, body, profilePath) => this.show(title, body, profilePath));
    }
    show(title, body, profilePath) {
        this.signinErrorDialogTitle_ = title;
        this.signinErrorDialogBody_ = body;
        this.forceSigninErrorProfilePath_ = profilePath;
        this.shouldShowSigninButton_ = profilePath.length !== 0;
        this.$.dialog.showModal();
    }
    onOkButtonClick_() {
        this.$.dialog.close();
        this.clearErrorDialogInfo_();
    }
    onReauthClick_() {
        this.$.dialog.close();
        this.manageProfilesBrowserProxy_.launchSelectedProfile(this.forceSigninErrorProfilePath_);
        this.clearErrorDialogInfo_();
    }
    clearErrorDialogInfo_() {
        this.signinErrorDialogTitle_ = '';
        this.signinErrorDialogBody_ = '';
        this.forceSigninErrorProfilePath_ = '';
        this.shouldShowSigninButton_ = false;
    }
}
customElements.define(SigninErrorDialogElement.is, SigninErrorDialogElement);
