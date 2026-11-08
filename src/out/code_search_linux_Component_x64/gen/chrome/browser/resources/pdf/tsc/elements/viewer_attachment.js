// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_attachment.css.js';
import { getHtml } from './viewer_attachment.html.js';
export class ViewerAttachmentElement extends CrLitElement {
    static get is() {
        return 'viewer-attachment';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            attachment: { type: Object },
            index: { type: Number },
            saveAllowed_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #attachment_accessor_storage = { name: '', size: 0, readable: false };
    get attachment() { return this.#attachment_accessor_storage; }
    set attachment(value) { this.#attachment_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #saveAllowed__accessor_storage = false;
    get saveAllowed_() { return this.#saveAllowed__accessor_storage; }
    set saveAllowed_(value) { this.#saveAllowed__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('attachment')) {
            this.saveAllowed_ = !!this.attachment && this.attachment.size !== -1;
        }
    }
    onDownloadClick_() {
        if (!this.attachment || this.attachment.size === -1) {
            return;
        }
        this.fire('save-attachment', this.index);
    }
}
customElements.define(ViewerAttachmentElement.is, ViewerAttachmentElement);
