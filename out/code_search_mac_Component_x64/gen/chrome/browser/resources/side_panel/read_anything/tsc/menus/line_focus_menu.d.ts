import './grouped_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { LineFocusMovement, LineFocusStyle } from '../content/read_anything_types.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { GroupedActionMenuElement } from './grouped_action_menu.js';
import type { MenuGroup, ToolbarMenu } from './menu_util.js';
export declare const LINE_FOCUS_FEATURE_NAME = "ReadAnythingLineFocus";
export interface LineFocusMenuElement {
    $: {
        menu: GroupedActionMenuElement;
    };
}
declare const LineFocusMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class LineFocusMenuElement extends LineFocusMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        nonModal: {
            type: BooleanConstructor;
        };
        lineFocusStyle: {
            type: ObjectConstructor;
        };
        lineFocusEnabled: {
            type: BooleanConstructor;
        };
        lineFocusMovement: {
            type: NumberConstructor;
        };
        groups_: {
            type: ArrayConstructor;
        };
    };
    accessor nonModal: boolean;
    accessor lineFocusStyle: LineFocusStyle | null;
    accessor lineFocusEnabled: boolean;
    accessor lineFocusMovement: LineFocusMovement | null;
    proxy: Object | undefined;
    private visualBrowserProxy_;
    private toggleOptions_;
    private styleOptions_;
    private movementOptions_;
    private get toggleGroup_();
    private get styleGroup_();
    private get movementGroup_();
    protected accessor groups_: Array<MenuGroup<LineFocusStyle | LineFocusMovement | boolean>>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeGroups_;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'line-focus-menu': LineFocusMenuElement;
    }
}
export {};
