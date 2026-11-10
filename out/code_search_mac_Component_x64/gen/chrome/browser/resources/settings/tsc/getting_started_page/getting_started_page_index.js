// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './getting_started.js';
import '../people_page/manage_profile.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { SearchableViewContainerMixin } from '../settings_page/searchable_view_container_mixin.js';
import { getTemplate } from './getting_started_page_index.html.js';
const SettingsGettingStartedPageIndexElementBase = SearchableViewContainerMixin(RouteObserverMixin(PolymerElement));
export class SettingsGettingStartedPageIndexElement extends SettingsGettingStartedPageIndexElementBase {
    static get is() {
        return 'settings-getting-started-page-index';
    }
    static get template() {
        return getTemplate();
    }
    showDefaultViews_() {
        this.$.viewManager.switchViews(['parent', 'newTab'], 'no-animation', 'no-animation');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.GET_STARTED:
                case routes.IMPORT_DATA:
                    this.showDefaultViews_();
                    break;
                case routes.MANAGE_PROFILE:
                    this.$.viewManager.switchView('manageProfile', 'no-animation', 'no-animation');
                    break;
                case routes.BASIC:
                    // Switch back to the default view in case they are part of search
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
customElements.define(SettingsGettingStartedPageIndexElement.is, SettingsGettingStartedPageIndexElement);
