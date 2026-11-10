import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Color as tabGroups_mojom_Color } from './tab_group_types.mojom-webui.js';
import { Position as tabsApi_mojom_Position } from './tab_strip_api_types.mojom-webui.js';
import { TabAlertState as tabs_mojom_TabAlertState, TabNetworkState as tabs_mojom_TabNetworkState } from './tabs.mojom-webui.js';
import { Url as url_mojom_Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export declare const ImageSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabSpec: {
    $: mojo.internal.MojomType;
};
export declare const WindowSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabStripSpec: {
    $: mojo.internal.MojomType;
};
export declare const PinnedTabsSpec: {
    $: mojo.internal.MojomType;
};
export declare const UnpinnedTabsSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupVisualDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const SplitTabSpec: {
    $: mojo.internal.MojomType;
};
export declare const SplitTabVisualDataSpec: {
    $: mojo.internal.MojomType;
};
export declare const ContainerSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabCreatedContainerSpec: {
    $: mojo.internal.MojomType;
};
export declare const DataSpec: {
    $: mojo.internal.MojomType;
};
export declare interface ImageMojoType {
    dataUrl: url_mojom_Url;
}
export type Image = ImageMojoType;
export declare interface TabMojoType {
    id: string;
    title: string;
    url: url_mojom_Url;
    favicon: Image;
    alertStates: tabs_mojom_TabAlertState[];
    networkState: tabs_mojom_TabNetworkState;
    isActive: boolean;
    isSelected: boolean;
    isBlocked: boolean;
}
export type Tab = TabMojoType;
export declare interface WindowMojoType {
    id: string;
}
export type Window = WindowMojoType;
export declare interface TabStripMojoType {
    id: string;
}
export type TabStrip = TabStripMojoType;
export declare interface PinnedTabsMojoType {
    id: string;
}
export type PinnedTabs = PinnedTabsMojoType;
export declare interface UnpinnedTabsMojoType {
    id: string;
}
export type UnpinnedTabs = UnpinnedTabsMojoType;
export declare interface TabGroupMojoType {
    id: string;
    data: TabGroupVisualData;
    isEphemeral: boolean;
}
export type TabGroup = TabGroupMojoType;
export declare interface TabGroupVisualDataMojoType {
    title: string;
    color: tabGroups_mojom_Color;
    isCollapsed: boolean;
}
export type TabGroupVisualData = TabGroupVisualDataMojoType;
export declare interface SplitTabMojoType {
    id: string;
    data: SplitTabVisualData;
}
export type SplitTab = SplitTabMojoType;
export declare const SplitTabVisualData_LayoutSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SplitTabVisualData_Layout {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kSideBySide = 0,
    kStacked = 1
}
export declare interface SplitTabVisualDataMojoType {
    layout: SplitTabVisualData_Layout;
    splitRatio: number;
}
export type SplitTabVisualData = SplitTabVisualDataMojoType;
export declare interface ContainerMojoType {
    data: Data;
    children: Container[];
}
export type Container = ContainerMojoType;
export declare interface TabCreatedContainerMojoType {
    tab: Tab;
    position: tabsApi_mojom_Position;
}
export type TabCreatedContainer = TabCreatedContainerMojoType;
export declare interface Data {
    tab?: Tab;
    tabStrip?: TabStrip;
    pinnedTabs?: PinnedTabs;
    unpinnedTabs?: UnpinnedTabs;
    tabGroup?: TabGroup;
    splitTab?: SplitTab;
    window?: Window;
}
export declare enum DataFieldTags {
    TAB = 0,
    TAB_STRIP = 1,
    PINNED_TABS = 2,
    UNPINNED_TABS = 3,
    TAB_GROUP = 4,
    SPLIT_TAB = 5,
    WINDOW = 6
}
export declare function whichData(u: Data): DataFieldTags;
