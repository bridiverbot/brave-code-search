import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const ControlledRadioButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js").CrRadioButtonMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/cr_ripple/cr_ripple_mixin.js").CrRippleMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class ControlledRadioButtonElement extends ControlledRadioButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    createRipple(): import("//resources/cr_elements/cr_ripple/cr_ripple.js").CrRippleElement;
    protected showIndicator_(): boolean;
    protected onIndicatorClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'controlled-radio-button': ControlledRadioButtonElement;
    }
}
export {};
