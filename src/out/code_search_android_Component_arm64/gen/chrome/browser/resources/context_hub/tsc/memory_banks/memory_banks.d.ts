import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_search_field/cr_search_field.js';
import '//resources/cr_elements/icons.html.js';
import '../icons.html.js';
import './memory_banks_edit_dialog.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { MemoryBankEntry } from '../context_hub.mojom-webui.js';
import type { SearchSuggestion } from './memory_banks_search.js';
export interface MemoryBanksElement {
    $: {
        actionMenu: CrActionMenuElement;
        fileInput: HTMLInputElement;
    };
}
export declare class MemoryBanksElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entries: {
            type: ArrayConstructor;
        };
        selectedIds: {
            type: ObjectConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        selectedCollections_: {
            type: ObjectConstructor;
            state: boolean;
        };
        selectedTags_: {
            type: ObjectConstructor;
            state: boolean;
        };
        activeFilterMenu_: {
            type: StringConstructor;
            state: boolean;
        };
        availableCollections_: {
            type: ArrayConstructor;
            state: boolean;
        };
        availableTags_: {
            type: ArrayConstructor;
            state: boolean;
        };
        filteredEntries_: {
            type: ArrayConstructor;
            state: boolean;
        };
        viewMode_: {
            type: StringConstructor;
            state: boolean;
        };
        currentPage_: {
            type: NumberConstructor;
            state: boolean;
        };
        geminiResponse_: {
            type: StringConstructor;
            state: boolean;
        };
        isAskingGemini_: {
            type: BooleanConstructor;
            state: boolean;
        };
        showGeminiPanel_: {
            type: BooleanConstructor;
            state: boolean;
        };
        editingEntry_: {
            type: ObjectConstructor;
            state: boolean;
        };
        searchSuggestions_: {
            type: ArrayConstructor;
            state: boolean;
        };
        highlightedSuggestionIndex_: {
            type: NumberConstructor;
            state: boolean;
        };
    };
    accessor entries: MemoryBankEntry[];
    accessor selectedIds: Set<bigint>;
    accessor searchQuery: string;
    protected accessor selectedCollections_: Set<string>;
    protected accessor selectedTags_: Set<string>;
    protected accessor activeFilterMenu_: 'collections' | 'tags' | null;
    protected accessor availableCollections_: string[];
    protected accessor availableTags_: string[];
    protected accessor filteredEntries_: MemoryBankEntry[];
    protected accessor viewMode_: 'card' | 'table';
    protected accessor currentPage_: number;
    protected pageSize_: number;
    protected accessor geminiResponse_: string;
    protected accessor isAskingGemini_: boolean;
    protected accessor showGeminiPanel_: boolean;
    protected accessor editingEntry_: MemoryBankEntry | null;
    protected accessor searchSuggestions_: SearchSuggestion[];
    protected accessor highlightedSuggestionIndex_: number;
    private activeMenuEntry_;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private fetchEntries;
    private computeAvailableCollections_;
    private computeAvailableTags_;
    private computeFilteredEntries_;
    protected onFilterChipClick_(e: MouseEvent): void;
    protected getSelectedCollectionCount_(): number;
    protected isCollectionFilterActive_(): boolean;
    protected isAllCollectionsSelected_(): boolean;
    protected isCollectionSelected_(collection: string): boolean;
    protected onToggleAllCollectionsChange_(e: Event): void;
    protected onCollectionCheckboxChange_(e: Event): void;
    protected getSelectedTagCount_(): number;
    protected isTagFilterActive_(): boolean;
    protected isAllTagsSelected_(): boolean;
    protected isTagSelected_(tag: string): boolean;
    protected onToggleAllTagsChange_(e: Event): void;
    protected onTagCheckboxChange_(e: Event): void;
    protected onFilterDropdownKeydown_(e: KeyboardEvent): void;
    protected onViewModeChange_(mode: 'card' | 'table'): void;
    protected onTableViewClick_(): void;
    protected onCardViewClick_(): void;
    protected getPaginatedEntries_(): MemoryBankEntry[];
    protected getPaginationInfo_(): string;
    protected isLastPage_(): boolean;
    protected onPreviousPageClick_(): void;
    protected onNextPageClick_(): void;
    protected formatDisplayUrl_(url: string): string;
    protected formatDate_(mojoTime?: {
        internalValue: bigint;
    } | null): string;
    private onDocumentPointerDown_;
    protected onMoreActionsClick_(e: MouseEvent): void;
    protected onMenuEditClick_(): void;
    protected onMenuDeleteClick_(): Promise<void>;
    protected onEditDialogClose_(): void;
    isSelected(id: bigint): boolean;
    protected isAllSelected_(): boolean;
    protected isSomeSelected_(): boolean;
    onCheckboxClick(e: Event): void;
    onCheckboxChange(e: Event): void;
    protected onSelectAllChange_(e: Event): void;
    private get searchField_();
    protected updateSuggestions_(input?: string): void;
    private closeSuggestions_;
    protected onSearchFocusin_(): void;
    protected onSearchFocusout_(e: FocusEvent): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onSearchKeydown_(e: KeyboardEvent): void;
    protected applySuggestion_(suggestion: SearchSuggestion): Promise<void>;
    protected onSuggestionMousedown_(e: MouseEvent): void;
    private setSearchQuery_;
    protected onCopyClick_(): Promise<void>;
    protected onDownloadSelectedEntriesClick_(): void;
    protected onUploadClick_(): void;
    protected onFileUploadChange_(e: Event): Promise<void>;
    protected onDownloadGeminiResponseClick_(): void;
    protected onDeleteClick_(): Promise<void>;
    private deleteEntries_;
    protected onAskGeminiClick_(): void;
    protected onClosePanelClick_(): void;
    protected onCloseResponseClick_(): void;
    protected onQuickOptionClick_(e: Event): Promise<void>;
    private convertDateToMojoTime_;
    private parseEntriesFromMarkdown_;
    private getSelectedEntriesAsMarkdown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-banks': MemoryBanksElement;
    }
}
