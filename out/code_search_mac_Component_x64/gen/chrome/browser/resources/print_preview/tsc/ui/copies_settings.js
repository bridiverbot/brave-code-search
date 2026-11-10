// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './number_settings_section.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './copies_settings.css.js';
import { getHtml } from './copies_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
/**
 * Maximum number of copies supported by the printer if not explicitly
 * specified.
 */
export const DEFAULT_MAX_COPIES = 999;
const PrintPreviewCopiesSettingsElementBase = SettingsMixin(CrLitElement);
export class PrintPreviewCopiesSettingsElement extends PrintPreviewCopiesSettingsElementBase {
    static get is() {
        return 'print-preview-copies-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            capability: { type: Object },
            copiesMax_: { type: Number },
            currentValue_: { type: String },
            inputValid_: { type: Boolean },
            disabled: { type: Boolean },
            collateAvailable_: { type: Boolean },
        };
    }
    #capability_accessor_storage = null;
    get capability() { return this.#capability_accessor_storage; }
    set capability(value) { this.#capability_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #copiesMax__accessor_storage = DEFAULT_MAX_COPIES;
    get copiesMax_() { return this.#copiesMax__accessor_storage; }
    set copiesMax_(value) { this.#copiesMax__accessor_storage = value; }
    #currentValue__accessor_storage = '';
    get currentValue_() { return this.#currentValue__accessor_storage; }
    set currentValue_(value) { this.#currentValue__accessor_storage = value; }
    #inputValid__accessor_storage = false;
    get inputValid_() { return this.#inputValid__accessor_storage; }
    set inputValid_(value) { this.#inputValid__accessor_storage = value; }
    #collateAvailable__accessor_storage = false;
    get collateAvailable_() { return this.#collateAvailable__accessor_storage; }
    set collateAvailable_(value) { this.#collateAvailable__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('copies.value', () => this.onSettingsChanged_());
        this.addSettingObserver('collate.*', () => this.onSettingsChanged_());
        this.onSettingsChanged_();
        this.addSettingObserver('collate.available', (value) => {
            this.collateAvailable_ = value;
        });
        this.collateAvailable_ = this.getSetting('collate').available;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('capability')) {
            this.copiesMax_ = this.computeCopiesMax_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('currentValue_')) {
            this.onInputChanged_();
        }
    }
    /**
     * @return The maximum number of copies this printer supports.
     */
    computeCopiesMax_() {
        return (this.capability && this.capability.max) ? this.capability.max :
            DEFAULT_MAX_COPIES;
    }
    /**
     * @return The message to show as hint.
     */
    getHintMessage_() {
        return loadTimeData.getStringF('copiesInstruction', this.copiesMax_);
    }
    /**
     * Updates the input string when the setting has been initialized.
     */
    onSettingsChanged_() {
        const copies = this.getSetting('copies');
        if (this.inputValid_) {
            this.currentValue_ = copies.value.toString();
        }
        const collate = this.getSetting('collate');
        this.$.collate.checked = collate.value;
    }
    /**
     * Updates model.copies and model.copiesInvalid based on the validity
     * and current value of the copies input.
     */
    onInputChanged_() {
        if (this.currentValue_ !== '' &&
            this.currentValue_ !== this.getSettingValue('copies').toString()) {
            this.setSetting('copies', this.inputValid_ ? parseInt(this.currentValue_, 10) : 1);
        }
        this.setSettingValid('copies', this.inputValid_);
    }
    /**
     * @return Whether collate checkbox should be hidden.
     */
    collateHidden_() {
        return !this.collateAvailable_ || !this.inputValid_ ||
            this.currentValue_ === '' || parseInt(this.currentValue_, 10) === 1;
    }
    onCollateChange_() {
        this.setSetting('collate', this.$.collate.checked);
    }
    onCurrentValueChanged_(e) {
        this.currentValue_ = e.detail.value;
    }
    onInputValidChanged_(e) {
        this.inputValid_ = e.detail.value;
    }
}
customElements.define(PrintPreviewCopiesSettingsElement.is, PrintPreviewCopiesSettingsElement);
