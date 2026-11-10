// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import '//resources/cr_elements/cr_drawer/cr_drawer.js';
import './icons.html.js';
import './user_skills_page.js';
import './discover_skills_page.js';
import './error_page.js';
import './sidebar.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { assertNotReached } from '//resources/js/assert.js';
import { CrRouter } from '//resources/js/cr_router.js';
import { EventTracker } from '//resources/js/event_tracker.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { ErrorType } from './error_page.js';
import { Page } from './sidebar.js';
import { SkillsManagementAction, SkillsManagementPage } from './skill_metrics.mojom-webui.js';
import { SkillsPageBrowserProxy } from './skills_page_browser_proxy.js';
export class SkillsAppElement extends CrLitElement {
    static get is() {
        return 'skills-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selectedPage_: { type: String },
            narrow_: { type: Boolean },
            isDrawerOpen_: { type: Boolean },
            isSkillsEnabled_: { type: Boolean },
        };
    }
    #selectedPage__accessor_storage = Page.USER_SKILLS;
    get selectedPage_() { return this.#selectedPage__accessor_storage; }
    set selectedPage_(value) { this.#selectedPage__accessor_storage = value; }
    #narrow__accessor_storage = false;
    get narrow_() { return this.#narrow__accessor_storage; }
    set narrow_(value) { this.#narrow__accessor_storage = value; }
    #isDrawerOpen__accessor_storage = false;
    get isDrawerOpen_() { return this.#isDrawerOpen__accessor_storage; }
    set isDrawerOpen_(value) { this.#isDrawerOpen__accessor_storage = value; }
    #isSkillsEnabled__accessor_storage = loadTimeData.getBoolean('isSkillsEnabled');
    get isSkillsEnabled_() { return this.#isSkillsEnabled__accessor_storage; }
    set isSkillsEnabled_(value) { this.#isSkillsEnabled__accessor_storage = value; }
    eventTracker_ = new EventTracker();
    proxy_ = SkillsPageBrowserProxy.getInstance();
    listenerIds_ = [];
    connectedCallback() {
        super.connectedCallback();
        ColorChangeUpdater.forDocument().start();
        this.listenerIds_.push(this.proxy_.callbackRouter.setSkillsEnabled.addListener((enabled) => {
            this.isSkillsEnabled_ = enabled;
        }));
        const router = CrRouter.getInstance();
        // Dwell time prevents polluting the browser history with rapid changes.
        // 0 to make sure every click is able to be navigated back to.
        router.setDwellTime(0);
        // Initial load.
        this.onPathChanged_(router.getPath());
        // Listen for path changes, only triggers via popstate.
        this.eventTracker_.add(router, 'cr-router-path-changed', (e) => this.onPathChanged_(e.detail));
        // Event-driven navigation changes.
        this.eventTracker_.add(document, 'route-click', (e) => {
            const detail = e.detail;
            // CRRouter sets the path, but doesn't trigger a popstate event, so we
            // need to manually update the page.
            CrRouter.getInstance().setPath(detail.path);
            this.onPathChanged_(detail.path);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
        this.listenerIds_.forEach(id => this.proxy_.callbackRouter.removeListener(id));
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('selectedPage_') &&
            this.selectedPage_ === Page.DISCOVER_SKILLS) {
            this.proxy_.handler.request1PSkills();
        }
    }
    getErrorType_() {
        if (!loadTimeData.getBoolean('isGlicEnabled')) {
            return ErrorType.GLIC_NOT_ENABLED;
        }
        if (!this.isSkillsEnabled_) {
            return ErrorType.SKILLS_DISABLED;
        }
        return null;
    }
    // Called when the page is narrow & the menu button appears.
    // Clicking it should open a cr-drawer.
    onCrToolbarMenuClick_() {
        this.$.drawer.openDrawer();
        this.isDrawerOpen_ = this.$.drawer.open;
    }
    // Called whenever the text in the search input field changes.
    onSearchChanged_(e) {
        const searchTerm = e.detail;
        if (this.getErrorType_() === null) {
            this.shadowRoot.querySelector('#userSkillsPage').onSearchChanged(searchTerm);
            this.shadowRoot
                .querySelector('#discoverSkillsPage').onSearchChanged(searchTerm);
        }
    }
    // Called whenever the browser window drops below the defined
    // narrow-threshold.
    onNarrowChanged_(e) {
        this.narrow_ = e.detail.value;
        if (this.isDrawerOpen_ && !this.narrow_) {
            this.$.drawer.close();
        }
        if (this.narrow_) {
            this.style.setProperty('--sidebar-width', '0px');
        }
        else {
            this.style.removeProperty('--sidebar-width');
        }
    }
    onDrawerClose_() {
        this.isDrawerOpen_ = this.$.drawer.open;
    }
    shouldShowToolbarMenu_() {
        return this.narrow_ && this.getErrorType_() === null;
    }
    onPathChanged_(newPath) {
        if (this.getErrorType_() !== null) {
            return;
        }
        const menu = this.shadowRoot.querySelector('#menu');
        const path = newPath.substring(1);
        let menuItem = menu.menuItems.find(item => item.page === path);
        // If the menu item isn't found, replace the undefined path with the
        // first menu item.
        if (!menuItem) {
            window.history.replaceState(undefined, '', '/' + menu.menuItems[0].page);
            menuItem = menu.menuItems[0];
        }
        this.selectedPage_ = menuItem.page;
        // Record metrics
        let pageType = SkillsManagementPage.kYourSkills;
        switch (this.selectedPage_) {
            case Page.DISCOVER_SKILLS:
                pageType = SkillsManagementPage.kBrowseSkills;
                break;
            case Page.USER_SKILLS:
                pageType = SkillsManagementPage.kYourSkills;
                break;
            default:
                assertNotReached('Action for unknown page type');
        }
        this.proxy_.handler.recordSkillsManagementAction(pageType, SkillsManagementAction.kPageOpened);
    }
}
customElements.define(SkillsAppElement.is, SkillsAppElement);
