import type { LineFocusModel } from './line_focus_model.js';
import type { LineFocusStyle } from './read_anything_types.js';
export declare abstract class LineFocusStyleMode {
    protected style_: LineFocusStyle;
    protected model_: LineFocusModel;
    constructor(style_: LineFocusStyle, model_: LineFocusModel);
    getStyle(): LineFocusStyle;
    abstract getCenterY(): number;
    getOffScreenDiff(targetIndex: number): number;
    getCenterDiff(targetIndex: number): number;
    getDesiredCenter(targetIndex: number): number;
    abstract updateFocusBounds(): void;
    abstract getFocalPointForRect(bounds: DOMRect): number;
    abstract getBottomIndex(focalIndex: number): number;
    abstract clampLineIndex(index: number): number;
    abstract shouldAdaptToTextBounds(): boolean;
    protected abstract getFocusWindowBounds(lines: DOMRect[], targetIndex: number): {
        topRect: DOMRect;
        bottomRect: DOMRect;
    };
    protected abstract getFocalPoint(topRect: DOMRect, bottomRect: DOMRect): number;
}
export declare class LineFocusLineStyleMode extends LineFocusStyleMode {
    constructor(style: LineFocusStyle, model: LineFocusModel);
    getCenterY(): number;
    updateFocusBounds(): void;
    getFocalPointForRect(bounds: DOMRect): number;
    getBottomIndex(focalIndex: number): number;
    clampLineIndex(index: number): number;
    shouldAdaptToTextBounds(): boolean;
    protected getFocusWindowBounds(lines: DOMRect[], targetIndex: number): {
        topRect: DOMRect;
        bottomRect: DOMRect;
    };
    protected getFocalPoint(_topRect: DOMRect, bottomRect: DOMRect): number;
}
export declare class LineFocusWindowStyleMode extends LineFocusStyleMode {
    constructor(style: LineFocusStyle, model: LineFocusModel);
    getCenterY(): number;
    updateFocusBounds(): void;
    getFocalPointForRect(bounds: DOMRect): number;
    getBottomIndex(focalIndex: number): number;
    clampLineIndex(index: number): number;
    shouldAdaptToTextBounds(): boolean;
    protected getFocusWindowBounds(lines: DOMRect[], targetIndex: number): {
        topRect: DOMRect;
        bottomRect: DOMRect;
    };
    protected getFocalPoint(topRect: DOMRect, bottomRect: DOMRect): number;
}
export declare class LineFocusNoneStyleMode extends LineFocusStyleMode {
    constructor(style: LineFocusStyle, model: LineFocusModel);
    updateFocusBounds(): void;
    getFocalPointForRect(_bounds: DOMRect): number;
    getBottomIndex(_focalIndex: number): number;
    clampLineIndex(_index: number): number;
    shouldAdaptToTextBounds(): boolean;
    getCenterY(): number;
    protected getFocusWindowBounds(_lines: DOMRect[], _targetIndex: number): {
        topRect: DOMRect;
        bottomRect: DOMRect;
    };
    protected getFocalPoint(_topRect: DOMRect, _bottomRect: DOMRect): number;
}
