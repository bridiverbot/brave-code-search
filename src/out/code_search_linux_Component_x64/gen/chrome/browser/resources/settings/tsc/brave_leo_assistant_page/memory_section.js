/* Copyright (c) 2025 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { BaseMixin } from '../base_mixin.js';
import { CustomizationOperationError } from '../customization_settings.mojom-webui.js';
import { MAX_MEMORY_RECORD_LENGTH } from '../ai_chat.mojom-webui.js';
import { BraveLeoAssistantBrowserProxyImpl } from './brave_leo_assistant_browser_proxy.js';
import { getTemplate } from './memory_section.html.js';
const MemorySectionBase = PrefServiceObserverMixin(I18nMixin(BaseMixin(PolymerElement)));
class MemorySection extends MemorySectionBase {
    static get is() {
        return 'memory-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            memoriesList_: {
                type: Array,
                value: []
            },
            editingMemoryItem_: {
                type: String,
                value: null
            },
            showMemoryDialog_: {
                type: Boolean,
                value: false
            },
            editingMemory_: {
                type: String,
                value: ''
            },
            isMemoryInputValid_: {
                type: Boolean,
                computed: 'computeMemoryInputValid_(editingMemory_)'
            },
            showDeleteDialog_: {
                type: Boolean,
                value: false
            },
            deleteMemoryItem_: {
                type: String,
                value: null
            },
            showDeleteAllDialog_: {
                type: Boolean,
                value: false
            },
            searchQuery_: {
                type: String,
                value: ''
            },
            userMemoryEnabledPref_: Object,
        };
    }
    browserProxy_ = BraveLeoAssistantBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('brave.ai_chat.user_memory_enabled', 'userMemoryEnabledPref_');
    }
    ready() {
        super.ready();
        this.loadMemories_();
        this.setupCallbacks_();
    }
    setupCallbacks_() {
        const callbackRouter = this.browserProxy_.getCustomizationSettingsCallbackRouter();
        callbackRouter.onMemoriesChanged.addListener((memories) => {
            this.memoriesList_ = [...memories];
        });
    }
    loadMemories_() {
        const handler = this.browserProxy_.getCustomizationSettingsHandler();
        handler.getMemories().then((result) => {
            this.memoriesList_ = result.memories;
        });
    }
    saveMemory_(memoryItem, oldItem) {
        const handler = this.browserProxy_.getCustomizationSettingsHandler();
        if (!oldItem) {
            // Adding new memory
            handler.addMemory(memoryItem).then((result) => {
                if (result.error) {
                    this.handleMemoryError_(result.error);
                }
            });
        }
        else {
            // Editing existing memory
            handler.editMemory(oldItem, memoryItem).then((result) => {
                if (result.error) {
                    this.handleMemoryError_(result.error);
                }
            });
        }
    }
    handleMemoryError_(error) {
        // Handle different error types
        switch (error) {
            // This is unlikely to happen since we have a length limit in frontend
            // too.
            case CustomizationOperationError.kInvalidLength:
                console.error('Memory input exceeds length limit');
                break;
            // Should be rare, in theory it might happen if memory changes during
            // edit.
            case CustomizationOperationError.kNotFound:
                console.error('Can\'t find the target memory to edit');
                break;
        }
    }
    handleDelete_(e) {
        this.deleteMemoryItem_ = e.model.item;
        this.showDeleteDialog_ = true;
    }
    onDeleteDialogCancel_() {
        this.showDeleteDialog_ = false;
        this.deleteMemoryItem_ = null;
    }
    onDeleteDialogConfirm_() {
        if (this.deleteMemoryItem_) {
            const handler = this.browserProxy_.getCustomizationSettingsHandler();
            handler.deleteMemory(this.deleteMemoryItem_);
        }
        this.showDeleteDialog_ = false;
        this.deleteMemoryItem_ = null;
    }
    handleEdit_(e) {
        this.editingMemoryItem_ = e.model.item;
        this.editingMemory_ = e.model.item || '';
        this.showMemoryDialog_ = true;
    }
    handleAddNewMemory_() {
        this.editingMemoryItem_ = null;
        this.editingMemory_ = '';
        this.showMemoryDialog_ = true;
    }
    isTooLong(text) {
        return text.trim().length > MAX_MEMORY_RECORD_LENGTH;
    }
    onDialogInput_(e) {
        this.editingMemory_ = e.value;
    }
    computeMemoryInputValid_(editingMemory) {
        const trimmedMemory = editingMemory.trim();
        return trimmedMemory.length > 0 && !this.isTooLong(trimmedMemory);
    }
    hasMemories_(memoriesList) {
        return memoriesList.length > 0;
    }
    onDialogSave_() {
        const trimmedMemory = this.editingMemory_.trim();
        this.saveMemory_(trimmedMemory, this.editingMemoryItem_);
        this.showMemoryDialog_ = false;
        this.editingMemoryItem_ = null;
        this.editingMemory_ = '';
    }
    onDialogCancel_() {
        this.showMemoryDialog_ = false;
        this.editingMemoryItem_ = null;
        this.editingMemory_ = '';
    }
    getDialogTitle_(editingMemoryItem) {
        return editingMemoryItem === null
            ? this.i18n('braveLeoAssistantCreateMemoryDialogTitle')
            : this.i18n('braveLeoAssistantEditMemoryDialogTitle');
    }
    handleDeleteAllMemories_() {
        this.showDeleteAllDialog_ = true;
    }
    onDeleteAllDialogCancel_() {
        this.showDeleteAllDialog_ = false;
    }
    onDeleteAllDialogConfirm_() {
        const handler = this.browserProxy_.getCustomizationSettingsHandler();
        handler.deleteAllMemories();
        this.showDeleteAllDialog_ = false;
    }
    onSearchInput_(e) {
        this.searchQuery_ = e.value;
    }
    clearSearch_() {
        this.searchQuery_ = '';
    }
    getFilteredMemories_(memoriesList, searchQuery) {
        if (!searchQuery || !searchQuery.trim()) {
            return memoriesList;
        }
        const query = searchQuery.trim().toLowerCase();
        return memoriesList.filter(memory => memory.toLowerCase().includes(query));
    }
    hasNoSearchResults_(memoriesList, searchQuery) {
        if (!searchQuery || !searchQuery.trim()) {
            return false; // No search query means we're not searching
        }
        // If no memories exist at all, clear search instead of showing "no results"
        if (memoriesList.length === 0) {
            this.searchQuery_ = '';
            return false;
        }
        const filteredResults = this.getFilteredMemories_(memoriesList, searchQuery);
        return filteredResults.length === 0;
    }
    shouldShowMemories_(memoriesList, searchQuery) {
        // Show memories if we have memories AND we're not in the "no results" state
        return this.hasMemories_(memoriesList) &&
            !this.hasNoSearchResults_(memoriesList, searchQuery);
    }
}
customElements.define(MemorySection.is, MemorySection);
