/**
 * @fileoverview
 * 'site-details-permission' handles showing the state of one permission, such
 * as Geolocation, for a given origin.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/shared/settings/md_select.css.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import '../i18n_setup.js';
import './site_details_permission_device_entry.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ChooserType, ContentSetting } from './constants.js';
import type { RawSiteException } from './site_settings_browser_proxy.js';
export interface SiteDetailsPermissionElement {
    $: {
        details: HTMLElement;
        permission: HTMLSelectElement;
        permissionItem: HTMLElement;
        permissionSecondary: HTMLElement;
    };
}
declare const SiteDetailsPermissionElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("./list_property_update_mixin.js").ListPropertyUpdateMixinInterface);
export declare class SiteDetailsPermissionElement extends SiteDetailsPermissionElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * If this is a sound content setting, then this controls whether it
         * should use "Automatic" instead of "Allow" as the default setting
         * allow label.
         */
        useAutomaticLabel: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * Controls whether the content setting should use "Block if site is
         * unfamiliar" as the default setting label.
         */
        useBlockIfUnfamiliarLabelForDefault: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * The site that this widget is showing details for, or null if this
         * widget should be hidden.
         */
        site: ObjectConstructor;
        /**
         * The default setting for this permission category.
         */
        defaultSetting_: StringConstructor;
        label: StringConstructor;
        icon: StringConstructor;
        /**
         * Expose ContentSetting enum to HTML bindings.
         */
        contentSettingEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSetting;
        };
        /**
         * Array of chooser exceptions to display in the widget.
         */
        chooserExceptions_: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * The chooser type that this element is displaying data for.
         * See site_settings/constants.js for possible values.
         */
        chooserType: {
            type: StringConstructor;
            value: ChooserType;
        };
        /**
         * If the permission for this category permission is blocked on the system
         * level, this will be populated with the key that can be used to look up
         * the warning to be shown in the UI.
         */
        systemPermissionWarningKey_: {
            type: StringConstructor;
            value: null;
            observer: string;
        };
    };
    static get observers(): string[];
    useAutomaticLabel: boolean;
    useBlockIfUnfamiliarLabelForDefault: boolean;
    site: RawSiteException;
    private chooserExceptions_;
    chooserType: ChooserType;
    private systemPermissionWarningKey_;
    private defaultSetting_;
    label: string;
    icon: string;
    connectedCallback(): void;
    /**
     * Update the chooser exception list for display.
     */
    private updateChooserExceptions_;
    private updateOsPermissionWarning_;
    /**
     * Process the chooser exception list returned from the native layer by
     * keeping the exception that is relevant to |this.site| and filtering out
     * sites of exception that doesn't match |this.site|.
     */
    private processChooserExceptions_;
    /**
     * Updates the drop-down value after |site| has changed. If |site| is null,
     * this element will hide.
     * @param site The site to display.
     */
    private siteChanged_;
    /**
     * Updates the default permission setting for this permission category.
     */
    private updateDefaultPermission_;
    /**
     * Handles the category permission changing for this origin.
     * @param category The permission category that has changed default
     *     permission.
     */
    private onDefaultSettingChanged_;
    /**
     * Handles the category permission changing for this origin.
     */
    private onPermissionSelectionChange_;
    /**
     * @param category The permission type.
     * @return if we should use the custom labels for the sound type.
     */
    private useCustomSoundLabels_;
    /**
     * Updates the string used for this permission category's default setting.
     * @param defaultSetting Value of the default setting for this permission
     *     category.
     * @param category The permission type.
     * @param useAutomaticLabel Whether to use the automatic label if the default
     *     setting value is allow.
     */
    private defaultSettingString_;
    /**
     * Updates the string used for this permission category's block setting.
     * @param category The permission type.
     * @param blockString 'Block' label.
     * @param muteString 'Mute' label.
     */
    private blockSettingString_;
    /**
     * @return true if |this| should be hidden.
     */
    private shouldHideCategory_;
    /**
     * Returns true if there's a string to display that provides more information
     * about this permission's setting. Currently, this only gets called when
     * |this.site| is updated.
     * @param source The source of the permission.
     * @param category The permission type.
     * @param setting The permission setting.
     * @return Whether the permission will have a source string to display.
     */
    private hasPermissionInfoString_;
    /**
     * Checks if there's a additional information to display, and returns the
     * class name to apply to permissions if so.
     * @param source The source of the permission.
     * @param category The permission type.
     * @param setting The permission setting.
     * @return CSS class applied when there is an additional description string.
     */
    private permissionInfoStringClass_;
    /**
     * @param source The source of the permission.
     * @return Whether this permission can be controlled by the user.
     */
    private isPermissionUserControlled_;
    /**
     * @param category The permission type.
     * @return Whether if the 'allow' option should be shown.
     */
    private showAllowedSetting_;
    /**
     * @param category The permission type.
     * @param setting The setting of the permission.
     * @param source The source of the permission.
     * @return Whether the 'ask' option should be shown.
     */
    private showAskSetting_;
    /**
     * @param messages The message with the blocked permission types.
     * @return The key to lookup the warning. Null if the warning is not to be
     * shown.
     */
    private setSystemPermissionWarningKey_;
    /** Attempts to open the system permission settings. */
    private onSystemPermissionSettingsLinkClick_;
    /**
     * @param category The permission type.
     * @return The text of the warning. Null if the warning is not to be shown.
     */
    private getSystemPermissionWarning_;
    /** Attaches the click action to the anchor element. */
    private attachSystemPermissionSettingsLinkClick_;
    /**
     * @return The text of the warning. Null if the permission is not blocked by
     *     the OS.
     */
    private hasSystemPermissionWarning_;
    /**
     * @param category The permission type.
     * @return The text of the warning. Null if the permission is not to be
     *     displayed.
     */
    private showSystemPermissionWarning_;
    /**
     * Returns true if the permission is set to a non-default 'ask'. Currently,
     * this only gets called when |this.site| is updated.
     * @param setting The setting of the permission.
     * @param source The source of the permission.
     */
    private isNonDefaultAsk_;
    /**
     * Updates the information string for the current permission.
     * Currently, this only gets called when |this.site| is updated.
     * @param source The source of the permission.
     * @param category The permission type.
     * @param setting The permission setting.
     * @param  allowlistString The string to show if the permission is
     *     allowlisted.
     * @param adsBlocklistString The string to show if the site is
     *     blocklisted for showing bad ads.
     * @param adsBlockString The string to show if ads are blocked, but
     *     the site is not blocklisted.
     * @return The permission information string to display in the HTML.
     */
    private permissionInfoString_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-details-permission': SiteDetailsPermissionElement;
    }
}
export {};
