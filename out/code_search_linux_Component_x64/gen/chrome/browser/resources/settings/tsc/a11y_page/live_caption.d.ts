/**
 * @fileoverview 'settings-live-caption' is a component for showing Live Caption
 * settings. It appears on the accessibility subpage
 * (chrome://settings/accessibility) on Mac and some versions of Windows and on
 * the captions subpage (chrome://settings/captions) on Linux and other versions
 * of Windows.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '../controls/settings_toggle_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { LiveCaptionLanguage, LiveCaptionLanguageList } from '/shared/settings/a11y_page/captions_browser_proxy.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '../languages_page/add_languages_dialog.js';
import './live_translate.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
declare const SettingsLiveCaptionElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface SettingsLiveCaptionElement {
    $: {
        menu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
export declare class SettingsLiveCaptionElement extends SettingsLiveCaptionElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isLiveCaptionEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * The subtitle to display under the Live Caption heading. Generally, this
         * is a generic subtitle describing the feature. While the SODA model is
         * being downloading, this displays the download progress.
         */
        enableLiveCaptionSubtitle_: {
            type: StringConstructor;
        };
        enableLiveCaptionMultiLanguage_: {
            type: BooleanConstructor;
        };
        enableLiveCaptionSpeechRecognitionSmallExpertModel_: {
            type: BooleanConstructor;
        };
        speechRecognitionSmallExpertModelState_: {
            type: StringConstructor;
        };
        speechRecognitionSmallExpertModelProgress_: {
            type: NumberConstructor;
        };
        speechRecognitionSmallExpertModelSpeed_: {
            type: StringConstructor;
        };
        speechRecognitionSmallExpertModelEta_: {
            type: StringConstructor;
        };
        speechRecognitionSmallExpertModelSize_: {
            type: StringConstructor;
        };
        liveCaptionLanguagePref_: {
            type: ObjectConstructor;
        };
        enableLiveTranslate_: {
            type: BooleanConstructor;
        };
        installedLanguagePacks_: {
            type: ArrayConstructor;
        };
        availableLanguagePacks_: {
            type: ArrayConstructor;
        };
        detailLanguage_: {
            type: ObjectConstructor;
        };
        showAddLanguagesDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isLiveCaptionEnabled_: boolean;
    protected accessor enableLiveCaptionSubtitle_: string;
    protected accessor enableLiveCaptionMultiLanguage_: boolean;
    protected accessor enableLiveCaptionSpeechRecognitionSmallExpertModel_: boolean;
    protected accessor speechRecognitionSmallExpertModelState_: string;
    protected accessor speechRecognitionSmallExpertModelProgress_: number;
    protected accessor speechRecognitionSmallExpertModelSpeed_: string;
    protected accessor speechRecognitionSmallExpertModelEta_: string;
    protected accessor speechRecognitionSmallExpertModelSize_: string;
    protected accessor liveCaptionLanguagePref_: chrome.settingsPrivate.PrefObject<string> | undefined;
    protected accessor enableLiveTranslate_: boolean;
    protected accessor installedLanguagePacks_: LiveCaptionLanguageList;
    protected accessor availableLanguagePacks_: LiveCaptionLanguageList;
    protected accessor detailLanguage_: LiveCaptionLanguage | undefined;
    protected accessor showAddLanguagesDialog_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    protected onSpeechRecognitionSmallExpertModelStateChanged_(state: string, progress: number, speed?: string, eta?: string, size?: string): void;
    protected computeSpeechRecognitionSmallExpertModelSize_(): string;
    protected computeSpeechRecognitionSmallExpertModelStatus_(): string;
    protected computeSpeechRecognitionSmallExpertModelDownloadProgress_(): string;
    protected onDeleteSpeechRecognitionSmallExpertModelClick_(): void;
    /**
     * @return the Live Caption toggle element.
     */
    getLiveCaptionToggle(): SettingsToggleButtonElement;
    protected computeMoreButtonAriaLabel_(name: string, code: string): string;
    protected onLiveCaptionEnabledChange_(event: Event): void;
    protected onLiveCaptionMaskOffensiveWordsChange_(event: Event): void;
    protected onAddLanguagesClick_(e: Event): void;
    protected onAddLanguagesDialogClose_(): void;
    protected onDotsClick_(e: Event): void;
    protected isDefaultLanguage_(languageCode: string): boolean;
    protected onMakeDefaultClick_(): void;
    protected onRemoveLanguageClick_(): void;
    protected onLanguagesAdded_(e: CustomEvent<string[]>): void;
    private installLanguagePacks_;
    protected filterAvailableLanguagePacks_(): chrome.languageSettingsPrivate.Language[];
    /**
     * Displays SODA download progress in the UI. When the language UI is visible,
     * which occurs when the kLiveCaptionMultiLanguage feature is enabled and when
     * the kLiveCaptionEnabled pref is true, download progress should appear next
     * to the selected language. Otherwise, the download progress appears as a
     * subtitle below the Live Caption toggle.
     * @param sodaDownloadProgress The message sent from the webui to be displayed
     *     as download progress for Live Caption.
     * @param languageCode The language code indicating which language pack the
     *     message applies to.
     */
    private onSodaDownloadProgressChangedForLanguage_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-live-caption': SettingsLiveCaptionElement;
    }
}
export {};
