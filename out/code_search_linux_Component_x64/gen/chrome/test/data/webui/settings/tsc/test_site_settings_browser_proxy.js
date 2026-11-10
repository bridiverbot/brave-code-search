// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { assert } from 'chrome://resources/js/assert.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { ContentSetting, ContentSettingsTypes, SiteSettingSource } from 'chrome://settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { loadTimeData } from 'chrome://settings/settings.js';
import { createOriginInfo, createSiteGroup, createSiteSettingsPrefs, getContentSettingsTypeFromChooserType } from './test_util.js';
// clang-format on
/**
 * A test version of SiteSettingsBrowserProxy. Provides helper methods
 * for allowing tests to know when a method was called, as well as
 * specifying mock responses.
 */
export class TestSiteSettingsBrowserProxy extends TestBrowserProxy {
    hasIncognito_ = false;
    categoryList_;
    prefs_;
    zoomList_ = [];
    appAllowedProtocolHandlers_ = [];
    appDisallowedProtocolHandlers_ = [];
    protocolHandlers_ = [];
    ignoredProtocols_ = [];
    isOriginValid_ = true;
    isPatternValidForType_ = true;
    recentSitePermissions_ = [];
    fileSystemGrantsList_ = [];
    storageAccessExceptionList_ = [];
    subAppsPermissionExplanation_ = {
        isSubApp: false,
        hasSubApps: false,
    };
    constructor() {
        super([
            'fetchBlockAutoplayStatus',
            'fetchZoomLevels',
            'getAllSites',
            'getCategoryList',
            'getChooserExceptionList',
            'getDefaultValueForContentType',
            'getFormattedBytes',
            'getExceptionList',
            'getStorageAccessExceptionList',
            'getOriginPermissions',
            'isOriginValid',
            'isPatternValidForType',
            'observeAppProtocolHandlers',
            'observeProtocolHandlers',
            'observeProtocolHandlersEnabledState',
            'removeAppAllowedHandler',
            'removeAppDisallowedHandler',
            'removeIgnoredHandler',
            'removeProtocolHandler',
            'removeZoomLevel',
            'resetCategoryPermissionForPattern',
            'resetChooserExceptionForSite',
            'setCategoryPermissionForPattern',
            'setDefaultValueForContentType',
            'setOriginPermissions',
            'setProtocolDefault',
            'setProtocolHandlerDefault',
            'updateIncognitoStatus',
            'clearSiteGroupDataAndCookies',
            'clearUnpartitionedOriginDataAndCookies',
            'clearPartitionedOriginDataAndCookies',
            'recordAction',
            'getRecentSitePermissions',
            'getRwsMembershipLabel',
            'getNumCookiesString',
            'getSystemDeniedPermissions',
            'openSystemPermissionSettings',
            'getSubAppsPermissionExplanation',
            'getExtensionName',
            'getFileSystemGrants',
            'revokeFileSystemGrant',
            'revokeFileSystemGrants',
            'setBlockAutoplayEnabled',
            'initializeCaptureDevices',
            'setPreferredCaptureDevice',
        ]);
        this.categoryList_ = [
            ContentSettingsTypes.ADS,
            ContentSettingsTypes.AR,
            ContentSettingsTypes.AUTO_PICTURE_IN_PICTURE,
            ContentSettingsTypes.AUTOMATIC_DOWNLOADS,
            ContentSettingsTypes.AUTOMATIC_FULLSCREEN,
            ContentSettingsTypes.BACKGROUND_SYNC,
            ContentSettingsTypes.BLUETOOTH_DEVICES,
            ContentSettingsTypes.BLUETOOTH_SCANNING,
            ContentSettingsTypes.CAMERA,
            ContentSettingsTypes.CLIPBOARD,
            ContentSettingsTypes.FEDERATED_IDENTITY_API,
            ContentSettingsTypes.FILE_SYSTEM_WRITE,
            ContentSettingsTypes.GEOLOCATION,
            ContentSettingsTypes.HID_DEVICES,
            ContentSettingsTypes.IDLE_DETECTION,
            ContentSettingsTypes.IMAGES,
            ContentSettingsTypes.JAVASCRIPT,
            ContentSettingsTypes.JAVASCRIPT_OPTIMIZER,
            ContentSettingsTypes.LOCAL_FONTS,
            ContentSettingsTypes.MIC,
            ContentSettingsTypes.MIDI_DEVICES,
            ContentSettingsTypes.MIXEDSCRIPT,
            ContentSettingsTypes.NOTIFICATIONS,
            ContentSettingsTypes.PAYMENT_HANDLER,
            ContentSettingsTypes.POPUPS,
            ContentSettingsTypes.PROTECTED_CONTENT,
            ContentSettingsTypes.SENSORS,
            ContentSettingsTypes.SERIAL_PORTS,
            ContentSettingsTypes.SOUND,
            ContentSettingsTypes.USB_DEVICES,
            ContentSettingsTypes.VR,
            ContentSettingsTypes.WEB_APP_INSTALLATION,
            ContentSettingsTypes.WINDOW_MANAGEMENT,
        ];
        if (loadTimeData.getBoolean('enableCapturedSurfaceControl')) {
            this.categoryList_.push(ContentSettingsTypes.CAPTURED_SURFACE_CONTROL);
        }
        if (loadTimeData.getBoolean('enableHandTrackingContentSetting')) {
            this.categoryList_.push(ContentSettingsTypes.HAND_TRACKING);
        }
        if (loadTimeData.getBoolean('enableKeyboardLockPrompt')) {
            this.categoryList_.push(ContentSettingsTypes.KEYBOARD_LOCK);
        }
        // 
        // If LNA is enabled, we show the combo of LOCAL_NETWORK and
        // LOOPBACK_NETWORK settings.
        if (loadTimeData.getBoolean('enableLocalNetworkAccessSetting')) {
            this.categoryList_.push(ContentSettingsTypes.LOCAL_NETWORK);
            this.categoryList_.push(ContentSettingsTypes.LOOPBACK_NETWORK);
        }
        this.prefs_ = createSiteSettingsPrefs([], [], []);
    }
    /**
     * Test/fake implementation for {@link getCategoryList}.
     * @param origin the origin for the list of visible permissions.
     */
    getCategoryListForTest(_origin) {
        return this.categoryList_;
    }
    setCategoryList(list) {
        this.categoryList_ = list;
    }
    /**
     * Pretends an incognito session started or ended.
     * @param hasIncognito True for session started.
     */
    setIncognito(hasIncognito) {
        this.hasIncognito_ = hasIncognito;
        webUIListenerCallback('onIncognitoStatusChanged', hasIncognito);
    }
    /**
     * Sets the prefs to use when testing.
     */
    setPrefs(prefs) {
        this.prefs_ = prefs;
        // Notify all listeners that their data may be out of date.
        for (const type in prefs.defaults) {
            webUIListenerCallback('contentSettingCategoryChanged', type);
        }
        for (const type in this.prefs_.exceptions) {
            const exceptionList = this.prefs_.exceptions[type];
            for (let i = 0; i < exceptionList.length; ++i) {
                webUIListenerCallback('contentSettingSitePermissionChanged', type, exceptionList[i].origin, '');
            }
        }
        for (const type in this.prefs_.chooserExceptions) {
            const chooserExceptionList = this.prefs_.chooserExceptions[type];
            for (let i = 0; i < chooserExceptionList.length; ++i) {
                webUIListenerCallback('contentSettingChooserPermissionChanged', type);
            }
        }
    }
    /**
     * Sets one exception for a given category, replacing any existing exceptions
     * for the same origin. Note this ignores embedding origins.
     * @param category The category the new exception belongs to.
     * @param newException The new preference to add/replace.
     */
    setSingleException(category, newException) {
        // Remove entries from the current prefs which have the same origin.
        const newPrefs = /** @type {!Array<RawSiteException>} */ (this.prefs_.exceptions[category].filter((categoryException) => {
            return categoryException.origin !== newException.origin;
        }));
        newPrefs.push(newException);
        this.prefs_.exceptions[category] = newPrefs;
        webUIListenerCallback('contentSettingSitePermissionChanged', category, newException.origin);
    }
    /**
     * Sets the prefs to use when testing.
     */
    setZoomList(list) {
        this.zoomList_ = list;
    }
    /**
     * Sets the prefs to use when testing.
     */
    setProtocolHandlers(list) {
        // Shallow copy of the passed-in array so mutation won't impact the source
        this.protocolHandlers_ = list.slice();
    }
    /**
     * Sets the prefs to use when testing.
     * @param list The web app protocol handlers list to set.
     */
    setAppAllowedProtocolHandlers(list) {
        // Shallow copy of the passed-in array so mutation won't impact the source
        this.appAllowedProtocolHandlers_ = list.slice();
    }
    /**
     * Sets the prefs to use when testing.
     * @param list The web app protocol handlers list to set.
     */
    setAppDisallowedProtocolHandlers(list) {
        // Shallow copy of the passed-in array so mutation won't impact the source
        this.appDisallowedProtocolHandlers_ = list.slice();
    }
    /**
     * Sets the prefs to use when testing.
     */
    setIgnoredProtocols(list) {
        // Shallow copy of the passed-in array so mutation won't impact the source
        this.ignoredProtocols_ = list.slice();
    }
    setDefaultValueForContentType(contentType, defaultValue) {
        this.methodCalled('setDefaultValueForContentType', [contentType, defaultValue]);
    }
    setOriginPermissions(origin, category, blanketSetting) {
        const contentTypes = category ? [category] : this.getCategoryListForTest(origin);
        for (let i = 0; i < contentTypes.length; ++i) {
            const type = contentTypes[i];
            const exceptionList = this.prefs_.exceptions[type];
            for (let j = 0; j < exceptionList.length; ++j) {
                let effectiveSetting = blanketSetting;
                if (blanketSetting === ContentSetting.DEFAULT) {
                    effectiveSetting = this.prefs_.defaults[type].setting;
                    exceptionList[j].source = SiteSettingSource.DEFAULT;
                }
                exceptionList[j].setting = effectiveSetting;
            }
        }
        this.setPrefs(this.prefs_);
        this.methodCalled('setOriginPermissions', [origin, category, blanketSetting]);
    }
    getAllSites() {
        this.methodCalled('getAllSites');
        const contentTypes = this.getCategoryListForTest('https://example.com');
        const origins_set = new Set();
        contentTypes.forEach((contentType) => {
            this.prefs_.exceptions[contentType].forEach((exception) => {
                if (exception.origin.includes('*')) {
                    return;
                }
                origins_set.add(exception.origin);
            });
        });
        const origins_array = [...origins_set];
        const result = [];
        origins_array.forEach((origin, index) => {
            // Functionality to get the eTLD+1 from an origin exists only on the
            // C++ side, so just do an (incorrect) approximate extraction here.
            const host = new URL(origin).host;
            let urlParts = host.split('.');
            urlParts = urlParts.slice(Math.max(urlParts.length - 2, 0));
            const etldPlus1Name = urlParts.join('.');
            const existing = result.find(siteGroup => {
                return siteGroup.etldPlus1 === etldPlus1Name;
            });
            const mockUsage = index * 100;
            // TODO(crbug.com/40106241): Add test where existing evaluates to
            // true.
            if (existing) {
                const originInfo = createOriginInfo(origin, { usage: mockUsage });
                existing.origins.push(originInfo);
            }
            else {
                const entry = createSiteGroup(etldPlus1Name, etldPlus1Name, [origin], mockUsage);
                result.push(entry);
            }
        });
        return Promise.resolve(result);
    }
    getCategoryList(origin) {
        this.methodCalled('getCategoryList', origin);
        return Promise.resolve(this.getCategoryListForTest(origin));
    }
    getFormattedBytes(numBytes) {
        this.methodCalled('getFormattedBytes', numBytes);
        return Promise.resolve(`${numBytes} B`);
    }
    getDefaultValueForContentType(contentType) {
        this.methodCalled('getDefaultValueForContentType', contentType);
        const pref = this.prefs_.defaults[contentType];
        assert(pref !== undefined, 'Pref is missing for ' + contentType);
        return Promise.resolve(pref);
    }
    getExceptionList(contentType) {
        // Defer |methodCalled| call so that |then| callback for the promise
        // returned from this method runs before the one for the promise returned
        // from |whenCalled| calls in tests.
        // TODO(b/297567461): Remove once the flaky test fixes in
        // https://chromium-review.googlesource.com/c/chromium/src/+/4124308 are
        // confirmed to no longer be needed.
        window.setTimeout(() => this.methodCalled('getExceptionList', contentType), 0);
        let pref = this.prefs_.exceptions[contentType];
        assert(pref !== undefined, 'Pref is missing for ' + contentType);
        if (this.hasIncognito_) {
            const incognitoElements = [];
            for (let i = 0; i < pref.length; ++i) {
                // Copy |pref[i]| to avoid changing the original |pref[i]|.
                const incognitoPref = Object.assign({}, pref[i]);
                incognitoElements.push(Object.assign(incognitoPref, { incognito: true }));
            }
            pref = pref.concat(incognitoElements);
        }
        return Promise.resolve(pref);
    }
    getChooserExceptionList(chooserType) {
        // The UI uses the |chooserType| to retrieve the prefs for a chooser
        // permission, however the test stores the permissions with the setting
        // category, so we need to get the content settings type that pertains to
        // this chooser type.
        const setting = getContentSettingsTypeFromChooserType(chooserType);
        assert(setting != null, 'ContentSettingsType mapping missing for ' + chooserType);
        // Create a deep copy of the pref so that the chooser-exception-list element
        // is able update the UI appropriately when incognito mode is toggled.
        const pref = /** @type {!Array<!RawChooserException>} */ (structuredClone(this.prefs_.chooserExceptions[setting]));
        assert(pref !== undefined, 'Pref is missing for ' + chooserType);
        if (this.hasIncognito_) {
            for (let i = 0; i < pref.length; ++i) {
                const incognitoElements = [];
                for (let j = 0; j < pref[i].sites.length; ++j) {
                    // Skip preferences that are not controlled by policy since opening an
                    // incognito session does not automatically grant permission to
                    // chooser exceptions that have been granted in the main session.
                    if (pref[i].sites[j].source !== SiteSettingSource.POLICY) {
                        continue;
                    }
                    // Copy |sites[i]| to avoid changing the original |sites[i]|.
                    const incognitoSite = Object.assign({}, pref[i].sites[j]);
                    incognitoElements.push(Object.assign(incognitoSite, { incognito: true }));
                }
                pref[i].sites.push(...incognitoElements);
            }
        }
        this.methodCalled('getChooserExceptionList', chooserType);
        return Promise.resolve(pref);
    }
    isOriginValid(origin) {
        this.methodCalled('isOriginValid', origin);
        return Promise.resolve(this.isOriginValid_);
    }
    /**
     * Specify whether isOriginValid should succeed or fail.
     */
    setIsOriginValid(isValid) {
        this.isOriginValid_ = isValid;
    }
    isPatternValidForType(pattern, category) {
        this.methodCalled('isPatternValidForType', [pattern, category]);
        return Promise.resolve({
            isValid: this.isPatternValidForType_,
            reason: this.isPatternValidForType_ ? '' : 'pattern is invalid',
        });
    }
    /**
     * Specify whether isPatternValidForType should succeed or fail.
     */
    setIsPatternValidForType(isValid) {
        this.isPatternValidForType_ = isValid;
    }
    resetCategoryPermissionForPattern(primaryPattern, secondaryPattern, contentType, incognito) {
        this.methodCalled('resetCategoryPermissionForPattern', [primaryPattern, secondaryPattern, contentType, incognito]);
    }
    resetChooserExceptionForSite(chooserType, origin, exception) {
        this.methodCalled('resetChooserExceptionForSite', [chooserType, origin, exception]);
    }
    getOriginPermissions(origin, contentTypes) {
        this.methodCalled('getOriginPermissions', [origin, contentTypes]);
        const exceptionList = [];
        contentTypes.forEach(contentType => {
            let setting;
            let source;
            const isSet = this.prefs_.exceptions[contentType].some((originPrefs) => {
                if (originPrefs.origin === origin) {
                    setting = originPrefs.setting;
                    source = originPrefs.source;
                    return true;
                }
                return false;
            });
            if (!isSet) {
                this.prefs_.chooserExceptions[contentType].some((chooserException) => {
                    return chooserException.sites.some(originPrefs => {
                        if (originPrefs.origin === origin) {
                            setting = originPrefs.setting;
                            source = originPrefs.source;
                            return true;
                        }
                        return false;
                    });
                });
            }
            assert(setting !== undefined, 'There was no exception set for origin: ' + origin +
                ' and contentType: ' + contentType);
            exceptionList.push({
                embeddingOrigin: '',
                incognito: false,
                origin: origin,
                displayName: '',
                setting: setting,
                source: source,
                isEmbargoed: false,
                type: '',
            });
        });
        return Promise.resolve(exceptionList);
    }
    setCategoryPermissionForPattern(primaryPattern, secondaryPattern, contentType, value, incognito) {
        this.methodCalled('setCategoryPermissionForPattern', [primaryPattern, secondaryPattern, contentType, value, incognito]);
    }
    fetchZoomLevels() {
        webUIListenerCallback('onZoomLevelsChanged', this.zoomList_);
        this.methodCalled('fetchZoomLevels');
    }
    removeZoomLevel(host) {
        this.methodCalled('removeZoomLevel', [host]);
    }
    observeProtocolHandlers() {
        webUIListenerCallback('setHandlersEnabled', true);
        webUIListenerCallback('setProtocolHandlers', this.protocolHandlers_);
        webUIListenerCallback('setIgnoredProtocolHandlers', this.ignoredProtocols_);
        this.methodCalled('observeProtocolHandlers');
    }
    observeAppProtocolHandlers() {
        webUIListenerCallback('setAppAllowedProtocolHandlers', this.appAllowedProtocolHandlers_);
        webUIListenerCallback('setAppDisallowedProtocolHandlers', this.appDisallowedProtocolHandlers_);
        this.methodCalled('observeAppProtocolHandlers');
    }
    observeProtocolHandlersEnabledState() {
        webUIListenerCallback('setHandlersEnabled', true);
        this.methodCalled('observeProtocolHandlersEnabledState');
    }
    setProtocolDefault() {
        this.methodCalled('setProtocolDefault', arguments);
    }
    removeProtocolHandler() {
        this.methodCalled('removeProtocolHandler', arguments);
    }
    removeAppAllowedHandler() {
        this.methodCalled('removeAppAllowedHandler', arguments);
    }
    removeAppDisallowedHandler() {
        this.methodCalled('removeAppDisallowedHandler', arguments);
    }
    updateIncognitoStatus() {
        this.methodCalled('updateIncognitoStatus', arguments);
    }
    fetchBlockAutoplayStatus() {
        this.methodCalled('fetchBlockAutoplayStatus');
    }
    setBlockAutoplayEnabled(enabled) {
        this.methodCalled('setBlockAutoplayEnabled', enabled);
    }
    clearSiteGroupDataAndCookies() {
        this.methodCalled('clearSiteGroupDataAndCookies');
    }
    clearUnpartitionedOriginDataAndCookies(origin) {
        this.methodCalled('clearUnpartitionedOriginDataAndCookies', origin);
    }
    clearPartitionedOriginDataAndCookies(origin, groupingKey) {
        this.methodCalled('clearPartitionedOriginDataAndCookies', [origin, groupingKey]);
    }
    recordAction() {
        this.methodCalled('recordAction');
    }
    setRecentSitePermissions(permissions) {
        this.recentSitePermissions_ = permissions;
    }
    getRecentSitePermissions() {
        this.methodCalled('getRecentSitePermissions');
        return Promise.resolve(this.recentSitePermissions_);
    }
    initializeCaptureDevices(type) {
        this.methodCalled('initializeCaptureDevices', type);
    }
    setPreferredCaptureDevice(type, defaultValue) {
        this.methodCalled('setPreferredCaptureDevice', [type, defaultValue]);
    }
    setProtocolHandlerDefault(value) {
        this.methodCalled('setProtocolHandlerDefault', value);
    }
    getRwsMembershipLabel(rwsNumMembers, rwsOwner) {
        this.methodCalled('getRwsMembershipLabel', rwsNumMembers, rwsOwner);
        return Promise.resolve([
            `${rwsNumMembers}`,
            (rwsNumMembers === 1 ? 'site' : 'sites'),
            `in ${rwsOwner}'s group`,
        ].join(' '));
    }
    getNumCookiesString(numCookies) {
        this.methodCalled('getNumCookiesString', numCookies);
        return Promise.resolve(`${numCookies} ` + (numCookies === 1 ? 'cookie' : 'cookies'));
    }
    getSystemDeniedPermissions() {
        this.methodCalled('getSystemDeniedPermissions');
        return Promise.resolve([]);
    }
    openSystemPermissionSettings(contentType) {
        this.methodCalled('openSystemPermissionSettings', contentType);
    }
    setSubAppsPermissionExplanation(info) {
        this.subAppsPermissionExplanation_ = info;
    }
    getSubAppsPermissionExplanation(url) {
        this.methodCalled('getSubAppsPermissionExplanation', url);
        return Promise.resolve(this.subAppsPermissionExplanation_);
    }
    getExtensionName(id) {
        this.methodCalled('getExtensionName', id);
        return Promise.resolve(`Test Extension ${id}`);
    }
    setFileSystemGrants(fileSystemGrantsForOriginList) {
        this.fileSystemGrantsList_ = fileSystemGrantsForOriginList;
    }
    getFileSystemGrants() {
        this.methodCalled('getFileSystemGrants');
        return Promise.resolve(this.fileSystemGrantsList_);
    }
    setStorageAccessExceptionList(storageAccessExceptionList) {
        this.storageAccessExceptionList_ = storageAccessExceptionList;
    }
    getStorageAccessExceptionList(categorySubtype) {
        this.methodCalled('getStorageAccessExceptionList', categorySubtype);
        return Promise.resolve(this.storageAccessExceptionList_.filter(site => site.setting === categorySubtype));
    }
    revokeFileSystemGrant(origin, filePath) {
        this.methodCalled('revokeFileSystemGrant', [origin, filePath]);
    }
    revokeFileSystemGrants(origin) {
        this.methodCalled('revokeFileSystemGrants', origin);
    }
}
