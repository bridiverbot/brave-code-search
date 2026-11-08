// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './cluster_menu.js';
import './horizontal_carousel.js';
import './search_query.js';
import './url_visit.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { HistoryResultType } from '//resources/cr_components/history/constants.js';
import { I18nMixinLit } from '//resources/cr_elements/i18n_mixin_lit.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './cluster.css.js';
import { getHtml } from './cluster.html.js';
import { browserProxyFactory, ClusterAction, VisitAction } from './history_clusters.mojom-webui.js';
import { MetricsProxyImpl } from './metrics_proxy.js';
import { insertHighlightedTextWithMatchesIntoElement } from './utils.js';
/**
 * @fileoverview This file provides a custom element displaying a cluster.
 */
const ClusterElementBase = I18nMixinLit(CrLitElement);
export class ClusterElement extends ClusterElementBase {
    static get is() {
        return 'history-cluster';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The cluster displayed by this element.
             */
            cluster: { type: Object },
            /**
             * The index of the cluster.
             */
            index: { type: Number },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel: {
                type: Boolean,
                reflect: true,
            },
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: { type: String },
            /**
             * The visible related searches.
             */
            relatedSearches_: { type: Array },
            /**
             * The label for the cluster. This property is actually unused. The side
             * effect of the compute function is used to insert the HTML elements for
             * highlighting into this.$.label element.
             */
            label_: {
                type: String,
                state: true,
            },
            /**
             * The cluster's image URL in a form easily passed to cr-auto-img.
             * Also notifies the outer iron-list of a resize.
             */
            imageUrl_: { type: String },
        };
    }
    #cluster_accessor_storage;
    //============================================================================
    // Properties
    //============================================================================
    get cluster() { return this.#cluster_accessor_storage; }
    set cluster(value) { this.#cluster_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; } // Initialized to an invalid value.
    set index(value) { this.#index_accessor_storage = value; }
    #inSidePanel_accessor_storage = loadTimeData.getBoolean('inSidePanel');
    get inSidePanel() { return this.#inSidePanel_accessor_storage; }
    set inSidePanel(value) { this.#inSidePanel_accessor_storage = value; }
    #query_accessor_storage = '';
    get query() { return this.#query_accessor_storage; }
    set query(value) { this.#query_accessor_storage = value; }
    #imageUrl__accessor_storage = '';
    get imageUrl_() { return this.#imageUrl__accessor_storage; }
    set imageUrl_(value) { this.#imageUrl__accessor_storage = value; }
    #relatedSearches__accessor_storage = [];
    get relatedSearches_() { return this.#relatedSearches__accessor_storage; }
    set relatedSearches_(value) { this.#relatedSearches__accessor_storage = value; }
    callbackRouter_;
    onVisitsHiddenListenerId_ = null;
    onVisitsRemovedListenerId_ = null;
    #label__accessor_storage = 'no_label';
    get label_() { return this.#label__accessor_storage; }
    set label_(value) { this.#label__accessor_storage = value; }
    //============================================================================
    // Overridden methods
    //============================================================================
    constructor() {
        super();
        this.callbackRouter_ = browserProxyFactory.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.onVisitsHiddenListenerId_ =
            this.callbackRouter_.onVisitsHidden.addListener(this.onVisitsRemovedOrHidden_.bind(this));
        this.onVisitsRemovedListenerId_ =
            this.callbackRouter_.onVisitsRemoved.addListener(this.onVisitsRemovedOrHidden_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.onVisitsHiddenListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsHiddenListenerId_);
        this.onVisitsHiddenListenerId_ = null;
        assert(this.onVisitsRemovedListenerId_);
        this.callbackRouter_.removeListener(this.onVisitsRemovedListenerId_);
        this.onVisitsRemovedListenerId_ = null;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('cluster')) {
            assert(this.cluster);
            this.label_ = this.cluster.label ? this.cluster.label : 'no_label';
            this.imageUrl_ = this.cluster.imageUrl ? this.cluster.imageUrl : '';
            this.relatedSearches_ = this.cluster.relatedSearches.filter((query, index) => {
                return query && !(this.inSidePanel && index > 2);
            });
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('label_') && this.label_ !== 'no_label' &&
            this.cluster) {
            insertHighlightedTextWithMatchesIntoElement(this.$.label, this.cluster.label, this.cluster.labelMatchPositions);
        }
        if (changedPrivateProperties.has('imageUrl_')) {
            // iron-list can't handle our size changing because of loading an image
            // without an explicit event. But we also can't send this until we have
            // updated the image property, so send it on the next idle.
            requestIdleCallback(() => {
                this.fire('iron-resize');
            });
        }
        else if (changedProperties.has('cluster')) {
            // Iron-list re-assigns the `cluster` property to reuse existing elements
            // as the user scrolls. Since this property can change the height of this
            // element, we need to notify iron-list that this element's height may
            // need to be re-calculated.
            this.fire('iron-resize');
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onRelatedSearchClicked_() {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kRelatedSearchClicked, this.index);
    }
    /* Clears selection on non alt mouse clicks. Need to wait for browser to
     *  update the DOM fully. */
    onHorizontalCarouselPointerdown_(event) {
        this.onBrowserIdle_().then(() => {
            if (window.getSelection() && !event.altKey) {
                window.getSelection()?.empty();
            }
        });
    }
    onVisitClicked_(event) {
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kVisitClicked, this.index);
        const visit = event.detail;
        const visitIndex = this.getVisitIndex_(visit);
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kClicked, visitIndex, MetricsProxyImpl.getVisitType(visit));
        this.fire('record-history-link-click', {
            resultType: HistoryResultType.GROUPED,
            index: visitIndex,
        });
    }
    onOpenAllVisits_() {
        assert(this.cluster);
        browserProxyFactory.getInstance().handler.openVisitUrlsInTabGroup(this.cluster.visits, this.cluster.tabGroupName ?? null);
        MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kOpenedInTabGroup, this.index);
    }
    onHideAllVisits_() {
        this.fire('hide-visits', this.cluster ? this.cluster.visits : []);
    }
    onRemoveAllVisits_() {
        // Pass event up with new detail of all this cluster's visits.
        this.fire('remove-visits', this.cluster ? this.cluster.visits : []);
    }
    onHideVisit_(event) {
        // The actual hiding is handled in clusters.ts. This is just a good place to
        // record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kHidden, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
    }
    onRemoveVisit_(event) {
        // The actual removal is handled in clusters.ts. This is just a good place
        // to record the metric.
        const visit = event.detail;
        MetricsProxyImpl.getInstance().recordVisitAction(VisitAction.kDeleted, this.getVisitIndex_(visit), MetricsProxyImpl.getVisitType(visit));
        this.fire('remove-visits', [visit]);
    }
    //============================================================================
    // Helper methods
    //============================================================================
    /**
     * Returns a promise that resolves when the browser is idle.
     */
    onBrowserIdle_() {
        return new Promise(resolve => {
            requestIdleCallback(() => {
                resolve();
            });
        });
    }
    /**
     * Called with the original remove or hide params when the last accepted
     * request to browser to remove or hide visits succeeds. Since the same visit
     * may appear in multiple Clusters, all Clusters receive this callback in
     * order to get a chance to remove their matching visits.
     */
    onVisitsRemovedOrHidden_(removedVisits) {
        assert(this.cluster);
        const visitHasBeenRemoved = (visit) => {
            return removedVisits.findIndex((removedVisit) => {
                if (visit.normalizedUrl !== removedVisit.normalizedUrl) {
                    return false;
                }
                // Remove the visit element if any of the removed visit's raw timestamps
                // matches the canonical raw timestamp.
                const rawVisitTime = visit.rawVisitData.visitTime.internalValue;
                return (removedVisit.rawVisitData.visitTime.internalValue ===
                    rawVisitTime) ||
                    removedVisit.duplicates.map(data => data.visitTime.internalValue)
                        .includes(rawVisitTime);
            }) !== -1;
        };
        const allVisits = this.cluster.visits;
        const remainingVisits = allVisits.filter(v => !visitHasBeenRemoved(v));
        if (allVisits.length === remainingVisits.length) {
            return;
        }
        if (!remainingVisits.length) {
            // If all the visits are removed, fire an event to also remove this
            // cluster from the list of clusters.
            this.fire('remove-cluster', this.index);
            MetricsProxyImpl.getInstance().recordClusterAction(ClusterAction.kDeleted, this.index);
        }
        else {
            this.cluster.visits = remainingVisits;
            this.requestUpdate();
        }
        this.updateComplete.then(() => {
            this.fire('iron-resize');
        });
    }
    /**
     * Returns the index of `visit` among the visits in the cluster. Returns -1
     * if the visit is not found in the cluster at all.
     */
    getVisitIndex_(visit) {
        return this.cluster ? this.cluster.visits.indexOf(visit) : -1;
    }
    hideRelatedSearches_() {
        return !this.cluster || !this.cluster.relatedSearches.length;
    }
    debugInfo_() {
        return this.cluster && this.cluster.debugInfo ? this.cluster.debugInfo : '';
    }
    timestamp_() {
        return this.cluster && this.cluster.visits.length > 0 ?
            this.cluster.visits[0].relativeDate :
            '';
    }
    visits_() {
        return this.cluster ? this.cluster.visits : [];
    }
}
customElements.define(ClusterElement.is, ClusterElement);
