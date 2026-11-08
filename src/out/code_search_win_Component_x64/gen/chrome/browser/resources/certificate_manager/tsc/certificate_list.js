// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'certificate-list' component shows a list of
 * certificates with a header, an expander, and optionally an "export all"
 * button.
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import './certificate_entry.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './certificate_list.css.js';
import { getHtml } from './certificate_list.html.js';
import { CertificateSource } from './certificate_manager.mojom-webui.js';
import { CertificatesBrowserProxy } from './certificates_browser_proxy.js';
const CertificateListElementBase = I18nMixinLit(CrLitElement);
export class CertificateListElement extends CertificateListElementBase {
    static get is() {
        return 'certificate-list';
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
            headerText: { type: String },
            showImport: { type: Boolean },
            showImportAndBind: { type: Boolean },
            noCollapse: { type: Boolean },
            hideExport: { type: Boolean },
            hideIfEmpty: { type: Boolean },
            hideHeader: { type: Boolean },
            certMetadataEditable: { type: Boolean },
            inSubpage: { type: Boolean },
            expanded_: { type: Boolean },
            certificates_: { type: Array },
            hasCerts_: { type: Boolean },
        };
    }
    #certSource_accessor_storage = CertificateSource.MIN_VALUE;
    get certSource() { return this.#certSource_accessor_storage; }
    set certSource(value) { this.#certSource_accessor_storage = value; }
    #headerText_accessor_storage = '';
    get headerText() { return this.#headerText_accessor_storage; }
    set headerText(value) { this.#headerText_accessor_storage = value; }
    #showImport_accessor_storage = false;
    get showImport() { return this.#showImport_accessor_storage; }
    set showImport(value) { this.#showImport_accessor_storage = value; }
    #showImportAndBind_accessor_storage = false;
    get showImportAndBind() { return this.#showImportAndBind_accessor_storage; }
    set showImportAndBind(value) { this.#showImportAndBind_accessor_storage = value; }
    #noCollapse_accessor_storage = false;
    get noCollapse() { return this.#noCollapse_accessor_storage; }
    set noCollapse(value) { this.#noCollapse_accessor_storage = value; }
    #hideExport_accessor_storage = false;
    get hideExport() { return this.#hideExport_accessor_storage; }
    set hideExport(value) { this.#hideExport_accessor_storage = value; }
    #hideIfEmpty_accessor_storage = false;
    get hideIfEmpty() { return this.#hideIfEmpty_accessor_storage; }
    set hideIfEmpty(value) { this.#hideIfEmpty_accessor_storage = value; }
    #hideHeader_accessor_storage = false;
    get hideHeader() { return this.#hideHeader_accessor_storage; }
    set hideHeader(value) { this.#hideHeader_accessor_storage = value; }
    #certMetadataEditable_accessor_storage = false;
    get certMetadataEditable() { return this.#certMetadataEditable_accessor_storage; }
    set certMetadataEditable(value) { this.#certMetadataEditable_accessor_storage = value; }
    #inSubpage_accessor_storage = false;
    get inSubpage() { return this.#inSubpage_accessor_storage; }
    set inSubpage(value) { this.#inSubpage_accessor_storage = value; }
    #expanded__accessor_storage = true;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #certificates__accessor_storage = [];
    get certificates_() { return this.#certificates__accessor_storage; }
    set certificates_(value) { this.#certificates__accessor_storage = value; }
    #hasCerts__accessor_storage = false;
    get hasCerts_() { return this.#hasCerts__accessor_storage; }
    set hasCerts_(value) { this.#hasCerts__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('certificates_')) {
            this.hasCerts_ = this.certificates_.length > 0;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.refreshCertificates_();
        const proxy = CertificatesBrowserProxy.getInstance();
        proxy.callbackRouter.triggerReload.addListener(this.onRefreshRequested_.bind(this));
    }
    onRefreshRequested_(certSources) {
        if (certSources.includes(this.certSource)) {
            this.refreshCertificates_();
        }
    }
    refreshCertificates_() {
        CertificatesBrowserProxy.getInstance()
            .handler.getCertificates(this.certSource)
            .then((results) => {
            this.certificates_ = results.certs;
        });
    }
    onExportCertsClick_(e) {
        // Export button click shouldn't collapse the list as well.
        e.stopPropagation();
        CertificatesBrowserProxy.getInstance().handler.exportCertificates(this.certSource);
    }
    onImportCertClick_(e) {
        // Import button click shouldn't collapse the list as well.
        e.stopPropagation();
        CertificatesBrowserProxy.getInstance()
            .handler.importCertificate(this.certSource)
            .then(this.handleImportResult.bind(this));
    }
    onImportAndBindCertClick_(e) {
        // Import button click shouldn't collapse the list as well.
        e.stopPropagation();
        CertificatesBrowserProxy.getInstance()
            .handler.importAndBindCertificate(this.certSource)
            .then(this.handleImportResult.bind(this));
    }
    handleImportResult(value) {
        if (value.result !== null && value.result.success !== undefined) {
            // On successful import, refresh the certificate list.
            this.refreshCertificates_();
        }
        this.fire('import-result', value.result);
    }
    onDeleteResult_(e) {
        const result = e.detail;
        if (result !== null && result.success !== undefined) {
            // On successful deletion, refresh the certificate list.
            this.refreshCertificates_();
            this.$.importCert.focus();
        }
    }
    shouldHideEverything_() {
        return this.hideIfEmpty && this.certificates_.length === 0;
    }
    hideCollapseButton_() {
        return this.noCollapse || !this.hasCerts_;
    }
    hideExportButton_() {
        return this.hideExport || !this.hasCerts_;
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
    }
    getListHeaderAdditionalClass_() {
        return this.inSubpage ? 'subpage-padding' : '';
    }
    getCertsClass_() {
        return this.inSubpage ? '' : 'card';
    }
}
customElements.define(CertificateListElement.is, CertificateListElement);
