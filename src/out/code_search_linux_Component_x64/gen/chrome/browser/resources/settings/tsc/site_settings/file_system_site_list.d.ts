/**
 * @fileoverview
 * 'file-system-site-list' is an element representing a list of origin-specific
 * permission entries for the File System Access API.
 */
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../settings_shared.css.js';
import './file_system_site_entry.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { Route } from '../router.js';
export interface FileSystemGrant {
    isDirectory: boolean;
    displayName: string;
    filePath: string;
}
export interface OriginFileSystemGrants {
    origin: string;
    viewGrants: FileSystemGrant[];
    editGrants: FileSystemGrant[];
}
declare global {
    interface HTMLElementEventMap {
        'revoke-grants': CustomEvent<OriginFileSystemGrants>;
    }
}
declare const FileSystemSiteListElementBase: typeof PolymerElement & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface);
export declare class FileSystemSiteListElement extends FileSystemSiteListElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Array of the File System permission grants that are actively displayed,
         * grouped by origin.
         */
        allowedGrants_: {
            type: ArrayConstructor;
            value: () => never[];
        };
    };
    private allowedGrants_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Reload the site list when the chrome://settings/content/filesystem
     * page is visited.
     *
     * RouteObserverMixin
     */
    currentRouteChanged(currentRoute: Route, oldRoute?: Route): void;
    /**
     * Retrieves a list of all known origins with allowed permissions,
     * granted via the File System Access API.
     */
    private populateList_;
    /**
     * Determines whether there are any allowed File System Access permission
     * grants.
     */
    private hasAllowedGrants_;
    /**
     * Revoke all permission grants for a given origin, then update the list
     * displayed on the UI.
     */
    private onRevokeGrants_;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-system-site-list': FileSystemSiteListElement;
    }
}
export {};
