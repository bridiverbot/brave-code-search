import '../enterprise_policy_table/enterprise_policy_table.js';
import '../icons.html.js';
import '../scope_icon.js';
import './raw_event_details.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PolicySet, Scope, UpdaterProcessMap } from '../event_history.js';
import type { HistoryEvent, MergedHistoryEvent } from '../event_history.js';
/**
 * An item in the event list, representing a single event.
 */
export declare class EventListItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        event: {
            type: ObjectConstructor;
        };
        eventDate: {
            type: ObjectConstructor;
        };
        processMap: {
            type: ObjectConstructor;
        };
        policies: {
            type: ObjectConstructor;
        };
        expanded: {
            type: BooleanConstructor;
            notify: boolean;
        };
        status: {
            type: StringConstructor;
            reflect: boolean;
        };
        scope: {
            type: StringConstructor;
            reflect: boolean;
        };
        appId: {
            type: StringConstructor;
        };
        appLabel: {
            type: StringConstructor;
        };
        formattedDate: {
            type: StringConstructor;
        };
        formattedDuration: {
            type: StringConstructor;
        };
        errors: {
            type: ArrayConstructor;
        };
        omahaRequest: {
            type: ObjectConstructor;
        };
        omahaResponse: {
            type: ObjectConstructor;
        };
        nextVersion: {
            type: StringConstructor;
        };
        updaterVersion: {
            type: StringConstructor;
        };
        commandLine: {
            type: StringConstructor;
        };
        eventSummaryIcon: {
            type: StringConstructor;
        };
        eventSummary: {
            type: StringConstructor;
        };
    };
    accessor event: HistoryEvent | MergedHistoryEvent | undefined;
    accessor eventDate: Date | undefined;
    accessor processMap: UpdaterProcessMap | undefined;
    accessor policies: PolicySet | undefined;
    accessor expanded: boolean;
    accessor status: 'success' | 'error' | '';
    accessor scope: Scope | undefined;
    protected accessor appId: string | undefined;
    protected accessor appLabel: string | undefined;
    protected accessor formattedDate: string | undefined;
    protected accessor formattedDuration: string | undefined;
    protected accessor errors: string[];
    protected accessor omahaRequest: Record<string, unknown> | undefined;
    protected accessor omahaResponse: Record<string, unknown> | undefined;
    protected accessor nextVersion: string | undefined;
    protected accessor updaterVersion: string | undefined;
    protected accessor commandLine: string | undefined;
    protected accessor eventSummaryIcon: string | undefined;
    protected accessor eventSummary: string | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    expand(): void;
    collapse(): void;
    protected onExpandedChanged(e: CustomEvent<{
        value: boolean;
    }>): void;
    /**
     * Parses a base64-encoded string as JSON, discarding the `SAFE_JSON_PREFIX`
     * if present.
     */
    private base64ToJson;
    private computeScope;
    private computeAppLabel;
    private computeFormattedDate;
    private computeFormattedDuration;
    private computeErrors;
    private computeStatus;
    private computeOmahaRequest;
    private computeOmahaResponse;
    private computeNextVersion;
    private computeUpdaterVersion;
    private computeCommandLine;
    private computeEventSummaryIcon;
    private getInstallSummary;
    private getUninstallSummary;
    private getQualifySummary;
    private getActivateSummary;
    private getPostRequestSummary;
    private getUpdateSummary;
    private getUpdaterProcessSummary;
    private getAppCommandSummary;
    private getPersistedDataSummary;
    private getEventSummary;
}
declare global {
    interface HTMLElementTagNameMap {
        'event-list-item': EventListItemElement;
    }
}
