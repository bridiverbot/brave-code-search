type PrefObject<T> = chrome.settingsPrivate.PrefObject<T>;
export declare class PrefService {
    private cache_;
    private syntheticPrefs_;
    private initializedPromise_;
    private isInitialized_;
    private nextObserverId_;
    private observers_;
    private eventTarget_;
    private eventQueue_;
    private eventQueueIndex_;
    private isDispatching_;
    private browserProxy_;
    private boundOnPrefsChanged_;
    private constructor();
    private initialize_;
    whenInitialized(): Promise<void>;
    /**
     * Registers synthetic (frontend-only) prefs in the local cache. Should not
     * be used for real (backend-backed) prefs.
     */
    private registerSyntheticPrefs_;
    /**
     * Updates a synthetic (frontend-only) pref and notifies observers. Should be
     * used when `setPrefValue`, `setPrefDictEntry`, etc. are not sufficient (for
     * example, when modifying `enforcement` or `controlledBy`).
     */
    setSyntheticPref<T>(pref: PrefObject<T>): void;
    setPrefValue<T>(key: string, value: T): Promise<boolean>;
    /**
     * @param prefKey The key of the PrefObject to be updated. Must be of
     *     PrefType.DICTIONARY otherwise an assertion error will be thrown.
     * @param dictKey The key within the dictionary identifying the entry to be
     *     updated.
     * @param value The new value of the dictionary entry being updated.
     */
    setPrefDictEntry<T>(prefKey: string, dictKey: string, value: T): Promise<boolean>;
    /**
     * @param prefKey The key of the PrefObject to be updated. Must be of
     *     PrefType.DICTIONARY otherwise an assertion error will be thrown.
     * @param dictKey The key within the dictionary identifying the entry to be
     *     deleted.
     */
    deletePrefDictEntry(prefKey: string, dictKey: string): Promise<boolean>;
    /**
     * @param prefKey The key of the PrefObject to be updated. Must be of
     *     PrefType.LIST otherwise an assertion error will be thrown.
     * @param value The value to append to the list pref if not already present.
     */
    appendPrefListItem<T>(prefKey: string, value: T): Promise<boolean>;
    getPref<T>(key: string): Readonly<PrefObject<T>>;
    /**
     * Get the current pref value from chrome.settingsPrivate to ensure the UI
     * stays up to date.
     */
    refreshPrefFromBackend(key: string): Promise<void>;
    addObserver<T>(key: string, callback: (pref: Readonly<PrefObject<T>>) => void): number;
    removeObserver(id: number): boolean;
    private onPrefsChanged_;
    private queueAndDispatch_;
    private destroy_;
    static resetInstanceForTesting(): void;
    static getInstance(): PrefService;
}
export {};
