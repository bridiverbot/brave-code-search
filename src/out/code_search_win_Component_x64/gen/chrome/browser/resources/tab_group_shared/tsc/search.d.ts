import type { SearchOptions } from './search-chromium.js';
export type { OptionKeyObject, Range, SearchOptions } from './search-chromium.js';
interface SemanticOpenTabsContext {
    getOpenTabsRecords(): ReadonlyArray<unknown>;
    getSemanticExtras(query: string, matched: ReadonlyArray<unknown>): ReadonlyArray<unknown>;
}
export declare function setSemanticOpenTabsContext(ctx: SemanticOpenTabsContext | null): void;
export declare function search<T>(input: string, records: T[], options: SearchOptions<T>): Promise<T[]>;
