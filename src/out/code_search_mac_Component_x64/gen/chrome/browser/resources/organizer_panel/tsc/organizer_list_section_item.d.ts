import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import './organizer_list_section_item_description.js';
import './organizer_list_section_item_title.js';
import './stacked_favicons.js';
import type { CrUrlListItemElement, CrUrlListItemSize } from '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import type { PropertyValues, TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Range } from '/tab_group_shared/search.js';
import type { OrganizerListSectionItemDescriptionElement, OrganizerListSectionItemDescriptionPart } from './organizer_list_section_item_description.js';
import type { OrganizerListSectionItemTitleElement } from './organizer_list_section_item_title.js';
export interface OrganizerListSectionItemStackedFavicons {
    urls: [string, string];
    stackVertically: boolean;
}
export interface OrganizerListSectionItemIcon {
    url?: string;
    stackedFavicons?: OrganizerListSectionItemStackedFavicons;
    element?: TemplateResult;
}
export interface OrganizerListSectionItemActionButton {
    icon: string;
    ariaLabel: string;
    tooltip?: string;
}
export interface OrganizerListSectionItem<T> {
    title: string[];
    description?: OrganizerListSectionItemDescriptionPart[];
    extraSearchTerms?: string[];
    prefixIcon?: OrganizerListSectionItemIcon;
    trailingIcon?: string;
    hoveredActionButton?: OrganizerListSectionItemActionButton;
    alwaysShow?: boolean;
    size?: CrUrlListItemSize;
    data?: T;
}
export interface HighlightableItem {
    highlightRanges?: {
        title?: Range[][];
        description?: Range[][];
    };
}
export type HighlightableOrganizerListSectionItem<T = unknown> = OrganizerListSectionItem<T> & HighlightableItem;
export interface OrganizerListSectionItemElement {
    $: {
        crUrlListItem: CrUrlListItemElement;
        description: OrganizerListSectionItemDescriptionElement;
        title: OrganizerListSectionItemTitleElement;
    };
}
declare const OrganizerListSectionItemElementBase: typeof CrLitElement;
export declare class OrganizerListSectionItemElement extends OrganizerListSectionItemElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): TemplateResult<1>;
    static get properties(): {
        hasContextMenu: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        item: {
            type: ObjectConstructor;
        };
    };
    accessor hasContextMenu: boolean;
    accessor item: HighlightableOrganizerListSectionItem<unknown>;
    private listFormatter_;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    focus(): void;
    focusActionButton(): void;
    protected onItemKeydown_(e: KeyboardEvent): void;
    protected onActionButtonKeydown_(e: KeyboardEvent): void;
    protected getAriaLabel_(): string;
    protected getAriaDescription_(): string;
    protected hasDescription_(): boolean;
    protected hasSuffix_(): boolean;
    protected hasActionButton_(): boolean;
    protected onActionButtonClick_(e: Event): void;
    protected onContextmenu_(e: MouseEvent): void;
    protected titleHighlightRanges_(): Range[][];
    protected descriptionHighlightRanges_(): Range[][];
    resetActionButtonStateIfNeeded(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'organizer-list-section-item': OrganizerListSectionItemElement;
    }
}
export {};
