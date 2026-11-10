// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './icons.html.js';
import '/strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PrinterType } from '../data/destination.js';
import { Error, State } from '../data/state.js';
import { getCss } from './header.css.js';
import { getHtml } from './header.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewHeaderElementBase = SettingsMixin(CrLitElement);
export class PrintPreviewHeaderElement extends PrintPreviewHeaderElementBase {
    static get is() {
        return 'print-preview-header';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destination: { type: Object },
            error: { type: Number },
            state: { type: Number },
            managed: { type: Boolean },
            sheetCount_: { type: Number },
            summary_: { type: String },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #error_accessor_storage = null;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #managed_accessor_storage = false;
    get managed() { return this.#managed_accessor_storage; }
    set managed(value) { this.#managed_accessor_storage = value; }
    #sheetCount__accessor_storage = 0;
    get sheetCount_() { return this.#sheetCount__accessor_storage; }
    set sheetCount_(value) { this.#sheetCount__accessor_storage = value; }
    #summary__accessor_storage = null;
    get summary_() { return this.#summary__accessor_storage; }
    set summary_(value) { this.#summary__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('pages.*', this.updateSheetCount_.bind(this));
        this.addSettingObserver('duplex.*', this.updateSheetCount_.bind(this));
        this.addSettingObserver('copies.*', this.updateSheetCount_.bind(this));
        this.updateSheetCount_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('sheetCount_') ||
            changedProperties.has('state') ||
            changedProperties.has('destination')) {
            this.updateSummary_();
        }
    }
    updateSheetCount_() {
        let sheets = this.getSettingValue('pages').length;
        if (this.getSettingValue('duplex')) {
            sheets = Math.ceil(sheets / 2);
        }
        this.sheetCount_ = sheets * this.getSettingValue('copies');
    }
    isPdf_() {
        return !!this.destination &&
            this.destination.type === PrinterType.PDF_PRINTER;
    }
    updateSummary_() {
        switch (this.state) {
            case (State.PRINTING):
                this.summary_ =
                    loadTimeData.getString(this.isPdf_() ? 'saving' : 'printing');
                break;
            case (State.READY):
                this.updateSheetsSummary_();
                break;
            case (State.FATAL_ERROR):
                this.summary_ = this.getErrorMessage_();
                break;
            default:
                this.summary_ = null;
                break;
        }
    }
    /**
     * @return The error message to display.
     */
    getErrorMessage_() {
        switch (this.error) {
            case Error.PRINT_FAILED:
                return loadTimeData.getString('couldNotPrint');
            default:
                return '';
        }
    }
    updateSheetsSummary_() {
        if (this.sheetCount_ === 0) {
            this.summary_ = '';
            return;
        }
        const pageOrSheet = this.isPdf_() ? 'Page' : 'Sheet';
        PluralStringProxyImpl.getInstance()
            .getPluralString(`printPreview${pageOrSheet}SummaryLabel`, this.sheetCount_)
            .then(label => {
            this.summary_ = label;
        });
    }
}
customElements.define(PrintPreviewHeaderElement.is, PrintPreviewHeaderElement);
