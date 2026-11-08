import './install_dev_proxy_tab.js';
import './install_local_bundle_tab.js';
import './install_update_manifest_tab.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare enum TabIndex {
    DEV_PROXY = 0,
    LOCAL_BUNDLE = 1,
    UPDATE_MANIFEST = 2
}
export interface IwaDevInstallDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export declare class IwaDevInstallDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedTab_: {
            type: NumberConstructor;
            state: boolean;
        };
        isInstalling_: {
            type: BooleanConstructor;
            state: boolean;
        };
        installationError_: {
            type: StringConstructor;
            state: boolean;
        };
        isCurrentTabValid_: {
            type: BooleanConstructor;
            state: boolean;
        };
        isOpened_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    protected accessor selectedTab_: TabIndex;
    protected accessor isInstalling_: boolean;
    protected accessor installationError_: string;
    protected accessor isCurrentTabValid_: boolean;
    protected accessor isOpened_: boolean;
    showDialog(): void;
    closeDialog(): void;
    startInstallation(): void;
    onInstallationFinished(error?: string | null): void;
    protected onCancelClick_(): void;
    protected isInstallButtonEnabled_(): boolean;
    private get activeTab_();
    protected onInstallClick_(): void;
    protected onSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected onTabValidChanged_(e: CustomEvent<{
        isValid: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-install-dialog': IwaDevInstallDialogElement;
    }
}
