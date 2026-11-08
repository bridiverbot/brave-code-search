/**
 * @fileoverview
 * 'file-system-site-details' shows the individual permission grant details
 * for permissions granted via the File System Access API, under Site Settings.
 */
import './file_system_site_entry_item.js';
import '../settings_page/settings_subpage.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
import type { FileSystemGrant, OriginFileSystemGrants } from './file_system_site_list.js';
declare global {
    interface HTMLElementEventMap {
        'revoke-grant': CustomEvent<FileSystemGrant>;
    }
}
declare const FileSystemSiteDetailsElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface);
export declare class FileSystemSiteDetailsElement extends FileSystemSiteDetailsElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Use the string representing the origin or extension name as the page
         * title of the settings-subpage parent.
         */
        pageTitle_: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
         * The origin that this details page is showing information for.
         */
        origin_: StringConstructor;
        /**
         * An Object representing an origin and its associated permission grants.
         */
        grantsPerOrigin: ObjectConstructor;
    };
    private pageTitle_;
    private origin_;
    grantsPerOrigin: OriginFileSystemGrants;
    connectedCallback(): void;
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route: Route, oldRoute?: Route): void;
    /**
     * Retrieves a list of all known origins with allowed permissions,
     * granted via the File System Access API.
     */
    private populateList_;
    /**
     * Revoke an individual permission grant for a given origin and filePath,
     * then update the list displayed on the UI.
     */
    private onRevokeGrant_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-system-site-details': FileSystemSiteDetailsElement;
    }
}
export {};
