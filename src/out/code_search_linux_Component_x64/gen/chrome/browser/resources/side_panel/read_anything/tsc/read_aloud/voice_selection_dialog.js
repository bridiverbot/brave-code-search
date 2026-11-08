// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '../app/icons.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { spinnerDebounceTimeout } from '../shared/common.js';
import { AudioBrowserProxyImpl } from './audio_browser_proxy.js';
import { areVoicesEqual } from './voice_language_conversions.js';
import { computeDownloadingMessages, computeErrorMessages, computeVoiceDropdown, getVoiceDisplayName, isVoicePreviewSpinning } from './voice_menu_display.js';
import { VoiceNotificationManager } from './voice_notification_manager.js';
import { getCss } from './voice_selection_dialog.css.js';
import { getHtml } from './voice_selection_dialog.html.js';
export class VoiceSelectionDialogElement extends CrLitElement {
    static get is() {
        return 'voice-selection-dialog';
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
            candidateVoice_: { type: Object },
            previewVoiceInitiated_: { type: Object },
            currentNotifications_: { type: Object },
            localeToDisplayName: { type: Object },
        };
    }
    #selectedVoice_accessor_storage = null;
    get selectedVoice() { return this.#selectedVoice_accessor_storage; }
    set selectedVoice(value) { this.#selectedVoice_accessor_storage = value; }
    #localeToDisplayName_accessor_storage = {};
    get localeToDisplayName() { return this.#localeToDisplayName_accessor_storage; }
    set localeToDisplayName(value) { this.#localeToDisplayName_accessor_storage = value; }
    #enabledLangs_accessor_storage = [];
    get enabledLangs() { return this.#enabledLangs_accessor_storage; }
    set enabledLangs(value) { this.#enabledLangs_accessor_storage = value; }
    #availableVoices_accessor_storage = [];
    get availableVoices() { return this.#availableVoices_accessor_storage; }
    set availableVoices(value) { this.#availableVoices_accessor_storage = value; }
    #previewVoicePlaying_accessor_storage = null;
    get previewVoicePlaying() { return this.#previewVoicePlaying_accessor_storage; }
    set previewVoicePlaying(value) { this.#previewVoicePlaying_accessor_storage = value; }
    #candidateVoice__accessor_storage = null;
    get candidateVoice_() { return this.#candidateVoice__accessor_storage; }
    set candidateVoice_(value) { this.#candidateVoice__accessor_storage = value; }
    #previewVoiceInitiated__accessor_storage = null;
    get previewVoiceInitiated_() { return this.#previewVoiceInitiated__accessor_storage; }
    set previewVoiceInitiated_(value) { this.#previewVoiceInitiated__accessor_storage = value; }
    #currentNotifications__accessor_storage = {};
    get currentNotifications_() { return this.#currentNotifications__accessor_storage; }
    set currentNotifications_(value) { this.#currentNotifications__accessor_storage = value; }
    errorMessages_ = [];
    downloadingMessages_ = [];
    voiceGroups_ = [];
    audioBrowserProxy_ = AudioBrowserProxyImpl.getInstance();
    notificationManager_ = VoiceNotificationManager.getInstance();
    previewTimer_ = null;
    previewRequestId_ = 0;
    previewPendingVoice_ = null;
    hasSelectedVoice_ = false;
    connectedCallback() {
        super.connectedCallback();
        this.candidateVoice_ = this.selectedVoice;
        this.notificationManager_.addListener(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.stopActivePreview_();
        this.notificationManager_.removeListener(this);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('selectedVoice')) {
            this.candidateVoice_ = this.selectedVoice;
        }
        if (changedProperties.has('previewVoicePlaying') &&
            (this.previewVoicePlaying !== this.previewVoiceInitiated_)) {
            if (this.previewVoicePlaying) {
                this.clearPreviewTimeout_();
            }
            this.previewVoiceInitiated_ = this.previewVoicePlaying;
        }
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('currentNotifications_')) {
            this.errorMessages_ = this.computeErrorMessages_();
            this.downloadingMessages_ = this.computeDownloadingMessages_();
        }
        if (changedProperties.has('selectedVoice') ||
            changedPrivateProperties.has('candidateVoice_') ||
            changedProperties.has('availableVoices') ||
            changedProperties.has('enabledLangs') ||
            changedProperties.has('localeToDisplayName') ||
            changedProperties.has('previewVoicePlaying') ||
            changedPrivateProperties.has('previewVoiceInitiated_')) {
            this.voiceGroups_ = this.computeVoiceDropdown_();
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
    close() {
        this.$.voiceSelectionDialog.close();
    }
    onCancelButtonClick_() {
        this.$.voiceSelectionDialog.cancel();
    }
    onDialogCancel_() {
        this.candidateVoice_ = this.selectedVoice;
        this.stopActivePreview_();
    }
    onDialogClose_() {
        this.onDialogCancel_();
        this.currentNotifications_ = {};
        this.fire('close');
    }
    onKeydown_(e) {
        e.stopPropagation();
        if (e.key !== 'Tab' || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }
        const cancelButton = this.$.voiceSelectionDialog.querySelector('#cancelButton');
        const saveButton = this.$.voiceSelectionDialog.querySelector('#saveButton');
        if (!cancelButton || !saveButton) {
            return;
        }
        const firstFocusable = this.$.voiceSelectionDialog.querySelector('#preview-icon[tabindex="0"]') ??
            cancelButton;
        const activeElement = this.shadowRoot.activeElement;
        if (e.shiftKey) {
            if (activeElement === firstFocusable ||
                activeElement === this.$.voiceSelectionDialog) {
                e.preventDefault();
                saveButton.focus();
            }
        }
        else if (activeElement === saveButton) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
    computeVoiceDropdown_() {
        const { groups, hasSelectedVoice } = computeVoiceDropdown({
            availableVoices: this.availableVoices,
            enabledLangs: this.enabledLangs,
            selectedVoice: this.candidateVoice_,
            previewVoicePlaying: this.previewVoicePlaying,
            previewVoiceInitiated: this.previewVoiceInitiated_,
            localeToDisplayName: this.localeToDisplayName,
        });
        this.hasSelectedVoice_ = hasSelectedVoice;
        return groups;
    }
    computeErrorMessages_() {
        return computeErrorMessages(this.currentNotifications_, this.audioBrowserProxy_);
    }
    computeDownloadingMessages_() {
        return computeDownloadingMessages(this.currentNotifications_, this.audioBrowserProxy_);
    }
    previewButtonTabIndex_(voiceItem, isFirstVoice) {
        // Allows keyboard users to preview the active/candidate voice without
        // cycling through 50 unselected buttons. If no candidate is selected in
        // the visible list, fallback to the first visible voice's preview button.
        return voiceItem.selected || (!this.hasSelectedVoice_ && isFirstVoice) ? 0 :
            -1;
    }
    onVoiceRadioGroupSelectedChanged_(e) {
        const selectedVoiceName = e.detail.value;
        if (!selectedVoiceName) {
            return;
        }
        for (const group of this.voiceGroups_) {
            const match = group.voices.find(v => v.voice.name === selectedVoiceName);
            if (match) {
                this.candidateVoice_ = match.voice;
                return;
            }
        }
    }
    onVoicePreviewClick_(e) {
        e.stopImmediatePropagation();
        const currentTarget = e.currentTarget;
        const groupIndex = Number(currentTarget.dataset['groupIndex']);
        const voiceIndex = Number(currentTarget.dataset['voiceIndex']);
        const voiceItem = this.voiceGroups_[groupIndex]?.voices[voiceIndex];
        if (!voiceItem) {
            return;
        }
        const clickedVoice = voiceItem.voice;
        const isPlaying = voiceItem.previewActuallyPlaying;
        const isInitiated = voiceItem.previewInitiated;
        const isPending = this.previewTimer_ !== null &&
            areVoicesEqual(this.previewPendingVoice_, clickedVoice);
        this.clearPreviewTimeout_();
        if (isPlaying || isInitiated || isPending) {
            this.stopActivePreview_();
            return;
        }
        this.previewPendingVoice_ = clickedVoice;
        const requestId = ++this.previewRequestId_;
        this.previewTimer_ = window.setTimeout(() => {
            if (this.previewRequestId_ === requestId) {
                this.previewVoiceInitiated_ = clickedVoice;
                this.previewTimer_ = null;
                this.previewPendingVoice_ = null;
            }
        }, spinnerDebounceTimeout);
        this.fire(ToolbarEvent.PLAY_PREVIEW, { previewVoice: clickedVoice });
    }
    clearPreviewTimeout_() {
        if (this.previewTimer_ !== null) {
            window.clearTimeout(this.previewTimer_);
            this.previewTimer_ = null;
            this.previewPendingVoice_ = null;
        }
    }
    stopActivePreview_() {
        this.clearPreviewTimeout_();
        this.previewRequestId_++;
        this.previewVoiceInitiated_ = null;
        this.fire(ToolbarEvent.PLAY_PREVIEW, { previewVoice: null });
    }
    onSaveClick_() {
        if (this.candidateVoice_ &&
            !areVoicesEqual(this.candidateVoice_, this.selectedVoice)) {
            this.fire(ToolbarEvent.VOICE, { selectedVoice: this.candidateVoice_ });
            this.selectedVoice = this.candidateVoice_;
        }
        this.close();
    }
    previewLabel_(previewPlaying) {
        return loadTimeData.getString(previewPlaying ? 'stopLabel' : 'previewTooltip');
    }
    hideSpinner_(voiceDropdown) {
        return !isVoicePreviewSpinning(voiceDropdown);
    }
    voiceDisplayName_(voiceItem) {
        return getVoiceDisplayName(voiceItem);
    }
    voiceLang_(voiceItem) {
        return voiceItem.natureNaming ? voiceItem.voice.lang : nothing;
    }
    // TODO(crbug.com/565495310): Trigger voice preview on right arrow key within
    // the voice selection dialog menu. Screen readers currently play "use right
    // arrow key to preview voice" which isn't accurate within the voice selection
    // dialog menu.
    voiceLabel_(voiceName) {
        return loadTimeData.getStringF('readingModeLanguageMenuItemLabel', voiceName);
    }
    previewIcon_(previewInitiated) {
        return previewInitiated ? 'read-anything-20:stop-circle' :
            'read-anything-20:play-circle';
    }
}
customElements.define(VoiceSelectionDialogElement.is, VoiceSelectionDialogElement);
