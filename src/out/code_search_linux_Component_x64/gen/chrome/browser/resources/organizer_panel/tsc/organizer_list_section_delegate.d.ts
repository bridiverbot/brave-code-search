import type { TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import type { OrganizerListSectionItem } from './organizer_list_section_item.js';
export interface OrganizerListSectionClient {
    onItemsChanged(items: Array<OrganizerListSectionItem<unknown>>): void;
}
export interface OrganizerListSectionDelegate<T> {
    init(sectionClient: OrganizerListSectionClient): void;
    getId(): string;
    getHeader(): string;
    getItems(): Promise<Array<OrganizerListSectionItem<T>>>;
    onItemClick(item: OrganizerListSectionItem<T>): void;
    onItemActionButtonClicked?(item: OrganizerListSectionItem<T>, buttonElement: HTMLElement): Promise<void> | void;
    onItemContextMenuClicked?(item: OrganizerListSectionItem<T>, x: number, y: number): Promise<void> | void;
    getZeroState?(): TemplateResult;
    shouldAlwaysShowZeroState?(): boolean;
}
