import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
export interface AdBlockOnlyModeMixinInterface {
    setAdBlockOnlyModeEnabled(enabled: boolean): void;
    isAdBlockOnlyModeEnabled_: boolean;
}
export declare const AdBlockOnlyModeMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<AdBlockOnlyModeMixinInterface>;
export {};
