// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { DragAndDropHandler } from '//resources/cr_components/search/drag_drop_handler.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert, assertNotReached, assertNotReachedCase } from '//resources/js/assert.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { hasKeyModifiers } from '//resources/js/util.js';
import { InputSource, QueryActionOverride, SuggestInventory } from '//resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { DriveDisclaimerStatus, DriveUploadError, InputMethod, TabAttachmentSource } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SuggestStyle } from '//resources/mojo/components/omnibox/browser/suggest_template_info.mojom-webui.js';
import { ComposeboxFile, ComposeboxFileValidationError, ComposeboxInputModel, ContextType, ContextualSearchInputStateDeletionType, FILE_VALIDATION_ERRORS_MAP, getLoadTimeBoolean, isContextUploadStatusTerminal, isValidTabId, ProcessFilesError, recordBoolean, recordContextAdditionMethod, recordContextualElementClickedMetric, recordEnumerationValue, recordInputTypeShown, recordModelModeSelection, recordModelModeShown, recordRichImageSuggestClicked, recordSingleTabMenuItemAction, recordToolModeSelection, recordToolModeShown, recordUserAction, SingleTabMenuItemAction, SingleTabType, SubmitButtonIconType, TabSuggestionsState, VoiceSearchAction } from './common.js';
import { AimButtonMode } from './composebox_aim_button.js';
// 
import { ContextUploadStatus, InputType, ModelMode, ToolMode } from './composebox_query.mojom-webui.js';
import { ContextualEntrypointAndMenuElement } from './contextual_entrypoint_and_menu.js';
import { WindowProxy } from './window_proxy.js';
const PERMISSION_PROMPT_CSS_CLASS = 'permission-prompt-showing';
function dedupeTabs(restoredTabs, recentTabs) {
    const restoredUrlMap = new Map(restoredTabs.map(t => [t.tabId, t.url]));
    return recentTabs.filter(t => {
        const restoredUrl = restoredUrlMap.get(t.tabId);
        return restoredUrl !== t.url;
    });
}
function isBrowserFileUpload(file) {
    return 'token' in file && 'fileInfo' in file;
}
export const ComposeboxEmbedderMixin = (superClass) => {
    class ComposeboxEmbedderMixin extends I18nMixinLit(superClass) {
        static get properties() {
            return {
                addedTabsIds: { type: Object },
                animationState: {
                    reflect: true,
                    type: String,
                },
                disableCaretColorAnimation: {
                    type: Boolean,
                    reflect: true,
                },
                disableVoiceSearchAnimation: { type: Boolean },
                isDraggingFile: {
                    reflect: true,
                    type: Boolean,
                },
                enableImageContextualSuggestions: {
                    reflect: true,
                    type: Boolean,
                },
                smartComposeEnabled: {
                    reflect: true,
                    type: Boolean,
                },
                submitting: { type: Boolean },
                showContextMenuDescription: { type: Boolean },
                smartTabSharingActive: { type: Boolean },
                smartTabSharingVisible: { type: Boolean },
                composeboxContextMenuTooltipsEnabled: { type: Boolean },
                contextManagementInComposeboxEnabled: {
                    reflect: true,
                    type: Boolean,
                },
                shouldShowGhostFiles: { type: Boolean },
                showMenuOnClick: { type: Boolean },
                submitButtonIconType: { type: String },
                isCanvasQuerySubmitted: { type: Boolean },
                canSubmitFilesAndInput: {
                    type: Boolean,
                    reflect: true,
                },
                contextMenuEnabled: { type: Boolean },
                errorMessage: { type: String },
                attachedContext: { type: Object },
                fileUploadsComplete: {
                    type: Boolean,
                    reflect: true,
                },
                hasAllowedInputs: {
                    type: Boolean,
                    reflect: true,
                },
                input: { type: String },
                inputPlaceholder: { type: String, reflect: true },
                inputState: { type: Object },
                inToolMode: {
                    type: Boolean,
                    reflect: true,
                },
                inVoiceSearchMode: {
                    type: Boolean,
                    reflect: true,
                },
                maxSuggestions: { type: Number },
                receivedSpeech: { type: Boolean },
                result: { type: Object },
                shareTabsFlyoutOpen: { type: Boolean },
                searchboxLayoutMode: {
                    type: String,
                    reflect: true,
                },
                /**
                 * Generic flag indicating a "Next" searchbox (Realbox Next, Omnibox
                 * Next, etc.). Used for all styling and behavior shared across
                 * 'Next' searchbox implementations.
                 */
                searchboxNextEnabled: {
                    type: Boolean,
                    reflect: true,
                },
                selectedMatchIndex: { type: Number },
                showDropdown: {
                    reflect: true,
                    type: Boolean,
                },
                dropdownNeeded: { type: Boolean },
                richImageSuggestionsEnabled: { type: Boolean },
                clearAllInputsWhenSubmittingQuery: { type: Boolean },
                closeOnEscape: { type: Boolean },
                composeboxNoFlickerSuggestionsFix: { type: Boolean },
                composeboxSkillsEnabled: { type: Boolean },
                unselectMatchOnTabExit: { type: Boolean },
                queryZpsOnLoad: { type: Boolean },
                showFileCarousel: {
                    reflect: true,
                    type: Boolean,
                },
                showTypedSuggestWithContext: { type: Boolean },
                showVoiceSearch: { type: Boolean },
                suggestionActivityEnabled: { type: Boolean },
                usePecApi: {
                    type: Boolean,
                    reflect: true,
                },
                isOblongShape: { type: Boolean },
                webuiOmniboxSimplificationEnabled: { type: Boolean },
                smartComposeInlineHint: { type: String },
                smartComposeStats: { type: Object },
                recentTabId: { type: Number },
                state: { type: Object },
                submitEnabled: {
                    reflect: true,
                    type: Boolean,
                },
                tabSuggestions: { type: Array },
                tabSuggestionsState: { type: Number },
                aimThreadRestoredTabs: { type: Array },
                tabDeselectionEnabled: { type: Boolean },
                tabStateUnificationEnabled: { type: Boolean },
                transcript: { type: String },
                hasVoiceSearchError: { type: Boolean },
                voiceSearchCoherenceEnabled: { type: Boolean },
                isListening: { type: Boolean, reflect: true },
                tabFaviconChipsToCoinsEnabled: { type: Boolean },
                energyEffectEnabled: {
                    reflect: true,
                    type: Boolean,
                },
                energyEffectAnimationEnabled: {
                    reflect: true,
                    type: Boolean,
                },
                willFulfillInAim: {
                    reflect: true,
                    type: Boolean,
                },
            };
        }
        #animationState_accessor_storage = GlowAnimationState.NONE;
        get animationState() { return this.#animationState_accessor_storage; }
        set animationState(value) { this.#animationState_accessor_storage = value; }
        #disableCaretColorAnimation_accessor_storage = false;
        get disableCaretColorAnimation() { return this.#disableCaretColorAnimation_accessor_storage; }
        set disableCaretColorAnimation(value) { this.#disableCaretColorAnimation_accessor_storage = value; }
        #disableVoiceSearchAnimation_accessor_storage = false;
        get disableVoiceSearchAnimation() { return this.#disableVoiceSearchAnimation_accessor_storage; }
        set disableVoiceSearchAnimation(value) { this.#disableVoiceSearchAnimation_accessor_storage = value; }
        #submitting_accessor_storage = false;
        // Blocks autocomplete updates after a query has been submitted or
        // clicked. This prevents the dropdown from briefly flashing open due to
        // late-arriving autocomplete updates or automatic focus restoration
        // before navigation completes.
        get submitting() { return this.#submitting_accessor_storage; }
        set submitting(value) { this.#submitting_accessor_storage = value; }
        #addedTabsIds_accessor_storage = new Map();
        // Current tabs attached to composebox for this turn (query).
        get addedTabsIds() { return this.#addedTabsIds_accessor_storage; }
        set addedTabsIds(value) { this.#addedTabsIds_accessor_storage = value; }
        #aimThreadRestoredTabs_accessor_storage = [];
        // Persistent tabs from previous queries/turns in this conversation
        // (that AIM has confirmed that it has received), OR tabs that were part
        // of a past historical conversation that was loaded.
        get aimThreadRestoredTabs() { return this.#aimThreadRestoredTabs_accessor_storage; }
        set aimThreadRestoredTabs(value) { this.#aimThreadRestoredTabs_accessor_storage = value; }
        #isDraggingFile_accessor_storage = false;
        get isDraggingFile() { return this.#isDraggingFile_accessor_storage; }
        set isDraggingFile(value) { this.#isDraggingFile_accessor_storage = value; }
        #enableImageContextualSuggestions_accessor_storage = loadTimeData.getBoolean('composeboxShowImageSuggest');
        get enableImageContextualSuggestions() { return this.#enableImageContextualSuggestions_accessor_storage; }
        set enableImageContextualSuggestions(value) { this.#enableImageContextualSuggestions_accessor_storage = value; }
        #smartComposeEnabled_accessor_storage = loadTimeData.getBoolean('composeboxSmartComposeEnabled');
        get smartComposeEnabled() { return this.#smartComposeEnabled_accessor_storage; }
        set smartComposeEnabled(value) { this.#smartComposeEnabled_accessor_storage = value; }
        #smartTabSharingActive_accessor_storage = false;
        get smartTabSharingActive() { return this.#smartTabSharingActive_accessor_storage; }
        set smartTabSharingActive(value) { this.#smartTabSharingActive_accessor_storage = value; }
        #smartTabSharingVisible_accessor_storage = getLoadTimeBoolean('composeboxSmartTabSharingVisible', false);
        get smartTabSharingVisible() { return this.#smartTabSharingVisible_accessor_storage; }
        set smartTabSharingVisible(value) { this.#smartTabSharingVisible_accessor_storage = value; }
        #richImageSuggestionsEnabled_accessor_storage = getLoadTimeBoolean('composeboxRichImageSuggestionsEnabled', false);
        get richImageSuggestionsEnabled() { return this.#richImageSuggestionsEnabled_accessor_storage; }
        set richImageSuggestionsEnabled(value) { this.#richImageSuggestionsEnabled_accessor_storage = value; }
        #contextManagementInComposeboxEnabled_accessor_storage = getLoadTimeBoolean('contextManagementInComposeboxEnabled', false);
        get contextManagementInComposeboxEnabled() { return this.#contextManagementInComposeboxEnabled_accessor_storage; }
        set contextManagementInComposeboxEnabled(value) { this.#contextManagementInComposeboxEnabled_accessor_storage = value; }
        #composeboxContextMenuTooltipsEnabled_accessor_storage = getLoadTimeBoolean('composeboxContextMenuTooltipsEnabled', false);
        get composeboxContextMenuTooltipsEnabled() { return this.#composeboxContextMenuTooltipsEnabled_accessor_storage; }
        set composeboxContextMenuTooltipsEnabled(value) { this.#composeboxContextMenuTooltipsEnabled_accessor_storage = value; }
        #tabDeselectionEnabled_accessor_storage = getLoadTimeBoolean('composeboxContextMenuEnableTabDeselection', false);
        get tabDeselectionEnabled() { return this.#tabDeselectionEnabled_accessor_storage; }
        set tabDeselectionEnabled(value) { this.#tabDeselectionEnabled_accessor_storage = value; }
        #tabStateUnificationEnabled_accessor_storage = getLoadTimeBoolean('composeboxTabStateUnificationEnabled', true);
        get tabStateUnificationEnabled() { return this.#tabStateUnificationEnabled_accessor_storage; }
        set tabStateUnificationEnabled(value) { this.#tabStateUnificationEnabled_accessor_storage = value; }
        contextMenuDescriptionEnabled = getLoadTimeBoolean('composeboxShowContextMenuDescription', false);
        #showContextMenuDescription_accessor_storage = this.contextMenuDescriptionEnabled;
        get showContextMenuDescription() { return this.#showContextMenuDescription_accessor_storage; }
        set showContextMenuDescription(value) { this.#showContextMenuDescription_accessor_storage = value; }
        #shouldShowGhostFiles_accessor_storage = false;
        get shouldShowGhostFiles() { return this.#shouldShowGhostFiles_accessor_storage; }
        set shouldShowGhostFiles(value) { this.#shouldShowGhostFiles_accessor_storage = value; }
        #showMenuOnClick_accessor_storage = true;
        get showMenuOnClick() { return this.#showMenuOnClick_accessor_storage; }
        set showMenuOnClick(value) { this.#showMenuOnClick_accessor_storage = value; }
        #isCanvasQuerySubmitted_accessor_storage = false;
        get isCanvasQuerySubmitted() { return this.#isCanvasQuerySubmitted_accessor_storage; }
        set isCanvasQuerySubmitted(value) { this.#isCanvasQuerySubmitted_accessor_storage = value; }
        #recentTabId_accessor_storage = null;
        get recentTabId() { return this.#recentTabId_accessor_storage; }
        set recentTabId(value) { this.#recentTabId_accessor_storage = value; }
        #hasVoiceSearchError_accessor_storage = false;
        // If voice search error scrim is showing:
        get hasVoiceSearchError() { return this.#hasVoiceSearchError_accessor_storage; }
        set hasVoiceSearchError(value) { this.#hasVoiceSearchError_accessor_storage = value; }
        #isListening_accessor_storage = false;
        // Voice search is listening if there is no error and voice search
        // overlay is open (and active).
        get isListening() { return this.#isListening_accessor_storage; }
        set isListening(value) { this.#isListening_accessor_storage = value; }
        #voiceSearchCoherenceEnabled_accessor_storage = false;
        get voiceSearchCoherenceEnabled() { return this.#voiceSearchCoherenceEnabled_accessor_storage; }
        set voiceSearchCoherenceEnabled(value) { this.#voiceSearchCoherenceEnabled_accessor_storage = value; }
        #tabFaviconChipsToCoinsEnabled_accessor_storage = loadTimeData.getBoolean('tabFaviconChipsToCoinsEnabled');
        get tabFaviconChipsToCoinsEnabled() { return this.#tabFaviconChipsToCoinsEnabled_accessor_storage; }
        set tabFaviconChipsToCoinsEnabled(value) { this.#tabFaviconChipsToCoinsEnabled_accessor_storage = value; }
        #energyEffectEnabled_accessor_storage = false;
        get energyEffectEnabled() { return this.#energyEffectEnabled_accessor_storage; }
        set energyEffectEnabled(value) { this.#energyEffectEnabled_accessor_storage = value; }
        #energyEffectAnimationEnabled_accessor_storage = false;
        get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
        set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
        #willFulfillInAim_accessor_storage = !getLoadTimeBoolean('dynamicAimFulfillmentEnabled', false);
        get willFulfillInAim() { return this.#willFulfillInAim_accessor_storage; }
        set willFulfillInAim(value) { this.#willFulfillInAim_accessor_storage = value; }
        browserTabContextAdded = false;
        pendingAutomaticActiveTabUrl = '';
        pendingAutomaticActiveTabTitle = '';
        automaticActiveTab = null;
        earlyTerminalUploads = new Map();
        dragAndDropEnabled = loadTimeData.getBoolean('composeboxContextDragAndDropEnabled');
        composeboxSource = loadTimeData.getString('composeboxSource');
        maxFileCount = loadTimeData.getInteger('composeboxFileMaxCount');
        maxFileSize = loadTimeData.getInteger('composeboxFileMaxSize');
        attachmentFileTypes = loadTimeData.getString('composeboxAttachmentFileTypes').split(',');
        imageFileTypes = loadTimeData.getString('composeboxImageFileTypes').split(',');
        contextMenuOpened = false;
        hasCachedSubmittedTabsThisTurn = false;
        eventTracker = new EventTracker();
        get keepMenuOpenOnTabSelect() {
            return false;
        }
        #canSubmitFilesAndInput_accessor_storage = true;
        get canSubmitFilesAndInput() { return this.#canSubmitFilesAndInput_accessor_storage; }
        set canSubmitFilesAndInput(value) { this.#canSubmitFilesAndInput_accessor_storage = value; }
        #clearAllInputsWhenSubmittingQuery_accessor_storage = false;
        /**
         * When true (e.g. in Omnibox Everywhere / Loomnibox), each submission
         * is an independent one-shot query rather than a multi-turn
         * conversation thread in the same page. Forces clearing all attached
         * input, modes, and restored tabs upon query submission, and skips
         * caching submitted tabs across turns.
         */
        get clearAllInputsWhenSubmittingQuery() { return this.#clearAllInputsWhenSubmittingQuery_accessor_storage; }
        set clearAllInputsWhenSubmittingQuery(value) { this.#clearAllInputsWhenSubmittingQuery_accessor_storage = value; }
        #closeOnEscape_accessor_storage = true;
        get closeOnEscape() { return this.#closeOnEscape_accessor_storage; }
        set closeOnEscape(value) { this.#closeOnEscape_accessor_storage = value; }
        #composeboxNoFlickerSuggestionsFix_accessor_storage = false;
        get composeboxNoFlickerSuggestionsFix() { return this.#composeboxNoFlickerSuggestionsFix_accessor_storage; }
        set composeboxNoFlickerSuggestionsFix(value) { this.#composeboxNoFlickerSuggestionsFix_accessor_storage = value; }
        #composeboxSkillsEnabled_accessor_storage = getLoadTimeBoolean('composeboxSkillsEnabled', false);
        get composeboxSkillsEnabled() { return this.#composeboxSkillsEnabled_accessor_storage; }
        set composeboxSkillsEnabled(value) { this.#composeboxSkillsEnabled_accessor_storage = value; }
        #unselectMatchOnTabExit_accessor_storage = getLoadTimeBoolean('composeboxUnselectMatchOnTabExit', false);
        get unselectMatchOnTabExit() { return this.#unselectMatchOnTabExit_accessor_storage; }
        set unselectMatchOnTabExit(value) { this.#unselectMatchOnTabExit_accessor_storage = value; }
        #contextMenuEnabled_accessor_storage = loadTimeData.getBoolean('composeboxShowContextMenu');
        get contextMenuEnabled() { return this.#contextMenuEnabled_accessor_storage; }
        set contextMenuEnabled(value) { this.#contextMenuEnabled_accessor_storage = value; }
        #errorMessage_accessor_storage = '';
        get errorMessage() { return this.#errorMessage_accessor_storage; }
        set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
        #attachedContext_accessor_storage = new Map();
        // Context (files/tabs) added by the user for the current turn (query).
        get attachedContext() { return this.#attachedContext_accessor_storage; }
        set attachedContext(value) { this.#attachedContext_accessor_storage = value; }
        get files() {
            return this.attachedContext;
        }
        set files(value) {
            this.attachedContext = value;
        }
        /**
         * The attached context whose uploads have not finished yet. This is a
         * read-only view over `attachedContext` rather than a set that upload
         * callbacks add to and remove from, so it cannot hold tokens for files
         * that are gone or already done.
         */
        get pendingUploads() {
            const pending = new Set();
            for (const [uuid, file] of this.attachedContext) {
                if (!isContextUploadStatusTerminal(file.status)) {
                    pending.add(uuid);
                }
            }
            return pending;
        }
        #fileUploadsComplete_accessor_storage = true;
        get fileUploadsComplete() { return this.#fileUploadsComplete_accessor_storage; }
        set fileUploadsComplete(value) { this.#fileUploadsComplete_accessor_storage = value; }
        #hasAllowedInputs_accessor_storage = false;
        get hasAllowedInputs() { return this.#hasAllowedInputs_accessor_storage; }
        set hasAllowedInputs(value) { this.#hasAllowedInputs_accessor_storage = value; }
        #input_accessor_storage = '';
        get input() { return this.#input_accessor_storage; }
        set input(value) { this.#input_accessor_storage = value; }
        #inputPlaceholder_accessor_storage = loadTimeData.getString('searchboxComposePlaceholder');
        get inputPlaceholder() { return this.#inputPlaceholder_accessor_storage; }
        set inputPlaceholder(value) { this.#inputPlaceholder_accessor_storage = value; }
        #inputState_accessor_storage = null;
        get inputState() { return this.#inputState_accessor_storage; }
        set inputState(value) { this.#inputState_accessor_storage = value; }
        #inToolMode_accessor_storage = false;
        get inToolMode() { return this.#inToolMode_accessor_storage; }
        set inToolMode(value) { this.#inToolMode_accessor_storage = value; }
        #submitButtonIconType_accessor_storage = SubmitButtonIconType.UPWARD;
        get submitButtonIconType() { return this.#submitButtonIconType_accessor_storage; }
        set submitButtonIconType(value) { this.#submitButtonIconType_accessor_storage = value; }
        #inVoiceSearchMode_accessor_storage = false;
        // Indicates if voice search overlay is open. Does not indicate if it
        // is 'listening'. This is because there might be an error scrim showing
        // (see `hasVoiceSearchError`), making voice search not 'listening'.
        get inVoiceSearchMode() { return this.#inVoiceSearchMode_accessor_storage; }
        set inVoiceSearchMode(value) { this.#inVoiceSearchMode_accessor_storage = value; }
        #maxSuggestions_accessor_storage = null;
        get maxSuggestions() { return this.#maxSuggestions_accessor_storage; }
        set maxSuggestions(value) { this.#maxSuggestions_accessor_storage = value; }
        #receivedSpeech_accessor_storage = false;
        get receivedSpeech() { return this.#receivedSpeech_accessor_storage; }
        set receivedSpeech(value) { this.#receivedSpeech_accessor_storage = value; }
        #result_accessor_storage = null;
        get result() { return this.#result_accessor_storage; }
        set result(value) { this.#result_accessor_storage = value; }
        #shareTabsFlyoutOpen_accessor_storage = false;
        // Keeps track of whether the "Share Tabs" submenu/flyout in the context
        // menu is open. This state is owned by the mixin so that it can be
        // reset when the context menu is closed, and passed down to keep the
        // child menu's rendering in sync.
        get shareTabsFlyoutOpen() { return this.#shareTabsFlyoutOpen_accessor_storage; }
        set shareTabsFlyoutOpen(value) { this.#shareTabsFlyoutOpen_accessor_storage = value; }
        #suggestionActivityEnabled_accessor_storage = true;
        get suggestionActivityEnabled() { return this.#suggestionActivityEnabled_accessor_storage; }
        set suggestionActivityEnabled(value) { this.#suggestionActivityEnabled_accessor_storage = value; }
        #searchboxLayoutMode_accessor_storage = '';
        get searchboxLayoutMode() { return this.#searchboxLayoutMode_accessor_storage; }
        set searchboxLayoutMode(value) { this.#searchboxLayoutMode_accessor_storage = value; }
        #searchboxNextEnabled_accessor_storage = false;
        get searchboxNextEnabled() { return this.#searchboxNextEnabled_accessor_storage; }
        set searchboxNextEnabled(value) { this.#searchboxNextEnabled_accessor_storage = value; }
        #queryZpsOnLoad_accessor_storage = true;
        get queryZpsOnLoad() { return this.#queryZpsOnLoad_accessor_storage; }
        set queryZpsOnLoad(value) { this.#queryZpsOnLoad_accessor_storage = value; }
        selectedMatch = null;
        #selectedMatchIndex_accessor_storage = -1;
        get selectedMatchIndex() { return this.#selectedMatchIndex_accessor_storage; }
        set selectedMatchIndex(value) { this.#selectedMatchIndex_accessor_storage = value; }
        #showDropdown_accessor_storage = loadTimeData.getBoolean('composeboxShowZps');
        get showDropdown() { return this.#showDropdown_accessor_storage; }
        set showDropdown(value) { this.#showDropdown_accessor_storage = value; }
        #dropdownNeeded_accessor_storage = true;
        get dropdownNeeded() { return this.#dropdownNeeded_accessor_storage; }
        set dropdownNeeded(value) { this.#dropdownNeeded_accessor_storage = value; }
        #showFileCarousel_accessor_storage = false;
        get showFileCarousel() { return this.#showFileCarousel_accessor_storage; }
        set showFileCarousel(value) { this.#showFileCarousel_accessor_storage = value; }
        #showTypedSuggestWithContext_accessor_storage = false;
        get showTypedSuggestWithContext() { return this.#showTypedSuggestWithContext_accessor_storage; }
        set showTypedSuggestWithContext(value) { this.#showTypedSuggestWithContext_accessor_storage = value; }
        #usePecApi_accessor_storage = false;
        get usePecApi() { return this.#usePecApi_accessor_storage; }
        set usePecApi(value) { this.#usePecApi_accessor_storage = value; }
        #isOblongShape_accessor_storage = false;
        get isOblongShape() { return this.#isOblongShape_accessor_storage; }
        set isOblongShape(value) { this.#isOblongShape_accessor_storage = value; }
        #webuiOmniboxSimplificationEnabled_accessor_storage = false;
        get webuiOmniboxSimplificationEnabled() { return this.#webuiOmniboxSimplificationEnabled_accessor_storage; }
        set webuiOmniboxSimplificationEnabled(value) { this.#webuiOmniboxSimplificationEnabled_accessor_storage = value; }
        searchboxListenerIds = [];
        showZps = loadTimeData.getBoolean('composeboxShowZps');
        #showVoiceSearch_accessor_storage = false;
        // Attribute that can be set by parent to enable/disable voice search
        // overlay. `inVoiceSearchMode` indicates if voice search overlay is (at
        // least) open.
        get showVoiceSearch() { return this.#showVoiceSearch_accessor_storage; }
        set showVoiceSearch(value) { this.#showVoiceSearch_accessor_storage = value; }
        #smartComposeInlineHint_accessor_storage = '';
        get smartComposeInlineHint() { return this.#smartComposeInlineHint_accessor_storage; }
        set smartComposeInlineHint(value) { this.#smartComposeInlineHint_accessor_storage = value; }
        #smartComposeStats_accessor_storage = {
            enabled: loadTimeData.getBoolean('composeboxSmartComposeEnabled'),
            shownCount: 0,
            acceptedCount: 0,
            charactersAccepted: 0,
            shownLength: 0,
        };
        get smartComposeStats() { return this.#smartComposeStats_accessor_storage; }
        set smartComposeStats(value) { this.#smartComposeStats_accessor_storage = value; }
        #state_accessor_storage = null;
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        suggestInventory = null;
        #submitEnabled_accessor_storage = false;
        get submitEnabled() { return this.#submitEnabled_accessor_storage; }
        set submitEnabled(value) { this.#submitEnabled_accessor_storage = value; }
        #tabSuggestions_accessor_storage = [];
        get tabSuggestions() { return this.#tabSuggestions_accessor_storage; }
        set tabSuggestions(value) { this.#tabSuggestions_accessor_storage = value; }
        #tabSuggestionsState_accessor_storage = TabSuggestionsState.NOT_STARTED;
        get tabSuggestionsState() { return this.#tabSuggestionsState_accessor_storage; }
        set tabSuggestionsState(value) { this.#tabSuggestionsState_accessor_storage = value; }
        pendingTabSuggestionNeedsRefresh_ = false;
        #transcript_accessor_storage = '';
        get transcript() { return this.#transcript_accessor_storage; }
        set transcript(value) { this.#transcript_accessor_storage = value; }
        fuseboxChipHint_ = null;
        selectAllOnStateUpdate_ = false;
        showTypedSuggest = loadTimeData.getBoolean('composeboxShowTypedSuggest');
        // Tracks the latest query sent for autocompletion. Used to filter out
        // stale results. `activeQueryId` is reset to -1 when the last query
        // needs to be abandoned. `nextQueryId_` is monotonically increasing to
        // avoid reusing IDs.
        activeQueryId = -1;
        nextQueryId_ = 0;
        lastQueriedInput = '';
        haveReceivedSynchronousAutocompleteResponse = false;
        lensSendRawFileMediaTypesEnabled = loadTimeData.getBoolean('lensSendRawFileMediaTypesEnabled');
        // One sentinel per in-flight request that may attach a delayed tab:
        // an `addTabContext()` call, or `updateState()` awaiting
        // `getInputState()`. Cleared wholesale by
        // `resetDelayedTabContextRequests_()` to cancel them.
        pendingDelayedTabRequests_ = new Set();
        smartComposeAnnounceTimeout_ = null;
        // 
        get inputModel() {
            return new ComposeboxInputModel({
                attachedContext: this.attachedContext,
                smartTabSharingActive: this.smartTabSharingActive,
                tabFaviconChipsToCoinsEnabled: this.tabFaviconChipsToCoinsEnabled,
                input: this.input,
                selectedMatchIndex: this.selectedMatchIndex,
                hasResult: !!this.result,
                activeTool: this.inputState?.activeTool,
            });
        }
        // =====================================================================
        // Lifecycle Hooks
        // =====================================================================
        dragAndDropHandler;
        constructor(...args) {
            super(...args);
            this.dragAndDropHandler =
                new DragAndDropHandler(this, this.dragAndDropEnabled);
        }
        connectedCallback() {
            super.connectedCallback();
            this.searchboxListenerIds = [
                this.getSearchboxCallbackRouter()
                    .autocompleteResultChanged.addListener(this.onAutocompleteResultChanged.bind(this)),
                this.getSearchboxCallbackRouter()
                    .onContextualInputStatusChanged.addListener(this.onContextualInputStatusChanged.bind(this)),
                this.getSearchboxCallbackRouter().onTabStripChanged.addListener(() => this.refreshTabSuggestions(/*forceRefresh=*/ true)),
                this.getSearchboxCallbackRouter().addFileContext.addListener(this.addFileContextFromBrowser.bind(this)),
                this.getSearchboxCallbackRouter().onInputStateChanged.addListener(this.onInputStateChanged.bind(this)),
                this.getSearchboxCallbackRouter()
                    .setAimThreadRestoredTabs.addListener(this.setAimThreadRestoredTabs.bind(this)),
            ];
            // 
            this.getSearchboxHandler().notifySessionStarted();
            this.eventTracker.add(this, 'match-pre-accept', (e) => {
                this.onMatchPreAccept_(e);
            });
            this.initializeInitialState_();
            if (this.hasUpdated) {
                this.setupInputListener_();
            }
            // For "next" searchboxes (Realbox Next, Omnibox Next, etc.), the zps
            // autocomplete query is triggered after the state has been
            // initialized.
            if (this.queryZpsOnLoad && !this.searchboxNextEnabled) {
                this.queryAutocomplete(/* clearMatches= */ false);
            }
        }
        async initializeInitialState_() {
            const inputStateResponse = await this.getSearchboxHandler().getInputState();
            if (inputStateResponse) {
                this.inputState = inputStateResponse.state;
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.getSearchboxHandler().notifySessionAbandoned();
            this.searchboxListenerIds.forEach(id => assert(this.getSearchboxCallbackRouter().removeListener(id)));
            this.searchboxListenerIds = [];
            this.eventTracker.removeAll();
        }
        setupInputListener_() {
            const inputElem = this.getInputElement()?.inputElement;
            if (inputElem) {
                this.eventTracker.add(inputElem, 'input', () => {
                    this.submitEnabled = this.computeSubmitEnabled();
                });
                // The following two event handlers are to re-enable the inputState
                // update after the submission of a query when
                // submitting is true.
                // This occurs when the user quickly cancels the navigation and
                // starts interacting with the input element again.
                this.eventTracker.add(inputElem, 'mousedown', () => {
                    this.submitting = false;
                });
                this.eventTracker.add(inputElem, 'keydown', () => {
                    this.submitting = false;
                });
            }
        }
        computeVoiceSearchCoherenceEnabled() {
            return loadTimeData.getBoolean('voiceSearchCoherenceComposeboxesEnabled');
        }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            const changedPrivateProperties = changedProperties;
            // Recompute before anything below reads it. This is unconditional
            // rather than gated on `attachedContext` changing because the map is
            // sometimes mutated in place, and because recomputing is what makes
            // the flag self-correcting.
            this.fileUploadsComplete = this.computeFileUploadsComplete();
            // 
            // When the result initially gets set check if dropdown should show.
            if (changedPrivateProperties.has('input') ||
                changedPrivateProperties.has('result') ||
                changedPrivateProperties.has('attachedContext') ||
                changedPrivateProperties.has('errorMessage') ||
                changedPrivateProperties.has('smartTabSharingActive')) {
                this.showFileCarousel = this.tabFaviconChipsToCoinsEnabled ?
                    this.getFilteredCarouselFiles().length > 0 :
                    this.attachedContext.size > 0;
                this.showDropdown = this.computeShowDropdown();
            }
            if (changedPrivateProperties.has('input') ||
                changedPrivateProperties.has('selectedMatchIndex') ||
                changedPrivateProperties.has('inputState') ||
                changedPrivateProperties.has('isFollowupQuery') ||
                changedPrivateProperties.has('attachedContext') ||
                changedPrivateProperties.has('submitEnabled') ||
                changedPrivateProperties.has('fileUploadsComplete')) {
                this.submitEnabled = this.computeSubmitEnabled();
                // Note the upload button is intentionally not gated on
                // `fileUploadsComplete`: more context can be attached while earlier
                // uploads are still in flight. Only submission waits on them.
                // `canSubmitFilesAndInput` checks if there is a valid query rather
                // than if submit is enabled, as `submitEnabled` only defines if the
                // submit button should be shown rather than its actual active
                // state.
                this.canSubmitFilesAndInput =
                    this.hasValidQuery() && this.fileUploadsComplete;
            }
            if (changedPrivateProperties.has('canSubmitFilesAndInput')) {
                this.fire('can-submit-files-and-input-changed', {
                    canSubmitFilesAndInput: this.canSubmitFilesAndInput,
                });
            }
            if (changedPrivateProperties.has('inputState') && this.inputState) {
                this.willFulfillInAim = this.inputState.willFulfillInAim;
                this.hasAllowedInputs =
                    (this.inputState.allowedModels.length > 0 ||
                        this.inputState.allowedTools.length > 0 ||
                        this.inputState.allowedInputTypes.length > 0);
                this.inToolMode =
                    this.inputState.activeTool !== ToolMode.kUnspecified;
                this.dispatchEvent(new CustomEvent('input-state-changed', {
                    detail: { inputState: this.inputState },
                }));
            }
            if (changedPrivateProperties.has('attachedContext') ||
                changedPrivateProperties.has('inputState') ||
                changedPrivateProperties.has('inputState.activeTool')) {
                // Non-default Suggest Inventory should not be shown when context
                // or tools are present.
                if (this.hasContent()) {
                    this.suggestInventory = null;
                }
                this.updateInputPlaceholder();
            }
            // Listening is true if there is no error and voice search is open.
            if (changedProperties.has('inVoiceSearchMode') ||
                changedProperties.has('hasVoiceSearchError')) {
                this.isListening =
                    this.inVoiceSearchMode && !this.hasVoiceSearchError;
            }
            if (!this.hasUpdated) {
                this.voiceSearchCoherenceEnabled =
                    this.computeVoiceSearchCoherenceEnabled();
            }
        }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            this.setupInputListener_();
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has('inputState')) {
                const oldInputState = changedProperties.get('inputState');
                if (oldInputState &&
                    this.inputState?.activeTool !== oldInputState.activeTool &&
                    !this.submitting) {
                    this.focusInput();
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
            }
            const changedPrivateProperties = changedProperties;
            if (changedPrivateProperties.has('selectedMatchIndex')) {
                if (this.selectedMatch &&
                    this.shouldPreviewMatchInInput_(this.selectedMatch)) {
                    // Update the input.
                    if (this.input !== this.selectedMatch.fillIntoEdit) {
                        this.getInputElement().resetHeight();
                        this.input = this.selectedMatch.fillIntoEdit;
                    }
                }
                else if (!this.lastQueriedInput) {
                    // This is for cases when focus leaves the matches/input or a
                    // match that is not previewed is selected in zero-state.
                    // If there was already text in the input do not clear it.
                    // Only clear input when not empty, otherwise this impacts
                    // suggestions getting fetched for zero state.
                    if (this.input) {
                        this.clearInput();
                    }
                }
                else {
                    // For typed queries reset the input back to typed value when
                    // focus leaves the match or a match that is not previewed is
                    // selected.
                    if (this.input !== this.lastQueriedInput) {
                        this.getInputElement().resetHeight();
                        this.input = this.lastQueriedInput;
                    }
                }
            }
            if (changedPrivateProperties.has('attachedContext')) {
                this.dispatchEvent(new CustomEvent('on-context-files-changed'));
            }
            if (changedPrivateProperties.has('smartComposeInlineHint')) {
                if (this.smartComposeAnnounceTimeout_ !== null) {
                    clearTimeout(this.smartComposeAnnounceTimeout_);
                    this.smartComposeAnnounceTimeout_ = null;
                }
                if (this.smartComposeInlineHint) {
                    this.smartComposeAnnounceTimeout_ = setTimeout(() => {
                        this.smartComposeAnnounceTimeout_ = null;
                        if (this.smartComposeInlineHint) {
                            const announcer = getAnnouncerInstance(this.closest('dialog') || document.body);
                            announcer.announce(this.smartComposeInlineHint + ', ' +
                                this.i18n('composeboxSmartComposeTitle'));
                        }
                    }, 1000);
                }
            }
            if (changedPrivateProperties.has('state') && this.state) {
                this.updateState(this.state);
            }
        }
        // =====================================================================
        // Embedder-provided methods for DOM and Mojo access
        // =====================================================================
        getInputElement() {
            assertNotReached();
        }
        getDropdownElement() {
            assertNotReached();
        }
        getActiveElement() {
            assertNotReached();
        }
        getPageHandler() {
            assertNotReached();
        }
        getSearchboxCallbackRouter() {
            assertNotReached();
        }
        getSearchboxHandler() {
            assertNotReached();
        }
        getContextEntrypointElement() {
            assertNotReached();
        }
        getLensButtonElement() {
            return null;
        }
        getFileInputsElement() {
            return null;
        }
        shouldHandleSuggestionFuseboxActions() {
            return false;
        }
        // Embedders return true to keep a delayed tab unsubmittable until the
        // backend's snapshot exists (`kProcessing`), see crbug.com/552185361.
        shouldWaitForDelayedTabContext() {
            return false;
        }
        // Synchronous submit guard; `canSubmitFilesAndInput` lags a render
        // cycle and is not consulted on suggestion clicks at all.
        hasPendingDelayedTabContext_() {
            return this.shouldWaitForDelayedTabContext() &&
                (this.pendingDelayedTabRequests_.size > 0 ||
                    Array.from(this.pendingUploads)
                        .some(token => this.attachedContext.get(token)?.delayUpload));
        }
        resetDelayedTabContextRequests_() {
            this.pendingDelayedTabRequests_.clear();
            this.requestUpdate();
        }
        // =====================================================================
        // Common event handlers
        // =====================================================================
        // Used in composeboxes that specifically render the voice search
        // component internally instead of at the parent level.
        // Example: NTP composebox, omnibox popup, contextual tasks.
        // Examples of embedders that render voice search at the app level
        // rather than inside composebox: Omnibox Everywhere.
        // Receives events from the inner voice search component.
        onVoicePermissionChanged(e) {
            e.preventDefault();
            const voiceSearchElement = this.shadowRoot?.querySelector('#voiceSearch');
            const audioAnimation = this.shadowRoot?.querySelector('#animatedSearchElement');
            if (e.detail.isOpened) {
                // Update composebox height/width defaults to be larger
                // for permission prompt showing.
                if (voiceSearchElement) {
                    voiceSearchElement.classList.add(PERMISSION_PROMPT_CSS_CLASS);
                    if (e.detail.height > 0 && e.detail.width > 0) {
                        voiceSearchElement.style.setProperty('--cr_composebox_minimum_height', `${e.detail.height}px`);
                        voiceSearchElement.style.setProperty('--cr_composebox_minimum_width', `${e.detail.width}px`);
                    }
                }
                // Fire a resize event for the composebox if the permission prompt
                // has a height and width. This acts as the non-default height and
                // width of the composebox, otherwise the default width/height
                // above are used.
                if (e.detail.height > 0 && e.detail.width > 0) {
                    this.fire('voice-permission-prompt-changed', e.detail);
                }
                // Not listening if no permission granted. Needed to turn off
                // animation.
                this.isListening = false;
                // Hide the audio wave animation.
                if (audioAnimation) {
                    audioAnimation.classList.add(PERMISSION_PROMPT_CSS_CLASS);
                }
            }
            else {
                // Listening is set as `true` if permission is granted.
                this.isListening =
                    this.inVoiceSearchMode && !this.hasVoiceSearchError;
                this.fire('voice-permission-prompt-changed', e.detail);
                if (audioAnimation) {
                    audioAnimation.classList.remove(PERMISSION_PROMPT_CSS_CLASS);
                }
                if (voiceSearchElement) {
                    voiceSearchElement.classList.remove(PERMISSION_PROMPT_CSS_CLASS);
                    voiceSearchElement.style.removeProperty('--cr_composebox_minimum_height');
                    voiceSearchElement.style.removeProperty('--cr_composebox_minimum_width');
                }
            }
        }
        // This function is called when backend starts a file upload flow,
        // whether through `addFileFromAttachment_`,
        // `addFileContextFromBrowser`, etc. This contrasts with the workflows
        // where the frontend starts a file upload flow
        // (`addFileContext`).
        onFileContextAdded(file) {
            const newAttachedContext = new Map(this.attachedContext);
            newAttachedContext.set(file.uuid, file);
            this.attachedContext = newAttachedContext;
            // Whether this file blocks submission follows from `file.status`;
            // see `computeFileUploadsComplete()`.
        }
        addFileContextForTesting(file) {
            this.onFileContextAdded(file);
        }
        onTranscriptUpdate(e) {
            this.transcript = e.detail;
        }
        onSpeechReceived() {
            this.receivedSpeech = true;
        }
        onDismissErrorScrim() {
            this.errorMessage = '';
        }
        onSelectedMatchIndexChanged(e) {
            this.selectedMatchIndex = e.detail.value;
            this.selectedMatch =
                this.result?.matches[this.selectedMatchIndex] || null;
        }
        onMatchPreAccept_(e) {
            if (!this.maybeHandleSuggestionFuseboxAction_(e.detail.match, e) &&
                this.hasPendingDelayedTabContext_()) {
                e.preventDefault();
            }
        }
        onMatchClick(e) {
            // Perform submission cleanup (clearing autocomplete matches and
            // resetting transient input state) to ensure the composebox is left
            // in a clean state.
            this.submitCleanup();
            // We only close the composebox when opening in a new tab because
            // doing so in the current tab causes a visual jitter where the
            // composebox closes before the new results page finishes loading.
            if (e && e.detail &&
                (e.detail.ctrlKey || e.detail.metaKey || e.detail.shiftKey)) {
                this.closeComposebox(/* afterSubmit= */ true);
            }
        }
        /**
         * @param e Event containing index of the match that received focus.
         */
        onMatchFocusin(e) {
            // Select the match that received focus.
            this.getDropdownElement().selectIndex(e.detail.index);
        }
        onInputStateChanged(inputState) {
            this.inputState = inputState;
            const allowedTypes = this.inputState.allowedInputTypes;
            this.attachedContext.forEach((file, uuid) => {
                // Ghost files are placeholders created from an upload status
                // update before the frontend learned what the context actually is.
                // Their `inputType` is a placeholder value, so they must not be
                // evaluated against the allowed input types; doing so would delete
                // context that is still being attached and tear down its
                // browser-side upload. They are re-evaluated once hydrated.
                // TODO(b/537852029): Remove once ghost files carry a real input
                // type.
                if (file.isGhost) {
                    return;
                }
                if (!allowedTypes.includes(file.inputType)) {
                    this.deleteFile(uuid);
                }
            });
            if (this.tabSuggestionsState === TabSuggestionsState.LOADED) {
                this.refreshTabSuggestions(/*forceRefresh=*/ true);
            }
        }
        setAimThreadRestoredTabs(tabs) {
            this.aimThreadRestoredTabs = tabs;
            this.refreshTabSuggestions(/*forceRefresh=*/ true);
            this.requestUpdate();
        }
        onAutocompleteResultChanged(result) {
            if (this.submitting) {
                return;
            }
            if (result.queryId !== this.activeQueryId) {
                return;
            }
            this.maybeCarryOverPreviousMatches(result);
            this.result = result;
            const hasMatches = this.result.matches.length > 0;
            const firstMatch = hasMatches ? this.result.matches[0] : null;
            // Zero suggest matches are not allowed to be default. Therefore, this
            // makes sure zero suggest results aren't focused when they are
            // returned.
            if (firstMatch && firstMatch.allowedToBeDefaultMatch) {
                this.selectFirstMatch();
            }
            else if (this.input.trim() && hasMatches && this.selectedMatchIndex >= 0 &&
                this.selectedMatchIndex < this.result.matches.length) {
                // Restore the selection and update the input. Don't restore when
                // the user deletes all their input and autocomplete is queried or
                // else the empty input will change to the value of the first
                // result.
                this.getDropdownElement().selectIndex(this.selectedMatchIndex);
                // Set the selected match since the `selectedMatchIndex` does not
                // change (and therefore `selectedMatch` does not get updated since
                // `onSelectedMatchIndexChanged_` is not called).
                this.selectedMatch = this.result.matches[this.selectedMatchIndex];
                if (this.shouldPreviewMatchInInput_(this.selectedMatch)) {
                    this.input = this.selectedMatch.fillIntoEdit;
                }
            }
            else {
                this.getDropdownElement().unselect();
            }
            // Smart compose hints should only be updated from the async response.
            // This prevents the hint flicker from an empty smart compose response
            // in the synchronous pass.
            if (this.haveReceivedSynchronousAutocompleteResponse) {
                // Populate the smart compose suggestion.
                const nextHint = this.result.smartComposeInlineHint?.trim() ?
                    this.result.smartComposeInlineHint :
                    '';
                if (this.smartComposeInlineHint !== nextHint) {
                    this.smartComposeInlineHint = nextHint;
                }
                // Smart compose stats are incremented on every response from the
                // server.
                if (this.smartComposeInlineHint) {
                    this.smartComposeStats.shownCount++;
                    this.smartComposeStats.shownLength +=
                        this.smartComposeInlineHint.length;
                }
            }
            this.haveReceivedSynchronousAutocompleteResponse = true;
        }
        // TODO(crbug.com/460888279): This is a temporary, merge safe fix.
        // Ideally, the ACController is not sending multiple responses for a
        // single query, especially when the matches is empty. Remove this logic
        // once a long term fix is found.
        maybeCarryOverPreviousMatches(result) {
            if (!this.composeboxNoFlickerSuggestionsFix ||
                !this.showTypedSuggest ||
                this.haveReceivedSynchronousAutocompleteResponse) {
                return;
            }
            // The first autocomplete response for ZPS contains no matches, since
            // composebox doesn't support ZPS from local providers (ex. history
            // suggestion). Similarly, since composebox doesn't support local
            // providers, typed suggest first response returns a single verbatim
            // match, which doesn't show in the dropdown. To prevent closing the
            // dropdown before the actual response from the suggest server is
            // received, add the previous non-verbatim matches to this first
            // response.
            if (this.result && this.result.matches.length > 0 &&
                result.matches.length <= 1) {
                result.matches.push(...this.result.matches.filter(match => match.type !== 'search-what-you-typed'));
            }
        }
        onContextualInputStatusChanged(token, status, errorType) {
            // Statuses arrive on the page pipe, which is not ordered with the
            // `addTabContext` response. A ghost placeholder created for an
            // unknown token (see `updateFileStatus()`) is not the real
            // attachment yet, so a terminal status landing on it must still be
            // recorded; otherwise `addTabContextHandleCallback()` replaces the
            // ghost with an in-flight attachment that never completes.
            const existing = this.attachedContext.get(token);
            if ((!existing || existing.isGhost) &&
                isContextUploadStatusTerminal(status)) {
                this.earlyTerminalUploads.set(token, status);
            }
            // `kProcessing` means the delayed-tab snapshot is in memory. If the
            // token is not mapped yet, park it for the `addTabContext()` reply.
            if (this.shouldWaitForDelayedTabContext() &&
                this.pendingDelayedTabRequests_.size > 0 &&
                (!existing || existing.isGhost) &&
                status === ContextUploadStatus.kProcessing &&
                !this.earlyTerminalUploads.has(token)) {
                this.earlyTerminalUploads.set(token, status);
            }
            if (existing?.delayUpload && !isContextUploadStatusTerminal(status)) {
                if (status === ContextUploadStatus.kProcessing) {
                    // Nothing is uploading before submit, so the snapshot being
                    // ready is the terminal state for a delayed tab here.
                    if (this.shouldWaitForDelayedTabContext()) {
                        this.updateFileStatus(token, ContextUploadStatus.kUploadSuccessful, null);
                    }
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
                return;
            }
            // If error message is updated, then the returned file is stale and
            // removed from carousel. File is removed from carousel on
            // `kUploadReplaced` as well despite no error message being returned
            // (special case). Else, `file` below is updated to its most recent
            // state, and `errorMessage` is null.
            const { file, errorMessage } = this.updateFileStatus(token, status, errorType);
            // `updateFileStatus()` above either wrote `status` onto the file in
            // `attachedContext` or dropped the file from it, which is all that
            // `pendingUploads` and `fileUploadsComplete` are derived from. No
            // separate upload bookkeeping is needed below.
            if (errorMessage) { // `file` value is definitely stale.
                this.errorMessage = errorMessage;
                // Clear autocomplete matches and refresh zero state suggestions if
                // there are no attached files and no user input after a file upload
                // error.
                this.getSearchboxHandler().deleteContext(token, /*fromAutoSuggestedChip=*/ false);
                if (this.attachedContext.size === 0 && !this.input.trim()) {
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
            }
            else if (file) {
                // Treat `kUploadReplaced` like an error upload state
                // (like `kUploadFailed`. `kValidationFailed`,
                // `kUploadExpired`), just without setting `errorMessage`.
                // This means for `kUploadReplaced`, we do not fetch suggestions,
                // etc.
                if (file.status === ContextUploadStatus.kUploadReplaced) {
                    return;
                }
                else if (file.status === ContextUploadStatus.kUploadSuccessful) {
                    const announcer = getAnnouncerInstance();
                    announcer.announce(this.i18n('composeboxFileUploadCompleteText'));
                }
                // Fetch contextual suggestions for processingSuggestSignalsReady
                // non-images:
                if (status === ContextUploadStatus.kProcessingSuggestSignalsReady &&
                    this.showZps && !file.type.includes('image')) {
                    // Query autocomplete to get contextual suggestions for files.
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
                // For image files:
                if (status === ContextUploadStatus.kProcessingSuggestSignalsReady &&
                    file.type.includes('image')) {
                    if (this.enableImageContextualSuggestions) {
                        // Query autocomplete to get contextual suggestions for files.
                        this.queryAutocomplete(/* clearMatches= */ true);
                    }
                    else {
                        this.showDropdown = false;
                    }
                }
            }
        }
        onInputInput(_e) {
            // Clear suggestInventory when the user edits query.
            this.suggestInventory = null;
            const newInput = this.getInputElement().input;
            if (this.smartComposeEnabled && this.smartComposeInlineHint) {
                if (newInput === this.input + this.smartComposeInlineHint[0]) {
                    this.smartComposeInlineHint =
                        this.smartComposeInlineHint.substring(1);
                }
                else if (newInput !== this.input) {
                    this.smartComposeInlineHint = '';
                }
            }
            this.input = newInput;
            // `clearMatches` is true if input is empty stop any in progress
            // providers before requerying for on-focus (zero-suggest) inputs. The
            // searchbox doesn't allow zero-suggest requests to be made while the
            // ACController is not done.
            if (this.composeboxNoFlickerSuggestionsFix) {
                // If the composebox no flickering fix is enabled, stop the
                // ACController from querying for suggestions when the input is
                // empty, but don't clear the matches so the dropdown doesn't close.
                if (this.input === '') {
                    this.getSearchboxHandler().stopAutocomplete(
                    /*clearResult=*/ true);
                }
                this.queryAutocomplete(/* clearMatches= */ false);
            }
            else {
                this.queryAutocomplete(/* clearMatches= */ this.input === '');
            }
        }
        onClearSmartCompose() {
            this.smartComposeInlineHint = '';
        }
        onInputFocusin() {
            if (this.submitting) {
                return;
            }
            // if there's a last queried input, it's guaranteed that at least
            // the verbatim match will exist.
            if (this.lastQueriedInput) {
                this.selectFirstMatch();
            }
        }
        onRecordingStopped(e) {
            const newTranscript = e.detail;
            if (newTranscript && newTranscript.trim().length > 0) {
                this.input = newTranscript;
                this.queryAutocomplete(/* clearMatches= */ false);
            }
            this.voiceSearchEndCleanup();
        }
        isFocusInInput() {
            return this.getActiveElement() === this.getInputElement();
        }
        finalizeMatchSelection(e) {
            this.smartComposeInlineHint = '';
            e.preventDefault();
            if (this.getActiveElement() === this.getDropdownElement()) {
                this.getDropdownElement().focusSelected();
            }
        }
        handleArrowKey_(e) {
            if (!this.dropdownNeeded) {
                return;
            }
            if (this.isFocusInInput() && !this.showDropdown) {
                return;
            }
            if (!this.hasMatches() || hasKeyModifiers(e)) {
                return;
            }
            if (e.key === 'ArrowDown') {
                this.getDropdownElement().selectNext();
            }
            else if (e.key === 'ArrowUp') {
                this.getDropdownElement().selectPrevious();
            }
            this.finalizeMatchSelection(e);
        }
        handleTab_(e) {
            if (this.isFocusInInput()) {
                // If focus leaves the input, unselect the first match.
                if (e.shiftKey) {
                    this.getDropdownElement().unselect();
                }
                else if (this.smartComposeEnabled && this.smartComposeInlineHint) {
                    this.smartComposeStats.acceptedCount++;
                    this.smartComposeStats.charactersAccepted +=
                        this.smartComposeInlineHint.length;
                    this.input = this.input + this.smartComposeInlineHint;
                    this.smartComposeInlineHint = '';
                    e.preventDefault();
                    this.queryAutocomplete(
                    /* clearMatches= */ false, InputMethod.kSmartCompose);
                }
                return;
            }
            if (!this.hasMatches() || !this.dropdownNeeded) {
                return;
            }
            if (this.unselectMatchOnTabExit) {
                this.getDropdownElement().unselectOnTabExit(e);
            }
            else if (!hasKeyModifiers(e)) {
                // If focus goes past the last match, unselect the last match.
                if (this.selectedMatchIndex === this.result.matches.length - 1) {
                    if (this.selectedMatch.supportsDeletion) {
                        const focusedMatchElem = this.getActiveElement()?.shadowRoot?.activeElement;
                        const focusedButtonElem = focusedMatchElem?.shadowRoot?.activeElement;
                        if (focusedButtonElem?.id === 'remove') {
                            this.getDropdownElement().unselect();
                        }
                    }
                    else {
                        this.getDropdownElement().unselect();
                    }
                }
            }
        }
        handleEnter_(e) {
            if (this.getActiveElement() === this.getDropdownElement() ||
                !e.shiftKey) {
                e.preventDefault();
                if (this.selectedMatchIndex >= 0) {
                    const match = this.result.matches[this.selectedMatchIndex];
                    assert(match);
                    if (this.maybeHandleSuggestionFuseboxAction_(match)) {
                        return;
                    }
                }
                if (this.canSubmitFilesAndInput) {
                    this.submitQuery(e);
                }
            }
        }
        handleEscape_(e) {
            this.handleEscapeKeyLogic();
            e.stopPropagation();
            e.preventDefault();
        }
        handlePageNavigation_(e) {
            if (!this.hasMatches() || !this.dropdownNeeded ||
                hasKeyModifiers(e)) {
                return;
            }
            if (e.key === 'PageUp') {
                this.selectFirstMatch();
            }
            else {
                this.getDropdownElement().selectLast();
            }
            this.finalizeMatchSelection(e);
        }
        onKeydown(e) {
            const HANDLED_KEYS = [
                'ArrowDown',
                'ArrowUp',
                'Enter',
                'Escape',
                'PageDown',
                'PageUp',
                'Tab',
            ];
            if (!HANDLED_KEYS.includes(e.key)) {
                return;
            }
            if (e.isComposing) {
                return;
            }
            const handlers = {
                'ArrowDown': (e) => this.handleArrowKey_(e),
                'ArrowUp': (e) => this.handleArrowKey_(e),
                'Enter': (e) => this.handleEnter_(e),
                'Escape': (e) => this.handleEscape_(e),
                'Tab': (e) => this.handleTab_(e),
                'PageUp': (e) => this.handlePageNavigation_(e),
                'PageDown': (e) => this.handlePageNavigation_(e),
            };
            handlers[e.key](e);
        }
        updateInputPlaceholder() {
            if (this.fuseboxChipHint_ !== null) {
                this.inputPlaceholder = this.fuseboxChipHint_;
                return;
            }
            if (this.inputState) {
                if (this.inputState.activeTool !== ToolMode.kUnspecified) {
                    const config = this.inputState.toolConfigs.find(c => c.tool === this.inputState.activeTool);
                    if (config?.hintText) {
                        this.inputPlaceholder = config.hintText;
                        return;
                    }
                }
                if (this.inputState.activeModel !== ModelMode.kUnspecified) {
                    const config = this.inputState.modelConfigs.find(c => c.model === this.inputState.activeModel);
                    if (config?.hintText) {
                        this.inputPlaceholder = config.hintText;
                        return;
                    }
                }
                if (this.inputState.hintText) {
                    this.inputPlaceholder = this.inputState.hintText;
                    return;
                }
            }
            if (this.inputState?.activeTool === ToolMode.kDeepSearch) {
                this.inputPlaceholder =
                    loadTimeData.getString('composeDeepSearchPlaceholder');
            }
            else if (this.inputState?.activeTool === ToolMode.kImageGen) {
                this.inputPlaceholder =
                    loadTimeData.getString('composeCreateImagePlaceholder');
            }
            else {
                this.inputPlaceholder =
                    loadTimeData.getString('searchboxComposePlaceholder');
            }
        }
        isTogglingOff(tool) {
            return this.inputState?.activeTool === tool;
        }
        onToolClick(e) {
            if (!this.isTogglingOff(e.detail.toolMode)) {
                recordToolModeSelection(e.detail.toolMode, this.composeboxSource, 'AimPopup');
            }
            this.handleToolClick(e.detail.toolMode);
        }
        handleToolClick(tool, allowToggleOff = true) {
            const isTogglingOff = allowToggleOff && this.isTogglingOff(tool);
            const newToolMode = isTogglingOff ? ToolMode.kUnspecified : tool;
            if (isTogglingOff) {
                const metricName = `ContextualSearch.UserAction.InputStateDeletion.${this.composeboxSource}`;
                recordEnumerationValue(metricName, ContextualSearchInputStateDeletionType.TOOL, ContextualSearchInputStateDeletionType.MAX_VALUE + 1);
                const userActionName = `ContextualSearch.UserAction.InputStateDeletion.Tool.${this.composeboxSource}`;
                recordUserAction(userActionName);
            }
            else {
                this.getSearchboxHandler().recordToolSelectionAction(newToolMode);
            }
            this.handleToolModeUpdate(newToolMode);
        }
        handleToolModeUpdate(newTool, isSetByAim = false) {
            // If it is canvas added/removed, browser process will notify
            // AIM webpage (client side) so it can respond to these changes.
            // Server is not notified of these changes; side effects are local.
            this.getSearchboxHandler().setActiveToolMode(newTool, isSetByAim);
            this.updateInputPlaceholder();
        }
        onModelClick(e) {
            recordModelModeSelection(e.detail.model, this.composeboxSource, 'AimPopup');
            this.selectModelMode(e.detail.model);
        }
        // Records and applies a tool the user selected.
        selectToolMode(tool) {
            this.getSearchboxHandler().recordToolSelectionAction(tool);
            this.handleToolModeUpdate(tool);
        }
        // Records and applies a model the user selected.
        selectModelMode(model) {
            this.getSearchboxHandler().recordModelSelectionAction(model);
            this.getSearchboxHandler().setActiveModelMode(model, /*isSetByAim=*/ false);
            this.updateInputPlaceholder();
        }
        onOpenImageUpload() {
            recordContextualElementClickedMetric(this.composeboxSource, 'AimPopup', ContextType.IMAGE);
        }
        onOpenFileUpload() {
            recordContextualElementClickedMetric(this.composeboxSource, 'AimPopup', ContextType.FILE);
        }
        async onOpenDriveUpload() {
            recordContextualElementClickedMetric(this.composeboxSource, 'AimPopup', ContextType.DRIVE);
            // Check if the user has accepted the Drive disclaimer. This handles
            // the edge case where a user sees the drive option in the menu, but
            // then revokes Drive permissions.
            const { status } = await this.getSearchboxHandler().getDriveDisclaimerStatus();
            // Abort only if the account is restricted/ineligible. If unconsented
            // (kNotAccepted), allow the click through so onDriveUploadClicked
            // can trigger the ConsentKit disclaimer onboarding dialog.
            if (status === DriveDisclaimerStatus.kRestricted) {
                return;
            }
            const { response } = await this.getSearchboxHandler().onDriveUploadClicked();
            this.addDriveUploads(response.files, response.error ?? undefined);
        }
        onSmartTabSharingActiveChanged(_e) {
            // 
        }
        clearContextForSmartTabSharingActive() {
            this.clearManualTabs();
            if (this.automaticActiveTab) {
                const uuid = this.automaticActiveTab.uuid;
                this.automaticActiveTab = null;
                this.pendingAutomaticActiveTabUrl = '';
                this.pendingAutomaticActiveTabTitle = '';
                this.deleteFile(uuid, /*fromUserAction=*/ false);
            }
        }
        clearManualTabs() {
            const fileMap = new Map(this.files);
            for (const [uuid, file] of fileMap.entries()) {
                if ((file.type === 'tab' || !!file.tabId) &&
                    (!this.automaticActiveTab ||
                        file.uuid !== this.automaticActiveTab.uuid)) {
                    this.deleteFile(uuid, /*fromUserAction=*/ false);
                }
            }
        }
        onContextMenuContainerMousedown(e) {
            // Special treatment for the "Tall" layout variants where not clicking
            // on an inner element should be treated as clicking on a
            // non-focusable area.
            if (this.searchboxLayoutMode !== 'Compact' &&
                (e.target instanceof HTMLElement &&
                    e.target.id === 'contextMenuContainer')) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        onContextMenuContainerClick(e) {
            e.preventDefault();
            e.stopPropagation();
            // Ignore non-primary button clicks.
            if (e.button !== 0) {
                return;
            }
            if (this.searchboxLayoutMode !== 'Compact') {
                this.focusInput();
            }
        }
        async onDeleteTabContext(e) {
            const tabId = e.detail.tabId;
            const token = this.addedTabsIds.get(tabId);
            if (token) {
                this.deleteFile(token, e.detail.fromUserAction);
            }
            else {
                if (isValidTabId(tabId) &&
                    this.tabSuggestions.some(t => t.tabId === tabId)) {
                    this.getSearchboxHandler().deleteTabContext(tabId);
                }
            }
            this.aimThreadRestoredTabs =
                this.aimThreadRestoredTabs.filter(tab => tab.tabId !== tabId);
            await this.updateComplete;
            this.keepMenuOpenForMultiSelection();
        }
        async onAddTabContext(e) {
            if (!this.browserTabContextAdded) {
                recordContextualElementClickedMetric(this.composeboxSource, 'AimPopup', ContextType.TAB);
                this.browserTabContextAdded = true;
            }
            await this.addTabContextHandleCallback({
                tabId: e.detail.id,
                title: e.detail.title,
                url: e.detail.url,
                delayUpload: e.detail.delayUpload,
                origin: e.detail.origin,
                singleTabType: e.detail.singleTabType,
            });
            await this.updateComplete;
            // Only keep menu open if it was from menu and not recent tab.
            if (e.detail.origin === TabAttachmentSource.kContextMenu) {
                this.keepMenuOpenForMultiSelection();
            }
        }
        onShareTabsFlyoutOpenChanged(e) {
            this.shareTabsFlyoutOpen = e.detail.open;
        }
        shouldShowSuggestionActivityLink() {
            // The link explains zero-suggest suggestions based on the user's
            // activity, so hide it as soon as the user starts typing.
            const showActivityLink = !this.input && this.result &&
                this.showDropdown && this.result.showAimActivityLink;
            this.fire('show-suggestion-activity-link', showActivityLink);
            return !!showActivityLink;
        }
        onLinkClicked(e) {
            // Manually handle navigation to support WebView environments where
            // default link clicks may be ignored.
            e.detail.event.preventDefault();
            const href = e.detail.event.currentTarget.href;
            if (href) {
                this.getPageHandler().navigateUrl(href);
            }
        }
        async addTabContextHandleCallback(tabUpload, _replaceAutoActiveTabToken = false, onBeforeUpdateFiles) {
            if (tabUpload.origin !== TabAttachmentSource.kAutoActive) {
                this.clearAutocompleteMatches();
            }
            const waitForSnapshot = tabUpload.delayUpload && this.shouldWaitForDelayedTabContext();
            const pendingRequest = waitForSnapshot ? {} : null;
            if (pendingRequest) {
                this.pendingDelayedTabRequests_.add(pendingRequest);
                this.requestUpdate();
            }
            try {
                const token = await this.getSearchboxHandler().addTabContext(tabUpload.tabId, tabUpload.delayUpload, tabUpload.origin ?? TabAttachmentSource.kOther);
                if (!token) {
                    return null;
                }
                const snapshotReady = this.earlyTerminalUploads.get(token) ===
                    ContextUploadStatus.kProcessing;
                if (snapshotReady) {
                    this.earlyTerminalUploads.delete(token);
                }
                // The composebox was closed or cleared while the call was in
                // flight: drop the tab on both ends rather than resurrecting it.
                if (pendingRequest &&
                    !this.pendingDelayedTabRequests_.has(pendingRequest)) {
                    this.earlyTerminalUploads.delete(token);
                    if (this.attachedContext.delete(token)) {
                        this.attachedContext = new Map(this.attachedContext);
                    }
                    this.getSearchboxHandler().deleteContext(token, /*fromAutoSuggestedChip=*/ false);
                    return null;
                }
                // A terminal status may have arrived while this async
                // `addTabContext` call was in flight, before the token could be
                // mapped into `attachedContext`. Consume it here; note the
                // `delete()` must run even when the status is unused, so that it
                // is not left behind for a later tab that reuses the token.
                const existingStatus = this.attachedContext.get(token)?.status ?? null;
                const earlyStatus = this.earlyTerminalUploads.get(token) ??
                    (existingStatus !== null &&
                        isContextUploadStatusTerminal(existingStatus) ?
                        existingStatus :
                        null);
                this.earlyTerminalUploads.delete(token);
                if (earlyStatus !== null &&
                    earlyStatus !== ContextUploadStatus.kUploadSuccessful) {
                    if (this.attachedContext.has(token)) {
                        this.attachedContext.delete(token);
                        this.attachedContext = new Map([...this.attachedContext]);
                    }
                    return null;
                }
                // A tab shows as in flight while its upload runs, or, for a
                // delayed tab on a waiting embedder, until its snapshot is ready.
                const uploadInFlight = earlyStatus === null &&
                    (!tabUpload.delayUpload || (waitForSnapshot && !snapshotReady));
                const attachment = ComposeboxFile.createFromTab(token, tabUpload.tabId, tabUpload.title, tabUpload.url, {
                    supportsUnimodal: true,
                    origin: tabUpload.origin,
                    delayUpload: tabUpload.delayUpload,
                    singleTabType: tabUpload.singleTabType,
                    status: uploadInFlight ?
                        ContextUploadStatus.kUploadStarted :
                        ContextUploadStatus.kUploadSuccessful,
                });
                if (onBeforeUpdateFiles) {
                    onBeforeUpdateFiles(attachment);
                }
                this.attachedContext = new Map([
                    ...this.attachedContext.entries(),
                    [attachment.uuid, attachment],
                ]);
                this.addedTabsIds = new Map([
                    ...this.addedTabsIds.entries(),
                    [tabUpload.tabId, attachment.uuid],
                ]);
                // The early `kProcessing` was skipped above with no file to
                // attach it to; fetch the contextual suggestions it would have.
                if (waitForSnapshot && snapshotReady && earlyStatus === null) {
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
                this.focusInput();
                return attachment;
            }
            catch (e) {
                if (pendingRequest &&
                    !this.pendingDelayedTabRequests_.has(pendingRequest)) {
                    return null;
                }
                const err = e;
                if (FILE_VALIDATION_ERRORS_MAP.has(err)) {
                    this.errorMessage =
                        this.i18n(FILE_VALIDATION_ERRORS_MAP.get(err));
                }
                return null;
            }
            finally {
                if (pendingRequest) {
                    this.pendingDelayedTabRequests_.delete(pendingRequest);
                    this.requestUpdate();
                }
            }
        }
        async keepMenuOpenForMultiSelection() {
            // When context management is enabled, selecting a tab closes the menu
            // unless `keepMenuOpenOnTabSelect` is enabled.
            // When context management is disabled, always keep the menu open.
            if (this.contextManagementInComposeboxEnabled &&
                !this.keepMenuOpenOnTabSelect) {
                return;
            }
            this.shareTabsFlyoutOpen = true;
            await this.updateComplete;
            const entrypointAndMenu = this.getContextEntrypointElement();
            if (entrypointAndMenu) {
                entrypointAndMenu
                    .openMenuForMultiSelection();
            }
        }
        async handleFuseboxAction(request) {
            const action = request.fuseboxAction;
            let text = request.suggestion;
            if (action?.queryActionOverride) {
                switch (action.queryActionOverride) {
                    case QueryActionOverride.kHint:
                        this.fuseboxChipHint_ = request.suggestion;
                        this.updateInputPlaceholder();
                        text = '';
                        break;
                    case QueryActionOverride.kPaste:
                        this.focusInput();
                        break;
                    default:
                        break;
                }
            }
            const fuseboxActionState = {
                text,
                files: request.files,
                mode: action?.preselectedTool ?? ToolMode.kUnspecified,
                model: action?.preselectedModel ?? ModelMode.kUnspecified,
                suggestInventory: action?.preferredInventory ?? undefined,
                // 
            };
            this.selectAllOnStateUpdate_ =
                action?.queryActionOverride === QueryActionOverride.kPaste;
            this.state = fuseboxActionState;
            if (action?.preselectedInputSource) {
                switch (action.preselectedInputSource) {
                    case InputSource.kInputSourceGallery:
                        this.getFileInputsElement()?.openImagePicker();
                        break;
                    case InputSource.kInputSourceFilePicker:
                        this.getFileInputsElement()?.openFilePicker();
                        break;
                    case InputSource.kInputSourceTabPicker:
                        await this.openTabPicker();
                        break;
                    case InputSource.kInputSourceVoice:
                        this.onVoiceSearchButtonClick();
                        break;
                    default:
                        break;
                }
            }
        }
        async openTabPicker() {
            const contextEntrypoint = this.getContextEntrypointElement();
            if (!(contextEntrypoint instanceof
                ContextualEntrypointAndMenuElement)) {
                return;
            }
            if (!this.inputState) {
                const response = await this.getSearchboxHandler().getInputState();
                if (response) {
                    this.inputState = response.state;
                }
            }
            this.shareTabsFlyoutOpen = true;
            await this.refreshTabSuggestions(true);
            await this.updateComplete;
            await contextEntrypoint.updateComplete;
            const entrypointButton = contextEntrypoint.shadowRoot?.querySelector('#entrypointButton');
            if (entrypointButton) {
                await entrypointButton.updateComplete;
            }
            entrypointButton?.shadowRoot
                ?.querySelector('#entrypoint')
                ?.click();
        }
        async updateState(state) {
            const selectAll = this.selectAllOnStateUpdate_;
            this.selectAllOnStateUpdate_ = false;
            if (!this.inputState) {
                // Block submission across the `getInputState()` await when the
                // state carries delayed tabs; their own guards start only below.
                const pendingRequest = this.shouldWaitForDelayedTabContext() &&
                    (state.files ||
                        []).some(file => 'tabId' in file && file.delayUpload) ?
                    {} :
                    null;
                if (pendingRequest) {
                    this.pendingDelayedTabRequests_.add(pendingRequest);
                    this.requestUpdate();
                }
                try {
                    const inputStateResponse = await this.getSearchboxHandler().getInputState();
                    // Check if a newer updateState is running and we can quit.
                    if (state !== this.state ||
                        (pendingRequest &&
                            !this.pendingDelayedTabRequests_.has(pendingRequest))) {
                        return;
                    }
                    if (inputStateResponse) {
                        this.inputState = inputStateResponse.state;
                    }
                }
                finally {
                    if (pendingRequest) {
                        this.pendingDelayedTabRequests_.delete(pendingRequest);
                        this.requestUpdate();
                    }
                }
            }
            this.suggestInventory = state.suggestInventory ?? null;
            const text = state.text || '';
            const files = state.files || [];
            const mode = state.mode ?? ToolMode.kUnspecified;
            let model = state.model ?? ModelMode.kUnspecified;
            this.activeQueryId = -1;
            if (text) {
                this.input = text;
                this.lastQueriedInput = text;
            }
            const isToolChanging = mode !== ToolMode.kUnspecified &&
                mode !== this.inputState?.activeTool;
            if (this.showZps && files.length === 0 && !isToolChanging) {
                this.queryAutocomplete(/* clearMatches= */ false);
            }
            if (files.length > 0 || state.error !== undefined) {
                const dataTransfer = new DataTransfer();
                const driveUploads = [];
                for (const file of files) {
                    if ('tabId' in file) {
                        if (file.origin === TabAttachmentSource.kContextMenu) {
                            this.keepMenuOpenForMultiSelection();
                        }
                        this.addTabContextHandleCallback({
                            tabId: file.tabId,
                            title: file.title,
                            url: file.url,
                            delayUpload: file.delayUpload,
                            origin: file.origin,
                        }, 
                        /*replaceAutoActiveTabToken=*/ false);
                    }
                    else if ('mimeType' in file) {
                        driveUploads.push(file);
                    }
                    else if (isBrowserFileUpload(file)) {
                        this.addFileContextFromBrowser(file.token, file.fileInfo);
                    }
                    else {
                        dataTransfer.items.add(file.file);
                    }
                }
                this.processFiles(dataTransfer.files);
                if (driveUploads.length > 0 || state.error !== undefined) {
                    this.addDriveUploads(driveUploads, state.error);
                }
            }
            if (mode !== ToolMode.kUnspecified) {
                this.handleToolClick(mode, /*allowToggleOff=*/ false);
            }
            if (!!this.inputState && model === ModelMode.kUnspecified &&
                this.inputState.allowedModels.length > 0) {
                model = this.inputState.allowedModels[0];
            }
            this.getSearchboxHandler().setActiveModelMode(model, /*isSetByAim=*/ false);
            this.updateInputPlaceholder();
            await this.updateComplete;
            if (selectAll && state === this.state) {
                await this.getInputElement().updateComplete;
                if (state === this.state) {
                    this.getInputElement().selectAll();
                }
            }
        }
        async onContextMenuClosed() {
            this.contextMenuOpened = false;
            // Force reset of the flyout open state so that the flyout is closed
            // when the main context menu is reopened.
            this.shareTabsFlyoutOpen = false;
            await this.updateComplete;
            this.focusInput();
        }
        getSortedTabSuggestions_(suggestions) {
            const selectedTabIds = new Set(this.addedTabsIds.keys());
            const restoredTabIds = this.contextManagementInComposeboxEnabled ?
                new Set((this.aimThreadRestoredTabs || []).map(tab => tab.tabId)) :
                new Set();
            const selected = suggestions.filter(tab => selectedTabIds.has(tab.tabId));
            const restored = suggestions.filter(tab => restoredTabIds.has(tab.tabId) &&
                !selectedTabIds.has(tab.tabId));
            const other = suggestions.filter(tab => !selectedTabIds.has(tab.tabId) &&
                !restoredTabIds.has(tab.tabId));
            return [...selected, ...restored, ...other];
        }
        onContextMenuOpened() {
            this.browserTabContextAdded = false;
            this.contextMenuOpened = true;
            if (this.tabSuggestionsState === TabSuggestionsState.LOADED) {
                this.tabSuggestions =
                    this.getSortedTabSuggestions_(this.tabSuggestions);
                if (this.inputState) {
                    const { allowedInputTypes, disabledInputTypes } = this.inputState;
                    if (allowedInputTypes.includes(InputType.kBrowserTab) &&
                        !disabledInputTypes.includes(InputType.kBrowserTab) &&
                        this.tabSuggestions.length > 0) {
                        recordInputTypeShown(InputType.kBrowserTab, this.composeboxSource, 'AimPopup');
                    }
                }
            }
            else {
                this.refreshTabSuggestions();
            }
            this.getPageHandler().onContextMenuOpened();
            if (this.inputState) {
                const { allowedInputTypes, disabledInputTypes } = this.inputState;
                allowedInputTypes.forEach((inputType) => {
                    if (inputType !== InputType.kBrowserTab &&
                        !disabledInputTypes.includes(inputType)) {
                        recordInputTypeShown(inputType, this.composeboxSource, 'AimPopup');
                    }
                });
                const { allowedTools, disabledTools } = this.inputState;
                allowedTools.forEach((tool) => {
                    if (!disabledTools.includes(tool)) {
                        recordToolModeShown(tool, this.composeboxSource, 'AimPopup');
                    }
                });
                const { allowedModels, disabledModels } = this.inputState;
                allowedModels.forEach((model) => {
                    if (!disabledModels.includes(model)) {
                        recordModelModeShown(model, this.composeboxSource, 'AimPopup');
                    }
                });
            }
        }
        onVoiceSearchButtonClick() {
            const isSystemVoiceSearchEnabled = loadTimeData.valueExists('isSystemVoiceSearchEnabled') &&
                loadTimeData.getBoolean('isSystemVoiceSearchEnabled');
            if (isSystemVoiceSearchEnabled) {
                this.getPageHandler().startPlatformVoiceRecognition();
                return;
            }
            if (this.inVoiceSearchMode) {
                return;
            }
            this.inVoiceSearchMode = true;
            this.hasVoiceSearchError = false;
            this.animationState = GlowAnimationState.LISTENING;
            this.fire('voice-search-action', { value: VoiceSearchAction.ACTIVATE });
            // For contextual tasks composebox voice metrics.
            this.fire('composebox-voice-search-start');
            this.shadowRoot
                ?.querySelector('cr-composebox-voice-search')
                ?.start();
        }
        onFileChange(e) {
            this.processFiles(e.detail.files);
            recordContextAdditionMethod(0 /* ComposeboxContextAddedMethod.CONTEXT_MENU */, this.composeboxSource);
        }
        onPaste(event) {
            if (!this.dragAndDropEnabled || !event.clipboardData?.items) {
                return;
            }
            const dataTransfer = new DataTransfer();
            for (const item of event.clipboardData.items) {
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    if (file) {
                        dataTransfer.items.add(file);
                    }
                }
            }
            const fileList = dataTransfer.files;
            if (fileList.length > 0) {
                event.preventDefault();
                this.processFiles(fileList);
                recordContextAdditionMethod(1 /* ComposeboxContextAddedMethod.COPY_PASTE */, this.composeboxSource);
            }
        }
        onDeleteFile(e) {
            this.deleteFile(e.detail.uuid, e.detail.fromUserAction);
        }
        onCancelClick() {
            if (this.hasContent()) {
                const hadActiveTool = !!this.inputState &&
                    this.inputState.activeTool !== ToolMode.kUnspecified;
                this.clearAllInputs(
                /* querySubmitted= */ false, 
                /* shouldBlockAutoSuggestedTabs= */ true);
                this.focusInput();
                if (!hadActiveTool) {
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
                if (!this.disableCaretColorAnimation) {
                    this.getInputElement().resetCaret();
                }
            }
            else {
                this.closeComposebox();
            }
        }
        onSubmitFocusin() {
            // Matches should always be greater than 0 due to verbatim match.
            if (this.input && !this.selectedMatch) {
                this.selectFirstMatch();
            }
        }
        onSubmitClick(e) {
            if (this.hasPendingDelayedTabContext_()) {
                return;
            }
            if (this.hasFiles() ||
                this.inputState?.activeTool !== ToolMode.kUnspecified) {
                this.getPageHandler().notifyComposeboxQuerySubmittedWithContext();
            }
            this.submitQuery(e);
        }
        // SEND is held while a submission navigates away, so clearing the
        // input on submit doesn't flash the button back to EXIT.
        getAimButtonMode() {
            if (this.submitEnabled || this.submitting) {
                return AimButtonMode.SEND;
            }
            return AimButtonMode.EXIT;
        }
        // Only SEND depends on whether the query can be submitted, so EXIT
        // is never disabled by an empty or invalid query.
        isAimButtonDisabled() {
            return this.submitEnabled && !this.canSubmitFilesAndInput;
        }
        onAimButtonFocusin() {
            if (this.submitEnabled) {
                this.onSubmitFocusin();
            }
        }
        onAimButtonClick(e) {
            const mode = this.getAimButtonMode();
            switch (mode) {
                case AimButtonMode.EXIT:
                    // Closes the composebox directly. `onCancelClick()` is not reused
                    // because with an active tool it clears the inputs instead of
                    // closing.
                    this.closeComposebox();
                    return;
                case AimButtonMode.SEND:
                    if (this.submitEnabled) {
                        this.onSubmitClick(e.detail);
                    }
                    return;
                default:
                    assertNotReachedCase(mode);
            }
        }
        // =====================================================================
        // Common helper methods
        // =====================================================================
        closeMenu() {
            const entrypointAndMenu = this.getContextEntrypointElement();
            if (entrypointAndMenu instanceof ContextualEntrypointAndMenuElement) {
                entrypointAndMenu.closeMenu();
            }
        }
        deleteFileContext(uuidToDelete, fromAutoSuggestedChip = false) {
            this.attachedContext =
                new Map([...this.attachedContext.entries()].filter(([uuid, _]) => uuid !== uuidToDelete));
            this.getSearchboxHandler().deleteContext(uuidToDelete, fromAutoSuggestedChip);
        }
        deleteFile(uuidToDelete, fromUserAction, fromAutoSuggestedChip = false) {
            const file = uuidToDelete ? this.attachedContext.get(uuidToDelete) : null;
            if (!file) {
                return null;
            }
            if (file?.tabId) {
                this.addedTabsIds = new Map([...this.addedTabsIds.entries()].filter(([id, _]) => id !== file.tabId));
            }
            if (fromUserAction === true) {
                const isTab = !!file?.tabId;
                const deletionType = isTab ?
                    ContextualSearchInputStateDeletionType.TAB :
                    ContextualSearchInputStateDeletionType.FILE;
                const metricName = `ContextualSearch.UserAction.InputStateDeletion.${this.composeboxSource}`;
                recordEnumerationValue(metricName, deletionType, ContextualSearchInputStateDeletionType.MAX_VALUE + 1);
                const typeStr = isTab ? 'Tab' : 'File';
                const userActionName = `ContextualSearch.UserAction.InputStateDeletion.${typeStr}.${this.composeboxSource}`;
                recordUserAction(userActionName);
            }
            this.deleteFileContext(uuidToDelete, fromAutoSuggestedChip);
            this.focusInput();
            return file;
        }
        focusInput() {
            this.getInputElement().inputElement.focus();
        }
        hasContent(ignoreAutoAddedTabs = false) {
            return this.inputModel.hasContent(ignoreAutoAddedTabs);
        }
        clearInput() {
            this.input = '';
            this.activeQueryId = -1;
            this.lastQueriedInput = '';
            this.getDropdownElement().unselect();
        }
        clearInputsForNewThread() {
            this.clearInput();
            this.getInputElement().resetHeight();
            this.resetModes();
            this.resetSmartComposeStats();
            // Delete all manually added files/tabs, keeping the auto-suggested
            // tab.
            const fileMap = new Map(this.files);
            for (const [uuid, file] of fileMap.entries()) {
                if (!this.automaticActiveTab ||
                    file.uuid !== this.automaticActiveTab.uuid) {
                    this.deleteFile(uuid, /*fromUserAction=*/ false);
                }
            }
            // Restored tabs are the tabs submitted in the previous thread. A new
            // thread starts with no submitted context, so drop them regardless of
            // `shouldResetRestoredTabs()`.
            const hadRestoredTabs = this.aimThreadRestoredTabs.length > 0;
            this.resetRestoredTabs();
            if (hadRestoredTabs &&
                this.tabSuggestionsState === TabSuggestionsState.LOADED) {
                // Restored tabs are merged into (and deduped against) the tab
                // suggestions, so recompute them without the stale entries.
                this.refreshTabSuggestions(/*forceRefresh=*/ true);
            }
        }
        clearAllInputs(querySubmitted, shouldBlockAutoSuggestedTabs) {
            this.resetDelayedTabContextRequests_();
            this.clearInput();
            this.getInputElement().resetHeight();
            // Let `querySubmit` handle clearing files if the tool mode is a tool
            // mode that should be cleared after submitting. For all other general
            // clearing, clear input here.
            if (!querySubmitted || this.clearAllInputsWhenSubmittingQuery) {
                this.resetModes();
                if (this.shouldResetRestoredTabs(querySubmitted)) {
                    this.resetRestoredTabs();
                }
            }
            // `undeletableFiles` is for files; `SubmitCleanup()` still deletes
            // TABS only after this, regardless of `undeletableFiles`. Adding tabs
            // to `undeletableFiles` does nothing to prevent deletion from
            // `this.attachedContext`. Adding files to `undeletableFiles` does
            // prevent deletion.
            const undeletableFiles = Array.from(this.attachedContext.values())
                .filter(file => !file.isDeletable);
            if (undeletableFiles.length !== this.attachedContext.size) {
                this.attachedContext =
                    new Map(undeletableFiles.map(file => [file.uuid, file]));
                this.addedTabsIds =
                    new Map(undeletableFiles.filter(file => file.tabId)
                        .map(file => [file.tabId, file.uuid]));
            }
            // `pendingUploads` and `fileUploadsComplete` are derived from
            // `attachedContext`, so the files that were just dropped above stop
            // counting as pending without any bookkeeping here.
            this.smartComposeInlineHint = '';
            this.resetSmartComposeStats();
            // Ask the searchbox handler to clear its own state when the clear all
            // button is clicked. Otherwise, it will clear its own state when mojo
            // submit query is sent.
            // TODO(crbug.com/532712756): Browser process should fully own
            // clearing logic, and frontend should listen and follow which files
            // browser process says to keep. This is better than having to
            // maintain and align two different hard coded logic for clearing
            // files across composebox (here) and browser process code (session
            // handle). `restoredTabs` is the server telling the frontend which
            // tabs are persistent, but the logic for clearing context on
            // submit/clear all should still be handled by browser process, not
            // frontend and browser process.
            if (!querySubmitted) {
                this.getSearchboxHandler().clearFiles(shouldBlockAutoSuggestedTabs);
            }
            if (this.inVoiceSearchMode) {
                this.voiceSearchEndCleanup();
            }
        }
        handleProcessFilesError(error) {
            if (error === ProcessFilesError.NONE) {
                return;
            }
            let metric = ComposeboxFileValidationError.NONE;
            switch (error) {
                case ProcessFilesError.MAX_FILES_EXCEEDED:
                    metric = ComposeboxFileValidationError.TOO_MANY_FILES;
                    this.errorMessage = this.i18n('maxFilesReachedError');
                    break;
                case ProcessFilesError.MAX_IMAGES_EXCEEDED:
                    metric = ComposeboxFileValidationError.TOO_MANY_FILES;
                    this.errorMessage = this.i18n('maxImagesReachedError');
                    break;
                case ProcessFilesError.MAX_PDFS_EXCEEDED:
                    metric = ComposeboxFileValidationError.TOO_MANY_FILES;
                    this.errorMessage = this.i18n('maxPdfsReachedError');
                    break;
                case ProcessFilesError.FILE_EMPTY:
                    metric = ComposeboxFileValidationError.FILE_EMPTY;
                    this.errorMessage =
                        this.i18n('composeboxFileUploadInvalidEmptySize');
                    break;
                case ProcessFilesError.FILE_TOO_LARGE:
                    metric = ComposeboxFileValidationError.FILE_SIZE_TOO_LARGE;
                    const unitMiB = 1024 * 1024;
                    this.errorMessage = this.i18n('composeboxFileUploadInvalidTooLarge', Math.floor(this.maxFileSize / unitMiB));
                    break;
                case ProcessFilesError.INVALID_TYPE:
                    this.errorMessage = this.i18n('composeFileTypesAllowedError');
                    break;
                case ProcessFilesError.FILE_UPLOAD_NOT_ALLOWED:
                    this.errorMessage = this.i18n('composeboxFileUploadNotAllowed');
                    break;
                default:
                    break;
            }
            this.recordFileValidationMetric(metric);
            this.closeMenu();
        }
        isFileAllowed(fileType) {
            if (this.lensSendRawFileMediaTypesEnabled) {
                return true;
            }
            return this.isMimeTypeAllowed(fileType, this.imageFileTypes) ||
                this.isMimeTypeAllowed(fileType, this.attachmentFileTypes);
        }
        isMimeTypeAllowed(mimeType, allowedTypes) {
            const lowerMimeType = mimeType.toLowerCase();
            return allowedTypes.some(type => {
                if (type.endsWith('/*')) {
                    const prefix = type.slice(0, -1);
                    return lowerMimeType.startsWith(prefix);
                }
                return lowerMimeType === type;
            });
        }
        getInputType(type) {
            if (type === 'tab') {
                return InputType.kBrowserTab;
            }
            if (type === 'image') {
                return InputType.kLensImage;
            }
            if (type === 'pdf') {
                return InputType.kLensFile;
            }
            if (this.imageFileTypes.some(t => {
                if (t.endsWith('/*')) {
                    const prefix = t.slice(0, -1);
                    return type.startsWith(prefix);
                }
                return type === t;
            })) {
                return InputType.kLensImage;
            }
            // Arbitrary file types are treated as Lens files.
            return InputType.kLensFile;
        }
        resetModes() {
            const previousTool = this.inputState?.activeTool;
            if (previousTool !== ToolMode.kUnspecified) {
                this.showContextMenuDescription =
                    this.contextMenuDescriptionEnabled;
                this.handleToolModeUpdate(ToolMode.kUnspecified);
            }
        }
        // If context management flag is on, do not delete persisted
        // (restored) tabs unless the source is Omnibox or
        // clearAllInputsWhenSubmittingQuery is set on query submission.
        shouldResetRestoredTabs(querySubmitted = false) {
            return this.composeboxSource === 'Omnibox' ||
                (querySubmitted && this.clearAllInputsWhenSubmittingQuery) ||
                !this.contextManagementInComposeboxEnabled;
        }
        resetRestoredTabs() {
            this.aimThreadRestoredTabs = [];
            this.hasCachedSubmittedTabsThisTurn = false;
        }
        setDefaultModel() {
            if (this.inputState?.activeModel &&
                this.inputState.activeModel !==
                    ModelMode.kUnspecified) {
                this.getSearchboxHandler().setActiveModelMode(this.inputState.activeModel, /*isSetByAim=*/ false);
            }
            else if (this.inputState?.allowedModels &&
                this.inputState.allowedModels.length > 0) {
                this.getSearchboxHandler().setActiveModelMode(this.inputState.allowedModels[0], /*isSetByAim=*/ false);
            }
        }
        resetToolsAndModels() {
            if (this.inputState) {
                this.getSearchboxHandler().setActiveToolMode(ToolMode.kUnspecified, /*isSetByAim=*/ false);
                this.getSearchboxHandler().setActiveModelMode(ModelMode.kUnspecified, /*isSetByServer=*/ false);
            }
        }
        closeDropdown() {
            this.clearAutocompleteMatches();
        }
        /**
         * @param afterSubmit Whether the composebox is closing right after a
         *     query was submitted from it, as opposed to the user dismissing
         *     it. Forwarded in the `close-composebox` event so hosts that
         *     close on submit themselves can skip the request.
         */
        closeComposebox(afterSubmit = false) {
            this.resetDelayedTabContextRequests_();
            this.resetModes();
            this.getSearchboxHandler().clearFiles(
            /*shouldBlockAutoSuggestedTabs=*/ false);
            this.resetToolsAndModels();
            this.suggestInventory = null;
            this.fire('close-composebox', { composeboxText: this.input, afterSubmit });
        }
        handleEscapeKeyLogic() {
            if (!this.closeOnEscape && this.hasContent()) {
                const hadActiveTool = !!this.inputState &&
                    this.inputState.activeTool !== ToolMode.kUnspecified;
                this.clearAllInputs(
                /* querySubmitted= */ false, 
                /* shouldBlockAutoSuggestedTabs= */ false);
                this.focusInput();
                if (!hadActiveTool) {
                    this.queryAutocomplete(/* clearMatches= */ true);
                }
            }
            else {
                this.closeComposebox();
            }
        }
        submitQuery(e) {
            if (this.hasPendingDelayedTabContext_() ||
                !this.canSubmitFilesAndInput || !this.hasValidQuery()) {
                return;
            }
            // Submissions do not need a mouse or keyboard event to be submitted.
            // For example, inputs that are injected into the composebox can be
            // set to submit immediately after injection.
            const mouseButton = e?.button ?? 0;
            const altKey = e?.altKey ?? false;
            const ctrlKey = e?.ctrlKey ?? false;
            const metaKey = e?.metaKey ?? false;
            const shiftKey = e?.shiftKey ?? false;
            // If there is a match that is selected, open that match, else follow
            // the non-autocomplete submission flow. The non-autocomplete
            // submission flow will not have omnibox metrics recorded for it.
            if (this.selectedMatchIndex >= 0) {
                const match = this.result.matches[this.selectedMatchIndex];
                assert(match);
                this.getSearchboxHandler().setSmartComposeStats(this.smartComposeStats);
                const viaKeyboard = !!e && e instanceof KeyboardEvent;
                this.getSearchboxHandler().openAutocompleteMatch(this.result.sequenceId, this.selectedMatchIndex, match.destinationUrl, 
                /*areMatchesShowing=*/ true, 
                /*mouseButton=*/ mouseButton, {
                    altKey: altKey,
                    ctrlKey: ctrlKey,
                    metaKey: metaKey,
                    shiftKey: shiftKey,
                }, 
                /*viaKeyboard=*/ viaKeyboard);
            }
            else {
                this.getSearchboxHandler().submitQuery(this.input.trim(), mouseButton, altKey, ctrlKey, metaKey, shiftKey, /*isVoiceSearch=*/ false);
            }
            this.submitCleanup();
            // Only close the composebox when opening in a new tab because
            // doing so in the current tab causes a visual jitter where the
            // composebox closes before the new results page finishes loading.
            if (ctrlKey || metaKey || shiftKey) {
                this.closeComposebox(/* afterSubmit= */ true);
            }
        }
        // kHint matches only set the placeholder when accepted, and rich image
        // matches are not text queries, so neither replaces the user's input.
        shouldPreviewMatchInInput_(match) {
            if (this.richImageSuggestionsEnabled &&
                match.suggestTemplate.style === SuggestStyle.kRichImage) {
                return false;
            }
            return !this.shouldHandleSuggestionFuseboxActions() ||
                match.suggestTemplate.fuseboxAction?.queryActionOverride !==
                    QueryActionOverride.kHint;
        }
        maybeHandleSuggestionFuseboxAction_(match, event) {
            const action = match.suggestTemplate.fuseboxAction;
            if (!this.shouldHandleSuggestionFuseboxActions() || !action ||
                action.queryActionOverride === QueryActionOverride.kDefault) {
                return false;
            }
            if (this.richImageSuggestionsEnabled &&
                match.suggestTemplate.style === SuggestStyle.kRichImage) {
                recordRichImageSuggestClicked(this.composeboxSource);
            }
            const request = {
                suggestion: match.fillIntoEdit,
                files: [],
                fuseboxAction: action,
            };
            event?.preventDefault();
            this.clearAutocompleteMatches();
            void this.handleFuseboxAction(request);
            return true;
        }
        cacheSubmittedTabs() {
            if (!this.contextManagementInComposeboxEnabled ||
                this.clearAllInputsWhenSubmittingQuery) {
                return;
            }
            if (this.hasCachedSubmittedTabsThisTurn) {
                return;
            }
            if (this.addedTabsIds && this.addedTabsIds.size > 0) {
                const submittedTabs = this.getSharedTabs();
                if (submittedTabs.length > 0) {
                    this.aimThreadRestoredTabs = [
                        ...this.aimThreadRestoredTabs,
                        ...submittedTabs,
                    ];
                    this.hasCachedSubmittedTabsThisTurn = true;
                }
            }
        }
        submitCleanup() {
            const singleTabFile = Array.from(this.attachedContext.values())
                .find(file => !!file.singleTabType);
            if (singleTabFile) {
                recordSingleTabMenuItemAction(singleTabFile.singleTabType === SingleTabType.CURRENT_TAB ?
                    SingleTabMenuItemAction.CURRENT_TAB_SUBMITTED :
                    SingleTabMenuItemAction.RECENT_TAB_SUBMITTED, this.composeboxSource);
            }
            this.submitting = true;
            this.clearAutocompleteMatches();
            this.resetSmartComposeStats();
            this.animationState = GlowAnimationState.SUBMITTING;
            this.cacheSubmittedTabs();
            if (this.addedTabsIds && this.addedTabsIds.size > 0) {
                const activeTabsArray = Array.from(this.addedTabsIds.keys());
                for (const tabId of activeTabsArray) {
                    const token = this.addedTabsIds.get(tabId);
                    if (token) {
                        this.attachedContext.delete(token);
                        this.addedTabsIds.delete(tabId);
                    }
                }
                this.attachedContext = new Map(this.attachedContext);
                this.addedTabsIds = new Map(this.addedTabsIds);
            }
            if (this.clearAllInputsWhenSubmittingQuery) {
                this.clearAllInputs(
                /* querySubmitted= */ true, 
                /* shouldBlockAutoSuggestedTabs= */ false);
                this.resetRestoredTabs();
            }
            this.fire('composebox-submit');
            this.hasCachedSubmittedTabsThisTurn = false;
        }
        hasImageFiles() {
            return Array.from(this.attachedContext.values())
                .some(file => file.type.includes('image'));
        }
        hasMatches() {
            return !!(this.result && this.result.matches.length > 0);
        }
        selectFirstMatch() {
            if (this.result?.matches.length) {
                this.getDropdownElement().selectFirst();
            }
        }
        hasFiles() {
            return this.inputModel.hasFiles();
        }
        hasMultipleFiles() {
            return this.inputModel.hasMultipleFiles();
        }
        resetSmartComposeStats() {
            this.smartComposeStats = {
                enabled: loadTimeData.getBoolean('composeboxSmartComposeEnabled'),
                shownCount: 0,
                acceptedCount: 0,
                charactersAccepted: 0,
                shownLength: 0,
            };
        }
        queryAutocomplete(clearMatches, inputMethod = InputMethod.kKeyboard) {
            if (clearMatches) {
                this.clearAutocompleteMatches();
            }
            this.activeQueryId = this.nextQueryId_++;
            this.lastQueriedInput = this.input;
            this.haveReceivedSynchronousAutocompleteResponse = false;
            // Get the cursor position from the DOM. Since DOM updates are async
            // in lit, if the input was set via code rather than user interaction,
            // the cursor position fetched from the dom would be stale, so use the
            // text length instead, since that's what the dom cursor position will
            // be set to once the update propagates.
            const cursorPosition = this.input !== this.getInputElement().input ?
                this.input.length :
                this.getInputElement().getSelectionEnd();
            this.getSearchboxHandler().queryAutocomplete(this.activeQueryId, /*tabId=*/ null, this.input, 
            /*preventInlineAutocomplete=*/ false, cursorPosition, this.suggestInventory ?? SuggestInventory.kDefault, 
            /*isOnFocus=*/ !this.input, /*keyword=*/ '', inputMethod);
        }
        clearAutocompleteMatches() {
            this.showDropdown = false;
            this.result = null;
            this.getDropdownElement().unselect();
            // Mirror the unselect now rather than waiting for the dropdown's
            // change event, so that any match preview is dropped in the same
            // update as state set by the caller.
            this.selectedMatchIndex = -1;
            this.selectedMatch = null;
            this.getSearchboxHandler().stopAutocomplete(/*clearResult=*/ true);
            // Autocomplete sends updates once it is stopped. Invalidate those
            // results by setting `activeQueryId` to -1.
            this.activeQueryId = -1;
        }
        /**
         * Resets composebox state for a new session or popup lifecycle
         * handover.
         */
        resetSession() {
            // 
            this.submitting = false;
            this.clearAllInputs(
            /* querySubmitted= */ false, 
            /* shouldBlockAutoSuggestedTabs= */ false);
            this.clearAutocompleteMatches();
            this.resetToolsAndModels();
            // 
        }
        computeSubmitEnabled() {
            // `submitEnabled` controls the visibility of the submit button.
            // Since files can be added but technically not be submittable (like
            // injected inputs), this needs to check if any files are present to
            // show the submit button. The button will still appear disabled
            // because that is controlled by `canSubmitFilesAndInput`.
            return this.inputModel.canSubmit();
        }
        /**
         * Returns whether every attached file has finished uploading, based on
         * the current status of each entry in `attachedContext`. A file counts
         * as still uploading until its status reaches a terminal one.
         */
        computeFileUploadsComplete() {
            // An in-flight delayed `addTabContext()` has no file yet to carry
            // a non-terminal status, so it is counted here explicitly.
            if (this.pendingDelayedTabRequests_.size > 0) {
                return false;
            }
            for (const file of this.attachedContext.values()) {
                if (!isContextUploadStatusTerminal(file.status)) {
                    return false;
                }
            }
            return true;
        }
        hasValidQuery() {
            return this.inputModel.hasValidQuery();
        }
        recordFileValidationMetric(enumValue) {
            recordEnumerationValue('ContextualSearch.File.WebUI.UploadAttemptFailure.' +
                this.composeboxSource, enumValue, ComposeboxFileValidationError.MAX_VALUE + 1);
        }
        async addFileContext(files) {
            const composeboxFiles = new Map();
            for (const file of files) {
                let token;
                try {
                    const fileBuffer = await file.arrayBuffer();
                    const bigBuffer = {
                        bytes: Array.from(new Uint8Array(fileBuffer)),
                    };
                    token = await this.getSearchboxHandler().addFileContext({
                        fileName: file.name,
                        imageDataUrl: null,
                        mimeType: file.type,
                        isDeletable: true,
                        selectionTime: new Date(),
                        thumbnailUrl: null,
                    }, bigBuffer);
                }
                catch (e) {
                    const errorKey = FILE_VALIDATION_ERRORS_MAP.get(e) ??
                        'composeboxFileUploadFailed';
                    this.errorMessage = this.i18n(errorKey);
                    continue;
                }
                const attachment = ComposeboxFile.createFromFile(token, file, ContextUploadStatus.kNotUploaded, {
                    dataUrl: null,
                    objectUrl: (file.type.includes('image') ||
                        file.type.includes('video')) ?
                        URL.createObjectURL(file) :
                        null,
                    iconName: null,
                    supportsUnimodal: true,
                });
                composeboxFiles.set(token, attachment);
                const announcer = getAnnouncerInstance();
                announcer.announce(this.i18n('composeboxFileUploadStartedText'));
            }
            // `composeboxFiles.size` is 0 when all files failed in the try/catch
            // block above, so `ComposeboxFileValidationError.NONE` is not
            // recorded.
            if (composeboxFiles.size > 0) {
                this.attachedContext = new Map([
                    ...this.attachedContext.entries(),
                    ...composeboxFiles.entries(),
                ]);
                this.recordFileValidationMetric(ComposeboxFileValidationError.NONE);
                this.focusInput();
            }
        }
        addFileContextFromBrowser(uuid, fileInfo) {
            const attachment = {
                uuid: uuid,
                name: fileInfo.fileName,
                dataUrl: fileInfo.imageDataUrl ?? null,
                thumbnailUrl: fileInfo.thumbnailUrl ?? null,
                objectUrl: null,
                type: fileInfo.mimeType || (fileInfo.imageDataUrl ? 'image' : ''),
                inputType: fileInfo.imageDataUrl ? InputType.kLensImage :
                    InputType.kLensFile,
                status: fileInfo.imageDataUrl ?
                    ContextUploadStatus.kUploadSuccessful :
                    ContextUploadStatus.kNotUploaded,
                url: null,
                tabId: null,
                isDeletable: fileInfo.isDeletable,
                iconName: null,
                supportsUnimodal: true,
            };
            this.onFileContextAdded(attachment);
        }
        getDropTarget() {
            return this;
        }
        addDroppedFiles(files) {
            this.processFiles(files);
            recordContextAdditionMethod(2 /* ComposeboxContextAddedMethod.DRAG_AND_DROP */, this.composeboxSource);
        }
        addDriveUploads(driveUploads, error) {
            // Handle any pre-existing error passed in (e.g., from the NTP)
            if (error === DriveUploadError.kMaxFilesExceeded) {
                this.handleProcessFilesError(ProcessFilesError.MAX_FILES_EXCEEDED);
            }
            else if (error === DriveUploadError.kSizeLimitExceeded) {
                this.handleProcessFilesError(ProcessFilesError.FILE_TOO_LARGE);
            }
            // Add the successful files to the Composebox
            const composeboxFiles = new Map();
            for (const file of driveUploads) {
                const attachment = ComposeboxFile.createFromFile(file.token, { name: file.fileName, type: file.mimeType }, ContextUploadStatus.kNotUploaded, {
                    dataUrl: file.thumbnailUrl ?? null,
                    objectUrl: null,
                    iconName: null,
                    supportsUnimodal: true,
                    thumbnailUrl: file.thumbnailUrl ?? null,
                    iconUrl: file.iconUrl ?? null,
                });
                composeboxFiles.set(file.token, attachment);
                const announcer = getAnnouncerInstance();
                announcer.announce(this.i18n('composeboxFileUploadStartedText'));
            }
            if (composeboxFiles.size > 0) {
                this.attachedContext = new Map([
                    ...this.attachedContext.entries(),
                    ...composeboxFiles.entries(),
                ]);
                this.recordFileValidationMetric(ComposeboxFileValidationError.NONE);
                this.focusInput();
                this.showDropdown = false;
            }
        }
        // LINT.IfChange(getValidationError)
        getValidationError(inputType, fileType, fileSize, totalCount, currentTypeCount) {
            if (this.inputState?.activeTool === ToolMode.kDeepSearch) {
                return ProcessFilesError.FILE_UPLOAD_NOT_ALLOWED;
            }
            if (this.inputState?.activeTool !== ToolMode.kUnspecified) {
                const disabledTypes = this.inputState?.disabledInputTypes || [];
                if (disabledTypes.includes(inputType)) {
                    return ProcessFilesError.INVALID_TYPE;
                }
            }
            if (fileSize === 0 || fileSize > this.maxFileSize) {
                return fileSize === 0 ? ProcessFilesError.FILE_EMPTY :
                    ProcessFilesError.FILE_TOO_LARGE;
            }
            if (!this.isFileAllowed(fileType)) {
                return ProcessFilesError.INVALID_TYPE;
            }
            let maxTotal = this.maxFileCount;
            if (this.inputState && this.inputState.maxTotalInputs > 0) {
                maxTotal = this.inputState.maxTotalInputs;
            }
            let maxType = maxTotal;
            if (this.inputState &&
                this.inputState.maxInputsByType[inputType] !== undefined) {
                maxType = this.inputState.maxInputsByType[inputType];
            }
            if (currentTypeCount >= maxType) {
                switch (inputType) {
                    case InputType.kLensImage:
                        return ProcessFilesError.MAX_IMAGES_EXCEEDED;
                    case InputType.kLensFile:
                        return ProcessFilesError.MAX_PDFS_EXCEEDED;
                    default:
                        return ProcessFilesError.MAX_FILES_EXCEEDED;
                }
            }
            if (totalCount >= maxTotal) {
                return ProcessFilesError.MAX_FILES_EXCEEDED;
            }
            return ProcessFilesError.NONE;
        }
        // LINT.ThenChange(//chrome/browser/ui/webui/cr_components/searchbox/contextual_searchbox_handler.cc:ContextualSearchboxHandler_AddFileContextFromBrowser)
        processFiles(files) {
            if (!files || files.length === 0) {
                return;
            }
            if (this.inputState?.activeTool === ToolMode.kDeepSearch) {
                this.handleProcessFilesError(ProcessFilesError.FILE_UPLOAD_NOT_ALLOWED);
                return;
            }
            const filesToUpload = [];
            let errorToDisplay = ProcessFilesError.NONE;
            const counts = new Map();
            counts.set(InputType.kLensImage, 0);
            counts.set(InputType.kLensFile, 0);
            counts.set(InputType.kBrowserTab, 0);
            for (const file of this.attachedContext.values()) {
                const type = this.getInputType(file.type);
                counts.set(type, (counts.get(type) || 0) + 1);
            }
            let totalCount = this.attachedContext.size;
            let maxTotal = this.maxFileCount;
            if (this.inputState && this.inputState.maxTotalInputs > 0) {
                maxTotal = this.inputState.maxTotalInputs;
            }
            if (totalCount + files.length > maxTotal) {
                errorToDisplay =
                    Math.max(errorToDisplay, ProcessFilesError.MAX_FILES_EXCEEDED);
            }
            for (const file of files) {
                const inputType = this.getInputType(file.type);
                const currentTypeCount = counts.get(inputType) || 0;
                const error = this.getValidationError(inputType, file.type, file.size, totalCount, currentTypeCount);
                if (error !== ProcessFilesError.NONE) {
                    errorToDisplay = Math.max(errorToDisplay, error);
                    continue;
                }
                filesToUpload.push(file);
                totalCount++;
                counts.set(inputType, currentTypeCount + 1);
            }
            if (filesToUpload.length > 0) {
                this.addFileContext(filesToUpload);
            }
            this.handleProcessFilesError(errorToDisplay);
        }
        getErrorMessageForUploadStatus(status, errorType) {
            if (!isContextUploadStatusTerminal(status) ||
                status === ContextUploadStatus.kUploadSuccessful ||
                status === ContextUploadStatus.kUploadReplaced) {
                return null;
            }
            switch (status) {
                case ContextUploadStatus.kValidationFailed: {
                    const errorKey = (errorType !== null ?
                        FILE_VALIDATION_ERRORS_MAP.get(errorType) :
                        undefined) ??
                        'composeboxFileUploadValidationFailed';
                    return this.i18n(errorKey);
                }
                case ContextUploadStatus.kUploadFailed:
                    return this.i18n('composeboxFileUploadFailed');
                case ContextUploadStatus.kUploadExpired:
                    return this.i18n('composeboxFileUploadExpired');
                default:
                    return null;
            }
        }
        updateFileStatus(token, status, errorType) {
            let errorMessage = null;
            let file = this.attachedContext.get(token) ?? null;
            if (file) {
                errorMessage =
                    this.getErrorMessageForUploadStatus(status, errorType);
                if (isContextUploadStatusTerminal(status) &&
                    status !== ContextUploadStatus.kUploadSuccessful) {
                    if (file.objectUrl && file.objectUrl.startsWith('blob:')) {
                        URL.revokeObjectURL(file.objectUrl);
                    }
                    this.attachedContext.delete(token);
                    if (file.tabId) {
                        const tabId = file.tabId;
                        this.addedTabsIds =
                            new Map([...this.addedTabsIds.entries()].filter(([id, _]) => id !== tabId));
                    }
                    if (status === ContextUploadStatus.kUploadReplaced) {
                        // Update `composebox.ts` with the status since
                        // this should not return an error message for this
                        // 'non-uploaded' terminal file state, meaning
                        // its file status is still needed for understanding state
                        // when returned and back in the context of the function
                        // caller.
                        file = { ...file, status: status };
                    }
                    this.closeMenu();
                    this.attachedContext = new Map([...this.attachedContext]);
                }
                else if (file.status !== status) {
                    file = { ...file, status: status };
                    this.attachedContext.set(token, file);
                    this.attachedContext = new Map([...this.attachedContext]);
                }
            }
            else if (this.shouldShowGhostFiles &&
                (!isContextUploadStatusTerminal(status) ||
                    status === ContextUploadStatus.kUploadSuccessful)) {
                // File is unknown but its status is known. Show this if
                // ghost/unknown files in frontend are allowed to be in
                // carousel.
                file = {
                    uuid: token,
                    name: '',
                    objectUrl: null,
                    dataUrl: null,
                    type: '',
                    inputType: InputType.kLensFile,
                    // Override non-terminal statuses with kUploadStarted so the tab
                    // spinner is shown, while preserving kUploadSuccessful if the
                    // upload already completed before addTabContext resolved.
                    status: status === ContextUploadStatus.kUploadSuccessful ?
                        ContextUploadStatus.kUploadSuccessful :
                        ContextUploadStatus.kUploadStarted,
                    url: null,
                    tabId: null,
                    isDeletable: true,
                    iconName: null,
                    supportsUnimodal: true,
                    isGhost: true,
                };
                // Update pending uploads in 'composebox.ts' to disable
                // submit button.
                this.onFileContextAdded(file);
            }
            return { file, errorMessage };
        }
        /**
         * Fetches recent tab suggestions from the backend.
         * @param forceRefresh If true, forces a reload even if suggestions have
         *     already loaded. This is used when the context menu is opened or
         *     the tab strip changes while the menu is open, ensuring
         * suggestions remain fresh. If false, it serves suggestions from the
         * cache to minimize Mojo overhead.
         */
        async refreshTabSuggestions(forceRefresh = false) {
            // If a refresh is already in flight, wait for it unless a forced
            // refresh is requested, in which case queue another loop iteration.
            if (this.tabSuggestionsState === TabSuggestionsState.LOADING) {
                if (forceRefresh) {
                    this.pendingTabSuggestionNeedsRefresh_ = true;
                }
                return;
            }
            if (this.tabSuggestionsState === TabSuggestionsState.LOADED &&
                !forceRefresh) {
                return;
            }
            this.tabSuggestionsState = TabSuggestionsState.LOADING;
            this.pendingTabSuggestionNeedsRefresh_ = true;
            try {
                while (this.pendingTabSuggestionNeedsRefresh_) {
                    this.pendingTabSuggestionNeedsRefresh_ = false;
                    const { tabs } = await this.getSearchboxHandler().getRecentTabs();
                    this.recentTabId = tabs[0]?.tabId ?? null;
                    const openTabsMap = new Map(tabs.map(t => [t.tabId, t]));
                    // Gather UUIDs in a temporary array to prevent modifying
                    // `this.attachedContext` mid-iteration, since `deleteFile()`
                    // replaces the Map reference.
                    const uuidsToDelete = [];
                    this.attachedContext.forEach((file, uuid) => {
                        if (file.tabId) {
                            const freshTab = openTabsMap.get(file.tabId);
                            if (!freshTab || (file.url && file.url !== freshTab.url)) {
                                uuidsToDelete.push(uuid);
                            }
                        }
                    });
                    uuidsToDelete.forEach(uuid => {
                        this.deleteFile(uuid, /*fromUserAction=*/ false);
                    });
                    if (this.tabDeselectionEnabled) {
                        const closedOrNavigatedRestoredTabs = this.aimThreadRestoredTabs.filter(tab => {
                            const currentTab = openTabsMap.get(tab.tabId);
                            return !currentTab || currentTab.url !== tab.url;
                        });
                        closedOrNavigatedRestoredTabs.forEach(tab => {
                            if (isValidTabId(tab.tabId)) {
                                this.getSearchboxHandler().deleteTabContext(tab.tabId);
                            }
                        });
                        this.aimThreadRestoredTabs =
                            this.aimThreadRestoredTabs.filter(tab => {
                                const currentTab = openTabsMap.get(tab.tabId);
                                return currentTab && currentTab.url === tab.url;
                            });
                    }
                    const restored = this.contextManagementInComposeboxEnabled ?
                        (this.aimThreadRestoredTabs || []) :
                        [];
                    const processedRecentTabs = dedupeTabs(restored, tabs);
                    this.tabSuggestions = this.getSortedTabSuggestions_([
                        ...processedRecentTabs,
                        ...restored,
                    ]);
                    if (this.inputState) {
                        const { allowedInputTypes, disabledInputTypes } = this.inputState;
                        if (allowedInputTypes.includes(InputType.kBrowserTab) &&
                            !disabledInputTypes.includes(InputType.kBrowserTab)) {
                            const filteredSuggestions = this.tabSuggestions;
                            if (filteredSuggestions.length > 0) {
                                recordInputTypeShown(InputType.kBrowserTab, this.composeboxSource, 'AimPopup');
                            }
                        }
                    }
                }
                this.tabSuggestionsState = TabSuggestionsState.LOADED;
            }
            finally {
                if (this.tabSuggestionsState === TabSuggestionsState.LOADING) {
                    this.tabSuggestionsState = TabSuggestionsState.NOT_STARTED;
                }
            }
        }
        onRequestTabSuggestionsLoad() {
            this.refreshTabSuggestions(/*forceRefresh=*/ true);
        }
        async onGetTabPreview(e) {
            const { previewDataUrl } = await this.getSearchboxHandler().getTabPreview(e.detail.tabId);
            e.detail.onPreviewFetched(previewDataUrl || '');
        }
        async onWaitForTabLoad(e) {
            e.stopPropagation();
            try {
                const { faviconDataUrl } = await this.getSearchboxHandler().waitForTabFaviconLoad(e.detail.tabId);
                const urlStr = faviconDataUrl?.url ||
                    (faviconDataUrl ? faviconDataUrl : undefined);
                e.detail.onTabLoaded(urlStr);
            }
            catch (error) {
                e.detail.onTabLoaded(undefined);
            }
        }
        voiceSearchEndCleanup() {
            this.inVoiceSearchMode = false;
            this.animationState = GlowAnimationState.VOICE_EXITED;
            this.transcript = '';
        }
        onVoiceSearchFinalResult(e) {
            e.stopPropagation();
            this.voiceSearchEndCleanup();
            // Keep the transcript but do not submit while a delayed tab is
            // still being snapshotted; the user resubmits once it settles.
            if (this.hasPendingDelayedTabContext_()) {
                this.input = e.detail;
                return;
            }
            // For contextual tasks composebox voice metrics.
            // TODO(crbug.com/466412331): Don't only fire this for composebox,
            // this should be recorded for all.
            this.fire('composebox-voice-search-transcription-success');
            // TODO(crbug.com/466412331): Remove, only recorded for the NTP.
            this.fire('voice-search-action', { value: VoiceSearchAction.QUERY_SUBMITTED });
            this.input = e.detail;
            const metricName = `ContextualSearch.UserAction.SubmitVoiceQuery.${this.composeboxSource}`;
            recordUserAction(metricName);
            recordBoolean(metricName, true);
            this.getSearchboxHandler().submitQuery(e.detail, /*mouse_button=*/ 0, /*alt_key=*/ false, 
            /*ctrl_key=*/ false, /*meta_key=*/ false, /*shift_key=*/ false, 
            /*is_voice_search=*/ true);
            this.submitCleanup();
        }
        onVoiceSearchCancel(e) {
            // If closing was the user canceling voice search:
            if (e.detail) {
                // For contextual tasks composebox voice metrics.
                this.fire('composebox-voice-search-user-canceled');
            }
            this.voiceSearchEndCleanup();
            this.receivedSpeech = false;
        }
        onVoiceSearchError(e) {
            this.hasVoiceSearchError = true;
            // For contextual tasks composebox voice metrics:
            if (e.detail) {
                // An error that canceled voice search.
                this.fire('composebox-voice-search-error-and-canceled');
            }
            else {
                // An error that did not cancel voice search.
                this.fire('composebox-voice-search-error');
            }
            // Do not call `voiceSearchEndCleanup()` here since
            // error scrim should stay open, or close itself based on timer.
            // When scrim does that, it will call `onVoiceSearchCancel` in this
            // file.
        }
        shouldShowVoiceSearch() {
            return this.showVoiceSearch &&
                WindowProxy.getInstance().hasWebkitSpeechRecognition();
        }
        shouldShowVoiceSearchAnimation() {
            return !this.disableVoiceSearchAnimation &&
                this.shouldShowVoiceSearch();
        }
        shouldShowVoiceSearchAtBottom() {
            return (this.searchboxLayoutMode === 'TallBottomContext' ||
                !this.searchboxLayoutMode) &&
                this.shouldShowVoiceSearch();
        }
        getFilteredCarouselFiles() {
            // Gets the list of files to display in the file carousel.
            // When the context management flag is enabled, tabs (files with a
            // URL) are filtered out because they would be displayed as favicons
            // instead of chips.
            const filesArray = Array.from(this.attachedContext.values());
            if (this.tabFaviconChipsToCoinsEnabled) {
                return filesArray.filter(f => !f.url);
            }
            return filesArray;
        }
        getNonTabFileNum() {
            return this.inputModel.getNonTabFileNum();
        }
        // Returns all attached tabs in composebox.
        getSharedTabs() {
            // Shared tabs are built from attached files, which carry the upload
            // state; also pull the live page loading state from the latest tab
            // suggestions.
            const suggestions = new Map(this.tabSuggestions.map(tab => [tab.tabId, tab]));
            return this.inputModel.getSharedTabs().map(tab => ({
                ...tab,
                isLoading: tab.isLoading ||
                    (suggestions.get(tab.tabId)?.isLoading ?? false),
            }));
        }
        hasTabs() {
            return this.inputModel.hasTabs();
        }
        hasNonTabFiles() {
            return this.inputModel.hasNonTabFiles();
        }
        shouldHideDropdown() {
            return !this.showDropdown || !this.dropdownNeeded;
        }
        shouldShowDivider() {
            if (this.tabFaviconChipsToCoinsEnabled && this.hasTabs()) {
                if (!this.hasNonTabFiles()) {
                    return false;
                }
            }
            return this.showDropdown &&
                (this.showFileCarousel || this.shouldShowSubmitButton() ||
                    this.inToolMode);
        }
        shouldShowSubmitButton() {
            return this.searchboxNextEnabled && this.submitEnabled;
        }
        shouldDisableFileInputs() {
            return !this.contextMenuEnabled || !this.showMenuOnClick;
        }
        computeCancelButtonTitle() {
            return this.input.trim().length > 0 || this.hasFiles() ?
                this.i18n('composeboxCancelButtonTitleInput') :
                this.i18n('composeboxCancelButtonTitle');
        }
        computeShowDropdown() {
            // TODO(crbug.com/568429302): Avoid querying autocomplete when
            // multiple files are attached or Smart Tab Sharing is active, rather
            // than querying autocomplete and hiding the dropdown.
            // Don't show dropdown if there's multiple files or Smart Tab Sharing
            // is active (since relevant tabs will be attached on submit).
            if (this.hasMultipleFiles()) {
                return false;
            }
            // Don't show dropdown if there's no results.
            if (!this.result?.matches.length) {
                return false;
            }
            // Don't show dropdown if there's only verbatim match.
            if (this.result?.matches.length === 1 &&
                this.result?.matches[0]?.allowedToBeDefaultMatch) {
                return false;
            }
            // Do not show dropdown if there's an error scrim.
            if (this.errorMessage !== '') {
                return false;
            }
            // Do not show dropdown if there's an image and contextual image
            // suggestions are disabled.
            if (!this.enableImageContextualSuggestions && this.hasImageFiles()) {
                return false;
            }
            if (this.showTypedSuggest && this.lastQueriedInput.trim()) {
                // If context is present, but not enabled, continue to avoid showing
                // the dropdown.
                if (!this.showTypedSuggestWithContext &&
                    this.attachedContext.size > 0) {
                    return false;
                }
                // Do not show the dropdown for multiline input or if only the
                // verbatim match is present (we always expect a verbatim match for
                // typed suggest, so we ensure the length of the matches is >1).
                if (this.getInputElement().inputElement.scrollHeight <= 48 &&
                    this.result?.matches.length > 1) {
                    return true;
                }
            }
            // lastQueriedInput is used here since the input changes based on
            // the selected match. If typed suggest is not enabled and input is
            // used, the dropdown will hide if the user keys down over zps
            // matches.
            return this.showZps && !this.lastQueriedInput;
        }
    }
    return ComposeboxEmbedderMixin;
};
