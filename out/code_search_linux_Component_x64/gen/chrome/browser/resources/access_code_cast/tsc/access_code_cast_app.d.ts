import './passcode_input/passcode_input.js';
import './error_message/error_message.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ErrorMessageElement } from './error_message/error_message.js';
import type { PasscodeInputElement } from './passcode_input/passcode_input.js';
export interface AccessCodeCastAppElement {
    $: {
        backButton: CrButtonElement;
        castButton: CrButtonElement;
        codeInputView: HTMLElement;
        codeInput: PasscodeInputElement;
        dialog: CrDialogElement;
        errorMessage: ErrorMessageElement;
        qrInputView: HTMLElement;
    };
}
declare const AccessCodeCastAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class AccessCodeCastAppElement extends AccessCodeCastAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accessCode: {
            type: StringConstructor;
        };
        canCast: {
            type: BooleanConstructor;
        };
        inputLabel: {
            type: StringConstructor;
        };
        managedFootnote: {
            type: StringConstructor;
        };
        qrScannerEnabled: {
            type: BooleanConstructor;
        };
        rememberDevices: {
            type: BooleanConstructor;
        };
        submitDisabled: {
            type: BooleanConstructor;
        };
    };
    private listenerIds;
    private router;
    private static readonly ACCESS_CODE_LENGTH;
    protected accessor accessCode: string;
    protected accessor canCast: boolean;
    protected accessor inputLabel: string;
    protected accessor managedFootnote: string | undefined;
    protected accessor qrScannerEnabled: boolean;
    protected accessor rememberDevices: boolean;
    private state;
    protected accessor submitDisabled: boolean;
    private inputEnabledStartTime;
    constructor();
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onCancelClick(): void;
    cancelButtonPressed(): void;
    protected onBackClick(): void;
    switchToCodeInput(): void;
    protected onQrInputClick(): void;
    switchToQrInput(): void;
    protected onCastClick(): void;
    addSinkAndCast(): Promise<void>;
    createManagedFootnote(duration: number): Promise<void>;
    setAccessCodeForTest(value: string): void;
    getManagedFootnoteForTest(): string | undefined;
    private afterFailedAddAndCast;
    private setState;
    protected onValueChanged(e: CustomEvent<{
        value: string;
    }>): void;
    private handleEnterPressed;
    private addSink;
    private cast;
    private makeFootnote;
}
declare global {
    interface HTMLElementTagNameMap {
        'access-code-cast-app': AccessCodeCastAppElement;
    }
}
export {};
