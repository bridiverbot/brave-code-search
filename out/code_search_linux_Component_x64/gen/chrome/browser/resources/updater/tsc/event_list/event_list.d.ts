import './event_list_item.js';
import './filter_bar.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { UpdaterProcessMap } from '../event_history.js';
import type { HistoryEvent, MergedHistoryEvent, PolicySet } from '../event_history.js';
import type { EventListItemElement } from './event_list_item.js';
import { FilterCategory } from './filter_bar.js';
import type { FilterSettings } from './filter_settings.js';
export interface EventEntry {
    event: HistoryEvent | MergedHistoryEvent;
    eventDate: Date;
    formattedEventDate: string;
    formattedRelativeEventDate: string;
    policies: PolicySet | undefined;
}
export declare class EventListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        messages: {
            type: ArrayConstructor;
        };
        filterSettings: {
            type: ObjectConstructor;
        };
        eventsWithoutDatesLabel: {
            type: StringConstructor;
        };
        eventsWithParseErrorsLabel: {
            type: StringConstructor;
        };
        expandAllButtonLabel: {
            type: StringConstructor;
        };
        events: {
            type: ArrayConstructor;
        };
        scrollTarget: {
            type: ObjectConstructor;
        };
        processMap: {
            type: ObjectConstructor;
        };
    };
    accessor messages: Array<Record<string, unknown>>;
    accessor filterSettings: FilterSettings;
    protected accessor eventsWithoutDatesLabel: string;
    protected accessor eventsWithParseErrorsLabel: string;
    protected accessor expandAllButtonLabel: string;
    protected accessor events: EventEntry[];
    protected accessor scrollTarget: HTMLElement;
    protected accessor processMap: UpdaterProcessMap | undefined;
    protected sortedEventsWithDates: Array<HistoryEvent | MergedHistoryEvent>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private expandAll;
    private collapseAll;
    protected isAnyExpanded(): boolean;
    protected get eventListItems(): EventListItemElement[];
    updateEventEntries(): void;
    protected onFiltersChanged(e: CustomEvent<FilterCategory | 'all'>): void;
    protected onExpandCollapseAllClick(): void;
    protected onEventItemExpandedChanged(): void;
    protected getNumDisplayedEventsLabel(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'event-list': EventListElement;
    }
}
