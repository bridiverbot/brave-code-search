// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './power_bookmark_row_item.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import { browserProxyFactory as priceTrackingBrowserProxyFactory } from '//resources/cr_components/commerce/price_tracking.mojom-webui.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CrUrlListItemSize } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { KeyArrowNavigationService } from './keyboard_arrow_navigation_service.js';
import { getCss } from './power_bookmark_row.css.js';
import { getHtml } from './power_bookmark_row.html.js';
import { PowerBookmarksService } from './power_bookmarks_service.js';
export const NESTED_BOOKMARKS_BASE_MARGIN = 40;
export const NESTED_BOOKMARKS_MARGIN_PER_DEPTH = 12;
export const BOOKMARK_ROW_LOAD_EVENT = 'bookmark-row-connected-event';
export class PowerBookmarkRowElement extends CrLitElement {
    static get is() {
        return 'power-bookmark-row';
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
            selectedBookmarks: { type: Array },
            renamingId: { type: String },
            imageUrls: { type: Object },
            isPriceTracked: { type: Boolean },
            searchQuery: { type: String },
            shoppingCollectionFolderId: { type: String },
            rowAriaDescription: { type: String },
            trailingIconTooltip: { type: String },
            listItemSize: { type: String },
            toggleExpand: { type: Boolean },
            updatedElementIds: { type: Array },
            canDrag: { type: Boolean },
            hasActiveDrag: { type: Boolean },
            activeFolderPath: { type: Array },
            hasFolders: { type: Boolean, reflect: true },
            activeSortIndex: { type: Number },
            rowHeading: { type: String },
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
    #selectedBookmarks_accessor_storage = [];
    get selectedBookmarks() { return this.#selectedBookmarks_accessor_storage; }
    set selectedBookmarks(value) { this.#selectedBookmarks_accessor_storage = value; }
    #renamingId_accessor_storage = '';
    get renamingId() { return this.#renamingId_accessor_storage; }
    set renamingId(value) { this.#renamingId_accessor_storage = value; }
    #searchQuery_accessor_storage;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #shoppingCollectionFolderId_accessor_storage = '';
    get shoppingCollectionFolderId() { return this.#shoppingCollectionFolderId_accessor_storage; }
    set shoppingCollectionFolderId(value) { this.#shoppingCollectionFolderId_accessor_storage = value; }
    #rowAriaDescription_accessor_storage = '';
    get rowAriaDescription() { return this.#rowAriaDescription_accessor_storage; }
    set rowAriaDescription(value) { this.#rowAriaDescription_accessor_storage = value; }
    #trailingIconTooltip_accessor_storage = '';
    get trailingIconTooltip() { return this.#trailingIconTooltip_accessor_storage; }
    set trailingIconTooltip(value) { this.#trailingIconTooltip_accessor_storage = value; }
    #toggleExpand_accessor_storage = false;
    get toggleExpand() { return this.#toggleExpand_accessor_storage; }
    set toggleExpand(value) { this.#toggleExpand_accessor_storage = value; }
    #imageUrls_accessor_storage = {};
    get imageUrls() { return this.#imageUrls_accessor_storage; }
    set imageUrls(value) { this.#imageUrls_accessor_storage = value; }
    #updatedElementIds_accessor_storage = [];
    get updatedElementIds() { return this.#updatedElementIds_accessor_storage; }
    set updatedElementIds(value) { this.#updatedElementIds_accessor_storage = value; }
    #isPriceTracked_accessor_storage = false;
    get isPriceTracked() { return this.#isPriceTracked_accessor_storage; }
    set isPriceTracked(value) { this.#isPriceTracked_accessor_storage = value; }
    #canDrag_accessor_storage = true;
    get canDrag() { return this.#canDrag_accessor_storage; }
    set canDrag(value) { this.#canDrag_accessor_storage = value; }
    #hasActiveDrag_accessor_storage = false;
    get hasActiveDrag() { return this.#hasActiveDrag_accessor_storage; }
    set hasActiveDrag(value) { this.#hasActiveDrag_accessor_storage = value; }
    #activeFolderPath_accessor_storage = [];
    get activeFolderPath() { return this.#activeFolderPath_accessor_storage; }
    set activeFolderPath(value) { this.#activeFolderPath_accessor_storage = value; }
    #hasFolders_accessor_storage = false;
    get hasFolders() { return this.#hasFolders_accessor_storage; }
    set hasFolders(value) { this.#hasFolders_accessor_storage = value; }
    #activeSortIndex_accessor_storage = 0;
    get activeSortIndex() { return this.#activeSortIndex_accessor_storage; }
    set activeSortIndex(value) { this.#activeSortIndex_accessor_storage = value; }
    #listItemSize_accessor_storage = CrUrlListItemSize.COMPACT;
    get listItemSize() { return this.#listItemSize_accessor_storage; }
    set listItemSize(value) { this.#listItemSize_accessor_storage = value; }
    #rowHeading_accessor_storage = '';
    get rowHeading() { return this.#rowHeading_accessor_storage; }
    set rowHeading(value) { this.#rowHeading_accessor_storage = value; }
    bookmarksService_ = PowerBookmarksService.getInstance();
    priceTrackingProxy_ = priceTrackingBrowserProxyFactory.getInstance();
    shoppingListenerIds_ = [];
    keyArrowNavigationService_ = KeyArrowNavigationService.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.onKeydown_);
        this.addEventListener('focus', this.onFocus_);
        this.isPriceTracked = this.isPriceTracked_();
        const callbackRouter = this.priceTrackingProxy_.callbackRouter;
        this.shoppingListenerIds_.push(callbackRouter.priceTrackedForBookmark.addListener((product) => this.handleBookmarkSubscriptionChange_(product, true)), callbackRouter.priceUntrackedForBookmark.addListener((product) => this.handleBookmarkSubscriptionChange_(product, false)));
        this.fire(BOOKMARK_ROW_LOAD_EVENT);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shoppingListenerIds_.forEach(id => this.priceTrackingProxy_.callbackRouter.removeListener(id));
    }
    handleBookmarkSubscriptionChange_(product, subscribed) {
        if (product.bookmarkId.toString() === this.bookmark.id) {
            this.isPriceTracked = subscribed;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('bookmark')) {
            this.isPriceTracked = this.isPriceTracked_();
        }
        if (changedProperties.has('compact')) {
            this.listItemSize =
                this.compact ? CrUrlListItemSize.COMPACT : CrUrlListItemSize.LARGE;
            if (this.compact) {
                // Set custom margins for nested bookmarks in tree view.
                this.style.setProperty('--base-margin', `${NESTED_BOOKMARKS_BASE_MARGIN}px`);
                this.style.setProperty('--margin-per-depth', `${NESTED_BOOKMARKS_MARGIN_PER_DEPTH}px`);
            }
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('listItemSize')) {
            this.handleListItemSizeChanged_();
        }
        if (changedProperties.has('depth')) {
            this.style.setProperty('--depth', `${this.depth}`);
        }
    }
    shouldUpdate(changedProperties) {
        if (changedProperties.has('updatedElementIds')) {
            const updatedElementIds = this.updatedElementIds;
            if (updatedElementIds?.includes(this.bookmark?.id)) {
                return true;
            }
            changedProperties.delete('updatedElementIds');
        }
        return super.shouldUpdate(changedProperties);
    }
    async getUpdateComplete() {
        // Wait for all children to update before marking as complete.
        const result = await super.getUpdateComplete();
        const children = [...this.shadowRoot.querySelectorAll('power-bookmark-row')];
        await Promise.all(children.map(el => el.updateComplete));
        return result;
    }
    focus() {
        this.currentListItem_.focus();
    }
    setExpanded_(expanded) {
        if (!this.isFolder_() || this.toggleExpand === expanded) {
            return;
        }
        this.toggleExpand = expanded;
        this.fire('power-bookmark-toggle', {
            bookmark: this.bookmark,
            expanded: this.toggleExpand,
        });
    }
    onKeydown_(e) {
        if (this.shadowRoot.activeElement !== this.currentListItem_) {
            return;
        }
        const isRtl = isRTL();
        const forwardKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
        const backwardKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === forwardKey) {
            if (this.isFolder_()) {
                if (!this.toggleExpand) {
                    this.setExpanded_(true);
                }
                else if (this.isFolderWithChildren_()) {
                    this.keyArrowNavigationService_.moveFocus(1);
                }
            }
            e.stopPropagation();
            return;
        }
        if (e.key === backwardKey) {
            if (this.isFolder_() && this.toggleExpand) {
                this.setExpanded_(false);
            }
            else {
                this.fire('power-bookmark-row-focus-parent', {
                    parentId: this.bookmark.parentId,
                });
            }
            e.stopPropagation();
            return;
        }
        if (e.shiftKey && e.key === 'Tab') {
            // Hitting shift tab from CrUrlListItem to traverse focus backwards will
            // attempt to move focus to this element, which is responsible for
            // delegating focus but should itself not be focusable. So when the user
            // hits shift tab, immediately hijack focus onto itself so that the
            // browser moves focus to the focusable element before it once it
            // processes the shift tab.
            super.focus();
        }
        else if (e.key === 'Enter') {
            // Prevent iron-list from moving focus.
            e.stopPropagation();
        }
    }
    getBookmarkDescriptionForTests(bookmark) {
        return this.currentListItem_.getBookmarkDescriptionForTests(bookmark);
    }
    onFocus_(e) {
        if (e.composedPath()[0] === this && this.matches(':focus-visible')) {
            // If trying to directly focus on this row, move the focus to the
            // <cr-url-list-item>. Otherwise, UI might be trying to directly focus on
            // a specific child (eg. the input).
            // This should only be done when focusing via keyboard, to avoid blocking
            // drag interactions.
            this.currentListItem_.focus();
        }
    }
    get currentListItem_() {
        return this.shadowRoot.querySelector('#listItem');
    }
    async handleListItemSizeChanged_() {
        await this.currentListItem_.updateComplete;
        this.fire('list-item-size-changed');
    }
    onExpandedChanged_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setExpanded_(event.detail.value);
    }
    isPriceTracked_() {
        return !!this.bookmarksService_.getPriceTrackedInfo(this.bookmark);
    }
    canExpand_() {
        return !!(this.bookmark?.children && this.compact);
    }
    isFolder_() {
        return !this.bookmark.url;
    }
    isFolderWithChildren_() {
        return this.isFolder_() && !!this.bookmark.children?.length;
    }
    getListItemCssClass_() {
        if (this.canExpand_()) {
            return 'expandable-folder';
        }
        return this.compact ? 'bookmark' : '';
    }
    isExpanded_() {
        return this.canExpand_() && this.toggleExpand;
    }
}
customElements.define(PowerBookmarkRowElement.is, PowerBookmarkRowElement);
