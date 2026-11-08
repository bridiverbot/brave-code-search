// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '/strings.m.js';
import { getCss as getSharedStyleCss } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { highlightUpdatedItems, trackUpdatedItems } from './api_listener.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { MAX_BOOKMARK_INPUT_LENGTH } from './constants.js';
import { DialogFocusManager } from './dialog_focus_manager.js';
import { getHtml } from './edit_dialog.html.js';
export class BookmarksEditDialogElement extends CrLitElement {
    static get is() {
        return 'bookmarks-edit-dialog';
    }
    static get styles() {
        return getSharedStyleCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isFolder_: { type: Boolean },
            isEdit_: { type: Boolean },
            /**
             * Item that is being edited, or null when adding.
             */
            editItem_: { type: Object },
            /**
             * Parent node for the item being added, or null when editing.
             */
            parentId_: { type: String },
            titleValue_: { type: String },
            urlValue_: { type: String },
        };
    }
    #isFolder__accessor_storage = false;
    get isFolder_() { return this.#isFolder__accessor_storage; }
    set isFolder_(value) { this.#isFolder__accessor_storage = value; }
    #isEdit__accessor_storage = false;
    get isEdit_() { return this.#isEdit__accessor_storage; }
    set isEdit_(value) { this.#isEdit__accessor_storage = value; }
    #editItem__accessor_storage = null;
    get editItem_() { return this.#editItem__accessor_storage; }
    set editItem_(value) { this.#editItem__accessor_storage = value; }
    #parentId__accessor_storage = null;
    get parentId_() { return this.#parentId__accessor_storage; }
    set parentId_(value) { this.#parentId__accessor_storage = value; }
    #titleValue__accessor_storage = '';
    get titleValue_() { return this.#titleValue__accessor_storage; }
    set titleValue_(value) { this.#titleValue__accessor_storage = value; }
    #urlValue__accessor_storage = '';
    get urlValue_() { return this.#urlValue__accessor_storage; }
    set urlValue_(value) { this.#urlValue__accessor_storage = value; }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const urlInput = this.$.url;
        const nameInput = this.$.name;
        // Intercept paste for the URL and name textfields
        // provide sanitized clipboard text
        urlInput.addEventListener('paste', this.onPaste_.bind(this, urlInput));
        nameInput.addEventListener('paste', this.onPaste_.bind(this, nameInput));
    }
    onPaste_(inputComponent, e) {
        const text = e.clipboardData?.getData('text/plain');
        if (!text) {
            return;
        }
        // Limit to 500KB to match Chrome address bar (Omnibox) behavior and
        // prevent performance issues with extremely long strings.
        if (text.length <= MAX_BOOKMARK_INPUT_LENGTH) {
            return;
        }
        e.preventDefault();
        const truncated = text.substring(0, MAX_BOOKMARK_INPUT_LENGTH);
        // Insert the truncated text using setRangeText, which is the modern
        // replacement for execCommand('insertText').
        // Note: This may not preserve the undo history as robustly as execCommand
        // in all cases, but it is the standard API.
        const input = inputComponent.inputElement;
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        input.setRangeText(truncated, start, end, 'end');
        // Manually trigger input/change events so cr-input updates its value.
        input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    }
    /**
     * Show the dialog to add a new folder (if |isFolder|) or item, which will be
     * inserted into the tree as a child of |parentId|.
     */
    showAddDialog(isFolder, parentId) {
        this.reset_();
        this.isEdit_ = false;
        this.isFolder_ = isFolder;
        this.parentId_ = parentId;
        DialogFocusManager.getInstance().showDialog(this.$.dialog);
    }
    /** Show the edit dialog for |editItem|. */
    showEditDialog(editItem) {
        this.reset_();
        this.isEdit_ = true;
        this.isFolder_ = !editItem.url;
        this.editItem_ = editItem;
        this.titleValue_ = editItem.title;
        if (!this.isFolder_) {
            assert(editItem.url);
            this.urlValue_ = editItem.url;
        }
        DialogFocusManager.getInstance().showDialog(this.$.dialog);
    }
    /**
     * Clear out existing values from the dialog, allowing it to be reused.
     */
    reset_() {
        this.editItem_ = null;
        this.parentId_ = null;
        this.$.url.invalid = false;
        this.titleValue_ = '';
        this.urlValue_ = '';
    }
    getDialogTitle_() {
        let title;
        if (this.isEdit_) {
            title = this.isFolder_ ? 'renameFolderTitle' : 'editBookmarkTitle';
        }
        else {
            title = this.isFolder_ ? 'addFolderTitle' : 'addBookmarkTitle';
        }
        return loadTimeData.getString(title);
    }
    onTitleValueChanged_(e) {
        this.titleValue_ = e.detail.value;
    }
    onUrlValueChanged_(e) {
        this.urlValue_ = e.detail.value;
    }
    /**
     * Validates the value of the URL field, returning true if it is a valid URL.
     * May modify the value by prepending 'http://' in order to make it valid.
     * Note: Made public only for the purposes of testing.
     */
    validateUrl() {
        const urlInput = this.$.url;
        // Early check for URL length
        // avoid performance issues with extremely long URLs.
        // Limit to 500KB to match Chrome address bar (Omnibox) behavior.
        if (this.urlValue_.length > MAX_BOOKMARK_INPUT_LENGTH) {
            return false;
        }
        if (urlInput.validate()) {
            return true;
        }
        const originalValue = this.urlValue_;
        this.urlValue_ = 'http://' + originalValue;
        // Force an update to propagate this to the cr-input synchronously. This is
        // not best for performance, but validate() already forces an update to
        // the cr-input by calling performUpdate() on that element below, and this
        // method is not expected to be frequently called.
        this.performUpdate();
        if (urlInput.validate()) {
            return true;
        }
        this.urlValue_ = originalValue;
        return false;
    }
    onSaveButtonClick_() {
        const edit = {
            'title': this.titleValue_.substring(0, MAX_BOOKMARK_INPUT_LENGTH),
        };
        if (!this.isFolder_) {
            if (!this.validateUrl()) {
                return;
            }
            edit['url'] = this.urlValue_;
        }
        if (this.isEdit_) {
            BookmarksApiProxyImpl.getInstance().update(this.editItem_.id, edit);
        }
        else {
            trackUpdatedItems();
            // Editable nodes all have parents. The only nodes that do not have
            // parents are permanent nodes, which are not editable.
            assert(this.parentId_ !== null);
            BookmarksApiProxyImpl.getInstance()
                .create(this.parentId_, null, edit.title, edit.url)
                .then(highlightUpdatedItems);
        }
        this.$.dialog.close();
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(BookmarksEditDialogElement.is, BookmarksEditDialogElement);
