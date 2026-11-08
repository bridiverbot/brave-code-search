import './page_favicon.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { URLVisit } from './history_cluster_types.mojom-webui.js';
declare const ClusterMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface UrlVisitElement {
    $: {
        actionMenuButton: HTMLElement;
        title: HTMLElement;
        url: HTMLElement;
    };
}
export declare class UrlVisitElement extends ClusterMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The current query for which related clusters are requested and shown.
         */
        query: {
            type: StringConstructor;
        };
        /**
         * The visit to display.
         */
        visit: {
            type: ObjectConstructor;
        };
        /**
         * Whether this visit is within a persisted cluster.
         */
        fromPersistence: {
            type: BooleanConstructor;
        };
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
    accessor query: string;
    accessor visit: URLVisit | undefined;
    accessor fromPersistence: boolean;
    protected annotations_: string[];
    protected accessor allowDeletingHistory_: boolean;
    protected accessor inSidePanel_: boolean;
    protected accessor renderActionMenu_: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    private fireVisitClickedEvent_;
    protected onAuxclick_(event: MouseEvent): void;
    protected onClick_(event: MouseEvent): void;
    protected onContextmenu_(event: MouseEvent): void;
    protected onKeydown_(e: KeyboardEvent): void;
    protected onActionMenuButtonClick_(event: Event): Promise<void>;
    protected onHideSelfButtonClick_(event: Event): void;
    protected onRemoveSelfButtonClick_(event: Event): void;
    private emitMenuButtonClick_;
    protected computeAnnotations_(): string[];
    protected computeDebugInfo_(): string;
    private openUrl_;
}
declare global {
    interface HTMLElementTagNameMap {
        'url-visit': UrlVisitElement;
    }
}
export {};
