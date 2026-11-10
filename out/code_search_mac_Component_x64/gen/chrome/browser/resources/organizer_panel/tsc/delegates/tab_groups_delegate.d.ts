import '//resources/cr_elements/cr_icon/cr_icon.js';
import '/tab_group_shared/tab_group_dot.js';
import '../organizer_list_section_item.js';
import type { TemplateResult } from '//resources/lit/v3_0/lit.rollup.js';
import type { OrganizerListSectionClient, OrganizerListSectionDelegate } from '../organizer_list_section_delegate.js';
import type { OrganizerListSectionItem } from '../organizer_list_section_item.js';
import type { TabGroup } from '../tab_groups.mojom-webui.js';
export declare class TabGroupsDelegate implements OrganizerListSectionDelegate<TabGroup> {
    private browserProxy_;
    private organizerPanelBrowserProxy_;
    private client_?;
    private listenerIds_;
    private tabGroups_;
    init(sectionClient: OrganizerListSectionClient): void;
    getId(): string;
    getHeader(): string;
    getItems(): Promise<Array<OrganizerListSectionItem<TabGroup>>>;
    getZeroState(): TemplateResult;
    shouldAlwaysShowZeroState(): boolean;
    private onCreateTabGroupClick_;
    onItemClick(item: OrganizerListSectionItem<TabGroup>): void;
    onItemActionButtonClicked(item: OrganizerListSectionItem<TabGroup>, buttonElement: HTMLElement): Promise<void>;
    onItemContextMenuClicked(item: OrganizerListSectionItem<TabGroup>, x: number, y: number): Promise<void>;
    private notifyClient_;
    private onTabGroupAdded_;
    private onTabGroupRemoved_;
    private onTabGroupUpdated_;
    private tabGroupToSectionItem_;
}
