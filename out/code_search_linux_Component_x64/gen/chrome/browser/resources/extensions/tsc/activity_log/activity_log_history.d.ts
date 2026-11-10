import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import './activity_log_history_item.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ActivityGroup } from './activity_log_history_item.js';
/**
 * The different states the activity log page can be in. Initial state is
 * LOADING because we call the activity log API whenever a user navigates to
 * the page. LOADED is the state where the API call has returned a successful
 * result.
 */
export declare enum ActivityLogPageState {
    LOADING = "loading",
    LOADED = "loaded"
}
export interface ActivityLogDelegate {
    getExtensionActivityLog(extensionId: string): Promise<chrome.activityLogPrivate.ActivityResultSet>;
    getFilteredExtensionActivityLog(extensionId: string, searchTerm: string): Promise<chrome.activityLogPrivate.ActivityResultSet>;
    deleteActivitiesById(activityIds: string[]): Promise<void>;
    deleteActivitiesFromExtension(extensionId: string): Promise<void>;
    downloadActivities(rawActivityData: string, fileName: string): void;
}
export declare class DummyActivityLogDelegate implements ActivityLogDelegate {
    getExtensionActivityLog(_extensionId: string): Promise<{
        activities: never[];
    }>;
    getFilteredExtensionActivityLog(_extensionId: string, _searchTerm: string): Promise<{
        activities: never[];
    }>;
    deleteActivitiesById(_activityIds: string[]): Promise<void>;
    deleteActivitiesFromExtension(_extensionId: string): Promise<void>;
    downloadActivities(_rawActivityData: string, _fileName: string): void;
}
declare global {
    interface HTMLElementEventMap {
        'delete-activity-log-item': CustomEvent<string[]>;
    }
}
export declare class ActivityLogHistoryElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensionId: {
            type: StringConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        /**
         * An array representing the activity log. Stores activities grouped by
         * API call or content script name sorted in descending order of the call
         * count.
         */
        activityData_: {
            type: ArrayConstructor;
        };
        pageState_: {
            type: StringConstructor;
        };
        lastSearch_: {
            type: StringConstructor;
        };
    };
    accessor extensionId: string;
    accessor delegate: ActivityLogDelegate;
    protected accessor activityData_: ActivityGroup[];
    private accessor pageState_;
    private accessor lastSearch_;
    /**
     * A promise resolver for any external files waiting for the
     * GetExtensionActivity API call to finish.
     * Currently only used for extension_settings_browsertest.cc
     */
    private dataFetchedResolver_;
    /**
     * The stringified API response from the activityLogPrivate API with
     * individual activities sorted in ascending order by timestamp; used for
     * exporting the activity log.
     */
    private rawActivities_;
    connectedCallback(): void;
    firstUpdated(): void;
    setPageStateForTest(state: ActivityLogPageState): void;
    /**
     * Expose only the promise of dataFetchedResolver_.
     */
    whenDataFetched(): Promise<void>;
    protected shouldShowEmptyActivityLogMessage_(): boolean;
    protected shouldShowLoadingMessage_(): boolean;
    protected shouldShowActivities_(): boolean;
    protected onClearActivitiesClick_(): void;
    protected onMoreActionsClick_(): void;
    private expandItems_;
    protected onExpandAllClick_(): void;
    protected onCollapseAllClick_(): void;
    protected onExportClick_(): void;
    private deleteItem_;
    private processActivities_;
    private refreshActivities_;
    private getActivityLog_;
    private getFilteredActivityLog_;
    protected onSearchChanged_(e: CustomEvent<string>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'activity-log-history': ActivityLogHistoryElement;
    }
}
