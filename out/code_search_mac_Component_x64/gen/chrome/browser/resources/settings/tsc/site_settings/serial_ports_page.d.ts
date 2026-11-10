import './chooser_exception_list.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ChooserType, ContentSettingsTypes } from '../site_settings/constants.js';
declare const SerialPortsPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class SerialPortsPageElement extends SerialPortsPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        chooserTypeEnum_: {
            type: ObjectConstructor;
            value: typeof ChooserType;
        };
    };
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-serial-ports-page': SerialPortsPageElement;
    }
}
export {};
