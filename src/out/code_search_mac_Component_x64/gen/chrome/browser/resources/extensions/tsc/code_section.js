// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './shared_vars.css.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './code_section.css.js';
import { getHtml } from './code_section.html.js';
function visibleLineCount(totalCount, oppositeCount) {
    // We limit the number of lines shown for DOM performance.
    const MAX_VISIBLE_LINES = 1000;
    const max = Math.max(MAX_VISIBLE_LINES / 2, MAX_VISIBLE_LINES - oppositeCount);
    return Math.min(max, totalCount);
}
const ExtensionsCodeSectionElementBase = I18nMixinLit(CrLitElement);
export class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase {
    static get is() {
        return 'extensions-code-section';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            code: { type: Object },
            isActive: { type: Boolean },
            /** Highlighted code. */
            highlighted_: { type: String },
            /** Code before the highlighted section. */
            before_: { type: String },
            /** Code after the highlighted section. */
            after_: { type: String },
            /** Description for the highlighted section. */
            highlightDescription_: { type: String },
            lineNumbers_: { type: String },
            truncatedBefore_: { type: Number },
            truncatedAfter_: { type: Number },
            /**
             * The string to display if no |code| is set (e.g. because we couldn't
             * load the relevant source file).
             */
            couldNotDisplayCode: { type: String },
        };
    }
    #code_accessor_storage = null;
    get code() { return this.#code_accessor_storage; }
    set code(value) { this.#code_accessor_storage = value; }
    #isActive_accessor_storage;
    get isActive() { return this.#isActive_accessor_storage; }
    set isActive(value) { this.#isActive_accessor_storage = value; }
    #couldNotDisplayCode_accessor_storage = '';
    get couldNotDisplayCode() { return this.#couldNotDisplayCode_accessor_storage; }
    set couldNotDisplayCode(value) { this.#couldNotDisplayCode_accessor_storage = value; }
    #highlighted__accessor_storage = '';
    get highlighted_() { return this.#highlighted__accessor_storage; }
    set highlighted_(value) { this.#highlighted__accessor_storage = value; }
    #before__accessor_storage = '';
    get before_() { return this.#before__accessor_storage; }
    set before_(value) { this.#before__accessor_storage = value; }
    #after__accessor_storage = '';
    get after_() { return this.#after__accessor_storage; }
    set after_(value) { this.#after__accessor_storage = value; }
    #highlightDescription__accessor_storage = '';
    get highlightDescription_() { return this.#highlightDescription__accessor_storage; }
    set highlightDescription_(value) { this.#highlightDescription__accessor_storage = value; }
    #lineNumbers__accessor_storage = '';
    get lineNumbers_() { return this.#lineNumbers__accessor_storage; }
    set lineNumbers_(value) { this.#lineNumbers__accessor_storage = value; }
    #truncatedBefore__accessor_storage = 0;
    get truncatedBefore_() { return this.#truncatedBefore__accessor_storage; }
    set truncatedBefore_(value) { this.#truncatedBefore__accessor_storage = value; }
    #truncatedAfter__accessor_storage = 0;
    get truncatedAfter_() { return this.#truncatedAfter__accessor_storage; }
    set truncatedAfter_(value) { this.#truncatedAfter__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('code')) {
            this.onCodeChanged_();
        }
    }
    async onCodeChanged_() {
        if (!(this.code?.source)) {
            this.highlighted_ = '';
            this.highlightDescription_ = '';
            this.before_ = '';
            this.after_ = '';
            this.lineNumbers_ = '';
            return;
        }
        const before = this.code.source.beforeHighlight;
        const highlight = this.code.source.highlight;
        const after = this.code.source.afterHighlight;
        const linesBefore = before ? before.split('\n') : [];
        const linesAfter = after ? after.split('\n') : [];
        const visibleLineCountBefore = visibleLineCount(linesBefore.length, linesAfter.length);
        const visibleLineCountAfter = visibleLineCount(linesAfter.length, linesBefore.length);
        const visibleBefore = linesBefore.slice(linesBefore.length - visibleLineCountBefore)
            .join('\n');
        let visibleAfter = linesAfter.slice(0, visibleLineCountAfter).join('\n');
        // If the last character is a \n, force it to be rendered.
        if (visibleAfter.charAt(visibleAfter.length - 1) === '\n') {
            visibleAfter += ' ';
        }
        this.highlighted_ = highlight;
        this.highlightDescription_ = this.getAccessibilityHighlightDescription_(linesBefore.length, highlight.split('\n').length);
        this.before_ = visibleBefore;
        this.after_ = visibleAfter;
        this.truncatedBefore_ = linesBefore.length - visibleLineCountBefore;
        this.truncatedAfter_ = linesAfter.length - visibleLineCountAfter;
        const visibleCode = visibleBefore + highlight + visibleAfter;
        this.setLineNumbers_(this.truncatedBefore_ + 1, this.truncatedBefore_ + visibleCode.split('\n').length);
        // Happens asynchronously after the update completes
        await this.updateComplete;
        this.scrollToHighlight_(visibleLineCountBefore);
    }
    getLinesNotShownLabel_(lineCount) {
        return lineCount === 1 ?
            loadTimeData.getString('errorLinesNotShownSingular') :
            loadTimeData.substituteString(loadTimeData.getString('errorLinesNotShownPlural'), lineCount);
    }
    setLineNumbers_(start, end) {
        let lineNumbers = '';
        for (let i = start; i <= end; ++i) {
            lineNumbers += i + '\n';
        }
        this.lineNumbers_ = lineNumbers;
    }
    scrollToHighlight_(linesBeforeHighlight) {
        const CSS_LINE_HEIGHT = 20;
        // Count how many pixels is above the highlighted code.
        const highlightTop = linesBeforeHighlight * CSS_LINE_HEIGHT;
        // Find the position to show the highlight roughly in the middle.
        const targetTop = highlightTop - this.clientHeight * 0.5;
        this.$.scrollContainer.scrollTo({ top: targetTop });
    }
    getAccessibilityHighlightDescription_(lineStart, numLines) {
        if (numLines > 1) {
            return this.i18n('accessibilityErrorMultiLine', lineStart.toString(), (lineStart + numLines - 1).toString());
        }
        else {
            return this.i18n('accessibilityErrorLine', lineStart.toString());
        }
    }
    shouldShowNoCode_() {
        return (this.isActive === undefined || this.isActive) && !this.highlighted_;
    }
}
customElements.define(ExtensionsCodeSectionElement.is, ExtensionsCodeSectionElement);
