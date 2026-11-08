import './contextual_tasks_inner_composebox.js';
import '//resources/cr_components/composebox/composebox_dropdown.js';
import '//resources/cr_components/localized_link/localized_link.js';
import { GlifAnimationState } from '//resources/cr_components/composebox/common.js';
import type { AutocompleteResult, PageHandlerRemote as SearchboxPageHandlerRemote } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState, ModelMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { InjectedInput } from './contextual_tasks.mojom-webui.js';
import type { ContextualTasksInnerComposeboxElement } from './contextual_tasks_inner_composebox.js';
export interface ContextualTasksComposeboxElement {
    $: {
        composebox: ContextualTasksInnerComposeboxElement;
        composeboxContainer: HTMLElement;
    };
}
declare const ContextualTasksComposeboxElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ContextualTasksComposeboxElement extends ContextualTasksComposeboxElement_base {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        inNlm: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableNativeZeroStateSuggestions: {
            type: BooleanConstructor;
        };
        isZeroState: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isSidePanel: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLensOverlayShowing: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isOverlayOpenForAimVisualSearch: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        composeboxHeight_: {
            type: NumberConstructor;
        };
        composeboxDropdownHeight_: {
            type: NumberConstructor;
        };
        isComposeboxFocused_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showContextMenu_: {
            type: BooleanConstructor;
        };
        voiceSearchCoherenceEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        zeroStateSuggestions_: {
            type: ObjectConstructor;
        };
        inputState_: {
            type: ObjectConstructor;
        };
        isLoading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inputEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showSuggestionsActivityLink_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inVoiceSearchMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inToolMode_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        selectedMatchIndex_: {
            type: NumberConstructor;
        };
        enableFileHint_: {
            type: BooleanConstructor;
        };
        lensButtonDisabled_: {
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
        clearAllInputsWhenSubmittingQuery_: {
            type: BooleanConstructor;
        };
        energyEffectEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        glifAnimationState_: {
            type: StringConstructor;
        };
    };
    accessor enableNativeZeroStateSuggestions: boolean;
    accessor inNlm: boolean;
    accessor inToolMode_: boolean;
    accessor isZeroState: boolean;
    accessor isSidePanel: boolean;
    accessor isLensOverlayShowing: boolean;
    accessor isOverlayOpenForAimVisualSearch: boolean;
    accessor inputEnabled: boolean;
    private focusRetryCount_;
    private focusAnimationFrameId_;
    protected accessor zeroStateSuggestions_: AutocompleteResult;
    accessor isLoading_: boolean;
    protected accessor composeboxHeight_: number;
    protected accessor composeboxDropdownHeight_: number;
    protected accessor isComposeboxFocused_: boolean;
    protected accessor showContextMenu_: boolean;
    protected accessor voiceSearchCoherenceEnabled_: boolean;
    protected accessor inputState_: InputState | null;
    protected accessor showSuggestionsActivityLink_: boolean;
    protected accessor inVoiceSearchMode_: boolean;
    protected accessor selectedMatchIndex_: number;
    protected accessor enableFileHint_: boolean;
    protected accessor lensButtonDisabled_: boolean;
    protected searchboxHandler_: SearchboxPageHandlerRemote;
    private eventTracker_;
    private pageHandler_;
    private searchboxCallbackRouter_;
    private searchboxListenerIds_;
    private shouldSubmitAfterUpload_;
    private resizeObserver_;
    private forceSkipSubmitGlifAnimation_;
    protected accessor caretAnimationsEnabled_: boolean;
    protected accessor usePecApi_: boolean;
    protected accessor smartTabSharingVisible_: boolean;
    protected accessor contextManagementInComposeboxEnabled_: boolean;
    protected accessor clearAllInputsWhenSubmittingQuery_: boolean;
    protected accessor energyEffectEnabled_: boolean;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor glifAnimationState_: GlifAnimationState;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    protected startVoiceSearch(): void;
    protected endVoiceSearch(): void;
    protected shouldShowSuggestions_(): boolean;
    protected isDropdownNeeded_(): boolean;
    protected shouldShowLensButton_(): boolean;
    get inputState(): import("//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js").InputStateMojoType | null;
    protected getInputPlaceholder_(): string;
    protected onShowSuggestionActivityLink_(e: CustomEvent<boolean>): void;
    protected onSuggestionActivityLinkClicked_(e: CustomEvent<{
        event: Event;
    }>): void;
    protected onInputStateChanged_(e: CustomEvent<{
        inputState: InputState;
    }>): void;
    protected onSuggestionsResultChanged_(e: CustomEvent<AutocompleteResult>): void;
    protected onDropdownKeydown_(e: KeyboardEvent): void;
    protected onMatchFocusin_(e: CustomEvent<{
        index: number;
    }>): void;
    private navigateToMatch_;
    focus(): void;
    clearInputAndFocus(querySubmitted?: boolean): void;
    setIsLoadingForTesting(isLoading: boolean): void;
    startExpandAnimation(): Promise<void>;
    protected onOpenImageUpload_(): void;
    protected onOpenFileUpload_(): void;
    injectInput(input: InjectedInput): Promise<void>;
    deleteFile(fileToken: UnguessableToken): void;
    isCanvasQuerySubmitted(): boolean;
    onInputStateUpdate(toolMode?: ToolMode | number, modelMode?: ModelMode | number, _data?: Record<string, unknown>): void;
    getComposebox(): ContextualTasksInnerComposeboxElement;
    get isComposeboxFocusedForTesting(): boolean;
    get composeboxHeightForTesting(): number;
    get selectedMatchIndexForTesting(): number;
    set zeroStateSuggestionsForTesting(val: AutocompleteResult);
    get resizeObserverForTesting(): ResizeObserver | null;
    get inToolModeForTesting(): boolean;
    tryFocus(): void;
    private runFocusLoop_;
    private isInputFocused_;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-composebox': ContextualTasksComposeboxElement;
    }
}
export {};
