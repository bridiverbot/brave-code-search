import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PiiDataItem } from './browser_proxy.js';
export declare enum PiiRadioButtons {
    INCLUDE_ALL = "include-all",
    INCLUDE_NONE = "include-none",
    INCLUDE_SOME = "include-some"
}
declare const PiiSelectionElementBase: typeof CrLitElement & (new (...args: any[]) => import("./support_tool_page_mixin_lit.js").SupportToolPageMixinLitInterface);
export declare class PiiSelectionElement extends PiiSelectionElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectAll_: {
            type: BooleanConstructor;
        };
        detectedPiiItems_: {
            type: ArrayConstructor;
        };
        selectedRadioButton_: {
            type: StringConstructor;
        };
        showPIISelection_: {
            type: BooleanConstructor;
        };
    };
    protected accessor selectAll_: boolean;
    protected accessor detectedPiiItems_: PiiDataItem[];
    protected accessor selectedRadioButton_: PiiRadioButtons;
    protected accessor showPIISelection_: boolean;
    private browserProxy_;
    updateDetectedPiiItems(items: PiiDataItem[]): void;
    protected onCancelClick_(): void;
    protected onExportClick_(): void;
    private setSelectAll_;
    protected onSelectedRadioButtonSelectedChanged_(event: CustomEvent<{
        value: string;
    }>): void;
    protected showDisclaimer_(): boolean;
    protected getPiiItemAriaLabel_(item: PiiDataItem): string;
    protected onPiiExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onPiiCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pii-selection': PiiSelectionElement;
    }
}
export {};
