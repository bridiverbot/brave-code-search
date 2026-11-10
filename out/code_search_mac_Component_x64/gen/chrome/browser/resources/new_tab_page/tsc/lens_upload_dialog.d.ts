import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './lens_form.js';
import './lens_upload_dialog_icons.html.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { LensFormElement } from './lens_form.js';
import { LensErrorType, LensSubmitType } from './lens_form.js';
export interface LensUploadDialogElement {
    $: {
        dialog: HTMLElement;
        lensForm: LensFormElement;
        dragDropArea: HTMLElement;
        closeButton: CrIconButtonElement;
    };
}
/**
 * List of possible upload dialog actions. This enum must match with the
 * numbering for NewTabPageLensUploadDialogActions in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
export declare enum LensUploadDialogAction {
    URL_SUBMITTED = 0,
    FILE_SUBMITTED = 1,
    IMAGE_DROPPED = 2,
    DIALOG_OPENED = 3,
    DIALOG_CLOSED = 4,
    ERROR_SHOWN = 5,
    MAX_VALUE = 5
}
/**
 * List of possible upload dialog errors. This enum must match with the
 * numbering for NewTabPageLensUploadDialogErrors in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
export declare enum LensUploadDialogError {
    FILE_SIZE = 0,
    FILE_TYPE = 1,
    MULTIPLE_FILES = 2,
    MULTIPLE_URLS = 3,
    LENGTH_TOO_GREAT = 4,
    INVALID_SCHEME = 5,
    INVALID_URL = 6,
    NETWORK_ERROR = 7,
    MAX_VALUE = 7
}
export declare function recordLensUploadDialogAction(action: LensUploadDialogAction): void;
export declare function recordLensUploadDialogError(action: LensUploadDialogError): void;
declare const LensUploadDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class LensUploadDialogElement extends LensUploadDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dialogState_: {
            type: NumberConstructor;
        };
        lensErrorMessage_: {
            type: NumberConstructor;
        };
        isHidden_: {
            type: BooleanConstructor;
        };
        isNormalOrError_: {
            type: BooleanConstructor;
        };
        isDragging_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLoading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isError_: {
            type: BooleanConstructor;
        };
        isOffline_: {
            type: BooleanConstructor;
        };
        uploadUrl_: {
            type: StringConstructor;
        };
    };
    protected accessor isHidden_: boolean;
    protected accessor isError_: boolean;
    protected accessor isNormalOrError_: boolean;
    protected accessor isDragging_: boolean;
    protected accessor isLoading_: boolean;
    protected accessor isOffline_: boolean;
    private accessor dialogState_;
    private accessor lensErrorMessage_;
    private outsideHandlerAttached_;
    protected accessor uploadUrl_: string;
    private dragCount;
    connectedCallback(): void;
    private computeIsHidden_;
    private computeIsNormalOrError_;
    private computeIsDragging_;
    private computeIsLoading_;
    private computeIsError_;
    private computeIsOffline_;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    openDialog(): void;
    closeDialog(): void;
    protected getErrorString_(): string;
    /**
     * Checks to see if the user is online or offline and sets the dialog state
     * accordingly.
     */
    private setOnlineState_;
    private outsideKeyHandler_;
    private attachOutsideHandler_;
    private detachOutsideHandler_;
    protected onCloseButtonKeydown_(event: KeyboardEvent): void;
    protected onOfflineRetryButtonKeydown_(event: KeyboardEvent): void;
    protected onCloseButtonClick_(): void;
    protected onOfflineRetryButtonClick_(): void;
    protected onUploadFileKeydown_(event: KeyboardEvent): void;
    protected onUploadFileClick_(): void;
    protected onUploadFileTouchend_(e: Event): void;
    protected onFormLoading_(event: CustomEvent<LensSubmitType>): void;
    protected onFormError_(event: CustomEvent<LensErrorType>): void;
    protected onUrlKeydown_(event: KeyboardEvent): void;
    protected onInputSubmitKeydown_(event: KeyboardEvent): void;
    protected onInputSubmitClick_(): void;
    private submitUrl_;
    protected onDragenter_(e: DragEvent): void;
    protected onDragover_(e: DragEvent): void;
    protected onDragleave_(e: DragEvent): void;
    protected onDrop_(e: DragEvent): void;
    protected onFocusout_(event: FocusEvent): void;
    protected onInputBoxInput_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-lens-upload-dialog': LensUploadDialogElement;
    }
}
export {};
