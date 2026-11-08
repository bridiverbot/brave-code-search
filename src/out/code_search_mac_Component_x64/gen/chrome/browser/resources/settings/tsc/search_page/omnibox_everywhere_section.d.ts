/**
 * @fileoverview
 * 'settings-omnibox-everywhere-section' is the settings section containing
 * controls for Omnibox Everywhere (Search in Chrome).
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import type { CrShortcutInputElement } from 'chrome://resources/cr_components/cr_shortcut_input/cr_shortcut_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsOmniboxEverywhereSectionElement {
    $: {
        shortcutInput: CrShortcutInputElement;
    };
}
declare const SettingsOmniboxEverywhereSectionElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsOmniboxEverywhereSectionElement extends SettingsOmniboxEverywhereSectionElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        registeredShortcut_: {
            type: StringConstructor;
        };
        isEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor registeredShortcut_: string;
    protected accessor isEnabled_: boolean;
    private showShortcutsPrefValue_;
    private ntpShortcutsVisible_;
    private browserProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateShortcutsShowing_;
    protected onMainToggleChange_(event: Event): Promise<void>;
    protected onShowShortcutsToggleChange_(event: Event): Promise<void>;
    protected onShortcutUpdated_(event: CustomEvent<string>): Promise<void>;
    protected onInputCaptureChange_(event: CustomEvent<boolean>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-omnibox-everywhere-section': SettingsOmniboxEverywhereSectionElement;
    }
}
export {};
