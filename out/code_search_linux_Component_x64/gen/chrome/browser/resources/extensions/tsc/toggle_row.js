// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './toggle_row.css.js';
import { getHtml } from './toggle_row.html.js';
export class ExtensionsToggleRowElement extends CrLitElement {
    static get is() {
        return 'extensions-toggle-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                reflect: true,
            },
            disabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #checked_accessor_storage = false;
    get checked() { return this.#checked_accessor_storage; }
    set checked(value) { this.#checked_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    /**
     * Exposing the clickable part of extensions-toggle-row for testing
     * purposes.
     */
    getLabel() {
        return this.$.label;
    }
    onNativeClick_(e) {
        // Even though the native checkbox is hidden and can't be actually
        // clicked/tapped by the user, because it resides within the <label> the
        // browser emits an extraneous event when the label is clicked. Stop
        // propagation so that it does not interfere with |onLabelClick_| listener.
        e.stopPropagation();
    }
    async updateChecked_(value) {
        this.checked = value;
        // Sync value of native checkbox and cr-toggle and |checked|.
        await this.updateComplete;
        this.fire('change', this.checked);
    }
    /**
     * Fires when the native checkbox changes value. This happens when the user
     * clicks directly on the <label>.
     */
    onNativeChange_(e) {
        e.stopPropagation();
        this.updateChecked_(this.$.native.checked);
    }
    onCrToggleChange_(e) {
        e.stopPropagation();
        this.updateChecked_(e.detail);
    }
}
customElements.define(ExtensionsToggleRowElement.is, ExtensionsToggleRowElement);
