import type { ForeignTab } from '../foreign_tabs.mojom-webui.js';
import type { OrganizerListSectionClient, OrganizerListSectionDelegate } from '../organizer_list_section_delegate.js';
import type { OrganizerListSectionItem } from '../organizer_list_section_item.js';
export declare class ForeignTabsDelegate implements OrganizerListSectionDelegate<ForeignTab> {
    private browserProxy_;
    init(_sectionClient: OrganizerListSectionClient): void;
    getId(): string;
    getHeader(): string;
    getItems(): Promise<Array<OrganizerListSectionItem<ForeignTab>>>;
    onItemClick(item: OrganizerListSectionItem<ForeignTab>): void;
}
