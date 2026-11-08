// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome-untrusted://read-anything-side-panel.top-chrome/read_anything.js';
import { TranslatedSelectionMapper } from 'chrome-untrusted://read-anything-side-panel.top-chrome/read_anything.js';
import { assertEquals, assertNull, assertStringContains, assertTrue } from 'chrome-untrusted://webui-test/chai_assert.js';
import { setupTestEnvironment } from './common.js';
suite('TranslatedSelectionMapper', () => {
    let nodeStore;
    let contentBrowserProxy;
    let visualBrowserProxy;
    let mapper;
    // The reading mode content is:
    // <div>                    contentContainer
    //   <p>                    block 10
    //     "Hello "             text 11
    //     <a>"world"</a>       link 12 with text 13
    //   </p>
    //   "\n"                   whitespace between blocks
    //   <p>"Second"</p>        block 20 with text 21
    //   <span>"Loose"</span>   span 40 with text 41, which isn't in a block
    //   <p>"Third"</p>         block 30 with text 31
    // </div>
    let contentContainer;
    let block10;
    let text11;
    let text13;
    let block20;
    let text21;
    let text41;
    let text31;
    function createText(text, axId) {
        const node = document.createTextNode(text);
        nodeStore.setDomNode(node, axId);
        return node;
    }
    function createElement(tag, axId, children) {
        const element = document.createElement(tag);
        nodeStore.setDomNode(element, axId);
        element.append(...children);
        return element;
    }
    function select(anchorNode, anchorOffset, focusNode, focusOffset) {
        return { anchorNode, anchorOffset, focusNode, focusOffset };
    }
    function selectIds(anchorNodeId, anchorOffset, focusNodeId, focusOffset) {
        return { anchorNodeId, anchorOffset, focusNodeId, focusOffset };
    }
    function assertSelection(expected, actual) {
        assertTrue(!!actual);
        assertEquals(expected.anchorNode, actual.anchorNode);
        assertEquals(expected.anchorOffset, actual.anchorOffset);
        assertEquals(expected.focusNode, actual.focusNode);
        assertEquals(expected.focusOffset, actual.focusOffset);
    }
    setup(() => {
        const testEnvironment = setupTestEnvironment();
        nodeStore = testEnvironment.nodeStore;
        contentBrowserProxy = testEnvironment.contentBrowserProxy;
        visualBrowserProxy = testEnvironment.visualBrowserProxy;
        // The block map and the mapper are only used for PDFs when TranslatePdf is
        // enabled.
        contentBrowserProxy.translatePdfEnabled = true;
        visualBrowserProxy.pdf = true;
        mapper = new TranslatedSelectionMapper();
        text11 = createText('Hello ', 11);
        text13 = createText('world', 13);
        block10 =
            createElement('p', 10, [text11, createElement('a', 12, [text13])]);
        const whitespace = document.createTextNode('\n');
        text21 = createText('Second', 21);
        block20 = createElement('p', 20, [text21]);
        text41 = createText('Loose', 41);
        const span40 = createElement('span', 40, [text41]);
        text31 = createText('Third', 31);
        const block30 = createElement('p', 30, [text31]);
        contentContainer = document.createElement('div');
        contentContainer.append(block10, whitespace, block20, span40, block30);
        document.body.appendChild(contentContainer);
        nodeStore.registerTextInBlock(11, 10, text11.length);
        nodeStore.registerTextInBlock(13, 10, text13.length);
        nodeStore.registerTextInBlock(21, 20, text21.length);
        nodeStore.registerTextInBlock(31, 30, text31.length);
    });
    teardown(() => {
        contentContainer.remove();
    });
    suite('getReadingModeSelection', () => {
        test('selects the whole block with the selection', () => {
            const result = mapper.getReadingModeSelection(selectIds(11, 1, 11, 3), contentContainer);
            assertSelection(select(contentContainer, 0, contentContainer, 1), result);
            // The first block is the anchor's child at the anchor offset.
            assertTrue(!!result);
            assertEquals(block10, result.anchorNode.childNodes[result.anchorOffset]);
        });
        test('selects the whole blocks across the selection', () => {
            assertSelection(select(contentContainer, 0, contentContainer, 5), mapper.getReadingModeSelection(selectIds(13, 2, 31, 1), contentContainer));
        });
        test('stays valid when the blocks are translated', () => {
            const result = mapper.getReadingModeSelection(selectIds(11, 1, 11, 3), contentContainer);
            assertTrue(!!result);
            const selection = document.getSelection();
            selection.setBaseAndExtent(result.anchorNode, result.anchorOffset, result.focusNode, result.focusOffset);
            block10.replaceChildren(document.createTextNode('Bonjour le monde'));
            assertEquals(contentContainer, selection.anchorNode);
            assertEquals(0, selection.anchorOffset);
            assertEquals(contentContainer, selection.focusNode);
            assertEquals(1, selection.focusOffset);
            assertStringContains(selection.toString(), 'Bonjour le monde');
        });
        test('returns null if no text is selected', () => {
            // From the end of text 11 to the start of text 13.
            assertNull(mapper.getReadingModeSelection(selectIds(11, text11.length, 13, 0), contentContainer));
        });
        test('returns null if an endpoint has no node id', () => {
            assertNull(mapper.getReadingModeSelection({ anchorOffset: 1, focusNodeId: 11, focusOffset: 3 }, contentContainer));
            assertNull(mapper.getReadingModeSelection({ anchorNodeId: 11, anchorOffset: 1, focusOffset: 3 }, contentContainer));
        });
        test('returns null if the text is not in a block', () => {
            assertNull(mapper.getReadingModeSelection(selectIds(41, 0, 41, 3), contentContainer));
        });
        test('returns null if a block is not shown', () => {
            block20.remove();
            assertNull(mapper.getReadingModeSelection(selectIds(21, 0, 21, 3), contentContainer));
        });
    });
    suite('with TranslatePdf disabled', () => {
        setup(() => {
            contentBrowserProxy.translatePdfEnabled = false;
        });
        test('getReadingModeSelection returns null', () => {
            assertNull(mapper.getReadingModeSelection(selectIds(11, 1, 11, 3), contentContainer));
        });
    });
    suite('when the page is not a PDF', () => {
        setup(() => {
            visualBrowserProxy.pdf = false;
        });
        test('getReadingModeSelection returns null', () => {
            assertNull(mapper.getReadingModeSelection(selectIds(11, 1, 11, 3), contentContainer));
        });
    });
});
