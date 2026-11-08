// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Must be imported first so that `loadTimeData` is populated before any
// element below reads from it.
import '/strings.m.js';
import '/ntp/action_chips/action_chips.js';
import '/ntp/doodle_share_dialog.js';
import '/ntp/lens_upload_dialog.js';
import '/ntp/logo.js';
import '/ntp/ntp_composebox.js';
import '/ntp/ntp_searchbox.js';
import 'chrome://resources/cr_components/composebox/composebox_voice_search.js';
import 'chrome://resources/cr_components/search/animated_glow.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { ActionChipsRetrievalState } from '/ntp/action_chips/action_chips_proxy.js';
import { recordBoolean } from '/ntp/metrics_utils.js';
import { browserProxyFactory } from '/ntp/new_tab_page.mojom-webui.js';
import { WindowProxy } from '/ntp/window_proxy.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { GlifAnimationState } from 'chrome://resources/cr_components/composebox/common.js';
import { SearchboxBrowserProxy } from 'chrome://resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { hexColorToSkColor, skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SearchboxOverride } from 'chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
// Same breakpoint as chrome://new-tab-page: 900px ~= 561px (max value for
// --ntp-search-box-width) * 1.5 + some margin.
const realboxCanShowSecondarySideMediaQueryList = window.matchMedia('(min-width: 900px)');
// Same voice search parameters as chrome://new-tab-page.
const VOICE_QUERY_LENGTH_LIMIT = 120;
const VOICE_AUTO_SUBMIT_IDLE_TIMEOUT_MS = 3000;
const VOICE_MANUAL_SUBMIT_IDLE_TIMEOUT_MS = 10000;
const PERMISSION_PROMPT_CSS_CLASS = 'permission-prompt-showing';
// The extension bundles/imports every NTP element it uses upfront in app.js
// and has no lazy_load.js, so ensureLazyLoaded() is a no-op.
class NtpExtensionWindowProxy extends WindowProxy {
    ensureLazyLoaded() {
        return Promise.resolve();
    }
}
WindowProxy.setInstance(new NtpExtensionWindowProxy());
const NtpExtensionAppElementBase = I18nMixinLit(CrLitElement);
// A minimal New Tab Page hosted in a component extension. Reuses the
// <ntp-logo> (Google logo / doodle), <ntp-searchbox> (realbox),
// <ntp-composebox>, <ntp-action-chips> and <ntp-lens-upload-dialog> elements
// from chrome://new-tab-page. The realbox / composebox / action chips / voice
// search / Lens orchestration below mirrors
// chrome/browser/resources/new_tab_page/app.ts; keep the two in sync.
export class NtpExtensionAppElement extends NtpExtensionAppElementBase {
    static get is() {
        return 'ntp-extension-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            realboxCanShowSecondarySide: { type: Boolean, reflect: true },
            theme_: { type: Object },
            colorSourceIsBaseline_: { type: Boolean },
            realboxShown_: { type: Boolean },
            composeButtonEnabled_: { type: Boolean },
            composeboxEnabled_: { type: Boolean },
            composeboxState_: { type: Object },
            showComposebox_: { type: Boolean, reflect: true },
            caretAnimationsEnabled_: { type: Boolean },
            usePecApi_: { type: Boolean },
            smartTabSharingVisible_: { type: Boolean },
            contextManagementInComposeboxEnabled_: { type: Boolean },
            multiLineEnabled_: { type: Boolean },
            ntpRealboxNextEnabled_: { type: Boolean, reflect: true },
            searchboxCyclingPlaceholders_: { type: Boolean },
            ntpNextFeaturesEnabled_: { type: Boolean },
            isActionChipsVisible_: { type: Boolean },
            containerFocused_: { type: Boolean },
            showScrim_: { type: Boolean, reflect: true },
            undoToastMessage_: { type: String },
            showLensUploadDialog_: { type: Boolean },
            showVoiceSearch_: { type: Boolean, reflect: true },
            hasVoiceSearchError_: { type: Boolean },
            voiceSearchTranscript_: { type: String },
            voiceSearchReceivedSpeech_: { type: Boolean },
            voiceSearchListening_: { type: Boolean },
            voiceSearchLiveTranscriptionEnabled_: { type: Boolean },
            voiceSearchAutoEndpointEnabled_: { type: Boolean },
            voiceSearchHelperTextEnabled_: { type: Boolean },
            androidSpeechRecognition_: { type: Boolean },
            voiceQueryLengthLimit_: { type: Number },
            voiceAutoSubmitIdleTimeoutMs_: { type: Number },
            voiceManualSubmitIdleTimeoutMs_: { type: Number },
            searchboxCallbackRouter_: { type: Object },
            contextMenuGlifAnimationState_: { type: String },
            energyEffectEnabled_: { type: Boolean, reflect: true },
            energyEffectAnimationEnabled_: { type: Boolean, reflect: true },
            energyEffectVariant_: { type: String, reflect: true },
        };
    }
    #realboxCanShowSecondarySide_accessor_storage = realboxCanShowSecondarySideMediaQueryList.matches;
    get realboxCanShowSecondarySide() { return this.#realboxCanShowSecondarySide_accessor_storage; }
    set realboxCanShowSecondarySide(value) { this.#realboxCanShowSecondarySide_accessor_storage = value; }
    #theme__accessor_storage = null;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #colorSourceIsBaseline__accessor_storage = false;
    get colorSourceIsBaseline_() { return this.#colorSourceIsBaseline__accessor_storage; }
    set colorSourceIsBaseline_(value) { this.#colorSourceIsBaseline__accessor_storage = value; }
    #realboxShown__accessor_storage = false;
    get realboxShown_() { return this.#realboxShown__accessor_storage; }
    set realboxShown_(value) { this.#realboxShown__accessor_storage = value; }
    #composeButtonEnabled__accessor_storage = loadTimeData.getBoolean('searchboxShowComposeEntrypoint');
    get composeButtonEnabled_() { return this.#composeButtonEnabled__accessor_storage; }
    set composeButtonEnabled_(value) { this.#composeButtonEnabled__accessor_storage = value; }
    #composeboxEnabled__accessor_storage = loadTimeData.getBoolean('searchboxShowComposebox');
    get composeboxEnabled_() { return this.#composeboxEnabled__accessor_storage; }
    set composeboxEnabled_(value) { this.#composeboxEnabled__accessor_storage = value; }
    #composeboxState__accessor_storage = null;
    get composeboxState_() { return this.#composeboxState__accessor_storage; }
    set composeboxState_(value) { this.#composeboxState__accessor_storage = value; }
    #showComposebox__accessor_storage = false;
    get showComposebox_() { return this.#showComposebox__accessor_storage; }
    set showComposebox_(value) { this.#showComposebox__accessor_storage = value; }
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
    #multiLineEnabled__accessor_storage = loadTimeData.getBoolean('multiLineEnabled');
    get multiLineEnabled_() { return this.#multiLineEnabled__accessor_storage; }
    set multiLineEnabled_(value) { this.#multiLineEnabled__accessor_storage = value; }
    #ntpRealboxNextEnabled__accessor_storage = loadTimeData.getBoolean('ntpRealboxNextEnabled');
    get ntpRealboxNextEnabled_() { return this.#ntpRealboxNextEnabled__accessor_storage; }
    set ntpRealboxNextEnabled_(value) { this.#ntpRealboxNextEnabled__accessor_storage = value; }
    #searchboxCyclingPlaceholders__accessor_storage = loadTimeData.getBoolean('searchboxCyclingPlaceholders');
    get searchboxCyclingPlaceholders_() { return this.#searchboxCyclingPlaceholders__accessor_storage; }
    set searchboxCyclingPlaceholders_(value) { this.#searchboxCyclingPlaceholders__accessor_storage = value; }
    #ntpNextFeaturesEnabled__accessor_storage = loadTimeData.getBoolean('ntpNextFeaturesEnabled');
    get ntpNextFeaturesEnabled_() { return this.#ntpNextFeaturesEnabled__accessor_storage; }
    set ntpNextFeaturesEnabled_(value) { this.#ntpNextFeaturesEnabled__accessor_storage = value; }
    #isActionChipsVisible__accessor_storage = loadTimeData.getBoolean('actionChipsEnabled');
    get isActionChipsVisible_() { return this.#isActionChipsVisible__accessor_storage; }
    set isActionChipsVisible_(value) { this.#isActionChipsVisible__accessor_storage = value; }
    #containerFocused__accessor_storage = false;
    get containerFocused_() { return this.#containerFocused__accessor_storage; }
    set containerFocused_(value) { this.#containerFocused__accessor_storage = value; }
    #showScrim__accessor_storage = false;
    get showScrim_() { return this.#showScrim__accessor_storage; }
    set showScrim_(value) { this.#showScrim__accessor_storage = value; }
    #undoToastMessage__accessor_storage = '';
    get undoToastMessage_() { return this.#undoToastMessage__accessor_storage; }
    set undoToastMessage_(value) { this.#undoToastMessage__accessor_storage = value; }
    #showLensUploadDialog__accessor_storage = false;
    get showLensUploadDialog_() { return this.#showLensUploadDialog__accessor_storage; }
    set showLensUploadDialog_(value) { this.#showLensUploadDialog__accessor_storage = value; }
    #showVoiceSearch__accessor_storage = false;
    get showVoiceSearch_() { return this.#showVoiceSearch__accessor_storage; }
    set showVoiceSearch_(value) { this.#showVoiceSearch__accessor_storage = value; }
    #hasVoiceSearchError__accessor_storage = false;
    get hasVoiceSearchError_() { return this.#hasVoiceSearchError__accessor_storage; }
    set hasVoiceSearchError_(value) { this.#hasVoiceSearchError__accessor_storage = value; }
    #voiceSearchTranscript__accessor_storage = '';
    get voiceSearchTranscript_() { return this.#voiceSearchTranscript__accessor_storage; }
    set voiceSearchTranscript_(value) { this.#voiceSearchTranscript__accessor_storage = value; }
    #voiceSearchReceivedSpeech__accessor_storage = false;
    get voiceSearchReceivedSpeech_() { return this.#voiceSearchReceivedSpeech__accessor_storage; }
    set voiceSearchReceivedSpeech_(value) { this.#voiceSearchReceivedSpeech__accessor_storage = value; }
    #voiceSearchListening__accessor_storage = false;
    get voiceSearchListening_() { return this.#voiceSearchListening__accessor_storage; }
    set voiceSearchListening_(value) { this.#voiceSearchListening__accessor_storage = value; }
    #voiceSearchLiveTranscriptionEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled');
    get voiceSearchLiveTranscriptionEnabled_() { return this.#voiceSearchLiveTranscriptionEnabled__accessor_storage; }
    set voiceSearchLiveTranscriptionEnabled_(value) { this.#voiceSearchLiveTranscriptionEnabled__accessor_storage = value; }
    #voiceSearchAutoEndpointEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceRealboxAutoEndpointEnabled');
    get voiceSearchAutoEndpointEnabled_() { return this.#voiceSearchAutoEndpointEnabled__accessor_storage; }
    set voiceSearchAutoEndpointEnabled_(value) { this.#voiceSearchAutoEndpointEnabled__accessor_storage = value; }
    #voiceSearchHelperTextEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceRealboxHelperTextEnabled');
    get voiceSearchHelperTextEnabled_() { return this.#voiceSearchHelperTextEnabled__accessor_storage; }
    set voiceSearchHelperTextEnabled_(value) { this.#voiceSearchHelperTextEnabled__accessor_storage = value; }
    #androidSpeechRecognition__accessor_storage = loadTimeData.getBoolean('androidSpeechRecognition');
    // `true` only on Android, where voice search uses Android's speech
    // recognizer.
    get androidSpeechRecognition_() { return this.#androidSpeechRecognition__accessor_storage; }
    set androidSpeechRecognition_(value) { this.#androidSpeechRecognition__accessor_storage = value; }
    #voiceQueryLengthLimit__accessor_storage = VOICE_QUERY_LENGTH_LIMIT;
    get voiceQueryLengthLimit_() { return this.#voiceQueryLengthLimit__accessor_storage; }
    set voiceQueryLengthLimit_(value) { this.#voiceQueryLengthLimit__accessor_storage = value; }
    #voiceAutoSubmitIdleTimeoutMs__accessor_storage = VOICE_AUTO_SUBMIT_IDLE_TIMEOUT_MS;
    get voiceAutoSubmitIdleTimeoutMs_() { return this.#voiceAutoSubmitIdleTimeoutMs__accessor_storage; }
    set voiceAutoSubmitIdleTimeoutMs_(value) { this.#voiceAutoSubmitIdleTimeoutMs__accessor_storage = value; }
    #voiceManualSubmitIdleTimeoutMs__accessor_storage = VOICE_MANUAL_SUBMIT_IDLE_TIMEOUT_MS;
    get voiceManualSubmitIdleTimeoutMs_() { return this.#voiceManualSubmitIdleTimeoutMs__accessor_storage; }
    set voiceManualSubmitIdleTimeoutMs_(value) { this.#voiceManualSubmitIdleTimeoutMs__accessor_storage = value; }
    #searchboxCallbackRouter__accessor_storage;
    get searchboxCallbackRouter_() { return this.#searchboxCallbackRouter__accessor_storage; }
    set searchboxCallbackRouter_(value) { this.#searchboxCallbackRouter__accessor_storage = value; }
    #contextMenuGlifAnimationState__accessor_storage = GlifAnimationState.INELIGIBLE;
    get contextMenuGlifAnimationState_() { return this.#contextMenuGlifAnimationState__accessor_storage; }
    set contextMenuGlifAnimationState_(value) { this.#contextMenuGlifAnimationState__accessor_storage = value; }
    #energyEffectEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    get energyEffectEnabled_() { return this.#energyEffectEnabled__accessor_storage; }
    set energyEffectEnabled_(value) { this.#energyEffectEnabled__accessor_storage = value; }
    #energyEffectAnimationEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectAnimationEnabled');
    get energyEffectAnimationEnabled_() { return this.#energyEffectAnimationEnabled__accessor_storage; }
    set energyEffectAnimationEnabled_(value) { this.#energyEffectAnimationEnabled__accessor_storage = value; }
    #energyEffectVariant__accessor_storage = loadTimeData.getString('energyEffectVariant');
    get energyEffectVariant_() { return this.#energyEffectVariant__accessor_storage; }
    set energyEffectVariant_(value) { this.#energyEffectVariant__accessor_storage = value; }
    realboxContextMenuAnimationAllowed_ = false;
    contextMenuAnimationLimitingEnabled_ = loadTimeData.getBoolean('contextMenuAnimationLimitingEnabled');
    callbackRouter_;
    pageHandler_;
    eventTracker_ = new EventTracker();
    setThemeListenerId_ = null;
    setActionChipsVisibilityListenerId_ = null;
    undoToastCallback_ = null;
    voiceSearchActivatedByKeyboard_ = false;
    constructor() {
        super();
        this.callbackRouter_ = browserProxyFactory.getInstance().callbackRouter;
        this.pageHandler_ = browserProxyFactory.getInstance().handler;
        this.searchboxCallbackRouter_ =
            SearchboxBrowserProxy.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        ColorChangeUpdater.forDocument().start();
        this.setThemeListenerId_ =
            this.callbackRouter_.setTheme.addListener((theme) => {
                this.theme_ = theme;
            });
        this.setActionChipsVisibilityListenerId_ =
            this.callbackRouter_.setActionChipsVisibility.addListener((isVisible) => this.isActionChipsVisible_ = isVisible);
        this.eventTracker_.add(realboxCanShowSecondarySideMediaQueryList, 'change', (e) => {
            this.realboxCanShowSecondarySide = e.matches;
        });
        this.eventTracker_.add(window, 'keydown', (e) => this.onWindowKeydown_(e));
        if (this.composeButtonEnabled_) {
            recordBoolean('NewTabPage.ComposeEntrypoint.Shown', true);
            this.pageHandler_.incrementComposeButtonShownCount();
        }
        this.initializeContextMenuAnimationState_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const id of [this.setThemeListenerId_,
            this.setActionChipsVisibilityListenerId_]) {
            if (id !== null) {
                this.callbackRouter_.removeListener(id);
            }
        }
        this.setThemeListenerId_ = null;
        this.setActionChipsVisibilityListenerId_ = null;
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('theme_')) {
            this.colorSourceIsBaseline_ = !!this.theme_?.isBaseline;
        }
        // Do not show the realbox while the composebox or the Lens upload dialog
        // is showing.
        this.realboxShown_ =
            !!this.theme_ && !this.showComposebox_ && !this.showLensUploadDialog_;
        if (this.ntpRealboxNextEnabled_ && [
            'showComposebox_',
            'showLensUploadDialog_',
            'containerFocused_',
            'showVoiceSearch_',
        ].some(prop => changedPrivateProperties.has(prop))) {
            // As on chrome://new-tab-page, the scrim is shown while focus is within
            // the searchbox container, and kept while the composebox, the Lens
            // upload dialog or voice search is open so that a click outside of them
            // reaches the scrim's click handler.
            this.showScrim_ = this.showComposebox_ || this.showLensUploadDialog_ ||
                this.containerFocused_ || this.showVoiceSearch_;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('theme_') && this.theme_) {
            document.body.style.backgroundColor =
                skColorToRgba(this.theme_.backgroundColor);
            const logoColor = this.getLogoColor_();
            if (logoColor) {
                this.style.setProperty('--ntp-logo-color', skColorToRgba(logoColor));
            }
            else {
                this.style.removeProperty('--ntp-logo-color');
            }
        }
        if (changedPrivateProperties.has('showVoiceSearch_') &&
            this.showVoiceSearch_) {
            this.voiceSearchListening_ = true;
            this.voiceSearchReceivedSpeech_ = false;
            this.voiceSearchTranscript_ = '';
            const dialog = this.getVoiceSearchDialog_();
            assert(dialog);
            dialog.showModal();
            dialog.focus();
            const voiceSearch = this.getVoiceSearch_();
            assert(voiceSearch);
            voiceSearch.activatedByKeyboard = this.voiceSearchActivatedByKeyboard_;
            voiceSearch.start();
        }
    }
    onActionChipClick_(e) {
        if (!this.composeboxEnabled_) {
            // Enforce Composebox availability at the receiver even if an event
            // bypasses the Action Chips render gate.
            return;
        }
        const detail = e.detail;
        if (this.isUnsupportedSearchboxSurface_(detail.fuseboxAction)) {
            return;
        }
        this.pageHandler_.onContextualSearchIPHEngaged();
        if (this.hasRealboxOverride_(detail.fuseboxAction)) {
            this.getSearchbox_().handleFuseboxAction(detail.fuseboxAction);
            return;
        }
        this.openComposeboxForActionChip_(detail);
    }
    onActionChipsRetrievalStateChanged_(e) {
        if (!this.realboxContextMenuAnimationAllowed_) {
            this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
            return;
        }
        if (this.energyEffectAnimationEnabled_) {
            return;
        }
        // REQUESTED => SPINNER_ONLY, UPDATED => STARTED. Never go back from (or
        // restart) STARTED / FINISHED. See chrome://new-tab-page's app.ts.
        if ([GlifAnimationState.STARTED, GlifAnimationState.FINISHED].every(s => s !== this.contextMenuGlifAnimationState_)) {
            const state = e.detail.state;
            if (state === ActionChipsRetrievalState.REQUESTED) {
                this.contextMenuGlifAnimationState_ = GlifAnimationState.SPINNER_ONLY;
            }
            else if (state === ActionChipsRetrievalState.UPDATED) {
                this.contextMenuGlifAnimationState_ = GlifAnimationState.STARTED;
                this.pageHandler_.recordRealboxContextMenuAnimationImpression(true);
            }
        }
    }
    onContextMenuEntrypointClick_() {
        this.pageHandler_.onContextualSearchIPHEngaged();
    }
    onOpenComposebox_(e) {
        this.composeboxState_ = e.detail;
        this.ensureComposeboxOpen_();
    }
    onOpenLensSearch_() {
        this.showLensUploadDialog_ = true;
    }
    onCloseLensSearch_() {
        this.showLensUploadDialog_ = false;
    }
    // Voice search always uses the inline <cr-composebox-voice-search>, which
    // logs the voice search metrics, as does the composebox's voice search.
    // Unlike chrome://new-tab-page, the extension doesn't fall back to
    // <ntp-voice-search-overlay> or log the legacy NewTabPage.VoiceActions
    // metrics itself when the voice search coherence experiment is disabled.
    onOpenVoiceSearch_() {
        this.openVoiceSearch_(/*activatedByKeyboard=*/ false);
    }
    onVoiceSearchClose_() {
        const dialog = this.getVoiceSearchDialog_();
        if (dialog && dialog.open) {
            return;
        }
        this.showVoiceSearch_ = false;
        this.hasVoiceSearchError_ = false;
        this.voiceSearchListening_ = false;
    }
    onVoiceSearchDialogClick_(e) {
        const dialog = e.currentTarget;
        if (e.target === dialog) {
            dialog.close();
        }
    }
    onVoicePermissionChanged_(e) {
        e.preventDefault();
        const isOpened = e.detail.isOpened;
        this.voiceSearchListening_ =
            !isOpened && this.showVoiceSearch_ && !this.hasVoiceSearchError_;
        const glow = this.shadowRoot.querySelector('#voiceSearchGlow');
        glow?.classList.toggle(PERMISSION_PROMPT_CSS_CLASS, isOpened);
        this.getVoiceSearch_()?.classList.toggle(PERMISSION_PROMPT_CSS_CLASS, isOpened);
    }
    onVoiceSearchCancel_() {
        this.closeVoiceSearch_();
    }
    onVoiceSearchError_() {
        if (this.showVoiceSearch_) {
            this.hasVoiceSearchError_ = true;
        }
    }
    onVoiceSearchRestart_() {
        this.hasVoiceSearchError_ = false;
        this.voiceSearchListening_ = true;
        this.voiceSearchReceivedSpeech_ = false;
        this.voiceSearchTranscript_ = '';
    }
    onVoiceSearchTranscriptUpdate_(e) {
        this.voiceSearchTranscript_ = e.detail;
    }
    onVoiceSearchSpeechReceived_() {
        this.voiceSearchReceivedSpeech_ = true;
    }
    onVoiceSearchFinalResult_(e) {
        this.closeVoiceSearch_();
        const searchParams = new URLSearchParams();
        searchParams.append('q', e.detail);
        searchParams.append('gs_ivs', '1');
        searchParams.append('sourceid', 'chrome');
        const queryUrl = new URL('/search', loadTimeData.getString('googleBaseUrl'));
        queryUrl.search = searchParams.toString();
        WindowProxy.getInstance().navigate(queryUrl.href);
    }
    onVoiceSearchRecordingStopped_(e) {
        this.closeVoiceSearch_();
        const query = e.detail;
        if (query && query.trim().length > 0) {
            const searchbox = this.getSearchbox_();
            searchbox.setInputText(query);
            searchbox.focusInput();
            searchbox.queryAutocomplete(query, false, false);
        }
    }
    showVoiceSearchGlow_() {
        if (this.hasVoiceSearchError_) {
            return false;
        }
        // As on chrome://new-tab-page.
        return !this.voiceSearchLiveTranscriptionEnabled_ ||
            this.voiceSearchHelperTextEnabled_;
    }
    onActionChipsDisabled_(e) {
        this.undoToastCallback_ = e.detail.undo;
        this.undoToastMessage_ = e.detail.message;
        this.shadowRoot.querySelector('#undoToast').show();
    }
    onUndoButtonClick_() {
        this.undoToastCallback_?.();
        this.undoToastCallback_ = null;
        this.shadowRoot.querySelector('#undoToast').hide();
    }
    onComposeboxContextMenuOpened_() {
        this.getSearchbox_().closeContextMenu();
    }
    onCloseComposebox_(e) {
        if (!this.showComposebox_) {
            return;
        }
        const searchbox = this.getSearchbox_();
        searchbox.closeContextMenu();
        // Carry any text typed in the composebox back to the realbox.
        const composeboxText = e.detail.composeboxText;
        if (composeboxText && composeboxText.trim()) {
            searchbox.setInputText(composeboxText);
        }
        const composebox = this.getComposebox_();
        assert(composebox);
        composebox.input = '';
        composebox.resetModes();
        if (this.ntpRealboxNextEnabled_) {
            composebox.closeDropdown();
        }
        this.showComposebox_ = false;
    }
    onScrimClick_() {
        if (this.showComposebox_) {
            const composebox = this.getComposebox_();
            assert(composebox);
            this.onCloseComposebox_(new CustomEvent('close-composebox', { detail: { composeboxText: composebox.input } }));
        }
        if (this.showLensUploadDialog_) {
            this.onCloseLensSearch_();
        }
        if (this.showVoiceSearch_) {
            const dialog = this.getVoiceSearchDialog_();
            if (dialog && dialog.open) {
                dialog.close();
            }
        }
        this.containerFocused_ = false;
    }
    onSearchboxContainerFocusin_() {
        if (this.ntpRealboxNextEnabled_) {
            this.containerFocused_ = true;
        }
    }
    onSearchboxContainerFocusout_() {
        if (this.ntpRealboxNextEnabled_) {
            this.containerFocused_ =
                this.shadowRoot.getElementById('searchboxContainer').matches(':focus-within');
        }
    }
    // As on chrome://new-tab-page, the logo is single-colored, white by default,
    // in dark mode.
    isLogoSingleColored_() {
        return !!this.theme_ && (!!this.theme_.logoColor || this.theme_.isDark);
    }
    getLogoColor_() {
        if (!this.theme_) {
            return null;
        }
        return this.theme_.logoColor ||
            (this.theme_.isDark ? hexColorToSkColor('#ffffff') : null);
    }
    isThemeDark_() {
        return !!this.theme_?.isDark;
    }
    showActionChips_() {
        return this.ntpNextFeaturesEnabled_ && this.isActionChipsVisible_ &&
            this.composeboxEnabled_;
    }
    showActionChipsBackground_() {
        return !!this.theme_ &&
            (!!this.theme_.backgroundImage || !this.theme_.isGm3);
    }
    async openComposeboxForActionChip_(detail) {
        this.composeboxState_ = null;
        this.ensureComposeboxOpen_();
        await this.updateComplete;
        const composebox = this.getComposebox_();
        if (composebox) {
            await composebox.handleFuseboxAction(detail);
        }
    }
    // The Composebox is the only searchbox surface supported for action chip
    // clicks; an explicit request for a different surface is a no-op. An action
    // with the override missing keeps the compatible open-Composebox behavior.
    isUnsupportedSearchboxSurface_(action) {
        if (!action || action.searchboxOverride === null) {
            return false;
        }
        return action.searchboxOverride === SearchboxOverride.kUnspecified;
    }
    hasRealboxOverride_(action) {
        return !!action && action.searchboxOverride === SearchboxOverride.kRealbox;
    }
    // Opens the composebox, or focuses its input if it is already open.
    ensureComposeboxOpen_() {
        if (!this.showComposebox_) {
            this.showComposebox_ = true;
        }
        else {
            this.getComposebox_()?.focusInput();
        }
    }
    async initializeContextMenuAnimationState_() {
        if (!this.ntpRealboxNextEnabled_) {
            this.realboxContextMenuAnimationAllowed_ = false;
            this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
            return;
        }
        let canShow = true;
        if (this.contextMenuAnimationLimitingEnabled_) {
            ({ canShow } =
                await this.pageHandler_.canShowRealboxContextMenuAnimation());
        }
        this.realboxContextMenuAnimationAllowed_ = canShow;
        if (!canShow) {
            this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
            this.pageHandler_.recordRealboxContextMenuAnimationImpression(false);
            return;
        }
        if (this.energyEffectAnimationEnabled_) {
            this.contextMenuGlifAnimationState_ = GlifAnimationState.STARTED;
            this.pageHandler_.recordRealboxContextMenuAnimationImpression(true);
            return;
        }
        // Otherwise the animation is driven by the action chips retrieval state.
        this.contextMenuGlifAnimationState_ =
            this.ntpNextFeaturesEnabled_ && this.isActionChipsVisible_ ?
                GlifAnimationState.SPINNER_ONLY :
                GlifAnimationState.INELIGIBLE;
    }
    onWindowKeydown_(e) {
        if (e.key === 'Escape' && this.showComposebox_) {
            const composebox = this.getComposebox_();
            if (composebox) {
                composebox.handleEscapeKeyLogic();
                e.preventDefault();
                return;
            }
        }
        let ctrlKeyPressed = e.ctrlKey;
        // 
        // Ctrl/Cmd+Shift+. opens voice search, as on chrome://new-tab-page.
        if (ctrlKeyPressed && e.code === 'Period' && e.shiftKey) {
            this.openVoiceSearch_(/*activatedByKeyboard=*/ true);
        }
    }
    openVoiceSearch_(activatedByKeyboard) {
        this.voiceSearchActivatedByKeyboard_ = activatedByKeyboard;
        this.showVoiceSearch_ = true;
    }
    closeVoiceSearch_() {
        this.getVoiceSearchDialog_()?.close();
        this.onVoiceSearchClose_();
    }
    getVoiceSearchDialog_() {
        return this.shadowRoot.querySelector('#voiceSearchDialog');
    }
    getVoiceSearch_() {
        return this.shadowRoot.querySelector('#voiceSearch');
    }
    getSearchbox_() {
        const searchbox = this.shadowRoot.querySelector('#searchbox');
        assert(searchbox);
        return searchbox;
    }
    getComposebox_() {
        return this.shadowRoot.querySelector('#composebox');
    }
}
customElements.define(NtpExtensionAppElement.is, NtpExtensionAppElement);
