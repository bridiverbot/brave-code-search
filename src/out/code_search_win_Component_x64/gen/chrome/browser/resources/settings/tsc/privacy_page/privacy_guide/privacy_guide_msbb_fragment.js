// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'privacy-guide-msbb-fragment' is the fragment in a privacy guide card
 * that contains the MSBB setting with a two-column description.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideSettingsStates, PrivacyGuideStepsEligibleAndReached } from '../../metrics_browser_proxy.js';
import { getCss as getPrivacyGuideFragmentSharedCss } from './privacy_guide_fragment_shared_lit.css.js';
import { getHtml } from './privacy_guide_msbb_fragment.html.js';
export class PrivacyGuideMsbbFragmentElement extends CrLitElement {
    static get is() {
        return 'privacy-guide-msbb-fragment';
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
    startStateMsbbOn_;
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
        this.startStateMsbbOn_ =
            PrefService.getInstance()
                .getPref('url_keyed_anonymized_data_collection.enabled')
                .value;
        this.metricsBrowserProxy_
            .recordPrivacyGuideStepsEligibleAndReachedHistogram(PrivacyGuideStepsEligibleAndReached.MSBB_REACHED);
    }
    onViewExitFinish_() {
        const endStateMsbbOn = PrefService.getInstance()
            .getPref('url_keyed_anonymized_data_collection.enabled')
            .value;
        let state = null;
        if (this.startStateMsbbOn_) {
            state = endStateMsbbOn ? PrivacyGuideSettingsStates.MSBB_ON_TO_ON :
                PrivacyGuideSettingsStates.MSBB_ON_TO_OFF;
        }
        else {
            state = endStateMsbbOn ? PrivacyGuideSettingsStates.MSBB_OFF_TO_ON :
                PrivacyGuideSettingsStates.MSBB_OFF_TO_OFF;
        }
        this.metricsBrowserProxy_.recordPrivacyGuideSettingsStatesHistogram(state);
    }
    onMsbbToggleChange_() {
        if (PrefService.getInstance()
            .getPref('url_keyed_anonymized_data_collection.enabled')
            .value) {
            this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeMSBBOn');
        }
        else {
            this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.ChangeMSBBOff');
        }
    }
}
customElements.define(PrivacyGuideMsbbFragmentElement.is, PrivacyGuideMsbbFragmentElement);
