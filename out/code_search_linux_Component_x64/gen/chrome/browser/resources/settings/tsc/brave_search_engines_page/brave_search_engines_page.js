/* Copyright (c) 2021 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * you can obtain one at https://mozilla.org/MPL/2.0/. */
import '../search_page/search_engine_icon.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { RouteObserverMixin, Router } from '../router.js';
import { routes } from '../route.js';
import { loadTimeData } from '../i18n_setup.js';
import { BraveSearchEnginesPageBrowserProxyImpl } from './brave_search_engines_page_browser_proxy.js';
import { getTemplate } from './brave_search_engines_page.html.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
const BraveSearchEnginesPageBase = WebUiListenerMixin(PrefServiceObserverMixin(I18nMixin(RouteObserverMixin(PolymerElement))));
class BraveSearchEnginesPage extends BraveSearchEnginesPageBase {
    static get is() {
        return 'settings-brave-search-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The list of private search engines.
            privateSearchEngines_: {
                readOnly: false,
                type: Array
            },
            // The selected default private search engine.
            defaultPrivateSearchEngine_: {
                type: Object,
                computed: 'computeDefaultPrivateSearchEngine_(privateSearchEngines_)',
            },
            // Boolean to check whether we need to show the dialog or not.
            showPrivateSearchEngineListDialog_: Boolean,
            // The label of the confirmation toast that is displayed when the user
            // chooses a default private search engine.
            confirmationToastLabel_: String,
            // The default search provider pref, used to detect enforcement.
            defaultSearchProviderPref_: Object,
            webDiscoveryEnabledPref_: Object,
        };
    }
    browserProxy_ = BraveSearchEnginesPageBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPrefs({
            'default_search_provider_data.template_url_data': 'defaultSearchProviderPref_',
            'brave.web_discovery_enabled': 'webDiscoveryEnabledPref_',
        });
    }
    ready() {
        super.ready();
        const updatePrivateSearchEngines = (list) => {
            this.set('privateSearchEngines_', list);
        };
        this.browserProxy_.getPrivateSearchEnginesList().then(updatePrivateSearchEngines);
        this.addWebUiListener('private-search-engines-changed', updatePrivateSearchEngines);
    }
    currentRouteChanged() {
        this.showPrivateSearchEngineListDialog_ =
            Router.getInstance().getCurrentRoute() === routes.PRIVATE_SEARCH;
    }
    onOpenPrivateDialogButtonClick_() {
        Router.getInstance().navigateTo(routes.PRIVATE_SEARCH);
    }
    onPrivateSearchEngineListDialogClose_() {
        Router.getInstance().navigateTo(routes.SEARCH);
    }
    onPrivateSearchEngineChangedInDialog_(e) {
        this.confirmationToastLabel_ = this.i18n('privateSearchEnginesConfirmationToastLabel', e.detail.searchEngine.name);
        this.shadowRoot.querySelector('#confirmationToast').show();
    }
    shouldShowSearchSuggestToggle_() {
        return !loadTimeData.getBoolean('isGuest');
    }
    shouldShowPrivateSearchProvider_(pref) {
        // When default search engine is enforced, configured provider is not used.
        // If we install search provider extension, that extension will be used on normal and
        // private(tor) window. So, just hide this option.
        return !loadTimeData.getBoolean('isGuest') && !this.isPrefManaged_(pref);
    }
    isPrefManaged_(pref) {
        return !!pref &&
            pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    isWebDiscoveryNativeEnabled_() {
        return loadTimeData.getBoolean('isWebDiscoveryNativeEnabled');
    }
    computeDefaultPrivateSearchEngine_() {
        return this.privateSearchEngines_.find(engine => engine.default);
    }
}
customElements.define(BraveSearchEnginesPage.is, BraveSearchEnginesPage);
