// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * A link row is a UI element similar to a button, though usually wider than a
 * button (taking up the whole 'row'). The name link comes from the intended use
 * of this element to take the user to another page in the app or to an external
 * page (somewhat like an HTML link).
 */
import '../cr_icon_button/cr_icon_button.js';
import '../cr_icon/cr_icon.js';
import '../icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_link_row.css.js';
import { getHtml } from './cr_link_row.html.js';
export class CrLinkRowElement extends CrLitElement {
    static get is() {
        return 'cr-link-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ariaShowLabel: {
                type: Boolean,
                reflect: true,
            },
            ariaShowSublabel: {
                type: Boolean,
                reflect: true,
            },
            startIcon: { type: String },
            label: { type: String },
            subLabel: { type: String },
            disabled: {
                type: Boolean,
                reflect: true,
            },
            external: { type: Boolean },
            usingSlottedLabel: { type: Boolean },
            roleDescription: { type: String },
            buttonAriaDescription: { type: String },
        };
    }
    #ariaShowLabel_accessor_storage = false;
    get ariaShowLabel() { return this.#ariaShowLabel_accessor_storage; }
    set ariaShowLabel(value) { this.#ariaShowLabel_accessor_storage = value; }
    #ariaShowSublabel_accessor_storage = false;
    get ariaShowSublabel() { return this.#ariaShowSublabel_accessor_storage; }
    set ariaShowSublabel(value) { this.#ariaShowSublabel_accessor_storage = value; }
    #startIcon_accessor_storage = '';
    get startIcon() { return this.#startIcon_accessor_storage; }
    set startIcon(value) { this.#startIcon_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #subLabel_accessor_storage = '';
    get subLabel() { return this.#subLabel_accessor_storage; }
    set subLabel(value) { this.#subLabel_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #external_accessor_storage = false;
    get external() { return this.#external_accessor_storage; }
    set external(value) { this.#external_accessor_storage = value; }
    #usingSlottedLabel_accessor_storage = false;
    get usingSlottedLabel() { return this.#usingSlottedLabel_accessor_storage; }
    set usingSlottedLabel(value) { this.#usingSlottedLabel_accessor_storage = value; }
    #roleDescription_accessor_storage;
    get roleDescription() { return this.#roleDescription_accessor_storage; }
    set roleDescription(value) { this.#roleDescription_accessor_storage = value; }
    #buttonAriaDescription_accessor_storage;
    get buttonAriaDescription() { return this.#buttonAriaDescription_accessor_storage; }
    set buttonAriaDescription(value) { this.#buttonAriaDescription_accessor_storage = value; }
    focus() {
        this.$.icon.focus();
    }
    shouldHideLabelWrapper_() {
        return !(this.label || this.usingSlottedLabel);
    }
    getIcon_() {
        return this.external ? 'cr:open-in-new' : 'cr:chevron-right';
    }
    getButtonAriaDescription_() {
        return this.buttonAriaDescription ??
            (this.external ? loadTimeData.getString('opensInNewTab') : '');
    }
}
customElements.define(CrLinkRowElement.is, CrLinkRowElement);
