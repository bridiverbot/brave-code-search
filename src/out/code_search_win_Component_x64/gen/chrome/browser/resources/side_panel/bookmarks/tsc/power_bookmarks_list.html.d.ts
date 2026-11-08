import type { CrLazyListElement } from '//resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import type { DisplayItem, PowerBookmarksListElement } from './power_bookmarks_list.js';
export interface TemplatizedDomNodes {
    listA: CrLazyListElement<DisplayItem>;
    listB: CrLazyListElement<DisplayItem>;
}
export declare function getHtml(this: PowerBookmarksListElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
