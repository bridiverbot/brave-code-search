// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './commerce/shopping_list.js';
import './icons.html.js';
import './power_bookmarks_context_menu.js';
import './power_bookmarks_labels.js';
import './power_bookmarks_list.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_empty_state.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_footer.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_list_item_badge.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import '//resources/cr_elements/icons.html.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { browserProxyFactory as priceTrackingBrowserProxyFactory } from '//resources/cr_components/commerce/price_tracking.mojom-webui.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { PluralStringProxyImpl } from '//resources/js/plural_string_proxy.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ActionSource } from './bookmarks.mojom-webui.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { getCss } from './power_bookmarks_app.css.js';
import { getHtml } from './power_bookmarks_app.html.js';
import { recordBookmarkAdded, recordSearchCTR, SearchAction } from './power_bookmarks_metrics.js';
import { editingDisabledByPolicy, PowerBookmarksService } from './power_bookmarks_service.js';
export class PowerBookmarksAppElement extends CrLitElement {
    static get is() {
        return 'power-bookmarks-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            contextMenuBookmark_: { type: Object },
            activeFolderPath_: { type: Array },
            currentUrl_: { type: String },
            labels_: { type: Array },
            editing_: { type: Boolean },
            renamingId_: { type: String },
            selectedBookmarks_: { type: Object },
            guestMode_: {
                type: Boolean,
                reflect: true,
            },
            canAddCurrentUrl_: { type: Boolean },
            deletionDescription_: { type: String },
            hasScrollbars_: {
                type: Boolean,
                reflect: true,
            },
            hasLoadedData_: { type: Boolean },
            searchQuery_: { type: String },
            trackedProductInfos_: { type: Object },
            hasSomeActiveFilter_: { type: Boolean },
            hasShownBookmarks_: { type: Boolean },
            sectionVisibility_: { type: Object },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
    priceTrackingProxy_ = priceTrackingBrowserProxyFactory.getInstance();
    shoppingListenerIds_ = [];
    #trackedProductInfos__accessor_storage = {};
    get trackedProductInfos_() { return this.#trackedProductInfos__accessor_storage; }
    set trackedProductInfos_(value) { this.#trackedProductInfos__accessor_storage = value; }
    availableProductInfos_ = new Map();
    bookmarksService_;
    #activeFolderPath__accessor_storage = [];
    get activeFolderPath_() { return this.#activeFolderPath__accessor_storage; }
    set activeFolderPath_(value) { this.#activeFolderPath__accessor_storage = value; }
    #canAddCurrentUrl__accessor_storage = false;
    get canAddCurrentUrl_() { return this.#canAddCurrentUrl__accessor_storage; }
    set canAddCurrentUrl_(value) { this.#canAddCurrentUrl__accessor_storage = value; }
    #labels__accessor_storage = [];
    get labels_() { return this.#labels__accessor_storage; }
    set labels_(value) { this.#labels__accessor_storage = value; }
    #searchQuery__accessor_storage = '';
    get searchQuery_() { return this.#searchQuery__accessor_storage; }
    set searchQuery_(value) { this.#searchQuery__accessor_storage = value; }
    #currentUrl__accessor_storage = undefined;
    get currentUrl_() { return this.#currentUrl__accessor_storage; }
    set currentUrl_(value) { this.#currentUrl__accessor_storage = value; }
    #editing__accessor_storage = false;
    get editing_() { return this.#editing__accessor_storage; }
    set editing_(value) { this.#editing__accessor_storage = value; }
    #renamingId__accessor_storage = '';
    get renamingId_() { return this.#renamingId__accessor_storage; }
    set renamingId_(value) { this.#renamingId__accessor_storage = value; }
    #selectedBookmarks__accessor_storage = {};
    get selectedBookmarks_() { return this.#selectedBookmarks__accessor_storage; }
    set selectedBookmarks_(value) { this.#selectedBookmarks__accessor_storage = value; }
    #guestMode__accessor_storage = loadTimeData.getBoolean('guestMode');
    get guestMode_() { return this.#guestMode__accessor_storage; }
    set guestMode_(value) { this.#guestMode__accessor_storage = value; }
    #deletionDescription__accessor_storage = '';
    get deletionDescription_() { return this.#deletionDescription__accessor_storage; }
    set deletionDescription_(value) { this.#deletionDescription__accessor_storage = value; }
    #hasScrollbars__accessor_storage = false;
    get hasScrollbars_() { return this.#hasScrollbars__accessor_storage; }
    set hasScrollbars_(value) { this.#hasScrollbars__accessor_storage = value; }
    #contextMenuBookmark__accessor_storage = undefined;
    get contextMenuBookmark_() { return this.#contextMenuBookmark__accessor_storage; }
    set contextMenuBookmark_(value) { this.#contextMenuBookmark__accessor_storage = value; }
    #hasLoadedData__accessor_storage = false;
    get hasLoadedData_() { return this.#hasLoadedData__accessor_storage; }
    set hasLoadedData_(value) { this.#hasLoadedData__accessor_storage = value; }
    #hasSomeActiveFilter__accessor_storage = false;
    get hasSomeActiveFilter_() { return this.#hasSomeActiveFilter__accessor_storage; }
    set hasSomeActiveFilter_(value) { this.#hasSomeActiveFilter__accessor_storage = value; }
    #hasShownBookmarks__accessor_storage = false;
    get hasShownBookmarks_() { return this.#hasShownBookmarks__accessor_storage; }
    set hasShownBookmarks_(value) { this.#hasShownBookmarks__accessor_storage = value; }
    #sectionVisibility__accessor_storage = {};
    get sectionVisibility_() { return this.#sectionVisibility__accessor_storage; }
    set sectionVisibility_(value) { this.#sectionVisibility__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    showUiCalled_ = false;
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        const bookmarksService = new PowerBookmarksService(this);
        PowerBookmarksService.setInstance(bookmarksService);
        this.bookmarksService_ = PowerBookmarksService.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'application');
        if (!this.showUiCalled_) {
            this.showUiCalled_ = true;
            this.bookmarksApi_.showUi();
        }
        this.bookmarksService_.startListening();
        this.priceTrackingProxy_.handler.getAllPriceTrackedBookmarkProductInfo()
            .then(res => {
            const newTrackedProductInfos = { ...this.trackedProductInfos_ };
            res.productInfos.forEach(product => {
                newTrackedProductInfos[product.bookmarkId.toString()] = product;
            });
            this.trackedProductInfos_ = newTrackedProductInfos;
        });
        this.priceTrackingProxy_.handler.getAllShoppingBookmarkProductInfo().then(res => {
            res.productInfos.forEach(product => this.setAvailableProductInfo_(product));
        });
        const callbackRouter = this.priceTrackingProxy_.callbackRouter;
        this.shoppingListenerIds_.push(callbackRouter.priceTrackedForBookmark.addListener((product) => this.onBookmarkPriceTracked_(product)), callbackRouter.priceUntrackedForBookmark.addListener((product) => this.onBookmarkPriceUntracked_(product)));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.bookmarksService_.stopListening();
        this.shoppingListenerIds_.forEach(id => this.priceTrackingProxy_.callbackRouter.removeListener(id));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('currentUrl_')) {
            this.updateCanAddCurrentUrl_();
        }
        if (changedPrivateProperties.has('searchQuery_') ||
            changedPrivateProperties.has('labels_')) {
            this.hasSomeActiveFilter_ = this.computeHasSomeActiveFilter_();
        }
        if (changedPrivateProperties.has('hasLoadedData_') ||
            changedPrivateProperties.has('activeFolderPath_') ||
            changedPrivateProperties.has('hasShownBookmarks_') ||
            changedPrivateProperties.has('labels_') ||
            changedPrivateProperties.has('searchQuery_') ||
            changedPrivateProperties.has('hasSomeActiveFilter_') ||
            changedPrivateProperties.has('guestMode_')) {
            this.sectionVisibility_ = this.computeSectionVisibility_();
        }
    }
    getCurrentUrlForTesting() {
        return this.currentUrl_;
    }
    // PowerBookmarksDelegate
    setCurrentUrl(url) {
        this.currentUrl_ = url;
    }
    onBookmarksLoaded() {
        this.$.bookmarksList.onBookmarksLoaded();
        this.hasLoadedData_ = true;
        this.updateCanAddCurrentUrl_();
    }
    onBookmarkChanged(id) {
        this.$.bookmarksList.onBookmarkChanged(id);
        this.updateShoppingData_();
        this.updateCanAddCurrentUrl_();
        if (this.selectedBookmarks_[id]) {
            this.selectedBookmarks_ = {};
        }
    }
    onBookmarkAdded(bookmark, parent) {
        this.$.bookmarksList.onBookmarkAdded(bookmark, parent);
        this.updateShoppingData_();
        this.updateCanAddCurrentUrl_();
    }
    onBookmarkMoved(bookmark, oldParent, newParent) {
        this.$.bookmarksList.onBookmarkMoved(bookmark, oldParent, newParent);
        this.updateCanAddCurrentUrl_();
        if (this.selectedBookmarks_[bookmark.id]) {
            this.selectedBookmarks_ = {};
        }
    }
    onBookmarkRemoved(bookmark) {
        if (this.$.contextMenu.anyBookmarkMatches(bookmark.id)) {
            this.$.contextMenu.close();
        }
        this.$.bookmarksList.onBookmarkRemoved(bookmark);
        const newTrackedProductInfos = { ...this.trackedProductInfos_ };
        delete newTrackedProductInfos[bookmark.id];
        this.trackedProductInfos_ = newTrackedProductInfos;
        this.availableProductInfos_.delete(bookmark.id);
        if (this.selectedBookmarks_[bookmark.id]) {
            const newSelectedBookmarks = { ...this.selectedBookmarks_ };
            delete newSelectedBookmarks[bookmark.id];
            this.selectedBookmarks_ = newSelectedBookmarks;
        }
        this.updateCanAddCurrentUrl_();
    }
    getTrackedProductInfos() {
        return this.trackedProductInfos_;
    }
    getAvailableProductInfos() {
        return this.availableProductInfos_;
    }
    getProductImageUrl(bookmark) {
        const bookmarkProductInfo = this.availableProductInfos_.get(bookmark.id);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.imageUrl;
        }
        else {
            return '';
        }
    }
    onBookmarkPriceTracked_(product) {
        this.trackedProductInfos_ = {
            ...this.trackedProductInfos_,
            [product.bookmarkId.toString()]: product,
        };
    }
    onBookmarkPriceUntracked_(product) {
        const newTrackedProductInfos = { ...this.trackedProductInfos_ };
        delete newTrackedProductInfos[product.bookmarkId.toString()];
        this.trackedProductInfos_ = newTrackedProductInfos;
    }
    getActiveFolder_() {
        if (this.activeFolderPath_.length) {
            return this.activeFolderPath_[this.activeFolderPath_.length - 1];
        }
        return undefined;
    }
    setImageUrl(bookmark, url) {
        this.$.bookmarksList.setImageUrl(bookmark, url);
    }
    updateShoppingData_() {
        this.availableProductInfos_.clear();
        this.priceTrackingProxy_.handler.getAllShoppingBookmarkProductInfo().then(res => {
            res.productInfos.forEach(product => this.setAvailableProductInfo_(product));
        });
    }
    setAvailableProductInfo_(productInfo) {
        const bookmarkId = productInfo.bookmarkId.toString();
        this.availableProductInfos_.set(bookmarkId, productInfo);
        if (productInfo.info.imageUrl === '') {
            return;
        }
        const bookmark = this.bookmarksService_.findBookmarkWithId(bookmarkId);
        if (!bookmark) {
            return;
        }
        this.$.bookmarksList.setImageUrl(bookmark, productInfo.info.imageUrl);
    }
    updateCanAddCurrentUrl_() {
        this.canAddCurrentUrl_ = this.bookmarksService_.canAddUrl(this.currentUrl_, this.getActiveFolder_());
    }
    getSelectedDescription_() {
        return loadTimeData.getStringF('selectedBookmarkCount', this.getSelectedBookmarksLength_());
    }
    getSelectedBookmarksList_() {
        const selectedEntries = Object.entries(this.selectedBookmarks_)
            .filter(([_id, selected]) => selected);
        const selectedIds = selectedEntries.map(([id, _selected]) => id);
        return selectedIds
            .map((id) => this.bookmarksService_.findBookmarkWithId(id))
            .filter(b => !!b);
    }
    getSelectedBookmarksLength_() {
        return Object.values(this.selectedBookmarks_)
            .filter((selected) => selected)
            .length;
    }
    onLabelsChanged_(e) {
        this.labels_ = e.detail.value;
    }
    onSearchChanged_(e) {
        this.searchQuery_ = e.detail.toLocaleLowerCase();
    }
    onSearchBlur_() {
        recordSearchCTR(SearchAction.SEARCHED);
    }
    onContextMenuShown_(bookmark) {
        this.contextMenuBookmark_ = bookmark;
    }
    onShowContextMenu_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!event.detail.bookmark) {
            return;
        }
        const priceTracked = !!this.bookmarksService_.getPriceTrackedInfo(event.detail.bookmark);
        const priceTrackingEligible = !!this.bookmarksService_.getAvailableProductInfo(event.detail.bookmark);
        const bookmark = event.detail.bookmark;
        const target = event.detail.event.target;
        Promise
            .all([
            this.bookmarksApi_.isActiveTabInSplit(),
            this.bookmarksApi_.getIncognitoAvailableCount([bookmark.id]),
        ])
            .then(([isSplit, incognito]) => {
            if (event.detail.event.button === 0) {
                this.$.contextMenu.showAt(target, [bookmark], priceTracked, priceTrackingEligible, isSplit, incognito.incognitoCount, this.onContextMenuShown_.bind(this, bookmark));
            }
            else {
                this.$.contextMenu.showAtPosition(event.detail.event, [bookmark], priceTracked, priceTrackingEligible, isSplit, incognito.incognitoCount, this.onContextMenuShown_.bind(this, bookmark));
            }
        });
    }
    toggleEditing_() {
        this.editing_ = !this.editing_;
        if (!this.editing_) {
            this.selectedBookmarks_ = {};
        }
    }
    onBookmarksListBulkEdit_() {
        this.toggleEditing_();
    }
    onClearSelectedItems_() {
        this.toggleEditing_();
    }
    onDeleteClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        const selectedBookmarksList = this.getSelectedBookmarksList_();
        if (editingDisabledByPolicy(selectedBookmarksList)) {
            this.onDisabledFeature_();
            return;
        }
        this.bookmarksApi_
            .deleteBookmarks(selectedBookmarksList.map((bookmark) => bookmark.id))
            .then(() => {
            this.showDeletionToast_(selectedBookmarksList);
            this.selectedBookmarks_ = {};
        });
    }
    onContextMenuEditClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (editingDisabledByPolicy(event.detail.bookmarks)) {
            this.onDisabledFeature_();
            return;
        }
        this.showEditDialog_(event.detail.bookmarks, event.detail.bookmarks.length > 1);
    }
    onContextMenuDeleteClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.showDeletionToast_(event.detail.bookmarks);
        this.selectedBookmarks_ = {};
    }
    onContextMenuClose_() {
        // This check is needed to avoid the case where the context menu is closed
        // via right-click a new row, and is already re-opened by the time this
        // executes.
        if (!this.$.contextMenu.isOpen()) {
            this.contextMenuBookmark_ = undefined;
        }
    }
    onClearSearch_() {
        this.$.searchField.setValue('');
    }
    countDescendants_(node) {
        let count = 0;
        if (node.url) {
            count++;
        }
        if (node.children) {
            for (const child of node.children) {
                count += this.countDescendants_(child);
            }
        }
        return count;
    }
    showDeletionToast_(bookmarks) {
        const totalCount = bookmarks.reduce((prev, curr) => prev + this.countDescendants_(curr), 0);
        PluralStringProxyImpl.getInstance()
            .getPluralString('bookmarkDeletionCount', totalCount)
            .then(pluralString => {
            this.deletionDescription_ = pluralString;
            this.$.deletionToast.get().show();
        });
    }
    onDisabledFeature_() {
        this.$.disabledFeatureDialog.showModal();
    }
    onCloseDisabledFeatureDialogClick_() {
        this.$.disabledFeatureDialog.close();
    }
    onUndoClick_() {
        this.bookmarksApi_.undo();
        this.$.deletionToast.get().hide();
    }
    onMoveClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        const selectedBookmarksList = this.getSelectedBookmarksList_();
        if (editingDisabledByPolicy(selectedBookmarksList)) {
            this.onDisabledFeature_();
            return;
        }
        this.showEditDialog_(selectedBookmarksList, true);
    }
    showEditDialog_(bookmarks, moveOnly) {
        if (moveOnly) {
            this.bookmarksApi_.contextMenuMove(bookmarks.map(bookmark => bookmark.id), ActionSource.kBookmark);
        }
        else {
            this.bookmarksApi_.contextMenuEdit(bookmarks.map(bookmark => bookmark.id), ActionSource.kBookmark);
        }
    }
    onBulkEditMenuClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        const selectedBookmarks = this.getSelectedBookmarksList_();
        const ids = selectedBookmarks.map(b => b.id);
        Promise
            .all([
            this.bookmarksApi_.isActiveTabInSplit(),
            this.bookmarksApi_.getIncognitoAvailableCount(ids),
        ])
            .then(([isSplit, incognito]) => {
            this.$.contextMenu.showAt(target, selectedBookmarks, false, false, isSplit, incognito.incognitoCount);
        });
    }
    onAddTabClick_() {
        const newParent = this.$.bookmarksList.getParentFolder();
        if (editingDisabledByPolicy([newParent])) {
            this.onDisabledFeature_();
            return;
        }
        recordBookmarkAdded();
        this.bookmarksApi_.bookmarkCurrentTabInFolder(newParent.id);
    }
    onRowSelectedChange_(event) {
        this.selectedBookmarks_ = {
            ...this.selectedBookmarks_,
            [event.detail.id]: event.detail.checked,
        };
    }
    hideAddTabButton_() {
        return this.editing_ || this.guestMode_;
    }
    getEmptyTitle_() {
        if (this.guestMode_) {
            return loadTimeData.getString('emptyTitleGuest');
        }
        else if (this.hasSomeActiveFilter_) {
            return loadTimeData.getString('emptyTitleSearch');
        }
        else {
            return loadTimeData.getString('emptyTitle');
        }
    }
    getEmptyBody_() {
        if (this.guestMode_) {
            return loadTimeData.getString('emptyBodyGuest');
        }
        else if (this.hasSomeActiveFilter_) {
            return loadTimeData.getString('emptyBodySearch');
        }
        else {
            return loadTimeData.getString('emptyBody');
        }
    }
    getEmptyImagePath_() {
        return this.hasSomeActiveFilter_ ? '' : './images/bookmarks_empty.svg';
    }
    getEmptyImagePathDark_() {
        return this.hasSomeActiveFilter_ ? '' : './images/bookmarks_empty_dark.svg';
    }
    computeHasSomeActiveFilter_() {
        return !!this.searchQuery_ || this.labels_.some(label => label.active);
    }
    computeSectionVisibility_() {
        if (this.guestMode_) {
            return { topLevelEmptyState: true };
        }
        if (!this.hasLoadedData_) {
            return { search: true, footer: true };
        }
        const hasActiveFolder = this.activeFolderPath_.length > 0;
        const hasShownBookmarks = this.hasShownBookmarks_;
        const hasSomeActiveFilter = this.hasSomeActiveFilter_;
        return {
            search: true,
            labels: this.labels_.length > 0,
            topLevelEmptyState: !hasShownBookmarks && (hasSomeActiveFilter || !hasActiveFolder),
            footer: !hasSomeActiveFilter,
            heading: !hasSomeActiveFilter && (hasActiveFolder || hasShownBookmarks),
        };
    }
    onRenamingIdChanged_(e) {
        this.renamingId_ = e.detail.value;
    }
    onHasScrollbarsChanged_(e) {
        this.hasScrollbars_ = e.detail;
    }
    onContextMenuRenameClicked_(event) {
        this.renamingId_ = event.detail.id;
    }
    onHasShownBookmarksChanged_(e) {
        this.hasShownBookmarks_ = e.detail.value;
    }
    onActiveFolderPathChanged_(e) {
        this.activeFolderPath_ = e.detail.value;
    }
}
customElements.define(PowerBookmarksAppElement.is, PowerBookmarksAppElement);
