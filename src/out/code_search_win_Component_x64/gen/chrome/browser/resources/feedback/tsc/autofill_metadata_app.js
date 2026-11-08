// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/key_value_pair_viewer/key_value_pair_viewer.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './autofill_metadata_app.html.js';
import { getCss } from './css/about_sys.css.js';
import { FeedbackBrowserProxyImpl } from './js/feedback_browser_proxy.js';
export class AutofillMetadataAppElement extends CrLitElement {
    static get is() {
        return 'autofill-metadata-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entries_: { type: Array },
            loading_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #entries__accessor_storage = [];
    get entries_() { return this.#entries__accessor_storage; }
    set entries_(value) { this.#entries__accessor_storage = value; }
    #loading__accessor_storage = true;
    get loading_() { return this.#loading__accessor_storage; }
    set loading_(value) { this.#loading__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        const dialogArgs = FeedbackBrowserProxyImpl.getInstance().getDialogArguments();
        if (!dialogArgs) {
            return;
        }
        this.createAutofillMetadataTable(dialogArgs);
        this.loading_ = false;
    }
    /**
     * Builds the autofill metadata table. Constructs the map entries for the logs
     * page by parsing the input json to readable string.
     */
    createAutofillMetadataTable(dialogArgs) {
        const autofillMetadata = JSON.parse(dialogArgs);
        const items = [];
        if (autofillMetadata.triggerFormSignature) {
            items.push({
                key: 'trigger_form_signature',
                value: autofillMetadata.triggerFormSignature,
            });
        }
        if (autofillMetadata.triggerFieldSignature) {
            items.push({
                key: 'trigger_field_signature',
                value: autofillMetadata.triggerFieldSignature,
            });
        }
        if (autofillMetadata.lastAutofillEvent) {
            items.push({
                key: 'last_autofill_event',
                value: JSON.stringify(autofillMetadata.lastAutofillEvent, null, 1),
            });
        }
        if (autofillMetadata.formStructures) {
            items.push({
                key: 'form_structures',
                value: JSON.stringify(autofillMetadata.formStructures, null, 1),
            });
        }
        this.entries_ = items;
    }
}
customElements.define(AutofillMetadataAppElement.is, AutofillMetadataAppElement);
