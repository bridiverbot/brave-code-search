/**
 * Definition of dynamic sub-metrics extracted by matching a prefix on numeric
 * entry keys of the parent metric's allocator dump.
 */
export interface DynamicSubMetricDef {
    /** Prefix of numeric entry keys to match (e.g. 'creator_identity:'). */
    prefix: string;
    /** Prefix prepended to the stripped key to form the user-visible label. */
    labelPrefix: string;
    /** Display unit and formatting type. */
    unit: 'bytes' | 'kib' | 'count' | 'percent';
}
/**
 * Definition of a single metric entry to be extracted from a ProcessMemoryDump.
 */
export interface MetricDef {
    /** User-visible label for the metric. */
    label: string;
    /**
     * Name of the allocator dump in chromeAllocatorDumps (or empty for OS dump).
     */
    dumpName: string;
    /**
     * Name of the numeric metric within the allocator dump (or OS dump field).
     */
    metricName: string;
    /** Display unit and formatting type. */
    unit: 'bytes' | 'kib' | 'count' | 'percent';
    /** Optional static sub-metrics displayed when expanding this metric row. */
    subMetrics?: MetricDef[];
    /**
     * Optional dynamic sub-metrics extracted by matching a key prefix in the
     * allocator dump's numericEntries.
     */
    dynamicSubMetrics?: DynamicSubMetricDef;
}
/**
 * Definition of a collapsible section grouping related metrics.
 */
export interface SectionDef {
    /** Unique section identifier. */
    id: string;
    /** User-visible label for the section header. */
    label: string;
    /** List of metric definitions contained in this section. */
    metrics: MetricDef[];
}
export declare const SECTION_DEFS: SectionDef[];
