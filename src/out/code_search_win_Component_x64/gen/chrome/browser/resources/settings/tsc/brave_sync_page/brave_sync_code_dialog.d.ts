import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { BraveSyncBrowserProxy } from './brave_sync_browser_proxy.js';
/**
 * @fileoverview
 * 'settings-brave-sync-code-dialog' contains the dialog for displaying or
 * inputting the sync code. It can display in input mode or in read-only
 * words, qr-code, or a 'chooser' which will allow the user to choose words or
 * qr-code.
 */
declare const SettingsBraveSyncCodeDialogElementBase: {
    new (): PolymerElement & I18nMixinInterface;
};
export declare class SettingsBraveSyncCodeDialogElement extends SettingsBraveSyncCodeDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        syncCode: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
         * 'qr' | 'words' | 'choose' | 'input'
         */
        codeType: {
            type: StringConstructor;
            value: string;
            notify: boolean;
        };
        syncCodeValidationError: {
            type: StringConstructor;
            value: string;
            notify: boolean;
        };
        syncCodeWordCount_: {
            type: NumberConstructor;
            value: number;
        };
        hasCopiedSyncCode_: {
            type: BooleanConstructor;
            value: boolean;
        };
        qrCodeImageUrl_: {
            type: StringConstructor;
            value: null;
        };
    };
    static get observers(): string[];
    private syncCode;
    private codeType;
    private syncCodeValidationError;
    private syncCodeWordCount_;
    private hasCopiedSyncCode_;
    private qrCodeImageUrl_;
    private hasCopiedSyncCodeTimer_;
    syncBrowserProxy_: BraveSyncBrowserProxy;
    computeSyncCodeWordCount_(): Promise<void>;
    isCodeType(askingType: string): boolean;
    handleClose_(): void;
    handleChooseMobile_(): void;
    handleChooseComputer_(): void;
    handleSyncCodeCopy_(): Promise<void>;
    handleDone_(): void;
    getQRCode_(): Promise<void>;
}
export {};
