// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Settings that affect how Chrome interacts with the underlying
 * operating system (i.e. network, background processes, hardware).
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../controls/settings_toggle_button.js';
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_section.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
// 
import { RelaunchMixinLit, RestartType } from '../relaunch_mixin_lit.js';
import { getSearchManager } from '../search_settings.js';
import { getCss } from './system_page.css.js';
import { getHtml } from './system_page.html.js';
import { SystemPageBrowserProxyImpl } from './system_page_browser_proxy.js';
const SettingsSystemPageElementBase = WebUiListenerMixinLit(PrefServiceObserverMixinLit(RelaunchMixinLit(CrLitElement)));
export class SettingsSystemPageElement extends SettingsSystemPageElementBase {
    static get is() {
        return 'settings-system-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isProxyEnforcedByPolicy_: { type: Boolean },
            isProxyDefault_: { type: Boolean },
            isProxyEnforcedByMultipleSources_: { type: Boolean },
            // 
            // 
            showProcessIsolationSetting_: { type: Boolean },
            // 
            proxyPref_: { type: Object },
            proxyOverrideRulesPref_: { type: Object },
            hardwareAccelerationModeEnabledPref_: { type: Object },
            // 
            isolationStateEnabledPref_: { type: Object },
            // 
        };
    }
    #isProxyEnforcedByPolicy__accessor_storage = false;
    get isProxyEnforcedByPolicy_() { return this.#isProxyEnforcedByPolicy__accessor_storage; }
    set isProxyEnforcedByPolicy_(value) { this.#isProxyEnforcedByPolicy__accessor_storage = value; }
    #isProxyDefault__accessor_storage = false;
    get isProxyDefault_() { return this.#isProxyDefault__accessor_storage; }
    set isProxyDefault_(value) { this.#isProxyDefault__accessor_storage = value; }
    #isProxyEnforcedByMultipleSources__accessor_storage = false;
    get isProxyEnforcedByMultipleSources_() { return this.#isProxyEnforcedByMultipleSources__accessor_storage; }
    set isProxyEnforcedByMultipleSources_(value) { this.#isProxyEnforcedByMultipleSources__accessor_storage = value; }
    #showProcessIsolationSetting__accessor_storage = loadTimeData.getBoolean('showProcessIsolationSetting');
    // 
    // 
    get showProcessIsolationSetting_() { return this.#showProcessIsolationSetting__accessor_storage; }
    set showProcessIsolationSetting_(value) { this.#showProcessIsolationSetting__accessor_storage = value; }
    processIsolationEnabledAtStartup_;
    #proxyPref__accessor_storage;
    // 
    get proxyPref_() { return this.#proxyPref__accessor_storage; }
    set proxyPref_(value) { this.#proxyPref__accessor_storage = value; }
    #proxyOverrideRulesPref__accessor_storage;
    get proxyOverrideRulesPref_() { return this.#proxyOverrideRulesPref__accessor_storage; }
    set proxyOverrideRulesPref_(value) { this.#proxyOverrideRulesPref__accessor_storage = value; }
    #hardwareAccelerationModeEnabledPref__accessor_storage;
    get hardwareAccelerationModeEnabledPref_() { return this.#hardwareAccelerationModeEnabledPref__accessor_storage; }
    set hardwareAccelerationModeEnabledPref_(value) { this.#hardwareAccelerationModeEnabledPref__accessor_storage = value; }
    #isolationStateEnabledPref__accessor_storage;
    // 
    get isolationStateEnabledPref_() { return this.#isolationStateEnabledPref__accessor_storage; }
    set isolationStateEnabledPref_(value) { this.#isolationStateEnabledPref__accessor_storage = value; }
    // 
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'proxy': 'proxyPref_',
            'proxy_override_rules': 'proxyOverrideRulesPref_',
            'hardware_acceleration_mode.enabled': 'hardwareAccelerationModeEnabledPref_',
            // 
            'isolation_state.enabled': 'isolationStateEnabledPref_',
            // 
        });
        // 
        PrefService.getInstance().whenInitialized().then(() => {
            this.processIsolationEnabledAtStartup_ =
                PrefService.getInstance()
                    .getPref('isolation_state.enabled')
                    .value;
        });
        // 
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('proxyPref_') ||
            changedPrivateProperties.has('proxyOverrideRulesPref_')) {
            this.observeProxyPrefChanged_();
        }
    }
    observeProxyPrefChanged_() {
        if (!this.proxyPref_ || !this.proxyOverrideRulesPref_) {
            return;
        }
        // TODO(dbeam): do types of policy other than USER apply on ChromeOS?
        this.isProxyEnforcedByPolicy_ = this.proxyPref_.enforcement ===
            chrome.settingsPrivate.Enforcement.ENFORCED &&
            this.proxyPref_.controlledBy ===
                chrome.settingsPrivate.ControlledBy.USER_POLICY;
        this.isProxyDefault_ =
            !this.isProxyEnforcedByPolicy_ && !this.proxyPref_.extensionId;
        // Don't need to consider multiple source display when
        // `ProxyOverrideRules` preference is not set
        if (!this.proxyOverrideRulesPref_.value ||
            this.proxyOverrideRulesPref_.value.length === 0) {
            this.isProxyEnforcedByMultipleSources_ = false;
            return;
        }
        // Don't need to consider multiple source display when proxy setting is not
        // set
        if (this.isProxyDefault_) {
            this.isProxyEnforcedByMultipleSources_ = true;
            return;
        }
        // When proxy settings and `ProxyOverrideRules` are from different levels of
        // sources
        if (this.proxyPref_.controlledBy !==
            this.proxyOverrideRulesPref_.controlledBy) {
            this.isProxyEnforcedByMultipleSources_ = true;
            return;
        }
        // When proxy settings and `ProxyOverrideRules` are both from policies, the
        // sources are considered to be the same
        if (this.proxyPref_.controlledBy ===
            chrome.settingsPrivate.ControlledBy.USER_POLICY) {
            this.isProxyEnforcedByMultipleSources_ = false;
            return;
        }
        // When proxy settings and `ProxyOverrideRules` are both from extension(s),
        // the sources are considered to be the same only if they are set by the
        // same extension
        this.isProxyEnforcedByMultipleSources_ =
            (this.proxyPref_.extensionId !==
                this.proxyOverrideRulesPref_.extensionId);
    }
    onDisableExtensionClick_() {
        // TODO(dbeam): this is a pretty huge bummer. It means there are things
        // (inputs) that our prefs system is not observing. And that changes from
        // other sources (i.e. disabling/enabling an extension from
        // chrome://extensions or from the omnibox directly) will not update
        // |this.getPref('proxy')| directly (nor the UI). We should fix this
        // eventually.
        PrefService.getInstance().refreshPrefFromBackend('proxy');
    }
    onProxyClick_() {
        if (this.isProxyDefault_) {
            SystemPageBrowserProxyImpl.getInstance().showProxySettings();
        }
    }
    onRestartClick_(e) {
        // Prevent event from bubbling up to the toggle button.
        e.stopPropagation();
        this.performRestart(RestartType.RESTART);
    }
    /**
     * @param enabled Whether hardware acceleration is currently enabled.
     */
    shouldShowRestart_() {
        if (!this.hardwareAccelerationModeEnabledPref_) {
            return false;
        }
        const proxy = SystemPageBrowserProxyImpl.getInstance();
        return this.hardwareAccelerationModeEnabledPref_.value !==
            proxy.wasHardwareAccelerationEnabledAtStartup();
    }
    // 
    shouldShowIsolationRestart_() {
        if (this.processIsolationEnabledAtStartup_ === undefined ||
            !this.isolationStateEnabledPref_) {
            return false;
        }
        return this.isolationStateEnabledPref_.value !==
            this.processIsolationEnabledAtStartup_;
    }
    // 
    // 
    // SettingsPlugin implementation
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
