import type { RecentDestination } from './destination.js';
import { Destination } from './destination.js';
/**
 * Enumeration of possible destination errors.
 */
export declare enum DestinationErrorType {
    INVALID = 0,
    NO_DESTINATIONS = 1
}
/**
 * Event types dispatched by the destination store.
 */
export declare enum DestinationStoreEventType {
    DESTINATION_SEARCH_DONE = "DestinationStore.DESTINATION_SEARCH_DONE",
    DESTINATION_SELECT = "DestinationStore.DESTINATION_SELECT",
    DESTINATIONS_INSERTED = "DestinationStore.DESTINATIONS_INSERTED",
    ERROR = "DestinationStore.ERROR",
    SELECTED_DESTINATION_CAPABILITIES_READY = "DestinationStore.SELECTED_DESTINATION_CAPABILITIES_READY"
}
export declare class DestinationStore extends EventTarget {
    /**
     * Whether the destination store will auto select the destination that
     * matches this set of parameters.
     */
    private autoSelectMatchingDestination_;
    /**
     * Cache used for constant lookup of destinations by key.
     */
    private destinationMap_;
    /**
     * Internal backing store for the data store.
     */
    private destinations_;
    /**
     * Whether a search for destinations is in progress for each type of
     * printer.
     */
    private destinationSearchStatus_;
    private initialDestinationSelected_;
    /**
     * Used to fetch local print destinations.
     */
    private nativeLayer_;
    /**
     * Whether PDF printer is enabled. It's disabled, for example, in App
     * Kiosk mode or when PDF printing is disallowed by policy.
     */
    private pdfPrinterEnabled_;
    private recentDestinationKeys_;
    /**
     * Currently selected destination.
     */
    private selectedDestination_;
    /**
     * Key of the system default destination.
     */
    private systemDefaultDestinationKey_;
    /**
     * Event tracker used to track event listeners of the destination store.
     */
    private tracker_;
    private typesToSearch_;
    /**
     * Whether to default to the system default printer instead of the most
     * recent destination.
     */
    private useSystemDefaultAsDefault_;
    /**
     * A data store that stores destinations and dispatches events when the
     * data store changes.
     * @param addListenerCallback Function to call to add Web UI listeners in
     *     DestinationStore constructor.
     */
    constructor(addListenerCallback: (eventName: string, listener: Function) => void);
    /**
     * @return List of destinations
     */
    destinations(): Destination[];
    /**
     * @return Whether a search for print destinations is in progress.
     */
    get isPrintDestinationSearchInProgress(): boolean;
    /**
     * @return The currently selected destination or null if none is selected.
     */
    get selectedDestination(): Destination | null;
    private getPrinterTypeForRecentDestination_;
    /**
     * Initializes the destination store. Sets the initially selected
     * destination. If any inserted destinations match this ID, that destination
     * will be automatically selected.
     * @param pdfPrinterDisabled Whether the PDF print destination is
     *     disabled in print preview.
     * @param saveToDriveDisabled Whether the 'Save to Google Drive' destination
     *     is disabled in print preview. Only used on Chrome OS.
     * @param systemDefaultDestinationId ID of the system default
     *     destination.
     * @param serializedDefaultDestinationSelectionRulesStr Serialized
     *     default destination selection rules.
     * @param recentDestinations The recent print destinations.
     */
    init(pdfPrinterDisabled: boolean, systemDefaultDestinationId: string, serializedDefaultDestinationSelectionRulesStr: string | null, recentDestinations: RecentDestination[]): void;
    /**
     * @param timeoutExpired Whether the select timeout is expired.
     *     Defaults to false.
     */
    private tryToSelectInitialDestination_;
    selectDefaultDestination(): void;
    /**
     * Called when destinations are added to the store when the initial
     * destination has not yet been set. Selects the initial destination based on
     * relevant policies, recent printers, and system default.
     * @param timeoutExpired Whether the initial timeout has expired.
     * @return Whether an initial destination was successfully selected.
     */
    private selectInitialDestination_;
    /**
     * @param key The destination key to try to select.
     * @return Whether the destination was found and selected.
     */
    private tryToSelectDestinationByKey_;
    /** Removes all events being tracked from the tracker. */
    resetTracker(): void;
    /**
     * @return Creates rules matching previously selected destination.
     */
    private convertToDestinationMatch_;
    /**
     * This function is only invoked when the user selects a new destination via
     * the UI. Programmatic selection of a destination should not use this
     * function.
     * @param Key identifying the destination to select
     */
    selectDestinationByKey(key: string): void;
    /**
     * @param destination Destination to select.
     * @param refreshDestination Set to true to allow the currently selected
     *          destination to be re-selected.
     */
    selectDestination(destination: Destination): void;
    /**
     * Selects the Save as PDF fallback if it is available. If not, selects the
     * first destination if it exists.
     * @return Whether a final destination could be found.
     */
    private selectFinalFallbackDestination_;
    /**
     * Initiates loading of destinations.
     * @param type The type of destinations to load.
     */
    private startLoadDestinations_;
    /** Initiates loading of all known destination types. */
    startLoadAllDestinations(): void;
    /**
     * @return The destination matching the key, if it exists.
     */
    getDestinationByKey(key: string): Destination | undefined;
    /**
     * Inserts {@code destination} to the data store and dispatches a
     * DESTINATIONS_INSERTED event.
     */
    private insertDestination_;
    /**
     * Inserts multiple {@code destinations} to the data store and dispatches
     * single DESTINATIONS_INSERTED event.
     */
    private insertDestinations_;
    /**
     * Dispatches DESTINATIONS_INSERTED event. In auto select mode, tries to
     * update selected destination to match
     * {@code autoSelectMatchingDestination_}.
     */
    private destinationsInserted_;
    /**
     * Sends SELECTED_DESTINATION_CAPABILITIES_READY event if the destination
     * is supported, or ERROR otherwise of with error type UNSUPPORTED.
     */
    private sendSelectedDestinationUpdateEvent_;
    /**
     * Updates an existing print destination with capabilities and display name
     * information. If the destination doesn't already exist, it will be added.
     */
    private updateDestination_;
    /**
     * Inserts a destination into the store without dispatching any events.
     * @return Whether the inserted destination was not already in the store.
     */
    private insertIntoStore_;
    /**
     * Creates a local PDF print destination.
     */
    private createLocalPdfPrintDestination_;
    /**
     * Called when destination search is complete for some type of printer.
     * @param type The type of printers that are done being retrieved.
     */
    private onDestinationSearchDone_;
    /**
     * Called when the native layer retrieves the capabilities for the selected
     * local destination. Updates the destination with new capabilities if the
     * destination already exists, otherwise it creates a new destination and
     * then updates its capabilities.
     * @param origin The origin of the print destination.
     * @param id The id of the print destination.
     * @param settingsInfo Contains the capabilities of the print destination,
     *     and information about the destination except in the case of extension
     *     printers.
     */
    private onCapabilitiesSet_;
    /**
     * Called when a request to get a local destination's print capabilities
     * fails. If the destination is the initial destination, auto-select another
     * destination instead.
     * @param _origin The origin type of the failed destination.
     * @param destinationId The destination ID that failed.
     */
    private onGetCapabilitiesFail_;
    /**
     * Called when a printer or printers are detected after sending getPrinters
     * from the native layer.
     * @param type The type of printer(s) added.
     * @param printers Information about the printers that have been retrieved.
     */
    private onPrintersAdded_;
}
