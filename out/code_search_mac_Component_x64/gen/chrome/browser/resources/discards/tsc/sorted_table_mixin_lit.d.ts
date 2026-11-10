import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SortedTableMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SortedTableMixinLitInterface>;
export interface SortedTableMixinLitInterface {
    onSortClick(e: Event): void;
    sortKey: string;
    sortReverse: boolean;
}
export {};
