// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './settings_section.js';
import { getCss as getMdSelectLitCss } from 'chrome://resources/cr_elements/md_select_lit.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MarginsType } from '../data/margins.js';
import { State } from '../data/state.js';
import { getHtml } from './margins_settings.html.js';
import { getCss as getPrintPreviewSharedCss } from './print_preview_shared.css.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewMarginsSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewMarginsSettingsElement extends PrintPreviewMarginsSettingsElementBase {
    static get is() {
        return 'print-preview-margins-settings';
    }
    static get styles() {
        return [
            getPrintPreviewSharedCss(),
            getMdSelectLitCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            state: { type: Number },
            marginsDisabled_: { type: Boolean },
            pagesPerSheet_: { type: Number },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #state_accessor_storage = State.NOT_READY;
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    #marginsDisabled__accessor_storage = false;
    get marginsDisabled_() { return this.#marginsDisabled__accessor_storage; }
    set marginsDisabled_(value) { this.#marginsDisabled__accessor_storage = value; }
    #pagesPerSheet__accessor_storage = 1;
    get pagesPerSheet_() { return this.#pagesPerSheet__accessor_storage; }
    set pagesPerSheet_(value) { this.#pagesPerSheet__accessor_storage = value; }
    loaded_ = false;
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('pagesPerSheet.value', (newValue) => {
            this.pagesPerSheet_ = newValue;
        });
        this.pagesPerSheet_ = this.getSetting('pagesPerSheet').value;
        this.addSettingObserver('margins.value', (newValue) => {
            this.selectedValue = newValue.toString();
        });
        this.selectedValue = this.getSetting('margins').value.toString();
        this.addSettingObserver('mediaSize.value', this.onMediaSizeOrLayoutChange_.bind(this));
        this.addSettingObserver('layout.value', this.onMediaSizeOrLayoutChange_.bind(this));
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('state')) {
            if (this.state === State.READY) {
                this.loaded_ = true;
            }
        }
        if (changedProperties.has('disabled') ||
            changedPrivateProperties.has('pagesPerSheet_')) {
            this.marginsDisabled_ = this.pagesPerSheet_ > 1 || this.disabled;
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('pagesPerSheet_')) {
            if (this.pagesPerSheet_ > 1) {
                this.setSetting('margins', MarginsType.DEFAULT);
            }
        }
    }
    onMediaSizeOrLayoutChange_() {
        if (this.loaded_ &&
            this.getSetting('margins').value === MarginsType.CUSTOM) {
            this.setSetting('margins', MarginsType.DEFAULT);
        }
    }
    onProcessSelectChange(value) {
        this.setSetting('margins', parseInt(value, 10));
    }
}
customElements.define(PrintPreviewMarginsSettingsElement.is, PrintPreviewMarginsSettingsElement);
