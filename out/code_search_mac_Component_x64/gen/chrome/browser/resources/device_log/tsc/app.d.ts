import '/strings.m.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { LogEntry } from './browser_proxy.js';
import { LogLevel } from './browser_proxy.js';
interface EventType {
    type: string;
    label: string;
    enabled: boolean;
}
export interface DeviceLogAppElement {
    $: {
        logClear: HTMLElement;
        logClearTypes: HTMLElement;
        logContainer: HTMLElement;
        logFileinfo: HTMLInputElement;
        logLevelSelect: HTMLSelectElement;
        logRefresh: HTMLElement;
        logTimedetail: HTMLInputElement;
    };
}
export declare class DeviceLogAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        eventTypes_: {
            type: ArrayConstructor;
        };
        filteredLogs_: {
            type: ArrayConstructor;
        };
        logFileInfo_: {
            type: BooleanConstructor;
        };
        logTimeDetail_: {
            type: BooleanConstructor;
        };
        logs_: {
            type: ArrayConstructor;
        };
        selectedLogLevel_: {
            type: StringConstructor;
        };
    };
    protected accessor eventTypes_: EventType[];
    protected accessor filteredLogs_: LogEntry[];
    protected accessor logFileInfo_: boolean;
    protected accessor logTimeDetail_: boolean;
    protected accessor logs_: LogEntry[];
    protected accessor selectedLogLevel_: LogLevel;
    private browserProxy_;
    constructor();
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getTextForLogEntry_(log: LogEntry): string;
    protected onLogTypeChange_(event: Event): void;
    protected onLogLevelSelectChange_(event: Event): void;
    protected onLogFileinfoChange_(event: Event): void;
    protected onLogTimedetailChange_(event: Event): void;
    protected onLogClearTypesClick_(): void;
    /**
     * Requests a log update.
     */
    protected onLogRefreshClick_(): Promise<void>;
    /**
     * Clears the log and queues an update.
     */
    protected onLogClearClick_(): void;
    /**
     * Sets refresh rate if the interval is found in the url.
     */
    private setRefresh_;
}
declare global {
    interface HTMLElementTagNameMap {
        'device-log-app': DeviceLogAppElement;
    }
}
export {};
