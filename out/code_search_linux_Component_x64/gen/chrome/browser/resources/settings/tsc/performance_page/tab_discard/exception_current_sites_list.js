// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '../../site_favicon.js';
import { PrefService } from '/shared/settings/prefs2/pref_service.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { convertDateToWindowsEpoch } from '../../time.js';
import { PerformanceBrowserProxyImpl } from '../performance_browser_proxy.js';
import { MemorySaverModeExceptionListAction, PerformanceMetricsProxyImpl } from '../performance_metrics_proxy.js';
import { getCss } from './exception_current_sites_list.css.js';
import { getHtml } from './exception_current_sites_list.html.js';
import { TAB_DISCARD_EXCEPTIONS_PREF } from './exception_validation_mixin.js';
export class ExceptionCurrentSitesListElement extends CrLitElement {
    static get is() {
        return 'tab-discard-exception-current-sites-list';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            currentSites_: { type: Array },
            selectedSites_: { type: Object },
            submitDisabled: {
                type: Boolean,
                notify: true,
            },
            updateIntervalMS_: { type: Number },
            // whether the current sites list is visible according to its parent
            visible: { type: Boolean },
        };
    }
    browserProxy_ = PerformanceBrowserProxyImpl.getInstance();
    metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    #currentSites__accessor_storage = [];
    get currentSites_() { return this.#currentSites__accessor_storage; }
    set currentSites_(value) { this.#currentSites__accessor_storage = value; }
    #selectedSites__accessor_storage = new Set();
    get selectedSites_() { return this.#selectedSites__accessor_storage; }
    set selectedSites_(value) { this.#selectedSites__accessor_storage = value; }
    #submitDisabled_accessor_storage = false;
    get submitDisabled() { return this.#submitDisabled_accessor_storage; }
    set submitDisabled(value) { this.#submitDisabled_accessor_storage = value; }
    #updateIntervalMS__accessor_storage = 1000;
    get updateIntervalMS_() { return this.#updateIntervalMS__accessor_storage; }
    set updateIntervalMS_(value) { this.#updateIntervalMS__accessor_storage = value; }
    #visible_accessor_storage = true;
    get visible() { return this.#visible_accessor_storage; }
    set visible(value) { this.#visible_accessor_storage = value; }
    onVisibilityChangedListener_;
    updateIntervalID_ = undefined;
    async connectedCallback() {
        super.connectedCallback();
        await this.updateCurrentSites_();
        this.dispatchEvent(new CustomEvent('sites-populated', {
            detail: { length: this.currentSites_.length },
        }));
        this.onVisibilityChanged_();
        this.onVisibilityChangedListener_ = this.onVisibilityChanged_.bind(this);
        document.addEventListener('visibilitychange', this.onVisibilityChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('visibilitychange', this.onVisibilityChangedListener_);
        this.stopUpdatingCurrentSites_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('visible')) {
            this.onVisibilityChanged_();
        }
    }
    onVisibilityChanged_() {
        if (this.visible && document.visibilityState === 'visible') {
            this.startUpdatingCurrentSites_();
        }
        else {
            this.stopUpdatingCurrentSites_();
        }
    }
    startUpdatingCurrentSites_() {
        this.updateCurrentSites_().then(() => {
            if (this.updateIntervalID_ === undefined) {
                this.updateIntervalID_ = setInterval(this.updateCurrentSites_.bind(this), this.updateIntervalMS_);
            }
        });
    }
    stopUpdatingCurrentSites_() {
        if (this.updateIntervalID_ !== undefined) {
            clearInterval(this.updateIntervalID_);
            this.updateIntervalID_ = undefined;
        }
    }
    setUpdateIntervalForTesting(updateIntervalMS) {
        this.updateIntervalMS_ = updateIntervalMS;
        this.stopUpdatingCurrentSites_();
        this.startUpdatingCurrentSites_();
    }
    getIsUpdatingForTesting() {
        return this.updateIntervalID_ !== undefined;
    }
    async updateCurrentSites_() {
        await PrefService.getInstance().whenInitialized();
        const existingSites = new Set(Object.keys(PrefService.getInstance()
            .getPref(TAB_DISCARD_EXCEPTIONS_PREF)
            .value));
        const currentSites = (await this.browserProxy_.getCurrentOpenSites())
            .filter(rule => !existingSites.has(rule));
        // Remove sites from selected set that are no longer in the list.
        this.selectedSites_ =
            new Set(currentSites.filter(this.isSelectedSite_.bind(this)));
        this.computeSubmitDisabled_();
        this.currentSites_ = currentSites;
    }
    computeSubmitDisabled_() {
        this.submitDisabled = !this.selectedSites_.size;
    }
    // Called to recalculate checked status of entries when the site changes due
    // to list updates.
    isSelectedSite_(site) {
        return this.selectedSites_.has(site);
    }
    onSelectionChange_(e) {
        const checkbox = e.currentTarget;
        const site = checkbox.dataset['site'];
        if (checkbox.checked) {
            this.selectedSites_.add(site);
        }
        else {
            this.selectedSites_.delete(site);
        }
        this.computeSubmitDisabled_();
    }
    submit() {
        assert(!this.submitDisabled);
        const epoch = convertDateToWindowsEpoch();
        this.selectedSites_.forEach(rule => {
            PrefService.getInstance().setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, epoch);
        });
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.ADD_FROM_CURRENT);
    }
}
customElements.define(ExceptionCurrentSitesListElement.is, ExceptionCurrentSitesListElement);
