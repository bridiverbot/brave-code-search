import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { HistoryEvent, MergedHistoryEvent } from '../event_history.js';
export declare class RawEventDetailsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        label: {
            type: StringConstructor;
            reflect: boolean;
        };
        events: {
            type: ArrayConstructor;
        };
        expanded: {
            type: BooleanConstructor;
        };
    };
    accessor label: string;
    accessor events: Array<HistoryEvent | MergedHistoryEvent | Record<string, unknown>>;
    protected accessor expanded: boolean;
    protected onExpandedChanged(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'raw-event-details': RawEventDetailsElement;
    }
}
