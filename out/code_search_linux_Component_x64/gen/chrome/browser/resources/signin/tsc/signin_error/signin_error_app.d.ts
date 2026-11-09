import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SigninErrorAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SigninErrorAppElement extends SigninErrorAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        switchButtonUnavailable_: {
            type: BooleanConstructor;
        };
        hideNormalError_: {
            type: BooleanConstructor;
        };
    };
    protected accessor switchButtonUnavailable_: boolean;
    protected accessor hideNormalError_: boolean;
    constructor();
    connectedCallback(): void;
    protected onConfirmClick_(): void;
    protected onSwitchToExistingProfileClick_(): void;
    protected onLearnMoreClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'signin-error-app': SigninErrorAppElement;
    }
}
export {};
