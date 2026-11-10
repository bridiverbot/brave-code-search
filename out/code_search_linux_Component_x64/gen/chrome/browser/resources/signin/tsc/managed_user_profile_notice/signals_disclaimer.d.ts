import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SignalsDisclaimerElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SignalsDisclaimerElement extends SignalsDisclaimerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pictureUrl: {
            type: StringConstructor;
        };
        isModalDialog: {
            type: BooleanConstructor;
        };
    };
    accessor pictureUrl: string;
    accessor isModalDialog: boolean;
    firstUpdated(): void;
    protected onLearnMoreClick(): void;
    protected onLearnMoreKeydown(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'signals-disclaimer': SignalsDisclaimerElement;
    }
}
export {};
