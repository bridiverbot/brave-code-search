import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './category_setting_exceptions.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes } from '../site_settings/constants.js';
declare const ArPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class ArPageElement extends ArPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: StringConstructor;
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
    };
    searchTerm: string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ar-page': ArPageElement;
    }
}
export {};
