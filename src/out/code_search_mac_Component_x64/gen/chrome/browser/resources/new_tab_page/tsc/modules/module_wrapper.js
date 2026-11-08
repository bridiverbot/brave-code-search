// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { CrLitElement, render } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { recordLoadDuration, recordOccurrence, recordPerdecage, recordSparseValueWithPersistentHash } from '../metrics_utils.js';
import { browserProxyFactory } from '../new_tab_page.mojom-webui.js';
import { WindowProxy } from '../window_proxy.js';
import { getCss } from './module_wrapper.css.js';
import { getHtml } from './module_wrapper.html.js';
export class ModuleWrapperElement extends CrLitElement {
    static get is() {
        return 'ntp-module-wrapper';
    }
    static get styles() {
        return getCss();
    }
    render() {
        // Update the light DOM element(s) and allow Lit to handle the shadow DOM
        // with a slotted module's UI element.
        if (this.module) {
            render(this.module.element, this, { host: this });
        }
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            module: {
                type: Object,
            },
        };
    }
    #module_accessor_storage = null;
    get module() { return this.#module_accessor_storage; }
    set module(value) { this.#module_accessor_storage = value; }
    eventTracker_ = new EventTracker();
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    firstUpdated() {
        assert(this.module);
        if (!this.module.initialized) {
            this.module.initialized = true;
            this.initModuleInstance_();
        }
        if (!this.module.impressed) {
            // Install observer to log module header impression.
            const headerObserver = new IntersectionObserver((entries) => {
                assert(entries.length > 0);
                const observerEntry = entries[0];
                if (observerEntry.intersectionRatio >= 1.0) {
                    headerObserver.disconnect();
                    assert(this.module);
                    const time = WindowProxy.getInstance().now();
                    recordLoadDuration('NewTabPage.Modules.Impression', time);
                    recordLoadDuration(`NewTabPage.Modules.Impression.${this.module.descriptor.id}`, time);
                    this.module.impressed = true;
                    this.dispatchEvent(new Event('detect-impression'));
                    this.module.element.dispatchEvent(new Event('detect-impression'));
                }
            }, { threshold: 1.0 });
            headerObserver.observe(this.$.impressionProbe);
        }
    }
    initModuleInstance_() {
        assert(this.module);
        // Log at most one usage per module per NTP page load. This is possible,
        // if a user opens a link in a new tab.
        this.module.element.addEventListener('usage', (e) => {
            e.stopPropagation();
            assert(this.module);
            browserProxyFactory.getInstance().handler.onModuleUsed(this.module.descriptor.id);
            recordOccurrence('NewTabPage.Modules.Usage');
            recordOccurrence(`NewTabPage.Modules.Usage.${this.module.descriptor.id}`);
        }, { once: true });
        // Dispatch at most one interaction event for a module's `More Actions` menu
        // button clicks.
        this.module.element.addEventListener('menu-button-click', (e) => {
            e.stopPropagation();
            assert(this.module);
            browserProxyFactory.getInstance().handler.onModuleUsed(this.module.descriptor.id);
        }, { once: true });
        // Log module's id when module's info button is clicked.
        this.module.element.addEventListener('info-button-click', () => {
            assert(this.module);
            recordSparseValueWithPersistentHash('NewTabPage.Modules.InfoButtonClicked', this.module.descriptor.id);
        }, { once: true });
        // Track whether the user hovered on the module.
        this.module.element.addEventListener('mouseover', () => {
            assert(this.module);
            recordSparseValueWithPersistentHash('NewTabPage.Modules.Hover', this.module.descriptor.id);
        }, {
            capture: true, // So that modules cannot swallow event.
            once: true, // Only one log per NTP load.
        });
        // Install observer to track max perdecage (x/10th) of the module visible
        // on the page.
        let intersectionPerdecage = 0;
        const moduleObserver = new IntersectionObserver((entries) => {
            assert(entries.length > 0);
            const observerEntry = entries[0];
            intersectionPerdecage = Math.floor(Math.max(intersectionPerdecage, observerEntry.intersectionRatio * 10));
        }, { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
        // Use `pagehide` rather than `unload` because unload is being deprecated.
        // `pagehide` fires with the same timing and is safe to use since NTP never
        // enters back/forward-cache.
        this.eventTracker_.add(window, 'pagehide', () => {
            assert(this.module);
            recordPerdecage('NewTabPage.Modules.ImpressionRatio', intersectionPerdecage);
            recordPerdecage(`NewTabPage.Modules.ImpressionRatio.${this.module.descriptor.id}`, intersectionPerdecage);
        });
        moduleObserver.observe(this);
    }
}
customElements.define(ModuleWrapperElement.is, ModuleWrapperElement);
