import '../icons.html.js';
import '/tab_group_shared/tab_group_dot.js';
import type { OrganizerListSectionClient, OrganizerListSectionDelegate } from '../organizer_list_section_delegate.js';
import type { OrganizerListSectionItem } from '../organizer_list_section_item.js';
import type { Tab } from '../tab_search.mojom-webui.js';
export declare enum OpenTabsItemType {
    TAB = "tab",
    SPLIT_TAB = "split_tab"
}
interface SingleTabItem {
    type: OpenTabsItemType.TAB;
    tab: Tab;
}
interface SplitTabItem {
    type: OpenTabsItemType.SPLIT_TAB;
    tabs: [Tab, Tab];
}
export type OpenTabsItem = SingleTabItem | SplitTabItem;
export declare function isSplitTab(item: OpenTabsItem): item is SplitTabItem;
export declare function isActive(item: OpenTabsItem): boolean;
export declare class OpenTabsDelegate implements OrganizerListSectionDelegate<OpenTabsItem> {
    private browserProxy_;
    private client_?;
    private listenerIds_;
    private tabs_;
    private tabGroupsMap_;
    init(sectionClient: OrganizerListSectionClient): void;
    getId(): string;
    getHeader(): string;
    getItems(): Promise<Array<OrganizerListSectionItem<OpenTabsItem>>>;
    onItemClick(item: OrganizerListSectionItem<OpenTabsItem>): void;
    onItemActionButtonClicked(item: OrganizerListSectionItem<OpenTabsItem>): void;
    private updateTabs_;
    private updateFromProfileData_;
    private notifyClient_;
    private onTabsChanged_;
    private onTabUpdated_;
    private onTabsRemoved_;
    private extractTabs_;
    private getTabGroupFromItem_;
    private getTabGroupTitle_;
    private getOpenTabsItems_;
    private toSectionItem_;
}
export {};
