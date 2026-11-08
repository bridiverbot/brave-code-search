import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAnnotation, TextAttributes } from '../constants.js';
import type { Viewport, ViewportRect } from '../viewport.js';
export interface InkTextBoxElement {
    $: {
        textbox: HTMLTextAreaElement;
    };
}
export declare enum TextBoxState {
    INACTIVE = 0,// No active text annotation being edited; box is hidden.
    NEW = 1,// Box initialized with an annotation, but user has not made edits.
    EDITED = 2
}
declare const InkTextBoxElementBase: typeof CrLitElement & (new (...args: any[]) => import("./ink_text_observer_mixin.js").InkTextObserverMixinInterface);
export declare class InkTextBoxElement extends InkTextBoxElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        height_: {
            type: NumberConstructor;
        };
        locationX_: {
            type: NumberConstructor;
        };
        locationY_: {
            type: NumberConstructor;
        };
        minHeight_: {
            type: NumberConstructor;
        };
        minWidth_: {
            type: NumberConstructor;
        };
        state_: {
            type: NumberConstructor;
        };
        textOrientation_: {
            type: NumberConstructor;
        };
        textRotations_: {
            type: NumberConstructor;
            reflect: boolean;
        };
        textValue_: {
            type: StringConstructor;
        };
        viewportRotations_: {
            type: NumberConstructor;
        };
        width_: {
            type: NumberConstructor;
        };
        zoom_: {
            type: NumberConstructor;
        };
        viewport: {
            type: ObjectConstructor;
        };
        annotation: {
            type: ObjectConstructor;
        };
        pageDimensions: {
            type: ObjectConstructor;
        };
        isPaste: {
            type: BooleanConstructor;
        };
    };
    private accessor locationX_;
    private accessor locationY_;
    private accessor minHeight_;
    private accessor minWidth_;
    private accessor height_;
    private accessor state_;
    private accessor textOrientation_;
    protected accessor textRotations_: number;
    protected accessor textValue_: string;
    private accessor viewportRotations_;
    private accessor width_;
    private accessor zoom_;
    accessor isPaste: boolean;
    accessor viewport: Viewport | null;
    accessor annotation: TextAnnotation | null;
    accessor pageDimensions: ViewportRect | null;
    private activeKey_;
    private arrowKeyDownCount_;
    private attributes_?;
    private dragTarget_;
    private eventTracker_;
    private existing_;
    private id_;
    private pageIndex_;
    private pageHeight_;
    private pageWidth_;
    private pageX_;
    private pageY_;
    private pointerStart_;
    private promiseResolver_;
    private startPosition_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private styleFontSize_;
    protected onFocus_(e: FocusEvent): void;
    protected onTextValueInput_(): void;
    private createClipboardAnnotation_;
    private copyAnnotation_;
    private cutAnnotation_;
    private textBoxEdited_;
    private updateMinimumSize_;
    private removePointerDragListeners_;
    private removeKeyDragListeners_;
    private addKeyDragListeners_;
    private resetDrag_;
    commitTextAnnotation(): Promise<void>;
    private finishCommit_;
    private initializeFromProperties_;
    private focusTextboxWhenReady_;
    viewportChanged(): void;
    private onDocumentKeyDown_;
    private onKeyDown_;
    private announceMoveOrResize_;
    private onHandleKeyUp_;
    protected onPointerDown_(e: PointerEvent): void;
    private onHandlePointerMove_;
    private onMove_;
    private onHandlePointerUp_;
    private updateTextAttributes_;
    onTextAttributesChanged(newAttributes: TextAttributes): void;
    private handleResizeShortcut_;
    /**
     * Changes the size of the textbox by deltaX px horizontally and deltaY px
     * vertically.
     */
    private resizeBy_;
    private resizeProportionally_;
    private getMaxWidth_;
    private getMaxHeight_;
    private getClampedWidth_;
    private getClampedHeight_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ink-text-box': InkTextBoxElement;
    }
}
export {};
