/**
 * @fileoverview
 * `pref-toggle-button` is a toggle that controls a supplied preference.
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '../cr_actionable_row_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const PrefToggleButtonElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin.js").PrefKeyObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface);
export declare class PrefToggleButtonElement extends PrefToggleButtonElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        ariaLabel: {
            type: StringConstructor;
            reflectToAttribute: boolean;
            observer: string;
            value: string;
        };
        /** The main label. */
        label: {
            type: StringConstructor;
            value: string;
        };
        /** Additional (optional) sub-label. */
        subLabel: {
            type: StringConstructor;
            value: string;
        };
        /** Additional (optional) sub-label that has a link. */
        subLabelWithLink: {
            type: StringConstructor;
            value: string;
        };
        /** Whether the control is checked. */
        checked: {
            type: BooleanConstructor;
            value: boolean;
            notify: boolean;
            reflectToAttribute: boolean;
        };
        /**
         * Whether the control is disabled, for example due to an extension
         * managing the preference.
         */
        disabled: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * If true, do not automatically set the preference value on user click.
         * Confirm the change first then call either sendPrefChange or
         * resetToPrefValue accordingly.
         */
        changeRequiresValidation: {
            type: BooleanConstructor;
            value: boolean;
        };
        noExtensionIndicator: BooleanConstructor;
    };
    static get observers(): string[];
    ariaLabel: string;
    label: string;
    subLabel: string;
    subLabelWithLink: string;
    checked: boolean;
    disabled: boolean;
    changeRequiresValidation: boolean;
    noExtensionIndicator: boolean;
    ready(): void;
    /**
     * Handles non cr-toggle button clicks (cr-toggle handles its own click events
     * which don't bubble).
     */
    private onClick_;
    private onSubLabelTextWithLinkClick_;
    private hasSubLabel_;
    private getSubLabelWithLinkContent_;
    private onToggleClick_;
    private prefValueChanged_;
    private prefEnforcementChanged_;
    /** Update the pref to the current |checked| value. */
    private updatePrefValue_;
    /**
     * Removes the aria-label attribute if it's added by $i18n{...}.
     */
    private onAriaLabelSet_;
    private getAriaLabel_;
    private isPrefEnforced_;
    private hasPrefPolicyIndicator_;
    private controlDisabled_;
}
declare global {
    interface HTMLElementTagNameMap {
        'pref-toggle-button': PrefToggleButtonElement;
    }
}
export {};
