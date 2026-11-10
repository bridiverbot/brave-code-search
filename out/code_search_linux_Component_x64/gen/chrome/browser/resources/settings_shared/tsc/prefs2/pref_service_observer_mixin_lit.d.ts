import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
type PrefObject<T> = chrome.settingsPrivate.PrefObject<T>;
type ObserverCallback<T> = (pref: Readonly<PrefObject<T>>) => void;
type Constructor<T> = new (...args: any[]) => T;
export declare const PrefServiceObserverMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<PrefServiceObserverMixinLitInterface>;
export interface PrefServiceObserverMixinLitInterface {
    addPrefObserver<T>(prefKey: string, callback: ObserverCallback<T>): number;
    removePrefObserver(id: number): void;
    mirrorPref(prefKey: string, propName: string): void;
    mirrorPrefs(prefMap: Record<string, string>): void;
}
export {};
