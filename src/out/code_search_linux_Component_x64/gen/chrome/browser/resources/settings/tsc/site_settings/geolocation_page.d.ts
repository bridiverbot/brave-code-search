import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './category_setting_exceptions.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes, SettingsState } from './constants.js';
declare const GeolocationPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class GeolocationPageElement extends GeolocationPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: {
            type: StringConstructor;
            notify: boolean;
            value: string;
        };
        /** Expose the Permissions SettingsState enum to HTML bindings. */
        settingsStateEnum_: {
            type: ObjectConstructor;
            value: typeof SettingsState;
        };
        /** Expose ContentSettingTypes enum to HTML bindings. */
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        /**
         * Glue property to connect the category default setting value to the
         * visibility of the additional CPSS options.
         */
        locationSettingValue_: StringConstructor;
    };
    searchTerm: string;
    private locationSettingValue_;
    private isEqualToAsk_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-geolocation-page': GeolocationPageElement;
    }
}
export {};
