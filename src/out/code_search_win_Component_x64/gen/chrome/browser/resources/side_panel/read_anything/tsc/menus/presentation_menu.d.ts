import './simple_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { MenuStateItem, ToolbarMenu } from './menu_util.js';
import type { SimpleActionMenuElement } from './simple_action_menu.js';
export interface PresentationMenuElement {
    $: {
        menu: SimpleActionMenuElement;
    };
}
declare const PresentationMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PresentationMenuElement extends PresentationMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        presentationState: {
            type: NumberConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
    };
    accessor presentationState: number;
    accessor nonModal: boolean;
    private visualBrowserProxy_;
    protected accessor options_: Array<MenuStateItem<number>>;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected onPresentationChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'presentation-menu': PresentationMenuElement;
    }
}
export {};
