// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://read-later.top-chrome/shared/sp_empty_state.js';
import 'chrome://read-later.top-chrome/shared/sp_footer.js';
import 'chrome://read-later.top-chrome/shared/sp_heading.js';
import 'chrome://read-later.top-chrome/shared/sp_icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './reading_list_item.js';
import '/strings.m.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, CurrentPageActionButtonState } from './reading_list.mojom-webui.js';
import { getCss } from './reading_list_app.css.js';
import { getHtml } from './reading_list_app.html.js';
import { MARKED_AS_READ_UI_EVENT } from './reading_list_item.js';
const navigationKeys = new Set(['ArrowDown', 'ArrowUp']);
const ReadingListAppElementBase = HelpBubbleMixinLit(CrLitElement);
// browser_element_identifiers constants
const ADD_CURRENT_TAB_ELEMENT_ID = 'kAddCurrentTabToReadingListElementId';
const READING_LIST_UNREAD_ELEMENT_ID = 'kSidePanelReadingListUnreadElementId';
const MARKED_AS_READ_NATIVE_EVENT_ID = 'kSidePanelReadingMarkedAsReadEventId';
export class ReadingListAppElement extends ReadingListAppElementBase {
    static get is() {
        return 'reading-list-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            unreadItems_: { type: Array },
            readItems_: { type: Array },
            focusedIndex_: { type: Number },
            focusedItem_: { type: Object },
            currentPageActionButtonState_: { type: Number },
            buttonRipples: { type: Boolean },
            loadingContent_: { type: Boolean },
            itemSize_: { type: Number },
            scrollTarget_: { type: Object },
            unreadHeader_: { type: String },
            readHeader_: { type: String },
            unreadExpanded_: { type: Boolean },
            readExpanded_: { type: Boolean },
            isWebUIBrowser_: { type: Boolean },
        };
    }
    #unreadItems__accessor_storage = [];
    get unreadItems_() { return this.#unreadItems__accessor_storage; }
    set unreadItems_(value) { this.#unreadItems__accessor_storage = value; }
    #readItems__accessor_storage = [];
    get readItems_() { return this.#readItems__accessor_storage; }
    set readItems_(value) { this.#readItems__accessor_storage = value; }
    #focusedIndex__accessor_storage = -1;
    get focusedIndex_() { return this.#focusedIndex__accessor_storage; }
    set focusedIndex_(value) { this.#focusedIndex__accessor_storage = value; }
    #focusedItem__accessor_storage = null;
    get focusedItem_() { return this.#focusedItem__accessor_storage; }
    set focusedItem_(value) { this.#focusedItem__accessor_storage = value; }
    #currentPageActionButtonState__accessor_storage = CurrentPageActionButtonState.kDisabled;
    get currentPageActionButtonState_() { return this.#currentPageActionButtonState__accessor_storage; }
    set currentPageActionButtonState_(value) { this.#currentPageActionButtonState__accessor_storage = value; }
    #buttonRipples_accessor_storage = loadTimeData.getBoolean('useRipples');
    get buttonRipples() { return this.#buttonRipples_accessor_storage; }
    set buttonRipples(value) { this.#buttonRipples_accessor_storage = value; }
    #loadingContent__accessor_storage = true;
    get loadingContent_() { return this.#loadingContent__accessor_storage; }
    set loadingContent_(value) { this.#loadingContent__accessor_storage = value; }
    #itemSize__accessor_storage = 48;
    get itemSize_() { return this.#itemSize__accessor_storage; }
    set itemSize_(value) { this.#itemSize__accessor_storage = value; }
    #scrollTarget__accessor_storage = document.documentElement;
    get scrollTarget_() { return this.#scrollTarget__accessor_storage; }
    set scrollTarget_(value) { this.#scrollTarget__accessor_storage = value; }
    #unreadHeader__accessor_storage = loadTimeData.getString('unreadHeader');
    get unreadHeader_() { return this.#unreadHeader__accessor_storage; }
    set unreadHeader_(value) { this.#unreadHeader__accessor_storage = value; }
    #readHeader__accessor_storage = loadTimeData.getString('readHeader');
    get readHeader_() { return this.#readHeader__accessor_storage; }
    set readHeader_(value) { this.#readHeader__accessor_storage = value; }
    #unreadExpanded__accessor_storage = true;
    get unreadExpanded_() { return this.#unreadExpanded__accessor_storage; }
    set unreadExpanded_(value) { this.#unreadExpanded__accessor_storage = value; }
    #readExpanded__accessor_storage = false;
    get readExpanded_() { return this.#readExpanded__accessor_storage; }
    set readExpanded_(value) { this.#readExpanded__accessor_storage = value; }
    #isWebUIBrowser__accessor_storage = loadTimeData.getBoolean('isWebUIBrowser');
    get isWebUIBrowser_() { return this.#isWebUIBrowser__accessor_storage; }
    set isWebUIBrowser_(value) { this.#isWebUIBrowser__accessor_storage = value; }
    apiProxy_ = browserProxyFactory.getInstance();
    listenerIds_ = [];
    visibilityChangedListener_;
    readingListEventTracker_ = new EventTracker();
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.visibilityChangedListener_ = () => {
            // Refresh Reading List's list data when transitioning into a visible
            // state.
            if (document.visibilityState === 'visible') {
                this.updateReadLaterEntries_();
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.isWebUIBrowser_) {
            this.classList.add('in-webui-browser');
        }
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
        const callbackRouter = this.apiProxy_.callbackRouter;
        this.listenerIds_.push(callbackRouter.itemsChanged.addListener((entries) => this.updateReadingListItems_(entries)), callbackRouter.currentPageActionButtonStateChanged.addListener((state) => this.updateCurrentPageActionButton_(state)));
        this.scrollTarget_ = this.$.scroller;
        this.updateReadLaterEntries_();
        this.apiProxy_.handler.updateCurrentPageActionButtonState();
        this.readingListEventTracker_.add(this.shadowRoot, MARKED_AS_READ_UI_EVENT, this.onMarkedAsRead_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.callbackRouter.removeListener(id));
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
        this.unregisterHelpBubble(READING_LIST_UNREAD_ELEMENT_ID);
        this.readingListEventTracker_.remove(this.shadowRoot, MARKED_AS_READ_UI_EVENT);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('unreadItems_') ||
            changedPrivateProperties.has('readItems_')) {
            const listLength = this.getAllItems_().length;
            if (this.focusedIndex_ >= listLength) {
                this.focusedIndex_ = listLength - 1;
            }
            else if (this.focusedIndex_ === -1 && listLength > 0) {
                this.focusedIndex_ = 1;
            }
        }
    }
    firstUpdated() {
        this.registerHelpBubble(ADD_CURRENT_TAB_ELEMENT_ID, '#currentPageActionButton');
        const firstUnreadItem = this.shadowRoot.querySelector('.unread-item');
        if (firstUnreadItem) {
            this.registerHelpBubble(READING_LIST_UNREAD_ELEMENT_ID, firstUnreadItem);
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('focusedIndex_')) {
            this.updateFocusedItem_();
        }
    }
    getFocusedIndexForTesting() {
        return this.focusedIndex_;
    }
    setExpandedForTesting() {
        this.readExpanded_ = true;
        this.unreadExpanded_ = true;
    }
    onViewportFilled_() {
        this.updateFocusedItem_();
    }
    updateFocusedItem_() {
        this.focusedItem_ = this.focusedIndex_ === -1 ?
            null :
            this.querySelector(`cr-lazy-list > *:nth-child(${this.focusedIndex_ + 1})`);
    }
    getAllItems_() {
        const allItems = [];
        if (this.unreadItems_.length > 0) {
            allItems.push(this.createHeaderEntry_(this.unreadHeader_));
            if (this.unreadExpanded_) {
                allItems.push(...this.unreadItems_);
            }
        }
        if (this.readItems_.length > 0) {
            allItems.push(this.createHeaderEntry_(this.readHeader_));
            if (this.readExpanded_) {
                allItems.push(...this.readItems_);
            }
        }
        return allItems;
    }
    createHeaderEntry_(title) {
        return {
            title: title,
            url: '',
            displayUrl: '',
            updateTime: 0n,
            read: false,
            displayTimeSinceUpdate: '',
        };
    }
    getExpandButtonAriaLabel_(title) {
        let labelString;
        switch (title) {
            case this.unreadHeader_:
                labelString = this.unreadExpanded_ ? 'collapseButtonAriaLabel' :
                    'expandButtonAriaLabel';
                break;
            case this.readHeader_:
                labelString = this.readExpanded_ ? 'collapseButtonAriaLabel' :
                    'expandButtonAriaLabel';
                break;
            default:
                assertNotReached();
        }
        return loadTimeData.getStringF(labelString, title);
    }
    getExpandButtonIcon_(title) {
        switch (title) {
            case this.unreadHeader_:
                return this.unreadExpanded_ ? 'cr:keyboard-arrow-up' :
                    'cr:keyboard-arrow-down';
            case this.readHeader_:
                return this.readExpanded_ ? 'cr:keyboard-arrow-up' :
                    'cr:keyboard-arrow-down';
            default:
                assertNotReached();
        }
    }
    onExpandButtonClick_(e) {
        const title = e.target.dataset['title'];
        switch (title) {
            case this.unreadHeader_:
                this.unreadExpanded_ = !this.unreadExpanded_;
                break;
            case this.readHeader_:
                this.readExpanded_ = !this.readExpanded_;
                break;
            default:
                assertNotReached();
        }
    }
    /**
     * Fetches the latest reading list entries from the browser.
     */
    async updateReadLaterEntries_() {
        const getEntriesStartTimestamp = Date.now();
        const { entries } = await this.apiProxy_.handler.getReadLaterEntries();
        chrome.metricsPrivate.recordTime('ReadingList.WebUI.ReadingListDataReceived', Math.round(Date.now() - getEntriesStartTimestamp));
        // Push ShowUI() callback to the event queue to allow deferred rendering
        // to take place.
        setTimeout(() => this.apiProxy_.handler.showUI(), 0);
        this.updateReadingListItems_(entries);
    }
    updateReadingListItems_(entries) {
        this.unreadItems_ = entries.unreadEntries;
        this.readItems_ = entries.readEntries;
        this.loadingContent_ = false;
    }
    updateCurrentPageActionButton_(state) {
        this.currentPageActionButtonState_ = state;
    }
    ariaLabel_(item) {
        return `${item.title} - ${item.displayUrl} - ${item.displayTimeSinceUpdate}`;
    }
    /**
     * @return The appropriate text for the empty state subheader
     */
    getEmptyStateSubheaderText_() {
        return loadTimeData.getString('emptyStateAddFromDialogSubheader');
    }
    /**
     * @return The appropriate text for the current page action button
     */
    getCurrentPageActionButtonText_() {
        return loadTimeData.getString(this.getCurrentPageActionButtonMarkAsRead_() ? 'markCurrentTabAsRead' :
            'addCurrentTab');
    }
    /**
     * @return The appropriate cr icon for the current page action button
     */
    getCurrentPageActionButtonIcon_() {
        return this.getCurrentPageActionButtonMarkAsRead_() ?
            'cr:check' :
            (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'sp:add-circle' :
                'sp:add-circle-old');
    }
    /**
     * @return Whether the current page action button should be disabled
     */
    getCurrentPageActionButtonDisabled_() {
        return this.currentPageActionButtonState_ ===
            CurrentPageActionButtonState.kDisabled;
    }
    /**
     * @return Whether the current page action button should be in its mark as
     * read state
     */
    getCurrentPageActionButtonMarkAsRead_() {
        return this.currentPageActionButtonState_ ===
            CurrentPageActionButtonState.kMarkAsRead;
    }
    isReadingListEmpty_() {
        return this.unreadItems_.length === 0 && this.readItems_.length === 0;
    }
    onCurrentPageActionButtonClick_() {
        if (this.getCurrentPageActionButtonMarkAsRead_()) {
            this.apiProxy_.handler.markCurrentTabAsRead();
            this.sendTutorialCustomEvent();
        }
        else {
            this.apiProxy_.handler.addCurrentTab();
        }
    }
    onMarkedAsRead_() {
        this.sendTutorialCustomEvent();
    }
    sendTutorialCustomEvent() {
        this.notifyHelpBubbleAnchorCustomEvent(READING_LIST_UNREAD_ELEMENT_ID, MARKED_AS_READ_NATIVE_EVENT_ID);
    }
    async onItemKeydown_(e) {
        if (e.shiftKey || !navigationKeys.has(e.key)) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        // Skip focus traversal for the header of the first section.
        const indicesToSkip = [0];
        if (this.unreadItems_.length > 0 && this.readItems_.length > 0) {
            // If both sections are shown, skip the header of the second section too.
            if (this.unreadExpanded_) {
                indicesToSkip.push(this.unreadItems_.length + 1);
            }
            else {
                indicesToSkip.push(1);
            }
        }
        const listLength = this.getAllItems_().length;
        // Identify the new focused index.
        let newFocusedIndex = 0;
        if (e.key === 'ArrowUp') {
            newFocusedIndex = (this.focusedIndex_ + listLength - 1) % listLength;
            while (indicesToSkip.includes(newFocusedIndex)) {
                newFocusedIndex = (newFocusedIndex + listLength - 1) % listLength;
            }
        }
        else {
            newFocusedIndex = (this.focusedIndex_ + 1) % listLength;
            while (indicesToSkip.includes(newFocusedIndex)) {
                newFocusedIndex = (newFocusedIndex + 1) % listLength;
            }
        }
        this.focusedIndex_ = newFocusedIndex;
        const element = await this.$.readingListList.ensureItemRendered(this.focusedIndex_);
        element.focus();
    }
    onItemFocus_(e) {
        const renderedItems = this.querySelectorAll('cr-lazy-list > *');
        const focusedIdx = Array.from(renderedItems).findIndex(item => {
            return item === e.target || item.shadowRoot?.activeElement === e.target;
        });
        if (focusedIdx !== -1) {
            this.focusedIndex_ = focusedIdx;
        }
    }
    shouldShowHr_() {
        return this.unreadItems_.length > 0 && this.readItems_.length > 0;
    }
    shouldShowList_() {
        return this.unreadItems_.length > 0 || this.readItems_.length > 0;
    }
}
customElements.define(ReadingListAppElement.is, ReadingListAppElement);
