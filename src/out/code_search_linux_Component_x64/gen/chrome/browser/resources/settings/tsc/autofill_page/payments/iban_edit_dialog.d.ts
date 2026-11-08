/**
 * @fileoverview 'settings-iban-edit-dialog' is the dialog that allows
 * editing or creating an IBAN entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '../../i18n_setup.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare global {
    interface HTMLElementEventMap {
        'save-iban': CustomEvent<chrome.autofillPrivate.IbanEntry>;
    }
}
export interface SettingsIbanEditDialogElement {
    $: {
        dialog: CrDialogElement;
        valueInput: CrInputElement;
        nicknameInput: CrInputElement;
        cancelButton: CrButtonElement;
        saveButton: CrButtonElement;
    };
}
declare const SettingsIbanEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsIbanEditDialogElement extends SettingsIbanEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The IBAN being added or edited. Null means add a new IBAN, otherwise,
         * edit the existing IBAN.
         */
        iban: {
            type: ObjectConstructor;
        };
        /**
         * The actual title that's used for this dialog. Will be context sensitive
         * based on which type of IBAN method is being viewed, and if it is being
         * created or edited.
         */
        title_: {
            type: StringConstructor;
        };
        /**
         * Backing data for inputs in the dialog, each bound to the corresponding
         * HTML elements.
         *
         * Note that value_ is unsanitized; code should instead use
         * `sanitizedIban_`.
         */
        value_: {
            type: StringConstructor;
        };
        nickname_: {
            type: StringConstructor;
        };
        /**
         * A sanitized version of `value_` with whitespace trimmed.
         */
        sanitizedIban_: {
            type: StringConstructor;
        };
        /** Whether the current iban field is invalid. */
        ibanValidationState_: {
            type: StringConstructor;
        };
    };
    accessor iban: chrome.autofillPrivate.IbanEntry | null;
    protected accessor title_: string;
    protected accessor value_: string;
    protected accessor nickname_: string;
    private accessor sanitizedIban_;
    private accessor ibanValidationState_;
    private paymentsManager_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /** Closes the dialog. */
    close(): void;
    protected onValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onNicknameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Handler for clicking the 'cancel' button. Should just dismiss the dialog.
     */
    protected onCancelButtonClick_(): void;
    /**
     * Handler for clicking the save button.
     */
    protected onIbanSaveButtonClick_(): void;
    private onSanitizedIbanChanged_;
    protected onIbanInputBlur_(event: Event): Promise<void>;
    protected isIbanValid_(): boolean;
    protected showErrorForIban_(): boolean;
    private sanitizeIban_;
    private computeIbanValidationState_;
    private isValidIban;
    /**
     * @return nickname character length.
     */
    protected computeNicknameCharCount_(): number;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-iban-edit-dialog': SettingsIbanEditDialogElement;
    }
}
export {};
