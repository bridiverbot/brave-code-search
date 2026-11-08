// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'iban-list-entry' is an IBAN row to be shown on the settings
 * page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './iban_list_entry.css.js';
import { getHtml } from './iban_list_entry.html.js';
/**
 * This function returns a string that can be used in a srcset to scale
 * the provided `url` based on the user's screen resolution.
 */
function getScaledSrcSet(url) {
    return `${url} 1x, ${url}@2x 2x`;
}
const SettingsIbanListEntryElementBase = I18nMixinLit(CrLitElement);
export class SettingsIbanListEntryElement extends SettingsIbanListEntryElementBase {
    static get is() {
        return 'settings-iban-list-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** A saved IBAN. */
            iban: { type: Object },
            autofillEnableWalletBrandingEnabled_: { type: Boolean },
            autofillEnableGradientGoogleLogosEnabled_: { type: Boolean },
        };
    }
    #iban_accessor_storage = {
        metadata: {
            isLocal: false,
            summaryLabel: '',
        },
    };
    get iban() { return this.#iban_accessor_storage; }
    set iban(value) { this.#iban_accessor_storage = value; }
    #autofillEnableWalletBrandingEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableWalletBranding');
    get autofillEnableWalletBrandingEnabled_() { return this.#autofillEnableWalletBrandingEnabled__accessor_storage; }
    set autofillEnableWalletBrandingEnabled_(value) { this.#autofillEnableWalletBrandingEnabled__accessor_storage = value; }
    #autofillEnableGradientGoogleLogosEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableGradientGoogleLogos');
    get autofillEnableGradientGoogleLogosEnabled_() { return this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage; }
    set autofillEnableGradientGoogleLogosEnabled_(value) { this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage = value; }
    get dotsMenu() {
        return this.shadowRoot.getElementById('ibanMenu');
    }
    /**
     * The 3-dot menu should be shown if the IBAN is a local IBAN.
     */
    showDotsMenu_() {
        return !!this.iban.metadata.isLocal;
    }
    shouldShowOutlinkWithWalletBranding_() {
        return !this.showDotsMenu_() && this.autofillEnableWalletBrandingEnabled_;
    }
    shouldShowOutlinkWithoutWalletBranding_() {
        return !this.showDotsMenu_() && !this.autofillEnableWalletBrandingEnabled_;
    }
    /**
     * The Google Payments icon should be shown if the IBAN is a server IBAN.
     */
    shouldShowGooglePaymentsIndicator_() {
        return !this.iban.metadata.isLocal;
    }
    /**
     * Opens the IBAN action menu.
     */
    onDotsMenuClick_() {
        this.fire('dots-iban-menu-click', {
            iban: this.iban,
            anchorElement: this.dotsMenu,
        });
    }
    onRemoteEditClick_() {
        this.fire('remote-iban-menu-click', {
            iban: this.iban,
            anchorElement: this.dotsMenu,
        });
    }
    getA11yIbanDescription_() {
        // Strip all whitespace and get the pure last four digits of the value.
        const strippedSummaryLabel = this.iban.metadata ?
            this.iban.metadata.summaryLabel.replace(/\s/g, '') :
            '';
        const lastFourDigits = strippedSummaryLabel.substring(Math.max(0, strippedSummaryLabel.length - 4));
        return this.i18n('a11yIbanDescription', lastFourDigits);
    }
    getLabel_() {
        return this.iban.nickname || this.iban.metadata.summaryLabel;
    }
    getSubLabel_() {
        return this.iban.nickname ? this.iban.metadata.summaryLabel : '';
    }
    /**
     * @return the title for the More Actions button corresponding to the IBAN
     *     which is described by the nickname or last 4 digits of the IBAN's
     *     value.
     */
    getMoreActionsTitle_() {
        return this.i18n('moreActionsForIban', htmlEscape(this.iban.nickname || this.getA11yIbanDescription_()));
    }
    getGooglePayLightModeLogoSrcSet_() {
        const logoId = this.autofillEnableGradientGoogleLogosEnabled_ ?
            'chrome://theme/IDR_AUTOFILL_GOOGLE_PAY_WITH_GRADIENT_SMALL' :
            'chrome://theme/IDR_AUTOFILL_GOOGLE_PAY_SMALL';
        return getScaledSrcSet(logoId);
    }
    getGooglePayDarkModeLogoSrcSet_() {
        const logoId = this.autofillEnableGradientGoogleLogosEnabled_ ?
            'chrome://theme/IDR_AUTOFILL_GOOGLE_PAY_WITH_GRADIENT_DARK_SMALL' :
            'chrome://theme/IDR_AUTOFILL_GOOGLE_PAY_DARK_SMALL';
        return getScaledSrcSet(logoId);
    }
}
customElements.define(SettingsIbanListEntryElement.is, SettingsIbanListEntryElement);
