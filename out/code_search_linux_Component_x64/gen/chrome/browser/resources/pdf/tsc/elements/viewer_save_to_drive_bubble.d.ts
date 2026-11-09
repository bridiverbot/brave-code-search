import './icons.html.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_progress/cr_progress.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SaveToDriveState } from '../constants.js';
declare const ViewerSaveToDriveBubbleElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ViewerSaveToDriveBubbleElement {
    $: {
        dialog: HTMLDialogElement;
    };
}
export declare class ViewerSaveToDriveBubbleElement extends ViewerSaveToDriveBubbleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        docTitle: {
            type: StringConstructor;
        };
        progress: {
            type: ObjectConstructor;
        };
        state: {
            type: StringConstructor;
        };
        description_: {
            type: StringConstructor;
            state: boolean;
        };
        dialogTitle_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor docTitle: string;
    accessor progress: chrome.pdfViewerPrivate.SaveToDriveProgress;
    accessor state: SaveToDriveState;
    protected accessor description_: TrustedHTML;
    protected accessor dialogTitle_: string;
    private anchor_;
    private eventTracker_;
    private dismissTimeoutId_;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    showAt(anchor: HTMLElement, autoDismiss?: boolean): void;
    protected getFileName_(): string;
    protected getFileSizeBytes_(): number;
    protected getMetadata_(): string;
    protected getUploadedBytes_(): number;
    protected isSaveToDriveState_(state: SaveToDriveState): boolean;
    protected onRequestButtonClick_(): void;
    protected onCloseClick_(): void;
    protected onDialogClose_(): void;
    protected onFocusout_(e: FocusEvent): void;
    private onStateChanged_;
    private positionDialog_;
    private setDismissTimeout_;
    private updateDescription_;
    private updateDialogTitle_;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-save-to-drive-bubble': ViewerSaveToDriveBubbleElement;
    }
}
export {};
