import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface SettingsBraveVpnPageElement {
    $: {
        toggleShowInSystemTray: SettingsToggleButtonElement;
    };
}
declare const SettingsBraveVpnPageElementBase: {
    new (): PolymerElement & WebUiListenerMixinInterface & I18nMixinInterface;
};
/**
 * 'settings-brave-vpn-page' is the settings page containing
 * brave's vpn features.
 */
export declare class SettingsBraveVpnPageElement extends SettingsBraveVpnPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        showInSystemTray_: BooleanConstructor;
    };
    private toggleWireguardSubLabel_;
    private braveVpnConnected_;
    showInSystemTray_: boolean;
    private vpnBrowserProxy_;
    ready(): void;
    private onVpnStateChange;
    onToggleShowInSystemTrayChange_(): void;
    private updateState;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-vpn-page': SettingsBraveVpnPageElement;
    }
}
export {};
