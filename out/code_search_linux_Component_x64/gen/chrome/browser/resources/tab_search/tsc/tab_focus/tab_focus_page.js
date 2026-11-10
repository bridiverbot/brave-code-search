// Copyright (c) 2025 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { TabSearchApiProxyImpl, } from '../tab_search_api_proxy.js';
import { getHtml } from './tab_focus_page.html.js';
import { getCss } from './tab_focus_page.css.js';
export class TabFocusPageElement extends CrLitElement {
    static get is() {
        return 'tab-focus-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    apiProxy_ = TabSearchApiProxyImpl.getInstance();
    listenerIds_ = [];
    visibilityChangedListener_;
    elementVisibilityChangedListener_;
    isElementVisible_ = false;
    static get properties() {
        return {
            availableHeight: { type: Number },
            topic: { type: String },
            topics_: { type: Array },
            undoTopic_: { type: String },
            isLoadingTopics: { type: Boolean },
            errorMessage: { type: String },
            noMatchingTabs_: { type: Boolean },
            needsPremium: { type: Boolean },
            showFRE_: { type: Boolean },
        };
    }
    #topics__accessor_storage = [];
    get topics_() { return this.#topics__accessor_storage; }
    set topics_(value) { this.#topics__accessor_storage = value; }
    #topic_accessor_storage = '';
    get topic() { return this.#topic_accessor_storage; }
    set topic(value) { this.#topic_accessor_storage = value; }
    #undoTopic__accessor_storage = '';
    get undoTopic_() { return this.#undoTopic__accessor_storage; }
    set undoTopic_(value) { this.#undoTopic__accessor_storage = value; }
    #noMatchingTabs__accessor_storage = false;
    get noMatchingTabs_() { return this.#noMatchingTabs__accessor_storage; }
    set noMatchingTabs_(value) { this.#noMatchingTabs__accessor_storage = value; }
    #showFRE__accessor_storage = loadTimeData.getBoolean('showTabOrganizationFRE');
    get showFRE_() { return this.#showFRE__accessor_storage; }
    set showFRE_(value) { this.#showFRE__accessor_storage = value; }
    #availableHeight_accessor_storage = 0;
    get availableHeight() { return this.#availableHeight_accessor_storage; }
    set availableHeight(value) { this.#availableHeight_accessor_storage = value; }
    #isLoadingTopics_accessor_storage = false;
    get isLoadingTopics() { return this.#isLoadingTopics_accessor_storage; }
    set isLoadingTopics(value) { this.#isLoadingTopics_accessor_storage = value; }
    #errorMessage_accessor_storage = '';
    get errorMessage() { return this.#errorMessage_accessor_storage; }
    set errorMessage(value) { this.#errorMessage_accessor_storage = value; }
    #needsPremium_accessor_storage = false;
    get needsPremium() { return this.#needsPremium_accessor_storage; }
    set needsPremium(value) { this.#needsPremium_accessor_storage = value; }
    constructor() {
        super();
        this.visibilityChangedListener_ = this.maybeUpdateSuggestedTopics_;
        this.elementVisibilityChangedListener_ = new IntersectionObserver((entries, _observer) => {
            this.onElementVisibilityChanged_((entries[0]?.intersectionRatio ?? 0) > 0);
        }, { root: document.documentElement });
    }
    onTopicInputChanged_(e) {
        this.topic = e.value;
    }
    onFocusTabsClick_() {
        this.getFocusTabs_(this.topic);
    }
    onUndoClick_() {
        this.apiProxy_.undoFocusTabs().then(() => {
            this.undoTopic_ = '';
        });
    }
    setShowFRE_(show) {
        this.showFRE_ = show;
    }
    getFocusTabs_(topic) {
        this.undoTopic_ = '';
        this.noMatchingTabs_ = false;
        this.apiProxy_.getFocusTabs(topic).then(({ windowCreated, error }) => {
            if (error) {
                this.errorMessage = error.message;
                if (error.rateLimitedInfo) {
                    this.needsPremium = !error.rateLimitedInfo.isPremium;
                }
                return;
            }
            this.errorMessage = '';
            if (windowCreated) {
                this.undoTopic_ = topic;
            }
            else {
                // The request succeeded, no open tab was a close enough match.
                this.noMatchingTabs_ = true;
            }
        });
    }
    getNoMatchingTabsMessage_() {
        return loadTimeData.getString('tabOrganizationNoMatchingTabsMessage');
    }
    maybeUpdateSuggestedTopics_ = () => {
        // Don't update if it's already loading topics or when it's not visible.
        if (this.isLoadingTopics
            || document.visibilityState !== 'visible'
            || !this.isElementVisible_) {
            return;
        }
        this.isLoadingTopics = true;
        this.apiProxy_.getSuggestedTopics().then(({ topics, error }) => {
            this.isLoadingTopics = false;
            if (error) {
                this.errorMessage = error.message;
                if (error.rateLimitedInfo) {
                    this.needsPremium = !error.rateLimitedInfo.isPremium;
                }
                return;
            }
            this.onSuggestTopicsUpdated(topics);
            this.errorMessage = '';
        });
    };
    onSuggestTopicsUpdated(topics) {
        this.topics_ = topics;
    }
    getTopicId_(index) {
        return 'topicId' + index;
    }
    getTopicWithoutEmoji_(topic) {
        return topic.replace(/[^\x20-\x7F]/g, '').trimStart();
    }
    getTopicEmoji_(topic) {
        return topic.match(/^\p{Emoji}/u)[0];
    }
    onTopicClick_(index) {
        if (this.topics_[index]) {
            this.getFocusTabs_(this.topics_[index]);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.apiProxy_
            .getTabFocusShowFRE()
            .then(({ showFRE }) => this.setShowFRE_(showFRE));
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabFocusShowFREChanged.addListener(this.setShowFRE_.bind(this)));
        document.addEventListener('visibilitychange', this.visibilityChangedListener_);
        this.elementVisibilityChangedListener_.observe(this);
        this.maybeUpdateSuggestedTopics_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach((id) => this.apiProxy_.getCallbackRouter().removeListener(id));
        document.removeEventListener('visibilitychange', this.visibilityChangedListener_);
        this.elementVisibilityChangedListener_.disconnect();
    }
    getTitle_() {
        return loadTimeData.getString('tabOrganizationTitle');
    }
    getSubtitle_() {
        return loadTimeData.getString('tabOrganizationSubtitle');
    }
    getSuggestedTopicsSubtitle_() {
        return loadTimeData.getString('tabOrganizationSuggestedTopicsSubtitle');
    }
    getSubmitButtonLabel_() {
        return loadTimeData.getString('tabOrganizationSubmitButtonLabel');
    }
    getUndoButtonLabel_() {
        return loadTimeData.getString('tabOrganizationUndoButtonLabel');
    }
    getWindowCreatedMessage_() {
        return loadTimeData.getStringF('tabOrganizationWindowCreatedMessage', this.undoTopic_);
    }
    getTopicInputPlaceholder_() {
        return loadTimeData.getString('tabOrganizationTopicInputPlaceholder');
    }
    getFooterMessage_() {
        return loadTimeData.getStringF('tabOrganizationSendTabDataMessage');
    }
    getLearnMoreLabel_() {
        return loadTimeData.getString('tabOrganizationLearnMoreLabel');
    }
    getGoPremiumButtonLabel_() {
        return loadTimeData.getString('tabOrganizationGoPremiumButtonLabel');
    }
    getDismissButtonLabel_() {
        return loadTimeData.getString('tabOrganizationDismissButtonLabel');
    }
    getPrivacyDisclaimerMessage_() {
        return loadTimeData.getString('tabOrganizationPrivacyDisclaimer');
    }
    getEnableButtonLabel_() {
        return loadTimeData.getString('tabOrganizationEnableButtonLabel');
    }
    onLearnMoreClick_() {
        this.apiProxy_.openLearnMorePage();
    }
    onGoPremiumClick_() {
        this.apiProxy_.openLeoGoPremiumPage();
    }
    onEnableTabFocusClick_() {
        this.apiProxy_.setTabFocusEnabled();
    }
    onDismissErrorClick_() {
        this.errorMessage = '';
    }
    onElementVisibilityChanged_(visible) {
        if (this.isElementVisible_ === visible) {
            return;
        }
        this.isElementVisible_ = visible;
        this.maybeUpdateSuggestedTopics_();
    }
}
customElements.define(TabFocusPageElement.is, TabFocusPageElement);
