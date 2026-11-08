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
// clang-format off
// 

import type {CrLazyRenderLitElement} from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import {loadTimeData} from 'chrome://resources/js/load_time_data.js';
import {CrLitElement} from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type {PropertyValues} from 'chrome://resources/lit/v3_0/lit.rollup.js';

import type {AccountMenuElement} from './account_menu.js';
import type {ContextInfo} from './contextual_tasks_toolbar.mojom-webui.js';
import {ToolbarBrowserProxyImpl} from './contextual_tasks_toolbar_browser_proxy.js';
import type {OverflowMenuElement} from './overflow_menu.js';
import type {ProfileTooltipElement} from './profile_tooltip.js';
import type {SourcesMenuElement} from './sources_menu.js';
import {getCss} from './top_toolbar.css.js';
import {getHtml} from './top_toolbar.html.js';
import {recordAction, recordBoolean} from './utils.js';
// clang-format on

export interface TopToolbarElement {
  $: {
    accountMenu: CrLazyRenderLitElement<AccountMenuElement>,
    closeButton: HTMLImageElement,
    overflowMenu: CrLazyRenderLitElement<OverflowMenuElement>,
    newThreadButton: HTMLImageElement,
    sourcesMenu: CrLazyRenderLitElement<SourcesMenuElement>,
    threadHistoryButton: HTMLImageElement,
  };
}

// 
const TopToolbarElementBase = CrLitElement;
// 
// 

export class TopToolbarElement extends TopToolbarElementBase {
  static get is() {
    return 'top-toolbar';
  }

  static override get styles() {
    return getCss();
  }

  override render() {
    return getHtml.bind(this)();
  }

  static override get properties() {
    return {
      contextInfos: {type: Array},
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
      title: {type: String},
      hideOverflowMenuButton_: {type: Boolean},
      isExpandButtonEnabled: {type: Boolean},
      isPinButtonEnabled: {type: Boolean},
      isPinned: {type: Boolean},
      contextManagementInComposeboxEnabled_: {type: Boolean},
      isAimEligible: {
        type: Boolean,
        reflect: true,
      },
      isCobrowseEligible: {type: Boolean},
      isUserSignedIn: {type: Boolean},
      onboardingTooltipShowing: {type: Boolean},
      contextualTasksEnableSpatialModelToolbarLayout_: {type: Boolean},
      contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_:
          {type: Boolean},
      overflowMenuOpen_: {type: Boolean},
      isSidePanelRearchitectureEnabled_: {
        type: Boolean,
        reflect: true,
        attribute: 'is-side-panel-rearchitecture-enabled',
      },
      webuiRoundedIconsEnabled_: {type: Boolean},
      // 
      profileAvatarUrl: {type: String},
      accountFullName: {type: String},
      accountEmail: {type: String},
    };
  }

  override accessor title: string = '';
  accessor contextInfos: ContextInfo[] = [];
  accessor darkMode: boolean = false;
  accessor isAiPage: boolean = loadTimeData.getBoolean('isAiPage');
  accessor isAimEligible: boolean = loadTimeData.getBoolean('isAimEligible');
  accessor isCobrowseEligible: boolean =
      loadTimeData.getBoolean('isCobrowseEligible');
  // 
  accessor profileAvatarUrl: string =
      loadTimeData.valueExists('profileAvatarUrl') ?
      loadTimeData.getString('profileAvatarUrl') :
      '';
  accessor accountFullName: string = '';
  accessor accountEmail: string = '';
  protected accessor isSidePanelRearchitectureEnabled_: boolean =
      loadTimeData.getBoolean('contextualTasksSidePanelRearchitectureEnabled');
  accessor isUserSignedIn: boolean = true;
  accessor enableOpenInNewTabButton: boolean = false;
  accessor onboardingTooltipShowing: boolean = false;
  private toolbarBrowserProxy_: ToolbarBrowserProxyImpl =
      ToolbarBrowserProxyImpl.getInstance();
  private toolbarListenerIds_: number[] = [];
  // 
  protected accessor isExpandButtonEnabled: boolean =
      loadTimeData.getBoolean('expandButtonEnabled');
  accessor isPinButtonEnabled: boolean =
      loadTimeData.getBoolean('enablePinButton');
  private hideOverflowMenuOnAiPageEnabled_: boolean =
      loadTimeData.getBoolean('hideMenuOnAiPageEnabled');
  protected accessor contextualTasksEnableSpatialModelToolbarLayout_: boolean =
      loadTimeData.getBoolean('contextualTasksEnableSpatialModelToolbarLayout');
  protected accessor contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_:
          boolean = loadTimeData.getBoolean(
              'contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow');
  accessor hideOverflowMenuButton_: boolean =
      this.hideOverflowMenuOnAiPageEnabled_ && this.isAiPage;
  protected accessor isPinned: boolean =
      loadTimeData.getBoolean('isSidePanelPinned');
  protected accessor contextManagementInComposeboxEnabled_: boolean =
      loadTimeData.getBoolean('contextManagementInComposeboxEnabled');
  protected accessor overflowMenuOpen_: boolean = false;
  protected accessor webuiRoundedIconsEnabled_: boolean =
      loadTimeData.getBoolean('webuiRoundedIconsEnabled');
  private wasProfileIndicatorShown_: boolean = false;
  private boundOnWindowBlur_: () => void = this.onWindowBlur_.bind(this);

  override connectedCallback() {
    super.connectedCallback();
    this.toolbarListenerIds_ = [
      this.toolbarBrowserProxy_.callbackRouter.onSidePanelPinStateChanged
          .addListener((isPinned: boolean) => {
            this.isPinned = isPinned;
          }),
      this.toolbarBrowserProxy_.callbackRouter.onContextUpdated.addListener(
          (contextInfos: ContextInfo[]) => {
            this.contextInfos = contextInfos;
          }),
      this.toolbarBrowserProxy_.callbackRouter.setExpandButtonEnabled
          .addListener((enabled: boolean) => {
            this.isExpandButtonEnabled = enabled;
          }),
      this.toolbarBrowserProxy_.callbackRouter.setProfileAvatarUrl.addListener(
          (avatarUrl: string) => {
            this.profileAvatarUrl = avatarUrl;
          }),
      this.toolbarBrowserProxy_.callbackRouter.setAccountInfo.addListener(
          (fullName: string, email: string) => {
            this.accountFullName = fullName;
            this.accountEmail = email;
          }),
    ];
    window.addEventListener('blur', this.boundOnWindowBlur_);

    // 
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.toolbarListenerIds_.forEach(
        id => this.toolbarBrowserProxy_.callbackRouter.removeListener(id));
    this.toolbarListenerIds_ = [];
    this.wasProfileIndicatorShown_ = false;
    window.removeEventListener('blur', this.boundOnWindowBlur_);

    // 
  }

  // Dismisses any open menu when the side panel loses focus. Clicks outside of
  // the side panel (e.g. on the page contents, the Lens crop frame, or a search
  // result in the sandboxed results frame) never reach this document, so
  // `cr-action-menu`'s own light dismiss does not run. See crbug.com/543760434.
  private onWindowBlur_() {
    this.$.accountMenu.getIfExists()?.close();
    this.$.overflowMenu.getIfExists()?.close();
    this.$.sourcesMenu.getIfExists()?.close();
    this.getProfileTooltip_()?.hide();
  }

  // 

  override updated(changedProperties: PropertyValues<this>) {
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

  protected isPermissionShowing_(): boolean {
    // 
    return false;
    // 
    // 
  }

  protected shouldShowSourcesMenuButton_(): boolean {
    return this.contextInfos.length > 0;
  }

  protected onPinClick_() {
    this.isPinned = !this.isPinned;
  }

  protected onCloseButtonClick_() {
    recordAction('ContextualTasks.WebUI.UserAction.CloseSidePanel');
    this.toolbarBrowserProxy_.handler.closeSidePanel();
  }

  protected onNewThreadClick_() {
    this.fire('new-thread-click');
  }

  protected onOverflowMenuNewThreadClick_(e: Event) {
    // The overflow menu's 'new-thread-click' event is composed and bubbles out
    // of this element's shadow root, so stop it here and re-fire a single event
    // from the toolbar. Otherwise listeners on <top-toolbar> receive it twice.
    e.stopPropagation();
    this.fire('new-thread-click');
  }

  protected onThreadHistoryClick_() {
    recordAction('ContextualTasks.WebUI.UserAction.OpenThreadHistory');
    this.toolbarBrowserProxy_.handler.showThreadHistory();
  }

  protected onOverflowMenuButtonClick_(e: Event) {
    recordAction('ContextualTasks.WebUI.UserAction.OpenOverflowMenu');
    this.$.overflowMenu.get().showAt(e.target as HTMLElement);
  }

  protected onOverflowMenuOpenChanged_(e: CustomEvent<{value: boolean}>) {
    this.overflowMenuOpen_ = e.detail.value;
  }

  protected onProfileIndicatorClick_(e: Event) {
    recordAction('ContextualTasks.WebUI.UserAction.OpenAccountMenu');
    this.getProfileTooltip_()?.hide();
    this.$.accountMenu.get().showAt(e.currentTarget as HTMLElement);
  }

  protected onSourcesClick_(e: Event) {
    recordAction('ContextualTasks.WebUI.UserAction.OpenSourcesMenu');
    this.$.sourcesMenu.get().showAt(e.target as HTMLElement);
  }

  protected onOpenInNewTabClick_() {
    recordAction('ContextualTasks.WebUI.UserAction.OpenInNewTab');
    this.toolbarBrowserProxy_.handler.moveTaskUiToNewTab();
  }


  protected onLogoPointerdown_() {
    if (!this.isSidePanelRearchitectureEnabled_) {
      return;
    }
    this.toolbarBrowserProxy_.handler.onLogoPointerDown();
  }

  protected onLogoClick_(e: Event) {
    if (!this.isSidePanelRearchitectureEnabled_) {
      return;
    }
    // Keyboard synthetic clicks generate PointerEvents with an empty
    // pointerType in WebUI, whereas natural pointer clicks have a valid
    // pointerType (e.g., 'mouse', 'touch', 'pen').
    this.toolbarBrowserProxy_.handler.showPageInfoBubble(
        e instanceof PointerEvent && e.pointerType !== '');
  }

  protected onProfileIndicatorPointerenter_(e: PointerEvent) {
    recordAction('ContextualTasks.WebUI.UserAction.HoverAccountMenuButton');
    this.getProfileTooltip_()?.scheduleShow(e.currentTarget as HTMLElement);
  }

  protected onProfileIndicatorPointerleave_() {
    this.getProfileTooltip_()?.scheduleHide();
  }

  private getProfileTooltip_(): ProfileTooltipElement|null {
    return this.shadowRoot.querySelector<ProfileTooltipElement>(
        '#profileTooltip');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'top-toolbar': TopToolbarElement;
  }
}

customElements.define(TopToolbarElement.is, TopToolbarElement);
