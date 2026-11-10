// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-expand-button' is a chrome-specific wrapper around a button that toggles
 * between an opened (expanded) and closed state.
 */
import '../cr_icon_button/cr_icon_button.js';
import '../icons.html.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_expand_button.css.js';
import { getHtml } from './cr_expand_button.html.js';
export class CrExpandButtonElement extends CrLitElement {
    static get is() {
        return 'cr-expand-button';
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
             * If true, the button is in the expanded state and will show the icon
             * specified in the `collapseIcon` property. If false, the button shows
             * the icon specified in the `expandIcon` property.
             */
            expanded: {
                type: Boolean,
                notify: true,
            },
            /**
             * If true, the button will be disabled and grayed out.
             */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            /** A11y text descriptor for this control. */
            ariaLabel: { type: String },
            tabIndex: { type: Number },
            expandIcon: { type: String },
            collapseIcon: { type: String },
            expandTitle: { type: String },
            collapseTitle: { type: String },
        };
    }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #ariaLabel_accessor_storage = '';
    get ariaLabel() { return this.#ariaLabel_accessor_storage; }
    set ariaLabel(value) { this.#ariaLabel_accessor_storage = value; }
    #expandIcon_accessor_storage = 'cr:keyboard-arrow-down';
    get expandIcon() { return this.#expandIcon_accessor_storage; }
    set expandIcon(value) { this.#expandIcon_accessor_storage = value; }
    #collapseIcon_accessor_storage = 'cr:keyboard-arrow-up';
    get collapseIcon() { return this.#collapseIcon_accessor_storage; }
    set collapseIcon(value) { this.#collapseIcon_accessor_storage = value; }
    #expandTitle_accessor_storage;
    get expandTitle() { return this.#expandTitle_accessor_storage; }
    set expandTitle(value) { this.#expandTitle_accessor_storage = value; }
    #collapseTitle_accessor_storage;
    get collapseTitle() { return this.#collapseTitle_accessor_storage; }
    set collapseTitle(value) { this.#collapseTitle_accessor_storage = value; }
    #tabIndex_accessor_storage = 0;
    get tabIndex() { return this.#tabIndex_accessor_storage; }
    set tabIndex(value) { this.#tabIndex_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('expanded') ||
            changedProperties.has('collapseTitle') ||
            changedProperties.has('expandTitle')) {
            this.title =
                (this.expanded ? this.collapseTitle : this.expandTitle) || '';
        }
    }
    firstUpdated() {
        this.addEventListener('click', this.toggleExpand_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('ariaLabel')) {
            this.onAriaLabelChange_();
        }
    }
    focus() {
        this.$.icon.focus();
    }
    getIcon_() {
        return this.expanded ? this.collapseIcon : this.expandIcon;
    }
    getAriaExpanded_() {
        return this.expanded ? 'true' : 'false';
    }
    onAriaLabelChange_() {
        if (this.ariaLabel) {
            this.$.icon.removeAttribute('aria-labelledby');
            this.$.icon.setAttribute('aria-label', this.ariaLabel);
        }
        else {
            this.$.icon.removeAttribute('aria-label');
            this.$.icon.setAttribute('aria-labelledby', 'label');
        }
    }
    toggleExpand_(event) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        event.stopPropagation();
        event.preventDefault();
        this.scrollIntoViewIfNeeded();
        this.expanded = !this.expanded;
        focusWithoutInk(this.$.icon);
    }
}
customElements.define(CrExpandButtonElement.is, CrExpandButtonElement);
