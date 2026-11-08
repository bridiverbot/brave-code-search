import type { MetricsReporter } from 'chrome://resources/js/metrics_reporter/metrics_reporter.js';
export declare class MockedMetricsReporter implements MetricsReporter {
    mark(_name: string, _time?: bigint): void;
    measure(_startMark: string, _endMark?: string): Promise<bigint>;
    hasMark(_name: string): Promise<boolean>;
    hasLocalMark(_name: string): boolean;
    clearMark(_name: string): void;
    umaReportTime(_histogram: string, _time: bigint): void;
}
