import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum TooltipPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
export interface CrTooltipElement {
    $: {
        tooltip: HTMLElement;
    };
}
export declare class CrTooltipElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The id of the element that the tooltip is anchored to. This element
         * must be a sibling of the tooltip. If this property is not set,
         * then the tooltip will be centered to the parent node containing it.
         */
        for: {
            type: StringConstructor;
        };
        /**
         * Set this to true if you want to manually control when the tooltip
         * is shown or hidden.
         */
        manualMode: {
            type: BooleanConstructor;
        };
        /**
         * Positions the tooltip to the top, right, bottom, left of its content.
         */
        position: {
            type: StringConstructor;
            reflect: boolean;
        };
        /**
         * If true, no parts of the tooltip will ever be shown offscreen.
         */
        fitToVisibleBounds: {
            type: BooleanConstructor;
        };
        /**
         * The spacing between the top of the tooltip and the element it is
         * anchored to.
         */
        offset: {
            type: NumberConstructor;
        };
        /**
         * The delay that will be applied before the `entry` animation is
         * played when showing the tooltip.
         */
        animationDelay: {
            type: NumberConstructor;
        };
        /**
         * The delay before the tooltip hides itself after moving the pointer
         * away from the tooltip or target.
         */
        hideDelay: {
            type: NumberConstructor;
        };
    };
    accessor animationDelay: number;
    accessor fitToVisibleBounds: boolean;
    accessor hideDelay: number;
    accessor for: string;
    accessor manualMode: boolean;
    accessor offset: number;
    accessor position: TooltipPosition;
    private animationPlaying_;
    private showing_;
    private manualTarget_?;
    private target_;
    private tracker_;
    private hideTimeout_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Returns the target element that this tooltip is anchored to. It is
     * either the element given by the `for` attribute, the element manually
     * specified through the `target` attribute, or the immediate parent of
     * the tooltip.
     */
    get target(): Element | null;
    /**
     * Sets the target element that this tooltip will be anchored to.
     */
    set target(target: Element);
    /**
     * Shows the tooltip programmatically
     */
    show(): void;
    /**
     * Hides the tooltip programmatically
     */
    hide(): void;
    private queueHide_;
    private resetHideTimeout_;
    updatePosition(): void;
    private findTarget_;
    private onAnimationEnd_;
    private addListeners_;
    private removeListeners_;
    /**
     * Polyfills the old offsetParent behavior from before the spec was changed:
     * https://github.com/w3c/csswg-drafts/issues/159
     * This is necessary when the tooltip is inside a <slot>, e.g. when it
     * is used inside a cr-dialog. In such cases, the tooltip's offsetParent
     * will be null.
     */
    private composedOffsetParent_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-tooltip': CrTooltipElement;
    }
}
