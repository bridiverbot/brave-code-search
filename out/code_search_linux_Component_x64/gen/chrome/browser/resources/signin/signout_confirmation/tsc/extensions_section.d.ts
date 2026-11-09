import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '/strings.m.js';
import type { CrCollapseElement } from '//resources/cr_elements/cr_collapse/cr_collapse.js';
import type { CrExpandButtonElement } from '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExtensionInfo } from './signout_confirmation.mojom-webui.js';
export interface ExtensionsSectionElement {
    $: {
        checkbox: CrCheckboxElement;
        expandButton: CrExpandButtonElement;
        collapse: CrCollapseElement;
    };
}
export declare class ExtensionsSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accountExtensions: {
            type: ArrayConstructor;
        };
        title_: {
            type: StringConstructor;
        };
        tooltip_: {
            type: StringConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
    };
    accessor accountExtensions: ExtensionInfo[];
    protected accessor title_: string;
    protected accessor tooltip_: string;
    protected accessor expanded_: boolean;
    private updateHeightInterval_;
    private collapseAnimationDuration_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    checked(): boolean;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onTitleSet_;
    private updateViewHeightInterval_;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-section': ExtensionsSectionElement;
    }
}
