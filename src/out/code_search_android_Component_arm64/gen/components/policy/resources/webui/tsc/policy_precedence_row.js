// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './policy_precedence_row.css.js';
import { getHtml } from './policy_precedence_row.html.js';
export class PolicyPrecedenceRowElement extends CrLitElement {
    static get is() {
        return 'policy-precedence-row';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            precedenceOrder: { type: Array },
        };
    }
    #precedenceOrder_accessor_storage = [];
    get precedenceOrder() { return this.#precedenceOrder_accessor_storage; }
    set precedenceOrder(value) { this.#precedenceOrder_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'rowgroup');
        this.classList.add('policy-precedence-data');
    }
}
customElements.define(PolicyPrecedenceRowElement.is, PolicyPrecedenceRowElement);
