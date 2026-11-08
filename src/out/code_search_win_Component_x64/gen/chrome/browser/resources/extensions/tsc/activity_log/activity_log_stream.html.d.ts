import type { CrInfiniteListElement } from '//resources/cr_elements/cr_infinite_list/cr_infinite_list.js';
import type { ActivityLogStreamElement } from './activity_log_stream.js';
import type { StreamItem } from './activity_log_stream_item.js';
export interface TemplatizedDomNodes {
    activityList: CrInfiniteListElement<StreamItem>;
}
export declare function getHtml(this: ActivityLogStreamElement): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
