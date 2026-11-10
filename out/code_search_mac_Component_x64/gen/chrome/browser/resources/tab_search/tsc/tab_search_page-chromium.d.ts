import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './selectable_lazy_list.js';
import '/strings.m.js';
import './tab_search_group_item.js';
import './tab_search_item.js';
import './tab_search_split_item.js';
import './title_item.js';
import type { MetricsReporter } from 'chrome://resources/js/metrics_reporter/metrics_reporter.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SelectableLazyListElement } from './selectable_lazy_list.js';
import { SplitViewData, TabData, TabGroupData } from './tab_data.js';
import type { TabSearchGroupItemElement } from './tab_search_group_item.js';
import type { TabSearchItemElement } from './tab_search_item.js';
import { TitleItem } from './title_item.js';
export declare const SEARCH_QUERY_MAX_LENGTH: number;
declare const TabSearchSearchFieldBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/cr_search_field/cr_search_field_mixin_lit.js").CrSearchFieldMixinLitInterface);
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export declare enum TabSwitchAction {
    WITHOUT_SEARCH = 0,
    WITH_SEARCH = 1,
    COUNT = 2
}
/**
 * These values are persisted to logs and should not be renumbered or reused.
 * See tools/metrics/histograms/metadata/tab/enums.xml.
 */
export declare enum TabSearchUserAction {
    IN_FILTERED_LIST_OPEN_RECENTLY_CLOSED = 0,
    IN_FILTERED_LIST_SWITCHED_TAB = 1,
    IN_FILTERED_LIST_CLOSED_TAB = 2,
    IN_UNFILTERED_LIST_OPEN_RECENTLY_CLOSED = 3,
    IN_UNFILTERED_LIST_SWITCHED_TAB = 4,
    IN_UNFILTERED_LIST_CLOSED_TAB = 5,
    IN_FILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB = 6,
    IN_UNFILTERED_LIST_SWITCHED_OTHER_WINDOW_TAB = 7
}
export type TabSearchAction = 'SwitchTab' | 'SwitchTabOtherWindow' | 'CloseTab' | 'OpenRecentlyClosedEntry';
export interface TabSearchPageElement {
    $: {
        divider: HTMLElement;
        searchField: HTMLElement;
        searchInput: HTMLInputElement;
        searchWrapper: HTMLElement;
        tabsList: SelectableLazyListElement<TitleItem | TabData | TabGroupData>;
    };
}
export declare class TabSearchPageElement extends TabSearchSearchFieldBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        searchResultText_: {
            type: StringConstructor;
        };
        availableHeight: {
            type: NumberConstructor;
        };
        shortcut_: {
            type: StringConstructor;
        };
        searchText_: {
            type: StringConstructor;
        };
        filteredItems_: {
            type: ArrayConstructor;
        };
        listMaxHeight_: {
            type: NumberConstructor;
        };
        listItemSize_: {
            type: NumberConstructor;
        };
        searchQueryMaxLength_: {
            type: NumberConstructor;
        };
        activeDescendantEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Options for search. Controls how heavily weighted fields are relative
         * to each other in the scoring via field weights.
         */
        searchOptions_: {
            type: ObjectConstructor;
        };
        recentlyClosedDefaultItemDisplayCount_: {
            type: NumberConstructor;
        };
        activeSelectionId_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor availableHeight: number | undefined;
    private accessor searchText_;
    protected accessor listMaxHeight_: number | undefined;
    protected accessor listItemSize_: number | undefined;
    protected accessor searchQueryMaxLength_: number;
    protected accessor activeDescendantEnabled_: boolean;
    protected accessor filteredItems_: Array<TitleItem | TabData | TabGroupData | SplitViewData>;
    private accessor searchOptions_;
    private accessor recentlyClosedDefaultItemDisplayCount_;
    protected accessor searchResultText_: string;
    protected accessor activeSelectionId_: string | undefined;
    protected accessor shortcut_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    autofocus: boolean;
    private apiProxy_;
    private metricsReporter_;
    private listenerIds_;
    private tabGroupsMap_;
    private recentlyClosedTabGroups_;
    private openTabs_;
    private recentlyClosedTabs_;
    private windowShownTimestamp_;
    private mediaTabsTitleItem_;
    private openTabsTitleItem_;
    private recentlyClosedTitleItem_;
    private filteredOpenTabsCount_;
    private filteredOpenHeaderIndices_;
    private initiallySelectedIndex_;
    private documentVisibilityChangedListener_;
    constructor();
    get metricsReporter(): MetricsReporter;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    getSearchInput(): HTMLInputElement;
    /**
     * Do not schedule the timer from CrSearchFieldMixin to make search more
     * responsive.
     */
    onSearchTermInput(): void;
    /**
     * @param name A property whose value is specified in pixels.
     */
    private getStylePropertyPixelValue_;
    private onDocumentHidden_;
    private updateTabs_;
    private onTabUpdated_;
    private onTabsRemoved_;
    protected itemIndexToTabIndex_(itemIndex: number): number;
    getSelectedTabIndex(): number;
    private getA11ySearchResultText_;
    /**
     * @return The number of selectable list items, excludes non
     *     selectable items such as section title items.
     */
    protected selectableItemCount_(): number;
    /**
     * @return The last selectable list item, excludes non
     *     selectable items such as section title items.
     */
    private lastSelectableIndex_;
    protected onItemClick_(e: Event): void;
    private recordMetricsForAction;
    /**
     * Trigger the click/press action associated with the given Tab item type.
     */
    private tabItemAction_;
    protected onItemClose_(e: Event): void;
    protected onItemKeydown_(e: KeyboardEvent): void;
    private tabsChanged_;
    protected getAriaActivedescendant_(): string | undefined;
    protected onItemFocus_(e: Event): void;
    private getTitleItemFromTitle_;
    protected onTitleExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): Promise<void>;
    /**
     * Handles key events when the search field has focus.
     */
    protected onSearchKeydown_(e: KeyboardEvent): void;
    private announceA11y_;
    protected ariaLabel_(tabData: TabData | TabGroupData | SplitViewData): string;
    private tabData_;
    private updateSplitViewTabGroup_;
    private getRecentlyClosedItemLastActiveTime_;
    private updateFilteredTabs_;
    protected onSelectedChange_(e: CustomEvent<{
        item: (TabSearchItemElement | TabSearchGroupItemElement | null);
    }>): void;
    protected isTitleItem_(item: TitleItem | TabData | TabGroupData | SplitViewData): item is TitleItem;
    protected isTabData_(item: TitleItem | TabData | TabGroupData | SplitViewData): item is TabData;
    protected isTabGroupData_(item: TitleItem | TabData | TabGroupData | SplitViewData): item is TabGroupData;
    protected isSplitViewData_(item: TitleItem | TabData | TabGroupData | SplitViewData): item is SplitViewData;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-search-page': TabSearchPageElement;
    }
}
export {};
