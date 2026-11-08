/**
 * @fileoverview 'address-edit-dialog' is the dialog that allows editing a saved
 * address.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import * as uiComponents from './address_edit_dialog_components.js';
export interface SettingsAddressEditDialogElement {
    $: {
        accountRecordTypeNotice: HTMLElement;
        cancelButton: CrButtonElement;
        country: HTMLSelectElement;
        dialog: CrDialogElement;
        saveButton: CrButtonElement;
    };
}
type CountryEntry = chrome.autofillPrivate.CountryEntry;
type AddressEntry = chrome.autofillPrivate.AddressEntry;
type AccountInfo = chrome.autofillPrivate.AccountInfo;
declare const SettingsAddressEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsAddressEditDialogElement extends SettingsAddressEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        address: {
            type: ObjectConstructor;
        };
        accountInfo: {
            type: ObjectConstructor;
        };
        title_: {
            type: StringConstructor;
        };
        validationError_: {
            type: StringConstructor;
        };
        countries_: {
            type: ArrayConstructor;
        };
        /**
         * Updates the address wrapper.
         */
        countryCode_: {
            type: StringConstructor;
        };
        components_: {
            type: ArrayConstructor;
        };
        canSave_: {
            type: BooleanConstructor;
        };
        isAccountAddress_: {
            type: BooleanConstructor;
        };
        accountAddressRecordTypeNotice_: {
            type: StringConstructor;
        };
    };
    accessor address: AddressEntry;
    accessor accountInfo: AccountInfo | undefined;
    /**
     * Original address is a snapshot of the address made at initialization,
     * it is a referce for soft (or "dont make it worse") validation, which
     * basically means skipping validation for fields that are already invalid.
     */
    protected accessor title_: string;
    protected accessor validationError_: string | undefined;
    protected accessor countries_: CountryEntry[];
    protected accessor countryCode_: string;
    protected accessor components_: uiComponents.AddressComponentUi[][];
    protected accessor canSave_: boolean;
    protected accessor isAccountAddress_: boolean;
    protected accessor accountAddressRecordTypeNotice_: string;
    private addressFields_;
    private originalAddressFields_?;
    private countryDetailManager_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Updates the wrapper that represents this address in the country's format.
     */
    private updateAddressComponents_;
    /**
     * Determines whether component with specified validation property
     * should be rendered as invalid in the template.
     */
    protected isVisuallyInvalid_(isValidatable: boolean, isValid: boolean): boolean;
    /**
     * Makes component's potentially invalid state visible, it makes
     * the component validatable and notifies the template engine.
     * The component is addressed by row/col to leverage notifications.
     */
    private notifyComponentValidity_;
    /**
     * Notifies all components validity (see notifyComponentValidity_()).
     */
    private notifyValidity_;
    private updateCanSave_;
    protected onValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected getCode_(country: CountryEntry): string;
    protected getName_(country: CountryEntry): string;
    protected isDivision_(country: CountryEntry): boolean;
    protected getPhoneNumberInputClass_(fieldType: chrome.autofillPrivate.FieldType): string;
    private isAddressStoredInAccount_;
    private getAccountAddressRecordTypeNotice_;
    /**
     * Tells whether at least one address component (except country)
     * has a non empty value.
     */
    private hasAnyValue_;
    /**
     * Tells whether at least one address component (except country) is not valid.
     */
    private hasInvalidComponent_;
    /**
     * Counts how many invalid address componets (except country) are in the form.
     */
    private countInvalidComponent_;
    /**
     * Tells whether at least one address component (except country)
     * is not valid and is not validatable also, i.e. its invalid state is
     * not visible to the user.
     */
    private hasUncoveredInvalidComponent_;
    protected onCancelClick_(): void;
    /**
     * Handler for tapping the save button.
     */
    protected onSaveButtonClick_(): void;
    private onCountryCodeChanged_;
    /**
     * Syncs the country code back to the address and rebuilds the address
     * components for the new location.
     */
    protected onCountryCodeSelectChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-address-edit-dialog': SettingsAddressEditDialogElement;
    }
}
export {};
