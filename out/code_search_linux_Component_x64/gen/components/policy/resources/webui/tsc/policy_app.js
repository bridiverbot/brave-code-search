// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/js/action_link.js';
// 
import './status_box.js';
import './policy_table.js';
// 
import './promotion_banner_section_container.js';
// 
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { BrowserProxy } from './browser_proxy.js';
import { GetPoliciesReason } from './policy.mojom-webui.js';
import { getCss } from './policy_app.css.js';
import { getHtml } from './policy_app.html.js';
export class PolicyAppElement extends CrLitElement {
    static get is() {
        return 'policy-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            filterPattern_: { type: String },
            showUnset_: { type: Boolean },
            status_: { type: Object },
            policyGroups_: { type: Array },
            shouldShowPromo_: { type: Boolean },
            shouldShowCommandLineArgumentsWarning_: { type: Boolean },
            commandLineArguments_: { type: String },
            toastText_: { type: String },
            reloadButtonDisabled_: { type: Boolean },
            uploadReportButtonDisabled_: { type: Boolean },
            enableReportButton_: { type: Boolean },
            hideExportButton_: { type: Boolean },
            hideUploadReportButton_: { type: Boolean },
        };
    }
    #filterPattern__accessor_storage = '';
    get filterPattern_() { return this.#filterPattern__accessor_storage; }
    set filterPattern_(value) { this.#filterPattern__accessor_storage = value; }
    #showUnset__accessor_storage = false;
    get showUnset_() { return this.#showUnset__accessor_storage; }
    set showUnset_(value) { this.#showUnset__accessor_storage = value; }
    #status__accessor_storage = {};
    get status_() { return this.#status__accessor_storage; }
    set status_(value) { this.#status__accessor_storage = value; }
    #policyGroups__accessor_storage = [];
    get policyGroups_() { return this.#policyGroups__accessor_storage; }
    set policyGroups_(value) { this.#policyGroups__accessor_storage = value; }
    #shouldShowPromo__accessor_storage = false;
    get shouldShowPromo_() { return this.#shouldShowPromo__accessor_storage; }
    set shouldShowPromo_(value) { this.#shouldShowPromo__accessor_storage = value; }
    #shouldShowCommandLineArgumentsWarning__accessor_storage = false;
    get shouldShowCommandLineArgumentsWarning_() { return this.#shouldShowCommandLineArgumentsWarning__accessor_storage; }
    set shouldShowCommandLineArgumentsWarning_(value) { this.#shouldShowCommandLineArgumentsWarning__accessor_storage = value; }
    #commandLineArguments__accessor_storage = '';
    get commandLineArguments_() { return this.#commandLineArguments__accessor_storage; }
    set commandLineArguments_(value) { this.#commandLineArguments__accessor_storage = value; }
    #toastText__accessor_storage = '';
    get toastText_() { return this.#toastText__accessor_storage; }
    set toastText_(value) { this.#toastText__accessor_storage = value; }
    #reloadButtonDisabled__accessor_storage = false;
    get reloadButtonDisabled_() { return this.#reloadButtonDisabled__accessor_storage; }
    set reloadButtonDisabled_(value) { this.#reloadButtonDisabled__accessor_storage = value; }
    #uploadReportButtonDisabled__accessor_storage = false;
    get uploadReportButtonDisabled_() { return this.#uploadReportButtonDisabled__accessor_storage; }
    set uploadReportButtonDisabled_(value) { this.#uploadReportButtonDisabled__accessor_storage = value; }
    #enableReportButton__accessor_storage = false;
    get enableReportButton_() { return this.#enableReportButton__accessor_storage; }
    set enableReportButton_(value) { this.#enableReportButton__accessor_storage = value; }
    #hideExportButton__accessor_storage = false;
    get hideExportButton_() { return this.#hideExportButton__accessor_storage; }
    set hideExportButton_(value) { this.#hideExportButton__accessor_storage = value; }
    #hideUploadReportButton__accessor_storage = false;
    get hideUploadReportButton_() { return this.#hideUploadReportButton__accessor_storage; }
    set hideUploadReportButton_(value) { this.#hideUploadReportButton__accessor_storage = value; }
    toastTimeoutId_ = null;
    policyPageMojoMigrationEnabled_ = loadTimeData.getBoolean('policyPageMojoMigrationEnabled');
    async connectedCallback() {
        super.connectedCallback();
        // Listeners must be setup before any `await` calls. Otherwise, the initial
        // data will be dropped.
        BrowserProxy.listenForStatusUpdated((status) => this.status_ = status);
        BrowserProxy.listenForPoliciesUpdated((names, groups) => this.onPoliciesReceived_(names, groups));
        if (this.policyPageMojoMigrationEnabled_) {
            const message = await BrowserProxy.getDebugString();
            console.info(message);
        }
        if (!loadTimeData.getString('acceptedPaths')
            .split('|')
            .includes(window.location.pathname)) {
            window.history.replaceState({}, '', '/');
        }
        FocusOutlineManager.forDocument(document);
        // 
        this.shouldShowPromo_ = await BrowserProxy.checkPromotionEligibility();
        // 
        // 
        this.shouldShowCommandLineArgumentsWarning_ =
            loadTimeData.getBoolean('hasCustomCommandLineArguments');
        this.commandLineArguments_ =
            loadTimeData.getString('customCommandLineArguments');
        // 
        this.hideExportButton_ = loadTimeData.valueExists('hideExportButton') &&
            loadTimeData.getBoolean('hideExportButton');
        this.hideUploadReportButton_ =
            loadTimeData.valueExists('hideUploadReportButton') &&
                loadTimeData.getBoolean('hideUploadReportButton');
        if (!this.policyPageMojoMigrationEnabled_) {
            sendWithPromise('listenPoliciesUpdates');
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    // 
    onPromoDismiss_() {
        BrowserProxy.setBannerDismissed();
        this.shouldShowPromo_ = false;
    }
    onPromoRedirect_() {
        BrowserProxy.recordBannerRedirected();
        window.open('https://admin.google.com/ac/chrome/guides/' +
            '?ref=browser&utm_source=chrome_policy_cec', '_blank');
    }
    // 
    onPoliciesReceived_(policyNames, policyGroupsResponse) {
        const policyGroups = policyGroupsResponse.policyGroups;
        const policyIds = policyGroupsResponse.policyIdsPresentationOrder;
        this.policyGroups_ = policyIds.map((id) => {
            const knownPolicyNames = policyNames[id] ? policyNames[id].policyNames : [];
            const group = policyGroups[id];
            const knownPolicyNamesSet = new Set(knownPolicyNames);
            const receivedPolicyNames = group.policies ? Object.keys(group.policies) : [];
            const allPolicyNames = Array.from(new Set([...knownPolicyNames, ...receivedPolicyNames]));
            const policies = allPolicyNames.map(name => Object.assign({
                name,
                link: [
                    policyNames['chrome']?.policyNames,
                    policyNames['precedence']?.policyNames,
                ].includes(knownPolicyNames) &&
                    knownPolicyNamesSet.has(name) ?
                    `https://support.brave.app/hc/en-us/articles/360039248271-Group-Policy?policy=${name}` :
                    undefined,
                isExtension: group.isExtension || false,
            }, group?.policies[name]));
            return {
                name: group.forSigninScreen ?
                    `${group.name} [${loadTimeData.getString('signinProfile')}]` :
                    group.name,
                // For Web Apps (PWAs), multiple subpath PWAs sharing the same origin
                // are keyed by scope URL in `policyGroups` so their map keys (`id`)
                // don't collide, while `group.id` holds the display origin.
                id: (group.isWebApp && group.id) ? group.id : id,
                isExtension: group.isExtension,
                isWebApp: group.isWebApp,
                policies,
                ...(group.precedenceOrder && { precedenceOrder: group.precedenceOrder }),
            };
        });
        // 
        const isNonEmpty = (value) => Array.isArray(value) ? value.length > 0 : !!value;
        this.enableReportButton_ = [
            'CloudReportingEnabled',
            'CloudProfileReportingEnabled',
            'UserSecuritySignalsReporting',
            'SaasUsageReportingDomainUrlsForBrowsers',
            'SaasUsageReportingDomainUrlsForProfiles',
        ].some(p => isNonEmpty(policyGroups['chrome']?.policies[p]?.value));
        // 
        this.reloadPoliciesDone_();
    }
    onSearchChanged_(e) {
        this.filterPattern_ = e.detail.toLowerCase();
    }
    onReloadPoliciesClick_() {
        this.reloadButtonDisabled_ = true;
        this.showToast_(loadTimeData.getString('reloadingPolicies'));
        sendWithPromise('reloadPolicies');
    }
    onMoreActionsClick_(e) {
        this.shadowRoot.querySelector('#actionMenu').showAt(e.target);
    }
    async onExportPoliciesClick_() {
        this.closeActionMenu_();
        const policies = await BrowserProxy.getPolicies(GetPoliciesReason.kExport);
        this.downloadJson_(policies);
    }
    async onCopyPoliciesClick_() {
        this.closeActionMenu_();
        const policies = await BrowserProxy.getPolicies(GetPoliciesReason.kCopy);
        navigator.clipboard.writeText(policies);
        this.showToast_(loadTimeData.getString('copyPoliciesDone'));
    }
    onUploadReportClick_() {
        this.closeActionMenu_();
        this.uploadReportButtonDisabled_ = true;
        this.showToast_(loadTimeData.getString('reportUploading'));
        sendWithPromise('uploadReport').then(() => {
            this.uploadReportButtonDisabled_ = false;
            this.showToast_(loadTimeData.getString('reportUploaded'));
        });
    }
    onViewLogsClick_() {
        this.closeActionMenu_();
        window.location.href = 'chrome://policy/logs';
    }
    onShowUnsetCheckedChanged_(e) {
        this.showUnset_ = e.detail.value;
    }
    hasStatus_() {
        return Object.values(this.status_)
            .some(boxStatus => !!boxStatus.policyDescriptionKey);
    }
    closeActionMenu_() {
        this.shadowRoot.querySelector('#actionMenu').close();
    }
    showToast_(content) {
        this.toastText_ = content;
        if (this.toastTimeoutId_) {
            clearTimeout(this.toastTimeoutId_);
        }
        this.toastTimeoutId_ = setTimeout(() => {
            this.toastText_ = '';
            this.toastTimeoutId_ = null;
        }, 2000);
    }
    downloadJson_(json) {
        const jsonObject = JSON.parse(json);
        const timestamp = new Date(Date.now()).toLocaleString(undefined, {
            dateStyle: 'short',
            timeStyle: 'long',
        });
        jsonObject.policyExportTime = timestamp;
        const blob = new Blob([JSON.stringify(jsonObject, null, 3)], { type: 'application/json' });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download =
            `policies_${timestamp.replace(/ GMT[+-]\d+:\d+/g, '')}.json`;
        document.body.appendChild(link);
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        document.body.removeChild(link);
        this.showToast_(loadTimeData.getString('exportPoliciesDone'));
    }
    reloadPoliciesDone_() {
        if (this.reloadButtonDisabled_) {
            this.reloadButtonDisabled_ = false;
            this.showToast_(loadTimeData.getString('reloadPoliciesDone'));
        }
    }
}
customElements.define(PolicyAppElement.is, PolicyAppElement);
