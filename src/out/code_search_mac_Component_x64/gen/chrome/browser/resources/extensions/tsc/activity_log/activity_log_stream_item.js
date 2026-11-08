// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './activity_log_stream_item.css.js';
import { getHtml } from './activity_log_stream_item.html.js';
/**
 * Placeholder for arg_url that can occur in |StreamItem.args|. Sometimes we
 * see this as '\u003Carg_url>' (opening arrow is unicode converted) but
 * string comparison with the non-unicode value still returns true so we
 * don't need to convert.
 */
export const ARG_URL_PLACEHOLDER = '<arg_url>';
/**
 * Regex pattern for |ARG_URL_PLACEHOLDER| for String.replace. A regex of the
 * exact string with a global search flag is needed to replace all
 * occurrences.
 */
const ARG_URL_PLACEHOLDER_REGEX = /"<arg_url>"/g;
export class ActivityLogStreamItemElement extends CrLitElement {
    static get is() {
        return 'activity-log-stream-item';
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
            argsList_: { type: Array },
            isExpandable_: { type: Boolean },
        };
    }
    #data_accessor_storage = {
        timestamp: 0,
        activityType: chrome.activityLogPrivate.ExtensionActivityType.API_CALL,
        argUrl: '',
        args: '{}',
        expanded: false,
    };
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #argsList__accessor_storage = [];
    get argsList_() { return this.#argsList__accessor_storage; }
    set argsList_(value) { this.#argsList__accessor_storage = value; }
    #isExpandable__accessor_storage = false;
    get isExpandable_() { return this.#isExpandable__accessor_storage; }
    set isExpandable_(value) { this.#isExpandable__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data')) {
            this.argsList_ = this.computeArgsList_();
            this.isExpandable_ =
                this.hasPageUrl_() || this.hasArgs_() || this.hasWebRequestInfo_();
            this.expanded_ = this.data.expanded;
        }
    }
    getFormattedTime_() {
        if (!this.data) {
            return '';
        }
        // Format the activity's time to HH:MM:SS.mmm format. Use ToLocaleString
        // for HH:MM:SS and padLeft for milliseconds.
        const activityDate = new Date(this.data.timestamp);
        const timeString = activityDate.toLocaleTimeString(undefined, {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        const ms = activityDate.getMilliseconds().toString().padStart(3, '0');
        return `${timeString}.${ms}`;
    }
    hasPageUrl_() {
        return !!this.data.pageUrl;
    }
    hasArgs_() {
        return this.argsList_.length > 0;
    }
    hasWebRequestInfo_() {
        return !!this.data.webRequestInfo && this.data.webRequestInfo !== '{}';
    }
    computeArgsList_() {
        const parsedArgs = JSON.parse(this.data.args);
        if (!Array.isArray(parsedArgs)) {
            return [];
        }
        // Replace occurrences AFTER parsing then stringifying as the JSON
        // serializer on the C++ side escapes certain characters such as '<' and
        // parsing un-escapes these characters.
        // See EscapeSpecialCodePoint in base/json/string_escape.cc.
        return parsedArgs.map((arg, i) => ({
            arg: JSON.stringify(arg).replace(ARG_URL_PLACEHOLDER_REGEX, `"${this.data.argUrl}"`),
            index: i + 1,
        }));
    }
    onExpandClick_() {
        if (this.isExpandable_) {
            this.expanded_ = !this.expanded_;
            this.fire('resize-stream');
        }
    }
}
customElements.define(ActivityLogStreamItemElement.is, ActivityLogStreamItemElement);
