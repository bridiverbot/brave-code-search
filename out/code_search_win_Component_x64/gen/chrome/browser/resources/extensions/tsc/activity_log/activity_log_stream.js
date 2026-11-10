// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import './activity_log_stream_item.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { FakeChromeEvent } from '../item.js';
import { getCss } from './activity_log_stream.css.js';
import { getHtml } from './activity_log_stream.html.js';
class DummyActivityLogEventDelegate {
    getOnExtensionActivity() {
        return new FakeChromeEvent();
    }
}
/**
 * Process activity for the stream. In the case of content scripts, we split
 * the activity for every script invoked.
 */
function processActivityForStream(activity) {
    const activityType = activity.activityType;
    const timestamp = activity.time;
    const isContentScript = activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;
    const args = isContentScript ? JSON.stringify([]) : activity.args;
    let streamItemNames = [activity.apiCall];
    // TODO(kelvinjiang): Reuse logic from activity_log_history and refactor
    // some of the processing code into a separate file in a follow up CL.
    if (isContentScript) {
        streamItemNames = activity.args ? JSON.parse(activity.args) : [];
        assert(Array.isArray(streamItemNames), 'Invalid data for script names.');
    }
    const other = activity.other;
    const webRequestInfo = other && other.webRequest;
    return streamItemNames.map(name => ({
        args,
        argUrl: activity.argUrl,
        activityType,
        name,
        pageUrl: activity.pageUrl,
        timestamp,
        webRequestInfo,
        expanded: false,
    }));
}
export class ActivityLogStreamElement extends CrLitElement {
    static get is() {
        return 'activity-log-stream';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            extensionId: { type: String },
            delegate: { type: Object },
            isStreamOn_: { type: Boolean },
            activityStream_: { type: Array },
            filteredActivityStream_: { type: Array },
            lastSearch_: { type: String },
        };
    }
    #extensionId_accessor_storage = '';
    get extensionId() { return this.#extensionId_accessor_storage; }
    set extensionId(value) { this.#extensionId_accessor_storage = value; }
    #delegate_accessor_storage = new DummyActivityLogEventDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #isStreamOn__accessor_storage = false;
    get isStreamOn_() { return this.#isStreamOn__accessor_storage; }
    set isStreamOn_(value) { this.#isStreamOn__accessor_storage = value; }
    #activityStream__accessor_storage = [];
    get activityStream_() { return this.#activityStream__accessor_storage; }
    set activityStream_(value) { this.#activityStream__accessor_storage = value; }
    #filteredActivityStream__accessor_storage = [];
    get filteredActivityStream_() { return this.#filteredActivityStream__accessor_storage; }
    set filteredActivityStream_(value) { this.#filteredActivityStream__accessor_storage = value; }
    #lastSearch__accessor_storage = '';
    get lastSearch_() { return this.#lastSearch__accessor_storage; }
    set lastSearch_(value) { this.#lastSearch__accessor_storage = value; }
    // Instance of |extensionActivityListener_| bound to |this|.
    listenerInstance_ = () => { };
    connectedCallback() {
        super.connectedCallback();
        // Since this component is not restamped, this will only be called once
        // in its lifecycle.
        this.listenerInstance_ = this.extensionActivityListener_.bind(this);
        this.startStream();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('activityStream_') ||
            changedPrivateProperties.has('lastSearch_')) {
            this.filteredActivityStream_ = this.computeFilteredActivityStream_();
        }
    }
    onClearStreamClick_() {
        this.clearStream();
    }
    clearStream() {
        this.activityStream_ = [];
    }
    startStream() {
        if (this.isStreamOn_) {
            return;
        }
        this.isStreamOn_ = true;
        this.delegate.getOnExtensionActivity().addListener(this.listenerInstance_);
    }
    pauseStream() {
        if (!this.isStreamOn_) {
            return;
        }
        this.delegate.getOnExtensionActivity().removeListener(this.listenerInstance_);
        this.isStreamOn_ = false;
    }
    onToggleButtonClick_() {
        if (this.isStreamOn_) {
            this.pauseStream();
        }
        else {
            this.startStream();
        }
    }
    isStreamEmpty_() {
        return this.activityStream_.length === 0;
    }
    isFilteredStreamEmpty_() {
        return this.filteredActivityStream_.length === 0;
    }
    shouldShowEmptySearchMessage_() {
        return !this.isStreamEmpty_() && this.isFilteredStreamEmpty_();
    }
    extensionActivityListener_(activity) {
        if (activity.extensionId !== this.extensionId) {
            return;
        }
        this.activityStream_ = [
            ...this.activityStream_,
            ...processActivityForStream(activity),
        ];
    }
    onSearchChanged_(e) {
        // Remove all whitespaces from the search term, as API call names and
        // URLs should not contain any whitespace. As of now, only single term
        // search queries are allowed.
        const searchTerm = e.detail.replace(/\s+/g, '').toLowerCase();
        if (searchTerm === this.lastSearch_) {
            return;
        }
        this.lastSearch_ = searchTerm;
    }
    computeFilteredActivityStream_() {
        if (!this.lastSearch_) {
            return this.activityStream_.slice();
        }
        // Match on these properties for each activity.
        const propNames = [
            'name',
            'pageUrl',
            'activityType',
        ];
        return this.activityStream_.filter(act => {
            return propNames.some(prop => {
                const value = act[prop];
                return value && value.toLowerCase().includes(this.lastSearch_);
            });
        });
    }
}
customElements.define(ActivityLogStreamElement.is, ActivityLogStreamElement);
