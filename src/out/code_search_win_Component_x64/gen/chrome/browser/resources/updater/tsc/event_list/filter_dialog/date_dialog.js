// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './filter_dialog.js';
import './filter_dialog_footer.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './date_dialog.css.js';
import { getHtml } from './date_dialog.html.js';
export class DateDialogElement extends CrLitElement {
    static get is() {
        return 'date-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            anchorElement: { type: Object },
            pendingStartDate: { type: Object },
            pendingEndDate: { type: Object },
            initialStartDate: { type: Object },
            initialEndDate: { type: Object },
        };
    }
    #anchorElement_accessor_storage = null;
    get anchorElement() { return this.#anchorElement_accessor_storage; }
    set anchorElement(value) { this.#anchorElement_accessor_storage = value; }
    #pendingStartDate_accessor_storage = null;
    get pendingStartDate() { return this.#pendingStartDate_accessor_storage; }
    set pendingStartDate(value) { this.#pendingStartDate_accessor_storage = value; }
    #pendingEndDate_accessor_storage = null;
    get pendingEndDate() { return this.#pendingEndDate_accessor_storage; }
    set pendingEndDate(value) { this.#pendingEndDate_accessor_storage = value; }
    #initialStartDate_accessor_storage = null;
    get initialStartDate() { return this.#initialStartDate_accessor_storage; }
    set initialStartDate(value) { this.#initialStartDate_accessor_storage = value; }
    #initialEndDate_accessor_storage = null;
    get initialEndDate() { return this.#initialEndDate_accessor_storage; }
    set initialEndDate(value) { this.#initialEndDate_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('initialStartDate')) {
            this.pendingStartDate = this.initialStartDate;
        }
        if (changedProperties.has('initialEndDate')) {
            this.pendingEndDate = this.initialEndDate;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.shadowRoot
            .querySelector('.filter-menu-date-inputs input')
            ?.focus();
    }
    getPendingStartTime() {
        return this.pendingStartDate?.getTime() || NaN;
    }
    getPendingEndTime() {
        return this.pendingEndDate?.getTime() || NaN;
    }
    onStartTimeInput(e) {
        const value = e.target.valueAsNumber;
        this.pendingStartDate = Number.isNaN(value) ? null : new Date(value);
    }
    onEndTimeInput(e) {
        const value = e.target.valueAsNumber;
        this.pendingEndDate = Number.isNaN(value) ? null : new Date(value);
    }
    onCancelClick() {
        this.fire('close');
    }
    onClose() {
        this.fire('close');
    }
    onDateApplyClick() {
        this.fire('filter-change', {
            start: this.pendingStartDate,
            end: this.pendingEndDate,
        });
    }
}
customElements.define(DateDialogElement.is, DateDialogElement);
