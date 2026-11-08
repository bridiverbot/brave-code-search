// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { selectItem } from './actions.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { Command, MenuSource } from './constants.js';
import { getCss } from './item.css.js';
import { getHtml } from './item.html.js';
import { StoreClientMixinLit } from './store_client_mixin_lit.js';
const BookmarksItemElementBase = WebUiListenerMixinLit(StoreClientMixinLit(CrLitElement));
export class BookmarksItemElement extends BookmarksItemElementBase {
    static get is() {
        return 'bookmarks-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            itemId: { type: String },
            ironListTabIndex: { type: Number },
            item_: { type: Object },
            isSelectedItem_: {
                type: Boolean,
                reflect: true,
            },
            isMultiSelect_: { type: Boolean },
            isFolder_: { type: Boolean },
            lastTouchPoints_: { type: Number },
            canUploadAsAccountBookmark_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #itemId_accessor_storage = '';
    get itemId() { return this.#itemId_accessor_storage; }
    set itemId(value) { this.#itemId_accessor_storage = value; }
    #ironListTabIndex_accessor_storage;
    get ironListTabIndex() { return this.#ironListTabIndex_accessor_storage; }
    set ironListTabIndex(value) { this.#ironListTabIndex_accessor_storage = value; }
    #item__accessor_storage;
    get item_() { return this.#item__accessor_storage; }
    set item_(value) { this.#item__accessor_storage = value; }
    #isSelectedItem__accessor_storage = false;
    get isSelectedItem_() { return this.#isSelectedItem__accessor_storage; }
    set isSelectedItem_(value) { this.#isSelectedItem__accessor_storage = value; }
    #isMultiSelect__accessor_storage = false;
    get isMultiSelect_() { return this.#isMultiSelect__accessor_storage; }
    set isMultiSelect_(value) { this.#isMultiSelect__accessor_storage = value; }
    #isFolder__accessor_storage = false;
    get isFolder_() { return this.#isFolder__accessor_storage; }
    set isFolder_(value) { this.#isFolder__accessor_storage = value; }
    #lastTouchPoints__accessor_storage = -1;
    get lastTouchPoints_() { return this.#lastTouchPoints__accessor_storage; }
    set lastTouchPoints_(value) { this.#lastTouchPoints__accessor_storage = value; }
    #canUploadAsAccountBookmark__accessor_storage = false;
    // This is always false if `SyncEnableBookmarksInTransportMode` is disabled.
    get canUploadAsAccountBookmark_() { return this.#canUploadAsAccountBookmark__accessor_storage; }
    set canUploadAsAccountBookmark_(value) { this.#canUploadAsAccountBookmark__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
        this.addWebUiListener('bookmarks-sync-state-changed', this.updateCanUploadAsAccountBookmark_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('itemId') && this.itemId !== '') {
            this.updateFromStore();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('item_')) {
            this.isFolder_ = !!this.item_ && !this.item_.url;
            this.ariaLabel = this.item_?.title || this.item_?.url ||
                loadTimeData.getString('folderLabel');
            this.updateCanUploadAsAccountBookmark_();
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('click', e => this.onClick_(e));
        this.addEventListener('dblclick', e => this.onDblClick_(e));
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('keydown', e => this.onKeydown_(e));
        this.addEventListener('auxclick', e => this.onMiddleClick_(e));
        this.addEventListener('mousedown', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('mouseup', e => this.cancelMiddleMouseBehavior_(e));
        this.addEventListener('touchstart', e => this.onTouchStart_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('item_')) {
            this.updateFavicon_(this.item_?.url);
        }
    }
    onStateChanged(state) {
        this.item_ = state.nodes[this.itemId];
        this.isSelectedItem_ = state.selection.items.has(this.itemId);
        this.isMultiSelect_ = state.selection.items.size > 1;
    }
    setIsSelectedItemForTesting(selected) {
        this.isSelectedItem_ = selected;
    }
    focusMenuButton() {
        focusWithoutInk(this.$.menuButton);
    }
    getDropTarget() {
        return this;
    }
    onContextMenu_(e) {
        e.preventDefault();
        e.stopPropagation();
        // Prevent context menu from appearing after a drag, but allow opening the
        // context menu through 2 taps
        const capabilities = e.sourceCapabilities;
        if (capabilities && capabilities.firesTouchEvents &&
            this.lastTouchPoints_ !== 2) {
            return;
        }
        this.focus();
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        this.fire('open-command-menu', {
            x: e.clientX,
            y: e.clientY,
            source: MenuSource.ITEM,
            targetId: this.itemId,
        });
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        e.preventDefault();
        // Skip selecting the item if this item is part of a multi-selected group.
        if (!this.isMultiSelectMenu_()) {
            this.selectThisItem_();
        }
        this.fire('open-command-menu', {
            targetElement: e.target,
            source: MenuSource.ITEM,
            targetId: this.itemId,
        });
    }
    onUploadButtonClick_() {
        // Skip selecting the item if this item is part of a multi-selected group.
        if (!this.isMultiSelectMenu_()) {
            this.selectThisItem_();
        }
        // The handler identifies bookmarks by their legacy numeric id.
        assert(this.item_?.legacyId !== undefined);
        BrowserProxyImpl.getInstance().onSingleBookmarkUploadClicked(this.item_.legacyId.toString());
    }
    selectThisItem_() {
        this.dispatch(selectItem(this.itemId, this.getState(), {
            clear: true,
            range: false,
            toggle: false,
        }));
    }
    getItemUrl_() {
        return this.item_?.url || '';
    }
    getItemTitle_() {
        return this.item_?.title || '';
    }
    onClick_(e) {
        // Ignore double clicks so that Ctrl double-clicking an item won't deselect
        // the item before opening.
        if (e.detail !== 2) {
            const addKey = isMac ? e.metaKey : e.ctrlKey;
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: !addKey,
                range: e.shiftKey,
                toggle: addKey && !e.shiftKey,
            }));
        }
        e.stopPropagation();
        e.preventDefault();
    }
    onKeydown_(e) {
        const cursorModifier = isMac ? e.metaKey : e.ctrlKey;
        if (e.key === 'ArrowLeft') {
            this.focus();
        }
        else if (e.key === 'ArrowRight') {
            this.$.menuButton.focus();
        }
        else if (e.key === ' ' && !cursorModifier) {
            // Spacebar with the modifier is handled by the list.
            this.dispatch(selectItem(this.itemId, this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
    }
    onDblClick_(_e) {
        if (!this.isSelectedItem_) {
            this.selectThisItem_();
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        if (commandManager.canExecute(Command.OPEN, itemSet)) {
            commandManager.handle(Command.OPEN, itemSet);
        }
    }
    onMiddleClick_(e) {
        if (e.button !== 1) {
            return;
        }
        this.selectThisItem_();
        if (this.isFolder_) {
            return;
        }
        const commandManager = BookmarksCommandManagerElement.getInstance();
        const itemSet = this.getState().selection.items;
        const command = e.shiftKey ? Command.OPEN : Command.OPEN_NEW_TAB;
        if (commandManager.canExecute(command, itemSet)) {
            commandManager.handle(command, itemSet);
        }
    }
    onTouchStart_(e) {
        this.lastTouchPoints_ = e.touches.length;
    }
    /**
     * Prevent default middle-mouse behavior. On Windows, this prevents autoscroll
     * (during mousedown), and on Linux this prevents paste (during mouseup).
     */
    cancelMiddleMouseBehavior_(e) {
        if (e.button === 1) {
            e.preventDefault();
        }
    }
    updateFavicon_(url) {
        this.$.icon.className =
            url ? 'website-icon' : 'folder-icon icon-folder-open';
        this.$.icon.style.backgroundImage =
            url ? getFaviconForPageURL(url, false) : '';
    }
    getButtonAriaLabel_() {
        if (!this.item_) {
            return ''; // Item hasn't loaded, skip for now.
        }
        if (this.isMultiSelectMenu_()) {
            return loadTimeData.getStringF('moreActionsMultiButtonAxLabel');
        }
        return loadTimeData.getStringF('moreActionsButtonAxLabel', this.item_.title);
    }
    /**
     * This item is part of a group selection.
     */
    isMultiSelectMenu_() {
        return this.isSelectedItem_ && this.isMultiSelect_;
    }
    updateCanUploadAsAccountBookmark_() {
        // The handler identifies bookmarks by their legacy numeric id.
        if (this.item_?.legacyId === undefined) {
            this.canUploadAsAccountBookmark_ = false;
            return;
        }
        BrowserProxyImpl.getInstance()
            .getCanUploadBookmarkToAccountStorage(this.item_.legacyId.toString())
            .then((canUpload) => {
            this.canUploadAsAccountBookmark_ = canUpload;
        });
    }
}
customElements.define(BookmarksItemElement.is, BookmarksItemElement);
