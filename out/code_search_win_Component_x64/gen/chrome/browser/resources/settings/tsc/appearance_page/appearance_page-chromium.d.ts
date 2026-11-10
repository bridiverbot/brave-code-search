import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/controlled_radio_button.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import './home_url_input.js';
import '../controls/settings_dropdown_menu.js';
import { ColorSchemeMode } from 'chrome://resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList, SettingsDropdownMenuElement } from '../controls/settings_dropdown_menu.js';
import type { AppearancePageVisibility } from '../page_visibility.js';
type PrefObject<T> = chrome.settingsPrivate.PrefObject<T>;
/**
 * 'settings-appearance-page' is the settings page containing appearance
 * settings.
 */
export interface SettingsAppearancePageElement {
    $: {
        colorSchemeModeRow: HTMLElement;
        colorSchemeModeSelect: HTMLSelectElement;
        defaultFontSize: SettingsDropdownMenuElement;
        zoomLevel: HTMLSelectElement;
    };
}
export declare enum SystemTheme {
    DEFAULT = 0
}
declare const SettingsAppearancePageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsAppearancePageElement extends SettingsAppearancePageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageVisibility_: {
            type: ObjectConstructor;
        };
        defaultZoom_: {
            type: NumberConstructor;
        };
        defaultFontSizePref_: {
            type: ObjectConstructor;
        };
        homepageIsNewTabPagePref_: {
            type: ObjectConstructor;
        };
        homepagePref_: {
            type: ObjectConstructor;
        };
        pinContextualTaskButtonPref_: {
            type: ObjectConstructor;
        };
        pinnedActionsPref_: {
            type: ObjectConstructor;
        };
        pinSplitTabButtonPref_: {
            type: ObjectConstructor;
        };
        showForwardButtonPref_: {
            type: ObjectConstructor;
        };
        showHomeButtonPref_: {
            type: ObjectConstructor;
        };
        sidePanelAlignmentOverridesPref_: {
            type: ObjectConstructor;
        };
        sidePanelIsRightAlignedPref_: {
            type: ObjectConstructor;
        };
        themeIdPref_: {
            type: ObjectConstructor;
        };
        themePolicyColorPref_: {
            type: ObjectConstructor;
        };
        verticalTabsEnabledPref_: {
            type: ObjectConstructor;
        };
        colorSchemeModeOptions_: {
            type: ArrayConstructor;
        };
        selectedColorSchemeMode_: {
            type: NumberConstructor;
        };
        fontSizeOptions_: {
            type: ArrayConstructor;
        };
        pageZoomLevels_: {
            type: ArrayConstructor;
        };
        themeSublabel_: {
            type: StringConstructor;
        };
        themeUrl_: {
            type: StringConstructor;
        };
        systemTheme_: {
            type: NumberConstructor;
        };
        showHoverCardImagesOption_: {
            type: BooleanConstructor;
        };
        showManagedThemeDialog_: {
            type: BooleanConstructor;
        };
        glassEffectOptions_: {
            type: ArrayConstructor;
        };
        tabStripOptions_: {
            type: ArrayConstructor;
        };
        showGlassEffectEnabled_: {
            type: BooleanConstructor;
        };
        ntpSimplificationBookmarksBarEnabled_: {
            type: BooleanConstructor;
        };
        bookmarksBarOptions_: {
            type: ArrayConstructor;
        };
        showOrganizerPanelEnabled_: {
            type: BooleanConstructor;
        };
        showEverythingMenuEnabled_: {
            type: BooleanConstructor;
        };
        showResetPinnedActionsButton_: {
            type: BooleanConstructor;
        };
        showCtrlTabMru_: {
            type: BooleanConstructor;
        };
        tabStripUnificationEnabled_: {
            type: BooleanConstructor;
        };
        splitViewHorizontalEnabled_: {
            type: BooleanConstructor;
        };
        sidePanelAlignmentOptions_: {
            type: ArrayConstructor;
        };
        configurableSidePanels_: {
            type: ArrayConstructor;
        };
    };
    /**
     * Dictionary defining page visibility.
     */
    protected accessor pageVisibility_: AppearancePageVisibility;
    protected accessor defaultZoom_: number;
    protected accessor defaultFontSizePref_: PrefObject<number> | undefined;
    protected accessor homepageIsNewTabPagePref_: PrefObject<boolean> | undefined;
    protected accessor homepagePref_: PrefObject<string> | undefined;
    protected accessor pinContextualTaskButtonPref_: PrefObject<boolean> | undefined;
    protected accessor pinnedActionsPref_: PrefObject<string[]> | undefined;
    protected accessor pinSplitTabButtonPref_: PrefObject<boolean> | undefined;
    protected accessor showForwardButtonPref_: PrefObject<boolean> | undefined;
    protected accessor showHomeButtonPref_: PrefObject<boolean> | undefined;
    protected accessor sidePanelAlignmentOverridesPref_: PrefObject<Record<string, boolean>> | undefined;
    protected accessor sidePanelIsRightAlignedPref_: PrefObject<boolean> | undefined;
    protected accessor themeIdPref_: PrefObject<string> | undefined;
    protected accessor themePolicyColorPref_: PrefObject<number> | undefined;
    protected accessor verticalTabsEnabledPref_: PrefObject<boolean> | undefined;
    protected accessor colorSchemeModeOptions_: Array<{
        value: ColorSchemeMode;
        name: string;
    }>;
    protected accessor selectedColorSchemeMode_: ColorSchemeMode | undefined;
    /**
     * List of options for the font size drop-down menu.
     */
    protected accessor fontSizeOptions_: DropdownMenuOptionList;
    protected accessor glassEffectOptions_: DropdownMenuOptionList;
    protected accessor tabStripOptions_: DropdownMenuOptionList;
    protected accessor bookmarksBarOptions_: DropdownMenuOptionList;
    protected accessor sidePanelAlignmentOptions_: DropdownMenuOptionList;
    /**
     * Predefined zoom factors to be used when zooming in/out. These are in
     * ascending order. Values are displayed in the page zoom drop-down menu
     * as percentages.
     */
    protected accessor pageZoomLevels_: number[];
    protected accessor themeSublabel_: string;
    protected accessor themeUrl_: string;
    protected accessor systemTheme_: SystemTheme;
    protected accessor showHoverCardImagesOption_: boolean;
    protected accessor showManagedThemeDialog_: boolean;
    protected accessor showGlassEffectEnabled_: boolean;
    protected accessor ntpSimplificationBookmarksBarEnabled_: boolean;
    protected accessor showOrganizerPanelEnabled_: boolean;
    protected accessor showEverythingMenuEnabled_: boolean;
    protected accessor showResetPinnedActionsButton_: boolean;
    protected accessor showCtrlTabMru_: boolean;
    protected accessor tabStripUnificationEnabled_: boolean;
    protected accessor splitViewHorizontalEnabled_: boolean;
    protected accessor configurableSidePanels_: Array<{
        id: string;
        label: string;
    }>;
    private appearanceBrowserProxy_;
    private colorSchemeModeBrowserProxy_;
    private setColorSchemeModeListenerId_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected get isForcedTheme_(): boolean;
    /** @return A zoom easier read by users. */
    protected formatZoom_(zoom: number): number;
    /**
     * @param showHomepage Whether to show home page.
     * @param isNtp Whether to use the NTP as the home page.
     * @param homepageValue If not using NTP, use this URL.
     */
    protected getShowHomeSubLabel_(): string;
    protected onCustomizeFontsClick_(): void;
    protected onDisableExtensionClick_(): void;
    /**
     * @param value The changed font size slider value.
     */
    private defaultFontSizeChanged_;
    protected onThemeClick_(): void;
    protected onCustomizeToolbarClick_(): void;
    protected onUseDefaultClick_(): void;
    protected onResetPinnedToolbarActionsClick_(): void;
    protected showColorSchemeMode_(): boolean;
    private themeChanged_;
    /** @return Whether applied theme is set by policy. */
    private computeIsForcedTheme_;
    private toolbarPinningStateChanged_;
    protected isSelectedColorSchemeMode_(colorSchemeMode: ColorSchemeMode): boolean;
    protected onColorSchemeModeChange_(): void;
    protected onZoomLevelChange_(): void;
    /** @see blink::ZoomValuesEqual(). */
    protected zoomValuesEqual_(zoom1: number, zoom2: number): boolean;
    protected showHr_(previousIsVisible: boolean, nextIsVisible: boolean): boolean;
    protected onTabStripPositionSettingsControlChange_(event: Event): void;
    protected showEverythingMenuToggle_(): boolean;
    protected onTabScrollAutoShowOnOverflowChange_(event: CustomEvent<boolean>): void;
    protected onShowTabSearchButtonChange_(event: CustomEvent<boolean>): void;
    protected onShowOrganizerPanelButtonChange_(event: CustomEvent<boolean>): void;
    protected onShowEverythingMenuButtonChange_(event: CustomEvent<boolean>): void;
    protected onBookmarksBarVisibilitySettingsControlChange_(event: Event): void;
    protected onGlassFrameSettingsControlChange_(event: Event): void;
    protected onHoverCardImagesSettingsBooleanControlChange_(event: Event): void;
    protected onHoverCardMemoryUsageSettingsBooleanControlChange_(event: Event): void;
    protected showVerticalTabsExpandOnHoverSetting_(): boolean;
    protected onManagedDialogClose_(): void;
    protected getOverrideValue_(id: string): string;
    protected onOverrideAlignmentSettingsControlChange_(event: Event): void;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-appearance-page': SettingsAppearancePageElement;
    }
}
export {};
