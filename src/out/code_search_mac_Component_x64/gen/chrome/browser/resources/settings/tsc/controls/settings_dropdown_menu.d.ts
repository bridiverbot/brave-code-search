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
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * |name| is shown in the UI. |value| is used to set or compare with the
 * preference value. |hidden| specifies whether to hide this option from the
 * user.
 */
interface DropdownMenuOption {
    name: string;
    value: number | string;
    hidden?: boolean;
    searchHint?: string;
}
export type DropdownMenuOptionList = DropdownMenuOption[];
export interface SettingsDropdownMenuElement {
    $: {
        dropdownMenu: HTMLSelectElement;
    };
}
declare const SettingsDropdownMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_key_observer_mixin_lit.js").PrefKeyObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/controls/cr_policy_pref_mixin_lit.js").CrPolicyPrefMixinLitInterface);
export declare class SettingsDropdownMenuElement extends SettingsDropdownMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** List of options for the drop-down menu. */
        menuOptions: {
            type: ArrayConstructor;
        };
        /** Whether the dropdown menu should be disabled. */
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * If true, do not automatically set the preference value. This allows the
         * container to confirm the change first then call either sendPrefChange
         * or resetToPrefValue accordingly.
         */
        noSetPref: {
            type: BooleanConstructor;
        };
        notFoundValue: {
            type: StringConstructor;
        };
        /** Label for a11y purposes */
        label: {
            type: StringConstructor;
        };
        /**
         * Accessible description for the menu, exposed via aria-description.
         * Rows that show this text visually usually mark it aria-hidden, so it
         * has to be passed here as well to reach assistive technology.
         */
        subLabel: {
            type: StringConstructor;
        };
        /** The value of the element if not using |pref|. */
        value: {
            type: StringConstructor;
        };
    };
    accessor menuOptions: DropdownMenuOption[];
    accessor disabled: boolean;
    accessor noSetPref: boolean;
    accessor notFoundValue: string;
    accessor label: string;
    accessor subLabel: string;
    accessor value: string | undefined;
    updated(changedProperties: PropertyValues): void;
    focus(): void;
    /** Update the pref to the current selected value. */
    sendPrefChange(): void;
    /**
     * Allow access to the selected value without having to go through the shadow
     * dom.
     */
    getSelectedValue(): string;
    /**
     * Pass the selection change to the pref value.
     */
    protected onChange_(): void;
    /**
     * Updates the selected item when the pref or menuOptions change.
     */
    private updateSelected_;
    /**
     * Gets the current value of the preference as a string.
     */
    private prefStringValue_;
    protected showNotFoundValue_(): boolean;
    protected shouldDisableMenu_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-dropdown-menu': SettingsDropdownMenuElement;
    }
}
export {};
