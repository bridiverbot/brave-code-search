import './simple_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { MenuStateItem, ToolbarMenu } from './menu_util.js';
import type { SimpleActionMenuElement } from './simple_action_menu.js';
export interface LetterSpacingMenuElement {
    $: {
        menu: SimpleActionMenuElement;
    };
}
declare const LetterSpacingMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class LetterSpacingMenuElement extends LetterSpacingMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        letterSpacing: {
            type: NumberConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
    };
    accessor letterSpacing: number;
    accessor nonModal: boolean;
    private visualBrowserProxy_;
    protected accessor options_: Array<MenuStateItem<number>>;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected onLetterSpacingChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'letter-spacing-menu': LetterSpacingMenuElement;
    }
}
export {};
