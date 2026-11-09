export interface PointerProxy {
    setPointerCapture(el: Element, pointerId: number): void;
    releasePointerCapture(el: Element, pointerId: number): void;
}
export declare class PointerProxyImpl implements PointerProxy {
    setPointerCapture(el: Element, pointerId: number): void;
    releasePointerCapture(el: Element, pointerId: number): void;
    static getInstance(): PointerProxy;
    static setInstance(obj: PointerProxy): void;
}
