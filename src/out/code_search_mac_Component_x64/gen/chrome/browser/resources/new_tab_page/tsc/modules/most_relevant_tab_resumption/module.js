// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './page_favicon.js';
import '../icons.html.js';
import '../info_dialog.js';
import '../module_header.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { I18nMixinLit, loadTimeData } from '../../i18n_setup.js';
import { recordEnumeration, recordLogValue, recordOccurrence, recordSmallCount } from '../../metrics_utils.js';
import { ScoredURLUserAction } from '../../most_relevant_tab_resumption.mojom-webui.js';
import { FormFactor, VisitSource } from '../../url_visit_types.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getCss } from './module.css.js';
import { getHtml } from './module.html.js';
import { MostRelevantTabResumptionProxyImpl } from './most_relevant_tab_resumption_proxy.js';
export const MAX_URL_VISITS = 5;
export class MostRelevantTabResumptionModuleElement extends I18nMixinLit(CrLitElement) {
    static get is() {
        return 'ntp-most-relevant-tab-resumption-module';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** The type of module width (wide, narrow, ...). */
            format: {
                type: String,
                reflect: true,
            },
            /** The cluster displayed by this element. */
            urlVisits: { type: Array },
            /**
             * To determine whether the favicon service should use the host if
             * the url does not produce a match.
             */
            fallbackToHost_: { type: Boolean },
            /**
             * To determine whether to show the module with the device icon.
             */
            shouldShowDeviceIcon_: {
                type: Boolean,
                reflect: true,
            },
            showInfoDialog_: { type: Boolean },
            allowFaviconServerFallback_: { type: Boolean },
        };
    }
    #format_accessor_storage = 'wide';
    get format() { return this.#format_accessor_storage; }
    set format(value) { this.#format_accessor_storage = value; }
    #urlVisits_accessor_storage = [];
    get urlVisits() { return this.#urlVisits_accessor_storage; }
    set urlVisits(value) { this.#urlVisits_accessor_storage = value; }
    #fallbackToHost__accessor_storage = loadTimeData.getBoolean('mostRelevantTabResumptionModuleFallbackToHost');
    get fallbackToHost_() { return this.#fallbackToHost__accessor_storage; }
    set fallbackToHost_(value) { this.#fallbackToHost__accessor_storage = value; }
    #shouldShowDeviceIcon__accessor_storage = false;
    get shouldShowDeviceIcon_() { return this.#shouldShowDeviceIcon__accessor_storage; }
    set shouldShowDeviceIcon_(value) { this.#shouldShowDeviceIcon__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    #allowFaviconServerFallback__accessor_storage = loadTimeData.getBoolean('mostRelevantTabResumptionAllowFaviconServerFallback');
    get allowFaviconServerFallback_() { return this.#allowFaviconServerFallback__accessor_storage; }
    set allowFaviconServerFallback_(value) { this.#allowFaviconServerFallback__accessor_storage = value; }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18nRecursive('', 'modulesDisableButtonTextV2', 'modulesTabResumptionTitle'),
            },
            {
                action: 'info',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:info' :
                    'modules:info-old',
                text: this.i18n('moduleInfoButtonTitle'),
            },
        ];
    }
    onDisableButtonClick_() {
        this.fire('disable-module', {
            message: loadTimeData.getStringF('modulesDisableToastMessage', loadTimeData.getString('modulesThisTypeOfCardText')),
        });
    }
    onSeeMoreButtonClick_() {
        this.fire('usage');
        recordOccurrence('NewTabPage.TabResumption.SeeMoreClick');
    }
    onDismissButtonClick_(e) {
        e.preventDefault(); // Stop navigation
        e.stopPropagation(); // Stop firing of click handler
        const urlVisitElem = e.target.parentElement;
        const index = Number(urlVisitElem.dataset['index']);
        const urlVisit = this.urlVisits[index];
        assert(urlVisit);
        recordSmallCount('NewTabPage.TabResumption.VisitDismissIndex', index);
        MostRelevantTabResumptionProxyImpl.getInstance().handler.dismissURLVisit(urlVisit);
        this.urlVisits =
            [...this.urlVisits.slice(0, index), ...this.urlVisits.slice(index + 1)];
        assert(this.urlVisits.length >= 0);
        const eventName = this.urlVisits.length > 0 ? 'dismiss-module-element' :
            'dismiss-module-instance';
        this.fire(eventName, {
            message: loadTimeData.getString('modulesTabResumptionSingleDismiss'),
            restoreCallback: () => {
                recordSmallCount('NewTabPage.TabResumption.VisitRestoreIndex', index);
                this.urlVisits = [
                    ...this.urlVisits.slice(0, index),
                    urlVisit,
                    ...this.urlVisits.slice(index),
                ];
                MostRelevantTabResumptionProxyImpl.getInstance()
                    .handler.restoreURLVisit(urlVisit);
            },
        });
    }
    onUrlVisitClick_(e) {
        this.fire('usage');
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        const urlVisit = this.urlVisits[index];
        assert(urlVisit);
        recordSmallCount('NewTabPage.TabResumption.ClickIndex', index);
        recordEnumeration('NewTabPage.TabResumption.Visit.ClickSource', urlVisit.source, VisitSource.MAX_VALUE + 1);
        // Calculate the number of milliseconds in the difference. Max is 4 days.
        recordLogValue('NewTabPage.TabResumption.TimeElapsedSinceLastVisit', 
        /*min=*/ 60 * 1000, 
        /*max=*/ 4 * 24 * 60 * 60 * 1000, 
        /*buckets=*/ 50, 
        /*value=*/ Number(urlVisit.relativeTime.microseconds / 1000n));
        MostRelevantTabResumptionProxyImpl.getInstance().handler.recordAction(ScoredURLUserAction.kActivated, urlVisit.urlKey, urlVisit.trainingRequestId);
    }
    computeDomain_(urlVisit) {
        let domain = (new URL(urlVisit.url)).hostname;
        domain = domain.replace('www.', '');
        return domain;
    }
    computeIcon_(urlVisit) {
        switch (urlVisit.formFactor) {
            case FormFactor.kDesktop:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'tab_resumption:desktop-windows' :
                    'tab_resumption:computer-old';
            case FormFactor.kPhone:
                return 'tab_resumption:phone-custom';
            case FormFactor.kTablet:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'tab_resumption:tablet-android' :
                    'tab_resumption:tablet-old';
            case FormFactor.kAutomotive:
                return 'tab_resumption:automotive-custom';
            case FormFactor.kWearable:
                return 'tab_resumption:wearable-custom';
            case FormFactor.kTv:
                return 'tab_resumption:tv';
            default:
                return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'tab_resumption:public' :
                    'tab_resumption:globe-old';
        }
    }
    computeDeviceName_(urlVisit) {
        return urlVisit.sessionName;
    }
    computeShouldShowDeviceName_(urlVisit) {
        return !!this.computeDeviceName_(urlVisit);
    }
    getVisibleUrlVisits_() {
        return this.urlVisits.slice(0, MAX_URL_VISITS);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
    getCheckSmallIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'modules:check-small' :
            'modules:done-old';
    }
}
customElements.define(MostRelevantTabResumptionModuleElement.is, MostRelevantTabResumptionModuleElement);
async function createElement() {
    const { urlVisits } = await MostRelevantTabResumptionProxyImpl.getInstance()
        .handler.getURLVisits();
    if (!urlVisits || urlVisits.length === 0) {
        return null;
    }
    const element = new MostRelevantTabResumptionModuleElement();
    element.urlVisits = urlVisits;
    urlVisits.slice(0, MAX_URL_VISITS).forEach((urlVisit) => {
        MostRelevantTabResumptionProxyImpl.getInstance().handler.recordAction(ScoredURLUserAction.kSeen, urlVisit.urlKey, urlVisit.trainingRequestId);
    });
    return element;
}
export const mostRelevantTabResumptionDescriptor = new ModuleDescriptor(
/*id=*/ 'tab_resumption', createElement);
