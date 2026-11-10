import '/strings.m.js';
import type { PageHandlerInterface } from './access_code_cast.mojom-webui.js';
import { PageCallbackRouter } from './access_code_cast.mojom-webui.js';
/**
 * This enum is tied directly to a UMA enum defined in
 * //tools/metrics/histograms/enums.xml, and should always reflect it (do not
 * change one without changing the other).
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export declare enum DialogCloseReason {
    LOST_FOCUS = 0,
    CANCEL_BUTTON = 1,
    CAST_SUCCESS = 2,
    COUNT = 3
}
export declare class BrowserProxy {
    callbackRouter: PageCallbackRouter | undefined;
    handler: PageHandlerInterface | undefined;
    constructor(omitHandler?: boolean);
    closeDialog(): void;
    getDialogArgs(): any;
    isDialog(): boolean;
    isBarcodeApiAvailable(): boolean;
    isQrScanningAvailable(): Promise<boolean>;
    isCameraAvailable(): Promise<boolean>;
    static recordAccessCodeEntryTime(time: number): void;
    static recordCastAttemptLength(time: number): void;
    static recordDialogCloseReason(reason: DialogCloseReason): void;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
