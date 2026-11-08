// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './searched_label.js';
import '/strings.m.js';
import { browserProxyFactory } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import { FocusRow } from 'chrome://resources/js/focus_row.js';
import { getFaviconForPageURL } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram } from './constants.js';
import { getCss } from './synced_device_card.css.js';
import { getHtml } from './synced_device_card.html.js';
export class HistorySyncedDeviceCardElement extends CrLitElement {
    static get is() {
        return 'history-synced-device-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The list of tabs open for this device.
             */
            tabs: { type: Array },
            // Name of the synced device.
            device: { type: String },
            // When the device information was last updated.
            lastUpdateTime: { type: String },
            // Whether the card is open.
            opened: {
                type: Boolean,
                notify: true,
            },
            searchTerm: { type: String },
            /**
             * The indexes where a window separator should be shown. The use of a
             * separate array here is necessary for window separators to appear
             * correctly in search. See http://crrev.com/2022003002 for more details.
             */
            separatorIndexes: { type: Array },
            // Internal identifier for the device.
            sessionTag: { type: String },
        };
    }
    #device_accessor_storage = '';
    get device() { return this.#device_accessor_storage; }
    set device(value) { this.#device_accessor_storage = value; }
    #lastUpdateTime_accessor_storage = '';
    get lastUpdateTime() { return this.#lastUpdateTime_accessor_storage; }
    set lastUpdateTime(value) { this.#lastUpdateTime_accessor_storage = value; }
    #tabs_accessor_storage = [];
    get tabs() { return this.#tabs_accessor_storage; }
    set tabs(value) { this.#tabs_accessor_storage = value; }
    #opened_accessor_storage = true;
    get opened() { return this.#opened_accessor_storage; }
    set opened(value) { this.#opened_accessor_storage = value; }
    #searchTerm_accessor_storage = '';
    get searchTerm() { return this.#searchTerm_accessor_storage; }
    set searchTerm(value) { this.#searchTerm_accessor_storage = value; }
    #separatorIndexes_accessor_storage = [];
    get separatorIndexes() { return this.#separatorIndexes_accessor_storage; }
    set separatorIndexes(value) { this.#separatorIndexes_accessor_storage = value; }
    #sessionTag_accessor_storage = '';
    get sessionTag() { return this.#sessionTag_accessor_storage; }
    set sessionTag(value) { this.#sessionTag_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('tabs')) {
            this.notifyFocusUpdate_();
            this.updateIcons_();
        }
    }
    /**
     * Create FocusRows for this card. One is always made for the card heading and
     * one for each result if the card is open.
     */
    createFocusRows() {
        const titleRow = new FocusRow(this.$.cardHeading, null);
        titleRow.addItem('menu', '#menuButton');
        titleRow.addItem('collapse', '#collapseButton');
        const rows = [titleRow];
        if (this.opened) {
            this.shadowRoot.querySelectorAll('.item-container')
                .forEach(function (el) {
                const row = new FocusRow(el, null);
                row.addItem('link', '.website-link');
                rows.push(row);
            });
        }
        return rows;
    }
    /** Open a single synced tab. */
    onLinkClick_(e) {
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.LINK_CLICKED, SyncedTabsHistogram.LIMIT);
        const modifiers = {
            middleButton: e.button === 1,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        };
        browserProxyFactory.getInstance().handler.openForeignSessionTab(this.sessionTag, Number(e.currentTarget.dataset['sessionId']), modifiers);
        e.preventDefault();
    }
    onLinkAuxclick_(e) {
        if (e.button === 1) {
            this.onLinkClick_(e);
        }
    }
    onCardHeadingClick_() {
        this.toggleTabCard();
    }
    /**
     * Toggles the dropdown display of synced tabs for each device card.
     */
    async toggleTabCard() {
        const histogramValue = this.opened ? SyncedTabsHistogram.COLLAPSE_SESSION :
            SyncedTabsHistogram.EXPAND_SESSION;
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, histogramValue, SyncedTabsHistogram.LIMIT);
        this.opened = !this.opened;
        await this.updateComplete; // Wait until focusable elements are updated.
        this.fire('update-focus-grid');
    }
    notifyFocusUpdate_() {
        // Refresh focus after all rows are rendered.
        this.fire('update-focus-grid');
    }
    /**
     * When the synced tab information is set, the icon associated with the tab
     * website is also set.
     */
    updateIcons_() {
        setTimeout(() => {
            const icons = this.shadowRoot.querySelectorAll('.website-icon');
            for (let i = 0; i < this.tabs.length; i++) {
                // Entries on this UI are coming strictly from sync, so we can set
                // |isSyncedUrlForHistoryUi| to true on the getFavicon call below.
                icons[i].style.backgroundImage = getFaviconForPageURL(this.tabs[i].url, true, this.tabs[i].remoteIconUrlForUma);
            }
        }, 0);
    }
    isWindowSeparatorIndex_(index) {
        return this.separatorIndexes.indexOf(index) !== -1;
    }
    getCollapseIcon_() {
        return this.opened ? 'cr:keyboard-arrow-up' : 'cr:keyboard-arrow-down';
    }
    getCollapseTitle_() {
        return this.opened ? loadTimeData.getString('collapseSessionButton') :
            loadTimeData.getString('expandSessionButton');
    }
    onMenuButtonClick_(e) {
        this.fire('synced-device-card-open-menu', {
            target: e.target,
            tag: this.sessionTag,
        });
        e.stopPropagation(); // Prevent cr-collapse.
    }
    onLinkContextmenu_() {
        BrowserProxyImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.LINK_RIGHT_CLICKED, SyncedTabsHistogram.LIMIT);
    }
    onOpenedChanged_(e) {
        this.opened = e.detail.value;
    }
}
customElements.define(HistorySyncedDeviceCardElement.is, HistorySyncedDeviceCardElement);
