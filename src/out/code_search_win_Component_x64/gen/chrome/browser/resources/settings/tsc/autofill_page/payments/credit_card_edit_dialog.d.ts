/**
 * @fileoverview 'settings-credit-card-edit-dialog' is the dialog that allows
 * editing or creating a credit card entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare global {
    interface HTMLElementEventMap {
        'save-credit-card': CustomEvent<chrome.autofillPrivate.CreditCardEntry>;
    }
}
export interface SettingsCreditCardEditDialogElement {
    $: {
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        expiredError: HTMLElement;
        month: HTMLSelectElement;
        nameInput: CrInputElement;
        nicknameInput: CrInputElement;
        numberInput: CrInputElement;
        saveButton: CrButtonElement;
        year: HTMLSelectElement;
    };
}
declare const SettingsCreditCardEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsCreditCardEditDialogElement extends SettingsCreditCardEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        cvcStoragePref_: {
            type: ObjectConstructor;
        };
        /**
         * The underlying credit card object for the dialog. After initialization
         * of the dialog, this object is only modified once the 'Save' button is
         * clicked.
         */
        creditCard: {
            type: ObjectConstructor;
        };
        /**
         * The actual title that's used for this dialog. Will be context sensitive
         * based on if |creditCard| is being created or edited.
         */
        title_: {
            type: StringConstructor;
        };
        /**
         * The list of months to show in the dropdown.
         */
        monthList_: {
            type: ArrayConstructor;
        };
        /** The list of years to show in the dropdown. */
        yearList_: {
            type: ArrayConstructor;
        };
        /**
         * Backing data for inputs in the dialog, each bound to the corresponding
         * HTML elements.
         *
         * Note that rawCardNumber_ is unsanitized; code should instead use
         * `sanitizedCardNumber_`.
         */
        name_: {
            type: StringConstructor;
        };
        rawCardNumber_: {
            type: StringConstructor;
        };
        cvc_: {
            type: StringConstructor;
        };
        nickname_: {
            type: StringConstructor;
        };
        expirationYear_: {
            type: StringConstructor;
        };
        expirationMonth_: {
            type: StringConstructor;
        };
        /**
         * A sanitized version of `rawCardNumber_` that strips out commonly used
         * separators and trims whitespace.
         */
        sanitizedCardNumber_: {
            type: StringConstructor;
        };
        /** Whether the current nickname input is invalid. */
        nicknameInvalid_: {
            type: BooleanConstructor;
        };
        /** Whether the current card number field is invalid. */
        cardNumberValidationState_: {
            type: StringConstructor;
        };
        /**
         * Computed property that tracks if the entered credit card is expired -
         * that is, if its expiration month and year are in the past.
         */
        expired_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Checks if CVC storage is available based on the feature flag.
         */
        cvcStorageAvailable_: {
            type: BooleanConstructor;
        };
    };
    private accessor cvcStoragePref_;
    accessor creditCard: chrome.autofillPrivate.CreditCardEntry;
    protected accessor title_: string;
    protected accessor monthList_: string[];
    protected accessor yearList_: string[];
    protected accessor name_: string;
    protected accessor rawCardNumber_: string;
    protected accessor cvc_: string;
    protected accessor nickname_: string;
    protected accessor expirationYear_: string;
    protected accessor expirationMonth_: string;
    private accessor sanitizedCardNumber_;
    protected accessor nicknameInvalid_: boolean;
    private accessor cardNumberValidationState_;
    private accessor expired_;
    private accessor cvcStorageAvailable_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Closes the dialog. */
    close(): void;
    protected onRawCardNumberValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onCvcValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNicknameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Handler for tapping the 'cancel' button. Should just dismiss the dialog.
     */
    protected onCancelButtonClick_(): void;
    /**
     * Handler for tapping the save button.
     */
    protected onSaveButtonClick_(): void;
    private onSanitizedCardNumberChanged_;
    protected onNumberInputBlur_(event: Event): void;
    protected showErrorForCardNumber_(): boolean;
    protected onMonthChange_(): void;
    protected onYearChange_(): void;
    /**
     * Handles a11y error announcement the same way as in cr-input.
     */
    private onExpiredChanged_;
    /**
     * @return 'true' or 'false' for the aria-invalid attribute
     *     of expiration selectors.
     */
    protected getExpirationAriaInvalid_(): string;
    protected checkIfCvcStorageIsAvailable_(): boolean;
    protected getCvcImageSource_(): string;
    protected getCvcImageTooltip_(): string;
    protected saveEnabled_(): boolean;
    /**
     * @return True iff the provided expiration date is passed.
     */
    private computeExpired_;
    /**
     * Trim credit card's name, cardNumber and nickname if exist.
     */
    private trimCreditCard_;
    private isCardAmex_;
    /**
     * Sanitize the raw card number entered by the user, trimming whitespace and
     * removing commonly used separators.
     */
    private sanitizeCardNumber_;
    /**
     * Compute whether or not the provided card number is valid, i.e. that it is a
     * number and passes a Luhn check. If the card number isn't complete yet, it
     * is still considered invalid but no error will be shown.
     */
    private computeCardNumberValidationState_;
    /**
     * Validates if a given card number passes a Luhn check.
     *
     * http://en.wikipedia.org/wiki/Luhn_algorithm
     */
    private passesLuhnCheck_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-credit-card-edit-dialog': SettingsCreditCardEditDialogElement;
    }
}
export {};
