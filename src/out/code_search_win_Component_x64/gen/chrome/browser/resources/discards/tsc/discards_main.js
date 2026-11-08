// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './database_tab.js';
import './discards_tab.js';
import './graph_tab.js';
import './memory_tab.js';
import { CrRouter } from 'chrome://resources/js/cr_router.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './discards_main.css.js';
import { getHtml } from './discards_main.html.js';
export class DiscardsMainElement extends CrLitElement {
    static get is() {
        return 'discards-main';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selected: { type: Number },
            tabs: { type: Array },
        };
    }
    #selected_accessor_storage = 0;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #tabs_accessor_storage = ['discards', 'database', 'graph', 'memory'];
    get tabs() { return this.#tabs_accessor_storage; }
    set tabs(value) { this.#tabs_accessor_storage = value; }
    firstUpdated() {
        const router = CrRouter.getInstance();
        this.pathChanged_(router.getPath());
        router.addEventListener('cr-router-path-changed', (e) => this.pathChanged_(e.detail));
    }
    /** Updates the location hash on selection change. */
    onSelectedChanged_(e) {
        const newIndex = e.detail.value;
        if (newIndex === this.selected) {
            return;
        }
        this.selected = newIndex;
        // The first tab is special-cased to the empty path.
        const tabName = this.tabs[newIndex];
        CrRouter.getInstance().setPath('/' + (newIndex === 0 ? '' : tabName));
    }
    /**
     * Returns the index of the currently selected tab corresponding to the
     * path or zero if no match.
     */
    selectedFromPath_(path) {
        const index = this.tabs.findIndex(tab => path === tab);
        return Math.max(index, 0);
    }
    /** Updates the selection property on path change. */
    pathChanged_(newValue) {
        this.selected = this.selectedFromPath_(newValue.substr(1));
    }
}
customElements.define(DiscardsMainElement.is, DiscardsMainElement);
