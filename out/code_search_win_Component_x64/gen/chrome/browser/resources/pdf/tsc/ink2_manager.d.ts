import type { AnnotationBrush, Color, Point, TextAnnotation, TextAttributes, TextStyles } from './constants.js';
import { AnnotationBrushType, TextAlignment, TextStyle, TextTypeface } from './constants.js';
import type { Viewport, ViewportRect } from './viewport.js';
export interface TextBoxInit {
    annotation: TextAnnotation;
    pageDimensions: ViewportRect;
    isPaste?: boolean;
}
export declare const DEFAULT_TEXTBOX_WIDTH: number;
export declare const MIN_TEXTBOX_SIZE_PX = 24;
export declare function stylesEqual(style1: TextStyles, style2: TextStyles): boolean;
export declare class Ink2Manager extends EventTarget {
    private brush_;
    private stack_;
    private listener_;
    private annotations_;
    private attributes_;
    private brushResolver_;
    private existingAnnotationAttributes_;
    private clipboardAnnotation_;
    private isCutAnnotation_;
    private pastedPageRects_;
    private pluginController_;
    private textResolver_;
    private viewport_;
    private nextAnnotationId_;
    private knownFontIds_;
    constructor();
    destroy(): void;
    setViewport(viewport: Viewport): void;
    get annotations(): Map<number, Map<number, TextAnnotation>>;
    resetStackForTesting(): void;
    initializeTextAnnotation(location?: Point, onlyExisting?: boolean): boolean;
    activateAnnotationById(id: number): boolean;
    private activateAnnotation_;
    private initializeTextBox_;
    saveAnnotationToClipboard(annotation: TextAnnotation, isCut?: boolean): void;
    private getPastedAnnotationPosition_;
    pasteAnnotation(): boolean;
    isInitializationStarted(): boolean;
    isTextInitializationComplete(): boolean;
    isInitializationComplete(): boolean;
    getCurrentBrush(): AnnotationBrush;
    getCurrentTextAttributes(): TextAttributes;
    initializeBrush(): Promise<void>;
    initializeTextAnnotations(): Promise<void>;
    setBrushColor(color: Color): void;
    setBrushSize(size: number): void;
    setBrushType(type: AnnotationBrushType): Promise<void>;
    setTextTypeface(typeface: TextTypeface): void;
    setTextSize(size: number): void;
    setTextColor(color: Color): void;
    setTextAlignment(alignment: TextAlignment): void;
    setTextStyles(styles: TextStyles): void;
    toggleTextStyle(style: TextStyle): void;
    getKnownFontIds(): number[];
    addKnownFontId(id: number): void;
    private updateStoredAnnotation_;
    /**
     * Deletes the stored annotation with `id` on `pageIndex` and notifies the
     * plugin of the deleted annotation.
     */
    deleteTextAnnotation(id: number, pageIndex: number): void;
    /**
     * Updates the stored annotation and notifies the plugin of the new or
     * modified annotation.
     */
    commitTextAnnotation(annotation: TextAnnotation, isEdited: boolean, newTypefaces: chrome.pdfViewerPrivate.Typeface[]): void;
    /**
     * Sets the current brush properties to the values in `brush`.
     */
    private setAnnotationBrush_;
    /**
     * Sets the annotation brush in the plugin with the current brush parameters.
     */
    private setAnnotationBrushInPlugin_;
    private fireBrushChanged_;
    private fireAttributesChanged_;
    private handleFinishInkStroke_;
    undo(): void;
    redo(): void;
    private applyTextUndoRedo_;
    initiateSave(): void;
    cancelSave(): void;
    saved(): void;
    static getInstance(): Ink2Manager;
    static setInstance(obj: Ink2Manager | null): void;
}
