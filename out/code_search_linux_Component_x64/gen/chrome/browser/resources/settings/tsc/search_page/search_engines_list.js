// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-search-engines-list' is a component for showing a
 * list of search engines.
 */
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './search_engine_entry.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './search_engines_list.css.js';
import { getHtml } from './search_engines_list.html.js';
export class SettingsSearchEnginesListElement extends CrLitElement {
    static get is() {
        return 'settings-search-engines-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            engines: { type: Array },
            showShortcut: { type: Boolean },
            showQueryUrl: { type: Boolean },
            collapseList: { type: Boolean },
            visibleEnginesSize: { type: Number },
            visibleEngines_: { type: Array },
            collapsedEngines_: { type: Array },
            expandListText: { type: String },
            fixedHeight: { type: Boolean, reflect: true },
            enginesListExpanded_: { type: Boolean },
        };
    }
    #engines_accessor_storage = [];
    get engines() { return this.#engines_accessor_storage; }
    set engines(value) { this.#engines_accessor_storage = value; }
    #showShortcut_accessor_storage = false;
    get showShortcut() { return this.#showShortcut_accessor_storage; }
    set showShortcut(value) { this.#showShortcut_accessor_storage = value; }
    #showQueryUrl_accessor_storage = false;
    get showQueryUrl() { return this.#showQueryUrl_accessor_storage; }
    set showQueryUrl(value) { this.#showQueryUrl_accessor_storage = value; }
    #collapseList_accessor_storage = false;
    get collapseList() { return this.#collapseList_accessor_storage; }
    set collapseList(value) { this.#collapseList_accessor_storage = value; }
    #visibleEnginesSize_accessor_storage = 5;
    get visibleEnginesSize() { return this.#visibleEnginesSize_accessor_storage; }
    set visibleEnginesSize(value) { this.#visibleEnginesSize_accessor_storage = value; }
    #expandListText_accessor_storage = '';
    get expandListText() { return this.#expandListText_accessor_storage; }
    set expandListText(value) { this.#expandListText_accessor_storage = value; }
    #fixedHeight_accessor_storage = false;
    get fixedHeight() { return this.#fixedHeight_accessor_storage; }
    set fixedHeight(value) { this.#fixedHeight_accessor_storage = value; }
    #enginesListExpanded__accessor_storage = false;
    get enginesListExpanded_() { return this.#enginesListExpanded__accessor_storage; }
    set enginesListExpanded_(value) { this.#enginesListExpanded__accessor_storage = value; }
    #visibleEngines__accessor_storage = [];
    get visibleEngines_() { return this.#visibleEngines__accessor_storage; }
    set visibleEngines_(value) { this.#visibleEngines__accessor_storage = value; }
    #collapsedEngines__accessor_storage = [];
    get collapsedEngines_() { return this.#collapsedEngines__accessor_storage; }
    set collapsedEngines_(value) { this.#collapsedEngines__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('engines') ||
            changedProperties.has('visibleEnginesSize')) {
            this.visibleEngines_ = this.engines.slice(0, this.visibleEnginesSize);
            this.collapsedEngines_ = this.engines.slice(this.visibleEnginesSize);
        }
    }
    onEnginesListExpandedChanged_(e) {
        this.enginesListExpanded_ = e.detail.value;
    }
}
customElements.define(SettingsSearchEnginesListElement.is, SettingsSearchEnginesListElement);
