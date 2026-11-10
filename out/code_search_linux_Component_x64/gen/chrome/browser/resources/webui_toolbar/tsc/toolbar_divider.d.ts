import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
declare const ToolbarDividerElementBase: typeof CrLitElement & (new (...args: any[]) => import("./overflowable_toolbar_action_mixin.js").OverflowableToolbarActionMixinInterface);
export declare class ToolbarDividerElement extends ToolbarDividerElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    isDivider: boolean;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'toolbar-divider': ToolbarDividerElement;
    }
}
export {};
