// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './grouped_action_menu.js';
import '../read_aloud/accent_menu.js';
import '../read_aloud/voice_selection_dialog.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { AudioBrowserProxyImpl } from '../read_aloud/audio_browser_proxy.js';
import { getVoiceDisplayName, getVoiceTitleAndNatureNaming } from '../read_aloud/voice_menu_display.js';
import { getHtml } from './audio_menu.html.js';
import { SettingsItemType } from './menu_util.js';
const VOICE_GROUP_INDEX = 0;
const VOICE_SELECTION_ITEM_INDEX = 0;
const ACCENT_MENU_ITEM_INDEX = 1;
const AudioMenuElementBase = WebUiListenerMixinLit(CrLitElement);
export class AudioMenuElement extends AudioMenuElementBase {
    static get is() {
        return 'audio-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            highlightGranularity: { type: Number },
            selectedVoice: { type: Object },
            previewVoicePlaying: { type: Object },
            showVoiceSelectionDialog_: { type: Boolean },
            nonModal: { type: Boolean },
            groups_: { type: Array },
            enabledLangs: { type: Array },
            availableVoices: { type: Array },
            localeToDisplayName: { type: Object },
            selectedLang: { type: String },
            showAccentMenuDialog_: { type: Boolean },
        };
    }
    #highlightGranularity_accessor_storage = 0;
    get highlightGranularity() { return this.#highlightGranularity_accessor_storage; }
    set highlightGranularity(value) { this.#highlightGranularity_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #enabledLangs_accessor_storage = [];
    get enabledLangs() { return this.#enabledLangs_accessor_storage; }
    set enabledLangs(value) { this.#enabledLangs_accessor_storage = value; }
    #availableVoices_accessor_storage = [];
    get availableVoices() { return this.#availableVoices_accessor_storage; }
    set availableVoices(value) { this.#availableVoices_accessor_storage = value; }
    #localeToDisplayName_accessor_storage = {};
    get localeToDisplayName() { return this.#localeToDisplayName_accessor_storage; }
    set localeToDisplayName(value) { this.#localeToDisplayName_accessor_storage = value; }
    #previewVoicePlaying_accessor_storage = null;
    get previewVoicePlaying() { return this.#previewVoicePlaying_accessor_storage; }
    set previewVoicePlaying(value) { this.#previewVoicePlaying_accessor_storage = value; }
    #selectedLang_accessor_storage = '';
    get selectedLang() { return this.#selectedLang_accessor_storage; }
    set selectedLang(value) { this.#selectedLang_accessor_storage = value; }
    #selectedVoice_accessor_storage = null;
    get selectedVoice() { return this.#selectedVoice_accessor_storage; }
    set selectedVoice(value) { this.#selectedVoice_accessor_storage = value; }
    #showAccentMenuDialog__accessor_storage = false;
    get showAccentMenuDialog_() { return this.#showAccentMenuDialog__accessor_storage; }
    set showAccentMenuDialog_(value) { this.#showAccentMenuDialog__accessor_storage = value; }
    #showVoiceSelectionDialog__accessor_storage = false;
    get showVoiceSelectionDialog_() { return this.#showVoiceSelectionDialog__accessor_storage; }
    set showVoiceSelectionDialog_(value) { this.#showVoiceSelectionDialog__accessor_storage = value; }
    audioBrowserProxy_ = AudioBrowserProxyImpl.getInstance();
    highlightOptions_ = [
        {
            title: loadTimeData.getString('autoHighlightTitle'),
            data: this.audioBrowserProxy_.getAutoHighlighting(),
        },
        {
            title: loadTimeData.getString('wordHighlightTitle'),
            data: this.audioBrowserProxy_.getWordHighlighting(),
        },
        ...(this.audioBrowserProxy_.isPhraseHighlightingEnabled() ? [{
                title: loadTimeData.getString('phraseHighlightTitle'),
                data: this.audioBrowserProxy_.getPhraseHighlighting(),
            }] : []),
        {
            title: loadTimeData.getString('sentenceHighlightTitle'),
            data: this.audioBrowserProxy_.getSentenceHighlighting(),
        },
        {
            title: loadTimeData.getString('noHighlightTitle'),
            data: this.audioBrowserProxy_.getNoHighlighting(),
        },
    ];
    #groups__accessor_storage = this.computeGroups_();
    get groups_() { return this.#groups__accessor_storage; }
    set groups_(value) { this.#groups__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('highlightGranularity') ||
            changedProperties.has('selectedVoice')) {
            this.groups_ = this.computeGroups_();
        }
    }
    computeGroups_() {
        return [
            {
                header: {
                    title: loadTimeData.getString('voiceLabel'),
                    separator: false,
                },
                items: [
                    {
                        title: getVoiceDisplayName(getVoiceTitleAndNatureNaming(this.selectedVoice)),
                        icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                            'read-anything:voice-selection' :
                            'read-anything:voice-selection-old',
                        data: 'open-voice-selection-dialog',
                        itemType: SettingsItemType.ACTION,
                        eventName: 'open-voice-selection-dialog',
                        opensDialog: true,
                    },
                    {
                        title: loadTimeData.getString('accentMenuLabel'),
                        icon: 'read-anything:translate',
                        itemType: SettingsItemType.ACTION,
                        data: 'open-accent-menu',
                        eventName: 'open-accent-menu',
                        opensDialog: true,
                    },
                ],
            },
            {
                header: {
                    title: loadTimeData.getString('voiceHighlightLabel'),
                    separator: true,
                },
                items: this.highlightOptions_,
                eventName: ToolbarEvent.HIGHLIGHT_CHANGE,
                selectedValue: this.highlightGranularity,
            },
        ];
    }
    open(anchor, showAtConfig) {
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
    }
    onOpenAccentMenu_() {
        this.showAccentMenuDialog_ = true;
    }
    onAccentMenuClose_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.showAccentMenuDialog_ = false;
        this.focusMenuItem_(ACCENT_MENU_ITEM_INDEX);
    }
    onOpenVoiceSelectionDialog_() {
        this.showVoiceSelectionDialog_ = true;
        this.fire(ToolbarEvent.VOICE_MENU_OPEN);
    }
    onVoiceSelectionDialogClose_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.showVoiceSelectionDialog_ = false;
        this.fire(ToolbarEvent.VOICE_MENU_CLOSE);
        this.focusMenuItem_(VOICE_SELECTION_ITEM_INDEX);
    }
    focusMenuItem_(itemIndex) {
        this.updateComplete.then(() => {
            this.$.menu.focusItem(VOICE_GROUP_INDEX, itemIndex);
        });
    }
}
customElements.define(AudioMenuElement.is, AudioMenuElement);
