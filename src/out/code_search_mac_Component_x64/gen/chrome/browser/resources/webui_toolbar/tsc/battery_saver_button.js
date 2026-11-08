// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './icons.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getContextMenuPosition, getContextMenuSourceType } from '/shared/toolbar_button.js';
import { ContextMenuType } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import { getHtml } from './battery_saver_button.html.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { OverflowableButtonMixin } from './overflowable_button.js';
import { getCss } from './toolbar_button.css.js';
const BatterySaverButtonElementBase = OverflowableButtonMixin(CrLitElement);
export class BatterySaverButtonElement extends BatterySaverButtonElementBase {
    static get is() {
        return 'battery-saver-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            ...super.properties,
            state: { type: Object },
        };
    }
    #state_accessor_storage = {
        // These fields are from OverflowableButtonState (in addition to
        // BatterySaverControlState), and are used by OverflowableButtonMixin.
        shouldBeShown: false,
        preventOverflow: false,
    };
    get state() { return this.#state_accessor_storage; }
    set state(value) { this.#state_accessor_storage = value; }
    getLabel_() {
        return loadTimeData.getString('batterySaverButtonAccName');
    }
    getTooltip_() {
        return loadTimeData.getString('batterySaverButtonTooltip');
    }
    browserProxy_ = BrowserProxyImpl.getInstance();
    onClick_(e) {
        TrackedElementManager.getInstance().notifyElementActivated(this);
        this.browserProxy_.toolbarUIHandler.showContextMenu(ContextMenuType.kBatterySaver, getContextMenuPosition(this), getContextMenuSourceType(e), /*showMenuToken=*/ null);
    }
}
customElements.define(BatterySaverButtonElement.is, BatterySaverButtonElement);
