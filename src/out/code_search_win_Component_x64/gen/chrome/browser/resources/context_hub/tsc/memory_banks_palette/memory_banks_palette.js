// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_search_field/cr_search_field.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/icons.html.js';
import '../icons.html.js';
import { isMac } from '//resources/js/platform.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, CopyAttachmentsToClipboardStatus } from '../context_hub.mojom-webui.js';
import { matchesMemoryBankEntry, parseSearchQuery } from '../memory_banks/memory_banks_search.js';
import { convertMojoTimeToDate, formatEntriesAsMarkdown } from '../memory_banks/memory_banks_utils.js';
import { getCss } from './memory_banks_palette.css.js';
import { getHtml } from './memory_banks_palette.html.js';
/** Duration in milliseconds to display the copy confirmation toast. */
const COPY_TOAST_DURATION_MS = 1800;
/** Duration in milliseconds to display the file attachment toast. */
const ATTACH_TOAST_DURATION_MS = 2800;
/** Minimum character length of a snippet before offering an expand toggle. */
const SNIPPET_PREVIEW_CHAR_THRESHOLD = 90;
/**
 * Maximum number of files that can be staged to the clipboard at once.
 * Must not exceed `kMaxFilesToCopy` in `context_hub_page_handler.cc`.
 */
const MAX_ATTACHED_FILES = 10;
/** Max character length for an attachment filename title. */
const MAX_FILENAME_CHARS = 50;
const ONE_MINUTE_MS = 60 * 1000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const ONE_HOUR_MS = MINUTES_PER_HOUR * ONE_MINUTE_MS;
const ONE_DAY_MS = HOURS_PER_DAY * ONE_HOUR_MS;
export class MemoryBanksPaletteElement extends CrLitElement {
    static get is() {
        return 'memory-banks-palette';
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
            collections: { type: Array },
            tags: { type: Array },
            displayedItems: { type: Array },
            searchQuery: { type: String },
            filterType: { type: String },
            attachedFilesMap: { type: Object },
            expandedIndex: { type: Number },
            toastMessage: { type: String },
            toastSubtitle: { type: String },
            toastDuration: { type: Number },
            toastIsError: { type: Boolean },
        };
    }
    #entries_accessor_storage = [];
    get entries() { return this.#entries_accessor_storage; }
    set entries(value) { this.#entries_accessor_storage = value; }
    #collections_accessor_storage = [];
    get collections() { return this.#collections_accessor_storage; }
    set collections(value) { this.#collections_accessor_storage = value; }
    #tags_accessor_storage = [];
    get tags() { return this.#tags_accessor_storage; }
    set tags(value) { this.#tags_accessor_storage = value; }
    #displayedItems_accessor_storage = [];
    get displayedItems() { return this.#displayedItems_accessor_storage; }
    set displayedItems(value) { this.#displayedItems_accessor_storage = value; }
    #searchQuery_accessor_storage = '';
    get searchQuery() { return this.#searchQuery_accessor_storage; }
    set searchQuery(value) { this.#searchQuery_accessor_storage = value; }
    #filterType_accessor_storage = 'all';
    get filterType() { return this.#filterType_accessor_storage; }
    set filterType(value) { this.#filterType_accessor_storage = value; }
    #attachedFilesMap_accessor_storage = new Map();
    get attachedFilesMap() { return this.#attachedFilesMap_accessor_storage; }
    set attachedFilesMap(value) { this.#attachedFilesMap_accessor_storage = value; }
    #expandedIndex_accessor_storage = -1;
    get expandedIndex() { return this.#expandedIndex_accessor_storage; }
    set expandedIndex(value) { this.#expandedIndex_accessor_storage = value; }
    #toastMessage_accessor_storage = '';
    get toastMessage() { return this.#toastMessage_accessor_storage; }
    set toastMessage(value) { this.#toastMessage_accessor_storage = value; }
    #toastSubtitle_accessor_storage = '';
    get toastSubtitle() { return this.#toastSubtitle_accessor_storage; }
    set toastSubtitle(value) { this.#toastSubtitle_accessor_storage = value; }
    #toastDuration_accessor_storage = COPY_TOAST_DURATION_MS;
    get toastDuration() { return this.#toastDuration_accessor_storage; }
    set toastDuration(value) { this.#toastDuration_accessor_storage = value; }
    #toastIsError_accessor_storage = false;
    get toastIsError() { return this.#toastIsError_accessor_storage; }
    set toastIsError(value) { this.#toastIsError_accessor_storage = value; }
    isClipboardOperationPending = false;
    listenerIds = [];
    sortedCollections = [];
    sortedTags = [];
    sortedEntries = [];
    entriesByCollection = new Map();
    entriesByTag = new Map();
    rtf = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto', style: 'short' });
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = browserProxyFactory.getInstance().callbackRouter;
        this.listenerIds.push(callbackRouter.onMemoryBankEntryAdded.addListener((entry) => {
            this.entries = [
                entry,
                ...this.entries.filter(existing => existing.id !== entry.id),
            ];
            this.fetchCollectionsAndTags();
        }), callbackRouter.onMemoryBankEntryUpdated.addListener((id, annotations) => {
            this.entries = this.entries.map(existing => existing.id === id ? {
                ...existing,
                collection: annotations.collection,
                note: annotations.note,
                tags: annotations.tags ?? [],
            } :
                existing);
            this.fetchCollectionsAndTags();
        }), callbackRouter.onMemoryBankEntriesDeleted.addListener((ids) => {
            const deletedIds = new Set(ids);
            this.entries =
                this.entries.filter(entry => !deletedIds.has(entry.id));
            this.fetchCollectionsAndTags();
        }));
        this.fetchData();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const callbackRouter = browserProxyFactory.getInstance().callbackRouter;
        this.listenerIds.forEach(id => callbackRouter.removeListener(id));
        this.listenerIds = [];
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('entries') ||
            changedProperties.has('collections') || changedProperties.has('tags')) {
            this.updateCachedEntryStructures();
        }
        if (changedProperties.has('searchQuery') ||
            changedProperties.has('filterType') ||
            changedProperties.has('entries') ||
            changedProperties.has('collections') || changedProperties.has('tags')) {
            this.expandedIndex = -1;
            this.displayedItems = this.computeDisplayedItems();
        }
    }
    async fetchData() {
        const proxy = browserProxyFactory.getInstance().handler;
        const [{ entries }, { collections }, { tags }] = await Promise.all([
            proxy.getAllMemoryBankEntries(),
            proxy.getAllMemoryBankCollections(),
            proxy.getAllMemoryBankTags(),
        ]);
        this.entries = entries || [];
        this.collections = collections || [];
        this.tags = tags || [];
    }
    async fetchCollectionsAndTags() {
        const proxy = browserProxyFactory.getInstance().handler;
        const [{ collections }, { tags }] = await Promise.all([
            proxy.getAllMemoryBankCollections(),
            proxy.getAllMemoryBankTags(),
        ]);
        this.collections = collections || [];
        this.tags = tags || [];
    }
    // TODO(crbug.com/574624499): Move #tag shorthand parsing into
    // parseSearchQuery() in memory_banks_search.ts so it is unified across all
    // search interfaces.
    parsePaletteSearchQuery(rawQuery) {
        const parsed = parseSearchQuery(rawQuery);
        const remainingFreeform = [];
        for (const term of parsed.freeform) {
            if (term.startsWith('#')) {
                parsed.tag.push(term.slice(1));
            }
            else {
                remainingFreeform.push(term);
            }
        }
        parsed.freeform = remainingFreeform;
        return parsed;
    }
    formatRelativeTime(mojoTime) {
        const date = convertMojoTimeToDate(mojoTime);
        if (!date) {
            return '';
        }
        const diffMs = date.getTime() - Date.now();
        const diffMins = Math.round(diffMs / ONE_MINUTE_MS);
        if (Math.abs(diffMins) < 1) {
            return 'Just now';
        }
        if (Math.abs(diffMins) < MINUTES_PER_HOUR) {
            return this.rtf.format(diffMins, 'minute');
        }
        const diffHours = Math.round(diffMs / ONE_HOUR_MS);
        if (Math.abs(diffHours) < HOURS_PER_DAY) {
            return this.rtf.format(diffHours, 'hour');
        }
        const diffDays = Math.round(diffMs / ONE_DAY_MS);
        if (Math.abs(diffDays) < DAYS_PER_WEEK) {
            return this.rtf.format(diffDays, 'day');
        }
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }
    updateCachedEntryStructures() {
        // Sort collections alphabetically (A-Z).
        this.sortedCollections = [...this.collections].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));
        // Sort tags alphabetically (A-Z).
        this.sortedTags = [...this.tags].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));
        // Sort entries newest first (descending timestamp).
        this.sortedEntries = [...this.entries].sort((a, b) => {
            const timeA = a.timestamp?.internalValue ?? 0n;
            const timeB = b.timestamp?.internalValue ?? 0n;
            return timeB > timeA ? 1 : (timeB < timeA ? -1 : 0);
        });
        // Build lookup maps keyed by lowercase collection and tag names.
        this.entriesByCollection = new Map();
        this.entriesByTag = new Map();
        for (const entry of this.sortedEntries) {
            if (entry.collection) {
                const colKey = entry.collection.toLowerCase();
                const colList = this.entriesByCollection.get(colKey);
                if (colList) {
                    colList.push(entry);
                }
                else {
                    this.entriesByCollection.set(colKey, [entry]);
                }
            }
            if (entry.tags) {
                const seenTagKeys = new Set();
                for (const tag of entry.tags) {
                    const tagKey = tag.toLowerCase();
                    if (seenTagKeys.has(tagKey)) {
                        continue;
                    }
                    seenTagKeys.add(tagKey);
                    const tagList = this.entriesByTag.get(tagKey);
                    if (tagList) {
                        tagList.push(entry);
                    }
                    else {
                        this.entriesByTag.set(tagKey, [entry]);
                    }
                }
            }
        }
    }
    computeDisplayedItems() {
        const queryLower = this.searchQuery.trim().toLowerCase();
        const hasSearch = queryLower.length > 0;
        const items = [];
        // 1. Collections (alphabetical A-Z)
        if (this.filterType === 'all' || this.filterType === 'collections') {
            for (const col of this.sortedCollections) {
                const colLower = col.toLowerCase();
                if (!hasSearch || colLower.includes(queryLower)) {
                    const entries = this.entriesByCollection.get(colLower) ?? [];
                    items.push({
                        id: `col-${col}`,
                        type: 'collection',
                        title: col,
                        snippet: `${entries.length} ${entries.length === 1 ? 'memory' : 'memories'} in collection`,
                        collection: col,
                        tags: [],
                        url: '',
                        entries,
                    });
                }
            }
        }
        // 2. Tags (alphabetical A-Z)
        if (this.filterType === 'all' || this.filterType === 'tags') {
            for (const tag of this.sortedTags) {
                const tagLower = tag.toLowerCase();
                if (!hasSearch || `#${tagLower}`.includes(queryLower)) {
                    const entries = this.entriesByTag.get(tagLower) ?? [];
                    items.push({
                        id: `tag-${tag}`,
                        type: 'tag',
                        title: `#${tag}`,
                        snippet: `${entries.length} ${entries.length === 1 ? 'memory' : 'memories'} tagged`,
                        collection: '',
                        tags: [tag],
                        url: '',
                        entries,
                    });
                }
            }
        }
        // 3. Individual Memories (recent date, newest first)
        if (this.filterType === 'all' || this.filterType === 'memories') {
            const parsedQuery = this.parsePaletteSearchQuery(queryLower);
            const entriesToRender = hasSearch ?
                this.sortedEntries.filter(e => matchesMemoryBankEntry(e, parsedQuery)) :
                this.sortedEntries;
            for (const entry of entriesToRender) {
                const snippet = entry.selectedText && entry.note ?
                    `${entry.selectedText}\nNote: ${entry.note}` :
                    (entry.selectedText || entry.note || '');
                items.push({
                    id: `mem-${entry.id}`,
                    type: 'memory',
                    title: entry.tabTitle || 'Untitled Memory',
                    snippet,
                    collection: entry.collection || '',
                    tags: entry.tags || [],
                    url: entry.url || '',
                    relativeTime: this.formatRelativeTime(entry.timestamp),
                    entries: [entry],
                });
            }
        }
        return items;
    }
    onFilterAllClick() {
        this.filterType = 'all';
    }
    onFilterCollectionsClick() {
        this.filterType = 'collections';
    }
    onFilterTagsClick() {
        this.filterType = 'tags';
    }
    onFilterMemoriesClick() {
        this.filterType = 'memories';
    }
    getItemFromEvent(e) {
        const indexStr = e.currentTarget.dataset['index'];
        return indexStr !== undefined ? this.displayedItems[Number(indexStr)] :
            undefined;
    }
    onCopyClick(e) {
        const item = this.getItemFromEvent(e);
        if (item) {
            this.copyItem(item);
        }
    }
    onAttachClick(e) {
        const item = this.getItemFromEvent(e);
        if (item) {
            this.attachItem(item);
        }
    }
    isHttpOrHttpsUrl(urlStr) {
        if (!urlStr) {
            return false;
        }
        try {
            const { protocol } = new URL(urlStr);
            return protocol === 'http:' || protocol === 'https:';
        }
        catch {
            return false;
        }
    }
    async onOpenSourceClick(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const url = target.dataset['url'];
        if (!url || !this.isHttpOrHttpsUrl(url)) {
            return;
        }
        await browserProxyFactory.getInstance().handler.openWebUrl(url);
        window.close();
    }
    onTogglePreviewClick(e) {
        e.stopPropagation();
        const target = e.currentTarget;
        const indexStr = target.dataset['index'];
        if (indexStr !== undefined) {
            const index = Number(indexStr);
            this.expandedIndex = this.expandedIndex === index ? -1 : index;
        }
    }
    shouldShowPreviewToggle(snippet) {
        return !!snippet &&
            (snippet.length > SNIPPET_PREVIEW_CHAR_THRESHOLD ||
                snippet.includes('\n'));
    }
    onSearchChanged(e) {
        this.searchQuery = e.detail;
    }
    onCloseClick() {
        window.close();
    }
    async onSettingsClick() {
        await browserProxyFactory.getInstance().handler.openContextHubPage();
        window.close();
    }
    isItemAttached(id) {
        return this.attachedFilesMap.has(id);
    }
    getPasteShortcut() {
        return isMac ? 'Cmd+V' : 'Ctrl+V';
    }
    getEmptyStateTitle() {
        if (this.searchQuery.trim()) {
            return 'No matching items found';
        }
        if (this.filterType === 'collections') {
            return 'No collections saved yet';
        }
        if (this.filterType === 'tags') {
            return 'No tags saved yet';
        }
        return 'No memories saved yet';
    }
    getEmptyStateSubtitle() {
        if (this.searchQuery.trim()) {
            return 'Try searching with different keywords, #tags, or collections.';
        }
        if (this.filterType === 'collections') {
            return 'Assign a collection when saving a memory to organize your bank.';
        }
        if (this.filterType === 'tags') {
            return 'Add #tags when saving a memory to categorize your bank.';
        }
        return 'Select text on any page and right click "Save to Memory" ' +
            'to start building your bank.';
    }
    getHostname(urlStr) {
        try {
            const url = new URL(urlStr);
            return url.hostname.replace(/^www\./, '');
        }
        catch {
            return urlStr;
        }
    }
    async showToastNotification(message, subtitle, durationMs, isError = false) {
        this.toastMessage = message;
        this.toastSubtitle = subtitle;
        this.toastDuration = durationMs;
        this.toastIsError = isError;
        await this.updateComplete;
        const toast = this.shadowRoot?.querySelector('#toast');
        toast?.show();
    }
    async copyItem(item) {
        if (this.isClipboardOperationPending) {
            return;
        }
        this.isClipboardOperationPending = true;
        try {
            const payload = formatEntriesAsMarkdown(item.entries);
            await navigator.clipboard.writeText(payload);
            this.attachedFilesMap = new Map();
            await this.showToastNotification('Copied to clipboard.', '', COPY_TOAST_DURATION_MS);
        }
        catch (err) {
            console.error('Failed to copy to clipboard', err);
            await this.showToastNotification('Failed to copy to clipboard.', '', COPY_TOAST_DURATION_MS, 
            /*isError=*/ true);
        }
        finally {
            this.isClipboardOperationPending = false;
        }
    }
    buildFileAttachment(item) {
        // Keeps only letters, accents, numbers, underscores, hyphens, and spaces,
        // then replaces spaces with '_'. For example:
        // - chromium: docs! -> chromium_docs
        // - página! -> página
        const cleanedTitle = item.title.replace(/[^\p{L}\p{M}\p{N}_\-\s]/gu, '')
            .trim()
            .replace(/\s+/g, '_');
        const safeTitle = Array.from(cleanedTitle)
            .slice(0, MAX_FILENAME_CHARS)
            .join('')
            .replace(/_+$/, '') ||
            'memory';
        const prefix = item.type === 'memory' ?
            '' :
            `${item.type === 'collection' ? 'Collection' : 'Tag'}_`;
        return {
            filename: `${prefix}${safeTitle}.md`,
            content: formatEntriesAsMarkdown(item.entries),
        };
    }
    async attachItem(item) {
        if (this.isClipboardOperationPending) {
            return;
        }
        const isRemoving = this.attachedFilesMap.has(item.id);
        if (!isRemoving && this.attachedFilesMap.size >= MAX_ATTACHED_FILES) {
            await this.showToastNotification(`Maximum of ${MAX_ATTACHED_FILES} files can be attached.`, '', ATTACH_TOAST_DURATION_MS, /*isError=*/ true);
            return;
        }
        this.isClipboardOperationPending = true;
        try {
            const nextFilesMap = new Map(this.attachedFilesMap);
            if (isRemoving) {
                nextFilesMap.delete(item.id);
            }
            else {
                nextFilesMap.set(item.id, this.buildFileAttachment(item));
            }
            if (nextFilesMap.size === 0) {
                await this.clearAllAttachments();
                return;
            }
            await this.syncAttachmentsToClipboard(nextFilesMap, isRemoving);
        }
        catch (err) {
            console.error('Failed to copy as file attachment', err);
            const errorMsg = isRemoving ? 'Failed to update clipboard.' : 'Failed to attach file.';
            await this.showToastNotification(errorMsg, '', ATTACH_TOAST_DURATION_MS, /*isError=*/ true);
        }
        finally {
            this.isClipboardOperationPending = false;
        }
    }
    async clearAllAttachments() {
        this.attachedFilesMap = new Map();
        try {
            await navigator.clipboard.writeText('');
        }
        catch {
            // Ignore clipboard write failures on clearing.
        }
        await this.showToastNotification('Removed from clipboard.', '', ATTACH_TOAST_DURATION_MS);
    }
    async syncAttachmentsToClipboard(nextFilesMap, isRemoving) {
        const files = Array.from(nextFilesMap.values());
        const { status } = await browserProxyFactory.getInstance()
            .handler.copyAttachmentsToClipboard(files);
        if (status !== CopyAttachmentsToClipboardStatus.kSuccess) {
            const errorMsg = isRemoving ? 'Failed to update clipboard.' : 'Failed to attach file.';
            await this.showToastNotification(errorMsg, '', ATTACH_TOAST_DURATION_MS, /*isError=*/ true);
            return;
        }
        this.attachedFilesMap = nextFilesMap;
        await this.showAttachmentSuccessToast(files.length, isRemoving);
    }
    async showAttachmentSuccessToast(count, isRemoving) {
        const shortcut = this.getPasteShortcut();
        if (isRemoving) {
            await this.showToastNotification('Removed from clipboard.', `${count} ${count === 1 ? 'file' : 'files'} remaining - ${shortcut} to paste`, ATTACH_TOAST_DURATION_MS);
            return;
        }
        if (count > 1) {
            await this.showToastNotification('Attached.', `${count} files on clipboard - ${shortcut} to paste`, ATTACH_TOAST_DURATION_MS);
            return;
        }
        await this.showToastNotification('Attached as file.', `Press ${shortcut} in page to paste.`, ATTACH_TOAST_DURATION_MS);
    }
}
customElements.define(MemoryBanksPaletteElement.is, MemoryBanksPaletteElement);
