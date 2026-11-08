/**
 * Converts a string value to a type corresponding to the given preference.
 */
export declare function stringToPrefValue(value: string, pref: chrome.settingsPrivate.PrefObject): (boolean | number | string | undefined);
/**
 * Returns the value of the pref as a string.
 */
export declare function prefToString(pref: chrome.settingsPrivate.PrefObject): string;
