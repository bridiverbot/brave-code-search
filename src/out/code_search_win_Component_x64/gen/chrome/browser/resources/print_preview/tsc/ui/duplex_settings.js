// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './icons.html.js';
import './settings_section.js';
import { IconsetMap } from 'chrome://resources/cr_elements/cr_icon/iconset_map.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DuplexMode } from '../data/model.js';
import { getSelectDropdownBackground } from '../print_preview_utils.js';
import { getCss } from './duplex_settings.css.js';
import { getHtml } from './duplex_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewDuplexSettingsElementBase = SettingsMixin(SelectMixin(CrLitElement));
export class PrintPreviewDuplexSettingsElement extends PrintPreviewDuplexSettingsElementBase {
    static get is() {
        return 'print-preview-duplex-settings';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            dark: { type: Boolean },
            disabled: { type: Boolean },
            duplexManaged_: { type: Boolean },
            duplexShortEdgeManaged_: { type: Boolean },
            collapseOpened_: { type: Boolean },
            backgroundImages_: { type: String },
        };
    }
    #dark_accessor_storage = false;
    get dark() { return this.#dark_accessor_storage; }
    set dark(value) { this.#dark_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #duplexManaged__accessor_storage = false;
    get duplexManaged_() { return this.#duplexManaged__accessor_storage; }
    set duplexManaged_(value) { this.#duplexManaged__accessor_storage = value; }
    #duplexShortEdgeManaged__accessor_storage = false;
    get duplexShortEdgeManaged_() { return this.#duplexShortEdgeManaged__accessor_storage; }
    set duplexShortEdgeManaged_(value) { this.#duplexShortEdgeManaged__accessor_storage = value; }
    #collapseOpened__accessor_storage = false;
    get collapseOpened_() { return this.#collapseOpened__accessor_storage; }
    set collapseOpened_(value) { this.#collapseOpened__accessor_storage = value; }
    #backgroundImages__accessor_storage = '';
    // An inline svg corresponding to |icon| and the image for the dropdown arrow.
    get backgroundImages_() { return this.#backgroundImages__accessor_storage; }
    set backgroundImages_(value) { this.#backgroundImages__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addSettingObserver('duplex.*', this.onDuplexSettingChange_.bind(this));
        this.onDuplexSettingChange_();
        this.addSettingObserver('duplexShortEdge.*', this.onDuplexTypeChange_.bind(this));
        this.onDuplexTypeChange_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('dark')) {
            this.updateBackgroundImages_();
        }
    }
    onDuplexSettingChange_() {
        this.$.duplex.checked = this.getSettingValue('duplex');
        this.duplexManaged_ = this.getSetting('duplex').setByGlobalPolicy;
        this.updateCollapseOpened_();
    }
    onDuplexTypeChange_() {
        this.selectedValue = this.getSettingValue('duplexShortEdge') ?
            DuplexMode.SHORT_EDGE.toString() :
            DuplexMode.LONG_EDGE.toString();
        this.duplexShortEdgeManaged_ =
            this.getSetting('duplexShortEdge').setByGlobalPolicy;
        this.updateCollapseOpened_();
        this.updateBackgroundImages_();
    }
    onCheckboxChange_() {
        this.setSetting('duplex', this.$.duplex.checked);
    }
    onProcessSelectChange(value) {
        this.setSetting('duplexShortEdge', value === DuplexMode.SHORT_EDGE.toString());
    }
    updateCollapseOpened_() {
        this.collapseOpened_ = this.getSetting('duplexShortEdge').available &&
            this.getSettingValue('duplex');
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @return Whether the controls should be disabled.
     */
    getDisabled_(managed) {
        return managed || this.disabled;
    }
    updateBackgroundImages_() {
        const icon = this.getSettingValue('duplexShortEdge') ? 'short-edge-custom' :
            'long-edge-custom';
        const iconset = IconsetMap.getInstance().get('print-preview');
        assert(iconset);
        this.backgroundImages_ = getSelectDropdownBackground(iconset, icon, this);
    }
}
customElements.define(PrintPreviewDuplexSettingsElement.is, PrintPreviewDuplexSettingsElement);
