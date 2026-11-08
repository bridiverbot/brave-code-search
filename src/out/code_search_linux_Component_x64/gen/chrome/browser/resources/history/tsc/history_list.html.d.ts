import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { HistoryEntry } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
import type { HistoryListElement } from './history_list.js';
export interface TemplatizedDomNodes {
    infiniteList: CrInfiniteListElement<HistoryEntry>;
}
export declare function getHtml(this: HistoryListElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
