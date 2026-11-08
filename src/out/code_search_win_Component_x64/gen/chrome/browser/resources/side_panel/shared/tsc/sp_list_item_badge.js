// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A badge component that is used to denote additional information
 * or an updated state and is displayed inside of a cr-url-list-item.
 */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './sp_list_item_badge.css.js';
import { getHtml } from './sp_list_item_badge.html.js';
export class SpListItemBadgeElement extends CrLitElement {
    static get is() {
        return 'sp-list-item-badge';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            actionable: {
                type: Boolean,
                reflect: true,
            },
            wasUpdated: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #actionable_accessor_storage = false;
    get actionable() { return this.#actionable_accessor_storage; }
    set actionable(value) { this.#actionable_accessor_storage = value; }
    #wasUpdated_accessor_storage = false;
    get wasUpdated() { return this.#wasUpdated_accessor_storage; }
    set wasUpdated(value) { this.#wasUpdated_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('actionable')) {
            if (this.actionable) {
                this.setAttribute('tabindex', '1');
                this.setAttribute('role', 'button');
            }
            else {
                this.removeAttribute('tabindex');
                this.removeAttribute('role');
            }
        }
    }
}
customElements.define(SpListItemBadgeElement.is, SpListItemBadgeElement);
