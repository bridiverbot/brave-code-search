// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_properties_dialog.css.js';
import { getHtml } from './viewer_properties_dialog.html.js';
export class ViewerPropertiesDialogElement extends CrLitElement {
    static get is() {
        return 'viewer-properties-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            documentMetadata: { type: Object },
            fileName: { type: String },
            pageCount: { type: Number },
            strings: { type: Object },
        };
    }
    #documentMetadata_accessor_storage = {
        author: '',
        canSerializeDocument: false,
        creationDate: '',
        creator: '',
        fileSize: '',
        keywords: '',
        linearized: false,
        modDate: '',
        pageSize: '',
        producer: '',
        subject: '',
        title: '',
        version: '',
    };
    get documentMetadata() { return this.#documentMetadata_accessor_storage; }
    set documentMetadata(value) { this.#documentMetadata_accessor_storage = value; }
    #fileName_accessor_storage = '';
    get fileName() { return this.#fileName_accessor_storage; }
    set fileName(value) { this.#fileName_accessor_storage = value; }
    #pageCount_accessor_storage = 0;
    get pageCount() { return this.#pageCount_accessor_storage; }
    set pageCount(value) { this.#pageCount_accessor_storage = value; }
    #strings_accessor_storage;
    get strings() { return this.#strings_accessor_storage; }
    set strings(value) { this.#strings_accessor_storage = value; }
    getFastWebViewValue_() {
        if (!this.strings) {
            return '';
        }
        return loadTimeData.getString(this.documentMetadata.linearized ? 'propertiesFastWebViewYes' :
            'propertiesFastWebViewNo');
    }
    getOrPlaceholder_(value) {
        return value || '-';
    }
    onCloseClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ViewerPropertiesDialogElement.is, ViewerPropertiesDialogElement);
