// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 *
 * 'settings-search-engine-list-dialog' is the dialog shown for displaying the
 * list of search engines from which the user can choose a default.
 *
 * When the "More options" entry point is enabled, clicking it fires a
 * 'more-engines-click' event, letting the parent replace this dialog with
 * 'settings-search-engine-more-engines-dialog'.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import './search_engine_icon.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './search_engine_list_dialog.css.js';
import { getHtml } from './search_engine_list_dialog.html.js';
import { ChoiceMadeLocation, SearchEnginesBrowserProxyImpl } from './search_engines_browser_proxy.js';
const SettingsSearchEngineListDialogElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsSearchEngineListDialogElement extends SettingsSearchEngineListDialogElementBase {
    static get is() {
        return 'settings-search-engine-list-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * List of search engines available for the user to select as their
             * default search provider in the choice dialog (includes prepopulated
             * regional, default, managed policy, and recommended policy search
             * engines; excludes custom user-added engines).
             */
            searchEngines: { type: Array },
            /**
             * The id of the search engine that is selected by the user.
             */
            selectedEngineId_: { type: String },
            /**
             * State of the checkbox to save the search engine choice in guest mode,
             * or null if the checkbox is not displayed. Initialized by the parent,
             * then updated by the checkbox, firing 'save-guest-choice-changed'.
             */
            saveGuestChoice: {
                type: Boolean,
                notify: true,
            },
            /**
             * Whether the "More options" entry point is enabled via feature flag.
             */
            pickerWithMoreEnginesEnabled_: { type: Boolean },
        };
    }
    #searchEngines_accessor_storage = [];
    get searchEngines() { return this.#searchEngines_accessor_storage; }
    set searchEngines(value) { this.#searchEngines_accessor_storage = value; }
    #selectedEngineId__accessor_storage = '';
    get selectedEngineId_() { return this.#selectedEngineId__accessor_storage; }
    set selectedEngineId_(value) { this.#selectedEngineId__accessor_storage = value; }
    #saveGuestChoice_accessor_storage = null;
    get saveGuestChoice() { return this.#saveGuestChoice_accessor_storage; }
    set saveGuestChoice(value) { this.#saveGuestChoice_accessor_storage = value; }
    #pickerWithMoreEnginesEnabled__accessor_storage = loadTimeData.getBoolean('pickerWithMoreEngines');
    get pickerWithMoreEnginesEnabled_() { return this.#pickerWithMoreEnginesEnabled__accessor_storage; }
    set pickerWithMoreEnginesEnabled_(value) { this.#pickerWithMoreEnginesEnabled__accessor_storage = value; }
    browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('searchEngines')) {
            this.searchEnginesChanged_();
        }
    }
    firstUpdated() {
        // The title is in the header slot rather than the title slot, so that the
        // "More options" button can be next to it without being in the <h2>.
        this.$.dialog.setTitleAriaLabel(this.getTitle_());
    }
    getTitle_() {
        return loadTimeData.getString(this.pickerWithMoreEnginesEnabled_ ? 'searchEnginesPickerTitle' :
            'searchPageTitle');
    }
    getSubtitle_() {
        return loadTimeData.getString(this.pickerWithMoreEnginesEnabled_ ?
            'searchEnginesPickerSubtitle' :
            'searchEnginesSettingsDialogSubtitle');
    }
    onMoreEnginesClick_() {
        this.fire('more-engines-click');
    }
    onSetAsDefaultClick_() {
        const searchEngine = this.searchEngines.find(engine => engine.id === this.selectedEngineId_);
        assert(searchEngine);
        this.browserProxy_.setDefaultSearchEngine(searchEngine.id, ChoiceMadeLocation.SEARCH_SETTINGS, this.saveGuestChoice);
        this.fire('search-engine-changed', { searchEngine });
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    onDialogCancel_() {
        this.$.dialog.close();
    }
    searchEnginesChanged_() {
        if (!this.searchEngines.length) {
            this.selectedEngineId_ = '';
            return;
        }
        const defaultSearchEngine = this.searchEngines.find(searchEngine => searchEngine.default);
        assert(defaultSearchEngine);
        this.selectedEngineId_ = defaultSearchEngine.id;
    }
    onRadioGroupSelectedChanged_(e) {
        this.selectedEngineId_ = e.detail.value;
    }
    onSaveGuestChoiceCheckedChanged_(e) {
        this.saveGuestChoice = e.detail.value;
    }
    getPolicyIndicatorTooltipPosition_() {
        return isRTL() ? 'right' : 'left';
    }
}
customElements.define(SettingsSearchEngineListDialogElement.is, SettingsSearchEngineListDialogElement);
