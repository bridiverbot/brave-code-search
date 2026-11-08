import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * Enum matching `omnibox::LhsRailConfig::ClickAction::ClientAction` in
 * `third_party/omnibox_proto/lhs_rail_config.proto`.
 */
export declare enum LhsClientAction {
    UNSPECIFIED = 0,
    NAVIGATE = 1,
    EXPAND_RAIL = 2,
    FOCUS_REALBOX_AIM = 3
}
export interface LhsRailItem {
    iconSvg: string;
    name: string;
    clientAction: LhsClientAction;
    targetUrl?: string;
}
export interface LhsRailConfig {
    items?: LhsRailItem[];
}
declare const ThreadsRailElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * The element for displaying the AI Mode threads rail.
 */
export declare class ThreadsRailElement extends ThreadsRailElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        config_: {
            type: ObjectConstructor;
        };
    };
    protected accessor config_: LhsRailConfig;
    protected getItems_(): LhsRailItem[];
    protected getIconStyle_(item: LhsRailItem): string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onItemClick_(e: Event): void;
    protected onLogoClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-threads-rail': ThreadsRailElement;
    }
}
export {};
