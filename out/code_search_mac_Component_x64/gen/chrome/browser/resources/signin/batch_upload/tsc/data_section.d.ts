import '/strings.m.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrCollapseElement } from '//resources/cr_elements/cr_collapse/cr_collapse.js';
import type { CrExpandButtonElement } from '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrToggleElement } from '//resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { DataContainer } from './batch_upload.js';
export interface DataSectionElement {
    $: {
        sectionTitle: HTMLElement;
        expandButton: CrExpandButtonElement;
        separator: HTMLElement;
        toggle: CrToggleElement;
        collapse: CrCollapseElement;
    };
}
declare const DataSectionElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class DataSectionElement extends DataSectionElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dataContainer: {
            type: ObjectConstructor;
        };
        title_: {
            type: StringConstructor;
        };
        titleWithoutCount_: {
            type: StringConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        disabled_: {
            type: BooleanConstructor;
        };
        dataSelectedCount_: {
            type: NumberConstructor;
        };
    };
    accessor dataContainer: DataContainer;
    protected accessor title_: string;
    protected accessor titleWithoutCount_: string;
    protected accessor expanded_: boolean;
    protected accessor disabled_: boolean;
    dataSelected: Set<number>;
    protected accessor dataSelectedCount_: number;
    private intervalDurationOfUpdateHeightRequests_;
    private collapseAnimationDuration_;
    connectedCallback(): Promise<void>;
    willUpdate(changedProperties: PropertyValues<this>): Promise<void>;
    firstUpdated(): void;
    private initializeSectionOutput_;
    private resetWithState_;
    private updateViewHeightInterval_;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onToggleCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected getToggleAriaLabel_(): string;
    protected isCheckboxChecked_(itemId: number): boolean;
    protected onCheckboxChange_(e: CustomEvent<boolean>): void;
    protected onCheckboxFocus_(e: Event): void;
    protected isThemeSection(): boolean;
    protected isStrEmpty_(str: string): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-section': DataSectionElement;
    }
}
export {};
