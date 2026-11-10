// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './logo.js';
import './ntp_searchbox.js';
import './left_hand_side.js';
import '/strings.m.js';
import { SearchboxBrowserProxy } from '//resources/cr_components/searchbox/searchbox_browser_proxy.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { GlifAnimationState, VoiceSearchAction as ComposeVoiceSearchAction } from 'chrome://resources/cr_components/composebox/common.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { Command } from 'chrome://resources/js/browser_command.mojom-webui.js';
import { BrowserCommandProxy } from 'chrome://resources/js/browser_command/browser_command_proxy.js';
import { hexColorToSkColor, skColorToRgba } from 'chrome://resources/js/color_utils.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SearchboxOverride } from 'chrome://resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import { ModelMode, ToolMode } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { ActionChipsRetrievalState } from './action_chips/action_chips_proxy.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BackgroundManager } from './background_manager.js';
import { browserProxyFactory as customizeButtonsProxyFactory, SidePanelOpenTrigger } from './customize_buttons.mojom-webui.js';
import { CustomizeChromeSection } from './customize_chrome.mojom-webui.js';
import { CustomizeDialogPage } from './customize_dialog_types.js';
import { recordBoolean, recordDuration, recordEnumeration, recordLinearValue, recordLoadDuration, recordSparseValueWithPersistentHash, recordVoiceAction, VoiceAction } from './metrics_utils.js';
import { ParentTrustedDocumentProxy } from './modules/microsoft_auth_frame_connector.js';
import { browserProxyFactory as newTabPageProxyFactory, NtpBackgroundImageSource } from './new_tab_page.mojom-webui.js';
import { ShowNtpPromosResult } from './ntp_promo.mojom-webui.js';
import { $$ } from './utils.js';
import { WindowProxy } from './window_proxy.js';
var ModuleLoadStatus;
(function (ModuleLoadStatus) {
    ModuleLoadStatus[ModuleLoadStatus["MODULE_LOAD_IN_PROGRESS"] = 0] = "MODULE_LOAD_IN_PROGRESS";
    ModuleLoadStatus[ModuleLoadStatus["MODULE_LOAD_NOT_ATTEMPTED"] = 1] = "MODULE_LOAD_NOT_ATTEMPTED";
    ModuleLoadStatus[ModuleLoadStatus["MODULE_LOAD_COMPLETE"] = 2] = "MODULE_LOAD_COMPLETE";
})(ModuleLoadStatus || (ModuleLoadStatus = {}));
/**
 * Elements on the NTP. This enum must match the numbering for NTPElement in
 * enums.xml. These values are persisted to logs. Entries should not be
 * renumbered, removed or reused.
 */
export var NtpElement;
(function (NtpElement) {
    NtpElement[NtpElement["OTHER"] = 0] = "OTHER";
    NtpElement[NtpElement["BACKGROUND"] = 1] = "BACKGROUND";
    NtpElement[NtpElement["ONE_GOOGLE_BAR"] = 2] = "ONE_GOOGLE_BAR";
    NtpElement[NtpElement["LOGO"] = 3] = "LOGO";
    NtpElement[NtpElement["REALBOX"] = 4] = "REALBOX";
    NtpElement[NtpElement["MOST_VISITED"] = 5] = "MOST_VISITED";
    NtpElement[NtpElement["MIDDLE_SLOT_PROMO"] = 6] = "MIDDLE_SLOT_PROMO";
    NtpElement[NtpElement["MODULE"] = 7] = "MODULE";
    NtpElement[NtpElement["CUSTOMIZE"] = 8] = "CUSTOMIZE";
    NtpElement[NtpElement["CUSTOMIZE_BUTTON"] = 9] = "CUSTOMIZE_BUTTON";
    NtpElement[NtpElement["CUSTOMIZE_DIALOG"] = 10] = "CUSTOMIZE_DIALOG";
    NtpElement[NtpElement["WALLPAPER_SEARCH_BUTTON"] = 11] = "WALLPAPER_SEARCH_BUTTON";
    NtpElement[NtpElement["ACTION_CHIPS"] = 12] = "ACTION_CHIPS";
    NtpElement[NtpElement["THREADS_RAIL"] = 13] = "THREADS_RAIL";
    NtpElement[NtpElement["MAX_VALUE"] = 13] = "MAX_VALUE";
})(NtpElement || (NtpElement = {}));
/**
 * Customize Chrome entry points. This enum must match the numbering for
 * NtpCustomizeChromeEntryPoint in enums.xml. These values are persisted to
 * logs. Entries should not be renumbered, removed or reused.
 */
export var NtpCustomizeChromeEntryPoint;
(function (NtpCustomizeChromeEntryPoint) {
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["CUSTOMIZE_BUTTON"] = 0] = "CUSTOMIZE_BUTTON";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["MODULE"] = 1] = "MODULE";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["URL"] = 2] = "URL";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["WALLPAPER_SEARCH_BUTTON"] = 3] = "WALLPAPER_SEARCH_BUTTON";
    NtpCustomizeChromeEntryPoint[NtpCustomizeChromeEntryPoint["MAX_VALUE"] = 3] = "MAX_VALUE";
})(NtpCustomizeChromeEntryPoint || (NtpCustomizeChromeEntryPoint = {}));
/**
 * Defines the conditions that hide the wallpaper search button on the New Tab
 * Page.
 */
var NtpWallpaperSearchButtonHideCondition;
(function (NtpWallpaperSearchButtonHideCondition) {
    NtpWallpaperSearchButtonHideCondition[NtpWallpaperSearchButtonHideCondition["NONE"] = 0] = "NONE";
    NtpWallpaperSearchButtonHideCondition[NtpWallpaperSearchButtonHideCondition["BACKGROUND_IMAGE_SET"] = 1] = "BACKGROUND_IMAGE_SET";
    NtpWallpaperSearchButtonHideCondition[NtpWallpaperSearchButtonHideCondition["THEME_SET"] = 2] = "THEME_SET";
    NtpWallpaperSearchButtonHideCondition[NtpWallpaperSearchButtonHideCondition["MAX_VALUE"] = 2] = "MAX_VALUE";
})(NtpWallpaperSearchButtonHideCondition || (NtpWallpaperSearchButtonHideCondition = {}));
const CUSTOMIZE_URL_PARAM = 'customize';
const OGB_IFRAME_ORIGIN = 'chrome-untrusted://new-tab-page';
const MSAL_IFRAME_ORIGIN = 'chrome-untrusted://ntp-microsoft-auth';
const VOICE_QUERY_LENGTH_LIMIT = 120;
const VOICE_AUTO_SUBMIT_IDLE_TIMEOUT_MS = 3000;
const VOICE_MANUAL_SUBMIT_IDLE_TIMEOUT_MS = 10000;
const COMPOSEBOX_INERT_ALLOWLIST = [
    '#logo',
    '#searchboxContainer',
    '#voiceSearchDialog',
];
export const CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID = 'CustomizeButtonsHandler::kCustomizeChromeButtonElementId';
export const CONTEXTUAL_ENTRYPOINT_ELEMENT_ID = 'NewTabPageUI::kRealboxContextualEntrypointElementId';
// The minimum width for the realbox to show its secondary side.
// 900px ~= 561px (max value for --ntp-search-box-width) * 1.5 + some margin.
const REALBOX_SECONDARY_SIDE_MIN_WIDTH_PX = 900;
// Only used if the threads rail is disabled. See observeRhsWrapperWidth_().
const realboxCanShowSecondarySideMediaQueryList = window.matchMedia(`(min-width: ${REALBOX_SECONDARY_SIDE_MIN_WIDTH_PX}px)`);
function recordClick(element) {
    recordEnumeration('NewTabPage.Click', element, NtpElement.MAX_VALUE + 1);
}
function recordCustomizeChromeOpen(element) {
    recordEnumeration('NewTabPage.CustomizeChromeOpened', element, NtpCustomizeChromeEntryPoint.MAX_VALUE + 1);
}
function recordShowBrowserPromosResult(result) {
    recordEnumeration('UserEducation.NtpPromos.ShowResult', result, ShowNtpPromosResult.MAX_VALUE + 1);
}
const PERMISSION_PROMPT_CSS_CLASS = 'permission-prompt-showing';
const AppElementBase = HelpBubbleMixinLit(CrLitElement);
export class AppElement extends AppElementBase {
    static get is() {
        return 'ntp-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // =======================================================================
            // Public properties
            // =======================================================================
            /**
             * Whether the secondary side can be shown based on the feature state and
             * the width available to the dropdown for the ntp searchbox.
             */
            realboxCanShowSecondarySide: {
                type: Boolean,
                reflect: true,
            },
            composeButtonEnabled: { type: Boolean },
            composeboxEnabled: { type: Boolean },
            hasVoiceSearchError: { type: Boolean },
            // =======================================================================
            // Protected properties
            // =======================================================================
            oneGoogleBarIframePath_: { type: String },
            oneGoogleBarLoaded_: { type: Boolean },
            theme_: { type: Object },
            showCustomize_: { type: Boolean },
            showCustomizeChromeText_: { type: Boolean },
            showWallpaperSearch_: { type: Boolean },
            showVoiceSearchOverlay_: { type: Boolean },
            showVoiceSearchScrim_: {
                type: Boolean,
                reflect: true,
            },
            voiceSearchCoherenceAnySearchboxExperimentEnabled_: { type: Boolean },
            voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_: { type: Boolean },
            voiceSearchCoherenceRealboxAutoEndpointEnabled_: { type: Boolean },
            voiceSearchCoherenceRealboxHelperTextEnabled_: { type: Boolean },
            androidSpeechRecognition_: { type: Boolean },
            voiceSearchTranscript_: { type: String },
            voiceSearchReceivedSpeech_: { type: Boolean },
            voiceSearchListening_: { type: Boolean },
            voiceQueryLengthLimit_: { type: Number },
            voiceAutoSubmitIdleTimeoutMs_: { type: Number },
            voiceManualSubmitIdleTimeoutMs_: { type: Number },
            searchboxCallbackRouter_: { type: Object },
            showBackgroundImage_: {
                reflect: true,
                type: Boolean,
            },
            backgroundImageAttribution1_: { type: String },
            backgroundImageAttribution2_: { type: String },
            backgroundImageAttributionUrl_: { type: String },
            // Used in cr-searchbox component via host-context.
            colorSourceIsBaseline: { type: Boolean },
            logoColor_: { type: Object },
            singleColoredLogo_: { type: Boolean },
            realboxShown_: { type: Boolean },
            /**
             * Whether the composebox has been opened at least once.
             */
            wasComposeboxOpened_: { type: Boolean },
            showLensUploadDialog_: { type: Boolean },
            showComposebox_: {
                type: Boolean,
                reflect: true,
            },
            logoEnabled_: { type: Boolean },
            oneGoogleBarEnabled_: { type: Boolean },
            shortcutsEnabled_: { type: Boolean },
            shortcutsReorderEnabled_: { type: Boolean },
            modulesEnabled_: { type: Boolean },
            browserPromoType_: { type: String },
            browserPromoLimit_: { type: Number },
            browserPromoCompletedLimit_: { type: Number },
            showBrowserPromo_: { type: Boolean },
            caretAnimationsEnabled_: { type: Boolean },
            usePecApi_: { type: Boolean },
            smartTabSharingVisible_: { type: Boolean },
            contextManagementInComposeboxEnabled_: { type: Boolean },
            modulesShownToUser: {
                type: Boolean,
                reflect: true,
            },
            microsoftModuleEnabled_: { type: Boolean },
            microsoftAuthIframePath_: { type: String },
            multiLineEnabled_: { type: Boolean },
            /**
             * Modules are hidden until loaded.
             */
            modulesLoaded_: { type: Boolean },
            /**
             * If true, renders additional elements that were not deemed crucial to
             * to show up immediately on load.
             */
            lazyRender_: { type: Boolean },
            scrolledToTop_: { type: Boolean },
            wallpaperSearchButtonAnimationEnabled_: { type: Boolean },
            wallpaperSearchButtonEnabled_: { type: Boolean },
            showWallpaperSearchButton_: { type: Boolean },
            isActionChipsVisible_: { type: Boolean },
            isFooterVisible_: { type: Boolean },
            ntpRealboxNextEnabled_: {
                type: Boolean,
                reflect: true,
            },
            searchboxCyclingPlaceholders_: {
                type: Boolean,
            },
            ntpNextFeaturesEnabled_: { type: Boolean },
            maxTilesInCollapsedState_: { type: Number },
            maxShortcutsInExpandedState_: { type: Number },
            maxMostVisitedTilesInExpandedState_: { type: Number },
            maxEnterpriseShortcuts_: { type: Number },
            containerFocused_: { type: Boolean },
            composeboxFocused_: { type: Boolean },
            pageContentHidden_: {
                type: Boolean,
                reflect: true,
            },
            composeboxOutsideClickEnabled_: { type: Boolean },
            /**
             * Whether the scrim is shown in Realbox Next.
             */
            showScrim_: {
                type: Boolean,
                reflect: true,
            },
            contextMenuGlifAnimationState_: { type: String },
            undoToastCallback_: { type: Object },
            undoToastMessage_: { type: String },
            /**
             * Whether to show the AIM threads rail when composebox is open.
             */
            enableThreadsRail_: { type: Boolean },
            rhsWidth_: { type: Number },
            // =======================================================================
            // Private properties
            // =======================================================================
            selectedCustomizeDialogPage_: { type: String },
            modulesLoadedStatus_: {
                type: Number,
                reflect: true,
            },
            energyEffectEnabled_: { type: Boolean, reflect: true },
            energyEffectAnimationEnabled_: { type: Boolean, reflect: true },
            energyEffectVariant_: { type: String, reflect: true },
            showCustomizeButton_: { type: Boolean },
        };
    }
    #hasVoiceSearchError_accessor_storage = false;
    get hasVoiceSearchError() { return this.#hasVoiceSearchError_accessor_storage; }
    set hasVoiceSearchError(value) { this.#hasVoiceSearchError_accessor_storage = value; }
    #realboxCanShowSecondarySide_accessor_storage = false;
    get realboxCanShowSecondarySide() { return this.#realboxCanShowSecondarySide_accessor_storage; }
    set realboxCanShowSecondarySide(value) { this.#realboxCanShowSecondarySide_accessor_storage = value; }
    #composeButtonEnabled_accessor_storage = loadTimeData.getBoolean('searchboxShowComposeEntrypoint');
    get composeButtonEnabled() { return this.#composeButtonEnabled_accessor_storage; }
    set composeButtonEnabled(value) { this.#composeButtonEnabled_accessor_storage = value; }
    #composeboxEnabled_accessor_storage = loadTimeData.getBoolean('searchboxShowComposebox');
    get composeboxEnabled() { return this.#composeboxEnabled_accessor_storage; }
    set composeboxEnabled(value) { this.#composeboxEnabled_accessor_storage = value; }
    #oneGoogleBarIframePath__accessor_storage;
    get oneGoogleBarIframePath_() { return this.#oneGoogleBarIframePath__accessor_storage; }
    set oneGoogleBarIframePath_(value) { this.#oneGoogleBarIframePath__accessor_storage = value; }
    #oneGoogleBarLoaded__accessor_storage = false;
    get oneGoogleBarLoaded_() { return this.#oneGoogleBarLoaded__accessor_storage; }
    set oneGoogleBarLoaded_(value) { this.#oneGoogleBarLoaded__accessor_storage = value; }
    #theme__accessor_storage = null;
    get theme_() { return this.#theme__accessor_storage; }
    set theme_(value) { this.#theme__accessor_storage = value; }
    #showCustomize__accessor_storage = false;
    get showCustomize_() { return this.#showCustomize__accessor_storage; }
    set showCustomize_(value) { this.#showCustomize__accessor_storage = value; }
    #showCustomizeChromeText__accessor_storage = false;
    get showCustomizeChromeText_() { return this.#showCustomizeChromeText__accessor_storage; }
    set showCustomizeChromeText_(value) { this.#showCustomizeChromeText__accessor_storage = value; }
    #showWallpaperSearch__accessor_storage = false;
    get showWallpaperSearch_() { return this.#showWallpaperSearch__accessor_storage; }
    set showWallpaperSearch_(value) { this.#showWallpaperSearch__accessor_storage = value; }
    #showVoiceSearchOverlay__accessor_storage = false;
    get showVoiceSearchOverlay_() { return this.#showVoiceSearchOverlay__accessor_storage; }
    set showVoiceSearchOverlay_(value) { this.#showVoiceSearchOverlay__accessor_storage = value; }
    #showVoiceSearchScrim__accessor_storage = false;
    get showVoiceSearchScrim_() { return this.#showVoiceSearchScrim__accessor_storage; }
    set showVoiceSearchScrim_(value) { this.#showVoiceSearchScrim__accessor_storage = value; }
    #voiceSearchCoherenceAnySearchboxExperimentEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceAnySearchboxExperimentEnabled') ||
        loadTimeData.getBoolean('voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled');
    get voiceSearchCoherenceAnySearchboxExperimentEnabled_() { return this.#voiceSearchCoherenceAnySearchboxExperimentEnabled__accessor_storage; }
    set voiceSearchCoherenceAnySearchboxExperimentEnabled_(value) { this.#voiceSearchCoherenceAnySearchboxExperimentEnabled__accessor_storage = value; }
    #voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled');
    get voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_() { return this.#voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled__accessor_storage; }
    set voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_(value) { this.#voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled__accessor_storage = value; }
    #voiceSearchCoherenceRealboxAutoEndpointEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceRealboxAutoEndpointEnabled');
    get voiceSearchCoherenceRealboxAutoEndpointEnabled_() { return this.#voiceSearchCoherenceRealboxAutoEndpointEnabled__accessor_storage; }
    set voiceSearchCoherenceRealboxAutoEndpointEnabled_(value) { this.#voiceSearchCoherenceRealboxAutoEndpointEnabled__accessor_storage = value; }
    #voiceSearchCoherenceRealboxHelperTextEnabled__accessor_storage = loadTimeData.getBoolean('voiceSearchCoherenceRealboxHelperTextEnabled');
    get voiceSearchCoherenceRealboxHelperTextEnabled_() { return this.#voiceSearchCoherenceRealboxHelperTextEnabled__accessor_storage; }
    set voiceSearchCoherenceRealboxHelperTextEnabled_(value) { this.#voiceSearchCoherenceRealboxHelperTextEnabled__accessor_storage = value; }
    #androidSpeechRecognition__accessor_storage = loadTimeData.getBoolean('androidSpeechRecognition');
    // `true` only on Android, where voice search uses Android's speech recognizer
    // (see new_tab_page_ui.cc).
    get androidSpeechRecognition_() { return this.#androidSpeechRecognition__accessor_storage; }
    set androidSpeechRecognition_(value) { this.#androidSpeechRecognition__accessor_storage = value; }
    #voiceSearchTranscript__accessor_storage = '';
    get voiceSearchTranscript_() { return this.#voiceSearchTranscript__accessor_storage; }
    set voiceSearchTranscript_(value) { this.#voiceSearchTranscript__accessor_storage = value; }
    #voiceSearchReceivedSpeech__accessor_storage = false;
    get voiceSearchReceivedSpeech_() { return this.#voiceSearchReceivedSpeech__accessor_storage; }
    set voiceSearchReceivedSpeech_(value) { this.#voiceSearchReceivedSpeech__accessor_storage = value; }
    #voiceSearchListening__accessor_storage = false;
    get voiceSearchListening_() { return this.#voiceSearchListening__accessor_storage; }
    set voiceSearchListening_(value) { this.#voiceSearchListening__accessor_storage = value; }
    #voiceQueryLengthLimit__accessor_storage = VOICE_QUERY_LENGTH_LIMIT;
    get voiceQueryLengthLimit_() { return this.#voiceQueryLengthLimit__accessor_storage; }
    set voiceQueryLengthLimit_(value) { this.#voiceQueryLengthLimit__accessor_storage = value; }
    #voiceAutoSubmitIdleTimeoutMs__accessor_storage = VOICE_AUTO_SUBMIT_IDLE_TIMEOUT_MS;
    get voiceAutoSubmitIdleTimeoutMs_() { return this.#voiceAutoSubmitIdleTimeoutMs__accessor_storage; }
    set voiceAutoSubmitIdleTimeoutMs_(value) { this.#voiceAutoSubmitIdleTimeoutMs__accessor_storage = value; }
    #voiceManualSubmitIdleTimeoutMs__accessor_storage = VOICE_MANUAL_SUBMIT_IDLE_TIMEOUT_MS;
    get voiceManualSubmitIdleTimeoutMs_() { return this.#voiceManualSubmitIdleTimeoutMs__accessor_storage; }
    set voiceManualSubmitIdleTimeoutMs_(value) { this.#voiceManualSubmitIdleTimeoutMs__accessor_storage = value; }
    #showBackgroundImage__accessor_storage = false;
    get showBackgroundImage_() { return this.#showBackgroundImage__accessor_storage; }
    set showBackgroundImage_(value) { this.#showBackgroundImage__accessor_storage = value; }
    #backgroundImageAttribution1__accessor_storage = '';
    get backgroundImageAttribution1_() { return this.#backgroundImageAttribution1__accessor_storage; }
    set backgroundImageAttribution1_(value) { this.#backgroundImageAttribution1__accessor_storage = value; }
    #backgroundImageAttribution2__accessor_storage = '';
    get backgroundImageAttribution2_() { return this.#backgroundImageAttribution2__accessor_storage; }
    set backgroundImageAttribution2_(value) { this.#backgroundImageAttribution2__accessor_storage = value; }
    #backgroundImageAttributionUrl__accessor_storage = '';
    get backgroundImageAttributionUrl_() { return this.#backgroundImageAttributionUrl__accessor_storage; }
    set backgroundImageAttributionUrl_(value) { this.#backgroundImageAttributionUrl__accessor_storage = value; }
    #colorSourceIsBaseline_accessor_storage = false;
    get colorSourceIsBaseline() { return this.#colorSourceIsBaseline_accessor_storage; }
    set colorSourceIsBaseline(value) { this.#colorSourceIsBaseline_accessor_storage = value; }
    #logoColor__accessor_storage = null;
    get logoColor_() { return this.#logoColor__accessor_storage; }
    set logoColor_(value) { this.#logoColor__accessor_storage = value; }
    #singleColoredLogo__accessor_storage = false;
    get singleColoredLogo_() { return this.#singleColoredLogo__accessor_storage; }
    set singleColoredLogo_(value) { this.#singleColoredLogo__accessor_storage = value; }
    #realboxShown__accessor_storage = false;
    get realboxShown_() { return this.#realboxShown__accessor_storage; }
    set realboxShown_(value) { this.#realboxShown__accessor_storage = value; }
    #wasComposeboxOpened__accessor_storage = false;
    get wasComposeboxOpened_() { return this.#wasComposeboxOpened__accessor_storage; }
    set wasComposeboxOpened_(value) { this.#wasComposeboxOpened__accessor_storage = value; }
    #showLensUploadDialog__accessor_storage = false;
    get showLensUploadDialog_() { return this.#showLensUploadDialog__accessor_storage; }
    set showLensUploadDialog_(value) { this.#showLensUploadDialog__accessor_storage = value; }
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
    #logoEnabled__accessor_storage = loadTimeData.getBoolean('logoEnabled');
    get logoEnabled_() { return this.#logoEnabled__accessor_storage; }
    set logoEnabled_(value) { this.#logoEnabled__accessor_storage = value; }
    #oneGoogleBarEnabled__accessor_storage = loadTimeData.getBoolean('oneGoogleBarEnabled');
    get oneGoogleBarEnabled_() { return this.#oneGoogleBarEnabled__accessor_storage; }
    set oneGoogleBarEnabled_(value) { this.#oneGoogleBarEnabled__accessor_storage = value; }
    #shortcutsEnabled__accessor_storage = loadTimeData.getBoolean('shortcutsEnabled');
    get shortcutsEnabled_() { return this.#shortcutsEnabled__accessor_storage; }
    set shortcutsEnabled_(value) { this.#shortcutsEnabled__accessor_storage = value; }
    #shortcutsReorderEnabled__accessor_storage = loadTimeData.getBoolean('ntpShortcutsReorderEnabled');
    get shortcutsReorderEnabled_() { return this.#shortcutsReorderEnabled__accessor_storage; }
    set shortcutsReorderEnabled_(value) { this.#shortcutsReorderEnabled__accessor_storage = value; }
    #modulesEnabled__accessor_storage = loadTimeData.getBoolean('modulesEnabled');
    get modulesEnabled_() { return this.#modulesEnabled__accessor_storage; }
    set modulesEnabled_(value) { this.#modulesEnabled__accessor_storage = value; }
    #browserPromoType__accessor_storage = loadTimeData.getString('browserPromoType');
    get browserPromoType_() { return this.#browserPromoType__accessor_storage; }
    set browserPromoType_(value) { this.#browserPromoType__accessor_storage = value; }
    #browserPromoLimit__accessor_storage = loadTimeData.getInteger('browserPromoLimit');
    get browserPromoLimit_() { return this.#browserPromoLimit__accessor_storage; }
    set browserPromoLimit_(value) { this.#browserPromoLimit__accessor_storage = value; }
    #browserPromoCompletedLimit__accessor_storage = loadTimeData.getInteger('browserPromoCompletedLimit');
    get browserPromoCompletedLimit_() { return this.#browserPromoCompletedLimit__accessor_storage; }
    set browserPromoCompletedLimit_(value) { this.#browserPromoCompletedLimit__accessor_storage = value; }
    #showBrowserPromo__accessor_storage = false;
    get showBrowserPromo_() { return this.#showBrowserPromo__accessor_storage; }
    set showBrowserPromo_(value) { this.#showBrowserPromo__accessor_storage = value; }
    #modulesShownToUser_accessor_storage = false;
    get modulesShownToUser() { return this.#modulesShownToUser_accessor_storage; }
    set modulesShownToUser(value) { this.#modulesShownToUser_accessor_storage = value; }
    #microsoftModuleEnabled__accessor_storage = loadTimeData.getBoolean('microsoftModuleEnabled');
    get microsoftModuleEnabled_() { return this.#microsoftModuleEnabled__accessor_storage; }
    set microsoftModuleEnabled_(value) { this.#microsoftModuleEnabled__accessor_storage = value; }
    #microsoftAuthIframePath__accessor_storage = MSAL_IFRAME_ORIGIN;
    get microsoftAuthIframePath_() { return this.#microsoftAuthIframePath__accessor_storage; }
    set microsoftAuthIframePath_(value) { this.#microsoftAuthIframePath__accessor_storage = value; }
    #multiLineEnabled__accessor_storage = loadTimeData.getBoolean('multiLineEnabled');
    get multiLineEnabled_() { return this.#multiLineEnabled__accessor_storage; }
    set multiLineEnabled_(value) { this.#multiLineEnabled__accessor_storage = value; }
    #modulesLoaded__accessor_storage = false;
    get modulesLoaded_() { return this.#modulesLoaded__accessor_storage; }
    set modulesLoaded_(value) { this.#modulesLoaded__accessor_storage = value; }
    #lazyRender__accessor_storage = false;
    get lazyRender_() { return this.#lazyRender__accessor_storage; }
    set lazyRender_(value) { this.#lazyRender__accessor_storage = value; }
    #scrolledToTop__accessor_storage = true;
    get scrolledToTop_() { return this.#scrolledToTop__accessor_storage; }
    set scrolledToTop_(value) { this.#scrolledToTop__accessor_storage = value; }
    #wallpaperSearchButtonAnimationEnabled__accessor_storage = loadTimeData.getBoolean('wallpaperSearchButtonAnimationEnabled');
    get wallpaperSearchButtonAnimationEnabled_() { return this.#wallpaperSearchButtonAnimationEnabled__accessor_storage; }
    set wallpaperSearchButtonAnimationEnabled_(value) { this.#wallpaperSearchButtonAnimationEnabled__accessor_storage = value; }
    #wallpaperSearchButtonEnabled__accessor_storage = loadTimeData.getBoolean('wallpaperSearchButtonEnabled');
    get wallpaperSearchButtonEnabled_() { return this.#wallpaperSearchButtonEnabled__accessor_storage; }
    set wallpaperSearchButtonEnabled_(value) { this.#wallpaperSearchButtonEnabled__accessor_storage = value; }
    #showWallpaperSearchButton__accessor_storage = false;
    get showWallpaperSearchButton_() { return this.#showWallpaperSearchButton__accessor_storage; }
    set showWallpaperSearchButton_(value) { this.#showWallpaperSearchButton__accessor_storage = value; }
    #isActionChipsVisible__accessor_storage = loadTimeData.getBoolean('actionChipsEnabled');
    get isActionChipsVisible_() { return this.#isActionChipsVisible__accessor_storage; }
    set isActionChipsVisible_(value) { this.#isActionChipsVisible__accessor_storage = value; }
    #isFooterVisible__accessor_storage = false;
    get isFooterVisible_() { return this.#isFooterVisible__accessor_storage; }
    set isFooterVisible_(value) { this.#isFooterVisible__accessor_storage = value; }
    #ntpRealboxNextEnabled__accessor_storage = loadTimeData.getBoolean('ntpRealboxNextEnabled');
    get ntpRealboxNextEnabled_() { return this.#ntpRealboxNextEnabled__accessor_storage; }
    set ntpRealboxNextEnabled_(value) { this.#ntpRealboxNextEnabled__accessor_storage = value; }
    #searchboxCyclingPlaceholders__accessor_storage = loadTimeData.getBoolean('searchboxCyclingPlaceholders');
    get searchboxCyclingPlaceholders_() { return this.#searchboxCyclingPlaceholders__accessor_storage; }
    set searchboxCyclingPlaceholders_(value) { this.#searchboxCyclingPlaceholders__accessor_storage = value; }
    #ntpNextFeaturesEnabled__accessor_storage = loadTimeData.getBoolean('ntpNextFeaturesEnabled');
    get ntpNextFeaturesEnabled_() { return this.#ntpNextFeaturesEnabled__accessor_storage; }
    set ntpNextFeaturesEnabled_(value) { this.#ntpNextFeaturesEnabled__accessor_storage = value; }
    #maxTilesInCollapsedState__accessor_storage = loadTimeData.getInteger('maxTilesInCollapsedState');
    get maxTilesInCollapsedState_() { return this.#maxTilesInCollapsedState__accessor_storage; }
    set maxTilesInCollapsedState_(value) { this.#maxTilesInCollapsedState__accessor_storage = value; }
    #maxShortcutsInExpandedState__accessor_storage = loadTimeData.getInteger('maxShortcutsInExpandedState');
    get maxShortcutsInExpandedState_() { return this.#maxShortcutsInExpandedState__accessor_storage; }
    set maxShortcutsInExpandedState_(value) { this.#maxShortcutsInExpandedState__accessor_storage = value; }
    #maxMostVisitedTilesInExpandedState__accessor_storage = loadTimeData.getInteger('maxMostVisitedTilesInExpandedState');
    get maxMostVisitedTilesInExpandedState_() { return this.#maxMostVisitedTilesInExpandedState__accessor_storage; }
    set maxMostVisitedTilesInExpandedState_(value) { this.#maxMostVisitedTilesInExpandedState__accessor_storage = value; }
    #maxEnterpriseShortcuts__accessor_storage = loadTimeData.getInteger('maxEnterpriseShortcuts');
    get maxEnterpriseShortcuts_() { return this.#maxEnterpriseShortcuts__accessor_storage; }
    set maxEnterpriseShortcuts_(value) { this.#maxEnterpriseShortcuts__accessor_storage = value; }
    #containerFocused__accessor_storage = false;
    get containerFocused_() { return this.#containerFocused__accessor_storage; }
    set containerFocused_(value) { this.#containerFocused__accessor_storage = value; }
    #composeboxFocused__accessor_storage = false;
    get composeboxFocused_() { return this.#composeboxFocused__accessor_storage; }
    set composeboxFocused_(value) { this.#composeboxFocused__accessor_storage = value; }
    #pageContentHidden__accessor_storage = false;
    get pageContentHidden_() { return this.#pageContentHidden__accessor_storage; }
    set pageContentHidden_(value) { this.#pageContentHidden__accessor_storage = value; }
    #composeboxOutsideClickEnabled__accessor_storage = loadTimeData.getBoolean('composeboxRealboxOutsideClick');
    get composeboxOutsideClickEnabled_() { return this.#composeboxOutsideClickEnabled__accessor_storage; }
    set composeboxOutsideClickEnabled_(value) { this.#composeboxOutsideClickEnabled__accessor_storage = value; }
    #showScrim__accessor_storage = false;
    get showScrim_() { return this.#showScrim__accessor_storage; }
    set showScrim_(value) { this.#showScrim__accessor_storage = value; }
    realboxContextMenuAnimationAllowed_ = false;
    #contextMenuGlifAnimationState__accessor_storage = GlifAnimationState.INELIGIBLE;
    get contextMenuGlifAnimationState_() { return this.#contextMenuGlifAnimationState__accessor_storage; }
    set contextMenuGlifAnimationState_(value) { this.#contextMenuGlifAnimationState__accessor_storage = value; }
    #undoToastCallback__accessor_storage = null;
    get undoToastCallback_() { return this.#undoToastCallback__accessor_storage; }
    set undoToastCallback_(value) { this.#undoToastCallback__accessor_storage = value; }
    #undoToastMessage__accessor_storage = null;
    get undoToastMessage_() { return this.#undoToastMessage__accessor_storage; }
    set undoToastMessage_(value) { this.#undoToastMessage__accessor_storage = value; }
    #enableThreadsRail__accessor_storage = loadTimeData.getBoolean('enableThreadsRail');
    get enableThreadsRail_() { return this.#enableThreadsRail__accessor_storage; }
    set enableThreadsRail_(value) { this.#enableThreadsRail__accessor_storage = value; }
    #energyEffectEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectEnabled');
    get energyEffectEnabled_() { return this.#energyEffectEnabled__accessor_storage; }
    set energyEffectEnabled_(value) { this.#energyEffectEnabled__accessor_storage = value; }
    #energyEffectAnimationEnabled__accessor_storage = loadTimeData.getBoolean('energyEffectAnimationEnabled');
    get energyEffectAnimationEnabled_() { return this.#energyEffectAnimationEnabled__accessor_storage; }
    set energyEffectAnimationEnabled_(value) { this.#energyEffectAnimationEnabled__accessor_storage = value; }
    #energyEffectVariant__accessor_storage = loadTimeData.getString('energyEffectVariant');
    get energyEffectVariant_() { return this.#energyEffectVariant__accessor_storage; }
    set energyEffectVariant_(value) { this.#energyEffectVariant__accessor_storage = value; }
    #showCustomizeButton__accessor_storage = loadTimeData.getBoolean('showCustomizeButton');
    get showCustomizeButton_() { return this.#showCustomizeButton__accessor_storage; }
    set showCustomizeButton_(value) { this.#showCustomizeButton__accessor_storage = value; }
    contextMenuAnimationLimitingEnabled_ = loadTimeData.getBoolean('contextMenuAnimationLimitingEnabled');
    #searchboxCallbackRouter__accessor_storage;
    get searchboxCallbackRouter_() { return this.#searchboxCallbackRouter__accessor_storage; }
    set searchboxCallbackRouter_(value) { this.#searchboxCallbackRouter__accessor_storage = value; }
    #rhsWidth__accessor_storage = null;
    get rhsWidth_() { return this.#rhsWidth__accessor_storage; }
    set rhsWidth_(value) { this.#rhsWidth__accessor_storage = value; }
    voiceSearchActivatedByKeyboard_ = false;
    #selectedCustomizeDialogPage__accessor_storage = null;
    get selectedCustomizeDialogPage_() { return this.#selectedCustomizeDialogPage__accessor_storage; }
    set selectedCustomizeDialogPage_(value) { this.#selectedCustomizeDialogPage__accessor_storage = value; }
    #modulesLoadedStatus__accessor_storage = ModuleLoadStatus.MODULE_LOAD_IN_PROGRESS;
    get modulesLoadedStatus_() { return this.#modulesLoadedStatus__accessor_storage; }
    set modulesLoadedStatus_(value) { this.#modulesLoadedStatus__accessor_storage = value; }
    callbackRouter_;
    pageHandler_;
    customizeButtonsCallbackRouter_;
    customizeButtonsHandler_;
    backgroundManager_;
    connectMicrosoftAuthToParentDocumentListenerId_ = null;
    setThemeListenerId_ = null;
    setCustomizeChromeSidePanelVisibilityListener_ = null;
    setWallpaperSearchButtonVisibilityListener_ = null;
    setActionChipsVisibilityListenerId_ = null;
    footerVisibilityUpdatedListener_ = null;
    eventTracker_ = new EventTracker();
    shouldPrintPerformance_ = false;
    backgroundImageLoadStartEpoch_ = 0;
    backgroundImageLoadStart_ = 0;
    showWebstoreToastListenerId_ = null;
    pendingUndoToasts_ = [];
    rhsWrapperResizeObserver_ = null;
    constructor() {
        performance.mark('app-creation-start');
        super();
        this.callbackRouter_ = newTabPageProxyFactory.getInstance().callbackRouter;
        this.searchboxCallbackRouter_ =
            SearchboxBrowserProxy.getInstance().callbackRouter;
        this.pageHandler_ = newTabPageProxyFactory.getInstance().handler;
        this.customizeButtonsCallbackRouter_ =
            customizeButtonsProxyFactory.getInstance().callbackRouter;
        this.customizeButtonsHandler_ =
            customizeButtonsProxyFactory.getInstance().handler;
        this.backgroundManager_ = BackgroundManager.getInstance();
        this.shouldPrintPerformance_ =
            new URLSearchParams(location.search).has('print_perf');
        this.oneGoogleBarIframePath_ = (() => {
            const params = new URLSearchParams();
            params.set('paramsencoded', btoa(window.location.search.replace(/^[?]/, '&')));
            return `${OGB_IFRAME_ORIGIN}/one-google-bar?${params}`;
        })();
        this.showCustomize_ =
            WindowProxy.getInstance().url.searchParams.has(CUSTOMIZE_URL_PARAM);
        this.selectedCustomizeDialogPage_ =
            WindowProxy.getInstance().url.searchParams.get(CUSTOMIZE_URL_PARAM);
        if (!this.enableThreadsRail_) {
            this.realboxCanShowSecondarySide =
                realboxCanShowSecondarySideMediaQueryList.matches;
        }
        /**
         * Initialized with the start of the performance timeline in case the
         * background image load is not triggered by JS.
         */
        this.backgroundImageLoadStartEpoch_ = performance.timeOrigin;
        recordLinearValue('NewTabPage.Height', 
        /*min=*/ 1, 
        /*max=*/ 1000, 
        /*buckets=*/ 200, 
        /*value=*/ Math.floor(window.innerHeight));
        recordLinearValue('NewTabPage.Width', 
        /*min=*/ 1, 
        /*max=*/ 1920, 
        /*buckets=*/ 384, 
        /*value=*/ Math.floor(window.innerWidth));
        ColorChangeUpdater.forDocument().start();
        window.navigator.virtualKeyboard.overlaysContent = true;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.enableThreadsRail_) {
            realboxCanShowSecondarySideMediaQueryList.addEventListener('change', this.onRealboxCanShowSecondarySideChanged_);
        }
        else if (this.hasUpdated) {
            this.observeRhsWrapperWidth_();
        }
        // Listen for chrome-untrusted://ntp-microsoft-auth iframe trying to
        // connect to the NTP.
        this.connectMicrosoftAuthToParentDocumentListenerId_ =
            this.callbackRouter_.connectToParentDocument.addListener(childDocumentRemote => {
                ParentTrustedDocumentProxy.setInstance(childDocumentRemote);
            });
        this.setThemeListenerId_ =
            this.callbackRouter_.setTheme.addListener(theme => {
                if (!this.theme_) {
                    this.onThemeLoaded_(theme);
                }
                performance.measure('theme-set');
                this.theme_ = theme;
            });
        this.setCustomizeChromeSidePanelVisibilityListener_ =
            this.customizeButtonsCallbackRouter_
                .setCustomizeChromeSidePanelVisibility.addListener(visible => {
                this.showCustomize_ = visible;
                if (!visible) {
                    this.showWallpaperSearch_ = false;
                }
            });
        this.showWebstoreToastListenerId_ =
            this.callbackRouter_.showWebstoreToast.addListener(() => {
                if (this.showCustomize_) {
                    const toast = $$(this, '#webstoreToast');
                    if (toast) {
                        toast.hidden = false;
                        toast.show();
                    }
                }
            });
        this.setWallpaperSearchButtonVisibilityListener_ =
            this.callbackRouter_.setWallpaperSearchButtonVisibility.addListener(visible => {
                // Hides the wallpaper search button if the browser indicates that
                // it should be hidden.
                // Note: We don't resurface the button later even if the browser
                // says we should, to avoid issues if Customize Chrome doesn't
                // have the wallpaper search element yet.
                if (!visible) {
                    this.wallpaperSearchButtonEnabled_ = visible;
                }
            });
        this.setActionChipsVisibilityListenerId_ =
            this.callbackRouter_.setActionChipsVisibility.addListener(isVisible => this.isActionChipsVisible_ = isVisible);
        this.footerVisibilityUpdatedListener_ =
            this.callbackRouter_.footerVisibilityUpdated.addListener(visible => {
                this.isFooterVisible_ = visible;
            });
        this.pageHandler_.updateFooterVisibility();
        // Open Customize Chrome if there are Customize Chrome URL params.
        if (this.showCustomize_) {
            this.setCustomizeChromeSidePanelVisible_(this.showCustomize_);
            recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.URL);
        }
        this.eventTracker_.add(window, 'message', (event) => {
            const data = event.data;
            // Something in OneGoogleBar is sending a message that is received here.
            // Need to ignore it.
            if (typeof data !== 'object') {
                return;
            }
            if ('frameType' in data && data.frameType === 'one-google-bar' &&
                event.origin === OGB_IFRAME_ORIGIN) {
                this.handleOneGoogleBarMessage_(event);
            }
        });
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        this.eventTracker_.add(window, 'click', this.onWindowClick_.bind(this), /*capture=*/ true);
        this.eventTracker_.add(WindowProxy.getInstance().matchMedia('(prefers-color-scheme: dark)'), 'change', (e) => {
            if (e.matches) {
                this.updateOneGoogleBarAppearance_();
            }
        });
        if (loadTimeData.getString('backgroundImageUrl')) {
            this.backgroundManager_.getBackgroundImageLoadTime().then(time => {
                const duration = time - this.backgroundImageLoadStartEpoch_;
                recordDuration('NewTabPage.Images.ShownTime.BackgroundImage', duration);
                if (this.shouldPrintPerformance_) {
                    this.printPerformanceDatum_('background-image-load', this.backgroundImageLoadStart_, duration);
                    this.printPerformanceDatum_('background-image-loaded', this.backgroundImageLoadStart_ + duration);
                }
            }, () => {
                // Ignore. Failed to capture background image load time.
            });
        }
        FocusOutlineManager.forDocument(document);
        if (this.composeButtonEnabled) {
            recordBoolean('NewTabPage.ComposeEntrypoint.Shown', true);
            this.pageHandler_.incrementComposeButtonShownCount();
        }
        this.initializeContextMenuAnimationState_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        realboxCanShowSecondarySideMediaQueryList.removeEventListener('change', this.onRealboxCanShowSecondarySideChanged_);
        this.rhsWrapperResizeObserver_?.disconnect();
        this.callbackRouter_.removeListener(this.connectMicrosoftAuthToParentDocumentListenerId_);
        this.callbackRouter_.removeListener(this.setThemeListenerId_);
        this.callbackRouter_.removeListener(this.showWebstoreToastListenerId_);
        this.callbackRouter_.removeListener(this.setWallpaperSearchButtonVisibilityListener_);
        this.customizeButtonsCallbackRouter_.removeListener(this.setCustomizeChromeSidePanelVisibilityListener_);
        this.callbackRouter_.removeListener(this.setActionChipsVisibilityListenerId_);
        this.callbackRouter_.removeListener(this.footerVisibilityUpdatedListener_);
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('theme_')) {
            this.showBackgroundImage_ = this.computeShowBackgroundImage_();
            this.backgroundImageAttribution1_ =
                this.computeBackgroundImageAttribution1_();
            this.backgroundImageAttribution2_ =
                this.computeBackgroundImageAttribution2_();
            this.backgroundImageAttributionUrl_ =
                this.computeBackgroundImageAttributionUrl_();
            this.colorSourceIsBaseline = this.computeColorSourceIsBaseline();
            this.logoColor_ = this.computeLogoColor_();
            this.singleColoredLogo_ = this.computeSingleColoredLogo_();
        }
        // theme_, showLensUploadDialog_
        this.realboxShown_ = this.computeRealboxShown_();
        // modulesLoadedStatus_
        this.modulesLoaded_ = this.computeModulesLoaded_();
        // wallpaperSearchButtonEnabled_, showBackgroundImage_, backgroundColor_
        this.showWallpaperSearchButton_ = this.computeShowWallpaperSearchButton_();
        // showWallpaperSearchButton_, showBackgroundImage_
        this.showCustomizeChromeText_ = this.computeShowCustomizeChromeText_();
        // modulesEnabled_, modulesShownToUser, modulesLoadedStatus_
        this.showBrowserPromo_ = this.computeShowBrowserPromo_();
        if ((changedPrivateProperties.has('modulesLoadedStatus_') &&
            this.modulesLoadedStatus_ !==
                ModuleLoadStatus.MODULE_LOAD_IN_PROGRESS)) {
            this.recordBrowserPromoMetrics_();
        }
        if (changedPrivateProperties.has('showVoiceSearchOverlay_')) {
            this.showVoiceSearchScrim_ =
                this.voiceSearchCoherenceAnySearchboxExperimentEnabled_ &&
                    this.showVoiceSearchOverlay_;
        }
        if (this.composeboxOutsideClickEnabled_ &&
            changedPrivateProperties.has('showComposebox_') &&
            !this.showComposebox_) {
            this.composeboxFocused_ = false;
        }
        if (changedPrivateProperties.has(this.composeboxOutsideClickEnabled_ ? 'composeboxFocused_' :
            'showComposebox_')) {
            this.pageContentHidden_ = !this.ntpRealboxNextEnabled_ &&
                (this.composeboxOutsideClickEnabled_ ? this.composeboxFocused_ :
                    this.showComposebox_);
        }
        if (this.ntpRealboxNextEnabled_ && [
            this.composeboxOutsideClickEnabled_ ? 'composeboxFocused_' :
                'showComposebox_',
            'showLensUploadDialog_',
            'containerFocused_',
            'showVoiceSearchScrim_',
            'showVoiceSearchOverlay_',
        ].some((prop) => changedPrivateProperties.has(prop))) {
            /**
             * The current requirement is that the scrim should be shown when the
             * focus is placed on one of the input boxes and should be removed when
             * the focus moves outside.
             *
             * The additional OR operation with showComposebox_ is because the logic
             * does not close Composebox when a click outside is made while Composebox
             * is opened. What seems to be happening when showComposebox_ is used/not
             * used are as follows:
             * - Without it:
             *   1. A click outside is made.
             *   2. The focusout event first occurs.
             *   3. containerFocused_ is set to false.
             *   4. The scrim is removed.
             *   5. The click event fires.
             * - With it:
             *   1-3. same as above
             *   4. The scrim is kept since showComposebox_ is still true.
             *   5. The onclick handler of the scrim runs and sets showComposebox_ to
             *      false, and everything works as desired.
             *
             * With composeboxOutsideClickEnabled_ enabled, composeboxFocused_
             * replaces showComposebox_ in this sequence and is cleared by the scrim
             * click.
             */
            this.showScrim_ =
                (this.composeboxOutsideClickEnabled_ ? this.composeboxFocused_ :
                    this.showComposebox_) ||
                    this.showLensUploadDialog_ || this.containerFocused_ ||
                    this.showVoiceSearchScrim_;
        }
    }
    firstUpdated() {
        this.pageHandler_.onAppRendered(WindowProxy.getInstance().now());
        // Let the browser breathe and then render remaining elements.
        WindowProxy.getInstance().waitForLazyRender().then(async () => {
            // Wait for lazy_load.js to execute so that custom elements inside
            // `this.lazyRender_` (<ntp-customize-buttons>, <ntp-action-chips>,
            // <cr-most-visited>, <ntp-modules>, etc.) are registered and upgrade
            // synchronously when inserted into the DOM.
            await WindowProxy.getInstance().ensureLazyLoaded();
            this.lazyRender_ = true;
        });
        this.printPerformance_();
        performance.measure('app-creation', 'app-creation-start');
        if (!this.modulesEnabled_) {
            this.recordBrowserPromoMetrics_();
        }
        if (this.ntpRealboxNextEnabled_) {
            this.registerHelpBubble(CONTEXTUAL_ENTRYPOINT_ELEMENT_ID, ['#searchbox', '#context', '#entrypointButton', '#entrypoint'], { fixed: true });
        }
        if (this.enableThreadsRail_) {
            this.observeRhsWrapperWidth_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('lazyRender_') && this.lazyRender_) {
            this.onLazyRendered_();
        }
        if (changedPrivateProperties.has('theme_')) {
            this.onThemeChange_();
        }
        if (changedPrivateProperties.has('isFooterVisible_') && this.lazyRender_) {
            this.maybeRegisterCustomizeButtonHelpBubble_();
        }
        if (changedPrivateProperties.has('logoColor_')) {
            this.style.setProperty('--ntp-logo-color', this.rgbaOrInherit_(this.logoColor_));
        }
        if (changedPrivateProperties.has('showBackgroundImage_')) {
            this.onShowBackgroundImageChange_();
        }
        if (changedPrivateProperties.has('modulesLoaded_')) {
            this.onModulesLoadedChange_();
        }
        if (changedPrivateProperties.has(this.composeboxOutsideClickEnabled_ ? 'composeboxFocused_' :
            'showComposebox_')) {
            this.onShowComposeboxChange_();
        }
        if (changedPrivateProperties.has('oneGoogleBarLoaded_') ||
            changedPrivateProperties.has('theme_') ||
            changedPrivateProperties.has('showComposebox_')) {
            this.updateOneGoogleBarAppearance_();
        }
        if (changedPrivateProperties.has('showVoiceSearchOverlay_') &&
            this.voiceSearchCoherenceAnySearchboxExperimentEnabled_) {
            if (this.showVoiceSearchOverlay_) {
                this.voiceSearchListening_ = true;
                this.voiceSearchReceivedSpeech_ = false;
                this.voiceSearchTranscript_ = '';
                const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
                assert(dialog);
                dialog.showModal();
                dialog.focus();
                const voiceSearch = this.shadowRoot.querySelector('#voiceSearch');
                assert(voiceSearch);
                voiceSearch.activatedByKeyboard = this.voiceSearchActivatedByKeyboard_;
                voiceSearch.start();
            }
        }
    }
    // For voice coherence: when error event is fired, this will run.
    onVoiceSearchError() {
        if (!this.showVoiceSearchOverlay_) {
            return;
        }
        this.hasVoiceSearchError = true;
    }
    onVoiceSearchRestart_() {
        this.hasVoiceSearchError = false;
        this.voiceSearchListening_ = true;
        this.voiceSearchReceivedSpeech_ = false;
        this.voiceSearchTranscript_ = '';
    }
    // Called to update the OGB of relevant NTP state changes.
    updateOneGoogleBarAppearance_() {
        if (this.oneGoogleBarLoaded_) {
            const isNtpDarkTheme = this.theme_ && (!!this.theme_.backgroundImage || this.theme_.isDark);
            $$(this, '#oneGoogleBar').postMessage({
                type: 'updateAppearance',
                // We should be using a light OGB for dark themes and vice versa.
                applyLightTheme: isNtpDarkTheme,
            });
        }
    }
    computeShowCustomizeChromeText_() {
        if (this.showWallpaperSearchButton_) {
            return false;
        }
        return !this.showBackgroundImage_;
    }
    computeBackgroundImageAttribution1_() {
        return this.theme_ && this.theme_.backgroundImageAttribution1 || '';
    }
    computeBackgroundImageAttribution2_() {
        return this.theme_ && this.theme_.backgroundImageAttribution2 || '';
    }
    computeBackgroundImageAttributionUrl_() {
        return this.theme_ && this.theme_.backgroundImageAttributionUrl || '';
    }
    computeRealboxShown_() {
        // Do not show the realbox if the upload dialog is showing.
        return !!this.theme_ && !this.showLensUploadDialog_ &&
            !this.showComposebox_;
    }
    computeModulesLoaded_() {
        return !loadTimeData.getBoolean('modulesEnabled') ||
            this.modulesLoadedStatus_ === ModuleLoadStatus.MODULE_LOAD_COMPLETE;
    }
    onRealboxCanShowSecondarySideChanged_ = (e) => {
        this.realboxCanShowSecondarySide = e.matches;
    };
    observeRhsWrapperWidth_() {
        if (!this.rhsWrapperResizeObserver_) {
            this.rhsWrapperResizeObserver_ = new ResizeObserver(() => {
                this.rhsWidth_ = this.$.rhsWrapper.clientWidth;
                this.realboxCanShowSecondarySide =
                    this.rhsWidth_ >= REALBOX_SECONDARY_SIDE_MIN_WIDTH_PX;
            });
        }
        this.rhsWrapperResizeObserver_.observe(this.$.rhsWrapper);
    }
    onRhsContentScroll_() {
        this.scrolledToTop_ = this.$.rhsContent.scrollTop <= 0;
    }
    onLazyRendered_() {
        // Integration tests use this attribute to determine when lazy load has
        // completed.
        document.documentElement.setAttribute('lazy-loaded', String(true));
        if (this.maybeRegisterCustomizeButtonHelpBubble_()) {
            this.pageHandler_.maybeTriggerAutomaticCustomizeChromePromo();
        }
        if (this.showWallpaperSearchButton_) {
            this.customizeButtonsHandler_.incrementWallpaperSearchButtonShownCount();
        }
    }
    maybeRegisterCustomizeButtonHelpBubble_() {
        if (this.showCustomizeButton_ && !this.isFooterVisible_) {
            this.registerHelpBubble(CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID, ['ntp-customize-buttons', '#customizeButton'], { fixed: true });
            return true;
        }
        return false;
    }
    onActionChipClick_(e) {
        if (!this.composeboxEnabled) {
            // Enforce Composebox availability at the receiver even if an event
            // bypasses the Action Chips render gate.
            return;
        }
        const detail = e.detail;
        if (this.isUnsupportedSearchboxSurface_(detail.fuseboxAction)) {
            return;
        }
        this.pageHandler_.onContextualSearchIPHEngaged();
        if (this.hasRealboxOverride(detail.fuseboxAction)) {
            this.$.searchbox.handleFuseboxAction(detail.fuseboxAction);
            return;
        }
        this.openComposeboxForActionChip_(detail);
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
    onOpenComposebox_(e) {
        this.openComposebox_(e.detail);
    }
    async openComposeboxForActionChip_(detail) {
        await this.ensureComposeboxOpen_();
        const composebox = this.shadowRoot?.querySelector('#composebox');
        if (composebox) {
            await composebox.handleFuseboxAction(detail);
        }
    }
    onContextMenuEntrypointClick_() {
        this.pageHandler_.onContextualSearchIPHEngaged();
    }
    async openComposebox_(state = null) {
        const nextState = state ?? {
            text: '',
            files: [],
            mode: ToolMode.kUnspecified,
            model: ModelMode.kUnspecified,
            // 
            smartTabSharingActive: false,
            // 
        };
        await this.ensureComposeboxOpen_();
        const composebox = this.shadowRoot?.querySelector('#composebox');
        if (composebox) {
            composebox.state = nextState;
        }
    }
    async ensureComposeboxOpen_() {
        // <ntp-composebox> may be defined in lazy_load.js, which may not have been
        // loaded yet if the composebox is opened right after the NTP loads.
        await WindowProxy.getInstance().ensureLazyLoaded();
        if (!this.showComposebox_) {
            this.showComposebox_ = true;
            if (this.composeboxOutsideClickEnabled_) {
                this.composeboxFocused_ = true;
            }
        }
        else {
            this.shadowRoot.querySelector('#composebox')
                ?.focusInput();
        }
        if (!this.wasComposeboxOpened_) {
            recordLoadDuration('NewTabPage.Composebox.FromNTPLoadToSessionStart', WindowProxy.getInstance().now());
            this.wasComposeboxOpened_ = true;
        }
        // Wait for `<ntp-composebox>` to render in the DOM after setting
        // `showComposebox_ = true` before callers query `#composebox`.
        await this.updateComplete;
    }
    closeComposebox_() {
        this.showComposebox_ = false;
    }
    onScrimClick_() {
        if (this.showComposebox_) {
            this.onComposeboxOutsideClick_();
        }
        if (this.showLensUploadDialog_) {
            this.onCloseLensSearch_();
        }
        if (this.showVoiceSearchOverlay_) {
            const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
            if (dialog && dialog.open) {
                dialog.close();
            }
        }
        this.containerFocused_ = false;
    }
    onComposeboxOutsideClick_() {
        if (this.composeboxOutsideClickEnabled_) {
            this.composeboxFocused_ = false;
        }
        else {
            const composebox = this.shadowRoot.querySelector('#composebox');
            assert(composebox);
            const closeComposebox = new CustomEvent('closeComposebox', {
                detail: { composeboxText: composebox.input },
                bubbles: true,
                cancelable: true,
            });
            this.onCloseComposebox_(closeComposebox);
        }
    }
    onComposeboxContextMenuOpened_() {
        this.$.searchbox.closeContextMenu();
    }
    onCloseComposebox_(e) {
        if (!this.showComposebox_) {
            return;
        }
        this.$.searchbox.closeContextMenu();
        const composeboxText = e.detail.composeboxText;
        if (composeboxText && composeboxText.trim()) {
            this.$.searchbox.setInputText(composeboxText);
        }
        const composebox = this.shadowRoot.querySelector('#composebox');
        assert(composebox);
        composebox.input = '';
        composebox.resetModes();
        if (this.ntpRealboxNextEnabled_) {
            composebox.closeDropdown();
        }
        this.closeComposebox_();
        this.logoColor_ = this.computeLogoColor_();
        this.singleColoredLogo_ = this.computeSingleColoredLogo_();
        this.updateOneGoogleBarAppearance_();
    }
    onOpenVoiceSearch_() {
        this.openVoiceSearch_(/*activatedByKeyboard=*/ false);
        // When the experiment is enabled, voice search metrics are logged directly
        // by the shared component instead of NTP to prevent duplicate emissions.
        if (!this.voiceSearchCoherenceAnySearchboxExperimentEnabled_) {
            recordVoiceAction(VoiceAction.ACTIVATE);
        }
    }
    async openVoiceSearch_(activatedByKeyboard) {
        // <ntp-voice-search-overlay> and <cr-composebox-voice-search> may be
        // defined in lazy_load.js, which may not have been loaded yet if voice
        // search is opened right after the NTP loads.
        await WindowProxy.getInstance().ensureLazyLoaded();
        this.voiceSearchActivatedByKeyboard_ = activatedByKeyboard;
        this.showVoiceSearchOverlay_ = true;
    }
    onComposeVoiceSearchAction_(e) {
        if (this.voiceSearchCoherenceAnySearchboxExperimentEnabled_) {
            return;
        }
        switch (e.detail.value) {
            case ComposeVoiceSearchAction.ACTIVATE:
                recordVoiceAction(VoiceAction.ACTIVATE);
                break;
            case ComposeVoiceSearchAction.QUERY_SUBMITTED:
                recordVoiceAction(VoiceAction.QUERY_SUBMITTED);
                break;
            default:
                assertNotReached();
        }
    }
    async onOpenLensSearch_() {
        // <ntp-lens-upload-dialog> is defined in lazy_load.js, which may not have
        // been loaded yet if Lens search is opened right after the NTP loads.
        await WindowProxy.getInstance().ensureLazyLoaded();
        this.showLensUploadDialog_ = true;
    }
    onCloseLensSearch_() {
        this.showLensUploadDialog_ = false;
    }
    onCustomizeClick_() {
        // Let side panel decide what page or section to show.
        this.selectedCustomizeDialogPage_ = null;
        this.setCustomizeChromeSidePanelVisible_(!this.showCustomize_);
        if (!this.showCustomize_) {
            this.customizeButtonsHandler_.incrementCustomizeChromeButtonOpenCount();
            recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.CUSTOMIZE_BUTTON);
        }
    }
    computeShowWallpaperSearchButton_() {
        if (!this.wallpaperSearchButtonEnabled_) {
            return false;
        }
        switch (loadTimeData.getInteger('wallpaperSearchButtonHideCondition')) {
            case NtpWallpaperSearchButtonHideCondition.NONE:
                return true;
            case NtpWallpaperSearchButtonHideCondition.BACKGROUND_IMAGE_SET:
                return !this.showBackgroundImage_;
            case NtpWallpaperSearchButtonHideCondition.THEME_SET:
                return this.colorSourceIsBaseline && !this.showBackgroundImage_;
            default:
                return false;
        }
    }
    onWallpaperSearchClick_() {
        // Close the side panel if Wallpaper Search is open.
        if (this.showCustomize_ && this.showWallpaperSearch_) {
            this.selectedCustomizeDialogPage_ = null;
            this.setCustomizeChromeSidePanelVisible_(!this.showCustomize_);
            return;
        }
        // Open Wallpaper Search if the side panel is closed. Otherwise, navigate
        // the side panel to Wallpaper Search.
        this.selectedCustomizeDialogPage_ = CustomizeDialogPage.WALLPAPER_SEARCH;
        this.showWallpaperSearch_ = true;
        this.setCustomizeChromeSidePanelVisible_(this.showWallpaperSearch_);
        if (!this.showCustomize_) {
            this.customizeButtonsHandler_.incrementCustomizeChromeButtonOpenCount();
            recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.WALLPAPER_SEARCH_BUTTON);
        }
    }
    onVoiceSearchOverlayClose() {
        const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
        if (dialog && dialog.open) {
            return;
        }
        this.showVoiceSearchOverlay_ = false;
        this.hasVoiceSearchError = false;
        this.voiceSearchListening_ = false;
    }
    onVoicePermissionChanged_(e) {
        e.preventDefault();
        if (e.detail.isOpened) {
            this.voiceSearchListening_ = false;
        }
        else {
            this.voiceSearchListening_ =
                this.showVoiceSearchOverlay_ && !this.hasVoiceSearchError;
        }
        const audioAnimation = this.shadowRoot.querySelector('#voiceSearchGlow');
        if (audioAnimation) {
            if (e.detail.isOpened) { // Permission prompt opened.
                audioAnimation.classList.add(PERMISSION_PROMPT_CSS_CLASS);
            }
            else { // Permission prompt closed.
                audioAnimation.classList.remove(PERMISSION_PROMPT_CSS_CLASS);
            }
        }
        const voiceSearchElement = this.shadowRoot.querySelector('#voiceSearch');
        if (voiceSearchElement) {
            if (e.detail.isOpened) { // Permission prompt opened.
                voiceSearchElement.classList.add(PERMISSION_PROMPT_CSS_CLASS);
            }
            else { // Permission prompt closed.
                voiceSearchElement.classList.remove(PERMISSION_PROMPT_CSS_CLASS);
            }
        }
    }
    onVoiceSearchCancel_() {
        const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
        if (dialog) {
            dialog.close();
        }
        this.onVoiceSearchOverlayClose();
    }
    onVoiceSearchTranscriptUpdate_(e) {
        this.voiceSearchTranscript_ = e.detail;
    }
    onVoiceSearchSpeechReceived_() {
        this.voiceSearchReceivedSpeech_ = true;
    }
    showVoiceSearchGlow_() {
        if (this.hasVoiceSearchError) {
            return false;
        }
        // Audio wave is rendered for all 4 Realbox experiment arms (which have
        // helper text enabled) and the legacy 'No Live Transcription' arm.
        return !this.voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_ ||
            this.voiceSearchCoherenceRealboxHelperTextEnabled_;
    }
    onVoiceSearchDialogClick_(e) {
        const dialog = e.currentTarget;
        if (e.target === dialog) {
            dialog.close();
        }
    }
    onVoiceSearchFinalResult_(e) {
        // Receiving a final result also closes the voice search dialog.
        const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
        if (dialog) {
            dialog.close();
        }
        this.onVoiceSearchOverlayClose();
        const searchParams = new URLSearchParams();
        searchParams.append('q', e.detail);
        searchParams.append('gs_ivs', '1');
        searchParams.append('sourceid', 'chrome');
        const queryUrl = new URL('/search', loadTimeData.getString('googleBaseUrl'));
        queryUrl.search = searchParams.toString();
        WindowProxy.getInstance().navigate(queryUrl.href);
    }
    onVoiceSearchRecordingStopped_(e) {
        const query = e.detail;
        const dialog = this.shadowRoot.querySelector('#voiceSearchDialog');
        if (dialog) {
            dialog.close();
        }
        this.onVoiceSearchOverlayClose();
        if (query && query.trim().length > 0) {
            this.$.searchbox.setInputText(query);
            this.$.searchbox.focusInput();
            this.$.searchbox.queryAutocomplete(query, false, false);
        }
    }
    /**
     * Handles <CTRL> + <SHIFT> + <.> (also <CMD> + <SHIFT> + <.> on mac) to open
     * voice search.
     */
    onWindowKeydown_(e) {
        if (!this.isConnected) {
            return;
        }
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (e.key === 'Escape' &&
            (this.composeboxOutsideClickEnabled_ ? this.composeboxFocused_ :
                this.showComposebox_)) {
            const composebox = this.shadowRoot.querySelector('#composebox');
            if (composebox) {
                composebox.handleEscapeKeyLogic();
                e.preventDefault();
                return;
            }
        }
        if (ctrlKeyPressed && e.code === 'Period' && e.shiftKey) {
            this.openVoiceSearch_(/*activatedByKeyboard=*/ true);
            if (!this.voiceSearchCoherenceAnySearchboxExperimentEnabled_) {
                recordVoiceAction(VoiceAction.ACTIVATE_KEYBOARD);
            }
        }
    }
    rgbaOrInherit_(skColor) {
        return skColor ? skColorToRgba(skColor) : 'inherit';
    }
    computeShowBackgroundImage_() {
        return !!this.theme_ && !!this.theme_.backgroundImage;
    }
    onShowBackgroundImageChange_() {
        this.backgroundManager_.setShowBackgroundImage(this.showBackgroundImage_);
    }
    onThemeChange_() {
        if (this.theme_) {
            this.backgroundManager_.setBackgroundColor(this.theme_.backgroundColor);
            this.style.setProperty('--color-new-tab-page-attribution-foreground', this.rgbaOrInherit_(this.theme_.textColor));
            this.style.setProperty('--color-new-tab-page-most-visited-foreground', this.rgbaOrInherit_(this.theme_.textColor));
        }
        this.updateBackgroundImagePath_();
    }
    onThemeLoaded_(theme) {
        recordSparseValueWithPersistentHash('NewTabPage.Collections.IdOnLoad', theme.backgroundImageCollectionId ?? '');
        if (!theme.backgroundImage) {
            recordEnumeration('NewTabPage.BackgroundImageSource', NtpBackgroundImageSource.kNoImage, NtpBackgroundImageSource.MAX_VALUE + 1);
        }
        else {
            recordEnumeration('NewTabPage.BackgroundImageSource', theme.backgroundImage.imageSource, NtpBackgroundImageSource.MAX_VALUE + 1);
        }
    }
    onModulesLoadedChange_() {
        if (this.modulesLoaded_ &&
            loadTimeData.getBoolean('modulesEnabled')) {
            recordLoadDuration('NewTabPage.Modules.ShownTime', WindowProxy.getInstance().now());
        }
    }
    /**
     * Set the #backgroundImage |path| only when different and non-empty. Reset
     * the customize dialog background selection if the dialog is closed.
     *
     * The ntp-untrusted-iframe |path| is set directly. When using a data binding
     * instead, the quick updates to the |path| result in iframe loading an error
     * page.
     */
    updateBackgroundImagePath_() {
        const backgroundImage = this.theme_ && this.theme_.backgroundImage;
        if (!backgroundImage) {
            return;
        }
        this.backgroundManager_.setBackgroundImage(backgroundImage);
        if (this.wallpaperSearchButtonAnimationEnabled_ &&
            backgroundImage.imageSource ===
                NtpBackgroundImageSource.kWallpaperSearch ||
            backgroundImage.imageSource ===
                NtpBackgroundImageSource.kWallpaperSearchInspiration) {
            this.wallpaperSearchButtonAnimationEnabled_ = false;
        }
    }
    computeColorSourceIsBaseline() {
        return !!this.theme_ && this.theme_.isBaseline;
    }
    computeLogoColor_() {
        if (!this.theme_) {
            return null;
        }
        return this.theme_.logoColor ||
            (this.theme_.isDark ? hexColorToSkColor('#ffffff') : null);
    }
    computeSingleColoredLogo_() {
        return !!this.theme_ && (!!this.theme_.logoColor || this.theme_.isDark);
    }
    /**
     * Sends the command received from the given source and origin to the browser.
     * Relays the browser response to whether or not a promo containing the given
     * command can be shown back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the response back to the source promo
     * frame and should not be used for anything else.
     * @param  messageData Data received from the source promo frame.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    canShowPromoWithBrowserCommand_(messageData, commandSource, commandOrigin) {
        // Make sure we don't send unsupported commands to the browser.
        /** @type {!Command} */
        const commandId = Object.values(Command).includes(messageData.commandId) ?
            messageData.commandId :
            Command.kUnknownCommand;
        BrowserCommandProxy.getInstance().handler.canExecuteCommand(commandId).then(({ canExecute }) => {
            const response = {
                messageType: messageData.messageType,
                [messageData.commandId]: canExecute,
            };
            WindowProxy.getInstance().postMessage(commandSource, response, commandOrigin);
        });
    }
    /**
     * Sends the command and the accompanying mouse click info received from the
     * promo of the given source and origin to the browser. Relays the execution
     * status response back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the execution status response back to
     * the source promo frame and should not be used for anything else.
     * @param commandData Command and mouse click info.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    executePromoBrowserCommand_(commandData, commandSource, commandOrigin) {
        // Make sure we don't send unsupported commands to the browser.
        const commandId = Object.values(Command).includes(commandData.commandId) ?
            commandData.commandId :
            Command.kUnknownCommand;
        BrowserCommandProxy.getInstance()
            .handler.executeCommand(commandId, commandData.clickInfo)
            .then(({ commandExecuted }) => {
            WindowProxy.getInstance().postMessage(commandSource, commandExecuted, commandOrigin);
        });
    }
    /**
     * Handles messages from the OneGoogleBar iframe. The messages that are
     * handled include show bar on load and overlay updates.
     *
     * 'overlaysUpdated' message includes the updated array of overlay rects that
     * are shown.
     */
    handleOneGoogleBarMessage_(event) {
        const data = event.data;
        if (data.messageType === 'loaded') {
            const oneGoogleBar = $$(this, '#oneGoogleBar');
            oneGoogleBar.style.clipPath = 'url(#oneGoogleBarClipPath)';
            oneGoogleBar.style.zIndex = '1000';
            this.oneGoogleBarLoaded_ = true;
            this.pageHandler_.onOneGoogleBarRendered(WindowProxy.getInstance().now());
        }
        else if (data.messageType === 'overlaysUpdated') {
            this.$.oneGoogleBarClipPath.querySelectorAll('rect').forEach(el => {
                el.remove();
            });
            const overlayRects = data.data;
            overlayRects.forEach(({ x, y, width, height }) => {
                const rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                // Add 8px around every rect to ensure shadows are not cutoff.
                rectElement.setAttribute('x', `${x - 8}`);
                rectElement.setAttribute('y', `${y - 8}`);
                rectElement.setAttribute('width', `${width + 16}`);
                rectElement.setAttribute('height', `${height + 16}`);
                this.$.oneGoogleBarClipPath.appendChild(rectElement);
            });
        }
        else if (data.messageType === 'can-show-promo-with-browser-command') {
            this.canShowPromoWithBrowserCommand_(data, event.source, event.origin);
        }
        else if (data.messageType === 'execute-browser-command') {
            this.executePromoBrowserCommand_(data.data, event.source, event.origin);
        }
        else if (data.messageType === 'click') {
            recordClick(NtpElement.ONE_GOOGLE_BAR);
        }
    }
    onModulesLoaded_(e) {
        this.modulesLoadedStatus_ = e.detail ?
            ModuleLoadStatus.MODULE_LOAD_COMPLETE :
            ModuleLoadStatus.MODULE_LOAD_NOT_ATTEMPTED;
    }
    computeShowBrowserPromo_() {
        return !this.modulesEnabled_ ||
            (this.modulesLoadedStatus_ !==
                ModuleLoadStatus.MODULE_LOAD_IN_PROGRESS &&
                !this.modulesShownToUser);
    }
    recordBrowserPromoMetrics_() {
        if (!this.showBrowserPromo_) {
            recordShowBrowserPromosResult(ShowNtpPromosResult.kNotShownDueToPolicy);
            return;
        }
        switch (this.browserPromoType_) {
            case 'disabled':
                recordShowBrowserPromosResult(ShowNtpPromosResult.kNotShownDueToPolicy);
                break;
            case 'empty':
                recordShowBrowserPromosResult(ShowNtpPromosResult.kNotShownNoPromos);
                break;
            case 'simple':
                recordShowBrowserPromosResult(ShowNtpPromosResult.kShown);
                break;
            default:
                break;
        }
    }
    onCustomizeModule_() {
        this.showCustomize_ = true;
        this.selectedCustomizeDialogPage_ = CustomizeDialogPage.MODULES;
        recordCustomizeChromeOpen(NtpCustomizeChromeEntryPoint.MODULE);
        this.setCustomizeChromeSidePanelVisible_(this.showCustomize_);
    }
    setCustomizeChromeSidePanelVisible_(visible) {
        let section = CustomizeChromeSection.kUnspecified;
        switch (this.selectedCustomizeDialogPage_) {
            case CustomizeDialogPage.BACKGROUNDS:
            case CustomizeDialogPage.THEMES:
                section = CustomizeChromeSection.kAppearance;
                break;
            case CustomizeDialogPage.SHORTCUTS:
                section = CustomizeChromeSection.kShortcuts;
                break;
            case CustomizeDialogPage.MODULES:
                section = CustomizeChromeSection.kModules;
                break;
            case CustomizeDialogPage.WALLPAPER_SEARCH:
                section = CustomizeChromeSection.kWallpaperSearch;
                break;
            default:
                break;
        }
        this.customizeButtonsHandler_.setCustomizeChromeSidePanelVisible(visible, section, SidePanelOpenTrigger.kNewTabPage);
    }
    printPerformanceDatum_(name, time, auxTime = 0) {
        if (!this.shouldPrintPerformance_) {
            return;
        }
        console.info(!auxTime ? `${name}: ${time}` : `${name}: ${time} (${auxTime})`);
    }
    /**
     * Prints performance measurements to the console. Also, installs  performance
     * observer to continuously print performance measurements after.
     */
    printPerformance_() {
        if (!this.shouldPrintPerformance_) {
            return;
        }
        const entryTypes = ['paint', 'measure'];
        const log = (entry) => {
            this.printPerformanceDatum_(entry.name, entry.duration ? entry.duration : entry.startTime, entry.duration && entry.startTime ? entry.startTime : 0);
        };
        const observer = new PerformanceObserver(list => {
            list.getEntries().forEach((entry) => {
                log(entry);
            });
        });
        observer.observe({ entryTypes: entryTypes });
        performance.getEntries().forEach((entry) => {
            if (!entryTypes.includes(entry.entryType)) {
                return;
            }
            log(entry);
        });
    }
    onWebstoreToastButtonClick_() {
        window.location.assign(`https://chrome.google.com/webstore/category/collection/chrome_color_themes?hl=${window.navigator.language}`);
    }
    onWindowClick_(e) {
        if (this.ntpRealboxNextEnabled_) {
            const searchbox = this.shadowRoot.querySelector('ntp-searchbox');
            const isClickOnBubble = e.composedPath().some(el => el?.tagName === 'HELP-BUBBLE');
            const isClickOnSearchbox = searchbox && e.composedPath().includes(searchbox);
            if (!isClickOnBubble && isClickOnSearchbox) {
                this.hideHelpBubble(CONTEXTUAL_ENTRYPOINT_ELEMENT_ID);
            }
        }
        if (e.composedPath()[0] === $$(this, '#rhsContent')) {
            recordClick(NtpElement.BACKGROUND);
            return;
        }
        for (const target of e.composedPath()) {
            switch (target) {
                case $$(this, 'ntp-logo'):
                    recordClick(NtpElement.LOGO);
                    return;
                case $$(this, 'ntp-searchbox'):
                    recordClick(NtpElement.REALBOX);
                    return;
                case $$(this, 'ntp-action-chips'):
                    recordClick(NtpElement.ACTION_CHIPS);
                    return;
                case $$(this, 'cr-most-visited'):
                    recordClick(NtpElement.MOST_VISITED);
                    return;
                case $$(this, '#modules'):
                    recordClick(NtpElement.MODULE);
                    return;
                case $$(this, 'cr-left-hand-side'):
                    recordClick(NtpElement.THREADS_RAIL);
                    return;
                default:
                    break;
            }
        }
        const customizeButtonsElement = this.shadowRoot.querySelector('ntp-customize-buttons');
        if (customizeButtonsElement) {
            for (const target of e.composedPath()) {
                switch (target) {
                    case $$(customizeButtonsElement, '#customizeButton'):
                        recordClick(NtpElement.CUSTOMIZE_BUTTON);
                        return;
                    case $$(customizeButtonsElement, '#wallpaperSearchButton'):
                        recordClick(NtpElement.WALLPAPER_SEARCH_BUTTON);
                        return;
                    default:
                        break;
                }
            }
        }
        recordClick(NtpElement.OTHER);
    }
    isThemeDark_() {
        return !!this.theme_ && this.theme_.isDark;
    }
    showActionChipsBackground_() {
        return !!this.theme_ &&
            (!!this.theme_.backgroundImage || !this.theme_.isGm3);
    }
    showThemeAttribution_() {
        return !!this.theme_?.backgroundImage?.attributionUrl;
    }
    onSearchboxContainerFocusin_(e) {
        const isHelpBubble = e.composedPath().some(el => el?.tagName === 'HELP-BUBBLE');
        if (this.ntpRealboxNextEnabled_ && !isHelpBubble) {
            this.containerFocused_ = true;
        }
        if (this.composeboxOutsideClickEnabled_ && this.showComposebox_ &&
            !isHelpBubble) {
            this.composeboxFocused_ = true;
        }
    }
    onSearchboxContainerFocusout_() {
        if (this.ntpRealboxNextEnabled_) {
            this.containerFocused_ =
                this.shadowRoot.getElementById('searchboxContainer').matches(':focus-within');
        }
    }
    onModulesShownToUserChanged_(e) {
        this.modulesShownToUser = e.detail.value;
    }
    async initializeContextMenuAnimationState_() {
        if (this.ntpRealboxNextEnabled_) {
            let canShow = true;
            if (this.contextMenuAnimationLimitingEnabled_) {
                const { canShow: allowed } = await this.pageHandler_.canShowRealboxContextMenuAnimation();
                canShow = allowed;
            }
            this.realboxContextMenuAnimationAllowed_ = canShow;
            if (canShow) {
                if (this.energyEffectAnimationEnabled_) {
                    this.contextMenuGlifAnimationState_ = GlifAnimationState.STARTED;
                    this.pageHandler_.recordRealboxContextMenuAnimationImpression(true);
                }
                else {
                    const isSpinnerEligible = this.ntpNextFeaturesEnabled_ && this.isActionChipsVisible_;
                    this.contextMenuGlifAnimationState_ = isSpinnerEligible ?
                        GlifAnimationState.SPINNER_ONLY :
                        GlifAnimationState.INELIGIBLE;
                }
            }
            else {
                this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
                this.pageHandler_.recordRealboxContextMenuAnimationImpression(false);
            }
        }
        else {
            this.realboxContextMenuAnimationAllowed_ = false;
            this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
        }
    }
    onActionChipsRetrievalStateChanged_(e) {
        if (!this.realboxContextMenuAnimationAllowed_) {
            this.contextMenuGlifAnimationState_ = GlifAnimationState.INELIGIBLE;
            return;
        }
        if (this.energyEffectAnimationEnabled_) {
            return;
        }
        const state = e.detail.state;
        // Mapping of ActionChipsRetrievalState => GlifAnimationState:
        // REQUESTED => SPINNER_ONLY
        // UPDATED => STARTED (or FINISHED if cr_context_menu_entrypoint sets it)
        // To avoid going back (or continuing) GlifAnimationState.STARTED, we stop
        // updating the field when the current state is STARTED or FINISHED.
        // There are a few cases to consider:
        // - IsActionChipsVisible_ is false (and remains so): no event from the
        //   action chips element, and thus the animation state remains INELIGIBLE.
        // - IsActionChipsVisible_ is false and later becomes true: the change
        //   triggers the rendering of the action chips element, and this in turn
        //   causes an event with ActionChipsRetrievalState.REQUESTED to be fired.
        //   After some time, an event with ActionChipsRetrievalState.UPDATED will
        //   fire, and this starts the animation.
        // - IsActionChipsVisible_ is true from the beginning: Same as above.
        if ([GlifAnimationState.STARTED, GlifAnimationState.FINISHED].every(s => s !== this.contextMenuGlifAnimationState_)) {
            if (state === ActionChipsRetrievalState.REQUESTED) {
                this.contextMenuGlifAnimationState_ = GlifAnimationState.SPINNER_ONLY;
            }
            else if (state === ActionChipsRetrievalState.UPDATED) {
                this.contextMenuGlifAnimationState_ = GlifAnimationState.STARTED;
                this.pageHandler_.recordRealboxContextMenuAnimationImpression(true);
            }
        }
    }
    /**
     * Called whenever an auto-removed feature is being processed and the undo
     * toast needs to be shown. This will queue up the toast in the pending FIFO
     * list and then call the processing function.
     *
     * @param undoToastContext - An event that contains the undo toast message and
     *                           the undo callback function.
     */
    onMostVisitedAutoRemoved_(undoToastContext) {
        this.showUndoToast_(undoToastContext);
    }
    onModulesAutoRemoved_(undoToastContext) {
        this.showUndoToast_(undoToastContext);
    }
    onActionChipsDisabled_(undoToastContext) {
        this.showUndoToast_(undoToastContext);
    }
    showUndoToast_(undoToastContext) {
        this.pendingUndoToasts_.push(undoToastContext.detail);
        this.processPendingUndoToasts_();
    }
    /**
     * Called whenever the pending toasts need to be processed. This is called
     * whenever a new toast is added to the pending list through an auto-removal
     * event, or when the user clicks on the undo button in the toast.
     *
     * In case the undo toast is already open, then it's a no-op to avoid showing
     * multiple toasts at the same time. Otherwise, the first pending toast is
     * popped and shown.
     */
    processPendingUndoToasts_() {
        if (this.pendingUndoToasts_.length === 0) {
            return;
        }
        const undoToast = this.shadowRoot.querySelector('#undoToast');
        if (undoToast.open) {
            return;
        }
        const undoToastContext = this.pendingUndoToasts_.shift();
        this.undoToastCallback_ = undoToastContext.undo;
        this.undoToastMessage_ = undoToastContext.message;
        undoToast.show();
    }
    /**
     * Processes an auto-removal undo click. It will hide the toast, call the
     * undo callback, and call the processing function to handle the next queued
     * toast (if any).
     */
    onUndoButtonClick_() {
        this.shadowRoot.querySelector('#undoToast').hide();
        this.undoToastCallback_?.();
        this.undoToastCallback_ = null;
        this.undoToastMessage_ = null;
        this.processPendingUndoToasts_();
    }
    onShowComposeboxChange_() {
        const notSelector = (this.composeboxOutsideClickEnabled_ ?
            [...COMPOSEBOX_INERT_ALLOWLIST, '#scrim'] :
            COMPOSEBOX_INERT_ALLOWLIST)
            .map(s => `:not(${s})`)
            .join('');
        const blockedElements = this.shadowRoot.querySelectorAll(`#rhsContent > ${notSelector}`);
        blockedElements.forEach(element => {
            if (this.composeboxOutsideClickEnabled_ ? this.composeboxFocused_ :
                this.showComposebox_) {
                element.setAttribute('inert', '');
            }
            else {
                element.removeAttribute('inert');
            }
        });
    }
    hasRealboxOverride(action) {
        return !!action && action?.searchboxOverride === SearchboxOverride.kRealbox;
    }
}
customElements.define(AppElement.is, AppElement);
