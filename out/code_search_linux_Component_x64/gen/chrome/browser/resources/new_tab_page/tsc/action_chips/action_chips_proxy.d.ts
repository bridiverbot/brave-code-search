import type { ActionChipsHandlerInterface } from '../action_chips.mojom-webui.js';
import { PageCallbackRouter } from '../action_chips.mojom-webui.js';
/**
 * The enum value sent as part of action-chips-retrieval-state-changed.
 * The handler of the event should expect to receive UPDATED multiple times.
 */
export declare enum ActionChipsRetrievalState {
    INITIAL = 0,
    REQUESTED = 1,
    UPDATED = 2
}
export interface ActionChipsApiProxy {
    getHandler(): ActionChipsHandlerInterface;
    getCallbackRouter(): PageCallbackRouter;
}
export declare class ActionChipsApiProxyImpl implements ActionChipsApiProxy {
    private handler;
    private callbackRouter;
    constructor();
    getHandler(): ActionChipsHandlerInterface;
    getCallbackRouter(): PageCallbackRouter;
    static getInstance(): ActionChipsApiProxy;
    static setInstance(newInstance: ActionChipsApiProxy | null): void;
}
