// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Appearance menu element used for the improved Read Aloud UI.
import './grouped_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './appearance_menu.html.js';
const AppearanceMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the appearance menu.
export class AppearanceMenuElement extends AppearanceMenuElementBase {
    static get is() {
        return 'appearance-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            theme: { type: Number },
            nonModal: { type: Boolean },
            presentationState: { type: Number },
            groups_: { type: Array },
        };
    }
    #theme_accessor_storage = 0;
    get theme() { return this.#theme_accessor_storage; }
    set theme(value) { this.#theme_accessor_storage = value; }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #presentationState_accessor_storage = 0;
    get presentationState() { return this.#presentationState_accessor_storage; }
    set presentationState(value) { this.#presentationState_accessor_storage = value; }
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    colorOptions_ = [
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
    viewOptions_ = [
        {
            title: loadTimeData.getString('sidePanelLabel'),
            data: this.visualBrowserProxy_.getInSidePanelPresentationState(),
        },
        {
            title: loadTimeData.getString('fullPageLabel'),
            data: this.visualBrowserProxy_.getInImmersiveOverlayPresentationState(),
        },
    ];
    #groups__accessor_storage = this.computeGroups_();
    get groups_() { return this.#groups__accessor_storage; }
    set groups_(value) { this.#groups__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('theme') ||
            changedProperties.has('presentationState')) {
            this.groups_ = this.computeGroups_();
        }
    }
    // The theme options are not shown in high contrast mode because reading mode
    // doesn't override system forced colors.
    computeGroups_() {
        const viewGroup = {
            header: {
                title: loadTimeData.getString('viewLabel'),
                separator: false,
            },
            items: this.viewOptions_,
            eventName: ToolbarEvent.PRESENTATION_CHANGE,
            selectedValue: this.presentationState,
        };
        const themeGroup = {
            header: {
                title: loadTimeData.getString('themeTitle'),
                separator: true,
            },
            items: this.colorOptions_,
            eventName: ToolbarEvent.THEME,
            selectedValue: this.theme,
        };
        return window.matchMedia('(forced-colors: active)').matches ?
            [viewGroup] :
            [viewGroup, themeGroup];
    }
    open(anchor, showAtConfig) {
        // Recompute here in case the system forced colors setting changed since
        // this menu was last shown.
        this.groups_ = this.computeGroups_();
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
    }
}
customElements.define(AppearanceMenuElement.is, AppearanceMenuElement);
