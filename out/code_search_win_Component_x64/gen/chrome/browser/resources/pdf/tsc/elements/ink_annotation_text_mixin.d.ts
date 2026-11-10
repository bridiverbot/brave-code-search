import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Color, TextAttributes } from '../constants.js';
import { TextTypeface } from '../constants.js';
import type { ColorOption } from './ink_color_selector.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const TEXT_SIZES: number[];
export declare const TEXT_COLORS: ColorOption[];
export declare const InkAnnotationTextMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<InkAnnotationTextMixinInterface>;
export interface InkAnnotationTextMixinInterface {
    colors: ColorOption[];
    currentColor: Color;
    currentSize: number;
    currentTypeface: string;
    fontNames: TextTypeface[];
    sizes: number[];
    getLabelForTypeface(typeface: TextTypeface): string;
    onTypefaceSelected(e: Event): void;
    onCurrentColorChanged(e: CustomEvent<{
        value: Color;
    }>): void;
    onSizeSelected(e: Event): void;
    onTextAttributesChanged(attributes: TextAttributes): void;
}
export {};
