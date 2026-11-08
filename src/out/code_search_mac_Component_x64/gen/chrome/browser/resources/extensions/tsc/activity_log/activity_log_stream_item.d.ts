import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface StreamItem {
    name?: string;
    timestamp: number;
    activityType: chrome.activityLogPrivate.ExtensionActivityType;
    pageUrl?: string;
    argUrl: string;
    args: string;
    webRequestInfo?: string;
    expanded: boolean;
}
/**
 * A struct used to describe each argument for an activity (each item in
 * the parsed version of |data.args|). Contains the argument's value itself
 * and its index.
 */
export interface StreamArgItem {
    arg: string;
    index: number;
}
/**
 * Placeholder for arg_url that can occur in |StreamItem.args|. Sometimes we
 * see this as '\u003Carg_url>' (opening arrow is unicode converted) but
 * string comparison with the non-unicode value still returns true so we
 * don't need to convert.
 */
export declare const ARG_URL_PLACEHOLDER: string;
export declare class ActivityLogStreamItemElement extends CrLitElement {
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
        argsList_: {
            type: ArrayConstructor;
        };
        isExpandable_: {
            type: BooleanConstructor;
        };
    };
    accessor data: StreamItem;
    protected accessor expanded_: boolean;
    protected accessor argsList_: StreamArgItem[];
    protected accessor isExpandable_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getFormattedTime_(): string;
    protected hasPageUrl_(): boolean;
    protected hasArgs_(): boolean;
    protected hasWebRequestInfo_(): boolean;
    private computeArgsList_;
    protected onExpandClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'activity-log-stream-item': ActivityLogStreamItemElement;
    }
}
