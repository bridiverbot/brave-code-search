import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '../i18n_setup.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import './safety_hub_module.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { UnusedSitePermissions } from './safety_hub_browser_proxy.js';
import type { SettingsSafetyHubModuleElement, SiteInfo } from './safety_hub_module.js';
export interface SettingsSafetyHubUnusedSitePermissionsModuleElement {
    $: {
        headerActionMenu: CrActionMenuElement;
        bulkUndoButton: HTMLElement;
        gotItButton: HTMLElement;
        goToSettings: HTMLElement;
        module: SettingsSafetyHubModuleElement;
        moreActionButton: HTMLElement;
        toastUndoButton: HTMLElement;
        undoToast: CrToastElement;
    };
}
/**
 * Information about unused site permissions with an additional detail field to
 * extend SiteInfo.
 */
interface UnusedSitePermissionsDisplay extends UnusedSitePermissions, SiteInfo {
    detail: string;
}
declare const SettingsSafetyHubUnusedSitePermissionsModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../tooltip_mixin_lit.js").TooltipMixinLitInterface);
export declare class SettingsSafetyHubUnusedSitePermissionsModuleElement extends SettingsSafetyHubUnusedSitePermissionsModuleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        headerString_: {
            type: StringConstructor;
        };
        subheaderString_: {
            type: StringConstructor;
        };
        sites_: {
            type: ArrayConstructor;
        };
        toastText_: {
            type: StringConstructor;
        };
        shouldShowCompletionInfo_: {
            type: BooleanConstructor;
        };
    };
    protected accessor headerString_: string;
    protected accessor subheaderString_: string;
    protected accessor toastText_: string | null;
    protected accessor sites_: UnusedSitePermissionsDisplay[] | null;
    protected accessor shouldShowCompletionInfo_: boolean;
    private lastUnusedSitePermissionsAllowedAgain_;
    private lastUnusedSitePermissionsListAcknowledged_;
    private renderedOrigins_;
    private lastUserAction_;
    private pendingFocusCallback_;
    private eventTracker_;
    private browserProxy_;
    private metricsBrowserProxy_;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    currentRouteChanged(currentRoute: Route): void;
    /**
     * Text that describes which permissions have been revoked for an origin.
     * Permissions are listed explicitly when there are up to and including 3.
     * For 4 or more, the two first permissions are listed explicitly and for
     * the remaining ones a count is shown, e.g. 'and 2 more'.
     */
    private getPermissionsText_;
    /** Clears all the changes made by a previous action. */
    private resetValues;
    protected onShModuleItemButtonClick_(event: CustomEvent<UnusedSitePermissions>): void;
    protected onGotItClick_(e: Event): Promise<void>;
    protected onMoreActionClick_(e: Event): void;
    protected onGoToSettingsClick_(e: Event): void;
    private onUnusedSitePermissionListChanged_;
    private setHeaderToCompletionState_;
    private onSitesChanged_;
    protected onUndoClick_(e: Event): void;
    /**
     * Show info that review is completed when there are no permissions left.
     */
    private computeShouldShowCompletionInfo_;
    private undoLastAction_;
    private onKeyDown_;
    protected onBulkUndoButtonFocus_(e: Event): void;
    protected onBulkUndoButtonMouseenter_(e: Event): void;
    private showUndoTooltip_;
    private doesSiteListIncludeAbusiveNotifications;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-unused-site-permissions-module': SettingsSafetyHubUnusedSitePermissionsModuleElement;
    }
}
export {};
