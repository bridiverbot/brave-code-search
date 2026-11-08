import './side_panel_ghost_loader.js';
import './side_panel_error_page.js';
import './feedback_toast.js';
import '/strings.m.js';
import '/lens/shared/searchbox_ghost_loader.js';
import '/lens/shared/searchbox_shared_style.css.js';
import '//resources/cr_components/composebox/composebox.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '/lens/shared/searchbox/lens_searchbox.js';
import type { ComposeboxElement } from '//resources/cr_components/composebox/composebox.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { LensSearchboxElement } from '/lens/shared/searchbox/lens_searchbox.js';
import type { SearchboxGhostLoaderElement } from '/lens/shared/searchbox_ghost_loader.js';
import { PageContentType } from '../page_content_type.mojom-webui.js';
import type { FeedbackToastElement } from './feedback_toast.js';
import type { SidePanelErrorPageElement } from './side_panel_error_page.js';
import type { SidePanelGhostLoaderElement } from './side_panel_ghost_loader.js';
export interface LensSidePanelAppElement {
    $: {
        composebox: ComposeboxElement;
        feedbackToast: FeedbackToastElement;
        ghostLoader: SidePanelGhostLoaderElement;
        messageToast: CrToastElement;
        messageToastDismissButton: CrButtonElement;
        errorPage: SidePanelErrorPageElement;
        results: HTMLIFrameElement;
        searchbox: LensSearchboxElement;
        searchboxContainer: HTMLElement;
        searchboxGhostLoader: SearchboxGhostLoaderElement;
        uploadProgressBar: HTMLElement;
        uploadProgressBarContainer: HTMLElement;
    };
}
declare const LensSidePanelAppElementBase: typeof PolymerElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class LensSidePanelAppElement extends LensSidePanelAppElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        autocompleteRequestStarted: {
            type: BooleanConstructor;
            value: boolean;
        };
        enableAimSearchbox: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableFloatingGForHeader: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableClientSideAimHeader: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableLensAimSuggestions: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableLensAimSuggestionsGradientBackground: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableCsbMotionTweaks: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        enableVisualSelectionUpdates: {
            reflectToAttribute: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
        isBackArrowVisible: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        isErrorPageVisible: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        wasBackArrowAvailable: {
            type: BooleanConstructor;
            value: boolean;
        };
        isLoadingResults: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        isContextualSearchbox: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        loadingImageUrl: {
            type: StringConstructor;
            value: string;
            readOnly: boolean;
        };
        darkMode: {
            type: BooleanConstructor;
            value: () => boolean;
            reflectToAttribute: boolean;
        };
        isSearchboxFocused: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
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
        showErrorState: {
            type: BooleanConstructor;
            value: boolean;
            notify: boolean;
        };
        showLensButton: {
            type: BooleanConstructor;
            value: () => boolean;
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
        uploadProgressPercentage: {
            type: NumberConstructor;
            value: number;
        };
        showUploadProgress: {
            type: NumberConstructor;
            computed: string;
            reflectToAttribute: boolean;
        };
        toastMessage: {
            type: StringConstructor;
            value: string;
        };
        searchboxSuggestionCount: {
            type: NumberConstructor;
            value: number;
        };
        isOnAimResults: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        composeboxHeight_: {
            type: NumberConstructor;
            value: number;
        };
        composeboxDropdownHeight_: {
            type: NumberConstructor;
            value: number;
        };
        maxSuggestions: {
            type: NumberConstructor;
            value: number;
        };
        isOverlayShowing: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        isComposeboxFocused: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
    };
    private enableCsbMotionTweaks;
    private enableVisualSelectionUpdates;
    isBackArrowVisible: boolean;
    isSearchboxFocused: boolean;
    isComposeboxFocused: boolean;
    private showGhostLoader;
    suppressGhostLoader: boolean;
    placeholderText: string;
    showErrorState: boolean;
    private showLensButton;
    private showUploadProgress;
    uploadProgressPercentage: number;
    private enableGhostLoader;
    private pageContentType;
    private autocompleteRequestStarted;
    private enableAimSearchbox;
    private enableFloatingGForHeader;
    private enableClientSideAimHeader;
    private enableLensAimSuggestions;
    private enableLensAimSuggestionsGradientBackground;
    private isErrorPageVisible;
    private isLoadingResults;
    private isContextualSearchbox;
    private readonly loadingImageUrl;
    private progressBarAnimation;
    private progressBarHideAnimation;
    private postMessageReceiver?;
    private feedbackToastDismissed;
    private feedbackToastShown;
    private feedbackToastReshowTimeoutId;
    private feedbackToastShowAfterDelayTimeoutId;
    private browserProxy;
    private darkMode;
    private listenerIds;
    private pageHandler;
    private wasBackArrowAvailable;
    private toastMessage;
    private searchboxSuggestionCount;
    private isOnAimResults;
    private composeboxHeight_;
    private composeboxDropdownHeight_;
    private maxSuggestions;
    private isOverlayShowing;
    private eventTracker_;
    private composeboxResizeObserver_;
    private composeboxDropdownResizeObserver_;
    private searchboxBoundingClientRectObserver;
    constructor();
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onBackArrowClick;
    private onSearchboxEnter;
    private setIsLoadingResults;
    private setPageContentUploadProgress;
    private loadResultsInFrame;
    private blurSearchbox;
    private handleEscapeSearchbox;
    private setBackArrowVisible;
    private handleQueryAutocomplete;
    private setShowErrorPage;
    private onSearchboxFocusIn_;
    private onSearchboxFocusOut_;
    private onSearchboxBoundsChanged;
    private computeShowGhostLoader;
    private computePlaceholderText;
    private computeShowUploadProgress;
    private getSearchboxAriaDescription;
    private suppressGhostLoader_;
    private pageContentTypeChanged;
    private showFeedbackToast;
    private showMessageToast;
    private onAimResultsChanged;
    private setIsOverlayShowing;
    private focusResultsFrame;
    private focusSearchbox;
    private showToast;
    private onHideMessageToastClick;
    private hideAndReshowFeedbackToast;
    makeGhostLoaderVisibleForTesting(): void;
    private updateMaxSuggestions;
}
declare global {
    interface HTMLElementTagNameMap {
        'lens-side-panel-app': LensSidePanelAppElement;
    }
}
export {};
