import 'chrome://resources/cr_components/history_clusters/clusters.js';
import 'chrome://resources/cr_components/history_embeddings/filter_chips.js';
import 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './history_embeddings_promo.js';
import './history_cross_device_signin_promo.js';
import './history_sync_promo.js';
import './history_list.js';
import './history_toolbar.js';
import './history_filter_chips.js';
import './query_manager.js';
import './router.js';
import './side_bar.js';
import './synced_device_manager.js';
import '/strings.m.js';
import type { ForeignSession } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import type { Device, QueryResult, QueryState, TimePeriodOption } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { Suggestion } from 'chrome://resources/cr_components/history_embeddings/filter_chips.js';
import type { HistoryEmbeddingsMoreActionsClickEvent } from 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import type { CrDrawerElement } from 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrPageSelectorElement } from 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { HistoryIdentityState } from './browser_proxy.js';
import type { HistoryListElement } from './history_list.js';
import type { HistoryToolbarElement } from './history_toolbar.js';
import type { HistoryRouterElement } from './router.js';
import type { FooterInfo, HistorySideBarElement } from './side_bar.js';
export interface HistoryAppElement {
    $: {
        content: CrPageSelectorElement;
        contentSideBar: HistorySideBarElement;
        drawer: CrLazyRenderLitElement<CrDrawerElement>;
        history: HistoryListElement;
        tabsContainer: HTMLElement;
        tabsContent: CrPageSelectorElement;
        toolbar: HistoryToolbarElement;
        tabsScrollContainer: HTMLElement;
        router: HistoryRouterElement;
        historyEmbeddingsDisclaimerLink: HTMLElement;
    };
}
declare const HistoryAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class HistoryAppElement extends HistoryAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableHistoryEmbeddings_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        unoPhase2FollowUpEnabled_: {
            type: BooleanConstructor;
        };
        shouldShowHistorySyncPromo_: {
            type: BooleanConstructor;
        };
        shouldShowHistoryCrossDeviceSigninPromo_: {
            type: BooleanConstructor;
        };
        contentPage_: {
            type: StringConstructor;
        };
        tabsContentPage_: {
            type: StringConstructor;
        };
        selectedPage_: {
            type: StringConstructor;
        };
        queryResult_: {
            type: ObjectConstructor;
        };
        sessionList_: {
            type: ArrayConstructor;
        };
        identityState_: {
            type: ObjectConstructor;
        };
        pendingDelete_: {
            type: BooleanConstructor;
        };
        queryState_: {
            type: ObjectConstructor;
        };
        hasDrawer_: {
            type: BooleanConstructor;
        };
        footerInfo: {
            type: ObjectConstructor;
        };
        historyClustersEnabled_: {
            type: BooleanConstructor;
        };
        historyClustersVisible_: {
            type: BooleanConstructor;
        };
        lastSelectedTab_: {
            type: NumberConstructor;
        };
        showHistoryClusters_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showTabs_: {
            type: BooleanConstructor;
        };
        selectedTab_: {
            type: NumberConstructor;
        };
        tabsIcons_: {
            type: ArrayConstructor;
        };
        tabsNames_: {
            type: ArrayConstructor;
        };
        scrollTarget_: {
            type: ObjectConstructor;
        };
        queryStateAfterDate_: {
            type: ObjectConstructor;
        };
        hasHistoryEmbeddingsResults_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        tabContentScrollOffset_: {
            type: NumberConstructor;
        };
        nonEmbeddingsResultClicked_: {
            type: BooleanConstructor;
        };
        numCharsTypedInSearch_: {
            type: NumberConstructor;
        };
        historyEmbeddingsDisclaimerLinkClicked_: {
            type: BooleanConstructor;
        };
        devices_: {
            type: ArrayConstructor;
        };
        includeActorVisits_: {
            type: BooleanConstructor;
        };
        includeUserVisits_: {
            type: BooleanConstructor;
        };
        clientIds_: {
            type: ArrayConstructor;
        };
        isGlicWebActuationAvailable_: {
            type: BooleanConstructor;
        };
        isBrowsingHistoryFilterByDeviceEnabled_: {
            type: BooleanConstructor;
        };
        isBrowsingHistoryFilterByTimePeriodEnabled_: {
            type: BooleanConstructor;
        };
        timePeriodOptions_: {
            type: ArrayConstructor;
        };
    };
    accessor footerInfo: FooterInfo;
    protected accessor enableHistoryEmbeddings_: boolean;
    protected accessor unoPhase2FollowUpEnabled_: boolean;
    protected accessor shouldShowHistorySyncPromo_: boolean;
    protected accessor shouldShowHistoryCrossDeviceSigninPromo_: boolean;
    protected accessor hasDrawer_: boolean;
    protected accessor historyClustersEnabled_: boolean;
    protected accessor historyClustersVisible_: boolean;
    protected accessor identityState_: HistoryIdentityState;
    protected accessor lastSelectedTab_: number;
    protected accessor contentPage_: string;
    protected accessor tabsContentPage_: string;
    protected accessor pendingDelete_: boolean;
    protected accessor queryResult_: QueryResult;
    protected accessor sessionList_: ForeignSession[] | null;
    protected accessor queryState_: QueryState;
    protected accessor selectedPage_: string;
    protected accessor selectedTab_: number;
    protected accessor showTabs_: boolean;
    protected accessor showHistoryClusters_: boolean;
    protected accessor tabsIcons_: string[];
    protected accessor tabsNames_: string[];
    protected accessor scrollTarget_: HTMLElement;
    protected accessor queryStateAfterDate_: Date | undefined;
    private accessor hasHistoryEmbeddingsResults_;
    protected accessor historyEmbeddingsDisclaimerLinkClicked_: boolean;
    protected accessor tabContentScrollOffset_: number;
    protected accessor numCharsTypedInSearch_: number;
    protected accessor nonEmbeddingsResultClicked_: boolean;
    protected accessor devices_: Device[];
    protected accessor includeActorVisits_: boolean;
    protected accessor includeUserVisits_: boolean;
    protected accessor clientIds_: string[];
    protected accessor isGlicWebActuationAvailable_: boolean;
    protected accessor isBrowsingHistoryFilterByDeviceEnabled_: boolean;
    protected accessor isBrowsingHistoryFilterByTimePeriodEnabled_: boolean;
    protected accessor timePeriodOptions_: TimePeriodOption[];
    private callbackRouter_;
    private foreignSessionCallbackRouter_;
    private dataFromNativeBeforeInput_;
    private eventTracker_;
    private historyClustersViewStartTime_;
    private historyEmbeddingsResizeObserver_;
    private lastRecordedSelectedPageHistogramValue_;
    private onForeignSessionsChangedListenerId_;
    private onHasOtherFormsChangedListenerId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    getScrollTargetForTesting(): HTMLElement;
    protected getShowResultsByGroup_(): boolean;
    protected getShowHistoryList_(): boolean;
    protected onShowResultsByGroupChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected historyClustersSelected_(): boolean;
    private onFirstRender_;
    private onCrToolbarMenuClick_;
    /**
     * Listens for history-item being selected or deselected (through checkbox)
     * and changes the view of the top toolbar.
     */
    checkboxSelected(): void;
    selectOrUnselectAll(): void;
    /**
     * Listens for call to cancel selection and loops through all items to set
     * checkbox to be unselected.
     */
    private unselectAll;
    deleteSelected(): void;
    openSelected(): void;
    protected onQueryFinished_(e: CustomEvent<{
        result: QueryResult;
    }>): void;
    private onKeyDown_;
    private onVisibilityChange_;
    private onRecordHistoryLinkClick_;
    private onDeleteCommand_;
    /**
     * @return Whether the command was actually triggered.
     */
    private onSelectAllCommand_;
    /**
     * @param sessionList Array of objects describing the sessions from other
     *     devices.
     */
    private setForeignSessions_;
    /**
     * Updates the sign-in state.
     */
    private onIdentityStateChanged_;
    private onHasOtherFormsChanged_;
    protected syncedTabsSelected_(): boolean;
    /**
     * @return Whether a loading spinner should be shown (implies the
     *     backend is querying a new search term).
     */
    protected shouldShowSpinner_(): boolean;
    private updateContentPage_;
    private updateTabsContentPage_;
    private selectedPageChanged_;
    protected onContentIronSelect_(): void;
    protected onTabsContentIronSelect_(): void;
    private updateScrollTarget_;
    private maybeUpdateSelectedHistoryTab_;
    private historyViewChanged_;
    private recordHistoryClustersDuration_;
    private hasDrawerChanged_;
    private closeDrawer_;
    private recordHistoryPageView_;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    setHasDrawerForTesting(enabled: boolean): void;
    protected shouldShowHistoryPageHistorySyncPromo_(): boolean;
    private handleShouldShowHistoryPageHistorySyncPromoChanged_;
    protected onShouldShowHistoryCrossDeviceSigninPromo_(e: CustomEvent<{
        shouldShow: boolean;
    }>): void;
    protected shouldShowHistoryEmbeddings_(): boolean;
    protected onSelectedSuggestionChanged_(e: CustomEvent<{
        value: Suggestion;
    }>): void;
    protected onHistoryEmbeddingsDisclaimerLinkAuxclick_(): void;
    protected onHistoryEmbeddingsDisclaimerLinkClick_(): void;
    protected onHistoryEmbeddingsItemMoreFromSiteClick_(e: HistoryEmbeddingsMoreActionsClickEvent): void;
    protected onHistoryEmbeddingsItemRemoveItemClick_(e: HistoryEmbeddingsMoreActionsClickEvent): void;
    protected onHistoryEmbeddingsIsEmptyChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onHistoryEmbeddingsContainerShown_(): void;
    protected onQueryStateChanged_(e: CustomEvent<{
        value: QueryState;
    }>): void;
    protected onSelectedPageChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onToolbarSearchTermNativeBeforeInput_(e: CustomEvent<{
        e: InputEvent;
    }>): void;
    protected onToolbarSearchTermNativeInput_(e: CustomEvent<{
        e: InputEvent;
        inputValue: string;
    }>): void;
    protected onToolbarSearchTermCleared_(): void;
    protected onListPendingDeleteChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected onSelectedTabChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected onHistoryClustersVisibleChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onFilterChanged_(e: CustomEvent<{
        userVisits: boolean;
        actorVisits: boolean;
        clientIds: string[];
    }>): void;
    protected showActorFilter_(): boolean;
    protected showDeviceFilter_(): boolean;
    protected showTimePeriodFilter_(): boolean;
    protected showFilterChips_(): boolean;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-app': HistoryAppElement;
    }
}
export {};
