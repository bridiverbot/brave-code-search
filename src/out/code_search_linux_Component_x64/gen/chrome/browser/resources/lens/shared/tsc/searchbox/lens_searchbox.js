// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import '//resources/cr_components/searchbox/searchbox_icon.js';
import '//resources/cr_components/searchbox/searchbox_thumbnail.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { SearchboxMixin } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './lens_searchbox.css.js';
import { getHtml } from './lens_searchbox.html.js';
// LINT.IfChange(GhostLoaderTagName)
const LENS_GHOST_LOADER_TAG_NAME = 'cr-searchbox-ghost-loader';
import { SearchboxSelectionMixin } from '//resources/cr_components/searchbox/searchbox_selection_mixin.js';
const LensSearchboxElementBase = SearchboxMixin(SearchboxSelectionMixin(I18nMixinLit(WebUiListenerMixinLit(CrLitElement))));
export class LensSearchboxElement extends LensSearchboxElementBase {
    static get is() {
        return 'cr-lens-searchbox';
    }
    get isAimButtonVisible() {
        return false;
    }
    get showContextEntrypoint() {
        return false;
    }
    get virtualFocusEnabled() {
        return loadTimeData.valueExists('lensOverlayVirtualFocusNavigation') &&
            loadTimeData.getBoolean('lensOverlayVirtualFocusNavigation');
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
            placeholderText: {
                type: String,
                reflect: true,
                notify: true,
            },
            //========================================================================
            // Private properties
            //========================================================================
            /** Searchbox default icon (i.e., Google G icon or the search loupe). */
            searchboxIcon_: { type: String },
            thumbnailUrl_: { type: String },
            isThumbnailDeletable_: { type: Boolean },
            searchboxLensSearchEnabled_: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #placeholderText_accessor_storage = '';
    get placeholderText() { return this.#placeholderText_accessor_storage; }
    set placeholderText(value) { this.#placeholderText_accessor_storage = value; }
    #searchboxIcon__accessor_storage = loadTimeData.getString('searchboxDefaultIcon');
    get searchboxIcon_() { return this.#searchboxIcon__accessor_storage; }
    set searchboxIcon_(value) { this.#searchboxIcon__accessor_storage = value; }
    #searchboxLensSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxLensSearch');
    get searchboxLensSearchEnabled_() { return this.#searchboxLensSearchEnabled__accessor_storage; }
    set searchboxLensSearchEnabled_(value) { this.#searchboxLensSearchEnabled__accessor_storage = value; }
    #thumbnailUrl__accessor_storage = '';
    get thumbnailUrl_() { return this.#thumbnailUrl__accessor_storage; }
    set thumbnailUrl_(value) { this.#thumbnailUrl__accessor_storage = value; }
    #isThumbnailDeletable__accessor_storage = false;
    get isThumbnailDeletable_() { return this.#isThumbnailDeletable__accessor_storage; }
    set isThumbnailDeletable_(value) { this.#isThumbnailDeletable__accessor_storage = value; }
    proxy_ = SearchboxBrowserProxy.getInstance();
    autocompleteResultChangedListenerId_ = null;
    thumbnailChangedListenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.autocompleteResultChangedListenerId_ =
            this.proxy_.callbackRouter.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged.bind(this));
        this.thumbnailChangedListenerId_ =
            this.proxy_.callbackRouter.setThumbnail.addListener(this.onSetThumbnail_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.autocompleteResultChangedListenerId_);
        this.proxy_.callbackRouter.removeListener(this.autocompleteResultChangedListenerId_);
        this.autocompleteResultChangedListenerId_ = null;
        assert(this.thumbnailChangedListenerId_);
        this.proxy_.callbackRouter.removeListener(this.thumbnailChangedListenerId_);
        this.thumbnailChangedListenerId_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('thumbnailUrl_')) {
            this.showThumbnail = !!this.thumbnailUrl_;
        }
        if (changedPrivateProperties.has('result') ||
            changedPrivateProperties.has('selection') ||
            changedPrivateProperties.has('selectedMatchIndex')) {
            this.selectedMatch = this.computeSelectedMatch_();
        }
    }
    onInputWrapperFocusout(e) {
        const newlyFocusedEl = e.relatedTarget;
        // If this is a Lens searchbox, treat the ghost loader as keeping searchbox
        // focus.
        // TODO(crbug.com/380467089): This workaround wouldn't be needed
        // if the ghost loader was part of the searchbox element. Remove
        // this workaround once they are combined.
        if (newlyFocusedEl?.tagName.toLowerCase() === LENS_GHOST_LOADER_TAG_NAME) {
            return;
        }
        super.onInputWrapperFocusout(e);
    }
    onFocusin(e) {
        // Check event path to ensure input is not focused from this function if
        // thumbnail is told to focus. This is better than stopping propagation in
        // case other higher components depend on focus in events.
        const path = e.composedPath();
        if (path.some(el => el.tagName === 'CR-SEARCHBOX-THUMBNAIL')) {
            return;
        }
        this.proxy_.handler.onFocusChanged(true);
        this.focusInput();
    }
    blurInput() {
        this.$.input.blur();
    }
    focusInput() {
        this.$.input.focus();
    }
    hasThumbnail() {
        return !!this.thumbnailUrl_;
    }
    //============================================================================
    // SearchboxMixin overrides
    //============================================================================
    getInputElement() {
        return this.$.input;
    }
    getDropdownElement() {
        const matches = this.shadowRoot.querySelector('#matches');
        assert(matches);
        return matches;
    }
    pageHandler() {
        return this.proxy_.handler;
    }
    getWrapperElement() {
        return this.$.inputWrapper;
    }
    onSearchboxInputTextUpdated(e) {
        // Query autocomplete for Lens searchbox even on empty input.
        const input = e.detail.value;
        this.queryAutocomplete(input, /*preventInlineAutocomplete=*/ e.detail.isComposing, 
        /*isOnFocus=*/ !input);
    }
    handleKeyNavigation(e) {
        if (this.showThumbnail) {
            const thumbnail = this.shadowRoot.querySelector('cr-searchbox-thumbnail');
            if (thumbnail === this.shadowRoot.activeElement) {
                if (e.key === 'Backspace' || e.key === 'Enter') {
                    // Remove thumbnail, focus input, and notify browser.
                    this.thumbnailUrl_ = '';
                    this.focusInput();
                    this.clearAutocompleteMatches();
                    this.proxy_.handler.onThumbnailRemoved();
                    const inputValue = this.$.input.getInputValue();
                    // Clearing the autocomplete matches above doesn't allow for
                    // navigation directly after removing the thumbnail. Must manually
                    // query autocomplete after removing the thumbnail since the
                    // thumbnail isn't part of the text input.
                    this.queryAutocomplete(inputValue, /*preventInlineAutocomplete=*/ false, 
                    /*isOnFocus=*/ !inputValue);
                    e.preventDefault();
                }
                else if (e.key === 'Tab' && !e.shiftKey) {
                    this.focusInput();
                    e.preventDefault();
                }
                else if (this.dropdownIsVisible &&
                    (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
                    // If the dropdown is visible, arrowing up and down unfocuses the
                    // thumbnail and follows standard arrow up/down behavior (selects
                    // the next/previous match).
                    this.focusInput();
                }
            }
            else if (this.isThumbnailDeletable_ &&
                this.$.input.inputElement.selectionStart === 0 &&
                this.$.input.inputElement.selectionEnd === 0 &&
                this.$.input === this.shadowRoot.activeElement &&
                (e.key === 'Backspace' || (e.key === 'Tab' && e.shiftKey))) {
                // Backspacing or shift-tabbing the thumbnail results in the thumbnail
                // being focused.
                thumbnail?.focus();
                e.preventDefault();
            }
        }
        super.handleKeyNavigation(e);
    }
    queryInputAutocomplete() {
        const input = this.$.input.inputElement.value;
        this.queryAutocomplete(input, /*preventInlineAutocomplete=*/ false, 
        /*isOnFocus=*/ !input);
    }
    computeSelectedMatch_() {
        if (!this.result || !this.result.matches) {
            return null;
        }
        return this.result.matches[this.matchIndex] || null;
    }
    //============================================================================
    // Callbacks
    //============================================================================
    onSetThumbnail_(thumbnailUrl, isDeletable) {
        this.thumbnailUrl_ = thumbnailUrl;
        this.isThumbnailDeletable_ = isDeletable;
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onRemoveThumbnailClick_() {
        /* Remove thumbnail, focus input, and notify browser. */
        this.thumbnailUrl_ = '';
        this.focusInput();
        this.clearAutocompleteMatches();
        this.proxy_.handler.onThumbnailRemoved();
        // Clearing the autocomplete matches above doesn't allow for
        // navigation directly after removing the thumbnail. Must manually
        // query autocomplete after removing the thumbnail since the
        // thumbnail isn't part of the text input.
        const inputValue = this.$.input.getInputValue();
        this.queryAutocomplete(inputValue, /*preventInlineAutocomplete=*/ false, 
        /*isOnFocus=*/ !inputValue);
    }
    onLensSearchClick_() {
        this.dropdownIsVisible = false;
        this.fire('open-lens-search');
    }
    //============================================================================
    // Helpers
    //============================================================================
    computePlaceholderText_(placeholderText) {
        return placeholderText ||
            this.i18n(this.showThumbnail ? 'searchBoxHintMultimodal' : 'searchBoxHint');
    }
    getThumbnailTabindex_() {
        // If the thumbnail can't be deleted, returning an empty string will set the
        // tabindex to nothing, which will make the thumbnail not focusable.
        return this.isThumbnailDeletable_ ? '1' : '';
    }
}
customElements.define(LensSearchboxElement.is, LensSearchboxElement);
