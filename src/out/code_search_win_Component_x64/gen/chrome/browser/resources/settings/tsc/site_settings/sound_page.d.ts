import './category_setting_exceptions.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes } from './constants.js';
declare const SoundPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class SoundPageElement extends SoundPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: StringConstructor;
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        blockAutoplayEnabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        enableBlockAutoplayContentSetting_: {
            type: BooleanConstructor;
            value(): boolean;
        };
    };
    searchTerm: string;
    private blockAutoplayEnabled_;
    private enableBlockAutoplayContentSetting_;
    private browserProxy_;
    ready(): void;
    private onBlockAutoplayStatusChanged_;
    private onBlockAutoplayToggleChange_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sound-page': SoundPageElement;
    }
}
export {};
