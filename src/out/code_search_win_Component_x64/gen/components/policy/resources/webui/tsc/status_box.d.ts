import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Status } from './policy.mojom-webui.js';
export interface StatusField {
    label: string;
    value: string;
    className: string;
    show: boolean;
}
export declare class StatusBoxElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        scope: {
            type: StringConstructor;
        };
        status: {
            type: ObjectConstructor;
        };
    };
    accessor scope: string;
    accessor status: Status | null;
    protected getGeneralFields(): StatusField[];
    protected getPolicyFetchFields(): StatusField[];
    protected getExtensionInstallFields(): StatusField[];
    protected getHeading(): string;
    protected showFlexOrgWarning(): boolean;
    protected getWarning(): TrustedHTML;
    private getNotSpecified;
    protected showPolicyFetchSection(): boolean;
    protected showExtensionInstallSection(): boolean;
    private getIsAffiliatedString;
    private getIsOffHoursActiveString;
    private getPolicyPushString;
    private getLastCloudReportSentTimestampString;
    private getPolicyFetchErrorString;
    private getExtensionInstallErrorString;
}
declare global {
    interface HTMLElementTagNameMap {
        'status-box': StatusBoxElement;
    }
}
