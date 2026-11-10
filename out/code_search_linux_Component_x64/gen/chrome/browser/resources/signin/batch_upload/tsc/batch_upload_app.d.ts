import '/strings.m.js';
import './data_section.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { BatchUploadAccountInfo, DataContainer } from './batch_upload.js';
export interface BatchUploadAppElement {
    $: {
        batchUploadDialog: HTMLElement;
        dataContainer: HTMLElement;
        dataSections: HTMLElement;
        saveButton: CrButtonElement;
        cancelButton: CrButtonElement;
    };
}
declare const BatchUploadAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class BatchUploadAppElement extends BatchUploadAppElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accountInfo_: {
            type: ObjectConstructor;
        };
        dialogSubtitle_: {
            type: StringConstructor;
        };
        dataSections_: {
            type: ArrayConstructor;
        };
        isSaveEnabled_: {
            type: BooleanConstructor;
        };
    };
    private batchUploadBrowserProxy_;
    protected accessor accountInfo_: BatchUploadAccountInfo;
    protected accessor dialogSubtitle_: string;
    protected accessor dataSections_: DataContainer[];
    protected dataSectionsToggles_: boolean[];
    protected accessor isSaveEnabled_: boolean;
    private resizeObserver_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addResizeObserver_;
    private updateViewHeight_;
    protected onSectionToggleChanged_(e: CustomEvent<{
        toggle: boolean;
    }>): void;
    protected onUpdateViewHeight_(): void;
    protected onSaveClick_(): void;
    private initializeInputAndOutputData_;
    protected onCancelClick_(): void;
    private updateSaveEnabled_;
    protected saveToAccount_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'batch-upload-app': BatchUploadAppElement;
    }
}
export {};
