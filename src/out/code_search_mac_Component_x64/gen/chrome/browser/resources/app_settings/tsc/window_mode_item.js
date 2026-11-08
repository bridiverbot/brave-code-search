// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { CrLitElement, css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app_management_shared_style.css.js';
import { createDummyApp } from './web_app_settings_utils.js';
import { getHtml } from './window_mode_item.html.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { browserProxyFactory, WindowMode } from '//resources/cr_components/app_management/app_management.mojom-webui.js';
export class WindowModeItemElement extends CrLitElement {
    static get is() {
        return 'app-management-window-mode-item';
    }
    static get styles() {
        return [
            getCss(),
            css `
        :host > div {
          width: 100%;
        }

        leo-radiobutton {
          display: flex;
        }
      `
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            windowModeLabel: { type: String },
            app: { type: Object },
        };
    }
    get tabStripSettingsEnabled_() {
        return loadTimeData.getBoolean('isPWAsTabStripSettingsEnabled');
    }
    get windowModes() {
        return [
            {
                label: loadTimeData.getString('appManagementWindowModeLabel'),
                value: WindowMode.kWindow,
            },
            {
                label: loadTimeData.getString('appManagementBrowserModeLabel'),
                value: WindowMode.kBrowser,
            },
            ...this.tabStripSettingsEnabled_ ? [{
                    label: loadTimeData.getString('appManagementTabbedWindowModeLabel'),
                    value: WindowMode.kTabbedWindow,
                }] : [],
        ];
    }
    #windowModeLabel_accessor_storage = '';
    get windowModeLabel() { return this.#windowModeLabel_accessor_storage; }
    set windowModeLabel(value) { this.#windowModeLabel_accessor_storage = value; }
    #app_accessor_storage = createDummyApp();
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    onChange(e) {
        browserProxyFactory.getInstance().handler.setWindowMode(this.app.id, parseInt(e.value));
    }
}
customElements.define(WindowModeItemElement.is, WindowModeItemElement);
