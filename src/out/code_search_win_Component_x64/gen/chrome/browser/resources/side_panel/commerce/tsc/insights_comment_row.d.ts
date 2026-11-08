import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class InsightsCommentRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        shouldShowFeedback_: {
            type: BooleanConstructor;
        };
    };
    protected accessor shouldShowFeedback_: boolean;
    private priceInsightsProxy_;
    protected onFeedbackClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'insights-comment-row': InsightsCommentRowElement;
    }
}
