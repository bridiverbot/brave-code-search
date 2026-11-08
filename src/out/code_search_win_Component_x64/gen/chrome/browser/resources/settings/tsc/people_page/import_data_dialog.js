// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-import-data-dialog' is a component for importing
 * bookmarks and other data from other sources.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/settings_checkbox.js';
import '../controls/settings_toggle_button.js';
import '../i18n_setup.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { PrefServiceObserverMixinLit } from '/shared/settings/prefs2/pref_service_observer_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ImportDataBrowserProxyImpl, ImportDataStatus } from './import_data_browser_proxy.js';
import { getCss } from './import_data_dialog.css.js';
import { getHtml } from './import_data_dialog.html.js';
const SettingsImportDataDialogElementBase = WebUiListenerMixinLit(I18nMixinLit(PrefServiceObserverMixinLit(CrLitElement)));
export class SettingsImportDataDialogElement extends SettingsImportDataDialogElementBase {
    static get is() {
        return 'settings-import-data-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            browserProfiles_: { type: Array },
            importDialogBookmarksPref_: { type: Object },
            selected_: { type: Object },
            noImportDataTypeSelected_: { type: Boolean },
            importStatus_: { type: String },
        };
    }
    #browserProfiles__accessor_storage = [];
    get browserProfiles_() { return this.#browserProfiles__accessor_storage; }
    set browserProfiles_(value) { this.#browserProfiles__accessor_storage = value; }
    #importDialogBookmarksPref__accessor_storage;
    get importDialogBookmarksPref_() { return this.#importDialogBookmarksPref__accessor_storage; }
    set importDialogBookmarksPref_(value) { this.#importDialogBookmarksPref__accessor_storage = value; }
    #selected__accessor_storage = {
        name: '',
        index: 0,
        profileName: '',
        history: false,
        favorites: false,
        passwords: false,
        search: false,
        autofillFormData: false,
    };
    get selected_() { return this.#selected__accessor_storage; }
    set selected_(value) { this.#selected__accessor_storage = value; }
    #noImportDataTypeSelected__accessor_storage = false;
    get noImportDataTypeSelected_() { return this.#noImportDataTypeSelected__accessor_storage; }
    set noImportDataTypeSelected_(value) { this.#noImportDataTypeSelected__accessor_storage = value; }
    #importStatus__accessor_storage = ImportDataStatus.INITIAL;
    get importStatus_() { return this.#importStatus__accessor_storage; }
    set importStatus_(value) { this.#importStatus__accessor_storage = value; }
    browserProxy_ = ImportDataBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.mirrorPref('import_dialog_bookmarks', 'importDialogBookmarksPref_');
        PrefService.getInstance().whenInitialized().then(async () => {
            if (!this.isConnected) {
                return;
            }
            await Promise.all(Array.from(this.shadowRoot.querySelectorAll('settings-checkbox'), c => c.updateComplete));
            if (this.isConnected) {
                this.updateImportDataTypesSelected_();
            }
        });
        this.browserProxy_.initializeImportDialog().then(data => {
            if (!this.isConnected) {
                // Element was disconnected while waiting for the backend call to
                // return. Do nothing.
                return;
            }
            this.browserProfiles_ = data;
            this.selected_ = this.browserProfiles_[0];
            // Show the dialog only after the browser profiles data is populated
            // to avoid UI flicker.
            this.$.dialog.showModal();
        });
        this.addWebUiListener('import-data-status-changed', (importStatus) => {
            this.importStatus_ = importStatus;
            if (this.hasImportStatus_(ImportDataStatus.FAILED)) {
                this.$.dialog.close();
            }
        });
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('settings-boolean-control-change', () => this.updateImportDataTypesSelected_());
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('selected_')) {
            this.updateImportDataTypesSelected_();
        }
    }
    getProfileDisplayName_(name, profileName) {
        return profileName ? `${name} - ${profileName}` : name;
    }
    updateImportDataTypesSelected_() {
        const checkboxes = this.shadowRoot.querySelectorAll('settings-checkbox[checked]:not([hidden])');
        this.noImportDataTypeSelected_ = checkboxes.length === 0;
    }
    /**
     * @return Whether |status| is the current status.
     */
    hasImportStatus_(status) {
        return this.importStatus_ === status;
    }
    isImportFromFileSelected_() {
        // The last entry in |browserProfiles_| always refers to dummy profile for
        // importing from a bookmarks file.
        return this.selected_.index === this.browserProfiles_.length - 1;
    }
    getActionButtonText_() {
        return this.i18n(this.isImportFromFileSelected_() ? 'importChooseFile' : 'importCommit');
    }
    onBrowserProfileSelectionChange_() {
        this.selected_ = this.browserProfiles_[this.$.browserSelect.selectedIndex];
    }
    onActionButtonClick_() {
        const checkboxes = this.shadowRoot.querySelectorAll('settings-checkbox');
        if (this.isImportFromFileSelected_()) {
            this.browserProxy_.importFromBookmarksFile();
        }
        else {
            const types = {};
            checkboxes.forEach(checkbox => {
                types[checkbox.pref.key] = checkbox.checked && !checkbox.hidden;
            });
            this.browserProxy_.importData(this.$.browserSelect.selectedIndex, types);
        }
        checkboxes.forEach(checkbox => checkbox.sendPrefChange());
    }
    onCloseClick_() {
        this.$.dialog.close();
    }
    /**
     * @return Whether the import button should be disabled.
     */
    shouldDisableImport_() {
        return this.hasImportStatus_(ImportDataStatus.IN_PROGRESS) ||
            this.noImportDataTypeSelected_;
    }
}
customElements.define(SettingsImportDataDialogElement.is, SettingsImportDataDialogElement);
