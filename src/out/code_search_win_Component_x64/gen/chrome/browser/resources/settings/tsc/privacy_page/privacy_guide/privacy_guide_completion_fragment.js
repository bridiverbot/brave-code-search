// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'privacy-guide-completion-fragment' is the fragment in a privacy guide
 * card that contains the completion screen and its description.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../icons.html.js';
import '../../privacy_icons.html.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ClearBrowsingDataBrowserProxyImpl } from '../../clear_browsing_data_dialog/clear_browsing_data_browser_proxy.js';
import { loadTimeData } from '../../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideInteractions, PrivacyGuideStepsEligibleAndReached } from '../../metrics_browser_proxy.js';
import { HatsBrowserProxyImpl, TrustSafetyInteraction } from '../hats_browser_proxy.js';
import { getCss } from './privacy_guide_completion_fragment.css.js';
import { getHtml } from './privacy_guide_completion_fragment.html.js';
const PrivacyGuideCompletionFragmentElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class PrivacyGuideCompletionFragmentElement extends PrivacyGuideCompletionFragmentElementBase {
    static get is() {
        return 'privacy-guide-completion-fragment';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            shouldShowAiSettings_: { type: Boolean },
            shouldShowWaa_: { type: Boolean },
        };
    }
    #shouldShowAiSettings__accessor_storage = loadTimeData.getBoolean('showAiPage');
    get shouldShowAiSettings_() { return this.#shouldShowAiSettings__accessor_storage; }
    set shouldShowAiSettings_(value) { this.#shouldShowAiSettings__accessor_storage = value; }
    #shouldShowWaa__accessor_storage = false;
    get shouldShowWaa_() { return this.#shouldShowWaa__accessor_storage; }
    set shouldShowWaa_(value) { this.#shouldShowWaa__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addWebUiListener('update-sync-state', (event) => this.updateWaaLink_(event.signedIn));
        ClearBrowsingDataBrowserProxyImpl.getInstance().getSyncState().then((status) => this.updateWaaLink_(status.signedIn));
    }
    focus() {
        const header = this.shadowRoot.querySelector('.welcome-completion-header-label');
        assert(header);
        header.focus();
    }
    onViewEnterStart_() {
        HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.COMPLETED_PRIVACY_GUIDE);
        this.metricsBrowserProxy_
            .recordPrivacyGuideStepsEligibleAndReachedHistogram(PrivacyGuideStepsEligibleAndReached.COMPLETION_REACHED);
    }
    getSubheader_() {
        return !this.shouldShowWaa_ ?
            this.i18n('privacyGuideCompletionCardSubHeaderNoLinks') :
            this.i18n('privacyGuideCompletionCardSubHeader');
    }
    /** Updates the completion card waa link depending on the signin state. */
    updateWaaLink_(isSignedIn) {
        this.shouldShowWaa_ = isSignedIn;
    }
    onBackButtonClick_(e) {
        e.stopPropagation();
        this.fire('back-button-click');
    }
    onLeaveButtonClick_() {
        this.metricsBrowserProxy_.recordPrivacyGuideNextNavigationHistogram(PrivacyGuideInteractions.COMPLETION_NEXT_BUTTON);
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.NextClickCompletion');
        // Send a |close| event to the privacy guide dialog to close itself.
        this.fire('close');
    }
    onAiRowClick_() {
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.AI_SETTINGS_COMPLETION_LINK);
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.CompletionAiSettingsClick');
        // TODO(crbug.com/40162029): Replace this with an ordinary OpenWindowProxy
        // call.
        this.shadowRoot.querySelector('#aiRowLink').dispatchEvent(new MouseEvent('click'));
    }
    onWaaClick_() {
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.SWAA_COMPLETION_LINK);
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.CompletionSWAAClick');
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('activityControlsUrlInPrivacyGuide'));
    }
}
customElements.define(PrivacyGuideCompletionFragmentElement.is, PrivacyGuideCompletionFragmentElement);
