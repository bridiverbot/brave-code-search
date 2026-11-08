import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import './topic_collection_carousel.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicCollectionFeedback, TopicFeedback, TopicQueryFeedback } from '../context_hub.mojom-webui.js';
import type { CollectionFeedbackChangeEvent } from './topic_collection_carousel.js';
import type { Collection, TopicItem, TopicQuery } from './topic_utils.js';
export type QueryFeedbacksChangeEvent = CustomEvent<{
    queryFeedbacks: TopicQueryFeedback[];
}>;
export type CollectionFeedbacksChangeEvent = CustomEvent<{
    collectionFeedbacks: TopicCollectionFeedback[];
}>;
export declare class TopicSummaryPanelElement extends CrLitElement {
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
        queries_: {
            type: ArrayConstructor;
        };
    };
    accessor topic: TopicItem | null;
    accessor feedback: TopicFeedback | null;
    protected accessor feedbackEnabled_: boolean;
    protected accessor queries_: TopicQuery[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getCollectionFeedback_(collection: Collection): TopicCollectionFeedback | null;
    protected onCollectionFeedbackChange_(e: CollectionFeedbackChangeEvent): void;
    protected hasOpenableUrls_(): boolean;
    protected onOpenRelatedTabsClick_(): void;
    protected isQueryRated_(index: number, liked: boolean): boolean;
    protected getQueryAriaLabel_(prefix: string, query: TopicQuery): string;
    protected onQueryRatingClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-summary-panel': TopicSummaryPanelElement;
    }
}
