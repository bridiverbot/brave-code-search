// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement, nothing } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DiceWebSigninInterceptBrowserProxyImpl } from '../dice_web_signin_intercept_browser_proxy.js';
import { getCss } from './chrome_signin_app.css.js';
import { getHtml } from './chrome_signin_app.html.js';
const ChromeSigninAppElementBase = I18nMixinLit(WebUiListenerMixinLit(CrLitElement));
export class ChromeSigninAppElement extends ChromeSigninAppElementBase {
    static get is() {
        return 'chrome-signin-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            interceptionParameters_: { type: Object },
        };
    }
    #interceptionParameters__accessor_storage = {
        title: '',
        subtitle: '',
        fullName: '',
        givenName: '',
        email: '',
        pictureUrl: '',
        managedUserBadge: '',
        userBadgeAltText: '',
    };
    get interceptionParameters_() { return this.#interceptionParameters__accessor_storage; }
    set interceptionParameters_(value) { this.#interceptionParameters__accessor_storage = value; }
    diceWebSigninInterceptBrowserProxy_ = DiceWebSigninInterceptBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('interception-chrome-signin-parameters-changed', this.setParameters_.bind(this));
        this.diceWebSigninInterceptBrowserProxy_.chromeSigninPageLoaded().then(parameters => this.onParametersLoaded_(parameters));
    }
    setParameters_(parameters) {
        this.interceptionParameters_ = parameters;
    }
    async onParametersLoaded_(parameters) {
        this.setParameters_(parameters);
        await this.updateComplete;
        const height = this.$.interceptDialog.offsetHeight;
        this.diceWebSigninInterceptBrowserProxy_.initializedWithHeight(height);
    }
    onCancelClick_() {
        this.diceWebSigninInterceptBrowserProxy_.cancel();
    }
    onAcceptClick_() {
        this.diceWebSigninInterceptBrowserProxy_.accept();
    }
    getAcceptButtonAriaLabel_() {
        if (this.interceptionParameters_.email.length === 0) {
            return nothing;
        }
        return this
            .i18n('acceptButtonAriaLabel', this.interceptionParameters_.givenName)
            .concat(' ', this.interceptionParameters_.email);
    }
}
customElements.define(ChromeSigninAppElement.is, ChromeSigninAppElement);
