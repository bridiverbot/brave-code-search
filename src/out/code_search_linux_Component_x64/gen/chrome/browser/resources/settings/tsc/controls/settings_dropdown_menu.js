// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 'settings-dropdown-menu' is a control for displaying options
 * in the settings.
 *
 * Example:
 *
 *   <settings-dropdown-menu pref-key="foo.bar">
 *   </settings-dropdown-menu>
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import { assert } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CrPolicyPrefMixinLit } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import { prefToString, stringToPrefValue } from '/shared/settings/prefs/pref_util.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { getCss } from './settings_dropdown_menu.css.js';
import { getHtml } from './settings_dropdown_menu.html.js';
const SettingsDropdownMenuElementBase = CrPolicyPrefMixinLit(PrefKeyObserverMixinLit(CrLitElement));
export class SettingsDropdownMenuElement extends SettingsDropdownMenuElementBase {
    static get is() {
        return 'settings-dropdown-menu';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** List of options for the drop-down menu. */
            menuOptions: { type: Array },
            /** Whether the dropdown menu should be disabled. */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            /**
             * If true, do not automatically set the preference value. This allows the
             * container to confirm the change first then call either sendPrefChange
             * or resetToPrefValue accordingly.
             */
            noSetPref: { type: Boolean },
            notFoundValue: { type: String },
            /** Label for a11y purposes */
            label: { type: String },
            /**
             * Accessible description for the menu, exposed via aria-description.
             * Rows that show this text visually usually mark it aria-hidden, so it
             * has to be passed here as well to reach assistive technology.
             */
            subLabel: { type: String },
            /** The value of the element if not using |pref|. */
            value: { type: String },
        };
    }
    #menuOptions_accessor_storage = [];
    get menuOptions() { return this.#menuOptions_accessor_storage; }
    set menuOptions(value) { this.#menuOptions_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #noSetPref_accessor_storage = false;
    get noSetPref() { return this.#noSetPref_accessor_storage; }
    set noSetPref(value) { this.#noSetPref_accessor_storage = value; }
    #notFoundValue_accessor_storage = 'SETTINGS_DROPDOWN_NOT_FOUND_ITEM';
    get notFoundValue() { return this.#notFoundValue_accessor_storage; }
    set notFoundValue(value) { this.#notFoundValue_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #subLabel_accessor_storage = '';
    get subLabel() { return this.#subLabel_accessor_storage; }
    set subLabel(value) { this.#subLabel_accessor_storage = value; }
    #value_accessor_storage = undefined;
    get value() { return this.#value_accessor_storage; }
    set value(value) { this.#value_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('menuOptions') ||
            changedProperties.has('value') || changedProperties.has('pref')) {
            this.updateSelected_();
        }
    }
    focus() {
        this.$.dropdownMenu.focus();
    }
    /** Update the pref to the current selected value. */
    sendPrefChange() {
        assert(this.pref);
        const selected = this.$.dropdownMenu.value;
        const prefValue = stringToPrefValue(selected, this.pref);
        if (prefValue !== undefined) {
            PrefService.getInstance().setPrefValue(this.prefKey, prefValue);
        }
    }
    /**
     * Allow access to the selected value without having to go through the shadow
     * dom.
     */
    getSelectedValue() {
        return this.$.dropdownMenu.value;
    }
    /**
     * Pass the selection change to the pref value.
     */
    onChange_() {
        if (this.$.dropdownMenu.value === this.notFoundValue) {
            return;
        }
        if (!this.noSetPref && this.prefKey) {
            this.sendPrefChange();
        }
        // settings-control-change only fires when the selection is changed to
        // a valid property.
        this.fire('settings-control-change');
    }
    /**
     * Updates the selected item when the pref or menuOptions change.
     */
    updateSelected_() {
        if (!this.menuOptions.length) {
            return;
        }
        let prefValue;
        if (this.value !== undefined) {
            prefValue = this.value;
        }
        else {
            if (this.pref === undefined) {
                return;
            }
            prefValue = this.prefStringValue_();
        }
        const option = this.menuOptions.find(function (menuItem) {
            return menuItem.value.toString() === prefValue;
        });
        this.$.dropdownMenu.value =
            option === undefined ? this.notFoundValue : prefValue;
    }
    /**
     * Gets the current value of the preference as a string.
     */
    prefStringValue_() {
        assert(this.pref);
        return prefToString(this.pref);
    }
    showNotFoundValue_() {
        if (this.pref === undefined) {
            return false;
        }
        // Don't show "Custom" before the options load.
        if (this.menuOptions.length === 0) {
            return false;
        }
        const option = this.menuOptions.find((menuItem) => {
            return menuItem.value.toString() === this.prefStringValue_();
        });
        return !option;
    }
    shouldDisableMenu_() {
        return this.disabled || this.isPrefEnforced() ||
            this.menuOptions.length === 0;
    }
}
customElements.define(SettingsDropdownMenuElement.is, SettingsDropdownMenuElement);
