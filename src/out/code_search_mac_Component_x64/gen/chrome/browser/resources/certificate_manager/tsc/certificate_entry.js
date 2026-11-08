// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'certificate-entry' component is for showing a summary
 * of a certificate in a row on screen.
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './certificate_entry.css.js';
import { getHtml } from './certificate_entry.html.js';
import { CertificateSource } from './certificate_manager.mojom-webui.js';
import { CertificatesBrowserProxy } from './certificates_browser_proxy.js';
const CertificateEntryElementBase = I18nMixinLit(CrLitElement);
export class CertificateEntryElement extends CertificateEntryElementBase {
    static get is() {
        return 'certificate-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            certSource: { type: Number },
            sha256hashHex: { type: String },
            displayName: { type: String },
            isDeletable: { type: Boolean },
            showEditIcon: { type: Boolean },
        };
    }
    #certSource_accessor_storage = CertificateSource.MIN_VALUE;
    get certSource() { return this.#certSource_accessor_storage; }
    set certSource(value) { this.#certSource_accessor_storage = value; }
    #sha256hashHex_accessor_storage = '';
    get sha256hashHex() { return this.#sha256hashHex_accessor_storage; }
    set sha256hashHex(value) { this.#sha256hashHex_accessor_storage = value; }
    #displayName_accessor_storage = '';
    get displayName() { return this.#displayName_accessor_storage; }
    set displayName(value) { this.#displayName_accessor_storage = value; }
    #isDeletable_accessor_storage = false;
    get isDeletable() { return this.#isDeletable_accessor_storage; }
    set isDeletable(value) { this.#isDeletable_accessor_storage = value; }
    #showEditIcon_accessor_storage = false;
    get showEditIcon() { return this.#showEditIcon_accessor_storage; }
    set showEditIcon(value) { this.#showEditIcon_accessor_storage = value; }
    certDetailsIconClass_() {
        if (this.showEditIcon) {
            return 'icon-edit';
        }
        else {
            return 'icon-visibility';
        }
    }
    onViewClick_() {
        CertificatesBrowserProxy.getInstance().handler.viewCertificate(this.certSource, this.sha256hashHex);
    }
    onDeleteClick_() {
        assert(this.isDeletable);
        CertificatesBrowserProxy.getInstance()
            .handler
            .deleteCertificate(this.certSource, this.displayName, this.sha256hashHex)
            .then((value) => {
            this.fire('delete-result', value.result);
        });
    }
    onCopyClick_() {
        navigator.clipboard.writeText(this.sha256hashHex);
        this.fire('hash-copied');
    }
}
customElements.define(CertificateEntryElement.is, CertificateEntryElement);
