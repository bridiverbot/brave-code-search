import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const OptionsDialogMinWidth = 400;
export declare const OptionsDialogMaxHeight = 640;
export interface ExtensionsOptionsDialogElement {
    $: {
        body: HTMLElement;
        dialog: CrDialogElement;
    };
}
export declare class ExtensionsOptionsDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionOptions_: {
            type: ObjectConstructor;
        };
        data_: {
            type: ObjectConstructor;
        };
    };
    private accessor extensionOptions_;
    protected accessor data_: chrome.developerPrivate.ExtensionInfo | undefined;
    private preferredSize_;
    private eventTracker_;
    private updateDialogSizeTimeout_;
    get open(): boolean;
    /**
     * Resizes the dialog to the width/height stored in |preferredSize_|, taking
     * into account the window width/height.
     */
    private updateDialogSize_;
    show(data: chrome.developerPrivate.ExtensionInfo): void;
    protected onClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-options-dialog': ExtensionsOptionsDialogElement;
    }
}
