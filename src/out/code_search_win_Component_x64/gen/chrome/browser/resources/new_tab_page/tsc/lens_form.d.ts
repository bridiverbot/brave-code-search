import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare enum LensErrorType {
    MULTIPLE_FILES = 0,
    NO_FILE = 1,
    FILE_TYPE = 2,
    FILE_SIZE = 3,
    INVALID_SCHEME = 4,
    INVALID_URL = 5,
    LENGTH_TOO_GREAT = 6
}
export declare enum LensSubmitType {
    FILE = 0,
    URL = 1
}
export interface LensFormElement {
    $: {
        fileForm: HTMLFormElement;
        fileInput: HTMLInputElement;
        urlForm: HTMLFormElement;
    };
}
export declare class LensFormElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        supportedFileTypes_: {
            type: StringConstructor;
        };
        renderingEnvironment_: {
            type: StringConstructor;
        };
        chromiumSurface_: {
            type: StringConstructor;
        };
        uploadFileAction_: {
            type: StringConstructor;
        };
        uploadUrlAction_: {
            type: StringConstructor;
        };
        uploadUrl_: {
            type: StringConstructor;
        };
        uploadUrlEntrypoint_: {
            type: StringConstructor;
        };
        language_: {
            type: StringConstructor;
        };
        clientData_: {
            type: StringConstructor;
        };
        startTime_: {
            type: StringConstructor;
        };
    };
    protected accessor supportedFileTypes_: string;
    protected accessor renderingEnvironment_: string;
    protected accessor chromiumSurface_: string;
    protected accessor language_: string;
    protected accessor uploadFileAction_: string;
    protected accessor uploadUrlAction_: string;
    protected accessor uploadUrl_: string;
    protected accessor uploadUrlEntrypoint_: string;
    protected accessor startTime_: string | null;
    protected accessor clientData_: string;
    openSystemFilePicker(): void;
    protected onFileInputChange_(): void;
    submitFileList(files: FileList): Promise<void> | undefined;
    private submitFile_;
    submitUrl(urlString: string): Promise<void>;
    private dispatchLoading_;
    private dispatchError_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-lens-form': LensFormElement;
    }
}
