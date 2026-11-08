import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/composebox_input.js';
import '//resources/cr_components/composebox/composebox_submit.js';
import '//resources/cr_components/composebox/composebox_tool_chip.js';
import '//resources/cr_components/composebox/composebox_voice_search.js';
import '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import '//resources/cr_components/composebox/error_scrim.js';
import '//resources/cr_components/composebox/file_carousel.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { ComposeboxFile, GlifAnimationState } from '//resources/cr_components/composebox/common.js';
import type { TabUpload } from '//resources/cr_components/composebox/common.js';
import type { PageHandlerRemote } from '//resources/cr_components/composebox/composebox.mojom-webui.js';
import type { ComposeboxDropdownElement } from '//resources/cr_components/composebox/composebox_dropdown.js';
import type { ComposeboxFileInputsElement } from '//resources/cr_components/composebox/composebox_file_inputs.js';
import type { ComposeboxInputElement } from '//resources/cr_components/composebox/composebox_input.js';
import type { ContextualEntrypointAndMenuElement } from '//resources/cr_components/composebox/contextual_entrypoint_and_menu.js';
import type { GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteResult, PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
export interface ContextualTasksInnerComposeboxInterface {
    animationState: GlowAnimationState;
    canSubmitFilesAndInput: boolean;
    clearAllInputsWhenSubmittingQuery: boolean;
    disableCaretColorAnimation: boolean;
    disableFallbackGlifAnimation: boolean;
    dropdownNeeded: boolean;
    enableCarouselScrolling: boolean;
    enableFileHint: boolean;
    energyEffectAnimationEnabled: boolean;
    energyEffectEnabled: boolean;
    glifAnimationState: GlifAnimationState;
    input: string;
    inputPlaceholderOverride: string;
    isCanvasQuerySubmitted: boolean;
    isFollowupQuery: boolean;
    isSidePanel: boolean;
    isZeroState: boolean;
    lensButtonDisabled: boolean;
    lensButtonTriggersOverlay: boolean;
    queryZpsOnLoad: boolean;
    searchboxLayoutMode: string;
    showLensButton: boolean;
    showVoiceSearch: boolean;
    readonly updateComplete: Promise<boolean>;
    usePecApi: boolean;
    clearAllInputs(querySubmitted: boolean, shouldBlockAutoSuggestedTabs: boolean): void;
    clearInputsForNewThread(): void;
    clearAutocompleteMatches(): void;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean, fromAutoSuggestedChip?: boolean): ComposeboxFile | null;
    focusInput(): void;
    getAutomaticActiveTabChipElement(): HTMLElement | null;
    getDropTarget(): HTMLElement;
    getHasAutomaticActiveTabChipToken(): boolean;
    hasFiles(): boolean;
    injectInput(title: string, thumbnail: string, fileToken: UnguessableToken, supportsUnimodal: boolean, iconName?: string): void;
    queryAutocomplete(clearMatches: boolean): void;
    setInputProgrammatically(queryText: string, willSubmitAfterInjection: boolean): void;
    submitQuery(e?: KeyboardEvent | MouseEvent): void;
}
export interface ContextualTasksInnerComposeboxElement {
    $: {
        composeboxInput: ComposeboxInputElement;
        composebox: HTMLElement;
        matches: ComposeboxDropdownElement;
        fileInputs: ComposeboxFileInputsElement;
    };
}
declare const ContextualTasksInnerComposeboxElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/composebox/composebox_mixin.js").ComposeboxEmbedderMixinInterface);
export declare class ContextualTasksInnerComposeboxElement extends ContextualTasksInnerComposeboxElement_base implements ContextualTasksInnerComposeboxInterface {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entrypointName: {
            type: StringConstructor;
            reflect: boolean;
        };
        carouselOnTop_: {
            type: BooleanConstructor;
        };
        disableFallbackGlifAnimation: {
            type: BooleanConstructor;
        };
        enableCarouselScrolling: {
            type: BooleanConstructor;
        };
        enableFileHint: {
            type: BooleanConstructor;
        };
        glifAnimationState: {
            type: StringConstructor;
        };
        inputPlaceholderOverride: {
            type: StringConstructor;
        };
        isFollowupQuery: {
            type: BooleanConstructor;
        };
        isSidePanel: {
            type: BooleanConstructor;
        };
        isZeroState: {
            type: BooleanConstructor;
        };
        lensButtonDisabled: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        lensButtonTriggersOverlay: {
            type: BooleanConstructor;
        };
        showLensButton: {
            type: BooleanConstructor;
        };
        expanding_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
    };
    accessor entrypointName: string;
    accessor disableFallbackGlifAnimation: boolean;
    accessor enableCarouselScrolling: boolean;
    accessor enableFileHint: boolean;
    accessor glifAnimationState: GlifAnimationState;
    accessor inputPlaceholderOverride: string;
    accessor isFollowupQuery: boolean;
    accessor isSidePanel: boolean;
    accessor isZeroState: boolean;
    accessor lensButtonDisabled: boolean;
    accessor lensButtonTriggersOverlay: boolean;
    accessor showLensButton: boolean;
    protected accessor carouselOnTop_: boolean;
    protected accessor expanding_: boolean;
    private searchboxCallbackRouter_;
    private pageHandler_;
    private searchboxHandler_;
    private eventTracker_;
    private resizeObservers_;
    private readonly smartTabSharingSupported_;
    private get webUIOmniboxAskGAboutThisPageEnabled_();
    getPageHandler(): PageHandlerRemote;
    getSearchboxHandler(): SearchboxPageHandlerRemote;
    getSearchboxCallbackRouter(): SearchboxPageCallbackRouter;
    getActiveElement(): Element | null;
    getInputElement(): ComposeboxInputElement;
    getDropdownElement(): ComposeboxDropdownElement;
    getContextEntrypointElement(): ContextualEntrypointAndMenuElement | null;
    getLensButtonElement(): HTMLElement | null;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    computeVoiceSearchCoherenceEnabled(): boolean;
    private setupResizeObservers_;
    private tearDownResizeObservers_;
    private syncResizeObservers_;
    onAutocompleteResultChanged(result: AutocompleteResult): void;
    onSmartTabSharingActiveChanged(e: CustomEvent<{
        active: boolean;
    }>): void;
    private updateAutoSuggestedTabContext_;
    addTabContextHandleCallback(tabUpload: TabUpload, replaceAutoActiveTabToken?: boolean): Promise<ComposeboxFile | null>;
    deleteFile(uuidToDelete: UnguessableToken, fromUserAction?: boolean): ComposeboxFile | null;
    clearAllInputs(querySubmitted: boolean, shouldBlockAutoSuggestedTabs: boolean): void;
    protected onComposeboxFocusin_(e: FocusEvent): void;
    protected onComposeboxFocusout_(e: FocusEvent): void;
    protected onLensClick_(): void;
    protected onLensIconMousedown_(e: MouseEvent): void;
    updateInputPlaceholder(): void;
    hasValidQuery(): boolean;
    shouldShowDivider(): boolean;
    shouldDisableFileInputs(): boolean;
    getAutomaticActiveTabChipElement(): HTMLElement | null;
    getHasAutomaticActiveTabChipToken(): boolean;
    injectInput(title: string, thumbnail: string, fileToken: UnguessableToken, supportsUnimodal: boolean, iconName?: string): void;
    setInputProgrammatically(queryText: string, willSubmitAfterInjection: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-inner-composebox': ContextualTasksInnerComposeboxElement;
    }
}
export {};
