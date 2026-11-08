// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'crs-section' component is the Chrome Root Store
 * section of the Certificate Management V2 UI.
 */
import './certificate_list.js';
import { getCss as getCrPageHostStyleCss } from '//resources/cr_elements/cr_page_host_style_lit.css.js';
import { getCss as getCrSharedStyleCss } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCertificateManagerStyleCss } from './certificate_manager_style.css.js';
import { getHtml } from './crs_section.html.js';
export class CrsSectionElement extends CrLitElement {
    static get is() {
        return 'crs-section';
    }
    static get styles() {
        return [
            getCrPageHostStyleCss(),
            getCrSharedStyleCss(),
            getCertificateManagerStyleCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            crsLearnMoreUrl_: { type: String },
        };
    }
    #crsLearnMoreUrl__accessor_storage = loadTimeData.getString('crsLearnMoreUrl');
    get crsLearnMoreUrl_() { return this.#crsLearnMoreUrl__accessor_storage; }
    set crsLearnMoreUrl_(value) { this.#crsLearnMoreUrl__accessor_storage = value; }
}
customElements.define(CrsSectionElement.is, CrsSectionElement);
