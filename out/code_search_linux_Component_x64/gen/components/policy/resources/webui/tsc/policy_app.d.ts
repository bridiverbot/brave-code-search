import '/strings.m.js';
import 'chrome://resources/js/action_link.js';
import './status_box.js';
import './policy_table.js';
import './promotion_banner_section_container.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Status } from './policy.mojom-webui.js';
import type { PolicyTableModel } from './policy_table.js';
export declare class PolicyAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        filterPattern_: {
            type: StringConstructor;
        };
        showUnset_: {
            type: BooleanConstructor;
        };
        status_: {
            type: ObjectConstructor;
        };
        policyGroups_: {
            type: ArrayConstructor;
        };
        shouldShowPromo_: {
            type: BooleanConstructor;
        };
        shouldShowCommandLineArgumentsWarning_: {
            type: BooleanConstructor;
        };
        commandLineArguments_: {
            type: StringConstructor;
        };
        toastText_: {
            type: StringConstructor;
        };
        reloadButtonDisabled_: {
            type: BooleanConstructor;
        };
        uploadReportButtonDisabled_: {
            type: BooleanConstructor;
        };
        enableReportButton_: {
            type: BooleanConstructor;
        };
        hideExportButton_: {
            type: BooleanConstructor;
        };
        hideUploadReportButton_: {
            type: BooleanConstructor;
        };
    };
    protected accessor filterPattern_: string;
    protected accessor showUnset_: boolean;
    protected accessor status_: Record<string, Status>;
    protected accessor policyGroups_: PolicyTableModel[];
    protected accessor shouldShowPromo_: boolean;
    protected accessor shouldShowCommandLineArgumentsWarning_: boolean;
    protected accessor commandLineArguments_: string;
    protected accessor toastText_: string;
    protected accessor reloadButtonDisabled_: boolean;
    protected accessor uploadReportButtonDisabled_: boolean;
    protected accessor enableReportButton_: boolean;
    protected accessor hideExportButton_: boolean;
    protected accessor hideUploadReportButton_: boolean;
    private toastTimeoutId_;
    private policyPageMojoMigrationEnabled_;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected onPromoDismiss_(): void;
    protected onPromoRedirect_(): void;
    private onPoliciesReceived_;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onReloadPoliciesClick_(): void;
    protected onMoreActionsClick_(e: Event): void;
    protected onExportPoliciesClick_(): Promise<void>;
    protected onCopyPoliciesClick_(): Promise<void>;
    protected onUploadReportClick_(): void;
    protected onViewLogsClick_(): void;
    protected onShowUnsetCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected hasStatus_(): boolean;
    private closeActionMenu_;
    private showToast_;
    private downloadJson_;
    private reloadPoliciesDone_;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-app': PolicyAppElement;
    }
}
