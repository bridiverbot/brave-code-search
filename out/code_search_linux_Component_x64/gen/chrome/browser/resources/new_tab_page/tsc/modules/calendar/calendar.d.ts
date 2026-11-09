import './calendar_event.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CalendarEvent } from '../../calendar_data.mojom-webui.js';
export interface CalendarElement {
    $: {
        seeMore: HTMLElement;
    };
}
/**
 * The calendar element for displaying the user's list of events. .
 */
export declare class CalendarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        calendarLink: {
            type: StringConstructor;
        };
        events: {
            type: ArrayConstructor;
        };
        moduleName: {
            type: StringConstructor;
        };
        doubleBookedIndices_: {
            type: ArrayConstructor;
        };
        expandedEventIndex_: {
            type: NumberConstructor;
        };
    };
    accessor calendarLink: string;
    accessor events: CalendarEvent[];
    accessor moduleName: string;
    private accessor doubleBookedIndices_;
    private accessor expandedEventIndex_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeDoubleBookedIndices_;
    private compareEventPriority_;
    private computeExpandedEventIndex_;
    protected hasDoubleBooked_(): boolean;
    protected isDoubleBooked_(index: number): boolean;
    protected isExpanded_(index: number): boolean;
    protected onSeeMoreClick_(): void;
    protected sortEvents_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-calendar': CalendarElement;
    }
}
