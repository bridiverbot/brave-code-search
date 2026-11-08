import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SubmitButtonIconType } from './common.js';
declare const ComposeboxSubmitElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ComposeboxSubmitElement {
    $: {
        submitContainer: HTMLElement;
        submitIcon: CrIconButtonElement;
    };
}
export declare class ComposeboxSubmitElement extends ComposeboxSubmitElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        iconType: {
            type: StringConstructor;
        };
        submitButtonTitle: {
            type: StringConstructor;
        };
    };
    accessor disabled: boolean;
    accessor iconType: SubmitButtonIconType;
    accessor submitButtonTitle: string;
    protected submitButtonIconClass_(): string;
    protected onSubmitClick_(e: MouseEvent): void;
    protected onSubmitFocusin_(e: FocusEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-submit': ComposeboxSubmitElement;
    }
}
export {};
