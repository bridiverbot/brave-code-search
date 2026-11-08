import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { EventEntry, EventListElement } from './event_list.js';
export interface TemplatizedDomNodes {
    eventList: CrInfiniteListElement<EventEntry>;
}
export declare function getHtml(this: EventListElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
