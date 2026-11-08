// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { CrRadioButtonMixinLit } from '//resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js';
import { CrRippleMixin } from '//resources/cr_elements/cr_ripple/cr_ripple_mixin.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { prefToString } from '/shared/settings/prefs/pref_util.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { getCss } from './controlled_radio_button.css.js';
import { getHtml } from './controlled_radio_button.html.js';
const ControlledRadioButtonElementBase = PrefKeyObserverMixinLit(CrRippleMixin(CrRadioButtonMixinLit(CrLitElement)));
export class ControlledRadioButtonElement extends ControlledRadioButtonElementBase {
    static get is() {
        return 'controlled-radio-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('pref')) {
            this.disabled = this.pref?.enforcement ===
                chrome.settingsPrivate.Enforcement.ENFORCED;
        }
    }
    // Overridden from CrRippleMixin
    createRipple() {
        this.rippleContainer = this.shadowRoot.querySelector('.disc-wrapper');
        const ripple = super.createRipple();
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle');
        return ripple;
    }
    showIndicator_() {
        if (!this.disabled || !this.pref) {
            return false;
        }
        return this.name === prefToString(this.pref);
    }
    onIndicatorClick_(e) {
        // Disallow <controlled-radio-button on-click="..."> when disabled.
        e.preventDefault();
        e.stopPropagation();
    }
}
customElements.define(ControlledRadioButtonElement.is, ControlledRadioButtonElement);
