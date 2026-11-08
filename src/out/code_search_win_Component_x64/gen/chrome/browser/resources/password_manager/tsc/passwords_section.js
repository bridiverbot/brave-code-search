// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '/strings.m.js';
import './password_list_item.js';
import './dialogs/add_password_dialog.js';
import './dialogs/auth_timed_out_dialog.js';
import './user_utils_mixin.js';
import './notification_cards/notification_card.js';
import './notification_cards/notification_cards_browser_proxy.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { htmlEscape } from 'chrome://resources/js/util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { NotificationCardId } from './notification_cards/notification_card.js';
import { NotificationCardsProxyImpl } from './notification_cards/notification_cards_browser_proxy.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { getTemplate } from './passwords_section.html.js';
import { isSavingNewPasswordsBlockedByMandatoryPolicy } from './prefs/policy_utils.js';
import { Page, RouteObserverMixin, Router, UrlParam } from './router.js';
import { UserUtilMixin } from './user_utils_mixin.js';
const PasswordsSectionElementBase = PrefServiceObserverMixin(UserUtilMixin(RouteObserverMixin(I18nMixin(PolymerElement))));
export class PasswordsSectionElement extends PasswordsSectionElementBase {
    static get is() {
        return 'passwords-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            focusConfig: {
                type: Object,
                observer: 'focusConfigChanged_',
            },
            /**
             * Password groups displayed in the UI.
             */
            groups_: {
                type: Array,
                value: null,
                observer: 'onGroupsChanged_',
            },
            /** Filter on the saved passwords and exceptions. */
            searchTerm_: {
                type: String,
                value: '',
            },
            shownGroupsCount_: {
                type: Number,
                value: 0,
                observer: 'announceSearchResults_',
            },
            showAddPasswordDialog_: Boolean,
            showAuthTimedOutDialog_: Boolean,
            movePasswordsText_: String,
            importPasswordsText_: {
                type: String,
                computed: 'computeImportPasswordsText_(isAccountStoreUser, ' +
                    'isSyncingPasswords, accountEmail)',
            },
            passwordsOnDevice_: {
                type: Array,
                computed: 'computePasswordsOnDevice_(groups_)',
            },
            showPasswordsDescription_: {
                type: Boolean,
                computed: 'computeShowPasswordsDescription_(groups_, ' +
                    'searchTerm_)',
            },
            notificationCard_: {
                type: Object,
                value: null,
            },
            passwordSavingBlockedByPolicy_: {
                type: Boolean,
                value: false,
            },
            shouldShowNotificationCard_: {
                type: Boolean,
                computed: 'computeShouldShowNotificationCard_(' +
                    'notificationCard_, isAccountStoreUser, accountEmail, ' +
                    'passwordsOnDevice_)',
            },
            /**
             * The element to return focus to, when moving from details page to
             * passwords page.
             */
            activeListItem_: { type: Object, value: null },
        };
    }
    setSavedPasswordsListener_ = null;
    authTimedOutListener_;
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('credentials_enable_service', pref => {
            this.passwordSavingBlockedByPolicy_ =
                isSavingNewPasswordsBlockedByMandatoryPolicy(pref);
        });
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => {
                this.groups_ = groups;
            });
        };
        this.setSavedPasswordsListener_ = _passwordList => {
            if (_passwordList.length === 0 &&
                this.notificationCard_?.id === NotificationCardId.CHECKUP) {
                this.notificationCard_ = null;
            }
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        NotificationCardsProxyImpl.getInstance()
            .getAvailableNotificationCard()
            .then(card => this.notificationCard_ = card);
        this.authTimedOutListener_ = this.onAuthTimedOut_.bind(this);
        window.addEventListener('auth-timed-out', this.authTimedOutListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
        assert(this.authTimedOutListener_);
        window.removeEventListener('hashchange', this.authTimedOutListener_);
        this.authTimedOutListener_ = null;
    }
    currentRouteChanged(newRoute) {
        const searchTerm = newRoute.queryParameters.get(UrlParam.SEARCH_TERM) || '';
        if (searchTerm !== this.searchTerm_) {
            this.searchTerm_ = searchTerm;
        }
    }
    focusFirstResult() {
        if (!this.searchTerm_) {
            // If search term is empty don't do anything.
            return;
        }
        const result = this.shadowRoot.querySelector('password-list-item');
        if (result) {
            result.focus();
        }
    }
    hideGroupsList_() {
        if (this.groups_ === null) {
            return true;
        }
        return this.groups_.filter(this.groupFilter_()).length === 0;
    }
    groupFilter_() {
        const term = this.searchTerm_.trim().toLowerCase();
        // Group is matching if:
        // * group name includes term,
        // * any credential's username within a group includes a term,
        // * any credential within a group includes a term in a domain.
        return group => group.name.toLowerCase().includes(term) ||
            group.entries.some(credential => credential.username.toLowerCase().includes(term) ||
                credential.affiliatedDomains?.some(domain => domain.name.toLowerCase().includes(term)));
    }
    async announceSearchResults_() {
        if (!this.searchTerm_.trim()) {
            return;
        }
        const searchResult = await PluralStringProxyImpl.getInstance().getPluralString('searchResults', this.shownGroupsCount_);
        getAnnouncerInstance().announce(searchResult);
    }
    onAddPasswordClick_() {
        this.executeIfTrustedVaultUnlocked(() => {
            this.showAddPasswordDialog_ = true;
        });
    }
    onAddPasswordDialogClose_() {
        this.showAddPasswordDialog_ = false;
    }
    onAuthTimedOut_() {
        this.showAuthTimedOutDialog_ = true;
    }
    onAuthTimedOutDialogClose_() {
        this.showAuthTimedOutDialog_ = false;
    }
    computePasswordsOnDevice_() {
        if (this.groups_ === null) {
            return [];
        }
        const localStorage = [
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT,
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
        ];
        return this.groups_.map(group => group.entries)
            .flat()
            .filter(entry => localStorage.includes(entry.storedIn));
    }
    async onGroupsChanged_() {
        this.movePasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('movePasswords', this.computePasswordsOnDevice_().length);
    }
    getMovePasswordsText_() {
        return sanitizeInnerHtml(this.movePasswordsText_);
    }
    showImportPasswordsOption_() {
        if (this.groups_ === null || this.actionableError === null ||
            this.passwordSavingBlockedByPolicy_) {
            return false;
        }
        return this.groups_.length === 0 && !this.isTrustedVaultKeyNeeded();
    }
    showTrustedVaultUnlockOption_() {
        if (this.groups_ === null || this.actionableError === null) {
            return false;
        }
        return this.groups_.length === 0 && this.isTrustedVaultKeyNeeded();
    }
    computeImportPasswordsText_() {
        if (this.isAccountStoreUser) {
            return this.i18nAdvanced('emptyStateImportAccountStore');
        }
        if (this.isSyncingPasswords) {
            return this.i18nAdvanced('emptyStateImportSyncing', {
                substitutions: [
                    this.i18n('localPasswordManager'),
                    htmlEscape(this.accountEmail),
                ],
            });
        }
        return this.i18nAdvanced('emptyStateImportDevice');
    }
    onTrustedVaultUnlockClick_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            e.preventDefault();
            PasswordManagerImpl.getInstance().startTrustedVaultUnlock();
        }
    }
    onImportPasswordsClick_(e) {
        const target = e.target;
        if (target.tagName === 'A') {
            e.preventDefault();
            const params = new URLSearchParams();
            params.set(UrlParam.START_IMPORT, 'true');
            Router.getInstance().navigateTo(Page.SETTINGS, null, params);
        }
    }
    onCardClosed_() {
        this.notificationCard_ = null;
    }
    computeShowPasswordsDescription_() {
        return this.groups_ !== null && !this.searchTerm_ &&
            this.groups_.length > 0;
    }
    showNoPasswordsFound_() {
        return this.groups_ !== null && this.hideGroupsList_() &&
            this.groups_.length > 0;
    }
    onPasswordDetailsShown_(e) {
        this.activeListItem_ = e.detail;
    }
    focusConfigChanged_(_newConfig, oldConfig) {
        // focusConfig is set only once on the parent, so this observer should
        // only fire once.
        assert(!oldConfig);
        this.focusConfig.set(Page.PASSWORD_DETAILS, () => {
            if (!this.activeListItem_) {
                return;
            }
            focusWithoutInk(this.activeListItem_);
        });
    }
    computeSortFunction_(searchTerm) {
        // Keep current order when not searching.
        if (!searchTerm) {
            return null;
        }
        // Always show group with matching name in the top, fallback to alphabetical
        // order when matching type is the same.
        return function (a, b) {
            const doesNameMatchA = a.name.toLowerCase().includes(searchTerm);
            const doesNameMatchB = b.name.toLowerCase().includes(searchTerm);
            if (doesNameMatchA === doesNameMatchB) {
                return a.name.localeCompare(b.name);
            }
            return doesNameMatchA ? -1 : 1;
        };
    }
    computeShouldShowNotificationCard_() {
        if (!this.notificationCard_) {
            return false;
        }
        if (this.notificationCard_.id ===
            NotificationCardId.ACCOUNT_AWARE_PASSWORD_SIGNIN) {
            return !this.isAccountStoreUser && !this.accountEmail;
        }
        if (this.notificationCard_.id !== NotificationCardId.MOVE_PASSWORDS) {
            return true;
        }
        // Check if there are local passwords and they can be moved to account.
        if (this.computePasswordsOnDevice_().length === 0 ||
            !this.isAccountStoreUser) {
            return false;
        }
        return true;
    }
}
customElements.define(PasswordsSectionElement.is, PasswordsSectionElement);
