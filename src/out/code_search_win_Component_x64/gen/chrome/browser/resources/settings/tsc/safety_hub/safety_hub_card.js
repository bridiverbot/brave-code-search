// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-hub-card' is used by the top cards in Safety Hub settings
 * page.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CardState } from './safety_hub_browser_proxy.js';
import { getCss } from './safety_hub_card.css.js';
import { getHtml } from './safety_hub_card.html.js';
export class SettingsSafetyHubCardElement extends CrLitElement {
    static get is() {
        return 'settings-safety-hub-card';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            // The object to hold Card Info.
            data: { type: Object },
        };
    }
    #data_accessor_storage = {
        header: '',
        subheader: '',
        state: CardState.INFO,
    };
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    // Returns the icon for the card state.
    getStatusIcon_() {
        switch (this.data.state) {
            case CardState.WARNING:
            case CardState.WEAK:
                return 'cr:error-filled';
            case CardState.INFO:
                return 'cr:info-filled';
            case CardState.SAFE:
                return 'cr:check-circle';
            default:
                assertNotReached();
        }
    }
    // Returns the color class for the icon to paint it.
    getColorClass_() {
        switch (this.data.state) {
            case CardState.WARNING:
                return 'red';
            case CardState.WEAK:
                return 'yellow';
            case CardState.INFO:
                return 'grey';
            case CardState.SAFE:
                return 'green';
            default:
                assertNotReached();
        }
    }
}
customElements.define(SettingsSafetyHubCardElement.is, SettingsSafetyHubCardElement);
