// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '/tab_group_shared/tab_group_dot.js';
import { MouseHoverableMixinLit } from 'chrome://resources/cr_elements/mouse_hoverable_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getDisplayHostnameForUrl, normalizeURL, SplitViewData, TabItemType } from './tab_data.js';
import { SplitTabLayout } from './tab_search.mojom-webui.js';
import { getCss } from './tab_search_split_item.css.js';
import { getHtml } from './tab_search_split_item.html.js';
import { getFaviconUrlForTab, getMediaAlertImageClass, tabHasMediaAlerts } from './tab_search_utils.js';
const TabSearchSplitItemBase = MouseHoverableMixinLit(CrLitElement);
export class TabSearchSplitItemElement extends TabSearchSplitItemBase {
    static get is() {
        return 'tab-search-split-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            data: { type: Object },
            buttonRipples_: { type: Boolean },
            closeButtonIcon: { type: String },
        };
    }
    #data_accessor_storage = new SplitViewData({
        splitView: {
            sessionId: -1,
            id: { high: 0n, low: 0n },
            tabCount: 0,
            lastActiveTime: { internalValue: 0n },
            lastActiveElapsedText: '',
            tabUrls: [],
            tabTitles: [],
            layout: SplitTabLayout.kSideBySide,
            groupId: null,
        },
    });
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #buttonRipples__accessor_storage = loadTimeData.getBoolean('useRipples');
    get buttonRipples_() { return this.#buttonRipples__accessor_storage; }
    set buttonRipples_(value) { this.#buttonRipples__accessor_storage = value; }
    #closeButtonIcon_accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
        'tab-search:close' :
        'tab-search:close-old';
    get closeButtonIcon() { return this.#closeButtonIcon_accessor_storage; }
    set closeButtonIcon(value) { this.#closeButtonIcon_accessor_storage = value; }
    getFaviconUrl_(url, index) {
        const tab = this.data.tabs ? this.data.tabs[index] : null;
        return getFaviconUrlForTab(url, tab);
    }
    get domainTexts_() {
        return this.data.tabUrls.map(url => this.getDomainTextForUrl_(url));
    }
    getDomainTextForUrl_(url) {
        try {
            return getDisplayHostnameForUrl(new URL(normalizeURL(url)));
        }
        catch (e) {
            return 'about:blank';
        }
    }
    isCloseable_() {
        return this.data.type === TabItemType.OPEN_SPLIT;
    }
    tooltipForButton_() {
        return loadTimeData.getString('closeTab');
    }
    onCloseButtonClick_(e) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('close'));
    }
    onCloseButtonFocus_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.show();
    }
    onCloseButtonBlur_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.hide();
    }
    hasMediaAlertForTab_(tab) {
        return tabHasMediaAlerts(tab);
    }
    getMediaAlertImageClassForTab_(tab) {
        return getMediaAlertImageClass(tab);
    }
}
customElements.define(TabSearchSplitItemElement.is, TabSearchSplitItemElement);
