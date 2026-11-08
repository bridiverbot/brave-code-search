import '../info_dialog.js';
import '../module_header.js';
import './file_suggestion.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { File } from '../../file_suggestion.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem, ModuleHeaderElement } from '../module_header.js';
export interface MicrosoftFilesModuleElement {
    $: {
        moduleHeader: ModuleHeaderElement;
    };
}
declare const MicrosoftFilesModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The SharePoint/OneDrive module, which serves as an inside look to recent
 * activity within a user's Microsoft SharePoint and OneDrive.
 */
export declare class MicrosoftFilesModuleElement extends MicrosoftFilesModuleElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        files_: {
            type: ArrayConstructor;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor files_: File[];
    protected accessor showInfoDialog_: boolean;
    constructor(files: File[]);
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
    protected onInfoButtonClick_(): void;
    protected onInfoDialogClose_(): void;
    protected onSignoutButtonClick_(): void;
    protected recordFileTypesShown_(files: File[]): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-microsoft-files-module': MicrosoftFilesModuleElement;
    }
}
export declare const microsoftFilesModuleDescriptor: ModuleDescriptor;
export {};
