// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './advanced_settings_item.js';
import './print_preview_search_box.js';
import '/strings.m.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { removeHighlights } from 'chrome://resources/js/search_highlight_utils.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { getCss } from './advanced_settings_dialog.css.js';
import { getHtml } from './advanced_settings_dialog.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAdvancedSettingsDialogElementBase = I18nMixinLit(SettingsMixin(CrLitElement));
export class PrintPreviewAdvancedSettingsDialogElement extends PrintPreviewAdvancedSettingsDialogElementBase {
    static get is() {
        return 'print-preview-advanced-settings-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            destination: { type: Object },
            searchQuery_: { type: Object },
            hasMatching_: {
                type: Boolean,
                notify: true,
            },
        };
    }
    #destination_accessor_storage = null;
    get destination() { return this.#destination_accessor_storage; }
    set destination(value) { this.#destination_accessor_storage = value; }
    #searchQuery__accessor_storage = null;
    get searchQuery_() { return this.#searchQuery__accessor_storage; }
    set searchQuery_(value) { this.#searchQuery__accessor_storage = value; }
    #hasMatching__accessor_storage = false;
    get hasMatching_() { return this.#hasMatching__accessor_storage; }
    set hasMatching_(value) { this.#hasMatching__accessor_storage = value; }
    highlights_ = [];
    bubbles_ = new Map();
    metrics_ = MetricsContext.printSettingsUi();
    connectedCallback() {
        super.connectedCallback();
        this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_SHOWN);
        this.$.dialog.showModal();
    }
    firstUpdated() {
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('searchQuery_')) {
            // Note: computeHasMatching_() updates the DOM in addition to calculating
            // the hasMatching_ value, so needs to be done in updated().
            this.hasMatching_ = this.computeHasMatching_();
        }
    }
    onKeydown_(e) {
        e.stopPropagation();
        const searchInput = this.$.searchBox.getSearchInput();
        const eventInSearchBox = e.composedPath().includes(searchInput);
        if (e.key === 'Escape' &&
            (!eventInSearchBox || !searchInput.value.trim())) {
            this.$.dialog.cancel();
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter' && !eventInSearchBox) {
            const activeElementTag = e.composedPath()[0].tagName;
            if (['CR-BUTTON', 'SELECT'].includes(activeElementTag)) {
                return;
            }
            this.onApplyButtonClick_();
            e.preventDefault();
            return;
        }
    }
    /**
     * @return Whether there is more than one vendor item to display.
     */
    hasMultipleItems_() {
        if (!this.destination) {
            return false;
        }
        return this.destination.capabilities.printer.vendor_capability.length > 1;
    }
    /**
     * @return Whether there is a setting matching the query.
     */
    computeHasMatching_() {
        if (!this.shadowRoot) {
            return true;
        }
        removeHighlights(this.highlights_);
        this.bubbles_.forEach((_number, bubble) => bubble.remove());
        this.highlights_ = [];
        this.bubbles_.clear();
        const listItems = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        let hasMatch = false;
        listItems.forEach(item => {
            const matches = item.hasMatch(this.searchQuery_);
            item.hidden = !matches;
            hasMatch = hasMatch || matches;
            this.highlights_.push(...item.updateHighlighting(this.searchQuery_, this.bubbles_));
        });
        return hasMatch;
    }
    /**
     * @return Whether the no matching settings hint should be shown.
     */
    shouldShowHint_() {
        return !!this.searchQuery_ && !this.hasMatching_;
    }
    onClose_() {
        if (this.searchQuery_) {
            this.$.searchBox.setValue('');
        }
        if (this.$.dialog.getNative().returnValue === 'success') {
            this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_CANCELED);
        }
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
    onApplyButtonClick_() {
        const settingsValues = {};
        const itemList = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        itemList.forEach(item => {
            settingsValues[item.capability.id] = item.getCurrentValue();
        });
        this.setSetting('vendorItems', settingsValues);
        this.$.dialog.close();
    }
    close() {
        this.$.dialog.close();
    }
    isSearching_() {
        return this.searchQuery_ ? 'searching' : '';
    }
    getVendorCapabilities_() {
        return this.destination?.capabilities?.printer.vendor_capability || [];
    }
    onSearchQueryChanged_(e) {
        this.searchQuery_ = e.detail.value;
    }
}
customElements.define(PrintPreviewAdvancedSettingsDialogElement.is, PrintPreviewAdvancedSettingsDialogElement);
