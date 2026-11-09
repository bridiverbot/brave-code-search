import '/strings.m.js';
import '../data/document_info.js';
import '../data/model.js';
import '../data/state.js';
import './preview_area.js';
import './sidebar.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
import type { DocumentSettings, PrintPreviewDocumentInfoElement } from '../data/document_info.js';
import type { Margins } from '../data/margins.js';
import { MeasurementSystem } from '../data/measurement_system.js';
import type { PrintPreviewModelElement } from '../data/model.js';
import { Size } from '../data/size.js';
import type { PrintPreviewStateElement } from '../data/state.js';
import { Error, State } from '../data/state.js';
import { DestinationState } from './destination_settings.js';
import type { PrintPreviewPreviewAreaElement } from './preview_area.js';
import { PreviewAreaState } from './preview_area.js';
import type { PrintPreviewSidebarElement } from './sidebar.js';
export interface PrintPreviewAppElement {
    $: {
        documentInfo: PrintPreviewDocumentInfoElement;
        model: PrintPreviewModelElement;
        previewArea: PrintPreviewPreviewAreaElement;
        sidebar: PrintPreviewSidebarElement;
        state: PrintPreviewStateElement;
    };
}
declare const PrintPreviewAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewAppElement extends PrintPreviewAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        state: {
            type: NumberConstructor;
        };
        controlsManaged_: {
            type: BooleanConstructor;
        };
        destination_: {
            type: ObjectConstructor;
        };
        destinationsManaged_: {
            type: BooleanConstructor;
        };
        documentSettings_: {
            type: ObjectConstructor;
        };
        error_: {
            type: NumberConstructor;
        };
        margins_: {
            type: ObjectConstructor;
        };
        pageSize_: {
            type: ObjectConstructor;
        };
        settingsManaged_: {
            type: BooleanConstructor;
        };
        measurementSystem_: {
            type: ObjectConstructor;
        };
    };
    accessor state: State;
    protected accessor controlsManaged_: boolean;
    protected accessor destination_: Destination | null;
    private accessor destinationsManaged_;
    protected accessor documentSettings_: DocumentSettings;
    protected accessor error_: Error | null;
    protected accessor margins_: Margins | null;
    protected accessor pageSize_: Size;
    protected accessor settingsManaged_: boolean;
    protected accessor measurementSystem_: MeasurementSystem | null;
    private nativeLayer_;
    private tracker_;
    private cancelled_;
    private printRequested_;
    private startPreviewWhenReady_;
    private showSystemDialogBeforePrint_;
    private openPdfInPreview_;
    private isInKioskAutoPrintMode_;
    private whenReady_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onSidebarFocus_(): void;
    /**
     * Consume escape and enter key presses and ctrl + shift + p. Delegate
     * everything else to the preview area.
     */
    private onKeyDown_;
    private onInitialSettingsSet_;
    protected onDestinationStateChanged_(e: CustomEvent<{
        value: DestinationState;
    }>): void;
    /**
     * @param e Event containing the new sticky settings.
     */
    protected onStickySettingChanged_(e: CustomEvent<string>): void;
    protected onPreviewSettingChanged_(): Promise<void>;
    private updateUiForStateChange_;
    protected onPrintRequested_(): void;
    protected onCancelRequested_(): void;
    /**
     * @param e The event containing the new validity.
     */
    protected onSettingValidChanged_(e: CustomEvent<boolean>): void;
    private onFileSelectionCancel_;
    protected onPrintWithSystemDialog_(): void;
    /**
     * Called when printing to an extension printer fails.
     * @param httpError The HTTP error code, or -1 or a string describing
     *     the error, if not an HTTP error.
     */
    private onPrintFailed_;
    protected onPreviewStateChanged_(e: CustomEvent<{
        value: PreviewAreaState;
    }>): void;
    /**
     * Updates printing options according to source document presets.
     * @param disableScaling Whether the document disables scaling.
     * @param copies The default number of copies from the document.
     * @param duplex The default duplex setting from the document.
     */
    private onPrintPresetOptions_;
    /**
     * @param e Contains the new preview request ID.
     */
    protected onPreviewStart_(e: CustomEvent<number>): void;
    private close_;
    protected onDestinationChanged_(e: CustomEvent<{
        value: Destination;
    }>): void;
    protected onDestinationCapabilitiesChanged_(): void;
    protected onStateChanged_(e: CustomEvent<{
        value: State;
    }>): void;
    protected onErrorChanged_(e: CustomEvent<{
        value: Error;
    }>): void;
    protected onSettingsManagedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDocumentSettingsChanged_(e: CustomEvent<{
        value: DocumentSettings;
    }>): void;
    protected onMarginsChanged_(e: CustomEvent<{
        value: Margins;
    }>): void;
    protected onPageSizeChanged_(e: CustomEvent<{
        value: Size;
    }>): void;
}
export type AppElement = PrintPreviewAppElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-app': PrintPreviewAppElement;
    }
}
export {};
