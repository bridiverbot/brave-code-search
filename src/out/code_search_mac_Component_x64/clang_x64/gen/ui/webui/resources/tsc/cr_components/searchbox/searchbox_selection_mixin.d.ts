import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteResult, OmniboxPopupSelection } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { SelectionDirection, SelectionStep } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
export declare function selectionsEqual(a: OmniboxPopupSelection, b: OmniboxPopupSelection): boolean;
export declare function selectionToString(s: OmniboxPopupSelection): string;
export declare function selectionIsNativelySupported(s: OmniboxPopupSelection): boolean;
export declare function getMatchSelections(result: AutocompleteResult | null): OmniboxPopupSelection[];
type Constructor<T> = new (...args: any[]) => T;
export interface SearchboxSelectionMixinInterface {
    isAimButtonVisible: boolean;
    inKeywordMode: boolean;
    showContextEntrypoint: boolean;
    selection: OmniboxPopupSelection;
    setSelection(selection: OmniboxPopupSelection): void;
    getAvailableSelections(result: AutocompleteResult | null): OmniboxPopupSelection[];
    stepCyclesSelection(result: AutocompleteResult | null, from: OmniboxPopupSelection, direction: SelectionDirection, step: SelectionStep): boolean;
    getNextSelection(result: AutocompleteResult | null, from: OmniboxPopupSelection, direction: SelectionDirection, step: SelectionStep): OmniboxPopupSelection;
    onSelectionChanged(e: CustomEvent<{
        value: OmniboxPopupSelection;
    }>): void;
    isAiModeVirtualFocused(): boolean;
    isContextEntrypointVirtualFocused(): boolean;
}
export type SearchboxSelectionMixinBase = CrLitElement;
export declare const SearchboxSelectionMixin: <T extends Constructor<SearchboxSelectionMixinBase>>(superClass: T) => T & Constructor<SearchboxSelectionMixinInterface>;
export {};
