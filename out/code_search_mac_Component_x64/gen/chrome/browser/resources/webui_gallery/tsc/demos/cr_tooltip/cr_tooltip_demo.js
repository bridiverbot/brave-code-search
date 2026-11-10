// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { TooltipPosition } from '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cr_tooltip_demo.css.js';
import { getHtml } from './cr_tooltip_demo.html.js';
export class CrTooltipDemoElement extends CrLitElement {
    static get is() {
        return 'cr-tooltip-demo';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            tooltipPosition_: { type: String },
            tooltipOffset_: { type: Number },
        };
    }
    #tooltipPosition__accessor_storage = TooltipPosition.BOTTOM;
    // Default values.
    get tooltipPosition_() { return this.#tooltipPosition__accessor_storage; }
    set tooltipPosition_(value) { this.#tooltipPosition__accessor_storage = value; }
    #tooltipOffset__accessor_storage = 14;
    get tooltipOffset_() { return this.#tooltipOffset__accessor_storage; }
    set tooltipOffset_(value) { this.#tooltipOffset__accessor_storage = value; }
    onTooltipPositionChange_(e) {
        const position = e.target.value;
        this.tooltipPosition_ = position;
        this.shadowRoot.querySelectorAll('cr-tooltip')
            .forEach(tooltip => tooltip.updatePosition());
    }
    onTooltipOffsetInput_(e) {
        const offset = Number(e.target.value);
        this.tooltipOffset_ = offset;
        this.shadowRoot.querySelectorAll('cr-tooltip')
            .forEach(tooltip => tooltip.updatePosition());
    }
    onHideClick_() {
        this.$.manualTooltip.hide();
    }
    onShowAtTarget1Click_() {
        this.$.manualTooltip.target = this.$.target1;
        this.$.manualTooltip.updatePosition();
        this.$.manualTooltip.show();
    }
    onShowAtTarget2Click_() {
        this.$.manualTooltip.target = this.$.target2;
        this.$.manualTooltip.updatePosition();
        this.$.manualTooltip.show();
    }
}
export const tagName = CrTooltipDemoElement.is;
customElements.define(CrTooltipDemoElement.is, CrTooltipDemoElement);
