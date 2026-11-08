import type { QueryState } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const Page: {
    HISTORY: string;
    HISTORY_CLUSTERS: string;
    SYNCED_TABS: string;
    PRODUCT_SPECIFICATIONS_LISTS: string;
};
export declare const TABBED_PAGES: string[];
export declare class HistoryRouterElement extends CrLitElement {
    static get is(): string;
    static get template(): null;
    static get properties(): {
        lastSelectedTab: {
            type: NumberConstructor;
        };
        selectedPage: {
            type: StringConstructor;
            notify: boolean;
        };
        queryState: {
            type: ObjectConstructor;
        };
    };
    accessor lastSelectedTab: number;
    accessor selectedPage: string;
    accessor queryState: QueryState;
    timeRangeStart?: Date;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Write all relevant page state to the URL.
     */
    serializeUrl(): void;
    private onPathChanged_;
    private onQueryParamsChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-router': HistoryRouterElement;
    }
}
