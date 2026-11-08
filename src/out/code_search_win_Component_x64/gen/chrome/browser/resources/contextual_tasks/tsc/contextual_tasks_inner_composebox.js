// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { ComposeboxFile, GlifAnimationState, recordBoolean, recordUserAction } from '//resources/cr_components/composebox/common.js';
import { ComposeboxEmbedderMixin } from '//resources/cr_components/composebox/composebox_mixin.js';
import { ComposeboxProxyImpl } from '//resources/cr_components/composebox/composebox_proxy.js';
import { ToolMode } from '//resources/cr_components/composebox/composebox_query.mojom-webui.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { debounceEnd } from '//resources/js/util.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TabAttachmentSource } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { getCss } from './contextual_tasks_inner_composebox.css.js';
import { getHtml } from './contextual_tasks_inner_composebox.html.js';
// Debounce interval for the ResizeObserver callbacks that fire
// `composebox-resize`
const RESIZE_EVENT_DEBOUNCE_TIMEOUT_MS = 20;
export class ContextualTasksInnerComposeboxElement extends ComposeboxEmbedderMixin(CrLitElement) {
    static get is() {
        return 'contextual-tasks-inner-composebox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            entrypointName: { type: String, reflect: true },
            carouselOnTop_: { type: Boolean },
            disableFallbackGlifAnimation: { type: Boolean },
            enableCarouselScrolling: { type: Boolean },
            enableFileHint: { type: Boolean },
            glifAnimationState: { type: String },
            inputPlaceholderOverride: { type: String },
            isFollowupQuery: { type: Boolean },
            isSidePanel: { type: Boolean },
            isZeroState: { type: Boolean },
            lensButtonDisabled: {
                reflect: true,
                type: Boolean,
            },
            lensButtonTriggersOverlay: { type: Boolean },
            showLensButton: { type: Boolean },
            expanding_: {
                reflect: true,
                type: Boolean,
            },
        };
    }
    #entrypointName_accessor_storage = 'ContextualTasks';
    // Wrapper-bound properties.
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #disableFallbackGlifAnimation_accessor_storage = false;
    get disableFallbackGlifAnimation() { return this.#disableFallbackGlifAnimation_accessor_storage; }
    set disableFallbackGlifAnimation(value) { this.#disableFallbackGlifAnimation_accessor_storage = value; }
    #enableCarouselScrolling_accessor_storage = true;
    get enableCarouselScrolling() { return this.#enableCarouselScrolling_accessor_storage; }
    set enableCarouselScrolling(value) { this.#enableCarouselScrolling_accessor_storage = value; }
    #enableFileHint_accessor_storage = false;
    get enableFileHint() { return this.#enableFileHint_accessor_storage; }
    set enableFileHint(value) { this.#enableFileHint_accessor_storage = value; }
    #glifAnimationState_accessor_storage = GlifAnimationState.INELIGIBLE;
    get glifAnimationState() { return this.#glifAnimationState_accessor_storage; }
    set glifAnimationState(value) { this.#glifAnimationState_accessor_storage = value; }
    #inputPlaceholderOverride_accessor_storage = '';
    get inputPlaceholderOverride() { return this.#inputPlaceholderOverride_accessor_storage; }
    set inputPlaceholderOverride(value) { this.#inputPlaceholderOverride_accessor_storage = value; }
    #isFollowupQuery_accessor_storage = false;
    get isFollowupQuery() { return this.#isFollowupQuery_accessor_storage; }
    set isFollowupQuery(value) { this.#isFollowupQuery_accessor_storage = value; }
    #isSidePanel_accessor_storage = false;
    get isSidePanel() { return this.#isSidePanel_accessor_storage; }
    set isSidePanel(value) { this.#isSidePanel_accessor_storage = value; }
    #isZeroState_accessor_storage = true;
    get isZeroState() { return this.#isZeroState_accessor_storage; }
    set isZeroState(value) { this.#isZeroState_accessor_storage = value; }
    #lensButtonDisabled_accessor_storage = false;
    get lensButtonDisabled() { return this.#lensButtonDisabled_accessor_storage; }
    set lensButtonDisabled(value) { this.#lensButtonDisabled_accessor_storage = value; }
    #lensButtonTriggersOverlay_accessor_storage = false;
    get lensButtonTriggersOverlay() { return this.#lensButtonTriggersOverlay_accessor_storage; }
    set lensButtonTriggersOverlay(value) { this.#lensButtonTriggersOverlay_accessor_storage = value; }
    #showLensButton_accessor_storage = true;
    get showLensButton() { return this.#showLensButton_accessor_storage; }
    set showLensButton(value) { this.#showLensButton_accessor_storage = value; }
    #carouselOnTop__accessor_storage = false;
    get carouselOnTop_() { return this.#carouselOnTop__accessor_storage; }
    set carouselOnTop_(value) { this.#carouselOnTop__accessor_storage = value; }
    #expanding__accessor_storage = true;
    // Reflected: the wrapper CSS and imported shared composebox.css key
    // [expanding_] rules on it. Contextual Tasks is never collapsible.
    get expanding_() { return this.#expanding__accessor_storage; }
    set expanding_(value) { this.#expanding__accessor_storage = value; }
    searchboxCallbackRouter_;
    pageHandler_;
    searchboxHandler_;
    eventTracker_ = new EventTracker();
    resizeObservers_ = [];
    smartTabSharingSupported_ = loadTimeData.getBoolean('composeboxSmartTabSharingSupported');
    get webUIOmniboxAskGAboutThisPageEnabled_() {
        return loadTimeData.valueExists('webUIOmniboxAskGAboutThisPageEnabled') &&
            loadTimeData.getBoolean('webUIOmniboxAskGAboutThisPageEnabled');
    }
    getPageHandler() {
        return this.pageHandler_;
    }
    getSearchboxHandler() {
        return this.searchboxHandler_;
    }
    getSearchboxCallbackRouter() {
        return this.searchboxCallbackRouter_;
    }
    getActiveElement() {
        return this.shadowRoot?.activeElement || null;
    }
    getInputElement() {
        return this.$.composeboxInput;
    }
    getDropdownElement() {
        return this.$.matches;
    }
    getContextEntrypointElement() {
        return this.shadowRoot?.querySelector('#contextEntrypoint') ||
            null;
    }
    getLensButtonElement() {
        return this.shadowRoot?.querySelector('#lensIcon') || null;
    }
    constructor() {
        super();
        this.pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
        this.searchboxCallbackRouter_ =
            ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    }
    connectedCallback() {
        super.connectedCallback();
        this.searchboxListenerIds.push(this.getSearchboxCallbackRouter()
            .updateAutoSuggestedTabContext.addListener(this.updateAutoSuggestedTabContext_.bind(this)));
        this.focusInput();
        // firstUpdated() runs only once, so restore the observers on reconnect (
        // the shadow DOM persists); the initial setup happens in firstUpdated().
        if (this.hasUpdated) {
            this.syncResizeObservers_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        this.tearDownResizeObservers_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('inputPlaceholderOverride') ||
            changedProperties.has('enableFileHint')) {
            this.updateInputPlaceholder();
        }
        if (!this.hasUpdated) {
            // The mixin default reads the all-surfaces coherence key; Contextual
            // Tasks must use the cobrowsing-specific key.
            this.voiceSearchCoherenceEnabled = loadTimeData.getBoolean('voiceSearchCoherenceCobrowsingComposeboxEnabled');
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        // Set up after the first render so `this.$.matches` exists; CT is the only
        // embedder that consumes these resize events.
        this.syncResizeObservers_();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('result') ||
            changedProperties.has('showDropdown')) {
            // Fires `show-suggestion-activity-link`; the wrapper owns the link UI.
            this.shouldShowSuggestionActivityLink();
        }
    }
    computeVoiceSearchCoherenceEnabled() {
        return loadTimeData.getBoolean('voiceSearchCoherenceCobrowsingComposeboxEnabled');
    }
    setupResizeObservers_() {
        const composeboxResizeObserver = new ResizeObserver(debounceEnd(() => {
            this.fire('composebox-resize', { height: this.offsetHeight });
        }, RESIZE_EVENT_DEBOUNCE_TIMEOUT_MS));
        this.resizeObservers_.push(composeboxResizeObserver);
        composeboxResizeObserver.observe(this);
        const composeboxDropdownResizeObserver = new ResizeObserver(debounceEnd(() => {
            this.fire('composebox-resize', { dropdownHeight: this.$.matches.offsetHeight });
        }, RESIZE_EVENT_DEBOUNCE_TIMEOUT_MS));
        this.resizeObservers_.push(composeboxDropdownResizeObserver);
        composeboxDropdownResizeObserver.observe(this.$.matches);
    }
    tearDownResizeObservers_() {
        for (const observer of this.resizeObservers_) {
            observer.disconnect();
        }
        this.resizeObservers_ = [];
    }
    syncResizeObservers_() {
        this.tearDownResizeObservers_();
        if (!this.isConnected) {
            return;
        }
        this.setupResizeObservers_();
    }
    onAutocompleteResultChanged(result) {
        // Reuse the mixin's dropdown/selection logic, but notify the wrapper via
        // `result-changed` only for accepted results.
        const isValidResult = !this.submitting && result.queryId === this.activeQueryId;
        if (isValidResult && this.composeboxNoFlickerSuggestionsFix &&
            this.showTypedSuggest &&
            !this.haveReceivedSynchronousAutocompleteResponse) {
            // First typed-suggest response can collapse the dropdown; carry over
            // the prior non-verbatim matches.
            if (this.result && this.result.matches.length > 0 &&
                result.matches.length <= 1) {
                result.matches.push(...this.result.matches.filter(match => match.type !== 'search-what-you-typed'));
            }
            this.haveReceivedSynchronousAutocompleteResponse = true;
        }
        super.onAutocompleteResultChanged(result);
        if (isValidResult) {
            this.fire('result-changed', result);
        }
    }
    onSmartTabSharingActiveChanged(e) {
        if (!this.smartTabSharingSupported_) {
            return;
        }
        super.onSmartTabSharingActiveChanged(e);
    }
    async updateAutoSuggestedTabContext_(tab, invocationSource) {
        if (this.smartTabSharingSupported_ && this.smartTabSharingActive) {
            if (this.automaticActiveTab) {
                this.deleteFile(this.automaticActiveTab.uuid);
                this.automaticActiveTab = null;
            }
            return;
        }
        // AutoSuggestedTabContext is routed differently for Omnibox Page Action.
        // when it opens a side panel to cobrowse.
        const askGAndPageAction = this.webUIOmniboxAskGAboutThisPageEnabled_ &&
            invocationSource === 'OmniboxPageAction' && this.isSidePanel;
        // We should delete the automatic active tab if it is different from the
        // current tab when webUIOmniboxAskGAboutThisPageEnabled_ is true. Make sure
        // to keep the existing tab if we are returning from another tab.
        const hasTabMismatch = !!this.automaticActiveTab && !!tab &&
            this.automaticActiveTab.url !== tab.url;
        const shouldDeleteAutomaticActiveTab = askGAndPageAction ?
            hasTabMismatch :
            this.automaticActiveTab && (!tab || hasTabMismatch);
        if (shouldDeleteAutomaticActiveTab) {
            this.deleteFile(this.automaticActiveTab.uuid);
            this.automaticActiveTab = null;
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
            // TODO(crbug.com/482150500): Correctly query for url based suggestions
            // when delayed tab is present. Right now, while url-based suggestions are
            // not set-up, clear the autocomplete matches.
            if (!askGAndPageAction && !tab) {
                this.queryAutocomplete(/* clearMatches= */ true);
            }
            return;
        }
        if (!tab) {
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
            return;
        }
        // Prevent re-suggesting tabs that are already restored in the conversation
        // thread to avoid displaying duplicate tab coins.
        if (this.contextManagementInComposeboxEnabled &&
            this.aimThreadRestoredTabs.some(t => (tab.tabId && t.tabId === tab.tabId) ||
                (!!tab.url && t.url === tab.url))) {
            return;
        }
        if (tab) {
            // Ignore the `TabInfo` update if there is a matching
            // `automaticActiveTab`, unless the title has changed.
            if (this.automaticActiveTab && tab.url === this.automaticActiveTab.url &&
                tab.tabId === this.automaticActiveTab.tabId) {
                if (this.automaticActiveTab.name !== tab.title) {
                    const updatedFile = new ComposeboxFile(this.automaticActiveTab.uuid, tab.title, this.automaticActiveTab.type, this.automaticActiveTab.inputType, this.automaticActiveTab);
                    this.automaticActiveTab = updatedFile;
                    const fileMap = new Map(this.attachedContext);
                    fileMap.set(updatedFile.uuid, updatedFile);
                    this.attachedContext = fileMap;
                }
                return;
            }
            // If an autochip is currently being uploaded but carousel attachment has
            // not been created yet, allow updates to its title. Absence of this
            // url means that there is no currently no auto active tab uploading.
            // If the url is the same, this is an update for the same tab so just
            // allow updates to the uploading tab's title from this update,
            // but do not upload it again.
            if (this.pendingAutomaticActiveTabUrl === tab.url) {
                this.pendingAutomaticActiveTabTitle = tab.title;
                return;
            }
            // Otherwise, prepare to replace the auto chip:
            this.pendingAutomaticActiveTabUrl = tab.url;
            this.pendingAutomaticActiveTabTitle = tab.title;
            // Do not reset above pending states in this async callback since
            // later requests make any older async callback updates irrelevant.
            // Add the `TabInfo` as `ComposeboxFile` in carousel.
            const attachment = await this.addTabContextHandleCallback({
                tabId: tab.tabId,
                title: tab.title,
                url: tab.url,
                delayUpload: !askGAndPageAction,
                origin: TabAttachmentSource.kAutoActive,
            }, 
            /*replaceAutoActiveTabToken=*/ true);
            if (!askGAndPageAction || !attachment) {
                this.clearAutocompleteMatches();
            }
        }
    }
    async addTabContextHandleCallback(tabUpload, replaceAutoActiveTabToken = false) {
        const attachment = await super.addTabContextHandleCallback(tabUpload, replaceAutoActiveTabToken, (attachment) => {
            // Do not reset pending active tab to avoid overwriting
            // synchronous "pending statuses" that are queued (since this
            // function is asynchronous and can run much later).
            if (replaceAutoActiveTabToken) {
                this.automaticActiveTab =
                    Object.assign(attachment, { uuid: attachment.uuid });
            }
        });
        if (!attachment) {
            return null;
        }
        // Adding a tab is asynchronous. For auto active tabs, a title update
        // might be received after the upload process has been started. In order
        // to prevent adding duplicate chips from this update, simply update the
        // title of the initial upload instead based on whatever the latest
        // title update received is.
        if (replaceAutoActiveTabToken && this.automaticActiveTab) {
            if (this.automaticActiveTab.name !==
                this.pendingAutomaticActiveTabTitle) {
                const updatedFile = new ComposeboxFile(this.automaticActiveTab.uuid, this.pendingAutomaticActiveTabTitle, this.automaticActiveTab.type, this.automaticActiveTab.inputType, this.automaticActiveTab);
                this.automaticActiveTab = updatedFile;
                const fileMap = new Map(this.attachedContext);
                fileMap.set(updatedFile.uuid, updatedFile);
                this.attachedContext = fileMap;
            }
        }
        return attachment;
    }
    deleteFile(uuidToDelete, fromUserAction) {
        const fromAutoSuggestedChip = uuidToDelete === this.automaticActiveTab?.uuid &&
            (fromUserAction === true);
        const file = super.deleteFile(uuidToDelete, fromUserAction, fromAutoSuggestedChip);
        if (!file) {
            return null;
        }
        if (fromAutoSuggestedChip) {
            // TODO(crbug.com/492797638): Consider folding this into the
            // `InputStateDeletion` metric.
            const metricName = 'ContextualSearch.UserAction.DeleteAutoSuggestedTab.' +
                this.composeboxSource;
            recordUserAction(metricName);
            recordBoolean(metricName, true);
            this.automaticActiveTab = null;
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
        }
        // We should not be querying autocomplete in the presence of a tab
        // with delayed upload until URL suggestions are implemented.
        // `deleteContext_` gets called before the active tab chip token is cleared,
        // therefore, check if we're removing this chip to see if the delayed tab
        // is getting removed.
        if (fromAutoSuggestedChip || !this.getHasAutomaticActiveTabChipToken()) {
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        else {
            // TODO(crbug.com/482150500): Have URL-suggestions for tabs with delayed
            // uploads.
            this.clearAutocompleteMatches();
        }
        return file;
    }
    clearAllInputs(querySubmitted, shouldBlockAutoSuggestedTabs) {
        // Reset side-panel specific suggested tab context URL/Title pointers
        this.automaticActiveTab = null;
        this.pendingAutomaticActiveTabUrl = '';
        this.pendingAutomaticActiveTabTitle = '';
        super.clearAllInputs(querySubmitted, shouldBlockAutoSuggestedTabs);
    }
    onComposeboxFocusin_(e) {
        // Exit early if the focus is still within the composebox.
        if (this.$.composebox.contains(e.relatedTarget)) {
            return;
        }
        this.pageHandler_.focusChanged(true);
        this.fire('composebox-focus-in');
    }
    onComposeboxFocusout_(e) {
        // Exit early if the focus is still within the composebox.
        if (this.$.composebox.contains(e.relatedTarget)) {
            return;
        }
        this.pageHandler_.focusChanged(false);
        this.fire('composebox-focus-out');
    }
    onLensClick_() {
        if (this.lensButtonTriggersOverlay) {
            this.pageHandler_.handleLensButtonClick();
        }
        else {
            this.pageHandler_.handleFileUpload(/*is_image=*/ true);
        }
    }
    onLensIconMousedown_(e) {
        // Capture the mousedown so clicking the Lens icon does not focus (and
        // expand) the composebox.
        e.preventDefault();
    }
    updateInputPlaceholder() {
        if (this.inputPlaceholderOverride) {
            this.inputPlaceholder = this.inputPlaceholderOverride;
            return;
        }
        // The file hint should only be shown when there is context that was
        // deliberately added by the user (i.e. not the automatic active tab).
        const isOnlyAutoTab = this.attachedContext.size === 1
            && !!this.automaticActiveTab;
        const shouldUseFileHint = this.enableFileHint && this.hasFiles() &&
            !isOnlyAutoTab && this.inputState?.activeTool === ToolMode.kUnspecified;
        if (shouldUseFileHint) {
            if (this.attachedContext.size > 1) {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThese');
                return;
            }
            const file = this.attachedContext.values().next().value;
            if (file.type === 'tab') {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThisTab');
                return;
            }
            else if (file.type.includes('image')) {
                this.inputPlaceholder =
                    this.i18n('composeboxHintTextAskAboutThisImage');
                return;
            }
            else if (file.type === 'pdf' || file.type === 'application/pdf') {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThisDoc');
                return;
            }
        }
        super.updateInputPlaceholder();
    }
    hasValidQuery() {
        // TODO(crbug.com/485648942): Update to drive Deep Search behavior from the
        // PEC API's ToolSubstateConfig.
        // Allow an empty query for Deep Search follow-ups; super handles files,
        // selected matches, and non-empty text.
        return super.hasValidQuery() ||
            (this.inputState?.activeTool === ToolMode.kDeepSearch &&
                this.isFollowupQuery);
    }
    shouldShowDivider() {
        // Retain the divider when only tab favicons are present.
        const hasNonTabFiles = Array.from(this.attachedContext.values()).some(f => !f.url);
        if (this.hasTabs() && !hasNonTabFiles) {
            return this.showDropdown;
        }
        return super.shouldShowDivider();
    }
    shouldDisableFileInputs() {
        // Contextual Tasks never uploads through the hidden file inputs; uploads
        // go through the browser handler (Lens, drag/drop, paste).
        return true;
    }
    getAutomaticActiveTabChipElement() {
        if (!this.automaticActiveTab) {
            return null;
        }
        const carousel = this.shadowRoot?.querySelector('#carousel');
        if (!carousel) {
            return null;
        }
        return carousel.getThumbnailElementByUuid(this.automaticActiveTab.uuid);
    }
    getHasAutomaticActiveTabChipToken() {
        return this.automaticActiveTab !== null;
    }
    injectInput(title, thumbnail, fileToken, supportsUnimodal, iconName) {
        const attachment = ComposeboxFile.createFromInjectedInput(fileToken, thumbnail, title, iconName ?? null);
        attachment.supportsUnimodal = supportsUnimodal;
        this.onFileContextAdded(attachment);
    }
    setInputProgrammatically(queryText, willSubmitAfterInjection) {
        this.input = queryText;
        if (!willSubmitAfterInjection) {
            // If not submitting immediately, suggestions for the new input might be
            // desired.
            this.queryAutocomplete(/*clearMatches=*/ true);
            return;
        }
        // Stop any in-flight autocomplete queries to prevent unnecessary backend
        // work for a query that is about to be submitted.
        this.getSearchboxHandler().stopAutocomplete(/*clearResult=*/ true);
        this.lastQueriedInput = '';
        // Hide the dropdown and drop any stale matches. This also resets
        // `activeQueryId` to -1, so autocomplete results that still arrive for
        // earlier queries are rejected by the query-ID guard in
        // `onAutocompleteResultChanged`.
        this.clearAutocompleteMatches();
    }
}
customElements.define(ContextualTasksInnerComposeboxElement.is, ContextualTasksInnerComposeboxElement);
