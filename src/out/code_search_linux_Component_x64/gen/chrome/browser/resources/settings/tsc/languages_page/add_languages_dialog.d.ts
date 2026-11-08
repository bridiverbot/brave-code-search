/**
 * @fileoverview 'settings-add-languages-dialog' is a dialog for enabling
 * languages.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrSearchFieldElement } from 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsAddLanguagesDialogElement {
    $: {
        dialog: CrDialogElement;
        list: HTMLElement;
        search: CrSearchFieldElement;
    };
}
declare const SettingsAddLanguagesDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/find_shortcut_manager.js").FindShortcutListener);
export declare class SettingsAddLanguagesDialogElement extends SettingsAddLanguagesDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        languages: {
            type: ArrayConstructor;
        };
        languagesToAdd_: {
            type: ObjectConstructor;
        };
        disableActionButton_: {
            type: BooleanConstructor;
        };
        filterValue_: {
            type: StringConstructor;
        };
    };
    accessor languages: chrome.languageSettingsPrivate.Language[];
    protected accessor languagesToAdd_: Set<string>;
    protected accessor disableActionButton_: boolean;
    protected accessor filterValue_: string;
    connectedCallback(): void;
    handleFindShortcut(_modalContextOpen: boolean): boolean;
    searchInputHasFocus(): boolean;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    /** @return A list of languages to be displayed. */
    protected getLanguages_(): chrome.languageSettingsPrivate.Language[];
    /** @return The number of languages to be displayed. */
    protected getLanguagesCount_(): number;
    protected getDisplayText_(language: chrome.languageSettingsPrivate.Language): string;
    /**
     * @return Whether the user has chosen to add this language (checked its
     *     checkbox).
     */
    protected willAdd_(languageCode: string): boolean;
    /** Handler for checking or unchecking a language item. */
    protected onLanguageCheckboxChange_(e: Event): void;
    protected onCancelButtonClick_(): void;
    /** Enables the checked languages. */
    protected onActionButtonClick_(): void;
    protected onKeydown_(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-add-languages-dialog': SettingsAddLanguagesDialogElement;
    }
}
export {};
