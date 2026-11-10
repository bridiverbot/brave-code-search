/**
 * @fileoverview Shared styles for showing an empty state for a side panel UI.
 */
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SpEmptyStateElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        body: {
            type: StringConstructor;
        };
        darkImagePath: {
            type: StringConstructor;
        };
        heading: {
            type: StringConstructor;
        };
        imagePath: {
            type: StringConstructor;
        };
    };
    accessor body: string;
    accessor darkImagePath: string;
    accessor heading: string;
    accessor imagePath: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-empty-state': SpEmptyStateElement;
    }
}
