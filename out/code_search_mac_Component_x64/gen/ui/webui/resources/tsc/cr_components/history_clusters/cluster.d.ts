import './cluster_menu.js';
import './horizontal_carousel.js';
import './search_query.js';
import './url_visit.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { Cluster, SearchQuery, URLVisit } from './history_cluster_types.mojom-webui.js';
/**
 * @fileoverview This file provides a custom element displaying a cluster.
 */
declare const ClusterElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export interface ClusterElement {
    $: {
        label: HTMLElement;
        container: HTMLElement;
    };
}
export declare class ClusterElement extends ClusterElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The cluster displayed by this element.
         */
        cluster: {
            type: ObjectConstructor;
        };
        /**
         * The index of the cluster.
         */
        index: {
            type: NumberConstructor;
        };
        /**
         * Whether the cluster is in the side panel.
         */
        inSidePanel: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The current query for which related clusters are requested and shown.
         */
        query: {
            type: StringConstructor;
        };
        /**
         * The visible related searches.
         */
        relatedSearches_: {
            type: ArrayConstructor;
        };
        /**
         * The label for the cluster. This property is actually unused. The side
         * effect of the compute function is used to insert the HTML elements for
         * highlighting into this.$.label element.
         */
        label_: {
            type: StringConstructor;
            state: boolean;
        };
        /**
         * The cluster's image URL in a form easily passed to cr-auto-img.
         * Also notifies the outer iron-list of a resize.
         */
        imageUrl_: {
            type: StringConstructor;
        };
    };
    accessor cluster: Cluster | undefined;
    accessor index: number;
    accessor inSidePanel: boolean;
    accessor query: string;
    protected accessor imageUrl_: string;
    protected accessor relatedSearches_: SearchQuery[];
    private callbackRouter_;
    private onVisitsHiddenListenerId_;
    private onVisitsRemovedListenerId_;
    private accessor label_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onRelatedSearchClicked_(): void;
    protected onHorizontalCarouselPointerdown_(event: MouseEvent): void;
    protected onVisitClicked_(event: CustomEvent<URLVisit>): void;
    protected onOpenAllVisits_(): void;
    protected onHideAllVisits_(): void;
    protected onRemoveAllVisits_(): void;
    protected onHideVisit_(event: CustomEvent<URLVisit>): void;
    protected onRemoveVisit_(event: CustomEvent<URLVisit>): void;
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    private onBrowserIdle_;
    /**
     * Called with the original remove or hide params when the last accepted
     * request to browser to remove or hide visits succeeds. Since the same visit
     * may appear in multiple Clusters, all Clusters receive this callback in
     * order to get a chance to remove their matching visits.
     */
    private onVisitsRemovedOrHidden_;
    /**
     * Returns the index of `visit` among the visits in the cluster. Returns -1
     * if the visit is not found in the cluster at all.
     */
    private getVisitIndex_;
    protected hideRelatedSearches_(): boolean;
    protected debugInfo_(): string;
    protected timestamp_(): string;
    protected visits_(): URLVisit[];
}
declare global {
    interface HTMLElementTagNameMap {
        'history-cluster': ClusterElement;
    }
}
export {};
