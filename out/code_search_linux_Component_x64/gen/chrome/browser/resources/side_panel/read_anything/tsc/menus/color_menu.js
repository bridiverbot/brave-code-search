// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './color_menu.html.js';
const ColorMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the color theme menu.
export class ColorMenuElement extends ColorMenuElementBase {
    static get is() {
        return 'color-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            theme: { type: Number },
            nonModal: { type: Boolean },
            options_: { type: Array },
        };
    }
    #theme_accessor_storage = 0;
    get theme() { return this.#theme_accessor_storage; }
    set theme(value) { this.#theme_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    #options__accessor_storage = [
        {
            title: loadTimeData.getString('defaultColorTitle'),
            icon: 'read-anything-20:default-theme-custom',
            data: this.visualBrowserProxy_.getDefaultTheme(),
        },
        {
            title: loadTimeData.getString('lightColorTitle'),
            icon: 'read-anything-20:light-theme-custom',
            data: this.visualBrowserProxy_.getLightTheme(),
        },
        {
            title: loadTimeData.getString('darkColorTitle'),
            icon: 'read-anything-20:dark-theme-custom',
            data: this.visualBrowserProxy_.getDarkTheme(),
        },
        {
            title: loadTimeData.getString('yellowColorTitle'),
            icon: 'read-anything-20:yellow-theme-custom',
            data: this.visualBrowserProxy_.getYellowTheme(),
        },
        {
            title: loadTimeData.getString('blueColorTitle'),
            icon: 'read-anything-20:blue-theme-custom',
            data: this.visualBrowserProxy_.getBlueTheme(),
        },
        {
            title: loadTimeData.getString('highContrastColorTitle'),
            icon: 'read-anything-20:high-contrast-theme-custom',
            data: this.visualBrowserProxy_.getHighContrastTheme(),
        },
        {
            title: loadTimeData.getString('lowContrastLightColorTitle'),
            icon: 'read-anything-20:low-contrast-light-theme-custom',
            data: this.visualBrowserProxy_.getLowContrastLightTheme(),
        },
        {
            title: loadTimeData.getString('lowContrastDarkColorTitle'),
            icon: 'read-anything-20:low-contrast-dark-theme-custom',
            data: this.visualBrowserProxy_.getLowContrastDarkTheme(),
        },
    ];
    get options_() { return this.#options__accessor_storage; }
    set options_(value) { this.#options__accessor_storage = value; }
    open(anchor, showAtConfig) {
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
    }
    onThemeChange_() {
        this.fire(ToolbarEvent.CLOSE_ALL_MENUS);
    }
}
customElements.define(ColorMenuElement.is, ColorMenuElement);
