/**
 * @fileoverview Element for indicating policies that apply to an
 * element controlling a settings preference.
 */
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import { CrPolicyIndicatorType } from '//resources/cr_elements/policy/cr_policy_types.js';
import type { CrTooltipIconElement } from '//resources/cr_elements/policy/cr_tooltip_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface CrPolicyPrefIndicatorElement {
    $: {
        tooltipIcon: CrTooltipIconElement;
    };
}
export declare class CrPolicyPrefIndicatorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        iconAriaLabel: {
            type: StringConstructor;
        };
        indicatorType: {
            type: StringConstructor;
        };
        indicatorTooltip: {
            type: StringConstructor;
        };
        /**
         * Optional preference object associated with the indicator.
         */
        pref: {
            type: ObjectConstructor;
        };
        /**
         * Optional value for the preference value this indicator is associated
         * with. If this is set, no indicator will be shown if it is a member
         * of |pref.userSelectableValues| and is not |pref.recommendedValue|.
         */
        associatedValue: {
            type: ObjectConstructor;
        };
    };
    accessor iconAriaLabel: string;
    accessor indicatorType: CrPolicyIndicatorType;
    accessor indicatorTooltip: string;
    accessor pref: chrome.settingsPrivate.PrefObject | undefined;
    accessor associatedValue: unknown;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * @return True if the indicator should be shown.
     */
    protected getIndicatorVisible_(): boolean;
    protected getIndicatorIcon_(): string;
    /**
     * @param name The name associated with the indicator. See
     *     chrome.settingsPrivate.PrefObject.controlledByName
     * @param matches For RECOMMENDED only, whether the indicator
     *     value matches the recommended value.
     * @return The tooltip text for |type|.
     */
    private getIndicatorTooltip_;
    /**
     * @return The indicator type based on |pref| and |associatedValue|.
     */
    private getIndicatorTypeForPref_;
    /**
     * @return The tooltip text for |indicatorType|.
     */
    private getIndicatorTooltipForPref_;
    getFocusableElement(): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-policy-pref-indicator': CrPolicyPrefIndicatorElement;
    }
}
