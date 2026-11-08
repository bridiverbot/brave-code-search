import type { CrLazyListElement } from '//resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import type { BookmarksListElement } from './list.js';
export interface TemplatizedDomNodes {
    list: CrLazyListElement<string>;
}
export declare function getHtml(this: BookmarksListElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
