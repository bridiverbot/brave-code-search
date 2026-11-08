import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const CrossDeviceSigninQrBubbleAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CrossDeviceSigninQrBubbleAppElement extends CrossDeviceSigninQrBubbleAppElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fullName: {
            type: StringConstructor;
        };
        email: {
            type: StringConstructor;
        };
        qrCodeDataUri: {
            type: StringConstructor;
        };
    };
    protected accessor fullName: string;
    protected accessor email: string;
    protected accessor qrCodeDataUri: string;
    private handler_;
    connectedCallback(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cross-device-signin-qr-bubble-app': CrossDeviceSigninQrBubbleAppElement;
    }
}
export {};
