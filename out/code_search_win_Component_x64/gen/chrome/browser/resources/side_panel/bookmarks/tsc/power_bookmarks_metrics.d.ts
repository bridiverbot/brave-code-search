import { SortOrder } from './bookmarks.mojom-webui.js';
export declare enum SearchAction {
    SHOWN = 0,
    SEARCHED = 1,
    COUNT = 2
}
export declare function recordFolderAdded(): void;
export declare function recordBookmarkAdded(): void;
export declare function recordSearchCTR(action: SearchAction): void;
export declare function recordSortType(sortOrder: SortOrder): void;
export declare function recordViewType(isCompact: boolean): void;
export declare function recordBookmarksShown(count: number, hasSomeActiveFilter: boolean): void;
