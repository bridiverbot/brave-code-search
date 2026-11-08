// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import '../../settings_page/settings_subpage.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { getCss as getCrIconsCss } from 'chrome://resources/cr_elements/cr_icons_lit.css.js';
import { getCss as getCrSharedStyleCss } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ModelExecutionEnterprisePolicyValue } from '../../ai_page/constants.js';
import { loadTimeData } from '../../i18n_setup.js';
import { MetricsBrowserProxyImpl, SuggestionsFromGeminiAction } from '../../metrics_browser_proxy.js';
import { getCss as getSettingsColumnedSectionCss } from '../../settings_columned_section_lit.css.js';
import { SettingsViewMixinLit } from '../../settings_page/settings_view_mixin_lit.js';
import { getCss as getSettingsSharedCss } from '../../settings_shared_lit.css.js';
import { getCss as getAutofillSharedCss } from '../autofill_shared_lit.css.js';
import { getHtml } from './suggestions_from_gemini_page.html.js';
const SettingsSuggestionsFromGeminiPageElementBase = SettingsViewMixinLit(PrefServiceObserverMixinLit(CrLitElement));
const AT_MEMORY_SHORTCUT_PREF_NAME = 'autofill.at_memory.shortcut';
export class SettingsSuggestionsFromGeminiPageElement extends SettingsSuggestionsFromGeminiPageElementBase {
    static get is() {
        return 'settings-suggestions-from-gemini-page';
    }
    static get styles() {
        return [
            getAutofillSharedCss(),
            getCrIconsCss(),
            getCrSharedStyleCss(),
            getSettingsColumnedSectionCss(),
            getSettingsSharedCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isAtMemoryEnabled_: { type: Boolean },
            isAtMemoryTriggerCustomizationAllowed_: { type: Boolean },
            findAndFillWithGeminiPref_: { type: Object },
            atMemoryShortcutPref_: { type: Object },
            findAndFillWithGeminiSettingsPref_: { type: Object },
        };
    }
    #isAtMemoryEnabled__accessor_storage = loadTimeData.getBoolean('isAtMemoryEnabled');
    get isAtMemoryEnabled_() { return this.#isAtMemoryEnabled__accessor_storage; }
    set isAtMemoryEnabled_(value) { this.#isAtMemoryEnabled__accessor_storage = value; }
    #isAtMemoryTriggerCustomizationAllowed__accessor_storage = loadTimeData.getBoolean('isAtMemoryTriggerCustomizationAllowed');
    get isAtMemoryTriggerCustomizationAllowed_() { return this.#isAtMemoryTriggerCustomizationAllowed__accessor_storage; }
    set isAtMemoryTriggerCustomizationAllowed_(value) { this.#isAtMemoryTriggerCustomizationAllowed__accessor_storage = value; }
    #findAndFillWithGeminiPref__accessor_storage;
    get findAndFillWithGeminiPref_() { return this.#findAndFillWithGeminiPref__accessor_storage; }
    set findAndFillWithGeminiPref_(value) { this.#findAndFillWithGeminiPref__accessor_storage = value; }
    #atMemoryShortcutPref__accessor_storage;
    get atMemoryShortcutPref_() { return this.#atMemoryShortcutPref__accessor_storage; }
    set atMemoryShortcutPref_(value) { this.#atMemoryShortcutPref__accessor_storage = value; }
    #findAndFillWithGeminiSettingsPref__accessor_storage;
    get findAndFillWithGeminiSettingsPref_() { return this.#findAndFillWithGeminiSettingsPref__accessor_storage; }
    set findAndFillWithGeminiSettingsPref_(value) { this.#findAndFillWithGeminiSettingsPref__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'generated.find_and_fill_with_gemini': 'findAndFillWithGeminiPref_',
            [AT_MEMORY_SHORTCUT_PREF_NAME]: 'atMemoryShortcutPref_',
            'autofill.personal_context.find_and_fill_with_gemini_settings': 'findAndFillWithGeminiSettingsPref_',
        });
    }
    showQualityLogging_() {
        return !!this.findAndFillWithGeminiPref_?.value && this.isAtMemoryEnabled_;
    }
    showDoubleCtrlShortcut_() {
        return this.isAtMemoryTriggerCustomizationAllowed_ &&
            !!this.findAndFillWithGeminiPref_?.value;
    }
    showConsiderNoLoggingEnterprise_() {
        return this.findAndFillWithGeminiSettingsPref_?.value ===
            ModelExecutionEnterprisePolicyValue.ALLOW_WITHOUT_LOGGING;
    }
    onManageConnectedAppsClick_() {
        this.metricsBrowserProxy_.recordSuggestionsFromGeminiAction(SuggestionsFromGeminiAction.MANAGE_CONNECTED_APPS_CLICK);
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('personalContextConnectedAppsUrl'));
    }
    onToggleSettingsBooleanControlChange_(e) {
        const toggle = e.target;
        this.metricsBrowserProxy_.recordSuggestionsFromGeminiAction(toggle.checked ? SuggestionsFromGeminiAction.TOGGLE_ON :
            SuggestionsFromGeminiAction.TOGGLE_OFF);
    }
    onAtMemoryShortcutUpdated_(event) {
        PrefService.getInstance().setPrefValue(AT_MEMORY_SHORTCUT_PREF_NAME, event.detail);
    }
    // SettingsViewMixinLit implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsSuggestionsFromGeminiPageElement.is, SettingsSuggestionsFromGeminiPageElement);
