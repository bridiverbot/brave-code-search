import './simple_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { MenuStateItem, ToolbarMenu } from './menu_util.js';
import type { SimpleActionMenuElement } from './simple_action_menu.js';
export interface FontMenuElement {
    $: {
        menu: SimpleActionMenuElement;
    };
}
declare const FontMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class FontMenuElement extends FontMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        font: {
            type: StringConstructor;
        };
        pageLanguage: {
            type: StringConstructor;
        };
        areFontsLoaded: {
            type: BooleanConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
    };
    protected accessor options_: Array<MenuStateItem<string>>;
    accessor areFontsLoaded: boolean;
    accessor pageLanguage: string;
    accessor font: string;
    accessor nonModal: boolean;
    private visualBrowserProxy_;
    updated(changedProperties: PropertyValues<this>): void;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected selectedFont_(): string | undefined;
    protected onFontChange_(): void;
    private setFontOptions_;
    private getFontItemLabel_;
}
declare global {
    interface HTMLElementTagNameMap {
        'font-menu': FontMenuElement;
    }
}
export {};
