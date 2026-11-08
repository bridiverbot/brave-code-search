// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../controls/collapse_radio_button.js';
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import '../settings_page/settings_section.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { NetworkPredictionOptions } from './constants.js';
import { PerformanceBrowserProxyImpl } from './performance_browser_proxy.js';
import { getCss } from './speed_page.css.js';
import { getHtml } from './speed_page.html.js';
const SpeedPageElementBase = PrefServiceObserverMixinLit(CrLitElement);
export const PRELOADING_PREF = 'net.network_prediction_options';
export class SpeedPageElement extends SpeedPageElementBase {
    static get is() {
        return 'settings-speed-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            numericUncheckedValues_: { type: Array },
            cpuPerformanceInfo_: { type: Object },
            cpuPerformanceModelLabel_: { type: String },
            cpuPerformanceEnabled_: { type: Boolean },
            cpuPerformanceTierOptions_: { type: Array },
            preloadingStatePref_: { type: Object },
        };
    }
    #cpuPerformanceInfo__accessor_storage = null;
    get cpuPerformanceInfo_() { return this.#cpuPerformanceInfo__accessor_storage; }
    set cpuPerformanceInfo_(value) { this.#cpuPerformanceInfo__accessor_storage = value; }
    #cpuPerformanceModelLabel__accessor_storage = '';
    get cpuPerformanceModelLabel_() { return this.#cpuPerformanceModelLabel__accessor_storage; }
    set cpuPerformanceModelLabel_(value) { this.#cpuPerformanceModelLabel__accessor_storage = value; }
    #cpuPerformanceEnabled__accessor_storage = loadTimeData.getBoolean('cpuPerformanceEnabled');
    get cpuPerformanceEnabled_() { return this.#cpuPerformanceEnabled__accessor_storage; }
    set cpuPerformanceEnabled_(value) { this.#cpuPerformanceEnabled__accessor_storage = value; }
    #cpuPerformanceTierOptions__accessor_storage = [
        {
            value: -1,
            name: loadTimeData.getString('cpuPerformanceTierDefault'),
        },
        {
            value: 0,
            name: loadTimeData.getString('cpuPerformanceTierUnknown'),
        },
        {
            value: 1,
            name: loadTimeData.getString('cpuPerformanceTierLow'),
        },
        {
            value: 2,
            name: loadTimeData.getString('cpuPerformanceTierMid'),
        },
        {
            value: 3,
            name: loadTimeData.getString('cpuPerformanceTierHigh'),
        },
        {
            value: 4,
            name: loadTimeData.getString('cpuPerformanceTierUltra'),
        },
    ];
    get cpuPerformanceTierOptions_() { return this.#cpuPerformanceTierOptions__accessor_storage; }
    set cpuPerformanceTierOptions_(value) { this.#cpuPerformanceTierOptions__accessor_storage = value; }
    #numericUncheckedValues__accessor_storage = [NetworkPredictionOptions.DISABLED];
    get numericUncheckedValues_() { return this.#numericUncheckedValues__accessor_storage; }
    set numericUncheckedValues_(value) { this.#numericUncheckedValues__accessor_storage = value; }
    #preloadingStatePref__accessor_storage;
    get preloadingStatePref_() { return this.#preloadingStatePref__accessor_storage; }
    set preloadingStatePref_(value) { this.#preloadingStatePref__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(PRELOADING_PREF, 'preloadingStatePref_');
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        PrefService.getInstance().whenInitialized().then(() => {
            const prefValue = PrefService.getInstance()
                .getPref(PRELOADING_PREF)
                .value;
            if (prefValue === NetworkPredictionOptions.WIFI_ONLY_DEPRECATED) {
                // The default pref value is deprecated, and is treated the same as
                // STANDARD. See chrome/browser/preloading/preloading_prefs.h.
                PrefService.getInstance().setPrefValue(PRELOADING_PREF, NetworkPredictionOptions.STANDARD);
            }
        });
        PerformanceBrowserProxyImpl.getInstance().getCpuPerformanceInfo().then(async (info) => {
            this.cpuPerformanceInfo_ = info;
            const coresText = await PluralStringProxyImpl.getInstance().getPluralString('cpuPerformanceCores', info.cores);
            this.cpuPerformanceModelLabel_ = loadTimeData.getStringF('cpuPerformanceModel', info.model, coresText);
        });
    }
    isPreloadingEnabled_() {
        if (!this.preloadingStatePref_) {
            return false;
        }
        return this.preloadingStatePref_.value !==
            NetworkPredictionOptions.DISABLED;
    }
    onPreloadingStateChange_() {
        // Automatic expanding is disabled so that the radio buttons are collapsed
        // initially. Because of this, radio buttons' expanded states need to be
        // updated manually.
        // Defer updates to let the pref change propagate to the radio buttons
        // first.
        Promise.resolve().then(() => {
            this.$.preloadingExtended.updateCollapsed();
            this.$.preloadingStandard.updateCollapsed();
        });
    }
    onPreloadingSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('preloadingLearnMoreUrl'));
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
    getCpuPerformanceNominalTierLabel_() {
        const tierLabels = [
            loadTimeData.getString('cpuPerformanceTierUnknown'),
            loadTimeData.getString('cpuPerformanceTierLow'),
            loadTimeData.getString('cpuPerformanceTierMid'),
            loadTimeData.getString('cpuPerformanceTierHigh'),
            loadTimeData.getString('cpuPerformanceTierUltra'),
        ];
        const hardwareTier = this.cpuPerformanceInfo_?.hardwareTier ?? 0;
        const tierLabel = tierLabels[hardwareTier];
        assert(tierLabel, `Unexpected hardwareTier encountered ${hardwareTier}`);
        return loadTimeData.getStringF('cpuPerformanceNominalTier', tierLabel);
    }
}
customElements.define(SpeedPageElement.is, SpeedPageElement);
