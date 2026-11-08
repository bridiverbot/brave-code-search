// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import '/strings.m.js';
import './item.js';
import './promo_card.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { isMac } from 'chrome://resources/js/platform.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { deselectItems, selectAll, selectItem, updateAnchor } from './actions.js';
import { BookmarksCommandManagerElement } from './command_manager.js';
import { MenuSource, ROOT_NODE_ID } from './constants.js';
import { getCss } from './list.css.js';
import { getHtml } from './list.html.js';
import { StoreClientMixinLit } from './store_client_mixin_lit.js';
import { canReorderChildren, getDisplayedList } from './util.js';
const BookmarksListElementBase = WebUiListenerMixinLit(StoreClientMixinLit(CrLitElement));
export class BookmarksListElement extends BookmarksListElementBase {
    static get is() {
        return 'bookmarks-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            displayedIds_: { type: Array },
            searchTerm_: { type: String },
            selectedFolder_: { type: String },
            selectedItems_: { type: Object },
            focusedIndex_: { type: Number },
            shouldShowPromoCard_: { type: Boolean },
        };
    }
    #displayedIds__accessor_storage = [];
    get displayedIds_() { return this.#displayedIds__accessor_storage; }
    set displayedIds_(value) { this.#displayedIds__accessor_storage = value; }
    #focusedIndex__accessor_storage = 0;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    #searchTerm__accessor_storage = '';
    get searchTerm_() { return this.#searchTerm__accessor_storage; }
    set searchTerm_(value) { this.#searchTerm__accessor_storage = value; }
    #selectedFolder__accessor_storage = '';
    get selectedFolder_() { return this.#selectedFolder__accessor_storage; }
    set selectedFolder_(value) { this.#selectedFolder__accessor_storage = value; }
    #selectedItems__accessor_storage = new Set();
    get selectedItems_() { return this.#selectedItems__accessor_storage; }
    set selectedItems_(value) { this.#selectedItems__accessor_storage = value; }
    #shouldShowPromoCard__accessor_storage = false;
    get shouldShowPromoCard_() { return this.#shouldShowPromoCard__accessor_storage; }
    set shouldShowPromoCard_(value) { this.#shouldShowPromoCard__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateFromStore();
        this.eventTracker_.add(document, 'highlight-items', (e) => this.onHighlightItems_(e));
        this.addWebUiListener('import-began', () => this.onImportBegan_());
        this.addWebUiListener('import-ended', () => this.onImportEnded_());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(document, 'highlight-items');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('displayedIds_')) {
            // Reset the focused index if it's out of bounds for the new array value.
            if (this.focusedIndex_ > this.displayedIds_.length - 1) {
                this.focusedIndex_ = 0;
            }
        }
    }
    firstUpdated() {
        this.addEventListener('click', () => this.deselectItems_());
        this.addEventListener('contextmenu', e => this.onContextMenu_(e));
        this.addEventListener('open-command-menu', e => this.onOpenCommandMenu_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchTerm_') ||
            changedPrivateProperties.has('selectedFolder_')) {
            this.scrollTop = 0;
        }
        if (changedPrivateProperties.has('displayedIds_')) {
            // Get the last selection from the previous value of selectedItems_ if
            // selectedItems_ also changed, and was not previously undefined (as
            // is the case at initialization). Otherwise, get the last selection from
            // the current value of selectedItems_, since it is the same as the prior
            // value.
            let lastSelectedItems = this.selectedItems_;
            if (changedPrivateProperties.has('selectedItems_') &&
                changedPrivateProperties.get('selectedItems_') !== undefined) {
                lastSelectedItems =
                    changedPrivateProperties.get('selectedItems_');
            }
            const lastSelection = lastSelectedItems.size > 0 ? Array.from(lastSelectedItems)[0] : null;
            this.onDisplayedIdsChanged_(changedPrivateProperties.get('displayedIds_'), lastSelection);
        }
    }
    onStateChanged(state) {
        // The tree may be ill-formed, temporarily during updates. In that case,
        // ignore the update.
        const children = state.nodes?.[ROOT_NODE_ID]?.children;
        if (!children || children.length === 0) {
            return;
        }
        this.displayedIds_ = getDisplayedList(state);
        this.searchTerm_ = state.search.term;
        this.selectedFolder_ = state.selectedFolder;
        this.selectedItems_ = state.selection.items;
    }
    getDropTarget() {
        return this.$.message;
    }
    onDisplayedIdsChanged_(previous, lastSelected) {
        // Clear any previous 'items-rendered' listener when the list changes, as
        // the |selectIndex| from last time may no longer be valid.
        this.eventTracker_.remove(this.$.list, 'items-rendered');
        let selectIndex = -1;
        let skipFocus = false;
        if (this.matches(':focus-within')) {
            if (lastSelected !== null) {
                skipFocus = this.displayedIds_.some(id => lastSelected === id);
                selectIndex =
                    previous ? previous.findIndex(id => lastSelected === id) : -1;
            }
            if (selectIndex === -1 && this.displayedIds_.length > 0) {
                selectIndex = 0;
            }
            else {
                selectIndex = Math.min(selectIndex, this.displayedIds_.length - 1);
            }
        }
        if (selectIndex > -1) {
            if (skipFocus) {
                // Mimic iron-list by blurring the item in this case.
                const active = this.shadowRoot.activeElement;
                if (active) {
                    active.blur();
                }
            }
            else {
                this.eventTracker_.add(this.$.list, 'items-rendered', () => this.focusMenuButton_(selectIndex));
            }
        }
        PluralStringProxyImpl.getInstance()
            .getPluralString('listChanged', this.displayedIds_.length)
            .then(label => {
            getAnnouncerInstance().announce(label);
        });
    }
    async focusMenuButton_(index) {
        const element = await this.$.list.ensureItemRendered(index);
        if (isMac && this.getState().selection.items.size === 0) {
            element.focus();
            // On macOS, auto-select the first focused item when entering a
            // folder (when selection is empty) without overriding existing
            // selections during multi-select navigation (Cmd + Arrow).
            this.dispatch(selectItem(this.displayedIds_[index], this.getState(), { clear: true, range: false, toggle: false }));
        }
        else {
            element.focusMenuButton();
        }
    }
    /**
     * Scroll the list so that |itemId| is visible, if it is not already.
     */
    scrollToId_(itemId) {
        const index = this.displayedIds_.indexOf(itemId);
        const list = this.$.list;
        if (index >= 0 && index < list.domItems().length) {
            list.domItems()[index].scrollIntoViewIfNeeded();
        }
    }
    emptyListMessage_() {
        let emptyListMessage = 'noSearchResults';
        if (!this.searchTerm_) {
            emptyListMessage =
                canReorderChildren(this.getState(), this.getState().selectedFolder) ?
                    'emptyList' :
                    'emptyUnmodifiableList';
        }
        return loadTimeData.getString(emptyListMessage);
    }
    isEmptyList_() {
        return this.displayedIds_.length === 0;
    }
    deselectItems_() {
        this.dispatch(deselectItems());
    }
    onOpenCommandMenu_(e) {
        // If the item is not visible, scroll to it before rendering the menu.
        if (e.detail.source === MenuSource.ITEM) {
            this.scrollToId_(e.composedPath()[0].itemId);
        }
    }
    /**
     * Highlight a list of items by selecting them, scrolling them into view and
     * focusing the first item.
     */
    async onHighlightItems_(e) {
        // Ensure that we only select items which are actually being displayed.
        // This should only matter if an unrelated update to the bookmark model
        // happens with the perfect timing to end up in a tracked batch update.
        const toHighlight = e.detail.filter((item) => this.displayedIds_.indexOf(item) !== -1);
        if (toHighlight.length <= 0) {
            return;
        }
        const leadId = toHighlight[0];
        this.dispatch(selectAll(toHighlight, this.getState(), leadId));
        // Wait for the change to selectedItems_ to reflect in the DOM.
        await this.updateComplete;
        const leadIndex = this.displayedIds_.indexOf(leadId);
        assert(leadIndex !== -1);
        // Ensure the new list addition has been rendered by cr-lazy-list.
        const element = await this.$.list.ensureItemRendered(leadIndex);
        element.scrollIntoViewIfNeeded();
        element.focus();
    }
    onImportBegan_() {
        getAnnouncerInstance().announce(loadTimeData.getString('importBegan'));
    }
    onImportEnded_() {
        getAnnouncerInstance().announce(loadTimeData.getString('importEnded'));
    }
    onItemKeydown_(e) {
        let handled = true;
        let focusMoved = false;
        let focusedIndex = Number(e.target.dataset['index']);
        const oldFocusedIndex = focusedIndex;
        const cursorModifier = isMac ? e.metaKey : e.ctrlKey;
        if (e.key === 'ArrowUp') {
            focusedIndex--;
            focusMoved = true;
        }
        else if (e.key === 'ArrowDown') {
            focusedIndex++;
            focusMoved = true;
            e.preventDefault();
        }
        else if (e.key === 'Home') {
            focusedIndex = 0;
            focusMoved = true;
        }
        else if (e.key === 'End') {
            focusedIndex = this.displayedIds_.length - 1;
            focusMoved = true;
        }
        else if (e.key === ' ' && cursorModifier) {
            this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), {
                clear: false,
                range: false,
                toggle: true,
            }));
        }
        else {
            handled = false;
        }
        if (focusMoved) {
            // Focus only moves if the key is an arrow key or page up/down, which
            // means we've handled the key event.
            focusedIndex =
                Math.min(this.displayedIds_.length - 1, Math.max(0, focusedIndex));
            this.focusedIndex_ = focusedIndex;
            assert(handled);
            e.stopPropagation();
            // Once the item is rendered, update the anchor and config if needed.
            this.updateAnchorsAndSelectionForFocusChange_(e.shiftKey, cursorModifier, oldFocusedIndex, focusedIndex);
            return;
        }
        // Prevent the cr-lazy-list from changing focus on enter.
        if (e.key === 'Enter') {
            if (e.composedPath()[0].tagName === 'CR-ICON-BUTTON') {
                return;
            }
            if (e.composedPath()[0] instanceof HTMLButtonElement) {
                handled = true;
            }
        }
        if (!handled) {
            handled = BookmarksCommandManagerElement.getInstance().handleKeyEvent(e, this.getState().selection.items);
        }
        if (handled) {
            e.stopPropagation();
        }
    }
    async updateAnchorsAndSelectionForFocusChange_(shiftKey, cursorModifier, oldFocusedIndex, focusedIndex) {
        const element = await this.$.list.ensureItemRendered(focusedIndex);
        element.focus();
        if (cursorModifier && !shiftKey) {
            this.dispatch(updateAnchor(this.displayedIds_[focusedIndex]));
        }
        else {
            // If shift-selecting with no anchor, use the old focus index.
            if (shiftKey && this.getState().selection.anchor === null) {
                this.dispatch(updateAnchor(this.displayedIds_[oldFocusedIndex]));
            }
            // If the focus moved from something other than a Ctrl + move event,
            // update the selection.
            const config = {
                clear: !cursorModifier,
                range: shiftKey,
                toggle: false,
            };
            this.dispatch(selectItem(this.displayedIds_[focusedIndex], this.getState(), config));
        }
    }
    onContextMenu_(e) {
        e.preventDefault();
        this.deselectItems_();
        this.fire('open-command-menu', {
            x: e.clientX,
            y: e.clientY,
            source: MenuSource.LIST,
        });
    }
    onItemFocus_(e) {
        const renderedItems = this.$.list.domItems();
        const focusedIdx = Array.from(renderedItems).findIndex(item => {
            return item === e.target || item.shadowRoot?.activeElement === e.target;
        });
        if (focusedIdx !== -1) {
            this.focusedIndex_ = focusedIdx;
            // On macOS, auto-select focused item when tabbing into the list
            // from outside (when selection is empty). Ignore programmatic focus
            // changes in unit tests and internal Shadow DOM movements.
            const related = e.relatedTarget;
            const isInsideList = related &&
                (this.contains(related) ||
                    (this.shadowRoot && this.shadowRoot.contains(related)));
            const enteringFromOutside = related && related !== document.body && !isInsideList;
            if (isMac && this.getState().selection.items.size === 0 &&
                enteringFromOutside) {
                this.dispatch(selectItem(this.displayedIds_[focusedIdx], this.getState(), { clear: true, range: false, toggle: false }));
            }
        }
    }
    getAriaRowindex_(index) {
        return index + 1;
    }
    getTabindex_(index) {
        return index === this.focusedIndex_ ? 0 : -1;
    }
    getAriaSelected_(id) {
        return this.selectedItems_.has(id);
    }
    onShouldShowPromoCard_(e) {
        this.shouldShowPromoCard_ = e.detail.shouldShowPromoCard;
    }
    setDisplayedIdsForTesting(ids) {
        this.displayedIds_ = ids;
    }
}
customElements.define(BookmarksListElement.is, BookmarksListElement);
