// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DummyItemDelegate, FakeChromeEvent } from '../item.js';
export class DummySiteSettingsDelegate {
    getUserSiteSettings() {
        return Promise.resolve({ permittedSites: [], restrictedSites: [] });
    }
    addUserSpecifiedSites(_siteSet, _hosts) {
        return Promise.resolve();
    }
    removeUserSpecifiedSites(_siteSet, _hosts) {
        return Promise.resolve();
    }
    getUserAndExtensionSitesByEtld() {
        return Promise.resolve([]);
    }
    getMatchingExtensionsForSite(_site) {
        return Promise.resolve([]);
    }
    updateSiteAccess(_site, _updates) {
        return Promise.resolve();
    }
    getUserSiteSettingsChangedTarget() {
        return new FakeChromeEvent();
    }
}
// Have to reproduce DummySiteSettingsDelegate since TS does not allow
// extending multiple classes.
export class DummySiteSettingsMixinDelegate extends DummyItemDelegate {
    getUserSiteSettings() {
        return Promise.resolve({ permittedSites: [], restrictedSites: [] });
    }
    addUserSpecifiedSites(_siteSet, _hosts) {
        return Promise.resolve();
    }
    removeUserSpecifiedSites(_siteSet, _hosts) {
        return Promise.resolve();
    }
    getUserAndExtensionSitesByEtld() {
        return Promise.resolve([]);
    }
    getMatchingExtensionsForSite(_site) {
        return Promise.resolve([]);
    }
    updateSiteAccess(_site, _updates) {
        return Promise.resolve();
    }
    getUserSiteSettingsChangedTarget() {
        return new FakeChromeEvent();
    }
}
export const SiteSettingsMixin = (superClass) => {
    class SiteSettingsMixin extends superClass {
        static get properties() {
            return {
                delegate: { type: Object },
                enableEnhancedSiteControls: { type: Boolean },
                restrictedSites: { type: Array },
                permittedSites: { type: Array },
            };
        }
        #delegate_accessor_storage = new DummySiteSettingsMixinDelegate();
        get delegate() { return this.#delegate_accessor_storage; }
        set delegate(value) { this.#delegate_accessor_storage = value; }
        #enableEnhancedSiteControls_accessor_storage = false;
        get enableEnhancedSiteControls() { return this.#enableEnhancedSiteControls_accessor_storage; }
        set enableEnhancedSiteControls(value) { this.#enableEnhancedSiteControls_accessor_storage = value; }
        #restrictedSites_accessor_storage = [];
        get restrictedSites() { return this.#restrictedSites_accessor_storage; }
        set restrictedSites(value) { this.#restrictedSites_accessor_storage = value; }
        #permittedSites_accessor_storage = [];
        get permittedSites() { return this.#permittedSites_accessor_storage; }
        set permittedSites(value) { this.#permittedSites_accessor_storage = value; }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            if (this.enableEnhancedSiteControls) {
                this.delegate.getUserSiteSettings().then(this.onUserSiteSettingsChanged_.bind(this));
                this.delegate.getUserSiteSettingsChangedTarget().addListener(this.onUserSiteSettingsChanged_.bind(this));
            }
        }
        onUserSiteSettingsChanged_({ permittedSites, restrictedSites, }) {
            this.permittedSites = permittedSites;
            this.restrictedSites = restrictedSites;
        }
    }
    return SiteSettingsMixin;
};
