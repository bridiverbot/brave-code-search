// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class Router {
    observers = new Set();
    currentPage = null;
    constructor() {
        window.addEventListener('popstate', () => {
            const page = this.getRouteFromUrl();
            this.setRoute(page);
        });
    }
    navigateTo(pageName) {
        if (pageName === this.currentPage) {
            return;
        }
        const url = new URL(window.location.href);
        url.searchParams.set('page', pageName);
        history.pushState({ page: pageName }, '', url.toString());
        this.setRoute(pageName);
    }
    processInitialRoute(defaultPage) {
        let page = this.getRouteFromUrl();
        // If no page is in the URL, use the default and update the URL.
        if (!page) {
            page = defaultPage;
            const url = new URL(window.location.href);
            url.searchParams.set('page', page);
            history.replaceState({ page: page }, '', url.toString());
        }
        this.setRoute(page);
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.delete(observer);
    }
    // Reads the page from the current window URL.
    getRouteFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('page');
    }
    // Sets the internal state and notifies observers of the route change.
    setRoute(pageName) {
        if (this.currentPage === pageName) {
            return;
        }
        this.currentPage = pageName;
        for (const observer of this.observers) {
            observer.onRouteChanged(this.currentPage);
        }
    }
    static getInstance() {
        return instance || (instance = new Router());
    }
    static resetInstanceForTesting() {
        instance = null;
    }
}
let instance = null;
