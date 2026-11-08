/**
 * Abstracts built-in JS functions in order to mock in tests.
 */
export declare class MostVisitedWindowProxy {
    matchMedia(query: string): MediaQueryList;
    now(): number;
    static getInstance(): MostVisitedWindowProxy;
    static setInstance(obj: MostVisitedWindowProxy): void;
}
