/**
 * @fileoverview 'settings-live-translate' is a component for showing Live
 * Translate settings. It appears on the accessibility subpage
 * (chrome://settings/accessibility) on Mac and some versions of Windows and on
 * the captions subpage (chrome://settings/captions) on Linux, ChromeOS, and
 * other versions of Windows.
 */
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '../controls/settings_dropdown_menu.js';
import '../controls/settings_toggle_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
declare const SettingsLiveTranslateElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface SettingsLiveTranslateElement {
    $: {
        liveTranslateToggleButton: SettingsToggleButtonElement;
    };
}
export declare class SettingsLiveTranslateElement extends SettingsLiveTranslateElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isLiveTranslateEnabled_: {
            type: BooleanConstructor;
        };
        enableLiveTranslateSubtitle_: {
            type: StringConstructor;
        };
        languageOptions_: {
            type: ArrayConstructor;
        };
        translatableLanguages_: {
            type: ArrayConstructor;
        };
    };
    protected accessor isLiveTranslateEnabled_: boolean;
    protected accessor enableLiveTranslateSubtitle_: string;
    protected accessor languageOptions_: DropdownMenuOptionList;
    protected accessor translatableLanguages_: DropdownMenuOptionList;
    connectedCallback(): void;
    protected onLiveTranslateEnabledChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-live-translate': SettingsLiveTranslateElement;
    }
}
export {};
