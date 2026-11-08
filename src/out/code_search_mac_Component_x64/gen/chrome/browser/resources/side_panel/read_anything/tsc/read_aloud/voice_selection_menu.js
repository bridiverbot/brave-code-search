// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import './language_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { openMenu, spinnerDebounceTimeout } from '../shared/common.js';
import { AudioBrowserProxyImpl } from './audio_browser_proxy.js';
import { computeDownloadingMessages, computeErrorMessages, computeVoiceDropdown, isVoicePreviewSpinning } from './voice_menu_display.js';
import { VoiceNotificationManager } from './voice_notification_manager.js';
import { getCss } from './voice_selection_menu.css.js';
import { getHtml } from './voice_selection_menu.html.js';
const VoiceSelectionMenuElementBase = WebUiListenerMixinLit(CrLitElement);
export class VoiceSelectionMenuElement extends VoiceSelectionMenuElementBase {
    static get is() {
        return 'voice-selection-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedVoice: { type: Object },
            availableVoices: { type: Array },
            enabledLangs: { type: Array },
            previewVoicePlaying: { type: Object },
            currentNotifications_: { type: Object },
            previewVoiceInitiated: { type: Object },
            localeToDisplayName: { type: Object },
            showLanguageMenuDialog_: { type: Boolean },
            downloadingMessages_: { type: Array },
            voiceGroups_: { type: Array },
            nonModal: { type: Boolean },
            errorMessages_: { type: Array },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #selectedVoice_accessor_storage = null;
    get selectedVoice() { return this.#selectedVoice_accessor_storage; }
    set selectedVoice(value) { this.#selectedVoice_accessor_storage = value; }
    #localeToDisplayName_accessor_storage = {};
    get localeToDisplayName() { return this.#localeToDisplayName_accessor_storage; }
    set localeToDisplayName(value) { this.#localeToDisplayName_accessor_storage = value; }
    #previewVoicePlaying_accessor_storage = null;
    get previewVoicePlaying() { return this.#previewVoicePlaying_accessor_storage; }
    set previewVoicePlaying(value) { this.#previewVoicePlaying_accessor_storage = value; }
    #enabledLangs_accessor_storage = [];
    get enabledLangs() { return this.#enabledLangs_accessor_storage; }
    set enabledLangs(value) { this.#enabledLangs_accessor_storage = value; }
    #availableVoices_accessor_storage = [];
    get availableVoices() { return this.#availableVoices_accessor_storage; }
    set availableVoices(value) { this.#availableVoices_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #currentNotifications__accessor_storage = {};
    // The current notifications that should be used in the voice menu.
    get currentNotifications_() { return this.#currentNotifications__accessor_storage; }
    set currentNotifications_(value) { this.#currentNotifications__accessor_storage = value; }
    #previewVoiceInitiated_accessor_storage = null;
    get previewVoiceInitiated() { return this.#previewVoiceInitiated_accessor_storage; }
    set previewVoiceInitiated(value) { this.#previewVoiceInitiated_accessor_storage = value; }
    #errorMessages__accessor_storage = [];
    get errorMessages_() { return this.#errorMessages__accessor_storage; }
    set errorMessages_(value) { this.#errorMessages__accessor_storage = value; }
    #downloadingMessages__accessor_storage = [];
    get downloadingMessages_() { return this.#downloadingMessages__accessor_storage; }
    set downloadingMessages_(value) { this.#downloadingMessages__accessor_storage = value; }
    #voiceGroups__accessor_storage = [];
    get voiceGroups_() { return this.#voiceGroups__accessor_storage; }
    set voiceGroups_(value) { this.#voiceGroups__accessor_storage = value; }
    #showLanguageMenuDialog__accessor_storage = false;
    get showLanguageMenuDialog_() { return this.#showLanguageMenuDialog__accessor_storage; }
    set showLanguageMenuDialog_(value) { this.#showLanguageMenuDialog__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    spBodyPadding_ = Number.parseInt(window.getComputedStyle(document.body)
        .getPropertyValue('--sp-body-padding'), 10);
    notificationManager_ = VoiceNotificationManager.getInstance();
    audioBrowserProxy_ = AudioBrowserProxyImpl.getInstance();
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('previewVoicePlaying') &&
            (this.previewVoicePlaying !== this.previewVoiceInitiated)) {
            // When the preview stops, the voice is set to null in app.ts, so
            // we should update the preview voice to null here as well to clear the
            // voice.
            this.previewVoiceInitiated = this.previewVoicePlaying;
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('selectedVoice') ||
            changedProperties.has('availableVoices') ||
            changedProperties.has('enabledLangs') ||
            changedPrivateProperties.has('previewVoiceInitiated') ||
            changedProperties.has('previewVoicePlaying') ||
            changedProperties.has('localeToDisplayName')) {
            this.voiceGroups_ = this.computeVoiceDropdown_();
        }
        if (changedPrivateProperties.has('currentNotifications_')) {
            this.errorMessages_ = this.computeErrorMessages_();
            this.downloadingMessages_ = this.computeDownloadingMessages_();
        }
    }
    notify(type, language) {
        if (!language) {
            return;
        }
        this.currentNotifications_ = {
            ...this.currentNotifications_,
            [language]: type,
        };
    }
    open(anchor, showAtConfig) {
        showAtConfig = {
            ...showAtConfig,
            maxX: document.body.clientWidth - this.spBodyPadding_ - anchor.clientWidth,
        };
        this.onVoiceSelectionMenuClick(anchor, showAtConfig);
    }
    close() {
        this.$.voiceSelectionMenu.get().close();
    }
    onVoiceSelectionMenuClick(targetElement, showAtConfig) {
        const showAt = {
            minX: this.spBodyPadding_,
            maxX: document.body.clientWidth - this.spBodyPadding_,
            ...(showAtConfig || {}),
        };
        this.notificationManager_.addListener(this);
        const menu = this.$.voiceSelectionMenu.get();
        openMenu(menu, targetElement, showAt, this.onMenuShown.bind(this));
    }
    onMenuShown() {
        this.fire(ToolbarEvent.VOICE_MENU_OPEN);
        const selectedItem = this.$.voiceSelectionMenu.get().querySelector('.item-hidden-false.check-mark');
        selectedItem?.scrollIntoViewIfNeeded();
    }
    voiceItemTabIndex_(groupIndex, voiceIndex) {
        return (groupIndex + voiceIndex) === 0 ? 0 : -1;
    }
    computeVoiceDropdown_() {
        const { groups } = computeVoiceDropdown({
            availableVoices: this.availableVoices,
            enabledLangs: this.enabledLangs,
            selectedVoice: this.selectedVoice,
            previewVoicePlaying: this.previewVoicePlaying,
            previewVoiceInitiated: this.previewVoiceInitiated,
            localeToDisplayName: this.localeToDisplayName,
        });
        return groups;
    }
    onVoiceSelectClick_(e) {
        const selectedVoice = this.getVoiceItemForEvent_(e).voice;
        this.fire(ToolbarEvent.VOICE, { selectedVoice });
    }
    onVoicePreviewClick_(e) {
        // Because the preview button is layered onto the voice-selection button,
        // the onVoiceSelectClick_() listener is also subscribed to this event. This
        // line is to make sure that the voice-selection callback is not triggered.
        e.stopImmediatePropagation();
        const dropdownItem = this.getVoiceItemForEvent_(e);
        // Set a small timeout to ensure we're not showing the spinner too
        // frequently. If speech starts fairly quickly after the button is
        // pressed, there's no need for a spinner. This timeout should only be
        // set if the preview is starting, not when a preview is stopped.
        if (!dropdownItem.previewActuallyPlaying) {
            setTimeout(() => {
                this.previewVoiceInitiated = dropdownItem.voice;
            }, spinnerDebounceTimeout);
        }
        this.fire(ToolbarEvent.PLAY_PREVIEW, 
        // If preview is currently playing, we pass null to indicate the audio
        // should be paused.
        {
            previewVoice: dropdownItem.previewActuallyPlaying ? null : dropdownItem.voice,
        });
    }
    onLanguageMenuClick_() {
        this.showLanguageMenuDialog_ = true;
        this.fire(ToolbarEvent.LANGUAGE_MENU_OPEN);
    }
    onLanguageMenuClose_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.showLanguageMenuDialog_ = false;
        this.fire(ToolbarEvent.LANGUAGE_MENU_CLOSE);
    }
    onClose_() {
        this.notificationManager_.removeListener(this);
        this.currentNotifications_ = {};
        this.fire(ToolbarEvent.VOICE_MENU_CLOSE);
    }
    shouldAllowPropagation_(e, currentElement) {
        // Always allow propagation for keys other than Tab.
        if (e.key !== 'Tab') {
            return true;
        }
        // If the shift key is not pressed with the tab, only allow propagation on
        // the language menu button.
        if (!e.shiftKey) {
            return currentElement.classList.contains('language-menu-button');
        }
        // In the case that shift is pressed, only allow propagation on the first
        // voice option.
        const targetIsVoiceOption = currentElement.classList.contains('dropdown-voice-selection-button');
        return targetIsVoiceOption &&
            Number.parseInt(currentElement.dataset['groupIndex']) === 0 &&
            Number.parseInt(currentElement.dataset['voiceIndex']) === 0;
    }
    onVoiceMenuKeydown_(e) {
        const currentElement = e.target;
        assert(currentElement, 'no key target');
        // Allowing propagation on Tab closes the menu. We want to stop that
        // propagation unless we're tabbing forward on the last item or tabbing
        // backward on the first item.
        if (!this.shouldAllowPropagation_(e, currentElement)) {
            e.stopImmediatePropagation();
            return;
        }
        const targetIsVoiceOption = currentElement.classList.contains('dropdown-voice-selection-button');
        const targetIsPreviewButton = currentElement.id === 'preview-icon';
        // For voice options, only handle the right arrow - everything else is
        // default
        if (targetIsVoiceOption && !['ArrowRight'].includes(e.key)) {
            return;
        }
        // For a voice preview, handle up, down and left arrows
        if (targetIsPreviewButton &&
            !['ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            return;
        }
        // When the menu first opens, the target is the whole menu.
        // In that case, use default behavior.
        if (!targetIsVoiceOption && !targetIsPreviewButton) {
            return;
        }
        e.preventDefault();
        if (targetIsVoiceOption) {
            // From a voice option, go to its preview button
            const visiblePreviewButton = currentElement.querySelector('#preview-icon');
            assert(visiblePreviewButton, 'can\'t find preview button');
            visiblePreviewButton.focus();
        }
        // This action is also handled by the menu itself
        // For left arrow, this takes us to the voice being previewed,
        // For up and down arrows this is combined with the default up/down
        // action, taking us to the next or previous voice.
        currentElement.parentElement.focus();
    }
    previewLabel_(previewPlaying) {
        if (previewPlaying) {
            return loadTimeData.getString('stopLabel');
        }
        else {
            return loadTimeData.getString('previewTooltip');
        }
    }
    hideSpinner_(voiceDropdown) {
        return !isVoicePreviewSpinning(voiceDropdown);
    }
    voiceLabel_(selected, voiceName) {
        const selectedPrefix = selected ? loadTimeData.getString('selected') : '';
        return `${selectedPrefix} ${loadTimeData.getStringF('readingModeLanguageMenuItemLabel', voiceName)}`;
    }
    shouldDisableButton_(voiceDropdown) {
        return isVoicePreviewSpinning(voiceDropdown);
    }
    previewIcon_(previewInitiated) {
        if (previewInitiated) {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything-20:stop-circle' :
                'read-anything-20:stop-circle-old';
        }
        else {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'read-anything-20:play-circle' :
                'read-anything-20:play-circle-old';
        }
    }
    getVoiceItemForEvent_(e) {
        const groupIndex = Number.parseInt(e.currentTarget.dataset['groupIndex']);
        const voiceIndex = Number.parseInt(e.currentTarget.dataset['voiceIndex']);
        return this.voiceGroups_[groupIndex].voices[voiceIndex];
    }
    computeErrorMessages_() {
        return computeErrorMessages(this.currentNotifications_, this.audioBrowserProxy_);
    }
    computeDownloadingMessages_() {
        return computeDownloadingMessages(this.currentNotifications_, this.audioBrowserProxy_);
    }
}
customElements.define(VoiceSelectionMenuElement.is, VoiceSelectionMenuElement);
