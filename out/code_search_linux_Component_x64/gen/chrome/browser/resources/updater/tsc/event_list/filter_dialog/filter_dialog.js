// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './filter_dialog.css.js';
import { getHtml } from './filter_dialog.html.js';
export class FilterDialogElement extends CrLitElement {
    static get is() {
        return 'filter-dialog';
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
        };
    }
    eventTracker = new EventTracker();
    #anchorElement_accessor_storage = null;
    get anchorElement() { return this.#anchorElement_accessor_storage; }
    set anchorElement(value) { this.#anchorElement_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker.add(window, 'scroll', () => {
            this.positionDialog();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker.removeAll();
    }
    firstUpdated() {
        this.$.dialog.showModal();
        // firstUpdated guarantees that this element is in the DOM but does not
        // guarantee that the browser has completed a full layout pass for its
        // children. Because positionDialog is sensitive to the height of the
        // dialog, ensure that a paint has occurred before attempting to position
        // the dialog.
        requestAnimationFrame(() => {
            this.positionDialog();
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('anchorElement')) {
            requestAnimationFrame(() => {
                this.positionDialog();
            });
        }
    }
    positionDialog() {
        const anchor = this.anchorElement || this.parentElement;
        if (!anchor) {
            return;
        }
        const rect = anchor.getBoundingClientRect();
        const dialog = this.$.dialog;
        dialog.style.top = `${rect.bottom + 4}px`;
        dialog.style.left = `${rect.left}px`;
        // Ensure the dialog is not cut off by the window edges
        const dialogRect = dialog.getBoundingClientRect();
        if (dialogRect.right > window.innerWidth) {
            dialog.style.left = `${window.innerWidth - dialogRect.width - 4}px`;
        }
        if (dialogRect.bottom > window.innerHeight) {
            dialog.style.top = `${rect.top - dialogRect.height - 4}px`;
        }
    }
    onClose() {
        this.fire('close');
    }
    onCancel(e) {
        e.preventDefault();
        this.$.dialog.close();
    }
    onPointerdown(e) {
        if (e.target === this.$.dialog) {
            this.$.dialog.close();
        }
    }
}
customElements.define(FilterDialogElement.is, FilterDialogElement);
