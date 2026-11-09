import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '../settings_shared.css.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface RequestBridgesDialog {
    $: {
        dialog: CrDialogElement;
    };
}
declare const RequestBridgesDialogBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class RequestBridgesDialog extends RequestBridgesDialogBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        status_: StringConstructor;
        captcha_: StringConstructor;
        captchaResolve_: StringConstructor;
        renewDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        submitDisabled_: {
            type: BooleanConstructor;
            value: boolean;
            computed: string;
        };
        bridges_: ArrayConstructor;
    };
    private status_;
    private captcha_;
    private captchaResolve_;
    private renewDisabled_;
    private submitDisabled_;
    bridges_: Object[];
    private browserProxy_;
    ready(): void;
    private submitClicked_;
    private cancelClicked_;
    private requestCaptcha_;
    private computeSubmitDisabled_;
}
declare global {
    interface HTMLElementTagNameMap {
        'request-bridges-dialog': RequestBridgesDialog;
    }
}
export {};
