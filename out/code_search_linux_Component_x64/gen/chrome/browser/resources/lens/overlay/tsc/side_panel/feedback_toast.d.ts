import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '/strings.m.js';
import type { CrButtonElement } from '//resources/cr_elements/cr_button/cr_button.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface FeedbackToastElement {
    $: {
        closeFeedbackToastButton: CrButtonElement;
        feedbackToast: CrToastElement;
    };
}
export declare class FeedbackToastElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        updatedFeedbackEnabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    protected accessor darkMode: boolean;
    protected accessor updatedFeedbackEnabled: boolean;
    private browserProxy;
    show(): void;
    hide(): void;
    protected onSendFeedbackClick(): void;
    protected onHideFeedbackToastClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'feedback-toast': FeedbackToastElement;
    }
}
