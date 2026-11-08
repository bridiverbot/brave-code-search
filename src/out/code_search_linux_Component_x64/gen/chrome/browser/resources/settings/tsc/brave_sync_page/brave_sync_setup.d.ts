import './brave_sync_code_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { BraveSyncBrowserProxy } from './brave_sync_browser_proxy.js';
/**
 * @fileoverview
 * 'brave-sync-setup' is the UI for starting or joining a sync chain
 * settings.
 */
declare const SettingsBraveSyncSetupElementBase: {
    new (): PolymerElement & I18nMixinInterface;
};
export declare class SettingsBraveSyncSetupElement extends SettingsBraveSyncSetupElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        syncCode: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
        * Sync code dialog type. Can only have 1 at a time, so use a single property.
        * 'qr' | 'words' | 'input' | 'choose' | null
        */
        syncCodeDialogType: {
            type: StringConstructor;
            notify: boolean;
        };
        isSubmittingSyncCode_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isGettingSyncCode_: {
            type: BooleanConstructor;
            value: boolean;
        };
        syncCodeValidationError_: {
            type: StringConstructor;
            value: string;
        };
    };
    private syncCode;
    private syncCodeDialogType;
    private isSubmittingSyncCode_;
    private isGettingSyncCode_;
    private syncCodeValidationError_;
    syncBrowserProxy_: BraveSyncBrowserProxy;
    handleStartSyncChain_(): Promise<void>;
    handleJoinSyncChain_(): void;
    handleSyncCodeDialogDone_(): void;
    submitSyncCode_(): Promise<void>;
}
export {};
