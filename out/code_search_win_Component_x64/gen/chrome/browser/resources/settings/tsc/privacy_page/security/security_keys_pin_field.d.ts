/**
 * @fileoverview 'settings-security-keys-pin-field' is a component for entering
 * a security key PIN.
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../../i18n_setup.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * A function that submits a PIN to a security key. It returns a Promise which
 * resolves with null if the PIN was correct, or with the number of retries
 * remaining otherwise.
 */
type PinFieldSubmitFunc = (pin: string) => Promise<number | null>;
export interface SettingsSecurityKeysPinFieldElement {
    $: {
        pin: CrInputElement;
    };
}
declare const SettingsSecurityKeysPinFieldElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsSecurityKeysPinFieldElement extends SettingsSecurityKeysPinFieldElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        minPinLength: {
            type: NumberConstructor;
        };
        error_: {
            type: StringConstructor;
        };
        value_: {
            type: StringConstructor;
        };
        inputVisible_: {
            type: BooleanConstructor;
        };
    };
    accessor minPinLength: number;
    protected accessor error_: string;
    protected accessor value_: string;
    protected accessor inputVisible_: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    /** Focuses the PIN input field. */
    focus(): void;
    /**
     * Validates the PIN and sets the validation error if it is not valid.
     * @return True iff the PIN is valid.
     */
    private validate_;
    /**
     * Attempts submission of the PIN by invoking |submitFunc|. Updates the UI
     * to show an error if the PIN was incorrect.
     * @return A Promise that resolves if the PIN was correct, else rejects.
     */
    trySubmit(submitFunc: PinFieldSubmitFunc): Promise<void>;
    /**
     * Sets the validation error to indicate the PIN was incorrect.
     * @param retries The number of retries remaining.
     */
    private showIncorrectPinError_;
    protected onPinValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onPinInput_(): void;
    /**
     * Helper function to detect when an error string is empty.
     * @return True iff |s| is non-empty.
     */
    protected isNonEmpty_(): boolean;
    /**
     * @return The PIN-input element type.
     */
    protected inputType_(): string;
    /**
     * @return The class (and thus icon) to be displayed.
     */
    protected showButtonClass_(): string;
    /**
     * @return The tooltip for the icon.
     */
    protected showButtonTitle_(): string;
    /**
     * onClick handler for the show/hide icon.
     */
    protected onShowButtonClick_(): void;
    /**
     * @param pin A candidate PIN.
     * @return An error string or else '' to indicate validity.
     */
    private isValidPin_;
    private errorChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-keys-pin-field': SettingsSecurityKeysPinFieldElement;
    }
}
export type SecurityKeysPinFieldElement = SettingsSecurityKeysPinFieldElement;
export {};
