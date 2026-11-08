// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-manage-profile' is the settings subpage containing controls to
 * edit a profile's name, icon, and desktop shortcut.
 */
import 'chrome://resources/cr_components/theme_color_picker/theme_color_picker.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '../settings_page/settings_subpage.js';
import { ProfileInfoBrowserProxyImpl } from '/shared/settings/people_page/profile_info_browser_proxy.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsViewMixinLit } from '../settings_page/settings_view_mixin_lit.js';
import { getCss } from './manage_profile.css.js';
import { getHtml } from './manage_profile.html.js';
import { ManageProfileBrowserProxyImpl, ProfileShortcutStatus } from './manage_profile_browser_proxy.js';
const SettingsManageProfileElementBase = SettingsViewMixinLit(WebUiListenerMixinLit(CrLitElement));
export class SettingsManageProfileElement extends SettingsManageProfileElementBase {
    static get is() {
        return 'settings-manage-profile';
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
             * The newly selected avatar. Defaults to null, populated only if the user
             * manually changes the avatar selection. The observer ensures that the
             * changes are propagated to the C++.
             */
            profileAvatar_: { type: Object },
            /**
             * The current profile name.
             */
            profileName_: { type: String },
            /**
             * True if the current profile has a shortcut.
             */
            hasProfileShortcut_: { type: Boolean },
            /**
             * The available icons for selection.
             */
            availableIcons: { type: Array },
            /**
             * True if the profile shortcuts feature is enabled.
             */
            isProfileShortcutSettingVisible_: { type: Boolean },
            hasEnterpriseLabel_: { type: Boolean },
            /**
             * TODO(dpapad): Move this back to the HTML file when the Polymer2 version
             * of the code is deleted. Because of "\" being a special character in a
             * JS string, can't satisfy both Polymer2 and Polymer3 at the same time
             * from the HTML file.
             */
            pattern_: { type: String },
        };
    }
    #profileAvatar__accessor_storage = null;
    get profileAvatar_() { return this.#profileAvatar__accessor_storage; }
    set profileAvatar_(value) { this.#profileAvatar__accessor_storage = value; }
    #profileName__accessor_storage = '';
    get profileName_() { return this.#profileName__accessor_storage; }
    set profileName_(value) { this.#profileName__accessor_storage = value; }
    #hasProfileShortcut__accessor_storage = false;
    get hasProfileShortcut_() { return this.#hasProfileShortcut__accessor_storage; }
    set hasProfileShortcut_(value) { this.#hasProfileShortcut__accessor_storage = value; }
    #availableIcons_accessor_storage = [];
    get availableIcons() { return this.#availableIcons_accessor_storage; }
    set availableIcons(value) { this.#availableIcons_accessor_storage = value; }
    #isProfileShortcutSettingVisible__accessor_storage = false;
    get isProfileShortcutSettingVisible_() { return this.#isProfileShortcutSettingVisible__accessor_storage; }
    set isProfileShortcutSettingVisible_(value) { this.#isProfileShortcutSettingVisible__accessor_storage = value; }
    #hasEnterpriseLabel__accessor_storage = loadTimeData.getBoolean('hasEnterpriseLabel');
    get hasEnterpriseLabel_() { return this.#hasEnterpriseLabel__accessor_storage; }
    set hasEnterpriseLabel_(value) { this.#hasEnterpriseLabel__accessor_storage = value; }
    #pattern__accessor_storage = '.*\\S.*';
    get pattern_() { return this.#pattern__accessor_storage; }
    set pattern_(value) { this.#pattern__accessor_storage = value; }
    browserProxy_ = ManageProfileBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        const setIcons = (icons) => {
            this.availableIcons = icons;
        };
        this.addWebUiListener('available-icons-changed', setIcons);
        this.browserProxy_.getAvailableIcons().then(setIcons);
        ProfileInfoBrowserProxyImpl.getInstance().getProfileInfo().then(this.onProfileInfoChanged_.bind(this));
        this.addWebUiListener('profile-info-changed', this.onProfileInfoChanged_.bind(this));
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (Router.getInstance().getCurrentRoute() === routes.MANAGE_PROFILE) {
            if (this.profileName_) {
                this.$.nameInput.value = this.profileName_;
            }
            if (loadTimeData.getBoolean('profileShortcutsEnabled')) {
                this.browserProxy_.getProfileShortcutStatus().then(status => {
                    if (status ===
                        ProfileShortcutStatus.PROFILE_SHORTCUT_SETTING_HIDDEN) {
                        this.isProfileShortcutSettingVisible_ = false;
                        return;
                    }
                    this.isProfileShortcutSettingVisible_ = true;
                    this.hasProfileShortcut_ =
                        status === ProfileShortcutStatus.PROFILE_SHORTCUT_FOUND;
                });
            }
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('profileAvatar_')) {
            this.profileAvatarChanged_();
        }
    }
    onProfileInfoChanged_(info) {
        this.profileName_ = info.name;
    }
    /**
     * Handler for when the profile name field is changed, then blurred.
     */
    onNameInputChange_(event) {
        const target = event.target;
        if (target.invalid) {
            return;
        }
        this.browserProxy_.setProfileName(target.value);
    }
    /**
     * Handler for profile name keydowns.
     */
    onNameInputKeydown_(event) {
        if (event.key === 'Escape') {
            const target = event.target;
            target.value = this.profileName_;
            target.blur();
        }
    }
    /**
     * Handler for when the profile avatar is changed by the user.
     */
    profileAvatarChanged_() {
        if (this.profileAvatar_ === null) {
            return;
        }
        if (this.profileAvatar_.isGaiaAvatar) {
            this.browserProxy_.setProfileIconToGaiaAvatar();
        }
        else {
            this.browserProxy_.setProfileIconToDefaultAvatar(this.profileAvatar_.index);
        }
    }
    onSelectedAvatarChanged_(e) {
        this.profileAvatar_ = e.detail.value;
    }
    /**
     * Handler for when the profile shortcut toggle is changed.
     */
    onHasProfileShortcutChange_(event) {
        this.hasProfileShortcut_ = event.detail;
        if (this.hasProfileShortcut_) {
            this.browserProxy_.addProfileShortcut();
        }
        else {
            this.browserProxy_.removeProfileShortcut();
        }
    }
    // SettingsViewMixin implementation.
    focusBackButton() {
        this.shadowRoot.querySelector('settings-subpage').focusBackButton();
    }
}
customElements.define(SettingsManageProfileElement.is, SettingsManageProfileElement);
