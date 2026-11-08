import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Feature } from './flags_browser_proxy.js';
export declare class ExperimentElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        feature_: {
            type: ObjectConstructor;
        };
        unsupported: {
            type: BooleanConstructor;
        };
        isDefault_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        expanded_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showingSearchHit_: {
            type: BooleanConstructor;
        };
    };
    protected accessor feature_: Feature;
    accessor unsupported: boolean;
    protected accessor isDefault_: boolean;
    protected accessor expanded_: boolean;
    protected accessor showingSearchHit_: boolean;
    getRequiredElement<K extends keyof HTMLElementTagNameMap>(query: K): HTMLElementTagNameMap[K];
    getRequiredElement<E extends HTMLElement = HTMLElement>(query: string): E;
    willUpdate(changedProperties: PropertyValues<this>): void;
    set data(feature: Feature);
    protected getExperimentTitle_(): string;
    protected getPlatforms_(): string;
    protected getHeaderId_(): string;
    protected showEnableDisableSelect_(): boolean;
    protected showMultiValueSelect_(): boolean;
    protected onTextareaChange_(e: Event): void;
    protected onTextInputChange_(e: Event): void;
    protected onExperimentNameClick_(_e: Event): void;
    getSelect(): HTMLSelectElement | null;
    getTextarea(): HTMLTextAreaElement | null;
    getTextbox(): HTMLInputElement | null;
    /**
     * Looks for and highlights the first match on any of the component's title,
     * description, platforms and permalink text. Resets any pre-existing
     * highlights.
     * @param searchTerm The query to search for.
     * @return Whether or not a match was found.
     */
    match(searchTerm: string): Promise<boolean>;
    protected computeIsDefault_(): boolean;
    /**
     * Invoked when the selection of an enable/disable choice is changed.
     */
    protected onExperimentEnableDisableChange_(e: Event): void;
    /**
     * Invoked when the selection of a multi-value choice is changed.
     */
    protected onExperimentSelectChange_(e: Event): void;
    /**
     * Invoked when the value of a textarea for origins is changed.
     * @param value The value of the textarea.
     */
    private handleSetOriginListFlag_;
    /**
     * Invoked when the value of an input is changed.
     * @param value The value of the input.
     */
    private handleSetStringFlag_;
}
declare global {
    interface HTMLElementTagNameMap {
        'flags-experiment': ExperimentElement;
    }
}
