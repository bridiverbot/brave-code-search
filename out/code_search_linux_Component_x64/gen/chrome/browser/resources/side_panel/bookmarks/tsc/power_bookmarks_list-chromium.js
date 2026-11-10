// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
import { browserProxyFactory as priceTrackingBrowserProxyFactory } from '//resources/cr_components/commerce/price_tracking.mojom-webui.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ActionSource, ViewType } from './bookmarks.mojom-webui.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { KeyArrowNavigationService } from './keyboard_arrow_navigation_service.js';
import { BOOKMARK_ROW_LOAD_EVENT } from './power_bookmark_row.js';
import { PowerBookmarksDragManager } from './power_bookmarks_drag_manager.js';
import { getCss } from './power_bookmarks_list.css.js';
import { getHtml } from './power_bookmarks_list.html.js';
import { editingDisabledByPolicy, PowerBookmarksService } from './power_bookmarks_service.js';
import { getFolderLabel } from './power_bookmarks_utils.js';
// Height of the sp-empty-state folder empty state inside list buffers.
// Matches the CSS height defined in power_bookmarks_list.css.
// LINT.IfChange(FolderEmptyStateHeight)
const FOLDER_EMPTY_STATE_HEIGHT = 300;
// LINT.ThenChange(power_bookmarks_list.css:FolderEmptyStateHeight)
// Constants for bookmark item heights in compact and expanded views.
// Matches the CSS heights defined in cr_url_list_item.css.
const COMPACT_ITEM_HEIGHT = 36;
const EXPANDED_ITEM_HEIGHT = 68;
function getBookmarkName(bookmark) {
    return bookmark.title || bookmark.url || '';
}
import { SearchAction, recordFolderAdded, recordSearchCTR, recordViewType, recordBookmarksShown } from './power_bookmarks_metrics.js';
export class PowerBookmarksListElement extends CrLitElement {
    static get is() {
        return 'power-bookmarks-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    getActiveList_() {
        return this.activeList_ === 'a' ? this.$.listA : this.$.listB;
    }
    get activeDisplayList_() {
        return this.activeList_ === 'a' ? this.displayListA_ : this.displayListB_;
    }
    getDisplayList_(listId) {
        return listId === 'a' ? this.displayListA_ : this.displayListB_;
    }
    getOtherListId_(listId) {
        return listId === 'a' ? 'b' : 'a';
    }
    get inactiveList_() {
        return this.getOtherListId_(this.activeList_);
    }
    static get properties() {
        return {
            displayListA_: {
                type: Array,
            },
            displayListB_: {
                type: Array,
            },
            activeList_: {
                type: String,
            },
            transitioningList_: {
                type: String,
            },
            compact_: {
                type: Boolean,
            },
            contextMenuBookmark: { type: Object },
            activeFolderPath: {
                type: Array,
                notify: true,
            },
            imageUrls_: {
                type: Object,
            },
            labels: {
                type: Array,
            },
            sortOrder: { type: Number },
            activeSortIndex: { type: Number },
            editing: {
                type: Boolean,
            },
            selectedBookmarks: {
                type: Object,
            },
            renamingId: {
                type: String,
                notify: true,
            },
            hasLoadedData_: {
                type: Boolean,
            },
            searchQuery: { type: String },
            shoppingCollectionFolderId_: { type: String },
            updatedElementIds_: {
                type: Array,
            },
            hasSomeActiveFilter: {
                type: Boolean,
            },
            hasShownBookmarks: {
                type: Boolean,
                notify: true,
            },
            canDrag_: {
                type: Boolean,
            },
            hasActiveDrag_: {
                type: Boolean,
            },
            sectionVisibility_: {
                type: Object,
            },
            hasFoldersA_: {
                type: Boolean,
            },
            hasFoldersB_: {
                type: Boolean,
            },
            firstSecondaryIndexA_: {
                type: Number,
            },
            firstSecondaryIndexB_: {
                type: Number,
            },
            activeFolderA_: {
                type: Object,
            },
            activeFolderB_: {
                type: Object,
            },
            scrollTarget_: {
                type: Object,
            },
        };
    }
    bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
    priceTrackingProxy_ = priceTrackingBrowserProxyFactory.getInstance();
    bookmarksService_ = PowerBookmarksService.getInstance();
    keyArrowNavigationService_;
    bookmarksDragManager_;
    focusOutlineManager_ = null;
    shownBookmarksResizeObserver_;
    recordCountMetricsOnNextUpdate_ = false;
    rebuildNavigationElementsTimerId_ = -1;
    expandedFolderIds_ = new Set();
    #activeFolderPath_accessor_storage = [];
    get activeFolderPath() { return this.#activeFolderPath_accessor_storage; }
    set activeFolderPath(value) { this.#activeFolderPath_accessor_storage = value; }
    #activeSortIndex_accessor_storage = 0;
    get activeSortIndex() { return this.#activeSortIndex_accessor_storage; }
    set activeSortIndex(value) { this.#activeSortIndex_accessor_storage = value; }
    #sortOrder_accessor_storage = 0;
    get sortOrder() { return this.#sortOrder_accessor_storage; }
    set sortOrder(value) { this.#sortOrder_accessor_storage = value; }
    #contextMenuBookmark_accessor_storage;
    get contextMenuBookmark() { return this.#contextMenuBookmark_accessor_storage; }
    set contextMenuBookmark(value) { this.#contextMenuBookmark_accessor_storage = value; }
    #editing_accessor_storage = false;
    get editing() { return this.#editing_accessor_storage; }
    set editing(value) { this.#editing_accessor_storage = value; }
    #hasSomeActiveFilter_accessor_storage = false;
    get hasSomeActiveFilter() { return this.#hasSomeActiveFilter_accessor_storage; }
    set hasSomeActiveFilter(value) { this.#hasSomeActiveFilter_accessor_storage = value; }
    #hasShownBookmarks_accessor_storage = false;
    get hasShownBookmarks() { return this.#hasShownBookmarks_accessor_storage; }
    set hasShownBookmarks(value) { this.#hasShownBookmarks_accessor_storage = value; }
    #labels_accessor_storage = [];
    get labels() { return this.#labels_accessor_storage; }
    set labels(value) { this.#labels_accessor_storage = value; }
    #renamingId_accessor_storage = '';
    get renamingId() { return this.#renamingId_accessor_storage; }
    set renamingId(value) { this.#renamingId_accessor_storage = value; }
    #searchQuery_accessor_storage;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #compact__accessor_storage = loadTimeData.getInteger('viewType') === 0;
    get compact_() { return this.#compact__accessor_storage; }
    set compact_(value) { this.#compact__accessor_storage = value; }
    #displayListA__accessor_storage = [];
    // Double-buffering architecture for smooth sliding folder transitions:
    // Rather than having static 'incoming' and 'outgoing' lists (which would
    // require copying or moving DOM nodes, resetting scroll and focus
    // states), the component uses two static list buffers ('a' and 'b').
    // At any given time, one buffer is the active, visible list (pointed
    // to by `activeList_`) and the other is the inactive, hidden list. When
    // navigating to a new folder, the inactive list is populated
    // off-screen (acting as the incoming list) and transitioned into view.
    // Once the transition is complete, the buffers swap their
    // active/inactive roles.
    // `transitioningList_` holds the ID of the buffer currently animating
    // into view, or an empty string if no transition is active.
    get displayListA_() { return this.#displayListA__accessor_storage; }
    set displayListA_(value) { this.#displayListA__accessor_storage = value; }
    #displayListB__accessor_storage = [];
    get displayListB_() { return this.#displayListB__accessor_storage; }
    set displayListB_(value) { this.#displayListB__accessor_storage = value; }
    #activeList__accessor_storage = 'a';
    get activeList_() { return this.#activeList__accessor_storage; }
    set activeList_(value) { this.#activeList__accessor_storage = value; }
    #transitioningList__accessor_storage = '';
    get transitioningList_() { return this.#transitioningList__accessor_storage; }
    set transitioningList_(value) { this.#transitioningList__accessor_storage = value; }
    #imageUrls__accessor_storage = {};
    get imageUrls_() { return this.#imageUrls__accessor_storage; }
    set imageUrls_(value) { this.#imageUrls__accessor_storage = value; }
    #selectedBookmarks_accessor_storage = {};
    get selectedBookmarks() { return this.#selectedBookmarks_accessor_storage; }
    set selectedBookmarks(value) { this.#selectedBookmarks_accessor_storage = value; }
    #hasLoadedData__accessor_storage = false;
    get hasLoadedData_() { return this.#hasLoadedData__accessor_storage; }
    set hasLoadedData_(value) { this.#hasLoadedData__accessor_storage = value; }
    #canDrag__accessor_storage = true;
    get canDrag_() { return this.#canDrag__accessor_storage; }
    set canDrag_(value) { this.#canDrag__accessor_storage = value; }
    #hasActiveDrag__accessor_storage = false;
    get hasActiveDrag_() { return this.#hasActiveDrag__accessor_storage; }
    set hasActiveDrag_(value) { this.#hasActiveDrag__accessor_storage = value; }
    #sectionVisibility__accessor_storage = {};
    get sectionVisibility_() { return this.#sectionVisibility__accessor_storage; }
    set sectionVisibility_(value) { this.#sectionVisibility__accessor_storage = value; }
    #hasFoldersA__accessor_storage = false;
    get hasFoldersA_() { return this.#hasFoldersA__accessor_storage; }
    set hasFoldersA_(value) { this.#hasFoldersA__accessor_storage = value; }
    #hasFoldersB__accessor_storage = false;
    get hasFoldersB_() { return this.#hasFoldersB__accessor_storage; }
    set hasFoldersB_(value) { this.#hasFoldersB__accessor_storage = value; }
    #scrollTarget__accessor_storage = document.documentElement;
    get scrollTarget_() { return this.#scrollTarget__accessor_storage; }
    set scrollTarget_(value) { this.#scrollTarget__accessor_storage = value; }
    #shoppingCollectionFolderId__accessor_storage = '';
    get shoppingCollectionFolderId_() { return this.#shoppingCollectionFolderId__accessor_storage; }
    set shoppingCollectionFolderId_(value) { this.#shoppingCollectionFolderId__accessor_storage = value; }
    #updatedElementIds__accessor_storage = [];
    get updatedElementIds_() { return this.#updatedElementIds__accessor_storage; }
    set updatedElementIds_(value) { this.#updatedElementIds__accessor_storage = value; }
    #firstSecondaryIndexA__accessor_storage = -1;
    get firstSecondaryIndexA_() { return this.#firstSecondaryIndexA__accessor_storage; }
    set firstSecondaryIndexA_(value) { this.#firstSecondaryIndexA__accessor_storage = value; }
    #firstSecondaryIndexB__accessor_storage = -1;
    get firstSecondaryIndexB_() { return this.#firstSecondaryIndexB__accessor_storage; }
    set firstSecondaryIndexB_(value) { this.#firstSecondaryIndexB__accessor_storage = value; }
    #activeFolderA__accessor_storage = undefined;
    get activeFolderA_() { return this.#activeFolderA__accessor_storage; }
    set activeFolderA_(value) { this.#activeFolderA__accessor_storage = value; }
    #activeFolderB__accessor_storage = undefined;
    get activeFolderB_() { return this.#activeFolderB__accessor_storage; }
    set activeFolderB_(value) { this.#activeFolderB__accessor_storage = value; }
    boundOnAnimationEnd_ = this.onAnimationEnd_.bind(this);
    constructor() {
        super();
        const keyArrowNavigationService = new KeyArrowNavigationService(this, 'power-bookmark-row:not([hidden])');
        KeyArrowNavigationService.setInstance(keyArrowNavigationService);
        this.keyArrowNavigationService_ = keyArrowNavigationService;
        this.bookmarksDragManager_ = new PowerBookmarksDragManager(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
        this.shownBookmarksResizeObserver_ =
            new ResizeObserver(this.onShownBookmarksResize_.bind(this));
        this.shownBookmarksResizeObserver_.observe(this.$.bookmarks);
        this.updateListScrollOffset_();
        this.bookmarksDragManager_.startObserving();
        this.updateShoppingCollectionFolderId_();
        this.recordMetricsOnConnected_();
        this.keyArrowNavigationService_.startListening();
        this.addEventListener(BOOKMARK_ROW_LOAD_EVENT, () => {
            this.rebuildNavigationElements_();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shownBookmarksResizeObserver_.disconnect();
        this.shownBookmarksResizeObserver_ = undefined;
        this.bookmarksDragManager_.stopObserving();
        this.keyArrowNavigationService_.stopListening();
        if (this.rebuildNavigationElementsTimerId_ !== -1) {
            clearTimeout(this.rebuildNavigationElementsTimerId_);
            this.rebuildNavigationElementsTimerId_ = -1;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('searchQuery')) {
            this.onSearchChanged_();
        }
        let displayListChanged = false;
        if (changedProperties.has('activeFolderPath') ||
            changedProperties.has('labels') ||
            changedPrivateProperties.has('sortOrder') ||
            changedProperties.has('searchQuery') ||
            changedProperties.has('hasSomeActiveFilter') ||
            changedPrivateProperties.has('compact_')) {
            this.updateDisplayList_();
            displayListChanged = true;
        }
        if (changedProperties.has('editing') ||
            changedProperties.has('renamingId') ||
            changedProperties.has('hasSomeActiveFilter')) {
            this.canDrag_ = this.computeCanDrag_();
        }
        if (changedPrivateProperties.has('hasLoadedData_') || displayListChanged) {
            this.sectionVisibility_ = this.computeSectionVisibility_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.scrollTarget_ = this.$.scroller;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('compact_')) {
            this.updateListScrollOffset_();
        }
        if (changedPrivateProperties.has('canDrag_')) {
            this.onCanDragChange_();
        }
    }
    setImageUrl(bookmark, url) {
        this.imageUrls_[bookmark.id] = url;
        this.imageUrls_ = { ...this.imageUrls_ };
    }
    onBookmarksLoaded() {
        this.updateDisplayList_();
        this.hasLoadedData_ = true;
    }
    onBookmarkChanged(id) {
        const bookmark = this.bookmarksService_.findBookmarkWithId(id);
        this.updatedElementIds_ = [bookmark.id];
        if (this.bookmarkShouldShow_(bookmark) ||
            this.bookmarkIsShowing_(bookmark)) {
            this.updateDisplayList_();
        }
    }
    async scrollToBookmark_(bookmark) {
        const displayList = this.activeDisplayList_;
        const index = displayList.findIndex(item => item.bookmark.id === bookmark.id);
        if (index === -1) {
            return;
        }
        const listEl = this.getActiveList_();
        const element = await listEl.ensureItemRendered(index);
        if (element) {
            element.scrollIntoView({ block: 'nearest' });
        }
    }
    onBookmarkAdded(bookmark, parent) {
        if (this.bookmarkShouldShow_(bookmark)) {
            this.updateShoppingCollectionFolderId_();
            this.updateDisplayList_();
            if (bookmark.url) {
                getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkCreated', getBookmarkName(bookmark)));
            }
            else {
                getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkFolderCreated', getBookmarkName(bookmark)));
            }
            this.updateComplete.then(async () => {
                const listEl = this.getActiveList_();
                await listEl.updateComplete;
                this.scrollToBookmark_(bookmark);
            });
        }
        this.updatedElementIds_ = [bookmark.id, parent.id];
    }
    onBookmarkMoved(bookmark, oldParent, newParent) {
        const shouldShow = this.bookmarkShouldShow_(bookmark);
        const isShowing = this.bookmarkIsShowing_(bookmark);
        let noMetrics = false;
        if (oldParent === newParent && shouldShow) {
            getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkReordered', getBookmarkName(bookmark)));
            noMetrics = true;
        }
        else if ((shouldShow !== isShowing) ||
            (shouldShow && this.hasSomeActiveFilter)) {
            const scrollTop = this.$.scroller.scrollTop;
            getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkMoved', getBookmarkName(bookmark), getBookmarkName(newParent)));
            this.updateComplete.then(() => {
                this.$.scroller.scrollTop = scrollTop;
            });
        }
        this.updateDisplayList_(noMetrics);
        this.updatedElementIds_ = [newParent.id, oldParent.id];
        // If the new parent folder is visible, notify to ensure its displayed
        // child count is updated.
        // If compact, we must resize open folders
        if (this.compact_) {
            this.notifyBookmarksListResize_();
        }
    }
    onBookmarkRemoved(bookmark) {
        getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkDeleted', getBookmarkName(bookmark)));
        const scrollTop = this.$.scroller.scrollTop;
        this.updateDisplayList_(/* noMetrics = */ true);
        this.updateComplete.then(() => {
            this.$.scroller.scrollTop = scrollTop;
        });
        if (this.shoppingCollectionFolderId_ === bookmark.id) {
            this.shoppingCollectionFolderId_ = '';
        }
        this.updatedElementIds_ = [bookmark.parentId];
    }
    /** PowerBookmarksDragDelegate */
    getFallbackBookmark() {
        // Returning other bookmarks folder allows moving bookmarks to the root
        // folder
        if (this.compact_) {
            return this.bookmarksService_.findBookmarkWithId(loadTimeData.getString('otherBookmarksId'));
        }
        return this.getParentFolder();
    }
    /** PowerBookmarksDragDelegate */
    getFallbackDropTargetElement() {
        return this;
    }
    /** PowerBookmarksDragDelegate */
    onFinishDrop(dropTarget) {
        this.updateDisplayList_();
        this.focusBookmark_(dropTarget.id);
        // Show the focus state immediately after dropping a bookmark to indicate
        // where the bookmark was moved to, and remove the state immediately after
        // the next mouse event.
        this.focusOutlineManager_.visible = true;
        document.addEventListener('mousedown', () => {
            this.focusOutlineManager_.visible = false;
        }, { once: true });
    }
    /** PowerBookmarksDragDelegate */
    setHasActiveDrag(hasActiveDrag) {
        this.hasActiveDrag_ = hasActiveDrag;
    }
    clickBookmarkRowForTests(bookmark) {
        const event = new CustomEvent('row-clicked', {
            bubbles: true,
            composed: true,
            detail: {
                bookmark: bookmark,
                event: new MouseEvent('row-clicked'),
            },
        });
        this.onRowClicked_(event);
    }
    /**
     * Returns the KeyboardNavigationService instance for testing.
     */
    getKeyboardNavigationServiceforTesting() {
        return this.keyArrowNavigationService_;
    }
    getDragManagerForTesting() {
        return this.bookmarksDragManager_;
    }
    flushNavigationElementsDebouncerForTesting() {
        if (this.rebuildNavigationElementsTimerId_ === -1) {
            return;
        }
        clearTimeout(this.rebuildNavigationElementsTimerId_);
        this.keyArrowNavigationService_.rebuildNavigationElements();
        this.rebuildNavigationElementsTimerId_ = -1;
    }
    computeCanDrag_() {
        return !this.editing && !this.renamingId && !this.hasSomeActiveFilter;
    }
    focusBookmark_(id) {
        const bookmarkElement = this.shadowRoot.querySelector(`#bookmark-${id}`);
        if (bookmarkElement) {
            bookmarkElement.focus();
        }
    }
    bookmarkIsShowing_(bookmark) {
        const displayList = this.activeDisplayList_;
        return displayList.some(item => item.bookmark.id === bookmark.id);
    }
    /**
     * Returns true if the given node is either the current active folder or a
     * root folder that isn't shown itself while the all bookmarks list is shown.
     */
    visibleParent_(parent) {
        const activeFolder = this.getActiveFolder();
        return (!activeFolder &&
            parent.parentId === loadTimeData.getString('rootBookmarkId') &&
            !this.bookmarkIsShowing_(parent)) ||
            parent === activeFolder;
    }
    bookmarkShouldShow_(bookmark) {
        if (this.hasSomeActiveFilter) {
            return this.bookmarksService_.bookmarkMatchesSearchQueryAndLabels(bookmark, this.labels, this.searchQuery);
        }
        return this.visibleParent_(this.bookmarksService_.findBookmarkWithId(bookmark.parentId));
    }
    getActiveFolder() {
        if (this.activeFolderPath.length) {
            return this.activeFolderPath[this.activeFolderPath.length - 1];
        }
        return undefined;
    }
    getBookmarkRowElement(id) {
        return this.shadowRoot.querySelector(`#bookmark-${id}`);
    }
    getBookmarksListRole_() {
        return this.editing ? 'listbox' : 'list';
    }
    updateShoppingCollectionFolderId_() {
        this.priceTrackingProxy_.handler.getShoppingCollectionBookmarkFolderId()
            .then(res => {
            this.shoppingCollectionFolderId_ = res.collectionId.toString();
        });
    }
    getActiveFolderLabel_(listId) {
        const folder = listId === 'a' ? this.activeFolderA_ : this.activeFolderB_;
        return getFolderLabel(folder);
    }
    /**
     * Recursively flattens the child bookmarks and sub-folders of an expanded
     * folder into the flat display list array, calculating appropriate
     * indentation depth.
     */
    flattenFolder_(folder, depth, list) {
        if (!this.expandedFolderIds_.has(folder.id) || !folder.children) {
            return;
        }
        const sortedChildren = folder.children.slice();
        this.bookmarksService_.sortBookmarks(sortedChildren, this.activeSortIndex);
        for (const child of sortedChildren) {
            list.push({ bookmark: child, depth: depth + 1 });
            if (!child.url) {
                this.flattenFolder_(child, depth + 1, list);
            }
        }
    }
    // The length of the active folder path from the last update. Used to
    // determine navigation direction (forward vs. backward) for animations.
    lastActiveFolderPathLength_ = 0;
    /**
     * Updates the lists of bookmarks and folders displayed to the user.
     * If folder navigation has occurred, it populates the inactive list buffer
     * and initiates a transition animation. Otherwise, it updates the active
     * list buffer directly.
     */
    updateDisplayList_(noMetrics = false) {
        const activeFolder = this.getActiveFolder();
        const primaryList = this.bookmarksService_.filterBookmarks(activeFolder, this.sortOrder, this.searchQuery, this.labels);
        this.bookmarksService_.refreshDataForBookmarks(primaryList);
        let secondaryList = [];
        if (this.hasSomeActiveFilter && !!activeFolder) {
            secondaryList = this.bookmarksService_.filterBookmarks(undefined, this.sortOrder, this.searchQuery, this.labels, activeFolder);
            this.bookmarksService_.refreshDataForBookmarks(secondaryList);
        }
        const displayList = [];
        for (const node of primaryList) {
            displayList.push({ bookmark: node, depth: 0 });
            if (!node.url) {
                this.flattenFolder_(node, 0, displayList);
            }
        }
        const firstSecondaryIndex = displayList.length;
        for (const node of secondaryList) {
            displayList.push({ bookmark: node, depth: 0 });
            if (!node.url) {
                this.flattenFolder_(node, 0, displayList);
            }
        }
        // Track navigation direction and whether we are entering a new folder.
        const currentPathLength = this.activeFolderPath.length;
        const pathLengthChanged = currentPathLength !== this.lastActiveFolderPathLength_;
        // If an animation is already in progress, finalize it immediately to
        // prevent overlaps.
        const wasTransitioning = this.transitioningList_ !== '';
        if (wasTransitioning) {
            this.finalizeTransition_(this.transitioningList_, noMetrics, true);
        }
        if (pathLengthChanged && this.hasLoadedData_) {
            // Determine if this is forward (deeper folder) or backward (parent
            // folder) navigation.
            const forward = currentPathLength > this.lastActiveFolderPathLength_;
            this.lastActiveFolderPathLength_ = currentPathLength;
            // Trigger the slide transition on the header.
            this.$.heading.transitionFolderLabel(activeFolder, forward);
            // Alternate double-buffered lists: write new contents to the off-screen
            // buffer.
            const currentListId = this.activeList_;
            const targetListId = this.inactiveList_;
            // Lock the container height to the current height to prevent visual
            // content jumps.
            if (!wasTransitioning) {
                const activeHeight = this.getFolderHeight_(currentListId);
                this.$.listContainer.style.height = `${activeHeight}px`;
            }
            // Write data to the target buffer.
            const hasFolders = !!displayList && displayList.some(item => !item.bookmark.url);
            if (targetListId === 'a') {
                this.displayListA_ = displayList;
                this.firstSecondaryIndexA_ =
                    secondaryList.length > 0 ? firstSecondaryIndex : -1;
                this.activeFolderA_ = activeFolder;
                this.hasFoldersA_ = hasFolders;
            }
            else {
                this.displayListB_ = displayList;
                this.firstSecondaryIndexB_ =
                    secondaryList.length > 0 ? firstSecondaryIndex : -1;
                this.activeFolderB_ = activeFolder;
                this.hasFoldersB_ = hasFolders;
            }
            this.transitioningList_ = targetListId;
            this.hasShownBookmarks = !!displayList && displayList.length > 0;
            this.updateListScrollOffset_();
            // Wait for Lit to render the contents into the target list buffer.
            this.updateComplete.then(() => {
                const containerEl = this.$.listContainer;
                const currentListEl = this.getListWrapper_(currentListId);
                const targetListEl = this.getListWrapper_(targetListId);
                requestAnimationFrame(() => {
                    const currentHeight = containerEl.offsetHeight;
                    const targetHeight = this.getFolderHeight_(targetListId);
                    // Animate the container height to fit the new list size.
                    containerEl.style.height = `${currentHeight}px`;
                    void containerEl.offsetHeight; // Force layout reflow.
                    containerEl.style.height = `${targetHeight}px`;
                    // Clear previous transition styles.
                    currentListEl.classList.remove('animation-fade-in', 'animation-fade-out', 'animation-slide-in-from-right', 'animation-slide-out-to-right', 'animation-slide-in-from-left');
                    targetListEl.classList.remove('animation-fade-in', 'animation-fade-out', 'animation-slide-in-from-right', 'animation-slide-out-to-right', 'animation-slide-in-from-left');
                    void targetListEl.offsetWidth; // Force layout reflow.
                    // Apply transitions:
                    // - Forward: Outgoing list fades out, incoming list slides from
                    //   right.
                    // - Backward: Outgoing list fades out, incoming list slides from
                    //   left.
                    if (forward) {
                        containerEl.classList.remove('direction-backward');
                        containerEl.classList.add('direction-forward');
                        currentListEl.classList.add('animation-fade-out');
                        targetListEl.classList.add('animation-slide-in-from-right');
                    }
                    else {
                        containerEl.classList.remove('direction-forward');
                        containerEl.classList.add('direction-backward');
                        currentListEl.classList.add('animation-fade-out');
                        targetListEl.classList.add('animation-slide-in-from-left');
                    }
                    targetListEl.addEventListener('animationend', this.boundOnAnimationEnd_);
                    currentListEl.addEventListener('animationend', this.boundOnAnimationEnd_);
                });
            });
        }
        else {
            this.lastActiveFolderPathLength_ = currentPathLength;
            const hasFolders = !!displayList && displayList.some(item => !item.bookmark.url);
            if (this.activeList_ === 'a') {
                this.displayListA_ = displayList;
                this.firstSecondaryIndexA_ =
                    secondaryList.length > 0 ? firstSecondaryIndex : -1;
                this.activeFolderA_ = activeFolder;
                this.hasFoldersA_ = hasFolders;
            }
            else {
                this.displayListB_ = displayList;
                this.firstSecondaryIndexB_ =
                    secondaryList.length > 0 ? firstSecondaryIndex : -1;
                this.activeFolderB_ = activeFolder;
                this.hasFoldersB_ = hasFolders;
            }
            this.hasShownBookmarks = !!displayList && displayList.length > 0;
            this.updateListScrollOffset_();
            // After the lists are updated and all children updates are complete,
            // notify cr-lazy-list to resize.
            this.updateComplete.then(async () => {
                // Allow time for child Lit elements to render.
                await new Promise(resolve => setTimeout(resolve, 0));
                this.notifyBookmarksListResize_();
                // Make sure the keyboard navigation tree is rebuilt whenever the
                // cr-lazy-list is updated.
                this.rebuildNavigationElements_();
                if (this.recordCountMetricsOnNextUpdate_ && this.hasLoadedData_ &&
                    !noMetrics) {
                    this.recordBookmarkCountMetrics_();
                }
            });
        }
    }
    onSearchChanged_() {
        this.recordCountMetricsOnNextUpdate_ = true;
    }
    updateListScrollOffset_() {
        // Set scrollOffset so the cr-lazy-list scrolling accounts for the space the
        // other scrolling UI elements take.
        this.updateComplete.then(() => {
            const bookmarksOffsetTop = this.$.bookmarks.offsetTop;
            const listEl = this.getActiveList_();
            listEl.scrollOffset = listEl.offsetTop - bookmarksOffsetTop;
        });
    }
    getListClass_(listId) {
        const classes = ['list-wrapper'];
        if (listId === this.activeList_) {
            classes.push('active');
        }
        if (listId === this.transitioningList_) {
            classes.push('transitioning');
        }
        return classes.join(' ');
    }
    isListActiveOrTransitioning_(listId) {
        return listId === this.activeList_ || listId === this.transitioningList_;
    }
    getItemSize_() {
        if (this.hasSomeActiveFilter) {
            return undefined;
        }
        return this.compact_ ? COMPACT_ITEM_HEIGHT : EXPANDED_ITEM_HEIGHT;
    }
    getFolderHeight_(listId) {
        if (this.isFolderEmptyStateVisible_(listId)) {
            return FOLDER_EMPTY_STATE_HEIGHT;
        }
        const displayList = this.getDisplayList_(listId);
        const itemsCount = displayList ? displayList.length : 0;
        const itemHeight = this.compact_ ? COMPACT_ITEM_HEIGHT : EXPANDED_ITEM_HEIGHT;
        return itemsCount * itemHeight;
    }
    isFolderEmptyStateVisible_(listId) {
        if (!this.hasLoadedData_) {
            return false;
        }
        const displayList = this.getDisplayList_(listId);
        const activeFolder = listId === 'a' ? this.activeFolderA_ : this.activeFolderB_;
        const hasShownBookmarks = !!displayList && displayList.length > 0;
        const hasActiveFolder = !!activeFolder;
        const hasSomeActiveFilter = this.hasSomeActiveFilter;
        return !hasShownBookmarks && !hasSomeActiveFilter && hasActiveFolder;
    }
    resetListBuffer_(listId) {
        if (listId === 'a') {
            this.displayListA_ = [];
            this.firstSecondaryIndexA_ = -1;
            this.activeFolderA_ = undefined;
            this.hasFoldersA_ = false;
        }
        else {
            this.displayListB_ = [];
            this.firstSecondaryIndexB_ = -1;
            this.activeFolderB_ = undefined;
            this.hasFoldersB_ = false;
        }
    }
    getListWrapper_(listId) {
        return listId === 'a' ? this.$.listWrapperA : this.$.listWrapperB;
    }
    finalizeTransition_(targetListId, noMetrics = false, isInterrupted = false) {
        if (!isInterrupted) {
            this.$.listContainer.style.height = '';
        }
        const currentListId = this.getOtherListId_(targetListId);
        const currentListEl = this.getListWrapper_(currentListId);
        const targetListEl = this.getListWrapper_(targetListId);
        if (currentListEl) {
            currentListEl.classList.remove('animation-fade-in', 'animation-fade-out', 'animation-slide-in-from-right', 'animation-slide-out-to-right');
            currentListEl.removeEventListener('animationend', this.boundOnAnimationEnd_);
        }
        if (targetListEl) {
            targetListEl.classList.remove('animation-fade-in', 'animation-fade-out', 'animation-slide-in-from-right', 'animation-slide-out-to-right');
            targetListEl.removeEventListener('animationend', this.boundOnAnimationEnd_);
        }
        this.transitioningList_ = '';
        this.activeList_ = targetListId;
        // Reset the inactive buffer so dormant rows are purged from the DOM.
        this.resetListBuffer_(currentListId);
        this.updateListScrollOffset_();
        this.notifyBookmarksListResize_();
        this.rebuildNavigationElements_();
        if (this.recordCountMetricsOnNextUpdate_ && !noMetrics) {
            this.recordBookmarkCountMetrics_();
        }
    }
    onAnimationEnd_(e) {
        const targetListId = this.transitioningList_;
        if (!targetListId) {
            return;
        }
        const targetListEl = this.getListWrapper_(targetListId);
        const currentListId = this.getOtherListId_(targetListId);
        const currentListEl = this.getListWrapper_(currentListId);
        if (e.target === targetListEl || e.target === currentListEl) {
            this.finalizeTransition_(targetListId);
        }
    }
    onCanDragChange_() {
        if (this.canDrag_) {
            this.bookmarksDragManager_.startObserving();
        }
        else {
            this.bookmarksDragManager_.stopObserving();
        }
    }
    recordMetricsOnConnected_() {
        recordViewType(this.compact_);
        recordSearchCTR(SearchAction.SHOWN);
        this.recordCountMetricsOnNextUpdate_ = true;
    }
    rebuildNavigationElements_() {
        if (this.rebuildNavigationElementsTimerId_ !== -1) {
            clearTimeout(this.rebuildNavigationElementsTimerId_);
        }
        this.rebuildNavigationElementsTimerId_ = setTimeout(() => {
            this.rebuildNavigationElementsTimerId_ = -1;
            // Wait until the transition animation completes and the target list
            // buffer becomes active before rebuilding navigation elements.
            // Rebuilding too early during the transition causes double-buffered lists
            // to both be evaluated as visible in the DOM, producing incorrect metric
            // counts.
            if (this.transitioningList_ !== '') {
                return;
            }
            this.keyArrowNavigationService_.rebuildNavigationElements();
            this.fire('rebuild-navigation-elements');
            if (this.recordCountMetricsOnNextUpdate_ && this.hasLoadedData_) {
                this.recordBookmarkCountMetricsInternal_();
                this.recordCountMetricsOnNextUpdate_ = false;
            }
        }, 1);
    }
    recordBookmarkCountMetrics_() {
        this.recordCountMetricsOnNextUpdate_ = true;
        this.rebuildNavigationElements_();
    }
    recordBookmarkCountMetricsInternal_() {
        recordBookmarksShown(this.keyArrowNavigationService_.getElementCount(), this.hasSomeActiveFilter);
        this.fire('bookmark-count-recorded');
    }
    /**
     * Recursively removes all descendant folder IDs of a collapsed folder from
     * the expandedFolderIds_ Set, so they are initialized collapsed when
     * re-opened.
     */
    collapseDescendants_(folder) {
        if (!folder.children) {
            return;
        }
        for (const child of folder.children) {
            if (!child.url) {
                this.expandedFolderIds_.delete(child.id);
                this.collapseDescendants_(child);
            }
        }
    }
    onPowerBookmarkToggle_(event) {
        const { bookmark, expanded } = event.detail;
        if (expanded) {
            this.expandedFolderIds_.add(bookmark.id);
        }
        else {
            this.expandedFolderIds_.delete(bookmark.id);
            this.collapseDescendants_(bookmark);
        }
        this.updateDisplayList_(/* noMetrics =*/ true);
        this.notifyBookmarksListResize_();
        this.recordBookmarkCountMetrics_();
    }
    onListItemSizeChanged_() {
        this.notifyBookmarksListResize_();
    }
    /**
     * Focuses the parent row of a child row, delegating focus backward traversal.
     */
    onPowerBookmarkRowFocusParent_(e) {
        const parentElement = this.shadowRoot.querySelector(`#bookmark-${e.detail.parentId}`);
        if (parentElement) {
            parentElement.focus();
            this.keyArrowNavigationService_.setCurrentFocusIndex(parentElement);
        }
    }
    /**
     * Invoked when the user clicks a power bookmarks row. This will either
     * display children in the case of a folder row, or open the URL in the case
     * of a bookmark row.
     */
    onRowClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.transitioningList_ !== '') {
            return;
        }
        if (!this.editing) {
            if (event.detail.bookmark.children) {
                this.recordCountMetricsOnNextUpdate_ = true;
                this.activeFolderPath =
                    [...this.activeFolderPath, event.detail.bookmark];
                this.dispatchActiveFolderPathChanged_();
                this.fire('clear-search');
                this.updateComplete.then(async () => {
                    const displayList = this.activeDisplayList_;
                    if (displayList.length > 0) {
                        const listEl = this.getActiveList_();
                        const element = await listEl.ensureItemRendered(0);
                        element.focus();
                    }
                });
            }
            else {
                this.bookmarksApi_.openBookmark(event.detail.bookmark.id, this.activeFolderPath.length, {
                    middleButton: event.detail.event.button === 1,
                    altKey: event.detail.event.altKey,
                    ctrlKey: event.detail.event.ctrlKey,
                    metaKey: event.detail.event.metaKey,
                    shiftKey: event.detail.event.shiftKey,
                }, ActionSource.kBookmark);
            }
        }
        // TODO(crbug.com/493823435): Determine if this iron-list related workaround
        // is still necessary now that the list has been migrated to cr-lazy-list.
        if (event.target) {
            event.target.blur();
        }
    }
    onCheckboxChange_(event) {
        event.preventDefault();
        event.stopPropagation();
        const isSelected = Object.entries(this.selectedBookmarks)
            .find(([key, _val]) => key === event.detail.bookmark.id)?.[1] ??
            false;
        if ((event.detail.checked && !isSelected) ||
            (!event.detail.checked && isSelected)) {
            this.fire('row-selected-change', {
                id: event.detail.bookmark.id,
                checked: event.detail.checked,
            });
        }
    }
    onInputChange_(event) {
        const newName = event.detail.value;
        if (newName != null) {
            this.bookmarksApi_.renameBookmark(event.detail.bookmark.id, newName);
        }
        this.renamingId = '';
    }
    getRowHeading_(index, listId) {
        const showHeadings = this.sectionVisibility_ && this.sectionVisibility_.filterHeadings;
        if (!showHeadings) {
            return '';
        }
        const firstSecondaryIndex = listId === 'a' ? this.firstSecondaryIndexA_ :
            this.firstSecondaryIndexB_;
        if (index === firstSecondaryIndex) {
            return loadTimeData.getString('secondaryFilterHeading');
        }
        if (index === 0) {
            return loadTimeData.getStringF('primaryFilterHeading', this.getActiveFolderLabel_(listId));
        }
        return '';
    }
    notifyBookmarksListResize_() {
        this.getActiveList_().fillCurrentViewport();
    }
    getSelectedBookmarksList_() {
        const selectedEntries = Object.entries(this.selectedBookmarks).filter(([_id, selected]) => selected);
        const selectedIds = selectedEntries.map(([id, _selected]) => id);
        return selectedIds
            .map((id) => this.bookmarksService_.findBookmarkWithId(id))
            .filter(b => !!b);
    }
    /**
     * Toggles the given label between active and inactive.
     */
    /**
     * Moves the displayed folders up one level when the back button is clicked.
     */
    onBackClicked_() {
        this.recordCountMetricsOnNextUpdate_ = true;
        this.activeFolderPath = this.activeFolderPath.slice(0, -1);
        this.dispatchActiveFolderPathChanged_();
    }
    dispatchActiveFolderPathChanged_() {
        this.fire('active-folder-path-changed', { value: this.activeFolderPath });
    }
    onShowContextMenu_(event) {
        this.fire('show-context-menu', event.detail);
    }
    onTrailingIconClicked_(event) {
        this.onShowContextMenu_(event);
    }
    getParentFolder() {
        return this.getActiveFolder() ||
            this.bookmarksService_.findBookmarkWithId(loadTimeData.getString('otherBookmarksId'));
    }
    onAddNewFolderClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        const newParent = this.getParentFolder();
        if (editingDisabledByPolicy([newParent])) {
            this.fire('disabled-feature');
            return;
        }
        recordFolderAdded();
        this.bookmarksApi_
            .createFolder(newParent.id, loadTimeData.getString('newFolderTitle'))
            .then((result) => {
            this.renamingId = result.newFolderId;
        });
    }
    onViewToggled_() {
        this.compact_ = !this.compact_;
        this.notifyBookmarksListResize_();
        recordViewType(this.compact_);
        const viewType = this.compact_ ? ViewType.kCompact : ViewType.kExpanded;
        this.bookmarksApi_.setViewType(viewType);
    }
    computeSectionVisibility_() {
        if (!this.hasLoadedData_) {
            return {};
        }
        const hasActiveFolder = this.activeFolderPath.length > 0;
        const hasShownBookmarks = this.hasShownBookmarks;
        const hasSomeActiveFilter = this.hasSomeActiveFilter;
        return {
            heading: !hasSomeActiveFilter && (hasActiveFolder || hasShownBookmarks),
            filterHeadings: hasSomeActiveFilter,
            folderEmptyState: !hasShownBookmarks && !hasSomeActiveFilter && hasActiveFolder,
            newFolderButton: !hasSomeActiveFilter,
            bookmarksList: hasShownBookmarks,
        };
    }
    onShownBookmarksResize_() {
        // The cr-lazy-list of `displayList_` is in a dynamically sized card.
        // Any time the size changes, let cr-lazy-list know so that cr-lazy-list can
        // properly adjust to its possibly new height.
        this.notifyBookmarksListResize_();
        this.fire('has-scrollbars-changed', this.$.scroller.scrollHeight > this.$.scroller.offsetHeight);
    }
    onSortChanged_(e) {
        this.activeSortIndex = e.detail.index;
        this.sortOrder = e.detail.sortOrder;
    }
}
