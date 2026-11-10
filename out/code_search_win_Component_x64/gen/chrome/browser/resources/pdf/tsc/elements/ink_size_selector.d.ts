import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import './selectable_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationBrushType } from '../constants.js';
export interface SizeOption {
    icon: string;
    label: string;
    size: number;
}
export declare const PEN_SIZES: SizeOption[];
export declare const HIGHLIGHTER_SIZES: SizeOption[];
declare const InkSizeSelectorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class InkSizeSelectorElement extends InkSizeSelectorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentSize: {
            notify: boolean;
            type: NumberConstructor;
        };
        currentType: {
            type: StringConstructor;
        };
    };
    focus(): void;
    accessor currentSize: number;
    accessor currentType: AnnotationBrushType;
    protected currentSizeString_(): string;
    protected onSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected getCurrentBrushSizes_(): SizeOption[];
}
declare global {
    interface HTMLElementTagNameMap {
        'ink-size-selector': InkSizeSelectorElement;
    }
}
export {};
