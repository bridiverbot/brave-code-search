// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './composebox_file_inputs.html.js';
export class ComposeboxFileInputsElement extends CrLitElement {
    static get is() {
        return 'cr-composebox-file-inputs';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disableFileInputs: { type: Boolean },
            attachmentFileTypes_: { type: String },
            imageFileTypes_: { type: String },
        };
    }
    #disableFileInputs_accessor_storage = false;
    get disableFileInputs() { return this.#disableFileInputs_accessor_storage; }
    set disableFileInputs(value) { this.#disableFileInputs_accessor_storage = value; }
    #attachmentFileTypes__accessor_storage = loadTimeData.getBoolean('lensSendRawFileMediaTypesEnabled') ?
        '*/*' :
        loadTimeData.getString('composeboxAttachmentFileTypes');
    // Comma separated list of file types.
    get attachmentFileTypes_() { return this.#attachmentFileTypes__accessor_storage; }
    set attachmentFileTypes_(value) { this.#attachmentFileTypes__accessor_storage = value; }
    #imageFileTypes__accessor_storage = loadTimeData.getString('composeboxImageFileTypes');
    // Comma separated list of file types.
    get imageFileTypes_() { return this.#imageFileTypes__accessor_storage; }
    set imageFileTypes_(value) { this.#imageFileTypes__accessor_storage = value; }
    onOpenFileUpload_() {
        this.openFilePicker();
    }
    onOpenImageUpload_() {
        this.openImagePicker();
    }
    openFilePicker() {
        if (this.disableFileInputs) {
            return;
        }
        this.shadowRoot?.querySelector('#fileInput')?.click();
    }
    openImagePicker() {
        if (this.disableFileInputs) {
            return;
        }
        this.shadowRoot?.querySelector('#imageInput')?.click();
    }
    onFileChange_(e) {
        const input = e.target;
        this.fire('file-change', { files: input.files });
        input.value = '';
    }
}
customElements.define(ComposeboxFileInputsElement.is, ComposeboxFileInputsElement);
