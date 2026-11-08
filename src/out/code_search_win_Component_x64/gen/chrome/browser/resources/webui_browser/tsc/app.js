// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './bookmark_bar.js';
import './content_region.js';
import './extensions_bar.js';
import './icons.html.js';
import './side_panel.js';
import '/strings.m.js';
import './tab_strip/tab_strip.js';
import './webview.js';
import './webui_browser_searchbox.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { assert, assertNotReachedCase } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from 'chrome://resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { browserProxyFactory, FullscreenContext, SecurityIcon } from './browser.mojom-webui.js';
import { TabStripElement } from './tab_strip/tab_strip.js';
export class WebuiBrowserAppElement extends CrLitElement {
    static get is() {
        return 'webui-browser-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            backButtonDisabled_: { state: true, type: Boolean },
            forwardButtonDisabled_: { state: true, type: Boolean },
            fullscreenMode_: { type: String, reflect: true, attribute: 'fullscreen-mode' },
            showingSidePanel_: { state: true, type: Boolean },
            reloadOrStopIcon_: { state: true, type: String },
            showLocationIconButton_: { type: Boolean, reflect: true },
            locationIcon_: { state: true, type: String },
            tabStripInset_: { state: true, type: Number },
            inactive_: {
                type: Boolean,
                reflect: true,
                attribute: 'inactive',
            },
        };
    }
    trackedElementManager_;
    longPressTimer_ = 0;
    #backButtonDisabled__accessor_storage = true;
    get backButtonDisabled_() { return this.#backButtonDisabled__accessor_storage; }
    set backButtonDisabled_(value) { this.#backButtonDisabled__accessor_storage = value; }
    #forwardButtonDisabled__accessor_storage = true;
    get forwardButtonDisabled_() { return this.#forwardButtonDisabled__accessor_storage; }
    set forwardButtonDisabled_(value) { this.#forwardButtonDisabled__accessor_storage = value; }
    #fullscreenMode__accessor_storage = '';
    get fullscreenMode_() { return this.#fullscreenMode__accessor_storage; }
    set fullscreenMode_(value) { this.#fullscreenMode__accessor_storage = value; }
    #reloadOrStopIcon__accessor_storage = 'icon-refresh';
    get reloadOrStopIcon_() { return this.#reloadOrStopIcon__accessor_storage; }
    set reloadOrStopIcon_(value) { this.#reloadOrStopIcon__accessor_storage = value; }
    #showingSidePanel__accessor_storage = false;
    get showingSidePanel_() { return this.#showingSidePanel__accessor_storage; }
    set showingSidePanel_(value) { this.#showingSidePanel__accessor_storage = value; }
    #showLocationIconButton__accessor_storage = false;
    get showLocationIconButton_() { return this.#showLocationIconButton__accessor_storage; }
    set showLocationIconButton_(value) { this.#showLocationIconButton__accessor_storage = value; }
    #locationIcon__accessor_storage = 'no-encryption';
    get locationIcon_() { return this.#locationIcon__accessor_storage; }
    set locationIcon_(value) { this.#locationIcon__accessor_storage = value; }
    #tabStripInset__accessor_storage = loadTimeData.valueExists('tabStripInset') ?
        loadTimeData.getInteger('tabStripInset') :
        0;
    get tabStripInset_() { return this.#tabStripInset__accessor_storage; }
    set tabStripInset_(value) { this.#tabStripInset__accessor_storage = value; }
    #inactive__accessor_storage = false;
    get inactive_() { return this.#inactive__accessor_storage; }
    set inactive_(value) { this.#inactive__accessor_storage = value; }
    constructor() {
        super();
        ColorChangeUpdater.forDocument().start();
        this.trackedElementManager_ = TrackedElementManager.getInstance();
        const callbackRouter = browserProxyFactory.getInstance().callbackRouter;
        callbackRouter.showSidePanel.addListener(this.showSidePanel_.bind(this));
        callbackRouter.closeSidePanel.addListener(this.closeSidePanel_.bind(this));
        callbackRouter.onFullscreenModeChanged.addListener(this.onFullscreenModeChanged_.bind(this));
        callbackRouter.onPaintAsActiveChanged.addListener((active) => {
            this.inactive_ = !active;
        });
    }
    async connectedCallback() {
        // Important. Properties are not reactive without calling
        // super.connectedCallback().
        super.connectedCallback();
        this.trackedElementManager_.startTracking(this.$.address, 'kLocationBarElementId');
        this.trackedElementManager_.startTracking(this.$.appMenuButton, 'kToolbarAppMenuButtonElementId');
        this.trackedElementManager_.startTracking(this.$.avatarButton, 'kToolbarAvatarButtonElementId');
        this.trackedElementManager_.startTracking(this.$.backButton, 'kToolbarBackButtonElementId');
        this.trackedElementManager_.startTracking(this.$.forwardButton, 'kToolbarForwardButtonElementId');
        this.trackedElementManager_.startTracking(this.$.locationIconButton, 'kLocationIconElementId');
        this.trackedElementManager_.startTracking(this.$.contentRegion, 'kContentsContainerViewElementId');
        this.setUpLongPress_(this.$.backButton, /*isBack=*/ true);
        this.setUpLongPress_(this.$.forwardButton, /*isBack=*/ false);
        const { width } = await browserProxyFactory.getInstance().handler.getTabStripInset();
        this.tabStripInset_ = width;
    }
    // TabStripControllerDelegate:
    refreshLayout() {
        this.updateToolbarButtons_();
    }
    // Map from SecurityIcon values to the names of icons defined in
    // icons.html.ts.
    securityIconToIconNameMap = new Map([
        [SecurityIcon.HttpChromeRefresh, 'info'],
        [SecurityIcon.SecurePageInfoChromeRefresh, 'page-info'],
        [SecurityIcon.NoEncryption, 'no-encryption'],
        [
            SecurityIcon.NotSecureWarningChromeRefresh,
            'warning',
        ],
        [SecurityIcon.BusinessChromeRefresh, 'domain'],
        [SecurityIcon.DangerousChromeRefresh, 'dangerous-filled'],
        [SecurityIcon.ProductChromeRefresh, 'chrome-product'],
        [SecurityIcon.ExtensionChromeRefresh, 'chrome-extension'],
        [SecurityIcon.OfflinePin, 'OfflinePinIcon-custom'],
    ]);
    onAppMenuClick_(_) {
        browserProxyFactory.getInstance().handler.openAppMenu();
    }
    onBookmarksClick_() {
        if (this.showingSidePanel_ && this.$.sidePanel.isShowingBookmarks()) {
            this.closeSidePanel_();
        }
        else {
            this.showingSidePanel_ = true;
            this.$.sidePanel.showBookmarks();
        }
    }
    onAvatarClick_(_) {
        browserProxyFactory.getInstance().handler.openProfileMenu();
    }
    onMinimizeClick_(_) {
        browserProxyFactory.getInstance().handler.minimize();
    }
    onMaximizeClick_(_) {
        browserProxyFactory.getInstance().handler.maximize();
    }
    onRestoreClick_(_) {
        browserProxyFactory.getInstance().handler.restore();
    }
    onCloseClick_(_) {
        browserProxyFactory.getInstance().handler.close();
    }
    onBackClick_(_) {
        if (this.$.contentRegion.activeWebview) {
            this.$.contentRegion.activeWebview.goBack();
        }
    }
    onBackContextmenu_(e) {
        e.preventDefault();
        browserProxyFactory.getInstance().handler.showBackForwardMenu(
        /*isBack=*/ true);
    }
    onForwardClick_(_) {
        if (this.$.contentRegion.activeWebview) {
            this.$.contentRegion.activeWebview.goForward();
        }
    }
    onForwardContextmenu_(e) {
        e.preventDefault();
        browserProxyFactory.getInstance().handler.showBackForwardMenu(
        /*isBack=*/ false);
    }
    // Long-press on back/forward buttons shows the navigation history menu,
    // matching the 500ms delay used by ToolbarButton in Views.
    setUpLongPress_(button, isBack) {
        const clearTimer = () => {
            window.clearTimeout(this.longPressTimer_);
            this.longPressTimer_ = 0;
        };
        button.addEventListener('pointerdown', (e) => {
            // Ignore non-left mouse button down.
            if (e.button !== 0) {
                return;
            }
            this.longPressTimer_ = window.setTimeout(() => {
                clearTimer();
                browserProxyFactory.getInstance().handler.showBackForwardMenu(isBack);
            }, 500);
        });
        button.addEventListener('pointerup', clearTimer);
        button.addEventListener('pointerleave', clearTimer);
    }
    onReloadOrStopClick_(_) {
        if (this.$.contentRegion.activeWebview) {
            if (this.reloadOrStopIcon_ === 'icon-refresh') {
                this.$.contentRegion.activeWebview.reload();
            }
            else {
                this.$.contentRegion.activeWebview.stopLoading();
            }
        }
    }
    reloadOrStopTooltip_() {
        if (this.reloadOrStopIcon_ === 'icon-refresh') {
            return loadTimeData.getString('tooltipReload');
        }
        else {
            return loadTimeData.getString('tooltipStop');
        }
    }
    onTabAdded_(event) {
        this.$.contentRegion.createWebView(event.detail.id, event.detail.isActive);
        this.refreshLayout();
    }
    onTabClosed_(event) {
        this.$.contentRegion.removeTab(event.detail);
        this.refreshLayout();
    }
    onTabUpdated_(event) {
        const tabData = event.detail;
        if (!tabData.isActive) {
            return;
        }
        // TODO(crbug.com/537801193): store and restore focus on tab switch.
        this.$.contentRegion.activateTab(tabData.id);
        this.updateUrlForActiveTab_(tabData);
        this.refreshLayout();
    }
    updateUrlForActiveTab_(active) {
        assert(active.isActive);
        let displayUrl = '';
        const activeTabUrl = active.url;
        // TODO(webium): Should match
        // ChromeLocationBarModelDelegate::ShouldDisplayURL and
        // LocationBarModelImpl::GetFormattedURL logic.
        //
        // There are also likely some subtleties about what happens when the user
        // is typing and the tab navigates.
        const isNTP = activeTabUrl.startsWith('chrome://newtab');
        if (!isNTP) {
            displayUrl = activeTabUrl;
            const tabWebView = this.$.contentRegion.activeWebview;
            if (tabWebView) {
                tabWebView.getSecurityIcon().then(securityIcon => {
                    // The content may have changed by the time this is resolved.
                    if (this.$.contentRegion.activeWebview === tabWebView) {
                        const iconName = this.securityIconToIconNameMap.get(securityIcon);
                        assert(iconName);
                        this.locationIcon_ = iconName;
                        // Failure here indicates a new icon needs to be added to
                        // icons.html.ts and then to |securityIconToIconNameMap|.
                    }
                });
            }
        }
        this.showLocationIconButton_ = !isNTP;
        this.$.address.setInputText(displayUrl);
        this.$.contentRegion.classList.toggle('modalScrim', active.isBlocked);
    }
    async updateToolbarButtons_() {
        const webview = this.$.contentRegion.activeWebview;
        if (webview) {
            const [canGoBack, canGoForward] = await Promise.all([webview.canGoBack(), webview.canGoForward()]);
            this.backButtonDisabled_ = !canGoBack;
            this.forwardButtonDisabled_ = !canGoForward;
        }
        else {
            this.backButtonDisabled_ = true;
            this.forwardButtonDisabled_ = true;
        }
    }
    firstUpdated() {
        browserProxyFactory.getInstance()
            .callbackRouter.setFocusToLocationBar.addListener(this.setFocusToLocationBar.bind(this));
        browserProxyFactory.getInstance()
            .callbackRouter.setReloadStopState.addListener(this.setReloadStopState.bind(this));
    }
    onTabDragMousedown_(e) {
        if (e.target instanceof TabStripElement) {
            this.$.tabstrip.dragMouseDown(e);
        }
    }
    setFocusToLocationBar(isUserInitiated) {
        this.$.address.focusInput();
        // If the user initiated the selection (e.g. by pressing Ctrl-L) we want to
        // select everything in order to make it easy to replace the URL. This is
        // also useful for some cases where we auto-focus (e.g. about:blank set as
        // the NTP) if they're not actively using the omnibox, which we check by
        // looking at the focus. See OmniBoxViewViews::SetFocus() for the
        // inspiration.
        if (isUserInitiated || this.shadowRoot.activeElement !== this.$.address) {
            this.$.address.selectAll();
        }
    }
    setReloadStopState(isLoading) {
        this.reloadOrStopIcon_ = isLoading ? 'icon-clear' : 'icon-refresh';
        this.updateToolbarButtons_();
    }
    showSidePanel_(guestContentsId, title) {
        this.showingSidePanel_ = true;
        this.$.sidePanel.show(guestContentsId, title);
    }
    closeSidePanel_() {
        this.$.sidePanel.close();
        this.showingSidePanel_ = false;
    }
    // This function is called when the side panel closes itself. For example,
    // when user clicks the close "x" button.
    onSidePanelClosed_() {
        this.showingSidePanel_ = false;
    }
    onFullscreenModeChanged_(isFullscreen, context) {
        if (!isFullscreen) {
            this.fullscreenMode_ = '';
        }
        else {
            // When fullscreen is true, we should always have a context
            assert(context !== null, 'Context must be provided when isFullscreen is true');
            switch (context) {
                case FullscreenContext.kTab:
                    this.fullscreenMode_ = 'tab';
                    break;
                case FullscreenContext.kBrowser:
                    this.fullscreenMode_ = 'browser';
                    break;
                default:
                    assertNotReachedCase(context);
            }
        }
    }
    onLocationIconClick_(_) {
        if (this.$.contentRegion.activeWebview) {
            this.$.contentRegion.activeWebview.openPageInfoMenu();
        }
    }
}
customElements.define(WebuiBrowserAppElement.is, WebuiBrowserAppElement);
