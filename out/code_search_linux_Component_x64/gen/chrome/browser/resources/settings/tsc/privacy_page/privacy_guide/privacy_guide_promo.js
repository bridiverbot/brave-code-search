// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-guide-promo' is an element representing a promo for the
 * privacy guide feature.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsBrowserProxyImpl, PrivacyGuideInteractions } from '../../metrics_browser_proxy.js';
import { routes } from '../../route.js';
import { Router } from '../../router.js';
import { getCss } from './privacy_guide_promo.css.js';
import { getHtml } from './privacy_guide_promo.html.js';
export class PrivacyGuidePromoElement extends CrLitElement {
    static get is() {
        return 'settings-privacy-guide-promo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    onPrivacyGuideStartClick_() {
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.StartPromo');
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.PROMO_ENTRY);
        Router.getInstance().navigateTo(routes.PRIVACY_GUIDE);
    }
    async onNoThanksButtonClick_() {
        await PrefService.getInstance().whenInitialized();
        PrefService.getInstance().setPrefValue('privacy_guide.viewed', true);
    }
}
customElements.define(PrivacyGuidePromoElement.is, PrivacyGuidePromoElement);
