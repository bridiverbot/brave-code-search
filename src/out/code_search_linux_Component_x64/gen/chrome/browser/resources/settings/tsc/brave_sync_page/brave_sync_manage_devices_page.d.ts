import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SettingsViewMixinInterface } from '../settings_page/settings_view_mixin.js';
declare const SettingsBraveSyncManageDevicesPageElementBase: {
    new (): PolymerElement & I18nMixinInterface & SettingsViewMixinInterface;
};
export declare class SettingsBraveSyncManageDevicesPageElement extends SettingsBraveSyncManageDevicesPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        label: {
            type: StringConstructor;
        };
    };
    label: string;
    onSyncTap_(): void;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
export {};
