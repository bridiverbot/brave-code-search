import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './checkup_section.js';
import './checkup_details_section.js';
import './cr_page_host_style.css.js';
import './cr_scrollable.css.js';
import './password_details_section.js';
import './password_change_details.js';
import './passwords_exporter.js';
import './passwords_section.js';
import './settings_section.js';
import './shared_style.css.js';
import './side_bar.js';
import './toolbar.js';
import './dialogs/trusted_vault_error_dialog.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import type { CrDrawerElement } from 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import type { CrPageSelectorElement } from 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import type { DomIf } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { CheckupSectionElement } from './checkup_section.js';
import type { PasswordsSectionElement } from './passwords_section.js';
import type { Route } from './router.js';
import { Page } from './router.js';
import type { SettingsSectionElement } from './settings_section.js';
import type { PasswordManagerSideBarElement } from './side_bar.js';
import type { PasswordManagerToolbarElement } from './toolbar.js';
export type PasswordsMovedEvent = CustomEvent<{
    accountEmail: string;
    numberOfPasswords: number;
}>;
export type ValueCopiedEvent = CustomEvent<{
    toastMessage: string;
}>;
export interface PasswordManagerAppElement {
    $: {
        checkup: CheckupSectionElement;
        content: CrPageSelectorElement;
        drawer: CrDrawerElement;
        drawerTemplate: DomIf;
        passwords: PasswordsSectionElement;
        toast: CrToastElement;
        scrollableShadow: HTMLElement;
        settings: SettingsSectionElement;
        sidebar: PasswordManagerSideBarElement;
        toolbar: PasswordManagerToolbarElement;
    };
}
declare const PasswordManagerAppElementBase: typeof PolymerElement & (new (...args: any[]) => import("./router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener) & (new (...args: any[]) => import("./user_utils_mixin.js").UserUtilMixinInterface);
export declare class PasswordManagerAppElement extends PasswordManagerAppElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        selectedPage_: {
            type: StringConstructor;
            value: Page;
        };
        narrow_: {
            type: BooleanConstructor;
            observer: string;
        };
        collapsed_: {
            type: BooleanConstructor;
            observer: string;
        };
        pageTitle_: {
            type: StringConstructor;
            value: () => string;
        };
        pagesValueEnum_: {
            type: ObjectConstructor;
            value: typeof Page;
        };
        showTrustedVaultErrorDialog_: BooleanConstructor;
        toastMessage_: StringConstructor;
        /**
         * Whether to show an "undo" button on the removal toast.
         */
        showUndo_: BooleanConstructor;
        /**
         * A Map specifying which element should be focused when exiting a
         * subpage. The key of the map holds a Route path, and the value holds
         * either a query selector that identifies the desired element, an element
         * or a function to be run when a neon-animation-finish event is handled.
         */
        focusConfig_: {
            type: ObjectConstructor;
            value(): Map<any, any>;
        };
    };
    static get observers(): string[];
    private selectedPage_;
    private narrow_;
    private collapsed_;
    private pageTitle_;
    private showTrustedVaultErrorDialog_;
    private toastMessage_;
    private showUndo_;
    private focusConfig_;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    ready(): void;
    currentRouteChanged(route: Route): void;
    handleFindShortcut(modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    private onMaxWidthChanged_;
    private onMenuButtonClick_;
    private closeDrawer_;
    setNarrowForTesting(state: boolean): void;
    private showPage;
    /**
     * Handle the shortcut to undo a removal of passwords/exceptions. This must
     * be handled here and not at the PasswordDetailsCard level because that
     * component does not know about exception deletions.
     */
    private onUndoKeyBinding_;
    private onPasswordRemoved_;
    private onBackupPasswordRemoved_;
    private onPasskeyRemoved_;
    private onPasswordsMoved_;
    private onValueCopied_;
    private onUndoButtonClick_;
    private onSearchEnterClick_;
    private onIronSelect_;
    private addThemedColors_;
    private onActionableErrorChanged_;
    private onTrustedVaultErrorDialogClose_;
}
declare global {
    interface HTMLElementTagNameMap {
        'password-manager-app': PasswordManagerAppElement;
    }
}
export {};
