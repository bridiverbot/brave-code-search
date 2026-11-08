import type { CrInfiniteListElement } from 'chrome://resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { Destination } from '../data/destination.js';
import type { PrintPreviewDestinationListElement } from './destination_list.js';
export interface TemplatizedDomNodes {
    'list': CrInfiniteListElement<Destination>;
}
export declare function getHtml(this: PrintPreviewDestinationListElement): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
