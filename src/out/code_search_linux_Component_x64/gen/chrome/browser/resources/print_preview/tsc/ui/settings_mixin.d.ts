import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Settings } from '../data/model.js';
import type { ObserverChangeCallback } from '../data/observable.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SettingsMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SettingsMixinInterface>;
export interface SettingsMixinInterface {
    addSettingObserver<T>(path: string, callback: ObserverChangeCallback<T>): void;
    /**
     * @param settingName Name of the setting to get.
     * @return The setting object.
     */
    getSetting<K extends keyof Settings>(settingName: K): Settings[K];
    /**
     * @param settingName Name of the setting to get the value for.
     * @return The value of the setting, accounting for availability.
     */
    getSettingValue<K extends keyof Settings>(settingName: K): Settings[K]['value'];
    /**
     * Sets settings.settingName.value to |value|, unless updating the setting is
     * disallowed by enterprise policy. Fires preview-setting-changed and
     * sticky-setting-changed events if the update impacts the preview or requires
     * an update to sticky settings.
     * @param settingName Name of the setting to set
     * @param value The value to set the setting to.
     * @param noSticky Whether to avoid stickying the setting. Defaults to false.
     */
    setSetting<K extends keyof Settings>(settingName: K, value: Settings[K]['value'], noSticky?: boolean): void;
    /**
     * Sets the validity of |settingName| to |valid|. If the validity is changed,
     * fires a setting-valid-changed event.
     * @param settingName Name of the setting to set
     * @param valid Whether the setting value is currently valid.
     */
    setSettingValid(settingName: keyof Settings, valid: boolean): void;
}
export {};
