// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './sync_controls.js';
import '../settings_page/settings_subpage.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getHtml } from './sync_controls_page.html.js';
const SettingsSyncControlsPageElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsSyncControlsPageElement extends SettingsSyncControlsPageElementBase {
    static get is() {
        return 'settings-sync-controls-page';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            syncStatus_: { type: Object },
        };
    }
    #syncStatus__accessor_storage = null;
    get syncStatus_() { return this.#syncStatus__accessor_storage; }
    set syncStatus_(value) { this.#syncStatus__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        SyncBrowserProxyImpl.getInstance().getSyncStatus().then(this.onSyncStatusChanged_.bind(this));
        this.addWebUiListener('sync-status-changed', this.onSyncStatusChanged_.bind(this));
    }
    onSyncStatusChanged_(syncStatus) {
        this.syncStatus_ = syncStatus;
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsSyncControlsPageElement.is, SettingsSyncControlsPageElement);
