// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import './battery_page.js';
import './memory_page.js';
import './performance_page.js';
import './speed_page.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { PerformanceBrowserProxyImpl } from '../performance_page/performance_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixinLit } from '../router.js';
import { SearchableViewContainerMixinLit } from '../settings_page/searchable_view_container_mixin_lit.js';
import { getCss } from './performance_page_index.css.js';
import { getHtml } from './performance_page_index.html.js';
const SettingsPerformancePageIndexElementBase = SearchableViewContainerMixinLit(RouteObserverMixinLit(WebUiListenerMixinLit(CrLitElement)));
export class SettingsPerformancePageIndexElement extends SettingsPerformancePageIndexElementBase {
    static get is() {
        return 'settings-performance-page-index';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    // Used to hide battery settings section if the device has no battery.
    static get properties() {
        return {
            showBatterySettings_: { type: Boolean },
        };
    }
    #showBatterySettings__accessor_storage = false;
    get showBatterySettings_() { return this.#showBatterySettings__accessor_storage; }
    set showBatterySettings_(value) { this.#showBatterySettings__accessor_storage = value; }
    showDefaultViews_() {
        this.$.viewManager.switchViews(['performance', 'memory', 'battery', 'speed'], 'no-animation', 'no-animation');
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('device-has-battery-changed', this.onDeviceHasBatteryChanged_.bind(this));
        PerformanceBrowserProxyImpl.getInstance().getDeviceHasBattery().then(this.onDeviceHasBatteryChanged_.bind(this));
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Need to wait for currentRouteChanged observers on child views to run
        // first, before switching views.
        queueMicrotask(() => {
            switch (newRoute) {
                case routes.PERFORMANCE:
                    this.showDefaultViews_();
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
    onDeviceHasBatteryChanged_(deviceHasBattery) {
        this.showBatterySettings_ = deviceHasBattery;
    }
}
export { SettingsPerformancePageIndexElement as PerformancePageIndexElement };
customElements.define(SettingsPerformancePageIndexElement.is, SettingsPerformancePageIndexElement);
