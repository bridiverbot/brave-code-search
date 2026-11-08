// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-default-browser-page' is the settings page that contains
 * settings to change the default browser (i.e. which the OS will open).
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyle } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { getSearchManager } from '../search_settings.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
import { DefaultBrowserBrowserProxyImpl } from './default_browser_browser_proxy.js';
import { getHtml } from './default_browser_page.html.js';
const SettingsDefaultBrowserPageElementBase = RouteObserverMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsDefaultBrowserPageElement extends SettingsDefaultBrowserPageElementBase {
    static get is() {
        return 'settings-default-browser-page';
    }
    static get styles() {
        return [getCrSharedStyle(), getSettingsSharedLit()];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            canPin_: { type: Boolean },
            isDefault_: { type: Boolean },
            isSecondaryInstall_: { type: Boolean },
            isUnknownError_: { type: Boolean },
            maySetDefaultBrowser_: { type: Boolean },
            // Whether the description should use a more user-centric string.
            userValueDefaultBrowserStringsEnabled_: { type: Boolean },
        };
    }
    #canPin__accessor_storage = false;
    get canPin_() { return this.#canPin__accessor_storage; }
    set canPin_(value) { this.#canPin__accessor_storage = value; }
    #isDefault__accessor_storage = false;
    get isDefault_() { return this.#isDefault__accessor_storage; }
    set isDefault_(value) { this.#isDefault__accessor_storage = value; }
    #isSecondaryInstall__accessor_storage = false;
    get isSecondaryInstall_() { return this.#isSecondaryInstall__accessor_storage; }
    set isSecondaryInstall_(value) { this.#isSecondaryInstall__accessor_storage = value; }
    #isUnknownError__accessor_storage = false;
    get isUnknownError_() { return this.#isUnknownError__accessor_storage; }
    set isUnknownError_(value) { this.#isUnknownError__accessor_storage = value; }
    #maySetDefaultBrowser__accessor_storage = false;
    get maySetDefaultBrowser_() { return this.#maySetDefaultBrowser__accessor_storage; }
    set maySetDefaultBrowser_(value) { this.#maySetDefaultBrowser__accessor_storage = value; }
    #userValueDefaultBrowserStringsEnabled__accessor_storage = false;
    get userValueDefaultBrowserStringsEnabled_() { return this.#userValueDefaultBrowserStringsEnabled__accessor_storage; }
    set userValueDefaultBrowserStringsEnabled_(value) { this.#userValueDefaultBrowserStringsEnabled__accessor_storage = value; }
    browserProxy_ = DefaultBrowserBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('browser-default-state-changed', this.updateDefaultBrowserState_.bind(this));
        this.browserProxy_.requestDefaultBrowserState().then(this.updateDefaultBrowserState_.bind(this));
    }
    currentRouteChanged(newRoute) {
        if (newRoute !== routes.DEFAULT_BROWSER) {
            return;
        }
        // The feature flag state is fetched asynchronously on page navigation,
        // instead of using loadTimeData, to support a Finch experiment with
        // `starts_active = false`. This ensures that the user is activated in the
        // experiment (e.g. the feature flag is checked) only when visiting the
        // page.
        this.browserProxy_.requestUserValueStringsFeatureState().then((isEnabled) => {
            this.userValueDefaultBrowserStringsEnabled_ = isEnabled;
        });
    }
    updateDefaultBrowserState_(defaultBrowserState) {
        this.canPin_ = defaultBrowserState.canPin;
        this.isDefault_ = false;
        this.isSecondaryInstall_ = false;
        this.isUnknownError_ = false;
        this.maySetDefaultBrowser_ = false;
        if (defaultBrowserState.isDefault) {
            this.isDefault_ = true;
        }
        else if (!defaultBrowserState.canBeDefault) {
            this.isSecondaryInstall_ = true;
        }
        else if (!defaultBrowserState.isDisabledByPolicy &&
            !defaultBrowserState.isUnknownError) {
            this.maySetDefaultBrowser_ = true;
        }
        else {
            this.isUnknownError_ = true;
        }
    }
    getMakeDefaultLabel() {
        // When the UserValueDefaultBrowserStrings feature is enabled, show a
        // more user-centric string.
        // TODO(crbug.com/459593729): Clean up after launch by removing the old
        // string and this conditional logic.
        if (this.canPin_) {
            return loadTimeData.getString(this.userValueDefaultBrowserStringsEnabled_ ?
                'defaultBrowserMakeDefaultAndPinUserValue' :
                'defaultBrowserMakeDefaultAndPin');
        }
        // When the UserValueDefaultBrowserStrings feature is enabled, show a
        // more user-centric string.
        // TODO(crbug.com/459593729): Clean up after launch by removing the old
        // string and this conditional logic.
        return loadTimeData.getString(this.userValueDefaultBrowserStringsEnabled_ ?
            'defaultBrowserMakeDefaultUserValue' :
            'defaultBrowserMakeDefault');
    }
    onSetDefaultBrowserClick_() {
        this.browserProxy_.setAsDefaultBrowser(this.canPin_);
    }
    // SettingsPlugin implementation
    async searchContents(query) {
        const searchRequest = await getSearchManager().search(query, this);
        return searchRequest.getSearchResult();
    }
}
customElements.define(SettingsDefaultBrowserPageElement.is, SettingsDefaultBrowserPageElement);
