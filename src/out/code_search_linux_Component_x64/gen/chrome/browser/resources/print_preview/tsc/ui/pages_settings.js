// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import '/strings.m.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { areRangesEqual } from '../print_preview_utils.js';
import { InputMixin } from './input_mixin.js';
import { getCss } from './pages_settings.css.js';
import { getHtml } from './pages_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
var PagesInputErrorState;
(function (PagesInputErrorState) {
    PagesInputErrorState[PagesInputErrorState["NO_ERROR"] = 0] = "NO_ERROR";
    PagesInputErrorState[PagesInputErrorState["INVALID_SYNTAX"] = 1] = "INVALID_SYNTAX";
    PagesInputErrorState[PagesInputErrorState["OUT_OF_BOUNDS"] = 2] = "OUT_OF_BOUNDS";
    PagesInputErrorState[PagesInputErrorState["EMPTY"] = 3] = "EMPTY";
})(PagesInputErrorState || (PagesInputErrorState = {}));
export var PagesValue;
(function (PagesValue) {
    PagesValue[PagesValue["ALL"] = 0] = "ALL";
    PagesValue[PagesValue["ODDS"] = 1] = "ODDS";
    PagesValue[PagesValue["EVENS"] = 2] = "EVENS";
    PagesValue[PagesValue["CUSTOM"] = 3] = "CUSTOM";
})(PagesValue || (PagesValue = {}));
/**
 * A regular expression indicating every character that is accepted as a comma.
 * This list is partially derived from Unicode tables and partially from the
 * translations of IDS_PRINT_PREVIEW_EXAMPLE_PAGE_RANGE_TEXT: Chromium needs to
 * actually accept every example that it provides the user.
 *
 * , U+002C COMMA
 * · U+00B7 MIDDLE DOT aka GEORGIAN COMMA
 * ՝ U+055D ARMENIAN COMMA
 * ، U+060C ARABIC COMMA
 * ༔ U+0F14 TIBETAN MARK GTER TSHEG aka TIBETAN COMMA
 * ၊ U+104A MYANMAR SIGN LITTLE SECTION
 * ፣ U+1363 ETHIOPIC COMMA
 * ᠂ U+1802 MONGOLIAN COMMA
 * ᠈ U+1808 MONGOLIAN MANCHU COMMA
 * 、 U+3001 IDEOGRAPHIC COMMA
 */
export const COMMA_REGEX = /\u002c|\u00b7|\u055d|\u060c|\u0f14|\u104a|\u1363|\u1802|\u1808|\u3001/;
/**
 * Normalizes non-ASCII digits to ASCII digits. This list is partially derived
 * from Unicode tables and partially from the translations of
 * IDS_PRINT_PREVIEW_EXAMPLE_PAGE_RANGE_TEXT: Chromium needs to actually accept
 * every example that it provides the user.
 *
 * Alas, not all localizations can be normalized with this approach (e.g.
 * Chinese/Japanese 1 = 一; 51 = 五十一; 100 = 百). However, this is better than
 * nothing, and at least provides coverage for the examples.
 */
function normalizeNonAsciiDigits(value) {
    const digitSets = [
        // U+0660: ARABIC-INDIC
        { regexRange: /[\u0660-\u0669]/g, firstCodePoint: 0x0660 },
        // U+06F0: EXTENDED ARABIC-INDIC
        { regexRange: /[\u06f0-\u06f9]/g, firstCodePoint: 0x06f0 },
        // U+0966: DEVANAGARI
        { regexRange: /[\u0966-\u096f]/g, firstCodePoint: 0x0966 },
        // U+09E6: BENGALI
        { regexRange: /[\u09e6-\u09ef]/g, firstCodePoint: 0x09e6 },
        // U+0A66: GURMUKHI
        { regexRange: /[\u0a66-\u0a6f]/g, firstCodePoint: 0x0a66 },
        // U+0AE6: GUJARATI
        { regexRange: /[\u0ae6-\u0aef]/g, firstCodePoint: 0x0ae6 },
        // U+0B66: ORIYA
        { regexRange: /[\u0b66-\u0b6f]/g, firstCodePoint: 0x0b66 },
        // U+0C66: TELUGU
        { regexRange: /[\u0c66-\u0c6f]/g, firstCodePoint: 0x0c66 },
        // U+0CE6: KANNADA
        { regexRange: /[\u0ce6-\u0cef]/g, firstCodePoint: 0x0ce6 },
        // U+0E50: THAI
        { regexRange: /[\u0e50-\u0e59]/g, firstCodePoint: 0x0e50 },
        // U+0ED0: LAO
        { regexRange: /[\u0ed0-\u0ed9]/g, firstCodePoint: 0x0ed0 },
        // U+1040: MYANMAR
        { regexRange: /[\u1040-\u1049]/g, firstCodePoint: 0x1040 },
        // U+17E0: KHMER
        { regexRange: /[\u17e0-\u17e9]/g, firstCodePoint: 0x17e0 },
        // U+1810: MONGOLIAN
        { regexRange: /[\u1810-\u1819]/g, firstCodePoint: 0x1810 },
        // U+1946: LIMBU
        { regexRange: /[\u1946-\u194f]/g, firstCodePoint: 0x1946 },
        // U+1B50: BALINESE
        { regexRange: /[\u1b50-\u1b59]/g, firstCodePoint: 0x1b50 },
    ];
    digitSets.forEach(digitSet => {
        value = value.replace(digitSet.regexRange, c => (c.charCodeAt(0) - digitSet.firstCodePoint).toString());
    });
    return value;
}
/**
 * Used in place of Number.parseInt(), to ensure values like '1  2' or '1a2' are
 * not allowed.
 * @param value The value to convert to a number.
 * @return The value converted to a number, or NaN if it cannot be converted.
 */
function parseIntStrict(value) {
    const normalizedValue = normalizeNonAsciiDigits(value.trim());
    if (/^\d+$/.test(normalizedValue)) {
        return Number(normalizedValue);
    }
    return NaN;
}
const PrintPreviewPagesSettingsElementBase = WebUiListenerMixinLit(InputMixin(SettingsMixin(SelectMixin(CrLitElement))));
export class PrintPreviewPagesSettingsElement extends PrintPreviewPagesSettingsElementBase {
    static get is() {
        return 'print-preview-pages-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            pageCount: { type: Number },
            controlsDisabled_: { type: Boolean },
            errorState_: {
                type: Number,
                reflect: true,
            },
            hasError_: { type: Boolean },
            inputString_: { type: String },
            pagesToPrint_: { type: Array },
            rangesToPrint_: { type: Array },
            selection_: { type: Number },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #pageCount_accessor_storage = 0;
    get pageCount() { return this.#pageCount_accessor_storage; }
    set pageCount(value) { this.#pageCount_accessor_storage = value; }
    #controlsDisabled__accessor_storage = false;
    get controlsDisabled_() { return this.#controlsDisabled__accessor_storage; }
    set controlsDisabled_(value) { this.#controlsDisabled__accessor_storage = value; }
    #errorState__accessor_storage = PagesInputErrorState.NO_ERROR;
    get errorState_() { return this.#errorState__accessor_storage; }
    set errorState_(value) { this.#errorState__accessor_storage = value; }
    #hasError__accessor_storage = false;
    get hasError_() { return this.#hasError__accessor_storage; }
    set hasError_(value) { this.#hasError__accessor_storage = value; }
    #inputString__accessor_storage = '';
    get inputString_() { return this.#inputString__accessor_storage; }
    set inputString_(value) { this.#inputString__accessor_storage = value; }
    #pagesToPrint__accessor_storage = [];
    get pagesToPrint_() { return this.#pagesToPrint__accessor_storage; }
    set pagesToPrint_(value) { this.#pagesToPrint__accessor_storage = value; }
    #rangesToPrint__accessor_storage = [];
    get rangesToPrint_() { return this.#rangesToPrint__accessor_storage; }
    set rangesToPrint_(value) { this.#rangesToPrint__accessor_storage = value; }
    #selection__accessor_storage = PagesValue.ALL;
    get selection_() { return this.#selection__accessor_storage; }
    set selection_(value) { this.#selection__accessor_storage = value; }
    /**
     * True if the user's last valid input should be restored to the custom
     * input field. Cleared when the input is set automatically, or the user
     * manually clears the field.
     */
    restoreLastInput_ = true;
    /**
     * Memorizes the user's last non-custom pages setting. Used when
     * `PagesValue.ODDS` and `PagesValue.EVEN` become invalid due to a changed
     * page count.
     */
    restorationValue_ = PagesValue.ALL;
    /**
     * Initialize |selectedValue| in connectedCallback() since this doesn't
     * observe settings.pages, because settings.pages is not sticky.
     */
    connectedCallback() {
        super.connectedCallback();
        this.selectedValue = PagesValue.ALL.toString();
        this.addSettingObserver('pages', () => this.onRangeChange_());
        this.addSettingObserver('pagesPerSheet.value', () => this.onRangeChange_());
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('disabled') ||
            changedPrivateProperties.has('hasError_')) {
            this.controlsDisabled_ = this.computeControlsDisabled_();
        }
        if (changedPrivateProperties.has('inputString_')) {
            this.updatePagesToPrint_();
        }
        if (changedPrivateProperties.has('pagesToPrint_')) {
            this.rangesToPrint_ = this.computeRangesToPrint_();
        }
        if (changedPrivateProperties.has('errorState_') ||
            changedPrivateProperties.has('rangesToPrint_')) {
            this.onRangeChange_();
        }
    }
    firstUpdated() {
        this.addEventListener('input-change', e => this.onInputChange_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('pageCount')) {
            this.onPageCountChange_(this.pageCount, changedProperties.get('pageCount'));
        }
        if (changedPrivateProperties.has('selection_')) {
            this.onSelectionChange_();
        }
    }
    /** The cr-input field element for InputMixin. */
    getInput() {
        return this.$.pageSettingsCustomInput;
    }
    setSelectedValue_(value) {
        this.selectedValue = value.toString();
        this.shadowRoot.querySelector('select').dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
    }
    onInputChange_(e) {
        if (this.inputString_ !== e.detail) {
            this.restoreLastInput_ = true;
        }
        this.inputString_ = e.detail;
    }
    onProcessSelectChange(value) {
        this.selection_ = parseInt(value, 10);
    }
    onTransitionend_() {
        if (this.selection_ === PagesValue.CUSTOM) {
            this.$.pageSettingsCustomInput.inputElement.focus();
        }
    }
    /**
     * @return Whether the controls should be disabled.
     */
    computeControlsDisabled_() {
        // Disable the input if other settings are responsible for the error state.
        return !this.hasError_ && this.disabled;
    }
    /**
     * Updates pages to print and error state based on the validity and
     * current value of the input.
     */
    updatePagesToPrint_() {
        if (this.selection_ !== PagesValue.CUSTOM) {
            this.errorState_ = PagesInputErrorState.NO_ERROR;
            if (!this.pageCount) {
                this.pagesToPrint_ = [];
                return;
            }
            const first = this.selection_ === PagesValue.EVENS ? 2 : 1;
            const step = this.selection_ === PagesValue.ALL ? 1 : 2;
            assert(first === 1 || this.pageCount !== 1);
            const length = Math.floor(1 + (this.pageCount - first) / step);
            this.pagesToPrint_ = Array.from({ length }, (_, i) => step * i + first);
            return;
        }
        else if (this.inputString_ === '') {
            this.errorState_ = PagesInputErrorState.EMPTY;
            return;
        }
        const pages = [];
        const added = {};
        const ranges = this.inputString_.split(COMMA_REGEX);
        const maxPage = this.pageCount;
        for (const range of ranges) {
            if (range === '') {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            const limits = range.split(/\p{Pd}/v);
            if (limits.length > 2) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            let min = parseIntStrict(limits[0]);
            if ((limits[0].length > 0 && Number.isNaN(min)) || min < 1) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (limits.length === 1) {
                if (min > maxPage) {
                    this.errorState_ = PagesInputErrorState.OUT_OF_BOUNDS;
                    this.onRangeChange_();
                    return;
                }
                if (!added.hasOwnProperty(min)) {
                    pages.push(min);
                    added[min] = true;
                }
                continue;
            }
            let max = parseIntStrict(limits[1]);
            if (Number.isNaN(max) && limits[1].length > 0) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (Number.isNaN(min)) {
                min = 1;
            }
            if (Number.isNaN(max)) {
                max = maxPage;
            }
            if (min > max) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (max > maxPage) {
                this.errorState_ = PagesInputErrorState.OUT_OF_BOUNDS;
                this.onRangeChange_();
                return;
            }
            for (let i = min; i <= max; i++) {
                if (!added.hasOwnProperty(i)) {
                    pages.push(i);
                    added[i] = true;
                }
            }
        }
        // Page numbers should be sorted to match the order of the pages in the
        // rendered PDF.
        pages.sort((left, right) => left - right);
        this.errorState_ = PagesInputErrorState.NO_ERROR;
        this.pagesToPrint_ = pages;
    }
    computeRangesToPrint_() {
        if (!this.pagesToPrint_ || this.pagesToPrint_.length === 0 ||
            this.pagesToPrint_[0] === -1 ||
            this.pagesToPrint_.length === this.pageCount) {
            return [];
        }
        let from = this.pagesToPrint_[0];
        let to = this.pagesToPrint_[0];
        const ranges = [];
        for (const page of this.pagesToPrint_.slice(1)) {
            if (page === to + 1) {
                to = page;
                continue;
            }
            ranges.push({ from: from, to: to });
            from = page;
            to = page;
        }
        ranges.push({ from: from, to: to });
        return ranges;
    }
    /**
     * @return The final page numbers, reflecting N-up setting.
     *     Page numbers are 1 indexed, since these numbers are displayed to the
     *     user.
     */
    getNupPages_() {
        const pagesPerSheet = this.getSettingValue('pagesPerSheet');
        if (pagesPerSheet <= 1 || this.pagesToPrint_.length === 0) {
            return this.pagesToPrint_;
        }
        const numPages = Math.ceil(this.pagesToPrint_.length / pagesPerSheet);
        const nupPages = new Array(numPages);
        for (let i = 0; i < nupPages.length; i++) {
            nupPages[i] = i + 1;
        }
        return nupPages;
    }
    /**
     * Updates the model with pages and validity, and adds error styling if
     * needed.
     */
    onRangeChange_() {
        if (this.errorState_ === PagesInputErrorState.EMPTY) {
            this.setSettingValid('pages', true);
            this.hasError_ = false;
            return;
        }
        if (this.errorState_ !== PagesInputErrorState.NO_ERROR) {
            this.hasError_ = true;
            this.setSettingValid('pages', false);
            return;
        }
        const nupPages = this.getNupPages_();
        const rangesChanged = !areRangesEqual(this.rangesToPrint_, this.getSettingValue('ranges'));
        if (rangesChanged ||
            nupPages.length !== this.getSettingValue('pages').length) {
            this.setSetting('pages', nupPages);
        }
        if (rangesChanged) {
            this.setSetting('ranges', this.rangesToPrint_);
        }
        this.setSettingValid('pages', true);
        this.hasError_ = false;
    }
    onSelectBlur_(event) {
        if (this.selection_ !== PagesValue.CUSTOM ||
            event.relatedTarget === this.$.pageSettingsCustomInput) {
            return;
        }
        this.onCustomInputBlur_();
    }
    async onCustomInputBlur_() {
        this.resetAndUpdate();
        await this.shadowRoot.querySelector('cr-input').updateComplete;
        if (this.errorState_ === PagesInputErrorState.EMPTY) {
            // Update with all pages.
            this.shadowRoot.querySelector('cr-input').value =
                this.getAllPagesString_();
            this.inputString_ = this.getAllPagesString_();
            this.resetString();
            this.restoreLastInput_ = false;
        }
        this.fire('custom-input-blurred-for-test');
    }
    /**
     * @return Message to show as hint.
     */
    getHintMessage_() {
        if (this.errorState_ === PagesInputErrorState.NO_ERROR ||
            this.errorState_ === PagesInputErrorState.EMPTY) {
            return '';
        }
        let formattedMessage = '';
        if (this.errorState_ === PagesInputErrorState.INVALID_SYNTAX) {
            formattedMessage = loadTimeData.getStringF('pageRangeSyntaxInstruction', loadTimeData.getString('examplePageRangeText'));
        }
        else {
            formattedMessage = loadTimeData.getStringF('pageRangeLimitInstructionWithValue', this.pageCount);
        }
        return formattedMessage.replace(/<\/b>|<b>/g, '');
    }
    /**
     * @return Whether the document being printed has only one page.
     */
    isSinglePage_() {
        return this.pageCount === 1;
    }
    /**
     * @return Whether to disable the custom input.
     */
    inputDisabled_() {
        return this.selection_ !== PagesValue.CUSTOM || this.controlsDisabled_;
    }
    /**
     * @return Whether to display the custom input.
     */
    shouldShowInput_() {
        return this.selection_ === PagesValue.CUSTOM;
    }
    /**
     * @return A string representing the full page range.
     */
    getAllPagesString_() {
        if (this.pageCount === 0) {
            return '';
        }
        return this.pageCount === 1 ? '1' : `1-${this.pageCount}`;
    }
    onSelectionChange_() {
        const customSelected = this.selection_ === PagesValue.CUSTOM;
        if ((customSelected && !this.restoreLastInput_) ||
            this.errorState_ !== PagesInputErrorState.NO_ERROR) {
            this.restoreLastInput_ = true;
            this.inputString_ = '';
            this.shadowRoot.querySelector('cr-input').value = '';
            this.resetString();
        }
        this.updatePagesToPrint_();
    }
    onPageCountChange_(current, previous) {
        // Remember non-custom page settings when the page count changes to 1, so
        // they can be re-applied if the page count exceeds 1 again.
        if (this.selection_ !== PagesValue.CUSTOM) {
            if (current === 1) {
                this.restorationValue_ = this.selection_;
                this.setSelectedValue_(PagesValue.ALL);
            }
            else if (previous === 1) {
                assert(this.restorationValue_ !== PagesValue.CUSTOM);
                this.setSelectedValue_(this.restorationValue_);
            }
        }
        // Reset the custom input to the new "all pages" value if it is equal to the
        // full page range and was either set automatically, or would become invalid
        // due to the page count change.
        const resetCustom = this.selection_ === PagesValue.CUSTOM &&
            !!this.pagesToPrint_ && this.pagesToPrint_.length === previous &&
            (current < previous || !this.restoreLastInput_);
        if (resetCustom) {
            this.shadowRoot.querySelector('cr-input').value =
                this.getAllPagesString_();
            this.inputString_ = this.getAllPagesString_();
            this.resetString();
        }
        else {
            this.updatePagesToPrint_();
        }
    }
}
customElements.define(PrintPreviewPagesSettingsElement.is, PrintPreviewPagesSettingsElement);
