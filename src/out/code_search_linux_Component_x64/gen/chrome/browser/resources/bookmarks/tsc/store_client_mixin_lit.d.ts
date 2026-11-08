import type { Action, DeferredAction, StoreObserver } from '//resources/js/store.js';
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { Store } from './store.js';
import type { BookmarksPageState } from './types.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const StoreClientMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<StoreClientMixinLitInterface>;
export interface StoreClientMixinLitInterface extends StoreObserver<BookmarksPageState> {
    /**
     * Helper to dispatch an action to the store, which will update the store data
     * and then (possibly) flow through to the UI.
     */
    dispatch(action: Action | null): void;
    /**
     * Helper to dispatch an asynchronous action to the store.
     */
    dispatchAsync(action: DeferredAction<Action>): void;
    /**
     * Call this when the element is connected and has called `watch` for its
     * properties. This will populate the element with the initial
     * data from the store if the store has been initialized.
     */
    updateFromStore(): void;
    getState(): BookmarksPageState;
    getStore(): Store;
}
export {};
