// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './data_collectors.js';
import './issue_details.js';
import './spinner_page.js';
import './pii_selection.js';
import './data_export_done.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './support_tool.css.js';
import { getHtml } from './support_tool.html.js';
export var SupportToolPageIndex;
(function (SupportToolPageIndex) {
    SupportToolPageIndex[SupportToolPageIndex["ISSUE_DETAILS"] = 0] = "ISSUE_DETAILS";
    SupportToolPageIndex[SupportToolPageIndex["DATA_COLLECTOR_SELECTION"] = 1] = "DATA_COLLECTOR_SELECTION";
    SupportToolPageIndex[SupportToolPageIndex["SPINNER"] = 2] = "SPINNER";
    SupportToolPageIndex[SupportToolPageIndex["PII_SELECTION"] = 3] = "PII_SELECTION";
    SupportToolPageIndex[SupportToolPageIndex["EXPORT_SPINNER"] = 4] = "EXPORT_SPINNER";
    SupportToolPageIndex[SupportToolPageIndex["DATA_EXPORT_DONE"] = 5] = "DATA_EXPORT_DONE";
})(SupportToolPageIndex || (SupportToolPageIndex = {}));
const SupportToolElementBase = WebUiListenerMixinLit(I18nMixinLit(CrLitElement));
export class SupportToolElement extends SupportToolElementBase {
    static get is() {
        return 'support-tool';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedPage_: { type: Number },
            errorMessage_: { type: String },
        };
    }
    #errorMessage__accessor_storage = '';
    get errorMessage_() { return this.#errorMessage__accessor_storage; }
    set errorMessage_(value) { this.#errorMessage__accessor_storage = value; }
    #selectedPage__accessor_storage = SupportToolPageIndex.ISSUE_DETAILS;
    get selectedPage_() { return this.#selectedPage__accessor_storage; }
    set selectedPage_(value) { this.#selectedPage__accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('data-collection-completed', this.onDataCollectionCompleted_.bind(this));
        this.addWebUiListener('data-collection-cancelled', this.onDataCollectionCancelled_.bind(this));
        this.addWebUiListener('support-data-export-started', this.onDataExportStarted_.bind(this));
        this.addWebUiListener('data-export-completed', this.onDataExportCompleted_.bind(this));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectedPage_')) {
            this.onSelectedPageChange_();
        }
    }
    onDataExportStarted_() {
        this.selectedPage_ = SupportToolPageIndex.EXPORT_SPINNER;
    }
    onDataCollectionCompleted_(piiItems) {
        this.$.piiSelection.updateDetectedPiiItems(piiItems);
        this.selectedPage_ = SupportToolPageIndex.PII_SELECTION;
    }
    onDataCollectionCancelled_() {
        // Change the selected page into issue details page so they user can restart
        // data collection if they want.
        this.selectedPage_ = SupportToolPageIndex.ISSUE_DETAILS;
    }
    displayError_(errorMessage) {
        this.errorMessage_ = errorMessage;
        this.$.errorMessageToast.show();
    }
    onDataExportCompleted_(result) {
        if (result.success) {
            // Show the exported data path to user in data export page if the data
            // export is successful.
            this.$.dataExportDone.setPath(result.path);
            this.selectedPage_ = SupportToolPageIndex.DATA_EXPORT_DONE;
        }
        else {
            // Show a toast with error message and turn back to the PII selection page
            // so the user can retry exporting their data.
            this.selectedPage_ = SupportToolPageIndex.PII_SELECTION;
            this.displayError_(result.error);
        }
    }
    onDataCollectionStart_(result) {
        if (result.success) {
            this.selectedPage_ = SupportToolPageIndex.SPINNER;
        }
        else {
            this.displayError_(result.errorMessage);
        }
    }
    onErrorMessageToastCloseClick_() {
        this.$.errorMessageToast.hide();
    }
    onContinueClick_() {
        // If we are currently on data collectors selection page, send signal to
        // start data collection.
        if (this.selectedPage_ === SupportToolPageIndex.DATA_COLLECTOR_SELECTION) {
            this.browserProxy_
                .startDataCollection(this.$.issueDetails.getIssueDetails(), this.$.dataCollectors.getDataCollectors())
                .then(this.onDataCollectionStart_.bind(this));
        }
        else {
            this.selectedPage_ = this.selectedPage_ + 1;
        }
    }
    onBackClick_() {
        this.selectedPage_ = this.selectedPage_ - 1;
    }
    shouldHideBackButton_() {
        // Back button will only be shown on data collectors selection page.
        return this.selectedPage_ !== SupportToolPageIndex.DATA_COLLECTOR_SELECTION;
    }
    shouldHideContinueButtonContainer_() {
        // Continue button container will only be shown in issue details page and
        // data collectors selection page.
        return this.selectedPage_ >= SupportToolPageIndex.SPINNER;
    }
    onSelectedPageChange_() {
        // On every selected page change, the focus will be moved to each page's
        // header to ensure a smooth experience in terms of accessibility.
        switch (this.selectedPage_) {
            case SupportToolPageIndex.ISSUE_DETAILS:
                this.$.issueDetails.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.DATA_COLLECTOR_SELECTION:
                this.$.dataCollectors.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.SPINNER:
                this.$.spinnerPage.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.PII_SELECTION:
                this.$.piiSelection.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.EXPORT_SPINNER:
                this.$.exportSpinner.ensureFocusOnPageHeader();
                break;
            case SupportToolPageIndex.DATA_EXPORT_DONE:
                this.$.dataExportDone.ensureFocusOnPageHeader();
                break;
            default:
                break;
        }
    }
}
customElements.define(SupportToolElement.is, SupportToolElement);
