/**
 * @fileoverview A settings page that allows the user to see and manage the
    passkeys on their computer.
 */
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../../settings_page/settings_subpage.js';
import '../../site_favicon.js';
import '../../simple_confirmation_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Passkey } from './passkeys_browser_proxy.js';
export interface SettingsPasskeysPageElement {
    $: {
        deleteErrorDialog: CrLazyRenderLitElement<CrDialogElement>;
        menu: CrActionMenuElement;
    };
}
declare const SettingsPasskeysPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsPasskeysPageElement extends SettingsPasskeysPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Substring to filter the passkeys by. */
        filter_: {
            type: StringConstructor;
        };
        passkeys_: {
            type: ArrayConstructor;
        };
        showDeleteConfirmationDialog_: {
            type: BooleanConstructor;
        };
        noManagement_: {
            type: BooleanConstructor;
        };
    };
    protected accessor filter_: string;
    protected accessor passkeys_: Passkey[];
    protected accessor showDeleteConfirmationDialog_: boolean;
    protected accessor noManagement_: boolean;
    private credentialIdForActionMenu_;
    private browserProxy_;
    firstUpdated(): void;
    protected onSearchTermChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Used to filter the displayed passkeys when search text is entered.
     */
    protected getFilteredPasskeys_(): Passkey[];
    /**
     * Called when the browser has a new list of passkeys.
     */
    private onEnumerateComplete_;
    protected getIconUrl_(passkey: Passkey): string;
    /**
     * Called when the user clicks on the three-dots icon for a passkey.
     */
    protected onDotsClick_(e: Event): void;
    /**
     * Called when the user clicks to delete a passkey.
     */
    protected onDeleteClick_(): void;
    /**
     * Called when a delete confirmation dialog is closed (whether successful or
     * not).
     */
    protected onConfirmDialogClose_(): void;
    /**
     * Called when a delete operation has completed.
     */
    private onDeleteComplete_;
    /**
     * Called when the user clicks the "ok" button on the error dialog.
     */
    protected onErrorDialogOkClick_(): void;
    /**
     * Returns the a11y label for the "More actions" button next to a passkey.
     */
    protected getMoreActionsLabel_(passkey: Passkey): string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-passkeys-page': SettingsPasskeysPageElement;
    }
}
export {};
