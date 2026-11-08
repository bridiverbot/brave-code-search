// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './bypass_warning_confirmation_dialog.js';
import './item.js';
import './toolbar.js';
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import { ColorChangeUpdater, COLORS_CSS_SELECTOR } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { getToastManager } from 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import { FindShortcutMixinLit } from 'chrome://resources/cr_elements/find_shortcut_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './downloads.mojom-webui.js';
import { getCss } from './manager.css.js';
import { getHtml } from './manager.html.js';
import { SearchService } from './search_service.js';
const DownloadsManagerElementBase = FindShortcutMixinLit(CrLitElement);
export class DownloadsManagerElement extends DownloadsManagerElementBase {
    static get is() {
        return 'downloads-manager';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            hasDownloads_: { type: Boolean },
            inSearchMode_: { type: Boolean },
            items_: { type: Array },
            spinnerActive_: { type: Boolean },
            bypassPromptItemId_: { type: String },
            // 
            lastFocused_: { type: Object },
            listBlurred_: { type: Boolean },
            listScrollTarget_: { type: Object },
        };
    }
    static get observers() {
        return ['itemsChanged_(items_.*)'];
    }
    #items__accessor_storage = [];
    get items_() { return this.#items__accessor_storage; }
    set items_(value) { this.#items__accessor_storage = value; }
    #hasDownloads__accessor_storage = false;
    get hasDownloads_() { return this.#hasDownloads__accessor_storage; }
    set hasDownloads_(value) { this.#hasDownloads__accessor_storage = value; }
    #inSearchMode__accessor_storage = false;
    // Used for CSS styling.
    get inSearchMode_() { return this.#inSearchMode__accessor_storage; }
    set inSearchMode_(value) { this.#inSearchMode__accessor_storage = value; }
    #spinnerActive__accessor_storage = false;
    get spinnerActive_() { return this.#spinnerActive__accessor_storage; }
    set spinnerActive_(value) { this.#spinnerActive__accessor_storage = value; }
    #bypassPromptItemId__accessor_storage = '';
    get bypassPromptItemId_() { return this.#bypassPromptItemId__accessor_storage; }
    set bypassPromptItemId_(value) { this.#bypassPromptItemId__accessor_storage = value; }
    #lastFocused__accessor_storage = null;
    // 
    get lastFocused_() { return this.#lastFocused__accessor_storage; }
    set lastFocused_(value) { this.#lastFocused__accessor_storage = value; }
    #listBlurred__accessor_storage = false;
    get listBlurred_() { return this.#listBlurred__accessor_storage; }
    set listBlurred_(value) { this.#listBlurred__accessor_storage = value; }
    #listScrollTarget__accessor_storage = document.documentElement;
    get listScrollTarget_() { return this.#listScrollTarget__accessor_storage; }
    set listScrollTarget_(value) { this.#listScrollTarget__accessor_storage = value; }
    announcerTimeout_ = null;
    browserProxy_;
    searchService_ = SearchService.getInstance();
    loaded_ = new PromiseResolver();
    listenerIds_ = [];
    eventTracker_ = new EventTracker();
    constructor() {
        super();
        this.browserProxy_ = browserProxyFactory.getInstance();
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in chrome://downloads.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // TODO(dbeam): this should use a class instead.
        this.toggleAttribute('loading', true);
        document.documentElement.classList.remove('loading');
        const enableWebuiRefresh2026 = loadTimeData.getString('webuiRefresh2026') !== '';
        if (enableWebuiRefresh2026) {
            this.addThemedColors_();
            ColorChangeUpdater.forDocument().start();
        }
        this.listenerIds_ = [
            this.browserProxy_.callbackRouter.clearAll.addListener(this.clearAll_.bind(this)),
            this.browserProxy_.callbackRouter.insertItems.addListener(this.insertItems_.bind(this)),
            this.browserProxy_.callbackRouter.removeItem.addListener(this.removeItem_.bind(this)),
            this.browserProxy_.callbackRouter.updateItem.addListener(this.updateItem_.bind(this)),
        ];
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'click', () => this.onClick_());
        this.loaded_.promise.then(() => {
            requestIdleCallback(function () {
                document.fonts.load('bold 12px Roboto');
            });
        });
        this.searchService_.loadMore();
        // Intercepts clicks on toast.
        const toastManager = getToastManager();
        toastManager.$.toast.onclick = e => this.onToastClicked_(e);
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => assert(this.browserProxy_.callbackRouter.removeListener(id)));
        this.eventTracker_.removeAll();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.listScrollTarget_ = this.$.mainContainer;
    }
    onSaveDangerousClick_(e) {
        const bypassItem = this.items_.find(item => item.id === e.detail.id);
        if (bypassItem) {
            this.bypassPromptItemId_ = bypassItem.id;
            this.browserProxy_.handler.recordOpenBypassWarningDialog(this.bypassPromptItemId_);
        }
    }
    // 
    shouldShowBypassWarningPrompt_() {
        return this.bypassPromptItemId_ !== '';
    }
    computeBypassWarningDialogFileName_() {
        const bypassItem = this.items_.find(item => item.id === this.bypassPromptItemId_);
        return bypassItem?.fileName || '';
    }
    hideBypassWarningPrompt_() {
        this.bypassPromptItemId_ = '';
    }
    onBypassWarningConfirmationDialogClose_() {
        const dialog = this.shadowRoot.querySelector('downloads-bypass-warning-confirmation-dialog');
        assert(dialog);
        assert(this.bypassPromptItemId_ !== '');
        if (dialog.wasConfirmed()) {
            this.browserProxy_.handler.saveDangerousFromDialogRequiringGesture(this.bypassPromptItemId_);
        }
        else {
            // Closing the dialog by clicking cancel is treated the same as closing
            // the dialog by pressing Esc. Both are treated as CANCEL, not CLOSE.
            this.browserProxy_.handler.recordCancelBypassWarningDialog(this.bypassPromptItemId_);
        }
        this.hideBypassWarningPrompt_();
    }
    clearAll_() {
        this.items_ = [];
        this.itemsChanged_();
    }
    insertItems_(index, items) {
        // Insert |items| at the given |index|.
        if (items.length > 0) {
            this.updateItems_(index, 0, items);
        }
        if (this.hasAttribute('loading')) {
            this.removeAttribute('loading');
            this.loaded_.resolve();
        }
        this.spinnerActive_ = false;
    }
    hasClearableDownloads_() {
        return loadTimeData.getBoolean('allowDeletingHistory') &&
            this.hasDownloads_;
    }
    itemsChanged_() {
        this.hasDownloads_ = this.items_.length > 0;
        if (!this.inSearchMode_) {
            return;
        }
        if (this.announcerTimeout_) {
            clearTimeout(this.announcerTimeout_);
        }
        this.announcerTimeout_ = setTimeout(() => {
            const searchText = this.$.toolbar.getSearchText();
            const announcement = this.items_.length === 0 ?
                this.noDownloadsText_() :
                (this.items_.length === 1 ?
                    loadTimeData.getStringF('searchResultsSingular', searchText) :
                    loadTimeData.getStringF('searchResultsPlural', this.items_.length, searchText));
            getAnnouncerInstance().announce(announcement);
            this.announcerTimeout_ = null;
        }, 500);
    }
    /**
     * @return The text to show when no download items are showing.
     */
    noDownloadsText_() {
        return loadTimeData.getString(this.inSearchMode_ ? 'noSearchResults' : 'noDownloads');
    }
    /**
     * @return Whether the undo command can be handled by accelerator.
     */
    canHandleUndoByAccelerator_() {
        // If the toolbar's search field is in a focused state, we should not
        // handle the undo command by accelerator, as it conflicts with the
        // text undo accelerator key of the search field.
        return !this.$.toolbar.isSearchFocused();
    }
    onKeyDown_(e) {
        let clearAllKey = 'c';
        // 
        if (e.key === clearAllKey && e.altKey && !e.ctrlKey && !e.shiftKey &&
            !e.metaKey) {
            this.onClearAllCommand_();
            e.preventDefault();
            return;
        }
        if (e.key === 'z' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier && this.canHandleUndoByAccelerator_()) {
                this.onUndoCommand_();
                e.preventDefault();
            }
        }
    }
    onClick_() {
        const toastManager = getToastManager();
        if (toastManager.isToastOpen) {
            toastManager.hide();
        }
    }
    onClearAllCommand_() {
        if (!this.$.toolbar.canClearAll()) {
            return;
        }
        this.browserProxy_.handler.clearAll();
        const canUndo = this.items_.some(data => !data.isDangerous && !data.isInsecure);
        getToastManager().show(loadTimeData.getString('toastClearedAll'), 
        /* hideSlotted= */ !canUndo);
    }
    onUndoCommand_() {
        if (!this.$.toolbar.canUndo()) {
            return;
        }
        getToastManager().hide();
        this.browserProxy_.handler.undo();
    }
    onToastClicked_(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    onScroll_() {
        const container = this.listScrollTarget_;
        assert(!!container);
        const distanceToBottom = container.scrollHeight - container.scrollTop - container.offsetHeight;
        if (distanceToBottom <= 100) {
            // Approaching the end of the scrollback. Attempt to load more items.
            this.searchService_.loadMore();
        }
    }
    onSearchChanged_() {
        this.inSearchMode_ = this.searchService_.isSearching();
    }
    onSpinnerActiveChanged_(event) {
        this.spinnerActive_ = event.detail.value;
    }
    removeItem_(index) {
        const removed = this.items_[index];
        if (removed.id === this.bypassPromptItemId_) {
            this.hideBypassWarningPrompt_();
        }
        this.updateItems_(index, 1, []);
        this.updateComplete.then(() => this.onScroll_());
    }
    updateItems_(index, toRemove, newItems = []) {
        const items = [
            ...this.items_.slice(0, index),
            ...newItems,
            ...this.items_.slice(index + toRemove),
        ];
        // Update whether dates should show.
        for (let i = index; i <= index + newItems.length; ++i) {
            const current = items[i];
            if (!current) {
                continue;
            }
            const prev = items[i - 1];
            current.hideDate = !!prev && prev.dateString === current.dateString;
        }
        const lengthChanged = this.items_.length !== items.length;
        this.items_ = items;
        if (lengthChanged) {
            this.itemsChanged_();
        }
    }
    onUndoClick_() {
        getToastManager().hide();
        this.browserProxy_.handler.undo();
    }
    updateItem_(index, data) {
        this.updateItems_(index, 1, [data]);
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
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.focusOnSearchInput();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.isSearchFocused();
    }
    addThemedColors_() {
        assert(document.body.querySelector(COLORS_CSS_SELECTOR) === null);
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'chrome://theme/colors.css?sets=ui,chrome';
        document.body.appendChild(link);
    }
}
customElements.define(DownloadsManagerElement.is, DownloadsManagerElement);
