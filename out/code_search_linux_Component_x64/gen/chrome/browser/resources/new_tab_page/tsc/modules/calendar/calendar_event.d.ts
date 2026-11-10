import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CalendarEvent } from '../../calendar_data.mojom-webui.js';
export interface CalendarEventElement {
    $: {
        header: HTMLAnchorElement;
        startTime: HTMLElement;
        timeStatus: HTMLElement;
        title: HTMLElement;
    };
}
declare const CalendarEventElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The calendar event element for displaying a single event.
 */
export declare class CalendarEventElement extends CalendarEventElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        doubleBooked: {
            type: BooleanConstructor;
        };
        event: {
            type: ObjectConstructor;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        index: {
            type: NumberConstructor;
        };
        moduleName: {
            type: StringConstructor;
        };
        attachmentListClass_: {
            type: StringConstructor;
        };
        formattedStartTime_: {
            type: StringConstructor;
        };
        timeStatus_: {
            type: StringConstructor;
        };
    };
    accessor doubleBooked: boolean;
    accessor event: CalendarEvent;
    accessor expanded: boolean;
    accessor index: number;
    accessor moduleName: string;
    protected accessor attachmentListClass_: string;
    protected accessor formattedStartTime_: string;
    protected intersectionObserver_: IntersectionObserver | null;
    protected accessor timeStatus_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private computeFormattedStartTime_;
    private computeTimeStatus_;
    protected isAttachmentDisabled_(index: number): boolean;
    protected onAttachmentClick_(e: Event): void;
    protected onVideoConferenceClick_(): void;
    protected onHeaderClick_(): void;
    protected getConferenceButtonAriaLabel_(): string;
    protected showConferenceButton_(): boolean;
    protected showAttachments_(): boolean;
    protected showLocation_(): boolean;
    protected updateAttachmentListClass_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-calendar-event': CalendarEventElement;
    }
}
export {};
