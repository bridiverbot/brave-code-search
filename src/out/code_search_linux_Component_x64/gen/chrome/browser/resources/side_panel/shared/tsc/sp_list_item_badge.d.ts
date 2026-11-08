/**
 * @fileoverview A badge component that is used to denote additional information
 * or an updated state and is displayed inside of a cr-url-list-item.
 */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SpListItemBadgeElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        actionable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        wasUpdated: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor actionable: boolean;
    accessor wasUpdated: boolean;
    updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-list-item-badge': SpListItemBadgeElement;
    }
}
