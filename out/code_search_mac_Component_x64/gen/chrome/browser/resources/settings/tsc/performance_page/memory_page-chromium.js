// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import '../settings_page/settings_section.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './memory_page.css.js';
import { getHtml } from './memory_page.html.js';
import { MemorySaverModeState, PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
export const MEMORY_SAVER_MODE_PREF = 'performance_tuning.high_efficiency_mode.state';
export const MEMORY_SAVER_MODE_AGGRESSIVENESS_PREF = 'performance_tuning.high_efficiency_mode.aggressiveness';
const SettingsMemoryPageElementBase = PrefServiceObserverMixinLit(CrLitElement);
export class SettingsMemoryPageElement extends SettingsMemoryPageElementBase {
    static get is() {
        return 'settings-memory-page';
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
            numericCheckedValue_: { type: Number },
            memorySaverStatePref_: { type: Object },
        };
    }
    #numericUncheckedValues__accessor_storage = [MemorySaverModeState.DISABLED];
    get numericUncheckedValues_() { return this.#numericUncheckedValues__accessor_storage; }
    set numericUncheckedValues_(value) { this.#numericUncheckedValues__accessor_storage = value; }
    #numericCheckedValue__accessor_storage = MemorySaverModeState.ENABLED;
    get numericCheckedValue_() { return this.#numericCheckedValue__accessor_storage; }
    set numericCheckedValue_(value) { this.#numericCheckedValue__accessor_storage = value; }
    #memorySaverStatePref__accessor_storage;
    get memorySaverStatePref_() { return this.#memorySaverStatePref__accessor_storage; }
    set memorySaverStatePref_(value) { this.#memorySaverStatePref__accessor_storage = value; }
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(MEMORY_SAVER_MODE_PREF, 'memorySaverStatePref_');
    }
    onMemorySaverModeChange_() {
        this.metricsProxy_.recordMemorySaverModeChanged(PrefService.getInstance()
            .getPref(MEMORY_SAVER_MODE_PREF)
            .value);
    }
    onMemorySaverModeAggressivenessChange_() {
        this.metricsProxy_.recordMemorySaverModeAggressivenessChanged(PrefService.getInstance()
            .getPref(MEMORY_SAVER_MODE_AGGRESSIVENESS_PREF)
            .value);
    }
    isMemorySaverModeEnabled_() {
        if (!this.memorySaverStatePref_) {
            return false;
        }
        return this.memorySaverStatePref_.value !== MemorySaverModeState.DISABLED;
    }
    onMemorySaverSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('memorySaverLearnMoreUrl'));
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
customElements.define(SettingsMemoryPageElement.is, SettingsMemoryPageElement);
