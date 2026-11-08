/**
 * @fileoverview
 * settings-slider wraps a cr-slider. It maps the slider's values from a
 * linear UI range to a range of real values. When |value| does not map exactly
 * to a tick mark, it interpolates to the nearest tick.
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrSliderElement, SliderTick } from '//resources/cr_elements/cr_slider/cr_slider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface SettingsSliderElement {
    $: {
        slider: CrSliderElement;
    };
}
declare const SettingsSliderElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/controls/cr_policy_pref_mixin_lit.js").CrPolicyPrefMixinLitInterface);
export declare class SettingsSliderElement extends SettingsSliderElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Values corresponding to each tick. */
        ticks: {
            type: ArrayConstructor;
        };
        /**
         * A scale factor used to support fractional pref values. This is not
         * compatible with |ticks|, i.e. if |scale| is not 1 then |ticks| must be
         * empty.
         */
        scale: {
            type: NumberConstructor;
        };
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        labelAria: {
            type: StringConstructor;
        };
        labelMin: {
            type: StringConstructor;
        };
        labelMax: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        ariaDisabled: {
            type: StringConstructor;
        };
        showMarkers: {
            type: BooleanConstructor;
        };
        disableSlider_: {
            type: BooleanConstructor;
        };
        updateValueInstantly: {
            type: BooleanConstructor;
        };
        sliderValue_: {
            type: NumberConstructor;
        };
        markerCount_: {
            type: NumberConstructor;
        };
        pref: {
            type: ObjectConstructor;
        };
    };
    accessor pref: chrome.settingsPrivate.PrefObject<number> | undefined;
    accessor ticks: SliderTick[] | number[];
    accessor scale: number;
    accessor min: number | undefined;
    accessor max: number | undefined;
    accessor labelAria: string;
    accessor labelMin: string;
    accessor labelMax: string;
    accessor disabled: boolean;
    accessor ariaDisabled: string;
    accessor showMarkers: boolean;
    accessor updateValueInstantly: boolean;
    protected accessor disableSlider_: boolean;
    protected accessor sliderValue_: number;
    protected accessor markerCount_: number;
    willUpdate(changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues): void;
    focus(): void;
    private getTickValue_;
    private getTickValueAtIndex_;
    protected onCrSliderValueChanged_(): void;
    protected onDraggingChanged_(): void;
    protected onUpdatingFromKeyChanged_(): void;
    /**
     * Sets the |pref.value| property to the value corresponding to the knob
     * position after a user action.
     */
    private onSliderChanged_;
    private computeDisableSlider_;
    /**
     * Updates the knob position when |pref.value| changes. If the knob is still
     * being dragged, this instead forces |pref.value| back to the current
     * position.
     */
    private valueChanged_;
    protected getRoleDescription_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-slider': SettingsSliderElement;
    }
}
export {};
