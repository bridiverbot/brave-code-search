/**
 * @fileoverview 'settings-languages-page' is the settings page
 * for language and input method settings.
 */
import 'chrome://resources/cr_components/managed_dialog/managed_dialog.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './add_languages_dialog.js';
import '../relaunch_confirmation_dialog.js';
import '../settings_page/settings_section.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RestartType } from '../relaunch_mixin_lit.js';
import type { Route } from '../router.js';
import type { LanguageState } from './languages_types.js';
/**
 * Millisecond delay that can be used when closing an action menu to keep it
 * briefly on-screen.
 */
export declare const kMenuCloseDelay: number;
export interface SettingsLanguagesPageElement {
    $: {
        addLanguages: CrButtonElement;
        languagesSection: HTMLElement;
        menu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const SettingsLanguagesPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../relaunch_mixin_lit.js").RelaunchMixinLitInterface) & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsLanguagesPageElement extends SettingsLanguagesPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        supportedLanguages_: {
            type: ArrayConstructor;
        };
        enabledLanguages_: {
            type: ArrayConstructor;
        };
        translateTarget_: {
            type: StringConstructor;
        };
        canEnableSomeSupportedLanguage_: {
            type: BooleanConstructor;
        };
        prospectiveUILanguage_: {
            type: StringConstructor;
        };
        /**
         * The language to display the details for.
         */
        detailLanguage_: {
            type: ObjectConstructor;
        };
        showAddLanguagesDialog_: {
            type: BooleanConstructor;
        };
        addLanguagesDialogLanguages_: {
            type: ArrayConstructor;
        };
        showManagedLanguageDialog_: {
            type: BooleanConstructor;
        };
        restartTypeEnum: {
            type: ObjectConstructor;
        };
    };
    protected accessor supportedLanguages_: chrome.languageSettingsPrivate.Language[];
    protected accessor enabledLanguages_: LanguageState[];
    protected accessor translateTarget_: string;
    protected accessor canEnableSomeSupportedLanguage_: boolean;
    protected accessor prospectiveUILanguage_: string;
    protected accessor detailLanguage_: LanguageState | undefined;
    protected accessor showAddLanguagesDialog_: boolean;
    protected accessor addLanguagesDialogLanguages_: chrome.languageSettingsPrivate.Language[];
    protected accessor showManagedLanguageDialog_: boolean;
    protected accessor restartTypeEnum: typeof RestartType;
    private languageHelper_;
    private boundOnLanguagesChanged_;
    private languageSettingsMetricsProxy_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onLanguagesChanged_;
    /**
     * Renders the add languages dialog.
     */
    protected onAddLanguagesClick_(e: Event): void;
    protected onLanguagesAdded_(e: CustomEvent<string[]>): void;
    protected onAddLanguagesDialogClose_(): void;
    /**
     * Formats language index (zero-indexed)
     */
    protected formatIndex_(index: number): string;
    /**
     * Used to determine which "Move" buttons to show for ordering enabled
     * languages.
     * @return True if |language| is at the |n|th index in the list of enabled
     *     languages.
     */
    protected isNthLanguage_(n: number): boolean;
    /**
     * @return True if the "Move to top" option for |language| should be visible.
     */
    protected showMoveUp_(): boolean;
    /**
     * @return True if the "Move down" option for |language| should be visible.
     */
    protected showMoveDown_(): boolean;
    /**
     * @param languageCode The language code identifying a language.
     * @param translateTarget The target language.
     * @return 'target' if |languageCode| matches the target language,
     *     'non-target' otherwise.
     */
    protected isTranslationTarget_(languageCode: string, translateTarget: string): string;
    protected isWindows_(): boolean;
    protected onMenuClose_(): Promise<void>;
    /**
     * Moves the language to the top of the list.
     */
    protected onMoveToTopClick_(): void;
    /**
     * Moves the language up in the list.
     */
    protected onMoveUpClick_(): void;
    /**
     * Moves the language down in the list.
     */
    protected onMoveDownClick_(): void;
    /**
     * Disables the language.
     */
    protected onRemoveLanguageClick_(): void;
    /**
     * Returns either the "selected" class, if the language matches the
     * prospective UI language, or an empty string. Languages can only be
     * selected on Chrome OS and Windows.
     * @param languageCode The language code identifying a language.
     * @return The class name for the language item.
     */
    protected getLanguageItemClass_(languageCode: string): string;
    protected onDotsClick_(e: Event): void;
    /**
     * Closes the shared action menu after a short delay, so when a checkbox is
     * clicked it can be seen to change state before disappearing.
     */
    private closeMenuSoon_;
    /**
     * Triggered when the managed language dialog is dismissed.
     */
    protected onManagedLanguageDialogClose_(): void;
    currentRouteChanged(currentRoute: Route): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-languages-page': SettingsLanguagesPageElement;
    }
}
export {};
