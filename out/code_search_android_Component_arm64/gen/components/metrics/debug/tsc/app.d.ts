import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import './field_trials.js';
import './private_metrics.js';
import './runtime_mutable_features.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
export declare class MetricsInternalsAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    /**
     * Resolves once the component has finished loading.
     */
    initPromise: Promise<void>;
    private browserProxy_;
    /**
     * Previous summary tables data. Used to prevent re-renderings of the tables
     * when the data has not changed.
     */
    private previousVariationsSummaryData_;
    private previousUmaSummaryData_;
    private previousUkmSummaryData_;
    constructor();
    /**
     * Returns UMA logs data (with their proto) as a JSON string. Used when
     * exporting UMA logs data. Returns a promise.
     */
    getUmaLogsExportContent(): Promise<string>;
    /**
     * Returns UKM logs data (with their proto) as a JSON string. Used when
     * exporting UKM logs data. Returns a promise.
     */
    getUkmLogsExportContent(): Promise<string>;
    private init_;
    /**
     * Synchronize the selected tab and the URL hash. Allows, for example,
     * chrome://metrics-internals#variations to directly open the variations tab.
     */
    private syncTabsWithUrlHash_;
    /**
     * Callback function to expand/collapse an element on click.
     * @param e The click event.
     */
    private toggleEventsExpand_;
    /**
     * Fills the passed table element with the given summary.
     */
    private updateSummaryTable_;
    /**
     * Fills the passed table element with the given seed info.
     */
    private updateSeedInfoTable_;
    /**
     * Fetches variations summary data and updates the view.
     */
    private updateVariationsSummary_;
    /**
     * Fetches stored seed info and updates the view for the given seed type.
     */
    private updateStoredSeedInfo_;
    /**
     * Fetches UMA summary data and updates the view.
     */
    private updateUmaSummary_;
    /**
     * Fetches UKM summary data and updates the view.
     */
    private updateUkmSummary_;
    /**
     * Fills the passed table element with the given logs.
     */
    private updateLogsTable_;
    /**
     * Fetches the latest UMA logs and renders them. This is called when the page
     * is loaded and whenever there is a log that created or changed.
     */
    private updateUmaLogsData_;
    /**
     * Fetches the latest UKM logs and renders them. This is called when the page
     * is loaded and whenever there is a log that created or changed.
     */
    private updateUkmLogsData_;
    /**
     * Exports the accumulated UMA logs, including their proto data, as a JSON
     * file. This will initiate a download.
     */
    private exportUmaLogs_;
    /**
     * Exports the accumulated UKM logs, including their proto data, as a JSON
     * file. This will initiate a download.
     */
    private exportUkmLogs_;
}
declare global {
    interface HTMLElementTagNameMap {
        'metrics-internals-app': MetricsInternalsAppElement;
    }
}
