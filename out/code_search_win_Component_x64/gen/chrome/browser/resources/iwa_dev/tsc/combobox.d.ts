import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export type ComboboxMatchStrategy = 'prefix' | 'contains';
export interface ComboboxOption {
    value: string;
    label?: string;
}
export interface IwaDevComboboxElement {
    $: {
        input: HTMLInputElement;
    };
}
export declare class IwaDevComboboxElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        value: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        clearable: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        errorMessage: {
            type: StringConstructor;
            attribute: string;
        };
        options: {
            type: ArrayConstructor;
        };
        matchStrategy: {
            type: StringConstructor;
            attribute: string;
        };
        showSuggestions_: {
            type: BooleanConstructor;
            state: boolean;
        };
        highlightedIndex_: {
            type: NumberConstructor;
            state: boolean;
        };
        filterQuery_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor value: string;
    accessor label: string;
    accessor placeholder: string;
    accessor clearable: boolean;
    accessor disabled: boolean;
    accessor readonly: boolean;
    accessor errorMessage: string;
    accessor options: ComboboxOption[];
    accessor matchStrategy: ComboboxMatchStrategy;
    protected accessor showSuggestions_: boolean;
    protected accessor highlightedIndex_: number;
    protected accessor filterQuery_: string;
    private wasDropdownOpen_;
    get inputElement(): HTMLInputElement;
    focus(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected getDisplayValue_(): string;
    protected getFilteredOptions_(): ComboboxOption[];
    protected isDropdownOpen_(): boolean;
    /**
     * Returns the ID of the currently highlighted suggestion option for
     * aria-activedescendant, allowing screen readers to announce the active
     * option during keyboard navigation while focus remains on the input.
     */
    protected getActiveDescendant_(): string | undefined;
    protected onInput_(): void;
    protected onInputPointerdown_(e: PointerEvent): void;
    protected onFocus_(): void;
    protected onBlur_(): void;
    protected onClearClick_(): void;
    protected onTogglePointerdown_(e: PointerEvent): void;
    protected onKeydown_(e: KeyboardEvent): void;
    private onKeydownWhenSuggestionsCollapsed_;
    private closeSuggestions_;
    private onKeydownWhenSuggestionsExpanded_;
    private openSuggestions_;
    private navigateHighlight_;
    private getInitialHighlightIndex_;
    private toggleSuggestions_;
    /**
     * Scrolls the highlighted option into view after Lit updates the DOM.
     * Required because browser focus remains on the input, so the browser
     * will not auto-scroll.
     */
    private scrollHighlightedIntoView_;
    protected onSuggestionsPointerdown_(e: PointerEvent): void;
    protected onOptionPointerdown_(e: PointerEvent): void;
    private selectOption_;
    private fireValueChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-combobox': IwaDevComboboxElement;
    }
}
