import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './exception_add_input.js';
import './exception_current_sites_list.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrTabsElement } from 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExceptionAddInputElement } from './exception_add_input.js';
import type { ExceptionCurrentSitesListElement } from './exception_current_sites_list.js';
export declare enum ExceptionAddDialogTabs {
    CURRENT_SITES = 0,
    MANUAL = 1
}
export interface ExceptionTabbedAddDialogElement {
    $: {
        actionButton: CrButtonElement;
        cancelButton: CrButtonElement;
        dialog: CrDialogElement;
        input: ExceptionAddInputElement;
        list: ExceptionCurrentSitesListElement;
        tabs: CrTabsElement;
    };
}
export declare class ExceptionTabbedAddDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedTab_: {
            type: NumberConstructor;
        };
        tabNames_: {
            type: ArrayConstructor;
        };
        submitDisabledList_: {
            type: BooleanConstructor;
        };
        submitDisabledManual_: {
            type: BooleanConstructor;
        };
    };
    protected accessor selectedTab_: ExceptionAddDialogTabs;
    protected accessor tabNames_: string[];
    protected accessor submitDisabledList_: boolean;
    protected accessor submitDisabledManual_: boolean;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: ExceptionAddDialogTabs;
    }>): void;
    protected onListSubmitDisabledChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onInputSubmitDisabledChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onSitesPopulated_(e: CustomEvent<{
        length: number;
    }>): void;
    protected isAddCurrentSitesTabSelected_(): boolean;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): void;
    protected isSubmitDisabled_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-tabbed-add-dialog': ExceptionTabbedAddDialogElement;
    }
}
