/**
 * @fileoverview Behavior for policy controlled settings prefs.
 */
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const CrPolicyPrefMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<CrPolicyPrefMixinInterface>;
export interface CrPolicyPrefMixinInterface {
    noExtensionIndicator: boolean;
    isPrefEnforced(): boolean;
}
export {};
