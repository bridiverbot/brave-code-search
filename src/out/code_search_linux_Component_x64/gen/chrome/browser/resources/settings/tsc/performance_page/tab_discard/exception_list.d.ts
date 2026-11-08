import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './exception_edit_dialog.js';
import './exception_entry.js';
import './exception_tabbed_add_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrCollapseElement } from 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import type { CrExpandButtonElement } from 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExceptionEntry } from './exception_entry.js';
export declare const TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE: number;
export interface ExceptionListElement {
    $: {
        addButton: CrButtonElement;
        collapse: CrCollapseElement;
        expandButton: CrExpandButtonElement;
        menu: CrLazyRenderLitElement<CrActionMenuElement>;
        noSitesAdded: HTMLElement;
        tooltip: CrTooltipElement;
    };
}
declare const ExceptionListElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../../tooltip_mixin_lit.js").TooltipMixinLitInterface);
export declare class ExceptionListElement extends ExceptionListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        siteList_: {
            type: ArrayConstructor;
        };
        overflowSiteListExpanded_: {
            type: BooleanConstructor;
        };
        selectedRule_: {
            type: StringConstructor;
        };
        showTabbedAddDialog_: {
            type: BooleanConstructor;
        };
        showEditDialog_: {
            type: BooleanConstructor;
        };
        tooltipText_: {
            type: StringConstructor;
        };
    };
    protected accessor siteList_: ExceptionEntry[];
    protected accessor overflowSiteListExpanded_: boolean;
    protected accessor selectedRule_: string;
    protected accessor showTabbedAddDialog_: boolean;
    protected accessor showEditDialog_: boolean;
    protected accessor tooltipText_: string;
    private metricsProxy_;
    connectedCallback(): void;
    protected hasSites_(): boolean;
    protected hasOverflowSites_(): boolean;
    protected getSiteList_(): ExceptionEntry[];
    protected getOverflowSiteList_(): ExceptionEntry[];
    protected onOverflowSiteListExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onAddClick_(): void;
    protected onMenuClick_(e: CustomEvent<{
        target: HTMLElement;
        site: string;
    }>): void;
    protected onEditClick_(): void;
    protected onDeleteClick_(): void;
    protected onTabbedAddDialogClose_(): void;
    protected onEditDialogClose_(): void;
    private updateList_;
    /**
     * Need to use common tooltip since the tooltip in the entry is cut off from
     * the iron-list.
     */
    protected onShowTooltip_(e: CustomEvent<{
        target: HTMLElement;
        text: string;
    }>): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-discard-exception-list': ExceptionListElement;
    }
}
export {};
