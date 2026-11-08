// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './restricted_sites_dialog.html.js';
import { getCss as getSharedStyleCss } from './shared_style.css.js';
const ExtensionsRestrictedSitesDialogElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase {
    static get is() {
        return 'extensions-restricted-sites-dialog';
    }
    static get styles() {
        return getSharedStyleCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            firstRestrictedSite: { type: String },
        };
    }
    #firstRestrictedSite_accessor_storage = '';
    get firstRestrictedSite() { return this.#firstRestrictedSite_accessor_storage; }
    set firstRestrictedSite(value) { this.#firstRestrictedSite_accessor_storage = value; }
    isOpen() {
        return this.$.dialog.open;
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
    }
    getDialogTitle_() {
        return this.i18n('matchingRestrictedSitesTitle', this.firstRestrictedSite);
    }
    getDialogWarning_() {
        return this.i18n('matchingRestrictedSitesWarning', this.firstRestrictedSite);
    }
}
customElements.define(ExtensionsRestrictedSitesDialogElement.is, ExtensionsRestrictedSitesDialogElement);
