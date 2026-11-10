// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-search-engine-edit-dialog' is a component for adding
 * or editing a search engine entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { loadTimeData } from '../i18n_setup.js';
import { getCss } from './search_engine_edit_dialog.css.js';
import { getHtml } from './search_engine_edit_dialog.html.js';
import { SearchEnginesBrowserProxyImpl } from './search_engines_browser_proxy.js';
const SettingsSearchEngineEditDialogElementBase = WebUiListenerMixinLit(CrLitElement);
export class SettingsSearchEngineEditDialogElement extends SettingsSearchEngineEditDialogElementBase {
    static get is() {
        return 'settings-search-engine-edit-dialog';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The search engine to be edited. If not populated a new search engine
             * should be added.
             */
            model: { type: Object },
            searchEngine_: { type: String },
            keyword_: { type: String },
            queryUrl_: { type: String },
            dialogTitle_: { type: String },
            actionButtonText_: { type: String },
            showPolicySubtitle_: { type: Boolean },
            readonly_: { type: Boolean },
            urlIsReadonly_: { type: Boolean },
        };
    }
    #model_accessor_storage = null;
    get model() { return this.#model_accessor_storage; }
    set model(value) { this.#model_accessor_storage = value; }
    #searchEngine__accessor_storage = '';
    get searchEngine_() { return this.#searchEngine__accessor_storage; }
    set searchEngine_(value) { this.#searchEngine__accessor_storage = value; }
    #keyword__accessor_storage = '';
    get keyword_() { return this.#keyword__accessor_storage; }
    set keyword_(value) { this.#keyword__accessor_storage = value; }
    #queryUrl__accessor_storage = '';
    get queryUrl_() { return this.#queryUrl__accessor_storage; }
    set queryUrl_(value) { this.#queryUrl__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    #actionButtonText__accessor_storage = '';
    get actionButtonText_() { return this.#actionButtonText__accessor_storage; }
    set actionButtonText_(value) { this.#actionButtonText__accessor_storage = value; }
    #showPolicySubtitle__accessor_storage = false;
    get showPolicySubtitle_() { return this.#showPolicySubtitle__accessor_storage; }
    set showPolicySubtitle_(value) { this.#showPolicySubtitle__accessor_storage = value; }
    #readonly__accessor_storage = false;
    get readonly_() { return this.#readonly__accessor_storage; }
    set readonly_(value) { this.#readonly__accessor_storage = value; }
    #urlIsReadonly__accessor_storage = false;
    get urlIsReadonly_() { return this.#urlIsReadonly__accessor_storage; }
    set urlIsReadonly_(value) { this.#urlIsReadonly__accessor_storage = value; }
    browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('search-engines-changed', loadTimeData.getBoolean('searchSettingsUpdate') ?
            this.updateEnginesFromCategorizedUrls_.bind(this) :
            this.updateEnginesFromSearchEnginesInfo_.bind(this));
        this.browserProxy_.searchEngineEditStarted(this.model ? this.model.id : null);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('model')) {
            if (this.model) {
                this.readonly_ = this.model.isManaged && !this.model.canBeEdited;
                if (this.model.isPrepopulated || this.model.default) {
                    this.dialogTitle_ = loadTimeData.getString(this.readonly_ ? 'searchEnginesViewSearchEngine' :
                        'searchEnginesEditSearchEngine');
                }
                else {
                    this.dialogTitle_ = loadTimeData.getString(this.readonly_ ? 'searchEnginesViewSiteSearch' :
                        'searchEnginesEditSiteSearch');
                }
                this.actionButtonText_ =
                    loadTimeData.getString(this.readonly_ ? 'done' : 'save');
                this.showPolicySubtitle_ = this.model.isManaged;
                // If editing an existing search engine, pre-populate the input fields.
                this.searchEngine_ = this.model.name;
                this.keyword_ = this.model.keyword;
                this.queryUrl_ = this.model.url;
            }
            else {
                this.dialogTitle_ =
                    loadTimeData.getString('searchEnginesAddSiteSearch');
                this.actionButtonText_ = loadTimeData.getString('add');
                this.readonly_ = false;
                this.showPolicySubtitle_ = false;
                this.searchEngine_ = '';
                this.keyword_ = '';
                this.queryUrl_ = '';
            }
        }
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('model') ||
            changedPrivateProperties.has('readonly_')) {
            this.urlIsReadonly_ =
                this.readonly_ || (!!this.model && this.model.urlLocked);
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener('cancel', () => {
            this.browserProxy_.searchEngineEditCancelled();
        });
        this.updateActionButtonState_();
        this.$.dialog.showModal();
    }
    onSearchEngineValueChanged_(e) {
        this.searchEngine_ = e.detail.value;
    }
    onSearchEngineInput_(e) {
        this.validate_(e);
    }
    onKeywordValueChanged_(e) {
        this.keyword_ = e.detail.value;
    }
    onKeywordFocus_(e) {
        this.validate_(e);
    }
    onKeywordInput_(e) {
        this.validate_(e);
    }
    onQueryUrlValueChanged_(e) {
        this.queryUrl_ = e.detail.value;
    }
    onQueryUrlFocus_(e) {
        this.validate_(e);
    }
    onQueryUrlInput_(e) {
        this.validate_(e);
    }
    onCancelClick_() {
        this.cancel_();
    }
    updateEnginesFromCategorizedUrls_(categorizedTemplateUrls) {
        assert(loadTimeData.getBoolean('searchSettingsUpdate'));
        if (this.model) {
            const engineStillExists = [
                'activeSiteShortcuts',
                'inactiveSiteShortcuts',
                'activeFeatureShortcuts',
                'inactiveFeatureShortcuts',
            ].some(type => {
                return categorizedTemplateUrls[type].some(e => e.id === this.model.id);
            });
            if (!engineStillExists) {
                this.cancel_();
                return;
            }
        }
        [this.$.searchEngine, this.$.keyword, this.$.queryUrl].forEach(element => this.validateElement_(element));
    }
    updateEnginesFromSearchEnginesInfo_(searchEnginesInfo) {
        assert(!loadTimeData.getBoolean('searchSettingsUpdate'));
        if (this.model) {
            const engineWasRemoved = ['defaults', 'actives', 'others', 'extensions'].every(engineType => searchEnginesInfo[engineType].every(e => e.id !== this.model.id));
            if (engineWasRemoved) {
                this.cancel_();
                return;
            }
        }
        [this.$.searchEngine, this.$.keyword, this.$.queryUrl].forEach(element => this.validateElement_(element));
    }
    cancel_() {
        this.$.dialog.cancel();
    }
    onActionButtonClick_() {
        this.browserProxy_.searchEngineEditCompleted(this.searchEngine_, this.keyword_, this.queryUrl_);
        this.$.dialog.close();
    }
    validateElement_(inputElement) {
        // No need to validate fields if the search engine is read-only, i.e.
        // created by policy. Those have been validated when the policy was
        // processed (b/348165485).
        if (this.readonly_) {
            return;
        }
        // If element is empty, disable the action button, but don't show the red
        // invalid message.
        if (inputElement.value === '') {
            inputElement.invalid = false;
            this.updateActionButtonState_();
            return;
        }
        this.browserProxy_
            .validateSearchEngineInput(inputElement.id, inputElement.value)
            .then(isValid => {
            inputElement.invalid = !isValid;
            this.updateActionButtonState_();
        });
    }
    validate_(event) {
        const inputElement = event.target;
        this.validateElement_(inputElement);
    }
    updateActionButtonState_() {
        const allValid = [
            this.$.searchEngine,
            this.$.keyword,
            this.$.queryUrl,
        ].every(function (inputElement) {
            return !inputElement.invalid && inputElement.value.length > 0;
        });
        this.$.actionButton.disabled = !allValid;
    }
}
customElements.define(SettingsSearchEngineEditDialogElement.is, SettingsSearchEngineEditDialogElement);
