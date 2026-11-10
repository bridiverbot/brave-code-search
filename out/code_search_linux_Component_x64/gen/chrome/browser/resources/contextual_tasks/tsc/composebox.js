// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './contextual_tasks_inner_composebox.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/localized_link/localized_link.js';
import { GlifAnimationState } from '//resources/cr_components/composebox/common.js';
import { LensOverlayDismissalSource } from '//resources/cr_components/composebox/composebox.mojom-webui.js';
import { ComposeboxProxyImpl, createAutocompleteMatch } from '//resources/cr_components/composebox/composebox_proxy.js';
import { GlowAnimationState, VoiceSearchState } from '//resources/cr_components/search/constants.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { InputType, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './composebox.css.js';
import { getHtml } from './composebox.html.js';
import { IconType } from './contextual_tasks.mojom-webui.js';
const ICON_TYPE_TO_NAME = {
    [IconType.kUnspecified]: 'unspecified',
    [IconType.kAdd]: 'add',
    [IconType.kFormatQuoteFilled]: 'quoteFilled',
    [IconType.kImage]: 'image',
    [IconType.kFollowUp]: 'followUp',
    [IconType.kDrivePdf]: 'drivePdf',
    [IconType.kCheck]: 'check',
    [IconType.kInvertedFormatQuoteFilled]: 'invertedQuoteFilled',
};
function recordVoiceSearchAction(voiceSearchState) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (!metricsService) {
        return;
    }
    metricsService.recordEnumerationValue('ContextualTasks.VoiceSearch.StateV2', voiceSearchState, VoiceSearchState.MAX_VALUE + 1);
}
function createGhostMatch() {
    const match = createAutocompleteMatch({
        type: 'SEARCH_SUGGEST',
        isSearchType: true,
        iconPath: (document.documentElement.hasAttribute('webui-rounded-icons') ?
            '//resources/cr_components/searchbox/icons/search_spark.svg' :
            '//resources/cr_components/searchbox/icons/search_spark_old.svg'),
    });
    match.suggestTemplate.primaryText.text = '\u200b';
    return match;
}
export class ContextualTasksComposeboxElement extends I18nMixinLit(CrLitElement) {
    static get is() {
        return 'contextual-tasks-composebox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            inNlm: {
                type: Boolean,
                reflect: true,
            },
            enableNativeZeroStateSuggestions: { type: Boolean },
            isZeroState: {
                type: Boolean,
                reflect: true,
            },
            isSidePanel: {
                type: Boolean,
                reflect: true,
            },
            isLensOverlayShowing: {
                type: Boolean,
                reflect: true,
            },
            isOverlayOpenForAimVisualSearch: {
                type: Boolean,
                reflect: true,
            },
            composeboxHeight_: { type: Number },
            composeboxDropdownHeight_: { type: Number },
            isComposeboxFocused_: {
                type: Boolean,
                reflect: true,
            },
            showContextMenu_: {
                type: Boolean,
            },
            voiceSearchCoherenceEnabled_: {
                type: Boolean,
                reflect: true,
            },
            zeroStateSuggestions_: { type: Object },
            inputState_: {
                type: Object,
            },
            isLoading_: {
                type: Boolean,
                reflect: true,
            },
            inputEnabled: {
                type: Boolean,
                reflect: true,
            },
            showSuggestionsActivityLink_: {
                type: Boolean,
                reflect: true,
            },
            inVoiceSearchMode_: {
                type: Boolean,
                reflect: true,
            },
            inToolMode_: {
                type: Boolean,
                reflect: true,
            },
            selectedMatchIndex_: { type: Number },
            enableFileHint_: { type: Boolean },
            lensButtonDisabled_: { type: Boolean },
            caretAnimationsEnabled_: { type: Boolean },
            usePecApi_: { type: Boolean },
            smartTabSharingVisible_: { type: Boolean },
            contextManagementInComposeboxEnabled_: { type: Boolean },
            clearAllInputsWhenSubmittingQuery_: { type: Boolean },
            energyEffectEnabled_: { type: Boolean, reflect: true },
            energyEffectAnimationEnabled_: { type: Boolean, reflect: true },
            glifAnimationState_: { type: String },
        };
    }
    #enableNativeZeroStateSuggestions_accessor_storage = false;
    get enableNativeZeroStateSuggestions() { return this.#enableNativeZeroStateSuggestions_accessor_storage; }
    set enableNativeZeroStateSuggestions(value) { this.#enableNativeZeroStateSuggestions_accessor_storage = value; }
    #inNlm_accessor_storage = false;
    get inNlm() { return this.#inNlm_accessor_storage; }
    set inNlm(value) { this.#inNlm_accessor_storage = value; }
    #inToolMode__accessor_storage = false;
    get inToolMode_() { return this.#inToolMode__accessor_storage; }
    set inToolMode_(value) { this.#inToolMode__accessor_storage = value; }
    #isZeroState_accessor_storage = false;
    get isZeroState() { return this.#isZeroState_accessor_storage; }
    set isZeroState(value) { this.#isZeroState_accessor_storage = value; }
    #isSidePanel_accessor_storage = false;
    get isSidePanel() { return this.#isSidePanel_accessor_storage; }
    set isSidePanel(value) { this.#isSidePanel_accessor_storage = value; }
    #isLensOverlayShowing_accessor_storage = false;
    get isLensOverlayShowing() { return this.#isLensOverlayShowing_accessor_storage; }
    set isLensOverlayShowing(value) { this.#isLensOverlayShowing_accessor_storage = value; }
    #isOverlayOpenForAimVisualSearch_accessor_storage = false;
    get isOverlayOpenForAimVisualSearch() { return this.#isOverlayOpenForAimVisualSearch_accessor_storage; }
    set isOverlayOpenForAimVisualSearch(value) { this.#isOverlayOpenForAimVisualSearch_accessor_storage = value; }
    #inputEnabled_accessor_storage = true;
    get inputEnabled() { return this.#inputEnabled_accessor_storage; }
    set inputEnabled(value) { this.#inputEnabled_accessor_storage = value; }
    focusRetryCount_ = 0;
    focusAnimationFrameId_ = null;
    #zeroStateSuggestions__accessor_storage = {
        queryId: -1,
        input: '',
        suggestionGroupsMap: {},
        matches: Array(5).fill(null).map(() => createGhostMatch()),
        smartComposeInlineHint: null,
        showAimActivityLink: false,
        sequenceId: 0,
    };
    get zeroStateSuggestions_() { return this.#zeroStateSuggestions__accessor_storage; }
    set zeroStateSuggestions_(value) { this.#zeroStateSuggestions__accessor_storage = value; }
    #isLoading__accessor_storage = true;
    /* If suggestions are loading. Set this any time that should hide suggestions
     * while load next set of suggestions (after attaching image, etc.)
     */
    get isLoading_() { return this.#isLoading__accessor_storage; }
    set isLoading_(value) { this.#isLoading__accessor_storage = value; }
    #composeboxHeight__accessor_storage = 0;
    get composeboxHeight_() { return this.#composeboxHeight__accessor_storage; }
    set composeboxHeight_(value) { this.#composeboxHeight__accessor_storage = value; }
    #composeboxDropdownHeight__accessor_storage = 0;
    get composeboxDropdownHeight_() { return this.#composeboxDropdownHeight__accessor_storage; }
    set composeboxDropdownHeight_(value) { this.#composeboxDropdownHeight__accessor_storage = value; }
    #isComposeboxFocused__accessor_storage = false;
    get isComposeboxFocused_() { return this.#isComposeboxFocused__accessor_storage; }
    set isComposeboxFocused_(value) { this.#isComposeboxFocused__accessor_storage = value; }
    #showContextMenu__accessor_storage = loadTimeData.getBoolean('composeboxShowContextMenu');
    get showContextMenu_() { return this.#showContextMenu__accessor_storage; }
    set showContextMenu_(value) { this.#showContextMenu__accessor_storage = value; }
    #voiceSearchCoherenceEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceCobrowsingComposeboxEnabled');
    get voiceSearchCoherenceEnabled_() { return this.#voiceSearchCoherenceEnabled__accessor_storage; }
    set voiceSearchCoherenceEnabled_(value) { this.#voiceSearchCoherenceEnabled__accessor_storage = value; }
    #inputState__accessor_storage = null;
    get inputState_() { return this.#inputState__accessor_storage; }
    set inputState_(value) { this.#inputState__accessor_storage = value; }
    #showSuggestionsActivityLink__accessor_storage = false;
    get showSuggestionsActivityLink_() { return this.#showSuggestionsActivityLink__accessor_storage; }
    set showSuggestionsActivityLink_(value) { this.#showSuggestionsActivityLink__accessor_storage = value; }
    #inVoiceSearchMode__accessor_storage = false;
    get inVoiceSearchMode_() { return this.#inVoiceSearchMode__accessor_storage; }
    set inVoiceSearchMode_(value) { this.#inVoiceSearchMode__accessor_storage = value; }
    #selectedMatchIndex__accessor_storage = -1;
    get selectedMatchIndex_() { return this.#selectedMatchIndex__accessor_storage; }
    set selectedMatchIndex_(value) { this.#selectedMatchIndex__accessor_storage = value; }
    #enableFileHint__accessor_storage = loadTimeData.getBoolean('enableFileHint');
    get enableFileHint_() { return this.#enableFileHint__accessor_storage; }
    set enableFileHint_(value) { this.#enableFileHint__accessor_storage = value; }
    #lensButtonDisabled__accessor_storage = false;
    get lensButtonDisabled_() { return this.#lensButtonDisabled__accessor_storage; }
    set lensButtonDisabled_(value) { this.#lensButtonDisabled__accessor_storage = value; }
    searchboxHandler_;
    eventTracker_ = new EventTracker();
    pageHandler_;
    searchboxCallbackRouter_;
    searchboxListenerIds_ = [];
    shouldSubmitAfterUpload_ = false;
    // Tracks the resize of the composebox to provide height updates.
    resizeObserver_ = null;
    // Glif animation should trigger when:
    // - One time when the panel loads/opens zero state
    // - A query is submitted through the nextbox
    // Animation should NOT trigger when:
    // - User submits a query into zero state/the window switches to
    //   non-zero state
    // - User clicks on a suggestion
    forceSkipSubmitGlifAnimation_ = false;
    #caretAnimationsEnabled__accessor_storage = loadTimeData.getBoolean('caretAnimationEnabled');
    get caretAnimationsEnabled_() { return this.#caretAnimationsEnabled__accessor_storage; }
    set caretAnimationsEnabled_(value) { this.#caretAnimationsEnabled__accessor_storage = value; }
    #usePecApi__accessor_storage = loadTimeData.getBoolean('contextualMenuUsePecApi');
    get usePecApi_() { return this.#usePecApi__accessor_storage; }
    set usePecApi_(value) { this.#usePecApi__accessor_storage = value; }
    #smartTabSharingVisible__accessor_storage = loadTimeData.getBoolean('composeboxSmartTabSharingVisible');
    get smartTabSharingVisible_() { return this.#smartTabSharingVisible__accessor_storage; }
    set smartTabSharingVisible_(value) { this.#smartTabSharingVisible__accessor_storage = value; }
    #contextManagementInComposeboxEnabled__accessor_storage = loadTimeData.getBoolean('contextManagementInComposeboxEnabled');
    get contextManagementInComposeboxEnabled_() { return this.#contextManagementInComposeboxEnabled__accessor_storage; }
    set contextManagementInComposeboxEnabled_(value) { this.#contextManagementInComposeboxEnabled__accessor_storage = value; }
    #clearAllInputsWhenSubmittingQuery__accessor_storage = loadTimeData.getBoolean('clearAllInputsWhenSubmittingQuery');
    get clearAllInputsWhenSubmittingQuery_() { return this.#clearAllInputsWhenSubmittingQuery__accessor_storage; }
    set clearAllInputsWhenSubmittingQuery_(value) { this.#clearAllInputsWhenSubmittingQuery__accessor_storage = value; }
    #energyEffectEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    get energyEffectEnabled_() { return this.#energyEffectEnabled__accessor_storage; }
    set energyEffectEnabled_(value) { this.#energyEffectEnabled__accessor_storage = value; }
    #energyEffectAnimationEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    // The use of energyEffectEnabled to set energyEffectAnimationEnabled_ is
    // intentional. This is to align the gating properties for energy effects
    // across all surfaces (= Nextbox, Omnibox, and Realbox).
    get energyEffectAnimationEnabled_() { return this.#energyEffectAnimationEnabled__accessor_storage; }
    set energyEffectAnimationEnabled_(value) { this.#energyEffectAnimationEnabled__accessor_storage = value; }
    #glifAnimationState__accessor_storage = GlifAnimationState.INELIGIBLE;
    get glifAnimationState_() { return this.#glifAnimationState__accessor_storage; }
    set glifAnimationState_(value) { this.#glifAnimationState__accessor_storage = value; }
    constructor() {
        super();
        this.pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
        this.searchboxCallbackRouter_ =
            ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    }
    connectedCallback() {
        super.connectedCallback();
        this.searchboxListenerIds_.push(this.searchboxCallbackRouter_.onInputStateChanged.addListener((inputState) => {
            this.inputState_ = inputState;
        }));
        const composebox = this.$.composebox;
        if (composebox) {
            // Do not play the glow animation if opening on a thread.
            if (!this.isZeroState) {
                composebox.animationState = GlowAnimationState.NONE;
                this.glifAnimationState_ = GlifAnimationState.INELIGIBLE;
            }
            this.eventTracker_.add(composebox, 'can-submit-files-and-input-changed', (e) => {
                if (e.detail.canSubmitFilesAndInput &&
                    this.shouldSubmitAfterUpload_) {
                    this.shouldSubmitAfterUpload_ = false;
                    composebox.submitQuery();
                }
                this.fire('update-tooltip-visibility');
            });
            this.eventTracker_.add(composebox, 'composebox-focus-in', () => {
                this.isComposeboxFocused_ = true;
            });
            this.eventTracker_.add(composebox, 'composebox-focus-out', () => {
                this.isComposeboxFocused_ = false;
                if (composebox.animationState === GlowAnimationState.SUBMITTING ||
                    composebox.animationState === GlowAnimationState.LISTENING) {
                    return;
                }
                composebox.animationState = GlowAnimationState.NONE;
            });
            this.eventTracker_.add(composebox, 'composebox-submit', () => {
                // Don't play the submit animation when transitioning away from zero
                // state or on match click.
                if (this.isZeroState || this.forceSkipSubmitGlifAnimation_) {
                    this.forceSkipSubmitGlifAnimation_ = false;
                    composebox.animationState = GlowAnimationState.NONE;
                    this.glifAnimationState_ = GlifAnimationState.INELIGIBLE;
                    this.clearInputAndFocus(/* querySubmitted= */ true);
                    return;
                }
                // Force animation to replay visibly on subsequent submissions.
                composebox.animationState = GlowAnimationState.NONE;
                this.glifAnimationState_ = GlifAnimationState.INELIGIBLE;
                requestAnimationFrame(() => {
                    composebox.animationState = GlowAnimationState.SUBMITTING;
                });
                this.clearInputAndFocus(/* querySubmitted= */ true);
            });
            this.eventTracker_.add(composebox, 'match-click', () => {
                this.forceSkipSubmitGlifAnimation_ = true;
            });
            this.eventTracker_.add(composebox, 'carousel-resize', (e) => {
                if (e.detail.height !== undefined) {
                    composebox.style.setProperty('--carousel-height', `${e.detail.height}px`);
                    this.fire('update-tooltip-visibility');
                }
            });
            this.eventTracker_.add(composebox, 'composebox-resize', (e) => {
                if (e.detail.height !== undefined) {
                    this.composeboxHeight_ = e.detail.height;
                }
            });
            this.eventTracker_.add(composebox.getDropTarget(), 'on-context-files-changed', () => {
                this.fire('update-tooltip-visibility');
            });
            this.eventTracker_.add(composebox, 'composebox-voice-search-start', () => {
                this.startVoiceSearch();
                recordVoiceSearchAction(VoiceSearchState.VOICE_SEARCH_BUTTON_CLICKED);
            });
            this.eventTracker_.add(composebox, 'composebox-voice-search-transcription-success', () => {
                this.endVoiceSearch();
                recordVoiceSearchAction(VoiceSearchState.SUCCESSFUL_TRANSCRIPT);
            });
            this.eventTracker_.add(composebox, 'composebox-voice-search-error', () => {
                recordVoiceSearchAction(VoiceSearchState.VOICE_SEARCH_ERROR);
            });
            this.eventTracker_.add(composebox, 'composebox-voice-search-error-and-canceled', () => {
                this.endVoiceSearch();
                recordVoiceSearchAction(VoiceSearchState.VOICE_SEARCH_ERROR_AND_CANCELED);
            });
            this.eventTracker_.add(composebox, 'composebox-voice-search-user-canceled', () => {
                this.endVoiceSearch();
                recordVoiceSearchAction(VoiceSearchState.VOICE_SEARCH_CANCELED);
            });
            this.fire('update-tooltip-visibility', { height: composebox.offsetHeight });
            this.resizeObserver_ = new ResizeObserver(() => {
                this.composeboxHeight_ = composebox.offsetHeight;
                this.fire('composebox-height-update', { height: this.composeboxHeight_ });
            });
            this.resizeObserver_.observe(composebox);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
        this.eventTracker_.removeAll();
        this.searchboxListenerIds_.forEach(id => assert(this.searchboxCallbackRouter_.removeListener(id)));
        this.searchboxListenerIds_ = [];
    }
    // Must have `$` access in updated to avoid violating Lit contract since
    // `willUpdate` runs before `render`, which will cause `$` to not be
    // populated yet.
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('isZeroState')) {
            if (this.isZeroState) {
                // Opening zero state triggers animation.
                this.$.composebox.animationState = GlowAnimationState.SUBMITTING;
                const limitingEnabled = loadTimeData.getBoolean('contextMenuAnimationLimitingEnabled');
                if (limitingEnabled) {
                    const { canShow: allowed } = await this.pageHandler_.canShowNextboxAnimation();
                    if (allowed) {
                        this.glifAnimationState_ = GlifAnimationState.STARTED;
                        this.pageHandler_.recordNextboxAnimationImpression(true);
                    }
                    else {
                        this.glifAnimationState_ = GlifAnimationState.INELIGIBLE;
                        this.pageHandler_.recordNextboxAnimationImpression(false);
                    }
                }
                else {
                    this.glifAnimationState_ = GlifAnimationState.STARTED;
                    this.pageHandler_.recordNextboxAnimationImpression(true);
                }
            }
            else {
                this.glifAnimationState_ = GlifAnimationState.INELIGIBLE;
            }
            if (this.isZeroState && !this.isSidePanel) {
                // Get zero state autocomplete matches. In the side panel, we wait for
                // an update about whether an auto-chip will be added before querying
                // autocomplete.
                this.$.composebox.queryAutocomplete(/*clearMatches=*/ false);
            }
        }
        if (changedProperties.has('isSidePanel')) {
            this.toggleAttribute('show-lens-button', this.shouldShowLensButton_());
        }
    }
    startVoiceSearch() {
        this.inVoiceSearchMode_ = true;
    }
    endVoiceSearch() {
        this.inVoiceSearchMode_ = false;
    }
    shouldShowSuggestions_() {
        return this.isZeroState && !this.inNlm;
    }
    isDropdownNeeded_() {
        return !this.shouldShowSuggestions_();
    }
    shouldShowLensButton_() {
        return this.isSidePanel &&
            loadTimeData.getBoolean('supportsLensButtonInComposebox');
    }
    get inputState() {
        return this.inputState_;
    }
    getInputPlaceholder_() {
        return this.isOverlayOpenForAimVisualSearch &&
            !this.$.composebox.hasFiles() ?
            loadTimeData.getString('composeboxHintTextLensOverlay') :
            '';
    }
    // Called when the inner composebox suggestion activity link should be
    // shown or hidden. That is calculated based on results and
    // `showDropdown_`.
    onShowSuggestionActivityLink_(e) {
        this.showSuggestionsActivityLink_ = e.detail;
    }
    onSuggestionActivityLinkClicked_(e) {
        e.detail.event.preventDefault();
        const anchor = e.detail.event.target;
        if (anchor && anchor.href) {
            this.pageHandler_.navigateUrl(anchor.href);
        }
    }
    onInputStateChanged_(e) {
        this.inToolMode_ = this.inputState?.activeTool !== ToolMode.kUnspecified;
        const disabledTypes = e.detail.inputState?.disabledInputTypes || [];
        if (disabledTypes.includes(InputType.kLensImage)) {
            this.pageHandler_.closeLensOverlayFromWebUI(LensOverlayDismissalSource.kContextualTasksImageUploadsDisabled);
            this.lensButtonDisabled_ = true;
            return;
        }
        this.lensButtonDisabled_ = false;
        this.fire('update-tooltip-visibility');
    }
    onSuggestionsResultChanged_(e) {
        this.isLoading_ = false;
        this.zeroStateSuggestions_ = e.detail;
    }
    // Handle keyboard events on the suggestions dropdown.
    onDropdownKeydown_(e) {
        if (e.key === 'Enter') {
            this.navigateToMatch_(this.selectedMatchIndex_, /*viaKeyboard=*/ true);
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    // TODO(crbug.com/:494603388): This function definition should be updated: It should be
    // `FocusIn` and use `CustomEvent<number>`. However, this means `composebox_match.ts`
    // and its event needs to be updated, too.
    onMatchFocusin_(e) {
        this.selectedMatchIndex_ = e.detail.index;
    }
    navigateToMatch_(index, viaKeyboard) {
        const match = this.zeroStateSuggestions_?.matches[index];
        if (match) {
            this.searchboxHandler_.openAutocompleteMatch(
            /*resultSequenceId=*/ this.zeroStateSuggestions_.sequenceId, 
            /*line=*/ index, 
            /*url=*/ match.destinationUrl, 
            /*areMatchesShowing=*/ true, 
            /*mouseButton=*/ 0, {
                altKey: false,
                ctrlKey: false,
                metaKey: false,
                shiftKey: false,
            }, 
            /*viaKeyboard=*/ viaKeyboard);
        }
        this.clearInputAndFocus(/* querySubmitted= */ true);
        this.selectedMatchIndex_ = -1;
    }
    focus() {
        this.$.composebox.focusInput();
    }
    clearInputAndFocus(querySubmitted = false) {
        const hadContent = this.$.composebox.input.trim().length > 0 ||
            this.$.composebox.hasFiles();
        // When submitting a query, clear all inputs. When refocusing or starting a
        // new thread, only clear typed text and manual attachments to keep the
        // auto-suggested tab.
        if (querySubmitted) {
            this.$.composebox.clearAllInputs(querySubmitted, /* shouldBlockAutoSuggestedTabs= */ false);
        }
        else {
            this.$.composebox.clearInputsForNewThread();
        }
        this.$.composebox.focusInput();
        // Unconditionally clearing matches wipes out the zero state suggestions
        // when transitioning into or updating the zero state. Therefore, only clear
        // matches if the query was submitted or if the composebox is not in zero
        // state.
        if (querySubmitted || !this.isZeroState) {
            this.$.composebox.clearAutocompleteMatches();
            return;
        }
        // Since the composebox is being rendered in zero state, fetch new zero
        // state suggestions IFF there weren't already suggestions to prevent a
        // flicker.
        if (hadContent) {
            this.$.composebox.queryAutocomplete(/*clearMatches=*/ true);
        }
    }
    setIsLoadingForTesting(isLoading) {
        this.isLoading_ = isLoading;
    }
    async startExpandAnimation() {
        const composebox = this.$.composebox;
        composebox.animationState = GlowAnimationState.NONE;
        await composebox.updateComplete;
        // Force a reflow to ensure the animation restarts.
        composebox.offsetHeight;
        composebox.animationState = GlowAnimationState.EXPANDING;
    }
    onOpenImageUpload_() {
        this.pageHandler_.handleFileUpload(true);
    }
    onOpenFileUpload_() {
        this.pageHandler_.handleFileUpload(false);
    }
    async injectInput(input) {
        if (input.fileToken) {
            const iconId = input.iconId;
            const thumbnail = input.thumbnail ?
                ('chrome://image?url=' + encodeURIComponent(input.thumbnail)) :
                '';
            this.$.composebox.injectInput(input.title ?? '', thumbnail, input.fileToken, input.supportsUnimodal, iconId !== IconType.kUnspecified ?
                ICON_TYPE_TO_NAME[iconId] :
                undefined);
        }
        if (input.queryText !== undefined && input.queryText !== null) {
            this.$.composebox.setInputProgrammatically(input.queryText, input.submitAfterInjection);
        }
        // Wait for update so composebox can properly uppdate its input.
        await this.$.composebox.updateComplete;
        if (input.submitAfterInjection) {
            if (!this.$.composebox.canSubmitFilesAndInput) {
                this.shouldSubmitAfterUpload_ = true;
                return;
            }
            this.$.composebox.submitQuery();
        }
    }
    deleteFile(fileToken) {
        this.$.composebox.deleteFile(fileToken);
    }
    isCanvasQuerySubmitted() {
        return !this.isZeroState &&
            (this.inputState?.isCanvasQuerySubmitted ?? false);
    }
    onInputStateUpdate(toolMode, modelMode, _data) {
        // If tool or model are defined, update them and update related states.
        if (toolMode !== undefined && toolMode !== null) {
            if (this.inputState_) {
                this.inputState_ = {
                    ...this.inputState_,
                    activeTool: toolMode,
                };
            }
            this.inToolMode_ =
                (this.inputState_?.activeTool ?? toolMode) !== ToolMode.kUnspecified;
            this.searchboxHandler_.setActiveToolMode(toolMode, /*isSetByAim=*/ true);
        }
        if (modelMode !== undefined && modelMode !== null) {
            if (this.inputState_) {
                this.inputState_ = {
                    ...this.inputState_,
                    activeModel: modelMode,
                };
            }
            this.searchboxHandler_.setActiveModelMode(modelMode, 
            /*isSetByAim=*/ true);
        }
    }
    getComposebox() {
        return this.$.composebox;
    }
    get isComposeboxFocusedForTesting() {
        return this.isComposeboxFocused_;
    }
    get composeboxHeightForTesting() {
        return this.composeboxHeight_;
    }
    get selectedMatchIndexForTesting() {
        return this.selectedMatchIndex_;
    }
    set zeroStateSuggestionsForTesting(val) {
        this.zeroStateSuggestions_ = val;
    }
    get resizeObserverForTesting() {
        return this.resizeObserver_;
    }
    get inToolModeForTesting() {
        return this.inToolMode_;
    }
    tryFocus() {
        if (this.focusAnimationFrameId_ !== null) {
            cancelAnimationFrame(this.focusAnimationFrameId_);
            this.focusAnimationFrameId_ = null;
        }
        this.focusRetryCount_ = 0;
        this.runFocusLoop_();
    }
    runFocusLoop_() {
        this.focus();
        if (this.isInputFocused_()) {
            this.focusAnimationFrameId_ = null;
            this.fire('composebox-focused');
        }
        else if (this.focusRetryCount_ < 10) {
            this.focusRetryCount_++;
            this.focusAnimationFrameId_ =
                requestAnimationFrame(() => this.runFocusLoop_());
        }
        else {
            this.focusAnimationFrameId_ = null;
        }
    }
    isInputFocused_() {
        const inputEl = this.$.composebox.getInputElement()?.inputElement;
        return inputEl ?
            inputEl.getRootNode().activeElement === inputEl :
            false;
    }
}
customElements.define(ContextualTasksComposeboxElement.is, ContextualTasksComposeboxElement);
