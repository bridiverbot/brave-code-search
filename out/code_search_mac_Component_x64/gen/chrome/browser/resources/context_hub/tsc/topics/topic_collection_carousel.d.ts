import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicCollectionFeedback } from '../context_hub.mojom-webui.js';
import type { Collection, CollectionItem } from './topic_utils.js';
export type CollectionFeedbackChangeEvent = CustomEvent<{
    feedback: TopicCollectionFeedback;
}>;
export interface TopicCollectionCarouselElement {
    $: {
        cards: HTMLElement;
    };
}
export declare class TopicCollectionCarouselElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        collection: {
            type: ObjectConstructor;
        };
        feedback: {
            type: ObjectConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
        canScrollBack_: {
            type: BooleanConstructor;
            state: boolean;
        };
        canScrollForward_: {
            type: BooleanConstructor;
            state: boolean;
        };
        imageUrls_: {
            type: ObjectConstructor;
            state: boolean;
        };
        faviconColors_: {
            type: ObjectConstructor;
            state: boolean;
        };
    };
    accessor collection: Collection | null;
    accessor feedback: TopicCollectionFeedback | null;
    protected accessor feedbackEnabled_: boolean;
    protected accessor canScrollBack_: boolean;
    protected accessor canScrollForward_: boolean;
    protected accessor imageUrls_: Map<string, string>;
    protected accessor faviconColors_: Map<string, string>;
    private resizeObserver_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected isRated_(liked: boolean): boolean;
    protected getRatingAriaLabel_(prefix: string): string;
    protected isItemRejected_(item: CollectionItem): boolean;
    protected getRejectAriaLabel_(item: CollectionItem): string;
    protected onRatingClick_(e: Event): void;
    protected onRejectClick_(e: Event): void;
    private updateFeedback_;
    protected getImageUrl_(url: string): string;
    protected getFavicon_(url: string): string;
    protected getFaviconColorStyle_(url: string): string;
    protected onCardImageError_(e: Event): void;
    protected onCardClick_(e: Event): void;
    protected onBackClick_(): void;
    protected onForwardClick_(): void;
    protected onCardsScroll_(): void;
    private isRtl_;
    private scrollByPage_;
    private updateScrollButtons_;
    private fetchImages_;
    private fetchFaviconColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-collection-carousel': TopicCollectionCarouselElement;
    }
}
