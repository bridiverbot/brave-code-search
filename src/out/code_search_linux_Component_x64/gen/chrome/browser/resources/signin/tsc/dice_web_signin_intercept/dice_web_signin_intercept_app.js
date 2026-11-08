// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './dice_web_signin_intercept_app.css.js';
import { getHtml } from './dice_web_signin_intercept_app.html.js';
import { DiceWebSigninInterceptBrowserProxyImpl } from './dice_web_signin_intercept_browser_proxy.js';
const DiceWebSigninInterceptAppElementBase = WebUiListenerMixinLit(CrLitElement);
export class DiceWebSigninInterceptAppElement extends DiceWebSigninInterceptAppElementBase {
    static get is() {
        return 'dice-web-signin-intercept-app';
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
            acceptButtonClicked_: { type: Boolean },
        };
    }
    #interceptionParameters__accessor_storage = {
        headerText: '',
        bodyTitle: '',
        bodyText: '',
        confirmButtonLabel: '',
        cancelButtonLabel: '',
        managedDisclaimerText: '',
        headerTextColor: '',
        interceptedProfileColor: '',
        primaryProfileColor: '',
        interceptedAccount: { pictureUrl: '', avatarBadge: '', userBadgeAltText: '' },
        primaryAccount: { pictureUrl: '', avatarBadge: '', userBadgeAltText: '' },
        useV2Design: false,
        useV2ProfileSwitchDesign: false,
        showManagedDisclaimer: false,
        interceptedProfileBadgeColor: '',
        primaryProfileBadgeColor: '',
    };
    get interceptionParameters_() { return this.#interceptionParameters__accessor_storage; }
    set interceptionParameters_(value) { this.#interceptionParameters__accessor_storage = value; }
    #acceptButtonClicked__accessor_storage = false;
    get acceptButtonClicked_() { return this.#acceptButtonClicked__accessor_storage; }
    set acceptButtonClicked_(value) { this.#acceptButtonClicked__accessor_storage = value; }
    diceWebSigninInterceptBrowserProxy_ = DiceWebSigninInterceptBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('interception-parameters-changed', this.handleParametersChanged_.bind(this));
        this.diceWebSigninInterceptBrowserProxy_.pageLoaded().then(parameters => this.onPageLoaded_(parameters));
    }
    async onPageLoaded_(parameters) {
        this.handleParametersChanged_(parameters);
        await this.updateComplete;
        const height = this.$.interceptDialog.offsetHeight;
        this.diceWebSigninInterceptBrowserProxy_.initializedWithHeight(height);
    }
    onAcceptClick_() {
        this.acceptButtonClicked_ = true;
        this.diceWebSigninInterceptBrowserProxy_.accept();
    }
    onCancelClick_() {
        this.diceWebSigninInterceptBrowserProxy_.cancel();
    }
    /** Called when the interception parameters are updated. */
    handleParametersChanged_(parameters) {
        this.interceptionParameters_ = parameters;
        this.style.setProperty('--intercepted-profile-color', parameters.interceptedProfileColor);
        this.style.setProperty('--primary-profile-color', parameters.primaryProfileColor);
        this.style.setProperty('--header-text-color', parameters.headerTextColor);
        this.style.setProperty('--intercepted-profile-avatar-badge-color', parameters.interceptedProfileBadgeColor);
        this.style.setProperty('--primary-profile-avatar-badge-color', parameters.primaryProfileBadgeColor);
    }
    sanitizeInnerHtml_(text) {
        return sanitizeInnerHtml(text);
    }
}
customElements.define(DiceWebSigninInterceptAppElement.is, DiceWebSigninInterceptAppElement);
