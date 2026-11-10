// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './activity_log_history_item.css.js';
import { getHtml } from './activity_log_history_item.html.js';
export class ActivityLogHistoryItemElement extends CrLitElement {
    static get is() {
        return 'activity-log-history-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The underlying ActivityGroup that provides data for the
             * ActivityLogItem displayed.
             */
            data: { type: Object },
            expanded_: { type: Boolean },
            isExpandable_: { type: Boolean },
        };
    }
    #data_accessor_storage = {
        activityIds: new Set(),
        key: '',
        count: 0,
        activityType: chrome.activityLogPrivate.ExtensionActivityFilter.API_CALL,
        countsByUrl: new Map(),
        expanded: false,
    };
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #isExpandable__accessor_storage = false;
    get isExpandable_() { return this.#isExpandable__accessor_storage; }
    set isExpandable_(value) { this.#isExpandable__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data')) {
            this.isExpandable_ = this.data.countsByUrl.size > 0;
            this.expanded_ = this.data.expanded;
        }
    }
    expand(expanded) {
        if (this.isExpandable_) {
            this.expanded_ = expanded;
        }
    }
    /**
     * Sort the page URLs by the number of times it was associated with the key
     * for this ActivityGroup (API call or content script invocation.) Resolve
     * ties by the alphabetical order of the page URL.
     */
    getPageUrls_() {
        return Array.from(this.data.countsByUrl.entries())
            .map(e => ({ page: e[0], count: e[1] }))
            .sort(function (a, b) {
            if (a.count !== b.count) {
                return b.count - a.count;
            }
            return a.page < b.page ? -1 : (a.page > b.page ? 1 : 0);
        });
    }
    onDeleteClick_(e) {
        e.stopPropagation();
        this.fire('delete-activity-log-item', Array.from(this.data.activityIds.values()));
    }
    onExpandClick_() {
        if (this.isExpandable_) {
            this.expanded_ = !this.expanded_;
        }
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
    }
    /**
     * Show the call count for a particular page URL if more than one page
     * URL is associated with the key for this ActivityGroup.
     */
    shouldShowPageUrlCount_() {
        return this.data.countsByUrl.size > 1;
    }
}
customElements.define(ActivityLogHistoryItemElement.is, ActivityLogHistoryItemElement);
