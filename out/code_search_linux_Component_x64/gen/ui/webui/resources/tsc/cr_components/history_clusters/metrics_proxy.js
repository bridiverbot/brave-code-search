// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Annotation } from './history_cluster_types.mojom-webui.js';
import { browserProxyFactory, VisitType } from './history_clusters.mojom-webui.js';
export class MetricsProxyImpl {
    recordClusterAction(action, index) {
        browserProxyFactory.getInstance().handler.recordClusterAction(action, index);
    }
    recordRelatedSearchAction(action, index) {
        browserProxyFactory.getInstance().handler.recordRelatedSearchAction(action, index);
    }
    recordToggledVisibility(visible) {
        browserProxyFactory.getInstance().handler.recordToggledVisibility(visible);
    }
    recordVisitAction(action, index, type) {
        browserProxyFactory.getInstance().handler.recordVisitAction(action, index, type);
    }
    static getInstance() {
        return instance || (instance = new MetricsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    /**
     * Returns the VisitType based on whether this is a visit to the default
     * search provider's results page.
     */
    static getVisitType(visit) {
        return visit.annotations.includes(Annotation.kSearchResultsPage) ?
            VisitType.kSRP :
            VisitType.kNonSRP;
    }
}
let instance = null;
