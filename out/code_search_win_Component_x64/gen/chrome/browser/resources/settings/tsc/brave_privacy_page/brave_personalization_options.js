// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrefServiceObserverMixin, } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixin, } from '/shared/settings/web_ui_listener_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { getTemplate } from './brave_personalization_options.html.js';
import { BravePrivacyBrowserProxyImpl, } from './brave_privacy_page_browser_proxy.js';
import { assert } from 'chrome://resources/js/assert.js';
import { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import '/shared/settings/md_select.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../controls/settings_dropdown_menu.js';
import '../privacy_page/do_not_track_toggle.js';
const SettingsBravePersonalizationOptionsBase = WebUiListenerMixin(PrefServiceObserverMixin(PolymerElement));
export class SettingsBravePersonalizationOptions extends SettingsBravePersonalizationOptionsBase {
    static get is() {
        return 'settings-brave-personalization-options';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            webRTCPolicies_: {
                readOnly: true,
                type: Array,
                value: function () {
                    return [
                        { value: 'default', name: loadTimeData.getString('webRTCDefault') },
                        {
                            value: 'default_public_and_private_interfaces',
                            name: loadTimeData.getString('defaultPublicAndPrivateInterfaces'),
                        },
                        {
                            value: 'default_public_interface_only',
                            name: loadTimeData.getString('defaultPublicInterfaceOnly'),
                        },
                        {
                            value: 'disable_non_proxied_udp',
                            name: loadTimeData.getString('disableNonProxiedUdp'),
                        },
                    ];
                },
            },
            webRTCPolicy_: String,
            historyRetentionOptions_: {
                readOnly: true,
                type: Array,
                value: function () {
                    return [
                        { value: 1, name: loadTimeData.getString('historyRetentionOneDay') },
                        {
                            value: 7,
                            name: loadTimeData.getString('historyRetentionOneWeek'),
                        },
                        {
                            value: 30,
                            name: loadTimeData.getString('historyRetentionOneMonth'),
                        },
                        {
                            value: 90,
                            name: loadTimeData.getString('historyRetentionThreeMonths'),
                        },
                        {
                            value: 180,
                            name: loadTimeData.getString('historyRetentionSixMonths'),
                        },
                        {
                            value: 365,
                            name: loadTimeData.getString('historyRetentionOneYear'),
                        },
                        {
                            value: 365 * 5,
                            name: loadTimeData.getString('historyRetentionFiveYears'),
                        },
                        {
                            value: -1,
                            name: loadTimeData.getString('historyRetentionForever'),
                        },
                    ];
                },
            },
            isDebounceFeatureEnabled_: {
                readOnly: true,
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isDebounceFeatureEnabled');
                },
            },
            isRequestOTRFeatureEnabled_: {
                readOnly: true,
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isRequestOTRFeatureEnabled');
                },
            },
            isPsstFeatureEnabled_: {
                readOnly: true,
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isPsstFeatureEnabled');
                },
            },
            // 
            isSemanticHistorySearchAvailable_: {
                readOnly: true,
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isSemanticHistorySearchAvailable');
                },
            },
            isOnDeviceSpeechModelAvailable_: {
                readOnly: true,
                type: Boolean,
                value: function () {
                    return loadTimeData.getBoolean('isOnDeviceSpeechModelAvailable');
                },
            },
            semanticHistorySearchPref_: Object,
            // 
            requestOTRActions_: {
                readOnly: true,
                type: Array,
                value: function () {
                    return [
                        { value: 0, name: loadTimeData.getString('requestOTRDefault') },
                        { value: 1, name: loadTimeData.getString('requestOTRAlways') },
                        { value: 2, name: loadTimeData.getString('requestOTRNever') },
                    ];
                },
            },
            requestOTRAction_: String,
            pushMessagingPref_: Object,
            isWindowsRecallAvailable_: {
                readOnly: true,
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isWindowsRecallAvailable');
                },
            },
            windowsRecallDisabled_: Boolean,
        };
    }
    browserProxy_ = BravePrivacyBrowserProxyImpl.getInstance();
    shouldShowRestart_(enabled) {
        return enabled != this.browserProxy_.wasPushMessagingEnabledAtStartup();
    }
    shouldShowRestartWindowsRecall_(disabled) {
        return disabled != this.browserProxy_.wasWindowsRecallDisabledAtStartup();
    }
    // 
    // The index is built at profile setup, so the toggle only takes effect on
    // the next launch. `semanticHistorySearchEnabledAtStartup` is the value the
    // embedding services were built with and is fixed for the session, so
    // comparing against it survives a reload of this page.
    shouldShowRestartSemanticHistorySearch_(enabled) {
        return (enabled !=
            loadTimeData.getBoolean('semanticHistorySearchEnabledAtStartup'));
    }
    // 
    windowsRecallDisabledChange_(event) {
        const target = event.target;
        assert(target instanceof SettingsToggleButtonElement);
        this.browserProxy_.setWindowsRecallDisabled(target.checked);
    }
    setWindowsRecallDisabled_(disabled) {
        this.windowsRecallDisabled_ = disabled;
    }
    restartBrowser_(e) {
        e.stopPropagation();
        window.open('chrome://restart', '_self');
    }
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('brave.gcm.channel_status', 'pushMessagingPref_');
        // 
        this.mirrorPref('brave.history_embeddings_enabled', 'semanticHistorySearchPref_');
        // 
    }
    ready() {
        super.ready();
        if (this.isWindowsRecallAvailable_) {
            this.addWebUiListener('windows-recall-disabled-changed', this.setWindowsRecallDisabled_.bind(this));
            this.browserProxy_
                .isWindowsRecallDisabled()
                .then(this.setWindowsRecallDisabled_.bind(this));
        }
    }
}
customElements.define(SettingsBravePersonalizationOptions.is, SettingsBravePersonalizationOptions);
