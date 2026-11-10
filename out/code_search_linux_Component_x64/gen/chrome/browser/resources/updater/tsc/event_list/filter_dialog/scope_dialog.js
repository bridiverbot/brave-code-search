// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './filter_dialog.js';
import './filter_dialog_footer.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { handleKeyboardNavigation } from './keyboard_navigation.js';
import { getCss } from './scope_dialog.css.js';
import { getHtml } from './scope_dialog.html.js';
export class ScopeDialogElement extends CrLitElement {
    static get is() {
        return 'scope-dialog';
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
            pendingSelections: { type: Object },
            initialSelections: { type: Object },
        };
    }
    #anchorElement_accessor_storage = null;
    get anchorElement() { return this.#anchorElement_accessor_storage; }
    set anchorElement(value) { this.#anchorElement_accessor_storage = value; }
    #pendingSelections_accessor_storage = new Set();
    get pendingSelections() { return this.#pendingSelections_accessor_storage; }
    set pendingSelections(value) { this.#pendingSelections_accessor_storage = value; }
    #initialSelections_accessor_storage = new Set();
    get initialSelections() { return this.#initialSelections_accessor_storage; }
    set initialSelections(value) { this.#initialSelections_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('initialSelections')) {
            this.pendingSelections = new Set(this.initialSelections);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.shadowRoot.querySelector('.filter-menu-item')?.focus();
    }
    onKeydown(e) {
        const items = Array.from(this.shadowRoot.querySelectorAll('.filter-menu-item'));
        handleKeyboardNavigation(e, items);
    }
    onCheckedChanged(e) {
        const checkbox = e.target;
        const scope = checkbox.dataset['scope'];
        if (checkbox.checked) {
            this.pendingSelections.add(scope);
        }
        else {
            this.pendingSelections.delete(scope);
        }
        this.requestUpdate();
    }
    onApplyClick() {
        this.fire('filter-change', this.pendingSelections);
    }
    onCancelClick() {
        this.fire('close');
    }
    onClose() {
        this.fire('close');
    }
}
customElements.define(ScopeDialogElement.is, ScopeDialogElement);
