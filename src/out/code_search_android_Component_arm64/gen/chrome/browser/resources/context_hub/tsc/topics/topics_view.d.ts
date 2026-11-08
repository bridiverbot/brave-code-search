import '//resources/cr_elements/cr_button/cr_button.js';
import './topic_card.js';
import './topic_feedback_export_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback } from '../context_hub.mojom-webui.js';
import type { TopicFeedbackChangeEvent } from './topic_feedback_controls.js';
import type { TopicItem } from './topic_utils.js';
export type TopicsLoadState = 'loading' | 'loaded' | 'error';
export declare class TopicsViewElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topics: {
            type: ArrayConstructor;
        };
        loadState_: {
            type: StringConstructor;
        };
        feedbacks_: {
            type: ObjectConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
        showExportDialog_: {
            type: BooleanConstructor;
        };
    };
    accessor topics: TopicItem[];
    protected accessor loadState_: TopicsLoadState;
    protected accessor feedbacks_: Map<string, TopicFeedback>;
    protected accessor feedbackEnabled_: boolean;
    protected accessor showExportDialog_: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onVisibilityChange_;
    private fetchTopics_;
    private fetchFeedbacks_;
    private deleteFeedbacksOfOldTopics_;
    private refreshFeedbacks_;
    protected isEmpty_(): boolean;
    protected hasTopics_(): boolean;
    protected getFeedback_(topic: TopicItem): TopicFeedback | null;
    protected onTopicFeedbackChange_(e: TopicFeedbackChangeEvent): void;
    protected onSendFeedbackClick_(): void;
    protected onExportDialogClose_(): void;
    protected onTopicFeedbacksCleared_(): void;
    protected onJumpBackIn_(e: CustomEvent<{
        topic: TopicItem;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topics-view': TopicsViewElement;
    }
}
