// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../info_dialog.js';
import '../module_header.js';
import './file_suggestion.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit, loadTimeData } from '../../i18n_setup.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getHtml } from './drive_module.html.js';
import { FileProxy } from './file_module_proxy.js';
const DriveModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Drive module, which serves as an inside look to recent activity within a
 * user's Google Drive.
 */
export class DriveModuleElement extends DriveModuleElementBase {
    static get is() {
        return 'ntp-drive-module';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            files: { type: Array },
            showInfoDialog_: { type: Boolean },
            showDriveModuleSeeMoreLink_: { type: Boolean },
        };
    }
    #files_accessor_storage = [];
    get files() { return this.#files_accessor_storage; }
    set files(value) { this.#files_accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    #showDriveModuleSeeMoreLink__accessor_storage = loadTimeData.getBoolean('showDriveModuleSeeMoreLink');
    get showDriveModuleSeeMoreLink_() { return this.#showDriveModuleSeeMoreLink__accessor_storage; }
    set showDriveModuleSeeMoreLink_(value) { this.#showDriveModuleSeeMoreLink__accessor_storage = value; }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesDriveDisableButtonTextV2'),
            },
            {
                action: 'info',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:info' :
                    'modules:info-old',
                text: this.i18n('moduleInfoButtonTitle'),
            },
        ];
    }
    onDisableButtonClick_() {
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesDriveSentence')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
}
customElements.define(DriveModuleElement.is, DriveModuleElement);
async function createDriveElement() {
    const { files } = await FileProxy.getHandler().getFiles();
    if (files.length === 0) {
        return null;
    }
    const element = new DriveModuleElement();
    element.files = files;
    return element;
}
export const driveModuleDescriptor = new ModuleDescriptor(
/*id*/ 'drive', createDriveElement);
