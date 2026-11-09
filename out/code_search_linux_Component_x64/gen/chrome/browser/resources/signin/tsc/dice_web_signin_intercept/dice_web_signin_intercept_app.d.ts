import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { InterceptionParameters } from './dice_web_signin_intercept_browser_proxy.js';
declare const DiceWebSigninInterceptAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface DiceWebSigninInterceptAppElement {
    $: {
        interceptDialog: HTMLElement;
        cancelButton: CrButtonElement;
        acceptButton: CrButtonElement;
    };
}
export declare class DiceWebSigninInterceptAppElement extends DiceWebSigninInterceptAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        interceptionParameters_: {
            type: ObjectConstructor;
        };
        acceptButtonClicked_: {
            type: BooleanConstructor;
        };
    };
    protected accessor interceptionParameters_: InterceptionParameters;
    protected accessor acceptButtonClicked_: boolean;
    private diceWebSigninInterceptBrowserProxy_;
    connectedCallback(): void;
    private onPageLoaded_;
    protected onAcceptClick_(): void;
    protected onCancelClick_(): void;
    /** Called when the interception parameters are updated. */
    private handleParametersChanged_;
    protected sanitizeInnerHtml_(text: string): TrustedHTML;
}
declare global {
    interface HTMLElementTagNameMap {
        'dice-web-signin-intercept-app': DiceWebSigninInterceptAppElement;
    }
}
export {};
