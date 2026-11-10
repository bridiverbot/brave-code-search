export interface Range {
    start: number;
    length: number;
}
export interface OptionKeyObject<T> {
    name: string;
    getter: (data: T) => string | undefined;
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
 * @return A new array of entries satisfying the input. If no search input is
 *     present, returns a shallow copy of the records.
 */
export declare function search<T>(input: string, records: T[], options: SearchOptions<T>): Promise<T[]>;
