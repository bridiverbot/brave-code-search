import './margin_control.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Coordinate2d } from '../data/coordinate2d.js';
import type { Margins, MarginsSetting } from '../data/margins.js';
import { CustomMarginsOrientation } from '../data/margins.js';
import type { MeasurementSystem } from '../data/measurement_system.js';
import { Size } from '../data/size.js';
import { State } from '../data/state.js';
export declare const MARGIN_KEY_MAP: Map<CustomMarginsOrientation, keyof MarginsSetting>;
declare const PrintPreviewMarginControlContainerElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewMarginControlContainerElement extends PrintPreviewMarginControlContainerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageSize: {
            type: ObjectConstructor;
        };
        documentMargins: {
            type: ObjectConstructor;
        };
        previewLoaded: {
            type: BooleanConstructor;
        };
        measurementSystem: {
            type: ObjectConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        scaleTransform_: {
            type: NumberConstructor;
        };
        translateTransform_: {
            type: ObjectConstructor;
        };
        clipSize_: {
            type: ObjectConstructor;
        };
        available_: {
            type: BooleanConstructor;
        };
        invisible_: {
            type: BooleanConstructor;
        };
        marginSides_: {
            type: ArrayConstructor;
        };
        /**
         * String attribute used to set cursor appearance. Possible values:
         * empty (''): No margin control is currently being dragged.
         * 'dragging-horizontal': The left or right control is being dragged.
         * 'dragging-vertical': The top or bottom control is being dragged.
         */
        dragging_: {
            type: StringConstructor;
            reflect: boolean;
        };
    };
    accessor pageSize: Size;
    accessor documentMargins: Margins | null;
    accessor previewLoaded: boolean;
    accessor measurementSystem: MeasurementSystem | null;
    accessor state: State;
    private accessor available_;
    protected accessor invisible_: boolean;
    protected accessor clipSize_: Size;
    protected accessor scaleTransform_: number;
    protected accessor translateTransform_: Coordinate2d;
    private accessor dragging_;
    protected accessor marginSides_: CustomMarginsOrientation[];
    private pointerStartPositionInPixels_;
    private marginStartPositionInPixels_;
    private resetMargins_;
    private eventTracker_;
    private textboxFocused_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeAvailable_;
    private onAvailableChange_;
    private onMarginSettingsChange_;
    private onMediaSizeOrLayoutChange_;
    private onStateChanged_;
    /**
     * @return Whether the controls should be disabled.
     */
    protected controlsDisabled_(): boolean;
    /**
     * @param orientation Orientation value to test.
     * @return Whether the given orientation is TOP or BOTTOM.
     */
    private isTopOrBottom_;
    /**
     * @param control Control being repositioned.
     * @param posInPixels Desired position, in pixels.
     * @return The new position for the control, in pts. Returns the
     *     position for the dimension that the control operates in, i.e.
     *     x direction for the left/right controls, y direction otherwise.
     */
    private posInPixelsToPts_;
    /**
     * Moves the position of the given control to the desired position in pts
     * within some constraint minimum and maximum.
     * @param control Control to move.
     * @param posInPts Desired position to move to, in pts. Position is
     *     1 dimensional and represents position in the x direction if control
     * is for the left or right margin, and the y direction otherwise.
     */
    private moveControlWithConstraints_;
    /**
     * Translates the position of the margin control relative to the pointer
     * position in pixels.
     * @param pointerPosition New position of the pointer.
     * @return New position of the margin control.
     */
    translatePointerToPositionInPixels(pointerPosition: Coordinate2d): Coordinate2d;
    /**
     * Called when the pointer moves in the custom margins component. Moves the
     * dragged margin control.
     * @param event Contains the position of the pointer.
     */
    private onPointerMove_;
    /**
     * Called when the pointer is released in the custom margins component.
     * Releases the dragged margin control.
     * @param event Contains the position of the pointer.
     */
    private onPointerUp_;
    /**
     * @param invisible Whether the margin controls should be invisible.
     */
    setInvisible(invisible: boolean): void;
    /**
     * @param e Contains information about what control fired the event.
     */
    protected onTextFocus_(e: Event): void;
    /**
     * @param marginSide The margin side. Must be a CustomMarginsOrientation.
     * @param marginValue New value for the margin in points.
     */
    private setMargin_;
    /**
     * @param marginSide The margin side.
     * @param value The new margin value in points.
     * @return The clipped margin value in points.
     */
    private clipAndRoundValue_;
    /**
     * @param e Event containing the new textbox value.
     */
    protected onTextChange_(e: CustomEvent<number>): void;
    /**
     * @param e Event fired when a control's text field is blurred. Contains
     *     information about whether the control is in an invalid state.
     */
    protected onTextBlur_(e: CustomEvent<boolean>): void;
    /**
     * @param e Fired when pointerdown occurs on a margin control.
     */
    protected onPointerdown_(e: PointerEvent): void;
    /**
     * @param dragChanged
     */
    private fireDragChanged_;
    /**
     * Set display:none after the opacity transition for the controls is done.
     */
    protected onTransitionEnd_(): void;
    /**
     * Updates the translation transformation that translates pixel values in
     * the space of the HTML DOM.
     * @param translateTransform Updated value of the translation transformation.
     */
    updateTranslationTransform(translateTransform: Coordinate2d): void;
    /**
     * Updates the scaling transform that scales pixels values to point values.
     * @param scaleTransform Updated value of the scale transform.
     */
    updateScaleTransform(scaleTransform: number): void;
    /**
     * Clips margin controls to the given clip size in pixels.
     * @param clipSize Size to clip the margin controls to.
     */
    updateClippingMask(clipSize: Size): void;
}
export type MarginControlContainerElement = PrintPreviewMarginControlContainerElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-margin-control-container': PrintPreviewMarginControlContainerElement;
    }
}
export {};
