import '/strings.m.js';
import 'chrome://resources/cr_components/history_clusters/clusters.js';
import 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import 'chrome://resources/cr_components/history_embeddings/icons.html.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import type { HistoryClustersElement } from 'chrome://resources/cr_components/history_clusters/clusters.js';
import type { HistoryEmbeddingsMoreActionsClickEvent, HistoryEmbeddingsResultClickEvent, HistoryEmbeddingsResultContextMenuEvent } from 'chrome://resources/cr_components/history_embeddings/history_embeddings.js';
import type { CrToolbarSearchFieldElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface HistoryClustersAppElement {
    $: {
        embeddingsScrollContainer: HTMLElement;
        searchbox: CrToolbarSearchFieldElement;
        historyClusters: HistoryClustersElement;
    };
}
export declare class HistoryClustersAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableHistoryEmbeddings_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasHistoryEmbeddingsResults_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        historyEmbeddingsDisclaimerLinkClicked_: {
            type: BooleanConstructor;
        };
        nonEmbeddingsResultClicked_: {
            type: BooleanConstructor;
        };
        numCharsTypedInSearch_: {
            type: NumberConstructor;
        };
        /**
         * The current query for which related clusters are requested and shown.
         */
        query: {
            type: StringConstructor;
        };
        scrollTarget_: {
            type: ObjectConstructor;
        };
        searchIcon_: {
            type: StringConstructor;
        };
    };
    constructor();
    protected accessor enableHistoryEmbeddings_: boolean;
    protected accessor hasHistoryEmbeddingsResults_: boolean;
    protected accessor historyEmbeddingsDisclaimerLinkClicked_: boolean;
    accessor query: string;
    protected accessor nonEmbeddingsResultClicked_: boolean;
    protected accessor numCharsTypedInSearch_: number;
    protected accessor scrollTarget_: HTMLElement;
    protected accessor searchIcon_: string | undefined;
    protected onContextmenu_(event: MouseEvent): void;
    connectedCallback(): void;
    protected getClustersComponentClass_(): string;
    protected onHistoryEmbeddingsDisclaimerLinkAuxclick_(e: Event): void;
    protected onHistoryEmbeddingsDisclaimerLinkClick_(e: Event): void;
    /**
     * Called when the value of the search field changes.
     */
    protected onSearchChanged_(event: CustomEvent<string>): void;
    protected onHistoryEmbeddingsAnswerClick_(event: HistoryEmbeddingsResultClickEvent): void;
    protected onHistoryEmbeddingsResultClick_(event: HistoryEmbeddingsResultClickEvent): void;
    protected onAnswerContextMenu_(event: HistoryEmbeddingsResultContextMenuEvent): void;
    protected onHistoryEmbeddingsResultContextMenu_(event: HistoryEmbeddingsResultContextMenuEvent): void;
    protected onHistoryEmbeddingsIsEmptyChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onHistoryEmbeddingsRemoveItemClick_(e: HistoryEmbeddingsMoreActionsClickEvent): void;
    /**
     * Called when the browser handler forces us to change our query.
     */
    protected onQueryChangedByUser_(event: CustomEvent<string>): void;
    protected onClusterRecordHistoryLinkClick_(): void;
    protected onSearchTermCleared_(): void;
    protected onSearchTermNativeInput_(e: CustomEvent<{
        e: InputEvent;
        inputValue: string;
    }>): void;
    protected shouldShowHistoryEmbeddingsResults_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-clusters-app': HistoryClustersAppElement;
    }
}
