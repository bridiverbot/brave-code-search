/**
 * @fileoverview 'settings-security-keys-reset-dialog' is a dialog for
 * triggering factory resets of security keys.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '../../i18n_setup.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum ResetDialogPage {
    INITIAL = "initial",
    NO_RESET = "noReset",
    RESET_FAILED = "resetFailed",
    RESET_CONFIRM = "resetConfirm",
    RESET_SUCCESS = "resetSuccess",
    RESET_NOT_ALLOWED = "resetNotAllowed"
}
export interface SettingsSecurityKeysResetDialogElement {
    $: {
        button: CrButtonElement;
        dialog: CrDialogElement;
        resetFailed: HTMLElement;
    };
}
declare const SettingsSecurityKeysResetDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SettingsSecurityKeysResetDialogElement extends SettingsSecurityKeysResetDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * A CTAP error code for when the specific error was not recognised.
         */
        errorCode_: {
            type: NumberConstructor;
        };
        /**
         * True iff the process has completed, successfully or otherwise.
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
        title_: {
            type: StringConstructor;
        };
    };
    protected accessor errorCode_: number | null;
    protected accessor complete_: boolean;
    protected accessor shown_: ResetDialogPage;
    protected accessor title_: string;
    private browserProxy_;
    connectedCallback(): void;
    protected onDialogClose_(): void;
    protected onButtonClick_(): void;
    private closeDialog_;
    private finish_;
    protected onIronSelect_(e: Event): void;
    /**
     * @return Contents of the error string that may be displayed to the user.
     */
    protected resetFailed_(): string;
    /**
     * @return The label of the dialog button.
     */
    protected closeText_(): string;
    /**
     * @return The class of the dialog button.
     */
    protected maybeActionButton_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-security-keys-reset-dialog': SettingsSecurityKeysResetDialogElement;
    }
}
export type SecurityKeysResetDialogElement = SettingsSecurityKeysResetDialogElement;
export {};
