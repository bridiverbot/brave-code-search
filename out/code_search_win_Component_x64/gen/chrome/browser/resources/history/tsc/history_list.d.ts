import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './history_item.js';
import type { HistoryEntry, HistoryQuery, QueryState } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInfiniteListElement } from 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ActionMenuModel {
    index: number;
    item: HistoryEntry;
    target: HTMLElement;
}
type OpenMenuEvent = CustomEvent<ActionMenuModel>;
type HistoryCheckboxSelectEvent = CustomEvent<{
    index: number;
    shiftKey: boolean;
}>;
export interface HistoryListElement {
    $: {
        errorToast: CrToastElement;
        infiniteList: CrInfiniteListElement<HistoryEntry>;
        dialog: CrLazyRenderLitElement<CrDialogElement>;
        noResults: HTMLElement;
        sharedMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare global {
    interface HTMLElementEventMap {
        'history-checkbox-select': HistoryCheckboxSelectEvent;
        'open-menu': OpenMenuEvent;
        'remove-bookmark-stars': CustomEvent<string>;
    }
}
declare const HistoryListElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class HistoryListElement extends HistoryListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        searchedTerm: {
            type: StringConstructor;
        };
        resultLoadingDisabled_: {
            type: BooleanConstructor;
        };
        /**
         * Indexes into historyData_ of selected items.
         */
        selectedItems: {
            type: ObjectConstructor;
        };
        canDeleteHistory_: {
            type: BooleanConstructor;
        };
        historyData_: {
            type: ArrayConstructor;
        };
        lastFocused_: {
            type: ObjectConstructor;
        };
        listBlurred_: {
            type: BooleanConstructor;
        };
        lastSelectedIndex: {
            type: NumberConstructor;
        };
        pendingDelete: {
            notify: boolean;
            type: BooleanConstructor;
        };
        queryState: {
            type: ObjectConstructor;
        };
        actionMenuModel_: {
            type: ObjectConstructor;
        };
        scrollTarget: {
            type: ObjectConstructor;
        };
        scrollOffset: {
            type: NumberConstructor;
        };
        isActive: {
            type: BooleanConstructor;
        };
        isEmpty: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor historyData_: HistoryEntry[];
    private callbackRouter_;
    protected accessor canDeleteHistory_: boolean;
    protected accessor actionMenuModel_: ActionMenuModel | null;
    private lastOffsetHeight_;
    private resizeObserver_;
    private accessor resultLoadingDisabled_;
    private scrollDebounce_;
    private scrollListener_;
    private scrollTimeout_;
    accessor isActive: boolean;
    accessor isEmpty: boolean;
    accessor searchedTerm: string;
    accessor selectedItems: Set<number>;
    accessor pendingDelete: boolean;
    protected accessor lastFocused_: HTMLElement | null;
    protected accessor listBlurred_: boolean;
    accessor lastSelectedIndex: number;
    accessor queryState: QueryState;
    accessor scrollTarget: HTMLElement;
    accessor scrollOffset: number;
    private onHistoryDeletedListenerId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @param info An object containing information about the query.
     * @param results A list of results.
     */
    historyResult(info: HistoryQuery, results: HistoryEntry[]): void;
    /**
     * Adds the newly updated history results into historyData_. Adds new fields
     * for each result.
     * @param historyResults The new history results.
     * @param incremental Whether the result is from loading more history, or a
     *     new search/list reload.
     * @param finished True if there are no more results available and result
     *     loading should be disabled.
     */
    addNewResults(historyResults: HistoryEntry[], incremental: boolean, finished: boolean): void;
    private recordActorVisitShown_;
    private onHistoryDeleted_;
    selectOrUnselectAll(): void;
    /**
     * Select each item in |historyData|.
     */
    selectAllItems(): void;
    /**
     * Deselect each item in |selectedItems|.
     */
    unselectAllItems(): void;
    getSelectedItemCount(): number;
    /**
     * Delete all the currently selected history items. Will prompt the user with
     * a dialog to confirm that the deletion should be performed.
     */
    deleteSelectedWithPrompt(): void;
    fillCurrentViewport(): void;
    openSelected(): void;
    /**
     * Set the selection status for a set of items by their indices.
     */
    private changeSelections_;
    /**
     * Performs a request to the backend to delete all selected items. If
     * successful, removes them from the view. Does not prompt the user before
     * deleting -- see deleteSelectedWithPrompt for a version of this method which
     * does prompt.
     */
    private deleteSelected_;
    /**
     * Remove all |indices| from the history list.
     */
    private removeItemsByIndex_;
    removeItemsByIndexForTesting(indices: number[]): void;
    /**
     * Closes the overflow menu.
     */
    private closeMenu_;
    protected onDialogConfirmClick_(): void;
    protected onDialogCancelClick_(): void;
    /**
     * Remove bookmark star for history items with matching URLs.
     */
    private onRemoveBookmarkStars_;
    /**
     * Requests the next batch of history results, unless loading is disabled or
     * a query is already in progress.
     */
    private loadMoreHistory_;
    protected onViewportFilled_(): void;
    /**
     * Each query returns a fixed number of visits, which can merge into only a
     * few entries. If the rendered list is too short to scroll, the user can't
     * trigger loading more by scrolling, so request more results directly.
     */
    private loadMoreIfListNotScrollable_;
    private onOpenMenu_;
    private deleteItems_;
    private recordContextMenuActionsHistogram_;
    protected onMoreFromSiteClick_(): void;
    protected onRemoveBookmarkClick_(): void;
    private isCriticalActionsEnabled_;
    private isChatLinkoutsEnabled_;
    protected canShowGoToGeminiChat_(): boolean;
    protected onGoToGeminiChatClick_(): Promise<void>;
    protected canShowReviewGeminiActivity_(): boolean;
    protected onReviewGeminiActivityClick_(e: MouseEvent): void;
    protected onRemoveFromHistoryClick_(): void;
    private onItemSelected_;
    /**
     * Check whether the time difference between the given history item and the
     * next one is large enough for a spacer to be required.
     */
    protected needsTimeGap_(_item: HistoryEntry, index: number): boolean;
    /**
     * True if the given item is the beginning of a new card.
     * @param i Index of |item| within |historyData_|.
     */
    protected isCardStart_(_item: HistoryEntry, i: number): boolean;
    /**
     * True if the given item is the end of a card.
     * @param i Index of |item| within |historyData_|.
     */
    protected isCardEnd_(_item: HistoryEntry, i: number): boolean;
    protected hasResults_(): boolean;
    private isHistoryFilteringEnabled_;
    private hasActiveFilter_;
    protected noResultsMessage_(): string;
    protected canSearchMoreFromSite_(): boolean;
    private initializeResults_;
    private onIsActiveChanged_;
    private onScrollTargetChanged_;
    setScrollDebounceForTest(debounce: number): void;
    private onScrollOrResize_;
    private onScrollTimeout_;
    protected onLastFocusedChanged_(e: CustomEvent<{
        value: HTMLElement | null;
    }>): void;
    protected onListBlurredChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onRestoreListFocus_(): void;
    private getSelectedEntries_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-list': HistoryListElement;
    }
}
export {};
