// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './shared_style.css.js';
import './checkup_list_item.js';
import { PrefServiceObserverMixin } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './checkup_details_section.html.js';
import { PasswordAutomaticChangeState } from './password_manager.mojom-webui.js';
import { PasswordCheckInteraction, PasswordManagerImpl } from './password_manager_proxy.js';
import { CheckupSubpage, Page, RouteObserverMixin, Router } from './router.js';
export class ReusedPasswordInfo {
    constructor(credentials) {
        this.credentials = credentials;
    }
    async init() {
        this.title = await PluralStringProxyImpl.getInstance().getPluralString('numberOfPasswordReuse', this.credentials.length);
    }
    credentials;
    title;
}
const CheckupDetailsSectionElementBase = PrefServiceObserverMixin(I18nMixin(RouteObserverMixin(PolymerElement)));
export class CheckupDetailsSectionElement extends CheckupDetailsSectionElementBase {
    static get is() {
        return 'checkup-details-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            pageTitle_: String,
            pageSubtitle_: String,
            insecurityType_: {
                type: String,
                observer: 'updateShownCredentials_',
            },
            groups_: {
                type: Array,
            },
            allInsecureCredentials_: {
                type: Array,
                observer: 'updateShownCredentials_',
            },
            shownInsecureCredentials_: {
                type: Array,
                observer: 'onCredentialsChanged_',
            },
            credentialsWithReusedPassword_: {
                type: Array,
            },
            mutedCompromisedCredentials_: {
                type: Array,
            },
            activeListItem_: {
                type: Object,
                value: null,
            },
            /**
             * The ids of insecure credentials for which user clicked "Change
             * Password" button
             */
            clickedChangePasswordIds_: {
                type: Object,
                value: () => new Set(),
            },
            isMutingDisabled_: {
                type: Boolean,
                value: false,
            },
            passwordChangeStates_: {
                type: Object,
                value: () => ({}),
            },
        };
    }
    insecureCredentialsChangedListener_ = null;
    listenerId_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.addPrefObserver('profile.password_dismiss_compromised_alert', pref => {
            this.isMutingDisabled_ = !pref.value;
        });
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groups_ = groups);
        };
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            // TODO(crbug.com/532045774): handle the case when the id of the
            // credential has changed and APC tracking fails
            this.allInsecureCredentials_ = insecureCredentials;
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        this.listenerId_ =
            PasswordManagerImpl.getInstance()
                .callbackRouter.onPasswordAutomaticChangeStateUpdated.addListener((id, state) => this.onStateUpdated_(id, state));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.insecureCredentialsChangedListener_) {
            PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        }
        if (this.listenerId_ !== null) {
            PasswordManagerImpl.getInstance().callbackRouter.removeListener(this.listenerId_);
            this.listenerId_ = null;
        }
    }
    onStateUpdated_(id, state) {
        this.set(`passwordChangeStates_.${id}`, state);
    }
    getPasswordChangeStateFor_(id, _statesRecord) {
        return this.passwordChangeStates_[id] ||
            PasswordAutomaticChangeState.kInactive;
    }
    currentRouteChanged(route, oldRoute) {
        if (route.page !== Page.CHECKUP_DETAILS) {
            return;
        }
        this.insecurityType_ = route.details;
        // Focus back button when it's not direct navigation.
        if (oldRoute !== undefined) {
            setTimeout(() => {
                this.$.backButton.focus();
            });
        }
    }
    navigateBack_() {
        Router.getInstance().navigateTo(Page.CHECKUP);
    }
    compareCredentialsByGroup_ = (lhs, rhs) => {
        const lhsName = this.getCurrentGroup_(lhs.id)?.name || '';
        const rhsName = this.getCurrentGroup_(rhs.id)?.name || '';
        if (lhsName === rhsName) {
            return 0;
        }
        return lhsName > rhsName ? 1 : -1;
    };
    matchesInsecurityType_(credential, types) {
        assert(credential.compromisedInfo);
        return credential.compromisedInfo.compromiseTypes.some(t => types.includes(t));
    }
    getCredentialsForCurrentType_() {
        const types = this.getInsecurityType_();
        return (this.allInsecureCredentials_ || [])
            .filter(cred => this.matchesInsecurityType_(cred, types));
    }
    async updateShownCredentials_() {
        if (!this.insecurityType_ || !this.allInsecureCredentials_) {
            return;
        }
        const currentTypeCredentials = this.getCredentialsForCurrentType_();
        // 1. Compromised subpage (Leaked / Phished)
        if (this.isCompromisedType()) {
            // Compromised credentials can be muted. Show muted credentials
            // separately.
            this.mutedCompromisedCredentials_ =
                currentTypeCredentials.filter(cred => cred.compromisedInfo.isMuted);
            this.shownInsecureCredentials_ =
                currentTypeCredentials.filter(cred => !cred.compromisedInfo.isMuted);
            return;
        }
        // 2. Reused subpage
        if (this.isReusedType()) {
            const requestedType = this.insecurityType_;
            this.shownInsecureCredentials_ = currentTypeCredentials;
            const allReusedCredentials = await PasswordManagerImpl.getInstance()
                .getCredentialsWithReusedPassword();
            if (this.insecurityType_ !== requestedType) {
                return;
            }
            const credentialsWithReusedPassword = await Promise.all(allReusedCredentials.map(async (credentials) => {
                const reuseInfo = new ReusedPasswordInfo(credentials.entries.sort(this.compareCredentialsByGroup_));
                await reuseInfo.init();
                return reuseInfo;
            }));
            if (this.insecurityType_ !== requestedType) {
                return;
            }
            this.credentialsWithReusedPassword_ = credentialsWithReusedPassword.sort((lhs, rhs) => (lhs.credentials.length === rhs.credentials.length ?
                0 :
                (lhs.credentials.length > rhs.credentials.length ? -1 : 1)));
            return;
        }
        // 3. Weak subpage
        this.shownInsecureCredentials_ =
            currentTypeCredentials.sort(this.compareCredentialsByGroup_);
    }
    async onCredentialsChanged_() {
        assert(this.insecurityType_);
        this.pageTitle_ = await PluralStringProxyImpl.getInstance().getPluralString(this.insecurityType_.concat('Passwords'), this.shownInsecureCredentials_.length);
        if (this.insecurityType_ === CheckupSubpage.COMPROMISED) {
            this.pageSubtitle_ =
                await PluralStringProxyImpl.getInstance().getPluralString(`${this.insecurityType_}PasswordsTitle`, this.shownInsecureCredentials_.length);
        }
        else {
            this.pageSubtitle_ = this.i18n(`${this.insecurityType_}PasswordsTitle`);
        }
    }
    getInsecurityType_() {
        assert(this.insecurityType_);
        switch (this.insecurityType_) {
            case CheckupSubpage.COMPROMISED:
                return [
                    chrome.passwordsPrivate.CompromiseType.LEAKED,
                    chrome.passwordsPrivate.CompromiseType.PHISHED,
                ];
            case CheckupSubpage.REUSED:
                return [chrome.passwordsPrivate.CompromiseType.REUSED];
            case CheckupSubpage.WEAK:
                return [chrome.passwordsPrivate.CompromiseType.WEAK];
            default:
                assertNotReached();
        }
    }
    getDescription_() {
        assert(this.insecurityType_);
        return this.i18n(`${this.insecurityType_}PasswordsDescription`);
    }
    isCompromisedType() {
        return this.insecurityType_ === CheckupSubpage.COMPROMISED;
    }
    isReusedType() {
        return this.insecurityType_ === CheckupSubpage.REUSED;
    }
    onMoreActionsClick_(event) {
        const target = event.detail.target;
        this.$.moreActionsMenu.showAt(target);
        this.activeListItem_ =
            event.detail.listItem;
    }
    onMenuShowPasswordClick_() {
        this.activeListItem_?.showHidePassword();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.SHOW_PASSWORD);
    }
    onMenuEditPasswordClick_() {
        this.activeListItem_?.showEditDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.EDIT_PASSWORD);
    }
    onMenuDeletePasswordClick_() {
        this.activeListItem_?.showDeleteDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
    }
    getShowHideTitle_() {
        return this.activeListItem_?.getShowHideButtonLabel() || '';
    }
    getMuteUnmuteLabel_() {
        return this.activeListItem_?.item.compromisedInfo?.isMuted === true ?
            this.i18n('unmuteCompromisedPassword') :
            this.i18n('muteCompromisedPassword');
    }
    onMenuMuteUnmuteClick_() {
        assert(this.activeListItem_);
        if (this.activeListItem_.item.compromisedInfo?.isMuted === true) {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.UNMUTE_PASSWORD);
            PasswordManagerImpl.getInstance().unmuteInsecureCredential(this.activeListItem_.item);
        }
        else {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.MUTE_PASSWORD);
            PasswordManagerImpl.getInstance().muteInsecureCredential(this.activeListItem_.item);
        }
        this.$.moreActionsMenu.close();
    }
    getCurrentGroup_(id) {
        return this.groups_?.find(group => group.entries.some(entry => entry.id === id));
    }
    onChangePasswordClick_(event) {
        this.clickedChangePasswordIds_.add(event.detail);
        this.notifyPath('clickedChangePasswordIds_.size');
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.CHANGE_PASSWORD);
    }
    clickedChangePassword_(item) {
        return this.clickedChangePasswordIds_.has(item.id);
    }
}
customElements.define(CheckupDetailsSectionElement.is, CheckupDetailsSectionElement);
