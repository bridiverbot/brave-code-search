// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { getTemplate } from './expandable_list.html.js';
export class ExpandableListElement extends CustomElement {
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        this.classList.add('expandable-list');
    }
    /**
     * Sets the data model of the list.
     */
    setData(data) {
        this.updateMessageDisplay_(data.length === 0);
        const items = this.shadowRoot.querySelector('.list-items');
        assert(items);
        data.forEach(item => {
            const listItem = this.createItem(item);
            items.appendChild(listItem);
        });
    }
    /**
     * Sets the empty message text.
     */
    setEmptyMessage(message) {
        const emptyMessage = this.shadowRoot.querySelector('.empty-message');
        assert(emptyMessage);
        emptyMessage.textContent = message;
    }
    /**
     * Sets the spinner display state. If |showing| is true, the loading
     * spinner is displayed.
     */
    setSpinnerShowing(showing) {
        const spinner = this.shadowRoot.querySelector('.spinner');
        assert(spinner);
        spinner.hidden = !showing;
    }
    /**
     * Gets the spinner display state. Returns true if the spinner is showing.
     */
    isSpinnerShowing() {
        const spinner = this.shadowRoot.querySelector('.spinner');
        assert(spinner);
        return !spinner.hidden;
    }
    /**
     * Updates the display state of the empty message. If there are no items in
     * the data model, the empty message is displayed.
     * @param empty Whether the list is empty.
     */
    updateMessageDisplay_(empty) {
        const emptyMessage = this.shadowRoot.querySelector('.empty-message');
        assert(emptyMessage);
        emptyMessage.hidden = !empty;
    }
}
