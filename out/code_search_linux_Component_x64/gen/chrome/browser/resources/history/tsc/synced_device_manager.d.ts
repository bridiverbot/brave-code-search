import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import './synced_device_card.js';
import '/strings.m.js';
import type { ForeignSession, ForeignSessionTab } from 'chrome://resources/cr_components/history/foreign_sessions.mojom-webui.js';
import type { AccountInfo } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { HistorySignInState } from './constants.js';
interface ForeignDeviceInternal {
    device: string;
    lastUpdateTime: string;
    opened: boolean;
    separatorIndexes: number[];
    timestamp: number;
    tabs: ForeignSessionTab[];
    tag: string;
}
declare global {
    interface HTMLElementEventMap {
        'synced-device-card-open-menu': CustomEvent<{
            tag: string;
            target: HTMLElement;
        }>;
    }
}
export interface HistorySyncedDeviceManagerElement {
    $: {
        menu: CrLazyRenderLitElement<CrActionMenuElement>;
        noSyncedTabs: HTMLElement;
        signInGuide: HTMLElement;
    };
}
declare const HistorySyncedDeviceManagerElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class HistorySyncedDeviceManagerElement extends HistorySyncedDeviceManagerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sessionList: {
            type: ArrayConstructor;
        };
        searchTerm: {
            type: StringConstructor;
        };
        /**
         * An array of synced devices with synced tab data.
         */
        syncedDevices_: {
            type: ArrayConstructor;
        };
        historyIdentityState_: {
            type: ObjectConstructor;
        };
        guestSession_: {
            type: BooleanConstructor;
        };
        signInAllowed_: {
            type: BooleanConstructor;
        };
        fetchingSyncedTabs_: {
            type: BooleanConstructor;
        };
        hasSeenForeignData_: {
            type: BooleanConstructor;
        };
        /**
         * The session ID referring to the currently active action menu.
         */
        actionMenuModel_: {
            type: StringConstructor;
        };
        replaceSyncPromosWithSignInPromos_: {
            type: BooleanConstructor;
        };
        accountInfo_: {
            type: ObjectConstructor;
        };
    };
    private focusGrid_;
    private focusGridUpdateTimeout_;
    protected accessor syncedDevices_: ForeignDeviceInternal[];
    private accessor hasSeenForeignData_;
    private accessor fetchingSyncedTabs_;
    private accessor actionMenuModel_;
    private accessor guestSession_;
    private accessor signInAllowed_;
    protected accessor replaceSyncPromosWithSignInPromos_: boolean;
    private signinPausedImpressionRecorded_;
    protected accessor accountInfo_: AccountInfo | null;
    private onAccountInfoDataReceivedListenerId_;
    private accessor historyIdentityState_;
    accessor searchTerm: string;
    accessor sessionList: ForeignSession[] | null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    configureSignInForTest(data: {
        signInAllowed: boolean;
        guestSession: boolean;
    }): void;
    private createInternalDevice_;
    protected onTurnOnSyncClick_(): void;
    protected onTurnOnHistorySyncClick_(): void;
    private handleAccountInfoChanged_;
    private onOpenMenu_;
    protected onOpenAllClick_(): void;
    private updateFocusGrid_;
    protected onDeleteSessionClick_(): void;
    clearSyncedDevicesForTest(): void;
    private clearDisplayedSyncedDevices_;
    protected isSignInState_(state: HistorySignInState): boolean;
    protected shouldShowHistorySyncOptIn_(): boolean;
    protected isTabsSyncTurnedOn_(): boolean;
    protected isTabsSyncDisabled_(): boolean;
    /**
     * Decide whether or not should display no synced tabs message.
     */
    protected showNoSyncedMessage_(): boolean;
    /**
     * Shows the signin guide when the user is not signed in, signin is allowed
     * and not in a guest session.
     */
    protected showSignInGuide_(): boolean;
    /**
     * Decide what message should be displayed when user is logged in and there
     * are no synced tabs.
     */
    protected noSyncedTabsMessage_(): string;
    /**
     * Replaces the currently displayed synced tabs with |sessionList|. It is
     * common for only a single session within the list to have changed, We try to
     * avoid doing extra work in this case. The logic could be more intelligent
     * about updating individual tabs rather than replacing whole sessions, but
     * this approach seems to have acceptable performance.
     */
    private updateSyncedDevices_;
    /**
     * Get called when user's sign in state changes, this will affect UI of synced
     * tabs page. Sign in promo gets displayed when user is signed out, and
     * different messages are shown when there are no synced tabs.
     */
    private onIdentityStateChanged_;
    private maybeRecordSigninPendingOffered_;
    private searchTermChanged_;
    protected onCardOpenedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
export type SyncedDeviceManagerElement = HistorySyncedDeviceManagerElement;
declare global {
    interface HTMLElementTagNameMap {
        'history-synced-device-manager': HistorySyncedDeviceManagerElement;
    }
}
export {};
