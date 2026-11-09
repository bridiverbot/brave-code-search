// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './toolbar_chip_button.css.js';
import { getHtml } from './toolbar_chip_button.html.js';
/**
 * toolbar-chip-button is a pill-shaped button element. It is used for
 * toolbar buttons and location bar chips (e.g., app menu button, avatar
 * button, permission chips) that can have text, icons, or both.
 *
 * It is designed for 1:1 parity with C++ Native Views (e.g., LocationIconView):
 * - InkDrop Parity: Uses CSS ::before and ::after for independent hover
 *   and pressed transitions, matching C++ InkDrop behavior.
 * - Focus-Theft Survival: Supports is-menu-open attribute to lock the
 *   active state and prevent flicker when a native bubble steals focus.
 * - Native Interaction: Uses a native button and CSS :active for
 *   automatic accessibility, keyboard nav, and drag-to-cancel behavior.
 * - Label Animation: Supports sliding label transitions via animates-label
 *   and has-label attributes.
 *
 * Slots:
 * - prefix-icon: Icon before the text.
 * - Default slot: Text content.
 * - suffix-icon: Icon after the text.
 */
export class ToolbarChipButtonElement extends CrLitElement {
    static get is() {
        return 'toolbar-chip-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaLabel: { type: String },
            ariaDescription: { type: String },
            tooltip: { type: String },
            ariaHasPopup: { type: String },
            ariaExpanded: { type: String },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            // Draws the focus ring outwards from the button boundary (2px gap, 2px
            // ring) instead of universally inset. Used by inner-Omnibox chips like
            // Page Actions.
            outsetFocusRing: {
                type: Boolean,
                reflect: true,
                attribute: 'outset-focus-ring',
            },
            animatesLabel: {
                type: Boolean,
                reflect: true,
                attribute: 'animates-label',
            },
            buttonTabIndex: {
                type: Number,
            },
            buttonRole: {
                type: String,
            },
        };
    }
    #ariaLabel_accessor_storage = '';
    /** Accessibility label for the inner button. */
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #ariaDescription_accessor_storage = '';
    /** Accessibility description for the inner button. */
    get ariaDescription() { return this.#ariaDescription_accessor_storage; }
    set ariaDescription(value) { this.#ariaDescription_accessor_storage = value; }
    #tooltip_accessor_storage = '';
    /** Tooltip text to show on hover. */
    get tooltip() { return this.#tooltip_accessor_storage; }
    set tooltip(value) { this.#tooltip_accessor_storage = value; }
    #ariaHasPopup_accessor_storage = null;
    /** Indicates that the button triggers a popup. */
    get ariaHasPopup() { return this.#ariaHasPopup_accessor_storage; }
    set ariaHasPopup(value) { this.#ariaHasPopup_accessor_storage = value; }
    #ariaExpanded_accessor_storage = null;
    /** Indicates whether the popup triggered by the button is expanded. */
    get ariaExpanded() { return this.#ariaExpanded_accessor_storage; }
    set ariaExpanded(value) { this.#ariaExpanded_accessor_storage = value; }
    #disabled_accessor_storage = false;
    /** Whether the button is disabled. */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #animatesLabel_accessor_storage = false;
    /**
     * Whether the label should animate (e.g., when the text content changes or
     * when the chip transitions between states).
     */
    get animatesLabel() { return this.#animatesLabel_accessor_storage; }
    set animatesLabel(value) { this.#animatesLabel_accessor_storage = value; }
    #outsetFocusRing_accessor_storage = false;
    // Draws an outward-expanding focus ring instead of an inset focus ring.
    get outsetFocusRing() { return this.#outsetFocusRing_accessor_storage; }
    set outsetFocusRing(value) { this.#outsetFocusRing_accessor_storage = value; }
    #buttonTabIndex_accessor_storage = -1;
    get buttonTabIndex() { return this.#buttonTabIndex_accessor_storage; }
    set buttonTabIndex(value) { this.#buttonTabIndex_accessor_storage = value; }
    #buttonRole_accessor_storage = null;
    /**
     * ARIA role for the inner button (e.g. 'img'). When unset, the inner button
     * keeps its implicit 'button' role.
     */
    get buttonRole() { return this.#buttonRole_accessor_storage; }
    set buttonRole(value) { this.#buttonRole_accessor_storage = value; }
    focus() {
        this.$.button.focus();
    }
    onPrefixIconSlotchange_(e) {
        const slot = e.target;
        this.toggleAttribute('has-prefix-icon', slot.assignedElements().length > 0);
    }
    onSuffixIconSlotchange_(e) {
        const slot = e.target;
        this.toggleAttribute('has-suffix-icon', slot.assignedElements().length > 0);
    }
}
customElements.define(ToolbarChipButtonElement.is, ToolbarChipButtonElement);
