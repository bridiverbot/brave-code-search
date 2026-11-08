import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ViewerPageSelectorElement {
    $: {
        pageSelector: HTMLInputElement;
    };
}
export declare class ViewerPageSelectorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** The number of pages the document contains. */
        docLength: {
            type: NumberConstructor;
        };
        /**
         * The current page being viewed (1-based). A change to pageNo is mirrored
         * immediately to the input field. A change to the input field is not
         * mirrored back until onChange_() is called and change-page is fired.
         */
        pageNo: {
            type: NumberConstructor;
        };
    };
    accessor docLength: number;
    accessor pageNo: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onChange_(): void;
    protected onPointerup_(): void;
    select(): void;
    /** @return True if the selector input field is currently focused. */
    isActive(): boolean;
    /** Immediately remove any non-digit characters. */
    protected onInput_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-page-selector': ViewerPageSelectorElement;
    }
}
