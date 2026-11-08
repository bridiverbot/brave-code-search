/**
 * @fileoverview
 * 'settings-account-card' component is a card that shows the user's account
 * name and picture with optional controls.
 * It's a slimmed down copy of
 * chrome/browser/resources/settings/people_page/people_page.ts
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '../controls/settings_toggle_button.js';
import '../people_page/sync_account_control.js';
import '../icons.html.js';
import type { StoredAccount, SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsAccountCardElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsAccountCardElement extends SettingsAccountCardElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * This flag is used to conditionally show a set of new sign-in UIs to the
         * profiles that have been migrated to be consistent with the web
         * sign-ins.
         */
        signinAllowed_: {
            type: BooleanConstructor;
        };
        /**
         * The current sync status, supplied by SyncBrowserProxy.
         */
        syncStatus: {
            type: ObjectConstructor;
        };
        /**
         * Stored accounts to the system, supplied by SyncBrowserProxy.
         */
        storedAccounts: {
            type: ArrayConstructor;
        };
        primaryAccountName_: {
            type: StringConstructor;
        };
        primaryAccountEmail_: {
            type: StringConstructor;
        };
        primaryAccountIconUrl_: {
            type: StringConstructor;
        };
    };
    private accessor signinAllowed_;
    accessor syncStatus: SyncStatus | null;
    accessor storedAccounts: StoredAccount[] | null;
    protected accessor primaryAccountName_: string;
    private accessor primaryAccountEmail_;
    protected accessor primaryAccountIconUrl_: string;
    private syncBrowserProxy_;
    connectedCallback(): void;
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    private handleSyncStatus_;
    protected onAccountClick_(): void;
    protected shouldLinkToAccountSettingsPage_(): boolean;
    protected shouldShowSyncAccountControl_(): boolean;
    private handleStoredAccounts_;
    protected getAccountRowSubtitle_(): string;
    /**
     * @return A CSS image-set for multiple scale factors.
     */
    protected getIconImageSet_(iconUrl?: string): string;
    protected isSyncing_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-account-card': SettingsAccountCardElement;
    }
}
export {};
