/** Allows control of a subscription to an ObservableValue. */
export declare interface Subscriber {
    unsubscribe(): void;
}
/** Observes an Observable. */
export declare interface Observer<T> {
    /** Called when the Observable emits a value. */
    next?(value: T): void;
    /**
     * Called if the Observable emits an error. If an error is emitted, no
     * additional updates will be sent.
     */
    error?(err: unknown): void;
    /**
     * Called when the Observable completes. If complete is called, no additional
     * updates will be sent.
     */
    complete?(): void;
}
export interface ObservableValueReadOnly<T> {
    getCurrentValue(): T | undefined;
    subscribe(change: (newValue: T) => void): Subscriber;
    subscribeObserver(observer: Observer<T>): Subscriber;
}
declare class ObservableSubscription<T> implements Subscriber {
    observer: Observer<T>;
    private onUnsubscribe;
    constructor(observer: Observer<T>, onUnsubscribe: (self: ObservableSubscription<T>) => void);
    unsubscribe(): void;
}
/**
 * A base class for observables that handles subscribers.
 */
declare class ObservableBase<T> {
    private subscribers;
    private state_;
    private errorValue?;
    protected next(value: T): void;
    error(e: Error): void;
    complete(): void;
    isStopped(): boolean;
    /** Subscribe to changes. */
    subscribe(change: (newValue: T) => void): Subscriber;
    subscribe(observer: Observer<T>): Subscriber;
    /**
     * Subscribe to changes with an Observer.
     * This API was added in later, and provided as a separate function for Glic
     * API discovery purposes.
     */
    subscribeObserver(observer: Observer<T>): Subscriber;
    protected onUnsubscribe(sub: ObservableSubscription<T>): void;
    protected subscriberAdded(_sub: ObservableSubscription<T>): void;
    protected activeSubscriptionChanged(_hasActiveSubscription: boolean): void;
    hasActiveSubscription(): boolean;
}
/**
 * A simple observable with no memory of previous values.
 */
export declare class Subject<T> extends ObservableBase<T> {
    next(value: T): void;
}
/**
 * A observable value that can change over time. If value is initialized, sends
 * it to new subscribers upon subscribe().
 */
export declare class ObservableValue<T> extends Subject<T> {
    private isSet;
    private value?;
    private hasActiveSubscriptionCallback?;
    protected constructor(isSet: boolean, value?: T | undefined, hasActiveSubscriptionCallback?: ((hasActiveSubscription: boolean) => void) | undefined);
    /**
     * Create an ObservableValue which has an initial value. Optionally a
     * `hasActiveSubscriptionCallback` can be added which will be called with
     * `true` when this observable has its first subscriber and `false` when there
     * are no longer any subscribers to this observable.
     */
    static withValue<T>(value: T, hasActiveSubscriptionCallback?: (hasActiveSubscription: boolean) => void): ObservableValue<T>;
    /**
     * Create an ObservableValue which has no initial value. Subscribers will not
     * be called until after assignAndSignal() is called the first time.
     * Optionally a `hasActiveSubscriptionCallback` can be added which will be
     * called with `true` when this observable has its first subscriber and
     * false` when there are no longer any subscribers to this observable.
     */
    static withNoValue<T>(hasActiveSubscriptionCallback?: (hasActiveSubscription: boolean) => void): ObservableValue<T>;
    /**
     * Assigns a new value to the ObservableValue and signals all subscribers.
     * Does nothing if the value is unchanged.
     */
    assignAndSignal(v: T, force?: boolean): void;
    /**
     * Clears the stored value and resets the ObservableValue to an uninitialized
     * state. Does not signal subscribers; subsequent subscribers will not receive
     * a value until assignAndSignal() is called again.
     */
    reset(): void;
    /** Returns the current value, or undefined if not initialized. */
    getCurrentValue(): T | undefined;
    /**
     * Asynchronously waits until the ObservableValue's current value satisfies a
     * given criteria.
     */
    waitUntil(criteria: (value: T) => boolean): Promise<T>;
    protected subscriberAdded(sub: ObservableSubscription<T>): void;
    protected activeSubscriptionChanged(hasActiveSubscription: boolean): void;
}
export {};
