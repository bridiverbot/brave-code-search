// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'pay-over-time-issuer-list-entry' is an Pay Over Time issuer
 * row to be shown on the settings page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getCss } from './pay_over_time_issuer_list_entry.css.js';
import { getHtml } from './pay_over_time_issuer_list_entry.html.js';
/**
 * This function returns a string that can be used in a srcset to scale
 * the provided `url` based on the user's screen resolution.
 */
function getScaledSrcSet(url) {
    return `${url} 1x, ${url}@2x 2x`;
}
export class SettingsPayOverTimeIssuerListEntryElement extends CrLitElement {
    static get is() {
        return 'settings-pay-over-time-issuer-list-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            payOverTimeIssuer: { type: Object },
            autofillEnableWalletBrandingEnabled_: { type: Boolean },
            autofillEnableGradientGoogleLogosEnabled_: { type: Boolean },
        };
    }
    #payOverTimeIssuer_accessor_storage = {};
    get payOverTimeIssuer() { return this.#payOverTimeIssuer_accessor_storage; }
    set payOverTimeIssuer(value) { this.#payOverTimeIssuer_accessor_storage = value; }
    #autofillEnableWalletBrandingEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableWalletBranding');
    get autofillEnableWalletBrandingEnabled_() { return this.#autofillEnableWalletBrandingEnabled__accessor_storage; }
    set autofillEnableWalletBrandingEnabled_(value) { this.#autofillEnableWalletBrandingEnabled__accessor_storage = value; }
    #autofillEnableGradientGoogleLogosEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableGradientGoogleLogos');
    get autofillEnableGradientGoogleLogosEnabled_() { return this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage; }
    set autofillEnableGradientGoogleLogosEnabled_(value) { this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage = value; }
    /**
     * When the provided `imageSrc` points toward an issuer's default logo art,
     * this function returns a string that will scale the image based on the
     * user's screen resolution, otherwise it will return the unmodified
     * `imageSrc`.
     */
    getIssuerImage_(imageSrc) {
        if (!imageSrc) {
            return '';
        }
        return imageSrc.startsWith('chrome://theme') ? getScaledSrcSet(imageSrc) :
            imageSrc;
    }
    getRemotePaymentMethodsLinkLabel_() {
        return loadTimeData.getString(this.autofillEnableWalletBrandingEnabled_ ?
            'remotePaymentMethodsWalletLinkLabel' :
            'remotePaymentMethodsLinkLabel');
    }
    onRemoteEditClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('managePaymentMethodsUrl'));
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
customElements.define(SettingsPayOverTimeIssuerListEntryElement.is, SettingsPayOverTimeIssuerListEntryElement);
