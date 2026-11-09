import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './topic_feedback_controls.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback } from '../context_hub.mojom-webui.js';
import type { TopicItem } from './topic_utils.js';
export declare class TopicCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topic: {
            type: ObjectConstructor;
        };
        feedback: {
            type: ObjectConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor topic: TopicItem | null;
    accessor feedback: TopicFeedback | null;
    protected accessor feedbackEnabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected hasContent_(): boolean;
    protected getBadgePath_(): string;
    protected getBackgroundColor_(): string;
    protected getIcon_(): string;
    protected isCrIcon_(): boolean;
    protected getActionAriaLabel_(): string;
    protected onJumpBackInClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-card': TopicCardElement;
    }
}
