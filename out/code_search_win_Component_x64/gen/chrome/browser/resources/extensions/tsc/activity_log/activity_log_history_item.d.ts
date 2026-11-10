import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ActivityGroup {
    activityIds: Set<string>;
    key: string;
    count: number;
    activityType: chrome.activityLogPrivate.ExtensionActivityFilter;
    countsByUrl: Map<string, number>;
    expanded: boolean;
}
/**
 * A struct used to describe each url and its associated counts. The id is
 * unique for each item in the list of URLs and is used for the tooltip.
 */
export interface PageUrlItem {
    page: string;
    count: number;
}
export declare class ActivityLogHistoryItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The underlying ActivityGroup that provides data for the
         * ActivityLogItem displayed.
         */
        data: {
            type: ObjectConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        isExpandable_: {
            type: BooleanConstructor;
        };
    };
    accessor data: ActivityGroup;
    protected accessor expanded_: boolean;
    protected accessor isExpandable_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    expand(expanded: boolean): void;
    /**
     * Sort the page URLs by the number of times it was associated with the key
     * for this ActivityGroup (API call or content script invocation.) Resolve
     * ties by the alphabetical order of the page URL.
     */
    protected getPageUrls_(): PageUrlItem[];
    protected onDeleteClick_(e: Event): void;
    protected onExpandClick_(): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    /**
     * Show the call count for a particular page URL if more than one page
     * URL is associated with the key for this ActivityGroup.
     */
    protected shouldShowPageUrlCount_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'activity-log-history-item': ActivityLogHistoryItemElement;
    }
}
