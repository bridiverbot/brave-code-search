// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { getUrlForCss } from '//resources/js/icon.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SecondaryTextPlacement, SuggestStyle } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import { ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { computeImageUrl } from './common.js';
import { getCss } from './composebox_match.css.js';
import { getHtml } from './composebox_match.html.js';
import { ComposeboxProxyImpl, createAutocompleteMatch } from './composebox_proxy.js';
export var BaseLayout;
(function (BaseLayout) {
    BaseLayout["TEXT"] = "text";
    BaseLayout["IMAGE"] = "image";
})(BaseLayout || (BaseLayout = {}));
// Displays an autocomplete match
export class ComposeboxMatchElement extends CrLitElement {
    static get is() {
        return 'cr-composebox-match';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            //========================================================================
            // Public properties
            //========================================================================
            match: { type: Object },
            overrideClampLineNum: {
                type: Number,
                reflect: true,
            },
            /**
             * Index of the match in the autocomplete result. Used to inform embedder
             * of events such as deletion, click, etc.
             */
            matchIndex: { type: Number },
            resultSequenceId: { type: Number },
            toolMode: {
                type: Number,
                reflect: true,
            },
            removeButtonTitle_: { type: String },
            richImageSuggestionsEnabled: { type: Boolean },
            suggestStyle: {
                type: String,
                reflect: true,
                attribute: 'suggest-style',
            },
            baseLayout: {
                type: String,
                reflect: true,
                attribute: 'base-layout',
            },
            /** Where the secondary text is rendered relative to the primary text. */
            secondaryTextPlacement: {
                type: String,
                reflect: true,
            },
            loading: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #loading_accessor_storage = false;
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    #match_accessor_storage = createAutocompleteMatch();
    get match() { return this.#match_accessor_storage; }
    set match(value) { this.#match_accessor_storage = value; }
    #overrideClampLineNum_accessor_storage = -1;
    get overrideClampLineNum() { return this.#overrideClampLineNum_accessor_storage; }
    set overrideClampLineNum(value) { this.#overrideClampLineNum_accessor_storage = value; }
    #matchIndex_accessor_storage = -1;
    get matchIndex() { return this.#matchIndex_accessor_storage; }
    set matchIndex(value) { this.#matchIndex_accessor_storage = value; }
    #resultSequenceId_accessor_storage = 0;
    get resultSequenceId() { return this.#resultSequenceId_accessor_storage; }
    set resultSequenceId(value) { this.#resultSequenceId_accessor_storage = value; }
    #toolMode_accessor_storage = ToolMode.kUnspecified;
    get toolMode() { return this.#toolMode_accessor_storage; }
    set toolMode(value) { this.#toolMode_accessor_storage = value; }
    #richImageSuggestionsEnabled_accessor_storage = false;
    get richImageSuggestionsEnabled() { return this.#richImageSuggestionsEnabled_accessor_storage; }
    set richImageSuggestionsEnabled(value) { this.#richImageSuggestionsEnabled_accessor_storage = value; }
    #suggestStyle_accessor_storage = 'default';
    get suggestStyle() { return this.#suggestStyle_accessor_storage; }
    set suggestStyle(value) { this.#suggestStyle_accessor_storage = value; }
    #baseLayout_accessor_storage = BaseLayout.TEXT;
    get baseLayout() { return this.#baseLayout_accessor_storage; }
    set baseLayout(value) { this.#baseLayout_accessor_storage = value; }
    #secondaryTextPlacement_accessor_storage = 'in-front-of-primary-text';
    get secondaryTextPlacement() { return this.#secondaryTextPlacement_accessor_storage; }
    set secondaryTextPlacement(value) { this.#secondaryTextPlacement_accessor_storage = value; }
    searchboxHandler_;
    #removeButtonTitle__accessor_storage = loadTimeData.getString('removeSuggestion');
    get removeButtonTitle_() { return this.#removeButtonTitle__accessor_storage; }
    set removeButtonTitle_(value) { this.#removeButtonTitle__accessor_storage = value; }
    get isRichImage() {
        return this.suggestStyle === 'rich-image';
    }
    constructor() {
        super();
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    }
    connectedCallback() {
        super.connectedCallback();
        // Use mousedown to avoid clicks being swallowed by focusin.
        this.addEventListener('click', (event) => this.onMouseClick_(event));
        this.addEventListener('focusin', () => this.onMatchFocusin_());
        // Prevent default mousedown behavior (e.g., focus) to avoid layout shifts
        // that could interfere with click events, especially for ZPS suggestions.
        this.addEventListener('mousedown', (event) => {
            event.preventDefault();
        });
        this.style.setProperty('--clamp-line-num', `${this.overrideClampLineNum}`);
    }
    // Maps the backend SuggestStyle to a WebUI suggest-style string attribute.
    // When adding support for new SuggestStyle enum values (e.g. kEnriched,
    // kAnnotated), add a case here and define any variant-specific CSS overrides
    // in composebox_match.css.
    computeSuggestStyle_() {
        switch (this.match.suggestTemplate.style) {
            case SuggestStyle.kRichImage:
                return (this.richImageSuggestionsEnabled &&
                    Boolean(this.match.suggestTemplate.image?.url)) ?
                    'rich-image' :
                    'default';
            case SuggestStyle.kDefault:
            default:
                return 'default';
        }
    }
    // Maps the current suggestion to its base layout category (TEXT vs IMAGE).
    // New text-based suggestions automatically inherit the shared text layout
    // (height, hover, selection, icons, and text clamping) from
    // base-layout="text".
    computeBaseLayout_() {
        switch (this.suggestStyle) {
            case 'rich-image':
                return BaseLayout.IMAGE;
            case 'default':
            default:
                return BaseLayout.TEXT;
        }
    }
    computeSecondaryTextPlacement_() {
        if (this.match.suggestTemplate.secondaryTextPlacement ===
            SecondaryTextPlacement.kBelowPrimaryText) {
            return 'below-primary-text';
        }
        return 'in-front-of-primary-text';
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('match') ||
            changedProperties.has('richImageSuggestionsEnabled')) {
            this.suggestStyle = this.computeSuggestStyle_();
            this.baseLayout = this.computeBaseLayout_();
            this.secondaryTextPlacement = this.computeSecondaryTextPlacement_();
        }
    }
    iconPath_() {
        return this.match.iconPath || '';
    }
    imageStyle_() {
        if (!this.isRichImage || this.loading) {
            return '';
        }
        const src = computeImageUrl(this.match.suggestTemplate.image?.url);
        return src ? `background-image: ${getUrlForCss(src)};` : '';
    }
    onMatchFocusin_() {
        if (this.loading) {
            return;
        }
        this.fire('match-focusin', {
            index: this.matchIndex,
        });
    }
    onMouseClick_(e) {
        if (this.loading || e.button > 1) {
            // Only handle main (generally left) and middle button presses, and ignore
            // clicks while cards are in a loading state.
            return;
        }
        e.preventDefault(); // Prevents default browser action (navigation).
        const event = new CustomEvent('match-pre-accept', {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: { match: this.match },
        });
        this.dispatchEvent(event);
        if (event.defaultPrevented) {
            return;
        }
        this.searchboxHandler_.openAutocompleteMatch(this.resultSequenceId, this.matchIndex, this.match.destinationUrl, 
        /*areMatchesShowing=*/ true, 
        /*mouseButton=*/ e.button || 0, {
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        }, 
        /*viaKeyboard=*/ false);
        this.fire('match-click', {
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        });
    }
    onRemoveButtonClick_(e) {
        if (e.button !== 0) {
            // Only handle main (generally left) button presses.
            return;
        }
        e.preventDefault(); // Prevents default browser action (navigation).
        e.stopPropagation(); // Prevents <iron-selector> from selecting the match.
        this.searchboxHandler_.deleteAutocompleteMatch(this.matchIndex, this.match.destinationUrl);
    }
    onRemoveButtonMousedown_(e) {
        e.preventDefault(); // Prevents default browser action (focus).
    }
    isRemoveButtonFocused() {
        return this.shadowRoot?.activeElement === this.$.remove;
    }
    /**
     * Returns whether pressing Tab (or Shift-Tab when `shiftKey` is true) while
     * this match is active will move focus outside of this match element rather
     * than between internal focusable controls (such as the remove button).
     */
    willTabExitMatch(shiftKey = false) {
        return shiftKey ?
            !this.isRemoveButtonFocused() :
            (!this.match.supportsDeletion || this.isRemoveButtonFocused());
    }
}
customElements.define(ComposeboxMatchElement.is, ComposeboxMatchElement);
