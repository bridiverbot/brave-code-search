// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory } from './unexportable_keys_internals.mojom-webui.js';
export class UnexportableKeysInternalsAppElement extends CrLitElement {
    static get is() {
        return 'unexportable-keys-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            unexportableKeysInfo_: { type: Array },
            sortColumn_: { type: String },
            sortReverse_: { type: Boolean },
        };
    }
    columns_ = [
        {
            key: 'wrappedKey',
            label: 'Wrapped Key',
            getValue: (item) => item.wrappedKey,
        },
        { key: 'algorithm', label: 'Algorithm', getValue: (item) => item.algorithm },
        { key: 'keyTag', label: 'Key Tag', getValue: (item) => item.keyTag },
        {
            key: 'creationTime',
            label: 'Creation Time',
            getValue: (item) => item.creationTime,
        },
    ];
    #unexportableKeysInfo__accessor_storage = [];
    get unexportableKeysInfo_() { return this.#unexportableKeysInfo__accessor_storage; }
    set unexportableKeysInfo_(value) { this.#unexportableKeysInfo__accessor_storage = value; }
    #sortColumn__accessor_storage = 'creationTime';
    get sortColumn_() { return this.#sortColumn__accessor_storage; }
    set sortColumn_(value) { this.#sortColumn__accessor_storage = value; }
    #sortReverse__accessor_storage = true;
    get sortReverse_() { return this.#sortReverse__accessor_storage; }
    set sortReverse_(value) { this.#sortReverse__accessor_storage = value; }
    browserProxy_ = browserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.updateKeysList_();
    }
    async onDeleteKeyClick_(e) {
        const currentTarget = e.currentTarget;
        const keyId = this.unexportableKeysInfo_[Number(currentTarget.dataset['index'])]
            .keyId;
        const { success } = await this.browserProxy_.handler.deleteKey(keyId);
        if (!success) {
            this.$.deleteErrorToast.show();
        }
        else if (this.$.deleteErrorToast.open) {
            // Hide the toast if it was shown before but this time the key has been
            // deleted successfully.
            this.$.deleteErrorToast.hide();
        }
        this.updateKeysList_();
    }
    onSortClick_(e) {
        const target = e.currentTarget;
        const sortColumn = target.dataset['sortKey'];
        if (this.sortColumn_ === sortColumn) {
            this.sortReverse_ = !this.sortReverse_;
        }
        else {
            this.sortColumn_ = sortColumn;
            this.sortReverse_ = false;
        }
        this.sortKeys_();
    }
    onSortKeydown_(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.onSortClick_(e);
        }
    }
    getSortAttribute_(column) {
        if (this.sortColumn_ !== column) {
            return undefined;
        }
        return this.sortReverse_ ? 'descending' : 'ascending';
    }
    async updateKeysList_() {
        const { keys } = await this.browserProxy_.handler.getUnexportableKeysInfo();
        this.unexportableKeysInfo_ = keys;
        this.sortKeys_();
    }
    sortKeys_() {
        const getValue = this.columns_.find(col => col.key === this.sortColumn_)?.getValue;
        if (!getValue) {
            return;
        }
        this.unexportableKeysInfo_ =
            [...this.unexportableKeysInfo_].sort((lhs, rhs) => {
                const a = getValue(lhs);
                const b = getValue(rhs);
                const sign = this.sortReverse_ ? -1 : 1;
                return sign * (a > b ? 1 : a < b ? -1 : 0);
            });
    }
}
customElements.define(UnexportableKeysInternalsAppElement.is, UnexportableKeysInternalsAppElement);
