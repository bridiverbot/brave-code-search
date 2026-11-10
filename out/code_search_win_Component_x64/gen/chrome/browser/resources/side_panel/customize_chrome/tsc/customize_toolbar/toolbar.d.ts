import 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { SpHeadingElement } from 'chrome://customize-chrome-side-panel.top-chrome/shared/sp_heading.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Action, Category } from '../customize_toolbar.mojom-webui.js';
declare const ToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export interface ToolbarElement {
    $: {
        heading: SpHeadingElement;
        pinningSelectionCard: HTMLElement;
    };
}
export declare class ToolbarElement extends ToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        actions_: {
            type: ArrayConstructor;
        };
        categories_: {
            type: ArrayConstructor;
        };
        resetToDefaultDisabled_: {
            type: BooleanConstructor;
        };
    };
    private apiProxy_;
    private listenerIds_;
    protected accessor actions_: Action[];
    protected accessor categories_: Category[];
    protected accessor resetToDefaultDisabled_: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    focusOnBackButton(): void;
    protected onBackButtonClick_(): void;
    protected onResetToDefaultClick_(): void;
    protected getActionToggleHandler_(actionId: number, nextValue: boolean): (_event: CustomEvent<boolean>) => void;
    private setActionPinned_;
    private populateUi_;
    private updateResetToDefaultDisabled;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-toolbar': ToolbarElement;
    }
}
export {};
