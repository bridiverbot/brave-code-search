import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface SigninErrorDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SigninErrorDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SigninErrorDialogElement extends SigninErrorDialogElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        signinErrorDialogTitle_: {
            type: StringConstructor;
        };
        signinErrorDialogBody_: {
            type: StringConstructor;
        };
        shouldShowSigninButton_: {
            type: BooleanConstructor;
        };
    };
    protected accessor signinErrorDialogTitle_: string;
    protected accessor signinErrorDialogBody_: string;
    protected accessor shouldShowSigninButton_: boolean;
    private forceSigninErrorProfilePath_;
    private manageProfilesBrowserProxy_;
    connectedCallback(): void;
    show(title: string, body: string, profilePath: string): void;
    protected onOkButtonClick_(): void;
    protected onReauthClick_(): void;
    private clearErrorDialogInfo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'signin-error-dialog': SigninErrorDialogElement;
    }
}
export {};
