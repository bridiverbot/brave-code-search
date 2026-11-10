/**
 * @fileoverview
 * 'settings-site-data' is the polymer element for showing the
 * settings for site data under Site Settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../settings_page/settings_subpage.js';
import './site_list.js';
import './site_settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { SettingsCollapseRadioButtonElement } from '../controls/collapse_radio_button.js';
import type { SettingsRadioGroupElement } from '../controls/settings_radio_group.js';
import { ContentSetting, ContentSettingsTypes } from './constants.js';
export interface SettingsSiteDataElement {
    $: {
        defaultGroup: SettingsRadioGroupElement;
        defaultAllow: SettingsCollapseRadioButtonElement;
        defaultSessionOnly: SettingsCollapseRadioButtonElement;
        defaultBlock: SettingsCollapseRadioButtonElement;
    };
}
declare const SettingsSiteDataElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class SettingsSiteDataElement extends SettingsSiteDataElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /** Current search term. */
        searchTerm: {
            type: StringConstructor;
            notify: boolean;
            value: string;
        };
        cookiesContentSettingType_: {
            type: StringConstructor;
            value: ContentSettingsTypes;
        };
        /** Expose ContentSetting enum to HTML bindings. */
        contentSettingEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSetting;
        };
        exceptionListsReadOnly_: {
            type: BooleanConstructor;
            value: boolean;
        };
        showDefaultBlockDialog_: BooleanConstructor;
    };
    searchTerm: string;
    private cookiesContentSettingType_;
    private exceptionListsReadOnly_;
    private showDefaultBlockDialog_;
    connectedCallback(): void;
    private onGeneratedPrefsUpdated_;
    private onDefaultRadioChange_;
    private onDefaultBlockDialogCancel_;
    private onDefaultBlockDialogConfirm_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-site-data': SettingsSiteDataElement;
    }
}
export {};
