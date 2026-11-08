type ChangeCallback<T> = (newValue: T, previousValue: T, path: string) => void;
export interface WildcardChangeRecord {
    path: string;
    value: unknown;
    base: unknown;
}
type WildcardChangeCallback = (change: WildcardChangeRecord) => void;
type IndexableType = Record<string, unknown>;
export type Indexable<T> = {
    [K in keyof T]: T[K];
};
export declare function setValueAtPath(pathParts: string[], obj: IndexableType, value: unknown): void;
export type ObserverChangeCallback<T> = ChangeCallback<T> | WildcardChangeCallback;
export declare class Observable<T extends IndexableType> {
    private proxyCache_;
    private proxy_;
    private target_;
    private observerTree_;
    constructor(target: T);
    getProxy(): T;
    getTarget(): T;
    private onChange_;
    addObserver<T>(path: string, callback: ObserverChangeCallback<T>): number;
    removeObserver(id: number): boolean;
    removeAllObservers(): void;
}
export {};
