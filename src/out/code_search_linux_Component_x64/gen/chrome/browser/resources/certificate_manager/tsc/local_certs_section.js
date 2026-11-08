// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'local-certs-section' component is a section of the
 * Certificate Management UI that shows local modifications to the the users
 * trusted roots for TLS server auth (e.g. roots imported from the platform).
 */
import '/strings.m.js';
import './certificate_manager_icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
// 
import { assert, assertNotReached } from '//resources/js/assert.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { PluralStringProxyImpl } from '//resources/js/plural_string_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CertificatesBrowserProxy } from './certificates_browser_proxy.js';
import { getCss } from './local_certs_section.css.js';
import { getHtml } from './local_certs_section.html.js';
import { Page, Router } from './navigation.js';
export class LocalCertsSectionElement extends CrLitElement {
    static get is() {
        return 'local-certs-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            numPolicyCertsString_: { type: String },
            numUserCertsString_: { type: String },
            certManagementMetadata_: { type: Object },
            // 
            numSystemCertsString_: { type: String },
            // 
        };
    }
    #numPolicyCertsString__accessor_storage = '';
    get numPolicyCertsString_() { return this.#numPolicyCertsString__accessor_storage; }
    set numPolicyCertsString_(value) { this.#numPolicyCertsString__accessor_storage = value; }
    #numUserCertsString__accessor_storage = '';
    get numUserCertsString_() { return this.#numUserCertsString__accessor_storage; }
    set numUserCertsString_(value) { this.#numUserCertsString__accessor_storage = value; }
    #certManagementMetadata__accessor_storage = null;
    get certManagementMetadata_() { return this.#certManagementMetadata__accessor_storage; }
    set certManagementMetadata_(value) { this.#certManagementMetadata__accessor_storage = value; }
    #numSystemCertsString__accessor_storage = '';
    // 
    get numSystemCertsString_() { return this.#numSystemCertsString__accessor_storage; }
    set numSystemCertsString_(value) { this.#numSystemCertsString__accessor_storage = value; }
    // 
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.onMetadataRefresh_();
        const proxy = CertificatesBrowserProxy.getInstance();
        proxy.callbackRouter.triggerMetadataUpdate.addListener(this.onMetadataRefresh_.bind(this));
    }
    onMetadataRefresh_() {
        const proxy = CertificatesBrowserProxy.getInstance();
        proxy.handler.getCertManagementMetadata().then((results) => {
            this.certManagementMetadata_ = results.metadata;
            this.updateNumCertsStrings_();
        });
    }
    setFocusToLinkRow(p) {
        switch (p) {
            case Page.ADMIN_CERTS:
                const adminLinkRow = this.shadowRoot.querySelector('#adminCertsInstalledLinkRow');
                assert(adminLinkRow);
                focusWithoutInk(adminLinkRow);
                break;
            // 
            case Page.PLATFORM_CERTS:
                focusWithoutInk(this.$.viewOsImportedCerts);
                break;
            // 
            case Page.USER_CERTS:
                const userLinkRow = this.shadowRoot.querySelector('#userCertsInstalledLinkRow');
                assert(userLinkRow);
                focusWithoutInk(userLinkRow);
                break;
            default:
                assertNotReached();
        }
    }
    updateNumCertsStrings_() {
        if (!this.certManagementMetadata_) {
            this.numPolicyCertsString_ = '';
            // 
            this.numSystemCertsString_ = '';
            // 
            this.numUserCertsString_ = '';
        }
        else {
            PluralStringProxyImpl.getInstance()
                .getPluralString('certificateManagerV2NumCerts', this.certManagementMetadata_.numPolicyCerts)
                .then(label => {
                this.numPolicyCertsString_ = label;
            });
            // 
            PluralStringProxyImpl.getInstance()
                .getPluralString('certificateManagerV2NumCerts', this.certManagementMetadata_.numUserAddedSystemCerts)
                .then(label => {
                this.numSystemCertsString_ = label;
            });
            // 
            PluralStringProxyImpl.getInstance()
                .getPluralString('certificateManagerV2NumCerts', this.certManagementMetadata_.numUserCerts)
                .then(label => {
                this.numUserCertsString_ = label;
            });
        }
    }
    // 
    onPlatformCertsLinkRowClick_(e) {
        e.preventDefault();
        Router.getInstance().navigateTo(Page.PLATFORM_CERTS);
    }
    // 
    onAdminCertsInstalledLinkRowClick_(e) {
        e.preventDefault();
        Router.getInstance().navigateTo(Page.ADMIN_CERTS);
    }
    onUserCertsInstalledLinkRowClick_(e) {
        e.preventDefault();
        Router.getInstance().navigateTo(Page.USER_CERTS);
    }
    // 
    importOsCertsEnabled_() {
        return !!this.certManagementMetadata_?.includeSystemTrustStore;
    }
    importOsCertsEnabledManaged_() {
        return !!this.certManagementMetadata_?.isIncludeSystemTrustStoreManaged;
    }
    showViewOsCertsLinkRow_() {
        return !!this.certManagementMetadata_ &&
            this.certManagementMetadata_.numUserAddedSystemCerts > 0;
    }
    // 
    // If true, show the Custom Certs section.
    showCustomSection_() {
        return this.showPolicySection_() || this.showUserSection_();
    }
    // If true, show the Policy Certs section.
    showPolicySection_() {
        return !!this.certManagementMetadata_ &&
            this.certManagementMetadata_.numPolicyCerts > 0;
    }
    // If true, show the User Certs section.
    showUserSection_() {
        return !!this.certManagementMetadata_ &&
            this.certManagementMetadata_.showUserCertsUi;
    }
    // 
    // 
    onOsCertsToggleChange_(e) {
        const proxy = CertificatesBrowserProxy.getInstance();
        proxy.handler.setIncludeSystemTrustStore(e.detail);
    }
}
customElements.define(LocalCertsSectionElement.is, LocalCertsSectionElement);
