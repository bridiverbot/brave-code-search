import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import './organizer_list_section_header.js';
import './organizer_list_section_item.js';
import type { PropertyValues, TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OrganizerListSectionClient, OrganizerListSectionDelegate } from './organizer_list_section_delegate.js';
import type { OrganizerListSectionHeaderElement } from './organizer_list_section_header.js';
import type { HighlightableOrganizerListSectionItem, OrganizerListSectionItem, OrganizerListSectionItemElement } from './organizer_list_section_item.js';
export declare const INITIAL_ITEM_COUNT = 3;
export interface OrganizerListSectionElement {
    $: {
        header: OrganizerListSectionHeaderElement;
    };
}
export declare class OrganizerListSectionElement extends CrLitElement implements OrganizerListSectionClient {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        items: {
            type: ArrayConstructor;
        };
        expanded: {
            type: BooleanConstructor;
            notify: boolean;
        };
        noAnimation_: {
            type: BooleanConstructor;
        };
        showAll_: {
            type: BooleanConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        filteredItems_: {
            type: ArrayConstructor;
        };
        filteredSearchQuery_: {
            type: StringConstructor;
        };
        hidden: {
            type: BooleanConstructor;
            reflect: boolean;
            notify: boolean;
        };
    };
    private browserProxy_;
    private sectionStateChangedListenerId_;
    accessor delegate: OrganizerListSectionDelegate<unknown> | null;
    accessor items: Array<OrganizerListSectionItem<unknown>>;
    accessor expanded: boolean;
    protected accessor noAnimation_: boolean;
    protected accessor showAll_: boolean;
    accessor searchQuery: string;
    protected accessor filteredItems_: Array<HighlightableOrganizerListSectionItem<unknown>>;
    protected accessor filteredSearchQuery_: string;
    accessor hidden: boolean;
    private searchOptions_;
    private onVisibilityChange_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    onItemsChanged(items: Array<OrganizerListSectionItem<unknown>>): void;
    private updateItems_;
    private updateSectionState_;
    private onSectionsStateChanged_;
    private updateFilteredItems_;
    protected hasContextMenu_(): boolean;
    protected isSearching_(): boolean;
    protected isExpanded_(): boolean;
    private hasNoSearchResults_;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected hasZeroState_(): boolean;
    protected getZeroState_(): TemplateResult | undefined;
    protected onShowAllChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onItemClick_(e: Event): void;
    protected onItemActionButtonClick_(e: CustomEvent<{
        item: HighlightableOrganizerListSectionItem<unknown>;
        buttonElement: HTMLElement;
    }>): Promise<void>;
    protected onItemContextMenuClick_(e: CustomEvent<{
        item: HighlightableOrganizerListSectionItem<unknown>;
        x: number;
        y: number;
    }>): Promise<void>;
    protected getFilteredItems_(): Array<HighlightableOrganizerListSectionItem<unknown>>;
    focus(): void;
    getNavigableElements(): HTMLElement[];
    getVisibleItems(): OrganizerListSectionItemElement[];
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list-section': OrganizerListSectionElement;
    }
}
