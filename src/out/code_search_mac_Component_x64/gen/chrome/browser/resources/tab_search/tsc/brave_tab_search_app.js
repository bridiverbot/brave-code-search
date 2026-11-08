// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import './tab_focus/tab_focus_page.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TabSearchApiProxyImpl } from './tab_search_api_proxy.js';
import { getHtml } from './brave_tab_search_app.html.js';
import { getCss } from './brave_tab_search_app.css.js';
// Brave wrapper component that adds tab routing between the tab search page
// and the Leo AI tab organization page.
export class BraveTabSearchAppElement extends CrLitElement {
    static get is() {
        return 'brave-tab-search-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            availableHeight: { type: Number },
            tabOrganizationEnabled_: { type: Boolean },
            selectedTabIndex_: { type: Number },
        };
    }
    #availableHeight_accessor_storage = 0;
    get availableHeight() { return this.#availableHeight_accessor_storage; }
    set availableHeight(value) { this.#availableHeight_accessor_storage = value; }
    #tabOrganizationEnabled__accessor_storage = loadTimeData.getBoolean('tabOrganizationEnabled');
    get tabOrganizationEnabled_() { return this.#tabOrganizationEnabled__accessor_storage; }
    set tabOrganizationEnabled_(value) { this.#tabOrganizationEnabled__accessor_storage = value; }
    #selectedTabIndex__accessor_storage = 0;
    get selectedTabIndex_() { return this.#selectedTabIndex__accessor_storage; }
    set selectedTabIndex_(value) { this.#selectedTabIndex__accessor_storage = value; }
    listenerIds_ = [];
    visibilityChangedListener_ = () => {
        if (document.visibilityState === 'visible') {
            // Signal readiness so the bubble becomes visible when re-opened.
            TabSearchApiProxyImpl.getInstance().maybeShowUi();
        }
    };
    tabNames_() {
        return [
            loadTimeData.getString('tabSearchTabName'),
            loadTimeData.getString('tabOrganizationTabName'),
        ];
    }
    onTabSelectedChanged_(e) {
        this.selectedTabIndex_ = e.detail.value;
    }
    connectedCallback() {
        super.connectedCallback();
        const apiProxy = TabSearchApiProxyImpl.getInstance();
        const callbackRouter = apiProxy.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabFocusEnabledChanged.addListener((enabled) => {
            this.tabOrganizationEnabled_ = enabled;
        }));
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const callbackRouter = TabSearchApiProxyImpl.getInstance().getCallbackRouter();
        this.listenerIds_.forEach((id) => callbackRouter.removeListener(id));
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
    }
}
customElements.define(BraveTabSearchAppElement.is, BraveTabSearchAppElement);
