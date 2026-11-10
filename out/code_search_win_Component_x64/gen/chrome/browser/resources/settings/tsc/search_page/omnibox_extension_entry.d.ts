/**
 * @fileoverview 'settings-omnibox-extension-entry' is a component for showing
 * an omnibox extension with its name and keyword.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../site_favicon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsOmniboxExtensionEntryElement {
    $: {
        disable: HTMLButtonElement;
        manage: HTMLButtonElement;
    };
}
export declare class SettingsOmniboxExtensionEntryElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        engine: {
            type: ObjectConstructor;
        };
    };
    accessor engine: SearchEngine;
    private browserProxy_;
    protected onManageClick_(): void;
    protected onDisableClick_(): void;
    private closePopupMenu_;
    protected onDotsClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-omnibox-extension-entry': SettingsOmniboxExtensionEntryElement;
    }
}
