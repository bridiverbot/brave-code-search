// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './bookmarks/bookmarks.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from './browser.mojom-webui.js';
import { getCss } from './side_panel.css.js';
import { getHtml } from './side_panel.html.js';
import { WebviewElement } from './webview.js';
export class SidePanelElement extends CrLitElement {
    static get is() {
        return 'side-panel';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showing_: { state: true, type: Boolean },
            title_: { state: true, type: String },
            webView: { state: true, type: Object },
            // TODO(crbug.com/501483829): we should be passing in the content type
            // from the outer element and not rely on this types of booleans to change
            // the content.
            showBookmarks_: { state: true, type: Boolean },
        };
    }
    #webView_accessor_storage = null;
    get webView() { return this.#webView_accessor_storage; }
    set webView(value) { this.#webView_accessor_storage = value; }
    #title__accessor_storage = '';
    get title_() { return this.#title__accessor_storage; }
    set title_(value) { this.#title__accessor_storage = value; }
    #showing__accessor_storage = false;
    get showing_() { return this.#showing__accessor_storage; }
    set showing_(value) { this.#showing__accessor_storage = value; }
    #showBookmarks__accessor_storage = false;
    get showBookmarks_() { return this.#showBookmarks__accessor_storage; }
    set showBookmarks_(value) { this.#showBookmarks__accessor_storage = value; }
    show(guestContentsId, title) {
        this.webView = new WebviewElement();
        this.webView.guestId = guestContentsId;
        this.showBookmarks_ = false;
        this.title_ = title;
        this.showing_ = true;
    }
    showBookmarks() {
        this.showBookmarks_ = true;
    }
    isShowingBookmarks() {
        return this.showBookmarks_;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivatedProperties = changedProperties;
        if (changedPrivatedProperties.has('showBookmarks_')) {
            if (this.showBookmarks_) {
                this.showing_ = true;
            }
        }
    }
    onCloseClick_(_e) {
        this.close();
    }
    async close() {
        this.showing_ = false;
        this.webView = null;
        this.showBookmarks_ = false;
        await this.updateComplete;
        this.dispatchEvent(new Event('side-panel-closed', { bubbles: true }));
        browserProxyFactory.getInstance().handler.onSidePanelClosed();
    }
    hide() {
        this.showing_ = false;
    }
}
customElements.define(SidePanelElement.is, SidePanelElement);
