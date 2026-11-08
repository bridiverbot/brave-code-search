// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Contains all recorded interactions on the search engines settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsSearchEnginesInteractions enum in
 * histograms/enums.xml
 */
export var SearchEnginesInteractions;
(function (SearchEnginesInteractions) {
    SearchEnginesInteractions[SearchEnginesInteractions["ACTIVATE"] = 0] = "ACTIVATE";
    SearchEnginesInteractions[SearchEnginesInteractions["DEACTIVATE"] = 1] = "DEACTIVATE";
    SearchEnginesInteractions[SearchEnginesInteractions["KEYBOARD_SHORTCUT_TAB"] = 2] = "KEYBOARD_SHORTCUT_TAB";
    SearchEnginesInteractions[SearchEnginesInteractions["KEYBOARD_SHORTCUT_SPACE_OR_TAB"] = 3] = "KEYBOARD_SHORTCUT_SPACE_OR_TAB";
    SearchEnginesInteractions[SearchEnginesInteractions["SITE_SHORTCUTS_SECTION_EXPANDED"] = 4] = "SITE_SHORTCUTS_SECTION_EXPANDED";
    SearchEnginesInteractions[SearchEnginesInteractions["SITE_SHORTCUTS_SECTION_COLLAPSED"] = 5] = "SITE_SHORTCUTS_SECTION_COLLAPSED";
    SearchEnginesInteractions[SearchEnginesInteractions["FEATURE_SHORTCUTS_SECTION_EXPANDED"] = 6] = "FEATURE_SHORTCUTS_SECTION_EXPANDED";
    SearchEnginesInteractions[SearchEnginesInteractions["FEATURE_SHORTCUTS_SECTION_COLLAPSED"] = 7] = "FEATURE_SHORTCUTS_SECTION_COLLAPSED";
    SearchEnginesInteractions[SearchEnginesInteractions["MORE_ACTIONS"] = 8] = "MORE_ACTIONS";
    SearchEnginesInteractions[SearchEnginesInteractions["EDIT_SEARCH_ENGINE"] = 9] = "EDIT_SEARCH_ENGINE";
    SearchEnginesInteractions[SearchEnginesInteractions["ADD_SEARCH_ENGINE"] = 10] = "ADD_SEARCH_ENGINE";
    SearchEnginesInteractions[SearchEnginesInteractions["SUBPAGE_NAVIGATED"] = 11] = "SUBPAGE_NAVIGATED";
    SearchEnginesInteractions[SearchEnginesInteractions["EXTENSION_DISABLE"] = 12] = "EXTENSION_DISABLE";
    SearchEnginesInteractions[SearchEnginesInteractions["EXTENSION_MANAGE"] = 13] = "EXTENSION_MANAGE";
    // Leave this at the end.
    SearchEnginesInteractions[SearchEnginesInteractions["COUNT"] = 14] = "COUNT";
})(SearchEnginesInteractions || (SearchEnginesInteractions = {}));
/**
 * The location from which the search engine choice was made.
 *
 * Must be kept in sync with the ChoiceMadeLocation enum in
 * //components/search_engines/choice_made_location.h
 */
export var ChoiceMadeLocation;
(function (ChoiceMadeLocation) {
    // Some unspecified source, not matching some requirements that the full
    // search engine choice surfaces are compatible with. Might be used for
    // example when automatically changing default search engine via an extension,
    // or some enterprise policy.
    ChoiceMadeLocation[ChoiceMadeLocation["OTHER"] = 0] = "OTHER";
    // `chrome://settings/search`
    ChoiceMadeLocation[ChoiceMadeLocation["SEARCH_SETTINGS"] = 1] = "SEARCH_SETTINGS";
    // `chrome://settings/searchEngines`
    ChoiceMadeLocation[ChoiceMadeLocation["SEARCH_ENGINE_SETTINGS"] = 2] = "SEARCH_ENGINE_SETTINGS";
    // The search engine choice dialog for existing users or the profile picker
    // for new users. This value should not be used in settings.
    ChoiceMadeLocation[ChoiceMadeLocation["CHOICE_SCREEN"] = 3] = "CHOICE_SCREEN";
    // Programmatic import of a search engine choice selected at the device level
    // (e.g., Android Play API). Behaves mostly like `CHOICE_SCREEN` for initial
    // recording, but allows repeated signals from the OS to be dropped silently
    // without triggering assertion failures or creating duplicate records.
    ChoiceMadeLocation[ChoiceMadeLocation["DEVICE_CHOICE_IMPORT"] = 4] = "DEVICE_CHOICE_IMPORT";
})(ChoiceMadeLocation || (ChoiceMadeLocation = {}));
export class SearchEnginesBrowserProxyImpl {
    setDefaultSearchEngine(id, choiceMadeLocation, saveGuestChoice) {
        chrome.send('setDefaultSearchEngine', [id, choiceMadeLocation, saveGuestChoice]);
    }
    setIsActiveSearchEngine(id, isActive) {
        chrome.send('setIsActiveSearchEngine', [id, isActive]);
        this.recordSearchEnginesPageHistogram(isActive ? SearchEnginesInteractions.ACTIVATE :
            SearchEnginesInteractions.DEACTIVATE);
    }
    removeSearchEngine(id) {
        chrome.send('removeSearchEngine', [id]);
    }
    searchEngineEditStarted(id) {
        chrome.send('searchEngineEditStarted', [id]);
    }
    searchEngineEditCancelled() {
        chrome.send('searchEngineEditCancelled');
    }
    searchEngineEditCompleted(searchEngine, keyword, queryUrl) {
        chrome.send('searchEngineEditCompleted', [
            searchEngine,
            keyword,
            queryUrl,
        ]);
    }
    getCategorizedTemplateUrls() {
        return sendWithPromise('getCategorizedTemplateUrls');
    }
    getDefaultSearchEnginePickerData() {
        return sendWithPromise('getDefaultSearchEnginePickerData');
    }
    getMoreSearchEngines() {
        return sendWithPromise('getMoreSearchEngines');
    }
    getSearchEnginesList() {
        return sendWithPromise('getSearchEnginesList');
    }
    getSaveGuestChoice() {
        return sendWithPromise('getSaveGuestChoice');
    }
    validateSearchEngineInput(fieldName, fieldValue) {
        return sendWithPromise('validateSearchEngineInput', fieldName, fieldValue);
    }
    recordSearchEnginesPageHistogram(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('Settings.SearchEngines.Interactions', interaction, SearchEnginesInteractions.COUNT);
    }
    static getInstance() {
        return instance || (instance = new SearchEnginesBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
