import './icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface MenuItem {
    action: string;
    icon: string;
    text: string;
}
export interface ModuleHeaderElement {
    $: {
        actionMenu: CrActionMenuElement;
        menuButton: HTMLElement;
        title: HTMLElement;
    };
}
/** Element that displays a header inside a module.  */
export declare class ModuleHeaderElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        headerText: {
            type: StringConstructor;
        };
        moreActionsText: {
            type: StringConstructor;
        };
        menuItems: {
            type: ArrayConstructor;
        };
        hideCustomize: {
            type: BooleanConstructor;
        };
    };
    accessor headerText: string | null;
    accessor menuItems: MenuItem[];
    accessor moreActionsText: string;
    accessor hideCustomize: boolean;
    protected onButtonClick_(e: Event): void;
    protected onMenuButtonClick_(e: Event): void;
    protected showDivider_(): boolean;
    protected getTuneIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-module-header': ModuleHeaderElement;
    }
}
