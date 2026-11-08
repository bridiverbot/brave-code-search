import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { MojomData } from './data.js';
import type { DownloadsManagerElement } from './manager.js';
export interface TemplatizedDomNodes {
    downloadsList: CrInfiniteListElement<MojomData>;
}
export declare function getHtml(this: DownloadsManagerElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
