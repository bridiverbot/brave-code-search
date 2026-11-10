// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '/strings.m.js';
import '/tab_group_shared/tab_group_dot.js';
import { MouseHoverableMixinLit } from 'chrome://resources/cr_elements/mouse_hoverable_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { normalizeURL, TabData, TabItemType } from './tab_data.js';
import { getCss } from './tab_search_item.css.js';
import { getHtml } from './tab_search_item.html.js';
import { getFaviconUrlForTab, getMediaAlertImageClass, highlightText, tabHasMediaAlerts } from './tab_search_utils.js';
function deepGet(obj, path) {
    let value = obj;
    const parts = path.split('.');
    for (const part of parts) {
        if (value[part] === undefined) {
            return undefined;
        }
        value = value[part];
    }
    return value;
}
export var TabSearchItemSize;
(function (TabSearchItemSize) {
    TabSearchItemSize["COMPACT"] = "compact";
    TabSearchItemSize["MEDIUM"] = "medium";
    TabSearchItemSize["LARGE"] = "large";
})(TabSearchItemSize || (TabSearchItemSize = {}));
const TabSearchItemBase = MouseHoverableMixinLit(CrLitElement);
export class TabSearchItemElement extends TabSearchItemBase {
    static get is() {
        return 'tab-search-item';
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
            hideTimestamp: { type: Boolean },
            hideUrl: { type: Boolean },
            hideCloseButton: { type: Boolean },
            closeButtonAriaLabel: { type: String },
            closeButtonTooltip: { type: String },
            closeButtonIcon: { type: String },
            size: { type: String, reflect: true },
        };
    }
    #data_accessor_storage = new TabData({
        active: false,
        visible: false,
        faviconUrl: null,
        groupId: null,
        alertStates: [],
        isDefaultFavicon: false,
        lastActiveElapsedText: '',
        lastActiveTimeTicks: { internalValue: BigInt(0) },
        pinned: false,
        split: false,
        splitId: null,
        splitLayout: null,
        showIcon: false,
        tabId: 1,
        title: '',
        url: '',
    }, TabItemType.OPEN_TAB, '');
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #buttonRipples__accessor_storage = loadTimeData.getBoolean('useRipples');
    get buttonRipples_() { return this.#buttonRipples__accessor_storage; }
    set buttonRipples_(value) { this.#buttonRipples__accessor_storage = value; }
    #hideTimestamp_accessor_storage = false;
    get hideTimestamp() { return this.#hideTimestamp_accessor_storage; }
    set hideTimestamp(value) { this.#hideTimestamp_accessor_storage = value; }
    #size_accessor_storage = TabSearchItemSize.MEDIUM;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    #hideUrl_accessor_storage = false;
    get hideUrl() { return this.#hideUrl_accessor_storage; }
    set hideUrl(value) { this.#hideUrl_accessor_storage = value; }
    #hideCloseButton_accessor_storage = false;
    get hideCloseButton() { return this.#hideCloseButton_accessor_storage; }
    set hideCloseButton(value) { this.#hideCloseButton_accessor_storage = value; }
    #closeButtonIcon_accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
        'tab-search:close' :
        'tab-search:close-old';
    get closeButtonIcon() { return this.#closeButtonIcon_accessor_storage; }
    set closeButtonIcon(value) { this.#closeButtonIcon_accessor_storage = value; }
    #closeButtonAriaLabel_accessor_storage = '';
    get closeButtonAriaLabel() { return this.#closeButtonAriaLabel_accessor_storage; }
    set closeButtonAriaLabel(value) { this.#closeButtonAriaLabel_accessor_storage = value; }
    #closeButtonTooltip_accessor_storage = '';
    get closeButtonTooltip() { return this.#closeButtonTooltip_accessor_storage; }
    set closeButtonTooltip(value) { this.#closeButtonTooltip_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data') && changedProperties.has('size')) {
            assert(Object.values(TabSearchItemSize).includes(this.size));
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('data')) {
            this.dataChanged_();
        }
    }
    /**
     * @return Whether a close action can be performed on the item.
     */
    isCloseable_() {
        return !this.hideCloseButton && this.data.type === TabItemType.OPEN_TAB;
    }
    /**
     * @return the class name for the close button including a second class to
     *     preallocate space for the close button even while hidden if the tab
     *     will display a media alert.
     */
    getButtonContainerStyles_() {
        return 'button-container' +
            (this.isOpenTabAndHasMediaAlert_() ? ' allocate-space-while-hidden' :
                '');
    }
    getCloseButtonRole_() {
        // If this tab search item is an option within a list, the button
        // should also be treated as an option in a list to ensure the correct
        // focus traversal behavior when a screenreader is on.
        return this.role === 'option' ? 'option' : 'button';
    }
    onCloseButtonClick_(e) {
        this.dispatchEvent(new CustomEvent('close'));
        e.stopPropagation();
    }
    onCloseButtonFocus_() {
        // Manual tooltip control for keyboard focus.
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.show();
    }
    onCloseButtonBlur_() {
        const tooltip = this.shadowRoot.querySelector('cr-tooltip');
        assert(tooltip);
        tooltip.hide();
    }
    faviconUrl_() {
        return getFaviconUrlForTab(this.data.tab.url, this.data.tab);
    }
    isOpenTabAndHasMediaAlert_() {
        const tabData = this.data;
        return tabData.type === TabItemType.OPEN_TAB &&
            tabHasMediaAlerts(tabData.tab);
    }
    /**
     * Determines the display attribute value for the media indicator.
     */
    mediaAlertVisibility_() {
        return this.isOpenTabAndHasMediaAlert_() ? 'block' : 'none';
    }
    /**
     * Returns the correct media alert indicator class name.
     */
    getMediaAlertImageClass_() {
        return this.isOpenTabAndHasMediaAlert_() ?
            getMediaAlertImageClass(this.data.tab) :
            '';
    }
    dataChanged_() {
        const data = this.data;
        [
            ['tab.title', this.$.primaryText],
            ['hostname', this.$.secondaryTextInner],
            ['tabGroup.title', this.shadowRoot.querySelector('#groupTitle')],
        ]
            .forEach(([path, element]) => {
            if (element) {
                const highlightRanges = data.highlightRanges ? data.highlightRanges[path] : undefined;
                highlightText(element, deepGet(data, path), highlightRanges);
            }
        });
        // Show chrome:// if it's a chrome internal url
        const protocol = new URL(normalizeURL(data.tab.url)).protocol;
        if (protocol === 'chrome:') {
            this.$.secondaryTextInner.prepend(document.createTextNode('brave://'));
        }
    }
    ariaLabelForButton_() {
        if (this.closeButtonAriaLabel) {
            return this.closeButtonAriaLabel;
        }
        return `${loadTimeData.getString('closeTab')} ${this.data.tab.title}`;
    }
    tooltipForButton_() {
        if (this.closeButtonTooltip) {
            return this.closeButtonTooltip;
        }
        return loadTimeData.getString('closeTab');
    }
}
customElements.define(TabSearchItemElement.is, TabSearchItemElement);
