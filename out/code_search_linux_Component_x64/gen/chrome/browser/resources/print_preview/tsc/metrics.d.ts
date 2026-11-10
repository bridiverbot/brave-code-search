/**
 * Enumeration of buckets that a user can enter while using the destination
 * search widget.
 */
export declare enum DestinationSearchBucket {
    DESTINATION_SHOWN = 0,
    DESTINATION_CLOSED_CHANGED = 1,
    DESTINATION_CLOSED_UNCHANGED = 2,
    MANAGE_BUTTON_CLICKED = 14,
    DESTINATION_SEARCH_MAX_BUCKET = 15
}
/**
 * Print settings UI usage metrics buckets.
 */
export declare enum PrintSettingsUiBucket {
    ADVANCED_SETTINGS_DIALOG_SHOWN = 0,
    ADVANCED_SETTINGS_DIALOG_CANCELED = 1,
    MORE_SETTINGS_CLICKED = 2,
    LESS_SETTINGS_CLICKED = 3,
    PRINT_WITH_SETTINGS_EXPANDED = 4,
    PRINT_WITH_SETTINGS_COLLAPSED = 5,
    PRINT_SETTINGS_UI_MAX_BUCKET = 6
}
export declare class MetricsContext {
    private histogram_;
    private boundary_;
    private nativeLayer_;
    /**
     * @param histogram The name of the histogram to be recorded in.
     * @param boundary The exclusive maximum value (boundary) for the histogram.
     */
    constructor(histogram: string, boundary: number);
    /**
     * Record a histogram value in UMA. If specified value is larger than or
     * equal to the boundary, record the value in the largest bucket (boundary - 1).
     * @param bucket Value to record.
     */
    record(bucket: number): void;
    /**
     * Print settings UI specific usage statistics context
     */
    static printSettingsUi(): MetricsContext;
}
