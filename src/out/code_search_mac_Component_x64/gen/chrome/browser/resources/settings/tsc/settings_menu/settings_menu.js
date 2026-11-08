// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-menu' shows a menu with a hardcoded set of pages and subpages.
 */
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_ripple/cr_ripple.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { AutofillSettingsReferrer, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { pageVisibility } from '../page_visibility.js';
import { RouteObserverMixinLit, Router } from '../router.js';
import { getCss } from './settings_menu.css.js';
import { getHtml } from './settings_menu.html.js';
const pathToActionMap = new Map([
    ['/people', 'SettingsMenu_PeopleClicked'],
    ['/autofill', 'SettingsMenu_AutofillClicked'],
    ['/privacy', 'SettingsMenu_PrivacyClicked'],
    ['/performance', 'SettingsMenu_PerformanceClicked'],
    ['/ai', 'SettingsMenu_AiPageEntryPointClicked'],
    ['/appearance', 'SettingsMenu_AppearanceClicked'],
    ['/search', 'SettingsMenu_SearchClicked'],
    ['/defaultBrowser', 'SettingsMenu_DefaultBrowserClicked'],
    ['/onStartup', 'SettingsMenu_OnStartupClicked'],
    ['/languages', 'SettingsMenu_LanguagesClicked'],
    ['/downloads', 'SettingsMenu_DownloadsClicked'],
    ['/accessibility', 'SettingsMenu_AccessibilityClicked'],
    ['/system', 'SettingsMenu_SystemClicked'],
    ['/reset', 'SettingsMenu_ResetClicked'],
    ['/help', 'SettingsMenu_AboutClicked'],
]);
const SettingsMenuElementBase = RouteObserverMixinLit(CrLitElement);
export class SettingsMenuElement extends SettingsMenuElementBase {
    static get is() {
        return 'settings-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            collapsed: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility_: { type: Object },
            showAiPage_: { type: Boolean },
        };
    }
    #collapsed_accessor_storage = false;
    get collapsed() { return this.#collapsed_accessor_storage; }
    set collapsed(value) { this.#collapsed_accessor_storage = value; }
    #pageVisibility__accessor_storage = pageVisibility;
    get pageVisibility_() { return this.#pageVisibility__accessor_storage; }
    set pageVisibility_(value) { this.#pageVisibility__accessor_storage = value; }
    #showAiPage__accessor_storage = loadTimeData.getBoolean('showAiPage');
    get showAiPage_() { return this.#showAiPage__accessor_storage; }
    set showAiPage_(value) { this.#showAiPage__accessor_storage = value; }
    metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    shouldHideMenuItem_(visibility) {
        return visibility === false;
    }
    showAiPageMenuItem_() {
        return this.showAiPage_ &&
            (!this.pageVisibility_ || this.pageVisibility_.ai !== false);
    }
    currentRouteChanged(newRoute) {
        // Focus the initially selected path.
        const anchors = this.shadowRoot.querySelectorAll('a');
        for (let i = 0; i < anchors.length; ++i) {
            // Purposefully grabbing the 'href' attribute and not the property.
            const pathname = anchors[i].getAttribute('href');
            const anchorRoute = Router.getInstance().getRouteForPath(pathname);
            if (anchorRoute && anchorRoute.contains(newRoute)) {
                this.setSelectedPath_(pathname);
                return;
            }
        }
        this.setSelectedPath_(''); // Nothing is selected.
    }
    focusFirstItem() {
        const firstFocusableItem = this.shadowRoot.querySelector('[role=menuitem]:not([hidden])');
        if (firstFocusableItem) {
            firstFocusableItem.focus();
        }
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately.
     */
    onLinkClick_(event) {
        if (event.target.matches('a:not(#extensionsLink)')) {
            event.preventDefault();
        }
    }
    /**
     * Keeps both menus in sync. `path` needs to come from
     * `element.getAttribute('href')`. Using `element.href` will not work as it
     * would pass the entire URL instead of just the path.
     */
    setSelectedPath_(path) {
        this.$.menu.selected = path;
    }
    onIronActivate_(event) {
        const path = event.detail.selected;
        this.setSelectedPath_(path);
        this.metricsBrowserProxy_.recordSettingsNavCategoryClicked();
        const action = pathToActionMap.get(path);
        if (action) {
            this.metricsBrowserProxy_.recordAction(action);
        }
        const route = Router.getInstance().getRouteForPath(path);
        assert(route, `settings-menu encountered invalid path '${path}'`);
        Router.getInstance().navigateTo(route, /* dynamicParams */ undefined, /* removeSearch */ true);
    }
    onExtensionsLinkClick_() {
        chrome.metricsPrivate.recordUserAction('SettingsMenu_ExtensionsLinkClicked');
    }
    onAutofillClick_() {
        this.metricsBrowserProxy_.recordAutofillSettingsReferrer('Autofill.YourSavedInfoSettingsPage.VisitReferrer', AutofillSettingsReferrer.SETTINGS_MENU);
    }
    hideBottomMenuSeparator_() {
        if (!this.pageVisibility_) {
            return false;
        }
        const visibilities = [
            this.pageVisibility_.languages,
            this.pageVisibility_.downloads,
            this.pageVisibility_.a11y,
            // 
            this.pageVisibility_.system,
            // 
            this.pageVisibility_.reset,
        ];
        return visibilities.every(visibility => visibility === false);
    }
}
customElements.define(SettingsMenuElement.is, SettingsMenuElement);
