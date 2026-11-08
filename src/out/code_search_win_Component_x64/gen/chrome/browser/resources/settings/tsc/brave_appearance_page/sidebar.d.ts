import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { PrefServiceObserverMixinInterface } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const SettingsBraveAppearanceSidebarElementBase: {
    new (): PolymerElement & I18nMixinInterface & PrefServiceObserverMixinInterface;
};
/**
 * 'settings-brave-appearance-sidebar' is the settings page area containing
 * brave's sidebar settings in appearance settings.
 * This is separated from 'settings-brave-appearance-toolbar' because sidebar
 * option is located below the home button option.
 */
export declare class SettingsBraveAppearanceSidebarElement extends SettingsBraveAppearanceSidebarElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        sidebarShowEnabledLabel_: {
            readOnly: boolean;
            type: StringConstructor;
        };
        sidebarShowOptions_: {
            readyOnly: boolean;
            type: ArrayConstructor;
            value(): {
                value: number;
                name: string;
            }[];
        };
        sidebarShowOptionPref_: ObjectConstructor;
    };
    static get observers(): string[];
    private sidebarShowOptions_;
    private sidebarShowEnabledLabel_;
    private sidebarShowOptionPref_;
    connectedCallback(): void;
    private onShowOptionChanged_;
}
export {};
