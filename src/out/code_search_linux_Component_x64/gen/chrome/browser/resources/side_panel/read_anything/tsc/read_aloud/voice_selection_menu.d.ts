import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import './language_menu.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { ToolbarMenu } from '../menus/menu_util.js';
import type { NotificationType } from './voice_language_conversions.js';
import type { VoiceDropdownGroup, VoiceDropdownItem } from './voice_menu_display.js';
import type { VoiceNotificationListener } from './voice_notification_manager.js';
export interface VoiceSelectionMenuElement {
    $: {
        voiceSelectionMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const VoiceSelectionMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class VoiceSelectionMenuElement extends VoiceSelectionMenuElementBase implements VoiceNotificationListener, ToolbarMenu {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedVoice: {
            type: ObjectConstructor;
        };
        availableVoices: {
            type: ArrayConstructor;
        };
        enabledLangs: {
            type: ArrayConstructor;
        };
        previewVoicePlaying: {
            type: ObjectConstructor;
        };
        currentNotifications_: {
            type: ObjectConstructor;
        };
        previewVoiceInitiated: {
            type: ObjectConstructor;
        };
        localeToDisplayName: {
            type: ObjectConstructor;
        };
        showLanguageMenuDialog_: {
            type: BooleanConstructor;
        };
        downloadingMessages_: {
            type: ArrayConstructor;
        };
        voiceGroups_: {
            type: ArrayConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        errorMessages_: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor selectedVoice: SpeechSynthesisVoice | null;
    accessor localeToDisplayName: {
        [lang: string]: string;
    };
    accessor previewVoicePlaying: SpeechSynthesisVoice | null;
    accessor enabledLangs: string[];
    accessor availableVoices: SpeechSynthesisVoice[];
    accessor nonModal: boolean;
    private accessor currentNotifications_;
    private accessor previewVoiceInitiated;
    protected accessor errorMessages_: string[];
    protected accessor downloadingMessages_: string[];
    protected accessor voiceGroups_: VoiceDropdownGroup[];
    protected accessor showLanguageMenuDialog_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private readonly spBodyPadding_;
    private notificationManager_;
    private audioBrowserProxy_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    notify(type: NotificationType, language?: string): void;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    onVoiceSelectionMenuClick(targetElement: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    private onMenuShown;
    protected voiceItemTabIndex_(groupIndex: number, voiceIndex: number): -1 | 0;
    private computeVoiceDropdown_;
    protected onVoiceSelectClick_(e: Event): void;
    protected onVoicePreviewClick_(e: Event): void;
    protected onLanguageMenuClick_(): void;
    protected onLanguageMenuClose_(event: CustomEvent<void>): void;
    protected onClose_(): void;
    private shouldAllowPropagation_;
    protected onVoiceMenuKeydown_(e: KeyboardEvent): void;
    protected previewLabel_(previewPlaying: boolean): string;
    protected hideSpinner_(voiceDropdown: VoiceDropdownItem): boolean;
    protected voiceLabel_(selected: boolean, voiceName: string): string;
    protected shouldDisableButton_(voiceDropdown: VoiceDropdownItem): boolean;
    protected previewIcon_(previewInitiated: boolean): string;
    private getVoiceItemForEvent_;
    private computeErrorMessages_;
    private computeDownloadingMessages_;
}
declare global {
    interface HTMLElementTagNameMap {
        'voice-selection-menu': VoiceSelectionMenuElement;
    }
}
export {};
