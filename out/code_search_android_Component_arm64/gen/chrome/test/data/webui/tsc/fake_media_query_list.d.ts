export declare class FakeMediaQueryList extends EventTarget implements MediaQueryList {
    private matches_;
    private media_;
    constructor(media: string);
    addListener(_listener: (e: MediaQueryListEvent) => void): void;
    removeListener(_listener: (e: MediaQueryListEvent) => void): void;
    onchange(_e: MediaQueryListEvent): void;
    private notifyListeners_;
    get media(): string;
    get matches(): boolean;
    set matches(matches: boolean);
}
