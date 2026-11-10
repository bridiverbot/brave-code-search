// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '/strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PrinterType } from '../data/destination.js';
import { State } from '../data/state.js';
import { getCss } from './button_strip.css.js';
import { getHtml } from './button_strip.html.js';
export class PrintPreviewButtonStripElement extends CrLitElement {
    static get is() {
        return 'print-preview-button-strip';
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
            firstLoad: { type: Boolean },
            state: { type: Number },
            printButtonEnabled_: { type: Boolean },
            printButtonLabel_: { type: String },
        };
    }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #firstLoad_accessor_storage = false;
    get firstLoad() { return this.#firstLoad_accessor_storage; }
    set firstLoad(value) { this.#firstLoad_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #printButtonEnabled__accessor_storage = false;
    get printButtonEnabled_() { return this.#printButtonEnabled__accessor_storage; }
    set printButtonEnabled_(value) { this.#printButtonEnabled__accessor_storage = value; }
    #printButtonLabel__accessor_storage = loadTimeData.getString('printButton');
    get printButtonLabel_() { return this.#printButtonLabel__accessor_storage; }
    set printButtonLabel_(value) { this.#printButtonLabel__accessor_storage = value; }
    lastState_ = State.NOT_READY;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('destination')) {
            this.printButtonLabel_ =
                loadTimeData.getString(this.isPdf_() ? 'saveButton' : 'printButton');
        }
        if (changedProperties.has('state')) {
            this.updatePrintButtonEnabled_();
        }
    }
    onPrintClick_() {
        this.fire('print-requested');
    }
    onCancelClick_() {
        this.fire('cancel-requested');
    }
    isPdf_() {
        return !!this.destination &&
            this.destination.type === PrinterType.PDF_PRINTER;
    }
    updatePrintButtonEnabled_() {
        switch (this.state) {
            case (State.PRINTING):
                this.printButtonEnabled_ = false;
                break;
            case (State.READY):
                this.printButtonEnabled_ = true;
                if (this.firstLoad || this.lastState_ === State.PRINTING) {
                    this.shadowRoot
                        .querySelector('cr-button.action-button').focus();
                    this.fire('print-button-focused');
                }
                break;
            default:
                this.printButtonEnabled_ = false;
                break;
        }
        this.lastState_ = this.state;
    }
}
customElements.define(PrintPreviewButtonStripElement.is, PrintPreviewButtonStripElement);
