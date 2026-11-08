import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteMatch, AutocompleteResult, InputKeywordModel, OmniboxPopupSelection, PageHandlerInterface } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { KeywordModeManager } from './keyword_mode_manager.js';
import type { SearchboxDropdownElement } from './searchbox_dropdown.js';
import type { SearchboxInputElement } from './searchbox_input.js';
import type { SearchboxSelectionMixinInterface } from './searchbox_selection_mixin.js';
export declare enum ControlKeyState {
    UP = 0,
    DOWN = 1,
    DOWN_AND_CONSUMED = 2
}
type Constructor<T> = new (...args: any[]) => T;
export declare const SearchboxMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<SearchboxMixinInterface>;
export interface SearchboxMixinInterface extends SearchboxSelectionMixinInterface {
    virtualFocusEnabled: boolean;
    matchIndex: number;
    composeboxSource: string;
    controlKeyState: ControlKeyState;
    dropdownIsVisible: boolean;
    initialInputScrollHeight: number;
    activeQueryId: number;
    lastQueriedInput: string | null;
    multiLineEnabled: boolean;
    singleLineOnInlineAutocomplete: boolean;
    result: AutocompleteResult | null;
    searchboxAriaDescription: string;
    selectedMatch: AutocompleteMatch | null;
    selectedMatchIndex: number;
    readonly inputKeywordModel: InputKeywordModel | null;
    keywordModeManager: KeywordModeManager;
    showThumbnail: boolean;
    acceptInlineAutocomplete(e: KeyboardEvent): boolean;
    clearAutocompleteMatches(): void;
    computeMatchFillIntoEdit(match: AutocompleteMatch): string;
    fillInputForSelection(selection: OmniboxPopupSelection): void;
    getDropdownElement(): SearchboxDropdownElement;
    getInputElement(): SearchboxInputElement;
    getWrapperElement(): HTMLElement;
    handleKeyNavigation(e: KeyboardEvent): void;
    handleVirtualFocusEnter(e: KeyboardEvent): boolean;
    handleVirtualFocusSpace(e: KeyboardEvent): boolean;
    getSelectionA11yLabel(match: AutocompleteMatch | null, selection: OmniboxPopupSelection): string;
    hasMatches(): boolean;
    isAutocompleteResultStale(result: AutocompleteResult): boolean;
    isBackgroundTabNavigation(e: KeyboardEvent | MouseEvent): boolean;
    isInputEmpty(): boolean;
    narrateSelection(selection: OmniboxPopupSelection): void;
    shouldDropdownBeVisible(): boolean;
    updateDropdownVisibility(): void;
    unfreezeActiveQueryId(): void;
    navigateToMatch(matchIndex: number, e: KeyboardEvent | MouseEvent): void;
    onAutocompleteResultChanged(result: AutocompleteResult | null): void;
    onInputFocusChanged(e: CustomEvent<{
        value: string;
    }>): void;
    onInputWrapperFocusout(e: FocusEvent): void;
    onInputWrapperKeydown(e: KeyboardEvent): void;
    onMatchClick(): void;
    onMatchFocusin(e: CustomEvent<number>): void;
    onKeywordClick(e: Event): void;
    openContextMenu(): void;
    openCtrlEnterMatch(matchIndex: number): void;
    onSearchboxInputTextUpdated(e: CustomEvent<{
        value: string;
        isComposing: boolean;
        event?: Event;
    }>): void;
    onSelectedMatchIndexChanged(e: CustomEvent<{
        value: number;
    }>): void;
    pageHandler(): PageHandlerInterface;
    queryAutocomplete(input: string, preventInlineAutocomplete: boolean, isOnFocus: boolean): void;
    getTabId(): number | null;
    shouldAppendDotComOnCtrlEnter(): boolean;
    shouldPreserveSelectionOnMatchDeletion(): boolean;
    updateInputForSelection(nextSelection: OmniboxPopupSelection, key: string): void;
}
export {};
