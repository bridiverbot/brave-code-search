import './grouped_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { GroupedActionMenuElement } from './grouped_action_menu.js';
import type { MenuGroup, ToolbarMenu } from './menu_util.js';
export interface AppearanceMenuElement {
    $: {
        menu: GroupedActionMenuElement;
    };
}
declare const AppearanceMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class AppearanceMenuElement extends AppearanceMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        theme: {
            type: NumberConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        presentationState: {
            type: NumberConstructor;
        };
        groups_: {
            type: ArrayConstructor;
        };
    };
    accessor theme: number;
    accessor nonModal: boolean;
    accessor presentationState: number;
    private visualBrowserProxy_;
    private colorOptions_;
    private viewOptions_;
    protected accessor groups_: Array<MenuGroup<number>>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeGroups_;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'appearance-menu': AppearanceMenuElement;
    }
}
export {};
