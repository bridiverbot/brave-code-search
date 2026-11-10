import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const DarkModeMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<DarkModeMixinInterface>;
export declare function inDarkMode(): boolean;
export interface DarkModeMixinInterface {
    inDarkMode: boolean;
}
export {};
