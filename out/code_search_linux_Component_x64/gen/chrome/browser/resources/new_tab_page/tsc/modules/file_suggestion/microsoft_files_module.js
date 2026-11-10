// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../info_dialog.js';
import '../module_header.js';
import './file_suggestion.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RecommendationType } from '../../file_suggestion.mojom-webui.js';
import { I18nMixinLit, loadTimeData } from '../../i18n_setup.js';
import { recordSmallCount } from '../../metrics_utils.js';
import { ParentTrustedDocumentProxy } from '../microsoft_auth_frame_connector.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getHtml } from './microsoft_files_module.html.js';
import { MicrosoftFilesProxyImpl } from './microsoft_files_proxy.js';
const MicrosoftFilesModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The SharePoint/OneDrive module, which serves as an inside look to recent
 * activity within a user's Microsoft SharePoint and OneDrive.
 */
export class MicrosoftFilesModuleElement extends MicrosoftFilesModuleElementBase {
    static get is() {
        return 'ntp-microsoft-files-module';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            files_: { type: Array },
            showInfoDialog_: { type: Boolean },
        };
    }
    #files__accessor_storage = [];
    get files_() { return this.#files__accessor_storage; }
    set files_(value) { this.#files__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    constructor(files) {
        super();
        this.files_ = files;
        this.recordFileTypesShown_(files);
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesMicrosoftFilesDisableButtonText'),
            },
            {
                action: 'signout',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:logout' :
                    'modules:logout-old',
                text: this.i18n('modulesMicrosoftSignOutButtonText'),
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
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesMicrosoftFilesName')),
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
    onSignoutButtonClick_() {
        ParentTrustedDocumentProxy.getInstance()?.getChildDocument().signOut();
    }
    recordFileTypesShown_(files) {
        const numOfFiles = new Map();
        numOfFiles.set(RecommendationType.kUsed, 0);
        numOfFiles.set(RecommendationType.kShared, 0);
        numOfFiles.set(RecommendationType.kTrending, 0);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const recommendationType = file.recommendationType;
            if (recommendationType !== null) {
                numOfFiles.set(recommendationType, numOfFiles.get(recommendationType) + 1);
            }
        }
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Used', numOfFiles.get(RecommendationType.kUsed));
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Shared', numOfFiles.get(RecommendationType.kShared));
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Trending', numOfFiles.get(RecommendationType.kTrending));
    }
}
customElements.define(MicrosoftFilesModuleElement.is, MicrosoftFilesModuleElement);
async function createMicrosoftFilesElement() {
    const { files } = await MicrosoftFilesProxyImpl.getInstance().handler.getFiles();
    return files.length > 0 ? new MicrosoftFilesModuleElement(files) : null;
}
export const microsoftFilesModuleDescriptor = new ModuleDescriptor(
/*id*/ 'microsoft_files', createMicrosoftFilesElement);
