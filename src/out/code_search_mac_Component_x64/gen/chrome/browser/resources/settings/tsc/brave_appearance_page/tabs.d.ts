import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { PrefServiceObserverMixinInterface } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const SettingsBraveAppearanceTabsElementBase: {
    new (): PolymerElement & I18nMixinInterface & WebUiListenerMixinInterface & PrefServiceObserverMixinInterface;
};
export declare class SettingsBraveAppearanceTabsElement extends SettingsBraveAppearanceTabsElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        tabMinWidthModes_: {
            readOnly: boolean;
            type: ArrayConstructor;
            value(): ({
                value: number;
                hidden: boolean;
                name?: undefined;
            } | {
                hidden?: undefined;
                value: number;
                name: string;
            })[];
        };
        tabTooltipModes_: {
            readyOnly: boolean;
            type: ArrayConstructor;
            value(): {
                value: number;
                name: string;
            }[];
        };
        verticalTabsToggleEnabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        verticalTabsEnabledPref_: ObjectConstructor;
        verticalTabsHideCompletelyWhenCollapsedPref_: ObjectConstructor;
        verticalTabsShowToggleButtonPref_: ObjectConstructor;
        scrollableHorizontalTabStripPref_: ObjectConstructor;
        floatingModePrefKey_: {
            type: StringConstructor;
            readOnly: boolean;
            value(): "brave.tabs.vertical_tabs_floating_enabled" | "vertical_tabs.expand_on_hover";
        };
        verticalTabsEnabledPrefKey_: {
            type: StringConstructor;
            readOnly: boolean;
            value(): "brave.tabs.vertical_tabs_enabled" | "vertical_tabs.enabled";
        };
    };
    private tabMinWidthModes_;
    private tabTooltipModes_;
    private verticalTabsToggleEnabled_;
    private verticalTabsEnabledPref_;
    private verticalTabsHideCompletelyWhenCollapsedPref_;
    private verticalTabsShowToggleButtonPref_;
    private scrollableHorizontalTabStripPref_;
    private floatingModePrefKey_;
    private verticalTabsEnabledPrefKey_;
    connectedCallback(): void;
    private isSharedPinnedTabsEnabled_;
    private onDiscardRingTreatmentLearnMoreLinkClick_;
    private isTreeTabsFlagEnabled;
    private isHideVerticalTabCompletelyFlagEnabled;
    private isUpstreamVerticalTabsFeatureEnabled_;
    private showEverythingMenuToggle_;
    private shouldForceFloatOnMouseOver_;
    private isScrollableHorizontalTabStripFlagEnabled;
}
export {};
