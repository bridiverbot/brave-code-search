import type { Action } from 'chrome://resources/js/store.js';
import { Store } from 'chrome://resources/js/store.js';
/**
 * This is a generic test store, designed to replace a real Store instance
 * during testing.
 */
export declare class TestStore<S, A extends Action = Action> extends Store<S, A> {
    private initPromise_;
    private enableReducers_;
    private resolverMap_;
    private lastAction_;
    constructor(initialData: Partial<S>, storeImplEmptyState: S, storeImplReducer: (state: S, action: A) => S);
    init(state: S): void;
    get lastAction(): A | null;
    resetLastAction(): void;
    /**
     * Enable or disable calling the reducer for each action.
     * With reducers disabled (the default), TestStore is a stub which
     * requires state be managed manually (suitable for unit tests). With
     * reducers enabled, TestStore becomes a proxy for observing actions
     * (suitable for integration tests).
     */
    setReducersEnabled(enabled: boolean): void;
    reduce(action: A): void;
    /**
     * Notifies UI elements that the store data has changed. When reducers are
     * disabled, tests are responsible for manually changing the data to make
     * UI elements update correctly (eg, tests must replace the whole list
     * when changing a single element).
     */
    notifyObservers(): void;
    /**
     * Call in order to accept data from an init call to the TestStore once.
     * @return Promise which resolves when the store is initialized.
     */
    acceptInitOnce(): Promise<void>;
    /**
     * Track actions called |name|, allowing that type of action to be waited
     * for with `waitForAction`.
     */
    expectAction(name: string): void;
    /**
     * Returns a Promise that will resolve when an action called |name| is
     * dispatched. The promise must be prepared by calling
     * `expectAction(name)` before the action is dispatched.
     */
    waitForAction(name: string): Promise<A>;
}
