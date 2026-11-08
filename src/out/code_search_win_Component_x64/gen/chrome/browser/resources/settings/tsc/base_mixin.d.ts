/**
 * @fileoverview Provides a couple of helper methods used by several Polymer
 * elements. This is needed for pages that contain <settings-subpage> to
 * populate the |associatedControl| field for search settings using the `$$()`
 * helper.
 */
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
export interface BaseMixinInterface {
    $$<E extends Element = Element>(query: string): E | null;
    fire(eventName: string, detail?: unknown): void;
}
export declare const BaseMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<BaseMixinInterface>;
export {};
