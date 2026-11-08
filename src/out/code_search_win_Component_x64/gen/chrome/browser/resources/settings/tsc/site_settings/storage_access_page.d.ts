import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import './storage_access_site_list.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSetting, ContentSettingsTypes } from '../site_settings/constants.js';
declare const StorageAccessPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class StorageAccessPageElement extends StorageAccessPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: StringConstructor;
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        contentSettingEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSetting;
        };
    };
    searchTerm: string;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-storage-access-page': StorageAccessPageElement;
    }
}
export {};
