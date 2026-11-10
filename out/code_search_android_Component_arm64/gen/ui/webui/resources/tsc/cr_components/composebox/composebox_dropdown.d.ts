import './composebox_match.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, AutocompleteResult } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
export declare class ComposeboxDropdownElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        result: {
            type: ObjectConstructor;
        };
        selectedMatchIndex: {
            type: NumberConstructor;
            notify: boolean;
        };
        lastQueriedInput: {
            type: StringConstructor;
            notify: boolean;
        };
        maxSuggestions: {
            type: NumberConstructor;
        };
        toolMode: {
            type: NumberConstructor;
        };
        overrideClampLineNum: {
            type: NumberConstructor;
        };
        richImageSuggestionsEnabled: {
            type: BooleanConstructor;
        };
        isImageBatchLoading_: {
            type: BooleanConstructor;
        };
    };
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    accessor result: AutocompleteResult | null;
    accessor selectedMatchIndex: number;
    accessor lastQueriedInput: string;
    accessor maxSuggestions: number | null;
    accessor toolMode: ToolMode;
    accessor overrideClampLineNum: number;
    accessor richImageSuggestionsEnabled: boolean;
    accessor isImageBatchLoading_: boolean;
    private composeboxSource_;
    private imagePreloadGeneration_;
    private imagePreloadTimeoutId_;
    private loadedImages_;
    private preloadingImages_;
    /** Unselects the currently selected match, if any. */
    unselect(): void;
    /** Focuses the selected match, if any. */
    focusSelected(): void;
    /** Selects the first match. */
    selectFirst(): void;
    /** Selects the match at the given index. */
    selectIndex(index: number): void;
    /**
     * Selects the previous match with respect to the currently selected one.
     * Selects the last match if the first one or no match is currently selected.
     */
    selectPrevious(): void;
    /** Selects the last match. */
    selectLast(): void;
    /**
     * Selects the next match with respect to the currently selected one.
     * Selects the first match if the last one or no match is currently selected.
     */
    selectNext(): void;
    /** Returns the minimum index of the visible matches. */
    getFirstVisibleIndex(): number;
    /** Returns the maximum index of the visible matches. */
    getLastVisibleIndex(): number;
    /**
     * Unselects the active match if a Tab or Shift-Tab event is about to move
     * focus outside the visible dropdown matches.
     */
    unselectOnTabExit(e: KeyboardEvent): void;
    /**
     * @returns Index of the match in the autocomplete result. Passed to the match
     *     so it knows its position in the list of matches.
     */
    protected matchIndex_(match: AutocompleteMatch): number;
    protected isSelected_(index: number): boolean;
    /** Returns the maximum index of the visible matches. */
    protected getMaxVisibleIndex_(): number;
    /**
     * Returns whether the given index corresponds to the last match.
     */
    protected isLastMatch_(index: number): boolean;
    /**
     * Hides the match if its a verbatim match. This match should be hidden
     * for all typed suggestions. It will still be "selected" when the
     * autocomplete result changes, and the user can still navigate to this
     * verbatim match by navigating to the input text. Zero suggest only has
     * verbatim matches when context is uploaded. In this case the verbatim
     * match is "empty" and allows for navigation to context with no text.
     */
    protected hideVerbatimMatch_(index: number): boolean;
    protected computeAriaLabel_(match: AutocompleteMatch): string;
    /**
     * @returns Unique suggestion group IDs in natural order of appearance in
     *     matches.
     */
    protected groupIds_(): number[];
    protected matchesForGroup_(groupId: number): Array<{
        match: AutocompleteMatch;
        index: number;
    }>;
    protected hasHeaderForGroup_(groupId: number): boolean;
    protected headerForGroup_(groupId: number): string;
    protected renderTypeClassForGroup_(groupId: number): string;
    protected onHeaderMousedown_(e: MouseEvent): void;
    protected isMatchHidden_(index: number): boolean;
    protected isMatchLoading_(match: AutocompleteMatch): boolean;
    private clearImagePreloadTimeout_;
    private cancelImagePreload_;
    private updateImagePreload_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-dropdown': ComposeboxDropdownElement;
    }
}
