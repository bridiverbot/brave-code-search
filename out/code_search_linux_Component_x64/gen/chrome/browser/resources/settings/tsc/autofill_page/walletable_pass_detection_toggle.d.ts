import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/settings_toggle_button.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
export interface SettingsWalletablePassDetectionToggleElement {
    $: {
        toggle: SettingsToggleButtonElement;
    };
}
export declare class SettingsWalletablePassDetectionToggleElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ineligibleUser_: {
            type: BooleanConstructor;
        };
    };
    protected accessor ineligibleUser_: boolean;
    connectedCallback(): void;
    /**
     * Listener for `walletablePassDetectionPrefToggle` change event.
     */
    protected onSettingsBooleanControlChange_(e: Event): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-walletable-pass-detection-toggle': SettingsWalletablePassDetectionToggleElement;
    }
}
