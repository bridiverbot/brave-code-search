// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './brave_default_extensions_page.js';
import './brave_extensions_manifest_v2_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { SearchableViewContainerMixin } from '../settings_page/searchable_view_container_mixin.js';
import { getTemplate } from './brave_extensions_page_index.html.js';
const SettingsBraveExtensionsPageIndexElementBase = SearchableViewContainerMixin(RouteObserverMixin(PolymerElement));
export class SettingsBraveExtensionsPageIndexElement extends SettingsBraveExtensionsPageIndexElementBase {
    static get is() {
        return 'settings-brave-extensions-page-index';
    }
    static get template() {
        return getTemplate();
    }
    showDefaultViews_() {
        this.$.viewManager.switchViews(['extensions'], 'no-animation', 'no-animation');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.EXTENSIONS:
                case routes.BASIC:
                    this.showDefaultViews_();
                    break;
                case routes.EXTENSIONS_V2:
                    this.$.viewManager.switchView('manageV2Extensions', 'no-animation', 'no-animation');
                    break;
            }
        });
    }
}
customElements.define(SettingsBraveExtensionsPageIndexElement.is, SettingsBraveExtensionsPageIndexElement);
