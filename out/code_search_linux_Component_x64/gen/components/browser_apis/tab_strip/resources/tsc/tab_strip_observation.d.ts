import type { TabsEvent, TabsObserverInterface, TabsObserverPendingReceiverEndpoint } from './tab_strip_api.mojom-webui.js';
import type { TabStripObserver } from './tab_strip_observer.js';
/**
 * @fileoverview
 * This file defines the TabStripObservation, a TypeScript client for the
 * TabsObserver mojom interface. The TabStripObservation is used in conjunction
 * with the TabStripObserver.
 *
 * The TabStripObservation handles the underlying message pipe and the message
 * dispatch, while the TabStripObserver provides an interface for the clients
 * to receive the messages.
 *
 * ...
 *
 * @example
 * // Get the TabStripService remote and create a new router.
 * const service = TabStripService.getRemote();
 * const myObserver = new MyGreatTabStripObserver();
 * const observation = new TabStripObservation(myObserver);
 *
 * // Fetch the initial tab state and the observer stream handle.
 * const snapshot = await service.getTabs();
 * // Messages might immediately dispatch on this call, if there are queued
 * // up messages.
 * observationRouter.bind(snapshot.stream.handle);
 *
 */
export declare class TabStripObservation implements TabsObserverInterface {
    private readonly observer_;
    private readonly receiver_;
    constructor(observer: TabStripObserver);
    bind(handle: TabsObserverPendingReceiverEndpoint): void;
    private notify_;
    onTabEvents(events: TabsEvent[]): void;
}
