// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory } from '../context_hub.mojom-webui.js';
import { getCss } from './memory_banks_edit_dialog.css.js';
import { getHtml } from './memory_banks_edit_dialog.html.js';
export class MemoryBanksEditDialogElement extends CrLitElement {
    static get is() {
        return 'memory-banks-edit-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entry: { type: Object },
            availableCollections: { type: Array },
            availableTags: { type: Array },
            editCollection_: { type: String, state: true },
            editNote_: { type: String, state: true },
            editTags_: { type: Array, state: true },
            highlightedTagIndex_: { type: Number, state: true },
            isAddingCollection_: { type: Boolean, state: true },
            newCollectionInput_: { type: String, state: true },
            isCreatingTag_: { type: Boolean, state: true },
            newTagInput_: { type: String, state: true },
        };
    }
    #entry_accessor_storage = null;
    // Public Properties
    get entry() { return this.#entry_accessor_storage; }
    set entry(value) { this.#entry_accessor_storage = value; }
    #availableCollections_accessor_storage = [];
    get availableCollections() { return this.#availableCollections_accessor_storage; }
    set availableCollections(value) { this.#availableCollections_accessor_storage = value; }
    #availableTags_accessor_storage = [];
    get availableTags() { return this.#availableTags_accessor_storage; }
    set availableTags(value) { this.#availableTags_accessor_storage = value; }
    #editCollection__accessor_storage = '';
    // Internal Form State
    get editCollection_() { return this.#editCollection__accessor_storage; }
    set editCollection_(value) { this.#editCollection__accessor_storage = value; }
    #isAddingCollection__accessor_storage = false;
    get isAddingCollection_() { return this.#isAddingCollection__accessor_storage; }
    set isAddingCollection_(value) { this.#isAddingCollection__accessor_storage = value; }
    #newCollectionInput__accessor_storage = '';
    get newCollectionInput_() { return this.#newCollectionInput__accessor_storage; }
    set newCollectionInput_(value) { this.#newCollectionInput__accessor_storage = value; }
    #editTags__accessor_storage = [];
    get editTags_() { return this.#editTags__accessor_storage; }
    set editTags_(value) { this.#editTags__accessor_storage = value; }
    #isCreatingTag__accessor_storage = false;
    get isCreatingTag_() { return this.#isCreatingTag__accessor_storage; }
    set isCreatingTag_(value) { this.#isCreatingTag__accessor_storage = value; }
    #newTagInput__accessor_storage = '';
    get newTagInput_() { return this.#newTagInput__accessor_storage; }
    set newTagInput_(value) { this.#newTagInput__accessor_storage = value; }
    #highlightedTagIndex__accessor_storage = -1;
    get highlightedTagIndex_() { return this.#highlightedTagIndex__accessor_storage; }
    set highlightedTagIndex_(value) { this.#highlightedTagIndex__accessor_storage = value; }
    #editNote__accessor_storage = '';
    get editNote_() { return this.#editNote__accessor_storage; }
    set editNote_(value) { this.#editNote__accessor_storage = value; }
    // Lifecycle
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('entry') && this.entry) {
            this.editCollection_ = this.entry.collection || '';
            this.editNote_ = this.entry.note || '';
            this.editTags_ = this.entry.tags ? [...this.entry.tags] : [];
            this.isAddingCollection_ = false;
            this.newCollectionInput_ = '';
            this.isCreatingTag_ = false;
            this.newTagInput_ = '';
            this.highlightedTagIndex_ = -1;
        }
    }
    // Dialog Action Handlers
    onDialogClose_() {
        this.fire('close');
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    async onSaveClick_() {
        if (!this.entry) {
            return;
        }
        const id = this.entry.id;
        const collection = (this.isAddingCollection_ && this.newCollectionInput_.trim() ?
            this.newCollectionInput_ :
            this.editCollection_)
            .trim() ||
            null;
        const note = this.editNote_.trim() || null;
        if (this.isCreatingTag_ && this.newTagInput_.trim()) {
            this.selectTag_(this.newTagInput_);
        }
        const tags = [...this.editTags_];
        const { success } = await browserProxyFactory.getInstance()
            .handler.updateMemoryBankEntryAnnotations(id, {
            note,
            collection,
            tags: tags.length > 0 ? tags : null,
        });
        if (success) {
            this.$.dialog.close();
        }
    }
    // Collection Section Handlers & Helpers
    // TODO(crbug.com/523377643): A lot of the tag and collection suggestion
    // and management logic here is similar to save_to_memory_bank.ts.
    // We should refactor both to share common components.
    getEditDialogCollections_() {
        const set = new Set(this.availableCollections);
        if (this.editCollection_) {
            set.add(this.editCollection_);
        }
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }
    onEditCollectionChange_(e) {
        this.editCollection_ = e.target.value;
    }
    onAddCollectionClick_() {
        this.isAddingCollection_ = !this.isAddingCollection_;
        this.newCollectionInput_ = '';
    }
    onNewCollectionInputValueChanged_(e) {
        this.newCollectionInput_ = e.detail.value;
    }
    onNewCollectionInputKeydown_(e) {
        if (e.key === 'Enter' && this.newCollectionInput_.trim()) {
            this.editCollection_ = this.newCollectionInput_.trim();
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            this.isAddingCollection_ = false;
            this.newCollectionInput_ = '';
        }
    }
    // Tag Section Handlers & Helpers
    getFilteredTags_() {
        const unselected = this.availableTags.filter(t => !this.editTags_.some(tag => tag.toLowerCase() === t.toLowerCase()));
        const query = this.newTagInput_.trim().toLowerCase();
        if (!query) {
            return unselected.sort((a, b) => a.localeCompare(b));
        }
        const filtered = unselected.filter(t => t.toLowerCase().includes(query));
        return filtered.sort((a, b) => {
            const aStarts = a.toLowerCase().startsWith(query);
            const bStarts = b.toLowerCase().startsWith(query);
            if (aStarts && !bStarts) {
                return -1;
            }
            if (!aStarts && bStarts) {
                return 1;
            }
            return a.localeCompare(b);
        });
    }
    selectTag_(tag) {
        const trimmed = tag.trim();
        if (trimmed &&
            !this.editTags_.some(t => t.toLowerCase() === trimmed.toLowerCase())) {
            this.editTags_ = [...this.editTags_, trimmed];
        }
        this.newTagInput_ = '';
        this.isCreatingTag_ = false;
        this.highlightedTagIndex_ = -1;
    }
    async onAddTagClick_() {
        this.isCreatingTag_ = true;
        this.newTagInput_ = '';
        this.highlightedTagIndex_ = -1;
        await this.updateComplete;
        this.shadowRoot?.querySelector('.tag-input')?.focus();
    }
    onRemoveTagClick_(e) {
        const tag = e.currentTarget.dataset['tag'];
        this.editTags_ = this.editTags_.filter(t => t !== tag);
    }
    onTagSuggestionMousedown_(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const tag = target.dataset['tag'];
        if (tag) {
            this.selectTag_(tag);
        }
    }
    onNewTagInputValueChanged_(e) {
        this.newTagInput_ = e.detail.value;
        this.highlightedTagIndex_ = -1;
    }
    async onNewTagInputKeydown_(e) {
        const suggestions = this.getFilteredTags_();
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (suggestions.length > 0) {
                this.highlightedTagIndex_ =
                    (this.highlightedTagIndex_ + 1) % suggestions.length;
                await this.updateComplete;
                this.shadowRoot?.querySelector('.suggestion-item.highlighted')
                    ?.scrollIntoView({ block: 'nearest' });
            }
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (suggestions.length > 0) {
                this.highlightedTagIndex_ = this.highlightedTagIndex_ <= 0 ?
                    suggestions.length - 1 :
                    this.highlightedTagIndex_ - 1;
                await this.updateComplete;
                this.shadowRoot?.querySelector('.suggestion-item.highlighted')
                    ?.scrollIntoView({ block: 'nearest' });
            }
        }
        else if (e.key === 'Enter') {
            e.preventDefault();
            if (this.highlightedTagIndex_ >= 0 &&
                this.highlightedTagIndex_ < suggestions.length) {
                this.selectTag_(suggestions[this.highlightedTagIndex_] || '');
            }
            else {
                const val = this.newTagInput_.trim();
                if (val) {
                    this.selectTag_(val);
                }
                else {
                    this.isCreatingTag_ = false;
                    this.newTagInput_ = '';
                    this.highlightedTagIndex_ = -1;
                }
            }
        }
        else if (e.key === 'Escape') {
            e.preventDefault();
            this.isCreatingTag_ = false;
            this.newTagInput_ = '';
            this.highlightedTagIndex_ = -1;
        }
    }
    onNewTagBlur_() {
        if (this.isCreatingTag_) {
            const val = this.newTagInput_.trim();
            if (val) {
                this.selectTag_(val);
            }
            else {
                this.isCreatingTag_ = false;
                this.newTagInput_ = '';
                this.highlightedTagIndex_ = -1;
            }
        }
    }
    // Note Section Handlers
    onEditNoteValueChanged_(e) {
        this.editNote_ = e.detail.value;
    }
}
customElements.define(MemoryBanksEditDialogElement.is, MemoryBanksEditDialogElement);
