// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'certificate-subpage' component is designed to show a
 * subpage. This subpage contains:
 *
 *   - header text
 *   - one or more lists of certs
 *   - a back button for navigating back to the previous page
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import './certificate_list.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './certificate_subpage.css.js';
import { getHtml } from './certificate_subpage.html.js';
import { Page, Router } from './navigation.js';
const CertificateSubpageElementBase = I18nMixinLit(CrLitElement);
export class CertificateSubpageElement extends CertificateSubpageElementBase {
    static get is() {
        return 'certificate-subpage';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            subpageTitle: { type: String },
            subpageCertLists: { type: Array },
            navigateBackTarget: { type: String },
        };
    }
    #subpageTitle_accessor_storage = '';
    get subpageTitle() { return this.#subpageTitle_accessor_storage; }
    set subpageTitle(value) { this.#subpageTitle_accessor_storage = value; }
    #subpageCertLists_accessor_storage = [];
    get subpageCertLists() { return this.#subpageCertLists_accessor_storage; }
    set subpageCertLists(value) { this.#subpageCertLists_accessor_storage = value; }
    #navigateBackTarget_accessor_storage = Page.LOCAL_CERTS;
    get navigateBackTarget() { return this.#navigateBackTarget_accessor_storage; }
    set navigateBackTarget(value) { this.#navigateBackTarget_accessor_storage = value; }
    navigateBackSource = Page.LOCAL_CERTS;
    // Sets initial keyboard focus of the subpage. Assumes that subpage elements
    // are visible.
    setInitialFocus() {
        focusWithoutInk(this.$.backButton);
    }
    onBackButtonClick_(e) {
        e.preventDefault();
        Router.getInstance().navigateTo(this.navigateBackTarget);
    }
}
customElements.define(CertificateSubpageElement.is, CertificateSubpageElement);
