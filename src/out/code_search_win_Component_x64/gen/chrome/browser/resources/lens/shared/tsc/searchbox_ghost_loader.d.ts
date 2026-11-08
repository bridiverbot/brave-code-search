import '/strings.m.js';
import '//resources/cr_components/searchbox/searchbox_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const SearchboxGhostLoaderElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SearchboxGhostLoaderElement extends SearchboxGhostLoaderElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableCsbMotionTweaks: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showErrorState: {
            type: BooleanConstructor;
            reflect: boolean;
            notify: boolean;
        };
        showContextualSearchboxLoadingState: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        pageContentType: {
            type: NumberConstructor;
        };
        enableSummarizeSuggestionHint: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        suggestionCount: {
            type: NumberConstructor;
        };
    };
    private accessor enableCsbMotionTweaks;
    private accessor showErrorState;
    protected accessor showContextualSearchboxLoadingState: boolean;
    private accessor pageContentType;
    private accessor enableSummarizeSuggestionHint;
    private accessor suggestionCount;
    private browserProxy;
    private listenerIds;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getText(): string;
    showErrorStateForTesting(): void;
    protected getGhostLoaderPrimaryMessage(): string;
    protected getSuggestionItems(): number[];
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-ghost-loader': SearchboxGhostLoaderElement;
    }
}
export {};
