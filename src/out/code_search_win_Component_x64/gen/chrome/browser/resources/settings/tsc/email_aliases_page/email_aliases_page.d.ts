import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '../brave_account_compact_row.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import '../settings_page/settings_section.js';
interface SettingsEmailAliasesPageElement {
    $: {
        signInRoot: HTMLElement;
        manageSection: HTMLElement;
    };
}
declare class SettingsEmailAliasesPageElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        pageTitle_: {
            type: StringConstructor;
            value: () => string;
        };
        autofillSuggestionToggleLabel_: {
            type: StringConstructor;
            value: () => string;
        };
        showEmailAliasesSettings_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    pageTitle_: string;
    autofillSuggestionToggleLabel_: string;
    showEmailAliasesSettings_: boolean;
    ready(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-email-aliases-page': SettingsEmailAliasesPageElement;
    }
}
export {};
