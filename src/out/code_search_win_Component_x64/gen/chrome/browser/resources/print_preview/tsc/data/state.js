// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export var State;
(function (State) {
    State[State["NOT_READY"] = 0] = "NOT_READY";
    State[State["READY"] = 1] = "READY";
    State[State["PRINT_PENDING"] = 2] = "PRINT_PENDING";
    State[State["HIDDEN"] = 3] = "HIDDEN";
    State[State["PRINTING"] = 4] = "PRINTING";
    State[State["SYSTEM_DIALOG"] = 5] = "SYSTEM_DIALOG";
    State[State["ERROR"] = 6] = "ERROR";
    State[State["FATAL_ERROR"] = 7] = "FATAL_ERROR";
    State[State["CLOSING"] = 8] = "CLOSING";
})(State || (State = {}));
/**
 * These values are persisted to logs. New entries should replace MAX_BUCKET but
 * existing entries should not be renumbered and numeric values should never be
 * reused.
 */
export var Error;
(function (Error) {
    Error[Error["NONE"] = 0] = "NONE";
    Error[Error["INVALID_TICKET"] = 1] = "INVALID_TICKET";
    Error[Error["INVALID_PRINTER"] = 2] = "INVALID_PRINTER";
    Error[Error["NO_DESTINATIONS"] = 3] = "NO_DESTINATIONS";
    Error[Error["PREVIEW_FAILED"] = 4] = "PREVIEW_FAILED";
    Error[Error["PRINT_FAILED"] = 5] = "PRINT_FAILED";
    Error[Error["MAX_BUCKET"] = 6] = "MAX_BUCKET";
})(Error || (Error = {}));
export class PrintPreviewStateElement extends CrLitElement {
    static get is() {
        return 'print-preview-state';
    }
    static get properties() {
        return {
            error: {
                type: Number,
                notify: true,
            },
        };
    }
    state_ = State.NOT_READY;
    #error_accessor_storage = Error.NONE;
    get error() { return this.#error_accessor_storage; }
    set error(value) { this.#error_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.sendStateChanged_();
    }
    sendStateChanged_() {
        this.dispatchEvent(new CustomEvent('state-changed', { detail: { value: this.state_ } }));
    }
    transitTo(newState) {
        switch (newState) {
            case (State.NOT_READY):
                assert(this.state_ === State.NOT_READY || this.state_ === State.READY ||
                    this.state_ === State.ERROR);
                break;
            case (State.READY):
                assert(this.state_ === State.ERROR || this.state_ === State.NOT_READY ||
                    this.state_ === State.PRINTING);
                break;
            case (State.PRINT_PENDING):
                assert(this.state_ === State.READY);
                break;
            case (State.HIDDEN):
                assert(this.state_ === State.PRINT_PENDING);
                break;
            case (State.PRINTING):
                assert(this.state_ === State.READY || this.state_ === State.HIDDEN ||
                    this.state_ === State.PRINT_PENDING);
                break;
            case (State.SYSTEM_DIALOG):
                assert(this.state_ !== State.HIDDEN && this.state_ !== State.PRINTING &&
                    this.state_ !== State.CLOSING);
                break;
            case (State.ERROR):
                assert(this.state_ === State.ERROR || this.state_ === State.NOT_READY ||
                    this.state_ === State.READY);
                break;
            case (State.CLOSING):
                assert(this.state_ !== State.HIDDEN);
                break;
            default:
                break;
        }
        const oldState = this.state_;
        this.state_ = newState;
        if (oldState !== newState) {
            // Fire a manual 'state-changed' event to ensure that all states changes
            // are reported, even if a state is changed twice in the same cycle, which
            // wouldn't be the case if CrLitElement's 'notify: true' was used.
            this.sendStateChanged_();
        }
        if (newState !== State.ERROR && newState !== State.FATAL_ERROR) {
            this.error = Error.NONE;
        }
    }
}
customElements.define(PrintPreviewStateElement.is, PrintPreviewStateElement);
