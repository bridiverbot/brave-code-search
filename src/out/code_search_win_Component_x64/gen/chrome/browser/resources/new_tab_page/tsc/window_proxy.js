// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTrustedScriptURL } from 'chrome://resources/js/static_types.js';
let instance = null;
let lazyLoadPromise = null;
/** Abstracts some builtin JS functions to mock them in tests. */
export class WindowProxy {
    static getInstance() {
        return instance || (instance = new WindowProxy());
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
    navigate(href) {
        window.location.href = href;
    }
    open(url) {
        window.open(url, '_blank');
    }
    setTimeout(callback, duration) {
        return window.setTimeout(callback, duration);
    }
    clearTimeout(id) {
        window.clearTimeout(id !== null ? id : undefined);
    }
    random() {
        return Math.random();
    }
    createIframeSrc(src) {
        return src;
    }
    matchMedia(query) {
        return window.matchMedia(query);
    }
    now() {
        return Date.now();
    }
    /** Returns promise that resolves when lazy rendering should be started. */
    waitForLazyRender() {
        return new Promise(resolve => {
            requestIdleCallback(() => resolve(), { timeout: 500 });
        });
    }
    /**
     * Adds a <script> tag that holds the lazy loaded code, if not already
     * added, and returns a promise that resolves when it has loaded.
     */
    ensureLazyLoaded() {
        if (!lazyLoadPromise) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = getTrustedScriptURL `./lazy_load.js`;
            document.body.appendChild(script);
            lazyLoadPromise = new Promise(resolve => {
                script.onload = () => resolve();
            });
        }
        return lazyLoadPromise;
    }
    /**
     * Posts |message| on |target| at |targetOrigin| (or on its content window if
     * |target| is an iframe).
     */
    postMessage(target, message, targetOrigin) {
        const targetWindow = target instanceof HTMLIFrameElement ? target.contentWindow : target;
        targetWindow.postMessage(message, targetOrigin);
    }
    /** Returns `window.location.href` wrapped in a URL object. */
    get url() {
        return new URL(window.location.href);
    }
    get onLine() {
        return window.navigator.onLine;
    }
}
