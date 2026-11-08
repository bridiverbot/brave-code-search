import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_components/help_bubble/new_badge.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrLazyRenderLitElement } from '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SettingsItem } from './menu_util.js';
export declare const MENU_SHOW_DELAY_MS = 400;
export declare const SUBMENU_SHOW_DELAY_MS = 800;
export declare const KEYBOARD_NAV_CLASS = "keyboard-nav";
export interface SettingsMenuElement {
    $: {
        lazyMenu: CrLazyRenderLitElement<CrActionMenuElement>;
    };
}
declare const SettingsMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsMenuElement extends SettingsMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isImmersiveMode: {
            type: BooleanConstructor;
        };
        isReadAnythingPinned: {
            type: BooleanConstructor;
        };
        isSpeechActive: {
            type: BooleanConstructor;
        };
        showLineFocusNewBadge: {
            type: BooleanConstructor;
        };
        linksEnabled: {
            type: BooleanConstructor;
        };
        imagesEnabled: {
            type: BooleanConstructor;
        };
        currentOpenId_: {
            state: boolean;
            type: StringConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
    };
    accessor isImmersiveMode: boolean;
    accessor isReadAnythingPinned: boolean;
    accessor isSpeechActive: boolean;
    accessor showLineFocusNewBadge: boolean;
    accessor linksEnabled: boolean;
    accessor imagesEnabled: boolean;
    protected accessor options_: SettingsItem[];
    protected accessor currentOpenId_: string | null;
    private interceptedEvents_;
    private openTimer_;
    private closeTimer_;
    private lastMenuOpenTime_;
    private pointerEventCallback_;
    private keyDownCallback_;
    private logger_;
    private visualBrowserProxy_;
    private isOnPreviewPlayButton;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getAriaExpanded_(item: SettingsItem): string | typeof nothing;
    private initializeMenuOptionsLegacy_;
    private initializeMenuOptionsForImprovedUi_;
    private initializeMenuOptions_;
    private getLinkItemLabels;
    private getImageItemLabels;
    private getPinItemLabels;
    protected onMenuItemClick_(e: Event): void;
    private onActionMenuItemClick_;
    private onToggleMenuItemClick_;
    protected onPointerenter_(e: PointerEvent): void;
    protected onPointerleave_(event: PointerEvent): void;
    private startCloseTimer_;
    private clearTimers_;
    private clearOpenTimer_;
    private clearCloseTimer_;
    open(anchor: HTMLElement): void;
    protected onClose_(): void;
    close(): void;
    private onPointerEvent_;
    private onKeyDown_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-menu': SettingsMenuElement;
    }
}
export {};
