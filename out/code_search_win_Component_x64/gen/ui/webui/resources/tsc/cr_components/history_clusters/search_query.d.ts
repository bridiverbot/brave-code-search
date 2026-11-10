import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { SearchQuery } from './history_cluster_types.mojom-webui.js';
/**
 * @fileoverview This file provides a custom element displaying a search query.
 */
export interface SearchQueryElement {
    $: {
        searchQueryLink: HTMLElement;
    };
}
declare const SearchQueryElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/cr_ripple/cr_ripple_mixin.js").CrRippleMixinInterface);
export declare class SearchQueryElement extends SearchQueryElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The index of the search query pill.
         */
        index: {
            type: NumberConstructor;
        };
        /**
         * The search query to display.
         */
        searchQuery: {
            type: ObjectConstructor;
        };
    };
    accessor index: number;
    accessor searchQuery: SearchQuery | undefined;
    firstUpdated(): void;
    protected onAuxclick_(): void;
    protected onClick_(event: MouseEvent): void;
    protected onKeydown_(e: KeyboardEvent): void;
    private onPointerDown_;
    private onPointerCancel_;
    private openUrl_;
    createRipple(): import("//resources/cr_elements/cr_ripple/cr_ripple.js").CrRippleElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'search-query': SearchQueryElement;
    }
}
export {};
