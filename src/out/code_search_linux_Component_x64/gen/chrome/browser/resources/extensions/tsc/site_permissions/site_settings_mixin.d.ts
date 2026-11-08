/**
 * @fileoverview Provides behavior to fetch the list of user specified permitted
 * and restricted sites on creation and when these lists are updated. Used by
 * multiple pages.
 */
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import type { ItemDelegate } from '../item.js';
import { DummyItemDelegate, FakeChromeEvent } from '../item.js';
export interface SiteSettingsDelegate {
    getUserSiteSettings(): Promise<chrome.developerPrivate.UserSiteSettings>;
    addUserSpecifiedSites(siteSet: chrome.developerPrivate.SiteSet, hosts: string[]): Promise<void>;
    removeUserSpecifiedSites(siteSet: chrome.developerPrivate.SiteSet, hosts: string[]): Promise<void>;
    getUserAndExtensionSitesByEtld(): Promise<chrome.developerPrivate.SiteGroup[]>;
    getMatchingExtensionsForSite(site: string): Promise<chrome.developerPrivate.MatchingExtensionInfo[]>;
    updateSiteAccess(site: string, updates: chrome.developerPrivate.ExtensionSiteAccessUpdate[]): Promise<void>;
    getUserSiteSettingsChangedTarget(): ChromeEvent<(settings: chrome.developerPrivate.UserSiteSettings) => void>;
}
export declare class DummySiteSettingsDelegate {
    getUserSiteSettings(): Promise<{
        permittedSites: never[];
        restrictedSites: never[];
    }>;
    addUserSpecifiedSites(_siteSet: chrome.developerPrivate.SiteSet, _hosts: string[]): Promise<void>;
    removeUserSpecifiedSites(_siteSet: chrome.developerPrivate.SiteSet, _hosts: string[]): Promise<void>;
    getUserAndExtensionSitesByEtld(): Promise<never[]>;
    getMatchingExtensionsForSite(_site: string): Promise<never[]>;
    updateSiteAccess(_site: string, _updates: chrome.developerPrivate.ExtensionSiteAccessUpdate[]): Promise<void>;
    getUserSiteSettingsChangedTarget(): FakeChromeEvent;
}
export declare class DummySiteSettingsMixinDelegate extends DummyItemDelegate {
    getUserSiteSettings(): Promise<{
        permittedSites: never[];
        restrictedSites: never[];
    }>;
    addUserSpecifiedSites(_siteSet: chrome.developerPrivate.SiteSet, _hosts: string[]): Promise<void>;
    removeUserSpecifiedSites(_siteSet: chrome.developerPrivate.SiteSet, _hosts: string[]): Promise<void>;
    getUserAndExtensionSitesByEtld(): Promise<never[]>;
    getMatchingExtensionsForSite(_site: string): Promise<never[]>;
    updateSiteAccess(_site: string, _updates: chrome.developerPrivate.ExtensionSiteAccessUpdate[]): Promise<void>;
    getUserSiteSettingsChangedTarget(): FakeChromeEvent;
}
type Constructor<T> = new (...args: any[]) => T;
export declare const SiteSettingsMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SiteSettingsMixinInterface>;
export interface SiteSettingsMixinInterface {
    delegate: ItemDelegate & SiteSettingsDelegate;
    enableEnhancedSiteControls: boolean;
    permittedSites: string[];
    restrictedSites: string[];
}
export {};
