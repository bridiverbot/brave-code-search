import './app_list/app_list.js';
import './enterprise_policy_table/enterprise_policy_table.js';
import './event_list/event_list.js';
import './updater_state/updater_state.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AppStateDisplay } from './app_list/app_list.js';
import type { PolicySet } from './event_history.js';
import type { EnterpriseCompanionState, UpdaterState } from './updater_ui.mojom-webui.js';
export declare enum PageDataSource {
    INSTALL = 0,
    FILE = 1
}
export interface UpdaterAppElement {
    $: {
        fileInput: HTMLInputElement;
    };
}
export declare class UpdaterAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        messages: {
            type: ArrayConstructor;
        };
        userUpdaterState: {
            type: ObjectConstructor;
        };
        systemUpdaterState: {
            type: ObjectConstructor;
        };
        enterpriseCompanionState: {
            type: ObjectConstructor;
        };
        updaterStateError: {
            type: BooleanConstructor;
        };
        apps: {
            type: ArrayConstructor;
        };
        appStateError: {
            type: BooleanConstructor;
        };
        pageDataSource: {
            type: NumberConstructor;
            reflect: boolean;
        };
        fileSelectionBannerLabel: {
            type: StringConstructor;
        };
        historyLoadError: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        policies: {
            type: ObjectConstructor;
        };
    };
    accessor messages: Array<Record<string, unknown>>;
    accessor userUpdaterState: UpdaterState | null;
    accessor systemUpdaterState: UpdaterState | null;
    accessor enterpriseCompanionState: EnterpriseCompanionState | null;
    accessor updaterStateError: boolean;
    accessor apps: AppStateDisplay[];
    accessor appStateError: boolean;
    accessor pageDataSource: PageDataSource;
    accessor fileSelectionBannerLabel: string;
    accessor historyLoadError: boolean;
    protected accessor policies: PolicySet | undefined;
    connectedCallback(): void;
    protected onLoadHistoryClick(): void;
    protected onFileInputChange(e: Event): Promise<void>;
    private processHistoryFiles;
    protected onCloseFileClick(): void;
    private fetchInstallData;
    private computeStateFromHistory;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computePoliciesFromInstall;
    private getAllUpdaterEvents;
    private getUpdaterStates;
    private getEnterpriseCompanionState;
    private getAppStates;
}
declare global {
    interface HTMLElementTagNameMap {
        'updater-app': UpdaterAppElement;
    }
}
