import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AnnotationBrushType } from '../constants.js';
import type { Color } from '../constants.js';
import type { ColorOption } from './ink_color_selector.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const HIGHLIGHTER_COLORS: ColorOption[];
export declare const PEN_COLORS: ColorOption[];
export declare const InkAnnotationBrushMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<InkAnnotationBrushMixinInterface>;
export interface InkAnnotationBrushMixinInterface {
    currentColor: Color;
    currentSize: number;
    currentType: AnnotationBrushType;
    availableBrushColors(): ColorOption[];
    onCurrentColorChanged(e: CustomEvent<{
        value: Color;
    }>): void;
    onCurrentSizeChanged(e: CustomEvent<{
        value: number;
    }>): void;
    onCurrentTypeChanged(e: CustomEvent<{
        value: AnnotationBrushType;
    }>): void;
}
export {};
