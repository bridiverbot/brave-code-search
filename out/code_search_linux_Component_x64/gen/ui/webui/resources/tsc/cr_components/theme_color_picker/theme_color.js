// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './check_mark_wrapper.js';
import { skColorToRgba } from '//resources/js/color_utils.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './theme_color.css.js';
import { getHtml } from './theme_color.html.js';
export class ThemeColorElement extends CrLitElement {
    static get is() {
        return 'cr-theme-color';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            backgroundColor: { type: Object },
            foregroundColor: { type: Object },
            baseColor: { type: Object },
            checked: {
                type: Boolean,
                reflect: true,
            },
            backgroundColorHidden: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #backgroundColor_accessor_storage = { value: 0 };
    get backgroundColor() { return this.#backgroundColor_accessor_storage; }
    set backgroundColor(value) { this.#backgroundColor_accessor_storage = value; }
    #foregroundColor_accessor_storage = { value: 0 };
    get foregroundColor() { return this.#foregroundColor_accessor_storage; }
    set foregroundColor(value) { this.#foregroundColor_accessor_storage = value; }
    #baseColor_accessor_storage = { value: 0 };
    get baseColor() { return this.#baseColor_accessor_storage; }
    set baseColor(value) { this.#baseColor_accessor_storage = value; }
    #checked_accessor_storage = false;
    get checked() { return this.#checked_accessor_storage; }
    set checked(value) { this.#checked_accessor_storage = value; }
    #backgroundColorHidden_accessor_storage = false;
    get backgroundColorHidden() { return this.#backgroundColorHidden_accessor_storage; }
    set backgroundColorHidden(value) { this.#backgroundColorHidden_accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        FocusOutlineManager.forDocument(document);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('foregroundColor')) {
            this.style.setProperty('--cr-theme-color-foreground-color', skColorToRgba(this.foregroundColor));
        }
        if (changedProperties.has('foregroundColor')) {
            this.style.setProperty('--cr-theme-color-background-color', skColorToRgba(this.backgroundColor));
        }
        if (changedProperties.has('baseColor')) {
            this.style.setProperty('--cr-theme-color-base-color', skColorToRgba(this.baseColor));
        }
    }
}
customElements.define(ThemeColorElement.is, ThemeColorElement);
