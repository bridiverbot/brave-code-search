import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Margins } from './margins.js';
import { PrintableArea } from './printable_area.js';
import { Size } from './size.js';
export interface DocumentSettings {
    allPagesHaveCustomSize: boolean;
    allPagesHaveCustomOrientation: boolean;
    hasSelection: boolean;
    isModifiable: boolean;
    isScalingDisabled: boolean;
    fitToPageScaling: number;
    pageCount: number;
    title: string;
}
export interface PageLayoutInfo {
    marginTop: number;
    marginLeft: number;
    marginBottom: number;
    marginRight: number;
    contentWidth: number;
    contentHeight: number;
    printableAreaX: number;
    printableAreaY: number;
    printableAreaWidth: number;
    printableAreaHeight: number;
}
export declare function createDocumentSettings(): DocumentSettings;
declare const PrintPreviewDocumentInfoElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewDocumentInfoElement extends PrintPreviewDocumentInfoElementBase {
    static get is(): string;
    static get properties(): {
        documentSettings: {
            type: ObjectConstructor;
            notify: boolean;
        };
        margins: {
            type: ObjectConstructor;
            notify: boolean;
        };
        /**
         * Size of the pages of the document in points. Actual page-related
         * information won't be set until preview generation occurs, so use
         * a default value until then.
         */
        pageSize: {
            type: ObjectConstructor;
            notify: boolean;
        };
        /**
         * Printable area of the document in points.
         */
        printableArea: {
            type: ObjectConstructor;
            notify: boolean;
        };
    };
    accessor documentSettings: DocumentSettings;
    inFlightRequestId: number;
    accessor margins: Margins | null;
    accessor pageSize: Size;
    accessor printableArea: PrintableArea;
    private isInitialized_;
    connectedCallback(): void;
    private cloneAndModify_;
    /**
     * Initializes the state of the data model.
     */
    init(isModifiable: boolean, title: string, hasSelection: boolean): void;
    /**
     * Updates whether scaling is disabled for the document.
     */
    updateIsScalingDisabled(isScalingDisabled: boolean): void;
    /**
     * Called when the page layout of the document is ready. Always occurs
     * as a result of a preview request.
     * @param pageLayout Layout information about the document.
     * @param allPagesHaveCustomSize Whether this document has a custom page size
     *     or style to use for all pages.
     * @param allPagesHaveCustomOrientation Whether this document has a custom
     *     page orientation to use for all pages.
     */
    private onPageLayoutReady_;
    /**
     * Called when the document page count is received from the native layer.
     * Always occurs as a result of a preview request.
     * @param pageCount The document's page count.
     * @param previewResponseId The request ID for this page count event.
     * @param fitToPageScaling The scaling required to fit the document to page.
     */
    private onPageCountReady_;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-document-info': PrintPreviewDocumentInfoElement;
    }
}
export {};
