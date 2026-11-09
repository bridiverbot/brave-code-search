import { ObservableValue as ObservableValueImpl } from '../../observable.js';
export declare class TabObservableSet<T, O extends TabObservable<T>> {
    private factory;
    private observablesByTabId;
    constructor(factory: (tabId: string, onComplete: () => void) => O);
    getObservableByTabId(tabId: string): O;
}
export declare abstract class TabObservable<T> extends ObservableValueImpl<T> {
    readonly tabId: string;
    protected readonly onComplete: () => void;
    private unsubscribeTimer;
    private isCompleting;
    constructor(tabId: string, onComplete: () => void, unsubscribeDelay?: number);
    protected activeSubscriptionChanged(hasActiveSubscription: boolean): void;
    protected abstract isConnected(): boolean;
    protected abstract connectToSource(): void;
    protected abstract disconnectFromSource(): void;
    complete(): void;
}
