import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class ComposeboxFileInputsElement extends CrLitElement {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disableFileInputs: {
            type: BooleanConstructor;
        };
        attachmentFileTypes_: {
            type: StringConstructor;
        };
        imageFileTypes_: {
            type: StringConstructor;
        };
    };
    accessor disableFileInputs: boolean;
    protected accessor attachmentFileTypes_: string;
    protected accessor imageFileTypes_: string;
    protected onOpenFileUpload_(): void;
    protected onOpenImageUpload_(): void;
    openFilePicker(): void;
    openImagePicker(): void;
    protected onFileChange_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-file-inputs': ComposeboxFileInputsElement;
    }
}
