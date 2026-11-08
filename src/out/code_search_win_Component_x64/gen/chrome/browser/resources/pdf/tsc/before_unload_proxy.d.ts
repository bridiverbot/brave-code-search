export interface BeforeUnloadProxy {
    preventDefault(event: BeforeUnloadEvent): void;
}
export declare class BeforeUnloadProxyImpl implements BeforeUnloadProxy {
    preventDefault(event: BeforeUnloadEvent): void;
    static getInstance(): BeforeUnloadProxy;
    static setInstance(obj: BeforeUnloadProxy): void;
}
