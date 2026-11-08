// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './profile_card.js';
import '/strings.m.js';
import './signin_error_dialog.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { DragDropReorderTileListDelegate } from './drag_drop_reorder_tile_list_delegate.js';
import { ManageProfilesBrowserProxyImpl } from './manage_profiles_browser_proxy.js';
import { navigateTo, NavigationMixin, Routes } from './navigation_mixin.js';
import { isAskOnStartupAllowed, isGlicVersion, isProfileCreationAllowed, isUseRefreshedUI } from './profile_picker_flags.js';
import { getCss } from './profile_picker_main_view.css.js';
import { getHtml } from './profile_picker_main_view.html.js';
const ProfilePickerMainViewElementBase = HelpBubbleMixinLit(WebUiListenerMixinLit(I18nMixinLit(NavigationMixin(CrLitElement))));
export class ProfilePickerMainViewElement extends ProfilePickerMainViewElementBase {
    static get is() {
        return 'profile-picker-main-view';
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
             * Profiles list supplied by ManageProfilesBrowserProxy.
             */
            profilesList_: { type: Array },
            profilesListLoaded_: { type: Boolean },
            hideAskOnStartup_: { type: Boolean },
            askOnStartup_: { type: Boolean },
            guestModeEnabled_: { type: Boolean },
            profileCreationAllowed_: { type: Boolean },
            pickerButtonsDisabled_: { type: Boolean },
            // Exposed to CSS as 'is-glic_'.
            isGlic_: { type: Boolean, reflect: true },
            // Exposed to CSS as 'is-refreshed-ui_'.
            isRefreshedUI_: { type: Boolean, reflect: true },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #profilesList__accessor_storage = [];
    get profilesList_() { return this.#profilesList__accessor_storage; }
    set profilesList_(value) { this.#profilesList__accessor_storage = value; }
    #profilesListLoaded__accessor_storage = false;
    get profilesListLoaded_() { return this.#profilesListLoaded__accessor_storage; }
    set profilesListLoaded_(value) { this.#profilesListLoaded__accessor_storage = value; }
    #hideAskOnStartup__accessor_storage = false;
    get hideAskOnStartup_() { return this.#hideAskOnStartup__accessor_storage; }
    set hideAskOnStartup_(value) { this.#hideAskOnStartup__accessor_storage = value; }
    #askOnStartup__accessor_storage = loadTimeData.getBoolean('askOnStartup');
    get askOnStartup_() { return this.#askOnStartup__accessor_storage; }
    set askOnStartup_(value) { this.#askOnStartup__accessor_storage = value; }
    #guestModeEnabled__accessor_storage = loadTimeData.getBoolean('isGuestModeEnabled');
    // Initial value when the page is rendered.
    // Potentially updated on profile addition/removal/sign-in.
    get guestModeEnabled_() { return this.#guestModeEnabled__accessor_storage; }
    set guestModeEnabled_(value) { this.#guestModeEnabled__accessor_storage = value; }
    #profileCreationAllowed__accessor_storage = isProfileCreationAllowed();
    get profileCreationAllowed_() { return this.#profileCreationAllowed__accessor_storage; }
    set profileCreationAllowed_(value) { this.#profileCreationAllowed__accessor_storage = value; }
    #isGlic__accessor_storage = isGlicVersion();
    get isGlic_() { return this.#isGlic__accessor_storage; }
    set isGlic_(value) { this.#isGlic__accessor_storage = value; }
    manageProfilesBrowserProxy_ = ManageProfilesBrowserProxyImpl.getInstance();
    resizeObserver_ = null;
    previousRoute_ = null;
    dragDelegate_ = null;
    dragDuration_ = 300;
    #pickerButtonsDisabled__accessor_storage = false;
    get pickerButtonsDisabled_() { return this.#pickerButtonsDisabled__accessor_storage; }
    set pickerButtonsDisabled_(value) { this.#pickerButtonsDisabled__accessor_storage = value; }
    #isRefreshedUI__accessor_storage = isUseRefreshedUI();
    get isRefreshedUI_() { return this.#isRefreshedUI__accessor_storage; }
    set isRefreshedUI_(value) { this.#isRefreshedUI__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    connectedCallback() {
        super.connectedCallback();
        this.addResizeObserver_();
        this.addWebUiListener('profiles-list-changed', this.handleProfilesListChanged_.bind(this));
        this.addWebUiListener('profile-removed', this.handleProfileRemoved_.bind(this));
        this.addWebUiListener('reset-picker-buttons', () => {
            this.enableAllPickerButtons_();
        });
        if (!this.isGlic_) {
            this.addWebUiListener('guest-mode-availability-updated', this.maybeUpdateGuestMode_.bind(this));
        }
        this.manageProfilesBrowserProxy_.initializeMainView();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
        }
        if (this.dragDelegate_) {
            this.dragDelegate_.clearListeners();
        }
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        this.hideAskOnStartup_ = this.computeHideAskOnStartup_();
    }
    firstUpdated() {
        this.$.addProfile.style.borderRadius = '8px';
        this.addEventListener('view-enter-finish', this.onViewEnterFinish_);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.initializeDragDelegate_();
        // Cast necessary to expose protected members.
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('profilesListLoaded_') ||
            changedPrivateProperties.has('profilesList_')) {
            // The strings containing the link may appear dynamically, so we need to
            // update their `click` events accordingly.
            this.updateLearnMoreLinkEvents_();
        }
    }
    onRouteChange(route) {
        if (route === Routes.MAIN) {
            // Every time we go back to the main route, we re-enable all the profile
            // card buttons.
            this.enableAllPickerButtons_();
            return;
        }
        this.previousRoute_ = route;
    }
    onViewEnterFinish_() {
        if (this.previousRoute_ !== Routes.NEW_PROFILE) {
            return;
        }
        // Focus the 'Add' button if coming back from the Add Profile flow.
        this.$.addProfile.focus();
    }
    addResizeObserver_() {
        if (this.isGlic_) {
            // In the Glic version, the separator is not needed. If added it will
            // interfere with the special background in this mode. Also a footer text
            // is shown, which already acts as a separator.
            return;
        }
        const profilesContainer = this.$.profilesContainer;
        this.resizeObserver_ = new ResizeObserver(() => {
            this.shadowRoot.querySelector('.footer').classList.toggle('division-line', profilesContainer.scrollHeight > profilesContainer.clientHeight);
        });
        this.resizeObserver_.observe(profilesContainer);
    }
    onProductLogoClick_() {
        // No animation for Glic logo version.
        if (this.isGlic_) {
            return;
        }
        this.$.pickerLogo.animate({
            transform: ['none', 'rotate(-10turn)'],
        }, {
            duration: 500,
            easing: 'cubic-bezier(1, 0, 0, 1)',
        });
    }
    /**
     * Initializes the drag delegate, making sure to clear a previously existing
     * one.
     */
    initializeDragDelegate_() {
        if (loadTimeData.getBoolean('profilesReorderingEnabled')) {
            if (this.dragDelegate_) {
                this.dragDelegate_.clearListeners();
            }
            this.dragDelegate_ = new DragDropReorderTileListDelegate(this, this.profilesList_, this, this.dragDuration_);
        }
    }
    /**
     * Handler for when the profiles list are updated.
     */
    handleProfilesListChanged_(profilesList) {
        this.profilesListLoaded_ = true;
        this.profilesList_ = profilesList;
    }
    /**
     * Called when the user modifies 'Ask on startup' preference.
     */
    onAskOnStartupCheckedChanged_(e) {
        if (this.hideAskOnStartup_) {
            return;
        }
        this.askOnStartup_ = e.detail.value;
        this.manageProfilesBrowserProxy_.askOnStartupChanged(e.detail.value);
    }
    onAddProfileClick_() {
        if (!isProfileCreationAllowed()) {
            return;
        }
        this.disableAllPickerButtons_();
        chrome.metricsPrivate.recordUserAction('ProfilePicker_AddClicked');
        navigateTo(Routes.NEW_PROFILE);
    }
    onLaunchGuestProfileClick_() {
        if (!this.guestModeEnabled_) {
            return;
        }
        this.manageProfilesBrowserProxy_.launchGuestProfile();
    }
    maybeUpdateGuestMode_(enableGuestMode) {
        if (enableGuestMode === this.guestModeEnabled_) {
            return;
        }
        this.guestModeEnabled_ = enableGuestMode;
        if (enableGuestMode) {
            this.$.browseAsGuestButton.style.display = '';
        }
        else {
            this.$.browseAsGuestButton.style.display = 'none';
        }
    }
    handleProfileRemoved_(profilePath) {
        const index = this.profilesList_.findIndex(profile => profile.profilePath === profilePath);
        assert(index !== -1);
        this.profilesList_.splice(index, 1);
        this.requestUpdate();
    }
    computeHideAskOnStartup_() {
        return !isAskOnStartupAllowed() || this.profilesList_.length < 2;
    }
    onToggleDrag_(e) {
        if (!this.dragDelegate_) {
            return;
        }
        this.dragDelegate_.toggleDrag(e.detail.toggle);
    }
    onDisableAllPickerButtons_() {
        this.disableAllPickerButtons_();
    }
    disableAllPickerButtons_() {
        this.pickerButtonsDisabled_ = true;
        if (this.dragDelegate_) {
            this.dragDelegate_.toggleDrag(false);
        }
    }
    enableAllPickerButtons_() {
        this.pickerButtonsDisabled_ = false;
        if (this.dragDelegate_) {
            this.dragDelegate_.toggleDrag(true);
        }
    }
    // Redirects the call to the handler, to create/use a browser to show the
    // Help page.
    onLearnMoreClicked_() {
        assert(this.isGlic_);
        this.manageProfilesBrowserProxy_.onLearnMoreClicked();
    }
    getTitle_() {
        return this.i18nAdvanced(this.isProfileListLoadedAndEmptyAndGlic_() ? 'glicTitleNoProfile' :
            'mainViewTitle', 
        // Special styling through 'class' attribute in some version of the
        // title.
        { attrs: ['class'] });
    }
    getSubtitle_() {
        return this.i18nAdvanced(this.isProfileListLoadedAndEmptyAndGlic_() ?
            'mainViewSubtitleGlicNoProfile' :
            'mainViewSubtitle', 
        // Special styling through 'class' attribute in some version of the
        // subtitle.
        { attrs: ['class'] });
    }
    shouldHideProfilesWrapper_() {
        if (!this.profilesListLoaded_) {
            return true;
        }
        return this.isProfileListLoadedAndEmptyAndGlic_();
    }
    shouldHideFooterText_() {
        if (this.isProfileListLoadedAndEmptyAndGlic_()) {
            return true;
        }
        return !isGlicVersion();
    }
    isProfileListLoadedAndEmptyAndGlic_() {
        return this.profilesListLoaded_ && this.profilesList_.length === 0 &&
            isGlicVersion();
    }
    updateLearnMoreLinkEvents_() {
        // This class is set in the string as a placeholder - check
        // `IDS_PROFILE_PICKER_ADD_PROFILE_HELPER_GLIC` and
        // `IDS_PROFILE_PICKER_MAIN_VIEW_SUBTITLE_GLIC_NO_PROFILE`. The given link
        // cannot be directly opened from this page since it is controlled by the
        // System Profile that is not allowed to open a browser. Therefore we
        // redirect the call to the handler which will load the last used profile
        // and open a browser with it.
        const links = this.shadowRoot.querySelectorAll('.learn-more-link');
        for (const link of links) {
            // Remove any potential existing event to avoid duplication of execution.
            this.eventTracker_.remove(link, 'click');
            // Add the event listener dynamically since we do not have access to the
            // string content before the page is loaded.
            this.eventTracker_.add(link, 'click', this.onLearnMoreClicked_.bind(this));
        }
    }
    // @override
    onDragEnd(initialIndex, finalIndex) {
        this.manageProfilesBrowserProxy_.updateProfileOrder(initialIndex, finalIndex);
    }
    // @override
    getDraggableTile(index) {
        return this.shadowRoot.querySelector(`profile-card[data-index="${index}"]`);
    }
    // @override
    getDraggableTileIndex(tile) {
        return Number(tile.dataset['index']);
    }
    setDraggingTransitionDurationForTesting(duration) {
        this.dragDuration_ = duration;
    }
    getProfileListForTesting() {
        return this.profilesList_;
    }
}
customElements.define(ProfilePickerMainViewElement.is, ProfilePickerMainViewElement);
