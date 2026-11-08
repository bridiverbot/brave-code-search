// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { I18nMixinLit } from 'chrome://resources/cr_elements/i18n_mixin_lit.js';
import { addWebUiListener } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { BrowserSwitchInternalsProxyImpl } from './browser_switch_internals_proxy.js';
const AppElementBase = I18nMixinLit(CrLitElement);
export class AppElement extends AppElementBase {
    static get is() {
        return 'browser-switch-internals-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            isBrowserSwitcherEnabled_: { type: Boolean },
            lastFetch_: { type: String },
            nextFetch_: { type: String },
            urlCheckerInput_: { type: String },
            urlCheckerOutput_: { type: Array },
            greyListRules_: { type: Array },
            siteListRules_: { type: Array },
            xmlSiteLists_: { type: Array },
        };
    }
    #isBrowserSwitcherEnabled__accessor_storage = true;
    get isBrowserSwitcherEnabled_() { return this.#isBrowserSwitcherEnabled__accessor_storage; }
    set isBrowserSwitcherEnabled_(value) { this.#isBrowserSwitcherEnabled__accessor_storage = value; }
    #greyListRules__accessor_storage = [];
    get greyListRules_() { return this.#greyListRules__accessor_storage; }
    set greyListRules_(value) { this.#greyListRules__accessor_storage = value; }
    #siteListRules__accessor_storage = [];
    get siteListRules_() { return this.#siteListRules__accessor_storage; }
    set siteListRules_(value) { this.#siteListRules__accessor_storage = value; }
    #xmlSiteLists__accessor_storage = [];
    get xmlSiteLists_() { return this.#xmlSiteLists__accessor_storage; }
    set xmlSiteLists_(value) { this.#xmlSiteLists__accessor_storage = value; }
    #urlCheckerInput__accessor_storage = '';
    get urlCheckerInput_() { return this.#urlCheckerInput__accessor_storage; }
    set urlCheckerInput_(value) { this.#urlCheckerInput__accessor_storage = value; }
    #urlCheckerOutput__accessor_storage = [];
    get urlCheckerOutput_() { return this.#urlCheckerOutput__accessor_storage; }
    set urlCheckerOutput_(value) { this.#urlCheckerOutput__accessor_storage = value; }
    #lastFetch__accessor_storage = '';
    get lastFetch_() { return this.#lastFetch__accessor_storage; }
    set lastFetch_(value) { this.#lastFetch__accessor_storage = value; }
    #nextFetch__accessor_storage = '';
    get nextFetch_() { return this.#nextFetch__accessor_storage; }
    set nextFetch_(value) { this.#nextFetch__accessor_storage = value; }
    firstUpdated() {
        this.updateEverything();
        document.addEventListener('DOMContentLoaded', () => {
            addWebUiListener('data-changed', () => this.updateEverything());
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('urlCheckerInput_')) {
            this.checkUrl_(this.urlCheckerInput_);
        }
    }
    get showXmlRow() {
        return this.xmlSiteLists_.some(item => item.url !== this.i18n('notConfigured'));
    }
    getRuleBrowserName(rule) {
        return rule.startsWith('!') ? getBrowserName() : getAltBrowserName();
    }
    getPolicyFromRuleset(ruleSetName) {
        const rulesetToPolicy = {
            gpo: 'BrowserSwitcherUrlList',
            ieem: 'BrowserSwitcherUseIeSitelist',
            external_sitelist: 'BrowserSwitcherExternalSitelistUrl',
            external_greylist: 'BrowserSwitcherExternalGreylistUrl',
        };
        return rulesetToPolicy[ruleSetName];
    }
    /**
     * Updates the content of all tables after receiving data from the backend.
     */
    updateTables(rulesets) {
        this.siteListRules_ = [];
        this.greyListRules_ = [];
        const listNameToProperty = {
            sitelist: this.siteListRules_,
            greylist: this.greyListRules_,
        };
        for (const [rulesetName, ruleset] of Object.entries(rulesets)) {
            for (const [listName, rules] of Object.entries(ruleset)) {
                listNameToProperty[listName].push(...rules.map((rule) => ({
                    rulesetName,
                    rule,
                })));
            }
        }
    }
    /**
     * Takes the json from the url checker and makes it readable.
     */
    urlOutputText(decision) {
        let opensIn = '';
        const altBrowserName = getAltBrowserName();
        const browserName = getBrowserName();
        switch (decision.action) {
            case 'stay':
                opensIn = this.i18n('openBrowser', browserName) + '\n';
                break;
            case 'go':
                opensIn = this.i18n('openBrowser', altBrowserName) + '\n';
                break;
            default:
                break;
        }
        let reason = '';
        if (decision.matching_rule) {
            if (decision.matching_rule.startsWith('!')) {
                reason += this.i18n('openBrowserInvertRuleReason', JSON.stringify(decision.matching_rule)) +
                    '\n';
            }
            else {
                const list = decision.reason === 'sitelist' ?
                    this.i18n('forceOpenTitle') :
                    this.i18n('ignoreTitle');
                reason += this.i18n('openBrowserRuleReason', JSON.stringify(decision.matching_rule), list) +
                    '\n';
            }
        }
        // if undefined - add nothing to the output
        switch (decision.reason) {
            case 'globally_disabled':
                throw new Error('BrowserSwitcherEnabled policy is set as false!');
            case 'protocol':
                reason += this.i18n('openBrowserProtocolReason') + '\n';
                break;
            case 'default':
                reason += this.i18n('openBrowserDefaultReason', browserName) + '\n';
                break;
            default:
                break;
        }
        return [opensIn, reason];
    }
    checkUrl_(url) {
        if (!url) {
            this.urlCheckerOutput_ = [];
            return;
        }
        if (!url.includes('://')) {
            url = 'http://' + url;
        }
        getProxy()
            .getDecision(url)
            .then((decision) => {
            // URL is valid.
            this.urlCheckerOutput_ = this.urlOutputText(decision);
        })
            .catch((errorMessage) => {
            // URL is invalid.
            console.warn(errorMessage);
            this.urlCheckerOutput_ = [this.i18n('invalidURL')];
        });
    }
    onRefreshXmlClick() {
        getProxy().refreshXml();
    }
    /**
     * Update the paragraphs under the "XML sitelists" section.
     */
    updateTimestamps(timestamps) {
        if (!timestamps) {
            return;
        }
        const { last_fetch, next_fetch } = timestamps;
        this.lastFetch_ = last_fetch !== 0 ? formatTime(last_fetch) : '';
        this.nextFetch_ = next_fetch !== 0 ? formatTime(next_fetch) : '';
    }
    /**
     * Update the table under the "XML sitelists" section.
     */
    updateXmlTable(rulesetSources) {
        this.xmlSiteLists_ =
            Object.entries(rulesetSources)
                .map(([prefName, url]) => ({
                // Hacky name guessing
                policyName: 'BrowserSwitcher' +
                    snakeCaseToUpperCamelCase(prefName.split('.')[1]),
                url: url || this.i18n('notConfigured'),
            }));
    }
    /**
     * Called by C++ when we need to update everything on the page.
     */
    async updateEverything() {
        this.isBrowserSwitcherEnabled_ =
            await getProxy().isBrowserSwitcherEnabled();
        if (this.isBrowserSwitcherEnabled_) {
            getProxy().getAllRulesets().then((rulesets) => this.updateTables(rulesets));
            getProxy().getTimestamps().then((timestamps) => this.updateTimestamps(timestamps));
            getProxy().getRulesetSources().then((sources) => this.updateXmlTable(sources));
        }
    }
    /**
     * Section: XML configuration source
     * Shows information about the last time XML sitelists were downloaded.
     */
    getXmlSitelistsLastDownloadLabel() {
        return this.i18n('xmlSitelistLastDownloadDate', this.lastFetch_);
    }
    /**
     * Section: XML configuration source
     * Shows information about the next download time of XML sitelists.
     */
    getXmlSitelistsNextDownloadLabel() {
        return this.i18n('xmlSitelistNextDownloadDate', this.nextFetch_);
    }
    /**
     * Section: Ignore
     * Paragraph that informs that the URLs that are affected by the lists
     * BrowserSwitcherExternalGreylistUrl and BrowserSwitcherUrlGreylist
     * will not trigger a browser switch.
     */
    getIgnoreUrlMatchingLabel() {
        return this.i18n('ignoreParagraph2', getBrowserName(), getAltBrowserName());
    }
    onUrlCheckerInputInput_(e) {
        this.urlCheckerInput_ = e.target.value;
    }
    /**
     * Handles the click event on the export policies button.
     * Fetches the internals data as JSON and triggers a download.
     */
    async onExportToJsonClick_() {
        const json = await getProxy().getBrowserSwitchInternalsJson();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'browser_switch_internals.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
customElements.define(AppElement.is, AppElement);
/**
 * Converts 'this_word' to 'ThisWord'
 */
function snakeCaseToUpperCamelCase(symbol) {
    if (!symbol) {
        return symbol;
    }
    return symbol.replace(/(?:^|_)([a-z])/g, (_, letter) => {
        return letter.toUpperCase();
    });
}
/**
 * Formats |date| as "HH:MM:SS".
 */
function formatTime(dateNumber) {
    const date = new Date(dateNumber);
    const hh = date.getHours().toString().padStart(2, '0');
    const mm = date.getMinutes().toString().padStart(2, '0');
    const ss = date.getSeconds().toString().padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}
/**
 * Gets the English name of the alternate browser.
 */
function getAltBrowserName() {
    // TODO (crbug.com/40200942): if you change the AlternativeBrowserPath
    // policy, then loadTimeData can contain stale data. It won't update
    // until you refresh (despite the rest of the page auto-updating).
    return loadTimeData.getString('altBrowserName') || 'alternative browser';
}
/**
 * Gets the English name of the browser.
 */
function getBrowserName() {
    // TODO (crbug.com/40200942): if you change the AlternativeBrowserPath
    // policy, then loadTimeData can contain stale data. It won't update
    // until you refresh (despite the rest of the page auto-updating).
    return loadTimeData.getString('browserName');
}
function getProxy() {
    return BrowserSwitchInternalsProxyImpl.getInstance();
}
