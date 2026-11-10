import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '//resources/cr_elements/icons.html.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TopicDefectCategory } from '../context_hub.mojom-webui.js';
import type { TopicFeedback } from '../context_hub.mojom-webui.js';
import type { TopicItem, TopicSuggestionField } from './topic_utils.js';
export type TopicFeedbackChangeEvent = CustomEvent<{
    feedback: TopicFeedback;
}>;
export declare class TopicFeedbackControlsElement extends CrLitElement {
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
        draft_: {
            type: ObjectConstructor;
            state: boolean;
        };
        popoverDefects: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        defectsPopoverOpen_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    accessor topic: TopicItem | null;
    accessor feedback: TopicFeedback | null;
    accessor popoverDefects: boolean;
    protected accessor draft_: TopicFeedback | null;
    protected accessor defectsPopoverOpen_: boolean;
    protected readonly defectCategories_: readonly import("./topic_utils.js").TopicDefectCategoryOption[];
    private openDefectsPopover_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private getDraftForFeedback_;
    protected getThumbsUpAriaLabel_(): string;
    protected getThumbsDownAriaLabel_(): string;
    private getAriaLabel_;
    protected isLiked_(): boolean;
    protected isDisliked_(): boolean;
    protected isDefectSelected_(category: TopicDefectCategory): boolean;
    protected getComment_(): string;
    protected getSuggestionFields_(): TopicSuggestionField[];
    protected getSuggestion_(defect: TopicDefectCategory): string;
    protected isCommentRequired_(): boolean;
    protected isCommentMissing_(): boolean;
    protected getCommentError_(): string;
    protected isDefectMissing_(): boolean;
    protected getReasonsButtonLabel_(): string;
    updated(changedProperties: PropertyValues<this>): void;
    protected onDefectsPopoverToggle_(e: ToggleEvent): void;
    protected onThumbsUpClick_(): void;
    protected onThumbsDownClick_(): void;
    protected onDefectClick_(e: Event): void;
    protected onCommentValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSuggestionValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    private setDraftComment_;
    protected onCommentChange_(e: Event): void;
    private setRating_;
    private getOrCreateDraft_;
    private updateDraft_;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-feedback-controls': TopicFeedbackControlsElement;
    }
}
