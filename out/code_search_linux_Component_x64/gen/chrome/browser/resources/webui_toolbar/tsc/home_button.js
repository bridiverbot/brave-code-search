// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getContextMenuPosition, getEventDispositionFlags, HelpBubbleAnchorMixin, PressHandler, roundedIconsEnabled } from '/shared/toolbar_button.js';
import { ContextMenuType } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getHtml } from './home_button.html.js';
import { OverflowableButtonMixin } from './overflowable_button.js';
import { getCss } from './toolbar_button.css.js';
const HomeButtonElementBase = HelpBubbleAnchorMixin(OverflowableButtonMixin(CrLitElement));
export class HomeButtonElement extends HomeButtonElementBase {
    static get is() {
        return 'home-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            state: { type: Object },
            touchUi: { type: Boolean },
        };
    }
    #state_accessor_storage = {
        // These fields are from OverflowableButtonState (in addition to
        // HomeControlState), and are used by OverflowableButtonMixin.
        shouldBeShown: false,
        isContextMenuVisible: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #touchUi_accessor_storage = false;
    get touchUi() { return this.#touchUi_accessor_storage; }
    set touchUi(value) { this.#touchUi_accessor_storage = value; }
    pressHandler_ = new PressHandler(this.onLongPress_.bind(this), this.onShortPress_.bind(this));
    getLabel_() {
        return loadTimeData.getString('homeButtonAccName');
    }
    getTooltip_() {
        return this.adjustTooltipForHelpBubble(loadTimeData.getString('homeButtonTooltip'));
    }
    browserProxy_ = BrowserProxyImpl.getInstance();
    onLongPress_(source) {
        this.browserProxy_.toolbarUIHandler.showContextMenu(ContextMenuType.kHome, getContextMenuPosition(this), source, 
        /*showMenuToken=*/ null);
    }
    onShortPress_(e) {
        TrackedElementManager.getInstance().notifyElementActivated(this);
        const flags = getEventDispositionFlags(e);
        this.browserProxy_.browserControlsHandler.navigateHome(flags);
    }
    onClick_(e) {
        // Only keyboard `click` (Enter/Space) are handled here, which triggers a
        // left-click equivalent. Keyboard 'click' has detail === 0.
        if (e.detail === 0) {
            this.onShortPress_(e);
        }
    }
    onDragEnter_(e) {
        if (e.dataTransfer && e.dataTransfer.types.includes('Files')) {
            e.preventDefault();
        }
    }
    onDragOver_(e) {
        if (e.dataTransfer &&
            (e.dataTransfer.types.includes('text/uri-list') ||
                e.dataTransfer.types.includes('text/plain') ||
                e.dataTransfer.types.includes('Files'))) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }
    }
    onDrop_(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!e.dataTransfer) {
            return;
        }
        if (e.dataTransfer.types.includes('Files')) {
            this.browserProxy_.toolbarUIHandler.onHomeButtonDropFile({ x: e.clientX, y: e.clientY });
        }
        else if (e.dataTransfer.types.includes('text/uri-list')) {
            // A type can be present with empty data, e.g. setData(type, '').
            const url = e.dataTransfer.getData('text/uri-list').split('\n')[0];
            if (url) {
                this.browserProxy_.toolbarUIHandler.onHomeButtonDropUrl(url);
            }
        }
        else if (e.dataTransfer.types.includes('text/plain')) {
            // Dropped text never sets the home page. The browser applies home
            // button specific platform policy, and may then search for it or
            // navigate to it.
            const text = e.dataTransfer.getData('text/plain');
            if (text) {
                this.browserProxy_.toolbarUIHandler.onHomeButtonDropText(text);
            }
        }
    }
    getIronIcon_() {
        if (roundedIconsEnabled()) {
            return 'webui-toolbar:home';
        }
        else {
            return this.touchUi ? 'webui-toolbar:navigate_home_touch_old' :
                'webui-toolbar:navigate_home_chrome_refresh_old';
        }
    }
}
customElements.define(HomeButtonElement.is, HomeButtonElement);
