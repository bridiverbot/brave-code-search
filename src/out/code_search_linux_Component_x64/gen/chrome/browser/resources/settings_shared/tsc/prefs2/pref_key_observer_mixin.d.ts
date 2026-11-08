import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { PrefServiceObserverMixinInterface } from './pref_service_observer_mixin.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const PrefKeyObserverMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<PrefKeyObserverMixinInterface> & Constructor<PrefServiceObserverMixinInterface>;
export interface PrefKeyObserverMixinInterface extends PrefServiceObserverMixinInterface {
    prefKey: string;
    pref?: chrome.settingsPrivate.PrefObject;
}
export {};
