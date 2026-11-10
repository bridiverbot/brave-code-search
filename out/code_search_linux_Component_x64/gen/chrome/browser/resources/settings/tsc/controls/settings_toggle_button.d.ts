/**
 * @fileoverview
 * `settings-toggle-button` is a toggle that controls a supplied preference.
 */
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { CrToggleElement } from '//resources/cr_elements/cr_toggle/cr_toggle.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface SettingsToggleButtonElement {
    $: {
        control: CrToggleElement;
        labelWrapper: HTMLElement;
    };
}
declare const SettingsToggleButtonElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_boolean_control_mixin.js").SettingsBooleanControlMixinInterface);
export declare class SettingsToggleButtonElement extends SettingsToggleButtonElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaLabel: {
            type: StringConstructor;
        };
        ariaShowLabel: {
            type: BooleanConstructor;
        };
        ariaShowSublabel: {
            type: BooleanConstructor;
        };
        elideLabel: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        learnMoreUrl: {
            type: StringConstructor;
        };
        subLabelWithLink: {
            type: StringConstructor;
        };
        learnMoreAriaLabel: {
            type: StringConstructor;
        };
        icon: {
            type: StringConstructor;
        };
        subLabelIcon: {
            type: StringConstructor;
        };
        /**
         * If true, the host element does not get a click event handler and the
         * client is responsible for determining their own click logic. Thus when
         * true, clicking on the setting row does not toggle the setting pref.
         * Note, this boolean is only used on firstUpdated() callback, and any
         * changes after that have no effect.
         */
        noToggleOnHostClick: {
            type: BooleanConstructor;
        };
    };
    accessor ariaLabel: string;
    accessor ariaShowLabel: boolean;
    accessor ariaShowSublabel: boolean;
    accessor elideLabel: boolean;
    accessor icon: string;
    accessor learnMoreAriaLabel: string;
    accessor learnMoreUrl: string;
    accessor subLabelWithLink: string;
    accessor subLabelIcon: string;
    accessor noToggleOnHostClick: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    /**
     * Removes the aria-label attribute if it's added by $i18n{...}.
     */
    private onAriaLabelSet_;
    protected getAriaLabel_(): string;
    protected getLearnMoreAriaLabelledBy_(): string;
    getBubbleAnchor(): HTMLElement;
    /**
     * Handles non cr-toggle button clicks (cr-toggle handles its own click events
     * which don't bubble).
     */
    private onHostClick_;
    protected onLearnMoreClick_(e: Event): void;
    /**
     * Set up the contents of sub label with link.
     */
    protected getSubLabelWithLinkContent_(): TrustedHTML;
    protected onSubLabelTextWithLinkClick_(e: Event): void;
    protected onChange_(e: CustomEvent<boolean>): void;
    private updateCheckedAndNotify_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-toggle-button': SettingsToggleButtonElement;
    }
}
export {};
