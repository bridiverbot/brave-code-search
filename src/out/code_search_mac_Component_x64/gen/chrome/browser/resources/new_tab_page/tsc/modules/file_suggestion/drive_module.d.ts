import '../info_dialog.js';
import '../module_header.js';
import './file_suggestion.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { File } from '../../file_suggestion.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem, ModuleHeaderElement } from '../module_header.js';
import type { FileSuggestionElement } from './file_suggestion.js';
export interface DriveModuleElement {
    $: {
        fileSuggestion: FileSuggestionElement;
        moduleHeader: ModuleHeaderElement;
    };
}
declare const DriveModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The Drive module, which serves as an inside look to recent activity within a
 * user's Google Drive.
 */
export declare class DriveModuleElement extends DriveModuleElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        files: {
            type: ArrayConstructor;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
        showDriveModuleSeeMoreLink_: {
            type: BooleanConstructor;
        };
    };
    accessor files: File[];
    protected accessor showInfoDialog_: boolean;
    protected accessor showDriveModuleSeeMoreLink_: boolean;
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
    protected onInfoButtonClick_(): void;
    protected onInfoDialogClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-drive-module': DriveModuleElement;
    }
}
export declare const driveModuleDescriptor: ModuleDescriptor;
export {};
