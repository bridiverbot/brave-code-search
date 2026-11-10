import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement, nothing } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ChromeSigninInterceptionParameters } from '../dice_web_signin_intercept_browser_proxy.js';
export interface ChromeSigninAppElement {
    $: {
        interceptDialog: HTMLElement;
    };
}
declare const ChromeSigninAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ChromeSigninAppElement extends ChromeSigninAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        interceptionParameters_: {
            type: ObjectConstructor;
        };
    };
    protected accessor interceptionParameters_: ChromeSigninInterceptionParameters;
    private diceWebSigninInterceptBrowserProxy_;
    connectedCallback(): void;
    private setParameters_;
    private onParametersLoaded_;
    protected onCancelClick_(): void;
    protected onAcceptClick_(): void;
    protected getAcceptButtonAriaLabel_(): string | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'chrome-signin-app': ChromeSigninAppElement;
    }
}
export {};
