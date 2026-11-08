/**
 * A simple timer to measure elapsed time.
 */
export declare class Timer {
    private start_;
    constructor();
    /**
     * @return The elapsed seconds since this Timer was created.
     */
    getElapsedSeconds(): number;
}
/**
 * Requests the sync state, which is sent via onAboutInfoUpdated and
 * onEntityCountsUpdated events. New events will be emitted whenever the
 * state changes.
 */
export declare function requestDataAndRegisterForUpdates(): void;
/**
 * Asks the browser to send us the list of registered types. Should result
 * in an onReceivedListOfTypes event being emitted.
 */
export declare function requestListOfTypes(): void;
/**
 * Asks the browser to send us the initial state of the "include specifics"
 * flag. Should result in an onReceivedIncludeSpecificsInitialState event
 * being emitted.
 */
export declare function requestIncludeSpecificsInitialState(): void;
/**
 * Updates the logic sending events to the protocol logic if they should
 * include specifics or not when converting to a human readable format.
 *
 * @param includeSpecifics Whether protocol events include specifics.
 */
export declare function setIncludeSpecifics(includeSpecifics: boolean): void;
/**
 * Sends data to construct a user event that should be committed.
 *
 * @param eventTimeUsec Timestamp for the new event.
 * @param navigationId Timestamp of linked sessions navigation.
 */
export declare function writeUserEvent(eventTimeUsec: string, navigationId: string): void;
/**
 * Triggers a RequestStart call on the SyncService.
 */
export declare function requestStart(): void;
/**
 * Triggers a GetUpdates call for all enabled datatypes.
 */
export declare function triggerRefresh(): void;
interface ServerSpecifics {
    autofill: unknown;
}
type Specifics = ServerSpecifics;
export interface SyncNode {
    BASE_VERSION: string;
    ID: string;
    IS_DIR: boolean;
    LOCAL_EXTERNAL_ID: number;
    METAHANDLE: number;
    MTIME: string;
    NON_UNIQUE_NAME: string;
    PARENT_ID: string;
    SERVER_SPECIFICS: ServerSpecifics;
    SERVER_VERSION: string;
    SERVER_VERSION_TIME: string;
    SPECIFICS: Specifics;
    UNIQUE_SERVER_TAG: string;
    dataType: string;
    positionIndex?: number;
}
export type SyncNodeMap = Array<{
    type: string;
    nodes: SyncNode[];
}>;
/**
 * Asks the browser to send us a copy of all existing sync nodes.
 * Will eventually invoke the given callback with the results.
 *
 * @param callback The function to call with the response.
 */
export declare function getAllNodes(callback: (p: SyncNodeMap) => void): void;
export declare function setAllNodesForTest(nodes: SyncNodeMap): void;
export {};
