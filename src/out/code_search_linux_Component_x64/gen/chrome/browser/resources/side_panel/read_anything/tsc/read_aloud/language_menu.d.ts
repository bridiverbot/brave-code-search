import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import './language_toast.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { NotificationType } from './voice_language_conversions.js';
import type { VoiceNotificationListener } from './voice_notification_manager.js';
export interface LanguageMenuElement {
    $: {
        languageMenu: CrDialogElement;
        searchField: CrInputElement;
    };
}
interface Notification {
    isError: boolean;
    text?: string;
}
interface LanguageDropdownItem {
    readableLanguage: string;
    checked: boolean;
    languageCode: string;
    notification: Notification;
    disabled: boolean;
}
declare const LanguageMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class LanguageMenuElement extends LanguageMenuElementBase implements VoiceNotificationListener {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enabledLangs: {
            type: ArrayConstructor;
        };
        availableVoices: {
            type: ArrayConstructor;
        };
        localeToDisplayName: {
            type: ObjectConstructor;
        };
        selectedLang: {
            type: StringConstructor;
        };
        languageSearchValue_: {
            type: StringConstructor;
        };
        currentNotifications_: {
            type: ObjectConstructor;
        };
        availableLanguages_: {
            type: ArrayConstructor;
        };
    };
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    notify(type: NotificationType, language?: string): void;
    accessor selectedLang: string;
    accessor localeToDisplayName: {
        [lang: string]: string;
    };
    accessor enabledLangs: string[];
    accessor availableVoices: SpeechSynthesisVoice[];
    protected accessor languageSearchValue_: string;
    protected accessor availableLanguages_: LanguageDropdownItem[];
    localesOfLangPackVoices: Set<string>;
    private accessor currentNotifications_;
    private notificationManager_;
    protected onClose_(): void;
    protected onClearSearchClick_(): void;
    protected onToggleChange_(e: Event): void;
    private getToast_;
    private getDisplayName;
    private getNormalizedDisplayName;
    private getSupportedNaturalVoiceDownloadLocales;
    private computeAvailableLanguages_;
    private isLanguageSearchMatch;
    private getNotificationFor;
    protected searchHasLanguages(): boolean;
    protected onLanguageSearchValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onKeydown_(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'language-menu': LanguageMenuElement;
    }
}
export {};
