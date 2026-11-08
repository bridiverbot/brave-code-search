// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { isRTL } from 'chrome://resources/js/util.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { changeFolderOpen, selectFolder } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { LOCAL_HEADING_NODE_ID, MenuSource, ROOT_NODE_ID } from './constants.js';
import { getCss } from './folder_node.css.js';
import { getHtml } from './folder_node.html.js';
import { StoreClientMixinLit } from './store_client_mixin_lit.js';
import { hasChildFolders, isRootNode, isShowingSearch } from './util.js';
const BookmarksFolderNodeElementBase = StoreClientMixinLit(CrLitElement);
export class BookmarksFolderNodeElement extends BookmarksFolderNodeElementBase {
    static get is() {
        return 'bookmarks-folder-node';
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
            depth: { type: Number },
            isOpen: { type: Boolean },
            item_: { type: Object },
            openState_: { type: Boolean },
            selectedFolder_: { type: String },
            searchActive_: { type: Boolean },
            isSelectedFolder_: {
                type: Boolean,
                reflect: true,
            },
            hasChildFolder_: { type: Boolean },
        };
    }
    #depth_accessor_storage = -1;
    get depth() { return this.#depth_accessor_storage; }
    set depth(value) { this.#depth_accessor_storage = value; }
    #isOpen_accessor_storage = false;
    get isOpen() { return this.#isOpen_accessor_storage; }
    set isOpen(value) { this.#isOpen_accessor_storage = value; }
    #itemId_accessor_storage = '';
    get itemId() { return this.#itemId_accessor_storage; }
    set itemId(value) { this.#itemId_accessor_storage = value; }
    #item__accessor_storage;
    get item_() { return this.#item__accessor_storage; }
    set item_(value) { this.#item__accessor_storage = value; }
    #openState__accessor_storage = null;
    get openState_() { return this.#openState__accessor_storage; }
    set openState_(value) { this.#openState__accessor_storage = value; }
    #selectedFolder__accessor_storage = '';
    get selectedFolder_() { return this.#selectedFolder__accessor_storage; }
    set selectedFolder_(value) { this.#selectedFolder__accessor_storage = value; }
    #searchActive__accessor_storage = false;
    get searchActive_() { return this.#searchActive__accessor_storage; }
    set searchActive_(value) { this.#searchActive__accessor_storage = value; }
    #isSelectedFolder__accessor_storage = false;
    get isSelectedFolder_() { return this.#isSelectedFolder__accessor_storage; }
    set isSelectedFolder_(value) { this.#isSelectedFolder__accessor_storage = value; }
    #hasChildFolder__accessor_storage = false;
    get hasChildFolder_() { return this.#hasChildFolder__accessor_storage; }
    set hasChildFolder_(value) { this.#hasChildFolder__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('itemId')) {
            this.updateFromStore();
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('depth') ||
            changedPrivateProperties.has('openState_')) {
            // If account nodes exist, the permanent account nodes should be visible,
            // while the local ones are collapsed.
            const defaultOpenState = isRootNode(this.itemId) && this.itemId !== LOCAL_HEADING_NODE_ID;
            this.isOpen =
                this.openState_ !== null ? this.openState_ : defaultOpenState;
        }
        if (changedProperties.has('itemId') ||
            changedPrivateProperties.has('selectedFolder_') ||
            changedPrivateProperties.has('searchActive_')) {
            const previous = this.isSelectedFolder_;
            this.isSelectedFolder_ =
                this.itemId === this.selectedFolder_ && !this.searchActive_;
            if (previous !== this.isSelectedFolder_ && this.isSelectedFolder_) {
                this.scrollIntoViewIfNeeded_();
            }
        }
        if (changedPrivateProperties.has('item_')) {
            this.hasChildFolder_ =
                hasChildFolders(this.itemId, this.getState().nodes);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('depth')) {
            this.style.setProperty('--node-depth', String(this.depth));
            if (this.depth === -1) {
                this.$.descendants.removeAttribute('role');
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('isOpen') ||
            changedPrivateProperties.has('hasChildFolder_')) {
            this.updateAriaExpanded_();
        }
    }
    // StoreClientMixinLit
    onStateChanged(state) {
        this.item_ = state.nodes[this.itemId];
        this.openState_ = state.folderOpenState.has(this.itemId) ?
            state.folderOpenState.get(this.itemId) :
            null;
        this.selectedFolder_ = state.selectedFolder;
        this.searchActive_ = isShowingSearch(state);
    }
    getContainerClass_() {
        return this.isSelectedFolder_ ? 'selected' : '';
    }
    getItemTitle_() {
        return this.item_?.title || '';
    }
    getFocusTarget() {
        return this.$.container;
    }
    getDropTarget() {
        return this.$.container;
    }
    onKeydown_(e) {
        let yDirection = 0;
        let xDirection = 0;
        let handled = true;
        if (e.key === 'ArrowUp') {
            yDirection = -1;
        }
        else if (e.key === 'ArrowDown') {
            yDirection = 1;
        }
        else if (e.key === 'ArrowLeft') {
            xDirection = -1;
        }
        else if (e.key === 'ArrowRight') {
            xDirection = 1;
        }
        else if (e.key === ' ') {
            this.selectFolder_();
        }
        else {
            handled = false;
        }
        if (isRTL()) {
            xDirection *= -1;
        }
        this.changeKeyboardSelection_(xDirection, yDirection, this.shadowRoot.activeElement);
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, new Set([this.itemId]));
        }
        if (!handled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
    }
    changeKeyboardSelection_(xDirection, yDirection, currentFocus) {
        let newFocusFolderNode = null;
        const isChildFolderNodeFocused = currentFocus &&
            currentFocus.tagName === 'BOOKMARKS-FOLDER-NODE';
        if (xDirection === 1) {
            // The right arrow opens a folder if closed and goes to the first child
            // otherwise.
            if (this.hasChildFolder_) {
                if (!this.isOpen) {
                    this.dispatch(changeFolderOpen(this.item_.id, true));
                }
                else {
                    yDirection = 1;
                }
            }
        }
        else if (xDirection === -1) {
            // The left arrow closes a folder if open and goes to the parent
            // otherwise.
            if (this.hasChildFolder_ && this.isOpen) {
                this.dispatch(changeFolderOpen(this.item_.id, false));
            }
            else {
                const parentFolderNode = this.getParentFolderNode();
                if (parentFolderNode && parentFolderNode.itemId !== ROOT_NODE_ID) {
                    parentFolderNode.getFocusTarget().focus();
                }
            }
        }
        if (!yDirection) {
            return;
        }
        // The current node's successor is its first child when open.
        if (!isChildFolderNodeFocused && yDirection === 1 && this.isOpen) {
            const children = this.getChildFolderNodes_();
            if (children.length) {
                newFocusFolderNode = children[0];
            }
        }
        if (isChildFolderNodeFocused) {
            // Get the next child folder node if a child is focused.
            if (!newFocusFolderNode) {
                newFocusFolderNode = this.getNextChild(yDirection === -1, currentFocus);
            }
            // The first child's predecessor is this node.
            if (!newFocusFolderNode && yDirection === -1) {
                newFocusFolderNode = this;
            }
        }
        // If there is no newly focused node, allow the parent to handle the change.
        if (!newFocusFolderNode) {
            const parentFolderNode = this.getParentFolderNode();
            if (parentFolderNode && this.itemId !== ROOT_NODE_ID) {
                parentFolderNode.changeKeyboardSelection_(0, yDirection, this);
            }
            return;
        }
        // The root node is not navigable.
        if (newFocusFolderNode.itemId !== ROOT_NODE_ID) {
            newFocusFolderNode.getFocusTarget().focus();
        }
    }
    /**
     * Returns the next or previous visible bookmark node relative to |child|.
     */
    getNextChild(reverse, child) {
        let newFocus = null;
        const children = this.getChildFolderNodes_();
        const index = children.indexOf(child);
        assert(index !== -1);
        if (reverse) {
            // A child node's predecessor is either the previous child's last visible
            // descendant, or this node, which is its immediate parent.
            newFocus =
                index === 0 ? null : children[index - 1].getLastVisibleDescendant();
        }
        else if (index < children.length - 1) {
            // A successor to a child is the next child.
            newFocus = children[index + 1];
        }
        return newFocus;
    }
    /**
     * Returns the immediate parent folder node, or null if there is none.
     */
    getParentFolderNode() {
        let parentFolderNode = this.parentNode;
        while (parentFolderNode &&
            parentFolderNode.tagName !==
                'BOOKMARKS-FOLDER-NODE') {
            parentFolderNode =
                parentFolderNode.parentNode || parentFolderNode.host;
        }
        return parentFolderNode || null;
    }
    getLastVisibleDescendant() {
        const children = this.getChildFolderNodes_();
        if (!this.isOpen || children.length === 0) {
            return this;
        }
        return children.pop().getLastVisibleDescendant();
    }
    onFolderClick_() {
        this.selectFolder_();
    }
    selectFolder_() {
        if (!this.isSelectedFolder_) {
            this.dispatch(selectFolder(this.itemId, this.getState().nodes));
        }
    }
    onContextmenu_(e) {
        e.preventDefault();
        this.selectFolder_();
        // Disable the context menu for root nodes.
        if (isRootNode(this.itemId)) {
            return;
        }
        BookmarksCommandManagerElement.getInstance().openCommandMenuAtPosition(e.clientX, e.clientY, MenuSource.TREE, new Set([this.itemId]));
    }
    getChildFolderNodes_() {
        return Array.from(this.shadowRoot.querySelectorAll('bookmarks-folder-node'));
    }
    /**
     * Toggles whether the folder is open.
     */
    toggleFolder_(e) {
        this.dispatch(changeFolderOpen(this.itemId, !this.isOpen));
        e.stopPropagation();
    }
    onFolderDblclick_(e) {
        this.toggleFolder_(e);
    }
    onArrowClick_(e) {
        this.toggleFolder_(e);
    }
    onArrowMousedown_(e) {
        e.preventDefault();
    }
    getChildDepth_() {
        return this.depth + 1;
    }
    getFolderChildren_() {
        const children = this.item_?.children;
        const nodes = this.getState()?.nodes;
        if (!Array.isArray(children) || !nodes) {
            return [];
        }
        return children.filter(itemId => {
            const node = nodes[itemId];
            // Exclude url nodes.
            return !node?.url;
        });
    }
    isRootFolder_() {
        return this.itemId === ROOT_NODE_ID;
    }
    getTabIndex_() {
        // This returns a tab index of 0 for the cached selected folder when the
        // search is active, even though this node is not technically selected. This
        // allows the sidebar to be focusable during a search.
        return this.selectedFolder_ === this.itemId ? '0' : '-1';
    }
    getAriaLevel_() {
        // Converts (-1)-indexed depth to 1-based ARIA level.
        return this.depth + 2;
    }
    /**
     * Sets the 'aria-expanded' accessibility on nodes which need it. Note that
     * aria-expanded="false" is different to having the attribute be undefined.
     */
    updateAriaExpanded_() {
        if (this.hasChildFolder_) {
            this.getFocusTarget().setAttribute('aria-expanded', String(this.isOpen));
        }
        else {
            this.getFocusTarget().removeAttribute('aria-expanded');
        }
    }
    /**
     * Scrolls the folder node into view when the folder is selected.
     */
    async scrollIntoViewIfNeeded_() {
        await this.updateComplete;
        this.$.container.scrollIntoViewIfNeeded();
    }
}
customElements.define(BookmarksFolderNodeElement.is, BookmarksFolderNodeElement);
