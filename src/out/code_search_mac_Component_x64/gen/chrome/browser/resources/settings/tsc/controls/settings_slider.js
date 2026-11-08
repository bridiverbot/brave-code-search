// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * settings-slider wraps a cr-slider. It maps the slider's values from a
 * linear UI range to a range of real values. When |value| does not map exactly
 * to a tick mark, it interpolates to the nearest tick.
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CrPolicyPrefMixinLit } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './settings_slider.css.js';
import { getHtml } from './settings_slider.html.js';
const SettingsSliderElementBase = CrPolicyPrefMixinLit(PrefKeyObserverMixinLit(CrLitElement));
export class SettingsSliderElement extends SettingsSliderElementBase {
    static get is() {
        return 'settings-slider';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** Values corresponding to each tick. */
            ticks: { type: Array },
            /**
             * A scale factor used to support fractional pref values. This is not
             * compatible with |ticks|, i.e. if |scale| is not 1 then |ticks| must be
             * empty.
             */
            scale: { type: Number },
            min: { type: Number },
            max: { type: Number },
            labelAria: { type: String },
            labelMin: { type: String },
            labelMax: { type: String },
            disabled: { type: Boolean },
            // The value of ariaDisabled should only be "true" or "false".
            ariaDisabled: { type: String },
            showMarkers: { type: Boolean },
            disableSlider_: { type: Boolean },
            updateValueInstantly: { type: Boolean },
            sliderValue_: { type: Number },
            markerCount_: { type: Number },
            pref: { type: Object },
        };
    }
    #pref_accessor_storage = undefined;
    get pref() { return this.#pref_accessor_storage; }
    set pref(value) { this.#pref_accessor_storage = value; }
    #ticks_accessor_storage = [];
    get ticks() { return this.#ticks_accessor_storage; }
    set ticks(value) { this.#ticks_accessor_storage = value; }
    #scale_accessor_storage = 1;
    get scale() { return this.#scale_accessor_storage; }
    set scale(value) { this.#scale_accessor_storage = value; }
    #min_accessor_storage = undefined;
    get min() { return this.#min_accessor_storage; }
    set min(value) { this.#min_accessor_storage = value; }
    #max_accessor_storage = undefined;
    get max() { return this.#max_accessor_storage; }
    set max(value) { this.#max_accessor_storage = value; }
    #labelAria_accessor_storage = '';
    get labelAria() { return this.#labelAria_accessor_storage; }
    set labelAria(value) { this.#labelAria_accessor_storage = value; }
    #labelMin_accessor_storage = '';
    get labelMin() { return this.#labelMin_accessor_storage; }
    set labelMin(value) { this.#labelMin_accessor_storage = value; }
    #labelMax_accessor_storage = '';
    get labelMax() { return this.#labelMax_accessor_storage; }
    set labelMax(value) { this.#labelMax_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #ariaDisabled_accessor_storage = '';
    get ariaDisabled() { return this.#ariaDisabled_accessor_storage; }
    set ariaDisabled(value) { this.#ariaDisabled_accessor_storage = value; }
    #showMarkers_accessor_storage = false;
    get showMarkers() { return this.#showMarkers_accessor_storage; }
    set showMarkers(value) { this.#showMarkers_accessor_storage = value; }
    #updateValueInstantly_accessor_storage = true;
    get updateValueInstantly() { return this.#updateValueInstantly_accessor_storage; }
    set updateValueInstantly(value) { this.#updateValueInstantly_accessor_storage = value; }
    #disableSlider__accessor_storage = false;
    get disableSlider_() { return this.#disableSlider__accessor_storage; }
    set disableSlider_(value) { this.#disableSlider__accessor_storage = value; }
    #sliderValue__accessor_storage = 0;
    get sliderValue_() { return this.#sliderValue__accessor_storage; }
    set sliderValue_(value) { this.#sliderValue__accessor_storage = value; }
    #markerCount__accessor_storage = 0;
    get markerCount_() { return this.#markerCount__accessor_storage; }
    set markerCount_(value) { this.#markerCount__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('disabled') || changedProperties.has('pref')) {
            this.disableSlider_ = this.computeDisableSlider_();
        }
        if (changedProperties.has('updateValueInstantly')) {
            this.onSliderChanged_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('pref') || changedProperties.has('ticks') ||
            changedProperties.has('showMarkers')) {
            this.valueChanged_();
        }
    }
    focus() {
        this.$.slider.focus();
    }
    getTickValue_(tick) {
        return typeof tick === 'object' ? tick.value : tick;
    }
    getTickValueAtIndex_(index) {
        return this.getTickValue_(this.ticks[index]);
    }
    onCrSliderValueChanged_() {
        this.onSliderChanged_();
    }
    onDraggingChanged_() {
        this.onSliderChanged_();
    }
    onUpdatingFromKeyChanged_() {
        this.onSliderChanged_();
    }
    /**
     * Sets the |pref.value| property to the value corresponding to the knob
     * position after a user action.
     */
    onSliderChanged_() {
        if (!this.pref) {
            return;
        }
        if (this.$.slider.dragging && !this.updateValueInstantly) {
            return;
        }
        const sliderValue = this.$.slider.value;
        let newValue;
        if (this.ticks && this.ticks.length > 0) {
            newValue = this.getTickValueAtIndex_(sliderValue);
        }
        else {
            newValue = sliderValue / this.scale;
        }
        PrefService.getInstance().setPrefValue(this.prefKey, newValue);
    }
    computeDisableSlider_() {
        return this.disabled || this.isPrefEnforced();
    }
    /**
     * Updates the knob position when |pref.value| changes. If the knob is still
     * being dragged, this instead forces |pref.value| back to the current
     * position.
     */
    valueChanged_() {
        if (this.pref === undefined || this.$.slider.dragging ||
            this.$.slider.updatingFromKey) {
            return;
        }
        const numTicks = this.ticks.length;
        if (this.ticks.length === 1) {
            return;
        }
        const prefValue = this.pref.value;
        // The preference and slider values are continuous when |ticks| is empty.
        if (numTicks === 0) {
            this.sliderValue_ = prefValue * this.scale;
            return;
        }
        assert(this.scale === 1);
        // Limit the number of ticks to 10 to keep the slider from looking too busy.
        const MAX_TICKS = 10;
        this.markerCount_ =
            (this.showMarkers || numTicks <= MAX_TICKS) ? numTicks : 0;
        // Convert from the public |value| to the slider index (where the knob
        // should be positioned on the slider).
        const index = this.ticks
            .map((tick) => Math.abs(this.getTickValue_(tick) - prefValue))
            .reduce((acc, diff, index) => diff < acc.diff ? { index, diff } : acc, { index: -1, diff: Number.MAX_VALUE })
            .index;
        assert(index !== -1);
        this.sliderValue_ = index;
        const tickValue = this.getTickValueAtIndex_(index);
        if (this.pref.value !== tickValue) {
            PrefService.getInstance().setPrefValue(this.pref.key, tickValue);
        }
    }
    getRoleDescription_() {
        return loadTimeData.getStringF('settingsSliderRoleDescription', this.labelMin, this.labelMax);
    }
}
customElements.define(SettingsSliderElement.is, SettingsSliderElement);
