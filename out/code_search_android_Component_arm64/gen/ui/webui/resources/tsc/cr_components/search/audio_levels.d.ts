export declare class AudioLevelsProcessor {
    private readonly dynamicShapingCurveMinSecondValue;
    private noiseLevel;
    private readonly history;
    private readonly rawHistory;
    private accumulatedRmsSum;
    private accumulatedRmsCount;
    private lastUpdateTime;
    private lastEmittedValue;
    private readonly sampleIntervalMs;
    constructor(dynamicShapingCurveMinSecondValue?: number);
    process(buffer: Float32Array, nowMs: number): number;
    private accumulateRmsAndProcessInterval;
    private processAverageRms;
    private applySmoothing;
    private applyDynamicShaping;
    private updateHistory;
    private updateRawHistory;
    private updateNoiseLevel;
}
