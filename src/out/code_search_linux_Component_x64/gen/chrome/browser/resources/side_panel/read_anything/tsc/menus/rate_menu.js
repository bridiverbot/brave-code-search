// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './simple_action_menu.js';
import { WebUiListenerMixinLit } from '//resources/cr_elements/web_ui_listener_mixin_lit.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getHtml } from './rate_menu.html.js';
// 3x and 4x speeds are hidden on non-ChromeOS because natural voices on
// non-ChromeOS do not currently support 3x and 4x speeds.
export const RATE_OPTIONS = [
    0.5,
    0.8,
    1,
    1.2,
    1.5,
    2,
    // 
];
const RateMenuElementBase = WebUiListenerMixinLit(CrLitElement);
// Stores and propagates the data for the speech rate menu.
export class RateMenuElement extends RateMenuElementBase {
    static get is() {
        return 'rate-menu';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            speechRate: { type: Number },
            options_: { type: Array },
        };
    }
    #speechRate_accessor_storage = 1;
    get speechRate() { return this.#speechRate_accessor_storage; }
    set speechRate(value) { this.#speechRate_accessor_storage = value; }
    #options__accessor_storage = RATE_OPTIONS.map(rate => {
        return {
            title: loadTimeData.getStringF('voiceSpeedOptionTitle', rate.toLocaleString()),
            data: rate,
        };
    });
    get options_() { return this.#options__accessor_storage; }
    set options_(value) { this.#options__accessor_storage = value; }
    open(anchor) {
        this.$.menu.open(anchor);
    }
}
customElements.define(RateMenuElement.is, RateMenuElement);
