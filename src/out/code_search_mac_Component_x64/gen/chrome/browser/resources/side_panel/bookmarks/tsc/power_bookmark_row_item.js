// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//bookmarks-side-panel.top-chrome/shared/sp_list_item_badge.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import '//resources/cr_elements/icons.html.js';
import './icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CrUrlListItemSize } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getCss } from './power_bookmark_row_item.css.js';
import { getHtml } from './power_bookmark_row_item.html.js';
import { PowerBookmarksService } from './power_bookmarks_service.js';
import { getFolderLabel } from './power_bookmarks_utils.js';
export class PowerBookmarkRowItemElement extends CrLitElement {
    static get is() {
        return 'power-bookmark-row-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            bookmark: { type: Object },
            compact: { type: Boolean },
            contextMenuBookmark: { type: Object },
            depth: {
                type: Number,
                reflect: true,
            },
            hasCheckbox: {
                type: Boolean,
                reflect: true,
            },
            hasFolders: {
                type: Boolean,
                reflect: true,
            },
            imageUrls: { type: Object },
            isPriceTracked: { type: Boolean },
            searchQuery: { type: String },
            shoppingCollectionFolderId: { type: String },
            trailingIconTooltip: { type: String },
            listItemSize: { type: String },
            selectedBookmarks: { type: Array },
            renamingId: { type: String },
            hasActiveDrag: { type: Boolean },
            isExpandable: { type: Boolean },
            expanded: {
                type: Boolean,
                notify: true,
            },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #bookmark_accessor_storage = {
        id: '',
        parentId: '',
        index: 0,
        title: '',
        url: null,
        dateAdded: null,
        dateLastUsed: null,
        unmodifiable: false,
        children: null,
    };
    get bookmark() { return this.#bookmark_accessor_storage; }
    set bookmark(value) { this.#bookmark_accessor_storage = value; }
    #compact_accessor_storage = false;
    get compact() { return this.#compact_accessor_storage; }
    set compact(value) { this.#compact_accessor_storage = value; }
    #contextMenuBookmark_accessor_storage;
    get contextMenuBookmark() { return this.#contextMenuBookmark_accessor_storage; }
    set contextMenuBookmark(value) { this.#contextMenuBookmark_accessor_storage = value; }
    #depth_accessor_storage = 0;
    get depth() { return this.#depth_accessor_storage; }
    set depth(value) { this.#depth_accessor_storage = value; }
    #hasCheckbox_accessor_storage = false;
    get hasCheckbox() { return this.#hasCheckbox_accessor_storage; }
    set hasCheckbox(value) { this.#hasCheckbox_accessor_storage = value; }
    #hasFolders_accessor_storage = false;
    get hasFolders() { return this.#hasFolders_accessor_storage; }
    set hasFolders(value) { this.#hasFolders_accessor_storage = value; }
    #imageUrls_accessor_storage = {};
    get imageUrls() { return this.#imageUrls_accessor_storage; }
    set imageUrls(value) { this.#imageUrls_accessor_storage = value; }
    #isPriceTracked_accessor_storage = false;
    get isPriceTracked() { return this.#isPriceTracked_accessor_storage; }
    set isPriceTracked(value) { this.#isPriceTracked_accessor_storage = value; }
    #searchQuery_accessor_storage;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #shoppingCollectionFolderId_accessor_storage = '';
    get shoppingCollectionFolderId() { return this.#shoppingCollectionFolderId_accessor_storage; }
    set shoppingCollectionFolderId(value) { this.#shoppingCollectionFolderId_accessor_storage = value; }
    #trailingIconTooltip_accessor_storage = '';
    get trailingIconTooltip() { return this.#trailingIconTooltip_accessor_storage; }
    set trailingIconTooltip(value) { this.#trailingIconTooltip_accessor_storage = value; }
    #listItemSize_accessor_storage = CrUrlListItemSize.COMPACT;
    get listItemSize() { return this.#listItemSize_accessor_storage; }
    set listItemSize(value) { this.#listItemSize_accessor_storage = value; }
    #selectedBookmarks_accessor_storage = [];
    get selectedBookmarks() { return this.#selectedBookmarks_accessor_storage; }
    set selectedBookmarks(value) { this.#selectedBookmarks_accessor_storage = value; }
    #renamingId_accessor_storage = '';
    get renamingId() { return this.#renamingId_accessor_storage; }
    set renamingId(value) { this.#renamingId_accessor_storage = value; }
    #hasActiveDrag_accessor_storage = false;
    get hasActiveDrag() { return this.#hasActiveDrag_accessor_storage; }
    set hasActiveDrag(value) { this.#hasActiveDrag_accessor_storage = value; }
    #isExpandable_accessor_storage = false;
    get isExpandable() { return this.#isExpandable_accessor_storage; }
    set isExpandable(value) { this.#isExpandable_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    bookmarksService_ = PowerBookmarksService.getInstance();
    focus() {
        this.$.crUrlListItem.focus();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('renamingId') ||
            changedProperties.has('bookmark')) {
            if (this.renamingId === this.bookmark?.id) {
                this.onInputDisplayChange_();
            }
        }
    }
    onInputDisplayChange_() {
        const input = this.shadowRoot.querySelector('#input');
        if (input) {
            input.select();
        }
    }
    getUrl_() {
        return this.bookmark.url || undefined;
    }
    isRenamingItem_() {
        return !!this.renamingId && this.bookmark.id === this.renamingId;
    }
    isCheckboxChecked_() {
        return this.selectedBookmarks.includes(this.bookmark);
    }
    isBookmarksBar_() {
        return this.bookmark?.id === loadTimeData.getString('bookmarksBarId');
    }
    showTrailingIcon_() {
        return !this.isRenamingItem_() && !this.hasCheckbox;
    }
    onClick_(event) {
        this.onRowClicked_(event);
    }
    onAuxclick_(event) {
        this.onRowClicked_(event);
    }
    onRowClicked_(event) {
        if (this.isRenamingItem_() || !this.bookmark || event.button === 2 ||
            this.hasActiveDrag) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        if (this.hasCheckbox && this.canEdit_()) {
            const checkbox = this.shadowRoot.querySelector('#checkbox');
            checkbox.checked = !checkbox.checked;
            return;
        }
        this.fire('row-clicked', { bookmark: this.bookmark, event: event });
    }
    onContextmenu_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fire('context-menu', { bookmark: this.bookmark, event: event });
    }
    onTrailingIconClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fire('trailing-icon-clicked', { bookmark: this.bookmark, event: event });
    }
    onCheckboxCheckedChanged_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.fire('checkbox-change', {
            bookmark: this.bookmark,
            checked: event.target.checked,
        });
    }
    onExpandedChanged_(e) {
        this.expanded = e.detail.value;
    }
    onInputKeydown_(event) {
        if (event.key === 'Enter') {
            event.stopPropagation();
            this.onInputChange_(event);
        }
    }
    createInputChangeEvent_(value) {
        return new CustomEvent('input-change', {
            bubbles: true,
            composed: true,
            detail: {
                bookmark: this.bookmark,
                value: value,
            },
        });
    }
    getBookmarkDescriptionForTests(bookmark) {
        return this.getBookmarkDescription_(bookmark);
    }
    onInputChange_(event) {
        event.preventDefault();
        event.stopPropagation();
        const inputElement = this.shadowRoot.querySelector('#input');
        if (inputElement) {
            this.dispatchEvent(this.createInputChangeEvent_(inputElement.value));
        }
    }
    onInputBlur_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dispatchEvent(this.createInputChangeEvent_(null));
    }
    isPriceTracked_() {
        return !!this.bookmarksService_.getPriceTrackedInfo(this.bookmark);
    }
    showDiscountedPrice_() {
        const bookmarkProductInfo = this.bookmarksService_.getPriceTrackedInfo(this.bookmark);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.previousPrice.length > 0;
        }
        return false;
    }
    getCurrentPrice_(bookmark) {
        const bookmarkProductInfo = this.bookmarksService_.getPriceTrackedInfo(bookmark);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.currentPrice;
        }
        else {
            return '';
        }
    }
    getPreviousPrice_(bookmark) {
        const bookmarkProductInfo = this.bookmarksService_.getPriceTrackedInfo(bookmark);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.previousPrice;
        }
        else {
            return '';
        }
    }
    getBookmarkForceHover_() {
        return this.bookmark === this.contextMenuBookmark;
    }
    canEdit_() {
        return this.bookmark?.id !== loadTimeData.getString('bookmarksBarId') &&
            this.bookmark?.id !==
                loadTimeData.getString('managedBookmarksFolderId');
    }
    isShoppingCollection_() {
        return this.bookmark?.id === this.shoppingCollectionFolderId;
    }
    getBookmarkDescription_(bookmark) {
        if (this.compact) {
            if (bookmark?.url) {
                return undefined;
            }
            const count = bookmark?.children ? bookmark?.children.length : 0;
            return loadTimeData.getStringF('bookmarkFolderChildCount', count);
        }
        else {
            let urlString;
            if (bookmark?.url) {
                const url = new URL(bookmark?.url);
                if (url.protocol === 'chrome:') {
                    urlString = 'chrome://' + url.hostname;
                }
                urlString = url.hostname;
            }
            if (urlString && this.searchQuery && bookmark?.parentId) {
                const parentFolder = this.bookmarksService_.findBookmarkWithId(bookmark?.parentId);
                const folderLabel = getFolderLabel(parentFolder);
                return loadTimeData.getStringF('urlFolderDescription', urlString, folderLabel);
            }
            return urlString;
        }
    }
    getBookmarkImageUrls_() {
        const imageUrls = [];
        if (this.bookmark?.url) {
            const imageUrl = Object.entries(this.imageUrls)
                .find(([key, _val]) => key === this.bookmark.id)?.[1];
            if (imageUrl) {
                imageUrls.push(imageUrl);
            }
        }
        else if (this.canEdit_() && this.bookmark?.children &&
            !this.isShoppingCollection_()) {
            this.bookmark?.children.forEach(child => {
                const childImageUrl = Object.entries(this.imageUrls)
                    .find(([key, _val]) => key === child.id)?.[1];
                if (childImageUrl) {
                    imageUrls.push(childImageUrl);
                }
            });
        }
        return imageUrls;
    }
    getBookmarkMenuA11yLabel_() {
        return loadTimeData.getStringF(this.bookmark.url ? 'bookmarkMenuLabel' : 'folderMenuLabel', this.bookmark.title);
    }
    getBookmarkA11yLabel_() {
        if (this.hasCheckbox) {
            if (this.isCheckboxChecked_()) {
                return loadTimeData.getStringF(this.bookmark.url ? 'deselectBookmarkLabel' : 'deselectFolderLabel', this.bookmark.title);
            }
            return loadTimeData.getStringF(this.bookmark.url ? 'selectBookmarkLabel' : 'selectFolderLabel', this.bookmark.title);
        }
        return loadTimeData.getStringF(this.bookmark.url ? 'openBookmarkLabel' : 'openFolderLabel', this.bookmark.title);
    }
    getBookmarkA11yDescription_() {
        const bookmark = this.bookmark;
        let description = '';
        if (this.bookmarksService_.getPriceTrackedInfo(bookmark)) {
            description += loadTimeData.getStringF('a11yDescriptionPriceTracking', this.getCurrentPrice_(bookmark));
            const previousPrice = this.getPreviousPrice_(bookmark);
            if (previousPrice) {
                description += ' ' +
                    loadTimeData.getStringF('a11yDescriptionPriceChange', previousPrice);
            }
        }
        return description;
    }
    getBookmarkDescriptionMeta_() {
        const productInfo = this.bookmarksService_.getAvailableProductInfo(this.bookmark);
        if (productInfo && productInfo.info.currentPrice &&
            !this.isPriceTracked_()) {
            return productInfo.info.currentPrice;
        }
        return '';
    }
}
customElements.define(PowerBookmarkRowItemElement.is, PowerBookmarkRowItemElement);
