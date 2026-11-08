import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import './icons.html.js';
import './result_image.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrFeedbackOption } from '//resources/cr_elements/cr_feedback_buttons/cr_feedback_buttons.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SearchResult, SearchResultItem } from './history_embeddings.mojom-webui.js';
export declare const LOADING_STATE_MINIMUM_MS = 300;
export interface HistoryEmbeddingsElement {
    $: {
        sharedMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
export type HistoryEmbeddingsResultClickEvent = CustomEvent<{
    item: SearchResultItem;
    middleButton: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}>;
export type HistoryEmbeddingsResultContextMenuEvent = CustomEvent<{
    item: SearchResultItem;
    x: number;
    y: number;
}>;
export type HistoryEmbeddingsMoreActionsClickEvent = CustomEvent<SearchResultItem>;
declare global {
    interface HTMLElementEventMap {
        'more-from-site-click': HistoryEmbeddingsMoreActionsClickEvent;
        'remove-item-click': HistoryEmbeddingsMoreActionsClickEvent;
    }
}
declare const HistoryEmbeddingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class HistoryEmbeddingsElement extends HistoryEmbeddingsElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        clickedIndices_: {
            type: ObjectConstructor;
        };
        forceSuppressLogging: {
            type: BooleanConstructor;
        };
        numCharsForQuery: {
            type: NumberConstructor;
        };
        feedbackState_: {
            type: NumberConstructor;
        };
        loadingAnswer_: {
            type: BooleanConstructor;
        };
        loadingResults_: {
            type: BooleanConstructor;
        };
        searchResult_: {
            type: ObjectConstructor;
        };
        searchResultDirty_: {
            type: BooleanConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        timeRangeStart: {
            type: ObjectConstructor;
        };
        isEmpty: {
            type: BooleanConstructor;
            reflect: boolean;
            notify: boolean;
        };
        enableAnswers_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableImages_: {
            type: BooleanConstructor;
        };
        answerSource_: {
            type: ObjectConstructor;
        };
        showMoreFromSiteMenuOption: {
            type: BooleanConstructor;
        };
        showRelativeTimes: {
            type: BooleanConstructor;
        };
        otherHistoryResultClicked: {
            type: BooleanConstructor;
        };
        inSidePanel: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    private actionMenuItem_;
    protected accessor answerSource_: SearchResultItem | null;
    private answerLinkClicked_;
    private browserProxy_;
    private accessor clickedIndices_;
    protected accessor enableAnswers_: boolean;
    protected accessor enableImages_: boolean;
    protected accessor feedbackState_: CrFeedbackOption;
    protected accessor loadingAnswer_: boolean;
    protected accessor loadingResults_: boolean;
    private loadingStateMinimumMs_;
    private queryResultMinAge_;
    protected accessor searchResult_: SearchResult | null;
    protected accessor searchResultDirty_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private searchTimestamp_;
    /**
     * When this is non-null, that means there's a SearchResult that's pending
     * metrics logging since this debouncer timestamp. The debouncing is needed
     * because queries are issued as the user types, and we want to skip logging
     * these trivial queries the user typed through.
     */
    private resultPendingMetricsTimestamp_;
    private eventTracker_;
    accessor forceSuppressLogging: boolean;
    accessor isEmpty: boolean;
    accessor numCharsForQuery: number;
    private numCharsForLastResultQuery_;
    accessor searchQuery: string;
    accessor timeRangeStart: Date | undefined;
    private searchResultChangedId_;
    /**
     * A promise of a setTimeout for the first set of search results to come back
     * from a search. The loading state has a minimum time it needs to be on the
     * screen before showing the first set of search results, and any subsequent
     * search result for the same query is queued after it.
     */
    private searchResultPromise_;
    accessor showRelativeTimes: boolean;
    accessor showMoreFromSiteMenuOption: boolean;
    accessor otherHistoryResultClicked: boolean;
    accessor inSidePanel: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeAnswerSource_;
    private computeIsEmpty_;
    protected getAnswerOrError_(): string | undefined;
    protected getAnswerSourceUrl_(): string | undefined;
    protected getFavicon_(item: SearchResultItem | undefined): string;
    protected getHeadingText_(): string;
    protected getHeadingTextForAnswerSection_(): string;
    protected getAnswerDateTime_(): string;
    protected getDateTime_(item: SearchResultItem): string;
    private hasAnswer_;
    protected isAnswerErrorState_(): boolean;
    protected onFeedbackSelectedOptionChanged_(e: CustomEvent<{
        value: CrFeedbackOption;
    }>): void;
    protected onAnswerLinkContextmenu_(e: MouseEvent): void;
    protected onAnswerLinkAuxclick_(e: MouseEvent): void;
    protected onAnswerLinkClick_(e: MouseEvent): void;
    protected onMoreActionsClick_(e: Event): void;
    protected onMoreFromSiteClick_(): void;
    protected onRemoveFromHistoryClick_(): Promise<void>;
    protected onResultContextmenu_(e: MouseEvent): void;
    protected onResultAuxclick_(e: MouseEvent): void;
    protected onResultClick_(e: MouseEvent): void;
    private onSearchQueryChanged_;
    private searchResultChanged_;
    private searchResultChangedImpl_;
    protected showAnswerSection_(): boolean;
    /**
     * Flushes any pending query result metric or log waiting to be logged.
     */
    private flushDebouncedUserMetrics_;
    overrideLoadingStateMinimumMsForTesting(ms: number): void;
    overrideQueryResultMinAgeForTesting(ms: number): void;
    searchResultChangedForTesting(result: SearchResult): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-history-embeddings': HistoryEmbeddingsElement;
    }
}
export {};
