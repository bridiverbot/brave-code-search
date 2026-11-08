// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'step-indicator' is an element that displays a row of dots, one of which is
 * highlighted, to indicate how far the user is through a multi-step flow.
 */
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './step_indicator.css.js';
import { getHtml } from './step_indicator.html.js';
const StepIndicatorElementBase = I18nMixinLit(CrLitElement);
export class StepIndicatorElement extends StepIndicatorElementBase {
    static get is() {
        return 'step-indicator';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * An Object with 'active' and 'total' members, indicating the active dot
             * index and the total number of dots.
             */
            model: { type: Object },
            /**
             * An array with length equal to the number of dots, for use by
             * dom-repeat. The contents of the array are unused.
             */
            dots_: { type: Array },
        };
    }
    #model_accessor_storage;
    get model() { return this.#model_accessor_storage; }
    set model(value) { this.#model_accessor_storage = value; }
    #dots__accessor_storage = [];
    get dots_() { return this.#dots__accessor_storage; }
    set dots_(value) { this.#dots__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('model')) {
            this.dots_ = this.computeDots_();
        }
    }
    /** @return the screenreader label for this element. */
    computeA11yLabel_() {
        if (!this.model) {
            return '';
        }
        return this.i18n('privacyGuideSteps', this.model.active + 1, this.model.total);
    }
    computeDots_() {
        // If total is 1, show nothing.
        return new Array(this.model && this.model.total > 1 ? this.model.total : 0);
    }
    /**
     * Returns a class for the dot at `index`, which will highlight the dot at the
     * active index.
     */
    getActiveClass_(index) {
        return index === this.model?.active ? 'active' : '';
    }
}
customElements.define(StepIndicatorElement.is, StepIndicatorElement);
