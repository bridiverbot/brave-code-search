import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import '../settings_page/settings_subpage.js';
import type { CrShortcutInputElement } from 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsDictationPageElement {
    $: {
        dictationLearnMoreLabel: HTMLAnchorElement;
        shortcutInput: CrShortcutInputElement;
    };
}
declare const SettingsDictationPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
/**
 * Element for the Talk to type (Dictation) settings page.
 * Handles configuration of the dictation hotkey.
 */
export declare class SettingsDictationPageElement extends SettingsDictationPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        registeredShortcut_: {
            type: StringConstructor;
        };
    };
    protected accessor registeredShortcut_: string;
    connectedCallback(): void;
    focusBackButton(): void;
    private onPrefChanged_;
    protected onShortcutUpdated_(event: CustomEvent<string>): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-dictation-page': SettingsDictationPageElement;
    }
}
export {};
