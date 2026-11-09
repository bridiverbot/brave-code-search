// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/settings.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { ChoiceMadeLocation, SearchEnginesBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertDeepEquals, assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { eventToPromise, isVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
import { createSampleSearchEngine, engineId, TestSearchEnginesBrowserProxy } from './test_search_engines_browser_proxy.js';
// clang-format on
function generateSampleMoreEngines() {
    const engine1 = createSampleSearchEngine({
        name: 'DuckDuckGo',
        keyword: 'duckduckgo.com',
        id: engineId('db:10'),
        canBeDefault: true,
    });
    const engine2 = createSampleSearchEngine({
        name: 'Cốc Cốc',
        keyword: 'coccoc.com',
        id: engineId('prepop:58'),
        canBeDefault: true,
    });
    const engine3 = createSampleSearchEngine({
        name: '네이버',
        keyword: 'naver.com',
        id: engineId('prepop:30'),
        canBeDefault: true,
    });
    return [engine1, engine2, engine3];
}
suite('SearchEngineMoreEnginesDialog', function () {
    let dialog;
    let browserProxy;
    async function createDialog(saveGuestChoice = null) {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        dialog =
            document.createElement('settings-search-engine-more-engines-dialog');
        dialog.saveGuestChoice = saveGuestChoice;
        document.body.appendChild(dialog);
        await microtasksFinished();
    }
    setup(function () {
        browserProxy = new TestSearchEnginesBrowserProxy();
        browserProxy.setMoreSearchEngines(generateSampleMoreEngines());
        SearchEnginesBrowserProxyImpl.setInstance(browserProxy);
        return createDialog();
    });
    function getRadioButtons() {
        return dialog.shadowRoot.querySelectorAll('cr-radio-button');
    }
    async function clickRadioButton(index) {
        const radioButton = getRadioButtons()[index];
        assertTrue(!!radioButton);
        radioButton.click();
        await microtasksFinished();
    }
    function getEngineNames() {
        return Array.from(getRadioButtons(), button => button.textContent.trim());
    }
    function getSelectedId() {
        const radioGroup = dialog.shadowRoot.querySelector('cr-radio-group');
        assertTrue(!!radioGroup);
        return radioGroup.selected;
    }
    function getSetAsDefaultButton() {
        const button = dialog.shadowRoot.querySelector('#setAsDefaultButton');
        assertTrue(!!button);
        return button;
    }
    async function search(query) {
        dialog.$.searchField.setValue(query);
        await microtasksFinished();
    }
    function isNoSearchResultsVisible() {
        return isVisible(dialog.shadowRoot.querySelector('.no-search-results'));
    }
    test('Shows the engines', function () {
        assertDeepEquals(['DuckDuckGo', 'Cốc Cốc', '네이버'], getEngineNames());
        assertFalse(isNoSearchResultsVisible());
        assertFalse(!!dialog.shadowRoot.querySelector('#saveGuestChoiceCheckbox'));
    });
    test('Search filtering matches name, keyword, and diacritics', async function () {
        await search('duck');
        assertDeepEquals(['DuckDuckGo'], getEngineNames());
        // ASCII keyword of a non-Latin name.
        await search('naver');
        assertDeepEquals(['네이버'], getEngineNames());
        // Diacritic-insensitive.
        await search('coccoc');
        assertDeepEquals(['Cốc Cốc'], getEngineNames());
        await search('nonexistent engine');
        assertDeepEquals([], getEngineNames());
        assertTrue(isNoSearchResultsVisible());
    });
    test('Filtering out the selected engine clears the selection', async function () {
        await clickRadioButton(1); // Cốc Cốc.
        assertEquals('prepop:58', getSelectedId());
        await search('naver');
        assertEquals('', getSelectedId());
        assertTrue(getSetAsDefaultButton().disabled);
        // The selection stays cleared once the engine is visible again.
        await search('');
        assertDeepEquals(['DuckDuckGo', 'Cốc Cốc', '네이버'], getEngineNames());
        assertEquals('', getSelectedId());
        assertTrue(getSetAsDefaultButton().disabled);
    });
    test('Search engine changes fetch the engines again', async function () {
        assertEquals(1, browserProxy.getCallCount('getMoreSearchEngines'));
        await clickRadioButton(0); // DuckDuckGo.
        assertEquals('db:10', getSelectedId());
        // The new list doesn't contain the selected engine.
        browserProxy.setMoreSearchEngines(generateSampleMoreEngines().slice(1));
        webUIListenerCallback('search-engines-changed');
        await microtasksFinished();
        assertEquals(2, browserProxy.getCallCount('getMoreSearchEngines'));
        assertDeepEquals(['Cốc Cốc', '네이버'], getEngineNames());
        assertEquals('', getSelectedId());
    });
    test('Set as default makes the engine default, and closes', async function () {
        assertEquals('', getSelectedId());
        assertTrue(getSetAsDefaultButton().disabled);
        const searchEngineChanged = eventToPromise('search-engine-changed', dialog);
        const closed = eventToPromise('close', dialog);
        await clickRadioButton(1); // Cốc Cốc.
        assertFalse(getSetAsDefaultButton().disabled);
        getSetAsDefaultButton().click();
        const [id, choiceMadeLocation, saveGuestChoice] = await browserProxy.whenCalled('setDefaultSearchEngine');
        assertEquals('prepop:58', id);
        assertEquals(ChoiceMadeLocation.SEARCH_SETTINGS, choiceMadeLocation);
        assertEquals(null, saveGuestChoice);
        assertEquals('prepop:58', (await searchEngineChanged).detail.searchEngine.id);
        await closed;
        assertFalse(dialog.$.dialog.open);
    });
    test('Cancel closes without choosing an engine', async function () {
        const closed = eventToPromise('close', dialog);
        await clickRadioButton(0);
        dialog.shadowRoot.querySelector('#cancelButton').click();
        await closed;
        assertFalse(dialog.$.dialog.open);
        assertEquals(0, browserProxy.getCallCount('setDefaultSearchEngine'));
    });
    test('Guest choice checkbox updates the choice', async function () {
        await createDialog(/*saveGuestChoice=*/ false);
        const checkbox = dialog.shadowRoot.querySelector('#saveGuestChoiceCheckbox');
        assertTrue(!!checkbox);
        assertFalse(checkbox.checked);
        const saveGuestChoiceChanged = eventToPromise('save-guest-choice-changed', dialog);
        checkbox.click();
        assertTrue((await saveGuestChoiceChanged).detail.value);
        await clickRadioButton(0);
        getSetAsDefaultButton().click();
        const [id, , saveGuestChoice] = await browserProxy.whenCalled('setDefaultSearchEngine');
        assertEquals('db:10', id);
        assertTrue(saveGuestChoice);
    });
});
