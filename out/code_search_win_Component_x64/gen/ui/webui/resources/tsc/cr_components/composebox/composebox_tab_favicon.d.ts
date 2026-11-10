import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview This file provides a custom element displaying a tab favicon.
 */
export declare class TabFaviconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    static get properties(): {
        url: {
            type: StringConstructor;
        };
        size: {
            type: NumberConstructor;
        };
        tabId: {
            type: NumberConstructor;
        };
        isSubmitted: {
            type: BooleanConstructor;
        };
    };
    accessor url: string;
    accessor size: number;
    accessor tabId: number | null;
    accessor isSubmitted: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-tab-favicon': TabFaviconElement;
    }
}
