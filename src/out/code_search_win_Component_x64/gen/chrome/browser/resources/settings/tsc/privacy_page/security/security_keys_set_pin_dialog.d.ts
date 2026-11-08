/**
 * @fileoverview 'settings-security-keys-set-pin-dialog' is a dialog for
 * setting and changing security key PINs.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '../../i18n_setup.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum SetPinDialogPage {
    INITIAL = "initial",
    NO_PIN_SUPPORT = "noPINSupport",
    REINSERT = "reinsert",
    LOCKED = "locked",
    ERROR = "error",
    PIN_PROMPT = "pinPrompt",
    SUCCESS = "success"
}
export interface SettingsSecurityKeysSetPinDialogElement {
    $: {
        closeButton: CrButtonElement;
        confirmPIN: CrInputElement;
        currentPIN: CrInputElement;
        currentPINEntry: HTMLElement;
        dialog: CrDialogElement;
        error: HTMLElement;
        newPIN: CrInputElement;
        pinSubmit: CrButtonElement;
    };
}
declare const SettingsSecurityKeysSetPinDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsSecurityKeysSetPinDialogElement extends SettingsSecurityKeysSetPinDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the dialog is in a state where the Set PIN button should be
         * enabled.
         */
        setPINButtonValid_: {
            type: BooleanConstructor;
        };
        /**
         * The value of the new PIN textbox.
         */
        newPIN_: {
            type: StringConstructor;
        };
        confirmPIN_: {
            type: StringConstructor;
        };
        currentPIN_: {
            type: StringConstructor;
        };
        /**
         * The minimum length for the currently set PIN.
         */
        currentMinPinLength_: {
            type: NumberConstructor;
        };
        /**
         * The minimum length to set a new PIN.
         */
        newMinPinLength_: {
            type: NumberConstructor;
        };
        /**
         * The number of PIN attempts remaining.
         */
        retries_: {
            type: NumberConstructor;
        };
        /**
         * A CTAP error code when we don't recognise the specific error.
         */
        errorCode_: {
            type: NumberConstructor;
        };
        /**
         * Whether an entry for the current PIN should be displayed. (If no PIN
         * has been set then it won't be shown.)
         */
        showCurrentEntry_: {
            type: BooleanConstructor;
        };
        /**
         * Error string to display under the current PIN entry, or empty.
         */
        currentPINError_: {
            type: StringConstructor;
        };
        /**
         * Error string to display under the new PIN entry, or empty.
         */
        newPINError_: {
            type: StringConstructor;
        };
        /**
         * Error string to display under the confirmation PIN entry, or empty.
         */
        confirmPINError_: {
            type: StringConstructor;
        };
        /**
         * Whether the dialog process has completed, successfully or otherwise.
         */
        complete_: {
            type: BooleanConstructor;
        };
        /**
         * The id of an element on the page that is currently shown.
         */
        shown_: {
            type: StringConstructor;
        };
        /**
         * Whether the contents of the PIN entries are visible, or are displayed
         * like passwords.
         */
        pinsVisible_: {
            type: BooleanConstructor;
        };
        title_: {
            type: StringConstructor;
        };
        newPINDialogDescription_: {
            type: StringConstructor;
        };
    };
    protected accessor setPINButtonValid_: boolean;
    protected accessor newPIN_: string;
    protected accessor confirmPIN_: string;
    protected accessor currentPIN_: string;
    protected accessor currentMinPinLength_: number | undefined;
    protected accessor newMinPinLength_: number | undefined;
    private accessor retries_;
    private accessor errorCode_;
    protected accessor showCurrentEntry_: boolean;
    protected accessor currentPINError_: string;
    protected accessor newPINError_: string;
    protected accessor confirmPINError_: string;
    protected accessor complete_: boolean;
    protected accessor shown_: SetPinDialogPage;
    private accessor pinsVisible_;
    protected accessor title_: string;
    protected accessor newPINDialogDescription_: string;
    private browserProxy_;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onDialogClose_(): void;
    protected onCloseButtonClick_(): void;
    private finish_;
    protected onIronSelect_(e: Event): void;
    protected onCurrentPinValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNewPinValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onConfirmPinValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onCurrentPinInput_(): void;
    protected onNewPinInput_(): void;
    protected onConfirmPinInput_(): void;
    /**
      @param pin A candidate PIN.
      @return An error string or else '' to indicate validity.
    */
    private isValidPin_;
    /**
     * @param retries The number of PIN attempts remaining.
     * @return The message to show under the text box.
     */
    private mismatchError_;
    /**
     * Called to set focus from inside a callback.
     */
    private focusOn_;
    /**
     * Called when the Set PIN button is activated.
     */
    protected onPinSubmitClick_(): void;
    /**
     * onClick handler for the show/hide icon.
     */
    protected onShowPinsClick_(): void;
    /**
     * Helper function to detect when an error string is empty.
     */
    protected isNonEmpty_(s: string): boolean;
    /**
     * Called to set the error string when |errorCode_| is set.
     */
    protected pinFailed_(): string;
    /**
     * @return The class of the Ok / Cancel button.
     */
    protected maybeActionButton_(): string;
    /**
     * @return The label of the Ok / Cancel button.
     */
    protected closeText_(): string;
    private newMinPinLengthChanged_;
    /**
     * @return The class (and thus icon) to be displayed.
     */
    protected showPinsClass_(): string;
    /**
     * @return The tooltip for the icon.
     */
    protected showPinsTitle_(): string;
    /**
     * @return The PIN-input element type.
     */
    protected inputType_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-keys-set-pin-dialog': SettingsSecurityKeysSetPinDialogElement;
    }
}
export type SecurityKeysSetPinDialogElement = SettingsSecurityKeysSetPinDialogElement;
export {};
