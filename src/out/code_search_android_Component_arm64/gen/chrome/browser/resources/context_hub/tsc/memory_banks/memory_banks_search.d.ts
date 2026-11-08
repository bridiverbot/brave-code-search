import type { MemoryBankEntry } from '../context_hub.mojom-webui.js';
/**
 * Represents structured search criteria parsed from a user's query string.
 *
 * Different qualifiers and freeform terms are evaluated in conjunction (AND),
 * while multiple values for the same qualifier match any (OR).
 */
export interface ParsedSearchQuery {
    /** Tag filters parsed from "tag:<val>" (matches entry.tags). */
    tag: string[];
    /** Collection filters parsed from "collection:<val>". */
    collection: string[];
    /** Note filters parsed from "note:<val>". */
    note: string[];
    /**
     * URL filters parsed from "url:<val>" (matches entry.url or
     * entry.imageUrl).
     */
    url: string[];
    /** Title filters parsed from "title:<val>" (matches entry.tabTitle). */
    title: string[];
    /**
     * Text snippet filters parsed from "text:<val>" (matches
     * entry.selectedText).
     */
    text: string[];
    /**
     * Entry type filters parsed from "type:<val>" (matches entry.type; e.g.
     * "tab", "selected_text", "image").
     */
    entryType: string[];
    /** Freeform search terms matching any searchable property. */
    freeform: string[];
}
/**
 * Represents an auto-complete suggestion displayed in the search dropdown.
 */
export interface SearchSuggestion {
    /** The query string to set or append to the search box when chosen. */
    query: string;
    /** The text displayed in the suggestion list item. */
    label: string;
    /** Informational description shown alongside or below the label. */
    description?: string;
}
/**
 * Returns whether values can be suggested for `qualifier` (e.g. 'tag'). The
 * rest are free text, matching whatever the user types.
 */
export declare function hasEnumerableValues(qualifier: string): boolean;
/**
 * Parses a raw search query string into structured filter fields.
 *
 * Supports qualifiers (e.g. `tag:recipes`, `collection:"My Project"`,
 * `type:tab`, `type:selected_text`, `type:image`), quoted phrases, and freeform
 * terms.
 *
 * @param rawQuery The raw query input string.
 * @return Structured filters split into specific qualifiers and freeform terms.
 */
export declare function parseSearchQuery(rawQuery: string): ParsedSearchQuery;
/**
 * Evaluates whether a given memory bank entry matches all criteria in a parsed
 * query.
 *
 * Matching requires:
 * 1. Multiple values for the same qualifier match ANY (OR).
 * 2. Filters across different qualifiers must all match (AND).
 * 3. Each freeform search term must match at least one field of the entry
 * (AND).
 *
 * @param entry The memory bank entry to test.
 * @param parsed The parsed search criteria.
 * @return True if the entry matches all search criteria.
 */
export declare function matchesMemoryBankEntry(entry: MemoryBankEntry, parsed: ParsedSearchQuery): boolean;
/**
 * Computes auto-complete search suggestions based on the user's current input.
 *
 * Suggestion behaviors:
 * 1. Empty or trailing-space input: suggests all qualifier prefixes (e.g.
 * "tag:", "type:").
 * 2. Token without colon: suggests matching qualifier prefixes (e.g. "ta" ->
 * "tag:").
 * 3. Token with qualifier prefix (e.g. "tag:", "collection:", "type:",
 * "title:"): suggests matching values for that qualifier or retains format
 * guidance.
 *
 * @param input The current search field input.
 * @param allTags Unique tags present across memory bank entries.
 * @param allCollections Unique collection names present across memory bank
 *     entries.
 * @return Up to MAX_SUGGESTIONS matching suggestions for the current token.
 */
export declare function computeSuggestions(input: string, allTags: string[], allCollections: string[]): SearchSuggestion[];
