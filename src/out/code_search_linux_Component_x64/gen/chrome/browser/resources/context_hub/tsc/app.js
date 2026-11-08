// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import '//resources/cr_elements/icons.html.js';
import './icons.html.js';
import './memory_bank_chat/memory_bank_chat.js';
import './memory_banks/memory_banks.js';
import './record_replay/record_replay.js';
import './smart_search/smart_search.js';
import './tab_groups/tab_groups.js';
import './taskbox/ai_taskbox.js';
import './topics/topics_view.js';
import { getTrustedHTML } from '//resources/js/static_types.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
const VALID_VIEWS = new Set([
    'launchpad',
    'memory-banks',
    'tab-groups',
    'memory-bank-chat',
    'topics',
    'jumpstart',
    'record-replay',
]);
const STORAGE_KEY = 'context_hub_current_view';
function normalizeView(view) {
    // Backwards compatibility for old view names.
    if (view === 'ai-taskbox') {
        return 'launchpad';
    }
    if (view === 'smart-search') {
        return 'jumpstart';
    }
    if (view && VALID_VIEWS.has(view)) {
        return view;
    }
    return null;
}
// Page refresh should restore the current view.
function getInitialView() {
    const hashView = normalizeView(window.location.hash.slice(1));
    if (hashView) {
        return hashView;
    }
    const storedView = normalizeView(localStorage.getItem(STORAGE_KEY));
    if (storedView) {
        return storedView;
    }
    return 'launchpad';
}
export class ContextHubAppElement extends CrLitElement {
    static get is() {
        return 'context-hub-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentView_: { type: String },
        };
    }
    #currentView__accessor_storage = getInitialView();
    get currentView_() { return this.#currentView__accessor_storage; }
    set currentView_(value) { this.#currentView__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('hashchange', this.onHashChange_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('hashchange', this.onHashChange_);
    }
    onHashChange_ = () => {
        const hash = normalizeView(window.location.hash.slice(1));
        if (hash && this.currentView_ !== hash) {
            this.currentView_ = hash;
        }
    };
    onSelectedChanged_(e) {
        this.currentView_ = e.detail.value;
        window.location.hash = this.currentView_;
        localStorage.setItem(STORAGE_KEY, this.currentView_);
    }
    onSelectorClick_(e) {
        e.preventDefault();
    }
    getCurrentViewElement_() {
        switch (this.currentView_) {
            case 'launchpad':
                return getTrustedHTML `<ai-taskbox></ai-taskbox>`;
            case 'memory-banks':
                return getTrustedHTML `<memory-banks></memory-banks>`;
            case 'memory-bank-chat':
                return getTrustedHTML `<memory-bank-chat></memory-bank-chat>`;
            case 'tab-groups':
                return getTrustedHTML `<tab-groups></tab-groups>`;
            case 'topics':
                return getTrustedHTML `<topics-view></topics-view>`;
            case 'jumpstart':
                return getTrustedHTML `<smart-search></smart-search>`;
            case 'record-replay':
                return getTrustedHTML `<record-replay></record-replay>`;
            default:
                return '';
        }
    }
}
customElements.define(ContextHubAppElement.is, ContextHubAppElement);
