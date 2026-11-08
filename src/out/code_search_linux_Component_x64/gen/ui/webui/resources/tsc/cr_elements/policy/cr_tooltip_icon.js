// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../icons.html.js';
import '../cr_icon/cr_icon.js';
import '../cr_tooltip/cr_tooltip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_tooltip_icon.css.js';
import { getHtml } from './cr_tooltip_icon.html.js';
export class CrTooltipIconElement extends CrLitElement {
    static get is() {
        return 'cr-tooltip-icon';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            iconAriaLabel: { type: String },
            iconClass: { type: String },
            tooltipText: { type: String },
            /** Position of tooltip popup related to the icon. */
            tooltipPosition: { type: String },
        };
    }
    #iconAriaLabel_accessor_storage = '';
    get iconAriaLabel() { return this.#iconAriaLabel_accessor_storage; }
    set iconAriaLabel(value) { this.#iconAriaLabel_accessor_storage = value; }
    #iconClass_accessor_storage = '';
    get iconClass() { return this.#iconClass_accessor_storage; }
    set iconClass(value) { this.#iconClass_accessor_storage = value; }
    #tooltipText_accessor_storage = '';
    get tooltipText() { return this.#tooltipText_accessor_storage; }
    set tooltipText(value) { this.#tooltipText_accessor_storage = value; }
    #tooltipPosition_accessor_storage = 'top';
    get tooltipPosition() { return this.#tooltipPosition_accessor_storage; }
    set tooltipPosition(value) { this.#tooltipPosition_accessor_storage = value; }
    getFocusableElement() {
        return this.$.indicator;
    }
}
customElements.define(CrTooltipIconElement.is, CrTooltipIconElement);
