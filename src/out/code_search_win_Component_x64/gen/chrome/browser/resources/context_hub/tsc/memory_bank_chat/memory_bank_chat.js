// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/icons.html.js';
import '/strings.m.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory, ChatRole } from '../context_hub.mojom-webui.js';
import { computeSuggestions, hasEnumerableValues, matchesMemoryBankEntry, parseSearchQuery } from '../memory_banks/memory_banks_search.js';
import { getCss } from './memory_bank_chat.css.js';
import { getHtml } from './memory_bank_chat.html.js';
/**
 * Matches an active '@' mention at the end of the input string. A mention
 * normally ends at the first space, but a quoted phrase keeps it alive so that
 * multi-word values (e.g. '@title:"Hacker News"') can be typed. The closing
 * quote is optional because the mention is re-matched on every keystroke,
 * while the phrase is still being written.
 */
const MENTION_REGEX = /(^|\s)@([^\s@"]*(?:"[^"]*"?)?)$/;
const MAX_SUGGESTED_ENTRIES = 5;
/** Projects a memory entry down to the fields the chat UI displays. */
function toChip(entry) {
    return {
        id: entry.id,
        title: entry.tabTitle?.trim() || 'Untitled memory',
    };
}
/** Returns the qualifier of a 'qualifier:value' string, or null if absent. */
function qualifierOf(text) {
    const colonIndex = text.indexOf(':');
    return colonIndex > 0 ? text.slice(0, colonIndex).toLowerCase().trim() : null;
}
/**
 * Returns whether a mention has entered a qualifier whose values are not drawn
 * from any list, e.g. '@title:'. There is nothing to complete, so its matching
 * entries are offered instead.
 */
function usesFreeTextQualifier(query) {
    const qualifier = qualifierOf(query);
    return qualifier !== null && !hasEnumerableValues(qualifier);
}
/**
 * Returns whether `query` is matched against entries directly, rather than
 * against the values a qualifier can be completed with. That covers freeform
 * text, which has no qualifier, and the free-text qualifiers.
 */
function searchesEntries(query) {
    return qualifierOf(query) === null || usesFreeTextQualifier(query);
}
/**
 * Balances a phrase whose closing quote has not been typed yet. The search
 * tokenizer drops an unterminated quote and splits the phrase into separate
 * terms, which would leave '@title:"Hacker News' matching nothing until the
 * final quote arrives.
 */
function closeDanglingQuote(query) {
    const quoteCount = (query.match(/"/g) || []).length;
    return quoteCount % 2 === 0 ? query : `${query}"`;
}
export class MemoryBankChatElement extends CrLitElement {
    static get is() {
        return 'memory-bank-chat';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            attachedChips_: { type: Object, state: true },
            availableEntries_: { type: Array, state: true },
            chatHistory_: { type: Array, state: true },
            highlightedMentionIndex_: { type: Number, state: true },
            inputValue_: { type: String, state: true },
            isLoading_: { type: Boolean, state: true },
            mentionQuery_: { type: String, state: true },
            mentionSuggestions_: { type: Array, state: true },
            showMentionMenu_: { type: Boolean, state: true },
        };
    }
    #attachedChips__accessor_storage = new Map();
    get attachedChips_() { return this.#attachedChips__accessor_storage; }
    set attachedChips_(value) { this.#attachedChips__accessor_storage = value; }
    #chatHistory__accessor_storage = [];
    get chatHistory_() { return this.#chatHistory__accessor_storage; }
    set chatHistory_(value) { this.#chatHistory__accessor_storage = value; }
    #highlightedMentionIndex__accessor_storage = 0;
    get highlightedMentionIndex_() { return this.#highlightedMentionIndex__accessor_storage; }
    set highlightedMentionIndex_(value) { this.#highlightedMentionIndex__accessor_storage = value; }
    #inputValue__accessor_storage = '';
    get inputValue_() { return this.#inputValue__accessor_storage; }
    set inputValue_(value) { this.#inputValue__accessor_storage = value; }
    #isLoading__accessor_storage = false;
    get isLoading_() { return this.#isLoading__accessor_storage; }
    set isLoading_(value) { this.#isLoading__accessor_storage = value; }
    #mentionSuggestions__accessor_storage = [];
    get mentionSuggestions_() { return this.#mentionSuggestions__accessor_storage; }
    set mentionSuggestions_(value) { this.#mentionSuggestions__accessor_storage = value; }
    #showMentionMenu__accessor_storage = false;
    get showMentionMenu_() { return this.#showMentionMenu__accessor_storage; }
    set showMentionMenu_(value) { this.#showMentionMenu__accessor_storage = value; }
    #availableEntries__accessor_storage = [];
    get availableEntries_() { return this.#availableEntries__accessor_storage; }
    set availableEntries_(value) { this.#availableEntries__accessor_storage = value; }
    #mentionQuery__accessor_storage = '';
    get mentionQuery_() { return this.#mentionQuery__accessor_storage; }
    set mentionQuery_(value) { this.#mentionQuery__accessor_storage = value; }
    maxChatHistoryTurns_ = loadTimeData.getInteger('kMaxMemoryBankChatHistoryTurns');
    // Derived from availableEntries_; cached because autocomplete reads them on
    // every keystroke.
    allTags_ = [];
    allCollections_ = [];
    connectedCallback() {
        super.connectedCallback();
        this.fetchChatHistory_();
        this.fetchAvailableEntries_();
        document.addEventListener('pointerdown', this.onDocumentPointerDown_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('pointerdown', this.onDocumentPointerDown_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        // These depend only on the entry list, not on the query.
        if (changedPrivateProperties.has('availableEntries_')) {
            this.allTags_ = [
                ...new Set(this.availableEntries_.flatMap(e => e.tags || [])),
            ].sort();
            this.allCollections_ = [
                ...new Set(this.availableEntries_.map(e => e.collection)
                    .filter((c) => !!c)),
            ].sort();
        }
        if (changedPrivateProperties.has('mentionQuery_') ||
            changedPrivateProperties.has('availableEntries_') ||
            changedPrivateProperties.has('attachedChips_') ||
            changedPrivateProperties.has('showMentionMenu_')) {
            this.mentionSuggestions_ =
                this.showMentionMenu_ ? this.computeMentionSuggestions_() : [];
            // The list can shrink without the query changing, e.g. on attach.
            this.highlightedMentionIndex_ = Math.min(this.highlightedMentionIndex_, Math.max(0, this.mentionSuggestions_.length - 1));
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('highlightedMentionIndex_') &&
            this.showMentionMenu_) {
            const highlightedEl = this.shadowRoot?.querySelector('.mention-item.highlighted');
            highlightedEl?.scrollIntoView({ block: 'nearest' });
        }
    }
    trimChatHistory_(history) {
        if (this.maxChatHistoryTurns_ > 0 &&
            history.length > this.maxChatHistoryTurns_) {
            return history.slice(-this.maxChatHistoryTurns_);
        }
        return history;
    }
    appendChatTurn_(role, content, references = []) {
        this.chatHistory_ = this.trimChatHistory_([
            ...this.chatHistory_,
            { role, content, references },
        ]);
        this.scrollToBottom_();
    }
    async fetchChatHistory_() {
        try {
            const { history } = await browserProxyFactory.getInstance()
                .handler.getMemoryBankChatHistory();
            if (history && history.length > 0) {
                this.chatHistory_ = this.trimChatHistory_(history);
                this.scrollToBottom_();
            }
        }
        catch (e) {
            console.error('Failed to load memory bank chat history:', e);
        }
    }
    // TODO(crbug.com/545323764): Improve fetching logic to avoid loading all
    // entries at once.
    async fetchAvailableEntries_() {
        try {
            const { entries } = await browserProxyFactory.getInstance()
                .handler.getAllMemoryBankEntries();
            this.availableEntries_ = entries || [];
        }
        catch (e) {
            console.error('Failed to load available memory bank entries:', e);
        }
    }
    onRemoveAttachedChipClick_(e) {
        const target = e.currentTarget;
        const id = target.dataset['id'];
        if (!id) {
            return;
        }
        const updated = new Map(this.attachedChips_);
        updated.delete(BigInt(id));
        this.attachedChips_ = updated;
    }
    onClearAttachedChipsClick_() {
        this.attachedChips_ = new Map();
    }
    getMentionHeader_() {
        const query = this.mentionQuery_.trim();
        return query ? `Suggestions for "${query}"` : 'Search qualifiers';
    }
    getEntryCountLabel_(count) {
        return `${count} ${count === 1 ? 'entry' : 'entries'}`;
    }
    computeMentionSuggestions_() {
        const rawQuery = this.mentionQuery_.trim();
        return [
            ...this.getQualifierSuggestions_(rawQuery),
            ...this.getMemoryBankEntrySuggestions_(rawQuery),
        ];
    }
    getQualifierSuggestions_(query) {
        // computeSuggestions() answers a typed free-text qualifier with a format
        // reminder, which the search box needs but the menu does not: it lists the
        // entries that qualifier would search instead.
        if (usesFreeTextQualifier(query)) {
            return [];
        }
        const suggestions = computeSuggestions(query, this.allTags_, this.allCollections_);
        const items = [];
        for (const suggestion of suggestions) {
            // computeSuggestions() emits both bare prefixes (e.g. 'tag:') and
            // concrete values (e.g. 'tag:recipes'); only the latter can match
            // entries.
            const item = suggestion.label.endsWith(':') ?
                this.createQualifierPrefixItem_(suggestion) :
                this.createQualifierFilterItem_(suggestion);
            if (item) {
                items.push(item);
            }
        }
        return items;
    }
    /**
     * Returns chips for the entries matching `query` that are not attached yet,
     * so that suggestions only ever offer (and count) memories a selection would
     * add. The query is matched as typed, mid-phrase included.
     */
    findUnattachedChips_(query, limit) {
        const parsed = parseSearchQuery(closeDanglingQuote(query));
        const matches = this.availableEntries_.filter(entry => !this.attachedChips_.has(entry.id) &&
            matchesMemoryBankEntry(entry, parsed));
        const limited = limit === undefined ? matches : matches.slice(0, limit);
        return limited.map(toChip);
    }
    /** Builds a row that completes a bare qualifier, e.g. '@tag:'. */
    createQualifierPrefixItem_(suggestion) {
        return {
            kind: 'qualifier-prefix',
            label: `@${suggestion.label}`,
            mentionText: `@${suggestion.query}`,
            description: suggestion.description,
            chips: [],
        };
    }
    /**
     * Builds a row that attaches every unattached entry matching a concrete
     * filter, e.g. '@tag:recipes'. Returns null when nothing matches, so that
     * filters that would attach nothing are not offered.
     */
    createQualifierFilterItem_(suggestion) {
        const chips = this.findUnattachedChips_(suggestion.query);
        if (chips.length === 0) {
            return null;
        }
        return {
            kind: 'qualifier-filter',
            label: `@${suggestion.label}`,
            mentionText: `@${suggestion.query}`,
            chips,
        };
    }
    /**
     * Suggests individual entries matching `query`, which is either freeform
     * text or a free-text filter. A freeform term matches any field of an entry,
     * while a qualifier such as 'title:' narrows it to that field.
     */
    getMemoryBankEntrySuggestions_(query) {
        if (query.length === 0 || !searchesEntries(query)) {
            return [];
        }
        // A qualifier with no value yet filters nothing, so offer the entries it
        // would search. Passing it through as-is would instead look for the
        // literal text 'title:'.
        const filter = query.endsWith(':') ? '' : query;
        return this.findUnattachedChips_(filter, MAX_SUGGESTED_ENTRIES)
            .map(chip => ({
            kind: 'individual-entry',
            label: chip.title,
            mentionText: `@${chip.title} `,
            chips: [chip],
        }));
    }
    /** Replaces the '@' mention being typed at the end of the input. */
    replaceActiveMention_(replacement) {
        const match = this.inputValue_.match(MENTION_REGEX);
        if (!match || match.index === undefined) {
            return;
        }
        // match[1] is the whitespace before the '@', which must be preserved.
        const mentionStart = match.index + (match[1]?.length ?? 0);
        this.inputValue_ =
            `${this.inputValue_.substring(0, mentionStart)}${replacement}`;
    }
    focusChatInput_() {
        this.shadowRoot?.querySelector('#chat-input')?.focusInput();
    }
    /** Attaches the given context chips, ignoring duplicates. */
    attachChips_(chips) {
        const updated = new Map(this.attachedChips_);
        for (const chip of chips) {
            updated.set(chip.id, chip);
        }
        this.attachedChips_ = updated;
    }
    selectMentionSuggestion_(item) {
        this.replaceActiveMention_(item.mentionText);
        // A bare qualifier completes the prefix only and keeps the menu open so a
        // value can be picked; anything else attaches its chips and closes it.
        const isPrefix = item.kind === 'qualifier-prefix';
        if (isPrefix) {
            this.mentionQuery_ = item.mentionText.slice(1);
        }
        else {
            this.attachChips_(item.chips);
        }
        this.showMentionMenu_ = isPrefix;
        this.highlightedMentionIndex_ = 0;
        this.focusChatInput_();
    }
    /** Returns the suggestion index carried by a mention row's dataset. */
    getMentionItemIndex_(e) {
        const target = e.currentTarget;
        return Number(target.dataset['index']);
    }
    onMentionItemMouseenter_(e) {
        const index = this.getMentionItemIndex_(e);
        if (!isNaN(index)) {
            this.highlightedMentionIndex_ = index;
        }
    }
    onMentionItemClick_(e) {
        const item = this.mentionSuggestions_[this.getMentionItemIndex_(e)];
        if (item) {
            this.selectMentionSuggestion_(item);
        }
    }
    onDocumentPointerDown_ = (e) => {
        const path = e.composedPath();
        const mentionMenu = this.shadowRoot?.querySelector('#mention-menu');
        const chatInput = this.shadowRoot?.querySelector('#chat-input');
        if (this.showMentionMenu_ && mentionMenu && !path.includes(mentionMenu) &&
            chatInput && !path.includes(chatInput)) {
            this.showMentionMenu_ = false;
        }
    };
    onInputValueChanged_(e) {
        this.inputValue_ = e.detail.value;
        const match = this.inputValue_.match(MENTION_REGEX);
        this.showMentionMenu_ = match !== null;
        if (match) {
            // Group 2 is the partial query typed after the '@'.
            this.mentionQuery_ = match[2] ?? '';
            this.highlightedMentionIndex_ = 0;
        }
        else {
            this.mentionQuery_ = '';
        }
    }
    onInputKeydown_(e) {
        if (this.showMentionMenu_ && this.handleMentionMenuKeydown_(e)) {
            return;
        }
        if (e.key === 'Enter' && this.inputValue_.trim().length > 0) {
            this.onSendMessageClick_();
        }
    }
    /**
     * Handles navigation keys while the mention menu is open. Returns whether
     * the key was consumed by the menu; if not, it falls through to the input
     * (e.g. Enter with nothing to select still sends the message).
     */
    handleMentionMenuKeydown_(e) {
        const suggestions = this.mentionSuggestions_;
        switch (e.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                if (suggestions.length === 0) {
                    return false;
                }
                e.preventDefault();
                this.highlightedMentionIndex_ =
                    (this.highlightedMentionIndex_ + (e.key === 'ArrowDown' ? 1 : -1) +
                        suggestions.length) %
                        suggestions.length;
                return true;
            case 'Enter': {
                const selected = suggestions[this.highlightedMentionIndex_];
                if (!selected) {
                    // Nothing to complete: fall through so Enter sends the message,
                    // which closes the menu.
                    return false;
                }
                e.preventDefault();
                this.selectMentionSuggestion_(selected);
                return true;
            }
            case 'Escape':
                e.preventDefault();
                this.showMentionMenu_ = false;
                return true;
            default:
                return false;
        }
    }
    async onSendMessageClick_() {
        if (this.isLoading_) {
            return;
        }
        const command = this.inputValue_.trim();
        if (!command) {
            return;
        }
        const attachedEntryIds = Array.from(this.attachedChips_.keys());
        this.isLoading_ = true;
        this.inputValue_ = '';
        this.showMentionMenu_ = false;
        this.appendChatTurn_(ChatRole.kUser, command);
        try {
            const { response } = await browserProxyFactory.getInstance().handler.askGeminiWithContext(command, attachedEntryIds, /*save_to_history=*/ true);
            const assistantContent = response.content.trim() || 'No response from Gemini.';
            this.appendChatTurn_(ChatRole.kAssistant, assistantContent, response.references);
        }
        catch (e) {
            console.error('Failed to process request with Gemini:', e);
            this.appendChatTurn_(ChatRole.kAssistant, 'Failed to process request with Gemini.');
            if (!this.inputValue_) {
                this.inputValue_ = command;
            }
        }
        finally {
            this.isLoading_ = false;
        }
    }
    async onClearChatHistoryClick_() {
        if (this.isLoading_) {
            return;
        }
        await browserProxyFactory.getInstance()
            .handler.clearMemoryBankChatHistory();
        this.chatHistory_ = [];
        this.attachedChips_ = new Map();
        this.inputValue_ = '';
    }
    async scrollToBottom_() {
        await this.updateComplete;
        const chatMessages = this.shadowRoot?.querySelector('#chat-messages');
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
}
customElements.define(MemoryBankChatElement.is, MemoryBankChatElement);
