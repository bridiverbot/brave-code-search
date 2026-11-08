import './logo.js';
import './ntp_searchbox.js';
import './left_hand_side.js';
import '/strings.m.js';
import { GlifAnimationState, VoiceSearchAction as ComposeVoiceSearchAction } from 'chrome://resources/cr_components/composebox/common.js';
import type { ComposeboxState } from 'chrome://resources/cr_components/composebox/common.js';
import type { VoicePermissionPromptState } from 'chrome://resources/cr_components/composebox/composebox_voice_search.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PageCallbackRouter as SearchboxPageCallbackRouter } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { SkColor } from 'chrome://resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import type { ActionChipClickDetail } from './action_chips/action_chips.js';
import { ActionChipsRetrievalState } from './action_chips/action_chips_proxy.js';
import type { LogoElement } from './logo.js';
import type { Theme } from './new_tab_page.mojom-webui.js';
import type { NtpSearchboxElement } from './ntp_searchbox.js';
/**
 * Elements on the NTP. This enum must match the numbering for NTPElement in
 * enums.xml. These values are persisted to logs. Entries should not be
 * renumbered, removed or reused.
 */
export declare enum NtpElement {
    OTHER = 0,
    BACKGROUND = 1,
    ONE_GOOGLE_BAR = 2,
    LOGO = 3,
    REALBOX = 4,
    MOST_VISITED = 5,
    MIDDLE_SLOT_PROMO = 6,// Obsolete
    MODULE = 7,
    CUSTOMIZE = 8,// Obsolete
    CUSTOMIZE_BUTTON = 9,
    CUSTOMIZE_DIALOG = 10,// Obsolete
    WALLPAPER_SEARCH_BUTTON = 11,
    ACTION_CHIPS = 12,
    THREADS_RAIL = 13,
    MAX_VALUE = 13
}
/**
 * Customize Chrome entry points. This enum must match the numbering for
 * NtpCustomizeChromeEntryPoint in enums.xml. These values are persisted to
 * logs. Entries should not be renumbered, removed or reused.
 */
export declare enum NtpCustomizeChromeEntryPoint {
    CUSTOMIZE_BUTTON = 0,
    MODULE = 1,
    URL = 2,
    WALLPAPER_SEARCH_BUTTON = 3,
    MAX_VALUE = 3
}
export declare const CUSTOMIZE_CHROME_BUTTON_ELEMENT_ID = "CustomizeButtonsHandler::kCustomizeChromeButtonElementId";
export declare const CONTEXTUAL_ENTRYPOINT_ELEMENT_ID = "NewTabPageUI::kRealboxContextualEntrypointElementId";
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface AppElement {
    $: {
        oneGoogleBarClipPath: HTMLElement;
        logo: LogoElement;
        searchbox: NtpSearchboxElement;
        rhsWrapper: HTMLElement;
        rhsContent: HTMLElement;
    };
}
export declare class AppElement extends AppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the secondary side can be shown based on the feature state and
         * the width available to the dropdown for the ntp searchbox.
         */
        realboxCanShowSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        composeButtonEnabled: {
            type: BooleanConstructor;
        };
        composeboxEnabled: {
            type: BooleanConstructor;
        };
        hasVoiceSearchError: {
            type: BooleanConstructor;
        };
        oneGoogleBarIframePath_: {
            type: StringConstructor;
        };
        oneGoogleBarLoaded_: {
            type: BooleanConstructor;
        };
        theme_: {
            type: ObjectConstructor;
        };
        showCustomize_: {
            type: BooleanConstructor;
        };
        showCustomizeChromeText_: {
            type: BooleanConstructor;
        };
        showWallpaperSearch_: {
            type: BooleanConstructor;
        };
        showVoiceSearchOverlay_: {
            type: BooleanConstructor;
        };
        showVoiceSearchScrim_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        voiceSearchCoherenceAnySearchboxExperimentEnabled_: {
            type: BooleanConstructor;
        };
        voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_: {
            type: BooleanConstructor;
        };
        voiceSearchCoherenceRealboxAutoEndpointEnabled_: {
            type: BooleanConstructor;
        };
        voiceSearchCoherenceRealboxHelperTextEnabled_: {
            type: BooleanConstructor;
        };
        androidSpeechRecognition_: {
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
        voiceQueryLengthLimit_: {
            type: NumberConstructor;
        };
        voiceAutoSubmitIdleTimeoutMs_: {
            type: NumberConstructor;
        };
        voiceManualSubmitIdleTimeoutMs_: {
            type: NumberConstructor;
        };
        searchboxCallbackRouter_: {
            type: ObjectConstructor;
        };
        showBackgroundImage_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        backgroundImageAttribution1_: {
            type: StringConstructor;
        };
        backgroundImageAttribution2_: {
            type: StringConstructor;
        };
        backgroundImageAttributionUrl_: {
            type: StringConstructor;
        };
        colorSourceIsBaseline: {
            type: BooleanConstructor;
        };
        logoColor_: {
            type: ObjectConstructor;
        };
        singleColoredLogo_: {
            type: BooleanConstructor;
        };
        realboxShown_: {
            type: BooleanConstructor;
        };
        /**
         * Whether the composebox has been opened at least once.
         */
        wasComposeboxOpened_: {
            type: BooleanConstructor;
        };
        showLensUploadDialog_: {
            type: BooleanConstructor;
        };
        showComposebox_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        logoEnabled_: {
            type: BooleanConstructor;
        };
        oneGoogleBarEnabled_: {
            type: BooleanConstructor;
        };
        shortcutsEnabled_: {
            type: BooleanConstructor;
        };
        shortcutsReorderEnabled_: {
            type: BooleanConstructor;
        };
        modulesEnabled_: {
            type: BooleanConstructor;
        };
        browserPromoType_: {
            type: StringConstructor;
        };
        browserPromoLimit_: {
            type: NumberConstructor;
        };
        browserPromoCompletedLimit_: {
            type: NumberConstructor;
        };
        showBrowserPromo_: {
            type: BooleanConstructor;
        };
        caretAnimationsEnabled_: {
            type: BooleanConstructor;
        };
        usePecApi_: {
            type: BooleanConstructor;
        };
        smartTabSharingVisible_: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled_: {
            type: BooleanConstructor;
        };
        modulesShownToUser: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        microsoftModuleEnabled_: {
            type: BooleanConstructor;
        };
        microsoftAuthIframePath_: {
            type: StringConstructor;
        };
        multiLineEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Modules are hidden until loaded.
         */
        modulesLoaded_: {
            type: BooleanConstructor;
        };
        /**
         * If true, renders additional elements that were not deemed crucial to
         * to show up immediately on load.
         */
        lazyRender_: {
            type: BooleanConstructor;
        };
        scrolledToTop_: {
            type: BooleanConstructor;
        };
        wallpaperSearchButtonAnimationEnabled_: {
            type: BooleanConstructor;
        };
        wallpaperSearchButtonEnabled_: {
            type: BooleanConstructor;
        };
        showWallpaperSearchButton_: {
            type: BooleanConstructor;
        };
        isActionChipsVisible_: {
            type: BooleanConstructor;
        };
        isFooterVisible_: {
            type: BooleanConstructor;
        };
        ntpRealboxNextEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxCyclingPlaceholders_: {
            type: BooleanConstructor;
        };
        ntpNextFeaturesEnabled_: {
            type: BooleanConstructor;
        };
        maxTilesInCollapsedState_: {
            type: NumberConstructor;
        };
        maxShortcutsInExpandedState_: {
            type: NumberConstructor;
        };
        maxMostVisitedTilesInExpandedState_: {
            type: NumberConstructor;
        };
        maxEnterpriseShortcuts_: {
            type: NumberConstructor;
        };
        containerFocused_: {
            type: BooleanConstructor;
        };
        composeboxFocused_: {
            type: BooleanConstructor;
        };
        pageContentHidden_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        composeboxOutsideClickEnabled_: {
            type: BooleanConstructor;
        };
        /**
         * Whether the scrim is shown in Realbox Next.
         */
        showScrim_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        contextMenuGlifAnimationState_: {
            type: StringConstructor;
        };
        undoToastCallback_: {
            type: ObjectConstructor;
        };
        undoToastMessage_: {
            type: StringConstructor;
        };
        /**
         * Whether to show the AIM threads rail when composebox is open.
         */
        enableThreadsRail_: {
            type: BooleanConstructor;
        };
        rhsWidth_: {
            type: NumberConstructor;
        };
        selectedCustomizeDialogPage_: {
            type: StringConstructor;
        };
        modulesLoadedStatus_: {
            type: NumberConstructor;
            reflect: boolean;
        };
        energyEffectEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectVariant_: {
            type: StringConstructor;
            reflect: boolean;
        };
        showCustomizeButton_: {
            type: BooleanConstructor;
        };
    };
    accessor hasVoiceSearchError: boolean;
    accessor realboxCanShowSecondarySide: boolean;
    accessor composeButtonEnabled: boolean;
    accessor composeboxEnabled: boolean;
    protected accessor oneGoogleBarIframePath_: string | undefined;
    protected accessor oneGoogleBarLoaded_: boolean;
    protected accessor theme_: Theme | null;
    protected accessor showCustomize_: boolean;
    protected accessor showCustomizeChromeText_: boolean;
    protected accessor showWallpaperSearch_: boolean;
    protected accessor showVoiceSearchOverlay_: boolean;
    protected accessor showVoiceSearchScrim_: boolean;
    protected accessor voiceSearchCoherenceAnySearchboxExperimentEnabled_: boolean;
    protected accessor voiceSearchCoherenceSearchboxWithLiveTranscriptionEnabled_: boolean;
    protected accessor voiceSearchCoherenceRealboxAutoEndpointEnabled_: boolean;
    protected accessor voiceSearchCoherenceRealboxHelperTextEnabled_: boolean;
    protected accessor androidSpeechRecognition_: boolean;
    protected accessor voiceSearchTranscript_: string;
    protected accessor voiceSearchReceivedSpeech_: boolean;
    protected accessor voiceSearchListening_: boolean;
    protected accessor voiceQueryLengthLimit_: number;
    protected accessor voiceAutoSubmitIdleTimeoutMs_: number;
    protected accessor voiceManualSubmitIdleTimeoutMs_: number;
    protected accessor showBackgroundImage_: boolean;
    protected accessor backgroundImageAttribution1_: string;
    protected accessor backgroundImageAttribution2_: string;
    protected accessor backgroundImageAttributionUrl_: string;
    protected accessor colorSourceIsBaseline: boolean;
    protected accessor logoColor_: SkColor | null;
    protected accessor singleColoredLogo_: boolean;
    protected accessor realboxShown_: boolean;
    protected accessor wasComposeboxOpened_: boolean;
    protected accessor showLensUploadDialog_: boolean;
    protected accessor showComposebox_: boolean;
    protected accessor caretAnimationsEnabled_: boolean;
    protected accessor usePecApi_: boolean;
    protected accessor smartTabSharingVisible_: boolean;
    protected accessor contextManagementInComposeboxEnabled_: boolean;
    protected accessor logoEnabled_: boolean;
    protected accessor oneGoogleBarEnabled_: boolean;
    protected accessor shortcutsEnabled_: boolean;
    protected accessor shortcutsReorderEnabled_: boolean;
    protected accessor modulesEnabled_: boolean;
    protected accessor browserPromoType_: string;
    protected accessor browserPromoLimit_: number;
    protected accessor browserPromoCompletedLimit_: number;
    protected accessor showBrowserPromo_: boolean;
    protected accessor modulesShownToUser: boolean;
    protected accessor microsoftModuleEnabled_: boolean;
    protected accessor microsoftAuthIframePath_: string;
    protected accessor multiLineEnabled_: boolean;
    protected accessor modulesLoaded_: boolean;
    protected accessor lazyRender_: boolean;
    protected accessor scrolledToTop_: boolean;
    protected accessor wallpaperSearchButtonAnimationEnabled_: boolean;
    protected accessor wallpaperSearchButtonEnabled_: boolean;
    protected accessor showWallpaperSearchButton_: boolean;
    protected accessor isActionChipsVisible_: boolean;
    protected accessor isFooterVisible_: boolean;
    protected accessor ntpRealboxNextEnabled_: boolean;
    protected accessor searchboxCyclingPlaceholders_: boolean;
    protected accessor ntpNextFeaturesEnabled_: boolean;
    protected accessor maxTilesInCollapsedState_: number;
    protected accessor maxShortcutsInExpandedState_: number;
    protected accessor maxMostVisitedTilesInExpandedState_: number;
    protected accessor maxEnterpriseShortcuts_: number;
    protected accessor containerFocused_: boolean;
    protected accessor composeboxFocused_: boolean;
    protected accessor pageContentHidden_: boolean;
    protected accessor composeboxOutsideClickEnabled_: boolean;
    protected accessor showScrim_: boolean;
    protected realboxContextMenuAnimationAllowed_: boolean;
    protected accessor contextMenuGlifAnimationState_: GlifAnimationState;
    protected accessor undoToastCallback_: (() => void) | null;
    protected accessor undoToastMessage_: string | null;
    protected accessor enableThreadsRail_: boolean;
    protected accessor energyEffectEnabled_: boolean;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor energyEffectVariant_: string;
    protected accessor showCustomizeButton_: boolean;
    protected contextMenuAnimationLimitingEnabled_: boolean;
    protected accessor searchboxCallbackRouter_: SearchboxPageCallbackRouter;
    protected accessor rhsWidth_: number | null;
    private voiceSearchActivatedByKeyboard_;
    private accessor selectedCustomizeDialogPage_;
    private accessor modulesLoadedStatus_;
    private callbackRouter_;
    private pageHandler_;
    private customizeButtonsCallbackRouter_;
    private customizeButtonsHandler_;
    private backgroundManager_;
    private connectMicrosoftAuthToParentDocumentListenerId_;
    private setThemeListenerId_;
    private setCustomizeChromeSidePanelVisibilityListener_;
    private setWallpaperSearchButtonVisibilityListener_;
    private setActionChipsVisibilityListenerId_;
    private footerVisibilityUpdatedListener_;
    private eventTracker_;
    private shouldPrintPerformance_;
    private backgroundImageLoadStartEpoch_;
    private backgroundImageLoadStart_;
    private showWebstoreToastListenerId_;
    private pendingUndoToasts_;
    private rhsWrapperResizeObserver_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    onVoiceSearchError(): void;
    protected onVoiceSearchRestart_(): void;
    private updateOneGoogleBarAppearance_;
    private computeShowCustomizeChromeText_;
    private computeBackgroundImageAttribution1_;
    private computeBackgroundImageAttribution2_;
    private computeBackgroundImageAttributionUrl_;
    private computeRealboxShown_;
    private computeModulesLoaded_;
    private onRealboxCanShowSecondarySideChanged_;
    private observeRhsWrapperWidth_;
    protected onRhsContentScroll_(): void;
    private onLazyRendered_;
    private maybeRegisterCustomizeButtonHelpBubble_;
    protected onActionChipClick_(e: CustomEvent<ActionChipClickDetail>): void;
    private isUnsupportedSearchboxSurface_;
    protected onOpenComposebox_(e: CustomEvent<ComposeboxState | null>): void;
    private openComposeboxForActionChip_;
    protected onContextMenuEntrypointClick_(): void;
    protected openComposebox_(state?: ComposeboxState | null): Promise<void>;
    private ensureComposeboxOpen_;
    protected closeComposebox_(): void;
    protected onScrimClick_(): void;
    protected onComposeboxOutsideClick_(): void;
    protected onComposeboxContextMenuOpened_(): void;
    protected onCloseComposebox_(e: CustomEvent<{
        composeboxText?: string;
    }>): void;
    protected onOpenVoiceSearch_(): void;
    private openVoiceSearch_;
    protected onComposeVoiceSearchAction_(e: CustomEvent<{
        value: ComposeVoiceSearchAction;
    }>): void;
    protected onOpenLensSearch_(): Promise<void>;
    protected onCloseLensSearch_(): void;
    protected onCustomizeClick_(): void;
    protected computeShowWallpaperSearchButton_(): boolean;
    protected onWallpaperSearchClick_(): void;
    onVoiceSearchOverlayClose(): void;
    protected onVoicePermissionChanged_(e: CustomEvent<VoicePermissionPromptState>): void;
    protected onVoiceSearchCancel_(): void;
    protected onVoiceSearchTranscriptUpdate_(e: CustomEvent<string>): void;
    protected onVoiceSearchSpeechReceived_(): void;
    protected showVoiceSearchGlow_(): boolean;
    protected onVoiceSearchDialogClick_(e: MouseEvent): void;
    protected onVoiceSearchFinalResult_(e: CustomEvent<string>): void;
    protected onVoiceSearchRecordingStopped_(e: CustomEvent<string>): void;
    /**
     * Handles <CTRL> + <SHIFT> + <.> (also <CMD> + <SHIFT> + <.> on mac) to open
     * voice search.
     */
    private onWindowKeydown_;
    private rgbaOrInherit_;
    private computeShowBackgroundImage_;
    private onShowBackgroundImageChange_;
    private onThemeChange_;
    private onThemeLoaded_;
    private onModulesLoadedChange_;
    /**
     * Set the #backgroundImage |path| only when different and non-empty. Reset
     * the customize dialog background selection if the dialog is closed.
     *
     * The ntp-untrusted-iframe |path| is set directly. When using a data binding
     * instead, the quick updates to the |path| result in iframe loading an error
     * page.
     */
    private updateBackgroundImagePath_;
    private computeColorSourceIsBaseline;
    private computeLogoColor_;
    private computeSingleColoredLogo_;
    /**
     * Sends the command received from the given source and origin to the browser.
     * Relays the browser response to whether or not a promo containing the given
     * command can be shown back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the response back to the source promo
     * frame and should not be used for anything else.
     * @param  messageData Data received from the source promo frame.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    private canShowPromoWithBrowserCommand_;
    /**
     * Sends the command and the accompanying mouse click info received from the
     * promo of the given source and origin to the browser. Relays the execution
     * status response back to the source promo frame. |commandSource| and
     * |commandOrigin| are used only to send the execution status response back to
     * the source promo frame and should not be used for anything else.
     * @param commandData Command and mouse click info.
     * @param commandSource Source promo frame.
     * @param commandOrigin Origin of the source promo frame.
     */
    private executePromoBrowserCommand_;
    /**
     * Handles messages from the OneGoogleBar iframe. The messages that are
     * handled include show bar on load and overlay updates.
     *
     * 'overlaysUpdated' message includes the updated array of overlay rects that
     * are shown.
     */
    private handleOneGoogleBarMessage_;
    protected onModulesLoaded_(e: CustomEvent<number | null>): void;
    protected computeShowBrowserPromo_(): boolean;
    protected recordBrowserPromoMetrics_(): void;
    protected onCustomizeModule_(): void;
    private setCustomizeChromeSidePanelVisible_;
    private printPerformanceDatum_;
    /**
     * Prints performance measurements to the console. Also, installs  performance
     * observer to continuously print performance measurements after.
     */
    private printPerformance_;
    protected onWebstoreToastButtonClick_(): void;
    private onWindowClick_;
    protected isThemeDark_(): boolean;
    protected showActionChipsBackground_(): boolean;
    protected showThemeAttribution_(): boolean;
    protected onSearchboxContainerFocusin_(e: FocusEvent): void;
    protected onSearchboxContainerFocusout_(): void;
    protected onModulesShownToUserChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private initializeContextMenuAnimationState_;
    protected onActionChipsRetrievalStateChanged_(e: CustomEvent<{
        state: ActionChipsRetrievalState;
    }>): void;
    /**
     * Called whenever an auto-removed feature is being processed and the undo
     * toast needs to be shown. This will queue up the toast in the pending FIFO
     * list and then call the processing function.
     *
     * @param undoToastContext - An event that contains the undo toast message and
     *                           the undo callback function.
     */
    protected onMostVisitedAutoRemoved_(undoToastContext: CustomEvent<{
        message: string;
        undo: () => void;
    }>): void;
    protected onModulesAutoRemoved_(undoToastContext: CustomEvent<{
        message: string;
        undo: () => void;
    }>): void;
    protected onActionChipsDisabled_(undoToastContext: CustomEvent<{
        message: string;
        undo: () => void;
    }>): void;
    protected showUndoToast_(undoToastContext: CustomEvent<{
        message: string;
        undo: () => void;
    }>): void;
    /**
     * Called whenever the pending toasts need to be processed. This is called
     * whenever a new toast is added to the pending list through an auto-removal
     * event, or when the user clicks on the undo button in the toast.
     *
     * In case the undo toast is already open, then it's a no-op to avoid showing
     * multiple toasts at the same time. Otherwise, the first pending toast is
     * popped and shown.
     */
    private processPendingUndoToasts_;
    /**
     * Processes an auto-removal undo click. It will hide the toast, call the
     * undo callback, and call the processing function to handle the next queued
     * toast (if any).
     */
    protected onUndoButtonClick_(): void;
    private onShowComposeboxChange_;
    private hasRealboxOverride;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-app': AppElement;
    }
}
export {};
