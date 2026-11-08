/**
 * A list of event types which are understood by this library.
 */
export declare const EVENT_TYPES: readonly ['INSTALL', 'UNINSTALL', 'QUALIFY', 'ACTIVATE', 'PERSISTED_DATA', 'POST_REQUEST', 'LOAD_POLICY', 'UPDATE', 'UPDATER_PROCESS', 'APP_COMMAND'];
/**
 * The event types which are understood by this library.
 */
export type EventType = (typeof EVENT_TYPES)[number];
declare const BOUNDS: readonly ['START', 'END', 'INSTANT'];
/**
 * The bound of an event, indicating whether it is instantaneous ('INSTANT') or
 * part of a pair of 'START' and 'END' events.
 */
export type Bound = (typeof BOUNDS)[number];
declare const UPDATE_PRIORITIES: readonly ['BACKGROUND', 'FOREGROUND'];
/**
 * The priority of an update event.
 */
export type UpdatePriority = (typeof UPDATE_PRIORITIES)[number];
export declare const SCOPES: readonly ['USER', 'SYSTEM'];
/**
 * The scope of an updater process.
 */
export type Scope = (typeof SCOPES)[number];
/**
 * Represents an error recorded as a part of an event.
 */
export interface UpdaterError {
    category: number;
    code: number;
    extracode1: number;
}
/**
 * Common properties shared by all events.
 */
interface BaseEvent {
    eventType: EventType;
    eventId: string;
    deviceUptime: number;
    pid: number;
    processToken: string;
    bound: Bound;
    errors: UpdaterError[];
}
type StartEvent = BaseEvent & {
    bound: 'START';
};
type EndEvent = BaseEvent & {
    bound: 'END';
};
/**
 * Represents a pair of START and END events of the same type.
 */
interface EventPair<Event, Start extends StartEvent & {
    eventType: Event;
}, End extends EndEvent & {
    eventType: Event;
}> {
    /**
     * The type of the events in the pair.
     */
    eventType: Event;
    /**
     * The START event.
     */
    startEvent: Start;
    /**
     * The END event.
     */
    endEvent: End;
}
/**
 * Represents a state transition within an update flow.
 */
export interface UpdateState {
    deviceUptime?: number;
    state: string;
}
/**
 * Represents an app registered with the updater.
 */
export interface RegisteredApp {
    /**
     * The unique ID of the app.
     */
    appId: string;
    /**
     * The version of the app.
     */
    version: string;
    cohort?: string;
    brandCode?: string;
}
interface PolicyRecord {
    [key: string]: PolicyValue;
}
export type PolicyValue = string | number | PolicyRecord;
/**
 * Represents the set of policies loaded by the updater.
 */
export interface PolicySet {
    policiesByName: {
        [key: string]: PolicyData;
    };
    policiesByAppId: {
        [key: string]: {
            [key: string]: PolicyData;
        };
    };
}
/**
 * Represents a single policy and its values by source.
 */
export interface PolicyData {
    valuesBySource: {
        [key: string]: PolicyValue;
    };
    prevailingSource: string;
}
/**
 * Returns the localized title of an event type.
 */
export declare function localizeEventType(eventType: EventType): string;
export declare const COMMON_UPDATE_OUTCOMES: readonly ['UPDATED', 'NO_UPDATE', 'UPDATE_ERROR'];
export type CommonUpdateOutcome = (typeof COMMON_UPDATE_OUTCOMES)[number];
/**
 * Returns the localized title of a common update outcome.
 */
export declare function localizeUpdateOutcome(outcome: CommonUpdateOutcome): string;
/**
 * Returns the localized title of a scope.
 */
export declare function localizeScope(scope: Scope): string;
/**
 * An event marking the start of an app install.
 */
export interface InstallStartEvent extends StartEvent {
    eventType: 'INSTALL';
    appId: string;
}
/**
 * An event marking the end of an app install.
 */
export interface InstallEndEvent extends EndEvent {
    eventType: 'INSTALL';
    version?: string;
}
/**
 * A merged event representing an app install.
 */
export type MergedInstallEvent = EventPair<'INSTALL', InstallStartEvent, InstallEndEvent>;
/**
 * An event marking the start of an app uninstall.
 */
export interface UninstallStartEvent extends StartEvent {
    eventType: 'UNINSTALL';
    appId: string;
    version: string;
    reason: string;
}
/**
 * An event marking the end of an app uninstall.
 */
export interface UninstallEndEvent extends EndEvent {
    eventType: 'UNINSTALL';
}
/**
 * A merged event representing an app uninstall.
 */
export type MergedUninstallEvent = EventPair<'UNINSTALL', UninstallStartEvent, UninstallEndEvent>;
/**
 * An event marking the start of updater qualification.
 */
export interface QualifyStartEvent extends StartEvent {
    eventType: 'QUALIFY';
}
/**
 * An event marking the end of updater qualification.
 */
export interface QualifyEndEvent extends EndEvent {
    eventType: 'QUALIFY';
    qualified?: boolean;
}
/**
 * A merged event representing an updater qualification.
 */
export type MergedQualifyEvent = EventPair<'QUALIFY', QualifyStartEvent, QualifyEndEvent>;
/**
 * An event marking the start of updater activation.
 */
export interface ActivateStartEvent extends StartEvent {
    eventType: 'ACTIVATE';
}
/**
 * An event marking the end of updater activation.
 */
export interface ActivateEndEvent extends EndEvent {
    eventType: 'ACTIVATE';
    activated?: boolean;
}
/**
 * A merged event representing an updater activation.
 */
export type MergedActivateEvent = EventPair<'ACTIVATE', ActivateStartEvent, ActivateEndEvent>;
/**
 * An event marking the start of an Omaha request.
 */
export interface PostRequestStartEvent extends StartEvent {
    eventType: 'POST_REQUEST';
    request: string;
}
/**
 * An event marking the end of an Omaha request.
 */
export interface PostRequestEndEvent extends EndEvent {
    eventType: 'POST_REQUEST';
    response?: string;
}
/**
 * A merged event representing an Omaha request.
 */
export type MergedPostRequestEvent = EventPair<'POST_REQUEST', PostRequestStartEvent, PostRequestEndEvent>;
/**
 * An event marking the start of policy loading.
 */
export interface LoadPolicyStartEvent extends StartEvent {
    eventType: 'LOAD_POLICY';
}
/**
 * An event marking the end of policy loading.
 */
export interface LoadPolicyEndEvent extends EndEvent {
    eventType: 'LOAD_POLICY';
    policySet?: PolicySet;
}
/**
 * A merged event representing a policy load.
 */
export type MergedLoadPolicyEvent = EventPair<'LOAD_POLICY', LoadPolicyStartEvent, LoadPolicyEndEvent>;
/**
 * An event marking the start of an update operation.
 */
export interface UpdateStartEvent extends StartEvent {
    eventType: 'UPDATE';
    appId?: string;
    priority?: UpdatePriority;
}
/**
 * An event marking the end of an update operation.
 */
export interface UpdateEndEvent extends EndEvent {
    eventType: 'UPDATE';
    nextVersion?: string;
    updateStates: UpdateState[];
    result?: string;
}
/**
 * A merged event representing a update operation.
 */
export type MergedUpdateEvent = EventPair<'UPDATE', UpdateStartEvent, UpdateEndEvent>;
/**
 * An event marking the start of an updater process.
 */
export interface UpdaterProcessStartEvent extends StartEvent {
    eventType: 'UPDATER_PROCESS';
    commandLine?: string;
    timestamp?: Date;
    updaterVersion?: string;
    scope?: Scope;
    osPlatform?: string;
    osVersion?: string;
    osArchitecture?: string;
    updaterArchitecture?: string;
    parentPid?: number;
}
/**
 * An event marking the end of an updater process.
 */
export interface UpdaterProcessEndEvent extends EndEvent {
    eventType: 'UPDATER_PROCESS';
    exitCode?: number;
}
/**
 * A merged event representing an updater process.
 */
export type MergedUpdaterProcessEvent = EventPair<'UPDATER_PROCESS', UpdaterProcessStartEvent, UpdaterProcessEndEvent>;
/**
 * An event marking the start of an app command.
 */
export interface AppCommandStartEvent extends StartEvent {
    eventType: 'APP_COMMAND';
    appId: string;
    commandLine?: string;
}
/**
 * An event marking the end of an app command.
 */
export interface AppCommandEndEvent extends EndEvent {
    eventType: 'APP_COMMAND';
    exitCode?: number;
    output?: string;
}
/**
 * A merged event representing an app command.
 */
export type MergedAppCommandEvent = EventPair<'APP_COMMAND', AppCommandStartEvent, AppCommandEndEvent>;
/**
 * An event containing persisted data from the updater.
 */
export interface PersistedDataEvent extends BaseEvent {
    eventType: 'PERSISTED_DATA';
    bound: 'INSTANT';
    eulaRequired: boolean;
    lastChecked?: Date;
    lastStarted?: Date;
    registeredApps: RegisteredApp[];
}
/**
 * Represents any event understood by this library that can be present in event
 * history.
 */
export type HistoryEvent = InstallStartEvent | InstallEndEvent | UninstallStartEvent | UninstallEndEvent | QualifyStartEvent | QualifyEndEvent | ActivateStartEvent | ActivateEndEvent | PostRequestStartEvent | PostRequestEndEvent | LoadPolicyStartEvent | LoadPolicyEndEvent | UpdateStartEvent | UpdateEndEvent | UpdaterProcessStartEvent | UpdaterProcessEndEvent | AppCommandStartEvent | AppCommandEndEvent | PersistedDataEvent;
/**
 * Represents any merged event pair understood by this library that can be
 * present in event history.
 */
export type MergedHistoryEvent = MergedInstallEvent | MergedUninstallEvent | MergedQualifyEvent | MergedActivateEvent | MergedPostRequestEvent | MergedLoadPolicyEvent | MergedUpdateEvent | MergedUpdaterProcessEvent | MergedAppCommandEvent;
/**
 * Type guard for MergedHistoryEvent.
 */
export declare function isMergedHistoryEvent(event: HistoryEvent | MergedHistoryEvent): event is MergedHistoryEvent;
/**
 * Parses a PolicySet from a message.
 */
export declare function parsePolicySet(message: Record<string, unknown>, fieldName: string): PolicySet | undefined;
/**
 * Parses a single event from a message.
 */
export declare function parseEvent(message: Record<string, unknown>): HistoryEvent;
/**
 * Parses a list of events from a list of messages.
 */
export declare function parseEvents(messages: Array<Record<string, unknown>>): {
    valid: HistoryEvent[];
    invalid: Array<Record<string, unknown>>;
};
/**
 * Deduplicates events based on event type, event ID, PID, process token, and
 * bound.
 */
export declare function deduplicateEvents(events: HistoryEvent[]): HistoryEvent[];
/**
 * Merges START and END events into pairs
 */
export declare function mergeEvents(events: HistoryEvent[]): {
    paired: MergedHistoryEvent[];
    unpaired: HistoryEvent[];
};
/**
 * Returns the lower-case app ID associated with an event, if any.
 */
export declare function getAppId(event: HistoryEvent | MergedHistoryEvent): string | undefined;
/**
 * A class to manage and query MergedUpdaterProcessEvent instances.
 * It builds a map of updater processes keyed by their process ID and token.
 */
export declare class UpdaterProcessMap {
    private readonly updaterProcesses;
    constructor(events: MergedHistoryEvent[]);
    /**
     * Retrieves the MergedUpdaterProcessEvent associated with a given event.
     * The lookup is based on the event's process ID and token. It can accept
     * either a merged event or an unmerged history event.
     */
    getUpdaterProcessForEvent(event: MergedHistoryEvent): MergedUpdaterProcessEvent | undefined;
    getUpdaterProcessForEvent(event: HistoryEvent): MergedUpdaterProcessEvent | undefined;
    getUpdaterProcessForEvent(event: MergedHistoryEvent | HistoryEvent): MergedUpdaterProcessEvent | undefined;
    /**
     * Returns the date of the event, calculated from the updater process start
     * time and device uptime.
     */
    eventDate(event: MergedHistoryEvent): Date | undefined;
    eventDate(event: HistoryEvent): Date | undefined;
    eventDate(event: MergedHistoryEvent | HistoryEvent): Date | undefined;
    /**
     * Sorts events by date in descending order.
     * Events without dates are returned in a separate list.
     */
    sortEventsByDate(events: HistoryEvent[], mergedEvents: MergedHistoryEvent[]): {
        sortedEventsWithDates: Array<HistoryEvent | MergedHistoryEvent>;
        unsortedEventsWithoutDates: Array<HistoryEvent | MergedHistoryEvent>;
    };
    /**
     * Determines the policy set which was effective for `event` by locating its
     * most recent LOAD_POLICY event.
     */
    effectivePolicySet(event: HistoryEvent | MergedHistoryEvent, events: Array<HistoryEvent | MergedHistoryEvent>): PolicySet | undefined;
    /**
     * Generates a key for an event unique to its process, based on its PID and
     * processToken.
     */
    private static eventProcessKey;
}
/**
 * Determines the outcome of a an update event, which may be a
 * CommonUpdateOutcome.
 */
export declare function getUpdateOutcome(event: MergedUpdateEvent | UpdateEndEvent): string | undefined;
export {};
