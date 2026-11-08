// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './app_item.js';
import './app_home_empty_page.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { assert } from 'chrome://resources/js/assert.js';
import { browserProxyFactory } from './app_home.mojom-webui.js';
import { AppHomeUserAction, recordUserAction } from './app_home_utils.js';
import { getCss } from './app_list.css.js';
import { getHtml } from './app_list.html.js';
export class AppListElement extends CrLitElement {
    static get is() {
        return 'app-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            apps_: { type: Array },
            selectedAppItem_: { type: Object },
        };
    }
    #apps__accessor_storage = [];
    get apps_() { return this.#apps__accessor_storage; }
    set apps_(value) { this.#apps__accessor_storage = value; }
    boundContextMenuListener_;
    boundKeydownListener_;
    listenerIds_ = [];
    mojoEventTarget_;
    #selectedAppItem__accessor_storage = null;
    // The app item that has the context menu click opened by user.
    get selectedAppItem_() { return this.#selectedAppItem__accessor_storage; }
    set selectedAppItem_(value) { this.#selectedAppItem__accessor_storage = value; }
    constructor() {
        super();
        this.mojoEventTarget_ = browserProxyFactory.getInstance().callbackRouter;
        browserProxyFactory.getInstance().handler.getApps().then(result => {
            this.apps_ = result.appList;
        });
        this.boundKeydownListener_ = this.handleKeyDown.bind(this);
        this.boundContextMenuListener_ = this.closeCurrentAppMenu.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_ = [
            this.mojoEventTarget_.addApp.addListener(this.addApp_.bind(this)),
            this.mojoEventTarget_.removeApp.addListener(this.removeApp_.bind(this)),
            this.mojoEventTarget_.updateApp.addListener(this.updateApp_.bind(this)),
        ];
        document.addEventListener('contextmenu', this.boundContextMenuListener_);
        document.addEventListener('keydown', this.boundKeydownListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => assert(this.mojoEventTarget_.removeListener(id)));
        this.listenerIds_ = [];
        document.removeEventListener('contextmenu', this.boundContextMenuListener_);
        document.removeEventListener('keydown', this.boundKeydownListener_);
    }
    firstUpdated() {
        this.addEventListener('on-menu-open-triggered', this.switchActiveMenu_);
        this.addEventListener('on-menu-closed', this.clearActiveMenu_);
        recordUserAction(AppHomeUserAction.APP_HOME_INIT);
    }
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.launchFocusedApp();
        }
        else if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            this.handleNavigateWithArrows(e);
        }
        else if (e.key === 'F10' && e.shiftKey) {
            this.launchContextMenuForFocusedApp();
            e.preventDefault();
            e.stopPropagation();
        }
    }
    launchFocusedApp() {
        const activeElementId = this.shadowRoot.activeElement?.id;
        if (activeElementId !== undefined &&
            this.apps_.some(app => activeElementId === app.id)) {
            browserProxyFactory.getInstance().handler.launchApp(activeElementId, null);
        }
    }
    launchContextMenuForFocusedApp() {
        const activeElementId = this.shadowRoot.activeElement?.id;
        if (!activeElementId) {
            return;
        }
        const currIndex = this.apps_.findIndex(app => activeElementId === app.id);
        if (currIndex < 0) {
            return;
        }
        const appElement = this.shadowRoot.getElementById('container')
            ?.querySelector('#' + this.apps_[currIndex].id);
        if (!appElement) {
            return;
        }
        // Dispatch the contextmenu event on the focused element.
        appElement.dispatchEvent(new CustomEvent('contextmenu'));
    }
    // Capture arrow key events to focus on apps and navigate the apps as a grid.
    handleNavigateWithArrows(e) {
        const numApps = this.apps_.length;
        const cssProps = window.getComputedStyle(this.shadowRoot.getElementById('container'));
        const numColumns = cssProps.getPropertyValue('grid-template-columns').split(' ').length;
        const keyActions = {
            ArrowRight: 1,
            ArrowLeft: -1,
            ArrowUp: -numColumns,
            ArrowDown: numColumns,
        };
        if (!(e.key in keyActions) || numApps === 0) {
            return;
        }
        const activeElementId = this.shadowRoot.activeElement?.id;
        if (!activeElementId) {
            this.shadowRoot.getElementById('container')
                ?.querySelector('#' + this.apps_[0].id).focus();
            return;
        }
        const currIndex = this.apps_.findIndex(app => activeElementId === app.id);
        let nextIndex;
        if (currIndex === -1) {
            nextIndex = 0;
        }
        else if (currIndex + keyActions[e.key] >= 0 &&
            currIndex + keyActions[e.key] < numApps) {
            nextIndex = currIndex + keyActions[e.key];
        }
        else {
            nextIndex = currIndex;
        }
        this.shadowRoot.getElementById('container')
            ?.querySelector('#' + this.apps_[nextIndex].id).focus();
    }
    addApp_(appInfo) {
        const currIndex = this.apps_.findIndex(app => app.id === appInfo.id);
        if (currIndex !== -1) {
            this.apps_[currIndex] = appInfo;
            this.requestUpdate();
            return;
        }
        const newIndex = this.apps_.findIndex(app => app.name > appInfo.name);
        if (newIndex === -1) {
            this.apps_.push(appInfo);
            this.requestUpdate();
            return;
        }
        this.apps_.splice(newIndex, 0, appInfo);
        this.requestUpdate();
    }
    removeApp_(appInfo) {
        const index = this.apps_.findIndex(app => app.id === appInfo.id);
        // We gracefully handle item not found case because:
        // 1.if the async getApps() returns later than an uninstall event,
        // it should gracefully handles that and ignores that uninstall event,
        // the getApps() will return the list without the app later.
        // 2.If an uninstall event gets fired for an app that's somehow not in
        // the list of apps shown in current page, it's none of the concern
        // for this page to remove it.
        if (index !== -1) {
            this.apps_.splice(index, 1);
            this.requestUpdate();
        }
    }
    updateApp_(appInfo) {
        const currIndex = this.apps_.findIndex(app => app.id === appInfo.id);
        // If the app is found in the existing grid, remove it.
        if (currIndex !== -1) {
            this.apps_.splice(currIndex, 1);
        }
        // Add the current app in the correct place in the "grid" to
        // show the app. This will call `requestUpdate()` under the hood.
        this.addApp_(appInfo);
    }
    closeCurrentAppMenu() {
        if (!this.selectedAppItem_) {
            return;
        }
        this.selectedAppItem_.closeContextMenu();
    }
    clearActiveMenu_() {
        this.selectedAppItem_ = null;
    }
    // Close the menu on right click on a page.
    switchActiveMenu_(event) {
        this.closeCurrentAppMenu();
        this.selectedAppItem_ = event.detail.appItem;
    }
    notLocallyInstalledString_(installed, i18nString) {
        if (!installed) {
            return ' (' + i18nString + ')';
        }
        return '';
    }
}
customElements.define(AppListElement.is, AppListElement);
