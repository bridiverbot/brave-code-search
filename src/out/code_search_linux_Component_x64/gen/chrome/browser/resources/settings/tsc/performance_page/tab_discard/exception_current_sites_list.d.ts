import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '../../site_favicon.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExceptionCurrentSitesListElement {
    $: {
        list: HTMLElement;
    };
}
type Site = string;
export declare class ExceptionCurrentSitesListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentSites_: {
            type: ArrayConstructor;
        };
        selectedSites_: {
            type: ObjectConstructor;
        };
        submitDisabled: {
            type: BooleanConstructor;
            notify: boolean;
        };
        updateIntervalMS_: {
            type: NumberConstructor;
        };
        visible: {
            type: BooleanConstructor;
        };
    };
    private browserProxy_;
    private metricsProxy_;
    protected accessor currentSites_: Site[];
    private accessor selectedSites_;
    accessor submitDisabled: boolean;
    private accessor updateIntervalMS_;
    accessor visible: boolean;
    private onVisibilityChangedListener_;
    private updateIntervalID_;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onVisibilityChanged_;
    private startUpdatingCurrentSites_;
    private stopUpdatingCurrentSites_;
    setUpdateIntervalForTesting(updateIntervalMS: number): void;
    getIsUpdatingForTesting(): boolean;
    private updateCurrentSites_;
    private computeSubmitDisabled_;
    protected isSelectedSite_(site: Site): boolean;
    protected onSelectionChange_(e: Event): void;
    submit(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-current-sites-list': ExceptionCurrentSitesListElement;
    }
}
export {};
