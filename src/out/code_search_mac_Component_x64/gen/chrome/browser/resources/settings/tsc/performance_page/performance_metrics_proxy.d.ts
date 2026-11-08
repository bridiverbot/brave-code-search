export declare enum BatterySaverModeState {
    DISABLED = 0,
    ENABLED_BELOW_THRESHOLD = 1,
    ENABLED_ON_BATTERY = 2,
    ENABLED = 3,
    COUNT = 4
}
export declare enum MemorySaverModeAggressiveness {
    CONSERVATIVE = 0,
    MEDIUM = 1,
    AGGRESSIVE = 2,
    COUNT = 3
}
export declare enum MemorySaverModeExceptionListAction {
    ADD_MANUAL = 0,
    EDIT = 1,
    REMOVE = 2,
    ADD_FROM_CURRENT = 3,
    COUNT = 4
}
export declare enum MemorySaverModeState {
    DISABLED = 0,
    DEPRECATED = 1,
    ENABLED = 2,
    COUNT = 3
}
export interface PerformanceMetricsProxy {
    recordBatterySaverModeChanged(state: BatterySaverModeState): void;
    recordMemorySaverModeChanged(state: MemorySaverModeState): void;
    recordMemorySaverModeAggressivenessChanged(aggressiveness: MemorySaverModeAggressiveness): void;
    recordDiscardRingTreatmentEnabledChanged(enabled: boolean): void;
    recordExceptionListAction(action: MemorySaverModeExceptionListAction): void;
    recordPerformanceInterventionToggleButtonChanged(enabled: boolean): void;
}
export declare class PerformanceMetricsProxyImpl implements PerformanceMetricsProxy {
    recordBatterySaverModeChanged(state: BatterySaverModeState): void;
    recordMemorySaverModeChanged(state: MemorySaverModeState): void;
    recordMemorySaverModeAggressivenessChanged(aggressiveness: MemorySaverModeAggressiveness): void;
    recordDiscardRingTreatmentEnabledChanged(enabled: boolean): void;
    recordExceptionListAction(action: MemorySaverModeExceptionListAction): void;
    recordPerformanceInterventionToggleButtonChanged(enabled: boolean): void;
    static getInstance(): PerformanceMetricsProxy;
    static setInstance(obj: PerformanceMetricsProxy): void;
}
