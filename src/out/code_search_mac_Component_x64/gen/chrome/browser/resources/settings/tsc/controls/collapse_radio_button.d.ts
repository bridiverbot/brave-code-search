import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrExpandButtonElement } from 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsCollapseRadioButtonElement {
    $: {
        expandButton: CrExpandButtonElement;
    };
}
declare const SettingsCollapseRadioButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/cr_radio_button/cr_radio_button_mixin_lit.js").CrRadioButtonMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/cr_ripple/cr_ripple_mixin.js").CrRippleMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export type CollapseRadioButtonElement = SettingsCollapseRadioButtonElement;
export declare class SettingsCollapseRadioButtonElement extends SettingsCollapseRadioButtonElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        expanded: {
            type: BooleanConstructor;
            notify: boolean;
        };
        noAutomaticCollapse: {
            type: BooleanConstructor;
        };
        noCollapse: {
            type: BooleanConstructor;
        };
        indicatorAriaLabel: {
            type: StringConstructor;
        };
        icon: {
            type: StringConstructor;
        };
        subLabel: {
            type: StringConstructor;
        };
        expandAriaLabel: {
            type: StringConstructor;
        };
    };
    accessor expanded: boolean;
    accessor noAutomaticCollapse: boolean;
    accessor noCollapse: boolean;
    accessor indicatorAriaLabel: string;
    accessor icon: string;
    accessor subLabel: string;
    accessor expandAriaLabel: string;
    private pendingUpdateCollapsed_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    createRipple(): import("//resources/cr_elements/cr_ripple/cr_ripple.js").CrRippleElement;
    /**
     * Updates the collapsed status of this radio button to reflect
     * the user selection actions.
     */
    updateCollapsed(): Promise<void>;
    getBubbleAnchor(): HTMLElement;
    private onCheckedChanged_;
    private onPrefChanged_;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onExpandClick_(): void;
    protected onRadioFocus_(): void;
    /**
     * Clear the ripple associated with the radio button when the expand button
     * is focused. Stop propagation to prevent the ripple being re-created.
     */
    protected onNonRadioFocus_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-collapse-radio-button': SettingsCollapseRadioButtonElement;
    }
}
export {};
