import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import './brave_sync_subpage.js';
import './brave_sync_manage_devices_page.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { SyncBrowserProxy, SyncPrefs } from '/shared/settings/people_page/sync_browser_proxy.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { Route } from '../router.js';
import { RouteObserverMixinInterface } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import { SearchableViewContainerMixinInterface } from '../settings_page/searchable_view_container_mixin.js';
import { BraveSyncBrowserProxy, BraveSyncStatus } from './brave_sync_browser_proxy.js';
/**
 * @fileoverview
 * 'settings-brave-sync-page-index' is the settings page containing brave's
 * custom sync.
 */
declare const SettingsBraveSyncPageElementBase: {
    new (): PolymerElement & WebUiListenerMixinInterface & I18nMixinInterface & RouteObserverMixinInterface & SearchableViewContainerMixinInterface;
};
export interface SettingsBraveSyncPageElement {
    $: {
        viewManager: CrViewManagerElement;
    };
}
export declare class SettingsBraveSyncPageElement extends SettingsBraveSyncPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The current sync status, supplied by SyncBrowserProxy.
         * @type {?SyncStatus}
         */
        syncStatus_: ObjectConstructor;
        isEncryptionSet_: {
            type: BooleanConstructor;
            value: boolean;
        };
        syncLabel_: {
            type: StringConstructor;
            computed: string;
        };
    };
    private syncStatus_;
    private isEncryptionSet_;
    private syncLabel_;
    browserProxy_: SyncBrowserProxy;
    braveBrowserProxy_: BraveSyncBrowserProxy;
    computeSyncLabel_(): string;
    connectedCallback(): void;
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    handleSyncStatus_(syncStatus: BraveSyncStatus): void;
    /**
     * Handler for when the sync preferences are updated.
     */
    handleSyncPrefsChanged_(syncPrefs: SyncPrefs): Promise<void>;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export {};
