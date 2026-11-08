// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrSearchFieldMixinLit } from 'chrome://resources/cr_elements/cr_search_field/cr_search_field_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { stripDiacritics } from 'chrome://resources/js/search_highlight_utils.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './print_preview_search_box.css.js';
import { getHtml } from './print_preview_search_box.html.js';
const SANITIZE_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
const PrintPreviewSearchBoxElementBase = CrSearchFieldMixinLit(WebUiListenerMixinLit(CrLitElement));
export class PrintPreviewSearchBoxElement extends PrintPreviewSearchBoxElementBase {
    static get is() {
        return 'print-preview-search-box';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            autofocus: { type: Boolean },
            searchQuery: {
                type: Object,
                notify: true,
            },
        };
    }
    #autofocus_accessor_storage = false;
    get autofocus() { return this.#autofocus_accessor_storage; }
    set autofocus(value) { this.#autofocus_accessor_storage = value; }
    #searchQuery_accessor_storage = null;
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    lastQuery_ = '';
    firstUpdated() {
        this.addEventListener('search-changed', e => this.onSearchChanged_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    focus() {
        this.$.searchInput.focus();
    }
    onSearchChanged_(e) {
        const strippedQuery = stripDiacritics(e.detail.trim());
        const safeQuery = strippedQuery.replace(SANITIZE_REGEX, '\\$&');
        if (safeQuery === this.lastQuery_) {
            return;
        }
        this.lastQuery_ = safeQuery;
        this.searchQuery =
            safeQuery.length > 0 ? new RegExp(`(${safeQuery})`, 'ig') : null;
    }
    onClearClick_() {
        this.setValue('');
        this.$.searchInput.focus();
    }
}
customElements.define(PrintPreviewSearchBoxElement.is, PrintPreviewSearchBoxElement);
