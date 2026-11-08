/**
 * @fileoverview Progress with simple animations. Forked/migrated
 * from Polymer's paper-progress.
 */
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CrProgressElement {
    $: {
        primaryProgress: HTMLElement;
    };
}
export declare class CrProgressElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The number that represents the current value.
         */
        value: {
            type: NumberConstructor;
        };
        /**
         * The number that indicates the minimum value of the range.
         */
        min: {
            type: NumberConstructor;
        };
        /**
         * The number that indicates the maximum value of the range.
         */
        max: {
            type: NumberConstructor;
        };
        /**
         * Specifies the value granularity of the range's value.
         */
        step: {
            type: NumberConstructor;
        };
        /**
         * Use an indeterminate progress indicator.
         */
        indeterminate: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * True if the progress is disabled.
         */
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor value: number;
    accessor min: number;
    accessor max: number;
    accessor step: number;
    accessor indeterminate: boolean;
    accessor disabled: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private clampValue_;
    private calcStep_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-progress': CrProgressElement;
    }
}
