import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './category_setting_exceptions.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes } from './constants.js';
declare const ProtectedContentPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class ProtectedContentPageElement extends ProtectedContentPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: {
            type: StringConstructor;
            notify: boolean;
            value: string;
        };
        isGuest_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        /** Expose ContentSettingsTypes enum to HTML bindings. */
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
    };
    searchTerm: string;
    private isGuest_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-protected-content-page': ProtectedContentPageElement;
    }
}
export {};
