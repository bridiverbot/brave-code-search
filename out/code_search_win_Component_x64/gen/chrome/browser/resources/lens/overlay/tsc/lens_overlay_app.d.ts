import './cursor_tooltip.js';
import './initial_gradient.js';
import './selection_overlay.js';
import './translate_button.js';
import '/lens/shared/searchbox_ghost_loader.js';
import '/lens/shared/searchbox_shared_style.css.js';
import '/lens/shared/searchbox/lens_searchbox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/icons.html.js';
import type { CrIconButtonElement } from '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { LensSearchboxElement } from '/lens/shared/searchbox/lens_searchbox.js';
import type { SearchboxGhostLoaderElement } from '/lens/shared/searchbox_ghost_loader.js';
import type { CursorTooltipElement } from './cursor_tooltip.js';
import type { InitialGradientElement } from './initial_gradient.js';
import { PageContentType } from './page_content_type.mojom-webui.js';
import type { SelectionOverlayElement } from './selection_overlay.js';
import type { TranslateButtonElement } from './translate_button.js';
export declare let INVOCATION_SOURCE: string;
export interface LensOverlayAppElement {
    $: {
        backgroundScrim: HTMLElement;
        closeButton: CrIconButtonElement;
        cursorTooltip: CursorTooltipElement;
        initialGradient: InitialGradientElement;
        moreOptions: HTMLElement;
        moreOptionsButton: CrIconButtonElement;
        moreOptionsMenu: HTMLElement;
        privacyNotice: HTMLElement;
        searchbox: LensSearchboxElement;
        searchboxContainer: HTMLElement;
        searchboxGhostLoader: SearchboxGhostLoaderElement;
        selectionOverlay: SelectionOverlayElement;
        toast: CrToastElement;
        translateButton: TranslateButtonElement;
        translateButtonContainer: HTMLElement;
    };
}
declare const LensOverlayAppElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class LensOverlayAppElement extends LensOverlayAppElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        autocompleteRequestStarted: {
            type: BooleanConstructor;
            value: boolean;
        };
        enableBorderGlow: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableCsbMotionTweaks: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        forceHideSearchBox: {
            type: BooleanConstructor;
            value: boolean;
        };
        isImageRendered: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        initialFlashAnimationHasEnded: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        sidePanelOpened: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        searchBoxHidden: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        privacyNoticeHidden: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        isClosing: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        moreOptionsMenuVisible: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        isPointerDown: {
            type: BooleanConstructor;
            value: boolean;
        };
        isTranslateButtonEnabled: {
            type: BooleanConstructor;
            value: () => boolean;
            readOnly: boolean;
            reflectToAttribute: boolean;
        };
        isTranslateModeActive: {
            type: BooleanConstructor;
            value: boolean;
        };
        shouldFadeOutButtons: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        isLensOverlayContextualSearchboxEnabled: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            readOnly: boolean;
            value: () => boolean;
        };
        isLensOverlayContextualSearchboxVisible: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        isRoutingToContextualTasks: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            readOnly: boolean;
            value: () => boolean;
        };
        darkMode: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        isSearchboxFocused: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: boolean;
        };
        suppressGhostLoader: {
            type: BooleanConstructor;
            value: boolean;
        };
        enableGhostLoader: {
            type: BooleanConstructor;
            value: () => boolean;
        };
        showGhostLoader: {
            type: BooleanConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        pageContentType: {
            type: NumberConstructor;
            value: PageContentType;
        };
        placeholderText: {
            type: StringConstructor;
            computed: string;
        };
        showErrorState: {
            type: BooleanConstructor;
            value: boolean;
            notify: boolean;
        };
        areLanguagePickersOpen: {
            type: BooleanConstructor;
            value: boolean;
        };
        toastMessage: {
            type: StringConstructor;
            value: string;
        };
        enableCloseButtonTweaks: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        enableVisualSelectionUpdates: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        searchboxSuggestionCount: {
            type: NumberConstructor;
            value: number;
        };
        canAnimateInCloseButton: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        overlayReshowInProgress: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        isPrivacyNoticeVisible: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
        hasPermissionsForSession: {
            type: BooleanConstructor;
            reflectToAttribute: boolean;
            value: () => boolean;
        };
    };
    enableBorderGlow: boolean;
    enableCsbMotionTweaks: boolean;
    isSearchboxFocused: boolean;
    suppressGhostLoader: boolean;
    showErrorState: boolean;
    private autocompleteRequestStarted;
    private isTranslateButtonEnabled;
    private isImageRendered;
    private initialFlashAnimationHasEnded;
    private sidePanelOpened;
    private searchBoxHidden;
    private privacyNoticeHidden;
    private forceHideSearchBox;
    private isClosing;
    private moreOptionsMenuVisible;
    private isTranslateModeActive;
    private isPointerDown;
    private shouldFadeOutButtons;
    private darkMode;
    private isLensOverlayContextualSearchboxEnabled;
    private isLensOverlayContextualSearchboxVisible;
    private isRoutingToContextualTasks;
    private autoFocusSearchbox;
    private toastMessage;
    private enableCloseButtonTweaks;
    private enableVisualSelectionUpdates;
    private searchboxSuggestionCount;
    private canAnimateInCloseButton;
    private pageContentType;
    private enableGhostLoader;
    private showGhostLoader;
    private placeholderText;
    private areLanguagePickersOpen;
    private overlayReshowInProgress;
    private isPrivacyNoticeVisible;
    private hasPermissionsForSession;
    private performanceTracker;
    private isBackendHandshakeComplete;
    private triggerSuggestOnInputReady;
    private eventTracker_;
    private browserProxy;
    private listenerIds;
    private invocationTime;
    private searchboxBoundingClientRectObserver;
    private resizeObserver;
    private updateCursorPositionRequestId?;
    private handleResizeRequestId?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    ready(): void;
    private handlePointerEnter;
    private handlePointerLeave;
    private handlePointerEnterBackgroundScrim;
    private handlePointerLeaveBackgroundScrim;
    private handlePointerEnterSelectionOverlay;
    private handlePointerLeaveSelectionOverlay;
    private handleSearchboxFocused;
    private handleQueryAutocomplete;
    private onSearchboxBoundsChanged;
    private focusShimmerOnSearchbox;
    private handleSearchboxBlurred;
    private handleEscapeSearchbox;
    private handleLanguagePickersOpened;
    private handleLanguagePickerClosed;
    private onBackgroundScrimClicked;
    private onCloseButtonClick;
    private onFeedbackClick;
    private onLearnMoreClick;
    private computeShowGhostLoader;
    private computePlaceholderText;
    private suppressGhostLoader_;
    private onPageContentTypeChanged;
    private onMoreOptionsButtonClick;
    private onMoreOptionsFocusout;
    private onMyActivityClick;
    private onBackendHandshakeComplete;
    private onNotifyResultsPanelOpened;
    private shouldShowContextualSearchBox;
    private handleSelectionStarted;
    private handleSelectionFinished;
    private onScreenshotRendered;
    private onInitialFlashAnimationEnd;
    private triggerSearchboxSuggestions;
    private focusSearchbox;
    private computeShouldFadeOutButtons;
    private computeShouldHideSearchBox;
    private computeShouldHidePrivacyNotice;
    private showToast;
    private onHideToastClick;
    private updateCursorPosition;
    private getSearchboxAriaDescription;
    private onPrivacyNoticeCancel;
    private onPrivacyNoticeContinue;
    setSearchboxFocusForTesting(isFocused: boolean): void;
    handleEscapeSearchboxForTesting(e: CustomEvent): void;
    getSidePanelOpenedForTesting(): boolean;
    getOverlayReshowInProgressForTesting(): boolean;
    getMoreOptionsMenuVisibleForTesting(): boolean;
    private handleResize;
    private updatePrivacyNoticePosition;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-overlay-app': LensOverlayAppElement;
    }
}
export {};
