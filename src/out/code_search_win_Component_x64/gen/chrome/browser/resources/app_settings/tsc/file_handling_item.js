// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_management_shared_style.css.js';
import './toggle_row.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { assert } from '//resources/js/assert.js';
import { browserProxyFactory } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { AppManagementUserAction } from 'chrome://resources/cr_components/app_management/constants.js';
import { recordAppManagementUserAction } from 'chrome://resources/cr_components/app_management/util.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './file_handling_item.css.js';
import { getHtml } from './file_handling_item.html.js';
import { createDummyApp } from './web_app_settings_utils.js';
const FileHandlingItemBase = I18nMixinLit(CrLitElement);
export class FileHandlingItemElement extends FileHandlingItemBase {
    static get is() {
        return 'app-management-file-handling-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            app: { type: Object },
            showOverflowDialog: { type: Boolean },
            hidden: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #app_accessor_storage = createDummyApp();
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    #showOverflowDialog_accessor_storage = false;
    get showOverflowDialog() { return this.#showOverflowDialog_accessor_storage; }
    set showOverflowDialog(value) { this.#showOverflowDialog_accessor_storage = value; }
    #hidden_accessor_storage = false;
    get hidden() { return this.#hidden_accessor_storage; }
    set hidden(value) { this.#hidden_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('app')) {
            this.hidden = this.isHidden_();
        }
    }
    firstUpdated() {
        this.addEventListener('change', this.onChanged_);
    }
    isHidden_() {
        if (this.app.fileHandlingState) {
            return !this.app.fileHandlingState.userVisibleTypes;
        }
        return false;
    }
    isManaged_() {
        if (this.app.fileHandlingState) {
            return this.app.fileHandlingState.isManaged;
        }
        return false;
    }
    userVisibleTypes_() {
        if (this.app.fileHandlingState) {
            return this.app.fileHandlingState.userVisibleTypes;
        }
        return '';
    }
    userVisibleTypesLabel_() {
        if (this.app.fileHandlingState) {
            return this.app.fileHandlingState.userVisibleTypesLabel;
        }
        return '';
    }
    getLearnMoreLinkUrl_() {
        if (this.app.fileHandlingState && this.app.fileHandlingState.learnMoreUrl) {
            return this.app.fileHandlingState.learnMoreUrl;
        }
        return '';
    }
    onLearnMoreLinkClicked_(e) {
        if (!this.getLearnMoreLinkUrl_()) {
            // Currently, this branch should only be used on Windows.
            e.detail.event.preventDefault();
            e.stopPropagation();
            browserProxyFactory.getInstance().handler.showDefaultAppAssociationsUi();
        }
    }
    onTypeListLinkClicked_(e) {
        // A place holder href with the value "#" is used to have a compliant link.
        // This prevents the browser from navigating the window to "#"
        e.detail.event.preventDefault();
        e.stopPropagation();
        this.showOverflowDialog = true;
        recordAppManagementUserAction(this.app.type, AppManagementUserAction.FILE_HANDLING_OVERFLOW_SHOWN);
    }
    onCloseButtonClick_() {
        this.shadowRoot.querySelector('#dialog').close();
    }
    onDialogClose_() {
        this.showOverflowDialog = false;
        const toFocus = this.shadowRoot.querySelector('#type-list');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    getValue_() {
        if (this.app.fileHandlingState) {
            return this.app.fileHandlingState.enabled;
        }
        return false;
    }
    onChanged_() {
        assert(this.app);
        const enabled = this.shadowRoot.querySelector('#toggle-row').isChecked();
        browserProxyFactory.getInstance().handler.setFileHandlingEnabled(this.app.id, enabled);
        const fileHandlingChangeAction = enabled ?
            AppManagementUserAction.FILE_HANDLING_TURNED_ON :
            AppManagementUserAction.FILE_HANDLING_TURNED_OFF;
        recordAppManagementUserAction(this.app.type, fileHandlingChangeAction);
    }
}
customElements.define(FileHandlingItemElement.is, FileHandlingItemElement);
