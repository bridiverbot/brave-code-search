import type { TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import type { Range } from '/tab_group_shared/search.js';
export interface OptionKeyObject<T> {
    name: string;
    getter: (data: T) => string[] | undefined;
    weight: number;
}
export interface SearchOptions<T> {
    includeScore?: boolean;
    includeMatches?: boolean;
    ignoreLocation?: boolean;
    threshold?: number;
    distance?: number;
    keys: Array<OptionKeyObject<T>>;
}
/**
 * Searches |records| for |input| across multi-part string fields specified in
 * |options.keys|. Parts within each field are joined with a separator during
 * search so matches cannot span across part boundaries, and the resulting
 * match ranges are sliced back into per-part Range[][] arrays on each matched
 * item's `highlightRanges`.
 */
export declare function search<T>(input: string, records: T[], options: SearchOptions<T>): Promise<T[]>;
/**
 * Renders |text| with <b> wrappers around matches if |ranges| are provided, or
 * returns the plain string if none.
 */
export declare function renderHighlightedText(text: string, ranges?: Range[]): TemplateResult | string;
/**
 * Splits a list of match ranges covering joined parts (separated by
 * |separator|) into a list of match ranges for each individual part.
 */
export declare function sliceRangesForParts(parts: string[], ranges?: Range[], separator?: string): Range[][];
