import type { StoredAccount } from '/shared/settings/people_page/sync_browser_proxy.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsClearBrowsingDataAccountIndicatorElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsClearBrowsingDataAccountIndicatorElement extends SettingsClearBrowsingDataAccountIndicatorElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shouldShowAccountIndicator_: {
            type: BooleanConstructor;
        };
        /**
         * The primary signed-in account.
         */
        shownAccount_: {
            type: ObjectConstructor;
        };
        /**
         * The current sync status, supplied by SyncBrowserProxy.
         */
        syncStatus_: {
            type: ObjectConstructor;
        };
    };
    protected accessor shouldShowAccountIndicator_: boolean;
    protected accessor shownAccount_: StoredAccount | null;
    private accessor syncStatus_;
    private syncBrowserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Computes the shown account from the StoredAccounts list. The shown account
     * is the primary account which is the first element in the StoredAccounts
     * list.
     */
    private handleStoredAccounts_;
    private handleSyncStatus_;
    /**
     * Determines when the account indicator should be shown, in the case where
     * account data would be deleted.
     */
    private computeShouldShowAvatarRow_;
    protected getProfileImageSrc_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-clear-browsing-data-account-indicator': SettingsClearBrowsingDataAccountIndicatorElement;
    }
}
export {};
