import type { LogEvent } from './browser_proxy.js';
/**
 * Helper function to convert undefined UMA log types to "Unknown" string.
 * @param type The UMA log's type (i.e., ongoing, independent, or stability).
 * @returns The UMA log's type. "Unknown" if type is undefined.
 */
export declare function umaLogTypeToString(type: string | undefined): string;
/**
 * Converts a given Unix timestamp into a human-readable string.
 * @param timestampSeconds The timestamp string (seconds since Epoch).
 * @return A human-readable representation of the timestamp (e.g "01/01/1970,
 *     12:00:00 AM").
 */
export declare function timestampToString(timestampSeconds: string): string;
/**
 * Converts the size of a log to a human-readable string.
 * @param size The size of the log in bytes.
 * @returns The size of the log in KiB as a string.
 */
export declare function sizeToString(size: number): string;
/**
 * Converts a log event to a human-readable string.
 * @param event The log event.
 * @returns A human-readable string of the log event.
 */
export declare function logEventToString(event: LogEvent): string;
/**
 * Gets the string to display when the events div of a log are collapsed.
 * @param events The list of events of the log.
 * @returns A human-readable string of the last event that occurred.
 */
export declare function getEventsPeekString(events: LogEvent[]): string;
