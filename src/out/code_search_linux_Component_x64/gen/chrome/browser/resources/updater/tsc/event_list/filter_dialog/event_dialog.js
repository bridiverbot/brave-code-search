// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './filter_dialog.js';
import './filter_dialog_footer.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { EVENT_TYPES } from '../../event_history.js';
import { getCss } from './event_dialog.css.js';
import { getHtml } from './event_dialog.html.js';
import { handleKeyboardNavigation } from './keyboard_navigation.js';
export class EventDialogElement extends CrLitElement {
    static get is() {
        return 'event-dialog';
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
        handleKeyboardNavigation(e, this.shadowRoot.querySelectorAll('.filter-menu-item'));
    }
    getCommonEventTypes() {
        return ['UPDATE', 'INSTALL', 'UNINSTALL'];
    }
    getOtherEventTypes() {
        const common = this.getCommonEventTypes();
        return Object.values(EVENT_TYPES).filter(et => !common.includes(et));
    }
    onCheckedChanged(e) {
        const checkbox = e.target;
        const eventType = checkbox.dataset['eventType'];
        if (checkbox.checked) {
            this.pendingSelections.add(eventType);
        }
        else {
            this.pendingSelections.delete(eventType);
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
customElements.define(EventDialogElement.is, EventDialogElement);
