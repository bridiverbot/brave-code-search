// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { hexColorToSkColor } from '//resources/js/color_utils.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './containers_background_chip.css.js';
import { getHtml } from './containers_background_chip.html.js';
export class SettingsBraveContentContainersBackgroundChipElement extends CrLitElement {
    static get is() {
        return 'settings-brave-content-containers-background-chip';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            selected: { type: Boolean }, backgroundColor: { type: String },
        };
    }
    #selected_accessor_storage = false;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    #backgroundColor_accessor_storage = 'magenta';
    get backgroundColor() { return this.#backgroundColor_accessor_storage; } // Debug color that should never be visible
    set backgroundColor(value) { this.#backgroundColor_accessor_storage = value; }
    onChipClick_() {
        const event = new CustomEvent('background-selected', {
            bubbles: true,
            composed: true,
            detail: { color: hexColorToSkColor(this.backgroundColor) },
        });
        this.dispatchEvent(event);
    }
}
customElements.define(SettingsBraveContentContainersBackgroundChipElement.is, SettingsBraveContentContainersBackgroundChipElement);
