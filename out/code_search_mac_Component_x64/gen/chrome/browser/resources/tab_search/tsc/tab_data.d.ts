import type { Range } from '/tab_group_shared/search.js';
import type { Token } from 'chrome://resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import type { RecentlyClosedSplitView, RecentlyClosedTab, RecentlyClosedTabGroup, Tab, TabGroup } from './tab_search.mojom-webui.js';
import { SplitTabLayout } from './tab_search.mojom-webui.js';
export declare enum TabItemType {
    OPEN_TAB = 1,
    RECENTLY_CLOSED_TAB = 2,
    RECENTLY_CLOSED_TAB_GROUP = 3,
    OPEN_SPLIT = 4,
    RECENTLY_CLOSED_SPLIT = 5
}
export declare class ItemData {
    inActiveWindow: boolean;
    type: TabItemType;
    a11yTypeText: string;
    tabGroup?: TabGroup | RecentlyClosedTabGroup;
    highlightRanges: Record<string, Range[]>;
}
/**
 * TabData contains tabSearch.mojom.Tab and data derived from it.
 * It makes tabSearch.mojom.Tab immutable and works well for TypeScript type
 * checking.
 */
export declare class TabData extends ItemData {
    tab: Tab | RecentlyClosedTab;
    hostname: string;
    constructor(tab: Tab | RecentlyClosedTab, type: TabItemType, hostname: string);
}
export declare class TabGroupData extends ItemData {
    tabGroup: RecentlyClosedTabGroup;
    constructor(tabGroup: RecentlyClosedTabGroup);
}
export declare class SplitViewData extends ItemData {
    splitView?: RecentlyClosedSplitView;
    tabs?: [Tab, Tab];
    constructor(options: {
        splitView?: RecentlyClosedSplitView;
        tabs?: [Tab, Tab];
    });
    get title(): string;
    get sessionId(): number;
    get splitId(): Token | undefined;
    get tabCount(): number;
    get lastActiveElapsedText(): string;
    get tabUrls(): string[];
    get layout(): SplitTabLayout;
}
/**
 * Converts a token to a string by combining the high and low values as strings
 * with a hashtag as the separator.
 */
export declare function tokenToString(token: Token): string;
export declare function tokenEquals(a: Token, b: Token): boolean;
export declare function ariaLabel(itemData: ItemData): string;
export declare function normalizeURL(url: string): string;
export declare function getDisplayHostnameForUrl(url: URL): string;
export declare function getTitle(data: TabData | TabGroupData | SplitViewData): string | undefined;
export declare function getHostname(data: TabData | TabGroupData | SplitViewData): string | undefined;
export declare function getTabGroupTitle(data: TabData | TabGroupData | SplitViewData): string | undefined;
