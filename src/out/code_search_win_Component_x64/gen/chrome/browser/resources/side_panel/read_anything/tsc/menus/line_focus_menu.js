// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './grouped_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { browserProxyFactory as userEducationProxyFactory } from '//resources/mojo/components/user_education/webui/user_education.mojom-webui.js';
import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { LineFocusMovement, LineFocusStyle, ToolbarEvent } from '../content/read_anything_types.js';
import { getHtml } from './line_focus_menu.html.js';
export const LINE_FOCUS_FEATURE_NAME = 'ReadAnythingLineFocus';
const LineFocusMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the color theme menu.
export class LineFocusMenuElement extends LineFocusMenuElementBase {
    static get is() {
        return 'line-focus-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            nonModal: { type: Boolean },
            lineFocusStyle: { type: Object },
            lineFocusEnabled: { type: Boolean },
            lineFocusMovement: { type: Number },
            groups_: { type: Array },
        };
    }
    #nonModal_accessor_storage = false;
    get nonModal() { return this.#nonModal_accessor_storage; }
    set nonModal(value) { this.#nonModal_accessor_storage = value; }
    #lineFocusStyle_accessor_storage = null;
    get lineFocusStyle() { return this.#lineFocusStyle_accessor_storage; }
    set lineFocusStyle(value) { this.#lineFocusStyle_accessor_storage = value; }
    #lineFocusEnabled_accessor_storage = false;
    get lineFocusEnabled() { return this.#lineFocusEnabled_accessor_storage; }
    set lineFocusEnabled(value) { this.#lineFocusEnabled_accessor_storage = value; }
    #lineFocusMovement_accessor_storage = null;
    get lineFocusMovement() { return this.#lineFocusMovement_accessor_storage; }
    set lineFocusMovement(value) { this.#lineFocusMovement_accessor_storage = value; }
    proxy;
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    toggleOptions_ = [
        {
            title: loadTimeData.getString('lineFocusOffTitle'),
            data: false,
        },
        {
            title: loadTimeData.getString('lineFocusOnTitle'),
            data: true,
        },
    ];
    styleOptions_ = [
        {
            title: loadTimeData.getString('lineFocusUnderlineTitle'),
            data: LineFocusStyle.UNDERLINE,
        },
        {
            title: loadTimeData.getString('lineFocusOneLineTitle'),
            data: LineFocusStyle.SMALL_WINDOW,
        },
        {
            title: loadTimeData.getString('lineFocusThreeLineTitle'),
            data: LineFocusStyle.MEDIUM_WINDOW,
        },
        {
            title: loadTimeData.getString('lineFocusFiveLineTitle'),
            data: LineFocusStyle.LARGE_WINDOW,
        },
    ];
    movementOptions_ = [
        {
            title: loadTimeData.getString('lineFocusStaticTitle'),
            data: LineFocusMovement.STATIC,
        },
        {
            title: loadTimeData.getString('lineFocusCursorLineTitle'),
            data: LineFocusMovement.CURSOR,
        },
    ];
    get toggleGroup_() {
        return {
            header: {
                title: loadTimeData.getString('lineFocusLabel'),
                shortcut: loadTimeData.getString('lineFocusShortcutLabel'),
                separator: false,
            },
            items: this.toggleOptions_,
            eventName: ToolbarEvent.LINE_FOCUS_TOGGLE,
            selectedValue: this.lineFocusEnabled,
        };
    }
    get styleGroup_() {
        return {
            header: {
                title: loadTimeData.getString('lineFocusStyleHeading'),
                separator: true,
            },
            items: this.styleOptions_,
            eventName: ToolbarEvent.LINE_FOCUS_STYLE,
            selectedValue: this.lineFocusStyle ?? undefined,
        };
    }
    get movementGroup_() {
        return {
            header: {
                title: loadTimeData.getString('lineFocusMovementHeading'),
                separator: true,
            },
            items: this.movementOptions_,
            eventName: ToolbarEvent.LINE_FOCUS_MOVEMENT,
            selectedValue: this.lineFocusMovement ?? undefined,
        };
    }
    #groups__accessor_storage = [];
    get groups_() { return this.#groups__accessor_storage; }
    set groups_(value) { this.#groups__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('lineFocusEnabled') ||
            changedProperties.has('lineFocusStyle') ||
            changedProperties.has('lineFocusMovement')) {
            this.computeGroups_();
        }
    }
    computeGroups_() {
        const groups = [
            this.toggleGroup_,
        ];
        if (!this.visualBrowserProxy_.isReadAnythingImprovedUiEnabled() ||
            this.lineFocusEnabled) {
            groups.push(this.styleGroup_, this.movementGroup_);
        }
        this.groups_ = groups;
    }
    open(anchor, showAtConfig) {
        this.$.menu.open(anchor, showAtConfig);
    }
    close() {
        this.$.menu.close();
        if (this.lineFocusEnabled) {
            this.proxy = userEducationProxyFactory;
            userEducationProxyFactory.getInstance().handler.notifyNewBadgeFeatureUsed(LINE_FOCUS_FEATURE_NAME);
        }
    }
}
customElements.define(LineFocusMenuElement.is, LineFocusMenuElement);
