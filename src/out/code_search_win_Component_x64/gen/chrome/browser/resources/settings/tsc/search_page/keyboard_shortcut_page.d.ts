/**
 * @fileoverview
 * 'settings-keyboard-shortcut-page' is the settings page containing
 * the keyboard shortcut setting.
 */
import '../settings_page/settings_section.js';
import '../controls/settings_dropdown_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DropdownMenuOptionList, SettingsDropdownMenuElement } from '../controls/settings_dropdown_menu.js';
export interface KeyboardShortcutPageElement {
    $: {
        dropdown: SettingsDropdownMenuElement;
    };
}
export declare class KeyboardShortcutPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        keyboardShortcutMenuOptions_: {
            type: ArrayConstructor;
        };
    };
    protected accessor keyboardShortcutMenuOptions_: DropdownMenuOptionList;
    protected onKeyboardShortcutSettingsControlChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-keyboard-shortcut-page': KeyboardShortcutPageElement;
    }
}
