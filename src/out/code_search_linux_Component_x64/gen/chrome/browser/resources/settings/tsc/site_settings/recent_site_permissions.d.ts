import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import '../i18n_setup.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FocusConfig } from '../focus_config.js';
import type { Route } from '../router.js';
export interface SettingsRecentSitePermissionsElement {
    $: {
        tooltip: CrTooltipElement;
    };
}
declare const SettingsRecentSitePermissionsElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../site_settings/site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../tooltip_mixin.js").TooltipMixinInterface);
export declare class SettingsRecentSitePermissionsElement extends SettingsRecentSitePermissionsElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        noRecentPermissions: {
            type: BooleanConstructor;
            computed: string;
            notify: boolean;
        };
        shouldFocusAfterPopulation_: BooleanConstructor;
        /**
         * List of recent site permissions grouped by source.
         */
        recentSitePermissionsList_: {
            type: ArrayConstructor;
            value: () => never[];
        };
    };
    noRecentPermissions: boolean;
    private shouldFocusAfterPopulation_;
    private recentSitePermissionsList_;
    private lastSelected_;
    constructor();
    getFocusConfig(): FocusConfig;
    /**
     * Reload the site recent site permission list whenever the user navigates
     * to the site settings page.
     */
    currentRouteChanged(currentRoute: Route): void;
    ready(): void;
    /**
     * @return a user-friendly name for the origin a set of recent permissions
     *     is associated with.
     */
    private getDisplayName_;
    /**
     * @return the site scheme for the origin of a set of recent permissions.
     */
    private getSiteScheme_;
    /**
     * @return the display text which describes the set of recent permissions.
     */
    private getPermissionsText_;
    /**
     * @return the display sentence which groups the provided |exceptions|
     *    together and applies the appropriate description based on |setting|.
     */
    private getPermissionGroupText_;
    /**
     * @return the correct CSS class to apply depending on this recent site
     *     permissions entry based on the index.
     */
    private getClassForIndex_;
    /**
     * @return true if there are no recent site permissions to display
     */
    private computeNoRecentPermissions_;
    /**
     * Called for when incognito is enabled or disabled. Only called on change
     * (opening N incognito windows only fires one message). Another message is
     * sent when the *last* incognito window closes.
     */
    private onIncognitoStatusChanged_;
    /**
     * A handler for selecting a recent site permissions entry.
     */
    private onRecentSitePermissionClick_;
    private onShowIncognitoTooltip_;
    /**
     * Called after the list has finished populating and |lastSelected_| contains
     * a valid entry that should attempt to be focused. If lastSelected_ cannot
     * be found the index where it used to be is focused. This may result in
     * focusing another link arrow, or an incognito information icon. If the
     * recent permission list is empty, focus is lost.
     */
    private focusLastSelected_;
    /**
     * Retrieve the list of recently changed permissions and implicitly trigger
     * the update of the display list.
     */
    private populateList_;
    /**
     * Called when the dom-repeat DOM has changed. This allows updating the
     * focused element after the elements have been adjusted.
     */
    private onDomChange_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-recent-site-permissions': SettingsRecentSitePermissionsElement;
    }
}
export {};
