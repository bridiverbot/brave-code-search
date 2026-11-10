import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ContentSettingsTypes } from './constants.js';
import type { RawSiteException, SiteException, SiteSettingsBrowserProxy } from './site_settings_browser_proxy.js';
type Constructor<T> = new (...args: any[]) => T;
export declare const SiteSettingsMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SiteSettingsMixinLitInterface>;
export interface SiteSettingsMixinLitInterface {
    browserProxy: SiteSettingsBrowserProxy;
    category?: ContentSettingsTypes;
    originRepresentation(origin: string): string;
    toUrl(originOrPattern: string): URL | null;
    expandSiteException(exception: RawSiteException): SiteException;
    sanitizePort(url: string): string;
}
export {};
