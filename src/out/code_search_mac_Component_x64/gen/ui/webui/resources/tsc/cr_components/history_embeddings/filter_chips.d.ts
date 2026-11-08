import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
export interface Suggestion {
    label: string;
    timeRangeStart: Date;
    ariaLabel: string;
}
export interface HistoryEmbeddingsFilterChipsElement {
    $: {
        showByGroupSelectMenu: HTMLSelectElement;
    };
}
declare const HistoryEmbeddingsFilterChipsElementElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class HistoryEmbeddingsFilterChipsElement extends HistoryEmbeddingsFilterChipsElementElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableShowResultsByGroupOption: {
            type: BooleanConstructor;
        };
        timeRangeStart: {
            type: ObjectConstructor;
        };
        selectedSuggestion: {
            type: ObjectConstructor;
            notify: boolean;
        };
        showResultsByGroup: {
            type: BooleanConstructor;
            notify: boolean;
        };
        suggestions_: {
            type: ArrayConstructor;
        };
    };
    accessor enableShowResultsByGroupOption: boolean;
    accessor selectedSuggestion: Suggestion | undefined;
    accessor showResultsByGroup: boolean;
    protected accessor suggestions_: Suggestion[];
    accessor timeRangeStart: Date | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected isSuggestionSelected_(suggestion: Suggestion): boolean;
    protected onShowByGroupSelectMenuChange_(): void;
    private onTimeRangeStartChanged_;
    protected onSuggestionClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-history-embeddings-filter-chips': HistoryEmbeddingsFilterChipsElement;
    }
}
export type FilterChipsElement = HistoryEmbeddingsFilterChipsElement;
export {};
