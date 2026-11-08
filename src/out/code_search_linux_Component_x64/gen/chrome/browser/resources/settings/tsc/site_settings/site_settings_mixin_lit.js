// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Behavior common to Site Settings classes in Lit.
 */
import { dedupingMixin } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SiteSettingSource } from './constants.js';
import { SiteSettingsBrowserProxyImpl } from './site_settings_browser_proxy.js';
export const SiteSettingsMixinLit = dedupingMixin((superClass) => {
    class SiteSettingsMixinLit extends superClass {
        static get properties() {
            return {
                /**
                 * The string ID of the category this element is displaying data
                 * for. See site_settings/constants.js for possible values.
                 */
                category: { type: String },
            };
        }
        #category_accessor_storage = undefined;
        get category() { return this.#category_accessor_storage; }
        set category(value) { this.#category_accessor_storage = value; }
        browserProxy = SiteSettingsBrowserProxyImpl.getInstance();
        /**
         * Ensures the URL has a scheme (assumes http if omitted).
         * @param url The URL with or without a scheme.
         * @return The URL with a scheme, or an empty string.
         */
        ensureUrlHasScheme(url) {
            if (url.length === 0) {
                return url;
            }
            return /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(url) ? url :
                'http://' + url;
        }
        /**
         * Removes redundant ports, such as port 80 for http and 443 for https.
         * @param url The URL to sanitize.
         * @return The URL without redundant ports, if any.
         */
        sanitizePort(url) {
            const urlWithScheme = this.ensureUrlHasScheme(url);
            if (urlWithScheme.startsWith('https://') &&
                urlWithScheme.endsWith(':443')) {
                return url.slice(0, -4);
            }
            if (urlWithScheme.startsWith('http://') &&
                urlWithScheme.endsWith(':80')) {
                return url.slice(0, -3);
            }
            return url;
        }
        /**
         * Converts a string origin/pattern to a URL.
         * @param originOrPattern The origin/pattern to convert to URL.
         * @return The URL to return (or null if origin is not a valid URL).
         */
        toUrl(originOrPattern) {
            if (originOrPattern.length === 0) {
                return null;
            }
            // Strip wildcard schemes and subdomain wildcards from content setting
            // patterns before ensuring a concrete scheme for the URL constructor.
            originOrPattern = originOrPattern.replace(/^\*:\/\/|\[\*\.\]/g, '');
            try {
                return new URL(this.ensureUrlHasScheme(originOrPattern));
            }
            catch {
                return null;
            }
        }
        /**
         * @return a user-friendly name for the origin.
         */
        originRepresentation(origin) {
            const url = this.toUrl(origin);
            return url ? (url.host || url.origin) : '';
        }
        /**
         * Convert an exception (received from the C++ handler) to a full
         * SiteException.
         * @param exception The raw site exception from C++.
         * @return The expanded (full) SiteException.
         */
        expandSiteException(exception) {
            const origin = exception.origin;
            const embeddingOrigin = exception.embeddingOrigin;
            let enforcement = null;
            if (exception.source === SiteSettingSource.EXTENSION ||
                exception.source === SiteSettingSource.HOSTED_APP ||
                exception.source === SiteSettingSource.POLICY) {
                enforcement = chrome.settingsPrivate.Enforcement.ENFORCED;
            }
            let controlledBy = chrome.settingsPrivate.ControlledBy.PRIMARY_USER;
            if (exception.source === SiteSettingSource.EXTENSION ||
                exception.source === SiteSettingSource.HOSTED_APP) {
                controlledBy = chrome.settingsPrivate.ControlledBy.EXTENSION;
            }
            else if (exception.source === SiteSettingSource.POLICY) {
                controlledBy = chrome.settingsPrivate.ControlledBy.USER_POLICY;
            }
            return {
                category: exception.type,
                embeddingOrigin: embeddingOrigin,
                incognito: exception.incognito,
                isEmbargoed: exception.isEmbargoed,
                origin: origin,
                displayName: exception.displayName,
                setting: exception.setting,
                description: exception.description,
                enforcement: enforcement,
                controlledBy: controlledBy,
            };
        }
    }
    return SiteSettingsMixinLit;
});
