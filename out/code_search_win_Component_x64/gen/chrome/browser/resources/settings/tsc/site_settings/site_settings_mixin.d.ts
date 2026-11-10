/**
 * @fileoverview Behavior common to Site Settings classes.
 */
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { ContentSettingsTypes } from './constants.js';
import type { RawSiteException, SiteException, SiteSettingsBrowserProxy } from './site_settings_browser_proxy.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SiteSettingsMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<SiteSettingsMixinInterface>;
export interface SiteSettingsMixinInterface {
    browserProxy: SiteSettingsBrowserProxy;
    category: ContentSettingsTypes;
    originRepresentation(origin: string): string;
    toUrl(originOrPattern: string): URL | null;
    expandSiteException(exception: RawSiteException): SiteException;
    sanitizePort(url: string): string;
}
export {};
