/**
 * @fileoverview
 * `settings-radio-group` wraps cr-radio-group and set of radio-buttons that
 * control a supplied preference.
 *
 * Example:
 *      <settings-radio-group pref-key="settings.foo"
 *          label="Foo Options." buttons="{{fooOptionsList}}">
 *      </settings-radio-group>
 */
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
declare const SettingsRadioGroupElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsRadioGroupElement extends SettingsRadioGroupElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        groupAriaLabel: {
            type: StringConstructor;
        };
        /**
         * If true, do not automatically set the preference value. This allows the
         * container to confirm the change first then call either sendPrefChange
         * or resetToPrefValue accordingly.
         */
        noSetPref: {
            type: BooleanConstructor;
        };
        selected: {
            type: StringConstructor;
        };
        selectableElements: {
            type: StringConstructor;
        };
        nestedSelectable: {
            type: BooleanConstructor;
        };
    };
    accessor groupAriaLabel: string;
    accessor noSetPref: boolean;
    accessor selected: string | undefined;
    accessor selectableElements: string;
    accessor nestedSelectable: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    focus(): void;
    /** Reset the selected value to match the current pref value. */
    resetToPrefValue(): void;
    /** Update the pref to the current selected value. */
    sendPrefChange(): void;
    protected onSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-radio-group': SettingsRadioGroupElement;
    }
}
export {};
