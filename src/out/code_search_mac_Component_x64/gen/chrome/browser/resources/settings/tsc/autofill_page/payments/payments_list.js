// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'payments-list' is a list of saved payment methods (credit
 * cards etc.) to be shown in the settings page.
 */
import './credit_card_list_entry.js';
import './iban_list_entry.js';
import './pay_over_time_issuer_list_entry.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getCss } from './payments_list.css.js';
import { getHtml } from './payments_list.html.js';
export class SettingsPaymentsListElement extends CrLitElement {
    static get is() {
        return 'settings-payments-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * An array of all saved credit cards.
             */
            creditCards: { type: Array },
            /**
             * An array of all saved IBANs.
             */
            ibans: { type: Array },
            /**
             * An array of all saved Pay Over Time issuers.
             */
            payOverTimeIssuers: { type: Array },
            /**
             * True if displaying IBANs in settings is enabled.
             */
            enableIbans_: { type: Boolean },
            /**
             * True if displaying Pay Over Time in settings is enabled.
             */
            enablePayOverTime_: { type: Boolean },
        };
    }
    #creditCards_accessor_storage = [];
    get creditCards() { return this.#creditCards_accessor_storage; }
    set creditCards(value) { this.#creditCards_accessor_storage = value; }
    #ibans_accessor_storage = [];
    get ibans() { return this.#ibans_accessor_storage; }
    set ibans(value) { this.#ibans_accessor_storage = value; }
    #payOverTimeIssuers_accessor_storage = [];
    get payOverTimeIssuers() { return this.#payOverTimeIssuers_accessor_storage; }
    set payOverTimeIssuers(value) { this.#payOverTimeIssuers_accessor_storage = value; }
    #enableIbans__accessor_storage = loadTimeData.getBoolean('showIbansSettings');
    get enableIbans_() { return this.#enableIbans__accessor_storage; }
    set enableIbans_(value) { this.#enableIbans__accessor_storage = value; }
    #enablePayOverTime__accessor_storage = loadTimeData.getBoolean('shouldShowPayOverTimeSettings');
    get enablePayOverTime_() { return this.#enablePayOverTime__accessor_storage; }
    set enablePayOverTime_(value) { this.#enablePayOverTime__accessor_storage = value; }
    /**
     * Focuses the next most appropriate element after removing a specific
     * credit card. Returns `false` if it could not find such an element,
     * in this case the focus is supposed to be handled by someone else.
     */
    updateFocusBeforeCreditCardRemoval(cardIndex) {
        // The focused element is to be reset only if the last element is deleted,
        // when the number of "dom-repeat" nodes changes and the focus get lost.
        if (cardIndex === this.creditCards.length - 1) {
            return this.updateFocusBeforeRemoval_(this.getCreditCardId_(cardIndex));
        }
        else {
            return true;
        }
    }
    /**
     * Focuses the next most appropriate element after removing a specific
     * iban. Returns `false` if it could not find such an element,
     * in this case the focus is supposed to be handled by someone else.
     */
    updateFocusBeforeIbanRemoval(ibanIndex) {
        // The focused element is to be reset only if the last element is deleted,
        // when the number of "dom-repeat" nodes changes and the focus get lost.
        if (ibanIndex === this.ibans.length - 1) {
            return this.updateFocusBeforeRemoval_(this.getIbanId_(ibanIndex));
        }
        else {
            return true;
        }
    }
    /**
     * Handles focus resetting across all payment method lists. Returns `false`
     * only when the last payment method is removed, in other cases sets the focus
     * to either the next or previous payment method.
     */
    updateFocusBeforeRemoval_(id) {
        const paymentMethods = this.shadowRoot.querySelectorAll('.payment-method');
        if (paymentMethods.length <= 1) {
            return false;
        }
        const index = [...paymentMethods].findIndex((element) => element.id === id);
        const isLastItem = index === paymentMethods.length - 1;
        const indexToFocus = index + (isLastItem ? -1 : 1);
        const menu = paymentMethods[indexToFocus].dotsMenu;
        if (menu) {
            focusWithoutInk(menu);
            return true;
        }
        return false;
    }
    getCreditCardId_(index) {
        return `card-${index}`;
    }
    getIbanId_(index) {
        return `iban-${index}`;
    }
    /**
     * @return true iff any payment methods will be shown.
     */
    showAnyPaymentMethods_() {
        return this.creditCards.length > 0 ||
            (this.enableIbans_ && this.ibans.length > 0) ||
            (this.enablePayOverTime_ && this.payOverTimeIssuers.length > 0);
    }
}
customElements.define(SettingsPaymentsListElement.is, SettingsPaymentsListElement);
