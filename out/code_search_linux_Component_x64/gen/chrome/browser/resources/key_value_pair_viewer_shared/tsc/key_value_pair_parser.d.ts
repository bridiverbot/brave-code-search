import type { KeyValuePairEntry } from './key_value_pair_entry.js';
/**
 * Convert text-based log into list of name-value pairs.
 * @param text The raw text of a log.
 * @return The parse result or null if any parsing error occurred.
 */
export declare function parseKeyValuePairEntry(text: string): KeyValuePairEntry[] | null;
