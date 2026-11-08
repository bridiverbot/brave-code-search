// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './full_data_reset.html.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
const FullDataResetElementBase = I18nMixin(PolymerElement);
export class FullDataResetElement extends FullDataResetElementBase {
    static get is() {
        return 'full-data-reset';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isSyncingPasswords: {
                type: Boolean,
                value: false,
            },
            isAccountStoreUser: {
                type: Boolean,
                value: false,
            },
            passwordsCount_: {
                type: String,
                value: '',
            },
            passkeysCount_: {
                type: String,
                value: '',
            },
            passwordsCountDetails_: {
                type: String,
                value: '',
            },
            passkeysCountDetails_: {
                type: String,
                value: '',
            },
        };
    }
    async updateCounters_(credentials) {
        let numPasswords = 0;
        let numPasskeys = 0;
        const passwordSites = new Set();
        const passkeySites = new Set();
        for (const credential of credentials) {
            if (credential.isPasskey) {
                numPasskeys++;
                credential.affiliatedDomains.forEach(domain => passkeySites.add(domain.name));
            }
            else {
                numPasswords++;
                credential.affiliatedDomains.forEach(domain => passwordSites.add(domain.name));
            }
        }
        const [passwordCountString, passkeysCountString, passwordDetails, passkeysDetails,] = await Promise.all([
            this.getFormattedCountString('fullResetPasswordsCounter', numPasswords),
            this.getFormattedCountString('fullResetPasskeysCounter', numPasskeys),
            this.getFormattedSiteDetails(passwordSites),
            this.getFormattedSiteDetails(passkeySites),
        ]);
        this.passwordsCount_ = passwordCountString;
        this.passkeysCount_ = passkeysCountString;
        this.passwordsCountDetails_ = passwordDetails;
        this.passkeysCountDetails_ = passkeysDetails;
    }
    async getFormattedCountString(key, count) {
        return PluralStringProxyImpl.getInstance().getPluralString(key, count);
    }
    async getFormattedSiteDetails(sites) {
        const sitesArray = [...sites];
        switch (sites.size) {
            case 0:
                return '';
            case 1:
                return this.i18n('fullResetDomainsDisplayOne', sitesArray[0]);
            case 2:
                return this.i18n('fullResetDomainsDisplayTwo', sitesArray[0], sitesArray[1]);
            default:
                const moreCount = sites.size - 2;
                const container = await this.getFormattedCountString('fullResetDomainsDisplayTwoAndXMore', moreCount);
                return container.replace('$1', sitesArray[0])
                    .replace('$2', sitesArray[1]);
        }
    }
    onDeleteAllClick_() {
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(credentials => this.updateCounters_(credentials));
        this.$.dialog.showModal();
    }
    onCancel_() {
        this.$.dialog.close();
    }
    async onConfirm_() {
        this.$.dialog.close();
        const success = await PasswordManagerImpl.getInstance().deleteAllPasswordManagerData();
        this.showToastWithResult_(success);
    }
    showToastWithResult_(success) {
        if (success) {
            this.$.successToast.show();
        }
        else {
            // TODO(crbug.com/342366264): Show error toast.
        }
    }
    getConfirmationDialogTitle_() {
        if (this.isSyncingPasswords || this.isAccountStoreUser) {
            return this.i18n('fullResetConfirmationTitle');
        }
        return this.i18n('fullResetConfirmationTitleLocal');
    }
    getAriaDescription_() {
        return [
            this.i18n('fullResetTitle'),
            this.i18n('fullResetRowDescription'),
        ].join('. ');
    }
    getWarningIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'passwords-icon:warning' :
            'passwords-icon:outlined-warning-old';
    }
    getPasskeyIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'passwords-icon:passkey' :
            'passwords-icon:passkey-filled-old';
    }
    getPasswordIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'passwords-icon:password' :
            'passwords-icon:password-old';
    }
}
customElements.define(FullDataResetElement.is, FullDataResetElement);
