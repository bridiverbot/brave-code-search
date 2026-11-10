// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './data_section.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { getCss } from './batch_upload_app.css.js';
import { getHtml } from './batch_upload_app.html.js';
import { BatchUploadBrowserProxyImpl } from './browser_proxy.js';
function createEmptyAccountInfo() {
    return {
        email: '',
        dataPictureUrl: '',
    };
}
const BatchUploadAppElementBase = I18nMixinLit(CrLitElement);
export class BatchUploadAppElement extends BatchUploadAppElementBase {
    static get is() {
        return 'batch-upload-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            accountInfo_: { type: Object },
            dialogSubtitle_: { type: String },
            dataSections_: { type: Array },
            isSaveEnabled_: { type: Boolean },
        };
    }
    batchUploadBrowserProxy_ = BatchUploadBrowserProxyImpl.getInstance();
    #accountInfo__accessor_storage = createEmptyAccountInfo();
    // Account information displayed in the view.
    get accountInfo_() { return this.#accountInfo__accessor_storage; }
    set accountInfo_(value) { this.#accountInfo__accessor_storage = value; }
    #dialogSubtitle__accessor_storage = '';
    get dialogSubtitle_() { return this.#dialogSubtitle__accessor_storage; }
    set dialogSubtitle_(value) { this.#dialogSubtitle__accessor_storage = value; }
    #dataSections__accessor_storage = [];
    // Stores the input coming from the browser initialized in
    // `initializeInputAndOutputData_()`.
    get dataSections_() { return this.#dataSections__accessor_storage; }
    set dataSections_(value) { this.#dataSections__accessor_storage = value; }
    // State of the section toggles, this is needed to control the save button
    // state.
    dataSectionsToggles_ = [];
    #isSaveEnabled__accessor_storage = true;
    // Whether save to account button is enabled or not.
    get isSaveEnabled_() { return this.#isSaveEnabled__accessor_storage; }
    set isSaveEnabled_(value) { this.#isSaveEnabled__accessor_storage = value; }
    // Observes the size of `dataSections` to know whether to show a border or not
    // if scrolling is possible.
    resizeObserver_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.addResizeObserver_();
        this.batchUploadBrowserProxy_.callbackRouter.sendBatchUploadData
            .addListener(batchUploadData => {
            this.accountInfo_ = batchUploadData.accountInfo;
            this.dialogSubtitle_ = batchUploadData.dialogSubtitle;
            // Populate data with input from browser.
            this.initializeInputAndOutputData_(batchUploadData.dataContainers);
            this.requestUpdate();
            this.updateViewHeight_();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver_.disconnect();
    }
    addResizeObserver_() {
        const dataContainer = this.$.dataContainer;
        this.resizeObserver_ = new ResizeObserver(() => {
            const scrollbarVisible = dataContainer.scrollHeight > dataContainer.clientHeight;
            // Defer style changes to after the browser repaints to avoid triggering a
            // resize loop. Applying the style changes would not interfere with the
            // previously computed value of `scrollbarVisible` on the newer
            // notification. Check crbug.com/397366630.
            requestAnimationFrame(() => {
                // Show the container border line if the scroll bar is visible.
                dataContainer.classList.toggle('border-line', scrollbarVisible);
                // Adapt the section padding if the scrollbar is visible by overriding
                // the value (removing the scrollbar width).
                this.$.dataSections.classList.toggle('data-sections-with-scrollbar', scrollbarVisible);
            });
        });
        this.resizeObserver_.observe(dataContainer);
    }
    // Request the browser to update the native view to match the current height
    // of the web view.
    async updateViewHeight_() {
        await this.updateComplete;
        const height = this.$.batchUploadDialog.clientHeight;
        this.batchUploadBrowserProxy_.handler.updateViewHeight(height);
    }
    onSectionToggleChanged_(e) {
        const sectionIndex = Number(e.target.dataset['index']);
        this.dataSectionsToggles_[sectionIndex] = e.detail.toggle;
        this.updateSaveEnabled_();
    }
    onUpdateViewHeight_() {
        this.updateViewHeight_();
    }
    onSaveClick_() {
        this.saveToAccount_();
    }
    // Initializes the input structure that the Ui uses for display.
    // Expected to be called once.
    initializeInputAndOutputData_(containerList) {
        assert(this.dataSections_.length === 0);
        // A data container is equivalent to a section in the Ui.
        this.dataSections_ = containerList;
        // Sections are enabled by default.
        this.dataSectionsToggles_ = Array(this.dataSections_.length).fill(true);
        // There should be at least one section.
        assert(this.dataSections_ !== undefined && this.dataSections_.length !== 0, 'There should at least be one section to show.');
    }
    onCancelClick_() {
        this.batchUploadBrowserProxy_.handler.close();
    }
    updateSaveEnabled_() {
        // If at least one section is not disabled, then save is allowed.
        this.isSaveEnabled_ =
            this.dataSectionsToggles_.some((value) => value);
    }
    saveToAccount_() {
        assert(this.isSaveEnabled_);
        const idsToMove = [];
        // Get the section element list.
        const dataSections = this.shadowRoot.querySelectorAll(`data-section`);
        // Getting the output from each section.
        for (let i = 0; i < dataSections.length; ++i) {
            const selectedIds = dataSections[i].dataSelected;
            idsToMove.push([...selectedIds]);
        }
        this.batchUploadBrowserProxy_.handler.saveToAccount(idsToMove);
    }
}
customElements.define(BatchUploadAppElement.is, BatchUploadAppElement);
