// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './key_value_pair_entry.css.js';
import { getHtml } from './key_value_pair_entry.html.js';
export const COLLAPSE_THRESHOLD = 200;
// 
export class KeyValuePairEntryElement extends CrLitElement {
    static get is() {
        return 'key-value-pair-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entry: { type: Object },
            collapsible_: {
                type: Boolean,
                reflect: true,
            },
            collapsed: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #entry_accessor_storage = { key: '', value: '' };
    get entry() { return this.#entry_accessor_storage; }
    set entry(value) { this.#entry_accessor_storage = value; }
    #collapsed_accessor_storage = true;
    get collapsed() { return this.#collapsed_accessor_storage; }
    set collapsed(value) { this.#collapsed_accessor_storage = value; }
    #collapsible__accessor_storage = false;
    get collapsible_() { return this.#collapsible__accessor_storage; }
    set collapsible_(value) { this.#collapsible__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('entry')) {
            this.collapsible_ = this.entry.value.length > COLLAPSE_THRESHOLD;
        }
    }
    getHref_() {
        // Let URL be anchor to the section of this page by default.
        let urlPrefix = '';
        // 
        return `${urlPrefix}#${this.entry.key}`;
    }
    onButtonClick_() {
        assert(this.collapsible_);
        this.collapsed = !this.collapsed;
    }
    getButtonText_() {
        return this.collapsed ? 'Expand…' : 'Collapse…';
    }
}
customElements.define(KeyValuePairEntryElement.is, KeyValuePairEntryElement);
