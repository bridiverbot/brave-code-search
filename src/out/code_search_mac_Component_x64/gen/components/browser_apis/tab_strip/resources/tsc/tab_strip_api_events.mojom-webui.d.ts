import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { Container as tabsApi_mojom_Container, SplitTab as tabsApi_mojom_SplitTab, Tab as tabsApi_mojom_Tab, TabCreatedContainer as tabsApi_mojom_TabCreatedContainer, TabGroup as tabsApi_mojom_TabGroup } from './tab_strip_api_data_model.mojom-webui.js';
import { Position as tabsApi_mojom_Position, TabFieldMask as tabsApi_mojom_TabFieldMask } from './tab_strip_api_types.mojom-webui.js';
export declare const OnTabsCreatedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const OnNodesClosedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabChangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const TabGroupChangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const SplitTabChangeSpec: {
    $: mojo.internal.MojomType;
};
export declare const OnCollectionCreatedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const OnNodeMovedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare const OnDataChangedEventSpec: {
    $: mojo.internal.MojomType;
};
export declare interface OnTabsCreatedEventMojoType {
    tabs: tabsApi_mojom_TabCreatedContainer[];
}
export type OnTabsCreatedEvent = OnTabsCreatedEventMojoType;
export declare interface OnNodesClosedEventMojoType {
    nodeIds: string[];
}
export type OnNodesClosedEvent = OnNodesClosedEventMojoType;
export declare interface TabChangeMojoType {
    data: tabsApi_mojom_Tab;
    mask: tabsApi_mojom_TabFieldMask;
}
export type TabChange = TabChangeMojoType;
export declare interface TabGroupChangeMojoType {
    data: tabsApi_mojom_TabGroup;
}
export type TabGroupChange = TabGroupChangeMojoType;
export declare interface SplitTabChangeMojoType {
    data: tabsApi_mojom_SplitTab;
}
export type SplitTabChange = SplitTabChangeMojoType;
export declare interface OnCollectionCreatedEventMojoType {
    position: tabsApi_mojom_Position;
    collection: tabsApi_mojom_Container;
}
export type OnCollectionCreatedEvent = OnCollectionCreatedEventMojoType;
export declare interface OnNodeMovedEventMojoType {
    id: string;
    from: tabsApi_mojom_Position;
    to: tabsApi_mojom_Position;
}
export type OnNodeMovedEvent = OnNodeMovedEventMojoType;
export declare interface OnDataChangedEvent {
    tab?: TabChange;
    tabGroup?: TabGroupChange;
    splitTab?: SplitTabChange;
}
export declare enum OnDataChangedEventFieldTags {
    TAB = 0,
    TAB_GROUP = 1,
    SPLIT_TAB = 2
}
export declare function whichOnDataChangedEvent(u: OnDataChangedEvent): OnDataChangedEventFieldTags;
