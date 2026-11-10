// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-omnibox-everywhere-section' is the settings section containing
 * controls for Omnibox Everywhere (Search in Chrome).
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { OmniboxEverywhereBrowserProxyImpl } from './omnibox_everywhere_browser_proxy.js';
import { getCss } from './omnibox_everywhere_section.css.js';
import { getHtml } from './omnibox_everywhere_section.html.js';
// LINT.IfChange(ShowShortcutsPrefValue)
var ShowShortcutsPrefValue;
(function (ShowShortcutsPrefValue) {
    ShowShortcutsPrefValue[ShowShortcutsPrefValue["UNSET"] = 0] = "UNSET";
    ShowShortcutsPrefValue[ShowShortcutsPrefValue["DISABLED"] = 1] = "DISABLED";
    ShowShortcutsPrefValue[ShowShortcutsPrefValue["ENABLED"] = 2] = "ENABLED";
})(ShowShortcutsPrefValue || (ShowShortcutsPrefValue = {}));
const SYNTHETIC_SHOW_SHORTCUTS_PREF_KEY = 'synthetic.settings.omnibox_everywhere.show_shortcuts';
const SettingsOmniboxEverywhereSectionElementBase = PrefServiceObserverMixinLit(I18nMixinLit(CrLitElement));
export class SettingsOmniboxEverywhereSectionElement extends SettingsOmniboxEverywhereSectionElementBase {
    static get is() {
        return 'settings-omnibox-everywhere-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            registeredShortcut_: { type: String },
            isEnabled_: { type: Boolean },
        };
    }
    #registeredShortcut__accessor_storage = '';
    get registeredShortcut_() { return this.#registeredShortcut__accessor_storage; }
    set registeredShortcut_(value) { this.#registeredShortcut__accessor_storage = value; }
    #isEnabled__accessor_storage = false;
    get isEnabled_() { return this.#isEnabled__accessor_storage; }
    set isEnabled_(value) { this.#isEnabled__accessor_storage = value; }
    showShortcutsPrefValue_ = ShowShortcutsPrefValue.UNSET;
    ntpShortcutsVisible_ = true;
    browserProxy_ = OmniboxEverywhereBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('omnibox_everywhere.enabled', pref => {
            this.isEnabled_ = pref.value;
        });
        this.addPrefObserver('omnibox_everywhere.show_shortcuts', pref => {
            this.showShortcutsPrefValue_ = pref.value;
            this.updateShortcutsShowing_();
        });
        this.addPrefObserver('ntp.shortcust_visible', pref => {
            this.ntpShortcutsVisible_ = pref.value;
            this.updateShortcutsShowing_();
        });
        this.browserProxy_.getOmniboxEverywhereShortcut().then(shortcut => {
            this.registeredShortcut_ = shortcut;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.browserProxy_.setOmniboxEverywhereShortcutSuspensionState(false);
    }
    updateShortcutsShowing_() {
        let isShortcutsShowing;
        switch (this.showShortcutsPrefValue_) {
            case ShowShortcutsPrefValue.ENABLED:
                isShortcutsShowing = true;
                break;
            case ShowShortcutsPrefValue.DISABLED:
                isShortcutsShowing = false;
                break;
            default:
                isShortcutsShowing = this.ntpShortcutsVisible_;
                break;
        }
        PrefService.getInstance().setPrefValue(SYNTHETIC_SHOW_SHORTCUTS_PREF_KEY, isShortcutsShowing);
    }
    async onMainToggleChange_(event) {
        const target = event.target;
        const isChecked = target.checked;
        await PrefService.getInstance().setPrefValue('omnibox_everywhere.launch_on_startup', isChecked);
        await PrefService.getInstance().setPrefValue('omnibox_everywhere.background_mode', isChecked);
    }
    async onShowShortcutsToggleChange_(event) {
        const target = event.target;
        const isChecked = target.checked;
        await PrefService.getInstance().setPrefValue('omnibox_everywhere.show_shortcuts', isChecked ? ShowShortcutsPrefValue.ENABLED :
            ShowShortcutsPrefValue.DISABLED);
    }
    async onShortcutUpdated_(event) {
        const shortcut = event.detail;
        await this.browserProxy_.setOmniboxEverywhereShortcut(shortcut);
        this.registeredShortcut_ =
            await this.browserProxy_.getOmniboxEverywhereShortcut();
    }
    onInputCaptureChange_(event) {
        this.browserProxy_.setOmniboxEverywhereShortcutSuspensionState(event.detail);
    }
}
customElements.define(SettingsOmniboxEverywhereSectionElement.is, SettingsOmniboxEverywhereSectionElement);
