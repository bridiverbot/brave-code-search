import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type PrefObject<T> = chrome.settingsPrivate.PrefObject<T>;
type ObserverCallback<T> = (pref: Readonly<PrefObject<T>>) => void;
type Constructor<T> = new (...args: any[]) => T;
export declare const PrefServiceObserverMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<PrefServiceObserverMixinInterface>;
export interface PrefServiceObserverMixinInterface {
    addPrefObserver<T>(prefKey: string, callback: ObserverCallback<T>): number;
    removePrefObserver(id: number): void;
    mirrorPref(prefKey: string, propName: string): void;
    mirrorPrefs(prefMap: Record<string, string>): void;
}
export {};
