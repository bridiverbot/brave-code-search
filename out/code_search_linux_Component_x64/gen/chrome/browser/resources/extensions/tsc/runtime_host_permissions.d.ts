import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './runtime_hosts_dialog.js';
import '/strings.m.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
export interface ExtensionsRuntimeHostPermissionsElement {
    $: {
        hostActionMenu: CrActionMenuElement;
    };
}
export declare class ExtensionsRuntimeHostPermissionsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The underlying permissions data.
         */
        permissions: {
            type: ObjectConstructor;
        };
        itemId: {
            type: StringConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        enableEnhancedSiteControls: {
            type: BooleanConstructor;
        };
        /**
         * Whether the dialog to add a new host permission is shown.
         */
        showHostDialog_: {
            type: BooleanConstructor;
        };
        /**
         * Whether the dialog warning the user that the list of sites added will
         * be removed is shown.
         */
        showRemoveSiteDialog_: {
            type: BooleanConstructor;
        };
        /**
         * The current site of the entry that the host dialog is editing, if the
         * dialog is open for editing.
         */
        hostDialogModel_: {
            type: StringConstructor;
        };
        /**
         * The element to return focus to once the host dialog closes.
         */
        hostDialogAnchorElement_: {
            type: ObjectConstructor;
        };
        /**
         * If the action menu is open, the site of the entry it is open for.
         * Otherwise null.
         */
        actionMenuModel_: {
            type: StringConstructor;
        };
        /**
         * The element that triggered the action menu, so that the page will
         * return focus once the action menu (or dialog) closes.
         */
        actionMenuAnchorElement_: {
            type: ObjectConstructor;
        };
        /**
         * The old host access setting; used when we don't immediately commit the
         * change to host access so that we can reset it if the user cancels.
         */
        oldHostAccess_: {
            type: StringConstructor;
        };
        /**
         * Indicator to track if an onHostAccessChange_ event is coming from the
         * setting being automatically reverted to the previous value, after a
         * change to a new value was canceled.
         */
        revertingHostAccess_: {
            type: BooleanConstructor;
        };
    };
    accessor permissions: chrome.developerPrivate.RuntimeHostPermissions;
    accessor itemId: string;
    accessor delegate: ItemDelegate;
    accessor enableEnhancedSiteControls: boolean;
    protected accessor showHostDialog_: boolean;
    protected accessor showRemoveSiteDialog_: boolean;
    protected accessor hostDialogModel_: string | null;
    private accessor hostDialogAnchorElement_;
    private accessor actionMenuModel_;
    private accessor actionMenuAnchorElement_;
    private accessor oldHostAccess_;
    private accessor revertingHostAccess_;
    getSelectMenu(): HTMLSelectElement;
    getRemoveSiteDialog(): CrDialogElement;
    protected onHostAccessChange_(): void;
    protected showSpecificSites_(): boolean;
    /**
     * @return The granted host permissions as a sorted set of strings.
     */
    protected getRuntimeHosts_(): string[];
    protected onAddHostClick_(e: Event): void;
    protected isHostAccessSelected_(access: chrome.developerPrivate.HostAccess): boolean;
    /**
     * @param anchorElement The element to return focus to once the dialog closes.
     * @param currentSite The site entry currently being edited, or null if this
     *     is to add a new entry.
     */
    private doShowHostDialog_;
    protected onHostDialogClose_(): void;
    protected onHostDialogCancel_(): void;
    protected dialogShouldUpdateHostAccess_(): boolean;
    protected onOpenEditHostClick_(e: Event): void;
    protected onActionMenuEditClick_(): void;
    protected onActionMenuRemoveClick_(): void;
    private closeActionMenu_;
    protected onLearnMoreClick_(): void;
    protected onEditHostClick_(e: Event): void;
    protected onDeleteHostClick_(e: Event): void;
    protected getFaviconUrl_(url: string): string;
    protected onRemoveSitesWarningConfirmClick_(): void;
    protected onRemoveSitesWarningCancelClick_(): void;
    protected onRemoveSitesWarningCancel_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-runtime-host-permissions': ExtensionsRuntimeHostPermissionsElement;
    }
}
