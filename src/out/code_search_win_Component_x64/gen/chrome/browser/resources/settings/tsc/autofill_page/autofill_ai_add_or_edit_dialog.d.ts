/**
 * @fileoverview 'settings-autofill-ai-add-or-edit-dialog' is the dialog that
 * allows adding and editing entity instances for Autofill AI.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type AttributeInstance = chrome.autofillPrivate.AttributeInstance;
type AttributeTypeDataType = chrome.autofillPrivate.AttributeTypeDataType;
type CountryEntry = chrome.autofillPrivate.CountryEntry;
type EntityInstance = chrome.autofillPrivate.EntityInstance;
type UpsertPassDetails = chrome.autofillPrivate.UpsertPassDetails;
export interface SettingsAutofillAiAddOrEditDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SettingsAutofillAiAddOrEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsAutofillAiAddOrEditDialogElement extends SettingsAutofillAiAddOrEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
           The entity instance to be modified. If this is an "add" dialog, the
           entity instance has only a type, but no attribute instances or guid.
         */
        entityInstance: {
            type: ObjectConstructor;
        };
        dialogTitle: {
            type: StringConstructor;
        };
        /**
           Complete list of attribute instances that are associated with the
           current entity instance. If this is an "edit" dialog, some attribute
           instances are populated with their already existing values.
         */
        completeAttributeInstanceList_: {
            type: ArrayConstructor;
        };
        /**
           The list of all countries that should be displayed in a <select>
           element for a country field.
         */
        countryList_: {
            type: ArrayConstructor;
        };
        /**
           Complete list of attribute types that are associated with the
           current entity type.
         */
        completeAttributeTypesList_: {
            type: ArrayConstructor;
        };
        /**
         *  User email associated with the account.
         */
        userEmail_: {
            type: StringConstructor;
        };
        /**
         * Footer text shown in the view, represented as a TrustedHTML object,
         * since the footer text can contain a link. If the object represents an
         * empty TrustedHTML, no footer text is shown.
         */
        footerText_: {
            type: StringConstructor;
        };
        /**
         * Details for upserting a public pass, including legal message lines and
         * context token.
         */
        upsertPassDetails: {
            type: ObjectConstructor;
        };
        /**
           True if all fields are empty. The first validation occurs when the user
           clicks the "Save" button for the first time. Subsequent validations
           occur any time an input field is changed. If true, the "Save" button
           is disabled and an error message is displayed.
         */
        allFieldsAreEmpty_: {
            type: BooleanConstructor;
        };
        /**
           False if the form is invalid. The first validation occurs when the user
           clicks the "Save" button for the first time. Subsequent validations
           occur any time an input field is changed. If false, the "Save" button
           is disabled and an error message is displayed.
         */
        canSave_: {
            type: BooleanConstructor;
        };
        userClickedSaveButton_: {
            type: BooleanConstructor;
        };
        /**
           Holds the error to display (or empty string if valid).
         */
        validationError_: {
            type: StringConstructor;
        };
        months_: {
            type: ArrayConstructor;
        };
        days_: {
            type: ArrayConstructor;
        };
        years_: {
            type: ArrayConstructor;
        };
        enableSavePrivatePassesToWallet_: {
            type: BooleanConstructor;
        };
        isWalletPassBranding2026Enabled_: {
            type: BooleanConstructor;
        };
        /**
         * True while waiting for the backend to respond from Wallet API call.
         */
        saveInProgress_: {
            type: BooleanConstructor;
        };
    };
    accessor entityInstance: EntityInstance | null;
    accessor dialogTitle: string;
    accessor upsertPassDetails: UpsertPassDetails | null;
    protected accessor completeAttributeInstanceList_: AttributeInstance[];
    protected accessor countryList_: CountryEntry[];
    private accessor completeAttributeTypesList_;
    private accessor allFieldsAreEmpty_;
    protected accessor canSave_: boolean;
    private accessor userClickedSaveButton_;
    protected accessor validationError_: string;
    protected accessor months_: string[];
    protected accessor days_: string[];
    protected accessor years_: string[];
    private accessor userEmail_;
    protected accessor footerText_: TrustedHTML;
    private accessor enableSavePrivatePassesToWallet_;
    protected accessor isWalletPassBranding2026Enabled_: boolean;
    protected accessor saveInProgress_: boolean;
    private requiredAttributeTypes_;
    private entityDataManager_;
    private countryDetailManager_;
    constructor();
    connectedCallback(): Promise<void>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private checkRequiredFields_;
    private computeCompleteAttributeInstanceList_;
    private convertCountryAttributeInstance_;
    protected isDataType_(attributeInstance: AttributeInstance, dataType: AttributeTypeDataType): boolean;
    protected getCountryCode_(country: CountryEntry): string;
    protected isCountrySeparator_(country: CountryEntry): boolean;
    protected getCountryName_(country: CountryEntry): string;
    protected getMonthName_(month: string): string;
    protected isCountrySelected_(attributeInstance: AttributeInstance, country: CountryEntry): boolean;
    protected isMonthSelected_(attributeInstance: AttributeInstance, month: string): boolean;
    protected isDaySelected_(attributeInstance: AttributeInstance, day: string): boolean;
    protected isYearSelected_(attributeInstance: AttributeInstance, year: string): boolean;
    protected onCountrySelectChange_(e: Event): void;
    protected onMonthSelectChange_(e: Event): void;
    protected onDaySelectChange_(e: Event): void;
    protected onYearSelectChange_(e: Event): void;
    protected onAttributeInstanceFieldValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Returns '*' if the field is required.
     */
    protected getRequiredIndicator_(attributeInstance: AttributeInstance): string;
    /**
     * Computes the label for cr-input fields.
     * Appends '*' to the label text if required.
     */
    protected computeInputLabel_(attributeInstance: AttributeInstance): string;
    private walletManageYourInfoUrl_;
    protected shouldHideFooterText_(): boolean;
    private isPublicPass_;
    private computeFooterText_;
    private formatLegalMessageLines_;
    protected isExistingYearOutOfBounds_(attributeInstance: AttributeInstance): boolean;
    protected getExistingYear_(attributeInstance: AttributeInstance): string;
    /**
     * This function returns a string that can be used in a srcset to scale
     * the provided `url` based on the user's screen resolution.
     */
    protected getScaledSrcSet_(url: string): string;
    /**
     * Returns true if the date is invalid. A date is invalid either if it is
     * incomplete (i.e. only some of the month, day, year selectors are empty), or
     * if the combination of month, day, year is invalid (i.e. 30th of February
     * 2020 is invalid).
     * Returns false if month, day, year are all empty, or if the combination of
     * month, day, year is complete and valid.
     * The first validation occurs when the user clicks the "Save" button for the
     * first time. Subsequent validations occur any time a field is changed.
     */
    protected isDateInvalid_(attributeInstance: AttributeInstance): boolean;
    /**
     * Returns true if the field should be highlighted as invalid due to
     * missing requirements.
     */
    protected isFieldInvalid_(attributeInstance: AttributeInstance): boolean;
    protected shouldShowWalletBranding_(): boolean;
    protected shouldShowStandaloneWalletIcon_(): boolean;
    /**
     * Returns true if the value is not empty and it is not made out only of
     * whitespaces.
     * For dates, at least one of month, day and year has to be not empty. An
     * incomplete date is not an empty field.
     */
    private isAttributeInstanceNotEmpty;
    protected onAttributeInstanceFieldInput_(_e: Event): void;
    private validateForm_;
    /**
     * Helper to determine if the spinner should be visible.
     */
    protected shouldShowSpinner_(): boolean;
    protected onCancelClick_(): void;
    protected onDialogCancel_(e: Event): void;
    protected onConfirmClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-autofill-ai-add-or-edit-dialog': SettingsAutofillAiAddOrEditDialogElement;
    }
}
export {};
