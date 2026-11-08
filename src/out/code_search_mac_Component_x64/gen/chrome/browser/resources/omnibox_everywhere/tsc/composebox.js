// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/search/animated_glow.js';
import { getLoadTimeBoolean, SubmitButtonIconType } from '//resources/cr_components/composebox/common.js';
import { ComposeboxEmbedderMixin } from '//resources/cr_components/composebox/composebox_mixin.js';
import { ComposeboxProxyImpl } from '//resources/cr_components/composebox/composebox_proxy.js';
import { HelpBubbleMixinLit } from '//resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ContextUploadStatus, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { OmniboxEverywhereBrowserProxyImpl } from './browser_proxy.js';
import { getCss } from './composebox.css.js';
import { getHtml } from './composebox.html.js';
const OmniboxEverywhereComposeboxElementBase = HelpBubbleMixinLit(ComposeboxEmbedderMixin(CrLitElement));
export class OmniboxEverywhereComposeboxElement extends OmniboxEverywhereComposeboxElementBase {
    static get is() {
        return 'omnibox-everywhere-composebox';
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
            entrypointName: { type: String, reflect: true },
            disableComposeboxAnimation: { type: Boolean },
            energyEffectAnimationEnabled: { type: Boolean },
            submitButtonIconType: { type: String },
            clearAllInputsWhenSubmittingQuery: { type: Boolean },
            isScreenshotMenuOpen: {
                type: Boolean,
                reflect: true,
            },
            isContextMenuOpen: {
                type: Boolean,
                reflect: true,
            },
            isPendingScreenshot: {
                type: Boolean,
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
    #isPendingScreenshot_accessor_storage = false;
    get isPendingScreenshot() { return this.#isPendingScreenshot_accessor_storage; }
    set isPendingScreenshot(value) { this.#isPendingScreenshot_accessor_storage = value; }
    #isLensHelpBubbleShowing_accessor_storage = false;
    get isLensHelpBubbleShowing() { return this.#isLensHelpBubbleShowing_accessor_storage; }
    set isLensHelpBubbleShowing(value) { this.#isLensHelpBubbleShowing_accessor_storage = value; }
    #entrypointName_accessor_storage = 'OmniboxEverywhere';
    /**
     * Entrypoint name used by SearchAnimatedGlowElement and
     * ComposeboxEmbedderMixin to apply embedder-specific styling and themes.
     */
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #disableComposeboxAnimation_accessor_storage = false;
    get disableComposeboxAnimation() { return this.#disableComposeboxAnimation_accessor_storage; }
    set disableComposeboxAnimation(value) { this.#disableComposeboxAnimation_accessor_storage = value; }
    #applyContextButtonBackground_accessor_storage = false;
    get applyContextButtonBackground() { return this.#applyContextButtonBackground_accessor_storage; }
    set applyContextButtonBackground(value) { this.#applyContextButtonBackground_accessor_storage = value; }
    #isScreenshotMenuOpen_accessor_storage = false;
    get isScreenshotMenuOpen() { return this.#isScreenshotMenuOpen_accessor_storage; }
    set isScreenshotMenuOpen(value) { this.#isScreenshotMenuOpen_accessor_storage = value; }
    #isContextMenuOpen_accessor_storage = false;
    get isContextMenuOpen() { return this.#isContextMenuOpen_accessor_storage; }
    set isContextMenuOpen(value) { this.#isContextMenuOpen_accessor_storage = value; }
    #energyEffectAnimationEnabled_accessor_storage = getLoadTimeBoolean('composeboxEnergyEffectAnimationEnabled', true);
    get energyEffectAnimationEnabled() { return this.#energyEffectAnimationEnabled_accessor_storage; }
    set energyEffectAnimationEnabled(value) { this.#energyEffectAnimationEnabled_accessor_storage = value; }
    #submitButtonIconType_accessor_storage = SubmitButtonIconType.FORWARD;
    get submitButtonIconType() { return this.#submitButtonIconType_accessor_storage; }
    set submitButtonIconType(value) { this.#submitButtonIconType_accessor_storage = value; }
    #clearAllInputsWhenSubmittingQuery_accessor_storage = true;
    // Because Omnibox Everywhere keeps its WebContents alive in the background
    // across hide/show cycles, clear all inputs and attachments upon query
    // submission so subsequent invocations start fresh.
    get clearAllInputsWhenSubmittingQuery() { return this.#clearAllInputsWhenSubmittingQuery_accessor_storage; }
    set clearAllInputsWhenSubmittingQuery(value) { this.#clearAllInputsWhenSubmittingQuery_accessor_storage = value; }
    onVoiceSearchButtonClick() {
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
        const anchor = e.currentTarget;
        const rect = anchor.getBoundingClientRect();
        this.searchboxHandler_.showScreenshotMenu({
            x: Math.round(rect.left),
            y: Math.round(rect.top),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        });
    }
    onContextMenuEntrypointClick_(e) {
        this.isContextMenuOpen = true;
        const rect = e?.detail?.anchorRect ||
            this.getContextEntrypointElement()?.getBoundingClientRect();
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
    webuiOmniboxSimplificationEnabled_ = getLoadTimeBoolean('webuiOmniboxSimplificationEnabled', false);
    pageHandler_;
    searchboxCallbackRouter_;
    searchboxHandler_;
    glowAnimationRafId_ = null;
    glowAnimationTimeoutId_ = null;
    constructor() {
        super();
        this.pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
        this.searchboxCallbackRouter_ =
            ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.isPendingScreenshot) {
            this.playGlowAnimation();
            this.refreshTabSuggestions(/*forceRefresh=*/ true);
            // Because Omnibox Everywhere sets `searchbox-next-enabled`, the mixin's
            // default `queryZpsOnLoad` in connectedCallback is bypassed. Explicitly
            // query autocomplete here to populate zero-prefix suggestions when
            // opening or re-opening Composebox with an empty query.
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        this.searchboxListenerIds.push(this.getSearchboxCallbackRouter().onScreenshotMenuClosed.addListener(() => {
            this.isScreenshotMenuOpen = false;
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.glowAnimationRafId_ !== null) {
            cancelAnimationFrame(this.glowAnimationRafId_);
            this.glowAnimationRafId_ = null;
        }
        if (this.glowAnimationTimeoutId_ !== null) {
            clearTimeout(this.glowAnimationTimeoutId_);
            this.glowAnimationTimeoutId_ = null;
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('inputState')) {
            const inToolMode = this.inputState?.activeTool !== ToolMode.kUnspecified;
            this.applyContextButtonBackground =
                this.webuiOmniboxSimplificationEnabled_ && !inToolMode;
        }
        if (changedProperties.has('isPendingScreenshot')) {
            if (this.isPendingScreenshot) {
                this.showDropdown = false;
                this.result = null;
            }
            else {
                this.showDropdown = this.computeShowDropdown();
            }
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.focusInput();
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
    getFileInputsElement() {
        return this.shouldDisableFileInputs() ? null : this.$.fileInputs;
    }
    shouldHideDropdown() {
        if (this.isPendingScreenshot) {
            return true;
        }
        return super.shouldHideDropdown();
    }
    computeShowDropdown() {
        return this.isContextMenuOpen || super.computeShowDropdown();
    }
    onAutocompleteResultChanged(result) {
        if (this.isPendingScreenshot) {
            // Suppress stale / premature autocomplete results from the previous
            // omnibox session while screenshot capture is pending.
            return;
        }
        super.onAutocompleteResultChanged(result);
    }
    addFileContextFromBrowser(uuid, fileInfo) {
        const wasPendingScreenshot = this.isPendingScreenshot;
        this.isPendingScreenshot = false;
        super.addFileContextFromBrowser(uuid, fileInfo);
        if (wasPendingScreenshot) {
            this.playGlowAnimation();
            this.refreshTabSuggestions(/*forceRefresh=*/ true);
            this.queryAutocomplete(/* clearMatches= */ true);
        }
    }
    onInputInput(e) {
        this.isPendingScreenshot = false;
        super.onInputInput(e);
    }
    onScreenshotCaptureCancelled() {
        this.isPendingScreenshot = false;
        this.refreshTabSuggestions(/*forceRefresh=*/ true);
        this.queryAutocomplete(/* clearMatches= */ true);
    }
    onContextMenuOpened() {
        super.onContextMenuOpened();
        this.showDropdown = this.computeShowDropdown();
    }
    async onContextMenuClosed() {
        this.isContextMenuOpen = false;
        await super.onContextMenuClosed();
        this.showDropdown = this.computeShowDropdown();
    }
    async keepMenuOpenForMultiSelection() {
        // Omnibox Everywhere uses a native Views context menu rather than an
        // embedded WebUI menu on the entrypoint button.
    }
    shouldShowDivider() {
        if (this.searchboxLayoutMode === 'TallBottomContext' &&
            !this.showFileCarousel) {
            return false;
        }
        return super.shouldShowDivider();
    }
    /**
     * Enables handling of Fusebox suggestion actions (e.g. contextual tool
     * suggestions like "Turn it into a graphic novel illustration" in image mode)
     * so clicking a suggestion chip fills the prompt into the Composebox rather
     * than falling through to standard URL navigation.
     */
    shouldHandleSuggestionFuseboxActions() {
        return true;
    }
    deleteFile(uuidToDelete, fromUserAction) {
        const file = super.deleteFile(uuidToDelete, fromUserAction);
        if (!file) {
            return null;
        }
        // Refresh autocomplete suggestions when a context chip is removed by the
        // user so stale contextual matches do not linger in the popup dropdown.
        //
        // TODO(b/562109233): Move this logic to the mixin.
        this.queryAutocomplete(/* clearMatches= */ true);
        return file;
    }
    onContextualInputStatusChanged(token, status, errorType) {
        super.onContextualInputStatusChanged(token, status, errorType);
        // When a tab/file context is unselected or removed via the browser-side
        // context menu, C++ sends `kUploadReplaced`. Omnibox Everywhere needs to
        // explicitly query autocomplete with `clearMatches = true` to refresh
        // suggestions so stale contextual results for the unselected context do
        // not linger. We keep this behavior specific to Omnibox Everywhere to avoid
        // unintentionally triggering re-queries or disrupting other consumers
        // (such as NTP or Lens) that are not reinvoked in the same manner when a
        // new tab or context is added or removed.
        if (status === ContextUploadStatus.kUploadReplaced) {
            this.queryAutocomplete(/* clearMatches= */ true);
        }
    }
    selectFirstMatch() {
        if (this.result?.matches && this.result.matches.length > 0 &&
            this.result.matches[0]?.allowedToBeDefaultMatch &&
            this.selectedMatchIndex !== -1) {
            this.getDropdownElement().selectFirst();
        }
    }
    submitQuery() {
        super.submitQuery();
    }
    hasValidQuery() {
        // If there is at least one file that supports unimodal search, query is
        // valid.
        if (this.attachedContext.size > 0 &&
            Array.from(this.attachedContext.values())
                .some(file => file.supportsUnimodal)) {
            return true;
        }
        // If an autocomplete match is selected, it's a valid query.
        if (this.selectedMatchIndex >= 0 && !!this.result) {
            return true;
        }
        if (this.input.trim().length > 0) {
            return true;
        }
        return false;
    }
    setInputText(text) {
        this.input = text;
        const inputElem = this.getInputElement();
        if (inputElem) {
            inputElem.input = text;
        }
    }
    playGlowAnimation(timeoutMs = 1000) {
        if (this.glowAnimationRafId_ !== null) {
            cancelAnimationFrame(this.glowAnimationRafId_);
            this.glowAnimationRafId_ = null;
        }
        if (this.glowAnimationTimeoutId_ !== null) {
            clearTimeout(this.glowAnimationTimeoutId_);
            this.glowAnimationTimeoutId_ = null;
        }
        this.animationState = GlowAnimationState.NONE;
        this.glowAnimationRafId_ = requestAnimationFrame(() => {
            this.glowAnimationRafId_ = null;
            this.animationState = GlowAnimationState.EXPANDING;
            this.glowAnimationTimeoutId_ = setTimeout(() => {
                if (this.animationState === GlowAnimationState.EXPANDING) {
                    this.animationState = GlowAnimationState.NONE;
                }
                this.glowAnimationTimeoutId_ = null;
            }, timeoutMs);
        });
    }
    handleEscapeKeyLogic() {
        this.onCancelClick();
    }
}
customElements.define(OmniboxEverywhereComposeboxElement.is, OmniboxEverywhereComposeboxElement);
