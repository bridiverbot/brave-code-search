/**
 * @fileoverview
 * 'storage-access-site-list' is an element representing a list of storage
 * access permissions group with the same type of permission (e.g. allow,
 * block).
 */
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './storage_access_site_list_entry.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { ContentSetting } from './constants.js';
export interface StorageAccessSiteListElement {
    $: {
        listContainer: HTMLElement;
    };
}
declare const StorageAccessSiteListElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("./list_property_update_mixin.js").ListPropertyUpdateMixinInterface);
export declare class StorageAccessSiteListElement extends StorageAccessSiteListElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Header shown for the |categorySubtype|.
         */
        categoryHeader: StringConstructor;
        /**
         * Array of group of storage access site exceptions of |categorySubtype|
         * to display in the widget.
         */
        storageAccessExceptions_: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * The type of category this widget is displaying data for. Normally
         * either 'allow' or 'block', representing which sites are allowed or
         * blocked respectively from Storage Access while embedded on another
         * site.
         */
        categorySubtype: {
            type: StringConstructor;
            value: string;
        };
        searchFilter: {
            type: StringConstructor;
            observer: string;
        };
    };
    static get observers(): string[];
    categorySubtype: ContentSetting;
    categoryHeader: string;
    searchFilter: string;
    private storageAccessExceptions_;
    connectedCallback(): void;
    /**
     * Populates the StorageAccessSiteList for display.
     */
    private populateList_;
    /**
     * Whether there are any results to show to the user according with the
     * |searchFilter|.
     */
    private showNoSearchResults_;
    /**
     * Whether there are any storage access site exceptions of |categorySubtype|.
     */
    private hasExceptions_;
    /**
     * Returns the filtered |StorageAccessSiteException|s that match the
     * |searchFilter|.
     *
     * It looks for matches in |displayName|, and |origin|. If the |origin| or
     * |displayName| don't match, it looks for matches in |embeddingDisplayName|,
     * and |embeddingOrigin|.
     */
    private getFilteredExceptions_;
    private getFilteredEmbeddingExceptions_;
}
declare global {
    interface HTMLElementTagNameMap {
        'storage-access-site-list': StorageAccessSiteListElement;
    }
}
export {};
