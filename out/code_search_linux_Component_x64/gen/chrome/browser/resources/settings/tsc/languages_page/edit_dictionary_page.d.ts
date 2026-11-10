/**
 * @fileoverview 'settings-edit-dictionary-page' is a sub-page for editing
 * the "dictionary" of custom words used for spell check.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../settings_page/settings_subpage.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsEditDictionaryPageElement {
    $: {
        addWord: CrButtonElement;
        newWord: CrInputElement;
        noWordsLabel: HTMLElement;
    };
}
declare const SettingsEditDictionaryPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface);
export declare class SettingsEditDictionaryPageElement extends SettingsEditDictionaryPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableSpellcheckingPref_: {
            type: ObjectConstructor;
        };
        newWordValue_: {
            type: StringConstructor;
        };
        words_: {
            type: ArrayConstructor;
        };
        hasWords_: {
            type: BooleanConstructor;
        };
    };
    protected accessor enableSpellcheckingPref_: chrome.settingsPrivate.PrefObject<boolean> | undefined;
    protected accessor newWordValue_: string;
    protected accessor words_: string[];
    protected accessor hasWords_: boolean;
    private languageSettingsPrivate_;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    /**
     * Adds the word in the new-word input to the dictionary.
     */
    private addWordFromInput_;
    /**
     * Check if the field is empty or invalid.
     */
    protected disableAddButton_(): boolean;
    protected getErrorMessage_(): string;
    private getTrimmedNewWord_;
    /**
     * If the word is invalid, returns true (or a message if one is provided).
     * Otherwise returns false.
     */
    protected isWordInvalid_(): boolean;
    private newWordAlreadyAdded_;
    private newWordIsTooLong_;
    /**
     * Handles tapping on the Add Word button.
     */
    protected onAddWordClick_(): void;
    protected onNewWordValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    /**
     * Handles updates to the word list. Additions are unshifted to the top
     * of the list so that users can see them easily.
     */
    private onCustomDictionaryChanged_;
    /**
     * Handles Enter and Escape key presses for the new-word input.
     */
    protected onNewWordKeydown_(e: KeyboardEvent): void;
    /**
     * Handles tapping on a "Remove word" icon button.
     */
    protected onRemoveWordClick_(e: Event): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-edit-dictionary-page': SettingsEditDictionaryPageElement;
    }
}
export {};
