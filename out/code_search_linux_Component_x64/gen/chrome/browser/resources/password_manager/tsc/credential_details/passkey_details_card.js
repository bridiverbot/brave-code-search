// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../cr_input_style.css.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import './credential_field.js';
import '../dialogs/edit_passkey_dialog.js';
import '../dialogs/delete_passkey_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl, PasswordViewPageInteractions } from '../password_manager_proxy.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { getTemplate } from './passkey_details_card.html.js';
const PasskeyDetailsCardElementBase = UserUtilMixin(I18nMixin(PolymerElement));
export class PasskeyDetailsCardElement extends PasskeyDetailsCardElementBase {
    static get is() {
        return 'passkey-details-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            passkey: Object,
            interactionsEnum_: {
                type: Object,
                value: PasswordViewPageInteractions,
            },
            showEditPasskeyDialog_: Boolean,
            showDeletePasskeyDialog_: Boolean,
        };
    }
    getUsernameValue_() {
        return !this.passkey.username || this.passkey.username === '' ?
            this.i18n('usernamePlaceholder') :
            this.passkey.username;
    }
    getDisplayNameValue_() {
        return !this.passkey.displayName || this.passkey.displayName === '' ?
            this.i18n('displayNamePlaceholder') :
            this.passkey.displayName;
    }
    onDeleteClick_() {
        this.showDeletePasskeyDialog_ = true;
        PasswordManagerImpl.getInstance().extendAuthValidity();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_DELETE_BUTTON_CLICKED);
    }
    onDeletePasskeyDialogClosed_() {
        this.showDeletePasskeyDialog_ = false;
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    onEditClicked_() {
        this.showEditPasskeyDialog_ = true;
        PasswordManagerImpl.getInstance().extendAuthValidity();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_EDIT_BUTTON_CLICKED);
    }
    onEditPasskeyDialogClosed_() {
        this.showEditPasskeyDialog_ = false;
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    getAriaLabelForPasswordCard_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardAriaLabel', htmlEscape(this.passkey.username));
    }
    getAriaLabelForEditButton_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardEditButtonNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardEditButtonAriaLabel', htmlEscape(this.passkey.username));
    }
    getAriaLabelForDeleteButton_() {
        return !this.passkey.username ?
            this.i18n('passkeyDetailsCardDeleteButtonNoUsernameAriaLabel') :
            this.i18n('passkeyDetailsCardDeleteButtonAriaLabel', htmlEscape(this.passkey.username));
    }
    getInfoLabelText_() {
        if (this.passkey.hidden) {
            return this.i18nAdvanced('passkeyHiddenInfoLabel', {
                substitutions: [this.passkey.affiliatedDomains[0].name],
                tags: ['a'],
            });
        }
        // Google Password Manager passkeys always have their creation time
        // available.
        assert(this.passkey.creationTime !== undefined);
        const date = new Date(this.passkey.creationTime);
        return this.i18nAdvanced('passkeyManagementInfoLabel', {
            substitutions: [date.toLocaleDateString(/*locales=*/ undefined, { dateStyle: 'short' })],
        });
    }
    getPasskeyIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'passwords-icon:passkey' :
            'passwords-icon:passkey-old';
    }
}
customElements.define(PasskeyDetailsCardElement.is, PasskeyDetailsCardElement);
