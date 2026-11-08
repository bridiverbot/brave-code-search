import './brave_sync_code_dialog.js';
import './brave_sync_delete_account_dialog.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { DomRepeatEvent, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BraveDeviceInfo, BraveSyncBrowserProxy } from './brave_sync_browser_proxy.js';
/**
 * @fileoverview
 * 'settings-brave-sync-configure' is the set of controls which fetches, displays
 * and updates the sync configuration.
 */
declare const SettingsBraveSyncConfigureElementBase: {
    new (): PolymerElement & WebUiListenerMixinInterface & I18nMixinInterface;
};
export declare class SettingsBraveSyncConfigureElement extends SettingsBraveSyncConfigureElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The current sync status, supplied by parent element.
         * @type {!SyncStatus}
         */
        syncStatus: ObjectConstructor;
        /**
         * Configured sync code
         */
        syncCode: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
         * List of devices in sync chain
         * @private
         */
        deviceList_: ArrayConstructor;
        /**
         * Sync code dialog type. Can only have 1 at a time, so use a single property.
         * 'qr' | 'words' | 'input' | 'choose' | null
         * @private
         */
        syncCodeDialogType_: StringConstructor;
        /**
         * Displaying delete account dialog when true
         */
        syncDoingDeleteAccount_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    private syncStatus;
    private syncCode;
    private deviceList_;
    private syncCodeDialogType_;
    private syncDoingDeleteAccount_;
    browserProxy_: BraveSyncBrowserProxy;
    connectedCallback(): Promise<void>;
    handleDeviceInfo_(deviceList: BraveDeviceInfo[]): void;
    getDeviceDisplayDate(device: BraveDeviceInfo): string;
    ensureSetSyncCode_(): Promise<void>;
    onViewSyncCode_(): Promise<void>;
    onAddDevice_(): Promise<void>;
    onSyncCodeDialogDone_(): void;
    onResetSyncChain_(): Promise<void>;
    onPermanentlyDeleteSyncAccount_(): void;
    onDeleteDevice_(e: DomRepeatEvent<BraveDeviceInfo>): Promise<void>;
}
export {};
