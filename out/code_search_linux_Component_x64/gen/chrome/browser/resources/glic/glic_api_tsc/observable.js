// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Note: this code is made to conform to glic_api's Observable, but can also be
// used independently.
function assertNotReachedCase(_param, message) {
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
class ObservableSubscription {
    observer;
    onUnsubscribe;
    constructor(observer, onUnsubscribe) {
        this.observer = observer;
        this.onUnsubscribe = onUnsubscribe;
    }
    unsubscribe() {
        this.onUnsubscribe(this);
    }
}
/**
 * A base class for observables that handles subscribers.
 */
class ObservableBase {
    subscribers = new Set();
    state_ = 'active';
    errorValue;
    next(value) {
        switch (this.state_) {
            case 'active':
                break;
            case 'complete':
            case 'error':
                throw new Error('Observable is not active');
            default:
                assertNotReachedCase(this.state_);
        }
        this.subscribers.forEach((sub) => {
            // Ignore if removed since forEach was called.
            if (this.subscribers.has(sub)) {
                try {
                    sub.observer.next?.(value);
                }
                catch (e) {
                    console.warn(e);
                }
            }
        });
    }
    error(e) {
        switch (this.state_) {
            case 'active':
                this.state_ = 'error';
                this.errorValue = e;
                break;
            case 'complete':
            case 'error':
                throw new Error('Observable is not active');
            default:
                assertNotReachedCase(this.state_);
        }
        let loggedWarning = false;
        const hadSubscribers = this.hasActiveSubscription();
        this.subscribers.forEach((sub) => {
            // Ignore if removed since forEach was called.
            if (this.subscribers.has(sub)) {
                if (sub.observer.error) {
                    try {
                        sub.observer.error(e);
                    }
                    catch (e) {
                        console.warn(e);
                    }
                }
                else {
                    if (!loggedWarning) {
                        console.warn('unhandled error: ', e);
                        loggedWarning = true;
                    }
                }
            }
        });
        this.subscribers.clear();
        if (hadSubscribers) {
            this.activeSubscriptionChanged(false);
        }
    }
    complete() {
        switch (this.state_) {
            case 'active':
                this.state_ = 'complete';
                break;
            case 'complete':
            case 'error':
                throw new Error('Observable is not active');
            default:
                assertNotReachedCase(this.state_);
        }
        const hadSubscribers = this.hasActiveSubscription();
        this.subscribers.forEach((sub) => {
            // Ignore if removed since forEach was called.
            if (this.subscribers.has(sub)) {
                try {
                    sub.observer.complete?.();
                }
                catch (e) {
                    console.warn(e);
                }
            }
        });
        this.subscribers.clear();
        if (hadSubscribers) {
            this.activeSubscriptionChanged(false);
        }
    }
    isStopped() {
        return this.state_ !== 'active';
    }
    subscribe(changeOrObserver) {
        if (typeof changeOrObserver === 'function') {
            return this.subscribeObserver({
                next: (value) => {
                    changeOrObserver(value);
                },
            });
        }
        else {
            return this.subscribeObserver(changeOrObserver);
        }
    }
    /**
     * Subscribe to changes with an Observer.
     * This API was added in later, and provided as a separate function for Glic
     * API discovery purposes.
     */
    subscribeObserver(observer) {
        switch (this.state_) {
            case 'active':
                break;
            case 'complete':
                observer.complete?.();
                return { unsubscribe: () => { } };
            case 'error':
                observer.error?.(this.errorValue);
                return { unsubscribe: () => { } };
            default:
                assertNotReachedCase(this.state_);
        }
        const newSub = new ObservableSubscription(observer, this.onUnsubscribe.bind(this));
        if (this.subscribers.size === 0) {
            this.activeSubscriptionChanged(true);
        }
        this.subscribers.add(newSub);
        this.subscriberAdded(newSub);
        return newSub;
    }
    onUnsubscribe(sub) {
        if (!this.subscribers) {
            return;
        }
        if (this.subscribers.size === 0) {
            return;
        }
        this.subscribers.delete(sub);
        if (this.subscribers.size === 0) {
            this.activeSubscriptionChanged(false);
        }
    }
    subscriberAdded(_sub) { }
    activeSubscriptionChanged(_hasActiveSubscription) { }
    hasActiveSubscription() {
        return this.subscribers.size > 0;
    }
}
/**
 * A simple observable with no memory of previous values.
 */
export class Subject extends ObservableBase {
    next(value) {
        super.next(value);
    }
}
/**
 * A observable value that can change over time. If value is initialized, sends
 * it to new subscribers upon subscribe().
 */
export class ObservableValue extends Subject {
    isSet;
    value;
    hasActiveSubscriptionCallback;
    constructor(isSet, value, hasActiveSubscriptionCallback) {
        super();
        this.isSet = isSet;
        this.value = value;
        this.hasActiveSubscriptionCallback = hasActiveSubscriptionCallback;
    }
    /**
     * Create an ObservableValue which has an initial value. Optionally a
     * `hasActiveSubscriptionCallback` can be added which will be called with
     * `true` when this observable has its first subscriber and `false` when there
     * are no longer any subscribers to this observable.
     */
    static withValue(value, hasActiveSubscriptionCallback) {
        return new ObservableValue(true, value, hasActiveSubscriptionCallback);
    }
    /**
     * Create an ObservableValue which has no initial value. Subscribers will not
     * be called until after assignAndSignal() is called the first time.
     * Optionally a `hasActiveSubscriptionCallback` can be added which will be
     * called with `true` when this observable has its first subscriber and
     * false` when there are no longer any subscribers to this observable.
     */
    static withNoValue(hasActiveSubscriptionCallback) {
        return new ObservableValue(false, undefined, hasActiveSubscriptionCallback);
    }
    /**
     * Assigns a new value to the ObservableValue and signals all subscribers.
     * Does nothing if the value is unchanged.
     */
    assignAndSignal(v, force = false) {
        if (this.isStopped()) {
            throw new Error('ObservableValue is not active');
        }
        const send = !this.isSet || this.value !== v || force;
        this.isSet = true;
        this.value = v;
        if (!send) {
            return;
        }
        super.next(v);
    }
    /**
     * Clears the stored value and resets the ObservableValue to an uninitialized
     * state. Does not signal subscribers; subsequent subscribers will not receive
     * a value until assignAndSignal() is called again.
     */
    reset() {
        this.isSet = false;
        this.value = undefined;
    }
    /** Returns the current value, or undefined if not initialized. */
    getCurrentValue() {
        return this.value;
    }
    /**
     * Asynchronously waits until the ObservableValue's current value satisfies a
     * given criteria.
     */
    async waitUntil(criteria) {
        const { promise, resolve, reject } = Promise.withResolvers();
        const sub = this.subscribe({
            next(newValue) {
                if (criteria(newValue)) {
                    resolve(newValue);
                }
            },
            error: reject,
            complete() {
                reject(new Error('Observable completed'));
            },
        });
        let resultValue;
        try {
            resultValue = await promise;
        }
        finally {
            sub.unsubscribe();
        }
        return resultValue;
    }
    subscriberAdded(sub) {
        if (this.isSet) {
            sub.observer.next?.(this.value);
        }
    }
    activeSubscriptionChanged(hasActiveSubscription) {
        super.activeSubscriptionChanged(hasActiveSubscription);
        this.hasActiveSubscriptionCallback?.(hasActiveSubscription);
    }
}
