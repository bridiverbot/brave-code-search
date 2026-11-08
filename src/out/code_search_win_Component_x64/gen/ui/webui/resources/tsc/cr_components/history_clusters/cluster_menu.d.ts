import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview This file provides a custom element displaying an action menu.
 * It's meant to be flexible enough to be associated with either a specific
 * visit, or the whole cluster, or the top visit of unlabelled cluster.
 */
declare const ClusterMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ClusterMenuElement {
    $: {
        actionMenuButton: HTMLElement;
    };
}
export declare class ClusterMenuElement extends ClusterMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Usually this is true, but this can be false if deleting history is
         * prohibited by Enterprise policy.
         */
        allowDeletingHistory_: {
            type: BooleanConstructor;
        };
        /**
         * Whether the cluster is in the side panel.
         */
        inSidePanel_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        renderActionMenu_: {
            type: BooleanConstructor;
        };
    };
    protected accessor allowDeletingHistory_: boolean;
    protected accessor inSidePanel_: boolean;
    protected accessor renderActionMenu_: boolean;
    protected onActionMenuButtonClick_(event: Event): Promise<void>;
    protected onOpenAllButtonClick_(event: Event): void;
    protected onHideAllButtonClick_(event: Event): void;
    protected onRemoveAllButtonClick_(event: Event): void;
    private closeActionMenu_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cluster-menu': ClusterMenuElement;
    }
}
export {};
