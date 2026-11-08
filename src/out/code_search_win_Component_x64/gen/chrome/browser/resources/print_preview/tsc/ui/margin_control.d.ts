import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Coordinate2d } from '../data/coordinate2d.js';
import { CustomMarginsOrientation } from '../data/margins.js';
import type { MeasurementSystem } from '../data/measurement_system.js';
import { Size } from '../data/size.js';
export interface PrintPreviewMarginControlElement {
    $: {
        input: HTMLInputElement;
        lineContainer: HTMLElement;
        line: HTMLElement;
    };
}
declare const PrintPreviewMarginControlElementBase: typeof CrLitElement & (new (...args: any[]) => import("./input_mixin.js").InputMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class PrintPreviewMarginControlElement extends PrintPreviewMarginControlElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        side: {
            type: StringConstructor;
            reflect: boolean;
        };
        invalid: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        invisible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        measurementSystem: {
            type: ObjectConstructor;
        };
        focused_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        positionInPts_: {
            type: NumberConstructor;
        };
        scaleTransform: {
            type: NumberConstructor;
        };
        translateTransform: {
            type: ObjectConstructor;
        };
        pageSize: {
            type: ObjectConstructor;
        };
        clipSize: {
            type: ObjectConstructor;
        };
    };
    accessor disabled: boolean;
    accessor side: CustomMarginsOrientation;
    accessor invalid: boolean;
    accessor invisible: boolean;
    accessor measurementSystem: MeasurementSystem | null;
    accessor scaleTransform: number;
    accessor translateTransform: Coordinate2d;
    accessor pageSize: Size;
    accessor clipSize: Size | null;
    private accessor focused_;
    private accessor positionInPts_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @return The input element for InputBehavior. */
    getInput(): HTMLInputElement;
    /**
     * @param valueInPts New value of the margin control's textbox in pts.
     */
    setTextboxValue(valueInPts: number): void;
    /** @return The current position of the margin control. */
    getPositionInPts(): number;
    /** @param position The new position for the margin control. */
    setPositionInPts(position: number): void;
    /**
     * @return 'true' or 'false', indicating whether the input should be
     *     aria-hidden.
     */
    protected getAriaHidden_(): string;
    /**
     * Converts a value in pixels to points.
     * @param pixels Pixel value to convert.
     * @return Given value expressed in points.
     */
    convertPixelsToPts(pixels: number): number;
    /**
     * @param event A pointerdown event triggered by this element.
     * @return Whether the margin should start being dragged.
     */
    shouldDrag(event: PointerEvent): boolean;
    /**
     * @param value Value to parse to points. E.g. '3.40' or '200'.
     * @return Value in points represented by the input value.
     */
    private parseValueToPts_;
    /**
     * @param value Value in points to serialize.
     * @return String representation of the value in the system's local units.
     */
    private serializeValueFromPts_;
    /**
     * @param e Contains the new value of the input.
     */
    private onInputChange_;
    protected onBlur_(): void;
    protected onFocus_(): void;
    private updatePosition_;
    private onClipSizeChange_;
}
export type MarginControlElement = PrintPreviewMarginControlElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-margin-control': PrintPreviewMarginControlElement;
    }
}
export {};
