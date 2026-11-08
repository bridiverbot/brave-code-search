/**
 * Key-Value pair for the summary and metrics table.
 */
interface KeyValue {
    key: string;
    value: number | string | boolean | [number];
}
/**
 * Sequence information for an event.
 */
interface SequenceMetadata {
    id: string;
    systemUptimeMs: string;
    resetCounter: string;
}
/**
 * An event and its data. This includes metadata about the event and sequence
 * information if applicable.
 */
export interface StructuredMetricEvent {
    project: string;
    event: string;
    type: string;
    sequenceMetadata?: SequenceMetadata;
    metrics: KeyValue[];
}
/**
 * Summary about Structured Metrics service.
 */
export interface StructuredMetricsSummary {
    enabled: boolean;
    flags: KeyValue[];
    crosDeviceId: string;
}
/**
 * Contains the search parameters by category.
 *
 * Valid categories are: project, event, metric.
 */
export type SearchParams = Map<string, string>;
/**
 * Updates the Summary table with new information.
 *
 * @param summaryBody Body of the summary table.
 * @param summary Summary object to populate the table.
 * @param template Key-Value pair HTML template.
 */
export declare function updateStructuredMetricsSummary(summaryBody: HTMLElement, summary: StructuredMetricsSummary, template: HTMLTemplateElement): void;
/**
 * Updates the events table with the events recorded by the client.
 *
 * @param eventBody Body of the event table.
 * @param events List of events to populate the table.
 * @param searchParams Optional search parameters.
 * @param template HTML template for the event table row.
 * @param kvTemplate Key-Value pair HTML template.
 */
export declare function updateStructuredMetricsEvents(eventBody: HTMLElement, events: StructuredMetricEvent[], searchParams: SearchParams | null, eventTemplate: HTMLTemplateElement, detailsTemplate: HTMLTemplateElement, kvTemplate: HTMLTemplateElement): void;
export {};
