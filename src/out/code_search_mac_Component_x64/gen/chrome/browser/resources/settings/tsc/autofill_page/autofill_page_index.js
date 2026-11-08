// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-autofill-page-index' is the settings page containing
 * settings for passwords, payment methods, addresses and more.
 */
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './autofill_page.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { SearchableViewContainerMixinLit } from '../settings_page/searchable_view_container_mixin_lit.js';
import { getCss } from './autofill_page_index.css.js';
import { getHtml } from './autofill_page_index.html.js';
import { DataManagementSurvey, SavedInfoHandlerImpl } from './saved_info_handler_proxy.js';
const SettingsAutofillPageIndexElementBase = SearchableViewContainerMixinLit(RouteObserverMixinLit(CrLitElement));
export class SettingsAutofillPageIndexElement extends SettingsAutofillPageIndexElementBase {
    static get is() {
        return 'settings-autofill-page-index';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            routes_: { type: Object },
            isShoppingEnabled_: { type: Boolean },
            showSuggestionsFromGeminiSettings_: { type: Boolean },
        };
    }
    #routes__accessor_storage = routes;
    get routes_() { return this.#routes__accessor_storage; }
    set routes_(value) { this.#routes__accessor_storage = value; }
    #isShoppingEnabled__accessor_storage = loadTimeData.getBoolean('shoppingIntegrationEnabled');
    get isShoppingEnabled_() { return this.#isShoppingEnabled__accessor_storage; }
    set isShoppingEnabled_(value) { this.#isShoppingEnabled__accessor_storage = value; }
    #showSuggestionsFromGeminiSettings__accessor_storage = loadTimeData.getBoolean('showSuggestionsFromGeminiSettings');
    get showSuggestionsFromGeminiSettings_() { return this.#showSuggestionsFromGeminiSettings__accessor_storage; }
    set showSuggestionsFromGeminiSettings_(value) { this.#showSuggestionsFromGeminiSettings__accessor_storage = value; }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        const isFromHomePage = oldRoute?.path === routes.AUTOFILL.path;
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.AUTOFILL:
                    this.$.viewManager.switchView('parent', 'no-animation', 'no-animation');
                    SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.YOUR_SAVED_INFO, isFromHomePage);
                    break;
                case routes.BASIC:
                    // Switch back to the default views in case they are part of search
                    // results.
                    this.$.viewManager.switchView('parent', 'no-animation', 'no-animation');
                    break;
                case routes.CONTACT_INFO:
                    this.$.viewManager.switchView('contactInfo', 'no-animation', 'no-animation');
                    SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.CONTACT_INFO, isFromHomePage);
                    break;
                case routes.IDENTITY_DOCS:
                    this.$.viewManager.switchView('identityDocs', 'no-animation', 'no-animation');
                    SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.IDENTITY_DOCS, isFromHomePage);
                    break;
                // 
                case routes.PASSKEYS:
                    this.$.viewManager.switchView('passkeys', 'no-animation', 'no-animation');
                    break;
                // 
                case routes.PAYMENTS:
                    this.$.viewManager.switchView('payments', 'no-animation', 'no-animation');
                    SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.PAYMENTS, isFromHomePage);
                    break;
                case routes.TRAVEL:
                    this.$.viewManager.switchView('travel', 'no-animation', 'no-animation');
                    SavedInfoHandlerImpl.getInstance().requestDataManagementSurvey(DataManagementSurvey.TRAVEL, isFromHomePage);
                    break;
                case routes.SHOPPING:
                    assert(this.isShoppingEnabled_);
                    this.$.viewManager.switchView('shopping', 'no-animation', 'no-animation');
                    break;
                case routes.SUGGESTIONS_FROM_GEMINI:
                    assert(this.showSuggestionsFromGeminiSettings_);
                    this.$.viewManager.switchView('suggestionsFromGemini', 'no-animation', 'no-animation');
                    break;
                default:
                    // Nothing to do. Other parent elements are responsible for updating
                    // the displayed contents.
                    break;
            }
        });
    }
}
customElements.define(SettingsAutofillPageIndexElement.is, SettingsAutofillPageIndexElement);
