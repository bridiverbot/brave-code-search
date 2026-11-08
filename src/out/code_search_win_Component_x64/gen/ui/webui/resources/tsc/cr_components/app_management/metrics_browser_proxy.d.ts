export declare class MetricsBrowserProxy {
    recordEnumerationValue(metricName: string, value: number, enumSize: number): void;
    static getInstance(): MetricsBrowserProxy;
    static setInstance(obj: MetricsBrowserProxy): void;
}
