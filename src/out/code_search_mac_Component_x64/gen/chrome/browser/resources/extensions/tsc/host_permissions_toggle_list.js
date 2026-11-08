// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './restricted_sites_dialog.js';
import './toggle_row.js';
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './host_permissions_toggle_list.css.js';
import { getHtml } from './host_permissions_toggle_list.html.js';
import { UserAction } from './metrics_util.js';
import { getMatchingUserSpecifiedSites } from './runtime_hosts_dialog.js';
import { SiteSettingsMixin } from './site_permissions/site_settings_mixin.js';
import { getFaviconUrl } from './url_util.js';
const ExtensionsHostPermissionsToggleListElementBase = SiteSettingsMixin(CrLitElement);
export class ExtensionsHostPermissionsToggleListElement extends ExtensionsHostPermissionsToggleListElementBase {
    static get is() {
        return 'extensions-host-permissions-toggle-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The underlying permissions data.
             */
            permissions: { type: Object },
            itemId: { type: String },
            /**
             * This is set as the host the user is trying to toggle on/grant host
             * permissions for, if the host matches one or more user specified
             * restricted sites.
             */
            selectedHost_: { type: String },
            // The list of restricted sites that match a host the user is toggling on.
            matchingRestrictedSites_: { type: Array },
            showMatchingRestrictedSitesDialog_: { type: Boolean },
        };
    }
    #permissions_accessor_storage = {
        hasAllHosts: true,
        hostAccess: chrome.developerPrivate.HostAccess.ON_CLICK,
        hosts: [],
    };
    get permissions() { return this.#permissions_accessor_storage; }
    set permissions(value) { this.#permissions_accessor_storage = value; }
    #itemId_accessor_storage = '';
    get itemId() { return this.#itemId_accessor_storage; }
    set itemId(value) { this.#itemId_accessor_storage = value; }
    #matchingRestrictedSites__accessor_storage = [];
    get matchingRestrictedSites_() { return this.#matchingRestrictedSites__accessor_storage; }
    set matchingRestrictedSites_(value) { this.#matchingRestrictedSites__accessor_storage = value; }
    #showMatchingRestrictedSitesDialog__accessor_storage = false;
    get showMatchingRestrictedSitesDialog_() { return this.#showMatchingRestrictedSitesDialog__accessor_storage; }
    set showMatchingRestrictedSitesDialog_(value) { this.#showMatchingRestrictedSitesDialog__accessor_storage = value; }
    #selectedHost__accessor_storage = '';
    get selectedHost_() { return this.#selectedHost__accessor_storage; }
    set selectedHost_(value) { this.#selectedHost__accessor_storage = value; }
    getRestrictedSitesDialog() {
        return this.shadowRoot.querySelector('extensions-restricted-sites-dialog');
    }
    /**
     * @return Whether the item is allowed to execute on all of its requested
     *     sites.
     */
    allowedOnAllHosts_() {
        return this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_ALL_SITES;
    }
    /**
     * @return A lexicographically-sorted list of the hosts associated with this
     *     item.
     */
    getSortedHosts_() {
        return this.permissions.hosts.sort((a, b) => {
            if (a.host < b.host) {
                return -1;
            }
            if (a.host > b.host) {
                return 1;
            }
            return 0;
        });
    }
    onAllHostsToggleChange_(e) {
        // TODO(devlin): In the case of going from all sites to specific sites,
        // we'll withhold all sites (i.e., all specific site toggles will move to
        // unchecked, and the user can check them individually). This is slightly
        // different than the sync page, where disabling the "sync everything"
        // switch leaves everything synced, and user can uncheck them
        // individually. It could be nice to align on behavior, but probably not
        // super high priority.
        const checked = e.detail;
        if (checked) {
            this.delegate.setItemHostAccess(this.itemId, chrome.developerPrivate.HostAccess.ON_ALL_SITES);
            this.delegate.recordUserAction(UserAction.ALL_TOGGLED_ON);
        }
        else {
            this.delegate.setItemHostAccess(this.itemId, chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);
            this.delegate.recordUserAction(UserAction.ALL_TOGGLED_OFF);
        }
    }
    onHostAccessChange_(e) {
        const host = e.target.dataset['host'] || '';
        const checked = e.target.checked;
        if (!checked) {
            this.delegate.removeRuntimeHostPermission(this.itemId, host);
            this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_OFF);
            return;
        }
        // If the user is about to toggle on `host`, show a dialog if there are
        // matching user specified restricted sites instead of granting `host`
        // right away.
        this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_ON);
        const matchingRestrictedSites = getMatchingUserSpecifiedSites(this.restrictedSites, host);
        if (matchingRestrictedSites.length) {
            this.selectedHost_ = host;
            this.matchingRestrictedSites_ = matchingRestrictedSites;
            this.showMatchingRestrictedSitesDialog_ = true;
            // Flow continues in onRestrictedSitesDialogClose_.
            return;
        }
        this.delegate.addRuntimeHostPermission(this.itemId, host);
    }
    isItemChecked_(item) {
        return item.granted || this.selectedHost_ === item.host;
    }
    getAllHostsToggleLabelClass_() {
        return this.enableEnhancedSiteControls ? 'new-all-hosts-toggle-label' : '';
    }
    onLearnMoreClick_() {
        this.delegate.recordUserAction(UserAction.LEARN_MORE);
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    unselectHost_() {
        this.showMatchingRestrictedSitesDialog_ = false;
        this.selectedHost_ = '';
        this.matchingRestrictedSites_ = [];
    }
    onMatchingRestrictedSitesDialogClose_() {
        const dialog = this.getRestrictedSitesDialog();
        assert(dialog);
        if (dialog.wasConfirmed()) {
            assert(this.matchingRestrictedSites_.length);
            this.delegate.addRuntimeHostPermission(this.itemId, this.selectedHost_)
                .then(() => {
                this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED, this.matchingRestrictedSites_);
            })
                .finally(() => {
                this.unselectHost_();
            });
        }
        else {
            this.unselectHost_();
        }
    }
}
customElements.define(ExtensionsHostPermissionsToggleListElement.is, ExtensionsHostPermissionsToggleListElement);
