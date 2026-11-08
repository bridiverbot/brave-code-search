import '/strings.m.js';
import './margin_control_container.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import type { Margins } from '../data/margins.js';
import type { MeasurementSystem } from '../data/measurement_system.js';
import type { Ticket } from '../data/model.js';
import { Size } from '../data/size.js';
import { Error, State } from '../data/state.js';
import type { PrintPreviewMarginControlContainerElement } from './margin_control_container.js';
export type PreviewTicket = Ticket & {
    headerFooterEnabled: boolean;
    pageRange: Array<{
        to: number;
        from: number;
    }>;
    pagesPerSheet: number;
    isFirstRequest: boolean;
    requestID: number;
};
export declare enum PreviewAreaState {
    LOADING = "loading",
    DISPLAY_PREVIEW = "display-preview",
    OPEN_IN_PREVIEW_LOADING = "open-in-preview-loading",
    OPEN_IN_PREVIEW_LOADED = "open-in-preview-loaded",
    ERROR = "error"
}
export interface PrintPreviewPreviewAreaElement {
    $: {
        marginControlContainer: PrintPreviewMarginControlContainerElement;
    };
}
declare const PrintPreviewPreviewAreaElementBase: typeof CrLitElement & (new (...args: any[]) => import("../dark_mode_mixin.js").DarkModeMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewPreviewAreaElement extends PrintPreviewPreviewAreaElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        destination: {
            type: ObjectConstructor;
        };
        documentModifiable: {
            type: BooleanConstructor;
        };
        error: {
            type: NumberConstructor;
            notify: boolean;
        };
        margins: {
            type: ObjectConstructor;
        };
        measurementSystem: {
            type: ObjectConstructor;
        };
        pageSize: {
            type: ObjectConstructor;
        };
        previewState: {
            type: StringConstructor;
            notify: boolean;
        };
        state: {
            type: NumberConstructor;
        };
        pluginLoadComplete_: {
            type: BooleanConstructor;
        };
        documentReady_: {
            type: BooleanConstructor;
        };
    };
    accessor destination: Destination | null;
    accessor documentModifiable: boolean;
    accessor error: Error | null;
    accessor margins: Margins | null;
    accessor measurementSystem: MeasurementSystem | null;
    accessor pageSize: Size;
    accessor previewState: PreviewAreaState;
    accessor state: State;
    private accessor pluginLoadComplete_;
    private accessor documentReady_;
    private nativeLayer_;
    private lastTicket_;
    private inFlightRequestId_;
    private pluginProxy_;
    private keyEventCallback_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    getLastTicketForTest(): PreviewTicket | null;
    previewLoaded(): boolean;
    /**
     * Called when the pointer moves onto the component. Shows the margin
     * controls if custom margins are being used.
     */
    private onPointerOver_;
    /**
     * Called when the pointer moves off of the component. Hides the margin
     * controls if they are visible.
     */
    private onPointerOut_;
    private pluginOrDocumentStatusChanged_;
    /**
     * @return 'invisible' if overlay is invisible, '' otherwise.
     */
    protected getInvisible_(): string;
    /**
     * @return Whether the preview area is in DISPLAY_PREVIEW state.
     */
    protected isInDisplayPreviewState_(): boolean;
    /**
     * @return Whether the preview is currently loading.
     */
    protected isPreviewLoading_(): boolean;
    /**
     * @return 'jumping-dots' to enable animation, '' otherwise.
     */
    protected getJumpingDots_(): string;
    /**
     * @return The current preview area message to display.
     */
    protected currentMessage_(): TrustedHTML;
    /**
     * @param forceUpdate Whether to force the preview area to update
     *     regardless of whether the print ticket has changed.
     */
    startPreview(forceUpdate: boolean): void;
    /** Set the preview state to display the "opening in preview" message. */
    setOpeningPdfInPreview(): void;
    /**
     * @param previewUid The unique identifier of the preview.
     * @param index The index of the page to preview.
     */
    private onPreviewStart_;
    /**
     * Called when the plugin loads the preview completely.
     * @param success Whether the plugin load succeeded or not.
     */
    private onPluginLoadComplete_;
    /**
     * Called when the preview plugin's visual state has changed. This is a
     * consequence of scrolling or zooming the plugin. Updates the custom
     * margins component if shown.
     * @param pageX The horizontal offset for the page corner in pixels.
     * @param pageY The vertical offset for the page corner in pixels.
     * @param pageWidth The page width in pixels.
     * @param viewportWidth The viewport width in pixels.
     * @param viewportHeight The viewport height in pixels.
     */
    private onPreviewVisualStateChange_;
    /**
     * Called when a page's preview has been generated.
     * @param pageIndex The index of the page whose preview is ready.
     * @param previewUid The unique ID of the print preview UI.
     * @param previewResponseId The preview request ID that this page
     *     preview is a response to.
     */
    private onPagePreviewReady_;
    private onDarkModeChanged_;
    /**
     * Processes a keyboard event that could possibly be used to change state of
     * the preview plugin.
     * @param e Keyboard event to process.
     */
    handleDirectionalKeyEvent(e: KeyboardEvent): void;
    /**
     * Sends a message to the plugin to hide the toolbars after a delay.
     */
    hideToolbar(): void;
    /**
     * Set a callback that gets called when a key event is received that
     * originates in the plugin.
     * @param callback The callback to be called with a key event.
     */
    setPluginKeyEventCallback(callback: (e: KeyboardEvent) => void): void;
    /**
     * Called when dragging margins starts or stops.
     */
    protected onMarginDragChanged_(e: CustomEvent<boolean>): void;
    /**
     * @param e Contains information about where the plugin should scroll to.
     */
    protected onTextFocusPosition_(e: CustomEvent<{
        x: number;
        y: number;
    }>): void;
    /**
     * @return Whether margin settings are valid for the print ticket.
     */
    protected marginsValid_(): boolean;
    private hasTicketChanged_;
    /** @return Native color model of the destination. */
    private getColorForTicket_;
    /** @return Scale factor for print ticket. */
    private getScaleFactorForTicket_;
    private isScalingPdf_;
    /** @return Appropriate key for the scaling type setting. */
    private getScalingSettingKey_;
    /**
     * @return true if the scaling type has just changed between
     * `ScalingType.CUSTOM` and another scaling type that is functionally
     * equivalent. In other words, this detects switch back
     * and forth between the `CUSTOM` scaling type and
     * a different scaling type that behaves the same as `CUSTOM`.
     */
    private scalingTypeAlteredAroundCustom_;
    /**
     * @param lastTicket Last print ticket.
     * @return Whether new scaling settings update the previewed
     *     document.
     */
    private isScalingChanged_;
    /**
     * @param dpiField The field in dpi to retrieve.
     * @return Field value.
     */
    private getDpiForTicket_;
    /**
     * Requests a preview from the native layer.
     * @return Promise that resolves when the preview has been
     *     generated.
     */
    private getPreview_;
    private onStateOrErrorChange_;
    /** @return The error message to display in the preview area. */
    private getErrorMessage_;
}
export type PreviewAreaElement = PrintPreviewPreviewAreaElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-preview-area': PrintPreviewPreviewAreaElement;
    }
}
export {};
