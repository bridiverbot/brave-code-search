import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './pack_dialog_alert.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PackDialogDelegate {
    /**
     * Opens a file browser for the user to select the root directory.
     * @return A promise that is resolved with the path the user selected.
     */
    choosePackRootDirectory(): Promise<string>;
    /**
     * Opens a file browser for the user to select the private key file.
     * @return A promise that is resolved with the path the user selected.
     */
    choosePrivateKeyPath(): Promise<string>;
    /** Packs the extension into a .crx. */
    packExtension(rootPath: string, keyPath: string, flag?: number): Promise<chrome.developerPrivate.PackDirectoryResponse>;
}
export interface ExtensionsPackDialogElement {
    $: {
        dialog: CrDialogElement;
        keyFileBrowse: HTMLElement;
        keyFile: CrInputElement;
        rootDirBrowse: HTMLElement;
        rootDir: CrInputElement;
    };
}
export declare class ExtensionsPackDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        packDirectory_: {
            type: StringConstructor;
        };
        keyFile_: {
            type: StringConstructor;
        };
        lastResponse_: {
            type: ObjectConstructor;
        };
    };
    accessor delegate: PackDialogDelegate;
    protected accessor packDirectory_: string;
    protected accessor keyFile_: string;
    protected accessor lastResponse_: chrome.developerPrivate.PackDirectoryResponse | null;
    protected onKeyFileValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onPackDirectoryValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onRootBrowseClick_(): void;
    protected onKeyBrowseClick_(): void;
    protected onCancelClick_(): void;
    protected onConfirmClick_(): void;
    /**
     * @param response The response from request to pack an extension.
     */
    private onPackResponse_;
    /**
     * In the case that the alert dialog was a success message, the entire
     * pack-dialog should close. Otherwise, we detach the alert by setting
     * lastResponse_ null. Additionally, if the user selected "proceed anyway"
     * in the dialog, we pack the extension again with override flags.
     */
    protected onAlertClose_(e: Event): void;
}
export type PackDialogElement = ExtensionsPackDialogElement;
declare global {
    interface HTMLElementTagNameMap {
        'extensions-pack-dialog': ExtensionsPackDialogElement;
    }
}
