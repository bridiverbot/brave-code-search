/**
 * Formats a Date object into a human-readable localized string with second
 * precision.
 */
export declare function formatDateLong(date: Date): string;
/**
 * Formats a Date object into a human-readable localized string with minute
 * precision.
 */
export declare function formatDateShort(date: Date): string;
/**
 * Formats a Date object into a human-readable localized string with second
 * precision in the '2-digit' format (e.g. "01/13/2026, 12:27 PM PST").
 */
export declare function formatDateDigits(date: Date): string;
/**
 * Formats a duration into a human-readable localized string with second
 * precision.
 */
export declare function formatDuration(days: number, hours: number, minutes: number, seconds: number): string;
/**
 * Formats a Date object into a human-readable localized string describing the
 * relative difference between that date and now.
 */
export declare function formatRelativeDate(date: Date): string;
/**
 * Checks whether two values are recursively equal. Only compares serializable
 * data (primitives, serializable arrays and serializable objects).
 * @param val1 Value to compare.
 * @param val2 Value to compare with val1.
 * @return Whether the values are recursively equal.
 */
export declare function deepEqual(val1: unknown, val2: unknown): boolean;
