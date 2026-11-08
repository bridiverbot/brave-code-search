// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './runtime_hosts_dialog.js';
import '/strings.m.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DummyItemDelegate } from './item.js';
import { getCss } from './runtime_host_permissions.css.js';
import { getHtml } from './runtime_host_permissions.html.js';
import { getFaviconUrl } from './url_util.js';
function getEventTargetIndex(e) {
    return Number(e.target.dataset['index']);
}
export class ExtensionsRuntimeHostPermissionsElement extends CrLitElement {
    static get is() {
        return 'extensions-runtime-host-permissions';
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
            delegate: { type: Object },
            enableEnhancedSiteControls: { type: Boolean },
            /**
             * Whether the dialog to add a new host permission is shown.
             */
            showHostDialog_: { type: Boolean },
            /**
             * Whether the dialog warning the user that the list of sites added will
             * be removed is shown.
             */
            showRemoveSiteDialog_: { type: Boolean },
            /**
             * The current site of the entry that the host dialog is editing, if the
             * dialog is open for editing.
             */
            hostDialogModel_: { type: String },
            /**
             * The element to return focus to once the host dialog closes.
             */
            hostDialogAnchorElement_: { type: Object },
            /**
             * If the action menu is open, the site of the entry it is open for.
             * Otherwise null.
             */
            actionMenuModel_: { type: String },
            /**
             * The element that triggered the action menu, so that the page will
             * return focus once the action menu (or dialog) closes.
             */
            actionMenuAnchorElement_: { type: Object },
            /**
             * The old host access setting; used when we don't immediately commit the
             * change to host access so that we can reset it if the user cancels.
             */
            oldHostAccess_: { type: String },
            /**
             * Indicator to track if an onHostAccessChange_ event is coming from the
             * setting being automatically reverted to the previous value, after a
             * change to a new value was canceled.
             */
            revertingHostAccess_: { type: Boolean },
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
    #delegate_accessor_storage = new DummyItemDelegate();
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #enableEnhancedSiteControls_accessor_storage = false;
    get enableEnhancedSiteControls() { return this.#enableEnhancedSiteControls_accessor_storage; }
    set enableEnhancedSiteControls(value) { this.#enableEnhancedSiteControls_accessor_storage = value; }
    #showHostDialog__accessor_storage = false;
    get showHostDialog_() { return this.#showHostDialog__accessor_storage; }
    set showHostDialog_(value) { this.#showHostDialog__accessor_storage = value; }
    #showRemoveSiteDialog__accessor_storage = false;
    get showRemoveSiteDialog_() { return this.#showRemoveSiteDialog__accessor_storage; }
    set showRemoveSiteDialog_(value) { this.#showRemoveSiteDialog__accessor_storage = value; }
    #hostDialogModel__accessor_storage = null;
    get hostDialogModel_() { return this.#hostDialogModel__accessor_storage; }
    set hostDialogModel_(value) { this.#hostDialogModel__accessor_storage = value; }
    #hostDialogAnchorElement__accessor_storage = null;
    get hostDialogAnchorElement_() { return this.#hostDialogAnchorElement__accessor_storage; }
    set hostDialogAnchorElement_(value) { this.#hostDialogAnchorElement__accessor_storage = value; }
    #actionMenuModel__accessor_storage = null;
    get actionMenuModel_() { return this.#actionMenuModel__accessor_storage; }
    set actionMenuModel_(value) { this.#actionMenuModel__accessor_storage = value; }
    #actionMenuAnchorElement__accessor_storage = null;
    get actionMenuAnchorElement_() { return this.#actionMenuAnchorElement__accessor_storage; }
    set actionMenuAnchorElement_(value) { this.#actionMenuAnchorElement__accessor_storage = value; }
    #oldHostAccess__accessor_storage = null;
    get oldHostAccess_() { return this.#oldHostAccess__accessor_storage; }
    set oldHostAccess_(value) { this.#oldHostAccess__accessor_storage = value; }
    #revertingHostAccess__accessor_storage = false;
    get revertingHostAccess_() { return this.#revertingHostAccess__accessor_storage; }
    set revertingHostAccess_(value) { this.#revertingHostAccess__accessor_storage = value; }
    getSelectMenu() {
        const selectMenuId = this.enableEnhancedSiteControls ? '#newHostAccess' : '#hostAccess';
        return this.shadowRoot.querySelector(selectMenuId);
    }
    getRemoveSiteDialog() {
        return this.shadowRoot.querySelector('#removeSitesDialog');
    }
    onHostAccessChange_() {
        const selectMenu = this.getSelectMenu();
        const access = selectMenu.value;
        // Log a user action when the host access selection is changed by the user,
        // but not when reverting from a canceled change to another setting.
        if (!this.revertingHostAccess_) {
            switch (access) {
                case chrome.developerPrivate.HostAccess.ON_CLICK:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnClickSelected');
                    break;
                case chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnSpecificSitesSelected');
                    break;
                case chrome.developerPrivate.HostAccess.ON_ALL_SITES:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnAllSitesSelected');
                    break;
                default:
                    assertNotReachedCase(access);
            }
        }
        const kOnSpecificSites = chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;
        if (access === kOnSpecificSites &&
            this.permissions.hostAccess !== kOnSpecificSites) {
            // If the user is transitioning to the "on specific sites" option, show
            // the "add host" dialog. This serves two purposes:
            // - The user is prompted to add a host immediately, since otherwise
            //   "on specific sites" is meaningless, and
            // - The way the C++ code differentiates between "on click" and "on
            //   specific sites" is by checking if there are any specific sites.
            //   This ensures there will be at least one, so that the host access
            //   is properly calculated.
            this.oldHostAccess_ = this.permissions.hostAccess;
            this.doShowHostDialog_(selectMenu, null);
        }
        else if (this.enableEnhancedSiteControls && access !== kOnSpecificSites &&
            this.permissions.hostAccess === kOnSpecificSites) {
            // If the user is transitioning from the "on specific sites" option to
            // another one, show a dialog asking the user to confirm the transition
            // because in C++, only the "on specific sites" option will store sites
            // the user has added and transitioning away from it will clear these
            // sites.
            this.showRemoveSiteDialog_ = true;
        }
        else {
            this.delegate.setItemHostAccess(this.itemId, access);
        }
    }
    showSpecificSites_() {
        return this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;
    }
    /**
     * @return The granted host permissions as a sorted set of strings.
     */
    getRuntimeHosts_() {
        if (!this.permissions.hosts) {
            return [];
        }
        // Only show granted hosts in the list.
        // TODO(devlin): For extensions that request a finite set of hosts,
        // display them in a toggle list. https://crbug.com/41418731.
        return this.permissions.hosts.filter(control => control.granted)
            .map(control => control.host)
            .sort();
    }
    onAddHostClick_(e) {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.AddHostActivated');
        this.doShowHostDialog_(e.target, null);
    }
    isHostAccessSelected_(access) {
        return access === this.permissions.hostAccess;
    }
    /**
     * @param anchorElement The element to return focus to once the dialog closes.
     * @param currentSite The site entry currently being edited, or null if this
     *     is to add a new entry.
     */
    doShowHostDialog_(anchorElement, currentSite) {
        this.hostDialogAnchorElement_ = anchorElement;
        this.hostDialogModel_ = currentSite;
        this.showHostDialog_ = true;
    }
    onHostDialogClose_() {
        this.hostDialogModel_ = null;
        this.showHostDialog_ = false;
        assert(this.hostDialogAnchorElement_);
        focusWithoutInk(this.hostDialogAnchorElement_);
        this.hostDialogAnchorElement_ = null;
        this.oldHostAccess_ = null;
    }
    onHostDialogCancel_() {
        // The user canceled the dialog. Set hostAccess back to the old value,
        // if the dialog was shown when just transitioning to a new state.
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.AddHostDialogCanceled');
        if (this.oldHostAccess_) {
            assert(this.permissions.hostAccess === this.oldHostAccess_);
            this.revertingHostAccess_ = true;
            this.getSelectMenu().value = this.oldHostAccess_;
            this.revertingHostAccess_ = false;
            this.oldHostAccess_ = null;
        }
    }
    dialogShouldUpdateHostAccess_() {
        return !!this.oldHostAccess_;
    }
    onOpenEditHostClick_(e) {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuOpened');
        const index = getEventTargetIndex(e);
        this.actionMenuModel_ = this.getRuntimeHosts_()[index] || null;
        this.actionMenuAnchorElement_ = e.target;
        this.$.hostActionMenu.showAt(e.target);
    }
    onActionMenuEditClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuEditActivated');
        // Cache the site before closing the action menu, since it's cleared.
        const site = this.actionMenuModel_;
        // Cache and reset actionMenuAnchorElement_ so focus is not returned
        // to the action menu's trigger (since the dialog will be shown next).
        // Instead, curry the element to the dialog, so once it closes, focus
        // will be returned.
        assert(this.actionMenuAnchorElement_, 'Menu Anchor');
        const anchorElement = this.actionMenuAnchorElement_;
        this.actionMenuAnchorElement_ = null;
        this.closeActionMenu_();
        this.doShowHostDialog_(anchorElement, site);
    }
    onActionMenuRemoveClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuRemoveActivated');
        assert(this.actionMenuModel_, 'Action Menu Model');
        this.delegate.removeRuntimeHostPermission(this.itemId, this.actionMenuModel_);
        this.closeActionMenu_();
    }
    closeActionMenu_() {
        const menu = this.$.hostActionMenu;
        assert(menu.open);
        menu.close();
    }
    onLearnMoreClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.LearnMoreActivated');
    }
    onEditHostClick_(e) {
        const index = getEventTargetIndex(e);
        const item = this.getRuntimeHosts_()[index];
        this.doShowHostDialog_(e.target, item);
    }
    onDeleteHostClick_(e) {
        const index = getEventTargetIndex(e);
        const item = this.getRuntimeHosts_()[index];
        this.delegate.removeRuntimeHostPermission(this.itemId, item);
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    onRemoveSitesWarningConfirmClick_() {
        this.delegate.setItemHostAccess(this.itemId, this.getSelectMenu().value);
        this.getRemoveSiteDialog().close();
        this.showRemoveSiteDialog_ = false;
    }
    onRemoveSitesWarningCancelClick_() {
        this.onRemoveSitesWarningCancel_();
    }
    onRemoveSitesWarningCancel_() {
        assert(this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);
        this.revertingHostAccess_ = true;
        this.getSelectMenu().value = this.permissions.hostAccess;
        this.revertingHostAccess_ = false;
        this.getRemoveSiteDialog().close();
        this.showRemoveSiteDialog_ = false;
    }
}
customElements.define(ExtensionsRuntimeHostPermissionsElement.is, ExtensionsRuntimeHostPermissionsElement);
