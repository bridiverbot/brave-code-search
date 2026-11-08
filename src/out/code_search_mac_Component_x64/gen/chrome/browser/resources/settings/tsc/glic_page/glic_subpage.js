// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import './glic_login_permissions_page.js';
// 
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AiPageActions } from '../ai_page/constants.js';
import { MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { GlicBrowserProxyImpl } from './glic_browser_proxy.js';
import { getCss } from './glic_subpage.css.js';
import { getHtml } from './glic_subpage.html.js';
export var SettingsGlicPageFeaturePrefName;
(function (SettingsGlicPageFeaturePrefName) {
    SettingsGlicPageFeaturePrefName["CLOSED_CAPTIONS_ENABLED"] = "glic.closed_captioning_enabled";
    SettingsGlicPageFeaturePrefName["MEDIA_UNDERSTANDING_ENABLED"] = "glic.media_understanding_enabled";
    SettingsGlicPageFeaturePrefName["GEOLOCATION_ENABLED"] = "glic.geolocation_enabled";
    SettingsGlicPageFeaturePrefName["LAUNCHER_ENABLED"] = "glic.launcher_enabled";
    SettingsGlicPageFeaturePrefName["MICROPHONE_ENABLED"] = "glic.microphone_enabled";
    SettingsGlicPageFeaturePrefName["SETTINGS_POLICY"] = "browser.gemini_settings";
    SettingsGlicPageFeaturePrefName["TAB_CONTEXT_ENABLED"] = "glic.tab_context_enabled";
    SettingsGlicPageFeaturePrefName["TABSTRIP_BUTTON_ENABLED"] = "glic.pinned_to_tabstrip";
    SettingsGlicPageFeaturePrefName["USER_STATUS"] = "glic.user_status";
    SettingsGlicPageFeaturePrefName["DEFAULT_TAB_CONTEXT_ENABLED"] = "glic.default_tab_context_enabled";
    SettingsGlicPageFeaturePrefName["WEB_ACTUATION_ENABLED"] = "glic.user_enabled_actuation_on_web";
    SettingsGlicPageFeaturePrefName["EXPERIMENTAL_TRIGGERING_ENABLED"] = "glic.experimental_triggering_enabled";
    SettingsGlicPageFeaturePrefName["KEEP_SIDEPANEL_OPEN_ON_NEW_TABS_ENABLED"] = "glic.keep_sidepanel_open_on_new_tabs_enabled";
    SettingsGlicPageFeaturePrefName["SHAKE_TRIGGER_ENABLED"] = "glic.shake_trigger_enabled";
    SettingsGlicPageFeaturePrefName["HOTKEY_GLOBAL_SCOPE_ENABLED"] = "glic.hotkey_global_scope_enabled";
})(SettingsGlicPageFeaturePrefName || (SettingsGlicPageFeaturePrefName = {}));
// browser_element_identifiers constants
const OS_WIDGET_TOGGLE_ELEMENT_ID = 'kGlicOsToggleElementId';
const OS_WIDGET_KEYBOARD_SHORTCUT_ELEMENT_ID = 'kGlicOsWidgetKeyboardShortcutElementId';
const WEB_ACTUATION_ENABLED_PREF_KEY = 'synthetic.settings.glic.web_actuation_enabled';
const EXPERIMENTAL_TRIGGERING_ENABLED_PREF_KEY = 'synthetic.settings.glic.experimental_triggering_enabled';
const SettingsGlicSubpageElementBase = SettingsViewMixinLit(HelpBubbleMixinLit(I18nMixinLit(WebUiListenerMixinLit(PrefServiceObserverMixinLit(CrLitElement)))));
export class SettingsGlicSubpageElement extends SettingsGlicSubpageElementBase {
    static get is() {
        return 'settings-glic-subpage';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disallowedByAdmin_: { type: Boolean },
            userStatusPref_: { type: Object },
            launcherEnabledPref_: { type: Object },
            registeredShortcut_: { type: String },
            registeredFocusToggleShortcut_: { type: String },
            registeredSelectionShortcut_: { type: String },
            tabAccessToggleExpanded_: { type: Boolean },
            closedCaptionsToggleEnabled_: { type: Boolean },
            headlessCaptionsEnabled_: { type: Boolean },
            glicExtensionsFeatureEnabled_: { type: Boolean },
            glicUserStatusCheckFeatureEnabled_: { type: Boolean },
            glicSelectionFeatureEnabled_: { type: Boolean },
            glicHotkeyLocalScopeEnabled_: { type: Boolean },
            showGlicDefaultTabContextSetting_: { type: Boolean },
            showGlicExperimentalTriggering_: { type: Boolean },
            experimentalTriggeringExpanded_: { type: Boolean },
            showGlicPersonalContextLink_: { type: Boolean },
            showGlicInstructionLink_: { type: Boolean },
            showGlicKeepSidepanelOpenOnNewTabsSetting_: { type: Boolean },
            showGlicShakeTrigger_: { type: Boolean },
            microphoneToggleEnabled_: { type: Boolean },
            defaultTabAccessToggleExpanded_: { type: Boolean },
            webActuationFeatureEnabled_: { type: Boolean },
            webActuationEnabledPref_: { type: Object },
            isWebActuationDisabledForEnterprise_: { type: Boolean },
            webActuationEnabledExpanded_: { type: Boolean },
            actorLoginFederatedLoginSupportEnabled_: { type: Boolean },
        };
    }
    #disallowedByAdmin__accessor_storage = false;
    get disallowedByAdmin_() { return this.#disallowedByAdmin__accessor_storage; }
    set disallowedByAdmin_(value) { this.#disallowedByAdmin__accessor_storage = value; }
    #userStatusPref__accessor_storage = undefined;
    get userStatusPref_() { return this.#userStatusPref__accessor_storage; }
    set userStatusPref_(value) { this.#userStatusPref__accessor_storage = value; }
    #launcherEnabledPref__accessor_storage = undefined;
    get launcherEnabledPref_() { return this.#launcherEnabledPref__accessor_storage; }
    set launcherEnabledPref_(value) { this.#launcherEnabledPref__accessor_storage = value; }
    #webActuationEnabledPref__accessor_storage = undefined;
    get webActuationEnabledPref_() { return this.#webActuationEnabledPref__accessor_storage; }
    set webActuationEnabledPref_(value) { this.#webActuationEnabledPref__accessor_storage = value; }
    #registeredShortcut__accessor_storage = '';
    get registeredShortcut_() { return this.#registeredShortcut__accessor_storage; }
    set registeredShortcut_(value) { this.#registeredShortcut__accessor_storage = value; }
    #registeredFocusToggleShortcut__accessor_storage = '';
    get registeredFocusToggleShortcut_() { return this.#registeredFocusToggleShortcut__accessor_storage; }
    set registeredFocusToggleShortcut_(value) { this.#registeredFocusToggleShortcut__accessor_storage = value; }
    #registeredSelectionShortcut__accessor_storage = '';
    get registeredSelectionShortcut_() { return this.#registeredSelectionShortcut__accessor_storage; }
    set registeredSelectionShortcut_(value) { this.#registeredSelectionShortcut__accessor_storage = value; }
    #tabAccessToggleExpanded__accessor_storage = false;
    get tabAccessToggleExpanded_() { return this.#tabAccessToggleExpanded__accessor_storage; }
    set tabAccessToggleExpanded_(value) { this.#tabAccessToggleExpanded__accessor_storage = value; }
    #closedCaptionsToggleEnabled__accessor_storage = loadTimeData.getBoolean('glicCanUseLive');
    get closedCaptionsToggleEnabled_() { return this.#closedCaptionsToggleEnabled__accessor_storage; }
    set closedCaptionsToggleEnabled_(value) { this.#closedCaptionsToggleEnabled__accessor_storage = value; }
    #headlessCaptionsEnabled__accessor_storage = loadTimeData.getBoolean('headlessCaptionsEnabled');
    get headlessCaptionsEnabled_() { return this.#headlessCaptionsEnabled__accessor_storage; }
    set headlessCaptionsEnabled_(value) { this.#headlessCaptionsEnabled__accessor_storage = value; }
    #glicExtensionsFeatureEnabled__accessor_storage = loadTimeData.getBoolean('glicExtensionsFeatureEnabled');
    get glicExtensionsFeatureEnabled_() { return this.#glicExtensionsFeatureEnabled__accessor_storage; }
    set glicExtensionsFeatureEnabled_(value) { this.#glicExtensionsFeatureEnabled__accessor_storage = value; }
    #glicUserStatusCheckFeatureEnabled__accessor_storage = loadTimeData.getBoolean('glicUserStatusCheckFeatureEnabled');
    get glicUserStatusCheckFeatureEnabled_() { return this.#glicUserStatusCheckFeatureEnabled__accessor_storage; }
    set glicUserStatusCheckFeatureEnabled_(value) { this.#glicUserStatusCheckFeatureEnabled__accessor_storage = value; }
    #glicSelectionFeatureEnabled__accessor_storage = loadTimeData.getBoolean('glicSelectionFeatureEnabled');
    get glicSelectionFeatureEnabled_() { return this.#glicSelectionFeatureEnabled__accessor_storage; }
    set glicSelectionFeatureEnabled_(value) { this.#glicSelectionFeatureEnabled__accessor_storage = value; }
    #glicHotkeyLocalScopeEnabled__accessor_storage = loadTimeData.getBoolean('glicHotkeyLocalScopeEnabled');
    get glicHotkeyLocalScopeEnabled_() { return this.#glicHotkeyLocalScopeEnabled__accessor_storage; }
    set glicHotkeyLocalScopeEnabled_(value) { this.#glicHotkeyLocalScopeEnabled__accessor_storage = value; }
    #showGlicDefaultTabContextSetting__accessor_storage = loadTimeData.getBoolean('showGlicDefaultTabContextSetting');
    get showGlicDefaultTabContextSetting_() { return this.#showGlicDefaultTabContextSetting__accessor_storage; }
    set showGlicDefaultTabContextSetting_(value) { this.#showGlicDefaultTabContextSetting__accessor_storage = value; }
    #showGlicExperimentalTriggering__accessor_storage = loadTimeData.getBoolean('showGlicExperimentalTriggering');
    get showGlicExperimentalTriggering_() { return this.#showGlicExperimentalTriggering__accessor_storage; }
    set showGlicExperimentalTriggering_(value) { this.#showGlicExperimentalTriggering__accessor_storage = value; }
    #experimentalTriggeringExpanded__accessor_storage = false;
    get experimentalTriggeringExpanded_() { return this.#experimentalTriggeringExpanded__accessor_storage; }
    set experimentalTriggeringExpanded_(value) { this.#experimentalTriggeringExpanded__accessor_storage = value; }
    #showGlicPersonalContextLink__accessor_storage = loadTimeData.getBoolean('showGeminiPersonalContextLink');
    get showGlicPersonalContextLink_() { return this.#showGlicPersonalContextLink__accessor_storage; }
    set showGlicPersonalContextLink_(value) { this.#showGlicPersonalContextLink__accessor_storage = value; }
    #showGlicInstructionLink__accessor_storage = loadTimeData.getBoolean('showInstructionLink');
    get showGlicInstructionLink_() { return this.#showGlicInstructionLink__accessor_storage; }
    set showGlicInstructionLink_(value) { this.#showGlicInstructionLink__accessor_storage = value; }
    #showGlicKeepSidepanelOpenOnNewTabsSetting__accessor_storage = loadTimeData.getBoolean('showGlicKeepSidepanelOpenOnNewTabsSetting');
    get showGlicKeepSidepanelOpenOnNewTabsSetting_() { return this.#showGlicKeepSidepanelOpenOnNewTabsSetting__accessor_storage; }
    set showGlicKeepSidepanelOpenOnNewTabsSetting_(value) { this.#showGlicKeepSidepanelOpenOnNewTabsSetting__accessor_storage = value; }
    #showGlicShakeTrigger__accessor_storage = loadTimeData.getBoolean('showGlicShakeTrigger');
    get showGlicShakeTrigger_() { return this.#showGlicShakeTrigger__accessor_storage; }
    set showGlicShakeTrigger_(value) { this.#showGlicShakeTrigger__accessor_storage = value; }
    #microphoneToggleEnabled__accessor_storage = loadTimeData.getBoolean('glicCanUseLive');
    get microphoneToggleEnabled_() { return this.#microphoneToggleEnabled__accessor_storage; }
    set microphoneToggleEnabled_(value) { this.#microphoneToggleEnabled__accessor_storage = value; }
    #defaultTabAccessToggleExpanded__accessor_storage = false;
    get defaultTabAccessToggleExpanded_() { return this.#defaultTabAccessToggleExpanded__accessor_storage; }
    set defaultTabAccessToggleExpanded_(value) { this.#defaultTabAccessToggleExpanded__accessor_storage = value; }
    #webActuationFeatureEnabled__accessor_storage = false;
    get webActuationFeatureEnabled_() { return this.#webActuationFeatureEnabled__accessor_storage; }
    set webActuationFeatureEnabled_(value) { this.#webActuationFeatureEnabled__accessor_storage = value; }
    #isWebActuationDisabledForEnterprise__accessor_storage = loadTimeData.getBoolean('isWebActuationDisabledForEnterprise');
    get isWebActuationDisabledForEnterprise_() { return this.#isWebActuationDisabledForEnterprise__accessor_storage; }
    set isWebActuationDisabledForEnterprise_(value) { this.#isWebActuationDisabledForEnterprise__accessor_storage = value; }
    #webActuationEnabledExpanded__accessor_storage = false;
    get webActuationEnabledExpanded_() { return this.#webActuationEnabledExpanded__accessor_storage; }
    set webActuationEnabledExpanded_(value) { this.#webActuationEnabledExpanded__accessor_storage = value; }
    #actorLoginFederatedLoginSupportEnabled__accessor_storage = loadTimeData.getBoolean('actorLoginFederatedLoginSupportEnabled');
    get actorLoginFederatedLoginSupportEnabled_() { return this.#actorLoginFederatedLoginSupportEnabled__accessor_storage; }
    set actorLoginFederatedLoginSupportEnabled_(value) { this.#actorLoginFederatedLoginSupportEnabled__accessor_storage = value; }
    shortcutInput_ = '';
    focusToggleShortcutInput_ = '';
    selectionShortcutInput_ = '';
    removedShortcut_ = null;
    browserProxy_ = GlicBrowserProxyImpl.getInstance();
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            [SettingsGlicPageFeaturePrefName.USER_STATUS]: 'userStatusPref_',
            [SettingsGlicPageFeaturePrefName.LAUNCHER_ENABLED]: 'launcherEnabledPref_',
            [WEB_ACTUATION_ENABLED_PREF_KEY]: 'webActuationEnabledPref_',
        });
        this.addPrefObserver(SettingsGlicPageFeaturePrefName.TAB_CONTEXT_ENABLED, (pref) => {
            this.tabAccessToggleExpanded_ = pref.value;
        });
        this.addPrefObserver(SettingsGlicPageFeaturePrefName.DEFAULT_TAB_CONTEXT_ENABLED, (pref) => {
            this.defaultTabAccessToggleExpanded_ = pref.value;
        });
        this.addPrefObserver(EXPERIMENTAL_TRIGGERING_ENABLED_PREF_KEY, (pref) => {
            this.experimentalTriggeringExpanded_ = pref.value;
        });
        this.browserProxy_.getDisallowedByAdmin().then(this.disallowedByAdminChanged_.bind(this));
        this.addWebUiListener('glic-disallowed-by-admin-changed', this.disallowedByAdminChanged_.bind(this));
        this.addWebUiListener('glic-web-actuation-disabled-for-enterprise-changed', (disabledForEnterprise) => this.onWebActuationDisabledForEnterpriseChanged_(disabledForEnterprise));
        this.addWebUiListener('glic-web-actuation-toggle-visibility-changed', (visible) => this.onWebActuationToggleVisibilityChanged_(visible));
        this.addWebUiListener('glic-web-actuation-enabled-changed', (enabled) => {
            PrefService.getInstance().setPrefValue(WEB_ACTUATION_ENABLED_PREF_KEY, enabled);
        });
        this.addWebUiListener('glic-experimental-triggering-enabled-changed', (enabled) => {
            PrefService.getInstance().setPrefValue(EXPERIMENTAL_TRIGGERING_ENABLED_PREF_KEY, enabled);
        });
        this.browserProxy_.getWebActuationToggleVisibility().then((visible) => {
            this.onWebActuationToggleVisibilityChanged_(visible);
        });
        Promise
            .all([
            this.browserProxy_.getWebActuationEnabled(),
            PrefService.getInstance().whenInitialized(),
        ])
            .then(([enabled]) => {
            PrefService.getInstance().setPrefValue(WEB_ACTUATION_ENABLED_PREF_KEY, enabled);
        });
        Promise
            .all([
            this.browserProxy_.getExperimentalTriggeringEnabled(),
            PrefService.getInstance().whenInitialized(),
        ])
            .then(([enabled]) => {
            PrefService.getInstance().setPrefValue(EXPERIMENTAL_TRIGGERING_ENABLED_PREF_KEY, enabled);
        });
        this.browserProxy_.getGlicShortcut().then(shortcut => {
            this.registeredShortcut_ = shortcut;
        });
        this.browserProxy_.getGlicFocusToggleShortcut().then(shortcut => {
            this.registeredFocusToggleShortcut_ = shortcut;
        });
        this.browserProxy_.getGlicSelectionShortcut().then(shortcut => {
            this.registeredSelectionShortcut_ = shortcut;
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('webActuationEnabledPref_')) {
            this.webActuationEnabledExpanded_ =
                !this.isWebActuationDisabledForEnterprise_ &&
                    !!this.webActuationEnabledPref_?.value;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('disallowedByAdmin_')) {
            this.onDisallowedByAdminChanged_();
        }
    }
    async onDisallowedByAdminChanged_() {
        await PrefService.getInstance().whenInitialized();
        if (this.disallowedByAdmin_) {
            return;
        }
        const launcherToggle = this.shadowRoot.querySelector('#launcherToggle');
        const shortcutInput = this.shadowRoot.querySelector('#mainShortcutSetting .shortcut-input');
        assert(launcherToggle);
        assert(shortcutInput);
        this.registerHelpBubble(OS_WIDGET_TOGGLE_ELEMENT_ID, launcherToggle.getBubbleAnchor());
        this.registerHelpBubble(OS_WIDGET_KEYBOARD_SHORTCUT_ELEMENT_ID, shortcutInput);
    }
    onLauncherToggleSettingsBooleanControlChange_(event) {
        const enabled = event.target.checked;
        this.browserProxy_.setGlicOsLauncherEnabled(enabled);
        this.metricsBrowserProxy_.recordAction('GlicOsEntrypoint.Settings.Toggle' +
            (enabled ? '.Enabled' : '.Disabled'));
        this.hideHelpBubble(OS_WIDGET_TOGGLE_ELEMENT_ID);
    }
    getMainShortcutOpened_() {
        return this.launcherEnabledPref_?.value ||
            this.glicHotkeyLocalScopeEnabled_;
    }
    onScopeToggleSettingsBooleanControlChange_(event) {
        const isGlobal = event.target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.HotkeyScope.' + (isGlobal ? 'Global' : 'Chrome'));
        this.browserProxy_.onHotkeyScopeSettingsChange(isGlobal);
    }
    onGeolocationToggleSettingsBooleanControlChange_(event) {
        const enabled = event.target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.Geolocation' + (enabled ? '.Enabled' : '.Disabled'));
    }
    onMicrophoneToggleSettingsBooleanControlChange_(event) {
        const enabled = event.target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.Microphone' + (enabled ? '.Enabled' : '.Disabled'));
    }
    async onShortcutUpdated_(event) {
        this.shortcutInput_ = event.detail;
        if (this.removedShortcut_ === null) {
            this.removedShortcut_ = this.registeredShortcut_;
        }
        await this.browserProxy_.setGlicShortcut(this.shortcutInput_);
        this.registeredShortcut_ = await this.browserProxy_.getGlicShortcut();
        // Records true if the shortcut string is defined and not empty.
        this.metricsBrowserProxy_.recordBooleanHistogram('Glic.OsEntrypoint.Settings.Shortcut', !!this.shortcutInput_);
        this.hideHelpBubble(OS_WIDGET_KEYBOARD_SHORTCUT_ELEMENT_ID);
    }
    async onFocusToggleShortcutUpdated_(event) {
        this.focusToggleShortcutInput_ = event.detail;
        await this.browserProxy_.setGlicFocusToggleShortcut(this.focusToggleShortcutInput_);
        // Update the shortcut to reflect what the browser proxy returns. This
        // ensures that the displayed shortcut is accurate in the event that
        // registration failed.
        this.registeredFocusToggleShortcut_ =
            await this.browserProxy_.getGlicFocusToggleShortcut();
        // Records true if the shortcut string is defined and not empty.
        this.metricsBrowserProxy_.recordBooleanHistogram('Glic.Focus.Settings.Shortcut.Customized', !!this.focusToggleShortcutInput_);
    }
    async onSelectionShortcutUpdated_(event) {
        this.selectionShortcutInput_ = event.detail;
        await this.browserProxy_.setGlicSelectionShortcut(this.selectionShortcutInput_);
        this.registeredSelectionShortcut_ =
            await this.browserProxy_.getGlicSelectionShortcut();
        this.hideHelpBubble(OS_WIDGET_KEYBOARD_SHORTCUT_ELEMENT_ID);
    }
    // Records whether the shortcut enablement state transitioned from disabled to
    // enabled or vice versa.
    // TODO(crbug.com/406848612): Record these in the browser process instead.
    recordShortcutEnablement() {
        if (this.shortcutInput_ && !this.removedShortcut_) {
            this.metricsBrowserProxy_.recordAction('GlicOsEntrypoint.Settings.ShortcutEnabled');
        }
        else if (!this.shortcutInput_ && this.removedShortcut_) {
            this.metricsBrowserProxy_.recordAction('GlicOsEntrypoint.Settings.ShortcutDisabled');
        }
        else {
            this.metricsBrowserProxy_.recordAction('GlicOsEntrypoint.Settings.ShortcutEdited');
        }
    }
    onInputCaptureChange_(event) {
        const capturing = event.detail;
        this.browserProxy_.setShortcutSuspensionState(capturing);
        if (!capturing) {
            this.recordShortcutEnablement();
            this.removedShortcut_ = null;
        }
    }
    onTabAccessToggleSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.TabContext' + (enabled ? '.Enabled' : '.Disabled'));
    }
    onTabAccessExpandClick_() {
        this.tabAccessToggleExpanded_ = !this.tabAccessToggleExpanded_;
    }
    onTabAccessToggleExpandedChanged_(e) {
        this.tabAccessToggleExpanded_ = e.detail.value;
    }
    onDefaultTabAccessExpandClick_() {
        this.defaultTabAccessToggleExpanded_ =
            !this.defaultTabAccessToggleExpanded_;
    }
    onDefaultTabAccessToggleExpandedChanged_(e) {
        this.defaultTabAccessToggleExpanded_ = e.detail.value;
    }
    onDefaultTabAccessToggleSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.DefaultTabContext' +
            (enabled ? '.Enabled' : '.Disabled'));
    }
    onKeepSidepanelOpenOnNewTabsSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.KeepSidepanelOpenOnNewTabs' +
            (enabled ? '.Enabled' : '.Disabled'));
    }
    onShakeTriggerToggleSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.ShakeTrigger' + (enabled ? '.Enabled' : '.Disabled'));
    }
    onActivityRowClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(this.i18n('glicActivityButtonUrl'));
    }
    onActorLoginPermissionsRowClick_() {
        Router.getInstance().navigateTo(routes.GEMINI_LOGIN);
    }
    onExtensionsRowClick_() {
        // TODO(crbug.com/434213151): Append url param when ready.
        const url = new URL(this.i18n('glicExtensionsManagementUrl'));
        OpenWindowProxyImpl.getInstance().openUrl(url.toString());
    }
    onShortcutsLearnMoreClick_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_LEARN_MORE_CLICKED);
    }
    onLauncherToggleLearnMoreClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_LAUNCHER_TOGGLE_LEARN_MORE_CLICKED);
    }
    onLocationToggleLearnMoreClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_LOCATION_TOGGLE_LEARN_MORE_CLICKED);
    }
    onTabAccessToggleLearnMoreClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_TAB_ACCESS_TOGGLE_LEARN_MORE_CLICKED);
    }
    onTabAccessLearnMoreClick_() {
        this.onTabAccessToggleLearnMoreClicked_();
    }
    onDefaultTabAccessToggleSubLabelLinkClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions
            .GLIC_SHORTCUTS_DEFAULT_TAB_ACCESS_TOGGLE_LEARN_MORE_CLICKED);
        OpenWindowProxyImpl.getInstance().openUrl(this.getDefaultTabAccessLearnMoreUrl_());
    }
    onGeminiPersonalContextClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('geminiPersonalContextUrl'));
    }
    disallowedByAdminChanged_(disallowed) {
        this.disallowedByAdmin_ = disallowed;
    }
    onClosedCaptionsToggleSettingsBooleanControlChange_(event) {
        const enabled = event.target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.ClosedCaptions.' + (enabled ? 'Enabled' : 'Disabled'));
    }
    onTabstripButtonToggleSettingsBooleanControlChange_(event) {
        const enabled = event.target.checked;
        this.metricsBrowserProxy_.recordAction('Glic.Settings.TabstripButton.' + (enabled ? 'Enabled' : 'Disabled'));
    }
    isEnterpriseAccountDataProtected_() {
        return this.glicUserStatusCheckFeatureEnabled_ &&
            !!this.userStatusPref_?.value?.isEnterpriseAccountDataProtected;
    }
    getLocationSubLabel_() {
        return this.i18n(this.isEnterpriseAccountDataProtected_() ?
            'glicLocationToggleSublabelDataProtected' :
            'glicLocationToggleSublabel');
    }
    getLocationLearnMoreUrl_() {
        return this.isEnterpriseAccountDataProtected_() ?
            '' :
            this.i18n('glicLocationToggleLearnMoreUrl');
    }
    getMicrophoneSubLabel_() {
        return this.i18n(this.isEnterpriseAccountDataProtected_() ?
            'glicMicrophoneToggleSublabelDataProtected' :
            'glicMicrophoneToggleSublabel');
    }
    getTabAccessSubLabel_() {
        return this.i18n(this.isEnterpriseAccountDataProtected_() ?
            'glicTabAccessToggleSublabelDataProtected' :
            'glicTabAccessToggleSublabel');
    }
    getTabAccessLearnMoreUrl_() {
        return this.i18n(this.isEnterpriseAccountDataProtected_() ?
            'glicTabAccessToggleLearnMoreUrlDataProtected' :
            'glicTabAccessToggleLearnMoreUrl');
    }
    // i18nAdvanced is needed to allow for translating strings containing HTML.
    // The glicDefaultTabAccessToggleSublabel strings contain <ph> elements which
    // are translated to <a> tags to provide a link in the label.
    getDefaultTabAccessSubLabel_() {
        return this
            .i18nAdvanced(this.isEnterpriseAccountDataProtected_() ?
            'glicDefaultTabAccessToggleSublabelDataProtected' :
            'glicDefaultTabAccessToggleSublabel')
            .toString();
    }
    getDefaultTabAccessLearnMoreUrl_() {
        return this.i18n(this.isEnterpriseAccountDataProtected_() ?
            'glicDefaultTabAccessToggleLearnMoreUrlDataProtected' :
            'glicDefaultTabAccessToggleLearnMoreUrl');
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
    // SettingsViewMixin implementation.
    getAssociatedControlFor(childViewId) {
        assert(childViewId === 'geminiLoginPermissions');
        const element = this.shadowRoot.querySelector('#actorLoginPermissionsButton');
        assert(element);
        return element;
    }
    onWebActuationToggleSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.browserProxy_.setWebActuationEnabled(enabled);
        this.metricsBrowserProxy_.recordAction('Glic.Settings.WebActuation' + (enabled ? '.Enabled' : '.Disabled'));
    }
    onWebActuationEnabledExpandedChanged_(e) {
        this.webActuationEnabledExpanded_ = e.detail.value;
    }
    onExperimentalTriggeringSettingsBooleanControlChange_(event) {
        const target = event.target;
        const enabled = target.checked;
        this.browserProxy_.setExperimentalTriggeringEnabled(enabled);
        this.metricsBrowserProxy_.recordAction('Glic.Settings.ExperimentalTriggering' +
            (enabled ? '.Enabled' : '.Disabled'));
    }
    onExperimentalTriggeringExpandClick_() {
        this.experimentalTriggeringExpanded_ =
            !this.experimentalTriggeringExpanded_;
    }
    onExperimentalTriggeringExpandedChanged_(e) {
        this.experimentalTriggeringExpanded_ = e.detail.value;
    }
    onExperimentalTriggeringToggleSubLabelLinkClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_WEB_ACTUATION_TOGGLE_LEARN_MORE_CLICKED);
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('glicExperimentalTriggeringLearnMoreUrl'));
    }
    getExperimentalTriggeringSubLabel_() {
        return this
            .i18nAdvanced('glicExperimentalTriggeringSublabel', {
            attrs: ['aria-label', 'aria-description'],
        })
            .toString();
    }
    onWebActuationExpandClick_() {
        this.webActuationEnabledExpanded_ = !this.webActuationEnabledExpanded_;
    }
    onWebActuationToggleSubLabelLinkClicked_() {
        this.metricsBrowserProxy_.recordAction(AiPageActions.GLIC_SHORTCUTS_WEB_ACTUATION_TOGGLE_LEARN_MORE_CLICKED);
        OpenWindowProxyImpl.getInstance().openUrl(this.getWebActuationLearnMoreUrl_());
    }
    getWebActuationSubLabel_() {
        return this.i18nAdvanced('glicWebActuationToggleSublabelV2', {
            attrs: ['aria-label', 'aria-description', 'target'],
        });
    }
    getWebActuationToggleConsider_() {
        return this.i18nAdvanced('glicWebActuationToggleConsider2V2', {
            attrs: ['aria-label', 'aria-description', 'target'],
        });
    }
    getWebActuationLearnMoreUrl_() {
        return loadTimeData.getString('glicWebActuationToggleLearnMoreUrl');
    }
    onWebActuationDisabledForEnterpriseChanged_(disabledForEnterprise) {
        this.isWebActuationDisabledForEnterprise_ = disabledForEnterprise;
        if (this.isWebActuationDisabledForEnterprise_) {
            this.webActuationEnabledExpanded_ = false;
        }
    }
    onWebActuationToggleVisibilityChanged_(visible) {
        this.webActuationFeatureEnabled_ = visible;
    }
    isExperimentalTriggeringDisabled_() {
        return !this.webActuationEnabledPref_?.value ||
            this.isWebActuationDisabledForEnterprise_;
    }
    onMediaUnderstandingToggleSubLabelLinkClicked_() {
        // URL for "some websites" link.
        OpenWindowProxyImpl.getInstance().openUrl('https://support.google.com/chrome?p=gic_media_questions');
    }
}
customElements.define(SettingsGlicSubpageElement.is, SettingsGlicSubpageElement);
