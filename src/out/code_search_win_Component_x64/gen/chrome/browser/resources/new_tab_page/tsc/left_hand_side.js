// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/composebox/threads_rail.js';
import { COLOR_PROVIDER_CHANGED, ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from './i18n_setup.js';
import { IframeElement } from './iframe.js';
import { getCss } from './left_hand_side.css.js';
import { getHtml } from './left_hand_side.html.js';
import { strictQuery } from './utils.js';
import { WindowProxy } from './window_proxy.js';
const DEFAULT_EXPANDED_LHS_WIDTH_PX = 261;
const NTP_LHS_THEME_CSS_VARS = {
    'primaryFont': 'primary-font',
    'railBackground': 'background',
};
export var NtpLhsMessageType;
(function (NtpLhsMessageType) {
    NtpLhsMessageType["NTP_LHS_READY"] = "NTP_LHS_READY";
    NtpLhsMessageType["NTP_LHS_CLOSE"] = "NTP_LHS_CLOSE";
    NtpLhsMessageType["NTP_LHS_NEW_THREAD"] = "NTP_LHS_NEW_THREAD";
    NtpLhsMessageType["NTP_LHS_NAVIGATE"] = "NTP_LHS_NAVIGATE";
    NtpLhsMessageType["NTP_LHS_SET_THEME"] = "NTP_LHS_SET_THEME";
})(NtpLhsMessageType || (NtpLhsMessageType = {}));
export class LeftHandSideElement extends CrLitElement {
    static get is() {
        return 'cr-left-hand-side';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            enableThreadsRailHybrid_: { type: Boolean },
            expandedLhsUrl_: { type: String },
            expandedWidth_: { type: Number },
            isDark: {
                type: Boolean,
                reflect: true,
            },
            isExpanded_: { type: Boolean },
            isExpandedReady_: { type: Boolean },
        };
    }
    #isDark_accessor_storage = undefined;
    get isDark() { return this.#isDark_accessor_storage; }
    set isDark(value) { this.#isDark_accessor_storage = value; }
    #enableThreadsRailHybrid__accessor_storage = loadTimeData.getBoolean('enableThreadsRailHybrid');
    get enableThreadsRailHybrid_() { return this.#enableThreadsRailHybrid__accessor_storage; }
    set enableThreadsRailHybrid_(value) { this.#enableThreadsRailHybrid__accessor_storage = value; }
    #expandedLhsUrl__accessor_storage = loadTimeData.getString('expandedLhsUrl');
    get expandedLhsUrl_() { return this.#expandedLhsUrl__accessor_storage; }
    set expandedLhsUrl_(value) { this.#expandedLhsUrl__accessor_storage = value; }
    #expandedWidth__accessor_storage = DEFAULT_EXPANDED_LHS_WIDTH_PX;
    get expandedWidth_() { return this.#expandedWidth__accessor_storage; }
    set expandedWidth_(value) { this.#expandedWidth__accessor_storage = value; }
    #isExpanded__accessor_storage = false;
    get isExpanded_() { return this.#isExpanded__accessor_storage; }
    set isExpanded_(value) { this.#isExpanded__accessor_storage = value; }
    #isExpandedReady__accessor_storage = false;
    get isExpandedReady_() { return this.#isExpandedReady__accessor_storage; }
    set isExpandedReady_(value) { this.#isExpandedReady__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        if (!this.expandedLhsUrl_) {
            return;
        }
        this.eventTracker_.add(window, 'message', this.onMessage_);
        this.eventTracker_.add(ColorChangeUpdater.forDocument().eventTarget, COLOR_PROVIDER_CHANGED, this.postThemeColors_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    onFoldedClick_() {
        this.isExpanded_ = true;
    }
    onExpandRail_() {
        this.isExpanded_ = true;
    }
    onMessage_ = (event) => {
        const expectedOrigin = new URL(this.expandedLhsUrl_).origin;
        if (event.origin !== expectedOrigin) {
            return;
        }
        const expanded = this.shadowRoot.querySelector('#expanded');
        const iframe = expanded?.shadowRoot?.querySelector('iframe');
        if (!expanded || !iframe || event.source !== iframe.contentWindow) {
            return;
        }
        const data = event.data;
        if (typeof data !== 'object' || !data) {
            return;
        }
        switch (data.type) {
            case NtpLhsMessageType.NTP_LHS_READY: {
                this.postThemeColors_();
                this.expandedWidth_ = typeof data.width === 'number' && data.width > 0 ?
                    data.width :
                    DEFAULT_EXPANDED_LHS_WIDTH_PX;
                this.isExpandedReady_ = true;
                break;
            }
            case NtpLhsMessageType.NTP_LHS_CLOSE: {
                this.isExpanded_ = false;
                break;
            }
            case NtpLhsMessageType.NTP_LHS_NEW_THREAD: {
                this.fire('open-composebox');
                break;
            }
            case NtpLhsMessageType.NTP_LHS_NAVIGATE: {
                let url;
                try {
                    url = new URL(data.url);
                }
                catch {
                    return;
                }
                if (url.protocol !== 'http:' && url.protocol !== 'https:') {
                    return;
                }
                WindowProxy.getInstance().navigate(data.url);
                break;
            }
            default:
                break;
        }
    };
    postThemeColors_ = () => {
        const computedStyle = getComputedStyle(this);
        const theme = {};
        for (const [key, cssVarSuffix] of Object.entries(NTP_LHS_THEME_CSS_VARS)) {
            theme[key] = computedStyle
                .getPropertyValue(`--color-new-tab-page-threads-rail-${cssVarSuffix}`)
                .trim();
        }
        const message = {
            type: NtpLhsMessageType.NTP_LHS_SET_THEME,
            theme,
            isDark: this.isDark,
        };
        strictQuery(this.shadowRoot, '#expanded', IframeElement)
            .postMessage(message);
    };
}
customElements.define(LeftHandSideElement.is, LeftHandSideElement);
