// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_aim_button.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/localized_link/localized_link.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_components/composebox/composebox_lens_search.js';
import '/strings.m.js';
import { ComposeboxFile, getLoadTimeBoolean, hasOnlyAutoAddedTabs, mapUploadErrorToProcessFilesError, ProcessFilesError, SingleTabType, SubmitButtonIconType } from '//resources/cr_components/composebox/common.js';
import { ComposeboxEmbedderMixin } from '//resources/cr_components/composebox/composebox_mixin.js';
import { ComposeboxProxyImpl } from '//resources/cr_components/composebox/composebox_proxy.js';
import { ContextUploadStatus } from '//resources/cr_components/composebox/composebox_query.mojom-webui.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { RenderType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { getCss } from './omnibox_composebox.css.js';
import { getHtml } from './omnibox_composebox.html.js';
const CONTEXTUAL_SUGGESTIONS_POSITION_DURATION_MS = 250;
const CONTEXTUAL_SUGGESTIONS_POSITION_CURVE = 'cubic-bezier(0.2, 0, 0, 1)';
const CONTEXTUAL_SUGGESTIONS_OPACITY_DELAY_MS = 50;
const CONTEXTUAL_SUGGESTIONS_OPACITY_DURATION_MS = 150;
export class OmniboxComposeboxElement extends ComposeboxEmbedderMixin(CrLitElement) {
    static get is() {
        return 'cr-omnibox-composebox';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            applyContextButtonBackground: {
                reflect: true,
                type: Boolean,
            },
            expanding_: {
                reflect: true,
                type: Boolean,
            },
            animationState: {
                type: String,
                reflect: true,
            },
            // Mixin properties whose defaults are overridden below. Re-listed so
            // Lit wraps this class's accessors; a bare `override accessor` would
            // shadow the mixin's reactive ones.
            searchboxNextEnabled: { type: Boolean, reflect: true },
            composeboxNoFlickerSuggestionsFix: { type: Boolean },
            disableCaretColorAnimation: { type: Boolean, reflect: true },
            energyEffectEnabled: { type: Boolean, reflect: true },
            showMenuOnClick: { type: Boolean },
            shouldShowGhostFiles: { type: Boolean },
            usePecApi: { type: Boolean, reflect: true },
            contextManagementInComposeboxEnabled: { type: Boolean, reflect: true },
            smartComposeEnabled: { type: Boolean, reflect: true },
            submitButtonIconType: { type: String },
            isOblongShape: { type: Boolean },
            webuiOmniboxSimplificationEnabled: { type: Boolean },
            showVoiceSearch: { type: Boolean },
            disableVoiceSearchAnimation: { type: Boolean },
            entrypointName: { type: String, reflect: true },
            enableCarouselScrolling: { type: Boolean },
            askGComposeboxLensChipEnabled_: { type: Boolean },
            // TODO(b/539981162): Consolidate the different lens buttons once
            // behaviors are solidified, and we can tell how they can be merged.
            isLensSearchChipShown_: { type: Boolean },
            isContentSharingEnabled_: { type: Boolean },
            isLensSearchEligible_: { type: Boolean },
            askGComposeboxPlaceholderEnabled_: { type: Boolean },
            baseSearchboxLayoutMode_: { type: String },
            isAimButtonShown_: {
                type: Boolean,
                reflect: true,
            },
            showAimButtonExitIcon_: { type: Boolean },
            energyEffectAnimationEnabled_: {
                type: Boolean,
                reflect: true,
            },
            hasPermissionPrompt_: {
                type: Boolean,
                reflect: true,
            },
            webuiShadowEnabled: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #entrypointName_accessor_storage = 'Omnibox';
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #applyContextButtonBackground_accessor_storage = false;
    get applyContextButtonBackground() { return this.#applyContextButtonBackground_accessor_storage; }
    set applyContextButtonBackground(value) { this.#applyContextButtonBackground_accessor_storage = value; }
    #enableCarouselScrolling_accessor_storage = false;
    get enableCarouselScrolling() { return this.#enableCarouselScrolling_accessor_storage; }
    set enableCarouselScrolling(value) { this.#enableCarouselScrolling_accessor_storage = value; }
    #animationState_accessor_storage = GlowAnimationState.NONE;
    get animationState() { return this.#animationState_accessor_storage; }
    set animationState(value) { this.#animationState_accessor_storage = value; }
    #searchboxNextEnabled_accessor_storage = true;
    // Host-independent configuration; `closeOnEscape` and `webuiShadowEnabled`
    // are set by the host page.
    get searchboxNextEnabled() { return this.#searchboxNextEnabled_accessor_storage; }
    set searchboxNextEnabled(value) { this.#searchboxNextEnabled_accessor_storage = value; }
    #composeboxNoFlickerSuggestionsFix_accessor_storage = true;
    get composeboxNoFlickerSuggestionsFix() { return this.#composeboxNoFlickerSuggestionsFix_accessor_storage; }
    set composeboxNoFlickerSuggestionsFix(value) { this.#composeboxNoFlickerSuggestionsFix_accessor_storage = value; }
    #disableCaretColorAnimation_accessor_storage = !loadTimeData.getBoolean('caretAnimationEnabled');
    get disableCaretColorAnimation() { return this.#disableCaretColorAnimation_accessor_storage; }
    set disableCaretColorAnimation(value) { this.#disableCaretColorAnimation_accessor_storage = value; }
    #energyEffectEnabled_accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    get energyEffectEnabled() { return this.#energyEffectEnabled_accessor_storage; }
    set energyEffectEnabled(value) { this.#energyEffectEnabled_accessor_storage = value; }
    #showMenuOnClick_accessor_storage = false;
    get showMenuOnClick() { return this.#showMenuOnClick_accessor_storage; }
    set showMenuOnClick(value) { this.#showMenuOnClick_accessor_storage = value; }
    #shouldShowGhostFiles_accessor_storage = true;
    get shouldShowGhostFiles() { return this.#shouldShowGhostFiles_accessor_storage; }
    set shouldShowGhostFiles(value) { this.#shouldShowGhostFiles_accessor_storage = value; }
    #usePecApi_accessor_storage = loadTimeData.getBoolean('contextualMenuUsePecApi');
    get usePecApi() { return this.#usePecApi_accessor_storage; }
    set usePecApi(value) { this.#usePecApi_accessor_storage = value; }
    #contextManagementInComposeboxEnabled_accessor_storage = loadTimeData.getBoolean('contextManagementInComposeboxEnabled');
    get contextManagementInComposeboxEnabled() { return this.#contextManagementInComposeboxEnabled_accessor_storage; }
    set contextManagementInComposeboxEnabled(value) { this.#contextManagementInComposeboxEnabled_accessor_storage = value; }
    #smartComposeEnabled_accessor_storage = loadTimeData.getBoolean('composeboxSmartComposeEnabled');
    get smartComposeEnabled() { return this.#smartComposeEnabled_accessor_storage; }
    set smartComposeEnabled(value) { this.#smartComposeEnabled_accessor_storage = value; }
    #submitButtonIconType_accessor_storage = SubmitButtonIconType.FORWARD;
    get submitButtonIconType() { return this.#submitButtonIconType_accessor_storage; }
    set submitButtonIconType(value) { this.#submitButtonIconType_accessor_storage = value; }
    #isOblongShape_accessor_storage = loadTimeData.getBoolean('contextButtonShapeIsOblong');
    get isOblongShape() { return this.#isOblongShape_accessor_storage; }
    set isOblongShape(value) { this.#isOblongShape_accessor_storage = value; }
    #webuiOmniboxSimplificationEnabled_accessor_storage = loadTimeData.getBoolean('webuiOmniboxSimplificationEnabled');
    get webuiOmniboxSimplificationEnabled() { return this.#webuiOmniboxSimplificationEnabled_accessor_storage; }
    set webuiOmniboxSimplificationEnabled(value) { this.#webuiOmniboxSimplificationEnabled_accessor_storage = value; }
    #showVoiceSearch_accessor_storage = true;
    get showVoiceSearch() { return this.#showVoiceSearch_accessor_storage; }
    set showVoiceSearch(value) { this.#showVoiceSearch_accessor_storage = value; }
    #disableVoiceSearchAnimation_accessor_storage = !loadTimeData.getBoolean('voiceSearchCoherenceComposeboxesEnabled');
    // Voice search animation is disabled outside of voice coherence.
    get disableVoiceSearchAnimation() { return this.#disableVoiceSearchAnimation_accessor_storage; }
    set disableVoiceSearchAnimation(value) { this.#disableVoiceSearchAnimation_accessor_storage = value; }
    #expanding__accessor_storage = true;
    get expanding_() { return this.#expanding__accessor_storage; }
    set expanding_(value) { this.#expanding__accessor_storage = value; }
    #askGComposeboxLensChipEnabled__accessor_storage = getLoadTimeBoolean('askGComposeboxLensChipEnabled', false);
    get askGComposeboxLensChipEnabled_() { return this.#askGComposeboxLensChipEnabled__accessor_storage; }
    set askGComposeboxLensChipEnabled_(value) { this.#askGComposeboxLensChipEnabled__accessor_storage = value; }
    #isLensSearchChipShown__accessor_storage = false;
    get isLensSearchChipShown_() { return this.#isLensSearchChipShown__accessor_storage; }
    set isLensSearchChipShown_(value) { this.#isLensSearchChipShown__accessor_storage = value; }
    #isContentSharingEnabled__accessor_storage = false;
    get isContentSharingEnabled_() { return this.#isContentSharingEnabled__accessor_storage; }
    set isContentSharingEnabled_(value) { this.#isContentSharingEnabled__accessor_storage = value; }
    #isLensSearchEligible__accessor_storage = false;
    get isLensSearchEligible_() { return this.#isLensSearchEligible__accessor_storage; }
    set isLensSearchEligible_(value) { this.#isLensSearchEligible__accessor_storage = value; }
    #askGComposeboxPlaceholderEnabled__accessor_storage = getLoadTimeBoolean('askGComposeboxPlaceholderEnabled', false);
    get askGComposeboxPlaceholderEnabled_() { return this.#askGComposeboxPlaceholderEnabled__accessor_storage; }
    set askGComposeboxPlaceholderEnabled_(value) { this.#askGComposeboxPlaceholderEnabled__accessor_storage = value; }
    #baseSearchboxLayoutMode__accessor_storage = loadTimeData.getString('searchboxLayoutMode');
    get baseSearchboxLayoutMode_() { return this.#baseSearchboxLayoutMode__accessor_storage; }
    set baseSearchboxLayoutMode_(value) { this.#baseSearchboxLayoutMode__accessor_storage = value; }
    #isAimButtonShown__accessor_storage = false;
    get isAimButtonShown_() { return this.#isAimButtonShown__accessor_storage; }
    set isAimButtonShown_(value) { this.#isAimButtonShown__accessor_storage = value; }
    #showAimButtonExitIcon__accessor_storage = getLoadTimeBoolean('composeboxPersistentAimButtonWithX', false);
    get showAimButtonExitIcon_() { return this.#showAimButtonExitIcon__accessor_storage; }
    set showAimButtonExitIcon_(value) { this.#showAimButtonExitIcon__accessor_storage = value; }
    #energyEffectAnimationEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    // The use of energyEffectEnabled to set energyEffectAnimationEnabled_ is
    // intentional. This is to align the gating properties for energy effects
    // across all surfaces (= Nextbox, Omnibox, and Realbox).
    get energyEffectAnimationEnabled_() { return this.#energyEffectAnimationEnabled__accessor_storage; }
    set energyEffectAnimationEnabled_(value) { this.#energyEffectAnimationEnabled__accessor_storage = value; }
    #hasPermissionPrompt__accessor_storage = false;
    // Set while the voice search permission prompt is showing.
    get hasPermissionPrompt_() { return this.#hasPermissionPrompt__accessor_storage; }
    set hasPermissionPrompt_(value) { this.#hasPermissionPrompt__accessor_storage = value; }
    #webuiShadowEnabled_accessor_storage = false;
    // When true, this element paints the popup's background, rounded corners and
    // drop shadow instead of the Views frame.
    get webuiShadowEnabled() { return this.#webuiShadowEnabled_accessor_storage; }
    set webuiShadowEnabled(value) { this.#webuiShadowEnabled_accessor_storage = value; }
    onLensSearchClick_(e) {
        e.stopPropagation();
        this.getSearchboxHandler().openLensSearch();
    }
    // Reset Lens search eligibility when the popup is hidden. This prevents the
    // cached WebUI from briefly flashing the Lens chip from a previous eligible
    // page when the popup is reopened on an ineligible page (e.g. NTP).
    onVisibilityChange_ = () => {
        if (document.visibilityState === 'hidden') {
            this.isLensSearchEligible_ = false;
        }
    };
    pageHandler_;
    searchboxCallbackRouter_;
    searchboxHandler_;
    listenerIds_ = [];
    /**
     * Whether this session opened the composebox without suggestions and should
     * animate the contextual suggestions when they arrive. Set in
     * `addSearchContext()` and consumed exactly once, on the `showDropdown` when
     * the results come in.
     */
    shouldAnimateContextualSuggestions_ = false;
    persistentAimButtonEnabled_ = getLoadTimeBoolean('composeboxPersistentAimButton', false);
    constructor() {
        super();
        this.pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
        this.searchboxCallbackRouter_ =
            ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
        this.searchboxLayoutMode = this.computeSearchboxLayoutMode_();
        this.addEventListener('composebox-submit', () => this.onComposeboxSubmit_());
        this.addEventListener('voice-permission-prompt-changed', e => this.onVoicePermissionPromptChanged_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.animationState = GlowAnimationState.EXPANDING;
        this.updateInputPlaceholder();
        this.listenerIds_ = [
            this.searchboxCallbackRouter_.updateContentSharingPolicy.addListener((enabled) => {
                this.isContentSharingEnabled_ = enabled;
            }),
            this.searchboxCallbackRouter_.updateLensSearchEligibility.addListener((eligible) => {
                this.isLensSearchEligible_ = eligible;
            }),
        ];
        document.addEventListener('visibilitychange', this.onVisibilityChange_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listenerId of this.listenerIds_) {
            this.searchboxCallbackRouter_.removeListener(listenerId);
        }
        this.listenerIds_ = [];
        document.removeEventListener('visibilitychange', this.onVisibilityChange_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('inputState') ||
            changedPrivateProperties.has('webuiOmniboxSimplificationEnabled')) {
            const inToolMode = this.inputState?.activeTool !== ToolMode.kUnspecified;
            this.applyContextButtonBackground =
                this.webuiOmniboxSimplificationEnabled && !inToolMode;
        }
        if (changedPrivateProperties.has('input') ||
            changedPrivateProperties.has('attachedContext') ||
            changedPrivateProperties.has('inputState') ||
            changedPrivateProperties.has('isContentSharingEnabled_') ||
            changedPrivateProperties.has('isLensSearchEligible_') ||
            changedPrivateProperties.has('askGComposeboxLensChipEnabled_')) {
            this.isLensSearchChipShown_ = this.askGComposeboxLensChipEnabled_ &&
                this.isContentSharingEnabled_ && this.isLensSearchEligible_ &&
                !this.hasContent(/* ignoreAutoAddedTabs= */ true);
        }
        if (changedPrivateProperties.has('attachedContext') ||
            changedPrivateProperties.has('inputState') ||
            changedPrivateProperties.has('askGComposeboxPlaceholderEnabled_')) {
            this.updateInputPlaceholder();
        }
        if (changedPrivateProperties.has('baseSearchboxLayoutMode_') ||
            changedPrivateProperties.has('hasAllowedInputs')) {
            this.searchboxLayoutMode = this.computeSearchboxLayoutMode_();
            this.isAimButtonShown_ = this.persistentAimButtonEnabled_ &&
                this.searchboxLayoutMode === 'TallBottomContext';
        }
    }
    computeSearchboxLayoutMode_() {
        if (this.baseSearchboxLayoutMode_.startsWith('Tall') &&
            !this.hasAllowedInputs) {
            return 'Compact';
        }
        return this.baseSearchboxLayoutMode_;
    }
    updateInputPlaceholder() {
        const hasAutoAddedTab = hasOnlyAutoAddedTabs(this.attachedContext);
        if (this.askGComposeboxPlaceholderEnabled_ && hasAutoAddedTab &&
            (!this.inputState ||
                this.inputState.activeTool === ToolMode.kUnspecified)) {
            this.inputPlaceholder = this.i18n('askAboutTab');
            return;
        }
        super.updateInputPlaceholder();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.focusInput();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('result')) {
            this.toggleAttribute('has-grid', this.hasGridSuggestionsGroup_());
        }
        // Animate once, when the contextual suggestions arrive. Consuming
        // `shouldAnimateContextualSuggestions_` stops later results from
        // retriggering the animation.
        // `lastQueriedInput` is empty only on the zero state path. A typed query
        // can open the dropdown too and we want to make sure we are not animating
        // that.
        if (this.shouldAnimateContextualSuggestions_ && !this.lastQueriedInput &&
            changedPrivateProperties.has('showDropdown') && this.showDropdown) {
            this.shouldAnimateContextualSuggestions_ = false;
            this.animateContextualSuggestions_();
        }
    }
    /**
     * Plays the load-in animation: the box grows to fit the arriving
     * suggestions, which fade in as it opens.
     */
    async animateContextualSuggestions_() {
        const dropdown = this.getDropdownElement();
        const box = this.$.composebox;
        const startHeight = box.getBoundingClientRect().height;
        await dropdown.updateComplete;
        const endHeight = box.getBoundingClientRect().height;
        // `fill` is set to backwards to keep the rows transparent until the fade
        // starts.
        dropdown.animate([
            { opacity: 0 },
            { opacity: 1 },
        ], {
            duration: CONTEXTUAL_SUGGESTIONS_OPACITY_DURATION_MS,
            delay: CONTEXTUAL_SUGGESTIONS_OPACITY_DELAY_MS,
            easing: 'linear',
            fill: 'backwards',
        });
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion && startHeight !== endHeight) {
            box.animate([
                { height: `${startHeight}px` },
                { height: `${endHeight}px` },
            ], {
                duration: CONTEXTUAL_SUGGESTIONS_POSITION_DURATION_MS,
                easing: CONTEXTUAL_SUGGESTIONS_POSITION_CURVE,
            });
        }
    }
    deleteFile(uuidToDelete, fromUserAction) {
        const file = super.deleteFile(uuidToDelete, fromUserAction);
        if (!file) {
            return null;
        }
        this.queryAutocomplete(/* clearMatches= */ true);
        return file;
    }
    getActiveElement() {
        return this.shadowRoot?.activeElement || null;
    }
    getDropdownElement() {
        return this.$.matches;
    }
    getInputElement() {
        return this.$.composeboxInput;
    }
    getPageHandler() {
        return this.pageHandler_;
    }
    getSearchboxCallbackRouter() {
        return this.searchboxCallbackRouter_;
    }
    getSearchboxHandler() {
        return this.searchboxHandler_;
    }
    getContextEntrypointElement() {
        return this.shadowRoot?.querySelector('#contextEntrypoint') ||
            null;
    }
    shouldShowDivider() {
        if (!this.shouldHideDropdown() && this.hasGridSuggestionsGroup_()) {
            return true;
        }
        if (this.searchboxLayoutMode === 'TallBottomContext' &&
            !this.showFileCarousel) {
            return false;
        }
        return super.shouldShowDivider();
    }
    shouldHandleSuggestionFuseboxActions() {
        return true;
    }
    // ===========================================================================
    // Host API
    // ===========================================================================
    // Force the button to keep its hover background visually while
    // the menu is open, even if the mouse doesn't move out of the button
    // area after clicking.
    setContextMenuOpen(open) {
        this.getContextEntrypointElement()?.classList.toggle('menu-open', open);
    }
    // ===========================================================================
    // Common event handlers
    // ===========================================================================
    onComposeboxSubmit_() {
        this.clearAllInputs(
        /* querySubmitted= */ true, /* shouldBlockAutoSuggestedTabs= */ false);
    }
    // Fired from voice search component if minimum height and width are non
    // zero when permission prompt is displayed, or any time when permission
    // prompt hides.
    onVoicePermissionPromptChanged_(e) {
        this.hasPermissionPrompt_ = e.detail.isOpened;
        // Only #composebox reads these. The voice search overlay sets its own
        // copy in ComposeboxMixin.onVoicePermissionChanged().
        const composebox = this.$.composebox;
        if (e.detail.isOpened) { // Permission prompt opened.
            composebox.style.setProperty('--cr_composebox_minimum_height', `${e.detail.height}px`);
            composebox.style.setProperty('--cr_composebox_minimum_width', `${e.detail.width}px`);
        }
        else { // Permission prompt closed.
            composebox.style.removeProperty('--cr_composebox_minimum_height');
            composebox.style.removeProperty('--cr_composebox_minimum_width');
        }
    }
    addSearchContext(context) {
        if (context) {
            if (context.input.length > 0) {
                this.input = context.input;
            }
            for (const attachment of context.attachments) {
                if (attachment.fileAttachment) {
                    this.addFileFromAttachment_(attachment.fileAttachment);
                }
                else if (attachment.tabAttachment) {
                    this.addTabFromAttachment_(attachment.tabAttachment);
                }
            }
            // A tool or model the user picked in the browser before this page could
            // take it, e.g. from the omnibox context menu while the page loaded.
            if (context.toolMode !== ToolMode.kUnspecified) {
                this.selectToolMode(context.toolMode);
            }
            if (context.modelMode !== ModelMode.kUnspecified) {
                this.selectModelMode(context.modelMode);
            }
        }
        const hasTab = !!context &&
            context.attachments.some(attachment => !!attachment.tabAttachment);
        // Query for ZPS even if there's no context. Skip it when a tab was just
        // added: `onContextualInputStatusChanged()` queries once the tab's upload
        // is ready for suggest, so querying now would only flash non-contextual
        // suggestions until then.
        if (this.showZps && !hasTab) {
            // Clear the autocomplete matches here, as failure to do so triggers a
            // DCHECK in `ZpsSection::InitMatches()` whenever the user tries to upload
            // a file after having uploaded an invalid file earlier in the session.
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        // Skipping the query is what makes the composebox open empty and expand
        // later, so it is the precondition for the animation. With input the box
        // isn't empty, so the typed query must not arm the animation.
        this.shouldAnimateContextualSuggestions_ = hasTab && !this.input.trim();
    }
    playGlowAnimation() {
        // If |animationState_| were still EXPANDING, this function would have no
        // effect because nothing changes in CSS and therefore animations wouldn't
        // be re-trigered. Resetting it to NONE forces the animation related styles
        // to reset before switching to EXPANDING.
        this.animationState = GlowAnimationState.NONE;
        // Wait for the style change for NONE to commit. This ensures the browser
        // detects a state change when we switch to EXPANDING.
        // If the composebox is not submittable, trigger the animation.
        if (!this.submitEnabled) {
            requestAnimationFrame(() => {
                this.animationState = GlowAnimationState.EXPANDING;
            });
        }
    }
    isExpanded() {
        return this.expanding_;
    }
    addFileFromAttachment_(fileAttachment) {
        const errorType = fileAttachment.errorType ?? null;
        if (errorType) {
            const processFilesError = mapUploadErrorToProcessFilesError(errorType);
            if (processFilesError !== ProcessFilesError.NONE) {
                this.handleProcessFilesError(processFilesError);
                if (!super.deleteFile(fileAttachment.uuid)) {
                    this.getSearchboxHandler().deleteContext(fileAttachment.uuid, /*fromAutomaticChip=*/ false);
                }
                return;
            }
        }
        const pendingStatus = this.attachedContext.get(fileAttachment.uuid)?.status;
        const composeboxFile = ComposeboxFile.createFromFile(fileAttachment.uuid, { name: fileAttachment.name, type: fileAttachment.mimeType }, pendingStatus ?? ContextUploadStatus.kNotUploaded, {
            dataUrl: fileAttachment.imageDataUrl ?? null,
            iconUrl: fileAttachment.iconUrl,
            thumbnailUrl: fileAttachment.thumbnailUrl ?? null,
            supportsUnimodal: true,
        });
        this.onFileContextAdded(composeboxFile);
    }
    addTabFromAttachment_(tabAttachment) {
        this.addTabContextHandleCallback({
            tabId: tabAttachment.tabId,
            title: tabAttachment.title,
            url: tabAttachment.url,
            delayUpload: false,
            origin: tabAttachment.source,
            singleTabType: tabAttachment.fromSingleTabMenuItem ?
                (tabAttachment.isActiveTab ? SingleTabType.CURRENT_TAB :
                    SingleTabType.RECENT_TAB) :
                undefined,
        });
    }
    hasGridSuggestionsGroup_() {
        return this.richImageSuggestionsEnabled &&
            (this.result?.matches.some(match => this.result?.suggestionGroupsMap[match.suggestionGroupId]
                ?.renderType === RenderType.kGrid) ??
                false);
    }
    setBaseSearchboxLayoutModeForTesting(mode) {
        this.baseSearchboxLayoutMode_ = mode;
    }
}
customElements.define(OmniboxComposeboxElement.is, OmniboxComposeboxElement);
