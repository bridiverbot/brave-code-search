/**
 * @fileoverview 'settings-signout-dialog' is a dialog that allows the
 * user to turn off sync and sign out of Chromium.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
export interface SettingsSignoutDialogElement {
    $: {
        dialog: CrDialogElement;
        disconnectConfirm: HTMLElement;
    };
}
declare const SettingsSignoutDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSignoutDialogElement extends SettingsSignoutDialogElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The current sync status, supplied by the parent.
         */
        syncStatus: {
            type: ObjectConstructor;
        };
        /**
         * True if the checkbox to delete the profile has been checked.
         */
        deleteProfile_: {
            type: BooleanConstructor;
        };
        /**
         * True if the profile deletion warning is visible.
         */
        deleteProfileWarningVisible_: {
            type: BooleanConstructor;
        };
        /**
         * The profile deletion warning. The message indicates the number of
         * profile stats that will be deleted if a non-zero count for the profile
         * stats is returned from the browser.
         */
        deleteProfileWarning_: {
            type: StringConstructor;
        };
    };
    accessor syncStatus: SyncStatus | null;
    protected accessor deleteProfile_: boolean;
    protected accessor deleteProfileWarningVisible_: boolean;
    protected accessor deleteProfileWarning_: string;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @return true when the user selected 'Confirm'.
     */
    wasConfirmed(): boolean;
    /**
     * Handler for when the profile stats count is pushed from the browser.
     */
    private handleProfileStatsCount_;
    private syncStatusChanged_;
    protected getDisconnectExplanationHtml_(): TrustedHTML;
    protected onDeleteProfileCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDeleteProfileWarningVisibleExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDisconnectCancelClick_(): void;
    protected onDisconnectConfirmClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-signout-dialog': SettingsSignoutDialogElement;
    }
}
export {};
