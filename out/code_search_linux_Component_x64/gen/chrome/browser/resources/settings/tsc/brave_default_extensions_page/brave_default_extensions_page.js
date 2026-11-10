// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import './brave_extensions_manifest_v2_subpage.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { Router } from '../router.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
import { SearchableViewContainerMixin } from '../settings_page/searchable_view_container_mixin.js';
import { BraveDefaultExtensionsBrowserProxyImpl } from './brave_default_extensions_browser_proxy.js';
import { getTemplate } from './brave_default_extensions_page.html.js';
const SettingBraveDefaultExtensionsPageElementBase = SearchableViewContainerMixin(SettingsViewMixin(WebUiListenerMixin(PrefServiceObserverMixin(PolymerElement))));
/**
 * 'settings-brave-default-extensions-page' is the settings page containing
 * brave's default extensions.
 */
export class SettingBraveDefaultExtensionsPageElement extends SettingBraveDefaultExtensionsPageElementBase {
    static get is() {
        return 'settings-brave-default-extensions-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            showRestartToast_: Boolean,
            googleLoginPref_: Object,
            mediaRouterPref_: Object,
            widevineEnabled_: Boolean,
            isExtensionsManifestV2FeatureEnabled_: {
                value: () => loadTimeData.getBoolean('extensionsManifestV2Feature'),
            }
        };
    }
    browserProxy_ = BraveDefaultExtensionsBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'signin.allowed_on_next_startup': 'googleLoginPref_',
            'brave.enable_media_router_on_restart': 'mediaRouterPref_',
        });
    }
    ready() {
        super.ready();
        this.addWebUiListener('brave-needs-restart-changed', (needsRestart) => {
            this.showRestartToast_ = needsRestart;
        });
        this.browserProxy_.getRestartNeeded().then(show => {
            this.showRestartToast_ = show;
        });
        const setWidevineEnabled = (enabled) => {
            this.widevineEnabled_ = enabled;
        };
        this.addWebUiListener('widevine-enabled-changed', setWidevineEnabled);
        this.browserProxy_.isWidevineEnabled().then(setWidevineEnabled);
    }
    getAssociatedControlFor(childViewId) {
        switch (childViewId) {
            case 'manageV2Extensions':
                return this.shadowRoot.querySelector('#manageV2Extensions');
            default:
                throw new Error(`Unknown child view id: ${childViewId}`);
        }
    }
    restartBrowser_(e) {
        e.stopPropagation();
        window.open("chrome://restart", "_self");
    }
    onWidevineEnabledChange_() {
        this.browserProxy_.setWidevineEnabled(this.$.widevineEnabled.checked);
    }
    openManageV2ExtensionPage_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().EXTENSIONS_V2);
    }
    openExtensionsPage_() {
        window.open("chrome://extensions", "_self");
    }
    openKeyboardShortcutsPage_() {
        window.open("chrome://extensions/shortcuts", "_self");
    }
    openWebStoreUrl_() {
        window.open(loadTimeData.getString('getMoreExtensionsUrl'), undefined, 'noreferrer');
    }
    shouldShowRestartForGoogleLogin_(value) {
        return this.browserProxy_.wasSignInEnabledAtStartup() != value;
    }
    shouldShowRestartForMediaRouter_(value) {
        return this.browserProxy_.isMediaRouterEnabled() != value;
    }
}
customElements.define(SettingBraveDefaultExtensionsPageElement.is, SettingBraveDefaultExtensionsPageElement);
