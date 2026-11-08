import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import '//resources/cr_components/searchbox/searchbox_compose_button.js';
import '//resources/cr_components/search/animated_glow.js';
import '//resources/cr_components/composebox/composebox_file_inputs.js';
import '//resources/cr_components/composebox/contextual_entrypoint_button.js';
import './profile_icon.js';
import type { ContextualUpload } from '//resources/cr_components/composebox/common.js';
import { ComposeboxContextAddedMethod, GlowAnimationState } from '//resources/cr_components/search/constants.js';
import { DragAndDropHandler } from '//resources/cr_components/search/drag_drop_handler.js';
import type { DragAndDropHost } from '//resources/cr_components/search/drag_drop_host.js';
import type { ComposeClickEventDetail } from '//resources/cr_components/searchbox/searchbox_compose_button.js';
import type { SearchboxDropdownElement } from '//resources/cr_components/searchbox/searchbox_dropdown.js';
import type { SearchboxInputElement } from '//resources/cr_components/searchbox/searchbox_input.js';
import type { SearchboxMixinInterface } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, AutocompleteResult, DriveUploadError, OmniboxPopupSelection, PageHandlerInterface, SelectionDirection, SelectionStep } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { OmniboxEverywhereProfileIconElement } from './profile_icon.js';
export interface OmniboxEverywhereOmniboxElement {
    $: {
        input: SearchboxInputElement;
        inputWrapper: HTMLElement;
        matches: SearchboxDropdownElement;
        profileIcon: OmniboxEverywhereProfileIconElement;
    };
}
declare const OmniboxEverywhereOmniboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/searchbox/searchbox_selection_mixin.js").SearchboxSelectionMixinInterface) & (new (...args: any[]) => SearchboxMixinInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class OmniboxEverywhereOmniboxElement extends OmniboxEverywhereOmniboxElementBase implements DragAndDropHost, SearchboxMixinInterface {
    get isAimButtonVisible(): boolean;
    get showContextEntrypoint(): boolean;
    openContextMenu(): void;
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        multiLineEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        singleLineOnInlineAutocomplete: {
            type: BooleanConstructor;
        };
        virtualFocusEnabled: {
            type: BooleanConstructor;
        };
        placeholderText: {
            type: StringConstructor;
            reflect: boolean;
            notify: boolean;
        };
        searchboxChromeRefreshTheming: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxSteadyStateShadow: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxIcon_: {
            type: StringConstructor;
        };
        searchboxVoiceSearchEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxLensSearchEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        animationState: {
            type: StringConstructor;
            reflect: boolean;
        };
        inVoiceSearchMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        composeButtonEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        profileAvatarUrl_: {
            type: StringConstructor;
        };
        isFuseboxEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasUserInput_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        ntpRealboxDynamicAiModeButtonEnabled_: {
            type: BooleanConstructor;
        };
        inputState_: {
            type: ObjectConstructor;
        };
        searchboxLayoutMode: {
            type: StringConstructor;
        };
        contextManagementInComposeboxEnabled: {
            type: BooleanConstructor;
        };
        isDraggingFile: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        energyEffectAnimationEnabled_: {
            type: BooleanConstructor;
        };
        fileContextEnabled_: {
            type: BooleanConstructor;
        };
        entrypointName: {
            type: StringConstructor;
        };
        isScreenshotMenuOpen: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isContextMenuOpen: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isActive: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isLensHelpBubbleShowing: {
            type: BooleanConstructor;
        };
    };
    accessor isActive: boolean;
    accessor isLensHelpBubbleShowing: boolean;
    accessor multiLineEnabled: boolean;
    accessor singleLineOnInlineAutocomplete: boolean;
    accessor virtualFocusEnabled: boolean;
    accessor placeholderText: string;
    accessor entrypointName: string;
    accessor isDraggingFile: boolean;
    accessor isScreenshotMenuOpen: boolean;
    accessor isContextMenuOpen: boolean;
    protected dragAndDropHandler: DragAndDropHandler;
    protected accessor energyEffectAnimationEnabled_: boolean;
    protected accessor fileContextEnabled_: boolean;
    accessor searchboxChromeRefreshTheming: boolean;
    accessor searchboxSteadyStateShadow: boolean;
    accessor contextManagementInComposeboxEnabled: boolean;
    protected accessor searchboxIcon_: string;
    protected accessor searchboxVoiceSearchEnabled_: boolean;
    protected accessor searchboxLensSearchEnabled_: boolean;
    accessor animationState: GlowAnimationState;
    accessor inVoiceSearchMode: boolean;
    protected accessor composeButtonEnabled: boolean;
    protected accessor profileAvatarUrl_: string;
    protected accessor isFuseboxEnabled: boolean;
    protected accessor hasUserInput_: boolean;
    protected accessor ntpRealboxDynamicAiModeButtonEnabled_: boolean;
    protected accessor inputState_: InputState | null;
    protected accessor searchboxLayoutMode: string;
    private pageHandler_;
    private callbackRouter_;
    private autocompleteResultChangedListenerId_;
    private inputStateListenerId_;
    private aimPopupEligibilityListenerId_;
    private screenshotMenuClosedListenerId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    focusInput(): void;
    getInputText(): string;
    setInputText(text: string): void;
    getDropTarget(): this;
    addDroppedFiles(files: FileList): void;
    getInputElement(): SearchboxInputElement;
    getDropdownElement(): SearchboxDropdownElement;
    getWrapperElement(): HTMLElement;
    pageHandler(): PageHandlerInterface;
    navigateToMatch(matchIndex: number, e: KeyboardEvent | MouseEvent): void;
    openCtrlEnterMatch(matchIndex: number): void;
    onMatchClick(): void;
    protected onInputFocusin_(): void;
    stepCyclesSelection(_result: AutocompleteResult | null, _from: OmniboxPopupSelection, _direction: SelectionDirection, _step: SelectionStep): boolean;
    protected isVoiceSearchVirtualFocused_(): boolean;
    protected isLensSearchVirtualFocused_(): boolean;
    getAvailableSelections(result: AutocompleteResult | null): OmniboxPopupSelection[];
    getSelectionA11yLabel(match: AutocompleteMatch | null, selection: OmniboxPopupSelection): string;
    handleVirtualFocusEnter(e: KeyboardEvent): boolean;
    protected showVoiceSearchButton_(): boolean;
    protected showLensSearchButton_(): boolean;
    protected computePlaceholderText_(): string;
    protected onSearchboxInputEmptyChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onSearchboxInputTextUpdated_(e: CustomEvent<{
        value: string;
        isComposing: boolean;
    }>): void;
    protected onVoiceSearchButtonClick_(): Promise<void>;
    private wasScreenshotMenuOpenOnPointerDown_;
    protected onLensSearchPointerdown_(e: PointerEvent): void;
    protected onLensSearchPointercancel_(): void;
    protected onLensSearchClick_(e: Event): void;
    protected onFileChange_(e: CustomEvent<{
        files: FileList;
    }>): void;
    protected onSearchboxInputFilesPasted_(e: CustomEvent<{
        files: FileList;
    }>): void;
    protected canAddFileContext_(): boolean;
    protected onInputWrapperDragover_(e: DragEvent): void;
    protected computeGlowAnimationState_(): GlowAnimationState;
    protected processFiles_(files: FileList | null, contextAdditionMethod: ComposeboxContextAddedMethod): void;
    protected openComposebox_(uploads?: ContextualUpload[], mode?: ToolMode, model?: ModelMode, error?: DriveUploadError): void;
    protected openComposeboxWithMode_(mode?: ToolMode, model?: ModelMode): Promise<void>;
    protected onComposeClick_(e: CustomEvent<ComposeClickEventDetail>): void;
    protected onContextMenuEntrypointClick_(e?: CustomEvent<{
        anchorRect?: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
    }>): void;
    protected onBottomControlsAnimationEnd_(e: AnimationEvent): void;
    private finishAnimations_;
    onContextMenuClosed(): void;
    onInputWrapperFocusout(e: FocusEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-everywhere-omnibox': OmniboxEverywhereOmniboxElement;
    }
}
export {};
