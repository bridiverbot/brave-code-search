// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'privacy-guide-cookies-fragment' is the fragment in a privacy
 * guide card that contains the cookie settings and their descriptions.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/collapse_radio_button.js';
import '../../controls/settings_radio_group.js';
import '../../icons.html.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideSettingsStates, PrivacyGuideStepsEligibleAndReached } from '../../metrics_browser_proxy.js';
import { ThirdPartyCookieBlockingSetting } from '../../site_settings/site_settings_browser_proxy.js';
import { getHtml } from './privacy_guide_cookies_fragment.html.js';
import { getCss as getPrivacyGuideFragmentSharedCss } from './privacy_guide_fragment_shared_lit.css.js';
export class PrivacyGuideCookiesFragmentElement extends CrLitElement {
    static get is() {
        return 'privacy-guide-cookies-fragment';
    }
    static get styles() {
        return [
            getPrivacyGuideFragmentSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    startStateBlock3PIncognito_;
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
    }
    focus() {
        // The fragment element is focused when it becomes visible. Move the focus
        // to the fragment header, so that the newly shown content of the fragment
        // is downwards from the focus position. This allows users of screen readers
        // to continue navigating the screen reader position downwards through the
        // newly visible content.
        this.shadowRoot.querySelector('[focus-element]').focus();
    }
    onViewEnterStart_() {
        this.startStateBlock3PIncognito_ =
            PrefService.getInstance()
                .getPref('generated.third_party_cookie_blocking_setting')
                .value === ThirdPartyCookieBlockingSetting.INCOGNITO_ONLY;
        this.metricsBrowserProxy_
            .recordPrivacyGuideStepsEligibleAndReachedHistogram(PrivacyGuideStepsEligibleAndReached.COOKIES_REACHED);
    }
    onViewExitFinish_() {
        const endStateBlock3PIncognito = PrefService.getInstance()
            .getPref('generated.third_party_cookie_blocking_setting')
            .value === ThirdPartyCookieBlockingSetting.INCOGNITO_ONLY;
        let state = null;
        if (this.startStateBlock3PIncognito_) {
            state = endStateBlock3PIncognito ?
                PrivacyGuideSettingsStates.BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO :
                PrivacyGuideSettingsStates.BLOCK_3P_INCOGNITO_TO_3P;
        }
        else {
            state = endStateBlock3PIncognito ?
                PrivacyGuideSettingsStates.BLOCK_3P_TO_3P_INCOGNITO :
                PrivacyGuideSettingsStates.BLOCK_3P_TO_3P;
        }
        this.metricsBrowserProxy_.recordPrivacyGuideSettingsStatesHistogram(state);
    }
    onCookies3pIncognitoClick_() {
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeCookiesBlock3PIncognito');
    }
    onCookies3pClick_() {
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeCookiesBlock3P');
    }
}
customElements.define(PrivacyGuideCookiesFragmentElement.is, PrivacyGuideCookiesFragmentElement);
