import './omnibox.js';
import './composebox.js';
import './fre_modal.js';
import './fre_chin.js';
import '/strings.m.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/most_visited/most_visited.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import type { ComposeboxState } from '//resources/cr_components/composebox/common.js';
import type { VoicePermissionPromptState } from '//resources/cr_components/composebox/composebox_voice_search.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { FreStage } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { PageCallbackRouter } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { OmniboxEverywhereComposeboxElement } from './composebox.js';
import { FreChinMode } from './fre_chin.js';
import type { ShowHotkeyDropdownDetail } from './fre_chin.js';
import type { OmniboxEverywhereOmniboxElement } from './omnibox.js';
export interface OmniboxEverywhereAppElement {
    $: {
        content: HTMLElement;
        dialogAnchor: HTMLElement;
    };
}
declare const OmniboxEverywhereAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class OmniboxEverywhereAppElement extends OmniboxEverywhereAppElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    get composebox(): OmniboxEverywhereComposeboxElement | null;
    get searchbox(): OmniboxEverywhereOmniboxElement | null;
    static get properties(): {
        isComposeboxMode_: {
            type: BooleanConstructor;
        };
        searchboxLayoutMode_: {
            type: StringConstructor;
        };
        caretAnimationsEnabled_: {
            type: BooleanConstructor;
        };
        disableComposeboxAnimation_: {
            type: BooleanConstructor;
        };
        usePecApi_: {
            type: BooleanConstructor;
        };
        isOblongShape_: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled_: {
            type: BooleanConstructor;
        };
        composeboxState_: {
            type: ObjectConstructor;
        };
        showVoiceSearchOverlay_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasVoiceSearchError_: {
            type: BooleanConstructor;
        };
        voiceSearchTranscript_: {
            type: StringConstructor;
        };
        voiceSearchReceivedSpeech_: {
            type: BooleanConstructor;
        };
        voiceSearchListening_: {
            type: BooleanConstructor;
        };
        voiceIdleTimeoutMs_: {
            type: NumberConstructor;
        };
        voiceQueryLengthLimit_: {
            type: NumberConstructor;
        };
        callbackRouter_: {
            type: ObjectConstructor;
        };
        hasMostVisitedTiles_: {
            type: BooleanConstructor;
        };
        mostVisitedEnabled_: {
            type: BooleanConstructor;
        };
        smallLoomnibox_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        dynamicSizing_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        dynamicSizingWidth_: {
            type: NumberConstructor;
            reflect: boolean;
            attribute: string;
        };
        smallFont_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        hideTitle_: {
            type: BooleanConstructor;
        };
        freStage_: {
            type: NumberConstructor;
        };
        hotkeyTokens_: {
            type: ArrayConstructor;
        };
        isHotkeyDropdownOpen_: {
            type: BooleanConstructor;
        };
        isActive_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isPendingScreenshot_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isHotkeyDropdownOpen_: boolean;
    protected accessor isActive_: boolean;
    protected accessor isComposeboxMode_: boolean;
    protected accessor isPendingScreenshot_: boolean;
    protected accessor searchboxLayoutMode_: string;
    protected accessor caretAnimationsEnabled_: boolean;
    protected accessor disableComposeboxAnimation_: boolean;
    protected accessor usePecApi_: boolean;
    protected accessor isOblongShape_: boolean;
    protected accessor contextManagementInComposeboxEnabled_: boolean;
    protected accessor composeboxState_: ComposeboxState | null;
    protected accessor showVoiceSearchOverlay_: boolean;
    protected accessor hasVoiceSearchError_: boolean;
    protected accessor voiceSearchTranscript_: string;
    protected accessor voiceSearchReceivedSpeech_: boolean;
    protected accessor voiceSearchListening_: boolean;
    protected accessor voiceIdleTimeoutMs_: number;
    protected accessor voiceQueryLengthLimit_: number;
    protected accessor callbackRouter_: PageCallbackRouter;
    protected accessor mostVisitedEnabled_: boolean;
    protected accessor smallLoomnibox_: boolean;
    protected accessor dynamicSizing_: boolean;
    protected accessor dynamicSizingWidth_: number;
    protected accessor smallFont_: boolean;
    protected accessor hideTitle_: boolean;
    protected accessor hasMostVisitedTiles_: boolean;
    protected accessor freStage_: FreStage;
    protected accessor hotkeyTokens_: string[];
    private isPersistentMode_;
    private screenshotOriginWasSearchbox_;
    private eventTracker_;
    private mostVisitedListenerId_;
    private searchboxListenerIds_;
    private omniboxEverywhereListenerIds_;
    private wasJustActivated_;
    private activationTimeoutId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private setupListeners_;
    private removeListeners_;
    /**
     * Opens the Composebox view and hydrates it with any initial contextual
     * state (e.g., pre-uploaded browser files, tab context, active tool modes).
     *
     * This is the centralized transition point invoked by both:
     * 1. Native Views/C++ via Mojo callback (openComposebox listener).
     * 2. WebUI internal action handlers and DOM custom events.
     */
    openComposebox(state?: Partial<ComposeboxState>, isPendingScreenshot?: boolean): Promise<void>;
    protected isFreIntroModal_(): boolean;
    protected isFreChin_(): boolean;
    protected isMostVisitedHidden_(): boolean;
    protected isFreShortcutSetupChin_(): boolean;
    protected isFreShortcutReminderChin_(): boolean;
    protected getFreChinMode_(): FreChinMode;
    protected getMaxMostVisitedTiles_(): number;
    protected onMostVisitedCloseClick_(): void;
    private setIsComposebox_;
    protected onFreClose_(): void;
    protected onFreShowHotkeyDropdown_(e: CustomEvent<ShowHotkeyDropdownDetail>): Promise<void>;
    protected onFreOpenSettings_(): void;
    protected onOpenComposebox_(e: CustomEvent<ComposeboxState>): Promise<void>;
    protected onCloseComposebox_(): Promise<void>;
    private onKeyDown_;
    protected onComposeboxSubmit_(): Promise<void>;
    private shouldAutoFocusInput_;
    private focusActiveInput_;
    private onWindowFocus_;
    private onWindowBlur_;
    private onAppClick_;
    private clearActivationTimeout_;
    private onVisibilitychange_;
    protected onOpenVoiceSearch_(): Promise<void>;
    protected onVoiceSearchOverlayClose_(): void;
    protected onVoicePermissionChanged_(e: CustomEvent<VoicePermissionPromptState>): void;
    protected onVoiceSearchCancel_(): void;
    protected onVoiceSearchError_(): void;
    protected onVoiceSearchRestart_(): void;
    protected onVoiceSearchTranscriptUpdate_(e: CustomEvent<string>): void;
    protected onVoiceSearchSpeechReceived_(): void;
    protected onVoiceSearchDialogClick_(e: MouseEvent): void;
    private handleVoiceSearchResult_;
    protected onVoiceSearchFinalResult_(e: CustomEvent<string>): void;
    protected onVoiceSearchRecordingStopped_(e: CustomEvent<string>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-everywhere-app': OmniboxEverywhereAppElement;
    }
}
export {};
