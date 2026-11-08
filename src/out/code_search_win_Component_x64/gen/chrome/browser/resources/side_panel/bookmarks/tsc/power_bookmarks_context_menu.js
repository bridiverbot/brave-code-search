// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { browserProxyFactory as priceTrackingBrowserProxyFactory } from '//resources/cr_components/commerce/price_tracking.mojom-webui.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ActionSource } from './bookmarks.mojom-webui.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { getCss } from './power_bookmarks_context_menu.css.js';
import { getHtml } from './power_bookmarks_context_menu.html.js';
import { editingDisabledByPolicy } from './power_bookmarks_service.js';
export var MenuItemId;
(function (MenuItemId) {
    MenuItemId[MenuItemId["OPEN_NEW_TAB"] = 0] = "OPEN_NEW_TAB";
    MenuItemId[MenuItemId["OPEN_NEW_WINDOW"] = 1] = "OPEN_NEW_WINDOW";
    MenuItemId[MenuItemId["OPEN_INCOGNITO"] = 2] = "OPEN_INCOGNITO";
    MenuItemId[MenuItemId["OPEN_NEW_TAB_GROUP"] = 3] = "OPEN_NEW_TAB_GROUP";
    MenuItemId[MenuItemId["EDIT"] = 4] = "EDIT";
    MenuItemId[MenuItemId["ADD_TO_BOOKMARKS_BAR"] = 5] = "ADD_TO_BOOKMARKS_BAR";
    MenuItemId[MenuItemId["REMOVE_FROM_BOOKMARKS_BAR"] = 6] = "REMOVE_FROM_BOOKMARKS_BAR";
    MenuItemId[MenuItemId["TRACK_PRICE"] = 7] = "TRACK_PRICE";
    MenuItemId[MenuItemId["RENAME"] = 8] = "RENAME";
    MenuItemId[MenuItemId["DELETE"] = 9] = "DELETE";
    MenuItemId[MenuItemId["DIVIDER"] = 10] = "DIVIDER";
    MenuItemId[MenuItemId["OPEN_SPLIT_VIEW"] = 11] = "OPEN_SPLIT_VIEW";
    MenuItemId[MenuItemId["OPEN_ISOLATED"] = 12] = "OPEN_ISOLATED";
})(MenuItemId || (MenuItemId = {}));
export class PowerBookmarksContextMenuElement extends CrLitElement {
    static get is() {
        return 'power-bookmarks-context-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            bookmarks_: { type: Array },
            priceTracked_: { type: Boolean },
            priceTrackingEligible_: { type: Boolean },
            isInSplitView_: { type: Boolean },
            offTheRecordCount_: { type: Number },
        };
    }
    bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
    priceTrackingProxy_ = priceTrackingBrowserProxyFactory.getInstance();
    #bookmarks__accessor_storage = [];
    get bookmarks_() { return this.#bookmarks__accessor_storage; }
    set bookmarks_(value) { this.#bookmarks__accessor_storage = value; }
    #priceTracked__accessor_storage = false;
    get priceTracked_() { return this.#priceTracked__accessor_storage; }
    set priceTracked_(value) { this.#priceTracked__accessor_storage = value; }
    #priceTrackingEligible__accessor_storage = false;
    get priceTrackingEligible_() { return this.#priceTrackingEligible__accessor_storage; }
    set priceTrackingEligible_(value) { this.#priceTrackingEligible__accessor_storage = value; }
    #isInSplitView__accessor_storage = false;
    get isInSplitView_() { return this.#isInSplitView__accessor_storage; }
    set isInSplitView_(value) { this.#isInSplitView__accessor_storage = value; }
    #offTheRecordCount__accessor_storage = 0;
    get offTheRecordCount_() { return this.#offTheRecordCount__accessor_storage; }
    set offTheRecordCount_(value) { this.#offTheRecordCount__accessor_storage = value; }
    showAt(target, bookmarks, priceTracked, priceTrackingEligible, isInSplitView, offTheRecordCount, onShown = () => { }) {
        this.bookmarks_ = bookmarks;
        this.priceTracked_ = priceTracked;
        this.priceTrackingEligible_ = priceTrackingEligible;
        this.isInSplitView_ = isInSplitView;
        this.offTheRecordCount_ = offTheRecordCount;
        this.updateComplete.then(() => {
            this.$.menu.showAt(target);
            onShown();
        });
    }
    showAtPosition(event, bookmarks, priceTracked, priceTrackingEligible, isInSplitView, offTheRecordCount, onShown = () => { }) {
        this.bookmarks_ = bookmarks;
        this.priceTracked_ = priceTracked;
        this.priceTrackingEligible_ = priceTrackingEligible;
        this.isInSplitView_ = isInSplitView;
        this.offTheRecordCount_ = offTheRecordCount;
        const menuMargin = 20;
        const doc = document.scrollingElement;
        const minX = doc.scrollLeft + menuMargin;
        const maxX = doc.scrollLeft + doc.clientWidth - menuMargin;
        this.updateComplete.then(() => {
            this.$.menu.showAtPosition({
                top: event.clientY,
                left: event.clientX,
                minX: minX,
                maxX: maxX,
            });
            onShown();
        });
    }
    isOpen() {
        return this.$.menu.open;
    }
    close() {
        this.$.menu.close();
    }
    anyBookmarkMatches(id) {
        return this.bookmarks_.some(bookmark => bookmark.id === id);
    }
    getMenuItemsForBookmarks_() {
        if (this.bookmarks_.length === 0) {
            return [];
        }
        const firstBookmark = this.bookmarks_[0];
        // TODO(crbug.com/40262319): Factor in URLs not available in incognito.
        let bookmarkCount = 0;
        // Filter out undefined bookmarks which might exist temporarily as the
        // bookmarks tree is being manipulated.
        this.bookmarks_.filter(bookmark => !!bookmark).forEach((bookmark) => {
            if (bookmark.url) {
                bookmarkCount += 1;
            }
            else if (bookmark.children) {
                bookmarkCount +=
                    bookmark.children.filter((child) => child && !!child.url).length;
            }
        });
        const menuItems = [
            {
                id: MenuItemId.OPEN_NEW_TAB,
                label: bookmarkCount < 2 ?
                    loadTimeData.getString('menuOpenNewTab') :
                    loadTimeData.getStringF('menuOpenNewTabWithCount', bookmarkCount),
                disabled: bookmarkCount === 0,
            },
            {
                id: MenuItemId.OPEN_NEW_WINDOW,
                label: bookmarkCount < 2 ?
                    loadTimeData.getString('menuOpenNewWindow') :
                    loadTimeData.getStringF('menuOpenNewWindowWithCount', bookmarkCount),
                disabled: bookmarkCount === 0,
            },
        ];
        if (bookmarkCount === 1 && firstBookmark.url) {
            menuItems.push({
                id: MenuItemId.OPEN_SPLIT_VIEW,
                label: loadTimeData.getString('menuOpenSplitView'),
                disabled: this.isInSplitView_,
            });
        }
        menuItems.push(...this.getIncognitoAndIsolatedMenuItems_());
        if (this.bookmarks_.length !== 1 || !firstBookmark.url) {
            menuItems.push({
                id: MenuItemId.OPEN_NEW_TAB_GROUP,
                label: bookmarkCount < 2 ?
                    loadTimeData.getString('menuOpenNewTabGroup') :
                    loadTimeData.getStringF('menuOpenNewTabGroupWithCount', bookmarkCount),
                disabled: bookmarkCount === 0,
            });
        }
        if (this.bookmarks_.length !== 1) {
            menuItems.push({ id: MenuItemId.DIVIDER }, {
                id: MenuItemId.EDIT,
                label: loadTimeData.getString('tooltipMove'),
            }, { id: MenuItemId.DIVIDER }, {
                id: MenuItemId.DELETE,
                label: loadTimeData.getString('tooltipDelete'),
            });
            return menuItems;
        }
        else if (firstBookmark.id === loadTimeData.getString('bookmarksBarId')) {
            return menuItems;
        }
        if (this.bookmarks_.length === 1 && !firstBookmark.url &&
            loadTimeData.getBoolean('menuSimplification')) {
            const folder = firstBookmark;
            const bookmarkCount = folder.children ?
                folder.children.filter(child => !!child.url).length :
                0;
            const revisedItems = [
                {
                    id: MenuItemId.OPEN_NEW_TAB,
                    label: bookmarkCount < 2 ?
                        loadTimeData.getString('menuOpenNewTab') :
                        loadTimeData.getStringF('menuOpenNewTabWithCount', bookmarkCount),
                    disabled: bookmarkCount === 0,
                },
                {
                    id: MenuItemId.OPEN_NEW_WINDOW,
                    label: bookmarkCount < 2 ?
                        loadTimeData.getString('menuOpenNewWindow') :
                        loadTimeData.getStringF('menuOpenNewWindowWithCount', bookmarkCount),
                    disabled: bookmarkCount === 0,
                },
                {
                    id: MenuItemId.OPEN_NEW_TAB_GROUP,
                    label: bookmarkCount < 2 ?
                        loadTimeData.getString('menuOpenNewTabGroup') :
                        loadTimeData.getStringF('menuOpenNewTabGroupWithCount', bookmarkCount),
                    disabled: bookmarkCount === 0,
                },
            ];
            revisedItems.push(...this.getIncognitoAndIsolatedMenuItems_());
            revisedItems.push({ id: MenuItemId.DIVIDER });
            if (folder.parentId === loadTimeData.getString('otherBookmarksId') ||
                folder.parentId === loadTimeData.getString('mobileBookmarksId')) {
                revisedItems.push({
                    id: MenuItemId.ADD_TO_BOOKMARKS_BAR,
                    label: loadTimeData.getString('menuMoveToBookmarksBar'),
                });
                revisedItems.push({ id: MenuItemId.DIVIDER });
            }
            revisedItems.push({
                id: MenuItemId.RENAME,
                label: loadTimeData.getString('menuRename'),
            }, { id: MenuItemId.DIVIDER }, {
                id: MenuItemId.DELETE,
                label: loadTimeData.getString('tooltipDelete'),
            });
            return revisedItems;
        }
        if (firstBookmark.url ||
            firstBookmark.parentId === loadTimeData.getString('bookmarksBarId') ||
            firstBookmark.parentId === loadTimeData.getString('otherBookmarksId') ||
            firstBookmark.parentId ===
                loadTimeData.getString('mobileBookmarksId')) {
            menuItems.push({ id: MenuItemId.DIVIDER });
        }
        if (firstBookmark.url) {
            menuItems.push({
                id: MenuItemId.EDIT,
                label: loadTimeData.getString('menuEdit'),
            });
        }
        if (firstBookmark.parentId === loadTimeData.getString('bookmarksBarId')) {
            menuItems.push({
                id: MenuItemId.REMOVE_FROM_BOOKMARKS_BAR,
                label: loadTimeData.getString('menuMoveToAllBookmarks'),
            });
        }
        else if (firstBookmark.parentId === loadTimeData.getString('otherBookmarksId') ||
            firstBookmark.parentId ===
                loadTimeData.getString('mobileBookmarksId')) {
            menuItems.push({
                id: MenuItemId.ADD_TO_BOOKMARKS_BAR,
                label: loadTimeData.getString('menuMoveToBookmarksBar'),
            });
        }
        if (this.priceTrackingEligible_) {
            menuItems.push({ id: MenuItemId.DIVIDER }, {
                id: MenuItemId.TRACK_PRICE,
                label: this.priceTracked_ ?
                    loadTimeData.getString('menuUntrackPrice') :
                    loadTimeData.getString('menuTrackPrice'),
            });
        }
        menuItems.push({ id: MenuItemId.DIVIDER });
        if (!firstBookmark.url) {
            menuItems.push({
                id: MenuItemId.RENAME,
                label: loadTimeData.getString('menuRename'),
            });
        }
        menuItems.push({
            id: MenuItemId.DELETE,
            label: loadTimeData.getString('tooltipDelete'),
        });
        return menuItems;
    }
    getIncognitoAndIsolatedMenuItems_() {
        const items = [];
        if (!loadTimeData.getBoolean('incognitoMode') &&
            loadTimeData.getBoolean('isIncognitoModeAvailable')) {
            const isIsolatedModeEnabled = loadTimeData.getBoolean('isIsolatedModeEnabled');
            items.push({
                id: MenuItemId.OPEN_INCOGNITO,
                label: this.offTheRecordCount_ < 2 ?
                    loadTimeData.getString('menuOpenIncognito') :
                    loadTimeData.getStringF('menuOpenIncognitoWithCount', this.offTheRecordCount_),
                disabled: this.offTheRecordCount_ === 0 || isIsolatedModeEnabled,
            });
            if (isIsolatedModeEnabled) {
                items.push({
                    id: MenuItemId.OPEN_ISOLATED,
                    label: this.offTheRecordCount_ < 2 ?
                        loadTimeData.getString('menuOpenIsolated') :
                        loadTimeData.getStringF('menuOpenIsolatedWithCount', this.offTheRecordCount_),
                    disabled: this.offTheRecordCount_ === 0,
                });
            }
        }
        return items;
    }
    showDivider_(menuItem) {
        return menuItem.id === MenuItemId.DIVIDER;
    }
    dispatchDisabledFeatureEvent_() {
        this.dispatchEvent(new CustomEvent('disabled-feature'));
    }
    /**
     * Close the menu on mousedown so clicks can propagate to the underlying UI.
     * This allows the user to right click the list while a context menu is
     * showing and get another context menu.
     */
    onMousedown_(e) {
        if (e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.$.menu.close();
    }
    onMenuItemClick_(event) {
        event.preventDefault();
        event.stopPropagation();
        const id = Number(event.currentTarget.dataset['id']);
        switch (id) {
            case MenuItemId.OPEN_NEW_TAB:
                this.bookmarksApi_.contextMenuOpenBookmarkInNewTab(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                break;
            case MenuItemId.OPEN_NEW_WINDOW:
                this.bookmarksApi_.contextMenuOpenBookmarkInNewWindow(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                break;
            case MenuItemId.OPEN_INCOGNITO:
            case MenuItemId.OPEN_ISOLATED:
                this.bookmarksApi_.contextMenuOpenBookmarkInOffTheRecordWindow(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                break;
            case MenuItemId.OPEN_NEW_TAB_GROUP:
                this.bookmarksApi_.contextMenuOpenBookmarkInNewTabGroup(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                break;
            case MenuItemId.OPEN_SPLIT_VIEW:
                this.bookmarksApi_.contextMenuOpenBookmarkInSplitView(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                break;
            case MenuItemId.ADD_TO_BOOKMARKS_BAR:
                assert(this.bookmarks_.length === 1);
                if (editingDisabledByPolicy(this.bookmarks_)) {
                    this.dispatchDisabledFeatureEvent_();
                }
                else {
                    this.bookmarksApi_.contextMenuAddToBookmarksBar(this.bookmarks_[0].id, ActionSource.kBookmark);
                }
                break;
            case MenuItemId.REMOVE_FROM_BOOKMARKS_BAR:
                assert(this.bookmarks_.length === 1);
                if (editingDisabledByPolicy(this.bookmarks_)) {
                    this.dispatchDisabledFeatureEvent_();
                }
                else {
                    this.bookmarksApi_.contextMenuRemoveFromBookmarksBar(this.bookmarks_[0].id, ActionSource.kBookmark);
                }
                break;
            case MenuItemId.TRACK_PRICE:
                assert(this.bookmarks_.length === 1);
                if (editingDisabledByPolicy(this.bookmarks_)) {
                    this.dispatchDisabledFeatureEvent_();
                }
                else {
                    if (this.priceTracked_) {
                        this.priceTrackingProxy_.handler.untrackPriceForBookmark(BigInt(this.bookmarks_[0].id));
                        chrome.metricsPrivate.recordUserAction('Commerce.PriceTracking.SidePanel.Untrack.ContextMenu');
                    }
                    else {
                        this.priceTrackingProxy_.handler.trackPriceForBookmark(BigInt(this.bookmarks_[0].id));
                        chrome.metricsPrivate.recordUserAction('Commerce.PriceTracking.SidePanel.Track.ContextMenu');
                    }
                }
                break;
            case MenuItemId.EDIT:
                this.fire('edit-clicked', { bookmarks: this.bookmarks_ });
                break;
            case MenuItemId.RENAME:
                assert(this.bookmarks_.length === 1);
                if (editingDisabledByPolicy(this.bookmarks_)) {
                    this.dispatchDisabledFeatureEvent_();
                }
                else {
                    this.fire('rename-clicked', { id: this.bookmarks_[0].id });
                }
                break;
            case MenuItemId.DELETE:
                if (editingDisabledByPolicy(this.bookmarks_)) {
                    this.dispatchDisabledFeatureEvent_();
                }
                else {
                    this.bookmarksApi_.contextMenuDelete(this.bookmarks_.map(bookmark => bookmark.id), ActionSource.kBookmark);
                    this.fire('delete-clicked', { bookmarks: this.bookmarks_ });
                }
                break;
            case MenuItemId.DIVIDER:
            case MenuItemId.EDIT:
                break;
            default:
                assertNotReachedCase(id);
        }
        this.$.menu.close();
    }
}
customElements.define(PowerBookmarksContextMenuElement.is, PowerBookmarksContextMenuElement);
