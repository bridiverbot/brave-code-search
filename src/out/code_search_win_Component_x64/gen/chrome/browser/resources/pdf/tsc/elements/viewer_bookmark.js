// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_bookmark.css.js';
import { getHtml } from './viewer_bookmark.html.js';
/** Amount that each level of bookmarks is indented by (px). */
const BOOKMARK_INDENT = 20;
export var ChangePageOrigin;
(function (ChangePageOrigin) {
    ChangePageOrigin["BOOKMARK"] = "bookmark";
    ChangePageOrigin["THUMBNAIL"] = "thumbnail";
    ChangePageOrigin["PAGE_SELECTOR"] = "pageSelector";
})(ChangePageOrigin || (ChangePageOrigin = {}));
export class ViewerBookmarkElement extends CrLitElement {
    static get is() {
        return 'viewer-bookmark';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            bookmark: { type: Object },
            depth: { type: Number },
            childrenShown_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #bookmark_accessor_storage = { title: '', children: [] };
    get bookmark() { return this.#bookmark_accessor_storage; }
    set bookmark(value) { this.#bookmark_accessor_storage = value; }
    #depth_accessor_storage = 0;
    get depth() { return this.#depth_accessor_storage; }
    set depth(value) { this.#depth_accessor_storage = value; }
    #childrenShown__accessor_storage = false;
    get childrenShown_() { return this.#childrenShown__accessor_storage; }
    set childrenShown_(value) { this.#childrenShown__accessor_storage = value; }
    firstUpdated() {
        this.$.item.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                this.onEnter_(e);
            }
            else if (e.key === ' ') {
                this.onSpace_(e);
            }
        });
    }
    getItemStartPaddingStyle_() {
        return `padding-inline-start: ${this.depth * BOOKMARK_INDENT}px`;
    }
    getChildDepth_() {
        return this.depth + 1;
    }
    getExpandHidden_() {
        return this.bookmark.children.length <= 0;
    }
    onClick_() {
        if (this.bookmark.page != null) {
            if (this.bookmark.zoom != null) {
                this.fire('change-zoom', { zoom: this.bookmark.zoom });
            }
            if (this.bookmark.x != null && this.bookmark.y != null) {
                this.fire('change-page-and-xy', {
                    page: this.bookmark.page,
                    x: this.bookmark.x,
                    y: this.bookmark.y,
                    origin: ChangePageOrigin.BOOKMARK,
                });
            }
            else {
                this.fire('change-page', { page: this.bookmark.page, origin: ChangePageOrigin.BOOKMARK });
            }
        }
        else if (this.bookmark.uri != null) {
            this.fire('navigate', { uri: this.bookmark.uri, newtab: true });
        }
    }
    onEnter_(e) {
        // Don't allow events which have propagated up from the expand button to
        // trigger a click.
        if (e.target !== this.$.expand) {
            this.onClick_();
        }
    }
    onSpace_(e) {
        // cr-icon-button stops propagation of space events, so there's no need
        // to check the event source here.
        this.onClick_();
        // Prevent default space scroll behavior.
        e.preventDefault();
    }
    onExpandClick_(e) {
        this.childrenShown_ = !this.childrenShown_;
        e.stopPropagation(); // Prevent the above onClick_ handler from firing.
    }
}
customElements.define(ViewerBookmarkElement.is, ViewerBookmarkElement);
