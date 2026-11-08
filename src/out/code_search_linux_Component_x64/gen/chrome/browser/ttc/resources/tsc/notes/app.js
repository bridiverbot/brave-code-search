// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserProxy } from './browser_proxy.js';
export class NotesAppElement extends CrLitElement {
    static get is() {
        return 'ai-overlay-notes-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            notes: { type: Array },
        };
    }
    #notes_accessor_storage = [];
    get notes() { return this.#notes_accessor_storage; }
    set notes(value) { this.#notes_accessor_storage = value; }
    browserProxy_ = BrowserProxy.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.fetchNotes_();
    }
    async fetchNotes_() {
        const { notes } = await this.browserProxy_.handler.getRememberedNotes();
        this.notes = notes || [];
    }
    async onNoteValueChange_(e) {
        const input = e.target;
        const key = input.dataset['key'];
        assert(key);
        const value = input.value.trim();
        if (!value) {
            return;
        }
        await this.browserProxy_.handler.setRememberedNote({ key, value });
        this.fetchNotes_();
    }
    async onDeleteNoteClick_(e) {
        const button = e.target;
        const key = button.dataset['key'];
        assert(key);
        await this.browserProxy_.handler.setRememberedNote({ key, value: '' });
        this.fetchNotes_();
    }
    async onAddNoteClick_() {
        const key = this.$.newNoteKey.value.trim();
        const value = this.$.newNoteValue.value.trim();
        if (!key || !value) {
            return;
        }
        await this.browserProxy_.handler.setRememberedNote({ key, value });
        this.$.newNoteKey.value = '';
        this.$.newNoteValue.value = '';
        this.fetchNotes_();
    }
}
customElements.define(NotesAppElement.is, NotesAppElement);
