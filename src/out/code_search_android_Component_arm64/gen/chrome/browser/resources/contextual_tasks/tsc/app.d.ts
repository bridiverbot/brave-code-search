import './composebox.js';
import './onboarding_tooltip.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import type { ContextualTasksComposeboxElement } from './composebox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import './error_dialog.js';
import './error_page.js';
import './ghost_loader.js';
import './top_toolbar.js';
import type { LoadAbortEvent, LoadEvent, NewWindowEvent, PermissionRequestEvent } from '/shared/guest_view/slim_webview.js';
import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Uuid } from 'chrome://resources/mojo/mojo/public/mojom/base/uuid.mojom-webui.js';
import type { Url } from 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
import { PostMessageHandler } from './post_message_handler.js';
import type { Rect } from './post_message_handler.js';
import type { WebViewType } from './web_view_type.js';
declare global {
    interface HTMLElementEventMap {
        'loadstart': chrome.webviewTag.LoadStartEvent | LoadEvent;
        'loadredirect': chrome.webviewTag.LoadRedirectEvent;
        'loadabort': chrome.webviewTag.LoadAbortEvent | LoadAbortEvent;
        'loadcommit': chrome.webviewTag.LoadCommitEvent | LoadEvent;
        'newwindow': chrome.webviewTag.NewWindowEvent | NewWindowEvent;
        'permissionrequest': chrome.webviewTag.PermissionRequestEvent | PermissionRequestEvent;
    }
}
type ChromeEventFunctionType<T> = T extends ChromeEvent<infer ListenerType> ? ListenerType : never;
export type OnBeforeRequestDetails = Parameters<ChromeEventFunctionType<typeof chrome.webRequest.onBeforeRequest>>[0];
export interface ContextualTasksAppElement {
    $: {
        threadFrame: WebViewType;
        composeboxHeaderWrapper: HTMLElement;
        composeboxHeader: HTMLElement;
        flexCenterContainer: HTMLElement;
        composebox: ContextualTasksComposeboxElement;
    };
}
declare const ContextualTasksAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class ContextualTasksAppElement extends ContextualTasksAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isShownInTab_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        threadTitle_: {
            type: StringConstructor;
        };
        darkMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isErrorPageVisible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInBasicMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInputHidden_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isZeroState_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inNlm_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLoadError_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isAiPage_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isUserSignedIn_: {
            type: BooleanConstructor;
        };
        isLensOverlayShowing_: {
            type: BooleanConstructor;
        };
        isOverlayOpenForAimVisualSearch_: {
            type: BooleanConstructor;
        };
        isGhostLoaderVisible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isErrorDialogVisible_: {
            type: BooleanConstructor;
        };
        enableNativeZeroStateSuggestions_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableBasicMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableBasicModeZOrder_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInputLocked_: {
            type: BooleanConstructor;
        };
        isLoadingZeroStateFromResults_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        forcedComposeboxBounds_: {
            type: ObjectConstructor;
        };
        userName_: {
            type: StringConstructor;
        };
        friendlyZeroStateTitleBeforeName_: {
            type: StringConstructor;
        };
        friendlyZeroStateTitleAfterName_: {
            type: StringConstructor;
        };
        friendlyZeroStateTitle: {
            type: StringConstructor;
        };
        friendlyZeroStateSubtitle: {
            type: StringConstructor;
        };
        occluders_: {
            type: ArrayConstructor;
        };
        showOnboardingTooltip_: {
            type: BooleanConstructor;
        };
        askGTooltipTarget_: {
            type: ObjectConstructor;
        };
        composeboxElement_: {
            type: ObjectConstructor;
        };
        energyEffectEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showSmartTabSharingTryItIph_: {
            type: BooleanConstructor;
        };
        showSmartTabSharingDefaultOnIph_: {
            type: BooleanConstructor;
        };
        composeboxHovered_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isAimEligible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isDomContentLoaded_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isInitialFrameLoad_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        onboardingTooltipShowing_: {
            type: BooleanConstructor;
        };
        guestWidth_: {
            type: NumberConstructor;
        };
        entryPoint_: {
            type: StringConstructor;
        };
    };
    protected accessor energyEffectEnabled_: boolean;
    protected accessor showOnboardingTooltip_: boolean;
    protected accessor askGTooltipTarget_: Element | null;
    protected accessor composeboxElement_: Element | null;
    protected accessor showSmartTabSharingTryItIph_: boolean;
    protected accessor showSmartTabSharingDefaultOnIph_: boolean;
    protected accessor onboardingTooltipShowing_: boolean;
    protected accessor userName_: string;
    protected accessor friendlyZeroStateTitleBeforeName_: string;
    protected accessor friendlyZeroStateTitleAfterName_: string;
    private browserProxy_;
    private toolbarBrowserProxy_;
    private toolbarListenerIds_;
    protected accessor enableBasicMode_: boolean;
    protected accessor enableBasicModeZOrder_: boolean;
    private nlmUrlParam_;
    private enableCustomNlmUi_;
    protected accessor isLoadError_: boolean;
    protected accessor isAiPage_: boolean;
    protected accessor isUserSignedIn_: boolean;
    protected accessor isAimEligible_: boolean;
    protected accessor isLensOverlayShowing_: boolean;
    protected accessor isOverlayOpenForAimVisualSearch_: boolean;
    protected accessor isShownInTab_: boolean;
    protected accessor entryPoint_: string;
    protected accessor darkMode_: boolean;
    protected accessor isErrorDialogVisible_: boolean;
    private pendingUrl_;
    private isCookieSyncComplete_;
    protected accessor threadTitle_: string;
    protected accessor isInBasicMode_: boolean;
    protected accessor isInputHidden_: boolean;
    protected accessor isErrorPageVisible_: boolean;
    protected accessor isZeroState_: boolean;
    protected accessor enableNativeZeroStateSuggestions_: boolean;
    protected accessor inNlm_: boolean;
    protected accessor isGhostLoaderVisible_: boolean;
    protected accessor isInputLocked_: boolean;
    protected accessor isLoadingZeroStateFromResults_: boolean;
    protected accessor forcedComposeboxBounds_: Rect | null;
    protected accessor occluders_: Rect[] | null;
    protected accessor composeboxHovered_: boolean;
    protected accessor guestWidth_: number;
    protected accessor friendlyZeroStateSubtitle: string;
    protected accessor friendlyZeroStateTitle: string;
    protected accessor isDomContentLoaded_: boolean;
    protected accessor isInitialFrameLoad_: boolean;
    private isFrameLoading;
    private isSubmittingFromComposebox_;
    private listenerIds_;
    private eventTracker_;
    private commonSearchParams_;
    private postMessageHandler_;
    private signInDomains_;
    private host_;
    private enableGhostLoader_;
    private popStateFinishedCallbackForTesting_;
    private onLoadStartFinishedCallbackForTesting_;
    private hasFinishedTopLevelNavigationForTesting_;
    private forceBasicModeIfOpeningThreadHistory_;
    private isNavigatingFromAiPage_;
    private pendingBasicMode_;
    private lastThreadFrameLoadStartEvent_;
    private contextManagementInComposeboxEnabled_;
    private constructorStartTime_;
    private isFirstLoadCommit_;
    constructor();
    private updateThemeFromUrl;
    protected get composebox_(): ContextualTasksComposeboxElement | null;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private get isAskGEntryPointEligible_();
    private updateTooltipVisibility_;
    protected onOnboardingTooltipDismissed_(): void;
    private playZeroStateAnimations_;
    private clearZeroStateAnimations_;
    protected onComposeboxContextMenuOpened_(): void;
    private setStyleVariable;
    private onThreadFrameLoadStart;
    private onThreadFrameLoadRedirect;
    private onThreadFrameLoadCommit;
    private onThreadFrameContentLoad;
    private onThreadFrameLoadAbort;
    private maybeOnThreadFrameTopLevelNavigation;
    private onThreadFrameTopLevelNavigation;
    private onUpdateComposeboxPosition_;
    private onInputPlateBoundsUpdate_;
    private playComposeboxAiohFadeInAnimation_;
    protected isComposeboxHidden_(): boolean;
    private forceComposeboxFocus;
    protected isComposeboxHeaderWrapperHidden_(): boolean;
    private checkInNlm_;
    private shouldSetForceComposeboxBounds_;
    getComposeboxBoundsStyles(): string;
    protected getBannerPromoBoundsStyles_(): string;
    getThreadFrameStyles(): string;
    protected getComposeboxBoundsRelativeToThreadFrame_(): {
        top: number;
        left: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
    } | null;
    protected onNewThreadClick_(): Promise<void>;
    resetForNewThread(taskId: Uuid, threadUrl: Url): void;
    get isLoadErrorForTesting(): boolean;
    getEnableNativeZeroStateSuggestionsForTesting(): boolean;
    setEnableNativeZeroStateSuggestionsForTesting(enable: boolean): void;
    setIsInBasicModeForTesting(isInBasicMode: boolean): void;
    getForcedComposeboxBoundsForTesting(): Rect | null;
    private postAimMessage;
    private maybeLoadPendingUrl_;
    private onHandshakeComplete;
    private onCookieSyncCompleted;
    private updateSidePanelState;
    private updateCommonSearchParams;
    private setupWebviewRequestOverrides;
    private removeWebviewRequestOverrides;
    private addCommonSearchParams;
    private onBeforeRequest;
    getThreadUrlForTesting(): string;
    protected onErrorDialogClose_(): void;
    updateTooltipVisibilityForTesting(): void;
    private getOnboardingTooltip_;
    get numberOfTimesTooltipShownForTesting(): number;
    set numberOfTimesTooltipShownForTesting(n: number);
    set userDismissedTooltipForTesting(dismissed: boolean);
    get tooltipResizeObserverForTesting(): ResizeObserver | null;
    private updateBasicModeAfterNavigation;
    private setIsGhostLoaderVisible;
    private hasThreadHistoryParams;
    setPopStateFinishedCallbackForTesting(callback: () => void): void;
    setOnLoadStartFinishedCallbackForTesting(callback: () => void): void;
    getHasFinishedTopLevelNavigationForTesting(): boolean;
    setMockPostMessageHandlerForTesting(mockPostMessageHandler: PostMessageHandler): void;
    setIsNavigatingFromAiPageForTesting(isNavigatingForTesting: boolean): void;
    removeThreadFrameListenersForTesting(): void;
    isNavigatingForTesting(): boolean;
    onBeforeRequestForTesting(details: OnBeforeRequestDetails): chrome.webRequest.BlockingResponse;
    getIsFrameLoadingForTesting(): boolean;
    onThreadFrameLoadStartForTesting(event: chrome.webviewTag.LoadStartEvent | LoadEvent): void;
    onThreadFrameLoadCommitForTesting(event: chrome.webviewTag.LoadCommitEvent | LoadEvent): void;
    onThreadFrameContentLoadForTesting(): void;
    onThreadFrameLoadAbortForTesting(event: chrome.webviewTag.LoadAbortEvent | LoadAbortEvent): Promise<void>;
    setIsZeroStateForTesting(isZeroState: boolean): void;
    setIsInitialFrameLoadForTesting(isInitialFrameLoad: boolean): void;
    setInNlmForTesting(inNlm: boolean): void;
    setForcedComposeboxBoundsForTesting(bounds: Rect | null): void;
    onInputPlateBoundsUpdateForTesting(inputRect?: Rect, occluders?: Rect[]): void;
    getOccludersForTesting(): Rect[] | null;
    getPendingBasicModeForTesting(): boolean | null;
    getDarkModeForTesting(): boolean;
    setIsAiPageForTesting(isAiPage: boolean): void;
    setPendingUrlForTesting(pendingUrl: string): void;
    setPlayZeroStateAnimationsForTesting(fn: () => void): void;
    onThreadFrameTopLevelNavigationForTesting(event: chrome.webviewTag.LoadStartEvent | Event): Promise<void>;
    getIsDomContentLoadedForTesting(): boolean;
    private updateBackgroundColor_;
    protected onStsTryItDismiss_(): void;
    protected onStsTryItAccept_(): void;
    private hideStsTryItPromo_;
    protected onStsDefaultOnDismiss_(): void;
    protected onStsDefaultOnAccept_(): void;
    private hideStsDefaultOnPromo_;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-app': ContextualTasksAppElement;
    }
}
export {};
