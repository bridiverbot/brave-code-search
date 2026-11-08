/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../search_page/search_engine_icon.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { WebUiListenerMixin } from '/shared/settings/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { BraveSearchEnginesPageBrowserProxyImpl } from './brave_search_engines_page_browser_proxy.js';
import { getTemplate } from './private_search_engine_list_dialog.html.js';
const SettingsPrivateSearchEngineListDialogElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsPrivateSearchEngineListDialogElement extends SettingsPrivateSearchEngineListDialogElementBase {
    static get is() {
        return 'settings-private-search-engine-list-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of search engines available.
             */
            searchEngines: {
                type: Array,
                observer: 'searchEnginesChanged_',
            },
            /**
             * The id of the search engine that is selected by the user.
             */
            selectedEngineId_: {
                type: String,
                value: '',
            },
            /**
             * Promoted search engine
             */
            promotedEngine_: {
                type: Object,
                computed: 'computePromotedEngine_(searchEngines)',
            },
        };
    }
    browserProxy_ = BraveSearchEnginesPageBrowserProxyImpl.getInstance();
    onSetAsDefaultClick_() {
        const searchEngine = this.searchEngines.find(engine => engine.id === this.selectedEngineId_);
        assert(searchEngine);
        this.browserProxy_.setDefaultPrivateSearchEngine(searchEngine.id);
        this.dispatchEvent(new CustomEvent('private-search-engine-changed', {
            bubbles: true,
            composed: true,
            detail: {
                searchEngine: searchEngine,
            },
        }));
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    searchEnginesChanged_() {
        if (!this.searchEngines.length) {
            return;
        }
        const defaultSearchEngine = this.searchEngines.find(searchEngine => searchEngine.default);
        assert(defaultSearchEngine);
        this.selectedEngineId_ = defaultSearchEngine.id;
    }
    isPromotedEngine_(engine) {
        return this.promotedEngine_ === engine;
    }
    isBraveSearchEngine_(engine) {
        return engine.name === loadTimeData.getString('braveSearchEngineName')
            && engine.isPrepopulated === true;
    }
    computePromotedEngine_(searchEngines) {
        if (loadTimeData.getBoolean('isLocaleJapan') || !searchEngines?.length) {
            return undefined;
        }
        return searchEngines.find(this.isBraveSearchEngine_);
    }
}
customElements.define(SettingsPrivateSearchEngineListDialogElement.is, SettingsPrivateSearchEngineListDialogElement);
