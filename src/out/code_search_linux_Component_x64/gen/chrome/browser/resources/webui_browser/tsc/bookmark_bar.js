// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './bookmark.js';
import './icons.html.js';
import { getCss as getCrHiddenStyleCss } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './bookmark_bar.html.js';
import { BookmarkType, browserProxyFactory } from './bookmark_bar.mojom-webui.js';
export class BookmarkBarElement extends CrLitElement {
    static get is() {
        return 'webui-browser-bookmark-bar';
    }
    static get styles() {
        return getCrHiddenStyleCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            bookmarks_: { type: Array },
        };
    }
    #bookmarks__accessor_storage = [];
    get bookmarks_() { return this.#bookmarks__accessor_storage; }
    set bookmarks_(value) { this.#bookmarks__accessor_storage = value; }
    listenerIds_ = [];
    browserProxy_ = browserProxyFactory.getInstance();
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = this.browserProxy_.callbackRouter;
        this.listenerIds_ = [
            callbackRouter.show.addListener(this.show_.bind(this)),
            callbackRouter.hide.addListener(this.hide_.bind(this)),
            callbackRouter.bookmarkLoaded.addListener(this.loadBookmarkModel_.bind(this)),
            callbackRouter.favIconChanged.addListener(this.updateFavIcon_.bind(this)),
        ];
        this.loadBookmarkModel_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => {
            assert(this.browserProxy_.callbackRouter.removeListener(id));
        });
        this.listenerIds_ = [];
    }
    async loadBookmarkModel_() {
        this.bookmarks_ =
            (await this.browserProxy_.handler.getBookmarkBar()).bookmarks;
    }
    updateFavIcon_(data) {
        const index = this.bookmarks_.findIndex(item => item.id === data.id);
        if (index === -1) {
            return;
        }
        this.bookmarks_[index] = data;
        this.requestUpdate();
    }
    show_() {
        this.hidden = false;
    }
    hide_() {
        this.hidden = true;
    }
    onBookmarkClick_(e) {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        const bookmark = this.bookmarks_[index];
        // Only launch the bookmark if it's a URL.
        if (bookmark.type !== BookmarkType.URL) {
            return;
        }
        this.browserProxy_.handler.openInNewTab(bookmark.id);
    }
}
customElements.define(BookmarkBarElement.is, BookmarkBarElement);
