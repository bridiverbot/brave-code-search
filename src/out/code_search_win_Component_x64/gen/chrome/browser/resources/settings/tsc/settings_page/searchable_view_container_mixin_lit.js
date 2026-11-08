// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview SearchableViewContainerMixinLit implements the search and
 * highlighting logic for a typical Settings plugin that has parent and child
 * views.
 */
import { assert } from '//resources/js/assert.js';
import { dedupingMixin } from '//resources/lit/v3_0/lit.rollup.js';
import { RouteObserverMixinLit } from '../router.js';
import { combineSearchResults, getSearchManager, showBubble } from '../search_settings.js';
// Attribute added to a view when it should be hidden due to not having any
// search hits.
const HIDDEN_BY_SEARCH = 'hidden-by-search';
export const SearchableViewContainerMixinLit = dedupingMixin((superClass) => {
    const superClassBase = RouteObserverMixinLit(superClass);
    class SearchableViewContainerMixinLit extends superClassBase {
        static get properties() {
            return {
                inSearchMode: { type: Boolean },
                currentRoute: { type: Object },
                shouldShowAll: { type: Boolean },
            };
        }
        #inSearchMode_accessor_storage = false;
        get inSearchMode() { return this.#inSearchMode_accessor_storage; }
        set inSearchMode(value) { this.#inSearchMode_accessor_storage = value; }
        #currentRoute_accessor_storage = null;
        get currentRoute() { return this.#currentRoute_accessor_storage; }
        set currentRoute(value) { this.#currentRoute_accessor_storage = value; }
        #shouldShowAll_accessor_storage = false;
        get shouldShowAll() { return this.#shouldShowAll_accessor_storage; }
        set shouldShowAll(value) { this.#shouldShowAll_accessor_storage = value; }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            if (changedProperties.has('inSearchMode') ||
                changedProperties.has('currentRoute')) {
                this.shouldShowAll = this.inSearchMode && !!this.currentRoute &&
                    !this.currentRoute.isSubpage();
            }
        }
        getCrViewManager_() {
            const viewManager = this.shadowRoot.querySelector('cr-view-manager');
            assert(!!viewManager);
            return viewManager;
        }
        currentRouteChanged(route) {
            this.currentRoute = route;
        }
        async searchContents(query) {
            // Firstly search all parent views to detect any search hits and
            // update their visibility.
            const parentViews = this.getCrViewManager_().querySelectorAll('[slot=view]:not([data-parent-view-id])');
            const parentPromises = Array.from(parentViews).map(view => {
                return getSearchManager().search(query, view).then(request => {
                    const result = request.getSearchResult();
                    if (result.wasClearSearch) {
                        view.removeAttribute(HIDDEN_BY_SEARCH);
                        return result;
                    }
                    view.toggleAttribute(HIDDEN_BY_SEARCH, result.matchCount === 0);
                    return result;
                });
            });
            // Wait for all parent promises to finish, to avoid any race
            // conditions when possibly revealing parent sections later.
            // For now assume that there are not nested child views.
            const parentsResult = combineSearchResults(await Promise.all(parentPromises));
            if (parentsResult.canceled) {
                return parentsResult;
            }
            // Secondly search all child views to detect any search hits and
            // update their parents visibility so that they can be reachable.
            const childViews = this.getCrViewManager_().querySelectorAll('[slot=view][data-parent-view-id]');
            const childPromises = Array.from(childViews).map(view => {
                return getSearchManager().search(query, view).then(request => {
                    const result = request.getSearchResult();
                    if (result.wasClearSearch || result.matchCount === 0) {
                        return result;
                    }
                    // Find and reveal parent view even if it was hidden earlier.
                    const parentView = this.getCrViewManager_()
                        .querySelector(`#${view.dataset['parentViewId']}`);
                    assert(parentView);
                    parentView.removeAttribute(HIDDEN_BY_SEARCH);
                    // Highlight the associated control for entering the child view to
                    // guide the user.
                    const associatedControl = parentView.getAssociatedControlFor(view.id);
                    showBubble(associatedControl, result.matchCount, request.bubbles, 
                    /*horizontallyCenter=*/ false);
                    return result;
                });
            });
            return combineSearchResults(await Promise.all([...parentPromises, ...childPromises]));
        }
    }
    return SearchableViewContainerMixinLit;
});
