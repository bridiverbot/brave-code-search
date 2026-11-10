import type { URLVisit } from './history_cluster_types.mojom-webui.js';
import { VisitType } from './history_clusters.mojom-webui.js';
import type { ClusterAction, RelatedSearchAction, VisitAction } from './history_clusters.mojom-webui.js';
/**
 * @fileoverview This file provides an abstraction layer for logging metrics for
 * mocking in tests.
 */
export interface MetricsProxy {
    recordClusterAction(action: ClusterAction, index: number): void;
    recordRelatedSearchAction(action: RelatedSearchAction, index: number): void;
    recordToggledVisibility(visible: boolean): void;
    recordVisitAction(action: VisitAction, index: number, type: VisitType): void;
}
export declare class MetricsProxyImpl implements MetricsProxy {
    recordClusterAction(action: ClusterAction, index: number): void;
    recordRelatedSearchAction(action: RelatedSearchAction, index: number): void;
    recordToggledVisibility(visible: boolean): void;
    recordVisitAction(action: VisitAction, index: number, type: VisitType): void;
    static getInstance(): MetricsProxy;
    static setInstance(obj: MetricsProxy): void;
    /**
     * Returns the VisitType based on whether this is a visit to the default
     * search provider's results page.
     */
    static getVisitType(visit: URLVisit): VisitType;
}
