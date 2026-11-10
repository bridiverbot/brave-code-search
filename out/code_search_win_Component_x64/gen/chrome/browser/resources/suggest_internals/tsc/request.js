// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_chip/cr_chip.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { sanitizeInnerHtml } from '//resources/js/parse_html_subset.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { PageClassification } from './omnibox.mojom-webui.js';
import { getCss } from './request.css.js';
import { getHtml } from './request.html.js';
import { RequestStatus } from './suggest_internals.mojom-webui.js';
// Displays a suggest request and its response.
export class SuggestRequestElement extends CrLitElement {
    static get is() {
        return 'suggest-request';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            request: { type: Object },
            requestDataJson_: { type: String },
            responseJson_: { type: String },
            pgcl_: { type: String },
            expanded_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #request_accessor_storage = null;
    get request() { return this.#request_accessor_storage; }
    set request(value) { this.#request_accessor_storage = value; }
    #requestDataJson__accessor_storage = '';
    get requestDataJson_() { return this.#requestDataJson__accessor_storage; }
    set requestDataJson_(value) { this.#requestDataJson__accessor_storage = value; }
    #responseJson__accessor_storage = '';
    get responseJson_() { return this.#responseJson__accessor_storage; }
    set responseJson_(value) { this.#responseJson__accessor_storage = value; }
    #pgcl__accessor_storage = '';
    get pgcl_() { return this.#pgcl__accessor_storage; }
    set pgcl_(value) { this.#pgcl__accessor_storage = value; }
    #expanded__accessor_storage = false;
    get expanded_() { return this.#expanded__accessor_storage; }
    set expanded_(value) { this.#expanded__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (this.request === null) {
            this.requestDataJson_ = '';
            this.responseJson_ = '';
            this.pgcl_ = '';
            return;
        }
        this.requestDataJson_ = this.computeRequestDataJson_();
        this.responseJson_ = this.computeResponseJson_();
        this.pgcl_ = this.computePageClassification_();
    }
    computeRequestDataJson_() {
        assert(this.request);
        try {
            // Try to parse the request body, if any.
            this.request.data['Request-Body'] =
                JSON.parse(this.request.data['Request-Body']);
        }
        finally {
            // Pretty-print the parsed JSON.
            return JSON.stringify(this.request.data, null, 2);
        }
    }
    computeResponseJson_() {
        assert(this.request);
        try {
            // Remove the magic XSSI guard prefix, if any, to get a valid JSON.
            const validJson = this.request.response.replace(')]}\'', '').trim();
            // Try to parse the valid JSON.
            const parsedJson = JSON.parse(validJson);
            // Pretty-print the parsed JSON.
            return JSON.stringify(parsedJson, null, 2);
        }
        catch (e) {
            return '';
        }
    }
    computePageClassification_() {
        assert(this.request);
        if (!this.request.url) {
            return '';
        }
        // Find pgcl value in request url.
        const url = new URL(this.request.url);
        const queryMatches = url.search.match(/pgcl=(?<pgcl>[^&]*)/);
        // If no pgcl value in request, set pgcl to empty
        if (queryMatches === null || !queryMatches.groups) {
            return '';
        }
        return queryMatches.groups['pgcl'] || '';
    }
    getPageClassificationLabel_() {
        if (!this.pgcl_) {
            return 'No Page Classification';
        }
        return PageClassification[parseInt(this.pgcl_)];
    }
    insertTextProtoLinks_(stringJSON) {
        // Create regex to match against strings of desired form
        // Ex. "google:entityinfo" : "<base64 encoding>".
        // Extract the type (groups or entity) and proto (base64 encoding).
        const regexGroups = /"(?<type>(?:google:entityinfo|google:groupsinfo|X-Client-Data))":\s"(?<proto>(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?)"/g;
        // Replace base64 groupinfo or entityinfo encodings with links to
        // textproto in protoshop and return final string.
        return stringJSON.replace(regexGroups, (_match, _p1, _p2, _offset, _string, groups) => {
            let urlType = '';
            switch (groups.type) {
                case 'google:entityinfo':
                    urlType = 'omnibox.EntityInfo';
                    break;
                case 'google:groupsinfo':
                    urlType = 'omnibox.GroupsInfo';
                    break;
                case 'X-Client-Data':
                    urlType = 'webserver.gws.ClientDataHeader';
                    break;
                default:
                    break;
            }
            return `"${groups
                .type}": <a target='_blank' href=https://protoshop.corp.google.com/embed?tabs=textproto&type=${urlType}&protobytes=${groups.proto}>${groups.proto}</a>`;
        });
    }
    getRequestDataHtml_() {
        const htmlJSON = this.insertTextProtoLinks_(this.requestDataJson_);
        return sanitizeInnerHtml(htmlJSON);
    }
    getRequestPath_() {
        if (this.request === null) {
            return '';
        }
        try {
            const url = new URL(this.request.url);
            const queryMatches = url.search.match(/(q|delq)=[^&]*/);
            return url.pathname + '?' + (queryMatches ? queryMatches[0] : '');
        }
        catch (e) {
            return '';
        }
    }
    getResponseHtml_() {
        const htmlJSON = this.insertTextProtoLinks_(this.responseJson_);
        return sanitizeInnerHtml(htmlJSON);
    }
    getStatusIcon_() {
        switch (this.request?.status) {
            case RequestStatus.kHardcoded:
                return this.webuiRoundedIconsEnabled_ ? 'suggest:lock-filled' :
                    'suggest:lock-old';
            case RequestStatus.kCreated:
                return 'cr:edit-filled';
            case RequestStatus.kSent:
                return 'cr:schedule';
            case RequestStatus.kSucceeded:
                return 'cr:check-circle';
            case RequestStatus.kFailed:
                return 'cr:cancel-filled';
            default:
                return '';
        }
    }
    getStatusTitle_() {
        switch (this.request?.status) {
            case RequestStatus.kHardcoded:
                return 'hardcoded';
            case RequestStatus.kCreated:
                return 'created';
            case RequestStatus.kSent:
                return 'pending';
            case RequestStatus.kSucceeded:
                const startTimeMs = Number(this.request.startTime.internalValue) / 1000;
                const endTimeMs = Number(this.request.endTime.internalValue) / 1000;
                return `succeeded in ${Math.round(endTimeMs - startTimeMs)} ms`;
            case RequestStatus.kFailed:
                return 'failed';
            default:
                return '';
        }
    }
    getTimestamp_() {
        if (this.request === null) {
            return '';
        }
        // The JS Date() is based off of the number of milliseconds since the
        // UNIX epoch (1970-01-01 00::00:00 UTC), while |internalValue| of the
        // base::Time (represented in mojom.Time) represents the number of
        // microseconds since the Windows FILETIME epoch (1601-01-01 00:00:00 UTC).
        // This computes the final JS time by computing the epoch delta and the
        // conversion from microseconds to milliseconds.
        const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
        const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
        // |epochDeltaMs| is equivalent to
        // base::Time::kMicrosecondsFromWindowsToUnixEpoch.
        const epochDeltaMs = unixEpoch - windowsEpoch;
        const startTimeMs = Number(this.request.startTime.internalValue) / 1000;
        return (new Date(startTimeMs - epochDeltaMs)).toLocaleTimeString();
    }
    onCopyRequestClick_() {
        navigator.clipboard.writeText(this.requestDataJson_);
        this.fire('show-toast', 'Request Copied to Clipboard');
    }
    onCopyResponseClick_() {
        navigator.clipboard.writeText(this.responseJson_);
        this.fire('show-toast', 'Response Copied to Clipboard');
    }
    onHardcodeResponseClick_() {
        this.fire('open-hardcode-response-dialog', this.responseJson_);
    }
    onChipClick_(e) {
        this.fire('chip-click', this.pgcl_);
        // Allow chip to be found with aria label (originally hidden).
        const button = this.shadowRoot.querySelector('cr-expand-button');
        const label = button.shadowRoot.querySelector('#label');
        label.ariaHidden = 'false';
        // Prevent cr-expand-button from being clicked when chip is clicked.
        e.stopPropagation();
        e.preventDefault();
    }
    onExpandedChanged_(e) {
        this.expanded_ = e.detail.value;
    }
}
customElements.define(SuggestRequestElement.is, SuggestRequestElement);
