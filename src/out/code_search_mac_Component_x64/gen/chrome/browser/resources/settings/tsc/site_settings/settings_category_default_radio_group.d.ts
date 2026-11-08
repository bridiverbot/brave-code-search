/**
 * @fileoverview
 * 'settings-category-default-radio-group' is the polymer element for showing
 * a certain category under Site Settings.
 */
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsCollapseRadioButtonElement } from '../controls/collapse_radio_button.js';
import type { SettingsRadioGroupElement } from '../controls/settings_radio_group.js';
export interface SettingsCategoryDefaultRadioGroupElement {
    $: {
        allowRadioOption: SettingsCollapseRadioButtonElement;
        askRadioOption: SettingsCollapseRadioButtonElement;
        blockRadioOption: SettingsCollapseRadioButtonElement;
        settingsCategoryDefaultRadioGroup: SettingsRadioGroupElement;
    };
}
declare const SettingsCategoryDefaultRadioGroupElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("./site_settings_mixin_lit.js").SiteSettingsMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsCategoryDefaultRadioGroupElement extends SettingsCategoryDefaultRadioGroupElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        header: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
        allowOptionLabel: {
            type: StringConstructor;
        };
        allowOptionSubLabel: {
            type: StringConstructor;
        };
        allowOptionIcon: {
            type: StringConstructor;
        };
        askOptionLabel: {
            type: StringConstructor;
        };
        askOptionSubLabel: {
            type: StringConstructor;
        };
        askOptionIcon: {
            type: StringConstructor;
        };
        blockOptionLabel: {
            type: StringConstructor;
        };
        blockOptionSubLabel: {
            type: StringConstructor;
        };
        blockOptionIcon: {
            type: StringConstructor;
        };
        selectedValue: {
            type: StringConstructor;
            notify: boolean;
        };
        /**
         * Key of the synthetic preference used to keep track of the selected
         * content setting option.
         */
        prefKey_: {
            type: StringConstructor;
        };
    };
    accessor header: string;
    accessor description: string;
    accessor allowOptionLabel: string;
    accessor allowOptionSubLabel: string;
    accessor allowOptionIcon: string;
    accessor askOptionLabel: string;
    accessor askOptionSubLabel: string;
    accessor askOptionIcon: string;
    accessor blockOptionLabel: string;
    accessor blockOptionSubLabel: string;
    accessor blockOptionIcon: string;
    accessor selectedValue: string;
    protected accessor prefKey_: string;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private initializePref_;
    protected getButtonClass_(subLabel: string): string;
    protected onSelectedRadioChange_(): void;
    /**
     * Update the pref values from the content settings.
     */
    private updatePref_;
    /**
     * Check if the category is popups and the user is logged in guest mode.
     * Users in guest mode are not allowed to modify pop-ups content setting.
     */
    protected isRadioGroupDisabled_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-category-default-radio-group': SettingsCategoryDefaultRadioGroupElement;
    }
}
export {};
