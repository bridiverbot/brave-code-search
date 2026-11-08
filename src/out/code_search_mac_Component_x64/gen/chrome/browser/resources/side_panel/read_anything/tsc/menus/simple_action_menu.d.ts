import '/strings.m.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import { ToolbarEvent } from '../content/read_anything_types.js';
import type { MenuStateItem } from './menu_util.js';
export interface SimpleActionMenuElement {
    $: {
        lazyMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const SimpleActionMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SimpleActionMenuElement extends SimpleActionMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedValue: {
            type: ObjectConstructor;
        };
        menuItems: {
            type: ArrayConstructor;
        };
        eventName: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        closeOnClick: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor selectedValue: unknown;
    accessor menuItems: Array<MenuStateItem<unknown>>;
    accessor nonModal: boolean;
    accessor closeOnClick: boolean;
    accessor eventName: ToolbarEvent;
    accessor label: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected onClick_(e: Event): void;
    protected isItemSelected_(item: MenuStateItem<unknown>): boolean;
    protected doesItemHaveIcon_(item: MenuStateItem<unknown>): boolean;
    protected itemIcon_(item: MenuStateItem<unknown>): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'simple-action-menu': SimpleActionMenuElement;
    }
}
export {};
