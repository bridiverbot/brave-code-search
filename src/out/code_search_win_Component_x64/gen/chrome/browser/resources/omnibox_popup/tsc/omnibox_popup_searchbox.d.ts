import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import '//resources/cr_components/searchbox/searchbox_compose_button.js';
import './omnibox_popup_contextual_entrypoint.js';
import type { ComposeboxLensSearchElement } from '//resources/cr_components/composebox/composebox_lens_search.js';
import type { CurrentTabChipElement } from '//resources/cr_components/composebox/current_tab_chip.js';
import type { ComposeClickEventDetail, SearchboxComposeButtonElement } from '//resources/cr_components/searchbox/searchbox_compose_button.js';
import type { SearchboxDropdownElement } from '//resources/cr_components/searchbox/searchbox_dropdown.js';
import type { SearchboxInputElement } from '//resources/cr_components/searchbox/searchbox_input.js';
import type { SearchboxMixinInterface } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, AutocompleteResult, OmniboxPopupSelection, PageHandlerInterface as SearchboxPageHandlerInterface, SelectionDirection, SelectionStep } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { OmniboxPopupContextualEntrypointButtonElement } from './omnibox_popup_contextual_entrypoint_button.js';
export interface AimButtonConfig {
    text: string;
    title: string;
    a11yLabel: string;
    icon: string;
}
export interface OmniboxPopupSearchboxElement {
    $: {
        composeButton: SearchboxComposeButtonElement;
        input: SearchboxInputElement;
        inputWrapper: HTMLElement;
        matches: SearchboxDropdownElement;
    };
}
declare const OmniboxPopupSearchboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => SearchboxMixinInterface);
export declare class OmniboxPopupSearchboxElement extends OmniboxPopupSearchboxElementBase implements SearchboxMixinInterface {
    get isAimButtonVisible(): boolean;
    protected isVirtualFocusEnabled_(): boolean;
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        virtualFocusEnabled: {
            type: BooleanConstructor;
        };
        omniboxPopupDebugEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        omniboxDogfoodFeedbackEnabled_: {
            type: BooleanConstructor;
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
        useWebkitSearchIcons_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether this page, rather than the Views frame, paints the popup's
         * drop shadow. See `omnibox::kOmniboxFullWebUIShadow`.
         */
        webuiShadowEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        multiLineEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchboxDynamicColorScheme_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasUserInput_: {
            type: BooleanConstructor;
        };
        searchboxDynamicAnimation_: {
            type: BooleanConstructor;
        };
        aimButtonVisible_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        aimButtonConfig_: {
            type: ObjectConstructor;
        };
        /**
         * Whether the secondary side can be shown based on the feature state and
         * the width available to the dropdown.
         */
        canShowSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the secondary side is currently available to be shown.
         */
        hasSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the input has selection or not. Used when the widget loses
         * activation but should still show the selection,
         */
        hasInputSelection_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the input has focus or not. Used when the widget loses
         * activation but should still show the focus ring.
         */
        isLogicallyFocused_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        userInputInProgress_: {
            type: BooleanConstructor;
        };
        fullUrl_: {
            type: StringConstructor;
        };
        permanentDisplayText_: {
            type: StringConstructor;
        };
        aimButtonIconOnly_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isLensSearchEligible_: {
            type: BooleanConstructor;
        };
    };
    accessor virtualFocusEnabled: boolean;
    setSelection(selection: OmniboxPopupSelection): void;
    accessor canShowSecondarySide: boolean;
    accessor hasSecondarySide: boolean;
    accessor isLogicallyFocused_: boolean;
    accessor isLensSearchEligible_: boolean;
    accessor hasInputSelection_: boolean;
    accessor searchboxChromeRefreshTheming: boolean;
    accessor searchboxSteadyStateShadow: boolean;
    accessor omniboxPopupDebugEnabled_: boolean;
    protected accessor omniboxDogfoodFeedbackEnabled_: boolean;
    protected accessor searchboxIcon_: string;
    protected accessor searchboxVoiceSearchEnabled_: boolean;
    protected accessor searchboxLensSearchEnabled_: boolean;
    private isComposeboxChipEnabled_;
    protected accessor useWebkitSearchIcons_: boolean;
    accessor multiLineEnabled: boolean;
    protected accessor webuiShadowEnabled_: boolean;
    protected accessor searchboxDynamicColorScheme_: boolean;
    protected accessor searchboxDynamicAnimation_: boolean;
    protected accessor hasUserInput_: boolean;
    protected accessor aimButtonVisible_: boolean;
    protected accessor aimButtonConfig_: AimButtonConfig;
    private getContextualEntrypoint_;
    get showContextEntrypoint(): boolean;
    get showContextualChip(): boolean;
    get showLensSearchIcon(): boolean;
    private eventTracker_;
    private searchboxPageHandler_;
    private searchboxCallbackRouter_;
    private popupCallbackRouter_;
    private popupPageHandler_;
    private listenerIds_;
    private popupListenerIds_;
    private currentSequenceNum_;
    private tabId_;
    protected accessor userInputInProgress_: boolean;
    private lastSelectedMatch_;
    protected accessor fullUrl_: string;
    protected accessor permanentDisplayText_: string;
    protected accessor aimButtonIconOnly_: boolean;
    private isComposing_;
    private hasDirectUserDomInput_;
    private hasReceivedInitialInputState_;
    private fullUrlShown_;
    private urlEmphasis_;
    private unelidedUrlEmphasis_;
    private deferredFocusAction_;
    private clientXAtMouseDown_;
    private clientYAtMouseDown_;
    private selectAllOnMouseRelease_;
    private unelideOnMouseRelease_;
    private queryZpsOnMouseRelease_;
    private clickQueriedZps_;
    private textfieldModel_;
    private lastInputText_;
    private lastInputSelection_;
    private isUndoRedo_;
    private inputResizeObserver_;
    private expandedAimButtonWidth_;
    private canvasContext_;
    private inputFontStyle_;
    constructor();
    private updateLayoutConstants_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getContextualEntrypointButton(): OmniboxPopupContextualEntrypointButtonElement | null;
    getContextualChipElement(): (CurrentTabChipElement | ComposeboxLensSearchElement) | null;
    isContextualChipVirtualFocused(): boolean;
    getLensSearchIconElement(): ComposeboxLensSearchElement | null;
    isLensSearchVirtualFocused(): boolean;
    updated(changedProperties: PropertyValues<this>): void;
    shouldAppendDotComOnCtrlEnter(): boolean;
    shouldPreserveSelectionOnMatchDeletion(): boolean;
    isBackgroundTabNavigation(e: KeyboardEvent | MouseEvent): boolean;
    protected onDebugClick_(): void;
    protected onDogfoodFeedbackClick_(): void;
    focusInput(): void;
    getInputElement(): SearchboxInputElement;
    getDropdownElement(): SearchboxDropdownElement;
    getWrapperElement(): HTMLElement;
    getTabId(): number | null;
    pageHandler(): SearchboxPageHandlerInterface;
    openContextMenu(): void;
    getSelectionA11yLabel(match: AutocompleteMatch | null, selection: OmniboxPopupSelection): string;
    handleVirtualFocusEnter(e: KeyboardEvent): boolean;
    getAvailableSelections(result: AutocompleteResult | null): OmniboxPopupSelection[];
    stepCyclesSelection(_result: AutocompleteResult | null, _from: OmniboxPopupSelection, _direction: SelectionDirection, _step: SelectionStep): boolean;
    /**
     * Determines whether the dropdown should be visible considering contextual
     * chips because the header "Ask Google about this page" is suppressed when
     * this chip mode is enabled.
     * TODO(crbug.com/555355466): Clean up contextual chip visibility logic.
     */
    shouldDropdownBeVisible(): boolean;
    /**
     * Dispatches an autocomplete query to the browser process via Mojo.
     *
     * Overridden to record a performance mark when an autocomplete query is
     * dispatched over Mojo while the dropdown is closed.
     */
    queryAutocomplete(input: string, preventInlineAutocomplete: boolean, isOnFocus: boolean): void;
    /**
     * Handles autocomplete results received from the browser process via Mojo.
     *
     * Overridden to record performance marks when match results are received
     * over IPC and when they have finished painting to the screen.
     */
    onAutocompleteResultChanged(result: AutocompleteResult): Promise<void>;
    /**
     * Returns true if `value` should be treated as a cleared input, i.e. the
     * dropdown should close and the backend should be told the draft was
     * cleared. Empty text while in keyword mode is NOT a cleared input: the
     * keyword is still active and an empty query should show keyword-scoped
     * zero-suggest, so the dropdown must stay open.
     */
    private isInputCleared_;
    protected shouldShowVoiceLens_(isEnabled: boolean): boolean;
    onInputFocusChanged(e: CustomEvent<{
        value: string;
        isOnFocus: boolean;
    }>): void;
    protected onInputMousedown_(e: MouseEvent): void;
    private onMouseMove_;
    private onMouseUp_;
    /**
     * If all the text is still selected, i.e. the press landed inside the
     * selection, collapses the selection to a caret at the character under the
     * release point, matching `views::SelectionController::OnMouseReleased()`.
     * Blink would only do this after the `mouseup` event has been dispatched,
     * too late to then unelide. Also, unlike Views, Blink does not place the
     * caret if the pointer moved at all between press and release.
     */
    private placeCaretAtMouseRelease_;
    /**
     * Returns true if the input has a non-empty selection that does not span all
     * of its text.
     */
    private hasPartialSelection_;
    onInputWrapperKeydown(e: KeyboardEvent): Promise<void>;
    protected onInputPaste_(e: ClipboardEvent): void;
    protected onInputCutOrCopy_(e: ClipboardEvent, isCut: boolean): void;
    /**
     * Adopts `text`, the text `#input` shows, as the text of `textfieldModel_` if
     * the model holds different text, so that an edit applied to the model (e.g.
     * a cut or paste) acts on the text the user sees. `#input` can show text that
     * was never recorded in the model, e.g. a match previewed via arrow-key
     * navigation or inline autocompletion. The switch is recorded as an edit of
     * its own, so undo first reverts the cut or paste, then goes back to the
     * model's previous text (e.g. what the user typed), then through the earlier
     * edits.
     */
    private syncTextfieldModelWithInput_;
    protected onInputCopy_(e: ClipboardEvent): void;
    protected onInputCut_(e: ClipboardEvent): void;
    protected showFullUrlOnDeselect_(): void;
    /**
     * Returns whether the input shows an elided URL, i.e. one that
     * `maybeShowFullUrl_()` would replace with `fullUrl_`, and all of it is
     * selected.
     */
    private isElidedUrlAllSelected_;
    /**
     * Unelides the URL, keeping the caret (or selection) on the same characters
     * by shifting it past the prefix (e.g. "https://www.") that was elided. Does
     * nothing if all the text is selected. Compare
     * `OmniboxViewViews::UnapplySteadyStateElisions()` for mouse release.
     */
    private unelideAndUpdateSelection_;
    private isChromeScheme_;
    /**
     * Returns the unedited webpage URL to display its favicon in the searchbox
     * icon when the user is focused on a page before typing. Returns an empty
     * string while user input is in progress (to show the default search provider
     * icon, e.g. Super G, instead of the webpage favicon) or when on the NTP.
     */
    protected computeCurrentPageUrl_(): string;
    /**
     * Returns the match to use for the searchbox input element.
     * While user input is in progress, preserves `lastSelectedMatch_` when
     * results are cleared on blur or tab switch so the icon does not fall back
     * to the default icon.
     */
    protected computeSelectedMatchForInput_(): AutocompleteMatch | null;
    /**
     * Reports selection changes back to C++.
     */
    private onSelectionChanged_;
    /**
     * Sets the input text and applies selection range synchronously regardless of
     * focus.
     */
    private onSetInputState_;
    updateInputForSelection(nextSelection: OmniboxPopupSelection, key: string): void;
    private getSteadyStateUrlEmphasis_;
    private updateUrlEmphasisFromMatch_;
    /**
     * Called by C++ via `SetFocus` Mojo IPC when the browser refocuses the
     * Omnibox while the popup is already open (or during tab restoration). If the
     * document is visible, focuses the input element while preserving the
     * active selection range. If hidden, defers the focus action until
     * `visibilitychange`.
     */
    private onSetFocus_;
    /**
     * Enters keyword mode for the default search engine, clearing permanent URL
     * text (or selecting all existing user draft text) and querying autocomplete.
     */
    private onFocusSearchWithDefaultSearchEngineKeywordMode_;
    /**
     * Called by C++ via `ClearPopup` Mojo IPC when the popup is being hidden.
     * Clears input text, selection range, and matches before resolving the Mojo
     * callback to complete the hide handshake.
     */
    private onClearPopup_;
    /**
     * Resets selection range, blurs input, clears autocomplete matches, and
     * resets AIM button visibility when focus is lost to external targets or when
     * clicking outside.
     */
    private handleFocusLost_;
    /**
     * Applies `selection` to `#input`. If a partial sub-range is requested while
     * displaying an elided URL, unelides `fullUrl_` first before selecting.
     * `isFocused` is whether the input is (or is about to be, if focusing is
     * deferred) focused. An unfocused input shows the start of its text, which
     * the #mirror then elides at its end.
     */
    private selectRange;
    /**
     * Scrolls the single-line input to the start of the text, or only as far past
     * it as needed to show the selection start at `selStart`. The native omnibox
     * shows the elided URL from its start while unfocused, so a range handed off
     * from it starts where the user saw it. Blink doesn't scroll a text field for
     * `setSelectionRange()`, so without this the input keeps its old scroll
     * offset.
     */
    private scrollSelectionStartIntoView_;
    /**
     * Scrolls the single-line input as little as needed from `fromScrollLeft` to
     * show the caret at `offset`, like `gfx::RenderText` does in Views. Blink
     * doesn't scroll a text field for `setSelectionRange()`.
     */
    private scrollOffsetIntoView_;
    /**
     * Returns the width of the single-line input's text area (its content box),
     * or 0 if the text isn't LTR, since the width of the text before an offset
     * is only its position in LTR text. Doesn't use `clientWidth`: for text
     * fields, it already excludes the inline padding while the
     * InputClientRectWithoutInlinePadding Blink feature is enabled (the
     * default), but includes it otherwise.
     */
    private getVisibleTextWidth_;
    private maybeShowFullUrl_;
    protected onInputFocusin_(): void;
    /**
     * Executes deferred focus (`FOCUS` / `FOCUS_AND_SELECT`) when the tab
     * transitions from hidden to visible (`document.visibilityState ===
     * 'visible'`).
     */
    private onVisibilityChange_;
    /**
     * Updates `textfieldModel_` with text modifications (insertion, deletion,
     * replacement) for undo/redo history tracking.
     */
    private updateTextfieldModel_;
    protected onSearchboxInputTextUpdated_(e: CustomEvent<{
        value: string;
        isComposing: boolean;
    }>): void;
    onInputWrapperFocusout(e: FocusEvent): void;
    protected onVoiceSearchClick_(): void;
    protected onLensSearchClick_(): void;
    protected onComposeClick_(e: CustomEvent<ComposeClickEventDetail>): void;
    protected onHasSecondarySideChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onCanShowSecondarySideChanged_;
    private onBeforeInput_;
    protected undo_(): boolean;
    protected redo_(): boolean;
    private undoRedoInternal_;
    private updateEditHistoryState_;
    /**
     * Returns true if any popup element or match row is currently selected,
     * bridging the legacy DOM focus model and the Virtual Focus model (gated by
     * `realboxVirtualFocusNavigation`). When legacy focus is eventually
     * deprecated and removed along with `selectedMatchIndex`, this can be
     * simplified to just `!selectionsEqual(this.selection, kDefaultSelection)`.
     */
    private get hasSelection_();
    handleKeyNavigation(e: KeyboardEvent): void;
    private handleEscapeKey_;
    /**
     * Helper function to measure the rendered pixel width of a text string,
     * using a cached off-screen Canvas 2D context to avoid layout flushes during
     * resize.
     */
    private getTextWidth_;
    private updateAimButtonCollapse_;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-popup-searchbox': OmniboxPopupSearchboxElement;
    }
}
export {};
