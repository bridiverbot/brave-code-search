// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/icons.html.js';
import './account_menu.js';
import './favicon_group.js';
import './sources_menu.js';
import './overflow_menu.js';
import './profile_tooltip.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ToolbarBrowserProxyImpl } from './contextual_tasks_toolbar_browser_proxy.js';
import { getCss } from './top_toolbar.css.js';
import { getHtml } from './top_toolbar.html.js';
import { recordAction, recordBoolean } from './utils.js';
// 
const TopToolbarElementBase = CrLitElement;
// 
// 
export class TopToolbarElement extends TopToolbarElementBase {
    static get is() {
        return 'top-toolbar';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            contextInfos: { type: Array },
            darkMode: {
                type: Boolean,
                reflect: true,
                attribute: 'dark-mode',
            },
            isAiPage: {
                type: Boolean,
                reflect: true,
                attribute: 'is-ai-page',
            },
            enableOpenInNewTabButton: {
                type: Boolean,
                reflect: true,
            },
            title: { type: String },
            hideOverflowMenuButton_: { type: Boolean },
            isExpandButtonEnabled: { type: Boolean },
            isPinButtonEnabled: { type: Boolean },
            isPinned: { type: Boolean },
            contextManagementInComposeboxEnabled_: { type: Boolean },
            isAimEligible: {
                type: Boolean,
                reflect: true,
            },
            isCobrowseEligible: { type: Boolean },
            isUserSignedIn: { type: Boolean },
            onboardingTooltipShowing: { type: Boolean },
            contextualTasksEnableSpatialModelToolbarLayout_: { type: Boolean },
            contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_: { type: Boolean },
            overflowMenuOpen_: { type: Boolean },
            isSidePanelRearchitectureEnabled_: {
                type: Boolean,
                reflect: true,
                attribute: 'is-side-panel-rearchitecture-enabled',
            },
            webuiRoundedIconsEnabled_: { type: Boolean },
            // 
            profileAvatarUrl: { type: String },
            accountFullName: { type: String },
            accountEmail: { type: String },
        };
    }
    #title_accessor_storage = '';
    get title() { return this.#title_accessor_storage; }
    set title(value) { this.#title_accessor_storage = value; }
    #contextInfos_accessor_storage = [];
    get contextInfos() { return this.#contextInfos_accessor_storage; }
    set contextInfos(value) { this.#contextInfos_accessor_storage = value; }
    #darkMode_accessor_storage = false;
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
    #isAiPage_accessor_storage = loadTimeData.getBoolean('isAiPage');
    get isAiPage() { return this.#isAiPage_accessor_storage; }
    set isAiPage(value) { this.#isAiPage_accessor_storage = value; }
    #isAimEligible_accessor_storage = loadTimeData.getBoolean('isAimEligible');
    get isAimEligible() { return this.#isAimEligible_accessor_storage; }
    set isAimEligible(value) { this.#isAimEligible_accessor_storage = value; }
    #isCobrowseEligible_accessor_storage = loadTimeData.getBoolean('isCobrowseEligible');
    get isCobrowseEligible() { return this.#isCobrowseEligible_accessor_storage; }
    set isCobrowseEligible(value) { this.#isCobrowseEligible_accessor_storage = value; }
    #profileAvatarUrl_accessor_storage = loadTimeData.valueExists('profileAvatarUrl') ?
        loadTimeData.getString('profileAvatarUrl') :
        '';
    // 
    get profileAvatarUrl() { return this.#profileAvatarUrl_accessor_storage; }
    set profileAvatarUrl(value) { this.#profileAvatarUrl_accessor_storage = value; }
    #accountFullName_accessor_storage = '';
    get accountFullName() { return this.#accountFullName_accessor_storage; }
    set accountFullName(value) { this.#accountFullName_accessor_storage = value; }
    #accountEmail_accessor_storage = '';
    get accountEmail() { return this.#accountEmail_accessor_storage; }
    set accountEmail(value) { this.#accountEmail_accessor_storage = value; }
    #isSidePanelRearchitectureEnabled__accessor_storage = loadTimeData.getBoolean('contextualTasksSidePanelRearchitectureEnabled');
    get isSidePanelRearchitectureEnabled_() { return this.#isSidePanelRearchitectureEnabled__accessor_storage; }
    set isSidePanelRearchitectureEnabled_(value) { this.#isSidePanelRearchitectureEnabled__accessor_storage = value; }
    #isUserSignedIn_accessor_storage = true;
    get isUserSignedIn() { return this.#isUserSignedIn_accessor_storage; }
    set isUserSignedIn(value) { this.#isUserSignedIn_accessor_storage = value; }
    #enableOpenInNewTabButton_accessor_storage = false;
    get enableOpenInNewTabButton() { return this.#enableOpenInNewTabButton_accessor_storage; }
    set enableOpenInNewTabButton(value) { this.#enableOpenInNewTabButton_accessor_storage = value; }
    #onboardingTooltipShowing_accessor_storage = false;
    get onboardingTooltipShowing() { return this.#onboardingTooltipShowing_accessor_storage; }
    set onboardingTooltipShowing(value) { this.#onboardingTooltipShowing_accessor_storage = value; }
    toolbarBrowserProxy_ = ToolbarBrowserProxyImpl.getInstance();
    toolbarListenerIds_ = [];
    #isExpandButtonEnabled_accessor_storage = loadTimeData.getBoolean('expandButtonEnabled');
    // 
    get isExpandButtonEnabled() { return this.#isExpandButtonEnabled_accessor_storage; }
    set isExpandButtonEnabled(value) { this.#isExpandButtonEnabled_accessor_storage = value; }
    #isPinButtonEnabled_accessor_storage = loadTimeData.getBoolean('enablePinButton');
    get isPinButtonEnabled() { return this.#isPinButtonEnabled_accessor_storage; }
    set isPinButtonEnabled(value) { this.#isPinButtonEnabled_accessor_storage = value; }
    hideOverflowMenuOnAiPageEnabled_ = loadTimeData.getBoolean('hideMenuOnAiPageEnabled');
    #contextualTasksEnableSpatialModelToolbarLayout__accessor_storage = loadTimeData.getBoolean('contextualTasksEnableSpatialModelToolbarLayout');
    get contextualTasksEnableSpatialModelToolbarLayout_() { return this.#contextualTasksEnableSpatialModelToolbarLayout__accessor_storage; }
    set contextualTasksEnableSpatialModelToolbarLayout_(value) { this.#contextualTasksEnableSpatialModelToolbarLayout__accessor_storage = value; }
    #contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow__accessor_storage = loadTimeData.getBoolean('contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow');
    get contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_() { return this.#contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow__accessor_storage; }
    set contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_(value) { this.#contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow__accessor_storage = value; }
    #hideOverflowMenuButton__accessor_storage = this.hideOverflowMenuOnAiPageEnabled_ && this.isAiPage;
    get hideOverflowMenuButton_() { return this.#hideOverflowMenuButton__accessor_storage; }
    set hideOverflowMenuButton_(value) { this.#hideOverflowMenuButton__accessor_storage = value; }
    #isPinned_accessor_storage = loadTimeData.getBoolean('isSidePanelPinned');
    get isPinned() { return this.#isPinned_accessor_storage; }
    set isPinned(value) { this.#isPinned_accessor_storage = value; }
    #contextManagementInComposeboxEnabled__accessor_storage = loadTimeData.getBoolean('contextManagementInComposeboxEnabled');
    get contextManagementInComposeboxEnabled_() { return this.#contextManagementInComposeboxEnabled__accessor_storage; }
    set contextManagementInComposeboxEnabled_(value) { this.#contextManagementInComposeboxEnabled__accessor_storage = value; }
    #overflowMenuOpen__accessor_storage = false;
    get overflowMenuOpen_() { return this.#overflowMenuOpen__accessor_storage; }
    set overflowMenuOpen_(value) { this.#overflowMenuOpen__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    wasProfileIndicatorShown_ = false;
    boundOnWindowBlur_ = this.onWindowBlur_.bind(this);
    connectedCallback() {
        super.connectedCallback();
        this.toolbarListenerIds_ = [
            this.toolbarBrowserProxy_.callbackRouter.onSidePanelPinStateChanged
                .addListener((isPinned) => {
                this.isPinned = isPinned;
            }),
            this.toolbarBrowserProxy_.callbackRouter.onContextUpdated.addListener((contextInfos) => {
                this.contextInfos = contextInfos;
            }),
            this.toolbarBrowserProxy_.callbackRouter.setExpandButtonEnabled
                .addListener((enabled) => {
                this.isExpandButtonEnabled = enabled;
            }),
            this.toolbarBrowserProxy_.callbackRouter.setProfileAvatarUrl.addListener((avatarUrl) => {
                this.profileAvatarUrl = avatarUrl;
            }),
            this.toolbarBrowserProxy_.callbackRouter.setAccountInfo.addListener((fullName, email) => {
                this.accountFullName = fullName;
                this.accountEmail = email;
            }),
        ];
        window.addEventListener('blur', this.boundOnWindowBlur_);
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.toolbarListenerIds_.forEach(id => this.toolbarBrowserProxy_.callbackRouter.removeListener(id));
        this.toolbarListenerIds_ = [];
        this.wasProfileIndicatorShown_ = false;
        window.removeEventListener('blur', this.boundOnWindowBlur_);
        // 
    }
    // Dismisses any open menu when the side panel loses focus. Clicks outside of
    // the side panel (e.g. on the page contents, the Lens crop frame, or a search
    // result in the sandboxed results frame) never reach this document, so
    // `cr-action-menu`'s own light dismiss does not run. See crbug.com/543760434.
    onWindowBlur_() {
        this.$.accountMenu.getIfExists()?.close();
        this.$.overflowMenu.getIfExists()?.close();
        this.$.sourcesMenu.getIfExists()?.close();
        this.getProfileTooltip_()?.hide();
    }
    // 
    updated(changedProperties) {
        super.updated(changedProperties);
        const isProfileIndicatorShown = this.isSidePanelRearchitectureEnabled_ &&
            Boolean(this.profileAvatarUrl);
        if (isProfileIndicatorShown && !this.wasProfileIndicatorShown_) {
            recordBoolean('ContextualTasks.WebUI.AccountMenuButton.Shown', true);
        }
        this.wasProfileIndicatorShown_ = isProfileIndicatorShown;
        if (changedProperties.has('isAiPage') ||
            changedProperties.has('title') ||
            changedProperties.has('onboardingTooltipShowing')) {
            this.hideOverflowMenuButton_ =
                this.isAiPage && this.hideOverflowMenuOnAiPageEnabled_;
            // 
        }
    }
    isPermissionShowing_() {
        // 
        return false;
        // 
        // 
    }
    shouldShowSourcesMenuButton_() {
        return this.contextInfos.length > 0;
    }
    onPinClick_() {
        this.isPinned = !this.isPinned;
    }
    onCloseButtonClick_() {
        recordAction('ContextualTasks.WebUI.UserAction.CloseSidePanel');
        this.toolbarBrowserProxy_.handler.closeSidePanel();
    }
    onNewThreadClick_() {
        this.fire('new-thread-click');
    }
    onOverflowMenuNewThreadClick_(e) {
        // The overflow menu's 'new-thread-click' event is composed and bubbles out
        // of this element's shadow root, so stop it here and re-fire a single event
        // from the toolbar. Otherwise listeners on <top-toolbar> receive it twice.
        e.stopPropagation();
        this.fire('new-thread-click');
    }
    onThreadHistoryClick_() {
        recordAction('ContextualTasks.WebUI.UserAction.OpenThreadHistory');
        this.toolbarBrowserProxy_.handler.showThreadHistory();
    }
    onOverflowMenuButtonClick_(e) {
        recordAction('ContextualTasks.WebUI.UserAction.OpenOverflowMenu');
        this.$.overflowMenu.get().showAt(e.target);
    }
    onOverflowMenuOpenChanged_(e) {
        this.overflowMenuOpen_ = e.detail.value;
    }
    onProfileIndicatorClick_(e) {
        recordAction('ContextualTasks.WebUI.UserAction.OpenAccountMenu');
        this.getProfileTooltip_()?.hide();
        this.$.accountMenu.get().showAt(e.currentTarget);
    }
    onSourcesClick_(e) {
        recordAction('ContextualTasks.WebUI.UserAction.OpenSourcesMenu');
        this.$.sourcesMenu.get().showAt(e.target);
    }
    onOpenInNewTabClick_() {
        recordAction('ContextualTasks.WebUI.UserAction.OpenInNewTab');
        this.toolbarBrowserProxy_.handler.moveTaskUiToNewTab();
    }
    onLogoPointerdown_() {
        if (!this.isSidePanelRearchitectureEnabled_) {
            return;
        }
        this.toolbarBrowserProxy_.handler.onLogoPointerDown();
    }
    onLogoClick_(e) {
        if (!this.isSidePanelRearchitectureEnabled_) {
            return;
        }
        // Keyboard synthetic clicks generate PointerEvents with an empty
        // pointerType in WebUI, whereas natural pointer clicks have a valid
        // pointerType (e.g., 'mouse', 'touch', 'pen').
        this.toolbarBrowserProxy_.handler.showPageInfoBubble(e instanceof PointerEvent && e.pointerType !== '');
    }
    onProfileIndicatorPointerenter_(e) {
        recordAction('ContextualTasks.WebUI.UserAction.HoverAccountMenuButton');
        this.getProfileTooltip_()?.scheduleShow(e.currentTarget);
    }
    onProfileIndicatorPointerleave_() {
        this.getProfileTooltip_()?.scheduleHide();
    }
    getProfileTooltip_() {
        return this.shadowRoot.querySelector('#profileTooltip');
    }
}
customElements.define(TopToolbarElement.is, TopToolbarElement);
