import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import '/strings.m.js';
import './topic_feedback_controls.js';
import './topic_hero.js';
import './topic_sites_dialog.js';
import './topic_summary_panel.js';
import './topic_visits_panel.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback, TopicVisit } from '../context_hub.mojom-webui.js';
import type { TopicFeedbackChangeEvent } from './topic_feedback_controls.js';
import type { CollectionFeedbacksChangeEvent, QueryFeedbacksChangeEvent } from './topic_summary_panel.js';
import type { TopicItem } from './topic_utils.js';
import type { RejectedVisitsChangeEvent } from './topic_visits_panel.js';
export type TopicDetailsLoadState = 'loading' | 'loaded' | 'not-found';
export declare const TOPIC_DETAILS_TABS: readonly string[];
export declare const TOPIC_VISITS_TAB = "Topic Visits (Fishfood)";
export interface DuplicateOption {
    id: string;
    title: string;
}
export declare function getSuggestedPrompts(topic: TopicItem): string[];
export declare class TopicDetailsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topic: {
            type: ObjectConstructor;
        };
        loadState_: {
            type: StringConstructor;
        };
        selectedTab_: {
            type: NumberConstructor;
        };
        sites_: {
            type: ArrayConstructor;
        };
        tabNames_: {
            type: ArrayConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
        feedback_: {
            type: ObjectConstructor;
        };
        otherTopics_: {
            type: ArrayConstructor;
        };
    };
    accessor topic: TopicItem | null;
    protected accessor loadState_: TopicDetailsLoadState;
    protected accessor selectedTab_: number;
    protected accessor sites_: TopicVisit[];
    protected accessor feedbackEnabled_: boolean;
    protected accessor tabNames_: string[];
    protected accessor feedback_: TopicFeedback | null;
    protected accessor otherTopics_: TopicItem[];
    private initStarted_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private initTopic_;
    private fetchTopic_;
    private maybeOpenGlicPanel_;
    private updateDocumentTitle_;
    private loadFeedback_;
    private updateFeedback_;
    protected onTopicFeedbackChange_(e: TopicFeedbackChangeEvent): void;
    protected onQueryFeedbacksChange_(e: QueryFeedbacksChangeEvent): void;
    protected onCollectionFeedbacksChange_(e: CollectionFeedbacksChangeEvent): void;
    protected onRejectedVisitsChange_(e: RejectedVisitsChangeEvent): void;
    protected isDuplicateSelected_(): boolean;
    protected getDuplicateOptions_(): DuplicateOption[];
    protected getDuplicateOfId_(): string;
    protected onDuplicateChange_(e: Event): void;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    protected getButtonFaviconUrls_(): string[];
    protected getFavicon_(url: string): string;
    protected getSitesLabel_(): string;
    protected onSitesButtonClick_(): void;
    protected onOpenRelatedTabs_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-details': TopicDetailsElement;
    }
}
