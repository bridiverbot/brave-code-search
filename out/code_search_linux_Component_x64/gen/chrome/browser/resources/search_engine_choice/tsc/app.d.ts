import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngineChoice } from './search_engine_choice.js';
export interface AppElement {
    $: {
        actionButton: CrButtonElement;
        infoLink: HTMLElement;
        choiceList: HTMLElement;
        buttonContainer: HTMLElement;
        guestCheckbox: HTMLElement;
    };
}
declare const AppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class AppElement extends AppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The choice list is passed as JSON because it doesn't change
         * dynamically, so it would be better to have it available as loadtime
         * data.
         */
        choiceList_: {
            type: ArrayConstructor;
        };
        selectedChoice_: {
            type: NumberConstructor;
        };
        isActionButtonDisabled_: {
            type: BooleanConstructor;
        };
        actionButtonText_: {
            type: StringConstructor;
        };
        hasUserScrolledToTheBottom_: {
            type: BooleanConstructor;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
        saveGuestModeSearchEngineChoice_: {
            type: BooleanConstructor;
        };
        showGuestCheckbox_: {
            type: BooleanConstructor;
        };
    };
    protected accessor choiceList_: SearchEngineChoice[];
    protected accessor selectedChoice_: number;
    protected accessor isActionButtonDisabled_: boolean;
    protected accessor hasUserScrolledToTheBottom_: boolean;
    protected accessor showInfoDialog_: boolean;
    protected accessor actionButtonText_: string;
    protected accessor showGuestCheckbox_: boolean;
    protected accessor saveGuestModeSearchEngineChoice_: boolean;
    private resizeObserver_;
    private pageHandler_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private addResizeObserver_;
    protected onInfoLinkClick_(e: Event): void;
    protected onGuestCheckboxCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onActionButtonClick_(): void;
    private handleContentScrollStateUpdate_;
    protected getMarketingSnippetClass_(item: SearchEngineChoice): "" | "truncate-text";
    protected onInfoDialogButtonClick_(): void;
    private resetSnippetState_;
    private showSearchEngineSnippet_;
    protected onChoiceListSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSelectedChoiceChanged_(newPrepopulatedId: number, oldPrepopulatedId: number | undefined): void;
    private onPageResize_;
    private onPageScroll_;
    private getScrollState_;
    private onPageScrollEnd_;
}
declare global {
    interface HTMLElementTagNameMap {
        'search-engine-choice-app': AppElement;
    }
}
export {};
