// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './result_text.css.js';
import { getHtml } from './result_text.html.js';
import { WordStreamer } from './word_streamer.js';
export class ComposeResultTextElement extends CrLitElement {
    static get is() {
        return 'compose-result-text';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // Input properties.
            // The text to display.
            textInput: { type: Object },
            // Output properties.
            // The full output shown. False if no output is requested.
            isOutputComplete: {
                type: Boolean,
                notify: true,
            },
            // Is there any output to show.
            hasOutput: {
                type: Boolean,
                notify: true,
            },
            // Private properties.
            hasPartialOutput_: {
                type: Boolean,
                notify: true,
            },
            displayedChunks_: { type: Array },
            displayedFullText_: { type: String },
        };
    }
    #textInput_accessor_storage = {
        text: '',
        isPartial: false,
        streamingEnabled: false,
    };
    get textInput() { return this.#textInput_accessor_storage; }
    set textInput(value) { this.#textInput_accessor_storage = value; }
    #isOutputComplete_accessor_storage = false;
    get isOutputComplete() { return this.#isOutputComplete_accessor_storage; }
    set isOutputComplete(value) { this.#isOutputComplete_accessor_storage = value; }
    #hasOutput_accessor_storage = false;
    get hasOutput() { return this.#hasOutput_accessor_storage; }
    set hasOutput(value) { this.#hasOutput_accessor_storage = value; }
    #hasPartialOutput__accessor_storage = false;
    get hasPartialOutput_() { return this.#hasPartialOutput__accessor_storage; }
    set hasPartialOutput_(value) { this.#hasPartialOutput__accessor_storage = value; }
    #displayedChunks__accessor_storage = [];
    get displayedChunks_() { return this.#displayedChunks__accessor_storage; }
    set displayedChunks_(value) { this.#displayedChunks__accessor_storage = value; }
    #displayedFullText__accessor_storage = '';
    get displayedFullText_() { return this.#displayedFullText__accessor_storage; }
    set displayedFullText_(value) { this.#displayedFullText__accessor_storage = value; }
    // Private regular properties.
    wordStreamer_;
    initialText_ = '';
    constructor() {
        super();
        this.wordStreamer_ = new WordStreamer(this.setStreamedWords_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('textInput')) {
            this.updateInputs_();
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('displayedChunks_') ||
            changedPrivateProperties.has('displayedFullText_') ||
            changedProperties.has('isOutputComplete')) {
            this.hasOutput =
                this.displayedChunks_.length > 0 || this.displayedFullText_ !== '';
            this.hasPartialOutput_ = this.hasOutput && !this.isOutputComplete;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        // Making this change in updated() since it touches the DOM.
        if (changedProperties.has('textInput')) {
            this.$.resultText.innerText = this.textInput.text;
        }
    }
    updateInputs_() {
        if (this.textInput.streamingEnabled) {
            this.isOutputComplete = false;
            this.wordStreamer_.setText(this.textInput.text.trim(), !this.textInput.isPartial);
        }
        else {
            this.wordStreamer_.reset();
            if (!this.textInput.isPartial) {
                this.displayedFullText_ = this.textInput.text;
                this.isOutputComplete = this.displayedFullText_ !== '';
                this.displayedChunks_ = [];
            }
            else {
                this.displayedFullText_ = '';
                this.isOutputComplete = false;
            }
        }
    }
    enableInstantStreamingForTesting() {
        this.wordStreamer_.setMsPerTickForTesting(0);
        this.wordStreamer_.setMsWaitBeforeCompleteForTesting(0);
        this.wordStreamer_.setCharsPerTickForTesting(5);
    }
    onFocusin_() {
        this.fire('set-result-focus', true);
        this.initialText_ = this.textInput.text;
    }
    onFocusout_() {
        this.fire('set-result-focus', false);
        const currentText = this.$.resultText.innerText;
        if (currentText === '') {
            // We disallow the user from saving or using empty text. Instead, replace
            // it with the starting state of the text before it was edited.
            this.$.resultText.innerText = this.initialText_;
            return;
        }
        // Only dispatch event if the text has changed from its initial state.
        if (currentText !== this.initialText_) {
            this.fire('result-edit', this.$.root.innerText);
        }
    }
    partialTextCanEdit_() {
        if (this.hasOutput && this.isOutputComplete) {
            return 'plaintext-only';
        }
        else {
            return 'false';
        }
    }
    setStreamedWords_(words, isComplete) {
        this.displayedChunks_ = words.map(text => ({ text }));
        this.isOutputComplete = isComplete && words.length > 0;
        if (isComplete) {
            this.wordStreamer_.reset();
        }
    }
}
customElements.define(ComposeResultTextElement.is, ComposeResultTextElement);
