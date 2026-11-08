/**
 * @fileoverview Behavior for policy controlled settings prefs in Lit.
 */
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const CrPolicyPrefMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<CrPolicyPrefMixinLitInterface>;
export interface CrPolicyPrefMixinLitInterface {
    noExtensionIndicator: boolean;
    pref: chrome.settingsPrivate.PrefObject | undefined;
    isPrefEnforced(): boolean;
    hasPrefPolicyIndicator(): boolean;
}
export {};
