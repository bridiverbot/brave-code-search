import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PrefServiceObserverMixinLitInterface } from './pref_service_observer_mixin_lit.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const PrefKeyObserverMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<PrefKeyObserverMixinLitInterface> & Constructor<PrefServiceObserverMixinLitInterface>;
export interface PrefKeyObserverMixinLitInterface extends PrefServiceObserverMixinLitInterface {
    prefKey: string;
    pref: chrome.settingsPrivate.PrefObject | undefined;
}
export {};
