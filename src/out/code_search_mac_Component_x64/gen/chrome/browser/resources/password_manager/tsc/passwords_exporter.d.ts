import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './cr_spinner_style.css.js';
import './shared_style.css.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface PasswordsExporterElement {
    $: {
        exportSuccessToast: CrToastElement;
    };
}
declare const PasswordsExporterElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class PasswordsExporterElement extends PasswordsExporterElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /** Whether password export progress spinner is shown. */
        showExportInProgress_: {
            type: BooleanConstructor;
            value: boolean;
        };
        /** Whether password export error dialog is shown. */
        showPasswordsExportErrorDialog_: {
            type: BooleanConstructor;
            value: boolean;
        };
        /** The error that occurred while exporting. */
        exportErrorMessage_: {
            type: StringConstructor;
            value: null;
        };
    };
    private exportListenerId_;
    private showPasswordsExportErrorDialog_;
    private showExportInProgress_;
    private exportErrorMessage_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Tells the PasswordsPrivate API to export saved passwords in a .csv file.
     */
    private onExportClick_;
    /**
     * Closes the export error dialog.
     */
    private closePasswordsExportErrorDialog_;
    /**
     * Retries export from the error dialog.
     */
    private onTryAgainClick_;
    /**
     * Handles an export progress event by showing the progress spinner or caching
     * the event for later consumption.
     */
    private onPasswordsFileExportProgress_;
    private onOpenInShellButtonClick_;
    private getAriaDescription_;
}
declare global {
    interface HTMLElementTagNameMap {
        'passwords-exporter': PasswordsExporterElement;
    }
}
export {};
