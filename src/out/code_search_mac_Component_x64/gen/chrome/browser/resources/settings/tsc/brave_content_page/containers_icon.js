// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { Icon } from '../containers.mojom-webui.js';
import { getCss } from './containers_icon.css.js';
import { getHtml } from './containers_icon.html.js';
const iconsMap = new Map([
    [Icon.kPersonal, 'container-personal'],
    [Icon.kWork, 'container-work'],
    [Icon.kShopping, 'container-shopping'],
    [Icon.kSocial, 'container-social'],
    [Icon.kEvents, 'container-events'],
    [Icon.kBanking, 'container-banking'],
    [Icon.kStar, 'container-star'],
    [Icon.kTravel, 'container-travel'],
    [Icon.kSchool, 'container-school'],
    [Icon.kPrivate, 'container-private'],
    [Icon.kMessaging, 'container-messaging'],
]);
export class SettingsBraveContentContainersIconElement extends CrLitElement {
    static get is() {
        return 'settings-brave-content-containers-icon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            icon: { type: Number }, backgroundColor: { type: String },
            selected: { type: Boolean },
        };
    }
    #icon_accessor_storage;
    get icon() { return this.#icon_accessor_storage; }
    set icon(value) { this.#icon_accessor_storage = value; }
    getLeo() {
        const icon = iconsMap.get(this.icon);
        if (!icon) {
            console.warn(`No Leo icon found for icon: ${this.icon} from `, iconsMap);
            return '';
        }
        return icon;
    }
    #backgroundColor_accessor_storage = 'magenta';
    get backgroundColor() { return this.#backgroundColor_accessor_storage; } // Debug color that should never be visible
    set backgroundColor(value) { this.#backgroundColor_accessor_storage = value; }
    #selected_accessor_storage = false;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    handleIconClick_() {
        const event = new CustomEvent('icon-selected', {
            bubbles: true,
            composed: true,
            detail: { icon: this.icon },
        });
        this.dispatchEvent(event);
    }
}
customElements.define(SettingsBraveContentContainersIconElement.is, SettingsBraveContentContainersIconElement);
