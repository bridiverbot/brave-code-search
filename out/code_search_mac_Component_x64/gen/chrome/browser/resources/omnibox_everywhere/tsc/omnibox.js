// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import '//resources/cr_components/searchbox/searchbox_compose_button.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import './profile_icon.js';
import { recordContextAdditionMethod } from '//resources/cr_components/composebox/common.js';
import { HelpBubbleMixinLit } from '//resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { DragAndDropHandler } from '//resources/cr_components/search/drag_drop_handler.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { SearchboxMixin } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { SearchboxSelectionMixin } from '//resources/cr_components/searchbox/searchbox_selection_mixin.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SelectionLineState } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { OmniboxEverywhereBrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './omnibox.css.js';
import { getHtml } from './omnibox.html.js';
// Note: Copied from omnibox_popup_searchbox.ts.
const OmniboxEverywhereOmniboxElementBase = HelpBubbleMixinLit(SearchboxMixin(SearchboxSelectionMixin(I18nMixinLit(WebUiListenerMixinLit(CrLitElement)))));
export class OmniboxEverywhereOmniboxElement extends OmniboxEverywhereOmniboxElementBase {
    get isAimButtonVisible() {
        return this.composeButtonEnabled;
    }
    get showContextEntrypoint() {
        return this.isFuseboxEnabled;
    }
    openContextMenu() {
        this.onContextMenuEntrypointClick_();
    }
    static get is() {
        return 'omnibox-everywhere-omnibox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            multiLineEnabled: {
                type: Boolean,
                reflect: true,
            },
            singleLineOnInlineAutocomplete: {
                type: Boolean,
            },
            virtualFocusEnabled: {
                type: Boolean,
            },
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
            animationState: {
                type: String,
                reflect: true,
            },
            inVoiceSearchMode: {
                type: Boolean,
                reflect: true,
            },
            composeButtonEnabled: { type: Boolean, reflect: true },
            profileAvatarUrl_: { type: String },
            isFuseboxEnabled: { type: Boolean, reflect: true },
            hasUserInput_: {
                type: Boolean,
                reflect: true,
                attribute: 'has-user-input',
            },
            ntpRealboxDynamicAiModeButtonEnabled_: { type: Boolean },
            inputState_: { type: Object },
            searchboxLayoutMode: { type: String },
            contextManagementInComposeboxEnabled: { type: Boolean },
            isDraggingFile: {
                reflect: true,
                type: Boolean,
            },
            energyEffectAnimationEnabled_: { type: Boolean },
            fileContextEnabled_: { type: Boolean },
            entrypointName: { type: String },
            isScreenshotMenuOpen: {
                type: Boolean,
                reflect: true,
            },
            isContextMenuOpen: {
                type: Boolean,
                reflect: true,
                attribute: 'is-context-menu-open',
            },
            isActive: {
                type: Boolean,
                reflect: true,
                attribute: 'is-active',
            },
            isLensHelpBubbleShowing: { type: Boolean },
        };
    }
    #isActive_accessor_storage = true;
    get isActive() { return this.#isActive_accessor_storage; }
    set isActive(value) { this.#isActive_accessor_storage = value; }
    #isLensHelpBubbleShowing_accessor_storage = false;
    get isLensHelpBubbleShowing() { return this.#isLensHelpBubbleShowing_accessor_storage; }
    set isLensHelpBubbleShowing(value) { this.#isLensHelpBubbleShowing_accessor_storage = value; }
    #multiLineEnabled_accessor_storage = loadTimeData.getBoolean('searchboxMultiline');
    get multiLineEnabled() { return this.#multiLineEnabled_accessor_storage; }
    set multiLineEnabled(value) { this.#multiLineEnabled_accessor_storage = value; }
    #singleLineOnInlineAutocomplete_accessor_storage = loadTimeData.getBoolean('singleLineOnInlineAutocomplete');
    // Keeps the input on a single line during inline autocomplete when enabled,
    // preventing multiline mode from suppressing the suggestions dropdown.
    get singleLineOnInlineAutocomplete() { return this.#singleLineOnInlineAutocomplete_accessor_storage; }
    set singleLineOnInlineAutocomplete(value) { this.#singleLineOnInlineAutocomplete_accessor_storage = value; }
    #virtualFocusEnabled_accessor_storage = loadTimeData.valueExists('omniboxEverywhereVirtualFocusNavigation') &&
        loadTimeData.getBoolean('omniboxEverywhereVirtualFocusNavigation');
    get virtualFocusEnabled() { return this.#virtualFocusEnabled_accessor_storage; }
    set virtualFocusEnabled(value) { this.#virtualFocusEnabled_accessor_storage = value; }
    #placeholderText_accessor_storage = '';
    get placeholderText() { return this.#placeholderText_accessor_storage; }
    set placeholderText(value) { this.#placeholderText_accessor_storage = value; }
    #entrypointName_accessor_storage = 'OmniboxEverywhere';
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #isDraggingFile_accessor_storage = false;
    get isDraggingFile() { return this.#isDraggingFile_accessor_storage; }
    set isDraggingFile(value) { this.#isDraggingFile_accessor_storage = value; }
    #isScreenshotMenuOpen_accessor_storage = false;
    get isScreenshotMenuOpen() { return this.#isScreenshotMenuOpen_accessor_storage; }
    set isScreenshotMenuOpen(value) { this.#isScreenshotMenuOpen_accessor_storage = value; }
    #isContextMenuOpen_accessor_storage = false;
    get isContextMenuOpen() { return this.#isContextMenuOpen_accessor_storage; }
    set isContextMenuOpen(value) { this.#isContextMenuOpen_accessor_storage = value; }
    dragAndDropHandler;
    #energyEffectAnimationEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectAnimationEnabled');
    get energyEffectAnimationEnabled_() { return this.#energyEffectAnimationEnabled__accessor_storage; }
    set energyEffectAnimationEnabled_(value) { this.#energyEffectAnimationEnabled__accessor_storage = value; }
    #fileContextEnabled__accessor_storage = loadTimeData.getBoolean('composeboxContextDragAndDropEnabled');
    get fileContextEnabled_() { return this.#fileContextEnabled__accessor_storage; }
    set fileContextEnabled_(value) { this.#fileContextEnabled__accessor_storage = value; }
    #searchboxChromeRefreshTheming_accessor_storage = loadTimeData.getBoolean('searchboxCr23Theming');
    get searchboxChromeRefreshTheming() { return this.#searchboxChromeRefreshTheming_accessor_storage; }
    set searchboxChromeRefreshTheming(value) { this.#searchboxChromeRefreshTheming_accessor_storage = value; }
    #searchboxSteadyStateShadow_accessor_storage = loadTimeData.getBoolean('searchboxCr23SteadyStateShadow');
    get searchboxSteadyStateShadow() { return this.#searchboxSteadyStateShadow_accessor_storage; }
    set searchboxSteadyStateShadow(value) { this.#searchboxSteadyStateShadow_accessor_storage = value; }
    #contextManagementInComposeboxEnabled_accessor_storage = loadTimeData.getBoolean('contextManagementInComposeboxEnabled');
    get contextManagementInComposeboxEnabled() { return this.#contextManagementInComposeboxEnabled_accessor_storage; }
    set contextManagementInComposeboxEnabled(value) { this.#contextManagementInComposeboxEnabled_accessor_storage = value; }
    #searchboxIcon__accessor_storage = '//resources/cr_components/searchbox/icons/google_g_gradient.svg';
    get searchboxIcon_() { return this.#searchboxIcon__accessor_storage; }
    set searchboxIcon_(value) { this.#searchboxIcon__accessor_storage = value; }
    #searchboxVoiceSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxVoiceSearch');
    get searchboxVoiceSearchEnabled_() { return this.#searchboxVoiceSearchEnabled__accessor_storage; }
    set searchboxVoiceSearchEnabled_(value) { this.#searchboxVoiceSearchEnabled__accessor_storage = value; }
    #searchboxLensSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxLensSearch');
    get searchboxLensSearchEnabled_() { return this.#searchboxLensSearchEnabled__accessor_storage; }
    set searchboxLensSearchEnabled_(value) { this.#searchboxLensSearchEnabled__accessor_storage = value; }
    #animationState_accessor_storage = GlowAnimationState.NONE;
    get animationState() { return this.#animationState_accessor_storage; }
    set animationState(value) { this.#animationState_accessor_storage = value; }
    #inVoiceSearchMode_accessor_storage = false;
    get inVoiceSearchMode() { return this.#inVoiceSearchMode_accessor_storage; }
    set inVoiceSearchMode(value) { this.#inVoiceSearchMode_accessor_storage = value; }
    #composeButtonEnabled_accessor_storage = loadTimeData.getBoolean('searchboxShowComposeEntrypoint');
    get composeButtonEnabled() { return this.#composeButtonEnabled_accessor_storage; }
    set composeButtonEnabled(value) { this.#composeButtonEnabled_accessor_storage = value; }
    #profileAvatarUrl__accessor_storage = loadTimeData.getString('profileAvatarUrl');
    get profileAvatarUrl_() { return this.#profileAvatarUrl__accessor_storage; }
    set profileAvatarUrl_(value) { this.#profileAvatarUrl__accessor_storage = value; }
    #isFuseboxEnabled_accessor_storage = loadTimeData.getBoolean('isFuseboxEnabled');
    get isFuseboxEnabled() { return this.#isFuseboxEnabled_accessor_storage; }
    set isFuseboxEnabled(value) { this.#isFuseboxEnabled_accessor_storage = value; }
    #hasUserInput__accessor_storage = false;
    get hasUserInput_() { return this.#hasUserInput__accessor_storage; }
    set hasUserInput_(value) { this.#hasUserInput__accessor_storage = value; }
    #ntpRealboxDynamicAiModeButtonEnabled__accessor_storage = loadTimeData.getBoolean('ntpRealboxDynamicAiModeButton');
    get ntpRealboxDynamicAiModeButtonEnabled_() { return this.#ntpRealboxDynamicAiModeButtonEnabled__accessor_storage; }
    set ntpRealboxDynamicAiModeButtonEnabled_(value) { this.#ntpRealboxDynamicAiModeButtonEnabled__accessor_storage = value; }
    #inputState__accessor_storage = null;
    get inputState_() { return this.#inputState__accessor_storage; }
    set inputState_(value) { this.#inputState__accessor_storage = value; }
    #searchboxLayoutMode_accessor_storage = loadTimeData.getString('searchboxLayoutMode');
    get searchboxLayoutMode() { return this.#searchboxLayoutMode_accessor_storage; }
    set searchboxLayoutMode(value) { this.#searchboxLayoutMode_accessor_storage = value; }
    pageHandler_;
    callbackRouter_;
    autocompleteResultChangedListenerId_ = null;
    inputStateListenerId_ = null;
    aimPopupEligibilityListenerId_ = null;
    screenshotMenuClosedListenerId_ = null;
    constructor() {
        super();
        const browserProxy = SearchboxBrowserProxy.getInstance();
        this.pageHandler_ = browserProxy.handler;
        this.callbackRouter_ = browserProxy.callbackRouter;
        this.dragAndDropHandler =
            new DragAndDropHandler(this, this.fileContextEnabled_);
        // Intercept action execution (e.g., "Switch to this tab", Chrome Pedals)
        // to ensure that the searchbox input and dropdown results are cleared when
        // an action is triggered. Since Omnibox Everywhere keeps its WebContents
        // alive in the background across hide/show cycles, un-cleared input would
        // otherwise linger into subsequent invocations.
        //
        // Note: `originalExecuteAction` MUST be dispatched before calling
        // `clearAutocompleteMatches()`. `clearAutocompleteMatches()` issues
        // `stopAutocomplete(/*clearResult=*/ true)` which invalidates the result
        // list in C++ `AutocompleteController`; dispatching `originalExecuteAction`
        // first guarantees the browser processes the action against valid matches.
        //
        // TODO(b/565416805): Consider moving executeAction to the mixin
        // and overriding from there.
        const originalExecuteAction = this.pageHandler_.executeAction.bind(this.pageHandler_);
        this.pageHandler_.executeAction = (...args) => {
            const result = originalExecuteAction(...args);
            this.setInputText('');
            this.clearAutocompleteMatches();
            return result;
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.autocompleteResultChangedListenerId_ =
            this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged.bind(this));
        this.inputStateListenerId_ =
            this.callbackRouter_.onInputStateChanged.addListener((inputState) => {
                this.inputState_ = inputState;
            });
        this.aimPopupEligibilityListenerId_ =
            this.callbackRouter_.updateAimPopupEligibility.addListener((aiModePrefEnabled) => {
                this.composeButtonEnabled = aiModePrefEnabled;
                this.isFuseboxEnabled = aiModePrefEnabled;
            });
        this.screenshotMenuClosedListenerId_ =
            this.callbackRouter_.onScreenshotMenuClosed.addListener(() => {
                this.isScreenshotMenuOpen = false;
            });
        this.pageHandler_.getInputState().then((response) => {
            this.inputState_ = response.state;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.autocompleteResultChangedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.autocompleteResultChangedListenerId_);
            this.autocompleteResultChangedListenerId_ = null;
        }
        if (this.inputStateListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.inputStateListenerId_);
            this.inputStateListenerId_ = null;
        }
        if (this.aimPopupEligibilityListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.aimPopupEligibilityListenerId_);
            this.aimPopupEligibilityListenerId_ = null;
        }
        if (this.screenshotMenuClosedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.screenshotMenuClosedListenerId_);
            this.screenshotMenuClosedListenerId_ = null;
        }
        this.removeAttribute('has-expanded');
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        // `has-expanded` marks that the omnibox has been expanded at least once in
        // the current session so collapsing back to `!dropdownIsVisible &&
        // !hasUserInput_` plays the collapse animation on `#bottomControls`
        // (whereas initial mount does not). `willUpdate()` re-applies
        // `has-expanded` on every subsequent expansion after it is cleared by
        // voice search or `onBottomControlsAnimationEnd_()`.
        if (this.inVoiceSearchMode) {
            this.removeAttribute('has-expanded');
        }
        else if (this.dropdownIsVisible || this.hasUserInput_) {
            this.toggleAttribute('has-expanded', true);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        const lensButton = this.shadowRoot?.querySelector('#lensSearchButton');
        if (lensButton) {
            this.registerHelpBubble('kOmniboxEverywhereLensButtonElementId', lensButton, {
                onHelpBubbleShown: () => {
                    this.isLensHelpBubbleShowing = true;
                },
                onHelpBubbleHidden: () => {
                    this.isLensHelpBubbleShowing = false;
                },
            });
        }
    }
    focusInput() {
        this.$.input.focus();
    }
    // Returns the current text value of the Omnibox search input. Used by
    // `OmniboxEverywhereAppElement` to seamlessly migrate user-typed queries into
    // the Composebox input field when transitioning into Composebox mode (e.g.
    // when clicking a tool or attaching a tab from the '+' context menu) so typed
    // text is never lost.
    getInputText() {
        return this.$.input?.getInputValue() || '';
    }
    setInputText(text) {
        this.$.input.setInputText(text);
        this.hasUserInput_ = !!text.trim();
    }
    getDropTarget() {
        return this;
    }
    addDroppedFiles(files) {
        this.processFiles_(files, 2 /* ComposeboxContextAddedMethod.DRAG_AND_DROP */);
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
    // Because Omnibox Everywhere keeps its WebContents alive in the background
    // across hide/show cycles, input text must be explicitly cleared on match
    // navigation/submission so subsequent invocations start with a clean input.
    navigateToMatch(matchIndex, e) {
        super.navigateToMatch(matchIndex, e);
        this.setInputText('');
    }
    openCtrlEnterMatch(matchIndex) {
        super.openCtrlEnterMatch(matchIndex);
        this.setInputText('');
    }
    onMatchClick() {
        super.onMatchClick();
        this.setInputText('');
    }
    //========================================================================
    // Event handlers
    //========================================================================
    onInputFocusin_() {
        this.pageHandler_.onFocusChanged(true);
    }
    stepCyclesSelection(_result, _from, _direction, _step) {
        // In Omnibox, cycle within the popup matches rather than exiting.
        return false;
    }
    isVoiceSearchVirtualFocused_() {
        return this.selection.state ===
            SelectionLineState.kFocusedButtonVoiceSearch;
    }
    isLensSearchVirtualFocused_() {
        return this.selection.state === SelectionLineState.kFocusedButtonLensSearch;
    }
    getAvailableSelections(result) {
        const available = super.getAvailableSelections(result);
        if (!result || available.length === 0) {
            return available;
        }
        if (this.showVoiceSearchButton_()) {
            available.push({
                line: -1,
                state: SelectionLineState.kFocusedButtonVoiceSearch,
                actionIndex: 0,
            });
        }
        if (this.showLensSearchButton_()) {
            available.push({
                line: -1,
                state: SelectionLineState.kFocusedButtonLensSearch,
                actionIndex: 0,
            });
        }
        return available;
    }
    getSelectionA11yLabel(match, selection) {
        switch (selection.state) {
            case SelectionLineState.kFocusedButtonVoiceSearch:
                return this.i18n('voiceSearchButtonLabel');
            case SelectionLineState.kFocusedButtonLensSearch:
                return this.i18n('lensSearchButtonLabel');
            default:
                return super.getSelectionA11yLabel(match, selection);
        }
    }
    handleVirtualFocusEnter(e) {
        if (this.isVoiceSearchVirtualFocused_()) {
            e.preventDefault();
            const button = this.shadowRoot.querySelector('#voiceSearchButton');
            assert(button);
            button.click();
            return true;
        }
        if (this.isLensSearchVirtualFocused_()) {
            e.preventDefault();
            const button = this.shadowRoot.querySelector('#lensSearchButton');
            assert(button);
            button.click();
            return true;
        }
        return super.handleVirtualFocusEnter(e);
    }
    showVoiceSearchButton_() {
        return this.searchboxVoiceSearchEnabled_;
    }
    showLensSearchButton_() {
        return this.isFuseboxEnabled && this.searchboxLensSearchEnabled_;
    }
    computePlaceholderText_() {
        if (this.placeholderText) {
            return this.placeholderText;
        }
        if (this.isFuseboxEnabled) {
            return this.i18n('searchBoxHintAskOrType');
        }
        return this.i18n('searchBoxHint');
    }
    onSearchboxInputEmptyChanged_(e) {
        // `SearchboxMixin` clears `<cr-searchbox-input>` directly via
        // `getInputElement().setInput({text: '', inline: ''})` on `Escape` and
        // `focusout` without firing `searchbox-input-text-updated`. Reset
        // `hasUserInput_` whenever the input becomes empty so the omnibox does not
        // stay stuck in the 2-line expanded `[has-user-input]` state.
        if (e.detail.value) {
            this.hasUserInput_ = false;
        }
    }
    onSearchboxInputTextUpdated_(e) {
        this.hasUserInput_ = !!e.detail.value.trim();
        this.onSearchboxInputTextUpdated(e);
    }
    async onVoiceSearchButtonClick_() {
        this.animationState = GlowAnimationState.NONE;
        await this.updateComplete;
        this.animationState = GlowAnimationState.LISTENING;
        this.inVoiceSearchMode = true;
        this.dispatchEvent(new Event('open-voice-search', { bubbles: true, composed: true }));
    }
    wasScreenshotMenuOpenOnPointerDown_ = false;
    onLensSearchPointerdown_(e) {
        if (e.button !== 0) {
            return;
        }
        this.wasScreenshotMenuOpenOnPointerDown_ = this.isScreenshotMenuOpen;
    }
    onLensSearchPointercancel_() {
        this.wasScreenshotMenuOpenOnPointerDown_ = false;
    }
    onLensSearchClick_(e) {
        const wasOpen = this.wasScreenshotMenuOpenOnPointerDown_ || this.isScreenshotMenuOpen;
        this.wasScreenshotMenuOpenOnPointerDown_ = false;
        if (wasOpen) {
            this.isScreenshotMenuOpen = false;
            return;
        }
        this.notifyHelpBubbleAnchorActivated('kOmniboxEverywhereLensButtonElementId');
        this.hideHelpBubble('kOmniboxEverywhereLensButtonElementId');
        this.isScreenshotMenuOpen = true;
        this.finishAnimations_();
        const anchor = e.currentTarget;
        const rect = anchor.getBoundingClientRect();
        this.pageHandler_.showScreenshotMenu({
            x: Math.round(rect.left),
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        });
    }
    onFileChange_(e) {
        this.processFiles_(e.detail.files, 0 /* ComposeboxContextAddedMethod.CONTEXT_MENU */);
    }
    onSearchboxInputFilesPasted_(e) {
        this.processFiles_(e.detail.files, 1 /* ComposeboxContextAddedMethod.COPY_PASTE */);
    }
    // Files are attached as AI Mode context, so they can only be added when AI
    // Mode is available and policy allows sharing context with search.
    canAddFileContext_() {
        return this.fileContextEnabled_ && this.isFuseboxEnabled;
    }
    onInputWrapperDragover_(e) {
        this.dragAndDropHandler.handleDragOver(e);
        // Keep calling preventDefault() via `handleDragOver` so Blink treats the
        // drag as handled by the page (instead of navigating the WebContents on
        // drop), and set `dropEffect = 'none'` when file context cannot be added so
        // the OS shows the no-drop cursor instead of the copy (+) cursor.
        if (!this.canAddFileContext_() && e.dataTransfer) {
            e.dataTransfer.dropEffect = 'none';
        }
    }
    // The drag-and-drop handler stays enabled when AI Mode is unavailable, so it
    // keeps calling preventDefault() on drops and a drop can't navigate this
    // WebContents to the file. Hide its glow in that case, since the drop does
    // nothing.
    computeGlowAnimationState_() {
        if (this.animationState === GlowAnimationState.DRAGGING &&
            !this.canAddFileContext_()) {
            return GlowAnimationState.NONE;
        }
        return this.animationState;
    }
    processFiles_(files, contextAdditionMethod) {
        if (!files || files.length === 0 || !this.canAddFileContext_()) {
            return;
        }
        recordContextAdditionMethod(contextAdditionMethod, 'OmniboxEverywhere');
        this.openComposebox_(Array.from(files, (file) => ({ file })));
    }
    openComposebox_(uploads = [], mode = ToolMode.kUnspecified, model = ModelMode.kUnspecified, error) {
        this.fire('open-composebox', {
            text: this.$.input.inputElement.value,
            files: uploads,
            mode: mode,
            model: model,
            error: error,
            smartTabSharingActive: false,
        });
        // Clear searchbox input so stale text does not linger behind composebox.
        this.setInputText('');
    }
    async openComposeboxWithMode_(mode, model) {
        this.animationState = GlowAnimationState.NONE;
        await this.updateComplete;
        this.animationState = GlowAnimationState.LISTENING;
        setTimeout(() => {
            this.openComposebox_([], mode, model);
        }, 300);
    }
    onComposeClick_(e) {
        this.pageHandler().activateMetricsFunnel('AiModeButton');
        const isSearch = this.selectedMatch?.isSearchType ?? true;
        if (!isSearch) {
            this.setInputText('');
        }
        const queryText = isSearch ? this.$.input.inputElement.value.trim() : '';
        if (queryText) {
            this.pageHandler().notifySessionStarted();
            // TODO(crbug.com/548024751): Add metrics here like normal omnibox and
            // realbox.
            this.pageHandler().submitQuery(queryText, e.detail.button, false, /* altKey */ e.detail.ctrlKey, e.detail.metaKey, e.detail.shiftKey, 
            /* isVoiceSearch */ false);
            this.clearAutocompleteMatches();
            this.setInputText('');
        }
        else {
            this.openComposeboxWithMode_();
        }
    }
    onContextMenuEntrypointClick_(e) {
        this.pageHandler().activateMetricsFunnel('PlusButton');
        this.isContextMenuOpen = true;
        this.finishAnimations_();
        // `anchorRect` is in WebUI viewport coordinates (CSS DIPs). Forward the
        // full bounding box so C++ can translate it to screen coordinates and
        // position the native context menu.
        const rect = e?.detail?.anchorRect ||
            this.shadowRoot?.querySelector('#context')?.getBoundingClientRect();
        if (rect) {
            OmniboxEverywhereBrowserProxyImpl.getInstance()
                .handler.showContextActionMenu({
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
            });
        }
    }
    // `#bottomControls` animates on both expand (`loomniboxBottomControlsExpand`)
    // and collapse (`loomniboxTopControlsEnter`). Clear `has-expanded` only when
    // the collapse animation finishes (`!dropdownIsVisible && !hasUserInput_`) so
    // the 1-line pill is back at rest until the next expansion.
    onBottomControlsAnimationEnd_(e) {
        if (e.target === e.currentTarget &&
            e.animationName === 'loomniboxTopControlsEnter' &&
            !this.dropdownIsVisible && !this.hasUserInput_) {
            this.removeAttribute('has-expanded');
        }
    }
    // Fast-forwards active shadow root animations so native menu anchor rects are
    // sampled at their final resting positions.
    finishAnimations_() {
        this.shadowRoot?.getAnimations().forEach(a => a.finish());
    }
    onContextMenuClosed() {
        this.isContextMenuOpen = false;
    }
    onInputWrapperFocusout(e) {
        if (this.isContextMenuOpen || this.$.profileIcon.isMenuOpen) {
            return;
        }
        super.onInputWrapperFocusout(e);
    }
}
customElements.define(OmniboxEverywhereOmniboxElement.is, OmniboxEverywhereOmniboxElement);
