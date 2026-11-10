// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { Color } from '../tab_group_types.mojom-webui.js';
import { getCss } from './tab_group.css.js';
import { getHtml } from './tab_group.html.js';
const colorMap = new Map([
    [Color.kGrey, 'grey'],
    [Color.kBlue, 'blue'],
    [Color.kRed, 'red'],
    [Color.kYellow, 'yellow'],
    [Color.kGreen, 'green'],
    [Color.kPink, 'pink'],
    [Color.kPurple, 'purple'],
    [Color.kCyan, 'cyan'],
    [Color.kOrange, 'orange'],
]);
export class TabGroupElement extends CrLitElement {
    static get is() {
        return 'webui-browser-tab-group';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            collectionId: { type: String },
            groupData: { type: Object },
        };
    }
    #collectionId_accessor_storage = '';
    get collectionId() { return this.#collectionId_accessor_storage; }
    set collectionId(value) { this.#collectionId_accessor_storage = value; }
    #groupData_accessor_storage = {
        title: '',
        color: Color.kGrey,
        isCollapsed: false,
    };
    get groupData() { return this.#groupData_accessor_storage; }
    set groupData(value) { this.#groupData_accessor_storage = value; }
    get colorName_() {
        const color = colorMap.get(this.groupData.color);
        if (color === undefined) {
            throw Error('Undefined color id');
        }
        return color;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('groupData')) {
            const colorName = this.colorName_;
            this.style.setProperty('--tab-group-color', `var(--tab-group-color-${colorName})`);
            this.style.setProperty('--tab-group-foreground-color', `var(--foreground-color-on-${colorName}-background)`);
        }
    }
}
customElements.define(TabGroupElement.is, TabGroupElement);
