// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './url_generator.css.js';
import { getHtml } from './url_generator.html.js';
const UrlGeneratorElementBase = I18nMixinLit(CrLitElement);
export class UrlGeneratorElement extends UrlGeneratorElementBase {
    static get is() {
        return 'url-generator';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            caseId_: { type: String },
            dataCollectors_: { type: Array },
            errorMessage_: { type: String },
            buttonDisabled_: { type: Boolean },
            copiedToastMessage_: { type: String },
            selectAll_: { type: Boolean },
        };
    }
    #caseId__accessor_storage = '';
    get caseId_() { return this.#caseId__accessor_storage; }
    set caseId_(value) { this.#caseId__accessor_storage = value; }
    generatedResult_ = '';
    #errorMessage__accessor_storage = '';
    get errorMessage_() { return this.#errorMessage__accessor_storage; }
    set errorMessage_(value) { this.#errorMessage__accessor_storage = value; }
    #buttonDisabled__accessor_storage = true;
    get buttonDisabled_() { return this.#buttonDisabled__accessor_storage; }
    set buttonDisabled_(value) { this.#buttonDisabled__accessor_storage = value; }
    #copiedToastMessage__accessor_storage = '';
    get copiedToastMessage_() { return this.#copiedToastMessage__accessor_storage; }
    set copiedToastMessage_(value) { this.#copiedToastMessage__accessor_storage = value; }
    #dataCollectors__accessor_storage = [];
    get dataCollectors_() { return this.#dataCollectors__accessor_storage; }
    set dataCollectors_(value) { this.#dataCollectors__accessor_storage = value; }
    #selectAll__accessor_storage = false;
    get selectAll_() { return this.#selectAll__accessor_storage; }
    set selectAll_(value) { this.#selectAll__accessor_storage = value; }
    browserProxy_ = BrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getAllDataCollectors().then((dataCollectors) => {
            this.dataCollectors_ = dataCollectors;
        });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selectAll_')) {
            // Update this.dataCollectors_ to reflect the selection choice.
            for (const collector of this.dataCollectors_) {
                collector.isIncluded = this.selectAll_;
            }
        }
        // Calling this unconditionally, as the array may be modified in place.
        this.onDataCollectorItemChange_();
    }
    onDataCollectorItemChange_() {
        // The button should be disabled if no data collector is selected.
        this.buttonDisabled_ =
            !this.dataCollectors_.some(collector => collector.isIncluded);
    }
    showErrorMessageToast_(errorMessage) {
        this.errorMessage_ = errorMessage;
        this.$.errorMessageToast.show();
    }
    showGenerationResult(result, toastMessage) {
        if (result.success) {
            this.generatedResult_ = result.token;
            navigator.clipboard.writeText(this.generatedResult_);
            this.copiedToastMessage_ = toastMessage;
            this.$.copyToast.show();
            this.$.copyToast.focus();
        }
        else {
            this.showErrorMessageToast_(result.errorMessage);
        }
    }
    onCaseIdInput_(e) {
        this.caseId_ = e.target.value;
    }
    async onCopyUrlClick_() {
        const result = await this.browserProxy_.generateCustomizedUrl(this.caseId_, this.dataCollectors_);
        this.showGenerationResult(result, this.i18n('linkCopied'));
    }
    async onCopyTokenClick_() {
        const result = await this.browserProxy_.generateSupportToken(this.dataCollectors_);
        this.showGenerationResult(result, this.i18n('tokenCopied'));
    }
    onErrorMessageToastCloseClick_() {
        this.$.errorMessageToast.hide();
    }
    onSelectAllCheckboxCheckedChanged_(e) {
        this.selectAll_ = e.detail.value;
    }
    onDataCollectorCheckedChanged_(e) {
        const index = Number(e.target.dataset['index']);
        this.dataCollectors_[index].isIncluded = e.detail.value;
        this.requestUpdate();
    }
}
customElements.define(UrlGeneratorElement.is, UrlGeneratorElement);
