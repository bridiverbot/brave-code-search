import '/strings.m.js';
import type { Cdd, ColorOption, DpiOption, DuplexType, MediaSizeOption } from './cdd.js';
/**
 * Enumeration of the origin types for destinations.
 */
export declare enum DestinationOrigin {
    LOCAL = "local",
    COOKIES = "cookies",
    PRIVET = "privet",
    EXTENSION = "extension",
    CROS = "chrome_os"
}
/**
 * Printer types for capabilities and printer list requests.
 * Must match PrinterType in printing/mojom/print.mojom
 */
export declare enum PrinterType {
    EXTENSION_PRINTER = 0,
    PDF_PRINTER = 1,
    LOCAL_PRINTER = 2
}
/**
 * Enumeration of color modes used by Chromium.
 */
export declare enum ColorMode {
    GRAY = 1,
    COLOR = 2
}
export interface RecentDestination {
    id: string;
    origin: DestinationOrigin;
    capabilities: Cdd | null;
    displayName: string;
    extensionId: string;
    extensionName: string;
    icon?: string;
}
export declare function isPdfPrinter(id: string): boolean;
/**
 * Creates a |RecentDestination| to represent |destination| in the app
 * state.
 */
export declare function makeRecentDestination(destination: Destination): RecentDestination;
/**
 * @return key that maps to a destination with the selected |id| and |origin|.
 */
export declare function createDestinationKey(id: string, origin: DestinationOrigin): string;
/**
 * @return A key that maps to a destination with parameters matching
 *     |recentDestination|.
 */
export declare function createRecentDestinationKey(recentDestination: RecentDestination): string;
export interface DestinationOptionalParams {
    isEnterprisePrinter?: boolean;
    extensionId?: string;
    extensionName?: string;
    description?: string;
    location?: string;
}
/**
 * Print destination data object.
 */
export declare class Destination {
    /**
     * ID of the destination.
     */
    private id_;
    /**
     * Origin of the destination.
     */
    private origin_;
    /**
     * Display name of the destination.
     */
    private displayName_;
    /**
     * Print capabilities of the destination.
     */
    private capabilities_;
    /**
     * Whether the destination is an enterprise policy controlled printer.
     */
    private isEnterprisePrinter_;
    /**
     * Destination location.
     */
    private location_;
    /**
     * Printer description.
     */
    private description_;
    /**
     * Extension ID for extension managed printers.
     */
    private extensionId_;
    /**
     * Extension name for extension managed printers.
     */
    private extensionName_;
    private type_;
    constructor(id: string, origin: DestinationOrigin, displayName: string, params?: DestinationOptionalParams);
    private computeType_;
    get type(): PrinterType;
    get id(): string;
    get origin(): DestinationOrigin;
    get displayName(): string;
    /**
     * @return Whether the destination is an extension managed printer.
     */
    get isExtension(): boolean;
    /**
     * @return Most relevant string to help user to identify this
     *     destination.
     */
    get hint(): string;
    /**
     * @return Extension ID associated with the destination. Non-empty
     *     only for extension managed printers.
     */
    get extensionId(): string;
    /**
     * @return Extension name associated with the destination.
     *     Non-empty only for extension managed printers.
     */
    get extensionName(): string;
    /** @return Print capabilities of the destination. */
    get capabilities(): Cdd | null;
    set capabilities(capabilities: Cdd | null);
    /** @return Path to the SVG for the destination's icon. */
    get icon(): string;
    /**
     * @return Properties (besides display name) to match search queries against.
     */
    get extraPropertiesToMatch(): string[];
    /**
     * Matches a query against the destination.
     * @param query Query to match against the destination.
     * @return Whether the query matches this destination.
     */
    matches(query: RegExp): boolean;
    /**
     * Whether the printer is enterprise policy controlled printer.
     */
    get isEnterprisePrinter(): boolean;
    private copiesCapability_;
    private colorCapability_;
    /** @return Whether the printer supports copies. */
    get hasCopiesCapability(): boolean;
    /**
     * @return Whether the printer supports both black and white and
     *     color printing.
     */
    get hasColorCapability(): boolean;
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Native color model of the destination.
     */
    getNativeColorModel(isColor: boolean): number;
    /**
     * @return The default color option for the destination.
     */
    get defaultColorOption(): ColorOption | null;
    /**
     * @return Color option value of the destination with the given binary color
     * value. Returns null if the destination doesn't support such color value.
     */
    getColor(isColor: boolean): ColorOption | null;
    /**
     * @return Media size value of the destination with the given width and height
     * values. Returns undefined if there is no such media size value.
     */
    getMediaSize(width: number, height: number): MediaSizeOption | undefined;
    /**
     * @return DPI (Dots per Inch) value of the destination with the given
     * horizontal and vertical resolutions. Returns undefined if there is no such
     * DPI value.
     */
    getDpi(horizontal: number, vertical: number): DpiOption | undefined;
    /**
     * @return Returns true if the current printing destination supports the given
     * duplex value. Returns false in all other cases.
     */
    supportsDuplex(duplex: DuplexType): boolean;
    /** @return A unique identifier for this destination. */
    get key(): string;
}
/**
 * Enumeration of Google-promoted destination IDs.
 * @enum {string}
 */
export declare enum GooglePromotedDestinationId {
    SAVE_AS_PDF = "Save as PDF"
}
export declare const PDF_DESTINATION_KEY: string;
