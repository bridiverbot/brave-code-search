// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_page/settings_section.js';
import './tab_discard/exception_list.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { getCss as getSettingsSharedCss } from '../settings_shared_lit.css.js';
import { PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
import { getHtml } from './performance_page.html.js';
export const DISCARD_RING_PREF = 'performance_tuning.discard_ring_treatment.enabled';
export const PERFORMANCE_INTERVENTION_NOTIFICATION_PREF = 'performance_tuning.intervention_notification.enabled';
// browser_element_identifiers constants
const INACTIVE_TAB_SETTING_ELEMENT_ID = 'kInactiveTabSettingElementId';
const SettingsPerformancePageElementBase = HelpBubbleMixinLit(PrefServiceObserverMixinLit(CrLitElement));
export class SettingsPerformancePageElement extends SettingsPerformancePageElementBase {
    static get is() {
        return 'settings-performance-page';
    }
    static get styles() {
        return [
            getSettingsSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const discardRingTreatmentToggleButton = this.shadowRoot.querySelector('#discardRingTreatmentToggleButton');
        if (discardRingTreatmentToggleButton) {
            this.registerHelpBubble(INACTIVE_TAB_SETTING_ELEMENT_ID, discardRingTreatmentToggleButton.getBubbleAnchor());
        }
    }
    onDiscardRingChange_() {
        this.metricsProxy_.recordDiscardRingTreatmentEnabledChanged(PrefService.getInstance().getPref(DISCARD_RING_PREF).value);
    }
    onDiscardRingTreatmentSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('discardRingTreatmentLearnMoreUrl'));
    }
    onPerformanceInterventionSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('performanceInterventionLearnMoreUrl'));
    }
    onTabHoverPreviewCardLinkClick_() {
        Router.getInstance().navigateTo(routes.APPEARANCE, undefined, true);
    }
    onPerformanceInterventionToggleButtonChange_() {
        this.metricsProxy_.recordPerformanceInterventionToggleButtonChanged(PrefService.getInstance()
            .getPref(PERFORMANCE_INTERVENTION_NOTIFICATION_PREF)
            .value);
    }
    showSendFeedbackButton_() {
        // 
        // 
        return false;
        // 
    }
    onSendFeedback_(_e) {
        // 
    }
}
export { SettingsPerformancePageElement as PerformancePageElement };
customElements.define(SettingsPerformancePageElement.is, SettingsPerformancePageElement);
