import 'chrome://resources/cr_elements/cr_drawer/cr_drawer.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast_manager.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './activity_log/activity_log.js';
import './detail_view.js';
import './drop_overlay.js';
import './error_page.js';
import './install_warnings_dialog.js';
import './item_list.js';
import './item_util.js';
import './keyboard_shortcuts.js';
import './load_error.js';
import './options_dialog.js';
import './sidebar.js';
import './site_permissions/site_permissions.js';
import './site_permissions/site_permissions_by_site.js';
import './toolbar.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ActivityLogExtensionPlaceholder } from './activity_log/activity_log.js';
import type { ExtensionsItemListElement } from './item_list.js';
import type { ServiceInterface } from './service.js';
import type { ExtensionsToolbarElement } from './toolbar.js';
declare global {
    interface HTMLElementEventMap {
        'load-error': CustomEvent<Error | chrome.developerPrivate.LoadError>;
    }
}
export interface ExtensionsManagerElement {
    $: {
        scrollableShadow: HTMLElement;
        toolbar: ExtensionsToolbarElement;
        viewManager: CrViewManagerElement;
        itemsList: ExtensionsItemListElement;
    };
}
declare const ExtensionsManagerElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsManagerElement extends ExtensionsManagerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        canLoadUnpacked: {
            type: BooleanConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
        };
        isMv2DeprecationNoticeDismissed: {
            type: BooleanConstructor;
        };
        extensionsPinnedByDefault: {
            type: BooleanConstructor;
        };
        showActivityLog: {
            type: BooleanConstructor;
        };
        enableEnhancedSiteControls: {
            type: BooleanConstructor;
        };
        devModeControlledByPolicy: {
            type: BooleanConstructor;
        };
        isChildAccount_: {
            type: BooleanConstructor;
        };
        incognitoAvailable_: {
            type: BooleanConstructor;
        };
        filter: {
            type: StringConstructor;
        };
        /**
         * The item currently displayed in the error subpage. We use a separate
         * item for different pages (rather than a single subpageItem_ property)
         * so that hidden subpages don't update when an item updates. That is, we
         * don't want the details view subpage to update when the item shown in
         * the errors page updates, and vice versa.
         */
        errorPageItem_: {
            type: ObjectConstructor;
        };
        /**
         * The item currently displayed in the details view subpage. See also
         * errorPageItem_.
         */
        detailViewItem_: {
            type: ObjectConstructor;
        };
        /**
         * The item that provides some information about the current extension
         * for the activity log view subpage. See also errorPageItem_.
         */
        activityLogItem_: {
            type: ObjectConstructor;
        };
        extensions_: {
            type: ArrayConstructor;
        };
        apps_: {
            type: ArrayConstructor;
        };
        /**
         * Prevents page content from showing before data is first loaded.
         */
        didInitPage_: {
            type: BooleanConstructor;
        };
        narrow_: {
            type: BooleanConstructor;
        };
        showDrawer_: {
            type: BooleanConstructor;
        };
        showLoadErrorDialog_: {
            type: BooleanConstructor;
        };
        showInstallWarningsDialog_: {
            type: BooleanConstructor;
        };
        installWarnings_: {
            type: ArrayConstructor;
        };
        showOptionsDialog_: {
            type: BooleanConstructor;
        };
        /**
         * Whether the last page the user navigated from was the activity log
         * page.
         */
        fromActivityLog_: {
            type: BooleanConstructor;
        };
    };
    accessor canLoadUnpacked: boolean;
    accessor delegate: ServiceInterface;
    accessor inDevMode: boolean;
    accessor isMv2DeprecationNoticeDismissed: boolean;
    accessor extensionsPinnedByDefault: boolean;
    accessor showActivityLog: boolean;
    accessor enableEnhancedSiteControls: boolean;
    accessor devModeControlledByPolicy: boolean;
    protected accessor isChildAccount_: boolean;
    protected accessor incognitoAvailable_: boolean;
    accessor filter: string;
    protected accessor errorPageItem_: chrome.developerPrivate.ExtensionInfo | undefined;
    protected accessor detailViewItem_: chrome.developerPrivate.ExtensionInfo | undefined;
    protected accessor activityLogItem_: chrome.developerPrivate.ExtensionInfo | ActivityLogExtensionPlaceholder | undefined;
    protected accessor extensions_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor apps_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor didInitPage_: boolean;
    protected accessor narrow_: boolean;
    protected accessor showDrawer_: boolean;
    protected accessor showLoadErrorDialog_: boolean;
    protected accessor showInstallWarningsDialog_: boolean;
    protected accessor installWarnings_: string[] | null;
    protected accessor showOptionsDialog_: boolean;
    protected accessor fromActivityLog_: boolean;
    /**
     * A promise resolver for any external files waiting for initPage_ to be
     * called after the extensions info has been fetched.
     */
    private pageInitializedResolver_;
    /**
     * The current page being shown. Default to null, and initPage_ will figure
     * out the initial page based on url.
     */
    private currentPage_;
    /**
     * The ID of the listener on |navigation|. Stored so that the
     * listener can be removed when this element is detached (happens in tests).
     */
    private navigationListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @return the promise of `pageInitializedResolver_` so tests can wait for the
     * page to be initialized.
     */
    whenPageInitializedForTest(): Promise<void>;
    /**
     * Initializes the page to reflect what's specified in the url so that if
     * the user visits chrome://extensions/?id=..., we land on the proper page.
     */
    private initPage_;
    protected onNarrowChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onItemStateChanged_;
    protected onSearchChanged_(event: CustomEvent<string>): void;
    protected onCrToolbarMenuClick_(): void;
    /**
     * @return The ID of the list that the item belongs in.
     */
    private getListId_;
    /**
     * @param listId The list to look for the item in.
     * @param itemId The id of the item to look for.
     * @return The index of the item in the list, or -1 if not found.
     */
    private getIndexInList_;
    private getData_;
    /**
     * Categorizes |extensionsAndApps| to apps and extensions and initializes
     * those lists.
     */
    private initExtensionsAndApps_;
    /**
     * Creates and adds a new extensions-item element to the list, inserting it
     * into its sorted position in the relevant section.
     * @param item The extension the new element is representing.
     */
    private addItem_;
    private getListFromId_;
    private updateList_;
    /**
     * @param item The data for the item to update.
     */
    private updateItem_;
    private focusAfterItemRemoved_;
    /**
     * @param itemId The id of item to remove.
     */
    private removeItem_;
    private onLoadError_;
    /**
     * Changes the active page selection.
     */
    private changePage_;
    /**
     * This method detaches the drawer dialog completely. Should only be
     * triggered by the dialog's 'close' event.
     */
    protected onDrawerClose_(): void;
    /**
     * This method animates the closing of the drawer.
     */
    protected onCloseDrawer_(): void;
    protected onLoadErrorDialogClose_(): void;
    protected onOptionsDialogClose_(): void;
    private onViewEnterStart_;
    private onViewExitStart_;
    private onViewExitFinish_;
    protected onShowInstallWarnings_(e: CustomEvent<string[]>): void;
    protected onInstallWarningsDialogClose_(): void;
    /**
     * Show a toast when an unpacked extension becomes disabled when the user is
     * not in developer mode.
     */
    private showUnsupportedDeveloperExtensionDisabledToast_;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-manager': ExtensionsManagerElement;
    }
}
export {};
