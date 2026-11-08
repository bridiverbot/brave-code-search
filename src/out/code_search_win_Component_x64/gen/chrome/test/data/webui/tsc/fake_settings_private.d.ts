import { TestBrowserProxy } from './test_browser_proxy.js';
import { FakeChromeEvent } from './fake_chrome_event.js';
/** @fileoverview Fake implementation of chrome.settingsPrivate for testing. */
type SettingsPrivateApi = typeof chrome.settingsPrivate;
type PrefObject = chrome.settingsPrivate.PrefObject;
/**
 * Fake of chrome.settingsPrivate API. Use by setting
 * CrSettingsPrefs.deferInitialization to true, then passing a
 * FakeSettingsPrivate to settings-prefs#initialize().
 */
export declare class FakeSettingsPrivate extends TestBrowserProxy implements SettingsPrivateApi {
    PrefType: typeof chrome.settingsPrivate.PrefType;
    ControlledBy: typeof chrome.settingsPrivate.ControlledBy;
    Enforcement: typeof chrome.settingsPrivate.Enforcement;
    prefs: Record<string, PrefObject>;
    onPrefsChanged: FakeChromeEvent;
    private disallowSetPref_;
    private failNextSetPref_;
    constructor(initialPrefs?: PrefObject[]);
    getAllPrefs(): Promise<PrefObject[]>;
    setPref(key: string, value: any, _pageId?: string): Promise<boolean>;
    getPref(key: string): Promise<PrefObject>;
    /** Instructs the API to return a failure when setPref is next called. */
    failNextSetPref(): void;
    /** Instructs the API to assert (fail the test) if setPref is called. */
    disallowSetPref(): void;
    allowSetPref(): void;
    /**
     * Updates the underlying PrefObject and notifies the listeners of pref
     * changes. Any PrefObject property that is passed as "undefined" is deleted.
     * This useful during tests that need to modify 'controlledBy' and
     * 'enforcement' fields.
     */
    sendPrefChanges(changes: Array<Partial<PrefObject> & {
        key: string;
    }>): void;
    getDefaultZoom(): Promise<number>;
    setDefaultZoom(): void;
    private addPref_;
}
export {};
