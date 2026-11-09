// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { Page, Router, UrlParam } from '../router.js';
import { BatchUploadPasswordsEntryPoint, SyncBrowserProxyImpl } from '../sync_browser_proxy.js';
import { getTemplate } from './notification_card.html.js';
import { NotificationCardsProxyImpl } from './notification_cards_browser_proxy.js';
// LINT.IfChange(NotificationCardId)
export var NotificationCardId;
(function (NotificationCardId) {
    NotificationCardId["CHECKUP"] = "password_checkup_promo";
    NotificationCardId["WEB_PASSWORD_MANAGER"] = "passwords_on_web_promo";
    NotificationCardId["SHORTCUT"] = "password_shortcut_promo";
    NotificationCardId["ACCESS_ON_ANY_DEVICE"] = "access_on_any_device_promo";
    NotificationCardId["RELAUNCH_CHROME"] = "relaunch_chrome_promo";
    NotificationCardId["MOVE_PASSWORDS"] = "move_passwords_promo";
    // SCREENLOCK_REAUTH = 'screenlock_reauth_promo',  // Obsolete
    NotificationCardId["PASSKEY_UNLOCK"] = "passkey_unlock_promo";
    NotificationCardId["ACCOUNT_AWARE_PASSWORD_SIGNIN"] = "account_aware_password_signin_promo";
})(NotificationCardId || (NotificationCardId = {}));
// LINT.ThenChange(//chrome/browser/ui/webui/password_manager/notification_card.h:NotificationCardId)
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with NotificationCardType in notification_card.h
 */
// LINT.IfChange(NotificationCardMetricId)
var NotificationCardMetricId;
(function (NotificationCardMetricId) {
    NotificationCardMetricId[NotificationCardMetricId["CHECKUP"] = 0] = "CHECKUP";
    NotificationCardMetricId[NotificationCardMetricId["UNUSED_WEB_PASSWORD_MANAGER"] = 1] = "UNUSED_WEB_PASSWORD_MANAGER";
    NotificationCardMetricId[NotificationCardMetricId["SHORTCUT"] = 2] = "SHORTCUT";
    NotificationCardMetricId[NotificationCardMetricId["UNUSED_ACCESS_ON_ANY_DEVICE"] = 3] = "UNUSED_ACCESS_ON_ANY_DEVICE";
    NotificationCardMetricId[NotificationCardMetricId["RELAUNCH_CHROME"] = 4] = "RELAUNCH_CHROME";
    NotificationCardMetricId[NotificationCardMetricId["MOVE_PASSWORDS"] = 5] = "MOVE_PASSWORDS";
    // SCREENLOCK_REAUTH = 6, Obsolete
    NotificationCardMetricId[NotificationCardMetricId["PASSKEY_UNLOCK"] = 7] = "PASSKEY_UNLOCK";
    NotificationCardMetricId[NotificationCardMetricId["ACCOUNT_AWARE_PASSWORD_SIGNIN"] = 8] = "ACCOUNT_AWARE_PASSWORD_SIGNIN";
    // Must be last.
    NotificationCardMetricId[NotificationCardMetricId["COUNT"] = 9] = "COUNT";
})(NotificationCardMetricId || (NotificationCardMetricId = {}));
// LINT.ThenChange(//chrome/browser/ui/webui/password_manager/notification_card.h:NotificationCardType)
function recordNotificationCardAction(card) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PromoCard.ActionButtonClicked', card, NotificationCardMetricId.COUNT);
}
const isOpenedAsShortcut = window.matchMedia('(display-mode: standalone)');
const NotificationCardElementBase = I18nMixin(PolymerElement);
export class NotificationCardElement extends NotificationCardElementBase {
    static get is() {
        return 'notification-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            card: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // If this is a shortcut promo we should listen to display mode changes to
        // close it automatically when shortcut is installed from another place.
        // Check crbug.com/40075033 for more details when it can happen.
        if (this.card.id === NotificationCardId.SHORTCUT) {
            isOpenedAsShortcut.addEventListener('change', this.close_.bind(this));
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.card.id === NotificationCardId.SHORTCUT) {
            isOpenedAsShortcut.removeEventListener('change', this.close_.bind(this));
        }
    }
    getDescription_() {
        return sanitizeInnerHtml(this.card.description);
    }
    getBannerImageName_() {
        if (this.card.id === NotificationCardId.ACCOUNT_AWARE_PASSWORD_SIGNIN) {
            return NotificationCardId.ACCESS_ON_ANY_DEVICE;
        }
        return this.card.id;
    }
    onActionButtonClick_() {
        switch (this.card.id) {
            case NotificationCardId.CHECKUP:
                const params = new URLSearchParams();
                params.set(UrlParam.START_CHECK, 'true');
                Router.getInstance().navigateTo(Page.CHECKUP, null, params);
                recordNotificationCardAction(NotificationCardMetricId.CHECKUP);
                break;
            case NotificationCardId.SHORTCUT:
                PasswordManagerImpl.getInstance().showAddShortcutDialog();
                recordNotificationCardAction(NotificationCardMetricId.SHORTCUT);
                break;
            case NotificationCardId.RELAUNCH_CHROME:
                chrome.send('restartBrowser');
                recordNotificationCardAction(NotificationCardMetricId.RELAUNCH_CHROME);
                break;
            case NotificationCardId.MOVE_PASSWORDS:
                SyncBrowserProxyImpl.getInstance().openBatchUpload(BatchUploadPasswordsEntryPoint.PROMO_CARD);
                recordNotificationCardAction(NotificationCardMetricId.MOVE_PASSWORDS);
                break;
            case NotificationCardId.PASSKEY_UNLOCK:
                SyncBrowserProxyImpl.getInstance().startPasskeyUnlockFlow();
                recordNotificationCardAction(NotificationCardMetricId.PASSKEY_UNLOCK);
                break;
            case NotificationCardId.ACCOUNT_AWARE_PASSWORD_SIGNIN:
                NotificationCardsProxyImpl.getInstance().signInFromNotificationCard();
                recordNotificationCardAction(NotificationCardMetricId.ACCOUNT_AWARE_PASSWORD_SIGNIN);
                break;
            default:
                assertNotReached();
        }
        this.close_();
    }
    onCloseClick_() {
        NotificationCardsProxyImpl.getInstance().recordNotificationDismissed(this.card.id);
        this.close_();
    }
    close_() {
        this.dispatchEvent(new CustomEvent('card-closed', { bubbles: true, composed: true }));
    }
}
customElements.define(NotificationCardElement.is, NotificationCardElement);
