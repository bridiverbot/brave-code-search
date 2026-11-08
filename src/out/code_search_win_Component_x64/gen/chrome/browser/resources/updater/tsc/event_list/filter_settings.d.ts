import type { CommonUpdateOutcome, EventType, HistoryEvent, MergedHistoryEvent, Scope, UpdaterProcessMap } from '../event_history.js';
/**
 * The filter settings for the event list.
 */
export interface FilterSettings {
    apps: Set<string>;
    eventTypes: Set<EventType>;
    updateOutcomes: Set<CommonUpdateOutcome>;
    startDate: Date | null;
    endDate: Date | null;
    scopes: Set<Scope>;
}
/**
 * Produce a filter settings object populated with reasonable defaults. Some
 * values, e.g. the set of default app filters, are browser-instructed.
 */
export declare function createDefaultFilterSettings(): FilterSettings;
/**
 * Produce a filter settings object with no active filters.
 */
export declare function createEmptyFilterSettings(): FilterSettings;
/**
 * Apply filters to a series of events while preserving order.
 */
export declare function applyFilterSettings(processMap: UpdaterProcessMap | undefined, events: Array<HistoryEvent | MergedHistoryEvent>, filterSettings: FilterSettings): Array<HistoryEvent | MergedHistoryEvent>;
