import '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import './destination_list_item.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
export interface PrintPreviewDestinationListElement {
    $: {
        list: HTMLElement;
    };
}
export declare class PrintPreviewDestinationListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destinations: {
            type: ArrayConstructor;
        };
        searchQuery: {
            type: ObjectConstructor;
        };
        loadingDestinations: {
            type: BooleanConstructor;
        };
        matchingDestinations_: {
            type: ArrayConstructor;
        };
        hasDestinations_: {
            type: BooleanConstructor;
        };
        throbberHidden_: {
            type: BooleanConstructor;
        };
        hideList_: {
            type: BooleanConstructor;
        };
    };
    accessor destinations: Destination[];
    accessor searchQuery: RegExp | null;
    accessor loadingDestinations: boolean;
    protected accessor matchingDestinations_: Destination[];
    protected accessor hasDestinations_: boolean;
    protected accessor throbberHidden_: boolean;
    protected accessor hideList_: boolean;
    private boundUpdateHeight_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private updateHeight_;
    private updateMatchingDestinations_;
    protected onKeydown_(e: KeyboardEvent): void;
    /**
     * @param e Event containing the destination that was selected.
     */
    protected onDestinationClick_(e: Event): void;
    /**
     * Returns a 1-based index for aria-rowindex.
     */
    protected getAriaRowindex_(index: number): number;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-destination-list': PrintPreviewDestinationListElement;
    }
}
