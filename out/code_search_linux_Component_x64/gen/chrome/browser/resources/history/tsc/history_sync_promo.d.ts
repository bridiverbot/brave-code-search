import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { AccountInfo } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { HistorySignInState } from './constants.js';
declare const HistorySyncPromoElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class HistorySyncPromoElement extends HistorySyncPromoElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shown_: {
            type: BooleanConstructor;
        };
        historyIdentityState_: {
            type: ObjectConstructor;
        };
        accountInfo_: {
            type: ObjectConstructor;
        };
    };
    protected accessor shown_: boolean;
    protected accessor accountInfo_: AccountInfo | null;
    private callbackRouter_;
    private onAccountInfoDataReceivedListenerId_;
    private signinPausedImpressionRecorded_;
    private accessor historyIdentityState_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleAccountInfoChanged_;
    private updateHistoryIdentityState_;
    private maybeRecordSigninPendingOffered_;
    protected onCloseClick_(): void;
    protected isSignInState_(state: HistorySignInState): boolean;
    protected isHistorySyncTurnedOn_(): boolean;
    protected onTurnOnHistorySyncClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-sync-promo': HistorySyncPromoElement;
    }
}
export {};
