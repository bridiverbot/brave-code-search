// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './user_education_whats_new_internals_card.css.js';
import { getHtml } from './user_education_whats_new_internals_card.html.js';
const CLEAR_WHATS_NEW_DATA_EVENT = 'clear-whats-new-data';
export class UserEducationWhatsNewInternalsCardElement extends CrLitElement {
    static get is() {
        return 'user-education-whats-new-internals-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            item: { type: Object },
            type: { type: String },
            /**
             * Indicates if the list of promo data is expanded or collapsed.
             */
            dataExpanded_: {
                type: Boolean,
                value: false,
            },
        };
    }
    #item_accessor_storage = {
        displayTitle: '',
        moduleName: '',
        hasBrowserCommand: false,
        isFeatureEnabled: false,
        queuePosition: 0,
    };
    get item() { return this.#item_accessor_storage; }
    set item(value) { this.#item_accessor_storage = value; }
    #type_accessor_storage = 'module';
    get type() { return this.#type_accessor_storage; }
    set type(value) { this.#type_accessor_storage = value; }
    #dataExpanded__accessor_storage = false;
    get dataExpanded_() { return this.#dataExpanded__accessor_storage; }
    set dataExpanded_(value) { this.#dataExpanded__accessor_storage = value; }
    onClearDataClick_() {
        if (!confirm(`Clear data associated with this What's New ${this.type}?`)) {
            return;
        }
        this.fire(CLEAR_WHATS_NEW_DATA_EVENT, this.formatName_());
    }
    isModule_() {
        return this.type === 'module';
    }
    isEdition_() {
        return this.type === 'edition';
    }
    hasBeenUsed_() {
        assert(this.item);
        const hasBeenUsed = this.item.hasBeenUsed;
        return hasBeenUsed;
    }
    formatName_() {
        assert(this.item);
        if (this.isModule_()) {
            return this.item.moduleName;
        }
        else {
            return this.item.editionName;
        }
    }
    formatHasBrowserCommand_() {
        assert(this.item);
        const hasBrowserCommand = this.item.hasBrowserCommand;
        return hasBrowserCommand ? 'yes' : 'no';
    }
    formatIsFeatureEnabled_() {
        assert(this.item);
        return this.item.isFeatureEnabled ? 'yes' : 'no';
    }
    formatQueuePosition_() {
        assert(this.item);
        const queuePosition = this.item.queuePosition;
        return queuePosition === -1 ? 'Not in queue' : queuePosition;
    }
    formatHasBeenUsed_() {
        assert(this.item);
        const hasBeenUsed = this.item.hasBeenUsed;
        return hasBeenUsed ? 'yes' : 'no';
    }
    formatVersionUsed_() {
        assert(this.item);
        const versionUsed = this.item.versionUsed;
        return versionUsed;
    }
    onDataExpandedChanged_(e) {
        this.dataExpanded_ = e.detail.value;
    }
}
customElements.define(UserEducationWhatsNewInternalsCardElement.is, UserEducationWhatsNewInternalsCardElement);
