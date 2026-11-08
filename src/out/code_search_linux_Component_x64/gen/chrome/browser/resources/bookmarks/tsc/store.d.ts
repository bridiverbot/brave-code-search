import { Store as CrUiStore } from 'chrome://resources/js/store.js';
import type { BookmarksPageState } from './types.js';
/**
 * @fileoverview A singleton datastore for the Bookmarks page. Page state is
 * publicly readable, but can only be modified by dispatching an Action to
 * the store.
 */
export declare class Store extends CrUiStore<BookmarksPageState> {
    constructor();
    static getInstance(): Store;
    static setInstance(obj: Store): void;
}
