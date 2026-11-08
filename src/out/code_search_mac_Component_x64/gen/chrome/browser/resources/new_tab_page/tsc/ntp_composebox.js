// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/composebox/composebox_aim_button.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_components/localized_link/localized_link.js';
import { getLoadTimeBoolean, GlifAnimationState } from '//resources/cr_components/composebox/common.js';
import { ComposeboxEmbedderMixin } from '//resources/cr_components/composebox/composebox_mixin.js';
import { ComposeboxProxyImpl } from '//resources/cr_components/composebox/composebox_proxy.js';
import { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SearchboxTutorial } from '//resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { getCss } from './ntp_composebox.css.js';
import { getHtml } from './ntp_composebox.html.js';
export class NtpComposeboxElement extends ComposeboxEmbedderMixin(CrLitElement) {
    static get is() {
        return 'ntp-composebox';
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
            glifAnimationState: {
                reflect: true,
                type: String,
            },
            focused: { type: Boolean },
            /*
            `expanding_` property is used in composebox.css styles. It is added
            so that the imported styles work well. Remove this property once each
            embedder has its own styles.
            */
            expanding_: {
                reflect: true,
                type: Boolean,
            },
            shouldRemainFolded_: {
                reflect: true,
                type: Boolean,
            },
            persistentAimButtonEnabled_: {
                type: Boolean,
                reflect: true,
            },
            showAimButtonExitIcon_: { type: Boolean },
        };
    }
    #entrypointName_accessor_storage = 'Realbox';
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #glifAnimationState_accessor_storage = GlifAnimationState.INELIGIBLE;
    get glifAnimationState() { return this.#glifAnimationState_accessor_storage; }
    set glifAnimationState(value) { this.#glifAnimationState_accessor_storage = value; }
    #focused_accessor_storage = true;
    get focused() { return this.#focused_accessor_storage; }
    set focused(value) { this.#focused_accessor_storage = value; }
    searchboxCallbackRouter_;
    pageHandler_;
    searchboxHandler_;
    eventTracker_ = new EventTracker();
    outsideClickEnabled_ = getLoadTimeBoolean('composeboxRealboxOutsideClick', false);
    #expanding__accessor_storage = true;
    get expanding_() { return this.#expanding__accessor_storage; }
    set expanding_(value) { this.#expanding__accessor_storage = value; }
    #shouldRemainFolded__accessor_storage = true;
    get shouldRemainFolded_() { return this.#shouldRemainFolded__accessor_storage; }
    set shouldRemainFolded_(value) { this.#shouldRemainFolded__accessor_storage = value; }
    #persistentAimButtonEnabled__accessor_storage = getLoadTimeBoolean('composeboxPersistentAimButton', false);
    get persistentAimButtonEnabled_() { return this.#persistentAimButtonEnabled__accessor_storage; }
    set persistentAimButtonEnabled_(value) { this.#persistentAimButtonEnabled__accessor_storage = value; }
    #showAimButtonExitIcon__accessor_storage = getLoadTimeBoolean('composeboxPersistentAimButtonWithX', false);
    get showAimButtonExitIcon_() { return this.#showAimButtonExitIcon__accessor_storage; }
    set showAimButtonExitIcon_(value) { this.#showAimButtonExitIcon__accessor_storage = value; }
    get keepMenuOpenOnTabSelect() {
        return getLoadTimeBoolean('keepMenuOpenOnTabSelectForRealbox', false);
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
    getFileInputsElement() {
        return this.shouldDisableFileInputs() ? null : this.$.fileInputs;
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
        this.animationState = GlowAnimationState.EXPANDING;
        this.focusInput();
        this.refreshTabSuggestions(/*forceRefresh=*/ true);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (this.outsideClickEnabled_ && changedProperties.has('focused')) {
            this.showDropdown = this.computeShowDropdown();
        }
        this.shouldRemainFolded_ = this.computeShouldRemainFolded();
    }
    computeShouldRemainFolded() {
        if (this.errorMessage) {
            return false;
        }
        if (this.hasFiles()) {
            return false;
        }
        if (this.inToolMode) {
            return false;
        }
        if (this.outsideClickEnabled_) {
            if (this.input) {
                return false;
            }
            if ((this.result?.matches?.length ?? 0) > 0 && this.focused) {
                return false;
            }
        }
        else if ((this.result?.matches?.length ?? 0) > 0) {
            return false;
        }
        if (this.hasTabs()) {
            return false;
        }
        return true;
    }
    shouldShowDivider() {
        if (this.hasTabs() && !this.hasNonTabFiles()) {
            return this.showDropdown;
        }
        return super.shouldShowDivider();
    }
    shouldHandleSuggestionFuseboxActions() {
        return true;
    }
    shouldWaitForDelayedTabContext() {
        return true;
    }
    deleteFile(uuidToDelete, fromUserAction) {
        const file = super.deleteFile(uuidToDelete, fromUserAction);
        if (file) {
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        return file;
    }
    async handleFuseboxAction(request) {
        if (this.energyEffectAnimationEnabled &&
            request.fuseboxAction?.searchboxTutorial ===
                SearchboxTutorial.kGlowPlusButton) {
            this.glifAnimationState = GlifAnimationState.INELIGIBLE;
            requestAnimationFrame(() => {
                this.glifAnimationState = GlifAnimationState.STARTED;
            });
        }
        await super.handleFuseboxAction(request);
    }
    computeShowDropdown() {
        if (this.outsideClickEnabled_ && !this.focused) {
            return false;
        }
        return super.computeShowDropdown();
    }
}
customElements.define(NtpComposeboxElement.is, NtpComposeboxElement);
