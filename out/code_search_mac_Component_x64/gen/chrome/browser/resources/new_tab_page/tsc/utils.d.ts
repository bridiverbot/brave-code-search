/**
 * Queries |selector| on |element|'s shadow root and returns the resulting
 * element if there is any.
 */
export declare function $$<K extends keyof HTMLElementTagNameMap>(element: Element, selector: K): HTMLElementTagNameMap[K] | null;
export declare function $$<K extends keyof SVGElementTagNameMap>(element: Element, selector: K): SVGElementTagNameMap[K] | null;
export declare function $$<E extends Element = Element>(element: Element, selector: string): E | null;
type Constructor<T> = new (...args: any[]) => T;
/**
 * Queries |selector| on |root| and returns the resulting element. Throws
 * exception if there is no resulting element or if element is not of type
 * |type|.
 */
export declare function strictQuery<T>(root: Element | ShadowRoot, selector: string, type: Constructor<T>): T;
export {};
