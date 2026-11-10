import './cluster.js';
import './history_clusters_shared_style.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Cluster, URLVisit } from './history_cluster_types.mojom-webui.js';
/**
 * @fileoverview This file provides a custom element that requests and shows
 * history clusters given a query. It handles loading more clusters using
 * infinite scrolling as well as deletion of visits within the clusters.
 */
declare const HistoryClustersElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface HistoryClustersElement {
    $: {
        clusters: CrInfiniteListElement<Cluster>;
        confirmationToast: CrToastElement;
    };
}
export declare class HistoryClustersElement extends HistoryClustersElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the clusters are in the side panel.
         */
        inSidePanel_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The current query for which related clusters are requested and shown.
         */
        query: {
            type: StringConstructor;
        };
        timeRangeStart: {
            type: ObjectConstructor;
        };
        /**
         * These 3 properties are components of the browser response to a request
         * for the freshest clusters related to  a given query until an optional
         * given end time (or the present time).
         */
        canLoadMore_: {
            type: BooleanConstructor;
        };
        clusters_: {
            type: ArrayConstructor;
        };
        hasResult_: {
            type: BooleanConstructor;
        };
        resultQuery_: {
            type: StringConstructor;
        };
        /**
         * Boolean determining if spinner shows instead of load more button.
         */
        showSpinner_: {
            type: BooleanConstructor;
        };
        showConfirmationDialog_: {
            type: BooleanConstructor;
        };
        /**
         * The list of visits to be removed. A non-empty array indicates a pending
         * remove request to the browser.
         */
        visitsToBeRemoved_: {
            type: ArrayConstructor;
        };
        scrollOffset: {
            type: NumberConstructor;
        };
        scrollTarget: {
            type: ObjectConstructor;
        };
        isActive: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isEmpty: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor isActive: boolean;
    accessor isEmpty: boolean;
    accessor query: string;
    accessor scrollOffset: number;
    accessor scrollTarget: HTMLElement;
    accessor timeRangeStart: Date | undefined;
    protected accessor canLoadMore_: boolean;
    protected accessor clusters_: Cluster[];
    protected accessor hasResult_: boolean;
    protected accessor resultQuery_: string;
    private browserProxy_;
    private accessor inSidePanel_;
    private lastOffsetHeight_;
    private resizeObserver_;
    private scrollDebounce_;
    private scrollListener_;
    private onClustersQueryResultListenerId_;
    private onClusterImageUpdatedListenerId_;
    private onVisitsRemovedListenerId_;
    private onHistoryDeletedListenerId_;
    private onQueryChangedByUserListenerId_;
    protected accessor showConfirmationDialog_: boolean;
    protected accessor showSpinner_: boolean;
    private scrollTimeout_;
    private accessor visitsToBeRemoved_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onCancelButtonClick_(): void;
    protected onConfirmationDialogCancel_(): void;
    protected onLoadMoreButtonClick_(): void;
    protected onRemoveButtonClick_(): void;
    /**
     * Called with `event` received from a visit requesting to be hidden.
     */
    protected onHideVisit_(event: CustomEvent<URLVisit>): void;
    /**
     * Called with `event` received from visits requesting to be hidden.
     */
    protected onHideVisits_(event: CustomEvent<URLVisit[]>): void;
    /**
     * Called with `event` received from a cluster requesting to be removed from
     * the list when all its visits have been removed. Contains the cluster index.
     */
    protected onRemoveCluster_(event: CustomEvent<number>): void;
    /**
     * Called with `event` received from a visit requesting to be removed. `event`
     * may contain the related visits of the said visit, if applicable.
     */
    protected onRemoveVisits_(event: CustomEvent<URLVisit[]>): Promise<void>;
    setScrollDebounceForTest(debounce: number): void;
    /**
     * Called when the scrollable area has been scrolled nearly to the bottom.
     */
    private onScrolledToBottom_;
    private getConfirmationDialog_;
    protected computePlaceholderText_(): string;
    /**
     * Returns true and hides the button unless we actually have more results to
     * load. Note we don't actually hide this button based on keyboard-focus
     * state. This is because if the user is using the mouse, more clusters are
     * loaded before the user ever gets a chance to see this button.
     */
    protected getLoadMoreButtonHidden_(): boolean;
    /**
     * Returns whether the given index corresponds to the last cluster.
     */
    protected isLastCluster_(index: number): boolean;
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    private onBrowserIdle_;
    private onClustersQueryResult_;
    /**
     * Called when an image has become available for `clusterIndex`.
     */
    private onClusterImageUpdated_;
    /**
     * Called when the user entered search query changes. Also used to fetch the
     * initial set of clusters when the page loads.
     */
    private onQueryChanged_;
    /**
     * Called with the original remove params when the last accepted request to
     * browser to remove visits succeeds.
     */
    private onVisitsRemoved_;
    /**
     * Called when History is deleted from a different tab.
     */
    private onHistoryDeleted_;
    /**
     * Called when the query is changed by the user externally.
     */
    private onQueryChangedByUser_;
    private onScrollOrResize_;
    private onScrollTimeout_;
    private removeVisits_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-clusters': HistoryClustersElement;
    }
}
export {};
