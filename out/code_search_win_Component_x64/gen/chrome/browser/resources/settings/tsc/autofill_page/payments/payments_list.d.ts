/**
 * @fileoverview 'payments-list' is a list of saved payment methods (credit
 * cards etc.) to be shown in the settings page.
 */
import './credit_card_list_entry.js';
import './iban_list_entry.js';
import './pay_over_time_issuer_list_entry.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class SettingsPaymentsListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * An array of all saved credit cards.
         */
        creditCards: {
            type: ArrayConstructor;
        };
        /**
         * An array of all saved IBANs.
         */
        ibans: {
            type: ArrayConstructor;
        };
        /**
         * An array of all saved Pay Over Time issuers.
         */
        payOverTimeIssuers: {
            type: ArrayConstructor;
        };
        /**
         * True if displaying IBANs in settings is enabled.
         */
        enableIbans_: {
            type: BooleanConstructor;
        };
        /**
         * True if displaying Pay Over Time in settings is enabled.
         */
        enablePayOverTime_: {
            type: BooleanConstructor;
        };
    };
    accessor creditCards: chrome.autofillPrivate.CreditCardEntry[];
    accessor ibans: chrome.autofillPrivate.IbanEntry[];
    accessor payOverTimeIssuers: chrome.autofillPrivate.PayOverTimeIssuerEntry[];
    private accessor enableIbans_;
    private accessor enablePayOverTime_;
    /**
     * Focuses the next most appropriate element after removing a specific
     * credit card. Returns `false` if it could not find such an element,
     * in this case the focus is supposed to be handled by someone else.
     */
    updateFocusBeforeCreditCardRemoval(cardIndex: number): boolean;
    /**
     * Focuses the next most appropriate element after removing a specific
     * iban. Returns `false` if it could not find such an element,
     * in this case the focus is supposed to be handled by someone else.
     */
    updateFocusBeforeIbanRemoval(ibanIndex: number): boolean;
    /**
     * Handles focus resetting across all payment method lists. Returns `false`
     * only when the last payment method is removed, in other cases sets the focus
     * to either the next or previous payment method.
     */
    private updateFocusBeforeRemoval_;
    protected getCreditCardId_(index: number): string;
    protected getIbanId_(index: number): string;
    /**
     * @return true iff any payment methods will be shown.
     */
    protected showAnyPaymentMethods_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-payments-list': SettingsPaymentsListElement;
    }
}
