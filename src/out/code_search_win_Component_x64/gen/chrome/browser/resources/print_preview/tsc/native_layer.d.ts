import type { Cdd } from './data/cdd.js';
import type { PrinterType } from './data/destination.js';
import type { LocalDestinationInfo } from './data/local_parsers.js';
import type { MeasurementSystemUnitType } from './data/measurement_system.js';
/**
 * Enumeration of background graphics printing mode restrictions used by
 * Chromium.
 * This has to coincide with |printing::BackgroundGraphicsModeRestriction| as
 * defined in printing/backend/printing_restrictions.h
 */
export declare enum BackgroundGraphicsModeRestriction {
    UNSET = 0,
    ENABLED = 1,
    DISABLED = 2
}
/**
 * Enumeration of color mode restrictions used by Chromium.
 * This has to coincide with |printing::ColorModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
export declare enum ColorModeRestriction {
    UNSET = 0,
    MONOCHROME = 1,
    COLOR = 2
}
/**
 * Enumeration of duplex mode restrictions used by Chromium.
 * This has to coincide with |printing::DuplexModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
export declare enum DuplexModeRestriction {
    UNSET = 0,
    SIMPLEX = 1,
    LONG_EDGE = 2,
    SHORT_EDGE = 4,
    DUPLEX = 6
}
/**
 * Policies affecting print settings values and availability.
 */
export interface Policies {
    headerFooter?: {
        allowedMode?: boolean;
        defaultMode?: boolean;
    };
    cssBackground?: {
        allowedMode?: BackgroundGraphicsModeRestriction;
        defaultMode?: BackgroundGraphicsModeRestriction;
    };
    mediaSize?: {
        defaultMode?: {
            width: number;
            height: number;
        };
    };
    printPdfAsImage?: {
        defaultMode?: boolean;
    };
    printPdfAsImageAvailability?: {
        allowedMode?: boolean;
    };
}
/**
 * @see corresponding field name definitions in print_preview_handler.cc
 */
export interface NativeInitialSettings {
    isInKioskAutoPrintMode: boolean;
    isInAppKioskMode: boolean;
    uiLocale: string;
    thousandsDelimiter: string;
    decimalDelimiter: string;
    unitType: MeasurementSystemUnitType;
    previewModifiable: boolean;
    documentTitle: string;
    documentHasSelection: boolean;
    shouldPrintSelectionOnly: boolean;
    printerName: string;
    policies?: Policies;
    serializedAppStateStr: string | null;
    serializedDefaultDestinationSelectionRulesStr: string | null;
    pdfPrinterDisabled: boolean;
    destinationsManaged: boolean;
}
export interface CapabilitiesResponse {
    printer?: LocalDestinationInfo;
    capabilities: Cdd | null;
}
/**
 * An interface to the native Chromium printing system layer.
 */
export interface NativeLayer {
    /**
     * Gets the initial settings to initialize the print preview with.
     */
    getInitialSettings(): Promise<NativeInitialSettings>;
    /**
     * Requests the system's print destinations. The promise will be resolved
     * when all destinations of that type have been retrieved. One or more
     * 'printers-added' events may be fired in response before resolution.
     */
    getPrinters(type: PrinterType): Promise<void>;
    /**
     * Requests the destination's printing capabilities. Returns a promise that
     * will be resolved with the capabilities if they are obtained successfully.
     */
    getPrinterCapabilities(destinationId: string, type: PrinterType): Promise<CapabilitiesResponse>;
    /**
     * Requests that a preview be generated. The following Web UI events may
     * be triggered in response:
     *   'print-preset-options',
     *   'page-count-ready',
     *   'page-layout-ready',
     *   'page-preview-ready'
     * @param printTicket JSON print ticket for the request.
     * @return Promise that resolves with the unique ID of
     *     the preview UI when the preview has been generated.
     */
    getPreview(printTicket: string): Promise<number>;
    /**
     * Opens the OS's printer manager dialog. For Chrome OS, open the printing
     * settings in the Settings App.
     */
    managePrinters(): void;
    /**
     * Requests that the document be printed.
     * @param printTicket The serialized print ticket for the print
     *     job.
     * @return Promise that will resolve when the print request is
     *     finished or rejected.
     */
    doPrint(printTicket: string): Promise<string | undefined>;
    /** Requests that the current pending print request be cancelled. */
    cancelPendingPrintRequest(): void;
    /**
     * Sends the app state to be saved in the sticky settings.
     * @param appStateStr JSON string of the app state to persist.
     */
    saveAppState(appStateStr: string): void;
    /**
     * Closes the print preview dialog.
     * If |isCancel| is true, also sends a message to Print Preview Handler in
     * order to update UMA statistics.
     * @param isCancel whether this was called due to the user
     *     closing the dialog without printing.
     */
    dialogClose(isCancel: boolean): void;
    /** Hide the print preview dialog and allow the native layer to close it. */
    hidePreview(): void;
    /**
     * Notifies the metrics handler to record a histogram value.
     * @param histogram The name of the histogram to record
     * @param bucket The bucket to record
     * @param maxBucket The maximum bucket value in the histogram.
     */
    recordInHistogram(histogram: string, bucket: number, maxBucket: number): void;
    /**
     * Notifies the metrics handler to record a boolean histogram value.
     * @param histogram The name of the histogram to record.
     * @param value The boolean value to record.
     */
    recordBooleanHistogram(histogram: string, value: boolean): void;
}
export declare class NativeLayerImpl implements NativeLayer {
    getInitialSettings(): Promise<NativeInitialSettings>;
    getPrinters(type: PrinterType): Promise<void>;
    getPrinterCapabilities(destinationId: string, type: PrinterType): Promise<CapabilitiesResponse>;
    getPreview(printTicket: string): Promise<number>;
    managePrinters(): void;
    doPrint(printTicket: string): Promise<string | undefined>;
    cancelPendingPrintRequest(): void;
    saveAppState(appStateStr: string): void;
    dialogClose(isCancel: boolean): void;
    hidePreview(): void;
    recordInHistogram(histogram: string, bucket: number, maxBucket: number): void;
    recordBooleanHistogram(histogram: string, value: boolean): void;
    static getInstance(): NativeLayer;
    static setInstance(obj: NativeLayer): void;
}
