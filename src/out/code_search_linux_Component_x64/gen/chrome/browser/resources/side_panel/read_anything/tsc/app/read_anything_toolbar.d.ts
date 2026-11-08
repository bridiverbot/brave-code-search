import './icons.html.js';
import '../read_aloud/voice_selection_menu.js';
import '../menus/simple_action_menu.js';
import '../menus/appearance_menu.js';
import '../menus/audio_menu.js';
import '../menus/media_menu.js';
import '../menus/color_menu.js';
import '../menus/font_menu.js';
import '../menus/font_size_menu.js';
import '../menus/line_focus_menu.js';
import '../menus/line_spacing_menu.js';
import '../menus/letter_spacing_menu.js';
import '../menus/text_menu.js';
import '../menus/highlight_menu.js';
import '../menus/rate_menu.js';
import '../menus/presentation_menu.js';
import '../menus/settings_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { LineFocusMovement, LineFocusStyle } from '../content/read_anything_types.js';
import { SettingsOption } from '../content/read_anything_types.js';
import type { AppearanceMenuElement } from '../menus/appearance_menu.js';
import type { AudioMenuElement } from '../menus/audio_menu.js';
import type { ColorMenuElement } from '../menus/color_menu.js';
import type { FontMenuElement } from '../menus/font_menu.js';
import type { FontSizeMenuElement } from '../menus/font_size_menu.js';
import type { HighlightMenuElement } from '../menus/highlight_menu.js';
import type { LetterSpacingMenuElement } from '../menus/letter_spacing_menu.js';
import type { LineFocusMenuElement } from '../menus/line_focus_menu.js';
import type { LineSpacingMenuElement } from '../menus/line_spacing_menu.js';
import type { MediaMenuElement } from '../menus/media_menu.js';
import type { ToolbarMenu } from '../menus/menu_util.js';
import type { PresentationMenuElement } from '../menus/presentation_menu.js';
import type { RateMenuElement } from '../menus/rate_menu.js';
import type { SettingsMenuElement } from '../menus/settings_menu.js';
import type { TextMenuElement } from '../menus/text_menu.js';
import type { VoiceSelectionMenuElement } from '../read_aloud/voice_selection_menu.js';
export interface ReadAnythingToolbarElement {
    $: {
        rateMenu: RateMenuElement;
        appearanceMenu: AppearanceMenuElement;
        audioMenu: AudioMenuElement;
        mediaMenu: MediaMenuElement;
        colorMenu: ColorMenuElement;
        lineSpacingMenu: LineSpacingMenuElement;
        letterSpacingMenu: LetterSpacingMenuElement;
        fontMenu: FontMenuElement;
        textMenu: TextMenuElement;
        fontSizeMenu: FontSizeMenuElement;
        voiceSelectionMenu: VoiceSelectionMenuElement;
        highlightMenu: HighlightMenuElement;
        lineFocusMenu: LineFocusMenuElement;
        toolbarContainer: HTMLElement;
        more: CrIconButtonElement;
        settingsMenu: SettingsMenuElement;
        presentationMenu: PresentationMenuElement;
    };
}
interface MenuButton {
    id: string;
    icon: string;
    ariaLabel: string;
    openMenu: (target: HTMLElement) => void;
}
declare const ReadAnythingToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class ReadAnythingToolbarElement extends ReadAnythingToolbarElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isSpeechActive: {
            type: BooleanConstructor;
        };
        isAudioCurrentlyPlaying: {
            type: BooleanConstructor;
        };
        isReadAloudPlayable: {
            type: BooleanConstructor;
        };
        selectedVoice: {
            type: ObjectConstructor;
        };
        availableVoices: {
            type: ArrayConstructor;
        };
        enabledLangs: {
            type: ArrayConstructor;
        };
        localeToDisplayName: {
            type: ObjectConstructor;
        };
        previewVoicePlaying: {
            type: ObjectConstructor;
        };
        theme: {
            type: NumberConstructor;
        };
        lineSpacing: {
            type: NumberConstructor;
        };
        letterSpacing: {
            type: NumberConstructor;
        };
        font: {
            type: StringConstructor;
        };
        fontSize: {
            type: NumberConstructor;
        };
        speechRate: {
            type: NumberConstructor;
        };
        highlightGranularity: {
            type: NumberConstructor;
        };
        linksEnabled: {
            type: BooleanConstructor;
        };
        imagesEnabled: {
            type: BooleanConstructor;
        };
        areFontsLoaded_: {
            type: BooleanConstructor;
        };
        textStyleOptions_: {
            type: ArrayConstructor;
        };
        hideSpinner_: {
            type: BooleanConstructor;
        };
        pageLanguage: {
            type: StringConstructor;
        };
        presentationState: {
            type: NumberConstructor;
        };
        isImmersiveMode: {
            type: BooleanConstructor;
        };
        isReadAnythingPinned: {
            type: BooleanConstructor;
        };
        isLineFocusShowing: {
            type: BooleanConstructor;
        };
        lineFocusStyle: {
            type: ObjectConstructor;
        };
        lineFocusEnabled: {
            type: BooleanConstructor;
        };
        lineFocusMovement: {
            type: NumberConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
        isAiPlaybackActive: {
            type: BooleanConstructor;
        };
        isAiPlaybackUiEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor presentationState: number;
    accessor availableVoices: SpeechSynthesisVoice[];
    accessor enabledLangs: string[];
    accessor isSpeechActive: boolean;
    accessor isAudioCurrentlyPlaying: boolean;
    accessor isReadAloudPlayable: boolean;
    accessor isReadAnythingPinned: boolean;
    accessor localeToDisplayName: {
        [lang: string]: string;
    };
    accessor previewVoicePlaying: SpeechSynthesisVoice | null;
    accessor theme: number;
    accessor lineSpacing: number;
    accessor letterSpacing: number;
    accessor font: string;
    accessor fontSize: number;
    accessor speechRate: number;
    accessor highlightGranularity: number;
    accessor linksEnabled: boolean;
    accessor imagesEnabled: boolean;
    accessor selectedVoice: SpeechSynthesisVoice | null;
    accessor pageLanguage: string;
    accessor isImmersiveMode: boolean;
    accessor isLineFocusShowing: boolean;
    accessor lineFocusStyle: LineFocusStyle | null;
    accessor lineFocusEnabled: boolean;
    accessor lineFocusMovement: LineFocusMovement | null;
    accessor isAiPlaybackActive: boolean;
    protected accessor hideSpinner_: boolean;
    protected accessor isAiPlaybackUiEnabled_: boolean;
    protected accessor textStyleOptions_: MenuButton[];
    protected accessor areFontsLoaded_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private startTime_;
    private constructorTime_;
    private currentFocusId_;
    private toolbarContainerBlurCallback_;
    private wasSpeechActive_;
    private spinnerDebouncerCallbackHandle_?;
    private logger_;
    private visualBrowserProxy_;
    private audioBrowserProxy_;
    private isSetupComplete_;
    isReadingModeInactive(): boolean;
    isReadingModeInSidePanel(): boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(_changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues<this>): void;
    private initializeMenuButtons_;
    protected getHighlightButtonLabel_(): string;
    protected getFormattedSpeechRate_(): string;
    protected onCloseClick_(): void;
    loadFontsStylesheet(): void;
    setFontsLoaded(): void;
    protected playPauseButtonAriaLabel_(): string;
    protected playPauseButtonTitle_(): string;
    protected playPauseButtonIronIcon_(): "read-anything-20:pause-circle-filled" | "read-anything-20:pause-old" | "read-anything-20:play-circle-filled" | "read-anything-20:play-old";
    protected onNextGranularityClick_(): void;
    protected onPreviousGranularityClick_(): void;
    protected onTextStyleMenuButtonClick_(e: Event): void;
    protected onShowRateMenuClick_(event: MouseEvent): void;
    protected onAiPlaybackClick_(): void;
    protected onMoreOptionsClick_(event: MouseEvent): void;
    protected onPlayPauseClick_(): void;
    protected onLineFocusOffClick_(): void;
    protected onToolbarKeydown_(e: KeyboardEvent): void;
    protected onCloseAllMenus_(event: CustomEvent<{
        previousId: SettingsOption | null;
    }>): void;
    protected onCloseSubmenuRequested_(event: CustomEvent<{
        previousId: SettingsOption;
    }>): void;
    protected onOpenSettingsSubmenu_(event: CustomEvent<{
        id: SettingsOption;
        previousId: SettingsOption | null;
        target: HTMLElement;
    }>): void;
    private closeAllMenus_;
    private closeSubmenu_;
    get settingsMenu_(): Partial<Record<SettingsOption, ToolbarMenu>>;
    private onKeyDown_;
    private resetHideSpinnerDebouncer_;
    private onSpeechPlayingStateChanged_;
    private updateFocus_;
    protected getRateTabIndex_(): number;
    protected getVoiceSpeedLabel_(): string;
    protected shouldDisableGranularityNavButtons_(): boolean;
    protected onToolbarContainerBlur_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'read-anything-toolbar': ReadAnythingToolbarElement;
    }
}
export {};
