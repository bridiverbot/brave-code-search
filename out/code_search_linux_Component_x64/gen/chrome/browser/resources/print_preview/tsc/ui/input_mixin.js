// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
export const InputMixin = (superClass) => {
    class InputMixin extends superClass {
        static get properties() {
            return {
                lastValue_: { type: String },
            };
        }
        #lastValue__accessor_storage = '';
        get lastValue_() { return this.#lastValue__accessor_storage; }
        set lastValue_(value) { this.#lastValue__accessor_storage = value; }
        /** Timeout used to delay processing of the input, in ms. */
        timeout_ = null;
        connectedCallback() {
            super.connectedCallback();
            this.getInput().addEventListener('input', () => this.resetTimeout_());
            this.getInput().addEventListener('keydown', (e) => this.onKeyDown_(e));
        }
        getInput() {
            assertNotReached();
        }
        /**
         * @return The delay to use for the timeout, in ms. Elements using
         *     this behavior must set this delay as data-timeout-delay on the
         *     input element returned by getInput().
         */
        getTimeoutDelayMs_() {
            const delay = parseInt(this.getInput().dataset['timeoutDelay'], 10);
            assert(!Number.isNaN(delay));
            return delay;
        }
        /**
         * Called when a key is pressed on the input.
         */
        onKeyDown_(event) {
            if (event.key !== 'Enter' && event.key !== 'Tab') {
                return;
            }
            this.resetAndUpdate();
        }
        /**
         * Called when a input event occurs on the textfield. Starts an input
         * timeout.
         */
        resetTimeout_() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.timeout_ =
                setTimeout(() => this.onTimeout_(), this.getTimeoutDelayMs_());
        }
        /**
         * Called after a timeout after user input into the textfield.
         */
        onTimeout_() {
            this.timeout_ = null;
            const value = this.getInput().value || '';
            if (this.lastValue_ !== value) {
                this.lastValue_ = value;
                this.fire('input-change', value);
            }
        }
        resetString() {
            this.lastValue_ = null;
        }
        resetAndUpdate() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.onTimeout_();
        }
    }
    return InputMixin;
};
