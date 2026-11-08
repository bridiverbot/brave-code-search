// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory } from './multistep_filter_internals.mojom-webui.js';
const MAX_LOG_ENTRIES = 1000;
function convertMojoTimeToJs(mojoTime) {
    const unixEpochMs = Number(mojoTime.internalValue / 1000n - 11644473600000n);
    return new Date(unixEpochMs);
}
export class MultistepFilterInternalsAppElement extends CrLitElement {
    static get is() {
        return 'multistep-filter-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            allLogs: { type: Array },
            filterText: { type: String },
            debugInfo: { type: Object },
        };
    }
    #allLogs_accessor_storage = [];
    get allLogs() { return this.#allLogs_accessor_storage; }
    set allLogs(value) { this.#allLogs_accessor_storage = value; }
    #filterText_accessor_storage = '';
    get filterText() { return this.#filterText_accessor_storage; }
    set filterText(value) { this.#filterText_accessor_storage = value; }
    #debugInfo_accessor_storage = null;
    get debugInfo() { return this.#debugInfo_accessor_storage; }
    set debugInfo(value) { this.#debugInfo_accessor_storage = value; }
    seenTimestamps_ = new Set();
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        const proxy = browserProxyFactory.getInstance();
        this.listenerIds_.push(proxy.callbackRouter.onLogEntryAdded.addListener((mojoLog) => {
            this.handleNewLog(this.convertMojoLog(mojoLog));
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const proxy = browserProxyFactory.getInstance();
        this.listenerIds_.forEach(id => proxy.callbackRouter.removeListener(id));
        this.listenerIds_ = [];
    }
    firstUpdated() {
        this.initializeMojo();
    }
    async initializeMojo() {
        const proxy = browserProxyFactory.getInstance();
        const [logsResponse, debugInfoResponse] = await Promise.all([
            proxy.handler.getBufferedLogs(),
            proxy.handler.getDebugInfo(),
        ]);
        this.debugInfo = debugInfoResponse.info;
        const bufferedLogs = (logsResponse.logs || []).map((mojoLog) => {
            return this.convertMojoLog(mojoLog);
        });
        // Combine and deduplicate based on composite key (timestamp + eventType)
        const combined = bufferedLogs.concat(this.allLogs);
        // Sort combined logs by timestamp descending (newest first)
        combined.sort((a, b) => {
            const diff = b.timestamp.internalValue - a.timestamp.internalValue;
            return diff > 0n ? 1 : (diff < 0n ? -1 : 0);
        });
        const unique = [];
        const seen = new Set();
        for (const log of combined) {
            const key = `${log.timestamp.internalValue}_${log.eventType}`;
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(log);
            }
        }
        this.allLogs = unique.slice(0, MAX_LOG_ENTRIES);
        // Re-populate seenTimestamps_ with values left after slice to keep sync!
        this.seenTimestamps_.clear();
        for (const log of this.allLogs) {
            this.seenTimestamps_.add(`${log.timestamp.internalValue}_${log.eventType}`);
        }
    }
    handleNewLog(log) {
        const key = `${log.timestamp.internalValue}_${log.eventType}`;
        if (this.seenTimestamps_.has(key)) {
            return;
        }
        this.seenTimestamps_.add(key);
        const updatedLogs = [log, ...this.allLogs];
        if (updatedLogs.length > MAX_LOG_ENTRIES) {
            const evicted = updatedLogs.pop();
            this.seenTimestamps_.delete(`${evicted.timestamp.internalValue}_${evicted.eventType}`);
        }
        this.allLogs = updatedLogs;
    }
    convertMojoLog(mojoLog) {
        const eventType = mojoLog.eventType || '';
        const formattedTime = this.formatTime_(mojoLog.timestamp);
        const details = mojoLog.details || '';
        return {
            timestamp: mojoLog.timestamp,
            host: mojoLog.host || '',
            navigationId: mojoLog.navigationId,
            formattedTime,
            eventType,
            details,
            // Include more fields in search index
            searchKey: `${formattedTime} ${eventType} ${mojoLog.host || ''} ${mojoLog.navigationId ? mojoLog.navigationId.toString() :
                ''} ${details}`
                .toLowerCase(),
        };
    }
    onFilterInput_(e) {
        this.filterText = e.target.value;
    }
    onClearClick_() {
        this.allLogs = [];
        this.seenTimestamps_.clear();
    }
    getFilteredLogs_() {
        if (!this.filterText) {
            return this.allLogs;
        }
        const searchString = this.filterText.toLowerCase();
        return this.allLogs.filter(log => {
            return log.searchKey.includes(searchString);
        });
    }
    formatTime_(timestamp) {
        const date = convertMojoTimeToJs(timestamp);
        return date.toLocaleTimeString();
    }
}
customElements.define(MultistepFilterInternalsAppElement.is, MultistepFilterInternalsAppElement);
