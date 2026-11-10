// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './key_value_pair_entry.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { parseKeyValuePairEntry } from './key_value_pair_parser.js';
import { getCss } from './key_value_pair_viewer.css.js';
import { getHtml } from './key_value_pair_viewer.html.js';
// Limit file size to 10 MiB to prevent hanging on accidental upload.
const MAX_FILE_SIZE = 10485760;
export class KeyValuePairViewerElement extends CrLitElement {
    static get is() {
        return 'key-value-pair-viewer';
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
            loading: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #loading_accessor_storage = false;
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    #entries_accessor_storage = [];
    get entries() { return this.#entries_accessor_storage; }
    set entries(value) { this.#entries_accessor_storage = value; }
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        // Add event listeners for handling drag and dropping a key value pair file
        // onto the page for viewing.
        this.eventTracker_.add(document.documentElement, 'dragover', this.onDragOver_.bind(this), false);
        this.eventTracker_.add(document.documentElement, 'drop', this.onDrop_.bind(this), false);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    onExpandAllClick_() {
        const entries = this.shadowRoot.querySelectorAll('key-value-pair-entry[collapsed]');
        for (const entry of entries) {
            entry.collapsed = false;
        }
    }
    onCollapseAllClick_() {
        const entries = this.shadowRoot.querySelectorAll('key-value-pair-entry:not([collapsed])');
        for (const entry of entries) {
            entry.collapsed = true;
        }
    }
    onDragOver_(e) {
        e.dataTransfer.dropEffect = 'copy';
        e.preventDefault();
    }
    onDrop_(e) {
        const file = e.dataTransfer.files[0];
        if (file) {
            e.preventDefault();
            this.importEntry_(file);
        }
    }
    /**
     * Read in an entry asynchronously and update the UI if parsing succeeds, or
     * show an error if it fails.
     */
    importEntry_(file) {
        if (!file || file.size > MAX_FILE_SIZE) {
            this.showImportError_(file.name);
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const entry = parseKeyValuePairEntry(reader.result);
            if (entry === null) {
                this.showImportError_(file.name);
                return;
            }
            this.entries = entry;
            // Reset table title and status
            this.$.tableTitle.textContent =
                loadTimeData.getStringF('logFileTableTitle', file.name);
            this.$.status.textContent = '';
        };
        reader.readAsText(file);
    }
    showImportError_(fileName) {
        this.$.status.textContent = loadTimeData.getStringF('parseError', fileName);
    }
}
customElements.define(KeyValuePairViewerElement.is, KeyValuePairViewerElement);
