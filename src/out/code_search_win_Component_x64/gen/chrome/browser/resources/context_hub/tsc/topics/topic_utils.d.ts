import type { Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import { TopicDefectCategory, TopicRating } from '../context_hub.mojom-webui.js';
import type { DuplicateTopicSnapshot, Topic, TopicCollectionFeedback, TopicContinuationQuery, TopicFeedback, TopicSnapshot, TopicVisit } from '../context_hub.mojom-webui.js';
export interface CollectionItem {
    title: string;
    url: string;
    siteName: string;
    visitTime: Time;
}
export interface Collection {
    title: string;
    items: CollectionItem[];
}
export interface TopicItem {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    creationTime: Time;
    visits: TopicVisit[];
    continuationQueries: TopicContinuationQuery[];
    collections: Collection[];
}
export declare const DEFAULT_ICON = "cr:insert-drive-file";
export declare function isTopicsEnabled(): boolean;
export declare function isTopicsFishfoodFeedbackEnabled(): boolean;
export interface TopicDefectCategoryOption {
    category: TopicDefectCategory;
    label: string;
    description: string;
}
export declare const TOPIC_DEFECT_CATEGORIES: readonly TopicDefectCategoryOption[];
export interface TopicSuggestionField {
    defect: TopicDefectCategory;
    label: string;
}
export declare const TOPIC_SUGGESTION_FIELDS: readonly TopicSuggestionField[];
export interface TopicFeedbackComment {
    text: string;
    suggestions: Map<TopicDefectCategory, string>;
}
export declare function parseTopicFeedbackComment(comment: string): TopicFeedbackComment;
export declare function formatTopicFeedbackComment(text: string, suggestions: Map<TopicDefectCategory, string>): string;
export declare function normalizeTopicFeedbackComment(comment: string): string;
export declare function createTopicSnapshot(topic: TopicItem): TopicSnapshot;
export declare function createEmptyTopicFeedback(topic: TopicItem): TopicFeedback;
export declare function hasTopicFeedbackComment(feedback: TopicFeedback): boolean;
export declare function hasTopicFeedbackCommentText(feedback: TopicFeedback): boolean;
export declare function hasSameRating(a: TopicFeedback, b: TopicFeedback): boolean;
export declare function isTopicFeedbackValid(feedback: TopicFeedback): boolean;
export declare function isTopicFeedbackEmpty(feedback: TopicFeedback): boolean;
export declare const MAX_SUGGESTED_PROMPTS = 3;
export interface TopicQuery {
    index: number;
    text: string;
}
export declare function getTopicQueries(topic: TopicItem): TopicQuery[];
export declare function toTopicRating(liked: boolean): TopicRating;
export declare function createEmptyCollectionFeedback(title: string): TopicCollectionFeedback;
export declare function isCollectionFeedbackEmpty(feedback: TopicCollectionFeedback): boolean;
export declare function setCollectionFeedback(collectionFeedbacks: readonly TopicCollectionFeedback[], feedback: TopicCollectionFeedback): TopicCollectionFeedback[];
export declare function createDuplicateTopicSnapshot(topic: TopicItem): DuplicateTopicSnapshot;
export declare function isVisitRejected(rejectedVisits: readonly Time[], visitTime: Time): boolean;
export declare function setVisitsRejected(rejectedVisits: readonly Time[], visitTimes: readonly Time[], rejected: boolean): Time[];
export declare function formatTopicTime(time: Time): string;
export declare function toTopicItem(topic: Topic): TopicItem;
export declare function isCrIcon(icon: string): boolean;
export declare function isWebUrl(url: string): boolean;
export declare function getOpenableUrls(topic: TopicItem): string[];
export declare const MAX_TOPIC_SITES = 10;
export declare function getTopicSites(topic: TopicItem): TopicVisit[];
export declare function getDisplayDomain(url: string): string;
export type BadgeShape = 'cloud' | 'flower' | 'circle' | 'diamond';
export declare const BADGE_BACKGROUND_COLORS: readonly string[];
export declare function getBadgeShapeForTopic(id: string): BadgeShape;
export declare function getBackgroundColorForTopic(id: string): string;
export declare function getBadgePath(shape: BadgeShape): string;
