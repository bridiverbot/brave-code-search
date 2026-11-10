// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './battery_page.css.js';
import { getHtml } from './battery_page.html.js';
import { BatterySaverModeState, PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
export const BATTERY_SAVER_MODE_PREF = 'performance_tuning.battery_saver_mode.state';
const SettingsBatteryPageElementBase = PrefServiceObserverMixinLit(CrLitElement);
export class SettingsBatteryPageElement extends SettingsBatteryPageElementBase {
    static get is() {
        return 'settings-battery-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isBatterySaverModeManagedByOs_: { type: Boolean },
            numericUncheckedValues_: { type: Array },
            batterySaverStatePref_: { type: Object },
        };
    }
    #isBatterySaverModeManagedByOs__accessor_storage = loadTimeData.getBoolean('isBatterySaverModeManagedByOS');
    get isBatterySaverModeManagedByOs_() { return this.#isBatterySaverModeManagedByOs__accessor_storage; }
    set isBatterySaverModeManagedByOs_(value) { this.#isBatterySaverModeManagedByOs__accessor_storage = value; }
    #numericUncheckedValues__accessor_storage = [BatterySaverModeState.DISABLED];
    get numericUncheckedValues_() { return this.#numericUncheckedValues__accessor_storage; }
    set numericUncheckedValues_(value) { this.#numericUncheckedValues__accessor_storage = value; }
    #batterySaverStatePref__accessor_storage;
    get batterySaverStatePref_() { return this.#batterySaverStatePref__accessor_storage; }
    set batterySaverStatePref_(value) { this.#batterySaverStatePref__accessor_storage = value; }
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref(BATTERY_SAVER_MODE_PREF, 'batterySaverStatePref_');
    }
    isBatterySaverModeEnabled_() {
        if (!this.batterySaverStatePref_) {
            return false;
        }
        return this.batterySaverStatePref_.value !== BatterySaverModeState.DISABLED;
    }
    onChange_() {
        this.metricsProxy_.recordBatterySaverModeChanged(PrefService.getInstance()
            .getPref(BATTERY_SAVER_MODE_PREF)
            .value);
    }
    onBatterySaverSubLabelLinkClicked_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('batterySaverLearnMoreUrl'));
    }
    // 
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
customElements.define(SettingsBatteryPageElement.is, SettingsBatteryPageElement);
