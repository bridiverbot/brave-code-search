import type { DictionaryValue } from '//resources/mojo/mojo/public/mojom/base/values.mojom-webui.js';
export declare class EventDict {
    private data;
    constructor(data: DictionaryValue);
    getString(key: string): string;
    getBool(key: string): boolean;
    getInt(key: string): number;
    getDouble(key: string): number;
    getDict(key: string): EventDict;
}
/**
 * Descriptor for an event.
 *
 * If `guestInstanceAssociated` is true, the received id is matched the guest
 * id, otherwise it is matched against the element id.
 *
 * If `factory` is set, it is called with the event arguments and should return
 * the event to be dispatched. If the factory returns null, the event is not
 * dispatched to the element.
 *
 * If `handler` is set, it is called bound to the event and with the element as
 * an argument. It is the responsibility of the handler to dispatch the event.
 * If the `handler` is undefined, the event is dispatched to the element.
 *
 * The remaining properties are used to construct an Event if the `factory` is
 * undefined.
 */
export interface EventDescriptor {
    guestInstanceAssociated?: boolean;
    factory?: (args: EventDict, guestInstanceId: number) => Event | null;
    handler?: (element: HTMLElement) => void;
    cancelable?: boolean;
}
export type EventMap = Map<string, EventDescriptor>;
/**
 * Dispatches events to the given element if the instance ID matches.
 * Events are configured via the EventMap, which maps event names to
 * EventDescriptors.
 *
 * Elements that use this class should call connect() when they are connected to
 * the DOM and disconnect() when they are disconnected.
 */
export declare class EventDispatcher {
    private readonly eventDescriptors;
    private readonly elementInstanceId;
    private readonly guestInstanceId;
    private readonly element;
    private listenerId;
    constructor(eventDescriptors: EventMap, elementInstanceId: number, guestInstanceId: number, element: HTMLElement);
    connect(): void;
    disconnect(): void;
    private dispatch;
}
