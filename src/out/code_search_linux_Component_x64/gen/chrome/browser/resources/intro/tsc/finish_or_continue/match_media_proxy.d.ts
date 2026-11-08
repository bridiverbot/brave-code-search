export interface MatchMediaProxy {
    matchMedia(query: string): MediaQueryList;
}
export declare class MatchMediaProxyImpl implements MatchMediaProxy {
    matchMedia(query: string): MediaQueryList;
    static getInstance(): MatchMediaProxy;
    static setInstance(proxy: MatchMediaProxy): void;
}
