/**
 * Converts a JavaScript Date() object to a string that represents microseconds
 * since the Windows FILETIME epoch.
 *
 * The JS Date() is based off of the number of milliseconds since the UNIX epoch
 * (1970-01-01 00::00:00 UTC), while times stored within prefs are represented
 * as the number of microseconds since the Windows FILETIME epoch
 * (1601-01-01 00:00:00 UTC).
 */
export declare function convertDateToWindowsEpoch(date?: number): string;
