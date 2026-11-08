/**
 * @fileoverview
 * A mixin to help controls that handle a boolean preference, such as
 * checkbox and toggle button, in Lit.
 */
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CrPolicyPrefMixinLitInterface } from '/shared/settings/controls/cr_policy_pref_mixin_lit.js';
import type { PrefKeyObserverMixinLitInterface } from '/shared/settings/prefs2/pref_key_observer_mixin_lit.js';
export declare const DEFAULT_UNCHECKED_VALUE = 0;
export declare const DEFAULT_CHECKED_VALUE = 1;
type Constructor<T> = new (...args: any[]) => T;
export declare const SettingsBooleanControlMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SettingsBooleanControlMixinInterface>;
export interface SettingsBooleanControlMixinInterface extends PrefKeyObserverMixinLitInterface, CrPolicyPrefMixinLitInterface {
    inverted: boolean;
    checked: boolean;
    disabled: boolean;
    noSetPref: boolean;
    label: string;
    subLabel: string;
    numericUncheckedValues: number[];
    numericCheckedValue: number;
    controlDisabled(): boolean;
    notifyChangedByUserInteraction(): void;
    resetToPrefValue(): void;
    sendPrefChange(): void;
}
export {};
