// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './site_settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { SettingsViewMixin } from '../settings_page/settings_view_mixin.js';
import { getTemplate } from './pdf_documents_page.html.js';
const PdfDocumentsPageElementBase = SettingsViewMixin(PolymerElement);
export class PdfDocumentsPageElement extends PdfDocumentsPageElementBase {
    static get is() {
        return 'settings-pdf-documents-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isGuest_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isGuest');
                },
            },
        };
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(PdfDocumentsPageElement.is, PdfDocumentsPageElement);
