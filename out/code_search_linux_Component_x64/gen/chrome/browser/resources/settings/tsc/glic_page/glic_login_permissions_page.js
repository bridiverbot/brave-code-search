// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import '../settings_page/settings_subpage.js';
import '../simple_confirmation_dialog.js';
import '../site_favicon.js';
import { assert } from '//resources/js/assert.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { GlicBrowserProxyImpl } from './glic_browser_proxy.js';
import { getCss } from './glic_login_permissions_page.css.js';
import { getHtml } from './glic_login_permissions_page.html.js';
const SettingsGlicLoginPermissionsPageElementBase = RouteObserverMixinLit(WebUiListenerMixinLit(I18nMixinLit(CrLitElement)));
export class SettingsGlicLoginPermissionsPageElement extends SettingsGlicLoginPermissionsPageElementBase {
    static get is() {
        return 'settings-glic-login-permissions-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            actorLoginPermissions_: { type: Array },
            isOnline_: { type: Boolean },
            selectedPermissionToRemove_: { type: Object },
            routePath: { type: String },
        };
    }
    #routePath_accessor_storage = '';
    get routePath() { return this.#routePath_accessor_storage; }
    set routePath(value) { this.#routePath_accessor_storage = value; }
    #actorLoginPermissions__accessor_storage = [];
    get actorLoginPermissions_() { return this.#actorLoginPermissions__accessor_storage; }
    set actorLoginPermissions_(value) { this.#actorLoginPermissions__accessor_storage = value; }
    #selectedPermissionToRemove__accessor_storage = null;
    get selectedPermissionToRemove_() { return this.#selectedPermissionToRemove__accessor_storage; }
    set selectedPermissionToRemove_(value) { this.#selectedPermissionToRemove__accessor_storage = value; }
    #isOnline__accessor_storage = navigator.onLine;
    get isOnline_() { return this.#isOnline__accessor_storage; }
    set isOnline_(value) { this.#isOnline__accessor_storage = value; }
    browserProxy_ = GlicBrowserProxyImpl.getInstance();
    eventTracker_ = new EventTracker();
    currentRouteChanged(newRoute, _oldRoute) {
        if (newRoute === routes.GEMINI_LOGIN) {
            this.browserProxy_.startObservingActorLoginPermissions();
            this.browserProxy_.getActorLoginPermissions().then(permissions => {
                this.actorLoginPermissions_ = permissions;
            });
        }
        else {
            this.browserProxy_.stopObservingActorLoginPermissions();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('actor-login-permissions-changed', (permissions) => {
            this.actorLoginPermissions_ = permissions;
        });
        this.eventTracker_.add(window, 'online', () => this.isOnline_ = true);
        this.eventTracker_.add(window, 'offline', () => this.isOnline_ = false);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.browserProxy_.stopObservingActorLoginPermissions();
        this.eventTracker_.removeAll();
    }
    onRemoveActorLoginPermissionClick_(e) {
        const target = e.currentTarget;
        const index = Number(target.dataset['index']);
        this.selectedPermissionToRemove_ = this.actorLoginPermissions_[index];
    }
    async onRemoveDialogClose_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        assert(this.selectedPermissionToRemove_);
        if (dialog.wasConfirmed()) {
            const success = await this.browserProxy_.revokeActorLoginPermission(this.selectedPermissionToRemove_.signonRealm, this.selectedPermissionToRemove_.username);
            if (!success) {
                const toast = this.shadowRoot.querySelector('#removeErrorToast');
                assert(toast);
                toast.show();
            }
        }
        this.selectedPermissionToRemove_ = null;
    }
    getRemoveDialogDescription_() {
        assert(this.selectedPermissionToRemove_);
        return this.i18n('glicRemoveActorLoginDialogDescription', this.selectedPermissionToRemove_.displayName);
    }
}
customElements.define(SettingsGlicLoginPermissionsPageElement.is, SettingsGlicLoginPermissionsPageElement);
