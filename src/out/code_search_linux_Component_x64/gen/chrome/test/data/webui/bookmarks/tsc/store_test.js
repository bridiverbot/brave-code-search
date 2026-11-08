// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createEmptyState, removeBookmark, ROOT_NODE_ID, Store, StoreClientMixinLit } from 'chrome://bookmarks/bookmarks.js';
import { CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { assertDeepEquals, assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { microtasksFinished } from 'chrome://webui-test/test_util.js';
import { TestStore } from './test_store.js';
import { createFolder, createItem, getAllFoldersOpenState, testTree } from './test_util.js';
const TestStoreClientElementBase = StoreClientMixinLit(CrLitElement);
class TestStoreClientElement extends TestStoreClientElementBase {
    static get is() {
        return 'test-store-client';
    }
    render() {
        return html `
      ${this.toArray(this.items).map(item => html `
        <div class="item">${item}</div>`)}
    `;
    }
    static get properties() {
        return {
            items: { type: Object },
        };
    }
    #items_accessor_storage = {};
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    hasChanged = false;
    toArray(items) {
        return Object.values(items).map(value => value.id);
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('items') &&
            Object.values(this.items).length > 0) {
            this.itemsChanged(this.items, changedProperties.get('items'));
        }
    }
    onStateChanged(state) {
        this.items = state.nodes || {};
    }
    itemsChanged(_newItems, oldItems) {
        if (oldItems && Object.values(oldItems).length > 0) {
            this.hasChanged = true;
        }
    }
}
customElements.define(TestStoreClientElement.is, TestStoreClientElement);
suite('bookmarks.Store', function () {
    let store;
    setup(function () {
        const nodes = testTree(createFolder('1', [
            createItem('11'),
            createItem('12'),
            createItem('13'),
        ]));
        store = new TestStore({
            nodes: nodes,
            folderOpenState: getAllFoldersOpenState(nodes),
        });
        store.setReducersEnabled(true);
        store.replaceSingleton();
    });
    test('batch mode disables updates', function () {
        let lastStateChange = null;
        const observer = {
            onStateChanged: function (state) {
                lastStateChange = state;
            },
        };
        store.addObserver(observer);
        store.beginBatchUpdate();
        store.dispatch(removeBookmark('11', '1', 0, store.data.nodes));
        assertEquals(null, lastStateChange);
        store.dispatch(removeBookmark('12', '1', 0, store.data.nodes));
        assertEquals(null, lastStateChange);
        store.endBatchUpdate();
        assertDeepEquals(['13'], lastStateChange.nodes['1'].children);
    });
});
suite('bookmarks.StoreClientMixin', function () {
    let store;
    let client;
    function update(newState) {
        store.data = newState;
        store.endBatchUpdate();
        return microtasksFinished();
    }
    function getRenderedItems() {
        return Array.from(client.shadowRoot.querySelectorAll('.item'))
            .map((div) => div.textContent.trim());
    }
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        // Reset store instance:
        Store.setInstance(new Store());
        store = Store.getInstance();
        const state = createEmptyState();
        state.nodes = testTree(createFolder('1', [
            createItem('11'),
            createItem('12'),
            createItem('13'),
        ]));
        store.init(state);
        client =
            document.createElement('test-store-client');
        document.body.appendChild(client);
        return microtasksFinished();
    });
    test('renders initial data', function () {
        assertDeepEquals([ROOT_NODE_ID, '1', '11', '12', '13'], getRenderedItems());
    });
    test('renders changes to watched state', async () => {
        assertFalse(client.hasChanged);
        const newItems = testTree(createFolder('1', [
            createItem('11'),
            createItem('12'),
        ]));
        const newState = Object.assign({}, store.data, {
            nodes: newItems,
        });
        await update(newState);
        assertTrue(client.hasChanged);
        assertDeepEquals([ROOT_NODE_ID, '1', '11', '12'], getRenderedItems());
    });
    test('ignores changes to other subtrees', async () => {
        const newState = Object.assign({}, store.data, { selectedFolder: 'foo' });
        await update(newState);
        assertFalse(client.hasChanged);
    });
});
