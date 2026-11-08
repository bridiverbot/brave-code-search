import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Log } from './../policy.mojom-webui.js';
import type { VersionInfo } from './types.js';
export declare class PolicyLogsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        logs: {
            type: ArrayConstructor;
        };
        versionInfo: {
            type: ObjectConstructor;
        };
        filterPattern: {
            type: StringConstructor;
        };
        checkedSeverities: {
            type: ObjectConstructor;
        };
    };
    accessor logs: Log[];
    accessor versionInfo: VersionInfo | null;
    accessor filterPattern: string;
    accessor checkedSeverities: Record<string, boolean>;
    private policyPageMojoMigrationEnabled;
    connectedCallback(): void;
    private displayVersionInfo;
    private fetchLogs;
    protected fetchLogsAndDisplay(): void;
    protected onDumpClick(): void;
    protected onRefreshClick(): void;
    protected onFilterInput(e: Event): void;
    protected onSeverityChange(severity: string, checked: boolean): void;
    protected onSeverityCheckboxChange(e: Event): void;
    protected getFilterWords(): string[];
    protected getFilteredLogs(): Log[];
    protected getLogFileAndLine(log: Log): {
        file: string;
        line: string;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-logs-app': PolicyLogsAppElement;
    }
}
