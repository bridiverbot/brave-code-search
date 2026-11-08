import './read_anything_toolbar.js';
import '/strings.m.js';
import '//read-anything-side-panel.top-chrome/shared/sp_empty_state.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '../read_aloud/language_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ContentListener, ContentState } from '../content/content_controller.js';
import type { LineFocusListener } from '../content/line_focus_controller.js';
import type { LineFocusMovement, LineFocusStyle } from '../content/read_anything_types.js';
import type { LanguageToastElement } from '../read_aloud/language_toast.js';
import type { Segment } from '../read_aloud/read_aloud_types.js';
import type { SpeechListener } from '../read_aloud/speech_controller.js';
import type { VoiceLanguageListener } from '../read_aloud/voice_language_controller.js';
import type { ReadAnythingToolbarElement } from './read_anything_toolbar.js';
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface AppElement {
    $: {
        toolbar: ReadAnythingToolbarElement;
        appFlexParent: HTMLElement;
        containerParent: HTMLElement;
        container: HTMLElement;
        languageToast: LanguageToastElement;
        containerScroller: HTMLElement;
        lineFocus: HTMLElement;
        settingsOverlay: HTMLElement;
    };
}
export declare class AppElement extends AppElementBase implements SpeechListener, VoiceLanguageListener, ContentListener, LineFocusListener {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isSpeechActive_: {
            type: BooleanConstructor;
        };
        isAudioCurrentlyPlaying_: {
            type: BooleanConstructor;
        };
        enabledLangs_: {
            type: ArrayConstructor;
        };
        theme_: {
            type: NumberConstructor;
        };
        lineSpacing_: {
            type: NumberConstructor;
        };
        letterSpacing_: {
            type: NumberConstructor;
        };
        font_: {
            type: StringConstructor;
        };
        fontSize_: {
            type: NumberConstructor;
        };
        speechRate_: {
            type: NumberConstructor;
        };
        highlightGranularity_: {
            type: NumberConstructor;
        };
        linksEnabled_: {
            type: BooleanConstructor;
        };
        imagesEnabled_: {
            type: BooleanConstructor;
        };
        selectedVoice_: {
            type: ObjectConstructor;
        };
        availableVoices_: {
            type: ArrayConstructor;
        };
        previewVoicePlaying_: {
            type: ObjectConstructor;
        };
        localeToDisplayName_: {
            type: ObjectConstructor;
        };
        contentState_: {
            type: ObjectConstructor;
        };
        speechEngineLoaded_: {
            type: BooleanConstructor;
        };
        willDrawAgainSoon_: {
            type: BooleanConstructor;
        };
        pageLanguage_: {
            type: StringConstructor;
        };
        presentationState_: {
            type: NumberConstructor;
        };
        lineFocusStyle_: {
            type: ObjectConstructor;
        };
        lineFocusEnabled_: {
            type: BooleanConstructor;
        };
        lineFocusMovement_: {
            type: NumberConstructor;
        };
        hasValidSelection_: {
            type: BooleanConstructor;
        };
        isReadAnythingPinned_: {
            type: BooleanConstructor;
        };
        isHidingContentForTranslation_: {
            type: BooleanConstructor;
        };
    };
    private startTime_;
    protected accessor contentState_: ContentState;
    protected accessor lineFocusStyle_: LineFocusStyle | null;
    protected accessor lineFocusEnabled_: boolean;
    protected accessor lineFocusMovement_: LineFocusMovement | null;
    protected accessor hasValidSelection_: boolean;
    protected accessor isReadAnythingPinned_: boolean;
    protected isReadAnythingImprovedUiEnabled_: boolean;
    protected accessor isHidingContentForTranslation_: boolean;
    private accessor speechEngineLoaded_;
    private accessor willDrawAgainSoon_;
    protected accessor selectedVoice_: SpeechSynthesisVoice | null;
    protected accessor enabledLangs_: string[];
    protected accessor availableVoices_: SpeechSynthesisVoice[];
    protected accessor previewVoicePlaying_: SpeechSynthesisVoice | null;
    protected accessor localeToDisplayName_: {
        [locale: string]: string;
    };
    protected accessor pageLanguage_: string;
    private notificationManager_;
    private logger_;
    private styleUpdater_;
    private nodeStore_;
    private playOnOpen_;
    private voiceLanguageController_;
    private speechController_;
    private contentController_;
    private contentBrowserProxy_;
    private visualBrowserProxy_;
    private audioBrowserProxy_;
    private selectionController_;
    private lineFocusController_;
    private renderedTextBlocksAnimationFrameHandle_;
    protected accessor theme_: number;
    protected accessor lineSpacing_: number;
    protected accessor letterSpacing_: number;
    protected accessor font_: string;
    protected accessor fontSize_: number;
    protected accessor speechRate_: number;
    protected accessor highlightGranularity_: number;
    protected accessor linksEnabled_: boolean;
    protected accessor imagesEnabled_: boolean;
    protected accessor isSpeechActive_: boolean;
    protected accessor isAudioCurrentlyPlaying_: boolean;
    protected accessor presentationState_: number;
    isImmersiveMode(): boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    setPlayOnOpen(playOnOpen: boolean): void;
    private syncContentState_;
    private onWindowResize_;
    protected onSettingsOpened_(): void;
    protected onSettingsClosed_(): void;
    protected onContainerScroll_(): void;
    protected onContainerScrollend_(): void;
    showLoading(): void;
    updateContent(): void;
    getSelection(): Selection | null;
    protected onLinksToggle_(): void;
    private updateLinks_;
    protected onImagesToggle_(): void;
    private onImagesVisibilityChanged_;
    private updateImages_;
    private onMainFrameSameDocumentNavigation_;
    private onRenderedTextMappingReady_;
    private cancelRenderedTextBlocksAnimationFrame_;
    private onRenderedTextBlocksAvailable_;
    private onPresentationStateReceived_;
    protected onLanguageMenuOpen_(): void;
    protected onLanguageMenuClose_(): void;
    protected onPreviewVoice_(event: CustomEvent<{
        previewVoice: SpeechSynthesisVoice;
    }>): void;
    protected onVoiceMenuOpen_(event: CustomEvent<void>): void;
    protected onVoiceMenuClose_(event: CustomEvent<void>): void;
    protected onPlayPauseClick_(): void;
    onLineFocusVisualPositionChange(newTop: number, newHeight: number): void;
    onLineFocusContentPositionChange(newTop: number, newHeight: number, newFocalPoint: number): void;
    onNeedScrollForLineFocus(scrollDiff: number, instant?: boolean): void;
    onNeedScrollToTop(): void;
    onLineFocusModesChanged(): void;
    onScrollBufferForLineFocusChange(needsBuffer: boolean): void;
    onContentStateChange(): void;
    onNewPageDrawn(): void;
    onContentChange(): void;
    onPlayingFromSelection(): void;
    onWordBoundary(segments: Segment[]): void;
    onIsSpeechActiveChange(): void;
    onIsAudioCurrentlyPlayingChange(): void;
    onEngineStateChange(): void;
    onPreviewVoicePlaying(): void;
    onEnabledLangsChange(): void;
    onAvailableVoicesChange(): void;
    onCurrentVoiceChange(): void;
    protected onNextGranularityClick_(): void;
    protected onPreviousGranularityClick_(): void;
    protected onSelectVoice_(event: CustomEvent<{
        selectedVoice: SpeechSynthesisVoice;
    }>): void;
    protected onVoiceLanguageToggle_(event: CustomEvent<{
        language: string;
    }>): void;
    protected onVoiceLanguageSelected_(event: CustomEvent<{
        language: string;
    }>): void;
    protected onReadabilityAnchorsReady_(): void;
    private syncSettings_;
    protected onSpeechRateChange_(event: CustomEvent<{
        data: number;
    }>): void;
    private restoreSettingsFromPrefs_;
    protected onLineSpacingChange_(event: CustomEvent<{
        data: number;
    }>): void;
    protected onLetterSpacingChange_(event: CustomEvent<{
        data: number;
    }>): void;
    protected onFontChange_(event: CustomEvent<{
        data: string;
    }>): void;
    protected onFontSizeChange_(event: CustomEvent<{
        data: boolean;
    }>): void;
    protected onFontSizeReset_(): void;
    private applyFontSize_;
    protected onThemeChange_(event: CustomEvent<{
        data: number;
    }>): void;
    protected onPresentationChange_(event: CustomEvent<{
        data: number;
    }>): void;
    protected onPinToggle_(): void;
    protected onTranslationRequested_(): void;
    protected onHighlightChange_(event: CustomEvent<{
        data: number;
    }>): void;
    protected onCloseAllMenus_(): void;
    protected onLineFocusStyleChange_(event: CustomEvent<{
        data: LineFocusStyle;
    }>): void;
    protected onLineFocusToggleChange_(event: CustomEvent<{
        data: boolean;
    }>): void;
    private updateLineFocusState_;
    protected onLineFocusMovementChange_(event: CustomEvent<{
        data: LineFocusMovement;
    }>): void;
    private setLineFocusStyle_;
    private onTextLocationsChange_;
    languageChanged(): void;
    protected computeHasContent(): boolean;
    protected computeIsContentDrawn_(): boolean;
    protected computeIsReadAloudPlayable(): boolean;
    protected computeIsLineFocusShowing_(): boolean;
    protected onKeyDown_(e: KeyboardEvent): void;
    protected onScrollerMousemove_(e: MouseEvent): void;
    protected onScrollerMouseleave_(e: MouseEvent): void;
    protected getImmersiveClass_(): string;
    protected getLineFocusClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'read-anything-app': AppElement;
    }
}
export {};
