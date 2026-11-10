// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview SettingsViewMixinLit is meant to be inherited by parent or
 * child views belonging to a Settings plugin, to help with
 *  a) focus preservation during navigation
 *  b) search bubble showing during search
 *
 * If a parent view, need to override the following methods:
 *   - getFocusConfig(): Used when navigating 'back' to focus the correct
 *     element (the entry point to a child view).
 *   - getAssociatedControlFor(): Used by SearchableViewContainerMixin to query
 *     which element should be highlighted with a search bubble.
 *
 * If a child view, need to override the following method:
 *   - focusBackButton(): Called when navigating into a child view to focus the
 *     back button.
 */
import { assert, assertNotReached } from '//resources/js/assert.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { Router } from '../router.js';
export const SettingsViewMixinLit = (superClass) => {
    class SettingsViewMixinLit extends superClass {
        static get properties() {
            return {
                routePath: { type: String },
            };
        }
        #routePath_accessor_storage = '';
        get routePath() { return this.#routePath_accessor_storage; }
        set routePath(value) { this.#routePath_accessor_storage = value; }
        focusConfig_ = null;
        previousRoute_ = null;
        onViewEnterStartListener_ = () => this.onViewEnterStart_();
        connectedCallback() {
            super.connectedCallback();
            Router.getInstance().addObserver(this);
            this.currentRouteChanged(Router.getInstance().getCurrentRoute(), undefined);
            this.focusConfig_ = this.getFocusConfig();
            this.addEventListener('view-enter-start', this.onViewEnterStartListener_);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Router.getInstance().removeObserver(this);
            this.removeEventListener('view-enter-start', this.onViewEnterStartListener_);
        }
        // Should be overridden by views that have a back button (usually
        // subpage views).
        focusBackButton() { }
        // Should be overridden by views that have subpage views, to control
        // what gets focused when coming back from a subpage.
        getFocusConfig() {
            return null;
        }
        // Should be overridden by views that have subpage views, to specify
        // which element should be highlighted when a search hit occurs in a
        // subpage view.
        getAssociatedControlFor(_childViewId) {
            assertNotReached();
        }
        onViewEnterStart_() {
            const currentRoute = Router.getInstance().getCurrentRoute();
            const previousRoute = this.previousRoute_ || Router.getInstance().getPreviousRoute();
            const isNavigatingBack = Router.getInstance().lastRouteChangeWasPopstate() ||
                (!!previousRoute && previousRoute.depth > currentRoute.depth);
            if (previousRoute && !isNavigatingBack) {
                this.focusBackButton();
                return;
            }
            if (!isNavigatingBack) {
                return;
            }
            if (!this.focusConfig_ || !previousRoute) {
                return;
            }
            const fromToKey = `${previousRoute.path}_${currentRoute.path}`;
            let pathConfig = this.focusConfig_.get(fromToKey) ||
                this.focusConfig_.get(previousRoute.path);
            if (pathConfig) {
                let handler;
                if (typeof pathConfig === 'function') {
                    handler = pathConfig;
                }
                else {
                    handler = () => {
                        if (typeof pathConfig === 'string') {
                            const element = this.shadowRoot.querySelector(pathConfig);
                            assert(element);
                            pathConfig = element;
                        }
                        focusWithoutInk(pathConfig);
                    };
                }
                handler();
            }
        }
        currentRouteChanged(_newRoute, oldRoute) {
            this.previousRoute_ = oldRoute || null;
        }
    }
    return SettingsViewMixinLit;
};
