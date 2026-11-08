import './searchbox_match.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, AutocompleteResult, OmniboxPopupSelection } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SideType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { SearchboxMatchElement } from './searchbox_match.js';
export interface SearchboxDropdownElement {
    $: {
        content: HTMLElement;
    };
}
export declare class SearchboxDropdownElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the secondary side can be shown based on the feature state and
         * the width available to the dropdown.
         */
        canShowSecondarySide: {
            type: BooleanConstructor;
        };
        hasSecondarySide: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        hasEmptyInput: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        result: {
            type: ObjectConstructor;
        };
        selectedMatchIndex: {
            type: NumberConstructor;
            notify: boolean;
        };
        /** Omnibox focused selection state. */
        selection: {
            type: ObjectConstructor;
            notify: boolean;
        };
        showThumbnail: {
            type: BooleanConstructor;
        };
        virtualFocusEnabled: {
            type: BooleanConstructor;
        };
        /**
         * Computed value for whether or not the dropdown should show the
         * secondary side. This depends on whether the parent has set
         * `canShowSecondarySide` to true and whether there are visible primary
         * matches.
         */
        showSecondarySide_: {
            type: BooleanConstructor;
        };
    };
    accessor canShowSecondarySide: boolean;
    accessor hasSecondarySide: boolean;
    accessor hasEmptyInput: boolean;
    accessor result: AutocompleteResult | null;
    accessor selectedMatchIndex: number;
    accessor selection: OmniboxPopupSelection;
    accessor showThumbnail: boolean;
    accessor virtualFocusEnabled: boolean;
    private accessor showSecondarySide_;
    private hideDuplicateDescriptions_;
    private duplicateDescriptions_;
    /** The list of selectable match elements. */
    private selectableMatchElements_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Filters out secondary matches, if any, unless they can be shown. */
    get selectableMatchElements(): SearchboxMatchElement[];
    /** Unselects the currently selected match, if any. */
    unselect(): void;
    /** Focuses the selected match, if any. */
    focusSelected(): void;
    /** Selects the first match. */
    selectFirst(): Promise<boolean>;
    /** Selects the match at the given index. */
    selectIndex(index: number): Promise<boolean>;
    updateSelection(_oldSelection: OmniboxPopupSelection, selection: OmniboxPopupSelection): void;
    /**
     * Selects the previous match with respect to the currently selected one.
     * Selects the last match if the first one or no match is currently selected.
     */
    selectPrevious(): Promise<boolean>;
    /** Selects the last match. */
    selectLast(): Promise<boolean>;
    /**
     * Selects the next match with respect to the currently selected one.
     * Selects the first match if the last one or no match is currently selected.
     */
    selectNext(): Promise<boolean>;
    protected onHeaderMousedown_(e: Event): void;
    private onResultRepaint_;
    protected sideTypeClass_(side: SideType): string;
    protected renderTypeClassForGroup_(groupId: number): string;
    private computeHasSecondarySide_;
    private computeHasEmptyInput_;
    private computeDuplicateDescriptions_;
    protected isSelected_(match: AutocompleteMatch): boolean;
    /**
     * Whether a match of the other kind (showing its description only on
     * selection or always) has the same description as the match. The CSS uses
     * this to show only one copy at a time.
     */
    protected hasDuplicateDescription_(match: AutocompleteMatch): boolean;
    /**
     * @returns The unique suggestion group IDs that belong to the given side type
     *     while preserving the order in which they appear in the list of matches.
     */
    protected groupIdsForSideType_(side: SideType): number[];
    /**
     * @returns Whether the given suggestion group ID has a header.
     */
    protected hasHeaderForGroup_(groupId: number): boolean;
    protected getAriaDescribedByForGroup_(groupId: number): string;
    /**
     * @returns The header for the given suggestion group ID, if any.
     */
    protected headerForGroup_(groupId: number): string;
    /**
     * @returns Index of the match in the autocomplete result. Passed to the match
     *     so it knows its position in the list of matches.
     */
    protected matchIndex_(match: AutocompleteMatch): number;
    /**
     * @returns The list of visible matches that belong to the given suggestion
     *     group ID.
     */
    protected matchesForGroup_(groupId: number): AutocompleteMatch[];
    /**
     * @returns The list of side types to show.
     */
    protected sideTypes_(): SideType[];
    /**
     * @returns The side type for the given suggestion group ID.
     */
    protected sideTypeForGroup_(groupId: number): SideType;
    private computeShowSecondarySide_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-dropdown': SearchboxDropdownElement;
    }
}
