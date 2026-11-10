// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import './searched_label.js';
import './shared_icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import { HistoryResultType } from 'chrome://resources/cr_components/history/constants.js';
import { CriticalActionType } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { FocusRowMixinLit } from 'chrome://resources/cr_elements/focus_row_mixin_lit.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './history_item.css.js';
import { getHtml } from './history_item.html.js';
const HistoryItemElementBase = FocusRowMixinLit(CrLitElement);
export class HistoryItemElement extends HistoryItemElementBase {
    static get is() {
        return 'history-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Underlying HistoryEntry data for this.item. Contains read-only fields
            // from the history backend, as well as fields computed by history-list.
            item: { type: Object },
            selected: {
                type: Boolean,
                reflect: true,
            },
            isCardStart: {
                type: Boolean,
                reflect: true,
            },
            isCardEnd: {
                type: Boolean,
                reflect: true,
            },
            selectionNotAllowed_: { type: Boolean },
            hasTimeGap: { type: Boolean },
            index: { type: Number },
            numberOfItems: { type: Number },
            // Search term used to obtain this history-item.
            searchTerm: { type: String },
            isExpanded_: {
                type: Boolean,
                reflect: true,
            },
            isCriticalActionsEnabled_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    isShiftKeyDown_ = false;
    #selectionNotAllowed__accessor_storage = !loadTimeData.getBoolean('allowDeletingHistory');
    get selectionNotAllowed_() { return this.#selectionNotAllowed__accessor_storage; }
    set selectionNotAllowed_(value) { this.#selectionNotAllowed__accessor_storage = value; }
    #isCriticalActionsEnabled__accessor_storage = loadTimeData.getBoolean('isCriticalActionsEnabled');
    get isCriticalActionsEnabled_() { return this.#isCriticalActionsEnabled__accessor_storage; }
    set isCriticalActionsEnabled_(value) { this.#isCriticalActionsEnabled__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    #item_accessor_storage;
    get item() { return this.#item_accessor_storage; }
    set item(value) { this.#item_accessor_storage = value; }
    #hasTimeGap_accessor_storage = false;
    get hasTimeGap() { return this.#hasTimeGap_accessor_storage; }
    set hasTimeGap(value) { this.#hasTimeGap_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #isCardStart_accessor_storage = false;
    get isCardStart() { return this.#isCardStart_accessor_storage; }
    set isCardStart(value) { this.#isCardStart_accessor_storage = value; }
    #isCardEnd_accessor_storage = false;
    get isCardEnd() { return this.#isCardEnd_accessor_storage; }
    set isCardEnd(value) { this.#isCardEnd_accessor_storage = value; }
    #numberOfItems_accessor_storage = 0;
    get numberOfItems() { return this.#numberOfItems_accessor_storage; }
    set numberOfItems(value) { this.#numberOfItems_accessor_storage = value; }
    #selected_accessor_storage = false;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #isExpanded__accessor_storage = false;
    get isExpanded_() { return this.#isExpanded__accessor_storage; }
    set isExpanded_(value) { this.#isExpanded__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => {
            // Adding listeners asynchronously to reduce blocking time, since these
            // history items are items in a potentially long list.
            this.eventTracker_.add(this.$.checkbox, 'keydown', (e) => this.onCheckboxKeydown_(e));
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.remove(this.$.checkbox, 'keydown');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('item')) {
            this.isExpanded_ = false;
            this.itemChanged_();
            this.fire('iron-resize');
        }
    }
    focusOnMenuButton() {
        focusWithoutInk(this.$.menuButton);
    }
    onCheckboxKeydown_(e) {
        if (e.shiftKey && e.key === 'Tab') {
            this.focus();
        }
    }
    /**
     * Toggle item selection whenever the checkbox or any non-interactive part
     * of the item is clicked.
     */
    onRowClick_(e) {
        const path = e.composedPath();
        // VoiceOver has issues with click events within elements that have a role
        // of row, so this event listeners has to be on the row itself.
        // (See crbug.com/40753378.)
        let inItemContainer = false;
        for (let i = 0; i < path.length; i++) {
            const elem = path[i];
            if (elem.id !== 'checkbox' &&
                (elem.nodeName === 'A' || elem.nodeName === 'CR-ICON-BUTTON' ||
                    elem.id === 'collapse')) {
                return;
            }
            if (!inItemContainer && elem.id === 'item-container') {
                inItemContainer = true;
            }
        }
        if (this.selectionNotAllowed_ || !inItemContainer) {
            return;
        }
        this.$.checkbox.focus();
        this.fire('history-checkbox-select', {
            index: this.index,
            shiftKey: e.shiftKey,
        });
    }
    onCollapseClick_(e) {
        e.stopPropagation();
    }
    /**
     * This is bound to mouse/keydown instead of click/press because this
     * has to fire before onCheckboxChange_. If we bind it to click/press,
     * it might trigger out of desired order.
     */
    onCheckboxMousedown_(e) {
        this.isShiftKeyDown_ = e.shiftKey;
    }
    onCheckboxSelectKeydown_(e) {
        this.isShiftKeyDown_ = e.shiftKey;
    }
    onCheckboxChange_() {
        this.fire('history-checkbox-select', {
            index: this.index,
            // If the user clicks or press enter/space key, oncheckboxClick_ will
            // trigger before this function, so a shift-key might be recorded.
            shiftKey: this.isShiftKeyDown_,
        });
        this.isShiftKeyDown_ = false;
    }
    onRowMousedown_(e) {
        // Prevent shift clicking a checkbox from selecting text.
        if (e.shiftKey) {
            e.preventDefault();
        }
    }
    getEntrySummary_() {
        const item = this.item;
        if (!item) {
            return '';
        }
        return loadTimeData.getStringF('entrySummary', this.isCardStart || this.isCardEnd ? this.cardTitle_() : '', item.dateTimeOfDay, item.starred ? loadTimeData.getString('bookmarked') : '', item.title, item.domain);
    }
    /**
     * The first and last rows of a card have a described-by field pointing to
     * the date header, to make sure users know if they have jumped between cards
     * when navigating up or down with the keyboard.
     */
    getAriaDescribedByForHeading_() {
        return this.isCardStart || this.isCardEnd ? 'date-accessed' : '';
    }
    /**
     * Actions menu and critical actions expand button are described by the title
     * and domain of the row and may include the date to make sure users know if
     * they have jumped between dates.
     */
    getAriaDescribedByForActions_() {
        return this.isCardStart || this.isCardEnd ?
            'title-and-domain date-accessed' :
            'title-and-domain';
    }
    shouldShowActorTooltip_() {
        if (this.isCriticalActionsEnabled_) {
            return false;
        }
        return !!this.item?.isActorVisit;
    }
    shouldShowActorIconNextToFavicon_() {
        if (!this.isCriticalActionsEnabled_) {
            return false;
        }
        return !!this.item?.isActorVisit;
    }
    isExpandable_() {
        return this.isCriticalActionsEnabled_ &&
            (this.item?.criticalActions?.length ?? 0) > 0;
    }
    getExpandIcon_() {
        return this.isExpanded_ ? 'cr:keyboard-arrow-up' : 'cr:keyboard-arrow-down';
    }
    onExpandClick_(e) {
        e.stopPropagation();
        this.isExpanded_ = !this.isExpanded_;
        BrowserProxyImpl.getInstance().recordAction(this.isExpanded_ ? 'HistoryPage_CriticalActionsExpanded' :
            'HistoryPage_CriticalActionsCollapsed');
        this.fire('iron-resize');
    }
    getCriticalActions_() {
        return this.item?.criticalActions || [];
    }
    hasLinkout_(action) {
        return !!action.linkoutUrl;
    }
    getCriticalActionAriaLabel_(action) {
        return loadTimeData.getStringF('criticalActionLinkoutA11yLabel', action.tooltip);
    }
    onCriticalActionClick_(e) {
        e.stopPropagation();
        const index = Number(e.currentTarget.dataset['index']);
        const action = this.getCriticalActions_()[index];
        if (action?.linkoutUrl) {
            if (action.actionType !== undefined) {
                BrowserProxyImpl.getInstance().recordHistogram('HistoryPage.CriticalAction.Click', action.actionType, CriticalActionType.MAX_VALUE + 1);
            }
            window.open(action.linkoutUrl, '_blank', 'noopener,noreferrer');
        }
    }
    onCriticalActionKeydown_(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.onCriticalActionClick_(e);
        }
    }
    /**
     * Remove bookmark of current item when bookmark-star is clicked.
     */
    onRemoveBookmarkClick_() {
        if (!this.item?.starred) {
            return;
        }
        if (this.shadowRoot.querySelector('#bookmark-star') ===
            this.shadowRoot.activeElement) {
            focusWithoutInk(this.$.menuButton);
        }
        const browserProxy = BrowserProxyImpl.getInstance();
        browserProxy.handler.removeBookmark(this.item.url);
        browserProxy.recordAction('BookmarkStarClicked');
        this.fire('remove-bookmark-stars', this.item.url);
    }
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the history item and where the menu should appear.
     */
    onMenuButtonClick_(e) {
        this.fire('open-menu', {
            target: e.target,
            index: this.index,
            item: this.item,
        });
        // Stops the 'click' event from closing the menu when it opens.
        e.stopPropagation();
    }
    onMenuButtonKeydown_(e) {
        if (this.item?.starred && e.shiftKey && e.key === 'Tab') {
            // If this item has a bookmark star, pressing shift + Tab from the more
            // actions menu should move focus to the star. FocusRow will try to
            // instead move focus to the previous focus row control, and since the
            // star is not a focus row control, stop immediate propagation here to
            // instead allow default browser behavior.
            e.stopImmediatePropagation();
        }
    }
    /**
     * Record metrics when a result is clicked.
     */
    onLinkClick_() {
        const browserProxy = BrowserProxyImpl.getInstance();
        browserProxy.recordAction('EntryLinkClick');
        if (this.searchTerm) {
            browserProxy.recordAction('SearchResultClick');
        }
        this.fire('record-history-link-click', {
            resultType: HistoryResultType.TRADITIONAL,
            index: this.index,
        });
    }
    onLinkAuxclick_() {
        this.onLinkClick_();
    }
    onLinkContextmenu_() {
        BrowserProxyImpl.getInstance().recordAction('EntryLinkRightClick');
    }
    /**
     * Set the favicon image, based on the URL of the history item.
     */
    itemChanged_() {
        if (!this.item) {
            return;
        }
        this.$.icon.style.backgroundImage = getFaviconForPageURL(this.item.url, this.item.isUrlInRemoteUserData, this.item.remoteIconUrlForUma);
        this.eventTracker_.add(this.$.timeAccessed, 'mouseover', () => this.addTimeTitle_());
    }
    cardTitle_() {
        if (this.item === undefined) {
            return '';
        }
        if (!this.searchTerm) {
            return this.item.dateRelativeDay;
        }
        return searchResultsTitle(this.numberOfItems, this.searchTerm);
    }
    addTimeTitle_() {
        if (!this.item) {
            return;
        }
        const el = this.$.timeAccessed;
        el.setAttribute('title', new Date(this.item.time).toString());
        this.eventTracker_.remove(el, 'mouseover');
    }
    actorIconClass_() {
        // 
        // 
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'history20:arrow-selector-tool' :
            'history20:arrow-selector-tool-old';
        // 
    }
}
customElements.define(HistoryItemElement.is, HistoryItemElement);
/**
 * @return The title for a page of search results.
 */
export function searchResultsTitle(numberOfResults, searchTerm) {
    const resultId = numberOfResults === 1 ? 'searchResult' : 'searchResults';
    return loadTimeData.getStringF('foundSearchResults', numberOfResults, loadTimeData.getString(resultId), searchTerm);
}
