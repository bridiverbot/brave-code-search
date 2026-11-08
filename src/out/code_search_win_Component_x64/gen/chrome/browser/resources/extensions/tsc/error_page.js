// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './code_section.js';
import './shared_style.css.js';
import { assert, assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './error_page.css.js';
import { getHtml } from './error_page.html.js';
import { ItemMixin } from './item_mixin.js';
import { navigation, Page } from './navigation_helper.js';
/**
 * Get the URL relative to the main extension url. If the url is
 * unassociated with the extension, this will be the full url.
 */
function getRelativeUrl(url, error) {
    const fullUrl = error ? `chrome-extension://${error.extensionId}/` : '';
    return (fullUrl && url.startsWith(fullUrl)) ? url.substring(fullUrl.length) :
        url;
}
/**
 * Given 3 strings, this function returns the correct one for the type of
 * error that |item| is.
 */
function getErrorSeverityText(item, log, warn, error) {
    if (item.type === chrome.developerPrivate.ErrorType.RUNTIME) {
        const severity = item.severity;
        switch (severity) {
            case chrome.developerPrivate.ErrorLevel.LOG:
                return log;
            case chrome.developerPrivate.ErrorLevel.WARN:
                return warn;
            case chrome.developerPrivate.ErrorLevel.ERROR:
                return error;
            default:
                assertNotReachedCase(severity);
        }
    }
    assert(item.type === chrome.developerPrivate.ErrorType.MANIFEST);
    return warn;
}
const ExtensionsErrorPageElementBase = ItemMixin(CrLitElement);
export class ExtensionsErrorPageElement extends ExtensionsErrorPageElementBase {
    static get is() {
        return 'extensions-error-page';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            data: { type: Object },
            delegate: { type: Object },
            // Whether or not dev mode is enabled.
            inDevMode: { type: Boolean },
            entries_: { type: Array },
            code_: { type: Object },
            /**
             * Index into |entries_|.
             */
            selectedEntry_: { type: Number },
            selectedStackFrame_: { type: Object },
        };
    }
    #data_accessor_storage;
    get data() { return this.#data_accessor_storage; }
    set data(value) { this.#data_accessor_storage = value; }
    #delegate_accessor_storage;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #inDevMode_accessor_storage = false;
    get inDevMode() { return this.#inDevMode_accessor_storage; }
    set inDevMode(value) { this.#inDevMode_accessor_storage = value; }
    #entries__accessor_storage = [];
    get entries_() { return this.#entries__accessor_storage; }
    set entries_(value) { this.#entries__accessor_storage = value; }
    #code__accessor_storage = null;
    get code_() { return this.#code__accessor_storage; }
    set code_(value) { this.#code__accessor_storage = value; }
    #selectedEntry__accessor_storage = -1;
    get selectedEntry_() { return this.#selectedEntry__accessor_storage; }
    set selectedEntry_(value) { this.#selectedEntry__accessor_storage = value; }
    #selectedStackFrame__accessor_storage = null;
    get selectedStackFrame_() { return this.#selectedStackFrame__accessor_storage; }
    set selectedStackFrame_(value) { this.#selectedStackFrame__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('data') && this.data) {
            /**
             * Watches for changes to |data| in order to fetch the corresponding
             * file source.
             */
            this.entries_ = [...this.data.manifestErrors, ...this.data.runtimeErrors];
            this.selectedEntry_ = this.entries_.length > 0 ? 0 : -1;
            this.onSelectedErrorChanged_();
        }
    }
    firstUpdated() {
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        FocusOutlineManager.forDocument(document);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('inDevMode') && !this.inDevMode) {
            this.onCloseButtonClick_();
        }
    }
    getSelectedError() {
        return this.selectedEntry_ === -1 ? null :
            this.entries_[this.selectedEntry_];
    }
    /**
     * Focuses the back button when page is loaded.
     */
    onViewEnterStart_() {
        this.updateComplete.then(() => focusWithoutInk(this.$.closeButton));
        chrome.metricsPrivate.recordUserAction('Options_ViewExtensionErrors');
    }
    getContextUrl_(error) {
        return error.contextUrl ?
            getRelativeUrl(error.contextUrl, error) :
            loadTimeData.getString('errorContextUnknown');
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    onClearAllClick_() {
        const ids = this.entries_.map(entry => entry.id);
        assert(this.data);
        assert(this.delegate);
        this.delegate.deleteErrors(this.data.id, ids);
    }
    computeErrorIcon_(error) {
        // Do not i18n these strings, they're icon names.
        return getErrorSeverityText(error, 'cr:info-filled', 'cr:warning-filled', 'cr:error-filled');
    }
    computeErrorTypeLabel_(error) {
        return getErrorSeverityText(error, loadTimeData.getString('logLevel'), loadTimeData.getString('warnLevel'), loadTimeData.getString('errorLevel'));
    }
    onDeleteErrorClick_(e) {
        const id = Number(e.currentTarget.dataset['errorId']);
        assert(this.data);
        assert(this.delegate);
        this.delegate.deleteErrors(this.data.id, [id]);
        e.stopPropagation();
    }
    /**
     * Fetches the source for the selected error and populates the code section.
     */
    onSelectedErrorChanged_() {
        this.code_ = null;
        if (this.selectedEntry_ < 0) {
            return;
        }
        // Safe to use ! here because we check for selectedEntry_ < 0 above.
        const error = this.getSelectedError();
        const args = {
            extensionId: error.extensionId,
            message: error.message,
            pathSuffix: '',
        };
        switch (error.type) {
            case chrome.developerPrivate.ErrorType.MANIFEST:
                const manifestError = error;
                args.pathSuffix = manifestError.source;
                args.manifestKey = manifestError.manifestKey;
                args.manifestSpecific = manifestError.manifestSpecific;
                break;
            case chrome.developerPrivate.ErrorType.RUNTIME:
                const runtimeError = error;
                try {
                    // slice(1) because pathname starts with a /.
                    args.pathSuffix = new URL(runtimeError.source).pathname.slice(1);
                }
                catch (e) {
                    // Swallow the invalid URL error and return early. This prevents the
                    // uncaught error from causing a runtime error as seen in
                    // crbug.com/40200545.
                    return;
                }
                args.lineNumber =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0].lineNumber :
                        0;
                this.selectedStackFrame_ =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0] :
                        null;
                break;
            default:
                assertNotReachedCase(error.type);
        }
        assert(this.delegate);
        this.delegate.requestFileSource(args).then(code => this.code_ = code);
    }
    computeIsRuntimeError_(item) {
        return item.type === chrome.developerPrivate.ErrorType.RUNTIME;
    }
    /**
     * The description is a human-readable summation of the frame, in the
     * form "<relative_url>:<line_number> (function)", e.g.
     * "myfile.js:25 (myFunction)".
     */
    getStackTraceLabel_(frame) {
        let description = getRelativeUrl(frame.url, this.getSelectedError()) + ':' +
            frame.lineNumber;
        if (frame.functionName) {
            const functionName = frame.functionName === '(anonymous function)' ?
                loadTimeData.getString('anonymousFunction') :
                frame.functionName;
            description += ' (' + functionName + ')';
        }
        return description;
    }
    getStackFrameClass_(frame) {
        return frame === this.selectedStackFrame_ ? 'selected' : '';
    }
    getStackFrameTabIndex_(frame) {
        return frame === this.selectedStackFrame_ ? 0 : -1;
    }
    /**
     * This function is used to determine whether or not we want to show a
     * stack frame. We don't want to show code from internal scripts.
     */
    shouldDisplayFrame_(url) {
        // All our internal scripts are in the 'extensions::' namespace.
        return !/^extensions::/.test(url);
    }
    updateSelected_(frame) {
        this.selectedStackFrame_ = frame;
        const selectedError = this.getSelectedError();
        assert(selectedError);
        assert(this.delegate);
        this.delegate
            .requestFileSource({
            extensionId: selectedError.extensionId,
            message: selectedError.message,
            pathSuffix: getRelativeUrl(frame.url, selectedError),
            lineNumber: frame.lineNumber,
        })
            .then(code => this.code_ = code);
    }
    onStackFrameClick_(e) {
        const target = e.currentTarget;
        const frameIndex = Number(target.dataset['frameIndex']);
        const errorIndex = Number(target.dataset['errorIndex']);
        const error = this.entries_[errorIndex];
        const frame = error.stackTrace[frameIndex];
        this.updateSelected_(frame);
    }
    onStackKeydown_(e) {
        let direction = 0;
        if (e.key === 'ArrowDown') {
            direction = 1;
        }
        else if (e.key === 'ArrowUp') {
            direction = -1;
        }
        else {
            return;
        }
        e.preventDefault();
        const list = e.target.parentElement.querySelectorAll('li');
        for (let i = 0; i < list.length; ++i) {
            if (list[i].classList.contains('selected')) {
                const index = Number(e.currentTarget.dataset['errorIndex']);
                const item = this.entries_[index];
                const frame = item.stackTrace[i + direction];
                if (frame) {
                    this.updateSelected_(frame);
                    list[i + direction].focus(); // Preserve focus.
                }
                return;
            }
        }
    }
    /**
     * Computes the class name for the error item depending on whether its
     * the currently selected error.
     */
    computeErrorClass_(index) {
        return index === this.selectedEntry_ ? 'selected' : '';
    }
    iconName_(index) {
        return index === this.selectedEntry_ ? 'icon-expand-less' :
            'icon-expand-more';
    }
    /**
     * Determine if the cr-collapse should be opened (expanded).
     */
    isOpened_(index) {
        return index === this.selectedEntry_;
    }
    /**
     * @return The aria-expanded value as a string.
     */
    isAriaExpanded_(index) {
        return this.isOpened_(index).toString();
    }
    onErrorItemClick_(e) {
        this.onErrorItemAction_(e);
    }
    onErrorItemKeydown_(e) {
        this.onErrorItemAction_(e);
    }
    onErrorItemAction_(e) {
        if (e.type === 'keydown' &&
            !(e.code === 'Space' ||
                e.code === 'Enter')) {
            return;
        }
        // Call preventDefault() to avoid the browser scrolling when the space key
        // is pressed.
        e.preventDefault();
        const index = Number(e.currentTarget.dataset['errorIndex']);
        this.selectedEntry_ = this.selectedEntry_ === index ? -1 : index;
        this.onSelectedErrorChanged_();
    }
    showReloadButton_() {
        return this.canReloadItem();
    }
    onReloadClick_() {
        this.reloadItem().catch((loadError) => this.fire('load-error', loadError));
    }
    /**
     * Handle the 'View in DevTools' button click for a runtime error.
     * If the error can be inspected (canInspect: true), opens DevTools for the
     * error context. Otherwise, logs a warning that DevTools cannot be opened.
     *
     * @param e The click event containing the error index in the dataset.
     */
    onViewInDevToolsClick_(e) {
        if (!this.data || !this.entries_) {
            return;
        }
        const target = e.currentTarget;
        const errorIndex = Number(target.dataset['errorIndex']);
        const error = this.entries_[errorIndex];
        if (error.canInspect) {
            assert(this.delegate);
            this.delegate.openDevToolsForError(error);
            return;
        }
        // Cannot inspect this error - DevTools cannot be opened for this context.
        console.warn('Cannot open DevTools for this error context.');
        return;
    }
}
customElements.define(ExtensionsErrorPageElement.is, ExtensionsErrorPageElement);
