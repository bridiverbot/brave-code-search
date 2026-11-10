import './calendar.js';
import '../info_dialog.js';
import '../module_header.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CalendarEvent } from '../../calendar_data.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem, ModuleHeaderElement } from '../module_header.js';
import type { CalendarElement } from './calendar.js';
export interface GoogleCalendarModuleElement {
    $: {
        calendar: CalendarElement;
        moduleHeader: ModuleHeaderElement;
    };
}
declare const GoogleCalendarModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The Google Calendar module, which serves as an inside look in to today's
 * events on a user's Google Calendar .
 */
export declare class GoogleCalendarModuleElement extends GoogleCalendarModuleElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        events_: {
            type: ArrayConstructor;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor events_: CalendarEvent[];
    protected accessor showInfoDialog_: boolean;
    constructor(events: CalendarEvent[]);
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
    protected onInfoButtonClick_(): void;
    protected onInfoDialogClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-google-calendar-module': GoogleCalendarModuleElement;
    }
}
export declare const googleCalendarDescriptor: ModuleDescriptor;
export {};
