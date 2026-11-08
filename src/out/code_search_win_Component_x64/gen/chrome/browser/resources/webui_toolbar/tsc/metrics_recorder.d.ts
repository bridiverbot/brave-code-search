/**
 * Input type to activate the ReloadButton.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * Defined in //tools/metrics/histograms/metadata/ui/enums.xml.
 */
export declare enum ReloadButtonInputType {
    MOUSE_RELEASE = 0,
    KEY_PRESS = 1,
    COUNT = 2
}
/**
 * The visible mode of the ReloadButton.
 */
export declare enum ReloadButtonVisibleMode {
    RELOAD = 0,
    STOP = 1
}
/**
 * Class responsible for recording metrics related to the ReloadButton WebUI.
 */
export declare class MetricsRecorder {
    /**
     * Returns the visible mode based on the given loading state.
     * @param isLoading Whether the page is currently loading.
     * @return The target visible mode.
     */
    static getVisibleMode(isLoading: boolean): ReloadButtonVisibleMode;
}
