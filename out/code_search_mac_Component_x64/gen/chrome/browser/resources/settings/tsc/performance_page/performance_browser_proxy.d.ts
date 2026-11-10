export declare enum PerformanceFeedbackCategory {
    NOTIFICATIONS = "performance_notifications",
    TABS = "performance_tabs",
    BATTERY = "performance_battery",
    SPEED = "performance_speed"
}
export interface CpuPerformanceInfo {
    hardwareTier: number;
    model: string;
    cores: number;
}
export interface PerformanceBrowserProxy {
    getCpuPerformanceInfo(): Promise<CpuPerformanceInfo>;
    getCurrentOpenSites(): Promise<string[]>;
    getDeviceHasBattery(): Promise<boolean>;
    openFeedbackDialog(categoryTag: PerformanceFeedbackCategory): void;
    validateTabDiscardExceptionRule(rule: string): Promise<boolean>;
}
export declare class PerformanceBrowserProxyImpl implements PerformanceBrowserProxy {
    getCpuPerformanceInfo(): Promise<CpuPerformanceInfo>;
    getCurrentOpenSites(): Promise<string[]>;
    getDeviceHasBattery(): Promise<boolean>;
    openFeedbackDialog(categoryTag: PerformanceFeedbackCategory): void;
    validateTabDiscardExceptionRule(rule: string): Promise<boolean>;
    static getInstance(): PerformanceBrowserProxy;
    static setInstance(obj: PerformanceBrowserProxy): void;
}
