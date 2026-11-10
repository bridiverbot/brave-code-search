import type { CrLazyListElement } from '//resources/cr_elements/cr_lazy_list/cr_lazy_list.js';
import type { ReadLaterEntry } from './reading_list.mojom-webui.js';
import type { ReadingListAppElement } from './reading_list_app.js';
export interface TemplatizedDomNodes {
    readingListList: CrLazyListElement<ReadLaterEntry>;
}
export declare function getHtml(this: ReadingListAppElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
