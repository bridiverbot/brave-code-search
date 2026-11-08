import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAttributes, TextStyles } from '../constants.js';
import { TextStyle } from '../constants.js';
declare const TextStylesSelectorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("./ink_text_observer_mixin.js").InkTextObserverMixinInterface);
export declare class TextStylesSelectorElement extends TextStylesSelectorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentStyles_: {
            type: ObjectConstructor;
        };
    };
    protected accessor currentStyles_: TextStyles;
    protected getTextStyles_(): TextStyle[];
    protected onStyleButtonClick_(e: Event): void;
    protected getActiveClass_(style: TextStyle): "" | "active";
    protected getAriaPressed_(style: TextStyle): "false" | "true";
    protected getIcon_(style: TextStyle): string;
    protected getTitle_(style: TextStyle): string;
    onTextAttributesChanged(attributes: TextAttributes): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-styles-selector': TextStylesSelectorElement;
    }
}
export {};
