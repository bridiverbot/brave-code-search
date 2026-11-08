// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ManagedUserProfileNoticeBrowserProxyImpl } from './managed_user_profile_notice_browser_proxy.js';
import { getCss } from './signals_disclaimer.css.js';
import { getHtml } from './signals_disclaimer.html.js';
const SignalsDisclaimerElementBase = I18nMixinLit(CrLitElement);
export class SignalsDisclaimerElement extends SignalsDisclaimerElementBase {
    static get is() {
        return 'signals-disclaimer';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            pictureUrl: { type: String },
            isModalDialog: { type: Boolean },
        };
    }
    #pictureUrl_accessor_storage = '';
    get pictureUrl() { return this.#pictureUrl_accessor_storage; }
    set pictureUrl(value) { this.#pictureUrl_accessor_storage = value; }
    #isModalDialog_accessor_storage = loadTimeData.getBoolean('isModalDialog');
    get isModalDialog() { return this.#isModalDialog_accessor_storage; }
    set isModalDialog(value) { this.#isModalDialog_accessor_storage = value; }
    firstUpdated() {
        const titleElement = this.shadowRoot.querySelector('.title');
        assert(titleElement);
        titleElement.focus();
    }
    onLearnMoreClick() {
        ManagedUserProfileNoticeBrowserProxyImpl.getInstance().learnMoreClicked();
    }
    onLearnMoreKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.onLearnMoreClick();
        }
    }
}
customElements.define(SignalsDisclaimerElement.is, SignalsDisclaimerElement);
