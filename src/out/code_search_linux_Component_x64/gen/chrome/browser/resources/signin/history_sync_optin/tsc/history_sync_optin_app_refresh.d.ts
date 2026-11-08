import '/strings.m.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { LaunchContext } from './history_sync_optin.mojom-webui.js';
declare const HistorySyncOptinAppRefreshElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface HistorySyncOptinAppRefreshElement {
    $: {
        acceptButton: CrButtonElement;
        rejectButton: CrButtonElement;
    };
}
export declare class HistorySyncOptinAppRefreshElement extends HistorySyncOptinAppRefreshElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accountImageSrc_: {
            type: StringConstructor;
        };
        buttonsDisabled_: {
            type: BooleanConstructor;
        };
        isModal_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        screenMode_: {
            type: NumberConstructor;
        };
    };
    protected accessor accountImageSrc_: string;
    protected launchContext_: LaunchContext;
    protected accessor isModal_: boolean;
    protected accessor buttonsDisabled_: boolean;
    private historySyncOptInBrowserProxy_;
    private onAccountInfoDataReceivedListenerId_;
    private onScreenModeDataReceivedListenerId_;
    private accessor screenMode_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onRejectClick_(): void;
    protected onAcceptClick_(): void;
    protected isLaunchContext_(launchContext: LaunchContext): boolean;
    protected getRejectButtonClass_(): string;
    protected getAcceptButtonClass_(): string;
    private handleAccountInfoChanged_;
    private handleScreenModeChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-sync-optin-app-refresh': HistorySyncOptinAppRefreshElement;
    }
}
export {};
