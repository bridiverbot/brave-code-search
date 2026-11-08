// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './history_item.js';
import { OpenConversationResult } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { BROWSING_GAP_TIME, VisitContextMenuAction } from './constants.js';
import { getCss } from './history_list.css.js';
import { getHtml } from './history_list.html.js';
const HistoryListElementBase = I18nMixinLit(CrLitElement);
export class HistoryListElement extends HistoryListElementBase {
    static get is() {
        return 'history-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // The search term for the current query. Set when the query returns.
            searchedTerm: { type: String },
            resultLoadingDisabled_: { type: Boolean },
            /**
             * Indexes into historyData_ of selected items.
             */
            selectedItems: { type: Object },
            canDeleteHistory_: { type: Boolean },
            // An array of history entries in reverse chronological order.
            historyData_: { type: Array },
            lastFocused_: { type: Object },
            listBlurred_: { type: Boolean },
            lastSelectedIndex: { type: Number },
            pendingDelete: {
                notify: true,
                type: Boolean,
            },
            queryState: { type: Object },
            actionMenuModel_: { type: Object },
            scrollTarget: { type: Object },
            scrollOffset: { type: Number },
            // Whether this element is active, i.e. visible to the user.
            isActive: { type: Boolean },
            isEmpty: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #historyData__accessor_storage = [];
    get historyData_() { return this.#historyData__accessor_storage; }
    set historyData_(value) { this.#historyData__accessor_storage = value; }
    callbackRouter_;
    #canDeleteHistory__accessor_storage = loadTimeData.getBoolean('allowDeletingHistory');
    get canDeleteHistory_() { return this.#canDeleteHistory__accessor_storage; }
    set canDeleteHistory_(value) { this.#canDeleteHistory__accessor_storage = value; }
    #actionMenuModel__accessor_storage = null;
    get actionMenuModel_() { return this.#actionMenuModel__accessor_storage; }
    set actionMenuModel_(value) { this.#actionMenuModel__accessor_storage = value; }
    lastOffsetHeight_ = 0;
    resizeObserver_ = new ResizeObserver(() => {
        if (this.lastOffsetHeight_ === 0) {
            this.lastOffsetHeight_ = this.scrollTarget.offsetHeight;
            return;
        }
        if (this.scrollTarget.offsetHeight > this.lastOffsetHeight_) {
            this.lastOffsetHeight_ = this.scrollTarget.offsetHeight;
            this.onScrollOrResize_();
        }
    });
    #resultLoadingDisabled__accessor_storage = false;
    get resultLoadingDisabled_() { return this.#resultLoadingDisabled__accessor_storage; }
    set resultLoadingDisabled_(value) { this.#resultLoadingDisabled__accessor_storage = value; }
    scrollDebounce_ = 200;
    scrollListener_ = () => this.onScrollOrResize_();
    scrollTimeout_ = null;
    #isActive_accessor_storage = true;
    get isActive() { return this.#isActive_accessor_storage; }
    set isActive(value) { this.#isActive_accessor_storage = value; }
    #isEmpty_accessor_storage = false;
    get isEmpty() { return this.#isEmpty_accessor_storage; }
    set isEmpty(value) { this.#isEmpty_accessor_storage = value; }
    #searchedTerm_accessor_storage = '';
    get searchedTerm() { return this.#searchedTerm_accessor_storage; }
    set searchedTerm(value) { this.#searchedTerm_accessor_storage = value; }
    #selectedItems_accessor_storage = new Set();
    get selectedItems() { return this.#selectedItems_accessor_storage; }
    set selectedItems(value) { this.#selectedItems_accessor_storage = value; }
    #pendingDelete_accessor_storage = false;
    get pendingDelete() { return this.#pendingDelete_accessor_storage; }
    set pendingDelete(value) { this.#pendingDelete_accessor_storage = value; }
    #lastFocused__accessor_storage = null;
    get lastFocused_() { return this.#lastFocused__accessor_storage; }
    set lastFocused_(value) { this.#lastFocused__accessor_storage = value; }
    #listBlurred__accessor_storage = false;
    get listBlurred_() { return this.#listBlurred__accessor_storage; }
    set listBlurred_(value) { this.#listBlurred__accessor_storage = value; }
    #lastSelectedIndex_accessor_storage = -1;
    get lastSelectedIndex() { return this.#lastSelectedIndex_accessor_storage; }
    set lastSelectedIndex(value) { this.#lastSelectedIndex_accessor_storage = value; }
    #queryState_accessor_storage = {
        incremental: false,
        querying: false,
        searchTerm: '',
        after: null,
        includeUserVisits: true,
        includeActorVisits: true,
        clientIds: [],
    };
    get queryState() { return this.#queryState_accessor_storage; }
    set queryState(value) { this.#queryState_accessor_storage = value; }
    #scrollTarget_accessor_storage = document.documentElement;
    get scrollTarget() { return this.#scrollTarget_accessor_storage; }
    set scrollTarget(value) { this.#scrollTarget_accessor_storage = value; }
    #scrollOffset_accessor_storage = 0;
    get scrollOffset() { return this.#scrollOffset_accessor_storage; }
    set scrollOffset(value) { this.#scrollOffset_accessor_storage = value; }
    onHistoryDeletedListenerId_ = null;
    constructor() {
        super();
        this.callbackRouter_ = BrowserProxyImpl.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.onHistoryDeletedListenerId_ =
            this.callbackRouter_.onHistoryDeleted.addListener(this.onHistoryDeleted_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.onHistoryDeletedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.onHistoryDeletedListenerId_);
            this.onHistoryDeletedListenerId_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('historyData_')) {
            this.isEmpty = this.historyData_.length === 0;
        }
    }
    firstUpdated() {
        this.setAttribute('role', 'application');
        this.setAttribute('aria-roledescription', this.i18n('ariaRoleDescription'));
        this.addEventListener('history-checkbox-select', this.onItemSelected_);
        this.addEventListener('open-menu', this.onOpenMenu_);
        this.addEventListener('remove-bookmark-stars', e => this.onRemoveBookmarkStars_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('isActive')) {
            this.onIsActiveChanged_();
        }
        if (changedProperties.has('scrollTarget')) {
            this.onScrollTargetChanged_(changedProperties.get('scrollTarget'));
        }
    }
    /////////////////////////////////////////////////////////////////////////////
    // Public methods:
    /**
     * @param info An object containing information about the query.
     * @param results A list of results.
     */
    historyResult(info, results) {
        if (!info) {
            // Canceled results for an outdated query has null query info.
            return;
        }
        this.initializeResults_(info, results);
        this.closeMenu_();
        if (info.term && !this.queryState.incremental) {
            let resultsLabelId;
            if (loadTimeData.getBoolean('enableHistoryEmbeddings')) {
                // Differentiate screen reader messages if embeddings are enabled so
                // that the messages specify these are results for exact matches not
                // embeddings results.
                resultsLabelId = results.length === 1 ? 'searchResultExactMatch' :
                    'searchResultExactMatches';
            }
            else {
                resultsLabelId =
                    results.length === 1 ? 'searchResult' : 'searchResults';
            }
            const message = loadTimeData.getStringF('foundSearchResults', results.length, loadTimeData.getString(resultsLabelId), info.term);
            getAnnouncerInstance().announce(message);
        }
        this.addNewResults(results, this.queryState.incremental, info.finished);
    }
    /**
     * Adds the newly updated history results into historyData_. Adds new fields
     * for each result.
     * @param historyResults The new history results.
     * @param incremental Whether the result is from loading more history, or a
     *     new search/list reload.
     * @param finished True if there are no more results available and result
     *     loading should be disabled.
     */
    addNewResults(historyResults, incremental, finished) {
        const results = historyResults.slice();
        if (this.scrollTimeout_) {
            clearTimeout(this.scrollTimeout_);
        }
        if (!incremental) {
            this.resultLoadingDisabled_ = false;
            this.historyData_ = [];
            this.fire('unselect-all');
            this.scrollTarget.scrollTop = 0;
        }
        this.historyData_ = [...this.historyData_, ...results];
        this.resultLoadingDisabled_ = finished;
        this.recordActorVisitShown_(results);
    }
    recordActorVisitShown_(historyResults) {
        const historyResultsContainActorVisit = historyResults.some((result) => result.isActorVisit);
        BrowserProxyImpl.getInstance().recordBooleanHistogram('HistoryPage.ActorItemsShown', historyResultsContainActorVisit);
    }
    onHistoryDeleted_() {
        // Do not reload the list when there are items checked.
        if (this.getSelectedItemCount() > 0) {
            return;
        }
        // Reload the list with current search state.
        this.fire('query-history', false);
    }
    selectOrUnselectAll() {
        if (this.historyData_.length === this.getSelectedItemCount()) {
            this.unselectAllItems();
        }
        else {
            this.selectAllItems();
        }
    }
    /**
     * Select each item in |historyData|.
     */
    selectAllItems() {
        if (this.historyData_.length === this.getSelectedItemCount()) {
            return;
        }
        const indices = this.historyData_.map((_, index) => index);
        this.changeSelections_(indices, true);
    }
    /**
     * Deselect each item in |selectedItems|.
     */
    unselectAllItems() {
        this.changeSelections_(Array.from(this.selectedItems), false);
        assert(this.selectedItems.size === 0);
    }
    getSelectedItemCount() {
        return this.selectedItems.size;
    }
    /**
     * Delete all the currently selected history items. Will prompt the user with
     * a dialog to confirm that the deletion should be performed.
     */
    deleteSelectedWithPrompt() {
        if (!this.canDeleteHistory_) {
            return;
        }
        BrowserProxyImpl.getInstance().recordAction('RemoveSelected');
        if (this.queryState.searchTerm !== '') {
            BrowserProxyImpl.getInstance().recordAction('SearchResultRemove');
        }
        this.$.dialog.get().showModal();
        // TODO(dbeam): remove focus flicker caused by showModal() + focus().
        const button = this.shadowRoot.querySelector('.action-button');
        assert(button);
        button.focus();
    }
    fillCurrentViewport() {
        this.$.infiniteList.fillCurrentViewport();
    }
    openSelected() {
        const selected = this.getSelectedEntries_();
        for (const entry of selected) {
            window.open(entry.url, '_blank');
        }
    }
    /////////////////////////////////////////////////////////////////////////////
    // Private methods:
    /**
     * Set the selection status for a set of items by their indices.
     */
    changeSelections_(indices, selected) {
        indices.forEach(index => {
            if (this.historyData_[index]) {
                this.historyData_[index].selected = selected;
            }
            if (selected) {
                this.selectedItems.add(index);
            }
            else {
                this.selectedItems.delete(index);
            }
        });
        this.requestUpdate();
    }
    /**
     * Performs a request to the backend to delete all selected items. If
     * successful, removes them from the view. Does not prompt the user before
     * deleting -- see deleteSelectedWithPrompt for a version of this method which
     * does prompt.
     */
    deleteSelected_() {
        assert(!this.pendingDelete);
        const toBeRemoved = this.getSelectedEntries_();
        this.deleteItems_(toBeRemoved).then(() => {
            this.pendingDelete = false;
            this.removeItemsByIndex_(Array.from(this.selectedItems));
            this.fire('unselect-all');
            if (this.historyData_.length === 0) {
                // Try reloading if nothing is rendered.
                this.fire('query-history', false);
            }
        });
    }
    /**
     * Remove all |indices| from the history list.
     */
    removeItemsByIndex_(indices) {
        const indicesSet = new Set(indices);
        this.historyData_ =
            this.historyData_.filter((_, index) => !indicesSet.has(index));
    }
    removeItemsByIndexForTesting(indices) {
        this.removeItemsByIndex_(indices);
    }
    /**
     * Closes the overflow menu.
     */
    closeMenu_() {
        const menu = this.$.sharedMenu.getIfExists();
        if (menu && menu.open) {
            this.actionMenuModel_ = null;
            menu.close();
        }
    }
    /////////////////////////////////////////////////////////////////////////////
    // Event listeners:
    onDialogConfirmClick_() {
        BrowserProxyImpl.getInstance().recordAction('ConfirmRemoveSelected');
        this.deleteSelected_();
        const dialog = this.$.dialog.getIfExists();
        assert(dialog);
        dialog.close();
    }
    onDialogCancelClick_() {
        BrowserProxyImpl.getInstance().recordAction('CancelRemoveSelected');
        const dialog = this.$.dialog.getIfExists();
        assert(dialog);
        dialog.close();
    }
    /**
     * Remove bookmark star for history items with matching URLs.
     */
    onRemoveBookmarkStars_(e) {
        const url = e.detail;
        if (this.historyData_ === undefined) {
            return;
        }
        this.historyData_.forEach(data => {
            if (data.url === url) {
                data.starred = false;
            }
        });
        this.requestUpdate();
    }
    /**
     * Requests the next batch of history results, unless loading is disabled or
     * a query is already in progress.
     */
    loadMoreHistory_() {
        if (this.resultLoadingDisabled_ || this.queryState.querying) {
            return;
        }
        this.fire('query-history', true);
    }
    onViewportFilled_() {
        this.loadMoreIfListNotScrollable_();
    }
    /**
     * Each query returns a fixed number of visits, which can merge into only a
     * few entries. If the rendered list is too short to scroll, the user can't
     * trigger loading more by scrolling, so request more results directly.
     */
    loadMoreIfListNotScrollable_() {
        if (!this.isActive || this.historyData_.length === 0) {
            return;
        }
        const listRect = this.$.infiniteList.getBoundingClientRect();
        if (listRect.height === 0) {
            // The list has not been laid out yet (e.g. it is hidden).
            return;
        }
        // Use on-screen positions, not scrollHeight. `scrollTarget` may be <html>
        // or <body>, which never scroll here, so scrollHeight would say the list
        // fits even when it doesn't. Limit the result to window.innerHeight so the
        // check doesn't rely on CSS sizing <html> to the screen. Without that CSS
        // (e.g. in tests), <html> grows with its content and we'd keep loading
        // results the user doesn't need.
        const viewportBottom = Math.min(this.scrollTarget.getBoundingClientRect().bottom, window.innerHeight);
        if (listRect.bottom > viewportBottom) {
            return;
        }
        this.loadMoreHistory_();
    }
    onOpenMenu_(e) {
        const target = e.detail.target;
        this.actionMenuModel_ = e.detail;
        this.$.sharedMenu.get().showAt(target);
    }
    deleteItems_(items) {
        const removalList = items.flatMap(item => Object.entries(item.allTimestamps)
            .map(([url, timestamps]) => ({ url, timestamps })));
        this.pendingDelete = true;
        return BrowserProxyImpl.getInstance().handler.removeVisits(removalList);
    }
    recordContextMenuActionsHistogram_(action) {
        BrowserProxyImpl.getInstance().recordHistogram(this.actionMenuModel_.item.isActorVisit ?
            'HistoryPage.ActorContextMenuActions' :
            'HistoryPage.NonActorContextMenuActions', action, VisitContextMenuAction.MAX_VALUE);
    }
    onMoreFromSiteClick_() {
        BrowserProxyImpl.getInstance().recordAction('EntryMenuShowMoreFromSite');
        this.recordContextMenuActionsHistogram_(VisitContextMenuAction.MORE_FROM_THIS_SITE_CLICKED);
        assert(this.$.sharedMenu.getIfExists());
        this.fire('change-query', { search: 'host:' + this.actionMenuModel_.item.domain });
        this.actionMenuModel_ = null;
        this.closeMenu_();
    }
    onRemoveBookmarkClick_() {
        this.recordContextMenuActionsHistogram_(VisitContextMenuAction.REMOVE_BOOKMARK_CLICKED);
        BrowserProxyImpl.getInstance().handler.removeBookmark(this.actionMenuModel_.item.url);
        this.fire('remove-bookmark-stars', this.actionMenuModel_.item.url);
        this.closeMenu_();
    }
    isCriticalActionsEnabled_() {
        return loadTimeData.getBoolean('isCriticalActionsEnabled');
    }
    isChatLinkoutsEnabled_() {
        return loadTimeData.valueExists('isCriticalActionsChatLinkoutsEnabled') &&
            loadTimeData.getBoolean('isCriticalActionsChatLinkoutsEnabled');
    }
    canShowGoToGeminiChat_() {
        return this.isCriticalActionsEnabled_() && this.isChatLinkoutsEnabled_() &&
            (this.actionMenuModel_?.item.criticalActions?.length ?? 0) > 0;
    }
    async onGoToGeminiChatClick_() {
        BrowserProxyImpl.getInstance().recordAction('EntryMenuGoToGeminiChat');
        this.recordContextMenuActionsHistogram_(VisitContextMenuAction.GO_TO_GEMINI_CHAT_CLICKED);
        const actionId = this.actionMenuModel_?.item.criticalActions?.[0]?.id;
        this.closeMenu_();
        if (actionId) {
            const { result } = await BrowserProxyImpl.getInstance()
                .handler.openCriticalActionConversation(actionId);
            if (result !== OpenConversationResult.kSuccess) {
                this.$.errorToast.show();
            }
        }
    }
    canShowReviewGeminiActivity_() {
        return this.isCriticalActionsEnabled_() && !this.isChatLinkoutsEnabled_() &&
            (!!this.actionMenuModel_?.item.isActorVisit ||
                (this.actionMenuModel_?.item.criticalActions?.length ?? 0) > 0);
    }
    onReviewGeminiActivityClick_(e) {
        BrowserProxyImpl.getInstance().recordAction('EntryMenuReviewGeminiActivity');
        this.recordContextMenuActionsHistogram_(VisitContextMenuAction.REVIEW_GEMINI_ACTIVITY_CLICKED);
        BrowserProxyImpl.getInstance().navigateToUrl(loadTimeData.getString('myActivityGeminiAppsUrl'), '_blank', e);
        this.closeMenu_();
    }
    onRemoveFromHistoryClick_() {
        BrowserProxyImpl.getInstance().recordAction('EntryMenuRemoveFromHistory');
        this.recordContextMenuActionsHistogram_(VisitContextMenuAction.REMOVE_FROM_HISTORY_CLICKED);
        assert(!this.pendingDelete);
        assert(this.$.sharedMenu.getIfExists());
        const itemData = this.actionMenuModel_;
        this.deleteItems_([itemData.item]).then(() => {
            getAnnouncerInstance().announce(this.i18n('deleteSuccess', itemData.item.title));
            // This unselect-all resets the toolbar when deleting a selected item
            // and clears selection state which can be invalid if items move
            // around during deletion.
            // TODO(tsergeant): Make this automatic based on observing list
            // modifications.
            this.pendingDelete = false;
            this.fire('unselect-all');
            this.removeItemsByIndex_([itemData.index]);
            const index = itemData.index;
            if (index === undefined) {
                return;
            }
            if (this.historyData_.length > 0) {
                setTimeout(async () => {
                    const item = await this.$.infiniteList.ensureItemRendered(Math.min(this.historyData_.length - 1, index));
                    item.focusOnMenuButton();
                }, 1);
            }
        });
        this.closeMenu_();
    }
    onItemSelected_(e) {
        const index = e.detail.index;
        const indices = [];
        // Handle shift selection. Change the selection state of all items between
        // |path| and |lastSelected| to the selection state of |item|.
        if (e.detail.shiftKey && this.lastSelectedIndex !== -1) {
            for (let i = Math.min(index, this.lastSelectedIndex); i <= Math.max(index, this.lastSelectedIndex); i++) {
                indices.push(i);
            }
        }
        if (indices.length === 0) {
            indices.push(index);
        }
        const selected = !this.selectedItems.has(index);
        this.changeSelections_(indices, selected);
        this.lastSelectedIndex = index;
    }
    /////////////////////////////////////////////////////////////////////////////
    // Template helpers:
    /**
     * Check whether the time difference between the given history item and the
     * next one is large enough for a spacer to be required.
     */
    needsTimeGap_(_item, index) {
        const length = this.historyData_.length;
        if (index === undefined || index >= length - 1 || length === 0) {
            return false;
        }
        const currentItem = this.historyData_[index];
        const nextItem = this.historyData_[index + 1];
        if (this.searchedTerm) {
            return currentItem.dateShort !== nextItem.dateShort;
        }
        return currentItem.time - nextItem.time > BROWSING_GAP_TIME &&
            currentItem.dateRelativeDay === nextItem.dateRelativeDay;
    }
    /**
     * True if the given item is the beginning of a new card.
     * @param i Index of |item| within |historyData_|.
     */
    isCardStart_(_item, i) {
        const length = this.historyData_.length;
        if (i === undefined || length === 0 || i > length - 1) {
            return false;
        }
        return i === 0 ||
            this.historyData_[i].dateRelativeDay !==
                this.historyData_[i - 1].dateRelativeDay;
    }
    /**
     * True if the given item is the end of a card.
     * @param i Index of |item| within |historyData_|.
     */
    isCardEnd_(_item, i) {
        const length = this.historyData_.length;
        if (length === 0 || i > length - 1) {
            return false;
        }
        return i === length - 1 ||
            this.historyData_[i].dateRelativeDay !==
                this.historyData_[i + 1].dateRelativeDay;
    }
    hasResults_() {
        return this.historyData_.length > 0;
    }
    isHistoryFilteringEnabled_() {
        return loadTimeData.getBoolean('isBrowsingHistoryFilterByActorEnabled') ||
            loadTimeData.getBoolean('isBrowsingHistoryFilterByDeviceEnabled');
    }
    hasActiveFilter_() {
        const hasActiveActorDropdownFilter = loadTimeData.getBoolean('isBrowsingHistoryFilterByActorEnabled') &&
            (!this.queryState.includeUserVisits ||
                !this.queryState.includeActorVisits);
        return hasActiveActorDropdownFilter || this.queryState.clientIds.length > 0;
    }
    noResultsMessage_() {
        if (this.isHistoryFilteringEnabled_()) {
            return loadTimeData.getString(this.searchedTerm !== '' || this.hasActiveFilter_() ?
                'noMatchingResults' :
                'noResults');
        }
        return loadTimeData.getString(this.searchedTerm !== '' ? 'noSearchResults' : 'noResults');
    }
    canSearchMoreFromSite_() {
        return this.searchedTerm === '' ||
            this.searchedTerm !== this.actionMenuModel_?.item.domain;
    }
    initializeResults_(info, results) {
        if (results.length === 0) {
            return;
        }
        let currentDate = results[0].dateRelativeDay;
        for (const result of results) {
            // Sets the default values for these fields to prevent undefined types.
            result.selected = false;
            result.readableTimestamp =
                info.term === '' ? result.dateTimeOfDay : result.dateShort;
            if (result.dateRelativeDay !== currentDate) {
                currentDate = result.dateRelativeDay;
            }
        }
    }
    onIsActiveChanged_() {
        if (this.isActive) {
            // Active changed from false to true. Add the scroll observer.
            this.scrollTarget.addEventListener('scroll', this.scrollListener_);
        }
        else {
            // Active changed from true to false. Remove scroll observer.
            this.scrollTarget.removeEventListener('scroll', this.scrollListener_);
        }
    }
    onScrollTargetChanged_(oldTarget) {
        if (oldTarget) {
            this.resizeObserver_.disconnect();
            oldTarget.removeEventListener('scroll', this.scrollListener_);
        }
        if (this.scrollTarget) {
            this.lastOffsetHeight_ = this.scrollTarget.offsetHeight;
            this.resizeObserver_.observe(this.scrollTarget);
            this.scrollTarget.addEventListener('scroll', this.scrollListener_);
            this.fillCurrentViewport();
        }
    }
    setScrollDebounceForTest(debounce) {
        this.scrollDebounce_ = debounce;
    }
    onScrollOrResize_() {
        // Debounce by 200ms.
        if (this.scrollTimeout_) {
            clearTimeout(this.scrollTimeout_);
        }
        this.scrollTimeout_ =
            setTimeout(() => this.onScrollTimeout_(), this.scrollDebounce_);
    }
    onScrollTimeout_() {
        this.scrollTimeout_ = null;
        const lowerScroll = this.scrollTarget.scrollHeight -
            this.scrollTarget.scrollTop - this.scrollTarget.offsetHeight;
        if (lowerScroll < 500) {
            this.loadMoreHistory_();
        }
        this.fire('scroll-timeout-for-test');
    }
    onLastFocusedChanged_(e) {
        this.lastFocused_ = e.detail.value;
    }
    onListBlurredChanged_(e) {
        this.listBlurred_ = e.detail.value;
    }
    onRestoreListFocus_() {
        this.listBlurred_ = false;
    }
    getSelectedEntries_() {
        // `selectedItems` is a Set<number> of row-indexes.
        return Array.from(this.selectedItems, idx => this.historyData_[idx]);
    }
}
customElements.define(HistoryListElement.is, HistoryListElement);
