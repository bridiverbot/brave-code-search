// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './icons.html.js';
import './request.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_drawer/cr_drawer.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { PageCallbackRouter, PageHandler } from './suggest_internals.mojom-webui.js';
// Displays the suggest requests from the most recent to the least recent.
class SuggestInternalsAppElement extends CrLitElement {
    static get is() {
        return 'suggest-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            filter_: { type: String },
            hardcodedRequest_: { type: Object },
            requests_: { type: Array },
            responseDelay_: { type: String },
            responseText_: { type: String },
            toastDuration_: { type: Number },
            toastMessage_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #filter__accessor_storage = '';
    get filter_() { return this.#filter__accessor_storage; }
    set filter_(value) { this.#filter__accessor_storage = value; }
    #hardcodedRequest__accessor_storage = null;
    get hardcodedRequest_() { return this.#hardcodedRequest__accessor_storage; }
    set hardcodedRequest_(value) { this.#hardcodedRequest__accessor_storage = value; }
    #requests__accessor_storage = [];
    get requests_() { return this.#requests__accessor_storage; }
    set requests_(value) { this.#requests__accessor_storage = value; }
    #responseDelay__accessor_storage = '';
    get responseDelay_() { return this.#responseDelay__accessor_storage; }
    set responseDelay_(value) { this.#responseDelay__accessor_storage = value; }
    #responseText__accessor_storage = '';
    get responseText_() { return this.#responseText__accessor_storage; }
    set responseText_(value) { this.#responseText__accessor_storage = value; }
    #toastDuration__accessor_storage = 3000;
    get toastDuration_() { return this.#toastDuration__accessor_storage; }
    set toastDuration_(value) { this.#toastDuration__accessor_storage = value; }
    #toastMessage__accessor_storage = '';
    get toastMessage_() { return this.#toastMessage__accessor_storage; }
    set toastMessage_(value) { this.#toastMessage__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    callbackRouter_;
    pageHandler_;
    suggestionsRequestCompletedListenerId_ = null;
    suggestionsRequestCreatedListenerId_ = null;
    suggestionsRequestStartedListenerId_ = null;
    constructor() {
        super();
        this.pageHandler_ = PageHandler.getRemote();
        this.callbackRouter_ = new PageCallbackRouter();
        this.pageHandler_.setPage(this.callbackRouter_.$.bindNewPipeAndPassRemote());
    }
    connectedCallback() {
        super.connectedCallback();
        this.suggestionsRequestCreatedListenerId_ =
            this.callbackRouter_.onRequestCreated.addListener(this.onRequestCreated_.bind(this));
        this.suggestionsRequestStartedListenerId_ =
            this.callbackRouter_.onRequestStarted.addListener(this.onRequestStarted_.bind(this));
        this.suggestionsRequestCompletedListenerId_ =
            this.callbackRouter_.onRequestCompleted.addListener(this.onRequestCompleted_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.suggestionsRequestCreatedListenerId_);
        this.callbackRouter_.removeListener(this.suggestionsRequestCreatedListenerId_);
        assert(this.suggestionsRequestStartedListenerId_);
        this.callbackRouter_.removeListener(this.suggestionsRequestStartedListenerId_);
        assert(this.suggestionsRequestCompletedListenerId_);
        this.callbackRouter_.removeListener(this.suggestionsRequestCompletedListenerId_);
    }
    millisecondsToMojoTimeDelta(milliseconds) {
        return { microseconds: BigInt(Math.floor(milliseconds * 1000)) };
    }
    onClearClick_() {
        this.requests_ = [];
        this.hardcodedRequest_ = null;
    }
    onCloseDialogsClick_() {
        this.$.hardcodeResponseDialog.close();
    }
    async onConfirmHardcodeResponseDialogClick_() {
        const responseDelayMs = Math.max(0, parseInt(this.responseDelay_) || 0);
        await this.pageHandler_
            .hardcodeResponse(this.responseText_, this.millisecondsToMojoTimeDelta(responseDelayMs))
            .then(({ request }) => {
            this.hardcodedRequest_ = request;
        });
        this.$.hardcodeResponseDialog.close();
    }
    onExportClick_() {
        const a = document.createElement('a');
        const file = new Blob([this.stringifyRequests_()], { type: 'application/json' });
        a.href = URL.createObjectURL(file);
        const iso = (new Date()).toISOString();
        iso.replace(/:/g, '').split('.')[0];
        a.download = `suggest_internals_export_${iso}.json`;
        a.click();
    }
    onSearchChanged_(e) {
        this.filter_ = e.detail ?? '';
    }
    onImportClick_() {
        this.$.fileInput.click();
    }
    onImportFileChange_(event) {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }
        this.readFile(file).then((importString) => {
            try {
                this.requests_ = JSON.parse(importString);
            }
            catch (error) {
                console.error('error during import, invalid json:', error);
            }
        });
    }
    onOpenHardcodeResponseDialog_(e) {
        this.responseDelay_ = '';
        this.responseText_ = e.detail;
        this.$.hardcodeResponseDialog.showModal();
    }
    onShowToast_(e) {
        this.toastMessage_ = e.detail;
        this.$.toast.show();
    }
    onRequestCreated_(request) {
        // Add the request to the start of the list of known requests.
        this.requests_.unshift(request);
        this.requestUpdate();
    }
    onRequestStarted_(request) {
        const index = this.requests_.findIndex((element) => {
            return request.id === element.id;
        });
        // If the request is known, update it with the additional information.
        if (index !== -1) {
            this.requests_[index].status = request.status;
            this.requests_[index].data =
                Object.assign({}, this.requests_[index].data, request.data);
            this.requests_[index].startTime = request.startTime;
            this.requestUpdate();
        }
    }
    onRequestCompleted_(request) {
        const index = this.requests_.findIndex((element) => {
            return request.id === element.id;
        });
        // If the request is known, update it with the additional information.
        if (index !== -1) {
            this.requests_[index].status = request.status;
            this.requests_[index].data =
                Object.assign({}, this.requests_[index].data, request.data);
            this.requests_[index].endTime = request.endTime;
            this.requests_[index].response = request.response;
            this.requestUpdate();
        }
    }
    readFile(file) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.readyState === FileReader.DONE) {
                    resolve(reader.result);
                }
                else {
                    console.error('error importing, unable to read file:', reader.error);
                }
            };
            reader.readAsText(file);
        });
    }
    requestFilter_(request) {
        const filter = this.filter_.trim().toLowerCase();
        return request.url.toLowerCase().includes(filter);
    }
    onCrToolbarMenuClick_() {
        this.$.drawer.openDrawer();
    }
    stringifyRequests_() {
        return JSON.stringify(this.requests_, (_key, value) => typeof value === 'bigint' ? value.toString() : value);
    }
    onChipClick_(e) {
        // Populate the searchbar with the pgcl of the selected chip.
        const toolbar = this.shadowRoot.querySelector('cr-toolbar');
        const searchbar = toolbar.shadowRoot.querySelector('cr-toolbar-search-field');
        searchbar.setValue('pgcl=' + e.detail);
    }
    onResponseDelayValueChanged_(e) {
        this.responseDelay_ = e.detail.value;
    }
    onResponseTextValueChanged_(e) {
        this.responseText_ = e.detail.value;
    }
}
customElements.define(SuggestInternalsAppElement.is, SuggestInternalsAppElement);
