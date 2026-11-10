// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A settings page that allows the user to see and manage the
    passkeys on their computer.
 */
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../../settings_page/settings_subpage.js';
import '../../site_favicon.js';
import '../../simple_confirmation_dialog.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../../i18n_setup.js';
import { SettingsViewMixinLit } from '../../settings_page/settings_view_mixin_lit.js';
import { PasskeysBrowserProxyImpl } from './passkeys_browser_proxy.js';
import { getCss } from './passkeys_page.css.js';
import { getHtml } from './passkeys_page.html.js';
const SettingsPasskeysPageElementBase = SettingsViewMixinLit(CrLitElement);
export class SettingsPasskeysPageElement extends SettingsPasskeysPageElementBase {
    static get is() {
        return 'settings-passkeys-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** Substring to filter the passkeys by. */
            filter_: { type: String },
            passkeys_: { type: Array },
            showDeleteConfirmationDialog_: { type: Boolean },
            noManagement_: { type: Boolean },
            // 
        };
    }
    #filter__accessor_storage = '';
    // 
    get filter_() { return this.#filter__accessor_storage; }
    set filter_(value) { this.#filter__accessor_storage = value; }
    #passkeys__accessor_storage = [];
    get passkeys_() { return this.#passkeys__accessor_storage; }
    set passkeys_(value) { this.#passkeys__accessor_storage = value; }
    #showDeleteConfirmationDialog__accessor_storage = false;
    get showDeleteConfirmationDialog_() { return this.#showDeleteConfirmationDialog__accessor_storage; }
    set showDeleteConfirmationDialog_(value) { this.#showDeleteConfirmationDialog__accessor_storage = value; }
    #noManagement__accessor_storage = false;
    // Set if the current platform doesn't support passkey management.
    // (E.g. Windows prior to 2022H2.)
    get noManagement_() { return this.#noManagement__accessor_storage; }
    set noManagement_(value) { this.#noManagement__accessor_storage = value; }
    // Contains the credentialId of the passkey that the action menu was opened
    // for.
    credentialIdForActionMenu_ = null;
    browserProxy_ = PasskeysBrowserProxyImpl.getInstance();
    firstUpdated() {
        this.browserProxy_.enumerate().then(this.onEnumerateComplete_.bind(this));
    }
    onSearchTermChanged_(e) {
        this.filter_ = e.detail.value;
    }
    /**
     * Used to filter the displayed passkeys when search text is entered.
     */
    getFilteredPasskeys_() {
        return this.passkeys_.filter(passkey => [passkey.relyingPartyId, passkey.userName].some(str => str.toLowerCase().includes(this.filter_.trim().toLowerCase())));
    }
    /**
     * Called when the browser has a new list of passkeys.
     */
    onEnumerateComplete_(passkeys) {
        if (passkeys === null) {
            this.noManagement_ = true;
            this.passkeys_ = [];
            return;
        }
        // `passkeys` will have been sorted already because it's easier to do a
        // Public Suffix List-based sort in C++.
        this.passkeys_ = passkeys;
    }
    getIconUrl_(passkey) {
        // `passkey.relyingPartyId` comes from the OS and hopefully can be trusted,
        // but don't let bad data form an unexpected URL. Thus drop any passkeys
        // with characters in the RP ID that are meaningful in a host per
        // https://datatracker.ietf.org/doc/html/rfc1738#section-3.1
        if (['@', ':', '/'].every(c => passkey.relyingPartyId.indexOf(c) === -1)) {
            return 'https://' + passkey.relyingPartyId + '/';
        }
        return '';
    }
    /**
     * Called when the user clicks on the three-dots icon for a passkey.
     */
    onDotsClick_(e) {
        const target = e.currentTarget;
        this.credentialIdForActionMenu_ = target.dataset['credentialId'];
        this.$.menu.showAt(target, {
            anchorAlignmentY: AnchorAlignment.AFTER_END,
        });
        // 
    }
    /**
     * Called when the user clicks to delete a passkey.
     */
    onDeleteClick_() {
        assert(this.credentialIdForActionMenu_);
        this.$.menu.close();
        this.showDeleteConfirmationDialog_ = true;
    }
    /**
     * Called when a delete confirmation dialog is closed (whether successful or
     * not).
     */
    onConfirmDialogClose_() {
        const dialog = this.shadowRoot.querySelector('settings-simple-confirmation-dialog');
        assert(dialog);
        const confirmed = dialog.wasConfirmed();
        this.showDeleteConfirmationDialog_ = false;
        if (confirmed) {
            assert(this.credentialIdForActionMenu_);
            this.browserProxy_.delete(this.credentialIdForActionMenu_)
                .then(this.onDeleteComplete_.bind(this, this.credentialIdForActionMenu_));
        }
        this.credentialIdForActionMenu_ = null;
    }
    /**
     * Called when a delete operation has completed.
     */
    onDeleteComplete_(deletedCredentialId, newPasskeys) {
        if (newPasskeys !== null &&
            newPasskeys.findIndex((cred) => cred.credentialId === deletedCredentialId) !== -1) {
            // The passkey is still present thus the deletion failed.
            this.$.deleteErrorDialog.get().showModal();
        }
        this.onEnumerateComplete_(newPasskeys);
    }
    /**
     * Called when the user clicks the "ok" button on the error dialog.
     */
    onErrorDialogOkClick_() {
        this.$.deleteErrorDialog.get().close();
    }
    /**
     * Returns the a11y label for the "More actions" button next to a passkey.
     */
    getMoreActionsLabel_(passkey) {
        return loadTimeData.getStringF('managePasskeysMoreActionsLabel', passkey.userName, passkey.relyingPartyId);
    }
    // 
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsPasskeysPageElement.is, SettingsPasskeysPageElement);
