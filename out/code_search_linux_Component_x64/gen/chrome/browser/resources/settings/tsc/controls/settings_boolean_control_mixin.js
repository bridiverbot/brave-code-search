// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrPolicyPrefMixinLit } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import { PrefKeyObserverMixinLit } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { assert } from 'chrome://resources/js/assert.js';
export const DEFAULT_UNCHECKED_VALUE = 0;
export const DEFAULT_CHECKED_VALUE = 1;
export const SettingsBooleanControlMixin = (superClass) => {
    const superClassBase = CrPolicyPrefMixinLit(PrefKeyObserverMixinLit(superClass));
    class SettingsBooleanControlMixin extends superClassBase {
        static get properties() {
            return {
                /** Whether the control should represent the inverted value. */
                inverted: { type: Boolean },
                /** Whether the control is checked. */
                checked: {
                    type: Boolean,
                    notify: true,
                    reflect: true,
                },
                /** Disabled property for the element. */
                disabled: {
                    type: Boolean,
                    notify: true,
                    reflect: true,
                },
                /**
                 * If true, do not automatically set the preference value. This
                 * allows the container to confirm the change first then call either
                 * sendPrefChange or resetToPrefValue accordingly.
                 */
                noSetPref: { type: Boolean },
                /** The main label. */
                label: { type: String },
                /** Additional (optional) sub-label. */
                subLabel: { type: String },
                /**
                 * For numeric prefs only. The integer values equivalent to the
                 * initial unchecked state. During initialization, the control is
                 * unchecked if and only if the pref value is equal to one of the
                 * values in the array. When sendPrefChange() is called the *first*
                 * value in this array will be sent to the backend.
                 */
                numericUncheckedValues: { type: Array },
                /**
                 * For numeric prefs only, the integer value equivalent to the
                 * checked state. This is the value sent to prefs if the user
                 * checked the control.
                 */
                numericCheckedValue: { type: Number },
            };
        }
        #inverted_accessor_storage = false;
        get inverted() { return this.#inverted_accessor_storage; }
        set inverted(value) { this.#inverted_accessor_storage = value; }
        #checked_accessor_storage = false;
        get checked() { return this.#checked_accessor_storage; }
        set checked(value) { this.#checked_accessor_storage = value; }
        #disabled_accessor_storage = false;
        get disabled() { return this.#disabled_accessor_storage; }
        set disabled(value) { this.#disabled_accessor_storage = value; }
        #noSetPref_accessor_storage = false;
        get noSetPref() { return this.#noSetPref_accessor_storage; }
        set noSetPref(value) { this.#noSetPref_accessor_storage = value; }
        #label_accessor_storage = '';
        get label() { return this.#label_accessor_storage; }
        set label(value) { this.#label_accessor_storage = value; }
        #subLabel_accessor_storage = '';
        get subLabel() { return this.#subLabel_accessor_storage; }
        set subLabel(value) { this.#subLabel_accessor_storage = value; }
        #numericUncheckedValues_accessor_storage = [DEFAULT_UNCHECKED_VALUE];
        get numericUncheckedValues() { return this.#numericUncheckedValues_accessor_storage; }
        set numericUncheckedValues(value) { this.#numericUncheckedValues_accessor_storage = value; }
        #numericCheckedValue_accessor_storage = DEFAULT_CHECKED_VALUE;
        get numericCheckedValue() { return this.#numericCheckedValue_accessor_storage; }
        set numericCheckedValue(value) { this.#numericCheckedValue_accessor_storage = value; }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            if (changedProperties.has('pref') ||
                changedProperties.has('numericUncheckedValues')) {
                if (this.pref === undefined) {
                    return;
                }
                this.checked = this.getNewValue_(this.pref.value);
            }
        }
        async notifyChangedByUserInteraction() {
            if (this.pref && !this.noSetPref) {
                this.sendPrefChange();
            }
            await this.updateComplete;
            this.fire('settings-boolean-control-change');
        }
        /** Reset the checked state to match the current pref value. */
        resetToPrefValue() {
            // Pref can be undefined, and will lead to console errors if accessed.
            if (this.pref === undefined) {
                this.checked = false;
                return;
            }
            this.checked = this.getNewValue_(this.pref.value);
        }
        /** Update the pref to the current |checked| value. */
        sendPrefChange() {
            assert(this.prefKey);
            // Ensure that newValue is the correct type for the pref type, either
            // a boolean or a number.
            if (this.pref.type === chrome.settingsPrivate.PrefType.NUMBER) {
                assert(!this.inverted);
                assert(this.numericUncheckedValues.length > 0);
                PrefService.getInstance().setPrefValue(this.prefKey, this.checked ? this.numericCheckedValue :
                    this.numericUncheckedValues[0]);
                return;
            }
            PrefService.getInstance().setPrefValue(this.prefKey, this.inverted ? !this.checked : this.checked);
        }
        /**
         * @return The value as a boolean, inverted if |inverted| is true.
         */
        getNewValue_(value) {
            // For numeric prefs, the control is only false if the value is
            // a member of `numericUncheckedValues` value.
            if (this.pref.type === chrome.settingsPrivate.PrefType.NUMBER) {
                assert(!this.inverted);
                return !this.numericUncheckedValues.includes(value);
            }
            return this.inverted ? !value : !!value;
        }
        controlDisabled() {
            return this.disabled || this.isPrefEnforced() ||
                !!(this.pref && this.pref.userControlDisabled);
        }
    }
    return SettingsBooleanControlMixin;
};
