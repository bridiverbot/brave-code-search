import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TextAttributes } from '../constants.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const InkTextObserverMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<InkTextObserverMixinInterface>;
export interface InkTextObserverMixinInterface {
    onTextAttributesChanged(attributes: TextAttributes): void;
}
export {};
