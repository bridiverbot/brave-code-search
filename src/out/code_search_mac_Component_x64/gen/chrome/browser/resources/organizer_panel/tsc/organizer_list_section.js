// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import './organizer_list_section_header.js';
import './organizer_list_section_item.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './organizer_list_section.css.js';
import { getHtml } from './organizer_list_section.html.js';
import { browserProxyFactory } from './organizer_panel.mojom-webui.js';
import { search } from './search_utils.js';
export const INITIAL_ITEM_COUNT = 3;
export class OrganizerListSectionElement extends CrLitElement {
    static get is() {
        return 'organizer-list-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            items: { type: Array },
            expanded: {
                type: Boolean,
                notify: true,
            },
            noAnimation_: { type: Boolean },
            showAll_: { type: Boolean },
            searchQuery: { type: String },
            filteredItems_: { type: Array },
            filteredSearchQuery_: { type: String },
            hidden: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
        };
    }
    browserProxy_ = browserProxyFactory.getInstance();
    sectionStateChangedListenerId_ = null;
    #delegate_accessor_storage = null;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #items_accessor_storage = [];
    get items() { return this.#items_accessor_storage; }
    set items(value) { this.#items_accessor_storage = value; }
    #expanded_accessor_storage = true;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #noAnimation__accessor_storage = false;
    get noAnimation_() { return this.#noAnimation__accessor_storage; }
    set noAnimation_(value) { this.#noAnimation__accessor_storage = value; }
    #showAll__accessor_storage = false;
    get showAll_() { return this.#showAll__accessor_storage; }
    set showAll_(value) { this.#showAll__accessor_storage = value; }
    #searchQuery_accessor_storage = '';
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #filteredItems__accessor_storage = [];
    get filteredItems_() { return this.#filteredItems__accessor_storage; }
    set filteredItems_(value) { this.#filteredItems__accessor_storage = value; }
    #filteredSearchQuery__accessor_storage = '';
    // This is the search query that `filteredItems_` currently matches. This
    // ensures that we don't show the full list of elements until after the search
    // has been applied and the list of items has been filtered.
    get filteredSearchQuery_() { return this.#filteredSearchQuery__accessor_storage; }
    set filteredSearchQuery_(value) { this.#filteredSearchQuery__accessor_storage = value; }
    #hidden_accessor_storage = false;
    get hidden() { return this.#hidden_accessor_storage; }
    set hidden(value) { this.#hidden_accessor_storage = value; }
    searchOptions_ = {
        includeScore: true,
        includeMatches: true,
        ignoreLocation: false,
        threshold: 0.0,
        distance: 200,
        keys: [
            {
                name: 'title',
                getter: item => item.title,
                weight: 2,
            },
            {
                name: 'description',
                // Map non-matchable parts to empty strings instead of filtering
                // them out so highlight range indices stay aligned with
                // `item.description`.
                getter: item => item.description?.map(d => (d.matchable ?? true) ? d.text : ''),
                weight: 1,
            },
            {
                name: 'extraSearchTerms',
                getter: item => item.extraSearchTerms,
                weight: 1,
            },
        ],
    };
    // The panel WebUI will remain loaded but invisible when the panel is closed.
    // While invisible, the WebUI will not receive update events from the browser,
    // so all sections need to refetch their data upon visibility change.
    onVisibilityChange_ = () => {
        if (document.visibilityState === 'visible') {
            this.updateItems_();
            this.updateSectionState_();
        }
    };
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this.onVisibilityChange_);
        this.sectionStateChangedListenerId_ =
            this.browserProxy_.callbackRouter.onSectionsStateChanged.addListener((sectionsState) => {
                this.onSectionsStateChanged_(sectionsState);
            });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('visibilitychange', this.onVisibilityChange_);
        assert(this.sectionStateChangedListenerId_ !== null);
        this.browserProxy_.callbackRouter.removeListener(this.sectionStateChangedListenerId_);
        this.sectionStateChangedListenerId_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('delegate')) {
            this.delegate?.init(this);
            this.updateItems_();
            this.updateSectionState_();
        }
        if (changedProperties.has('searchQuery') ||
            (changedProperties.has('items') &&
                (!this.isSearching_() ||
                    changedProperties.get('items')?.length !== this.items.length))) {
            this.updateFilteredItems_();
        }
        this.hidden = this.hasNoSearchResults_();
    }
    onItemsChanged(items) {
        this.items = items;
    }
    async updateItems_() {
        if (!this.delegate) {
            this.items = [];
            return;
        }
        this.items = await this.delegate.getItems();
    }
    async updateSectionState_() {
        if (!this.delegate) {
            return;
        }
        const delegate = this.delegate;
        const { state } = await this.browserProxy_.handler.getSectionState(delegate.getId());
        if (this.delegate !== delegate) {
            return;
        }
        // Disable the transition when the expanded state is loaded from prefs.
        this.noAnimation_ = true;
        this.expanded = state.expanded;
        this.showAll_ = state.showAll;
        await this.updateComplete;
        this.noAnimation_ = false;
    }
    onSectionsStateChanged_(sectionsState) {
        assert(this.delegate);
        const state = sectionsState[this.delegate.getId()];
        assert(state);
        this.expanded = state.expanded;
        this.showAll_ = state.showAll;
    }
    async updateFilteredItems_() {
        const query = this.searchQuery;
        if (query.length === 0) {
            this.filteredSearchQuery_ = '';
            this.filteredItems_ = [...this.items];
            return;
        }
        const filteredItems = await search(query, this.items, this.searchOptions_);
        // Confirm that the search query hasn't changed before updating the filtered
        // items.
        if (this.searchQuery === query) {
            this.filteredSearchQuery_ = query;
            this.filteredItems_ = filteredItems;
        }
    }
    hasContextMenu_() {
        return !!this.delegate?.onItemContextMenuClicked;
    }
    isSearching_() {
        return this.filteredSearchQuery_.length > 0;
    }
    isExpanded_() {
        return this.expanded || this.isSearching_();
    }
    hasNoSearchResults_() {
        return this.isSearching_() && this.getFilteredItems_().length === 0;
    }
    onExpandedChanged_(e) {
        if (this.isSearching_() || this.expanded === e.detail.value) {
            return;
        }
        this.expanded = e.detail.value;
        assert(this.delegate);
        this.browserProxy_.handler.setSectionExpanded(this.delegate.getId(), this.expanded);
    }
    hasZeroState_() {
        return !this.isSearching_() &&
            (this.getFilteredItems_().length === 0 ||
                !!this.delegate?.shouldAlwaysShowZeroState?.()) &&
            !!this.getZeroState_();
    }
    getZeroState_() {
        return this.delegate?.getZeroState?.();
    }
    onShowAllChanged_(e) {
        if (this.showAll_ === e.detail.value) {
            return;
        }
        this.showAll_ = e.detail.value;
        assert(this.delegate);
        this.browserProxy_.handler.setSectionShowAll(this.delegate.getId(), this.showAll_);
    }
    onItemClick_(e) {
        const target = e.currentTarget;
        assert(target.item);
        assert(this.delegate);
        this.delegate.onItemClick(target.item);
        this.browserProxy_.handler.closePanel();
    }
    async onItemActionButtonClick_(e) {
        assert(e.detail.item);
        assert(e.detail.buttonElement);
        assert(this.delegate);
        const itemElement = e.currentTarget;
        await this.delegate.onItemActionButtonClicked?.(e.detail.item, e.detail.buttonElement);
        itemElement.resetActionButtonStateIfNeeded();
    }
    async onItemContextMenuClick_(e) {
        assert(e.detail.item);
        assert(this.delegate);
        await this.delegate.onItemContextMenuClicked?.(e.detail.item, e.detail.x, e.detail.y);
    }
    getFilteredItems_() {
        if (this.showAll_ || this.isSearching_()) {
            return this.filteredItems_;
        }
        const alwaysShowIndices = [];
        const regularIndices = [];
        for (let i = 0; i < this.filteredItems_.length; i++) {
            if (this.filteredItems_[i].alwaysShow) {
                alwaysShowIndices.push(i);
            }
            else {
                regularIndices.push(i);
            }
        }
        const maxItems = alwaysShowIndices.length > 0 ? INITIAL_ITEM_COUNT + 1 :
            INITIAL_ITEM_COUNT;
        const selectedAlwaysShow = alwaysShowIndices.slice(0, maxItems);
        const selectedRegular = regularIndices.slice(0, maxItems - selectedAlwaysShow.length);
        const selectedIndices = new Set([...selectedAlwaysShow, ...selectedRegular]);
        return this.filteredItems_.filter((_, index) => selectedIndices.has(index));
    }
    focus() {
        this.$.header.focus();
    }
    getNavigableElements() {
        if (this.hidden) {
            return [];
        }
        const elements = [this.$.header];
        if (this.isExpanded_()) {
            elements.push(...this.shadowRoot.querySelectorAll('organizer-list-section-item'));
        }
        return elements;
    }
    getVisibleItems() {
        return Array.from(this.shadowRoot.querySelectorAll('organizer-list-section-item'));
    }
}
customElements.define(OrganizerListSectionElement.is, OrganizerListSectionElement);
