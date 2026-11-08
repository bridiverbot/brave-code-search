import '/strings.m.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { MenuGroup, MenuStateItem } from './menu_util.js';
export interface GroupedActionMenuElement {
    $: {
        lazyMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const GroupedActionMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class GroupedActionMenuElement extends GroupedActionMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        menuGroups: {
            type: ArrayConstructor;
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
    accessor menuGroups: Array<MenuGroup<unknown>>;
    accessor nonModal: boolean;
    accessor closeOnClick: boolean;
    accessor label: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    focusItem(groupIndex: number, itemIndex: number): void;
    protected onClick_(e: Event): void;
    protected getItemId_(groupIndex: number, itemIndex: number): string;
    protected getAriaOwns_(groupIndex: number, length: number): string;
    protected getItemRole_(item: MenuStateItem<unknown>): string;
    protected isItemSelected_(group: MenuGroup<unknown>, item: MenuStateItem<unknown>): boolean;
    protected getItemAriaChecked_(group: MenuGroup<unknown>, item: MenuStateItem<unknown>): boolean | typeof nothing;
    protected getItemAriaHasPopup_(item: MenuStateItem<unknown>): string | typeof nothing;
    protected getItemDisplayTitle_(item: MenuStateItem<unknown>): string;
    protected getItemIcon_(item: MenuStateItem<unknown>): string | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'grouped-action-menu': GroupedActionMenuElement;
    }
}
export {};
