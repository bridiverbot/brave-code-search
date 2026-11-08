import 'chrome://resources/js/action_link.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TabDiscardsInfo } from './discards.mojom-webui.js';
import { CanFreeze, LifecycleUnitVisibility } from './discards.mojom-webui.js';
import { LifecycleUnitLoadingState } from './lifecycle_unit_state.mojom-webui.js';
/**
 * @param sortKey The sort key to get a function for.
 * @return
 *     A comparison function that compares two site data entries, returns
 *     negative number if a < b, 0 if a === b, and a positive
 *     number if a > b.
 */
export declare function getSortFunctionForKey(sortKey: string): (a: TabDiscardsInfo, b: TabDiscardsInfo) => number;
declare const DiscardsTabElementBase: typeof CrLitElement & (new (...args: any[]) => import("./sorted_table_mixin_lit.js").SortedTableMixinLitInterface);
export declare class DiscardsTabElement extends DiscardsTabElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tabInfos_: {
            type: ArrayConstructor;
        };
        isPerformanceInterventionDemoModeEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor tabInfos_: TabDiscardsInfo[];
    protected accessor isPerformanceInterventionDemoModeEnabled_: boolean;
    /** The current update timer if any. */
    private updateTimer_;
    private discardsDetailsProvider_;
    sortKey: string;
    connectedCallback(): void;
    /**
     * Returns a sort function to compare tab infos based on the provided sort
     * key and a boolean reverse flag.
     * @param sortKey The sort key for the  returned function.
     * @param sortReverse True if sorting is reversed.
     * @return A comparison function that compares two tab infos, returns
     *     negative number if a < b, 0 if a === b, and a positive
     *     number if a > b.
     * @private
     */
    private computeSortFunction_;
    protected getSortedTabInfos_(): TabDiscardsInfo[];
    /**
     * Returns a string representation of a visibility enum value for display in
     * a table.
     * @param visibility A visibility value.
     * @return A string representation of the visibility.
     */
    protected visibilityToString_(visibility: LifecycleUnitVisibility): string;
    /**
     * Returns a string representation of a loading state enum value for display
     * in a table.
     * @param loadingState A loading state value.
     * @return A string representation of the loading state.
     */
    protected loadingStateToString_(loadingState: LifecycleUnitLoadingState): string;
    /**
     * Returns a string representation of a discard reason.
     * @param reason The discard reason.
     * @return A string representation of the discarding reason.
     */
    private discardReasonToString_;
    /**
     * Returns a string representation of a lifecycle state.
     * @param state The lifecycle state.
     * @param reason The discard reason. This
     *     is only used if the state is discard related.
     * @param visibility A visibility value.
     * @param hasFocus Whether or not the tab has input focus.
     * @param stateChangeTime Wall-clock time at which the lifecycle state
     *     last changed.
     * @return A string representation of the lifecycle state,
     *     augmented with the discard reason if appropriate.
     */
    private lifecycleStateToString_;
    /** Dispatches a request to update tabInfos_. */
    private updateTableImpl_;
    /**
     * A wrapper to updateTableImpl_ that is called due to user action and not
     * due to the automatic timer. Cancels the existing timer  and reschedules
     * it after rendering instantaneously.
     */
    private updateTable_;
    /**
     * Formats an items site engagement score for display.
     * @param item The item in question.
     * @return The formatted site engagemetn score.
     */
    protected getSiteEngagementScore_(item: TabDiscardsInfo): string;
    /**
     * Retrieves favicon style tag value for an item.
     * @param item The item in question.
     * @return A style to retrieve and display the item's favicon.
     */
    protected getFavIconStyle_(item: TabDiscardsInfo): string;
    /**
     * Formats an items lifecycle state for display.
     * @param item The item in question.
     * @return A human readable lifecycle state.
     */
    protected getLifeCycleState_(item: TabDiscardsInfo): string;
    /**
     * Returns a string representation of a boolean value for display in a
     * table.
     * @param value A boolean value.
     * @return A string representing the bool.
     */
    protected boolToString_(value: boolean): string;
    /**
     * Returns a string representation of a CanFreeze value for display in a
     * table.
     * @param value A CanFreeze value.
     * @return A string representing the CanFreeze value.
     */
    protected canFreezeToString_(canFreeze: CanFreeze): string;
    /**
     * Converts a |secondsAgo| duration to a user friendly string.
     * @param secondsAgo The duration to render.
     * @return An English string representing the duration.
     */
    protected durationToString_(secondsAgo: number): string;
    /**
     * Tests whether a tab can be loaded via the discards UI.
     * @param tab The tab.
     * @return true iff the tab can be loaded.
     */
    protected canLoadViaUi_(tab: TabDiscardsInfo): boolean;
    /**
     * Tests whether a tab can be discarded via the discards UI. This is different
     * from whether the tab could be automatically be discarded.
     * @param tab The tab.
     * @return true iff the tab can be discarded.
     */
    protected canDiscardViaUi_(tab: TabDiscardsInfo): boolean;
    /**
     * Tests whether a tab can be frozen via the discards UI. This is different
     * from whether the tab could automatically be frozen.
     * @param tab The tab.
     * @return true iff the tab can be frozen.
     */
    protected canFreezeViaUi_(tab: TabDiscardsInfo): boolean;
    /**
     * Tests whether a tab should show the reason why it cannot be discarded.
     * @param tab The tab.
     * @return true iff the tab should show the reason why it cannot be discarded.
     */
    protected shouldShowCannotDiscardReason_(tab: TabDiscardsInfo): boolean;
    /**
     * Tests whether a tab should show the reason why it cannot be frozen.
     * @param tab The tab.
     * @return true iff the tab should show the reason why it cannot be frozen.
     */
    protected shouldShowCannotFreezeReason_(tab: TabDiscardsInfo): boolean;
    /**
     * Event handler that toggles the auto discardable flag on an item.
     * @param e The event.
     */
    protected onToggleAutoDiscardableClick_(e: Event): void;
    /** Event handler that loads a tab. */
    protected onLoadTabClick_(e: Event): void;
    /** Event handler that discards a given tab urgently. */
    protected onUrgentDiscardTabClick_(e: Event): void;
    /** Event handler that discards a given tab proactively. */
    protected onProactiveDiscardTabClick_(e: Event): void;
    /** Event handler that freezes a tab. */
    protected onFreezeTabClick_(e: Event): void;
    /** Implementation function to discard the next discardable tab. */
    private discardImpl_;
    /** Event handler that discards the next discardable tab urgently. */
    protected onDiscardUrgentNowClick_(_e: Event): void;
    protected onToggleBatterySaverModeClick_(_e: Event): void;
    protected onRefreshPerformanceTabCpuMeasurementsClick_(_e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'discards-tab': DiscardsTabElement;
    }
}
export {};
