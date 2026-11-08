import type { BrowserCommand, ModuleEvent, PageLoadedMetric, ScrollDepthMetric } from './types.js';
export declare function handleBrowserCommand(messageData: BrowserCommand): void;
export declare function handlePageLoadMetric(data: PageLoadedMetric, isAutoOpen: boolean): void;
export declare function handleScrollDepthMetric(data: ScrollDepthMetric): void;
export declare function handleModuleEvent(data: ModuleEvent): void;
export declare function handleTimeOnPageMetric(time: number, isHeartbeat: boolean): void;
