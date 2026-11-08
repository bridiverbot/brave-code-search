// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import '//resources/brave/leo.bundle.js';
import { CrLitElement, css } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './cr_toggle.html.js';
export const MOVE_THRESHOLD_PX = 5;
export class CrToggleElement extends CrLitElement {
    static get is() {
        return 'cr-toggle';
    }
    static get styles() { return css ``; }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                reflect: true,
                notify: true,
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
    firstUpdated() {
        this.addEventListener('click', e => {
            // Prevent |click| event from bubbling. It can cause parents of this
            // elements to erroneously re-toggle this control.
            e.stopPropagation();
            e.preventDefault();
        });
    }
    // The Nala event looks a bit different to the Chromium one, so we need to
    // convert it.
    async onChange_(e) {
        this.checked = e.checked;
        // Yield, so that 'checked-changed' (originating from `notify: 'true'`) fire
        // before the 'change' event below, which guarantees that any Polymer parent
        // with 2-way bindings on the `checked` attribute are updated first.
        await this.updateComplete;
        this.fire('change', this.checked);
    }
}
customElements.define(CrToggleElement.is, CrToggleElement);
