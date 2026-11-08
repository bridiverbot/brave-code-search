import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/searchbox/searchbox_compose_button.js';
import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import type { ContextualUpload } from '//resources/cr_components/composebox/common.js';
import { GlifAnimationState, TabSuggestionsState } from '//resources/cr_components/composebox/common.js';
import { ComposeboxContextAddedMethod, GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { DragAndDropHandler } from '//resources/cr_components/search/drag_drop_handler.js';
import type { DragAndDropHost } from '//resources/cr_components/search/drag_drop_host.js';
import type { SearchboxDropdownElement } from '//resources/cr_components/searchbox/searchbox_dropdown.js';
import type { SearchboxInputElement } from '//resources/cr_components/searchbox/searchbox_input.js';
import type { SearchboxMixinInterface } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { FuseboxAction } from '//resources/mojo/components/omnibox/browser/fusebox_action.mojom-webui.js';
import type { DriveUploadError, PageCallbackRouter, PageHandlerInterface, TabAttachmentSource, TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
interface ClickEventDetail {
    button: number;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export interface NtpSearchboxElement {
    $: {
        input: SearchboxInputElement;
        inputWrapper: HTMLElement;
    };
}
declare const NtpSearchboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/searchbox/searchbox_selection_mixin.js").SearchboxSelectionMixinInterface) & (new (...args: any[]) => SearchboxMixinInterface);
/** A search box for the NTP that behaves like the Omnibox. */
export declare class NtpSearchboxElement extends NtpSearchboxElementBase implements DragAndDropHost, SearchboxMixinInterface {
    get isAimButtonVisible(): boolean;
    get showContextEntrypoint(): boolean;
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ntpRealboxNextEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        virtualFocusEnabled: {
            type: BooleanConstructor;
        };
        composeboxEnabled: {
            type: BooleanConstructor;
        };
        composeButtonEnabled: {
            type: BooleanConstructor;
        };
        showComposeButton_: {
            type: BooleanConstructor;
        };
        cyclingPlaceholders: {
            type: BooleanConstructor;
        };
        shareTabsFlyoutOpen: {
            type: BooleanConstructor;
        };
        isDraggingFile: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        contextMenuGlifAnimationState: {
            type: StringConstructor;
            reflect: boolean;
        };
        animationState: {
            reflect: boolean;
            type: StringConstructor;
        };
        colorSourceIsBaseline: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Whether the theme is dark. */
        isDark: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxLayoutMode: {
            type: StringConstructor;
            reflect: boolean;
        };
        /**
         * Whether the secondary side can be shown based on the feature state and
         * the width available to the dropdown.
         */
        canShowSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inVoiceSearchMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxChromeRefreshTheming: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxSteadyStateShadow: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        placeholderText: {
            type: StringConstructor;
            reflect: boolean;
            notify: boolean;
        };
        hasVoiceSearchError: {
            type: BooleanConstructor;
        };
        isListening: {
            type: BooleanConstructor;
        };
        tabSuggestions_: {
            type: ArrayConstructor;
        };
        inputState_: {
            type: ObjectConstructor;
        };
        recentTabId_: {
            type: NumberConstructor;
        };
        tabSuggestionsState_: {
            type: NumberConstructor;
        };
        /** Searchbox default icon (i.e., Google G icon or the search loupe). */
        searchboxIcon_: {
            type: StringConstructor;
        };
        /** Whether the voice search icon should be visible in the searchbox. */
        searchboxVoiceSearchEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Whether the Google Lens icon should be visible in the searchbox. */
        searchboxLensSearchEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        useWebkitSearchIcons_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectAnimationEnabled: {
            type: BooleanConstructor;
        };
        hasUserInput_: {
            type: BooleanConstructor;
        };
        ntpRealboxDynamicAiModeButtonEnabled_: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled: {
            type: BooleanConstructor;
        };
        composeboxContextMenuTooltipsEnabled: {
            type: BooleanConstructor;
        };
        keepMenuOpenOnTabSelectForRealbox: {
            type: BooleanConstructor;
        };
        smartTabSharingVisible: {
            type: BooleanConstructor;
        };
        smartTabSharingActive: {
            type: BooleanConstructor;
        };
    };
    accessor ntpRealboxNextEnabled: boolean;
    accessor smartTabSharingVisible: boolean;
    accessor smartTabSharingActive: boolean;
    accessor energyEffectAnimationEnabled: boolean;
    accessor composeboxEnabled: boolean;
    accessor composeButtonEnabled: boolean;
    protected accessor showComposeButton_: boolean;
    accessor cyclingPlaceholders: boolean;
    accessor shareTabsFlyoutOpen: boolean;
    accessor isDraggingFile: boolean;
    accessor contextMenuGlifAnimationState: GlifAnimationState;
    accessor animationState: GlowAnimationState;
    accessor colorSourceIsBaseline: boolean;
    accessor isDark: boolean;
    accessor searchboxLayoutMode: string;
    accessor canShowSecondarySide: boolean;
    accessor hasSecondarySide: boolean;
    accessor searchboxChromeRefreshTheming: boolean;
    accessor searchboxSteadyStateShadow: boolean;
    accessor virtualFocusEnabled: boolean;
    accessor contextManagementInComposeboxEnabled: boolean;
    accessor composeboxContextMenuTooltipsEnabled: boolean;
    accessor keepMenuOpenOnTabSelectForRealbox: boolean;
    accessor placeholderText: string;
    accessor recentTabId_: number | null;
    accessor inVoiceSearchMode: boolean;
    accessor hasVoiceSearchError: boolean;
    accessor isListening: boolean;
    protected accessor tabSuggestions_: TabInfo[];
    protected accessor inputState_: InputState | null;
    protected accessor tabSuggestionsState_: TabSuggestionsState;
    protected accessor searchboxIcon_: string;
    protected accessor searchboxVoiceSearchEnabled_: boolean;
    protected accessor searchboxLensSearchEnabled_: boolean;
    protected accessor ntpRealboxDynamicAiModeButtonEnabled_: boolean;
    protected accessor useWebkitSearchIcons_: boolean;
    protected accessor hasUserInput_: boolean;
    protected dragAndDropHandler: DragAndDropHandler | null;
    protected callbackRouter_: PageCallbackRouter;
    private placeholderCycler_;
    private dragAndDropEnabled_;
    private onTabStripChangedListenerId_;
    private contextMenuOpened_;
    private pageHandler_;
    private autocompleteResultChangedListenerId_;
    private inputStateListenerId_;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    handleFuseboxAction(action?: FuseboxAction): Promise<void>;
    protected shouldShowVoiceLens_(isEnabled: boolean): boolean;
    handleKeyNavigation(e: KeyboardEvent): void;
    protected onInputFocusin_(): void;
    onInputWrapperFocusout(e: FocusEvent): void;
    getInputElement(): SearchboxInputElement;
    getDropdownElement(): SearchboxDropdownElement;
    getWrapperElement(): HTMLElement;
    pageHandler(): PageHandlerInterface;
    updateDropdownVisibility(): void;
    setInputText(text: string): void;
    focusInput(): void;
    blurInput(): void;
    selectAll(): void;
    getDropTarget(): this;
    addDroppedFiles(files: FileList): void;
    onVoiceSearchClick(): Promise<void>;
    protected onFileChange_(e: CustomEvent<{
        files: FileList;
    }>): void;
    protected onSmartTabSharingActiveChanged_(_e: CustomEvent<{
        active: boolean;
    }>): void;
    protected onShareTabsFlyoutOpenChanged_(e: CustomEvent<{
        open: boolean;
    }>): void;
    protected onAddTabContext_(e: CustomEvent<{
        id: number;
        title: string;
        url: Url;
        delayUpload: boolean;
        origin: TabAttachmentSource;
    }>): void;
    protected refreshTabSuggestions_(forceRefresh?: boolean): Promise<void>;
    protected onGetTabPreview_(e: CustomEvent<{
        tabId: number;
        onPreviewFetched: (previewDataUrl: string) => void;
    }>): Promise<void>;
    protected onContextMenuClosed_(): void;
    protected onRequestTabSuggestionsLoad(): void;
    closeContextMenu(): void;
    protected onContextMenuOpened_(): void;
    protected onOpenDriveUpload_(): Promise<void>;
    protected onContextMenuEntrypointClick_(): void;
    protected onContextMenuEntrypointHover_(): void;
    protected onToolClick_(e: CustomEvent<{
        toolMode: ToolMode;
    }>): void;
    protected onDeepSearchClick_(): void;
    protected onCreateImageClick_(): void;
    protected onModelClick_(e: CustomEvent<{
        model: ModelMode;
    }>): void;
    protected onComposeClick_(e: CustomEvent<ClickEventDetail>): void;
    protected useCompactLayout_(): boolean;
    protected openComposebox_(uploads?: ContextualUpload[], mode?: ToolMode, model?: ModelMode, error?: DriveUploadError): void;
    protected onSearchboxInputPasted_(): void;
    protected onSearchboxInputFilesPasted_(e: CustomEvent<{
        files: FileList;
    }>): void;
    protected processFiles_(files: FileList | null, contextAdditionMethod: ComposeboxContextAddedMethod): void;
    protected onSearchboxInputTextUpdated_(e: CustomEvent<{
        value: string;
        isComposing: boolean;
    }>): void;
    protected onLensSearchClick_(): void;
    protected onHasSecondarySideChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected inputHasMatches_(): boolean;
    private shouldSuppressDropdownForMultiline_;
    private calculateShowComposeButton_;
    protected computePlaceholderText_(placeholderText: string): string;
    protected openTabPicker(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-searchbox': NtpSearchboxElement;
    }
}
export {};
