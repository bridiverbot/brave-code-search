// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-google-services-page' is the settings subpage containing controls
 * to manage non-personalized Google services.
 */
import '../settings_page/settings_subpage.js';
import '../privacy_page/personalization_options.js';
import { SignedInState, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './google_services_page.css.js';
import { getHtml } from './google_services_page.html.js';
const SettingsGoogleServicesPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsGoogleServicesPageElement extends SettingsGoogleServicesPageElementBase {
    static get is() {
        return 'settings-google-services-page';
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
             * The current sync status.
             */
            syncStatus_: { type: Object },
        };
    }
    #syncStatus__accessor_storage = {
        statusAction: StatusAction.NO_ACTION,
    };
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        // 
        SyncBrowserProxyImpl.getInstance().getSyncStatus().then(this.onSyncStatusChanged_.bind(this));
        this.addWebUiListener('sync-status-changed', this.onSyncStatusChanged_.bind(this));
    }
    onSyncStatusChanged_(syncStatus) {
        this.syncStatus_ = syncStatus;
        if (Router.getInstance().getCurrentRoute() !== routes.GOOGLE_SERVICES) {
            return;
        }
        // Don't show this page if the user is syncing.
        if (!this.shouldShowPageContents_()) {
            Router.getInstance().navigateTo(routes.PEOPLE);
        }
    }
    shouldShowPageContents_() {
        return this.syncStatus_.signedInState !== undefined &&
            this.syncStatus_.signedInState !== SignedInState.SYNCING;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsGoogleServicesPageElement.is, SettingsGoogleServicesPageElement);
