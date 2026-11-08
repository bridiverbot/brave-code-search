import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { SettingsItem, ToolbarMenu } from './menu_util.js';
export interface MediaMenuElement {
    $: {
        lazyMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const MediaMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class MediaMenuElement extends MediaMenuElementBase implements ToolbarMenu {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        linksEnabled: {
            type: BooleanConstructor;
        };
        imagesEnabled: {
            type: BooleanConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        isSpeechActive: {
            type: BooleanConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
    };
    accessor linksEnabled: boolean;
    accessor imagesEnabled: boolean;
    accessor nonModal: boolean;
    accessor isSpeechActive: boolean;
    protected accessor options_: SettingsItem[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    private initializeMenuOptions_;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected getImageItemLabels_(): string;
    protected getLinkItemLabels_(): string;
    protected onToggleItemClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'media-menu': MediaMenuElement;
    }
}
export {};
