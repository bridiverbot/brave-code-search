// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'credit-card-list-entry' is a credit card row to be shown in
 * the settings page.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { CardBenefitsUserAction, MetricsBrowserProxyImpl } from '../../metrics_browser_proxy.js';
import { getCss } from './credit_card_list_entry.css.js';
import { getHtml } from './credit_card_list_entry.html.js';
/**
 * This function returns a string that can be used in a srcset to scale
 * the provided `url` based on the user's screen resolution.
 */
function getScaledSrcSet(url) {
    return `${url} 1x, ${url}@2x 2x`;
}
const SettingsCreditCardListEntryElementBase = I18nMixinLit(CrLitElement);
export class SettingsCreditCardListEntryElement extends SettingsCreditCardListEntryElementBase {
    static get is() {
        return 'settings-credit-card-list-entry';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** A saved credit card. */
            creditCard: { type: Object },
            autofillEnableWalletBrandingEnabled_: { type: Boolean },
            autofillEnableGradientGoogleLogosEnabled_: { type: Boolean },
        };
    }
    #creditCard_accessor_storage = {
        expirationMonth: '01',
        expirationYear: '2099',
        imageSrc: '',
        metadata: {
            isLocal: false,
            isVirtualCardEnrolled: false,
            isVirtualCardEnrollmentEligible: false,
            summaryLabel: '',
        },
    };
    get creditCard() { return this.#creditCard_accessor_storage; }
    set creditCard(value) { this.#creditCard_accessor_storage = value; }
    #autofillEnableWalletBrandingEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableWalletBranding');
    get autofillEnableWalletBrandingEnabled_() { return this.#autofillEnableWalletBrandingEnabled__accessor_storage; }
    set autofillEnableWalletBrandingEnabled_(value) { this.#autofillEnableWalletBrandingEnabled__accessor_storage = value; }
    #autofillEnableGradientGoogleLogosEnabled__accessor_storage = loadTimeData.getBoolean('autofillEnableGradientGoogleLogos');
    get autofillEnableGradientGoogleLogosEnabled_() { return this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage; }
    set autofillEnableGradientGoogleLogosEnabled_(value) { this.#autofillEnableGradientGoogleLogosEnabled__accessor_storage = value; }
    get dotsMenu() {
        return this.shadowRoot.getElementById('creditCardMenu');
    }
    /**
     * Opens the credit card action menu.
     */
    onDotsMenuClick_() {
        this.fire('dots-card-menu-click', {
            creditCard: this.creditCard,
            anchorElement: this.shadowRoot.querySelector('#creditCardMenu'),
        });
    }
    onRemoteEditClick_() {
        this.fire('remote-card-menu-click', {
            creditCard: this.creditCard,
            anchorElement: this.shadowRoot.querySelector('#creditCardMenu'),
        });
    }
    onSummarySublabelTermsLinkClick_() {
        // Log the metric for user clicking on the card benefits terms hyperlink.
        MetricsBrowserProxyImpl.getInstance().recordAction(CardBenefitsUserAction.CARD_BENEFITS_TERMS_LINK_CLICKED);
    }
    getCardNumberDescription_(creditCard) {
        const cardNumber = creditCard.cardNumber;
        if (cardNumber) {
            const lastFourDigits = cardNumber.substring(Math.max(0, cardNumber.length - 4));
            if (lastFourDigits) {
                const network = creditCard.network || this.i18n('genericCreditCard');
                return this.i18n('creditCardDescription', network, lastFourDigits);
            }
        }
        return undefined;
    }
    /**
     * @returns the title for the More Actions button corresponding to the card
     *     which is described by the nickname or the network name and last 4
     *     digits or name. If a card has CVC saved, there will be additional
     *     description to notify of the same.
     */
    moreActionsTitle_() {
        const cardDescription = this.creditCard.nickname ||
            this.getCardNumberDescription_(this.creditCard) ||
            this.creditCard.name;
        return this.i18n(this.creditCard.cvc ? 'moreActionsForCreditCardWithCvc' :
            'moreActionsForCreditCard', htmlEscape(cardDescription));
    }
    /**
     * The card has a product description or a nickname.
     */
    hasCardIdentifier_() {
        return (this.creditCard.metadata.summarySublabel || '').length > 0;
    }
    /**
     * The 3-dot menu should be shown if the card is not a masked server card or
     * if the card is eligible for virtual card enrollment.
     */
    showDots_() {
        return this.creditCard.metadata.isLocal ||
            this.isVirtualCardEnrollmentEligible_();
    }
    shouldShowOutlinkWithWalletBranding_() {
        return !this.showDots_() && this.autofillEnableWalletBrandingEnabled_;
    }
    shouldShowOutlinkWithoutWalletBranding_() {
        return !this.showDots_() && !this.autofillEnableWalletBrandingEnabled_;
    }
    isVirtualCardEnrollmentEligible_() {
        return this.creditCard.metadata.isVirtualCardEnrollmentEligible;
    }
    isVirtualCardEnrolled_() {
        return this.creditCard.metadata.isVirtualCardEnrolled;
    }
    getCardIdentifierAriaLabel_() {
        return this.creditCard.metadata.summaryLabel || '';
    }
    getSummaryAriaLabel_() {
        const cardNumberDescription = this.getCardNumberDescription_(this.creditCard);
        if (cardNumberDescription) {
            return this.i18n('creditCardA11yLabeled', cardNumberDescription);
        }
        return this.creditCard.metadata.summaryLabel;
    }
    /**
     * Returns an aria label for the benefits terms link such as "See terms for
     * Amex ending in 0001". If no card description is available, then the
     * default text such as "See terms here" is returned.
     */
    getBenefitsTermsAriaLabel_() {
        const cardNumberDescription = this.getCardNumberDescription_(this.creditCard);
        if (cardNumberDescription) {
            return this.i18n('benefitsTermsAriaLabel', cardNumberDescription);
        }
        return this.i18n('benefitsTermsTagForCreditCardListEntry');
    }
    getCardExpiryDate_() {
        assert(this.creditCard.expirationMonth);
        assert(this.creditCard.expirationYear);
        // Truncate the year down to two digits (eg. 2023 to 23).
        return this.creditCard.expirationMonth + '/' +
            this.creditCard.expirationYear.substring(2);
    }
    /**
     * Returns expiration date.
     */
    getExpirationlabel_() {
        return ' · ' + this.getCardExpiryDate_();
    }
    /**
     * Returns one of the following sublabels, based on the card's status:
     *   Virtual card enrollment tag
     *   'CVC saved' tag
     * e.g., one of the following:
     *   CVC saved
     *   Virtual card turned on
     *   Virtual card turned on | CVC saved
     */
    getSummarySublabel_() {
        const separator = ' | ';
        let summarySublabel = this.isVirtualCardEnrolled_() ? this.i18n('virtualCardTurnedOn') : '';
        if (this.isCardCvcAvailable_()) {
            if (summarySublabel.length > 0) {
                summarySublabel += separator;
            }
            summarySublabel += this.i18n('cvcTagForCreditCardListEntry');
        }
        return summarySublabel;
    }
    hasSummaryAndBenefitSublabel_() {
        return this.getSummarySublabel_().length > 0 &&
            this.isCardBenefitsProductUrlAvailable_();
    }
    getSummaryAriaSublabel_() {
        const expirationDate = this.i18n('creditCardExpDateA11yLabeled', this.getCardExpiryDate_());
        const sublabel = this.getSummarySublabel_().replace('|', ',');
        if (sublabel) {
            return `${expirationDate}, ${sublabel}`;
        }
        return expirationDate;
    }
    shouldShowVirtualCardSecondarySublabel_() {
        return this.creditCard.metadata.summarySublabel.trim() !== '' ||
            this.isVirtualCardEnrolled_() ||
            this.isVirtualCardEnrollmentEligible_();
    }
    shouldShowPaymentsIndicator_() {
        return !this.creditCard.metadata.isLocal;
    }
    isCardCvcAvailable_() {
        return loadTimeData.getBoolean('cvcStorageAvailable') &&
            !!this.creditCard.cvc;
    }
    isCardBenefitsProductUrlAvailable_() {
        return !!this.creditCard.productTermsUrl;
    }
    getCardBenefitsProductUrl_() {
        return this.creditCard.productTermsUrl || '';
    }
    /**
     * When the provided `imageSrc` points toward a processor's default card art,
     * this function returns a string that will scale the image based on the
     * user's screen resolution, otherwise it will return the unmodified
     * `imageSrc`.
     */
    getCardImage_() {
        if (!this.creditCard.imageSrc) {
            return '';
        }
        return this.creditCard.imageSrc.startsWith('chrome://theme') ?
            getScaledSrcSet(this.creditCard.imageSrc) :
            this.creditCard.imageSrc;
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
customElements.define(SettingsCreditCardListEntryElement.is, SettingsCreditCardListEntryElement);
