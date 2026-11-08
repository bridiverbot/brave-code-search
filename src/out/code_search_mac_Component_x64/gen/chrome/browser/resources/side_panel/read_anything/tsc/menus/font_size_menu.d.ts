import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/icons.html.js';
import '../app/icons.html.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { ToolbarMenu } from './menu_util.js';
export interface FontSizeMenuElement {
    $: {
        lazyMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const FontSizeMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class FontSizeMenuElement extends FontSizeMenuElementBase implements ToolbarMenu {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fontSize: {
            type: NumberConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor fontSize: number;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private visualBrowserProxy_;
    private pendingAnnouncement_;
    updated(changedProperties: PropertyValues<this>): void;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    get(): CrActionMenuElement;
    protected isFontSizeDefault_(): boolean;
    protected isFontSizeMin_(): boolean;
    protected isFontSizeMax_(): boolean;
    protected onDecreaseClick_(): void;
    protected onIncreaseClick_(): void;
    protected onResetClick_(): void;
    private updateFontSize_;
    private announceSizeChange_;
    private restoreAnnounceState_;
    protected onKeydown_(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'font-size-menu': FontSizeMenuElement;
    }
}
export {};
