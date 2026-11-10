import '/strings.m.js';
import './icons.html.js';
import './power_bookmark_row.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_empty_state.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import '//resources/cr_elements/icons.html.js';
import './power_bookmarks_add_folder_button.js';
import './power_bookmarks_list_header.js';
import type { CrLazyListElement } from '//resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { BookmarksTreeNode, SortOrder } from './bookmarks.mojom-webui.js';
import { KeyArrowNavigationService } from './keyboard_arrow_navigation_service.js';
import type { PowerBookmarkRowElement } from './power_bookmark_row.js';
import type { PowerBookmarksDragDelegate } from './power_bookmarks_drag_manager.js';
import { PowerBookmarksDragManager } from './power_bookmarks_drag_manager.js';
import type { PowerBookmarksListHeaderElement } from './power_bookmarks_list_header.js';
import type { Label } from './power_bookmarks_service.js';
export interface DisplayItem {
    bookmark: BookmarksTreeNode;
    depth: number;
}
export interface PowerBookmarksListElement {
    $: {
        bookmarks: HTMLElement;
        folderEmptyStateA: HTMLElement;
        folderEmptyStateB: HTMLElement;
        heading: PowerBookmarksListHeaderElement;
        listA: CrLazyListElement<DisplayItem>;
        listB: CrLazyListElement<DisplayItem>;
        listContainer: HTMLElement;
        listWrapperA: HTMLElement;
        listWrapperB: HTMLElement;
        scroller: HTMLElement;
    };
}
interface ListSectionVisibility {
    heading?: boolean;
    filterHeadings?: boolean;
    folderEmptyState?: boolean;
    newFolderButton?: boolean;
    bookmarksList?: boolean;
}
export declare class PowerBookmarksListElement extends CrLitElement implements PowerBookmarksDragDelegate {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private getActiveList_;
    private get activeDisplayList_();
    private getDisplayList_;
    private getOtherListId_;
    private get inactiveList_();
    static get properties(): {
        displayListA_: {
            type: ArrayConstructor;
        };
        displayListB_: {
            type: ArrayConstructor;
        };
        activeList_: {
            type: StringConstructor;
        };
        transitioningList_: {
            type: StringConstructor;
        };
        compact_: {
            type: BooleanConstructor;
        };
        contextMenuBookmark: {
            type: ObjectConstructor;
        };
        activeFolderPath: {
            type: ArrayConstructor;
            notify: boolean;
        };
        imageUrls_: {
            type: ObjectConstructor;
        };
        labels: {
            type: ArrayConstructor;
        };
        sortOrder: {
            type: NumberConstructor;
        };
        activeSortIndex: {
            type: NumberConstructor;
        };
        editing: {
            type: BooleanConstructor;
        };
        selectedBookmarks: {
            type: ObjectConstructor;
        };
        renamingId: {
            type: StringConstructor;
            notify: boolean;
        };
        hasLoadedData_: {
            type: BooleanConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        shoppingCollectionFolderId_: {
            type: StringConstructor;
        };
        updatedElementIds_: {
            type: ArrayConstructor;
        };
        hasSomeActiveFilter: {
            type: BooleanConstructor;
        };
        hasShownBookmarks: {
            type: BooleanConstructor;
            notify: boolean;
        };
        canDrag_: {
            type: BooleanConstructor;
        };
        hasActiveDrag_: {
            type: BooleanConstructor;
        };
        sectionVisibility_: {
            type: ObjectConstructor;
        };
        hasFoldersA_: {
            type: BooleanConstructor;
        };
        hasFoldersB_: {
            type: BooleanConstructor;
        };
        firstSecondaryIndexA_: {
            type: NumberConstructor;
        };
        firstSecondaryIndexB_: {
            type: NumberConstructor;
        };
        activeFolderA_: {
            type: ObjectConstructor;
        };
        activeFolderB_: {
            type: ObjectConstructor;
        };
        scrollTarget_: {
            type: ObjectConstructor;
        };
    };
    private bookmarksApi_;
    private priceTrackingProxy_;
    private bookmarksService_;
    private keyArrowNavigationService_;
    private bookmarksDragManager_;
    private focusOutlineManager_;
    private shownBookmarksResizeObserver_?;
    private recordCountMetricsOnNextUpdate_;
    private rebuildNavigationElementsTimerId_;
    protected expandedFolderIds_: Set<string>;
    accessor activeFolderPath: BookmarksTreeNode[];
    protected accessor activeSortIndex: number;
    protected accessor sortOrder: SortOrder;
    accessor contextMenuBookmark: BookmarksTreeNode | undefined;
    accessor editing: boolean;
    accessor hasSomeActiveFilter: boolean;
    accessor hasShownBookmarks: boolean;
    accessor labels: Label[];
    accessor renamingId: string;
    accessor searchQuery: string | undefined;
    protected accessor compact_: boolean;
    protected accessor displayListA_: DisplayItem[];
    protected accessor displayListB_: DisplayItem[];
    protected accessor activeList_: string;
    protected accessor transitioningList_: string;
    protected accessor imageUrls_: {
        [key: string]: string;
    };
    protected accessor selectedBookmarks: {
        [key: string]: boolean;
    };
    protected accessor hasLoadedData_: boolean;
    protected accessor canDrag_: boolean;
    protected accessor hasActiveDrag_: boolean;
    protected accessor sectionVisibility_: ListSectionVisibility;
    protected accessor hasFoldersA_: boolean;
    protected accessor hasFoldersB_: boolean;
    protected accessor scrollTarget_: HTMLElement;
    protected accessor shoppingCollectionFolderId_: string;
    protected accessor updatedElementIds_: string[];
    protected accessor firstSecondaryIndexA_: number;
    protected accessor firstSecondaryIndexB_: number;
    protected accessor activeFolderA_: BookmarksTreeNode | undefined;
    protected accessor activeFolderB_: BookmarksTreeNode | undefined;
    private boundOnAnimationEnd_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    setImageUrl(bookmark: BookmarksTreeNode, url: string): void;
    onBookmarksLoaded(): void;
    onBookmarkChanged(id: string): void;
    private scrollToBookmark_;
    onBookmarkAdded(bookmark: BookmarksTreeNode, parent: BookmarksTreeNode): void;
    onBookmarkMoved(bookmark: BookmarksTreeNode, oldParent: BookmarksTreeNode, newParent: BookmarksTreeNode): void;
    onBookmarkRemoved(bookmark: BookmarksTreeNode): void;
    /** PowerBookmarksDragDelegate */
    getFallbackBookmark(): BookmarksTreeNode;
    /** PowerBookmarksDragDelegate */
    getFallbackDropTargetElement(): HTMLElement;
    /** PowerBookmarksDragDelegate */
    onFinishDrop(dropTarget: BookmarksTreeNode): void;
    /** PowerBookmarksDragDelegate */
    setHasActiveDrag(hasActiveDrag: boolean): void;
    clickBookmarkRowForTests(bookmark: BookmarksTreeNode): void;
    /**
     * Returns the KeyboardNavigationService instance for testing.
     */
    getKeyboardNavigationServiceforTesting(): KeyArrowNavigationService;
    getDragManagerForTesting(): PowerBookmarksDragManager;
    flushNavigationElementsDebouncerForTesting(): void;
    private computeCanDrag_;
    private focusBookmark_;
    private bookmarkIsShowing_;
    /**
     * Returns true if the given node is either the current active folder or a
     * root folder that isn't shown itself while the all bookmarks list is shown.
     */
    private visibleParent_;
    private bookmarkShouldShow_;
    getActiveFolder(): BookmarksTreeNode | undefined;
    getBookmarkRowElement(id: string): PowerBookmarkRowElement | null;
    protected getBookmarksListRole_(): string;
    private updateShoppingCollectionFolderId_;
    protected getActiveFolderLabel_(listId: string): string;
    /**
     * Recursively flattens the child bookmarks and sub-folders of an expanded
     * folder into the flat display list array, calculating appropriate
     * indentation depth.
     */
    private flattenFolder_;
    private lastActiveFolderPathLength_;
    /**
     * Updates the lists of bookmarks and folders displayed to the user.
     * If folder navigation has occurred, it populates the inactive list buffer
     * and initiates a transition animation. Otherwise, it updates the active
     * list buffer directly.
     */
    private updateDisplayList_;
    private onSearchChanged_;
    private updateListScrollOffset_;
    protected getListClass_(listId: string): string;
    protected isListActiveOrTransitioning_(listId: string): boolean;
    protected getItemSize_(): number | undefined;
    private getFolderHeight_;
    protected isFolderEmptyStateVisible_(listId: string): boolean;
    private resetListBuffer_;
    private getListWrapper_;
    private finalizeTransition_;
    protected onAnimationEnd_(e: AnimationEvent): void;
    private onCanDragChange_;
    private recordMetricsOnConnected_;
    private rebuildNavigationElements_;
    private recordBookmarkCountMetrics_;
    private recordBookmarkCountMetricsInternal_;
    /**
     * Recursively removes all descendant folder IDs of a collapsed folder from
     * the expandedFolderIds_ Set, so they are initialized collapsed when
     * re-opened.
     */
    private collapseDescendants_;
    protected onPowerBookmarkToggle_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        expanded: boolean;
    }>): void;
    protected onListItemSizeChanged_(): void;
    /**
     * Focuses the parent row of a child row, delegating focus backward traversal.
     */
    protected onPowerBookmarkRowFocusParent_(e: CustomEvent<{
        parentId: string;
    }>): void;
    /**
     * Invoked when the user clicks a power bookmarks row. This will either
     * display children in the case of a folder row, or open the URL in the case
     * of a bookmark row.
     */
    protected onRowClicked_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        event: MouseEvent;
    }>): void;
    protected onCheckboxChange_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        checked: boolean;
    }>): void;
    protected onInputChange_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        value: string | null;
    }>): void;
    protected getRowHeading_(index: number, listId: 'a' | 'b'): string;
    protected notifyBookmarksListResize_(): void;
    protected getSelectedBookmarksList_(): BookmarksTreeNode[];
    /**
     * Toggles the given label between active and inactive.
     */
    /**
     * Moves the displayed folders up one level when the back button is clicked.
     */
    protected onBackClicked_(): void;
    private dispatchActiveFolderPathChanged_;
    protected onShowContextMenu_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        event: MouseEvent;
    }>): void;
    protected onTrailingIconClicked_(event: CustomEvent<{
        bookmark: BookmarksTreeNode;
        event: MouseEvent;
    }>): void;
    getParentFolder(): BookmarksTreeNode;
    protected onAddNewFolderClick_(event: MouseEvent): void;
    protected onViewToggled_(): void;
    private computeSectionVisibility_;
    private onShownBookmarksResize_;
    protected onSortChanged_(e: CustomEvent<{
        index: number;
        sortOrder: SortOrder;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-list': PowerBookmarksListElement;
    }
}
export {};
