import type { StructuredMetricEvent, StructuredMetricsSummary } from './structured_utils.js';
export interface StructuredMetricsBrowserProxy {
    /**
     * Fetches recorded events from Structured Metrics Service.
     */
    fetchStructuredMetricsEvents(): Promise<StructuredMetricEvent[]>;
    /**
     * Fetches a summary of the Structured Metrics Service.
     */
    fetchStructuredMetricsSummary(): Promise<StructuredMetricsSummary>;
}
export declare class StructuredMetricsBrowserProxyImpl implements StructuredMetricsBrowserProxy {
    fetchStructuredMetricsEvents(): Promise<StructuredMetricEvent[]>;
    fetchStructuredMetricsSummary(): Promise<StructuredMetricsSummary>;
    static getInstance(): StructuredMetricsBrowserProxy;
}
