import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './searchbox_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, InputKeywordModel, UrlEmphasis } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { SearchboxIconElement } from './searchbox_icon.js';
export interface Input {
    text: string;
    inline: string;
}
export interface InputUpdate {
    text?: string;
    inline?: string;
    moveCursorToEnd?: boolean;
    isDeletingInput?: boolean;
    isMatchPreview?: boolean;
}
declare const SearchboxInputElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface SearchboxInputElement {
    $: {
        icon: SearchboxIconElement;
        selectionAnnouncement: HTMLElement;
        selectionListbox: HTMLElement;
    };
}
export declare class SearchboxInputElement extends SearchboxInputElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dropdownIsVisible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        multiLineEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        singleLineOnInlineAutocomplete: {
            type: BooleanConstructor;
        };
        forceSingleLine_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        showEllipsis_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        hasInlineSelection_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        placeholderText: {
            type: StringConstructor;
        };
        searchboxAriaDescription: {
            type: StringConstructor;
        };
        searchboxIcon: {
            type: StringConstructor;
        };
        selectedMatch: {
            type: ObjectConstructor;
        };
        /**
         * The URL of the current webpage when focused in the searchbox before
         * typing, used to load the page's favicon. Empty when typing, on the NTP,
         * or for consumers that do not provide a page URL.
         */
        pageUrl: {
            type: StringConstructor;
        };
        inputKeywordModel: {
            type: ObjectConstructor;
        };
        inputHasMatches: {
            type: BooleanConstructor;
        };
        allowFilePaste: {
            type: BooleanConstructor;
        };
        urlEmphasisEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        urlEmphasis: {
            type: ObjectConstructor;
        };
    };
    accessor dropdownIsVisible: boolean;
    accessor multiLineEnabled: boolean;
    accessor singleLineOnInlineAutocomplete: boolean;
    accessor forceSingleLine_: boolean;
    accessor showEllipsis_: boolean;
    accessor hasInlineSelection_: boolean;
    accessor placeholderText: string | undefined;
    accessor searchboxAriaDescription: string;
    accessor searchboxIcon: string;
    accessor selectedMatch: AutocompleteMatch | null;
    accessor pageUrl: string;
    accessor inputKeywordModel: InputKeywordModel | null;
    accessor inputHasMatches: boolean;
    accessor allowFilePaste: boolean;
    accessor urlEmphasisEnabled: boolean;
    accessor urlEmphasis: UrlEmphasis | null;
    private callbackRouter_;
    private inputTextChangedListenerId_;
    private lastInput_;
    private lastUserInput_;
    private isDeletingInput_;
    private pastedInInput_;
    private resizeObserver_;
    private onDocumentSelectionChangeBound_;
    private selectionA11yLabelGeneration_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private setupResizeObserver_;
    get inputElement(): HTMLInputElement | HTMLTextAreaElement;
    focus(): void;
    blur(): void;
    select(): void;
    setSelectionRange(start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none'): void;
    getInputValue(): string;
    setInputText(text: string): void;
    setInput(update: InputUpdate): void;
    lastInput(): Input | null;
    /**
     * While a selection is active, the input's value previews it. Screen readers
     * narrate that value change, drowning out the selection's own announcement.
     * Like the WebUI toolbar's readonly omnibox, this distracts them from the
     * input by pointing aria-activedescendant at an offscreen element, then
     * notifies the label, so that is all they narrate. This is the only
     * narration of selection changes, so callers must not announce the label by
     * other means too. Pass an empty string to narrate the input itself again,
     * e.g. when the user edits.
     *
     * Pointing aria-activedescendant at the distraction is reported to screen
     * readers as a focus change. The distraction is an option of a listbox the
     * combobox controls (see the template) because, after a key press, VoiceOver
     * re-anchors keyboard focus on whatever it deems appropriate for the element
     * it is told has focus: for an option of the combobox's listbox that is the
     * combobox itself, a no-op; for a plain group it is the web area, which
     * blurs the input and closes the popup.
     *
     * Every label is notified the same way, with the accessibility tree update
     * that follows the next paint, whether or not screen readers were already
     * on the distraction. Deferring the notification past the update that
     * reports the focus change makes the label the last thing they are told,
     * and doing so always means each selection change is narrated identically
     * rather than depending on what the user did last. Labels set before the
     * notification goes out supersede it, so rapid key presses narrate only
     * where they end up.
     */
    setSelectionA11yLabel(label: string): void;
    isMultiline(): boolean;
    preventInlineAutocomplete(input: string): boolean;
    private onSetInputText_;
    protected onInputFocus_(): void;
    protected onInputBlur_(): void;
    protected onInputCopy_(e: ClipboardEvent): void;
    protected onInputCut_(e: ClipboardEvent): void;
    private onInputCutCopy_;
    protected onInputInput_(e: InputEvent): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    protected onInputKeyup_(e: KeyboardEvent): void;
    protected onInputMousedown_(e: MouseEvent | null): void;
    protected onInputPaste_(e: ClipboardEvent): void;
    /**
     * Updates the input state (text and inline autocompletion) with |update|.
     */
    private updateInput_;
    private setLastInput_;
    /**
     * Updates the #mirror DOM overlay with styled spans to mirror the text in
     * <input> while applying URL component emphasis matching
     * OmniboxViewViews::EmphasizeURLComponents().
     */
    private updateMirror_;
    /**
     * Emphasizes the scheme component for security UI display purposes
     * (e.g. cert errors), matching OmniboxViewViews::UpdateSchemeStyle().
     */
    private updateSchemeStyle_;
    protected onInputScroll_(): void;
    private updateEllipsisState_;
    protected computePlaceholderText_(): string;
    protected computeDefaultIcon_(): string;
    protected inKeywordMode_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-input': SearchboxInputElement;
    }
}
export {};
