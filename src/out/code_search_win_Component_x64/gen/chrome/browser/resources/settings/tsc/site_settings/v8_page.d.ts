import './category_setting_exceptions.js';
import './site_settings_shared.css.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes, JavascriptOptimizerSetting } from './constants.js';
declare const V8PageElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class V8PageElement extends V8PageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: StringConstructor;
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        javascriptOptimizerSettingEnum_: {
            type: ObjectConstructor;
            value: typeof JavascriptOptimizerSetting;
        };
        blockForUnfamiliarSitesSubLabel_: {
            type: StringConstructor;
            value: string;
        };
    };
    searchTerm: string;
    private blockForUnfamiliarSitesSubLabel_;
    connectedCallback(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-v8-page': V8PageElement;
    }
}
export {};
