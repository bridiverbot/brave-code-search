// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_bottom_toolbar_dropdown.css.js';
import { getHtml } from './viewer_bottom_toolbar_dropdown.html.js';
export class ViewerBottomToolbarDropdownElement extends CrLitElement {
    static get is() {
        return 'viewer-bottom-toolbar-dropdown';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            buttonTitle: { type: String },
            showDropdown_: { type: Boolean },
        };
    }
    #buttonTitle_accessor_storage = '';
    get buttonTitle() { return this.#buttonTitle_accessor_storage; }
    set buttonTitle(value) { this.#buttonTitle_accessor_storage = value; }
    #showDropdown__accessor_storage = false;
    get showDropdown_() { return this.#showDropdown__accessor_storage; }
    set showDropdown_(value) { this.#showDropdown__accessor_storage = value; }
    tracker_ = new EventTracker();
    disconnectedCallback() {
        this.tracker_.removeAll();
        super.disconnectedCallback();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('showDropdown_') && this.showDropdown_) {
            const menuSlot = this.shadowRoot.querySelector('slot[name="menu"]');
            assert(menuSlot);
            const menuElements = menuSlot.assignedElements();
            if (menuElements.length > 0) {
                menuElements[0].focus();
            }
        }
    }
    onDropdownClick_() {
        this.toggleDropdown_();
    }
    toggleDropdown_() {
        this.showDropdown_ = !this.showDropdown_;
        if (this.showDropdown_) {
            this.tracker_.add(this, 'focusout', this.handleFocusOut_.bind(this));
        }
        else {
            this.tracker_.remove(this, 'focusout');
        }
    }
    // Exit out of the dropdown when focus shifts away from the dropdown menu.
    handleFocusOut_(e) {
        // toggleDropdown_() should have already removed this event handler.
        assert(this.showDropdown_);
        // Skip if the focus target is the menu.
        const nextElement = e.relatedTarget;
        if (nextElement instanceof HTMLElement && nextElement !== this &&
            this.contains(nextElement)) {
            return;
        }
        this.toggleDropdown_();
    }
}
customElements.define(ViewerBottomToolbarDropdownElement.is, ViewerBottomToolbarDropdownElement);
