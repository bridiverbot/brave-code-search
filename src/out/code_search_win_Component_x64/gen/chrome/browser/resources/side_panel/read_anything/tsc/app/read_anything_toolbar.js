// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '../read_aloud/voice_selection_menu.js';
import '../menus/simple_action_menu.js';
import '../menus/appearance_menu.js';
import '../menus/audio_menu.js';
import '../menus/media_menu.js';
import '../menus/color_menu.js';
import '../menus/font_menu.js';
import '../menus/font_size_menu.js';
import '../menus/line_focus_menu.js';
import '../menus/line_spacing_menu.js';
import '../menus/letter_spacing_menu.js';
import '../menus/text_menu.js';
import '../menus/highlight_menu.js';
import '../menus/rate_menu.js';
import '../menus/presentation_menu.js';
import '../menus/settings_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { HelpBubbleMixinLit } from '//resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { AnchorAlignment } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SettingsOption, ToolbarEvent } from '../content/read_anything_types.js';
import { AudioBrowserProxyImpl } from '../read_aloud/audio_browser_proxy.js';
import { spinnerDebounceTimeout } from '../shared/common.js';
import { getNewIndex, isHorizontalArrow } from '../shared/keyboard_util.js';
import { ReadAnythingLogger, SpeechControls, TimeFrom } from '../shared/read_anything_logger.js';
import { getCss } from './read_anything_toolbar.css.js';
import { getHtml } from './read_anything_toolbar.html.js';
import { VisualBrowserProxyImpl } from './visual_browser_proxy.js';
const ReadAnythingToolbarElementBase = HelpBubbleMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class ReadAnythingToolbarElement extends ReadAnythingToolbarElementBase {
    static get is() {
        return 'read-anything-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isSpeechActive: { type: Boolean },
            isAudioCurrentlyPlaying: { type: Boolean },
            isReadAloudPlayable: { type: Boolean },
            selectedVoice: { type: Object },
            availableVoices: { type: Array },
            enabledLangs: { type: Array },
            localeToDisplayName: { type: Object },
            previewVoicePlaying: { type: Object },
            theme: { type: Number },
            lineSpacing: { type: Number },
            letterSpacing: { type: Number },
            font: { type: String },
            fontSize: { type: Number },
            speechRate: { type: Number },
            highlightGranularity: { type: Number },
            linksEnabled: { type: Boolean },
            imagesEnabled: { type: Boolean },
            areFontsLoaded_: { type: Boolean },
            textStyleOptions_: { type: Array },
            hideSpinner_: { type: Boolean },
            pageLanguage: { type: String },
            presentationState: { type: Number },
            isImmersiveMode: { type: Boolean },
            isReadAnythingPinned: { type: Boolean },
            isLineFocusShowing: { type: Boolean },
            lineFocusStyle: { type: Object },
            lineFocusEnabled: { type: Boolean },
            lineFocusMovement: { type: Number },
            webuiRoundedIconsEnabled_: { type: Boolean },
            isAiPlaybackActive: { type: Boolean },
            isAiPlaybackUiEnabled_: { type: Boolean },
        };
    }
    #presentationState_accessor_storage = 0;
    // Reactive properties below
    get presentationState() { return this.#presentationState_accessor_storage; }
    set presentationState(value) { this.#presentationState_accessor_storage = value; }
    #availableVoices_accessor_storage = [];
    get availableVoices() { return this.#availableVoices_accessor_storage; }
    set availableVoices(value) { this.#availableVoices_accessor_storage = value; }
    #enabledLangs_accessor_storage = [];
    get enabledLangs() { return this.#enabledLangs_accessor_storage; }
    set enabledLangs(value) { this.#enabledLangs_accessor_storage = value; }
    #isSpeechActive_accessor_storage = false;
    // If Read Aloud is playing speech.
    get isSpeechActive() { return this.#isSpeechActive_accessor_storage; }
    set isSpeechActive(value) { this.#isSpeechActive_accessor_storage = value; }
    #isAudioCurrentlyPlaying_accessor_storage = false;
    // If speech is actually playing. Due to latency with the TTS engine, there
    // can be a delay between when the user presses play and speech actually
    // plays.
    get isAudioCurrentlyPlaying() { return this.#isAudioCurrentlyPlaying_accessor_storage; }
    set isAudioCurrentlyPlaying(value) { this.#isAudioCurrentlyPlaying_accessor_storage = value; }
    #isReadAloudPlayable_accessor_storage = false;
    // If Read Aloud is playable. Certain states, such as when Read Anything does
    // not have content or when the speech engine is loading should disable
    // certain toolbar buttons like the play / pause button should be disabled.
    // This is set from the parent element via one way data binding.
    get isReadAloudPlayable() { return this.#isReadAloudPlayable_accessor_storage; }
    set isReadAloudPlayable(value) { this.#isReadAloudPlayable_accessor_storage = value; }
    #isReadAnythingPinned_accessor_storage = false;
    get isReadAnythingPinned() { return this.#isReadAnythingPinned_accessor_storage; }
    set isReadAnythingPinned(value) { this.#isReadAnythingPinned_accessor_storage = value; }
    #localeToDisplayName_accessor_storage = {};
    get localeToDisplayName() { return this.#localeToDisplayName_accessor_storage; }
    set localeToDisplayName(value) { this.#localeToDisplayName_accessor_storage = value; }
    #previewVoicePlaying_accessor_storage = null;
    get previewVoicePlaying() { return this.#previewVoicePlaying_accessor_storage; }
    set previewVoicePlaying(value) { this.#previewVoicePlaying_accessor_storage = value; }
    #theme_accessor_storage = 0;
    // Current user settings, owned by the app and passed down to the menus.
    get theme() { return this.#theme_accessor_storage; }
    set theme(value) { this.#theme_accessor_storage = value; }
    #lineSpacing_accessor_storage = 0;
    get lineSpacing() { return this.#lineSpacing_accessor_storage; }
    set lineSpacing(value) { this.#lineSpacing_accessor_storage = value; }
    #letterSpacing_accessor_storage = 0;
    get letterSpacing() { return this.#letterSpacing_accessor_storage; }
    set letterSpacing(value) { this.#letterSpacing_accessor_storage = value; }
    #font_accessor_storage = '';
    get font() { return this.#font_accessor_storage; }
    set font(value) { this.#font_accessor_storage = value; }
    #fontSize_accessor_storage = 0;
    get fontSize() { return this.#fontSize_accessor_storage; }
    set fontSize(value) { this.#fontSize_accessor_storage = value; }
    #speechRate_accessor_storage = 1;
    get speechRate() { return this.#speechRate_accessor_storage; }
    set speechRate(value) { this.#speechRate_accessor_storage = value; }
    #highlightGranularity_accessor_storage = 0;
    get highlightGranularity() { return this.#highlightGranularity_accessor_storage; }
    set highlightGranularity(value) { this.#highlightGranularity_accessor_storage = value; }
    #linksEnabled_accessor_storage = false;
    get linksEnabled() { return this.#linksEnabled_accessor_storage; }
    set linksEnabled(value) { this.#linksEnabled_accessor_storage = value; }
    #imagesEnabled_accessor_storage = false;
    get imagesEnabled() { return this.#imagesEnabled_accessor_storage; }
    set imagesEnabled(value) { this.#imagesEnabled_accessor_storage = value; }
    #selectedVoice_accessor_storage = null;
    get selectedVoice() { return this.#selectedVoice_accessor_storage; }
    set selectedVoice(value) { this.#selectedVoice_accessor_storage = value; }
    #pageLanguage_accessor_storage = '';
    get pageLanguage() { return this.#pageLanguage_accessor_storage; }
    set pageLanguage(value) { this.#pageLanguage_accessor_storage = value; }
    #isImmersiveMode_accessor_storage = false;
    get isImmersiveMode() { return this.#isImmersiveMode_accessor_storage; }
    set isImmersiveMode(value) { this.#isImmersiveMode_accessor_storage = value; }
    #isLineFocusShowing_accessor_storage = false;
    get isLineFocusShowing() { return this.#isLineFocusShowing_accessor_storage; }
    set isLineFocusShowing(value) { this.#isLineFocusShowing_accessor_storage = value; }
    #lineFocusStyle_accessor_storage = null;
    get lineFocusStyle() { return this.#lineFocusStyle_accessor_storage; }
    set lineFocusStyle(value) { this.#lineFocusStyle_accessor_storage = value; }
    #lineFocusEnabled_accessor_storage = false;
    get lineFocusEnabled() { return this.#lineFocusEnabled_accessor_storage; }
    set lineFocusEnabled(value) { this.#lineFocusEnabled_accessor_storage = value; }
    #lineFocusMovement_accessor_storage = null;
    get lineFocusMovement() { return this.#lineFocusMovement_accessor_storage; }
    set lineFocusMovement(value) { this.#lineFocusMovement_accessor_storage = value; }
    #isAiPlaybackActive_accessor_storage = false;
    get isAiPlaybackActive() { return this.#isAiPlaybackActive_accessor_storage; }
    set isAiPlaybackActive(value) { this.#isAiPlaybackActive_accessor_storage = value; }
    #hideSpinner__accessor_storage = true;
    get hideSpinner_() { return this.#hideSpinner__accessor_storage; }
    set hideSpinner_(value) { this.#hideSpinner__accessor_storage = value; }
    #isAiPlaybackUiEnabled__accessor_storage = false;
    get isAiPlaybackUiEnabled_() { return this.#isAiPlaybackUiEnabled__accessor_storage; }
    set isAiPlaybackUiEnabled_(value) { this.#isAiPlaybackUiEnabled__accessor_storage = value; }
    #textStyleOptions__accessor_storage = [];
    // Buttons on the toolbar that open a menu of options.
    get textStyleOptions_() { return this.#textStyleOptions__accessor_storage; }
    set textStyleOptions_(value) { this.#textStyleOptions__accessor_storage = value; }
    #areFontsLoaded__accessor_storage = false;
    get areFontsLoaded_() { return this.#areFontsLoaded__accessor_storage; }
    set areFontsLoaded_(value) { this.#areFontsLoaded__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    // Member variables below
    startTime_ = Date.now();
    constructorTime_ = 0;
    currentFocusId_ = '';
    toolbarContainerBlurCallback_ = () => { };
    // The previous speech active status so we can track when it changes.
    wasSpeechActive_ = false;
    spinnerDebouncerCallbackHandle_;
    logger_ = ReadAnythingLogger.getInstance();
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    audioBrowserProxy_ = AudioBrowserProxyImpl.getInstance();
    // Corresponds to UI setup being complete on the toolbar when
    // connectedCallback has finished executing.
    isSetupComplete_ = false;
    isReadingModeInactive() {
        return this.presentationState ===
            this.visualBrowserProxy_.getInHiddenPresentationState();
    }
    isReadingModeInSidePanel() {
        return this.presentationState ===
            this.visualBrowserProxy_.getInSidePanelPresentationState();
    }
    constructor() {
        super();
        this.constructorTime_ = Date.now();
        this.logger_.logTimeFrom(TimeFrom.TOOLBAR, this.startTime_, this.constructorTime_);
        this.isAiPlaybackUiEnabled_ =
            this.visualBrowserProxy_
                .isReadAnythingReadAloudExperimentalPlaybackUiEnabled();
    }
    connectedCallback() {
        super.connectedCallback();
        this.toolbarContainerBlurCallback_ =
            this.onToolbarContainerBlur_.bind(this);
        this.$.toolbarContainer.addEventListener('blur', this.toolbarContainerBlurCallback_);
        this.loadFontsStylesheet();
        this.initializeMenuButtons_();
        this.isSetupComplete_ = true;
    }
    disconnectedCallback() {
        this.$.toolbarContainer.removeEventListener('blur', this.toolbarContainerBlurCallback_);
        if (this.spinnerDebouncerCallbackHandle_ !== undefined) {
            clearTimeout(this.spinnerDebouncerCallbackHandle_);
        }
        super.disconnectedCallback();
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.registerHelpBubble('kReadAnythingViewModeElementId', '#toolbarContainer');
        this.registerHelpBubble('kReadAnythingSettingsButtonElementId', '#more');
        if (this.isAiPlaybackUiEnabled_) {
            this.registerHelpBubble('kReadAnythingAiPlaybackToggleElementId', '#ai-playback-toggle');
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('font')) {
            this.style.fontFamily =
                this.visualBrowserProxy_.getValidatedFontName(this.font);
        }
        if (changedProperties.has('isSpeechActive') ||
            changedProperties.has('isAudioCurrentlyPlaying')) {
            this.onSpeechPlayingStateChanged_();
        }
        if (changedProperties.has('presentationState') &&
            (this.isReadingModeInSidePanel() || this.isReadingModeInactive())) {
            this.$.toolbarContainer.tabIndex = 0;
            const currentFocusedElement = this.$.toolbarContainer.querySelector('[tabindex="0"]');
            if (!currentFocusedElement) {
                const tabIndexElementId = this.isReadAloudPlayable ? '#play-pause' : '#rate';
                const element = this.$.toolbarContainer.querySelector(tabIndexElementId);
                if (element) {
                    element.tabIndex = 0;
                }
            }
        }
    }
    initializeMenuButtons_() {
        this.textStyleOptions_ = [{
                id: 'font-size',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'read-anything:format-size' :
                    'read-anything:font-size-old',
                ariaLabel: loadTimeData.getString('fontSizeTitle'),
                openMenu: (target) => this.$.fontSizeMenu.open(target),
            }];
    }
    getHighlightButtonLabel_() {
        return loadTimeData.getString('voiceHighlightLabel');
    }
    getFormattedSpeechRate_() {
        const includeSuffix = this.speechRate % 1 === 0;
        return includeSuffix ?
            loadTimeData.getStringF('voiceSpeedOptionTitle', this.speechRate.toLocaleString()) :
            this.speechRate.toLocaleString();
    }
    onCloseClick_() {
        this.visualBrowserProxy_.close();
    }
    // Loading the fonts stylesheet can take a while, especially with slow
    // Internet connections. Since we don't want this to block the rest of
    // Reading Mode from loading, we load this stylesheet asynchronously
    // in TypeScript instead of in read_anything.html
    loadFontsStylesheet() {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = 'https://fonts.googleapis.com/css?family=';
        link.href += this.visualBrowserProxy_.getAllFonts().join('|');
        link.href = link.href.replace(' ', '+');
        link.addEventListener('load', () => {
            link.media = 'all';
            link.rel = 'stylesheet';
            this.setFontsLoaded();
        }, { once: true });
        document.head.appendChild(link);
    }
    setFontsLoaded() {
        this.areFontsLoaded_ = true;
    }
    playPauseButtonAriaLabel_() {
        return loadTimeData.getString('playAriaLabel');
    }
    playPauseButtonTitle_() {
        return loadTimeData.getString(this.isSpeechActive ? 'pauseTooltip' : 'playTooltip');
    }
    playPauseButtonIronIcon_() {
        if (this.isSpeechActive) {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything-20:pause-circle-filled' :
                'read-anything-20:pause-old';
        }
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'read-anything-20:play-circle-filled' :
            'read-anything-20:play-old';
    }
    onNextGranularityClick_() {
        this.logger_.logSpeechControlClick(SpeechControls.NEXT);
        this.fire(ToolbarEvent.NEXT_GRANULARITY);
    }
    onPreviousGranularityClick_() {
        this.logger_.logSpeechControlClick(SpeechControls.PREVIOUS);
        this.fire(ToolbarEvent.PREVIOUS_GRANULARITY);
    }
    onTextStyleMenuButtonClick_(e) {
        const currentTarget = e.currentTarget;
        const index = Number.parseInt(currentTarget.dataset['index']);
        const menu = this.textStyleOptions_[index];
        assert(menu);
        menu.openMenu(currentTarget);
    }
    onShowRateMenuClick_(event) {
        this.$.rateMenu.open(event.target);
    }
    onAiPlaybackClick_() {
        this.isAiPlaybackActive = !this.isAiPlaybackActive;
        this.audioBrowserProxy_.onAiPlaybackStateChanged(this.isAiPlaybackActive);
    }
    onMoreOptionsClick_(event) {
        const target = event.target;
        this.$.settingsMenu.open(target);
    }
    onPlayPauseClick_() {
        this.logger_.logSpeechControlClick(this.isSpeechActive ? SpeechControls.PAUSE : SpeechControls.PLAY);
        if (this.isSpeechActive) {
            this.logger_.logSpeechStopSource(this.audioBrowserProxy_.getPauseButtonStopSource());
        }
        this.fire(ToolbarEvent.PLAY_PAUSE);
    }
    onLineFocusOffClick_() {
        this.fire(ToolbarEvent.LINE_FOCUS_TOGGLE, { data: false });
    }
    onToolbarKeydown_(e) {
        const toolbar = this.$.toolbarContainer;
        const buttons = Array.from(
        // TODO(crbug.com/342411653): Update the loading spinner to be inside a
        // button and update the querySelectorAll to use just '.toolbar-button'.
        toolbar.querySelectorAll('cr-icon-button.toolbar-button, cr-button.toolbar-button'));
        assert(buttons, 'no toolbar buttons');
        // Only allow focus on the currently visible and actionable elements.
        const focusableElements = buttons.filter(el => {
            return (el.clientHeight > 0) && (el.clientWidth > 0) &&
                (el.getBoundingClientRect().right < toolbar.clientWidth) &&
                (el.style.visibility !== 'hidden') && (el.style.display !== 'none') &&
                (!el.disabled) && (el.className !== 'separator');
        });
        this.onKeyDown_(e, focusableElements);
    }
    onCloseAllMenus_(event) {
        this.closeAllMenus_(event.detail?.previousId);
    }
    onCloseSubmenuRequested_(event) {
        this.closeSubmenu_(event.detail.previousId);
    }
    onOpenSettingsSubmenu_(event) {
        const { id, previousId, target } = event.detail;
        if (previousId) {
            const previousMenu = this.settingsMenu_[previousId];
            previousMenu?.close();
        }
        const showAtConfig = {
            minY: 0,
            anchorAlignmentY: AnchorAlignment.AFTER_START,
        };
        const currentMenu = this.settingsMenu_[id];
        currentMenu?.open(target, showAtConfig);
    }
    closeAllMenus_(previousId = null) {
        if (previousId) {
            this.closeSubmenu_(previousId);
        }
        this.$.settingsMenu.close();
    }
    closeSubmenu_(submenuId) {
        const previousMenu = this.settingsMenu_[submenuId];
        assert(previousMenu, `settings ${submenuId} submenu not found`);
        previousMenu.close();
    }
    get settingsMenu_() {
        return {
            [SettingsOption.APPEARANCE]: this.$.appearanceMenu,
            [SettingsOption.AUDIO]: this.$.audioMenu,
            [SettingsOption.MEDIA]: this.$.mediaMenu,
            [SettingsOption.COLOR]: this.$.colorMenu,
            [SettingsOption.VOICE_HIGHLIGHT]: this.$.highlightMenu,
            [SettingsOption.TEXT]: this.$.textMenu,
            [SettingsOption.FONT]: this.$.fontMenu,
            [SettingsOption.LETTER_SPACING]: this.$.letterSpacingMenu,
            [SettingsOption.LINE_FOCUS]: this.$.lineFocusMenu,
            [SettingsOption.LINE_SPACING]: this.$.lineSpacingMenu,
            [SettingsOption.VOICE_SELECTION]: this.$.voiceSelectionMenu,
            [SettingsOption.PRESENTATION]: this.$.presentationMenu,
        };
    }
    onKeyDown_(e, focusableElements) {
        if (!isHorizontalArrow(e.key)) {
            return;
        }
        e.preventDefault();
        //  Move to the next focusable item in the toolbar, wrapping around
        //  if we've reached the end or beginning.
        assert(e.target instanceof HTMLElement);
        const newIndex = getNewIndex(e.key, e.target, focusableElements);
        const elementToFocus = focusableElements[newIndex];
        assert(elementToFocus);
        this.updateFocus_(focusableElements, newIndex);
    }
    resetHideSpinnerDebouncer_() {
        // Use a debouncer to reduce glitches. Even when audio is fast to respond to
        // the play button, there are still milliseconds of delay. To prevent the
        // spinner from quickly appearing and disappearing, we use a debouncer. If
        // either the values of `isSpeechActive` or `isAudioCurrentlyPlaying`
        // change, the previously scheduled callback is canceled and a new callback
        // is scheduled.
        // TODO: crbug.com/339860819 - improve debouncer logic so that the spinner
        // disappears immediately when speech starts playing, or when the pause
        // button is hit.
        if (this.spinnerDebouncerCallbackHandle_ !== undefined) {
            clearTimeout(this.spinnerDebouncerCallbackHandle_);
        }
        this.spinnerDebouncerCallbackHandle_ = setTimeout(() => {
            this.hideSpinner_ = !this.isSpeechActive || this.isAudioCurrentlyPlaying;
            this.spinnerDebouncerCallbackHandle_ = undefined;
        }, spinnerDebounceTimeout);
    }
    onSpeechPlayingStateChanged_() {
        this.resetHideSpinnerDebouncer_();
        // If the previously focused item becomes disabled or disappears from the
        // toolbar because of speech starting or stopping, put the focus on the
        // play/pause button so keyboard navigation continues working.
        // If we're still loading the reading mode panel on
        // a first open, we shouldn't attempt to refocus the play button or the
        // rate menu.
        if (this.isSetupComplete_ && (this.shadowRoot !== null) &&
            (this.shadowRoot.activeElement === null ||
                this.shadowRoot.activeElement.clientHeight === 0)) {
            // If the play / pause button is enabled, we should focus it. Otherwise,
            // we should focus the rate menu.
            const tagToFocus = this.isReadAloudPlayable ? '#play-pause' : '#rate';
            this.$.toolbarContainer.querySelector(tagToFocus)?.focus();
        }
        if (this.isSpeechActive !== this.wasSpeechActive_) {
            this.wasSpeechActive_ = this.isSpeechActive;
        }
    }
    updateFocus_(focusableElements, newIndex) {
        const elementToFocus = focusableElements[newIndex];
        assert(elementToFocus, 'no element to focus');
        // When the user tabs away from the toolbar and then tabs back, we want to
        // focus the last focused item in the toolbar
        focusableElements.forEach(el => {
            el.tabIndex = -1;
        });
        this.currentFocusId_ = elementToFocus.id;
        elementToFocus.tabIndex = 0;
        // Wait for the next animation frame for the overflow menu to show or hide.
        requestAnimationFrame(() => {
            elementToFocus.focus();
        });
    }
    getRateTabIndex_() {
        return (!this.isReadAloudPlayable || this.currentFocusId_ === 'rate') ? 0 :
            -1;
    }
    getVoiceSpeedLabel_() {
        return loadTimeData.getStringF('voiceSpeedWithRateLabel', this.speechRate);
    }
    shouldDisableGranularityNavButtons_() {
        return !this.isReadAloudPlayable || !this.isSpeechActive;
    }
    onToolbarContainerBlur_() {
        this.$.toolbarContainer.tabIndex = -1;
    }
}
customElements.define(ReadAnythingToolbarElement.is, ReadAnythingToolbarElement);
