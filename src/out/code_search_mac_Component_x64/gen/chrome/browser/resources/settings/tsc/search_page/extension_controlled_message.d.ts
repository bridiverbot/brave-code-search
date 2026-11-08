import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const ExtensionControlledMessageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionControlledMessageElement extends ExtensionControlledMessageElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionName: {
            type: StringConstructor;
        };
        extensionId: {
            type: StringConstructor;
        };
        extensionCanBeDisabled: {
            type: BooleanConstructor;
        };
    };
    accessor extensionName: string;
    accessor extensionCanBeDisabled: boolean;
    accessor extensionId: string;
    protected getDisclaimerHtml_(): TrustedHTML;
    protected onDisclaimerClick_(e: Event): void;
    private onManageClick_;
    private onDisableClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'extension-controlled-message': ExtensionControlledMessageElement;
    }
}
export {};
