// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_search_field/cr_search_field.js';
import '//resources/cr_elements/icons.html.js';
import '../icons.html.js';
import './memory_banks_edit_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, EntryType } from '../context_hub.mojom-webui.js';
import { getCss } from './memory_banks.css.js';
import { getHtml } from './memory_banks.html.js';
import { computeSuggestions, matchesMemoryBankEntry, parseSearchQuery } from './memory_banks_search.js';
import { convertMojoTimeToDate, formatEntriesAsMarkdown } from './memory_banks_utils.js';
function downloadFile(filename, content, mimeType = 'text/markdown;charset=utf-8') {
    if (!content) {
        return;
    }
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
export class MemoryBanksElement extends CrLitElement {
    static get is() {
        return 'memory-banks';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entries: { type: Array },
            selectedIds: { type: Object },
            searchQuery: { type: String },
            selectedCollections_: { type: Object, state: true },
            selectedTags_: { type: Object, state: true },
            activeFilterMenu_: { type: String, state: true },
            availableCollections_: { type: Array, state: true },
            availableTags_: { type: Array, state: true },
            filteredEntries_: { type: Array, state: true },
            viewMode_: { type: String, state: true },
            currentPage_: { type: Number, state: true },
            geminiResponse_: { type: String, state: true },
            isAskingGemini_: { type: Boolean, state: true },
            showGeminiPanel_: { type: Boolean, state: true },
            editingEntry_: { type: Object, state: true },
            searchSuggestions_: { type: Array, state: true },
            highlightedSuggestionIndex_: { type: Number, state: true },
        };
    }
    #entries_accessor_storage = [];
    get entries() { return this.#entries_accessor_storage; }
    set entries(value) { this.#entries_accessor_storage = value; }
    #selectedIds_accessor_storage = new Set();
    get selectedIds() { return this.#selectedIds_accessor_storage; }
    set selectedIds(value) { this.#selectedIds_accessor_storage = value; }
    #searchQuery_accessor_storage = '';
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #selectedCollections__accessor_storage = new Set();
    // The collections / tags checked in the chip filters; when non-empty, only
    // entries matching at least one selected value are shown. `''` is the
    // "No collection" / "No tags" bucket. Everything starts out unchecked
    // (no filter applied, all entries shown).
    get selectedCollections_() { return this.#selectedCollections__accessor_storage; }
    set selectedCollections_(value) { this.#selectedCollections__accessor_storage = value; }
    #selectedTags__accessor_storage = new Set();
    get selectedTags_() { return this.#selectedTags__accessor_storage; }
    set selectedTags_(value) { this.#selectedTags__accessor_storage = value; }
    #activeFilterMenu__accessor_storage = null;
    get activeFilterMenu_() { return this.#activeFilterMenu__accessor_storage; }
    set activeFilterMenu_(value) { this.#activeFilterMenu__accessor_storage = value; }
    #availableCollections__accessor_storage = [];
    get availableCollections_() { return this.#availableCollections__accessor_storage; }
    set availableCollections_(value) { this.#availableCollections__accessor_storage = value; }
    #availableTags__accessor_storage = [];
    get availableTags_() { return this.#availableTags__accessor_storage; }
    set availableTags_(value) { this.#availableTags__accessor_storage = value; }
    #filteredEntries__accessor_storage = [];
    get filteredEntries_() { return this.#filteredEntries__accessor_storage; }
    set filteredEntries_(value) { this.#filteredEntries__accessor_storage = value; }
    #viewMode__accessor_storage = 'table';
    get viewMode_() { return this.#viewMode__accessor_storage; }
    set viewMode_(value) { this.#viewMode__accessor_storage = value; }
    #currentPage__accessor_storage = 0;
    get currentPage_() { return this.#currentPage__accessor_storage; }
    set currentPage_(value) { this.#currentPage__accessor_storage = value; }
    pageSize_ = 10;
    #geminiResponse__accessor_storage = '';
    get geminiResponse_() { return this.#geminiResponse__accessor_storage; }
    set geminiResponse_(value) { this.#geminiResponse__accessor_storage = value; }
    #isAskingGemini__accessor_storage = false;
    get isAskingGemini_() { return this.#isAskingGemini__accessor_storage; }
    set isAskingGemini_(value) { this.#isAskingGemini__accessor_storage = value; }
    #showGeminiPanel__accessor_storage = false;
    get showGeminiPanel_() { return this.#showGeminiPanel__accessor_storage; }
    set showGeminiPanel_(value) { this.#showGeminiPanel__accessor_storage = value; }
    #editingEntry__accessor_storage = null;
    get editingEntry_() { return this.#editingEntry__accessor_storage; }
    set editingEntry_(value) { this.#editingEntry__accessor_storage = value; }
    #searchSuggestions__accessor_storage = [];
    get searchSuggestions_() { return this.#searchSuggestions__accessor_storage; }
    set searchSuggestions_(value) { this.#searchSuggestions__accessor_storage = value; }
    #highlightedSuggestionIndex__accessor_storage = -1;
    get highlightedSuggestionIndex_() { return this.#highlightedSuggestionIndex__accessor_storage; }
    set highlightedSuggestionIndex_(value) { this.#highlightedSuggestionIndex__accessor_storage = value; }
    activeMenuEntry_ = null;
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = browserProxyFactory.getInstance().callbackRouter;
        this.listenerIds_.push(callbackRouter.onMemoryBankEntryAdded.addListener((entry) => {
            this.entries = [
                entry,
                ...this.entries.filter(existing => existing.id !== entry.id),
            ];
        }), callbackRouter.onMemoryBankEntryUpdated.addListener((id, annotations) => {
            this.entries = this.entries.map(existing => existing.id === id ? {
                ...existing,
                collection: annotations.collection,
                note: annotations.note,
                tags: annotations.tags ?? [],
            } :
                existing);
        }), callbackRouter.onMemoryBankEntriesDeleted.addListener((ids) => {
            const deletedIds = new Set(ids);
            this.entries =
                this.entries.filter(entry => !deletedIds.has(entry.id));
        }));
        this.fetchEntries();
        document.addEventListener('pointerdown', this.onDocumentPointerDown_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('pointerdown', this.onDocumentPointerDown_);
        this.listenerIds_.forEach(id => browserProxyFactory.getInstance().callbackRouter.removeListener(id));
        this.listenerIds_ = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('entries')) {
            this.availableCollections_ = this.computeAvailableCollections_();
            this.availableTags_ = this.computeAvailableTags_();
            this.selectedCollections_ = new Set(this.availableCollections_.filter(c => this.selectedCollections_.has(c)));
            this.selectedTags_ =
                new Set(this.availableTags_.filter(t => this.selectedTags_.has(t)));
        }
        if (changedProperties.has('entries') ||
            changedProperties.has('searchQuery') ||
            changedPrivateProperties.has('selectedCollections_') ||
            changedPrivateProperties.has('selectedTags_')) {
            this.filteredEntries_ = this.computeFilteredEntries_();
            // Drop selections that are no longer visible, so bulk actions (copy,
            // download, delete, Ask Gemini) never act on entries the user can't see.
            const visibleIds = new Set(this.filteredEntries_.map(entry => entry.id));
            const nextSelectedIds = new Set(Array.from(this.selectedIds).filter(id => visibleIds.has(id)));
            if (nextSelectedIds.size !== this.selectedIds.size) {
                this.selectedIds = nextSelectedIds;
            }
            // The filtered set can shrink out from under the table, e.g. when the
            // last entry on the final page is deleted.
            const lastPage = Math.max(0, Math.ceil(this.filteredEntries_.length / this.pageSize_) - 1);
            this.currentPage_ = Math.min(this.currentPage_, lastPage);
        }
    }
    async fetchEntries() {
        const { entries } = await browserProxyFactory.getInstance()
            .handler.getAllMemoryBankEntries();
        this.entries = entries;
    }
    computeAvailableCollections_() {
        const set = new Set();
        let hasUncollected = false;
        for (const entry of this.entries) {
            if (entry.collection) {
                set.add(entry.collection);
            }
            else {
                hasUncollected = true;
            }
        }
        const sorted = Array.from(set).sort((a, b) => a.localeCompare(b));
        if (hasUncollected) {
            sorted.unshift('');
        }
        return sorted;
    }
    computeAvailableTags_() {
        const set = new Set();
        let hasUntagged = false;
        for (const entry of this.entries) {
            if (!entry.tags || entry.tags.length === 0) {
                hasUntagged = true;
            }
            else {
                for (const tag of entry.tags) {
                    if (tag) {
                        set.add(tag);
                    }
                }
            }
        }
        const sorted = Array.from(set).sort((a, b) => a.localeCompare(b));
        if (hasUntagged) {
            sorted.unshift('');
        }
        return sorted;
    }
    computeFilteredEntries_() {
        const query = this.searchQuery.trim();
        if (query) {
            const parsed = parseSearchQuery(query);
            return this.entries.filter(entry => matchesMemoryBankEntry(entry, parsed));
        }
        let result = this.entries;
        // `''` represents the "No collection" / "No tags" bucket for entries
        // without those annotations.
        if (this.isCollectionFilterActive_()) {
            result = result.filter(entry => this.selectedCollections_.has(entry.collection || ''));
        }
        if (this.isTagFilterActive_()) {
            result = result.filter(entry => !entry.tags || entry.tags.length === 0 ?
                this.selectedTags_.has('') :
                entry.tags.some(tag => this.selectedTags_.has(tag)));
        }
        return result;
    }
    onFilterChipClick_(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const type = target.dataset['type'];
        this.activeFilterMenu_ = this.activeFilterMenu_ === type ? null : type;
    }
    getSelectedCollectionCount_() {
        return this.selectedCollections_.size;
    }
    isCollectionFilterActive_() {
        return this.selectedCollections_.size > 0;
    }
    isAllCollectionsSelected_() {
        return this.selectedCollections_.size === 0;
    }
    isCollectionSelected_(collection) {
        return this.selectedCollections_.has(collection);
    }
    onToggleAllCollectionsChange_(e) {
        const checkbox = e.currentTarget;
        checkbox.checked = true;
        this.selectedCollections_ = new Set();
        this.currentPage_ = 0;
    }
    onCollectionCheckboxChange_(e) {
        const checkbox = e.currentTarget;
        const collection = checkbox.dataset['collection'] ?? '';
        const updated = new Set(this.selectedCollections_);
        if (checkbox.checked) {
            updated.add(collection);
        }
        else {
            updated.delete(collection);
        }
        this.selectedCollections_ = updated;
        this.currentPage_ = 0;
    }
    getSelectedTagCount_() {
        return this.selectedTags_.size;
    }
    isTagFilterActive_() {
        return this.selectedTags_.size > 0;
    }
    isAllTagsSelected_() {
        return this.selectedTags_.size === 0;
    }
    isTagSelected_(tag) {
        return this.selectedTags_.has(tag);
    }
    onToggleAllTagsChange_(e) {
        const checkbox = e.currentTarget;
        checkbox.checked = true;
        this.selectedTags_ = new Set();
        this.currentPage_ = 0;
    }
    onTagCheckboxChange_(e) {
        const checkbox = e.currentTarget;
        const tag = checkbox.dataset['tag'] ?? '';
        const updated = new Set(this.selectedTags_);
        if (checkbox.checked) {
            updated.add(tag);
        }
        else {
            updated.delete(tag);
        }
        this.selectedTags_ = updated;
        this.currentPage_ = 0;
    }
    onFilterDropdownKeydown_(e) {
        if (e.key === 'Escape' && this.activeFilterMenu_) {
            e.preventDefault();
            e.stopPropagation();
            this.activeFilterMenu_ = null;
        }
    }
    onViewModeChange_(mode) {
        this.viewMode_ = mode;
    }
    onTableViewClick_() {
        this.onViewModeChange_('table');
    }
    onCardViewClick_() {
        this.onViewModeChange_('card');
    }
    getPaginatedEntries_() {
        const start = this.currentPage_ * this.pageSize_;
        return this.filteredEntries_.slice(start, start + this.pageSize_);
    }
    getPaginationInfo_() {
        const total = this.filteredEntries_.length;
        if (total === 0) {
            return 'Showing 0 of 0 saved items';
        }
        const pageCount = this.getPaginatedEntries_().length;
        const start = this.currentPage_ * this.pageSize_;
        return `Showing ${start + 1}–${start + pageCount} of ${total} saved items`;
    }
    isLastPage_() {
        return (this.currentPage_ + 1) * this.pageSize_ >=
            this.filteredEntries_.length;
    }
    onPreviousPageClick_() {
        if (this.currentPage_ > 0) {
            this.currentPage_--;
        }
    }
    onNextPageClick_() {
        if (!this.isLastPage_()) {
            this.currentPage_++;
        }
    }
    formatDisplayUrl_(url) {
        try {
            const parsed = new URL(url);
            const domainAndPath = parsed.host + parsed.pathname + parsed.search;
            return domainAndPath.replace(/\/$/, '');
        }
        catch {
            return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
        }
    }
    formatDate_(mojoTime) {
        const date = convertMojoTimeToDate(mojoTime);
        if (!date) {
            return '';
        }
        return date.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }
    onDocumentPointerDown_ = (e) => {
        if (!this.activeFilterMenu_) {
            return;
        }
        const isInsideChipWrapper = e.composedPath().some(el => el instanceof HTMLElement &&
            el.classList.contains('filter-chip-wrapper'));
        if (!isInsideChipWrapper) {
            this.activeFilterMenu_ = null;
        }
    };
    onMoreActionsClick_(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        const entryIndex = this.viewMode_ === 'table' ?
            this.currentPage_ * this.pageSize_ + index :
            index;
        this.activeMenuEntry_ = this.filteredEntries_[entryIndex] ?? null;
        this.$.actionMenu.showAt(target);
    }
    onMenuEditClick_() {
        this.$.actionMenu.close();
        this.editingEntry_ = this.activeMenuEntry_;
        this.activeMenuEntry_ = null;
    }
    async onMenuDeleteClick_() {
        this.$.actionMenu.close();
        if (this.activeMenuEntry_) {
            const id = this.activeMenuEntry_.id;
            this.activeMenuEntry_ = null;
            await this.deleteEntries_([id]);
        }
    }
    onEditDialogClose_() {
        this.editingEntry_ = null;
    }
    isSelected(id) {
        return this.selectedIds.has(id);
    }
    isAllSelected_() {
        const filtered = this.filteredEntries_;
        return filtered.length > 0 &&
            filtered.every(entry => this.selectedIds.has(entry.id));
    }
    isSomeSelected_() {
        if (this.selectedIds.size === 0) {
            return false;
        }
        const filtered = this.filteredEntries_;
        const filteredSelected = filtered.filter(entry => this.selectedIds.has(entry.id));
        return filteredSelected.length > 0 &&
            filteredSelected.length < filtered.length;
    }
    onCheckboxClick(e) {
        e.stopPropagation();
    }
    onCheckboxChange(e) {
        const checkbox = e.target;
        const id = BigInt(checkbox.dataset['id']);
        const updated = new Set(this.selectedIds);
        if (checkbox.checked) {
            updated.add(id);
        }
        else {
            updated.delete(id);
        }
        this.selectedIds = updated;
    }
    onSelectAllChange_(e) {
        const checkbox = e.target;
        if (checkbox.checked) {
            this.selectedIds = new Set(this.filteredEntries_.map(entry => entry.id));
        }
        else {
            this.selectedIds = new Set();
        }
    }
    get searchField_() {
        return this.shadowRoot?.querySelector('#search-field') ??
            null;
    }
    updateSuggestions_(input = this.searchQuery) {
        this.searchSuggestions_ = computeSuggestions(input, this.availableTags_.filter(Boolean), this.availableCollections_.filter(Boolean));
        this.highlightedSuggestionIndex_ = -1;
    }
    closeSuggestions_() {
        this.searchSuggestions_ = [];
        this.highlightedSuggestionIndex_ = -1;
    }
    onSearchFocusin_() {
        this.updateSuggestions_();
    }
    onSearchFocusout_(e) {
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && this.shadowRoot?.contains(relatedTarget)) {
            return;
        }
        this.closeSuggestions_();
    }
    onSearchChanged_(e) {
        this.searchQuery = e.detail;
        this.selectedIds = new Set();
        this.currentPage_ = 0;
        this.updateSuggestions_(this.searchQuery);
    }
    onSearchKeydown_(e) {
        if (this.searchSuggestions_.length === 0) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                this.updateSuggestions_();
            }
            return;
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            // Highlight the next suggestion. If unselected (-1), highlights the first
            // item (0). If at the bottom, wraps back to the top.
            this.highlightedSuggestionIndex_ =
                (this.highlightedSuggestionIndex_ + 1) %
                    this.searchSuggestions_.length;
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            // Highlight the previous suggestion. If unselected (-1) or already at
            // the top (0), wraps around to the last item.
            this.highlightedSuggestionIndex_ = this.highlightedSuggestionIndex_ <= 0 ?
                this.searchSuggestions_.length - 1 :
                this.highlightedSuggestionIndex_ - 1;
        }
        else if (e.key === 'Enter' || e.key === 'Tab') {
            const selected = this.searchSuggestions_[this.highlightedSuggestionIndex_];
            if (selected) {
                e.preventDefault();
                this.applySuggestion_(selected);
            }
            else if (e.key === 'Enter') {
                this.closeSuggestions_();
            }
        }
        else if (e.key === 'Escape') {
            e.preventDefault();
            this.closeSuggestions_();
        }
    }
    async applySuggestion_(suggestion) {
        this.setSearchQuery_(suggestion.query);
        if (suggestion.query.trim().endsWith(':')) {
            this.updateSuggestions_(suggestion.query);
        }
        else {
            this.closeSuggestions_();
        }
        await this.updateComplete;
        this.searchField_?.getSearchInput().focus();
    }
    onSuggestionMousedown_(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        const suggestion = this.searchSuggestions_[index];
        if (suggestion) {
            this.applySuggestion_(suggestion);
        }
    }
    setSearchQuery_(newQuery) {
        this.searchQuery = newQuery;
        this.searchField_?.setValue(newQuery, /*noEvent=*/ true);
        this.selectedIds = new Set();
        this.currentPage_ = 0;
    }
    async onCopyClick_() {
        const textToCopy = this.getSelectedEntriesAsMarkdown_();
        try {
            await navigator.clipboard.writeText(textToCopy);
        }
        catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    onDownloadSelectedEntriesClick_() {
        downloadFile('memory_banks_entries.md', this.getSelectedEntriesAsMarkdown_());
    }
    onUploadClick_() {
        this.$.fileInput.value = '';
        this.$.fileInput.click();
    }
    async onFileUploadChange_(e) {
        const input = e.target;
        if (!input.files || input.files.length === 0) {
            return;
        }
        const entriesToUpload = [];
        for (const file of Array.from(input.files)) {
            const text = await file.text();
            entriesToUpload.push(...this.parseEntriesFromMarkdown_(text));
        }
        input.value = '';
        if (entriesToUpload.length === 0) {
            return;
        }
        // TODO(crbug.com/567261012): Notify the user in the UI when one or more
        // uploaded entries fail to save.
        const { success } = await browserProxyFactory.getInstance().handler.uploadMemoryBankEntries(entriesToUpload);
        if (success) {
            await this.fetchEntries();
        }
    }
    onDownloadGeminiResponseClick_() {
        downloadFile('gemini_response.md', this.geminiResponse_);
    }
    async onDeleteClick_() {
        await this.deleteEntries_(Array.from(this.selectedIds));
    }
    async deleteEntries_(ids) {
        await browserProxyFactory.getInstance().handler.deleteMemoryBankEntries(ids);
        const updated = new Set(this.selectedIds);
        for (const id of ids) {
            updated.delete(id);
        }
        this.selectedIds = updated;
    }
    onAskGeminiClick_() {
        this.showGeminiPanel_ = !this.showGeminiPanel_;
    }
    onClosePanelClick_() {
        this.showGeminiPanel_ = false;
        this.geminiResponse_ = '';
    }
    onCloseResponseClick_() {
        this.geminiResponse_ = '';
    }
    async onQuickOptionClick_(e) {
        const target = e.currentTarget;
        const action = target.dataset['option'];
        if (!action || this.selectedIds.size === 0 || this.isAskingGemini_) {
            return;
        }
        this.isAskingGemini_ = true;
        this.geminiResponse_ = '';
        const memoryBankEntryIds = Array.from(this.selectedIds);
        try {
            const { response } = await browserProxyFactory.getInstance().handler.askGeminiWithContext(action, memoryBankEntryIds, /*save_to_history=*/ false);
            this.geminiResponse_ = response ? response.content : '';
        }
        catch (err) {
            console.error('Failed to ask Gemini:', err);
            this.geminiResponse_ = 'Error generating response from Gemini.';
        }
        finally {
            this.isAskingGemini_ = false;
        }
    }
    convertDateToMojoTime_(date) {
        if (isNaN(date.getTime())) {
            return { internalValue: 0n };
        }
        return {
            internalValue: BigInt(date.getTime()) * 1000n + 11644473600000000n,
        };
    }
    parseEntriesFromMarkdown_(text) {
        const normalized = text.replace(/\r\n/g, '\n').trim();
        if (!normalized) {
            return [];
        }
        const blocks = normalized.split(/\n+---\n+(?=\s*##\s*\[)/);
        const entries = [];
        const fieldHeaderRegex = new RegExp('^-\\s*\\*\\*(Title|URL|Collection|Tags|Saved Date|Note|Content):' +
            '\\*\\*(?:\\s*(.*))?$', 'i');
        for (const block of blocks) {
            const lines = block.trim().split('\n');
            if (lines.length === 0) {
                continue;
            }
            const header = lines[0].trim().toLowerCase();
            let type;
            if (header.includes('[saved text selection]') ||
                header.includes('[saved text]')) {
                type = EntryType.kTextSelection;
            }
            else if (header.includes('[saved tab]')) {
                type = EntryType.kTab;
            }
            else {
                continue;
            }
            let timestamp = { internalValue: 0n };
            let tabTitle = '';
            let url = '';
            let collection = null;
            let tags = [];
            let currentField = null;
            const noteLines = [];
            const contentLines = [];
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                const match = line.match(fieldHeaderRegex);
                if (match) {
                    const field = match[1].toLowerCase();
                    const value = (match[2] || '').trim();
                    currentField = field;
                    switch (field) {
                        case 'title':
                            tabTitle = value;
                            break;
                        case 'url':
                            url = value;
                            break;
                        case 'collection':
                            collection = value || null;
                            break;
                        case 'tags':
                            tags = value.split(',').map(t => t.trim()).filter(Boolean);
                            break;
                        case 'saved date': {
                            const parsedDate = new Date(value);
                            if (!isNaN(parsedDate.getTime())) {
                                timestamp = this.convertDateToMojoTime_(parsedDate);
                            }
                            break;
                        }
                        case 'note':
                            if (value) {
                                noteLines.push(value.replace(/^(?:\s*>\s?)+/, ''));
                            }
                            break;
                        case 'content':
                            if (value) {
                                contentLines.push(value.replace(/^(?:\s*>\s?)+/, ''));
                            }
                            break;
                        default:
                            break;
                    }
                }
                else if (currentField === 'note') {
                    noteLines.push(line.replace(/^(?:\s*>\s?)+/, ''));
                }
                else if (currentField === 'content') {
                    contentLines.push(line.replace(/^(?:\s*>\s?)+/, ''));
                }
            }
            // URL sanitization: must be valid HTTP or HTTPS URL to be uploaded.
            if (!url) {
                continue;
            }
            try {
                const parsed = new URL(url);
                if (!['http:', 'https:'].includes(parsed.protocol)) {
                    continue;
                }
            }
            catch {
                continue;
            }
            const uniqueTags = Array.from(new Set(tags));
            const note = noteLines.join('\n').trim() || null;
            const selectedText = contentLines.join('\n').trim() || null;
            entries.push({
                // Set `id` to 0 so the storage backend treats the uploaded entry as a
                // new entry (generating a fresh ID and enforcing capacity limits)
                // rather than overwriting an existing entry.
                id: 0n,
                type,
                timestamp,
                url,
                tabTitle,
                selectedText,
                imageUrl: null,
                tags: uniqueTags,
                note,
                collection,
            });
        }
        return entries;
    }
    getSelectedEntriesAsMarkdown_() {
        const selected = this.entries.filter(entry => this.selectedIds.has(entry.id));
        return formatEntriesAsMarkdown(selected);
    }
}
customElements.define(MemoryBanksElement.is, MemoryBanksElement);
