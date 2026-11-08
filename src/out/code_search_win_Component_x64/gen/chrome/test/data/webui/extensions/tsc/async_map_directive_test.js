// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Suite of tests for the RepeatDirective class. */
import 'chrome://extensions/extensions.js';
import { PromiseResolver } from '//resources/js/promise_resolver.js';
import { asyncMap } from 'chrome://extensions/extensions.js';
import { CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { assertEquals, assertFalse, assertGT, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { isVisible, microtasksFinished } from 'chrome://webui-test/test_util.js';
suite('AsyncMapDirectiveTest', function () {
    let initialCount = 2;
    let testElement;
    class TestChildElement extends CrLitElement {
        static get is() {
            return 'test-child';
        }
        render() {
            return html `
        <div>${this.name}</div>
        ${this.featureEnabled ? html `
           <div class="feature">Cool Feature Enabled!</div>` :
                ''}`;
        }
        static get properties() {
            return {
                name: { type: String },
                featureEnabled: { type: Boolean },
            };
        }
        #name_accessor_storage = '';
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
        #featureEnabled_accessor_storage = false;
        get featureEnabled() { return this.#featureEnabled_accessor_storage; }
        set featureEnabled(value) { this.#featureEnabled_accessor_storage = value; }
    }
    customElements.define(TestChildElement.is, TestChildElement);
    class TestParentElement extends CrLitElement {
        static get is() {
            return 'test-parent';
        }
        render() {
            return html `
         <div>
           ${asyncMap(this.items, item => html `
                <test-child .name="${item}"
                    .featureEnabled="${this.featureEnabled}">
                </test-child>`, initialCount)}
         </div>
       `;
        }
        static get properties() {
            return {
                items: { type: Array },
                featureEnabled: { type: Boolean },
            };
        }
        #items_accessor_storage = [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Ten',
            'Eleven',
            'Twelve',
        ];
        get items() { return this.#items_accessor_storage; }
        set items(value) { this.#items_accessor_storage = value; }
        #featureEnabled_accessor_storage = false;
        get featureEnabled() { return this.#featureEnabled_accessor_storage; }
        set featureEnabled(value) { this.#featureEnabled_accessor_storage = value; }
        itemsRendered_ = [];
        allItemsRendered_ = new PromiseResolver();
        observer_ = null;
        connectedCallback() {
            super.connectedCallback();
            this.observer_ = new MutationObserver(() => this.onChildListChanged_());
            const target = this.shadowRoot.querySelector('div');
            assertTrue(!!target);
            this.observer_.observe(target, { childList: true });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.observer_) {
                this.observer_.disconnect();
                this.observer_ = null;
            }
        }
        onChildListChanged_() {
            const children = this.shadowRoot.querySelectorAll('test-child');
            const rendered = children.length;
            this.itemsRendered_.push(rendered);
            if (rendered === this.items.length) {
                this.allItemsRendered_.resolve(this.itemsRendered_);
            }
        }
        allItemsRendered() {
            // Early return since MutationObserver doesn't always fire in cases
            // where all items get added at once.
            if (this.shadowRoot.querySelectorAll('test-child').length ===
                this.items.length) {
                return Promise.resolve([]);
            }
            return this.allItemsRendered_.promise;
        }
        reset() {
            this.allItemsRendered_ = new PromiseResolver();
            this.itemsRendered_ = [];
        }
    }
    customElements.define(TestParentElement.is, TestParentElement);
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        initialCount = 2;
    });
    test('Basic', async () => {
        testElement = document.createElement('test-parent');
        document.body.appendChild(testElement);
        const itemsRendered = await testElement.allItemsRendered();
        // Unfortunately MutationObserver does not perfectly fire for every
        // cycle of rendering, so we can't confirm this renders exactly the
        // initialCount of items as multiple updates may end up batched.
        // Just check that it takes at least 2 cycles, which seems to be
        // consistent with an initialCount of 2.
        assertGT(itemsRendered.length, 1);
        assertEquals(12, testElement.shadowRoot.querySelectorAll('test-child').length);
    });
    test('Different initial count', async () => {
        initialCount = 6;
        testElement = document.createElement('test-parent');
        document.body.appendChild(testElement);
        const itemsRendered = await testElement.allItemsRendered();
        // With an initialCount of 6, this should never take more than 2 cycles.
        assertGT(3, itemsRendered.length);
        // Make sure the items are actually in the DOM.
        assertEquals(12, testElement.shadowRoot.querySelectorAll('test-child').length);
    });
    test('Long list', async () => {
        // Test a huge initial count and big list.
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        initialCount = 100;
        testElement = document.createElement('test-parent');
        const longList = [];
        for (let i = 0; i < 50; i++) {
            longList.push(...testElement.items);
        }
        testElement.items = longList;
        document.body.appendChild(testElement);
        await testElement.allItemsRendered();
        assertEquals(600, testElement.shadowRoot.querySelectorAll('test-child').length);
    });
    test('Modify list', async () => {
        // Verifies the list updates correctly when the test element updates the
        // list.
        testElement = document.createElement('test-parent');
        document.body.appendChild(testElement);
        await testElement.allItemsRendered();
        assertEquals(12, testElement.shadowRoot.querySelectorAll('test-child').length);
        // Set a new array.
        testElement.reset();
        testElement.items = ['Hello', 'World', 'Goodbye'];
        await testElement.allItemsRendered();
        let renderedItems = testElement.shadowRoot.querySelectorAll('test-child');
        assertEquals(3, renderedItems.length);
        assertEquals('Hello', renderedItems[0].name);
        assertEquals('World', renderedItems[1].name);
        assertEquals('Goodbye', renderedItems[2].name);
        // Correctly render no items.
        testElement.reset();
        testElement.items = [];
        await testElement.allItemsRendered();
        assertEquals(0, testElement.shadowRoot.querySelectorAll('test-child').length);
        // Set the array multiple times in one cycle and confirm only the last
        // set of data is rendered.
        testElement.reset();
        testElement.items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
        // Small delay to allow the loop to start.
        await microtasksFinished();
        testElement.items = ['Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
        // Small delay to allow the loop to start.
        await new Promise(r => requestAnimationFrame(r));
        testElement.items =
            ['Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen'];
        await testElement.allItemsRendered();
        await microtasksFinished();
        renderedItems =
            testElement.shadowRoot.querySelectorAll('test-child');
        assertEquals(6, renderedItems.length);
        assertEquals(JSON.stringify(testElement.items), JSON.stringify(Array.from(renderedItems).map(i => i.name)));
    });
    test('Modify different property', async () => {
        // Verifies the list updates correctly when the test element updates the
        // list.
        testElement = document.createElement('test-parent');
        document.body.appendChild(testElement);
        await testElement.allItemsRendered();
        let renderedItems = testElement.shadowRoot.querySelectorAll('test-child');
        assertEquals(12, renderedItems.length);
        // Check that the rendered items aren't displaying the feature enabled div.
        renderedItems.forEach(item => {
            const featureDiv = item.shadowRoot.querySelector('.feature');
            assertFalse(!!featureDiv);
        });
        // Set the feature to enabled. There should still be 12 items.
        testElement.featureEnabled = true;
        await microtasksFinished();
        renderedItems =
            testElement.shadowRoot.querySelectorAll('test-child');
        assertEquals(12, renderedItems.length);
        // Check that the feature div is displayed for a few items.
        renderedItems.forEach(item => {
            const featureDiv = item.shadowRoot.querySelector('.feature');
            assertTrue(!!featureDiv);
            assertTrue(isVisible(featureDiv));
            assertEquals('Cool Feature Enabled!', featureDiv.textContent);
        });
    });
    test('Remove element', async () => {
        testElement = document.createElement('test-parent');
        document.body.appendChild(testElement);
        // Verify removing and re-attaching the element works.
        testElement.remove();
        // Reset the items array with a new item added while the element is not
        // connected, to ensure nothing breaks.
        testElement.reset();
        testElement.items.push('Thirteen');
        testElement.items = testElement.items.slice();
        await microtasksFinished();
        document.body.appendChild(testElement);
        await testElement.allItemsRendered();
        assertEquals(13, testElement.shadowRoot.querySelectorAll('test-child').length);
    });
});
