import type { OnCollectionCreatedEvent, OnDataChangedEvent, OnNodeMovedEvent, OnNodesClosedEvent, OnTabsCreatedEvent } from './tab_strip_api_events.mojom-webui.js';
export interface TabStripObserver {
    onTabsCreated: (event: OnTabsCreatedEvent) => void;
    onNodesClosed: (event: OnNodesClosedEvent) => void;
    onDataChanged: (event: OnDataChangedEvent) => void;
    onCollectionCreated: (event: OnCollectionCreatedEvent) => void;
    onNodeMoved: (event: OnNodeMovedEvent) => void;
}
