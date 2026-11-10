// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { AppType, browserProxyFactory, RunOnOsLoginMode } from './app_home.mojom-webui.js';
import { AppHomeUserAction, recordUserAction } from './app_home_utils.js';
import { getCss } from './app_item.css.js';
import { getHtml } from './app_item.html.js';
import { UserDisplayMode } from './user_display_mode.mojom-webui.js';
export class AppItemElement extends CrLitElement {
    static get is() {
        return 'app-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            appInfo: { type: Object },
        };
    }
    #appInfo_accessor_storage = {
        appType: AppType.kWebApp,
        id: '',
        startUrl: '',
        name: '',
        iconUrl: '',
        mayShowRunOnOsLoginMode: false,
        mayToggleRunOnOsLoginMode: false,
        runOnOsLoginMode: 0,
        isLocallyInstalled: false,
        openInWindow: false,
        mayUninstall: false,
        storePageUrl: '',
    };
    get appInfo() { return this.#appInfo_accessor_storage; }
    set appInfo(value) { this.#appInfo_accessor_storage = value; }
    firstUpdated() {
        this.addEventListener('contextmenu', this.handleContextMenu_);
        this.addEventListener('click', this.handleClick_);
        this.addEventListener('auxclick', this.handleClick_);
    }
    closeContextMenu() {
        if (!this.$.menu.open) {
            return;
        }
        this.$.menu.close();
        this.fire('on-menu-closed', { appItem: this });
    }
    handleContextMenu_(e) {
        const position = this.getPositionForEvent_(e);
        if (this.isValidPosition(position)) {
            // Show custom context menu only if it is inside the area of the item that
            // triggered it.
            this.fire('on-menu-open-triggered', { appItem: this });
            this.$.menu.showAtPosition(position);
            recordUserAction(AppHomeUserAction.CONTEXT_MENU_TRIGGERED);
        }
        e.preventDefault();
        e.stopPropagation();
    }
    isValidPosition(position) {
        const rect = this.shadowRoot.getElementById('objectContainer').getBoundingClientRect();
        if (!rect) {
            return false;
        }
        return (position.top >= rect.top && position.top <= rect.bottom &&
            position.left >= rect.left && position.left <= rect.right);
    }
    getPositionForEvent_(e) {
        if (e instanceof MouseEvent) {
            return { top: e.clientY, left: e.clientX };
        }
        else {
            // Events other than a MouseEvent do not have locations specified, so
            // automatically default to the middle of the icon for the context menu to
            // show up.
            const rect = this.shadowRoot.getElementById('iconContainer').getBoundingClientRect();
            if (rect) {
                return {
                    top: rect.top + (rect.height / 2),
                    left: rect.left + (rect.width / 2),
                };
            }
            else {
                return { top: 0, left: 0 };
            }
        }
    }
    handleClick_(e) {
        // We want to capture left-click `0` and aux-click `1` (aka
        // middle-mouse-button click). Other clicks (right-click, etc) should not
        // trigger a launch.
        if (e.button > 1) {
            return;
        }
        const clickEvent = {
            button: e.button,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
        };
        if (this.appInfo.appType === AppType.kDeprecatedChromeApp) {
            recordUserAction(AppHomeUserAction.LAUNCH_DEPRECATED_APP);
        }
        else {
            recordUserAction(AppHomeUserAction.LAUNCH_WEB_APP);
        }
        browserProxyFactory.getInstance().handler.launchApp(this.appInfo.id, clickEvent);
        e.preventDefault();
        e.stopPropagation();
    }
    // The CrActionMenuElement is a modal that does not listen to any other
    // events other than mousedown on right click when it is open. This allows
    // us to listen to changes on the dom even when the menu is showing.
    onMenuMousedown_(e) {
        // Actions that are not a right click on a different app are handled
        // correctly by the cr-action-menu. Listening to them here causes
        // errors.
        if (e.button !== 2) {
            return;
        }
        // Do not listen to the mousedown event if not triggered from a
        // CrActionMenuElement, i.e. one without a dialog element covering the dom.
        if (e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.closeContextMenu();
    }
    // Methods to hide menu items:
    isWebStoreLinkHidden_() {
        return !this.appInfo.storePageUrl;
    }
    isOpenInWindowHidden_() {
        return !this.appInfo.isLocallyInstalled ||
            this.appInfo.appType === AppType.kDeprecatedChromeApp ||
            this.appInfo.appType === AppType.kIsolatedWebApp;
    }
    isLaunchOnStartupDisabled_() {
        return !this.appInfo.mayToggleRunOnOsLoginMode;
    }
    isLaunchOnStartupHidden_() {
        return !this.appInfo.mayShowRunOnOsLoginMode ||
            this.appInfo.appType === AppType.kDeprecatedChromeApp;
    }
    isCreateShortcutHidden_() {
        return !this.appInfo.isLocallyInstalled ||
            this.appInfo.appType === AppType.kDeprecatedChromeApp;
    }
    isInstallLocallyHidden_() {
        return this.appInfo.isLocallyInstalled ||
            this.appInfo.appType === AppType.kDeprecatedChromeApp;
    }
    isUninstallHidden_() {
        return !this.appInfo.isLocallyInstalled;
    }
    isRemoveFromChromeHidden_() {
        return this.appInfo.isLocallyInstalled;
    }
    isAppSettingsHidden_() {
        return !this.appInfo.isLocallyInstalled;
    }
    isLocallyInstalled_() {
        return this.appInfo.isLocallyInstalled;
    }
    isLaunchOnStartUp_() {
        return this.appInfo.runOnOsLoginMode !== RunOnOsLoginMode.kNotRun;
    }
    onMenuClick_(event) {
        // The way the menu works, it's inside of a dialog which covers the whole
        // screen. Because our element uses a click listener on the entire element,
        // any clicks anywhere while the context menu is open will then bubble up to
        // our launch listener. So this makes sure that we stop those clicks here.
        event.stopPropagation();
    }
    onStorePageClick_() {
        if (!this.appInfo.storePageUrl) {
            return;
        }
        window.open(new URL(this.appInfo.storePageUrl), '_blank');
        this.closeContextMenu();
    }
    onOpenInWindowItemChange_(e) {
        const checked = e.detail;
        if (!checked) {
            browserProxyFactory.getInstance().handler.setUserDisplayMode(this.appInfo.id, UserDisplayMode.kBrowser);
            recordUserAction(AppHomeUserAction.OPEN_IN_WINDOW_UNCHECKED);
        }
        else {
            browserProxyFactory.getInstance().handler.setUserDisplayMode(this.appInfo.id, UserDisplayMode.kStandalone);
            recordUserAction(AppHomeUserAction.OPEN_IN_WINDOW_CHECKED);
        }
    }
    // Changing the app's launch mode.
    onLaunchOnStartupItemClick_() {
        if (this.isLaunchOnStartupDisabled_()) {
            return;
        }
        if (this.isLaunchOnStartUp_()) {
            browserProxyFactory.getInstance().handler.setRunOnOsLoginMode(this.appInfo.id, RunOnOsLoginMode.kNotRun);
            recordUserAction(AppHomeUserAction.LAUNCH_AT_STARTUP_UNCHECKED);
        }
        else {
            browserProxyFactory.getInstance().handler.setRunOnOsLoginMode(this.appInfo.id, RunOnOsLoginMode.kWindowed);
            recordUserAction(AppHomeUserAction.LAUNCH_AT_STARTUP_CHECKED);
        }
    }
    onCreateShortcutItemClick_() {
        if (this.appInfo.id) {
            browserProxyFactory.getInstance().handler.createAppShortcut(this.appInfo.id);
            recordUserAction(AppHomeUserAction.CREATE_SHORTCUT);
        }
        this.closeContextMenu();
    }
    onInstallLocallyItemClick_() {
        if (this.appInfo.id) {
            browserProxyFactory.getInstance().handler.installAppLocally(this.appInfo.id);
            recordUserAction(AppHomeUserAction.INSTALL_APP_LOCALLY);
        }
        this.closeContextMenu();
    }
    onUninstallItemClick_() {
        if (this.appInfo.id) {
            browserProxyFactory.getInstance().handler.uninstallApp(this.appInfo.id);
            recordUserAction(AppHomeUserAction.UNINSTALL);
        }
        this.closeContextMenu();
    }
    onAppSettingsItemClick_() {
        if (this.appInfo.id) {
            browserProxyFactory.getInstance().handler.showAppSettings(this.appInfo.id);
            recordUserAction(AppHomeUserAction.OPEN_APP_SETTINGS);
        }
        this.closeContextMenu();
    }
    getIconUrl_() {
        const url = new URL(this.appInfo.iconUrl);
        // For web app, the backend serves grayscale image when the app is not
        // locally installed automatically and doesn't recognize this query param,
        // but we add a query param here to force browser to refetch the image.
        if (!this.isLocallyInstalled_()) {
            url.searchParams.append('grayscale', 'true');
        }
        return url.href;
    }
}
customElements.define(AppItemElement.is, AppItemElement);
