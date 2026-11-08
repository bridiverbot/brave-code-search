/** Tracks metrics calls to verify metric logging in tests. */
export declare class MetricsTracker {
    private histogramMap_;
    count(metricName: string, value?: any): number;
    record(metricName: string, value: any): void;
    private get_;
}
/**
 * Installs interceptors to metrics logging calls and forwards them to the
 * returned |MetricsTracker| object.
 * @return {!MetricsTracker}
 */
export declare function fakeMetricsPrivate(): MetricsTracker;
