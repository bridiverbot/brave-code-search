/* Copyright (c) 2025 The Brave Authors. All rights reserved.
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
import { ChoiceMadeLocation, SearchEnginesBrowserProxyImpl } from '../search_page/search_engines_browser_proxy.js';
import { getTemplate } from './normal_search_engine_list_dialog.html.js';
const SettingsNormalSearchEngineListDialogElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsNormalSearchEngineListDialogElement extends SettingsNormalSearchEngineListDialogElementBase {
    static get is() {
        return 'settings-normal-search-engine-list-dialog';
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
             * Whether the checkbox to save the search engine choice in guest mode
             * should be shown.
             */
            showSaveGuestChoice_: {
                type: Boolean,
                computed: 'computeShowSaveGuestChoice_(saveGuestChoice_)',
            },
            /**
             * State of the checkbox to save the search engine in guest mode. Null if
             * checkbox is not displayed.
             */
            saveGuestChoice_: {
                type: Boolean,
                value: null,
                notify: true,
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
    browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    ready() {
        super.ready();
        this.browserProxy_.getSaveGuestChoice().then((saveGuestChoice) => {
            this.saveGuestChoice_ = saveGuestChoice;
        });
    }
    onSetAsDefaultClick_() {
        const searchEngine = this.searchEngines.find(engine => engine.id === this.selectedEngineId_);
        assert(searchEngine);
        this.browserProxy_.setDefaultSearchEngine(searchEngine.id, ChoiceMadeLocation.SEARCH_SETTINGS, this.saveGuestChoice_);
        this.dispatchEvent(new CustomEvent('search-engine-changed', {
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
    computeShowSaveGuestChoice_(saveGuestChoice) {
        return saveGuestChoice !== null;
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
customElements.define(SettingsNormalSearchEngineListDialogElement.is, SettingsNormalSearchEngineListDialogElement);
