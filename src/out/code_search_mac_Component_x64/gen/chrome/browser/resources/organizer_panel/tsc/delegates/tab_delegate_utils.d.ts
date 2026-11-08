import type { Token } from '//resources/mojo/mojo/public/mojom/base/token.mojom-webui.js';
import type { OrganizerListSectionItemIcon } from '../organizer_list_section_item.js';
import { SplitTabLayout } from '../tab_search.mojom-webui.js';
export declare function tokenToString(token: Token): string;
export declare function getHostnameOrUrl(url: string): string;
export declare function compareTimeDescending(timeA: {
    internalValue: bigint;
} | null | undefined, timeB: {
    internalValue: bigint;
} | null | undefined): number;
export declare function getTabCountText(tabCount: number): string;
export declare function getSplitViewPrefixIcon(urls: [string, string], layout: SplitTabLayout | null): OrganizerListSectionItemIcon;
