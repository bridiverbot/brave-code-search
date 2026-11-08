import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SettingsDropdownMenuElement } from '../controls/settings_dropdown_menu.js';
import { SettingsViewMixinInterface } from '../settings_page/settings_view_mixin.js';
export interface SettingsBraveContentContentElement {
    $: {
        defaultFontSize: SettingsDropdownMenuElement;
        zoomLevel: HTMLSelectElement;
    };
}
declare const SettingsBraveAppearanceContentElementBase: typeof PolymerElement & (new (...args: any[]) => SettingsViewMixinInterface) & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => I18nMixinInterface);
export declare class SettingsBraveContentContentElement extends SettingsBraveAppearanceContentElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        defaultZoom_: NumberConstructor;
        waybackMachineEnabledPref_: ObjectConstructor;
        /**
         * List of options for the font size drop-down menu.
         */
        fontSizeOptions_: {
            readOnly: boolean;
            type: ArrayConstructor;
            value(): {
                value: number;
                name: string;
            }[];
        };
        /**
         * Predefined zoom factors to be used when zooming in/out. These are in
         * ascending order. Values are displayed in the page zoom drop-down menu
         * as percentages.
         */
        pageZoomLevels_: ArrayConstructor;
        isWaybackMachineAutoCheckFeatureEnabled_: {
            type: BooleanConstructor;
            value(): boolean;
        };
    };
    private fontSizeOptions_;
    private pageZoomLevels_;
    private defaultZoom_;
    private waybackMachineEnabledPref_;
    private isWaybackMachineAutoCheckFeatureEnabled_;
    private appearanceBrowserProxy_;
    ready(): void;
    private hasConnectedBefore_;
    connectedCallback(): void;
    getAssociatedControlFor(childViewId: string): HTMLElement;
    private onCustomizeFontsClick_;
    private isWaybackMachineManaged_;
    private shouldShowWaybackMachineAutoCheck_;
    /**
     * @param value The changed font size slider value.
     */
    private defaultFontSizeChanged_;
    private onZoomLevelChange_;
    /** @see blink::PageZoomValuesEqual(). */
    private zoomValuesEqual_;
    /** @return A zoom easier read by users. */
    private formatZoom_;
}
export {};
