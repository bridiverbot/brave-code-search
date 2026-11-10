// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './omnibox_everywhere_section.js';
import './site_shortcuts_page.js';
import './feature_shortcuts_page.js';
import './keyboard_shortcut_page.js';
import './search_page.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { SearchableViewContainerMixinLit } from '../settings_page/searchable_view_container_mixin_lit.js';
import { getCss } from './search_page_index.css.js';
import { getHtml } from './search_page_index.html.js';
const SettingsSearchPageIndexElementBase = SearchableViewContainerMixinLit(RouteObserverMixinLit(CrLitElement));
export class SettingsSearchPageIndexElement extends SettingsSearchPageIndexElementBase {
    static get is() {
        return 'settings-search-page-index';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            routes_: { type: Object },
            searchSettingsUpdateEnabled_: { type: Boolean },
            omniboxEverywhereSettingsEnabled_: { type: Boolean },
        };
    }
    #routes__accessor_storage = routes;
    get routes_() { return this.#routes__accessor_storage; }
    set routes_(value) { this.#routes__accessor_storage = value; }
    #searchSettingsUpdateEnabled__accessor_storage = loadTimeData.getBoolean('searchSettingsUpdate');
    get searchSettingsUpdateEnabled_() { return this.#searchSettingsUpdateEnabled__accessor_storage; }
    set searchSettingsUpdateEnabled_(value) { this.#searchSettingsUpdateEnabled__accessor_storage = value; }
    #omniboxEverywhereSettingsEnabled__accessor_storage = loadTimeData.getBoolean('omniboxEverywhereSettingsEnabled');
    get omniboxEverywhereSettingsEnabled_() { return this.#omniboxEverywhereSettingsEnabled__accessor_storage; }
    set omniboxEverywhereSettingsEnabled_(value) { this.#omniboxEverywhereSettingsEnabled__accessor_storage = value; }
    showDefaultViews_() {
        const defaultViews = ['parent'];
        if (this.omniboxEverywhereSettingsEnabled_) {
            defaultViews.push('omniboxEverywhere');
        }
        if (this.searchSettingsUpdateEnabled_) {
            defaultViews.push('siteShortcuts', 'featureShortcuts', 'keyboardShortcut');
        }
        this.$.viewManager.switchViews(defaultViews, 'no-animation', 'no-animation');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.SEARCH:
                    this.showDefaultViews_();
                    break;
                case routes.SEARCH_ENGINES:
                    assert(!this.searchSettingsUpdateEnabled_);
                    this.$.viewManager.switchView('searchEngines', 'no-animation', 'no-animation');
                    break;
                case routes.BASIC:
                    // Switch back to the default views in case they are part of search
                    // results.
                    this.showDefaultViews_();
                    break;
                default:
                    // Nothing to do. Other parent elements are responsible for updating
                    // the displayed contents.
                    break;
            }
        });
    }
}
