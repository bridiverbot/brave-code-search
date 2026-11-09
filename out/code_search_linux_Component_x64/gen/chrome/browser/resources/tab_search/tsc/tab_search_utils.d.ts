import type { Range } from '/tab_group_shared/search.js';
import type { Tab } from './tab_search.mojom-webui.js';
export declare function highlightText(container: HTMLElement, text: string, ranges: Range[] | undefined): void;
export declare function tabHasMediaAlerts(tab: Tab): boolean;
export declare function getMediaAlertImageClass(tab: Tab): string;
export declare function getFaviconUrlForTab(url: string, tab?: Tab | null): string;
