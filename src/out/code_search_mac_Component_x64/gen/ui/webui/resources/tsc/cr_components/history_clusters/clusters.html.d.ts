import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { HistoryClustersElement } from './clusters.js';
import type { Cluster } from './history_cluster_types.mojom-webui.js';
export interface TemplatizedDomNodes {
    clusters: CrInfiniteListElement<Cluster>;
}
export declare function getHtml(this: HistoryClustersElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
