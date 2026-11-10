// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { CrRadioButtonMixinLit } from 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js';
import { CrRippleMixin } from 'chrome://resources/cr_elements/cr_ripple/cr_ripple_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './collapse_radio_button.css.js';
import { getHtml } from './collapse_radio_button.html.js';
const SettingsCollapseRadioButtonElementBase = PrefKeyObserverMixinLit(CrRippleMixin(CrRadioButtonMixinLit(CrLitElement)));
export class SettingsCollapseRadioButtonElement extends SettingsCollapseRadioButtonElementBase {
    static get is() {
        return 'settings-collapse-radio-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            expanded: {
                type: Boolean,
                notify: true,
            },
            noAutomaticCollapse: { type: Boolean },
            noCollapse: { type: Boolean },
            indicatorAriaLabel: { type: String },
            icon: { type: String },
            subLabel: { type: String },
            /*
             * The aria-label attribute associated with the expand button. Used by
             * screen readers when announcing the expand button.
             */
            expandAriaLabel: { type: String },
        };
    }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #noAutomaticCollapse_accessor_storage = false;
    get noAutomaticCollapse() { return this.#noAutomaticCollapse_accessor_storage; }
    set noAutomaticCollapse(value) { this.#noAutomaticCollapse_accessor_storage = value; }
    #noCollapse_accessor_storage = false;
    get noCollapse() { return this.#noCollapse_accessor_storage; }
    set noCollapse(value) { this.#noCollapse_accessor_storage = value; }
    #indicatorAriaLabel_accessor_storage = '';
    get indicatorAriaLabel() { return this.#indicatorAriaLabel_accessor_storage; }
    set indicatorAriaLabel(value) { this.#indicatorAriaLabel_accessor_storage = value; }
    #icon_accessor_storage = '';
    get icon() { return this.#icon_accessor_storage; }
    set icon(value) { this.#icon_accessor_storage = value; }
    #subLabel_accessor_storage = '';
    get subLabel() { return this.#subLabel_accessor_storage; }
    set subLabel(value) { this.#subLabel_accessor_storage = value; }
    #expandAriaLabel_accessor_storage = '';
    get expandAriaLabel() { return this.#expandAriaLabel_accessor_storage; }
    set expandAriaLabel(value) { this.#expandAriaLabel_accessor_storage = value; }
    pendingUpdateCollapsed_ = false;
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('checked')) {
            this.onCheckedChanged_();
        }
        if (changedProperties.has('pref') && this.pref) {
            this.onPrefChanged_();
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
    /**
     * Updates the collapsed status of this radio button to reflect
     * the user selection actions.
     */
    async updateCollapsed() {
        await this.updateComplete;
        if (this.pendingUpdateCollapsed_) {
            this.pendingUpdateCollapsed_ = false;
            this.expanded = this.checked;
        }
    }
    getBubbleAnchor() {
        const anchor = this.shadowRoot.querySelector('#button');
        assert(anchor);
        return anchor;
    }
    onCheckedChanged_() {
        this.pendingUpdateCollapsed_ = true;
        if (!this.noAutomaticCollapse) {
            this.updateCollapsed();
        }
    }
    onPrefChanged_() {
        // If the preference has been set, and is managed, this control should be
        // disabled. Unless the value associated with this control is present in
        // |pref.userSelectableValues|. This will override the disabled set on the
        // element externally.
        this.disabled = !!this.pref &&
            this.pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !(!!this.pref.userSelectableValues &&
                this.pref.userSelectableValues.includes(this.name));
    }
    onExpandedChanged_(e) {
        this.expanded = e.detail.value;
    }
    onExpandClick_() {
        this.fire('expand-clicked');
    }
    onRadioFocus_() {
        this.getRipple().showAndHoldDown();
    }
    /**
     * Clear the ripple associated with the radio button when the expand button
     * is focused. Stop propagation to prevent the ripple being re-created.
     */
    onNonRadioFocus_(e) {
        this.getRipple().clear();
        e.stopPropagation();
    }
}
customElements.define(SettingsCollapseRadioButtonElement.is, SettingsCollapseRadioButtonElement);
