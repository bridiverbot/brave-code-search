// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/searchbox/searchbox_compose_button.js';
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import { ContextType, getLoadTimeBoolean, GlifAnimationState, recordBoolean, recordContextAdditionMethod, recordContextualElementClickedMetric, recordCount, recordEnumerationValue, recordInputTypeShown, recordModelModeSelection, recordModelModeShown, recordToolModeSelection, recordToolModeShown, recordUserAction, TabSuggestionsState } from '//resources/cr_components/composebox/common.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { DragAndDropHandler } from '//resources/cr_components/search/drag_drop_handler.js';
import { PlaceholderTextCycler } from '//resources/cr_components/searchbox/placeholder_text_cycler.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { SearchboxMixin } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { waitForLazyRender } from '//resources/cr_components/searchbox/utils.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { InputSource } from '//resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { DriveDisclaimerStatus, SideType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { InputType, ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { getCss } from './ntp_searchbox.css.js';
import { getHtml } from './ntp_searchbox.html.js';
import { SearchboxSelectionMixin } from '//resources/cr_components/searchbox/searchbox_selection_mixin.js';
const NtpSearchboxElementBase = SearchboxMixin(SearchboxSelectionMixin(I18nMixinLit(WebUiListenerMixinLit(CrLitElement))));
/** A search box for the NTP that behaves like the Omnibox. */
export class NtpSearchboxElement extends NtpSearchboxElementBase {
    get isAimButtonVisible() {
        return this.showComposeButton_;
    }
    get showContextEntrypoint() {
        return false;
    }
    static get is() {
        return 'ntp-searchbox';
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
            ntpRealboxNextEnabled: {
                type: Boolean,
                reflect: true,
            },
            virtualFocusEnabled: { type: Boolean },
            composeboxEnabled: { type: Boolean },
            composeButtonEnabled: { type: Boolean },
            showComposeButton_: { type: Boolean },
            cyclingPlaceholders: { type: Boolean },
            shareTabsFlyoutOpen: { type: Boolean },
            isDraggingFile: {
                reflect: true,
                type: Boolean,
            },
            contextMenuGlifAnimationState: {
                type: String,
                reflect: true,
            },
            animationState: {
                reflect: true,
                type: String,
            },
            colorSourceIsBaseline: {
                type: Boolean,
                reflect: true,
            },
            /** Whether the theme is dark. */
            isDark: {
                type: Boolean,
                reflect: true,
            },
            searchboxLayoutMode: {
                type: String,
                reflect: true,
            },
            /**
             * Whether the secondary side can be shown based on the feature state and
             * the width available to the dropdown.
             */
            canShowSecondarySide: {
                type: Boolean,
                reflect: true,
            },
            inVoiceSearchMode: {
                type: Boolean,
                reflect: true,
            },
            /*
             * Whether the secondary side is currently available to be shown.
             */
            hasSecondarySide: {
                type: Boolean,
                reflect: true,
            },
            searchboxChromeRefreshTheming: {
                type: Boolean,
                reflect: true,
            },
            searchboxSteadyStateShadow: {
                type: Boolean,
                reflect: true,
            },
            placeholderText: {
                type: String,
                reflect: true,
                notify: true,
            },
            hasVoiceSearchError: { type: Boolean },
            isListening: { type: Boolean },
            //========================================================================
            // Protected properties
            //========================================================================
            tabSuggestions_: { type: Array },
            inputState_: { type: Object },
            recentTabId_: { type: Number },
            tabSuggestionsState_: { type: Number },
            /** Searchbox default icon (i.e., Google G icon or the search loupe). */
            searchboxIcon_: { type: String },
            /** Whether the voice search icon should be visible in the searchbox. */
            searchboxVoiceSearchEnabled_: {
                type: Boolean,
                reflect: true,
            },
            /** Whether the Google Lens icon should be visible in the searchbox. */
            searchboxLensSearchEnabled_: {
                type: Boolean,
                reflect: true,
            },
            useWebkitSearchIcons_: {
                type: Boolean,
                reflect: true,
            },
            energyEffectAnimationEnabled: { type: Boolean },
            hasUserInput_: { type: Boolean },
            ntpRealboxDynamicAiModeButtonEnabled_: { type: Boolean },
            contextManagementInComposeboxEnabled: { type: Boolean },
            composeboxContextMenuTooltipsEnabled: { type: Boolean },
            keepMenuOpenOnTabSelectForRealbox: { type: Boolean },
            smartTabSharingVisible: { type: Boolean },
            smartTabSharingActive: { type: Boolean },
        };
    }
    #ntpRealboxNextEnabled_accessor_storage = false;
    get ntpRealboxNextEnabled() { return this.#ntpRealboxNextEnabled_accessor_storage; }
    set ntpRealboxNextEnabled(value) { this.#ntpRealboxNextEnabled_accessor_storage = value; }
    #smartTabSharingVisible_accessor_storage = getLoadTimeBoolean('composeboxSmartTabSharingVisible', false);
    get smartTabSharingVisible() { return this.#smartTabSharingVisible_accessor_storage; }
    set smartTabSharingVisible(value) { this.#smartTabSharingVisible_accessor_storage = value; }
    #smartTabSharingActive_accessor_storage = false;
    get smartTabSharingActive() { return this.#smartTabSharingActive_accessor_storage; }
    set smartTabSharingActive(value) { this.#smartTabSharingActive_accessor_storage = value; }
    #energyEffectAnimationEnabled_accessor_storage = false;
    get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
    set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
    #composeboxEnabled_accessor_storage = false;
    get composeboxEnabled() { return this.#composeboxEnabled_accessor_storage; }
    set composeboxEnabled(value) { this.#composeboxEnabled_accessor_storage = value; }
    #composeButtonEnabled_accessor_storage = false;
    get composeButtonEnabled() { return this.#composeButtonEnabled_accessor_storage; }
    set composeButtonEnabled(value) { this.#composeButtonEnabled_accessor_storage = value; }
    #showComposeButton__accessor_storage = false;
    get showComposeButton_() { return this.#showComposeButton__accessor_storage; }
    set showComposeButton_(value) { this.#showComposeButton__accessor_storage = value; }
    #cyclingPlaceholders_accessor_storage = false;
    get cyclingPlaceholders() { return this.#cyclingPlaceholders_accessor_storage; }
    set cyclingPlaceholders(value) { this.#cyclingPlaceholders_accessor_storage = value; }
    #shareTabsFlyoutOpen_accessor_storage = false;
    get shareTabsFlyoutOpen() { return this.#shareTabsFlyoutOpen_accessor_storage; }
    set shareTabsFlyoutOpen(value) { this.#shareTabsFlyoutOpen_accessor_storage = value; }
    #isDraggingFile_accessor_storage = false;
    get isDraggingFile() { return this.#isDraggingFile_accessor_storage; }
    set isDraggingFile(value) { this.#isDraggingFile_accessor_storage = value; }
    #contextMenuGlifAnimationState_accessor_storage = GlifAnimationState.INELIGIBLE;
    get contextMenuGlifAnimationState() { return this.#contextMenuGlifAnimationState_accessor_storage; }
    set contextMenuGlifAnimationState(value) { this.#contextMenuGlifAnimationState_accessor_storage = value; }
    #animationState_accessor_storage = GlowAnimationState.NONE;
    get animationState() { return this.#animationState_accessor_storage; }
    set animationState(value) { this.#animationState_accessor_storage = value; }
    #colorSourceIsBaseline_accessor_storage = false;
    get colorSourceIsBaseline() { return this.#colorSourceIsBaseline_accessor_storage; }
    set colorSourceIsBaseline(value) { this.#colorSourceIsBaseline_accessor_storage = value; }
    #isDark_accessor_storage = false;
    get isDark() { return this.#isDark_accessor_storage; }
    set isDark(value) { this.#isDark_accessor_storage = value; }
    #searchboxLayoutMode_accessor_storage = '';
    get searchboxLayoutMode() { return this.#searchboxLayoutMode_accessor_storage; }
    set searchboxLayoutMode(value) { this.#searchboxLayoutMode_accessor_storage = value; }
    #canShowSecondarySide_accessor_storage = false;
    get canShowSecondarySide() { return this.#canShowSecondarySide_accessor_storage; }
    set canShowSecondarySide(value) { this.#canShowSecondarySide_accessor_storage = value; }
    #hasSecondarySide_accessor_storage = false;
    get hasSecondarySide() { return this.#hasSecondarySide_accessor_storage; }
    set hasSecondarySide(value) { this.#hasSecondarySide_accessor_storage = value; }
    #searchboxChromeRefreshTheming_accessor_storage = loadTimeData.getBoolean('searchboxCr23Theming');
    get searchboxChromeRefreshTheming() { return this.#searchboxChromeRefreshTheming_accessor_storage; }
    set searchboxChromeRefreshTheming(value) { this.#searchboxChromeRefreshTheming_accessor_storage = value; }
    #searchboxSteadyStateShadow_accessor_storage = loadTimeData.getBoolean('searchboxCr23SteadyStateShadow');
    get searchboxSteadyStateShadow() { return this.#searchboxSteadyStateShadow_accessor_storage; }
    set searchboxSteadyStateShadow(value) { this.#searchboxSteadyStateShadow_accessor_storage = value; }
    #virtualFocusEnabled_accessor_storage = loadTimeData.valueExists('realboxVirtualFocusNavigation') &&
        loadTimeData.getBoolean('realboxVirtualFocusNavigation');
    get virtualFocusEnabled() { return this.#virtualFocusEnabled_accessor_storage; }
    set virtualFocusEnabled(value) { this.#virtualFocusEnabled_accessor_storage = value; }
    #contextManagementInComposeboxEnabled_accessor_storage = getLoadTimeBoolean('contextManagementInComposeboxEnabled', false);
    // `contextManagementInComposeboxEnabled` is also passed in from parent, but
    // adding as a backup for tests.
    get contextManagementInComposeboxEnabled() { return this.#contextManagementInComposeboxEnabled_accessor_storage; }
    set contextManagementInComposeboxEnabled(value) { this.#contextManagementInComposeboxEnabled_accessor_storage = value; }
    #composeboxContextMenuTooltipsEnabled_accessor_storage = getLoadTimeBoolean('composeboxContextMenuTooltipsEnabled', false);
    get composeboxContextMenuTooltipsEnabled() { return this.#composeboxContextMenuTooltipsEnabled_accessor_storage; }
    set composeboxContextMenuTooltipsEnabled(value) { this.#composeboxContextMenuTooltipsEnabled_accessor_storage = value; }
    #keepMenuOpenOnTabSelectForRealbox_accessor_storage = getLoadTimeBoolean('keepMenuOpenOnTabSelectForRealbox', false);
    get keepMenuOpenOnTabSelectForRealbox() { return this.#keepMenuOpenOnTabSelectForRealbox_accessor_storage; }
    set keepMenuOpenOnTabSelectForRealbox(value) { this.#keepMenuOpenOnTabSelectForRealbox_accessor_storage = value; }
    #placeholderText_accessor_storage = '';
    get placeholderText() { return this.#placeholderText_accessor_storage; }
    set placeholderText(value) { this.#placeholderText_accessor_storage = value; }
    #recentTabId__accessor_storage = null;
    get recentTabId_() { return this.#recentTabId__accessor_storage; }
    set recentTabId_(value) { this.#recentTabId__accessor_storage = value; }
    #inVoiceSearchMode_accessor_storage = false;
    get inVoiceSearchMode() { return this.#inVoiceSearchMode_accessor_storage; }
    set inVoiceSearchMode(value) { this.#inVoiceSearchMode_accessor_storage = value; }
    #hasVoiceSearchError_accessor_storage = false;
    // If voice search error scrim is showing:
    get hasVoiceSearchError() { return this.#hasVoiceSearchError_accessor_storage; }
    set hasVoiceSearchError(value) { this.#hasVoiceSearchError_accessor_storage = value; }
    #isListening_accessor_storage = false;
    // Voice search is listening if there is no error and voice search overlay
    // is open (and active).
    get isListening() { return this.#isListening_accessor_storage; }
    set isListening(value) { this.#isListening_accessor_storage = value; }
    #tabSuggestions__accessor_storage = [];
    get tabSuggestions_() { return this.#tabSuggestions__accessor_storage; }
    set tabSuggestions_(value) { this.#tabSuggestions__accessor_storage = value; }
    #inputState__accessor_storage = null;
    get inputState_() { return this.#inputState__accessor_storage; }
    set inputState_(value) { this.#inputState__accessor_storage = value; }
    #tabSuggestionsState__accessor_storage = TabSuggestionsState.NOT_STARTED;
    get tabSuggestionsState_() { return this.#tabSuggestionsState__accessor_storage; }
    set tabSuggestionsState_(value) { this.#tabSuggestionsState__accessor_storage = value; }
    #searchboxIcon__accessor_storage = loadTimeData.getString('searchboxDefaultIcon');
    get searchboxIcon_() { return this.#searchboxIcon__accessor_storage; }
    set searchboxIcon_(value) { this.#searchboxIcon__accessor_storage = value; }
    #searchboxVoiceSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxVoiceSearch');
    get searchboxVoiceSearchEnabled_() { return this.#searchboxVoiceSearchEnabled__accessor_storage; }
    set searchboxVoiceSearchEnabled_(value) { this.#searchboxVoiceSearchEnabled__accessor_storage = value; }
    #searchboxLensSearchEnabled__accessor_storage = loadTimeData.getBoolean('searchboxLensSearch');
    get searchboxLensSearchEnabled_() { return this.#searchboxLensSearchEnabled__accessor_storage; }
    set searchboxLensSearchEnabled_(value) { this.#searchboxLensSearchEnabled__accessor_storage = value; }
    #ntpRealboxDynamicAiModeButtonEnabled__accessor_storage = loadTimeData.getBoolean('ntpRealboxDynamicAiModeButton');
    get ntpRealboxDynamicAiModeButtonEnabled_() { return this.#ntpRealboxDynamicAiModeButtonEnabled__accessor_storage; }
    set ntpRealboxDynamicAiModeButtonEnabled_(value) { this.#ntpRealboxDynamicAiModeButtonEnabled__accessor_storage = value; }
    #useWebkitSearchIcons__accessor_storage = false;
    get useWebkitSearchIcons_() { return this.#useWebkitSearchIcons__accessor_storage; }
    set useWebkitSearchIcons_(value) { this.#useWebkitSearchIcons__accessor_storage = value; }
    #hasUserInput__accessor_storage = false;
    get hasUserInput_() { return this.#hasUserInput__accessor_storage; }
    set hasUserInput_(value) { this.#hasUserInput__accessor_storage = value; }
    dragAndDropHandler = null;
    callbackRouter_;
    placeholderCycler_ = null;
    dragAndDropEnabled_ = loadTimeData.getBoolean('composeboxContextDragAndDropEnabled');
    onTabStripChangedListenerId_ = null;
    contextMenuOpened_ = false;
    pageHandler_;
    autocompleteResultChangedListenerId_ = null;
    inputStateListenerId_ = null;
    constructor() {
        performance.mark('searchbox-creation-start');
        super();
        this.pageHandler_ = SearchboxBrowserProxy.getInstance().handler;
        this.callbackRouter_ = SearchboxBrowserProxy.getInstance().callbackRouter;
    }
    async connectedCallback() {
        super.connectedCallback();
        this.autocompleteResultChangedListenerId_ =
            this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged.bind(this));
        if (this.ntpRealboxNextEnabled) {
            this.dragAndDropHandler =
                new DragAndDropHandler(this, this.dragAndDropEnabled_);
        }
        this.onTabStripChangedListenerId_ =
            this.callbackRouter_.onTabStripChanged.addListener(() => {
                if (this.contextMenuOpened_) {
                    this.refreshTabSuggestions_(/*forceRefresh=*/ true);
                }
                else {
                    this.tabSuggestionsState_ = TabSuggestionsState.NOT_STARTED;
                }
            });
        this.inputStateListenerId_ =
            this.callbackRouter_.onInputStateChanged.addListener((inputState) => {
                this.inputState_ = inputState;
                this.inputState_.activeModel = ModelMode.kUnspecified;
            });
        this.inputState_ =
            (await this.pageHandler().getInputState())?.state ?? null;
        if (this.inputState_) {
            this.inputState_.activeModel = ModelMode.kUnspecified;
        }
        // 
        this.smartTabSharingActive =
            (await this.pageHandler().getSmartTabSharingActive()).active;
        // 
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
        this.placeholderCycler_?.stop();
        if (this.onTabStripChangedListenerId_ !== null) {
            this.callbackRouter_.removeListener(this.onTabStripChangedListenerId_);
            this.onTabStripChangedListenerId_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('composeButtonEnabled') ||
            changedProperties.has('searchboxChromeRefreshTheming') ||
            changedProperties.has('colorSourceIsBaseline')) {
            this.useWebkitSearchIcons_ = this.composeButtonEnabled ||
                (this.searchboxChromeRefreshTheming && !this.colorSourceIsBaseline);
        }
        if (changedProperties.has('composeButtonEnabled') ||
            changedProperties.has('result')) {
            this.showComposeButton_ = this.calculateShowComposeButton_();
        }
        if (changedProperties.has('inVoiceSearchMode') ||
            changedProperties.has('hasVoiceSearchError')) {
            this.isListening = this.inVoiceSearchMode && !this.hasVoiceSearchError;
        }
    }
    firstUpdated() {
        // After crbug.com/502367598, there is no super.firstUpdated() call, the new
        // base chain does not override firstUpdated().
        if (performance.getEntriesByName('realbox-creation-start').length > 0) {
            performance.measure('realbox-creation', 'realbox-creation-start');
        }
        this.initialInputScrollHeight = this.$.input.scrollHeight;
        if (this.cyclingPlaceholders) {
            waitForLazyRender().then(async () => {
                const { config } = await this.pageHandler().getCyclingPlaceholderConfig();
                const texts = config.texts;
                if (texts.length < 2) {
                    // Need at least 2 placeholders to cycle. If fewer, disable cycling
                    // and let the static placeholder text show instead.
                    return;
                }
                this.placeholderText = texts[0];
                this.placeholderCycler_ = new PlaceholderTextCycler(this.$.input.inputElement, texts, Number(config.changeTextAnimationInterval.microseconds / 1000n), Number(config.fadeTextAnimationDuration.microseconds / 1000n));
                this.placeholderCycler_.start();
            });
        }
    }
    async handleFuseboxAction(action) {
        if (action?.preselectedInputSource) {
            switch (action.preselectedInputSource) {
                case InputSource.kInputSourceTabPicker:
                    await this.openTabPicker();
                    break;
                default:
                    break;
            }
        }
    }
    shouldShowVoiceLens_(isEnabled) {
        return isEnabled && this.isInputEmpty() &&
            !(this.dropdownIsVisible && this.composeButtonEnabled);
    }
    handleKeyNavigation(e) {
        if (this.composeButtonEnabled && e.key === 'Tab' &&
            this.$.input === this.shadowRoot.activeElement &&
            this.acceptInlineAutocomplete(e)) {
            return;
        }
        if (!this.dropdownIsVisible &&
            (e.key === 'ArrowUp' || e.key === 'ArrowDown') &&
            this.multiLineEnabled &&
            this.shouldSuppressDropdownForMultiline_(this.result?.matches?.length || 0)) {
            return;
        }
        super.handleKeyNavigation(e);
    }
    onInputFocusin_() {
        this.pageHandler_.onFocusChanged(true);
        this.placeholderCycler_?.stop();
    }
    onInputWrapperFocusout(e) {
        super.onInputWrapperFocusout(e);
        this.placeholderCycler_?.start();
    }
    //============================================================================
    // Mixin abstract method implementations
    //============================================================================
    getInputElement() {
        return this.$.input;
    }
    getDropdownElement() {
        const matches = this.shadowRoot.querySelector('#matches');
        assert(matches);
        return matches;
    }
    getWrapperElement() {
        return this.$.inputWrapper;
    }
    pageHandler() {
        return this.pageHandler_;
    }
    updateDropdownVisibility() {
        if (!this.result) {
            this.dropdownIsVisible = false;
            return;
        }
        const hasPrimaryMatches = this.result.matches?.some(match => {
            const sideType = this.result.suggestionGroupsMap[match.suggestionGroupId]?.sideType ||
                SideType.kDefaultPrimary;
            return sideType === SideType.kDefaultPrimary;
        });
        this.dropdownIsVisible = hasPrimaryMatches;
        // In multi-line mode, suppress the dropdown when text wraps or when the
        // only match is the mirror query.
        if (this.multiLineEnabled && this.dropdownIsVisible) {
            const isUserTyping = this.result.input.trim().length > 0;
            if (isUserTyping &&
                this.shouldSuppressDropdownForMultiline_(this.result.matches?.length || 0)) {
                this.dropdownIsVisible = false;
            }
        }
    }
    //============================================================================
    // Public API (ported from SearchboxElement)
    //============================================================================
    setInputText(text) {
        this.$.input.setInputText(text);
        // Setting the text programmatically (e.g. with the voice search transcript)
        // does not fire `searchbox-input-text-updated`, so update the state here to
        // keep the dynamic AI Mode button in sync with the input.
        this.hasUserInput_ = !!text.trim();
    }
    focusInput() {
        this.$.input.focus();
    }
    blurInput() {
        this.$.input.blur();
    }
    selectAll() {
        this.$.input.select();
    }
    getDropTarget() {
        return this;
    }
    addDroppedFiles(files) {
        this.processFiles_(files, 2 /* ComposeboxContextAddedMethod.DRAG_AND_DROP */);
    }
    //============================================================================
    // Event handlers
    //============================================================================
    // Perform animation work in this file (`ntp_searchbox.ts`) since this
    // file owns the animation state while `new_tab_page/app.ts` owns the
    // voice component and its initialization.
    async onVoiceSearchClick() {
        this.animationState = GlowAnimationState.NONE;
        await this.updateComplete;
        this.animationState = GlowAnimationState.LISTENING;
        this.inVoiceSearchMode = true;
        // `new_tab_page/app.ts` controls the voice component and when it will
        // start. `new_tab_page/app.ts` sets `inVoiceSearchMode` to `true`
        // with `new_tab_page/app.ts`'s equivalent state
        // `showVoiceSearchOverlay`.
        this.dispatchEvent(new Event('open-voice-search'));
    }
    onFileChange_(e) {
        this.processFiles_(e.detail.files, 0 /* ComposeboxContextAddedMethod.CONTEXT_MENU */);
    }
    onSmartTabSharingActiveChanged_(_e) {
        // 
        this.smartTabSharingActive = _e.detail.active;
        this.pageHandler().setSmartTabSharingActive(_e.detail.active);
        if (_e.detail.active) {
            this.openComposebox_();
        }
        // 
    }
    onShareTabsFlyoutOpenChanged_(e) {
        this.shareTabsFlyoutOpen = e.detail.open;
    }
    onAddTabContext_(e) {
        const attachment = {
            tabId: e.detail.id,
            url: e.detail.url,
            title: e.detail.title,
            delayUpload: e.detail.delayUpload,
            origin: e.detail.origin,
        };
        recordContextualElementClickedMetric(this.composeboxSource, 'ClassicPopup', ContextType.TAB);
        this.openComposebox_([attachment]);
    }
    async refreshTabSuggestions_(forceRefresh = false) {
        // Only refresh tab suggestions if the context menu is opened.
        const requiresRefresh = forceRefresh || this.contextMenuOpened_;
        if (!requiresRefresh ||
            this.tabSuggestionsState_ === TabSuggestionsState.LOADING ||
            (this.tabSuggestionsState_ === TabSuggestionsState.LOADED &&
                !forceRefresh)) {
            return;
        }
        this.tabSuggestionsState_ = TabSuggestionsState.LOADING;
        try {
            const { tabs } = await this.pageHandler().getRecentTabs();
            this.recentTabId_ = tabs[0]?.tabId ?? null;
            this.tabSuggestions_ = [...tabs];
            this.tabSuggestionsState_ = TabSuggestionsState.LOADED;
            if (this.contextMenuOpened_ && this.inputState_) {
                const { allowedInputTypes, disabledInputTypes } = this.inputState_;
                if (allowedInputTypes.includes(InputType.kBrowserTab) &&
                    !disabledInputTypes.includes(InputType.kBrowserTab) &&
                    this.tabSuggestions_.length > 0) {
                    recordInputTypeShown(InputType.kBrowserTab, this.composeboxSource, 'ClassicPopup');
                }
            }
        }
        finally {
            if (this.tabSuggestionsState_ === TabSuggestionsState.LOADING) {
                this.tabSuggestionsState_ = TabSuggestionsState.NOT_STARTED;
            }
        }
    }
    async onGetTabPreview_(e) {
        const { previewDataUrl } = await this.pageHandler().getTabPreview(e.detail.tabId);
        e.detail.onPreviewFetched(previewDataUrl || '');
    }
    onContextMenuClosed_() {
        this.contextMenuOpened_ = false;
        this.tabSuggestionsState_ = TabSuggestionsState.NOT_STARTED;
        // Keep focus on "+" after keyboard use (b/564743397); blur after mouse
        // use so #searchboxContainer drops its scrim (https://crrev.com/c/7540901).
        if (!FocusOutlineManager.forDocument(document).visible) {
            this.blur();
        }
    }
    onRequestTabSuggestionsLoad() {
        this.refreshTabSuggestions_(/*forceRefresh=*/ true);
    }
    closeContextMenu() {
        const context = this.shadowRoot?.querySelector('#context');
        if (context) {
            context.closeMenu();
        }
    }
    onContextMenuOpened_() {
        this.contextMenuOpened_ = true;
        this.refreshTabSuggestions_(/*forceRefresh=*/ true);
        if (this.inputState_) {
            const { allowedInputTypes, disabledInputTypes } = this.inputState_;
            allowedInputTypes.forEach((inputType) => {
                // The `kBrowserTab` InputType requires special metrics handling as part
                // of `refreshTabSuggestions_()`.
                if (inputType !== InputType.kBrowserTab &&
                    !disabledInputTypes.includes(inputType)) {
                    recordInputTypeShown(inputType, this.composeboxSource, 'ClassicPopup');
                }
            });
            const { allowedTools, disabledTools } = this.inputState_;
            allowedTools.forEach((tool) => {
                if (!disabledTools.includes(tool)) {
                    recordToolModeShown(tool, this.composeboxSource, 'ClassicPopup');
                }
            });
            const { allowedModels, disabledModels } = this.inputState_;
            allowedModels.forEach((model) => {
                if (!disabledModels.includes(model)) {
                    recordModelModeShown(model, this.composeboxSource, 'ClassicPopup');
                }
            });
        }
    }
    async onOpenDriveUpload_() {
        // Check if the user has accepted the Drive disclaimer. This handles
        // the edge case where a user sees the drive option in the menu, but
        // then revokes Drive permissions.
        const { status } = await this.pageHandler().getDriveDisclaimerStatus();
        if (status === DriveDisclaimerStatus.kRestricted) {
            return;
        }
        const { response } = await this.pageHandler().onDriveUploadClicked();
        const driveUploads = response.files.map(file => ({
            token: file.token,
            mimeType: file.mimeType,
            fileName: file.fileName,
            thumbnailUrl: file.thumbnailUrl ?? null,
            iconUrl: file.iconUrl ?? null,
        }));
        recordContextualElementClickedMetric(this.composeboxSource, 'ClassicPopup', ContextType.DRIVE);
        if (driveUploads.length > 0 || response.error !== null) {
            this.openComposebox_(driveUploads, ToolMode.kUnspecified, ModelMode.kUnspecified, response.error ?? undefined);
        }
    }
    onContextMenuEntrypointClick_() {
        this.pageHandler().activateMetricsFunnel('PlusButton');
        this.dispatchEvent(new Event('context-menu-entrypoint-click'));
    }
    onContextMenuEntrypointHover_() {
        this.refreshTabSuggestions_(/*forceRefresh=*/ true);
    }
    onToolClick_(e) {
        this.openComposebox_([], e.detail.toolMode);
    }
    onDeepSearchClick_() {
        this.openComposebox_([], ToolMode.kDeepSearch);
    }
    onCreateImageClick_() {
        this.openComposebox_([], ToolMode.kImageGen);
    }
    onModelClick_(e) {
        this.openComposebox_([], ToolMode.kUnspecified, e.detail.model);
    }
    onComposeClick_(e) {
        // TODO(crbug.com/463667769): Call submitQuery here since RealboxHandler is
        // now a `ContextualSearchboxHandler`.
        this.pageHandler().activateMetricsFunnel('AiModeButton');
        recordUserAction('ContextualSearch.AiModeButtonClick.NtpRealbox');
        recordBoolean('ContextualSearch.AiModeButtonClick.NtpRealbox', true);
        const isSearch = this.selectedMatch?.isSearchType ?? true;
        if (!isSearch) {
            this.setInputText('');
        }
        const queryText = isSearch ? this.$.input.inputElement.value.trim() : '';
        if (queryText) {
            const histogramName = 'ContextualSearch.UserAction.SubmitQueryV2.NewTabPage';
            // LINT.IfChange(ContextualSearchContextState)
            recordEnumerationValue(histogramName, /*WithoutContext */ 0, 
            /*ContextualSearchContextState.Size + 1*/ 5);
            // LINT.ThenChange(//tools/metrics/histograms/metadata/contextual_search/enums.xml:ContextualSearchContextState)
            const userActionName = 'ContextualSearch.UserAction.SubmitQueryV2.WithoutContext.NewTabPage';
            recordUserAction(userActionName);
        }
        if (!this.composeboxEnabled || queryText) {
            this.pageHandler().notifySessionStarted();
            this.pageHandler().submitQuery(queryText, e.detail.button, false, /* altKey */ e.detail.ctrlKey, e.detail.metaKey, e.detail.shiftKey, 
            /* isVoiceSearch */ false);
        }
        else {
            this.openComposebox_();
        }
        recordBoolean('NewTabPage.ComposeEntrypoint.Click.UserTextPresent', !this.isInputEmpty());
    }
    useCompactLayout_() {
        return this.searchboxLayoutMode === 'Compact';
    }
    openComposebox_(uploads = [], mode = ToolMode.kUnspecified, model = ModelMode.kUnspecified, error) {
        if (this.ntpRealboxNextEnabled) {
            const context = this.shadowRoot.querySelector('#context');
            assert(context);
            if (!this.keepMenuOpenOnTabSelectForRealbox ||
                !this.contextManagementInComposeboxEnabled) {
                context.closeMenu();
            }
        }
        if (mode !== ToolMode.kUnspecified) {
            recordToolModeSelection(mode, this.composeboxSource, 'ClassicPopup');
        }
        if (model !== ModelMode.kUnspecified) {
            recordModelModeSelection(model, this.composeboxSource, 'ClassicPopup');
        }
        this.fire('open-composebox', {
            text: this.$.input.inputElement.value,
            files: uploads,
            mode: mode,
            model: model,
            error: error,
            // 
            smartTabSharingActive: this.smartTabSharingActive,
            // 
        });
        this.setInputText('');
    }
    onSearchboxInputPasted_() {
        recordCount('NewTabPage.Realbox.Paste', 1);
        recordUserAction('NewTabPage.Realbox.Paste');
    }
    onSearchboxInputFilesPasted_(e) {
        this.processFiles_(e.detail.files, 1 /* ComposeboxContextAddedMethod.COPY_PASTE */);
    }
    processFiles_(files, contextAdditionMethod) {
        if (!files || files.length === 0) {
            return;
        }
        recordContextAdditionMethod(contextAdditionMethod, this.composeboxSource);
        if (contextAdditionMethod === 0 /* ComposeboxContextAddedMethod.CONTEXT_MENU */) {
            // In practice, the `files` list will only contain a single file when
            // using the CONTEXT_MENU context addition method in the searchbox.
            for (const file of files) {
                const contextType = file.type.includes('image') ? ContextType.IMAGE : ContextType.FILE;
                recordContextualElementClickedMetric(this.composeboxSource, 'ClassicPopup', contextType);
            }
        }
        this.openComposebox_(Array.from(files, (file) => ({ file })));
    }
    onSearchboxInputTextUpdated_(e) {
        this.hasUserInput_ = !!e.detail.value.trim();
        this.onSearchboxInputTextUpdated(e);
    }
    onLensSearchClick_() {
        this.dropdownIsVisible = false;
        this.dispatchEvent(new Event('open-lens-search'));
    }
    onHasSecondarySideChanged_(e) {
        this.hasSecondarySide = e.detail.value;
    }
    //============================================================================
    // Helpers
    //============================================================================
    inputHasMatches_() {
        return !!this.result && !!this.result.matches &&
            this.result.matches.length > 0;
    }
    shouldSuppressDropdownForMultiline_(numMatches) {
        const inputHasWrapped = this.initialInputScrollHeight > 0 &&
            this.$.input.scrollHeight > this.initialInputScrollHeight;
        return inputHasWrapped || numMatches === 1;
    }
    calculateShowComposeButton_() {
        if (!this.composeButtonEnabled) {
            return false;
        }
        if (this.ntpRealboxDynamicAiModeButtonEnabled_) {
            const firstMatch = this.result?.matches?.[0];
            if (firstMatch && firstMatch.allowedToBeDefaultMatch
                && !firstMatch.isSearchType) {
                return false;
            }
        }
        return true;
    }
    computePlaceholderText_(placeholderText) {
        return placeholderText || '';
    }
    async openTabPicker() {
        this.shareTabsFlyoutOpen = true;
        await this.refreshTabSuggestions_(/*forceRefresh=*/ true);
        await this.updateComplete;
        const context = this.shadowRoot?.querySelector('#context');
        if (context) {
            await context.updateComplete;
            const entrypointButton = context.shadowRoot?.querySelector('#entrypointButton');
            if (entrypointButton) {
                await entrypointButton.updateComplete;
            }
            entrypointButton?.shadowRoot?.querySelector('#entrypoint')
                ?.click();
        }
    }
}
customElements.define(NtpSearchboxElement.is, NtpSearchboxElement);
