import type { MemoryBankEntry } from '../context_hub.mojom-webui.js';
/**
 * Converts a Mojo Time (microseconds since the Windows epoch: Jan 1, 1601) to
 * a JavaScript Date object (milliseconds since the Unix epoch: Jan 1, 1970).
 * Returns null if mojoTime is null, undefined, or missing internalValue.
 */
export declare function convertMojoTimeToDate(mojoTime?: {
    internalValue: bigint;
} | null): Date | null;
/**
 * Formats a single MemoryBankEntry as a structured Markdown document.
 */
export declare function formatEntryAsMarkdown(entry: MemoryBankEntry): string;
/**
 * Formats an array of MemoryBankEntry objects into a combined Markdown document
 * separated by horizontal rules.
 */
export declare function formatEntriesAsMarkdown(entries: MemoryBankEntry[]): string;
