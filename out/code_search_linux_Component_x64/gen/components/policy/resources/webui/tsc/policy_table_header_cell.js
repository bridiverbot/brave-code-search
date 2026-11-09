// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './policy_table_header_cell.css.js';
import { getHtml } from './policy_table_header_cell.html.js';
export class PolicyTableHeaderCellElement extends CrLitElement {
    static get is() {
        return 'policy-table-header-cell';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            field: { type: String },
            headerTitle: { type: String },
            sortedColumn: { type: String },
            sortAscending: { type: Boolean },
            noSort: { type: Boolean },
        };
    }
    #field_accessor_storage = 'name';
    get field() { return this.#field_accessor_storage; }
    set field(value) { this.#field_accessor_storage = value; }
    #headerTitle_accessor_storage = '';
    get headerTitle() { return this.#headerTitle_accessor_storage; }
    set headerTitle(value) { this.#headerTitle_accessor_storage = value; }
    #sortedColumn_accessor_storage = 'name';
    get sortedColumn() { return this.#sortedColumn_accessor_storage; }
    set sortedColumn(value) { this.#sortedColumn_accessor_storage = value; }
    #sortAscending_accessor_storage = true;
    get sortAscending() { return this.#sortAscending_accessor_storage; }
    set sortAscending(value) { this.#sortAscending_accessor_storage = value; }
    #noSort_accessor_storage = false;
    get noSort() { return this.#noSort_accessor_storage; }
    set noSort(value) { this.#noSort_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'columnheader');
        this.updateAriaSort();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('sortedColumn') ||
            changedProperties.has('sortAscending') ||
            changedProperties.has('field') ||
            changedProperties.has('headerTitle')) {
            this.updateAriaSort();
        }
        if (changedProperties.has('sortedColumn') ||
            changedProperties.has('field')) {
            if (this.sortedColumn === this.field) {
                this.setAttribute('selected', '');
            }
            else {
                this.removeAttribute('selected');
            }
        }
    }
    updateAriaSort() {
        if (this.sortedColumn !== this.field) {
            this.setAttribute('aria-sort', 'none');
        }
        else {
            this.setAttribute('aria-sort', this.sortAscending ? 'ascending' : 'descending');
        }
        this.setAttribute('aria-label', this.headerTitle);
    }
    onSortUpClick() {
        this.fire('sort-changed', {
            field: this.field,
            ascending: true,
        });
    }
    onSortDownClick() {
        this.fire('sort-changed', {
            field: this.field,
            ascending: false,
        });
    }
}
customElements.define(PolicyTableHeaderCellElement.is, PolicyTableHeaderCellElement);
