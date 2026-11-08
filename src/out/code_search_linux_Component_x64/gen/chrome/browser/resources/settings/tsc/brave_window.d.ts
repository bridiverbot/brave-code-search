declare global {
    interface Window {
        testing: Record<string, unknown>;
        loadTimeData: unknown;
    }
}
export {};
