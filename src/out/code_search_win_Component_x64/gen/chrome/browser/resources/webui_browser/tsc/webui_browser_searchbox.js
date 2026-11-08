// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { SearchboxMixin } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './webui_browser_searchbox.css.js';
import { getHtml } from './webui_browser_searchbox.html.js';
import { SearchboxSelectionMixin } from '//resources/cr_components/searchbox/searchbox_selection_mixin.js';
/**
 * @return Whether the Unbounded Element API is available in this context.
 */
function isUnboundedSupported() {
    return 'showUnboundedElement' in HTMLElement.prototype;
}
const WebuiBrowserSearchboxElementBase = SearchboxMixin(SearchboxSelectionMixin(I18nMixinLit(WebUiListenerMixinLit(CrLitElement))));
export class WebuiBrowserSearchboxElement extends WebuiBrowserSearchboxElementBase {
    get isAimButtonVisible() {
        return false;
    }
    get showContextEntrypoint() {
        return false;
    }
    get virtualFocusEnabled() {
        return loadTimeData.valueExists('webuiBrowserVirtualFocusNavigation') &&
            loadTimeData.getBoolean('webuiBrowserVirtualFocusNavigation');
    }
    static get is() {
        return 'webui-browser-searchbox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            placeholderText: {
                type: String,
                reflect: true,
                notify: true,
            },
            searchboxChromeRefreshTheming: {
                type: Boolean,
                reflect: true,
            },
            searchboxSteadyStateShadow: {
                type: Boolean,
                reflect: true,
            },
            searchboxIcon_: { type: String },
            searchboxVoiceSearchEnabled_: {
                type: Boolean,
                reflect: true,
            },
            searchboxLensSearchEnabled_: {
                type: Boolean,
                reflect: true,
            },
            useWebkitSearchIcons_: {
                type: Boolean,
                reflect: true,
            },
            unboundedSupported_: { type: Boolean },
        };
    }
    #placeholderText_accessor_storage = '';
    get placeholderText() { return this.#placeholderText_accessor_storage; }
    set placeholderText(value) { this.#placeholderText_accessor_storage = value; }
    #searchboxChromeRefreshTheming_accessor_storage = loadTimeData.getBoolean('searchboxCr23Theming');
    get searchboxChromeRefreshTheming() { return this.#searchboxChromeRefreshTheming_accessor_storage; }
    set searchboxChromeRefreshTheming(value) { this.#searchboxChromeRefreshTheming_accessor_storage = value; }
    #searchboxSteadyStateShadow_accessor_storage = loadTimeData.getBoolean('searchboxCr23SteadyStateShadow');
    get searchboxSteadyStateShadow() { return this.#searchboxSteadyStateShadow_accessor_storage; }
    set searchboxSteadyStateShadow(value) { this.#searchboxSteadyStateShadow_accessor_storage = value; }
    #searchboxIcon__accessor_storage = loadTimeData.getString('searchboxDefaultIcon');
    get searchboxIcon_() { return this.#searchboxIcon__accessor_storage; }
    set searchboxIcon_(value) { this.#searchboxIcon__accessor_storage = value; }
    #searchboxVoiceSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxVoiceSearch');
    get searchboxVoiceSearchEnabled_() { return this.#searchboxVoiceSearchEnabled__accessor_storage; }
    set searchboxVoiceSearchEnabled_(value) { this.#searchboxVoiceSearchEnabled__accessor_storage = value; }
    #searchboxLensSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxLensSearch');
    get searchboxLensSearchEnabled_() { return this.#searchboxLensSearchEnabled__accessor_storage; }
    set searchboxLensSearchEnabled_(value) { this.#searchboxLensSearchEnabled__accessor_storage = value; }
    #useWebkitSearchIcons__accessor_storage = false;
    get useWebkitSearchIcons_() { return this.#useWebkitSearchIcons__accessor_storage; }
    set useWebkitSearchIcons_(value) { this.#useWebkitSearchIcons__accessor_storage = value; }
    pageHandler_;
    callbackRouter_;
    autocompleteResultChangedListenerId_ = null;
    #unboundedSupported__accessor_storage = isUnboundedSupported();
    // Whether the Unbounded Element API is available. If so, `#inputWrapper`
    // (the input and the dropdown) is shown in a separate OS window while the
    // dropdown is visible, so that it can extend beyond the browser window.
    get unboundedSupported_() { return this.#unboundedSupported__accessor_storage; }
    set unboundedSupported_(value) { this.#unboundedSupported__accessor_storage = value; }
    // Set when the platform requested an interactive dismissal of the unbounded
    // window and it was canceled (see `onInputWrapperBeforetoggle_()`). The
    // platform requests one for either:
    // - A pointer press (click or tap) outside of the unbounded window. Nothing
    //   needs to be done here: the press is still delivered to the page.
    // - An Escape key press. Some platforms consume the Escape keydown in that
    //   case (e.g. Aura), so the searchbox only sees the keyup, and the keydown
    //   needs to be replayed on keyup.
    pendingInteractiveDismissal_ = false;
    // Whether the searchbox received the (trusted) keydown of the current Escape
    // key press. Whether the platform consumes it is platform-specific: e.g. on
    // Aura the unbounded window consumes it, whereas on Mac the unbounded window
    // never becomes the key window, so the keydown is delivered to the page as
    // usual and the window is not dismissed. The keydown is only replayed if it
    // was not received, so that Escape is never handled twice.
    escapeKeydownReceived_ = false;
    boundOnDocumentPointerdown_ = () => {
        this.pendingInteractiveDismissal_ = false;
    };
    constructor() {
        super();
        const browserProxy = SearchboxBrowserProxy.getInstance();
        this.pageHandler_ = browserProxy.handler;
        this.callbackRouter_ = browserProxy.callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.autocompleteResultChangedListenerId_ =
            this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged.bind(this));
        // A pointer press (click or tap) outside of the unbounded window requests
        // an interactive dismissal too. Clear the flag set for it once the press
        // reaches the page, so that it can't cause a later Escape keyup to be
        // replayed as a keydown.
        document.addEventListener('pointerdown', this.boundOnDocumentPointerdown_, { capture: true });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.autocompleteResultChangedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.autocompleteResultChangedListenerId_);
            this.autocompleteResultChangedListenerId_ = null;
        }
        document.removeEventListener('pointerdown', this.boundOnDocumentPointerdown_, { capture: true });
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('searchboxChromeRefreshTheming')) {
            this.useWebkitSearchIcons_ = this.searchboxChromeRefreshTheming;
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.initialInputScrollHeight = this.$.input.scrollHeight;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('dropdownIsVisible')) {
            // Runs after the dropdown has been (un)hidden in the DOM but before the
            // next frame is produced, so the unbounded window (if any) is sized to
            // include the dropdown.
            this.updateUnboundedWindow_();
        }
    }
    //========================================================================
    // Unbounded Element
    //========================================================================
    getUnboundedWrapper_() {
        return this.$.inputWrapper;
    }
    isUnboundedWindowShown_() {
        return this.unboundedSupported_ &&
            this.$.inputWrapper.matches(':unbounded');
    }
    /**
     * Shows `#inputWrapper` in a separate OS window only while the dropdown is
     * visible. When the dropdown is hidden, no separate window exists and
     * `#inputWrapper` is rendered as part of the browser window. Since
     * `#inputWrapper` is always `visibility: visible`, switching between the two
     * never produces a frame in which it is hidden.
     */
    updateUnboundedWindow_() {
        if (!this.unboundedSupported_) {
            return;
        }
        const isShown = this.isUnboundedWindowShown_();
        if (this.dropdownIsVisible && !isShown) {
            this.getUnboundedWrapper_().showUnboundedElement().catch(err => this.handleUnboundedError_('showUnboundedElement', err));
        }
        else if (!this.dropdownIsVisible && isShown) {
            this.getUnboundedWrapper_().hideUnboundedElement().catch(err => this.handleUnboundedError_('hideUnboundedElement', err));
        }
    }
    handleUnboundedError_(operation, err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
            // Expected if the window was hidden before it finished showing (e.g.
            // the dropdown was opened and closed quickly).
            return;
        }
        console.error(`${operation} failed:`, err);
    }
    onInputWrapperBeforetoggle_(e) {
        const toggleEvent = e;
        if (toggleEvent.newState !== 'closed') {
            return;
        }
        if (!e.cancelable) {
            // The unbounded window is closing and this can't be prevented. This is
            // the case for `hideUnboundedElement()`, which is only called once the
            // dropdown is already hidden. Otherwise, the platform is closing the
            // window regardless of the searchbox (e.g. depending on the platform,
            // when the user switches to another OS window). In that case,
            // `#inputWrapper` goes back to being rendered as part of the browser
            // window, where the dropdown would be clipped by the bounds of the
            // browser window, so hide the dropdown as if it were dismissed. Since
            // `#inputWrapper` is always `visibility: visible`, this doesn't flicker.
            // If the focus also leaves the searchbox, the regular focusout path
            // stops autocomplete as usual.
            this.dropdownIsVisible = false;
            return;
        }
        // Cancelable 'beforetoggle' events are fired for interactive dismissals
        // requested by the platform: an Escape key press or a pointer press (click
        // or tap) outside of the unbounded window. The visibility of the dropdown
        // (and therefore of the unbounded window) is owned by the searchbox, so
        // cancel the dismissal:
        // - For an outside press, the press is still delivered and closes the
        //   dropdown through the regular focusout path if focus leaves the
        //   searchbox.
        // - For Escape, if the keydown was consumed by the platform, it is replayed
        //   on the following keyup so that the searchbox can apply the omnibox
        //   Escape behavior (e.g. revert the selection to the default match first).
        e.preventDefault();
        this.pendingInteractiveDismissal_ = true;
    }
    onInputWrapperToggle_(e) {
        const toggleEvent = e;
        if (toggleEvent.newState === 'closed') {
            this.pendingInteractiveDismissal_ = false;
            return;
        }
        // The dropdown may have been hidden while the window was being shown.
        if (!this.dropdownIsVisible) {
            this.updateUnboundedWindow_();
        }
    }
    onInputWrapperKeydown_(e) {
        if (e.key === 'Escape' && e.isTrusted) {
            this.escapeKeydownReceived_ = true;
        }
        return this.onInputWrapperKeydown(e);
    }
    onInputWrapperKeyup_(e) {
        if (e.key !== 'Escape') {
            return;
        }
        const keydownReceived = this.escapeKeydownReceived_;
        this.escapeKeydownReceived_ = false;
        if (!this.pendingInteractiveDismissal_) {
            return;
        }
        this.pendingInteractiveDismissal_ = false;
        if (keydownReceived || !this.isUnboundedWindowShown_()) {
            return;
        }
        // Replay the Escape keydown consumed by the unbounded window.
        this.$.input.inputElement.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            bubbles: true,
            cancelable: true,
            composed: true,
            shiftKey: e.shiftKey,
            ctrlKey: e.ctrlKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
        }));
    }
    onInputWrapperFocusout_(e) {
        this.pendingInteractiveDismissal_ = false;
        this.escapeKeydownReceived_ = false;
        this.onInputWrapperFocusout(e);
    }
    focusInput() {
        this.$.input.focus();
    }
    setInputText(text) {
        this.$.input.setInputText(text);
    }
    selectAll() {
        this.$.input.select();
    }
    //========================================================================
    // SearchboxMixin abstract method implementations
    //========================================================================
    getInputElement() {
        return this.$.input;
    }
    getDropdownElement() {
        return this.$.matches;
    }
    getWrapperElement() {
        return this.$.inputWrapper;
    }
    pageHandler() {
        return this.pageHandler_;
    }
    shouldShowVoiceLens_(isEnabled) {
        if (!isEnabled) {
            return false;
        }
        if (!this.isInputEmpty()) {
            return false;
        }
        return true;
    }
    //========================================================================
    // Event handlers
    //========================================================================
    onInputFocusin_() {
        this.pageHandler_.onFocusChanged(true);
    }
    computePlaceholderText_() {
        if (this.placeholderText) {
            return this.placeholderText;
        }
        return this.i18n('searchBoxHint');
    }
    onSearchboxInputTextUpdated_(e) {
        this.onSearchboxInputTextUpdated(e);
    }
    onVoiceSearchClick_() {
        this.dispatchEvent(new Event('open-voice-search'));
    }
    onLensSearchClick_() {
        this.dropdownIsVisible = false;
        this.dispatchEvent(new Event('open-lens-search'));
    }
}
customElements.define(WebuiBrowserSearchboxElement.is, WebuiBrowserSearchboxElement);
