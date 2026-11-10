import './elements/viewer_error_dialog.js';
import './elements/viewer_page_indicator.js';
import './elements/viewer_zoom_toolbar.js';
import type { BrowserApi } from './browser_api.js';
import type { ExtendedKeyEvent } from './constants.js';
import { FittingType } from './constants.js';
import type { MessageData } from './controller.js';
import type { ViewerPageIndicatorElement } from './elements/viewer_page_indicator.js';
import type { ViewerZoomToolbarElement } from './elements/viewer_zoom_toolbar.js';
import { LoadState } from './pdf_scripting_api.js';
import { PdfViewerBaseElement } from './pdf_viewer_base.js';
export interface PdfViewerPrintElement {
    $: {
        content: HTMLElement;
        pageIndicator: ViewerPageIndicatorElement;
        sizer: HTMLElement;
        zoomToolbar: ViewerZoomToolbarElement;
    };
}
export declare class PdfViewerPrintElement extends PdfViewerBaseElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private isPrintPreviewLoadingFinished_;
    private inPrintPreviewMode_;
    private dark_;
    private pluginController_;
    private toolbarManager_;
    isNewUiEnabled(): boolean;
    getBackgroundColor(): number;
    private getStreamUrl_;
    setPluginSrc(plugin: HTMLEmbedElement): void;
    init(browserApi: BrowserApi): void;
    handleKeyEvent(e: ExtendedKeyEvent): void;
    private setBackgroundColorForPrintPreview_;
    updateUiForViewportChange(): void;
    handleScriptingMessage(message: MessageEvent): boolean;
    /**
     * Handle scripting messages specific to print preview.
     * @param message the message to handle.
     * @return true if the message was handled, false otherwise.
     */
    private handlePrintPreviewScriptingMessage_;
    setLoadState(loadState: LoadState): void;
    handlePluginMessage(e: CustomEvent<MessageData>): void;
    /**
     * Handles a notification that print preview has loaded from the
     * current controller.
     */
    private handlePrintPreviewLoaded_;
    readyToSendLoadMessage(): boolean;
    forceFit(view: FittingType): void;
    protected afterZoom(_viewportZoom: number): void;
    handleStrings(strings: {
        [key: string]: string;
    }): void;
    updateProgress(progress: number): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pdf-viewer-print': PdfViewerPrintElement;
    }
}
