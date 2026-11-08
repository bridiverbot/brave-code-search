import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * Represents a single row in the expanded metric breakdown table for a process
 * (e.g. "Allocated Objects", "Main Heap: Old Space").
 */
export interface ProcessMetricRow {
    id?: string;
    label: string;
    valueFormatted: string;
    magnitudePercent: number | null;
    history: Array<number | null>;
    maxScale?: number;
    subMetrics?: ProcessMetricRow[];
}
/**
 * Represents a collapsible group/card of related metrics (e.g. "OS Metrics",
 * "Malloc", "V8") within a process's expanded breakdown view.
 */
export interface MetricSection {
    id: string;
    label: string;
    totalFormatted: string | null;
    metrics: ProcessMetricRow[];
}
/**
 * Represents a top-level process row in the main memory table, containing
 * process metadata, top-level memory values, sparkline history, and child
 * metric breakdown sections.
 */
export interface ProcessDisplayRow {
    pid: number;
    description: string;
    privateFootprintKb: number;
    privateFootprintFormatted: string;
    magnitudePercent: number;
    history: Array<number | null>;
    sections: MetricSection[];
    isDead: boolean;
    hasDumpError?: boolean;
}
/**
 * Represents the display state and dimensions of a single bar within a
 * sparkline (trend line) visualization.
 */
export interface SparklineBar {
    height: number;
    value: number | null;
    isEmpty: boolean;
    isError: boolean;
}
export declare function formatBytesInMb(bytes: number): string;
export declare function formatKibInMb(kib: number): string;
declare const MemoryTabElementBase: typeof CrLitElement & (new (...args: any[]) => import("./sorted_table_mixin_lit.js").SortedTableMixinLitInterface);
export declare class MemoryTabElement extends MemoryTabElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isPaused_: {
            type: BooleanConstructor;
        };
        processes_: {
            type: ArrayConstructor;
        };
        lastUpdated_: {
            type: StringConstructor;
        };
        maxPrivateFootprintKb_: {
            type: NumberConstructor;
        };
        expandedPids_: {
            type: ObjectConstructor;
        };
        expandedSections_: {
            type: ObjectConstructor;
        };
        expandedMetrics_: {
            type: ObjectConstructor;
        };
    };
    protected accessor isPaused_: boolean;
    protected accessor processes_: ProcessDisplayRow[];
    protected accessor lastUpdated_: string;
    protected accessor maxPrivateFootprintKb_: number;
    protected accessor expandedPids_: Set<number>;
    protected accessor expandedSections_: Set<string>;
    protected accessor expandedMetrics_: Set<string>;
    private discardsDetailsProvider_;
    private timerId_;
    private isFetching_;
    private previousActivePids_;
    private historyMap_;
    private processHistoryMap_;
    private deadProcessesMap_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private startPolling_;
    private stopPolling_;
    protected onTogglePauseClick_(): void;
    protected onProcessRowClick_(e: Event): void;
    protected onSectionRowClick_(e: Event): void;
    protected isExpanded_(pid: number): boolean;
    protected isSectionExpanded_(pid: number, sectionId: string): boolean;
    protected onMetricRowClick_(e: Event): void;
    protected isMetricExpanded_(pid: number, sectionId: string, metricId?: string): boolean;
    protected getVisibleSectionMetrics_(pid: number, section: MetricSection): Array<{
        row: ProcessMetricRow;
        isSubMetric: boolean;
    }>;
    protected getToggleArrowClass_(expanded: boolean): string;
    protected getMagnitudeStyle_(percent: number): string;
    protected getMetricRowClass_(metric: ProcessMetricRow, isSubMetric: boolean): string;
    protected getMetricLabelClass_(isSubMetric: boolean): string;
    protected getSparklineBarClass_(bar: SparklineBar): string;
    protected getSparklineBarTitle_(bar: SparklineBar): string;
    /**
     * Converts a history array of metric samples into 10 sparkline bar models.
     * Missing leading slots are filled with empty placeholder bars.
     *
     * @param history Array of historical samples (null = missing, <0 = error).
     * @param maxScale Optional reference maximum for scaling bar heights
     *     globally. If omitted, scales locally against the max valid sample.
     * @return Array of 10 SparklineBar objects ready for rendering.
     */
    getSparklineBars(history: Array<number | null>, maxScale?: number): SparklineBar[];
    private fetchData_;
    /**
     * Safely extracts a numeric metric value from a process memory dump allocator
     * entry.
     *
     * @param dump The process memory dump containing allocator dumps.
     * @param dumpName Name of the allocator dump in chromeAllocatorDumps.
     * @param metricName Name of the numeric metric within numericEntries.
     * @return The numeric value if present, or null otherwise.
     */
    private getNumericEntryValue_;
    private buildMetricRow_;
    private processData_;
    protected getSortedProcesses_(): ProcessDisplayRow[];
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-tab': MemoryTabElement;
    }
}
export {};
