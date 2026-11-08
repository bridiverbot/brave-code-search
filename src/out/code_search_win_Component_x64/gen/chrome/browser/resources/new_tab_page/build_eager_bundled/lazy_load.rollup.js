import { ca as SUPPORTED_FILE_TYPES, aB as processFile, ac as getTrustedHTML, j as getCss$r, W as WindowProxy, b as assertNotReachedCase, aq as recordEnumeration, r as I18nMixinLit, a as assert, al as recordLoadDuration, ai as recordDuration, ah as ParentTrustedDocumentProxy, aV as AuthType, cb as CrRippleMixin, g as getCss$s, aG as recordSmallCount, cc as htmlEscape, cd as GoogleCalendarPageHandler, ce as OutlookCalendarPageHandler, x as isMac, y as hasKeyModifiers, cf as FooHandler, aQ as RecommendationType, cg as DriveSuggestionHandler, ch as MicrosoftFilesPageHandler, ci as getFaviconForPageURL, h as getCss$t, cj as PageHandler, aE as recordOccurrence, b0 as VisitSource, aD as recordLogValue, aU as ScoredURLUserAction, a$ as FormFactor, ck as PageHandler$1, aZ as Color, cl as MojoPluralStringProxy, E as EventTracker, p as browserProxyFactory, ap as recordSparseValueWithPersistentHash, aF as recordPerdecage, aj as recordBoolean, aO as browserProxyFactory$1, V as FocusOutlineManager, q as skColorToRgba, m as getInstance, cm as hasAllowedInputs, cn as ComposeboxEmbedderMixin, co as getCss$u, cp as ComposeboxProxyImpl, B as GlowAnimationState, a0 as recordUserAction, a1 as recordBoolean$1, a6 as recordContextAdditionMethod, cq as ComposeboxFile, cr as TabAttachmentSource, cs as mapUploadErrorToProcessFilesError, ct as ProcessFilesError } from './shared.rollup.js';
export { cC as ActionChipsApiProxyImpl, cB as ActionChipsElement, au as ActionChipsRetrievalState, cv as AimButtonMode, cw as ComposeboxVoiceSearchElement, cz as ComposeboxWindowProxy, cA as CrButtonElement, cu as CustomizeButtonsElement, cD as DoodleShareDialogElement, a8 as IframeElement, cx as LhsClientAction, cE as NtpComposeboxElement, ae as SubmitButtonIconType, cy as ThreadsRailElement, ao as VoiceSearchAction, cF as VoiceSearchOverlayElement } from './shared.rollup.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { css, html, CrLitElement, render, nothing } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://new-tab-page/strings.m.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import { TextDirection } from 'chrome://resources/mojo/mojo/public/mojom/base/text_direction.mojom-webui.js';
import { browserProxyFactory as browserProxyFactory$2 } from 'chrome://resources/cr_components/most_visited/most_visited.mojom-webui.js';
import { ToolMode, ContextUploadStatus } from 'chrome://resources/cr_components/composebox/composebox_query.mojom-webui.js';
import { PageImageServiceHandler } from 'chrome://resources/cr_components/page_image_service/page_image_service.mojom-webui.js';
import 'chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import 'chrome://resources/mojo/url/mojom/url.mojom-webui.js';
import 'chrome://resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import 'chrome://resources/brave/leo.bundle.js';
import 'chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js';
import 'chrome://resources/cr_components/composebox/composebox.mojom-webui.js';

let instance$y = null;
function getCss$q() {
    return instance$y || (instance$y = [...[], css `:host{display:none}`]);
}

function getHtml$s() {
    return html `<!--_html_template_start_--><form id="fileForm"
      .action="${this.uploadFileAction_}"
      enctype="multipart/form-data"
      method="POST">
  <input id="fileInput"
         name="encoded_image"
         type="file"
         .accept="${this.supportedFileTypes_}"
         @change="${this.onFileInputChange_}"></input>
</form>
<form id="urlForm"
      .action="${this.uploadUrlAction_}"
      method="GET">
  <input name="url" .value="${this.uploadUrl_ || ''}"></input>
  <input name="ep" .value="${this.uploadUrlEntrypoint_ || ''}"></input>
  <input name="hl" .value="${this.language_ || ''}"></input>
  <input name="st" .value="${this.startTime_ || ''}"><input>
  <input name="cd" .value="${this.clientData_ || ''}"><input>
  <input name="re" .value="${this.renderingEnvironment_ || ''}"></input>
  <input name="s" .value="${this.chromiumSurface_ || ''}"></input>
</form>
<!-- Hit a simple gen204 on Lens' servers to prewarm DNS lookup and thus
     decrease latency. -->
<iframe src="https://lens.google.com/gen204" style="display:none;" alt="">
</iframe>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Lens service endpoint for the Upload by File action. */
const SCOTTY_UPLOAD_FILE_ACTION = 'https://lens.google.com/upload';
const DIRECT_UPLOAD_FILE_ACTION = 'https://lens.google.com/v3/upload';
/** Entrypoint for the upload by file action. */
const UPLOAD_FILE_ENTRYPOINT = 'cntpubb';
/** Lens service endpoint for the Upload by URL action. */
const UPLOAD_BY_URL_ACTION = 'https://lens.google.com/uploadbyurl';
/** Entrypoint for the upload by url action. */
const UPLOAD_URL_ENTRYPOINT = 'cntpubu';
/** Rendering environment for the NTP searchbox entrypoint. */
const RENDERING_ENVIRONMENT = 'df';
/** The value of Surface.CHROMIUM expected by Lens Web. */
const CHROMIUM_SURFACE = '4';
/** Max length for encoded input URL. */
const MAX_URL_LENGTH = 2000;
/** Maximum file size support by Lens in bytes. */
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20MB
var LensErrorType;
(function (LensErrorType) {
    // The user attempted to upload multiple files at the same time.
    LensErrorType[LensErrorType["MULTIPLE_FILES"] = 0] = "MULTIPLE_FILES";
    // The user didn't provide a file.
    LensErrorType[LensErrorType["NO_FILE"] = 1] = "NO_FILE";
    // The user provided a file type that is not supported.
    LensErrorType[LensErrorType["FILE_TYPE"] = 2] = "FILE_TYPE";
    // The user provided a file that is too large.
    LensErrorType[LensErrorType["FILE_SIZE"] = 3] = "FILE_SIZE";
    // The user provided a url with an invalid or missing scheme.
    LensErrorType[LensErrorType["INVALID_SCHEME"] = 4] = "INVALID_SCHEME";
    // The user provided a string that does not parse to a valid url.
    LensErrorType[LensErrorType["INVALID_URL"] = 5] = "INVALID_URL";
    // The user provided a string that was too long.
    LensErrorType[LensErrorType["LENGTH_TOO_GREAT"] = 6] = "LENGTH_TOO_GREAT";
})(LensErrorType || (LensErrorType = {}));
var LensSubmitType;
(function (LensSubmitType) {
    LensSubmitType[LensSubmitType["FILE"] = 0] = "FILE";
    LensSubmitType[LensSubmitType["URL"] = 1] = "URL";
})(LensSubmitType || (LensSubmitType = {}));
class LensFormElement extends CrLitElement {
    static get is() {
        return 'ntp-lens-form';
    }
    static get styles() {
        return getCss$q();
    }
    render() {
        return getHtml$s.bind(this)();
    }
    static get properties() {
        return {
            supportedFileTypes_: { type: String },
            renderingEnvironment_: { type: String },
            chromiumSurface_: { type: String },
            uploadFileAction_: { type: String },
            uploadUrlAction_: { type: String },
            uploadUrl_: { type: String },
            uploadUrlEntrypoint_: { type: String },
            language_: { type: String },
            clientData_: { type: String },
            startTime_: { type: String },
        };
    }
    #supportedFileTypes__accessor_storage = SUPPORTED_FILE_TYPES.join(',');
    get supportedFileTypes_() { return this.#supportedFileTypes__accessor_storage; }
    set supportedFileTypes_(value) { this.#supportedFileTypes__accessor_storage = value; }
    #renderingEnvironment__accessor_storage = RENDERING_ENVIRONMENT;
    get renderingEnvironment_() { return this.#renderingEnvironment__accessor_storage; }
    set renderingEnvironment_(value) { this.#renderingEnvironment__accessor_storage = value; }
    #chromiumSurface__accessor_storage = CHROMIUM_SURFACE;
    get chromiumSurface_() { return this.#chromiumSurface__accessor_storage; }
    set chromiumSurface_(value) { this.#chromiumSurface__accessor_storage = value; }
    #language__accessor_storage = window.navigator.language;
    get language_() { return this.#language__accessor_storage; }
    set language_(value) { this.#language__accessor_storage = value; }
    #uploadFileAction__accessor_storage = SCOTTY_UPLOAD_FILE_ACTION;
    get uploadFileAction_() { return this.#uploadFileAction__accessor_storage; }
    set uploadFileAction_(value) { this.#uploadFileAction__accessor_storage = value; }
    #uploadUrlAction__accessor_storage = UPLOAD_BY_URL_ACTION;
    get uploadUrlAction_() { return this.#uploadUrlAction__accessor_storage; }
    set uploadUrlAction_(value) { this.#uploadUrlAction__accessor_storage = value; }
    #uploadUrl__accessor_storage = '';
    get uploadUrl_() { return this.#uploadUrl__accessor_storage; }
    set uploadUrl_(value) { this.#uploadUrl__accessor_storage = value; }
    #uploadUrlEntrypoint__accessor_storage = UPLOAD_URL_ENTRYPOINT;
    get uploadUrlEntrypoint_() { return this.#uploadUrlEntrypoint__accessor_storage; }
    set uploadUrlEntrypoint_(value) { this.#uploadUrlEntrypoint__accessor_storage = value; }
    #startTime__accessor_storage = null;
    get startTime_() { return this.#startTime__accessor_storage; }
    set startTime_(value) { this.#startTime__accessor_storage = value; }
    #clientData__accessor_storage = loadTimeData.getString('searchboxLensVariations');
    get clientData_() { return this.#clientData__accessor_storage; }
    set clientData_(value) { this.#clientData__accessor_storage = value; }
    openSystemFilePicker() {
        this.$.fileInput.click();
    }
    onFileInputChange_() {
        const fileList = this.$.fileInput.files;
        if (fileList) {
            this.submitFileList(fileList);
        }
    }
    submitFileList(files) {
        if (files.length > 1) {
            this.dispatchError_(LensErrorType.MULTIPLE_FILES);
            return;
        }
        const file = files[0];
        if (!file) {
            this.dispatchError_(LensErrorType.NO_FILE);
            return;
        }
        return this.submitFile_(file);
    }
    async submitFile_(file) {
        if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
            this.dispatchError_(LensErrorType.FILE_TYPE);
            return;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            this.dispatchError_(LensErrorType.FILE_SIZE);
            return;
        }
        this.uploadFileAction_ = DIRECT_UPLOAD_FILE_ACTION;
        this.startTime_ = Date.now().toString();
        let processedFile = { processedFile: file };
        processedFile = await processFile(file);
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(processedFile.processedFile);
        this.$.fileInput.files = dataTransfer.files;
        const action = new URL(this.uploadFileAction_);
        action.searchParams.set('ep', UPLOAD_FILE_ENTRYPOINT);
        action.searchParams.set('hl', this.language_);
        action.searchParams.set('st', this.startTime_);
        action.searchParams.set('cd', this.clientData_);
        action.searchParams.set('re', RENDERING_ENVIRONMENT);
        action.searchParams.set('s', CHROMIUM_SURFACE);
        action.searchParams.set('vph', processedFile.imageHeight ? processedFile.imageHeight.toString() : '');
        action.searchParams.set('vpw', processedFile.imageWidth ? processedFile.imageWidth.toString() : '');
        this.uploadFileAction_ = action.toString();
        await this.updateComplete;
        this.dispatchLoading_(LensSubmitType.FILE);
        this.$.fileForm.submit();
    }
    async submitUrl(urlString) {
        if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
            this.dispatchError_(LensErrorType.INVALID_SCHEME);
            return;
        }
        let encodedUri;
        try {
            encodedUri = encodeURI(urlString);
            new URL(urlString); // Throws an error if fails to parse.
        }
        catch (e) {
            this.dispatchError_(LensErrorType.INVALID_URL);
            return;
        }
        if (encodedUri.length > MAX_URL_LENGTH) {
            this.dispatchError_(LensErrorType.LENGTH_TOO_GREAT);
            return;
        }
        this.uploadUrl_ = encodedUri;
        this.startTime_ = Date.now().toString();
        await this.updateComplete;
        this.dispatchLoading_(LensSubmitType.URL);
        this.$.urlForm.submit();
    }
    dispatchLoading_(submitType) {
        this.dispatchEvent(new CustomEvent('loading', {
            bubbles: false,
            composed: false,
            detail: submitType,
        }));
    }
    dispatchError_(errorType) {
        this.dispatchEvent(new CustomEvent('error', {
            bubbles: false,
            composed: false,
            detail: errorType,
        }));
    }
}
customElements.define(LensFormElement.is, LensFormElement);

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Illustrations used by <ntp-lens-upload-dialog>. Defined inline, rather than
// referenced by URL, so that they render regardless of the host document's base
// URL (e.g. when the element is reused outside of chrome://new-tab-page).
const div$4 = document.createElement('div');
div$4.innerHTML = getTrustedHTML `
<cr-iconset name="ntp-lens-upload-dialog">
  <svg>
    <defs>
      <g id="drag-drop-illustration" viewBox="0 0 59 45">
        <path d="M40.333 13.747H1.583v29.708h38.75V13.747Z" fill="#F1F3F4"/>
        <path d="M40.333 13.747h-23.25v19.375h23.25V13.747Z" fill="#CCC"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M.614 12.778H6.75v1.938H2.552v4.198H.614v-6.136Zm38.75 29.709v-4.198h1.938v6.135h-6.136v-1.937h4.198ZM.614 38.289h1.938v4.198H6.75v1.937H.614V38.29Z" fill="#BDC1C6"/>
        <path d="M19.666 30.253h38.75V.545h-38.75v29.708Z" fill="#AECBFA"/>
        <path d="M19.666 21.843v8.41h38.75V19.74l-8.75-7.334a5.625 5.625 0 0 0-3.739-1.305 5.62 5.62 0 0 0-3.673 1.478l-8.837 8.212-5-3.537a3.565 3.565 0 0 0-4.55.396l-4.2 4.192Z" fill="#669DF6"/>
        <path d="M30.006 12.939a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" fill="#E8F0FE"/>
      </g>
      <g id="offline" viewBox="0 0 55 51">
        <path d="m23.184 11.959-5.922-6.155C30.291 2.11 44.846 5.452 55 16.179l-4.908 5.1c-7.446-7.562-17.43-10.727-26.907-9.32Zm21.831 14.596c-4.23-4.396-9.477-6.858-15.061-7.386l11 11.431 4.061-4.045ZM4.57 0 1.015 3.693 7.277 10.2C4.738 11.783 2.2 13.717 0 16.004l4.908 5.1c2.2-2.287 4.738-4.221 7.446-5.628l5.246 5.452c-2.877 1.23-5.415 2.99-7.785 5.275l4.908 5.1c2.37-2.462 5.246-4.044 8.292-4.748l6.939 7.21c-3.554-1.054-7.446 0-10.154 2.814l7.446 7.738 6.43-6.682L46.539 51l3.554-3.693L4.57 0Z" fill="#BDC1C6"/>
      </g>
    </defs>
  </svg>
</cr-iconset>`;
const iconsets$4 = div$4.querySelectorAll('cr-iconset');
for (const iconset of iconsets$4) {
    document.head.appendChild(iconset);
}

let instance$x = null;
function getCss$p() {
    return instance$x || (instance$x = [...[], css `.spinner{--cr-spinner-size:28px;mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-spinner-size) var(--cr-spinner-size);background-color:var(--cr-spinner-color,var(--google-blue-500));height:var(--cr-spinner-size);width:var(--cr-spinner-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-spinner-color,var(--google-blue-300))}}`]);
}

let instance$w = null;
function getCss$o() {
    return instance$w || (instance$w = [...[getCss$r(), getCss$p()], css `:host{--upload-dialog-background:var(--color-new-tab-page-background-override);--upload-dialog-divider-line-border-top:1px solid var(--google-grey-200);--upload-dialog-divider-line-or-label-color:var(--color-new-tab-page-secondary-foreground);--upload-dialog-drag-drop-background:var(--google-grey-50);--upload-dialog-drag-drop-border:1px dashed var(--google-grey-400);--upload-dialog-drag-drop-error-background-color:var(--google-red-50);--upload-dialog-drag-drop-title-color:var(--color-new-tab-page-secondary-foreground);--upload-dialog-drag-drop-upload-text-color:var(--google-blue-700);--upload-dialog-error-message-color:var(--google-red-800);--upload-dialog-input-box-background:var(--color-new-tab-page-background-override);--upload-dialog-input-box-border-color:var(--google-grey-300);--upload-dialog-input-box-color:var(--google-grey-800);--upload-dialog-input-box-placeholder-color:var(--google-grey-700);--upload-dialog-input-submit-background:var(--color-new-tab-page-background-override);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600);--upload-dialog-shadow:var(--cr-elevation-3);--upload-dialog-title-color:var(--google-grey-800);font-family:inherit;width:100%}:host([is-dragging_]),:host([is-loading_]){--upload-dialog-drag-drop-background:var(--google-blue-50)}@media (prefers-color-scheme:dark){:host{--upload-dialog-background:var(--google-grey-850);--upload-dialog-divider-line-border-top:1px solid var(--google-grey-800);--upload-dialog-drag-drop-background:rgba(var(--google-grey-900-rgb),.68);--upload-dialog-drag-drop-border:1px dashed var(--google-grey-800);--upload-dialog-drag-drop-error-background-color:var(--google-red-300);--upload-dialog-drag-drop-upload-text-color:var(--google-blue-300);--upload-dialog-error-message-color:var(--google-grey-900);--upload-dialog-input-box-background:transparent;--upload-dialog-input-box-border-color:var(--google-grey-800);--upload-dialog-input-box-color:var(--google-grey-100);--upload-dialog-input-box-placeholder-color:var(--google-grey-300);--upload-dialog-input-submit-background:transparent;--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-300);--upload-dialog-title-color:var(--google-grey-100)}:host([is-dragging_]),:host([is-loading_]){--upload-dialog-drag-drop-background:rgba(var(--google-blue-300-rgb),.24);--upload-dialog-drag-drop-border:1px dashed var(--google-blue-300);--upload-dialog-drag-drop-title-color:var(--google-blue-300)}}#dialog{background:var(--upload-dialog-background);border-radius:22px;box-shadow:var(--upload-dialog-shadow);box-sizing:border-box;left:unset;padding:20px;position:relative;right:unset}:host-context([dir='rtl']) #closeButton{left:20px;right:initial}#closeButton{--cr-icon-button-fill-color:var(--color-new-tab-page-overlay-secondary-foreground);align-self:flex-end;cursor:pointer;display:flex;position:absolute;right:20px;top:15px}#title{color:var(--upload-dialog-title-color);font-size:16px;letter-spacing:0.1px;line-height:28px;margin-bottom:14px;text-align:center}#dragDropArea{background:var(--upload-dialog-drag-drop-background);border:var(--upload-dialog-drag-drop-border);border-radius:8px;box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;height:280px;padding:20px;position:relative;width:100%}#dragDropError{align-items:center;background-color:var(--upload-dialog-drag-drop-error-background-color);border-top-left-radius:8px;border-top-right-radius:8px;justify-content:space-between;left:0;position:absolute;right:0;top:0}#dragDropErrorMessage{color:var(--upload-dialog-error-message-color);flex:1;font-size:12px;padding:5px;text-align:center}.drag-drop-title-container{align-items:center;display:inline-flex;flex-direction:row;flex-grow:1;justify-content:center}#dragDropIllustration{display:inline-flex;height:45px;margin-inline-end:18px;vertical-align:middle;width:59px}.drag-drop-title{color:var(--upload-dialog-drag-drop-title-color);font-size:16px;line-height:25px;max-width:300px}#dragText{display:inline-block;margin-inline-end:4px}#uploadText{color:var(--upload-dialog-drag-drop-upload-text-color);cursor:pointer;display:inline-block;white-space:nowrap}#uploadText:focus,#uploadText:hover{text-decoration:underline}@media (forced-colors:active){#uploadText{color:LinkText}}#urlUploadContainer{box-sizing:border-box;display:flex;flex-direction:column;width:100%}#sectionDivider{align-items:center;display:flex}.divider-line{border-top:var(--upload-dialog-divider-line-border-top);flex-grow:1;height:0}#orLabel{color:var(--upload-dialog-divider-line-or-label-color);cursor:default;flex-shrink:0;font-size:14px;margin-inline-end:20px;margin-inline-start:20px}#inputContainer{display:flex;margin-top:14px}#inputBox{background:var(--upload-dialog-input-box-background);border:1px solid var(--upload-dialog-input-box-border-color);border-radius:36px;color:var(--upload-dialog-input-box-color);display:inline-flex;flex-grow:1;font-size:14px;height:40px;outline:none;padding:0 24px;width:100%}#inputBox::placeholder{color:var(--upload-dialog-input-box-placeholder-color)}#inputBox:hover{--upload-dialog-input-box-border-color:var(--google-grey-800)}#inputBox:focus{--upload-dialog-input-box-border-color:var(--google-blue-700)}#inputBox:active{--upload-dialog-input-box-border-color:var(--google-blue-700)}@media (prefers-color-scheme:dark){#inputBox:hover{--upload-dialog-input-box-border-color:var(--google-grey-700)}#inputBox:focus{--upload-dialog-input-box-border-color:var(--google-blue-300)}#inputBox:active{--upload-dialog-input-box-border-color:var(--google-blue-300)}}#inputSubmit{align-items:center;background:var(--upload-dialog-input-submit-background);border:1px solid var(--upload-dialog-input-submit-border-color);border-radius:32px;color:var(--upload-dialog-input-submit-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-size:14px;justify-content:center;letter-spacing:0.25px;margin-inline-start:8px;outline:0;padding:8px 24px}#inputSubmit:hover{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb),0.08);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600)}#inputSubmit:focus{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb),0.08);--upload-dialog-input-submit-border-color:var(--google-blue-700);--upload-dialog-input-submit-color:var(--google-blue-600)}#inputSubmit:active{--upload-dialog-input-submit-background:rgba(var(--google-blue-700-rgb),0.14);--upload-dialog-input-submit-border-color:var(--google-grey-300);--upload-dialog-input-submit-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){#inputSubmit:hover{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb),0.04);--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-100)}#inputSubmit:focus{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb),0.12);--upload-dialog-input-submit-border-color:var(--google-blue-100);--upload-dialog-input-submit-color:var(--google-blue-100)}#inputSubmit:active{--upload-dialog-input-submit-background:rgba(var(--google-blue-300-rgb),0.10);--upload-dialog-input-submit-border-color:var(--google-grey-800);--upload-dialog-input-submit-color:var(--google-blue-100)}}#loadingContainer,#offlineContainer{align-items:center;display:flex;flex-direction:column;flex-grow:1;justify-content:center}#loadingContainer .spinner{margin-bottom:12px}#offlineTitle{color:var(--upload-dialog-title-color);text-align:center}#offlineImage{height:51px;margin-bottom:24px;width:55px}#offlineSubtitle{color:var(--upload-dialog-drag-drop-title-color);font-size:16px;margin-top:6px}#offlineRetryButton{margin-top:21px}`]);
}

function getHtml$r() {
    return html `<!--_html_template_start_--><div id="dialog" ?hidden="${this.isHidden_}" tabindex="-1"
    lang="$i18n{language}" role="dialog" aria-modal="true"
    @focusout="${this.onFocusout_}">
  <ntp-lens-form id="lensForm" @loading="${this.onFormLoading_}"
      @error="${this.onFormError_}">
  </ntp-lens-form>
  <div id="container">
    <cr-icon-button id="closeButton" class="icon-clear"
        title="$i18n{lensSearchUploadDialogCloseButtonLabel}"
        @click="${this.onCloseButtonClick_}"
        @keydown="${this.onCloseButtonKeydown_}">
    </cr-icon-button>
    <div id="title">$i18n{lensSearchUploadDialogTitle}</div>
    <div id="dragDropArea" @dragenter="${this.onDragenter_}"
        @dragover="${this.onDragover_}" @dragleave="${this.onDragleave_}"
        @drop="${this.onDrop_}">
      <!-- Error state -->
      ${this.isError_ ? html `
        <div id="dragDropError">
          <div id="dragDropErrorMessage">${this.getErrorString_()}</div>
        </div>
      ` : ''}
      <!-- Normal state -->
      ${this.isNormalOrError_ ? html `
        <div class="drag-drop-title-container">
          <cr-icon id="dragDropIllustration"
              icon="ntp-lens-upload-dialog:drag-drop-illustration">
          </cr-icon>
          <div class="drag-drop-title">
            <span id="dragText">$i18n{lensSearchUploadDialogDragTitle}</span>
            <span tabindex="0" role="button" id="uploadText"
                @click="${this.onUploadFileClick_}"
                @keydown="${this.onUploadFileKeydown_}"
                @touchend="${this.onUploadFileTouchend_}">
              $i18n{lensSearchUploadDialogUploadFileTitle}
            </span>
          </div>
        </div>
        <div id="urlUploadContainer">
          <div id="sectionDivider">
            <div class="divider-line"></div>
            <div id="orLabel">$i18n{lensSearchUploadDialogOrText}</div>
            <div class="divider-line"></div>
          </div>
          <div id="inputContainer">
            <input id="inputBox" autocomplete="false" autocorrect="false"
                placeholder="$i18n{lensSearchUploadDialogTextPlaceholder}"
                text="text" .value="${this.uploadUrl_}"
                @input="${this.onInputBoxInput_}"
                @keydown="${this.onUrlKeydown_}">
            <div id="inputSubmit" tabindex="0" role="button"
                @click="${this.onInputSubmitClick_}"
                @keydown="${this.onInputSubmitKeydown_}">
              $i18n{lensSearchUploadDialogSearchButtonLabel}
            </div>
          </div>
        </div>
      ` : ''}
      <!-- Dragging state -->
      ${this.isDragging_ ? html `
        <div class="drag-drop-title-container">
          <div class="drag-drop-title">
            $i18n{lensSearchUploadDialogDragDropTitle}
          </div>
        </div>
      ` : ''}
      <!-- Loading state -->
      ${this.isLoading_ ? html `
        <div id="loadingContainer">
          <div class="spinner"></div>
          <div class="drag-drop-title">
            $i18n{lensSearchUploadDialogLoadingText}
          </div>
        </div>
      ` : ''}
      <!-- Offline state -->
      ${this.isOffline_ ? html `
        <div id="offlineContainer">
          <cr-icon id="offlineImage" icon="ntp-lens-upload-dialog:offline">
          </cr-icon>
          <div id="offlineTitle" class="drag-drop-title">
            $i18n{lensSearchUploadDialogOfflineText}
          </div>
          <div id="offlineSubtitle">
            $i18n{lensSearchUploadDialogOfflineSubtitleText}
          </div>
          <cr-button id="offlineRetryButton" class="action-button"
              @click="${this.onOfflineRetryButtonClick_}"
              @keydown="${this.onOfflineRetryButtonKeydown_}">
            $i18n{lensSearchUploadDialogOfflineButtonLabel}
          </cr-button>
        </div>
      ` : ''}
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DialogState;
(function (DialogState) {
    // Dialog is currently hidden from the user.
    DialogState[DialogState["HIDDEN"] = 0] = "HIDDEN";
    // Dialog is open and awaiting user input.
    DialogState[DialogState["NORMAL"] = 1] = "NORMAL";
    // User is dragging a file over the UI.
    DialogState[DialogState["DRAGGING"] = 2] = "DRAGGING";
    // User dropped a file and a request to Lens is started.
    DialogState[DialogState["LOADING"] = 3] = "LOADING";
    // User selected a file that resulted in an error.
    DialogState[DialogState["ERROR"] = 4] = "ERROR";
    // User is offline.
    DialogState[DialogState["OFFLINE"] = 5] = "OFFLINE";
})(DialogState || (DialogState = {}));
var LensErrorMessage;
(function (LensErrorMessage) {
    // No error.
    LensErrorMessage[LensErrorMessage["NONE"] = 0] = "NONE";
    // User provided an invalid file format.
    LensErrorMessage[LensErrorMessage["FILE_TYPE"] = 1] = "FILE_TYPE";
    // User provided a file that is too large to handle.
    LensErrorMessage[LensErrorMessage["FILE_SIZE"] = 2] = "FILE_SIZE";
    // User provided multiple files.
    LensErrorMessage[LensErrorMessage["MULTIPLE_FILES"] = 3] = "MULTIPLE_FILES";
    // User provided URL with improper scheme.
    LensErrorMessage[LensErrorMessage["SCHEME"] = 4] = "SCHEME";
    // User provided invalid URL.
    LensErrorMessage[LensErrorMessage["CONFORMANCE"] = 5] = "CONFORMANCE";
    // User provided multiple URLs.
    LensErrorMessage[LensErrorMessage["MULTIPLE_URLS"] = 6] = "MULTIPLE_URLS";
})(LensErrorMessage || (LensErrorMessage = {}));
const EventKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' ',
    TAB: 'Tab',
};
/**
 * List of possible upload dialog actions. This enum must match with the
 * numbering for NewTabPageLensUploadDialogActions in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
var LensUploadDialogAction;
(function (LensUploadDialogAction) {
    LensUploadDialogAction[LensUploadDialogAction["URL_SUBMITTED"] = 0] = "URL_SUBMITTED";
    LensUploadDialogAction[LensUploadDialogAction["FILE_SUBMITTED"] = 1] = "FILE_SUBMITTED";
    LensUploadDialogAction[LensUploadDialogAction["IMAGE_DROPPED"] = 2] = "IMAGE_DROPPED";
    LensUploadDialogAction[LensUploadDialogAction["DIALOG_OPENED"] = 3] = "DIALOG_OPENED";
    LensUploadDialogAction[LensUploadDialogAction["DIALOG_CLOSED"] = 4] = "DIALOG_CLOSED";
    LensUploadDialogAction[LensUploadDialogAction["ERROR_SHOWN"] = 5] = "ERROR_SHOWN";
    LensUploadDialogAction[LensUploadDialogAction["MAX_VALUE"] = 5] = "MAX_VALUE";
})(LensUploadDialogAction || (LensUploadDialogAction = {}));
/**
 * List of possible upload dialog errors. This enum must match with the
 * numbering for NewTabPageLensUploadDialogErrors in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
var LensUploadDialogError;
(function (LensUploadDialogError) {
    LensUploadDialogError[LensUploadDialogError["FILE_SIZE"] = 0] = "FILE_SIZE";
    LensUploadDialogError[LensUploadDialogError["FILE_TYPE"] = 1] = "FILE_TYPE";
    LensUploadDialogError[LensUploadDialogError["MULTIPLE_FILES"] = 2] = "MULTIPLE_FILES";
    LensUploadDialogError[LensUploadDialogError["MULTIPLE_URLS"] = 3] = "MULTIPLE_URLS";
    LensUploadDialogError[LensUploadDialogError["LENGTH_TOO_GREAT"] = 4] = "LENGTH_TOO_GREAT";
    LensUploadDialogError[LensUploadDialogError["INVALID_SCHEME"] = 5] = "INVALID_SCHEME";
    LensUploadDialogError[LensUploadDialogError["INVALID_URL"] = 6] = "INVALID_URL";
    LensUploadDialogError[LensUploadDialogError["NETWORK_ERROR"] = 7] = "NETWORK_ERROR";
    LensUploadDialogError[LensUploadDialogError["MAX_VALUE"] = 7] = "MAX_VALUE";
})(LensUploadDialogError || (LensUploadDialogError = {}));
function recordLensUploadDialogAction(action) {
    recordEnumeration('NewTabPage.Lens.UploadDialog.DialogAction', action, LensUploadDialogAction.MAX_VALUE + 1);
}
function recordLensUploadDialogError(action) {
    recordEnumeration('NewTabPage.Lens.UploadDialog.DialogError', action, LensUploadDialogError.MAX_VALUE + 1);
}
const LensUploadDialogElementBase = I18nMixinLit(CrLitElement);
// Modal that lets the user upload images for search on Lens.
class LensUploadDialogElement extends LensUploadDialogElementBase {
    static get is() {
        return 'ntp-lens-upload-dialog';
    }
    static get styles() {
        return getCss$o();
    }
    render() {
        return getHtml$r.bind(this)();
    }
    static get properties() {
        return {
            dialogState_: { type: Number },
            lensErrorMessage_: { type: Number },
            isHidden_: { type: Boolean },
            isNormalOrError_: { type: Boolean },
            isDragging_: {
                type: Boolean,
                reflect: true,
            },
            isLoading_: {
                type: Boolean,
                reflect: true,
            },
            isError_: { type: Boolean },
            isOffline_: { type: Boolean },
            uploadUrl_: { type: String },
        };
    }
    #isHidden__accessor_storage = false;
    get isHidden_() { return this.#isHidden__accessor_storage; }
    set isHidden_(value) { this.#isHidden__accessor_storage = value; }
    #isError__accessor_storage = false;
    get isError_() { return this.#isError__accessor_storage; }
    set isError_(value) { this.#isError__accessor_storage = value; }
    #isNormalOrError__accessor_storage = false;
    get isNormalOrError_() { return this.#isNormalOrError__accessor_storage; }
    set isNormalOrError_(value) { this.#isNormalOrError__accessor_storage = value; }
    #isDragging__accessor_storage = false;
    get isDragging_() { return this.#isDragging__accessor_storage; }
    set isDragging_(value) { this.#isDragging__accessor_storage = value; }
    #isLoading__accessor_storage = false;
    get isLoading_() { return this.#isLoading__accessor_storage; }
    set isLoading_(value) { this.#isLoading__accessor_storage = value; }
    #isOffline__accessor_storage = false;
    get isOffline_() { return this.#isOffline__accessor_storage; }
    set isOffline_(value) { this.#isOffline__accessor_storage = value; }
    #dialogState__accessor_storage = DialogState.HIDDEN;
    get dialogState_() { return this.#dialogState__accessor_storage; }
    set dialogState_(value) { this.#dialogState__accessor_storage = value; }
    #lensErrorMessage__accessor_storage = LensErrorMessage.NONE;
    get lensErrorMessage_() { return this.#lensErrorMessage__accessor_storage; }
    set lensErrorMessage_(value) { this.#lensErrorMessage__accessor_storage = value; }
    outsideHandlerAttached_ = false;
    #uploadUrl__accessor_storage = '';
    get uploadUrl_() { return this.#uploadUrl__accessor_storage; }
    set uploadUrl_(value) { this.#uploadUrl__accessor_storage = value; }
    dragCount = 0;
    connectedCallback() {
        super.connectedCallback();
        this.openDialog();
    }
    computeIsHidden_() {
        return this.dialogState_ === DialogState.HIDDEN;
    }
    computeIsNormalOrError_() {
        return this.dialogState_ === DialogState.NORMAL ||
            this.dialogState_ === DialogState.ERROR;
    }
    computeIsDragging_() {
        return this.dialogState_ === DialogState.DRAGGING;
    }
    computeIsLoading_() {
        return this.dialogState_ === DialogState.LOADING;
    }
    computeIsError_() {
        return this.dialogState_ === DialogState.ERROR;
    }
    computeIsOffline_() {
        return this.dialogState_ === DialogState.OFFLINE;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.detachOutsideHandler_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedPrivateProperties.has('dialogState_')) {
            this.isHidden_ = this.computeIsHidden_();
            this.isNormalOrError_ = this.computeIsNormalOrError_();
            this.isDragging_ = this.computeIsDragging_();
            this.isLoading_ = this.computeIsLoading_();
            this.isError_ = this.computeIsError_();
            this.isOffline_ = this.computeIsOffline_();
        }
    }
    openDialog() {
        this.setOnlineState_();
        // Click handler needs to be attached outside of the initial event handler,
        // otherwise the click of the icon which initially opened the dialog would
        // also be registered in the outside click handler, causing the dialog to
        // immediately close after opening.
        this.updateComplete.then(() => {
            this.attachOutsideHandler_();
            if (this.isOffline_) {
                this.shadowRoot.getElementById('offlineRetryButton').focus();
            }
            else {
                this.shadowRoot.getElementById('uploadText').focus();
            }
        });
        recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_OPENED);
    }
    closeDialog() {
        if (this.isHidden_) {
            return;
        }
        this.dialogState_ = DialogState.HIDDEN;
        this.detachOutsideHandler_();
        this.dispatchEvent(new Event('close-lens-search'));
        recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_CLOSED);
    }
    getErrorString_() {
        switch (this.lensErrorMessage_) {
            case LensErrorMessage.FILE_TYPE:
                return this.i18n('lensSearchUploadDialogErrorFileType');
            case LensErrorMessage.FILE_SIZE:
                return this.i18n('lensSearchUploadDialogErrorFileSize');
            case LensErrorMessage.MULTIPLE_FILES:
                return this.i18n('lensSearchUploadDialogErrorMultipleFiles');
            case LensErrorMessage.SCHEME:
                return this.i18n('lensSearchUploadDialogValidationErrorScheme');
            case LensErrorMessage.CONFORMANCE:
                return this.i18n('lensSearchUploadDialogValidationErrorConformance');
            case LensErrorMessage.MULTIPLE_URLS:
                return this.i18n('lensSearchUploadDialogErrorMultipleUrls');
            default:
                return '';
        }
    }
    /**
     * Checks to see if the user is online or offline and sets the dialog state
     * accordingly.
     */
    setOnlineState_() {
        this.dialogState_ = WindowProxy.getInstance().onLine ? DialogState.NORMAL :
            DialogState.OFFLINE;
    }
    outsideKeyHandler_ = (event) => {
        if (event.key === EventKeys.ESCAPE) {
            this.closeDialog();
        }
    };
    attachOutsideHandler_() {
        if (!this.outsideHandlerAttached_) {
            document.addEventListener('keydown', this.outsideKeyHandler_);
            this.outsideHandlerAttached_ = true;
        }
    }
    detachOutsideHandler_() {
        if (this.outsideHandlerAttached_) {
            document.removeEventListener('keydown', this.outsideKeyHandler_);
            this.outsideHandlerAttached_ = false;
        }
    }
    onCloseButtonKeydown_(event) {
        if (event.key === EventKeys.TAB && (this.isDragging_ || this.isLoading_)) {
            event.preventDefault();
            // In the dragging and loading states, the close button is the only
            // tabbable element in the dialog, so focus should stay on it.
        }
        else if (event.key === EventKeys.TAB && event.shiftKey) {
            event.preventDefault();
            if (this.isNormalOrError_) {
                this.shadowRoot.getElementById('inputSubmit').focus();
            }
            else if (this.isOffline_) {
                this.shadowRoot.getElementById('offlineRetryButton').focus();
            }
        }
    }
    onOfflineRetryButtonKeydown_(event) {
        if (event.key === EventKeys.TAB && !event.shiftKey) {
            event.preventDefault();
            this.$.closeButton.focus();
        }
    }
    onCloseButtonClick_() {
        this.closeDialog();
    }
    onOfflineRetryButtonClick_() {
        this.setOnlineState_();
    }
    onUploadFileKeydown_(event) {
        if (event.key === EventKeys.ENTER || event.key === EventKeys.SPACE) {
            this.$.lensForm.openSystemFilePicker();
        }
    }
    onUploadFileClick_() {
        this.$.lensForm.openSystemFilePicker();
    }
    // Remove this after the NTP is fully migrated off of Polymer.
    // This is to stop Polymer from running its touchend event listener that
    // keeps the event from making it to the file input.
    onUploadFileTouchend_(e) {
        e.stopPropagation();
    }
    onFormLoading_(event) {
        this.dialogState_ = DialogState.LOADING;
        switch (event.detail) {
            case LensSubmitType.FILE:
                recordLensUploadDialogAction(LensUploadDialogAction.FILE_SUBMITTED);
                break;
            case LensSubmitType.URL:
                recordLensUploadDialogAction(LensUploadDialogAction.URL_SUBMITTED);
                break;
            default:
                assertNotReachedCase(event.detail);
        }
    }
    onFormError_(event) {
        switch (event.detail) {
            case LensErrorType.MULTIPLE_FILES:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.MULTIPLE_FILES;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.MULTIPLE_FILES);
                break;
            case LensErrorType.NO_FILE:
                this.dialogState_ = DialogState.NORMAL;
                this.lensErrorMessage_ = LensErrorMessage.NONE;
                break;
            case LensErrorType.FILE_TYPE:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.FILE_TYPE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.FILE_TYPE);
                break;
            case LensErrorType.FILE_SIZE:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.FILE_SIZE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.FILE_SIZE);
                break;
            case LensErrorType.INVALID_SCHEME:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.SCHEME;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.INVALID_SCHEME);
                break;
            case LensErrorType.INVALID_URL:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.CONFORMANCE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.INVALID_URL);
                break;
            case LensErrorType.LENGTH_TOO_GREAT:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.CONFORMANCE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.LENGTH_TOO_GREAT);
                break;
            default:
                this.dialogState_ = DialogState.NORMAL;
                this.lensErrorMessage_ = LensErrorMessage.NONE;
        }
    }
    onUrlKeydown_(event) {
        if (event.key === EventKeys.ENTER) {
            event.preventDefault();
            this.submitUrl_();
        }
    }
    onInputSubmitKeydown_(event) {
        if (event.key === EventKeys.ENTER || event.key === EventKeys.SPACE) {
            this.submitUrl_();
        }
        else if (event.key === EventKeys.TAB && !event.shiftKey) {
            event.preventDefault();
            this.$.closeButton.focus();
        }
    }
    onInputSubmitClick_() {
        this.submitUrl_();
    }
    submitUrl_() {
        const url = this.uploadUrl_.trim();
        if (url.length > 0) {
            this.$.lensForm.submitUrl(url);
        }
    }
    onDragenter_(e) {
        e.preventDefault();
        this.dragCount += 1;
        if (this.dragCount === 1) {
            this.dialogState_ = DialogState.DRAGGING;
        }
    }
    onDragover_(e) {
        e.preventDefault();
    }
    onDragleave_(e) {
        e.preventDefault();
        this.dragCount -= 1;
        if (this.dragCount === 0) {
            this.dialogState_ = DialogState.NORMAL;
        }
    }
    onDrop_(e) {
        e.preventDefault();
        this.dragCount = 0;
        if (e.dataTransfer) {
            this.$.lensForm.submitFileList(e.dataTransfer.files);
            recordLensUploadDialogAction(LensUploadDialogAction.IMAGE_DROPPED);
        }
    }
    onFocusout_(event) {
        // If the focus event is occurring during a drag into the upload dialog,
        // do nothing. See b/284201957#6 for scenario in which this is necessary.
        if (this.dragCount === 1) {
            return;
        }
        // Focus ensures that the file picker pop-up does not close dialog.
        const outsideDialog = document.hasFocus() &&
            (!event.relatedTarget ||
                !this.$.dialog.contains(event.relatedTarget));
        if (outsideDialog) {
            this.closeDialog();
        }
    }
    onInputBoxInput_(e) {
        this.uploadUrl_ = e.target.value;
    }
}
customElements.define(LensUploadDialogElement.is, LensUploadDialogElement);

const div$3 = document.createElement('div');
div$3.innerHTML = getTrustedHTML `<cr-iconset name="modules" size="20">
  <svg>
    <defs>
      <g id="block">
        <path d="M6.895 17.375a8.068 8.068 0 0 1-2.551-1.719 8.068 8.068 0 0 1-1.719-2.55A7.78 7.78 0 0 1 2 10c0-1.11.207-2.148.625-3.113a8.122 8.122 0 0 1 1.719-2.543c.73-.73 1.578-1.301 2.55-1.719A7.81 7.81 0 0 1 10.013 2a7.72 7.72 0 0 1 3.101.625 8.122 8.122 0 0 1 2.543 1.719c.73.73 1.301 1.578 1.719 2.543A7.75 7.75 0 0 1 18 10a7.78 7.78 0 0 1-.625 3.105 8.068 8.068 0 0 1-1.719 2.551c-.73.73-1.578 1.301-2.543 1.719a7.72 7.72 0 0 1-3.101.625 7.81 7.81 0 0 1-3.117-.625ZM10 16.5c.766 0 1.484-.125 2.168-.375a6.545 6.545 0 0 0 1.852-1.043L4.918 5.98a6.545 6.545 0 0 0-1.043 1.852A6.246 6.246 0 0 0 3.5 10c0 1.805.633 3.34 1.895 4.605C6.66 15.867 8.195 16.5 10 16.5Zm5.082-2.48a6.545 6.545 0 0 0 1.043-1.852c.25-.684.375-1.402.375-2.168 0-1.805-.633-3.34-1.895-4.605C13.34 4.133 11.805 3.5 10 3.5c-.766 0-1.484.125-2.168.375-.68.25-1.297.598-1.852 1.043ZM10 10Zm0 0"></path>
      </g>
      <g id="block-old" viewBox="0 -960 960 960">
        <path d="M480-87.87q-80.674 0-152.109-30.717T202.761-203q-53.696-53.696-84.294-125.25T87.869-480.478q0-81.674 30.598-152.489 30.598-70.816 84.294-124.392 53.695-53.576 125.13-84.174Q399.326-872.131 480-872.131q81.674 0 152.609 30.598t124.63 84.174q53.696 53.576 84.294 124.392 30.598 70.815 30.598 152.489 0 80.674-30.598 152.228T757.239-203q-53.695 53.696-124.63 84.413Q561.674-87.869 480-87.869Zm0-83q53.087 0 100.652-16.804t86.13-47.609L234.804-667.022q-30.326 39.044-47.13 86.37-16.804 47.326-16.804 100.174 0 128.804 90.282 219.206Q351.435-170.87 480-170.87Zm245.435-123.065q30.087-39.043 46.891-86.369t16.804-100.174q0-128.565-90.282-218.609Q608.565-789.13 480-789.13q-52.848 0-100.054 16.565-47.207 16.565-86.25 46.652l431.739 431.978Z">
        </path>
      </g>
      <g id="check-small">
        <path d="m8.332 11.605 5.086-5.085a.725.725 0 0 1 .531-.227c.2 0 .38.074.531.227a.73.73 0 0 1 .227.53.725.725 0 0 1-.227.532l-5.625 5.625a.729.729 0 0 1-1.062 0l-2.273-2.27a.725.725 0 0 1-.227-.53c0-.204.074-.38.227-.532a.729.729 0 0 1 1.063 0Zm0 0"></path>
      </g>
      <g id="done-old" viewBox="0 -960 960 960">
        <path d="M395-277.348 218.348-455l57.891-57.891L395-395.131l288.761-287.76L741.652-624 395-277.348Z">
        </path>
      </g>
      <g id="info">
        <path d="M10.531 13.785a.73.73 0 0 0 .219-.535v-3.5c0-.21-.07-.39-.215-.535A.713.713 0 0 0 10.004 9c-.211 0-.39.07-.535.215a.73.73 0 0 0-.219.535v3.5c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215Zm0-6.5a.716.716 0 0 0 .219-.531c0-.211-.07-.39-.215-.535A.716.716 0 0 0 10.004 6c-.211 0-.39.07-.535.215a.716.716 0 0 0-.219.531c0 .211.07.39.215.535.14.145.32.219.531.219.211 0 .39-.07.535-.215ZM10.004 18a7.8 7.8 0 0 1-3.11-.625 8.068 8.068 0 0 1-2.55-1.719 8.068 8.068 0 0 1-1.719-2.55A7.804 7.804 0 0 1 2 9.991c0-1.105.207-2.14.625-3.105a8.122 8.122 0 0 1 1.719-2.543c.73-.73 1.578-1.301 2.55-1.719A7.804 7.804 0 0 1 10.009 2c1.105 0 2.14.207 3.105.625a8.122 8.122 0 0 1 2.543 1.719c.73.73 1.301 1.578 1.719 2.547.418.968.625 2.004.625 3.105a7.8 7.8 0 0 1-.625 3.11 8.068 8.068 0 0 1-1.719 2.55c-.73.73-1.578 1.301-2.547 1.719a7.753 7.753 0 0 1-3.105.625ZM10 16.5c1.805 0 3.34-.633 4.605-1.895C15.867 13.34 16.5 11.805 16.5 10c0-1.805-.633-3.34-1.895-4.605C13.34 4.133 11.805 3.5 10 3.5c-1.805 0-3.34.633-4.605 1.895C4.133 6.66 3.5 8.195 3.5 10c0 1.805.633 3.34 1.895 4.605C6.66 15.867 8.195 16.5 10 16.5Zm0-6.5Zm0 0"></path>
      </g>
      <g id="info-old" viewBox="0 -960 960 960">
        <path d="M440.413-284.413h79.174V-528h-79.174v243.587Zm39.376-310.804q17.244 0 29.119-11.665 11.875-11.664 11.875-28.907 0-17.244-11.665-29.119-11.664-11.875-28.907-11.875-17.244 0-29.119 11.665-11.875 11.664-11.875 28.907 0 17.244 11.665 29.119 11.664 11.875 28.907 11.875Zm.487 507.348q-81.189 0-152.621-30.618-71.432-30.618-124.991-84.177-53.559-53.559-84.177-124.949-30.618-71.391-30.618-152.845 0-81.455 30.618-152.387t84.177-124.491q53.559-53.559 124.949-84.177 71.391-30.618 152.845-30.618 81.455 0 152.387 30.618t124.491 84.177q53.559 53.559 84.177 124.716 30.618 71.156 30.618 152.344 0 81.189-30.618 152.621-30.618 71.432-84.177 124.991-53.559 53.559-124.716 84.177-71.156 30.618-152.344 30.618ZM480-170.87q129.043 0 219.087-90.043Q789.13-350.957 789.13-480t-90.043-219.087Q609.043-789.13 480-789.13t-219.087 90.043Q170.87-609.043 170.87-480t90.043 219.087Q350.957-170.87 480-170.87ZM480-480Z">
        </path>
      </g>
      <g id="logout">
        <path d="M4.5 17c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 3 15.5v-11c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 4.5 3h4.75c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219H4.5v11h4.75c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535A.73.73 0 0 1 9.25 17Zm9.625-6.25H8.75a.721.721 0 0 1-.535-.215.713.713 0 0 1-.215-.531c0-.211.07-.39.215-.535a.725.725 0 0 1 .535-.219h5.375l-1.168-1.168a.725.725 0 0 1-.227-.531c0-.203.075-.38.227-.531a.73.73 0 0 1 .531-.227c.203 0 .38.074.532.227l2.46 2.46c.153.145.227.32.227.516a.72.72 0 0 1-.227.524l-2.46 2.46a.689.689 0 0 1-.52.22.804.804 0 0 1-.531-.243.748.748 0 0 1-.219-.531c0-.2.078-.38.23-.531Zm0 0"></path>
      </g>
      <g id="logout-old" viewBox="0 -960 960 960">
        <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z">
        </path>
      </g>
      <g id="thumb-down">
        <path d="M2.5 13c-.375 0-.719-.156-1.031-.469C1.156 12.22 1 11.875 1 11.5v-1.188c0-.109.012-.214.031-.312a1 1 0 0 1 .094-.27l2.48-5.812c.125-.293.356-.523.696-.688.34-.167.672-.25.992-.25L14.5 3v10l-4.875 4.875a1.844 1.844 0 0 1-.906.512c-.34.074-.645.035-.918-.117-.27-.153-.442-.399-.52-.739-.078-.34-.074-.71.012-1.113L8 13Zm10.5-.625V4.5H5l-2.5 5.813V11.5h7.332l-1.02 5.043ZM17.5 3c.43 0 .79.148 1.074.441.285.293.426.645.426 1.059v7c0 .414-.14.766-.426 1.059A1.44 1.44 0 0 1 17.5 13h-3v-1.5h3v-7h-3V3ZM13 4.5v7.875Zm0 0"></path>
      </g>
      <g id="thumb_down-old" viewBox="0 -960 960 960">
        <path d="M240.957-807.63h457.434v489.087L413.978-34.13l-38.293-25.776q-17.881-12.529-27.479-32.224-9.597-19.696-5.597-41.131l1-2.369 37.282-182.913H120q-34.065 0-58.533-24.468Q37-367.478 37-401.543v-42.413q0-8.582 1.5-15.748 1.5-7.165 4.978-14.404l120.435-283.066q9.196-22.869 30.685-36.663 21.489-13.793 46.359-13.793Zm378.021 83H240.957L120.478-443.956v42.413h358.218l-46.131 231.282 186.413-186.413V-724.63Zm0 367.956V-724.63v367.956Zm79.413 38.131v-83h136.587V-724.63H698.391v-83h219.587v489.087H698.391Z">
        </path>
      </g>
      <g id="tune">
        <path d="M9.719 16.785a.73.73 0 0 1-.219-.535v-3.5c0-.21.07-.39.215-.535a.713.713 0 0 1 .531-.215c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535v1h5.246c.211 0 .39.07.535.215.145.14.219.32.219.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219H11v1c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215ZM3.75 15.25c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 14.504c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h3.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm2.469-2.965A.73.73 0 0 1 6 11.75v-1H3.754c-.211 0-.39-.07-.535-.215A.716.716 0 0 1 3 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219H6v-1c0-.21.07-.39.215-.535a.713.713 0 0 1 .531-.215c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535v3.5c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215ZM9.75 10.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 9 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h6.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm2.469-2.965A.73.73 0 0 1 12 7.25v-3.5c0-.21.07-.39.215-.535A.713.713 0 0 1 12.746 3c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535v1h2.75c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219H13.5v1c0 .21-.07.39-.215.535a.713.713 0 0 1-.531.215c-.211 0-.39-.07-.535-.215ZM3.75 6.25c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 5.504c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h6.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0 0"></path>
      </g>
      <g id="tune-old" viewBox="0 -960 960 960">
        <path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z">
        </path>
      </g>
      <g id="visibility-off">
        <path d="M12.48 7.52c.29.293.528.644.707 1.054.18.41.286.836.313 1.281a.735.735 0 0 1-.219.532.728.728 0 0 1-.531.218.768.768 0 0 1-.543-.218.712.712 0 0 1-.227-.532 1.693 1.693 0 0 0-.093-.773 1.78 1.78 0 0 0-.387-.613 1.597 1.597 0 0 0-.594-.387A1.74 1.74 0 0 0 10.145 8a.735.735 0 0 1-.532-.219.728.728 0 0 1-.218-.531c0-.207.074-.387.218-.531a.735.735 0 0 1 .532-.219 3.82 3.82 0 0 1 1.273.3c.402.177.754.415 1.062.72ZM10 5.5c-.23 0-.457.008-.676.023a5.43 5.43 0 0 0-.66.079.898.898 0 0 1-.59-.114.729.729 0 0 1-.367-.457.723.723 0 0 1 .074-.574.62.62 0 0 1 .465-.316c.293-.051.586-.09.875-.11.29-.02.582-.031.879-.031 1.86 0 3.574.477 5.137 1.426 1.562.953 2.746 2.261 3.554 3.93a1.415 1.415 0 0 1 .141.644c0 .11-.008.219-.031.324-.02.102-.051.211-.094.32a7.522 7.522 0 0 1-.914 1.481c-.363.457-.758.89-1.188 1.293a.707.707 0 0 1-1.043-.09.703.703 0 0 1-.175-.55c.02-.2.105-.376.258-.528a7.168 7.168 0 0 0 1.71-2.25 7.692 7.692 0 0 0-3.011-3.3A8.25 8.25 0 0 0 10 5.5ZM10 16a9.213 9.213 0 0 1-5.02-1.45 10.34 10.34 0 0 1-3.605-3.847.916.916 0 0 1-.137-.34 2.205 2.205 0 0 1 0-.726.961.961 0 0 1 .137-.344c.32-.625.691-1.211 1.121-1.75a9.345 9.345 0 0 1 1.461-1.48L2.395 4.5a.718.718 0 0 1-.227-.52.72.72 0 0 1 .227-.523.73.73 0 0 1 .53-.227c.204 0 .38.075.532.227l13.086 13.086a.712.712 0 0 1 .227.52.712.712 0 0 1-.227.519.729.729 0 0 1-1.063 0l-2.187-2.164A9.49 9.49 0 0 1 10 16ZM5.02 7.145c-.485.39-.938.816-1.352 1.28A6.17 6.17 0 0 0 2.645 10a7.692 7.692 0 0 0 3.011 3.3A8.25 8.25 0 0 0 10 14.5a7.37 7.37 0 0 0 1.066-.074 11.02 11.02 0 0 0 1.04-.196l-.938-.937c-.195.066-.39.121-.586.156-.191.035-.387.051-.582.051-.973 0-1.797-.34-2.48-1.02-.68-.683-1.02-1.507-1.02-2.48 0-.195.023-.39.074-.582.047-.195.094-.39.133-.586ZM11 9Zm-2 2Zm0 0"></path>
      </g>
      <g id="visibility_off-old" viewBox="0 -960 960 960">
        <path d="m638.435-429.065-72.283-72.283q2.326-29.391-18.337-49.717t-48.38-18l-70.37-70.37q12.283-4.282 25.446-6.424Q467.674-648 480-648q70 0 119 49t49 119q0 11.848-2.141 25.489-2.142 13.641-7.424 25.446ZM777.652-289.37l-56.782-57.26q34.326-27.522 62.75-60.185 28.423-32.663 48.902-73.185-49.479-100.761-144.5-158.38Q593-696 480-696q-26 0-49.685 2.761-23.685 2.761-46.011 9.043l-64.217-64.217q38-15 78.456-21 40.457-6 81.457-6 144.435 0 264.967 78.695Q865.5-618.022 919.413-480q-22 57.478-58.978 104.935-36.978 47.456-82.783 85.695ZM765.13-87.13 639.435-213.065q-37.522 14.239-77.5 21.359-39.978 7.119-81.935 7.119-144.674 0-265.207-78.935Q94.261-342.456 40.587-480q21.76-56.522 58-104.359 36.239-47.837 83.761-86.793l-99.044-98.565 53.631-53.631 681.587 682.826L765.13-87.13ZM238.848-614.37q-34.522 28.479-63.207 60.544-28.684 32.065-47.924 73.826 49 101 144.142 158.5Q367-264 480-264q23.848 0 47.772-3.141 23.924-3.142 48.924-9.142l-45-45q-12.805 4.761-25.848 7.022Q492.804-312 480-312q-70 0-119-49t-49-119q0-12.565 3.141-25.728 3.142-13.163 5.663-25.968l-81.956-82.674Zm292.739 84.457Zm-102.935 99.587Z">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets$3 = div$3.querySelectorAll('cr-iconset');
for (const iconset of iconsets$3) {
    document.head.appendChild(iconset);
}

let instance$v = null;
function getCss$n() {
    return instance$v || (instance$v = [...[getCss$r()], css `:host{--menu-item-margin:12px;display:flex;flex-direction:column;margin:8px}@media (forced-colors:active){:host{outline:var(--cr-border-hcm)}}#titleContainer{align-items:center;display:flex;height:20px;padding:12px 12px 8px 12px}#title{color:var(--color-new-tab-page-primary-foreground);font-size:13px;font-weight:normal;line-height:20px;margin-block-start:0;margin-block-end:0}#headerSpacer{flex-grow:1}#menuButton{--cr-icon-button-icon-size:20px;--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-control-background-hovered);margin-inline:0 -6px}#actionMenu{--cr-menu-shadow:var(--ntp-menu-shadow)}.action-menu-icon{--cr-icon-ripple-size:16px;background-color:transparent;margin-inline-start:calc(-1 * var(--menu-item-margin));margin-inline-end:var(--menu-item-margin)}#actionMenuDivider{background-color:var(--color-new-tab-page-module-context-menu-divider);border:none;height:1px;margin:8px 0}`]);
}

function getHtml$q() {
    return html `<!--_html_template_start_--><div id="titleContainer">
  <h2 id="title" ?hidden="${!this.headerText}">${this.headerText}</h2>
  <div id="headerSpacer"></div>
  <slot name="title-actions"></slot>
  <cr-icon-button id="menuButton" title="${this.moreActionsText}"
      class="icon-more-vert" @click="${this.onMenuButtonClick_}">
  </cr-icon-button>
</div>

<cr-action-menu id="actionMenu"
    role-description="$i18n{moduleHeaderMoreActionsMenu}">
  ${this.menuItems.map(item => html `
    <button id="${item.action}" class="dropdown-item"
        @click="${this.onButtonClick_}" data-action="${item.action}">
      <cr-icon class="action-menu-icon cr-icon" icon="${item.icon}"></cr-icon>
      ${item.text}
    </button>
  `)}
  ${!this.hideCustomize ? html `
    <hr id="actionMenuDivider" ?hidden="${!this.showDivider_()}">
    <button id="customize-module" class="dropdown-item"
          @click="${this.onButtonClick_}" data-action="customize-module">
      <cr-icon class="action-menu-icon cr-icon"
          icon="${this.getTuneIcon_()}"></cr-icon>
      $i18n{modulesCustomizeButtonText}
    </button>
  ` : ''}
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Element that displays a header inside a module.  */
class ModuleHeaderElement extends CrLitElement {
    static get is() {
        return 'ntp-module-header';
    }
    static get styles() {
        return getCss$n();
    }
    render() {
        return getHtml$q.bind(this)();
    }
    static get properties() {
        return {
            headerText: { type: String },
            moreActionsText: { type: String },
            menuItems: { type: Array },
            hideCustomize: { type: Boolean },
        };
    }
    #headerText_accessor_storage = null;
    get headerText() { return this.#headerText_accessor_storage; }
    set headerText(value) { this.#headerText_accessor_storage = value; }
    #menuItems_accessor_storage = [];
    get menuItems() { return this.#menuItems_accessor_storage; }
    set menuItems(value) { this.#menuItems_accessor_storage = value; }
    #moreActionsText_accessor_storage = '';
    get moreActionsText() { return this.#moreActionsText_accessor_storage; }
    set moreActionsText(value) { this.#moreActionsText_accessor_storage = value; }
    #hideCustomize_accessor_storage = false;
    get hideCustomize() { return this.#hideCustomize_accessor_storage; }
    set hideCustomize(value) { this.#hideCustomize_accessor_storage = value; }
    onButtonClick_(e) {
        const action = e.currentTarget.dataset['action'];
        assert(action);
        e.stopPropagation();
        this.$.actionMenu.close();
        if (action === 'customize-module') {
            this.dispatchEvent(new Event('customize-module', { bubbles: true, composed: true }));
        }
        else {
            this.dispatchEvent(new Event(`${action}-button-click`, { bubbles: true, composed: true }));
        }
    }
    onMenuButtonClick_(e) {
        this.$.actionMenu.showAt(e.target);
    }
    showDivider_() {
        return this.menuItems?.length > 0;
    }
    getTuneIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'modules:tune' :
            'modules:tune-old';
    }
}
customElements.define(ModuleHeaderElement.is, ModuleHeaderElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleDescriptor {
    id_;
    initializeCallback_;
    constructor(id, initializeCallback) {
        this.id_ = id;
        this.initializeCallback_ = initializeCallback;
    }
    get id() {
        return this.id_;
    }
    /**
     * Initializes the module and returns one or more module elements on success.
     * @param timeout Timeout in milliseconds after which initialization aborts.
     * @param onNtpLoad `true` if the module is being initialized during the
     *     initial NTP load, `false` if it's being initialized later in the NTP's
     *     lifecycle.
     */
    async initialize(timeout, onNtpLoad = true) {
        const loadStartTime = WindowProxy.getInstance().now();
        const element = await Promise.race([
            this.initializeCallback_(),
            new Promise(resolve => {
                WindowProxy.getInstance().setTimeout(() => {
                    resolve(null);
                }, timeout);
            }),
        ]);
        if (!element) {
            return null;
        }
        const loadEndTime = WindowProxy.getInstance().now();
        const duration = loadEndTime - loadStartTime;
        recordLoadDuration('NewTabPage.Modules.Loaded', loadEndTime);
        recordLoadDuration(`NewTabPage.Modules.Loaded.${this.id_}`, loadEndTime);
        recordDuration('NewTabPage.Modules.LoadDuration', duration);
        recordDuration(`NewTabPage.Modules.LoadDuration.${this.id_}`, duration);
        const histogramBase = onNtpLoad ? 'NewTabPage.Modules.LoadedOnNTPLoad' :
            'NewTabPage.Modules.LoadedAfterNTPLoad';
        recordLoadDuration(`${histogramBase}`, loadEndTime);
        recordLoadDuration(`${histogramBase}.${this.id_}`, loadEndTime);
        return element;
    }
}

let instance$u = null;
function getCss$m() {
    return instance$u || (instance$u = [...[], css `#contents{align-items:center;background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);display:flex;flex-direction:column;gap:24px;margin:8px;padding:32px 40px}:host([format='wide']) #contents{flex-direction:row;gap:38px}@media (prefers-color-scheme:dark){#authImg{content:url(modules/authentication/icons/microsoft_auth_dark.svg)}}#headingsAndButton{align-items:center;display:flex;flex-direction:column;gap:16px}:host([format='wide']) #headingsAndButton{align-items:flex-start}#headings{text-align:center}:host([format='wide']) #headings{text-align:initial}#heading{color:var(--color-new-tab-page-primary-foreground);font-size:16px;font-weight:500;line-height:24px;margin:0}#subheading{color:var(--color-new-tab-page-secondary-foreground);font-size:var(--ntp-module-text-size);font-weight:400;line-height:var(--ntp-module-line-height);margin:0}`]);
}

function getHtml$p() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesMicrosoftAuthName')}"
    @disable-button-click="${this.onDisableButtonClick_}">
</ntp-module-header>
<div id="contents">
  <img id="authImg"
      src="modules/authentication/icons/microsoft_auth_light.svg">
  <div id="headingsAndButton">
    <div id="headings">
      <h2 id="heading">$i18n{modulesMicrosoftAuthHeading}</h2>
      <div id="subheading">$i18n{modulesMicrosoftAuthSubheading}</div>
    </div>
    <cr-button role="link" class="action-button" id="signInButton"
        @click="${this.onSignInClick_}">
      $i18n{modulesMicrosoftAuthSignIn}
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MicrosoftAuthModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Microsoft Authentication module, which enables users to sign in with
 * their Microsoft accounts and authenticate data retrieval from various
 * Microsoft services, such as Sharepoint and Outlook.
 */
class MicrosoftAuthModuleElement extends MicrosoftAuthModuleElementBase {
    static get is() {
        return 'ntp-microsoft-auth-module';
    }
    static get styles() {
        return getCss$m();
    }
    render() {
        return getHtml$p.bind(this)();
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesMicrosoftAuthDisable'),
            },
        ];
    }
    onDisableButtonClick_() {
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesMicrosoftAuthName')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    // Cause Login flow to begin within auth iframe.
    onSignInClick_() {
        const proxyInstance = ParentTrustedDocumentProxy.getInstance();
        if (proxyInstance) {
            proxyInstance.getChildDocument().acquireTokenPopup();
            recordEnumeration(`NewTabPage.MicrosoftAuth.AuthStarted`, AuthType.kPopup, AuthType.MAX_VALUE + 1);
        }
    }
}
customElements.define(MicrosoftAuthModuleElement.is, MicrosoftAuthModuleElement);
function createMicrosoftAuthElement() {
    return Promise.resolve(new MicrosoftAuthModuleElement());
}
const microsoftAuthModuleDescriptor = new ModuleDescriptor(
/*id*/ 'microsoft_authentication', createMicrosoftAuthElement);

let instance$t = null;
function getCss$l() {
    return instance$t || (instance$t = [...[], css `:host{--cr-chip-border-radius:8px;--cr-chip-color:var(--color-chip-foreground,var(--cr-fallback-color-on-surface));--cr-chip-font-size:12px;--cr-chip-height:28px}button{--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-chip-icon,var(--cr-fallback-color-primary));--cr-icon-ripple-margin:0;--cr-icon-ripple-size:16px;--cr-icon-size:contain;--iron-icon-fill-color:var(--color-chip-icon,var(--cr-fallback-color-primary));--iron-icon-height:16px;--iron-icon-width:16px;align-items:center;appearance:none;background-color:transparent;border:1px solid var(--color-chip-border,var(--cr-fallback-color-tonal-outline));border-radius:var(--cr-chip-border-radius);color:var(--cr-chip-color);cursor:pointer;font-family:inherit;display:flex;flex-direction:row;font-size:var(--cr-chip-font-size);font-weight:500;gap:4px;height:var(--cr-chip-height);overflow:hidden;padding:0 8px;position:relative;white-space:nowrap}button:not(:is([disabled],[selected])):hover{background-color:transparent;border-color:var(--color-chip-border,var(--cr-fallback-color-tonal-outline))}button:focus-visible{outline:solid 2px var(--cr-focus-outline-color);outline-offset:2px}button[disabled]{cursor:default;opacity:var(--cr-disabled-opacity)}button[selected]{--cr-icon-color:var(--color-chip-icon-selected,var(--cr-fallback-color-on-tonal-container));--iron-icon-fill-color:var(--color-chip-icon-selected,var(--cr-fallback-color-on-tonal-container));background-color:var(--color-chip-background-selected,var(--cr-fallback-color-tonal-container));border-color:var(--color-chip-background-selected,var(--cr-fallback-color-tonal-container));color:var(--color-chip-foreground-selected,var(--cr-fallback-color-on-tonal-container));padding:0 8px}#hoverLayer{display:none}button:hover #hoverLayer{background:var(--cr-hover-on-subtle-background-color);display:block;inset:0;pointer-events:none;position:absolute}#ink{--paper-ripple-opacity:1;color:var(--cr-active-neutral-on-subtle-background-color);display:block}`]);
}

let instance$s = null;
function getCss$k() {
    return instance$s || (instance$s = [...[getCss$l()], css `button{padding-inline:var(--cr-chip-padding-inline,revert)}button[selected]{padding-inline:var(--cr-chip-padding-inline,revert)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$o() {
    return html `
<button id="button" ?selected="${this.selected}" ?disabled="${this.disabled}"
    aria-pressed="${this.selected}" role="${this.chipRole}"
    aria-label="${this.chipAriaLabel}">
  <div id="hoverLayer"></div>
  <slot></slot>
</button>`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrChipElementBase = CrRippleMixin(CrLitElement);
class CrChipElement extends CrChipElementBase {
    static get is() {
        return 'cr-chip';
    }
    static get styles() {
        return getCss$k();
    }
    render() {
        return getHtml$o.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            chipAriaLabel: { type: String },
            chipRole: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #chipAriaLabel_accessor_storage = '';
    get chipAriaLabel() { return this.#chipAriaLabel_accessor_storage; }
    set chipAriaLabel(value) { this.#chipAriaLabel_accessor_storage = value; }
    #chipRole_accessor_storage = '';
    get chipRole() { return this.#chipRole_accessor_storage; }
    set chipRole(value) { this.#chipRole_accessor_storage = value; }
    #selected_accessor_storage = false;
    get selected() { return this.#selected_accessor_storage; }
    set selected(value) { this.#selected_accessor_storage = value; }
    constructor() {
        super();
        this.ensureRippleOnPointerdown();
    }
    // Overridden from CrRippleMixin
    createRipple() {
        this.rippleContainer = this.shadowRoot.querySelector('button');
        return super.createRipple();
    }
}
customElements.define(CrChipElement.is, CrChipElement);

let instance$r = null;
function getCss$j() {
    return instance$r || (instance$r = [...[getCss$r(), getCss$s()], css `:host([expanded]) #header{color:var(--color-new-tab-page-primary-foreground);font-weight:500;overflow:hidden}#header{box-sizing:border-box;column-gap:4px;color:var(--color-new-tab-page-secondary-foreground);display:flex;font-size:var(--ntp-module-text-size);line-height:var(--ntp-module-line-height);padding:4px 16px;position:relative;text-decoration:none;width:100%}#header #hoverContainer{background:var(--color-new-tab-page-module-item-background-hovered);display:none;height:100%;inset:0;position:absolute;width:100%}#header:hover #hoverContainer{display:block}:host-context(.focus-outline-visible) #header:focus,#header:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:none}@media (forced-colors:active){:host-context(.focus-outline-visible) #header:focus,#header:focus-visible{outline:var(--cr-border-hcm)}}#startTime{display:inline-block;flex-shrink:0;position:relative;width:56px}#title{flex-grow:1;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}#timeStatus{background-color:var(--color-new-tab-page-module-calendar-event-time-status-background);border-radius:100px;color:var(--color-new-tab-page-secondary-foreground);display:inline-block;flex-basis:content;flex-shrink:0;font-size:var(--ntp-module-secondary-text-size);font-weight:400;line-height:var(--ntp-module-secondary-line-height);padding:2px 8px;position:relative}.cr-icon{--cr-icon-color:var(--color-new-tab-page-secondary-foreground);--cr-icon-size:18px;height:20px;margin:0;width:20px}#expandedInfo{padding:0 16px}#location{padding:4px 0}#attachments,#attachmentList,#location{column-gap:8px;display:flex;width:100%}#location-icon{--cr-icon-image:url(modules/calendar/icons/location.svg)}#location p{color:var(--color-new-tab-page-secondary-foreground);font-size:12px;line-height:var(--ntp-module-secondary-line-height);margin:0;overflow:hidden;padding:2px 0;text-overflow:ellipsis;white-space:nowrap}#attachments{position:relative}#attachmentList.scrollable-right{mask-image:linear-gradient(to right,black calc(100% - 16px),transparent 100%)}#attachmentList.scrollable-left{mask-image:linear-gradient(to right,transparent 0,black 16px)}#attachmentList.scrollable{mask-image:linear-gradient(to right,transparent 0,black 16px,black calc(100% - 16px),transparent 100%)}#attachmentList{margin-inline-end:-4px;overflow-x:auto;overflow-y:hidden;padding:4px}#attachmentList::-webkit-scrollbar{background:transparent;height:8px}#attachmentList::-webkit-scrollbar-thumb{background:var(--color-new-tab-page-module-calendar-attachment-scrollbar-thumb);background-clip:content-box;border:solid 1.5px transparent;border-radius:100px}#attachment-icon{--cr-icon-image:url(modules/v2/calendar/icons/attachment.svg);margin:6px -4px 6px 0}#attachments cr-chip{--cr-chip-color:var(--color-new-tab-page-link);--cr-chip-border-radius:100px;--cr-chip-font-size:var(--ntp-module-secondary-text-size);--cr-chip-height:24px}#attachments cr-chip[disabled]{--cr-disabled-opacity:1;--cr-chip-color:var(--color-sys-state-disabled);--color-chip-border:var(--color-sys-neutral-outline);--cr-fallback-color-tonal-outline:var(--cr-fallback-color-neutral-outline)}#attachments img{height:14px;width:14px}.attachment-text{max-width:13ch;overflow:hidden;text-overflow:ellipsis}#conference{margin-bottom:4px;margin-top:8px}`]);
}

function getHtml$n() {
    return html `<!--_html_template_start_--><a id="header" href="${this.event.url}" @click="${this.onHeaderClick_}"
    title="${this.event.title}">
  <div id="hoverContainer"></div>
  <span id="startTime">${this.formattedStartTime_}</span>
  <span id="title">${this.event.title}</span>
  <span id="timeStatus" ?hidden="${!this.timeStatus_}">
    ${this.timeStatus_}
  </span>
</a>
${this.expanded ? html `
  <div id="expandedInfo">
    <div id="location" ?hidden="${!this.showLocation_()}">
      <div id="location-icon" class="cr-icon"></div>
      <p>${this.event.location}</p>
    </div>
    <div id="attachments" ?hidden="${!this.showAttachments_()}">
      <div id="attachment-icon" class="cr-icon"></div>
      <div id="attachmentList" class="${this.attachmentListClass_}">
        ${this.event.attachments.map((item, index) => html `
          <cr-chip data-index="${index}" @click="${this.onAttachmentClick_}"
              chip-role="link" class="attachment" title="${item.title}"
              ?disabled="${this.isAttachmentDisabled_(index)}">
            <img is="cr-auto-img" auto-src="${item.iconUrl}" alt="">
            <div class="attachment-text">${item.title}</div>
          </cr-chip>
        `)}
      </div>
    </div>
    <div id="conference" ?hidden="${!this.showConferenceButton_()}">
      <cr-button role="link"
          @click="${this.onVideoConferenceClick_}"
          class="action-button"
          aria-label="${this.getConferenceButtonAriaLabel_()}">
        $i18n{modulesCalendarJoinMeetingButtonText}
      </cr-button>
    </div>
  </div>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Microseconds between windows and unix epoch.
const kWindowsToUnixEpochOffset = 11644473600000000n;
/**
 * Calendar actions. This enum must match the numbering for
 * NTPCalendarAction in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
var CalendarAction;
(function (CalendarAction) {
    CalendarAction[CalendarAction["EXPANDED_EVENT_HEADER_CLICKED"] = 0] = "EXPANDED_EVENT_HEADER_CLICKED";
    CalendarAction[CalendarAction["DOUBLE_BOOKED_EVENT_HEADER_CLICKED"] = 1] = "DOUBLE_BOOKED_EVENT_HEADER_CLICKED";
    CalendarAction[CalendarAction["BASIC_EVENT_HEADER_CLICKED"] = 2] = "BASIC_EVENT_HEADER_CLICKED";
    CalendarAction[CalendarAction["ATTACHMENT_CLICKED"] = 3] = "ATTACHMENT_CLICKED";
    CalendarAction[CalendarAction["CONFERENCE_CALL_CLICKED"] = 4] = "CONFERENCE_CALL_CLICKED";
    CalendarAction[CalendarAction["SEE_MORE_CLICKED"] = 5] = "SEE_MORE_CLICKED";
    CalendarAction[CalendarAction["MAX_VALUE"] = 5] = "MAX_VALUE";
})(CalendarAction || (CalendarAction = {}));
function recordCalendarAction(action, moduleName) {
    recordEnumeration(`NewTabPage.${moduleName}.UserAction`, action, CalendarAction.MAX_VALUE + 1);
}
function toJsTimestamp(time) {
    return Number((time.internalValue - kWindowsToUnixEpochOffset) / 1000n);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const kAttachmentScrollFadeBuffer = 4;
const kMillisecondsInMinute = 60000;
const kMinutesInHour = 60;
const CalendarEventElementBase = I18nMixinLit(CrLitElement);
/**
 * The calendar event element for displaying a single event.
 */
class CalendarEventElement extends CalendarEventElementBase {
    static get is() {
        return 'ntp-calendar-event';
    }
    static get styles() {
        return getCss$j();
    }
    render() {
        return getHtml$n.bind(this)();
    }
    static get properties() {
        return {
            doubleBooked: { type: Boolean },
            event: { type: Object },
            expanded: {
                type: Boolean,
                reflect: true,
            },
            index: { type: Number },
            moduleName: { type: String },
            attachmentListClass_: { type: String },
            formattedStartTime_: { type: String },
            timeStatus_: { type: String },
        };
    }
    #doubleBooked_accessor_storage = false;
    get doubleBooked() { return this.#doubleBooked_accessor_storage; }
    set doubleBooked(value) { this.#doubleBooked_accessor_storage = value; }
    #event_accessor_storage = {
        title: '',
        startTime: { internalValue: BigInt(0) },
        endTime: { internalValue: BigInt(0) },
        url: '',
        attachments: [],
        location: null,
        conferenceUrl: null,
        isAccepted: false,
        hasOtherAttendee: false,
    };
    get event() { return this.#event_accessor_storage; }
    set event(value) { this.#event_accessor_storage = value; }
    #expanded_accessor_storage = false;
    get expanded() { return this.#expanded_accessor_storage; }
    set expanded(value) { this.#expanded_accessor_storage = value; }
    #index_accessor_storage = -1;
    get index() { return this.#index_accessor_storage; }
    set index(value) { this.#index_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #attachmentListClass__accessor_storage = '';
    get attachmentListClass_() { return this.#attachmentListClass__accessor_storage; }
    set attachmentListClass_(value) { this.#attachmentListClass__accessor_storage = value; }
    #formattedStartTime__accessor_storage = '';
    get formattedStartTime_() { return this.#formattedStartTime__accessor_storage; }
    set formattedStartTime_(value) { this.#formattedStartTime__accessor_storage = value; }
    intersectionObserver_ = null;
    #timeStatus__accessor_storage = '';
    get timeStatus_() { return this.#timeStatus__accessor_storage; }
    set timeStatus_(value) { this.#timeStatus__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('event')) {
            this.formattedStartTime_ = this.computeFormattedStartTime_();
        }
        if (changedProperties.has('event') || changedProperties.has('expanded')) {
            this.timeStatus_ = this.computeTimeStatus_();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if ((changedProperties.has('event') || changedProperties.has('expanded')) &&
            (this.expanded && this.showAttachments_())) {
            const attachmentList = this.renderRoot.querySelector('#attachmentList');
            if (attachmentList && attachmentList.children.length > 1) {
                const attachments = attachmentList.children;
                this.intersectionObserver_ =
                    new IntersectionObserver(() => this.updateAttachmentListClass_(), {
                        root: attachmentList,
                        threshold: 1.0,
                    });
                const firstAttachment = attachments[0];
                assert(firstAttachment);
                this.intersectionObserver_.observe(firstAttachment);
                const lastAttachment = attachments[attachments.length - 1];
                assert(lastAttachment);
                this.intersectionObserver_.observe(lastAttachment);
            }
        }
    }
    computeFormattedStartTime_() {
        const offsetDate = toJsTimestamp(this.event.startTime);
        const dateObj = new Date(offsetDate);
        let timeStr = Intl.DateTimeFormat(undefined, { timeStyle: 'short' }).format(dateObj);
        // Remove extra spacing and make AM/PM lower case.
        timeStr = timeStr.replace(' AM', 'am').replace(' PM', 'pm');
        return timeStr;
    }
    computeTimeStatus_() {
        if (!this.expanded) {
            return '';
        }
        // Start time of event in milliseconds since Windows epoch.
        const startTime = toJsTimestamp(this.event.startTime);
        // Current time in milliseconds since Windows epoch.
        const now = WindowProxy.getInstance().now().valueOf();
        const minutesUntilMeeting = Math.round((startTime - now) / kMillisecondsInMinute);
        if (minutesUntilMeeting <= 0) {
            return this.i18n('modulesCalendarInProgress');
        }
        if (minutesUntilMeeting < kMinutesInHour) {
            return this.i18n('modulesCalendarInXMin', minutesUntilMeeting.toString());
        }
        const hoursUntilMeeting = minutesUntilMeeting / kMinutesInHour;
        return this.i18n('modulesCalendarInXHr', Math.round(hoursUntilMeeting).toString());
    }
    isAttachmentDisabled_(index) {
        const attachment = this.event.attachments[index];
        assert(attachment);
        return !attachment.resourceUrl;
    }
    onAttachmentClick_(e) {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.ATTACHMENT_CLICKED, this.moduleName);
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        assert(this.event.attachments[index]);
        const resourceUrl = this.event.attachments[index].resourceUrl;
        if (resourceUrl) {
            WindowProxy.getInstance().navigate(resourceUrl);
        }
    }
    onVideoConferenceClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.CONFERENCE_CALL_CLICKED, this.moduleName);
        WindowProxy.getInstance().navigate(this.event.conferenceUrl);
    }
    onHeaderClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        let action = CalendarAction.BASIC_EVENT_HEADER_CLICKED;
        if (this.expanded) {
            action = CalendarAction.EXPANDED_EVENT_HEADER_CLICKED;
        }
        else if (this.doubleBooked) {
            action = CalendarAction.DOUBLE_BOOKED_EVENT_HEADER_CLICKED;
        }
        recordCalendarAction(action, this.moduleName);
        recordSmallCount(`NewTabPage.${this.moduleName}.EventClickIndex`, this.index);
    }
    getConferenceButtonAriaLabel_() {
        return this.i18n('modulesCalendarJoinMeetingButtonAcc', htmlEscape(this.event.title));
    }
    showConferenceButton_() {
        return !!this.event.conferenceUrl;
    }
    showAttachments_() {
        return this.event.attachments.length > 0;
    }
    showLocation_() {
        return !!this.event.location;
    }
    updateAttachmentListClass_() {
        const attachmentList = this.renderRoot.querySelector('#attachmentList');
        if (!attachmentList) {
            this.attachmentListClass_ = '';
            return;
        }
        const scrollableRight = (attachmentList.scrollWidth - attachmentList.scrollLeft -
            kAttachmentScrollFadeBuffer) > attachmentList.clientWidth;
        const scrollableLeft = attachmentList.scrollLeft - kAttachmentScrollFadeBuffer > 0;
        if (scrollableRight && scrollableLeft) {
            this.attachmentListClass_ = 'scrollable';
        }
        else if (scrollableRight) {
            this.attachmentListClass_ = 'scrollable-right';
        }
        else if (scrollableLeft) {
            this.attachmentListClass_ = 'scrollable-left';
        }
        else {
            this.attachmentListClass_ = '';
        }
    }
}
customElements.define(CalendarEventElement.is, CalendarEventElement);

let instance$q = null;
function getCss$i() {
    return instance$q || (instance$q = [...[], css `:host{--calendar-event-group-gutter-size:8px;display:block;padding:0 8px}.row,.divider{background-color:var(--color-new-tab-page-module-item-background);box-sizing:border-box;display:block;width:100%}.row:first-child,.row[expanded]+.row:not([double-booked]),.row[double-booked]+.row:not([double-booked]),.row[expanded]{border-top-left-radius:12px;border-top-right-radius:12px;margin-top:8px;padding-top:var(--calendar-event-group-gutter-size)}.row:last-child,.row[double-booked]:has(+.row:not([double-booked])),.row[expanded]:has(+.row),.row:has(+.row[expanded]){border-bottom-left-radius:12px;border-bottom-right-radius:12px;margin-bottom:8px;padding-bottom:var(--calendar-event-group-gutter-size)}.row[expanded]{padding-bottom:var(--calendar-event-group-gutter-size)}.divider+.row[double-booked]{padding-top:var(--calendar-event-group-gutter-size)}.divider{padding:0 16px}hr{background:var(--color-side-panel-divider);border:none;height:1px;margin:0}#seeMore a{box-sizing:border-box;color:var(--color-new-tab-page-link);display:block;font-size:var(--ntp-module-text-size);font-weight:var(--ntp-module-see-more-font-weight);line-height:var(--ntp-module-line-height);overflow:hidden;padding:4px 16px;position:relative;text-decoration:none;width:100%}#seeMore #hoverContainer{background:var(--color-new-tab-page-module-item-background-hovered);display:none;height:100%;inset:0;position:absolute;width:100%}#seeMore:hover #hoverContainer{display:block}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:none}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus,a:focus-visible{outline:var(--cr-border-hcm)}.row{border-color:var(--cr-border-hcm);border-style:none solid;border-width:2px}ntp-calendar-event:first-of-type,.row[double-booked]+.row,.row[expanded]+.row{border-style:solid solid none}.row:last-child,.row:has(+.row[double-booked]),.row:has(+.row[expanded]){border-style:none solid solid}.row[double-booked],.row[expanded]{border-style:solid}}`]);
}

function getHtml$m() {
    return html `<!--_html_template_start_-->${this.events.map((item, index) => html `
  <ntp-calendar-event
      class="row"
      ?double-booked="${this.isDoubleBooked_(index)}"
      ?expanded="${this.isExpanded_(index)}"
      .event="${item}"
      .index="${index}"
      .moduleName="${this.moduleName}">
  </ntp-calendar-event>
  ${this.isExpanded_(index) && this.hasDoubleBooked_() ? html `
    <div class="divider"><hr></hr></div>
  ` : ''}
`)}
<div id="seeMore" class="row">
  <a href="${this.calendarLink}" @click="${this.onSeeMoreClick_}"
      aria-label="$i18n{modulesCalendarSeeMoreAcc}">
    $i18n{modulesCalendarSeeMore}
    <div id="hoverContainer"></div>
  </a>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The calendar element for displaying the user's list of events. .
 */
class CalendarElement extends CrLitElement {
    static get is() {
        return 'ntp-calendar';
    }
    static get styles() {
        return getCss$i();
    }
    render() {
        return getHtml$m.bind(this)();
    }
    static get properties() {
        return {
            calendarLink: { type: String },
            events: { type: Array },
            moduleName: { type: String },
            doubleBookedIndices_: { type: Array },
            expandedEventIndex_: { type: Number },
        };
    }
    #calendarLink_accessor_storage = '';
    get calendarLink() { return this.#calendarLink_accessor_storage; }
    set calendarLink(value) { this.#calendarLink_accessor_storage = value; }
    #events_accessor_storage = [];
    get events() { return this.#events_accessor_storage; }
    set events(value) { this.#events_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #doubleBookedIndices__accessor_storage = [];
    get doubleBookedIndices_() { return this.#doubleBookedIndices__accessor_storage; }
    set doubleBookedIndices_(value) { this.#doubleBookedIndices__accessor_storage = value; }
    #expandedEventIndex__accessor_storage = -1;
    get expandedEventIndex_() { return this.#expandedEventIndex__accessor_storage; }
    set expandedEventIndex_(value) { this.#expandedEventIndex__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('events')) {
            recordSmallCount(`NewTabPage.${this.moduleName}.ShownEvents`, this.events.length);
            this.expandedEventIndex_ = this.computeExpandedEventIndex_();
            if (this.expandedEventIndex_ !== -1) {
                this.sortEvents_();
                this.doubleBookedIndices_ = this.computeDoubleBookedIndices_();
            }
        }
    }
    computeDoubleBookedIndices_() {
        const results = [];
        const expandedEvent = this.events[this.expandedEventIndex_];
        assert(expandedEvent);
        for (let i = this.expandedEventIndex_ + 1; i < this.events.length; i++) {
            if (this.events[i].startTime.internalValue ===
                expandedEvent.startTime.internalValue) {
                results.push(i);
            }
            else {
                break;
            }
        }
        return results;
    }
    compareEventPriority_(eventAIndex, eventBIndex, soon) {
        const eventA = this.events[eventAIndex];
        assert(eventA);
        const eventB = this.events[eventBIndex];
        assert(eventB);
        const eventAStartTime = toJsTimestamp(eventA.startTime);
        const eventBStartTime = toJsTimestamp(eventB.startTime);
        const eventAInProgress = eventAStartTime <= soon;
        const eventBInProgress = eventBStartTime <= soon;
        // Check if either is in progress or starting soon and the other isn't.
        if (eventAInProgress !== eventBInProgress) {
            return +eventBInProgress - +eventAInProgress;
        }
        const eventAEndsSoon = toJsTimestamp(eventA.endTime) <= soon;
        const eventBEndsSoon = toJsTimestamp(eventB.endTime) <= soon;
        // Check if either is ending soon and the other isn't.
        if (eventAEndsSoon !== eventBEndsSoon) {
            return +eventAEndsSoon - +eventBEndsSoon;
        }
        // Check for startTime. But only prioritize by this if both are not in
        // progress or soon.
        if (!eventAInProgress && !eventBInProgress &&
            eventAStartTime !== eventBStartTime) {
            return eventAStartTime - eventBStartTime;
        }
        // Check if event is accepted.
        if (eventA.isAccepted !== eventB.isAccepted) {
            return +eventB.isAccepted - +eventA.isAccepted;
        }
        // Check if there are other attendees.
        if (eventA.hasOtherAttendee !== eventB.hasOtherAttendee) {
            return +eventB.hasOtherAttendee - +eventA.hasOtherAttendee;
        }
        // If there is still a tie, return in the order they will show in the
        // list, which is what is returned by the API (startTime with
        // unspecified tie breaker).
        return eventAIndex - eventBIndex;
    }
    computeExpandedEventIndex_() {
        const now = WindowProxy.getInstance().now();
        // Find the indices of all meetings that are not over.
        let expandableEventIndices = this.events.map((_, i) => i);
        expandableEventIndices = expandableEventIndices.filter((eventIndex) => {
            const expandableEvent = this.events[eventIndex];
            return toJsTimestamp(expandableEvent.endTime) > now;
        });
        if (expandableEventIndices.length === 0) {
            return -1;
        }
        const in5Minutes = now + (5 * 60 * 1000);
        expandableEventIndices.sort((a, b) => this.compareEventPriority_(a, b, in5Minutes));
        return expandableEventIndices[0];
    }
    hasDoubleBooked_() {
        return this.doubleBookedIndices_.length > 0;
    }
    isDoubleBooked_(index) {
        return this.doubleBookedIndices_.includes(index);
    }
    isExpanded_(index) {
        return index === this.expandedEventIndex_;
    }
    onSeeMoreClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        recordCalendarAction(CalendarAction.SEE_MORE_CLICKED, this.moduleName);
    }
    // Sort events to move expanded events before any of its double booked
    // events.
    sortEvents_() {
        const expandedEvent = this.events[this.expandedEventIndex_];
        assert(expandedEvent);
        const firstDoubleBookedEventIndex = this.events.findIndex((calendarEvent) => {
            return calendarEvent.startTime.internalValue ===
                expandedEvent.startTime.internalValue;
        });
        if (firstDoubleBookedEventIndex < this.expandedEventIndex_) {
            this.events.splice(this.expandedEventIndex_, 1);
            this.expandedEventIndex_ = firstDoubleBookedEventIndex;
            this.events.splice(this.expandedEventIndex_, 0, expandedEvent);
        }
    }
}
customElements.define(CalendarElement.is, CalendarElement);

let instance$p = null;
function getCss$h() {
    return instance$p || (instance$p = [...[], css `cr-dialog::part(dialog){max-width:100%;position:fixed}cr-dialog [slot='body']{line-height:20px}`]);
}

function getHtml$l() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" consume-keydown-event
    ?show-on-attach="${this.showOnAttach}">
  <div slot="title">$i18n{modulesTasksInfoTitle}</div>
  <div slot="body">
    <slot></slot>
  </div>
  <div slot="button-container">
    <cr-button id="closeButton" class="action-button"
        @click="${this.onCloseClick_}">
      $i18n{modulesTasksInfoClose}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Info dialog that can be populated with custom text via slotting. */
class InfoDialogElement extends CrLitElement {
    static get is() {
        return 'ntp-info-dialog';
    }
    static get styles() {
        return getCss$h();
    }
    render() {
        return getHtml$l.bind(this)();
    }
    static get properties() {
        return {
            showOnAttach: { type: Boolean },
        };
    }
    #showOnAttach_accessor_storage = false;
    get showOnAttach() { return this.#showOnAttach_accessor_storage; }
    set showOnAttach(value) { this.#showOnAttach_accessor_storage = value; }
    showModal() {
        this.$.dialog.showModal();
    }
    onCloseClick_() {
        this.$.dialog.close();
    }
}
customElements.define(InfoDialogElement.is, InfoDialogElement);

function getHtml$k() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="$i18n{modulesGoogleCalendarTitle}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="$i18n{modulesGoogleCalendarMoreActions}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<ntp-calendar id="calendar"
    .events="${this.events_}"
    calendar-link="https://calendar.google.com"
    module-name="GoogleCalendar">
</ntp-calendar>
${this.showInfoDialog_ ? html `
  <ntp-info-dialog show-on-attach
      .innerHTML="${this.i18nAdvanced('moduleGoogleCalendarInfo')}"
      @close="${this.onInfoDialogClose_}">
  </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class GoogleCalendarProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance$o ||
            (instance$o = new GoogleCalendarProxyImpl(GoogleCalendarPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance$o = newInstance;
    }
}
let instance$o = null;

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const GoogleCalendarModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Google Calendar module, which serves as an inside look in to today's
 * events on a user's Google Calendar .
 */
class GoogleCalendarModuleElement extends GoogleCalendarModuleElementBase {
    static get is() {
        return 'ntp-google-calendar-module';
    }
    render() {
        return getHtml$k.bind(this)();
    }
    static get properties() {
        return {
            events_: { type: Array },
            showInfoDialog_: { type: Boolean },
        };
    }
    #events__accessor_storage = [];
    get events_() { return this.#events__accessor_storage; }
    set events_(value) { this.#events__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    constructor(events) {
        super();
        this.events_ = events;
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesGoogleCalendarDisableButtonText'),
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
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: this.i18n('modulesGoogleCalendarDisableToastMessage'),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
}
customElements.define(GoogleCalendarModuleElement.is, GoogleCalendarModuleElement);
async function createGoogleCalendarElement() {
    const { events } = await GoogleCalendarProxyImpl.getInstance().handler.getEvents();
    return events.length > 0 ? new GoogleCalendarModuleElement(events) : null;
}
const googleCalendarDescriptor = new ModuleDescriptor(
/*id*/ 'google_calendar', createGoogleCalendarElement);

function getHtml$j() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="$i18n{modulesOutlookCalendarTitle}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesOutlookCalendarTitle')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}"
    @signout-button-click="${this.onSignoutButtonClick_}">
</ntp-module-header>
<ntp-calendar id="outlook-calendar"
    .events="${this.events_}"
    module-name="OutlookCalendar"
    calendar-link="https://outlook.office.com/calendar/">
</ntp-calendar>
${this.showInfoDialog_ ? html `
   <ntp-info-dialog show-on-attach
       .innerHTML="${this.i18nAdvanced('modulesOutlookCalendarInfo')}"
       @close="${this.onInfoDialogClose_}">
   </ntp-info-dialog>
 ` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OutlookCalendarProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance$n ||
            (instance$n = new OutlookCalendarProxyImpl(OutlookCalendarPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance$n = newInstance;
    }
}
let instance$n = null;

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OutlookCalendarModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Outlook Calendar module, which serves as an inside look in to upcoming
 * events on a user's Microsoft Outlook calendar.
 */
class OutlookCalendarModuleElement extends OutlookCalendarModuleElementBase {
    static get is() {
        return 'ntp-outlook-calendar-module';
    }
    render() {
        return getHtml$j.bind(this)();
    }
    static get properties() {
        return {
            events_: { type: Array },
            showInfoDialog_: { type: Boolean },
        };
    }
    #events__accessor_storage = [];
    get events_() { return this.#events__accessor_storage; }
    set events_(value) { this.#events__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    constructor(events) {
        super();
        this.events_ = events;
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesOutlookCalendarDisableButtonText'),
            },
            {
                action: 'signout',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:logout' :
                    'modules:logout-old',
                text: this.i18n('modulesMicrosoftSignOutButtonText'),
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
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesOutlookCalendarTitle')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
    onSignoutButtonClick_() {
        ParentTrustedDocumentProxy.getInstance()?.getChildDocument().signOut();
    }
}
customElements.define(OutlookCalendarModuleElement.is, OutlookCalendarModuleElement);
async function createOutlookCalendarElement() {
    const { events } = await OutlookCalendarProxyImpl.getInstance().handler.getEvents();
    return events.length > 0 ? new OutlookCalendarModuleElement(events) : null;
}
const outlookCalendarDescriptor = new ModuleDescriptor(
/*id*/ 'outlook_calendar', createOutlookCalendarElement);

let instance$m = null;
function getCss$g() {
    return instance$m || (instance$m = [...[], css `:host{--cr-grid-gap:0px;--cr-column-width:auto;--cr-grid-width:fit-content}#grid{display:grid;grid-gap:var(--cr-grid-gap);grid-template-columns:repeat(var(--cr-grid-columns),var(--cr-column-width));width:var(--cr-grid-width)}::slotted(*){align-self:center;justify-self:center}`]);
}

let instance$l = null;
function getCss$f() {
    return instance$l || (instance$l = [...[getCss$g()], css `#grid{grid-template-columns:var(--cr-grid-template-columns,repeat(var(--cr-grid-columns),var(--cr-column-width)));width:var(--cr-grid-width-override,var(--cr-grid-width));justify-content:var(--cr-grid-justify-content,revert)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$i() {
    return html `
<div id="grid" @keydown="${this.onKeydown_}">
  <slot id="items"></slot>
</div>`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrGridElement extends CrLitElement {
    static get is() {
        return 'cr-grid';
    }
    static get styles() {
        return getCss$f();
    }
    render() {
        return getHtml$i.bind(this)();
    }
    static get properties() {
        return {
            columns: { type: Number },
            disableArrowNavigation: { type: Boolean },
            focusSelector: { type: String },
            ignoreModifiedKeyEvents: { type: Boolean },
        };
    }
    #columns_accessor_storage = 1;
    get columns() { return this.#columns_accessor_storage; }
    set columns(value) { this.#columns_accessor_storage = value; }
    #disableArrowNavigation_accessor_storage = false;
    get disableArrowNavigation() { return this.#disableArrowNavigation_accessor_storage; }
    set disableArrowNavigation(value) { this.#disableArrowNavigation_accessor_storage = value; }
    #focusSelector_accessor_storage;
    get focusSelector() { return this.#focusSelector_accessor_storage; }
    set focusSelector(value) { this.#focusSelector_accessor_storage = value; }
    #ignoreModifiedKeyEvents_accessor_storage = false;
    get ignoreModifiedKeyEvents() { return this.#ignoreModifiedKeyEvents_accessor_storage; }
    set ignoreModifiedKeyEvents(value) { this.#ignoreModifiedKeyEvents_accessor_storage = value; }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('columns')) {
            this.style.setProperty('--cr-grid-columns', String(this.columns));
        }
    }
    getSlottedParent_(element) {
        let parent = element;
        while (parent.assignedSlot !== this.$.items &&
            parent.parentElement !== null) {
            parent = parent.parentElement;
        }
        assert(parent);
        return parent;
    }
    onKeydown_(e) {
        if (e.key === ' ' || (e.key === 'Enter' && !(isMac && e.ctrlKey))) {
            e.preventDefault();
            e.stopPropagation();
            e.target.click();
            return;
        }
        if (this.disableArrowNavigation ||
            !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            return;
        }
        const arrowKey = e.key;
        const items = this.$.items.assignedElements().filter(el => {
            return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        });
        const currentIndex = items.indexOf(this.getSlottedParent_(e.target));
        const isRtl = window.getComputedStyle(this)['direction'] === 'rtl';
        const bottomRowColumns = items.length % this.columns;
        const direction = ['ArrowRight', 'ArrowDown'].includes(arrowKey) ? 1 : -1;
        const inEdgeRow = direction === 1 ?
            currentIndex >= items.length - bottomRowColumns :
            currentIndex < this.columns;
        let delta = 0;
        switch (arrowKey) {
            case 'ArrowLeft':
            case 'ArrowRight':
                // Ignores keys likely to be browse shortcuts (like Alt+Left for
                // back).
                if (this.ignoreModifiedKeyEvents && hasKeyModifiers(e)) {
                    return;
                }
                delta = direction * (isRtl ? -1 : 1);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                delta = direction * (inEdgeRow ? bottomRowColumns : this.columns);
                break;
            default:
                assertNotReachedCase();
        }
        // Handle cases where we move to an empty space in a non-full bottom row
        // and have to jump to the next row.
        if (arrowKey === 'ArrowUp' && inEdgeRow &&
            currentIndex >= bottomRowColumns) {
            delta -= this.columns;
        }
        else if (arrowKey === 'ArrowDown' && !inEdgeRow &&
            currentIndex + delta >= items.length) {
            delta += bottomRowColumns;
        }
        e.preventDefault();
        const newIndex = (items.length + currentIndex + delta) % items.length;
        const item = items[newIndex];
        const toFocus = this.focusSelector ?
            item.querySelector(this.focusSelector) :
            item;
        assert(toFocus);
        toFocus.focus();
        this.fire('cr-grid-focus-changed', toFocus);
    }
}
customElements.define(CrGridElement.is, CrGridElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a class that exposes the Mojo handler
 * interface used for sending requests from NTP dummy module JS to the browser
 * and receiving the browser response.
 */
let handler$1 = null;
class FooProxy {
    static getHandler() {
        return handler$1 || (handler$1 = FooHandler.getRemote());
    }
    static setHandler(newHandler) {
        handler$1 = newHandler;
    }
    constructor() { }
}

let instance$k = null;
function getCss$e() {
    return instance$k || (instance$k = [...[], css `:host{height:100%;width:100%}cr-grid{--cr-grid-gap:8px}#moduleContent{display:flex;justify-content:center}:host([format='narrow']) .tile-item,:host([format='narrow']) img{width:120px}.tile-item{color:var(--color-new-tab-page-primary-foreground);height:120px;width:170px}img{border-radius:8px}`]);
}

function getHtml$h() {
    return html `<!--_html_template_start_--><ntp-module-header
    header-text="${this.title}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesDummyLower')}"
    @disable-button-click="${this.onDisableButtonClick_}">
</ntp-module-header>
<div id="moduleContent">
  <cr-grid id="tiles" columns="2">
    ${this.tiles.map(item => html `
      <div class="tile-item" title="${item.label}">
        <img is="cr-auto-img" .autoSrc="${item.imageUrl}"></img>
        <span>${item.value}</span>
      </div>
    `)}
  </cr-grid>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * A dummy module, which serves as an example and a helper to build out the NTP
 * module framework.
 */
class ModuleElement extends ModuleElementBase {
    static get is() {
        return 'ntp-dummy-module';
    }
    static get styles() {
        return getCss$e();
    }
    render() {
        return getHtml$h.bind(this)();
    }
    static get properties() {
        return {
            tiles: { type: Array },
            title: { type: String },
        };
    }
    #tiles_accessor_storage = [];
    get tiles() { return this.#tiles_accessor_storage; }
    set tiles(value) { this.#tiles_accessor_storage = value; }
    #title_accessor_storage = '';
    get title() { return this.#title_accessor_storage; }
    set title(value) { this.#title_accessor_storage = value; }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18nRecursive('', 'modulesDisableButtonText', 'modulesDummyLower'),
            },
        ];
    }
    onDisableButtonClick_() {
        this.fire('disable-module', {
            message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesDummyLower')),
        });
    }
}
customElements.define(ModuleElement.is, ModuleElement);
async function createDummyElements() {
    const tiles = (await FooProxy.getHandler().getData()).data;
    return Array(12).fill(0).map(_ => {
        const element = new ModuleElement();
        element.title = loadTimeData.getString('modulesDummyTitle');
        element.tiles = [...tiles];
        return element;
    });
}
const dummyV2Descriptor = new ModuleDescriptor(
/*id=*/ 'dummy', createDummyElements);

let instance$j = null;
function getCss$d() {
    return instance$j || (instance$j = [...[], css `@media (forced-colors:active){a{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}.file{overflow:visible}}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:none}#files{background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);margin:8px}.file{align-items:center;display:flex;height:56px;position:relative;text-decoration:none;overflow:hidden}.file:hover #hover-layer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#hover-layer{display:none}.file:first-of-type{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0;padding-top:var(--ntp-module-first-element-top-padding)}.file:last-of-type:not(:has(+#seeMoreButtonContainer)){border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius);padding-bottom:var(--ntp-module-first-element-top-padding)}.icon-container{align-items:center;background-color:var(--color-new-tab-page-module-icon-background);border-radius:8px;display:flex;flex-shrink:0;height:var(--ntp-module-icon-size);justify-content:center;margin-inline:8px;position:relative;width:var(--ntp-module-icon-size)}.file-icon{height:24px;width:24px}.file-info{min-width:0;padding-inline-end:16px}.file-title,.file-description{overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}.file-title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);line-height:var(--ntp-module-line-height)}.file-description{color:var(--color-new-tab-page-secondary-foreground);font-size:var(--ntp-module-secondary-text-size);line-height:var(--ntp-module-secondary-line-height)}#seeMoreButtonContainer{padding:4px 0 8px 0}#seeMoreButtonContainer a{color:var(--color-new-tab-page-link);display:block;font-size:13px;font-weight:var(--ntp-module-see-more-font-weight);line-height:20px;padding:4px 16px 4px 16px;position:relative;text-decoration:none}#seeMoreButtonContainer:hover #hoverContainer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#seeMoreButtonContainer #hoverContainer{display:none}`]);
}

function getHtml$g() {
    return html `<!--_html_template_start_--><div id="files">
  ${this.files.map((item, index) => html `
    <a class="file" href="${item.itemUrl}" data-index="${index}"
        @click="${this.onFileClick_}" title="${item.title}">
      <div id="hover-layer"></div>
      <div class="icon-container">
        <img is="cr-auto-img"
            class="file-icon"
            draggable="false"
            .autoSrc="${item.iconUrl}">
      </div>
      <div class="file-info">
        <div class="file-title">${item.title}</div>
        <div class="file-description">${item.justificationText}</div>
      </div>
    </a>
  `)}
  ${this.seeMoreUrl ? html `
    <div id="seeMoreButtonContainer">
      <a href="${this.seeMoreUrl}"
          @click="${this.onSeeMoreClick_}"
          aria-label="${this.seeMoreAriaLabel}">
        ${this.seeMoreText}
        <div id="hoverContainer"></div>
      </a>
    </div>
  ` : ''}
</div>
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Actions the user can perform within a file suggestion module (Drive,
 * MicrosoftFiles). This enum must match the numbering for NTPFileAction in
 * histogram/enums.xml. These values are persisted to logs. Entries should not
 * be renumbered, removed or reused.
 */
// LINT.IfChange(FileAction)
var FileAction;
(function (FileAction) {
    FileAction[FileAction["FILE_SUGGESTION_CLICKED"] = 0] = "FILE_SUGGESTION_CLICKED";
    FileAction[FileAction["SEE_MORE_CLICKED"] = 1] = "SEE_MORE_CLICKED";
    FileAction[FileAction["MAX_VALUE"] = 1] = "MAX_VALUE";
})(FileAction || (FileAction = {}));
/**
 * Shared component for file modules, which serve as an inside look to recent
 * activity within a user's Google Drive or Microsoft Sharepoint.
 */
class FileSuggestionElement extends CrLitElement {
    static get is() {
        return 'ntp-file-suggestion';
    }
    static get styles() {
        return getCss$d();
    }
    render() {
        return getHtml$g.bind(this)();
    }
    static get properties() {
        return {
            files: { type: Array },
            moduleName: { type: String },
            seeMoreUrl: { type: String },
            seeMoreText: { type: String },
            seeMoreAriaLabel: { type: String },
        };
    }
    #files_accessor_storage = [];
    get files() { return this.#files_accessor_storage; }
    set files(value) { this.#files_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #seeMoreUrl_accessor_storage = '';
    get seeMoreUrl() { return this.#seeMoreUrl_accessor_storage; }
    set seeMoreUrl(value) { this.#seeMoreUrl_accessor_storage = value; }
    #seeMoreText_accessor_storage = '';
    get seeMoreText() { return this.#seeMoreText_accessor_storage; }
    set seeMoreText(value) { this.#seeMoreText_accessor_storage = value; }
    #seeMoreAriaLabel_accessor_storage = '';
    get seeMoreAriaLabel() { return this.#seeMoreAriaLabel_accessor_storage; }
    set seeMoreAriaLabel(value) { this.#seeMoreAriaLabel_accessor_storage = value; }
    recordFileAction_(action) {
        recordEnumeration(`NewTabPage.${this.moduleName}.UserAction`, action, FileAction.MAX_VALUE + 1);
    }
    onFileClick_(e) {
        const clickFileEvent = new Event('usage', { composed: true, bubbles: true });
        this.dispatchEvent(clickFileEvent);
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        recordSmallCount(`NewTabPage.${this.moduleName}.FileClick`, index);
        const file = this.files[index];
        assert(file);
        if (file.recommendationType !== null) {
            recordEnumeration(`NewTabPage.${this.moduleName}.RecommendationTypeClick`, file.recommendationType, RecommendationType.MAX_VALUE + 1);
        }
        this.recordFileAction_(FileAction.FILE_SUGGESTION_CLICKED);
    }
    onSeeMoreClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        this.recordFileAction_(FileAction.SEE_MORE_CLICKED);
    }
}
customElements.define(FileSuggestionElement.is, FileSuggestionElement);

function getHtml$f() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="$i18n{modulesDriveTitleV2}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesDriveSentence')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<ntp-file-suggestion id="fileSuggestion"
    module-name="Drive"
    see-more-url="${this.showDriveModuleSeeMoreLink_ ?
        'https://drive.google.com' : ''}"
    see-more-text="$i18n{modulesDriveSeeMore}"
    see-more-aria-label="$i18n{modulesDriveSeeMoreAcc}"
    .files="${this.files}">
</ntp-file-suggestion>
${this.showInfoDialog_ ? html `
  <ntp-info-dialog show-on-attach
      .innerHTML="${this.i18nAdvanced('modulesDriveInfo')}"
      @close="${this.onInfoDialogClose_}">
  </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a class that exposes the Mojo handler
 * interface used for sending requests from NTP dummy module JS to the browser
 * and receiving the browser response.
 */
let handler = null;
class FileProxy {
    static getHandler() {
        return handler || (handler = DriveSuggestionHandler.getRemote());
    }
    static setHandler(newHandler) {
        handler = newHandler;
    }
    constructor() { }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DriveModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The Drive module, which serves as an inside look to recent activity within a
 * user's Google Drive.
 */
class DriveModuleElement extends DriveModuleElementBase {
    static get is() {
        return 'ntp-drive-module';
    }
    render() {
        return getHtml$f.bind(this)();
    }
    static get properties() {
        return {
            files: { type: Array },
            showInfoDialog_: { type: Boolean },
            showDriveModuleSeeMoreLink_: { type: Boolean },
        };
    }
    #files_accessor_storage = [];
    get files() { return this.#files_accessor_storage; }
    set files(value) { this.#files_accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    #showDriveModuleSeeMoreLink__accessor_storage = loadTimeData.getBoolean('showDriveModuleSeeMoreLink');
    get showDriveModuleSeeMoreLink_() { return this.#showDriveModuleSeeMoreLink__accessor_storage; }
    set showDriveModuleSeeMoreLink_(value) { this.#showDriveModuleSeeMoreLink__accessor_storage = value; }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesDriveDisableButtonTextV2'),
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
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesDriveSentence')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
}
customElements.define(DriveModuleElement.is, DriveModuleElement);
async function createDriveElement() {
    const { files } = await FileProxy.getHandler().getFiles();
    if (files.length === 0) {
        return null;
    }
    const element = new DriveModuleElement();
    element.files = files;
    return element;
}
const driveModuleDescriptor = new ModuleDescriptor(
/*id*/ 'drive', createDriveElement);

function getHtml$e() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="$i18n{modulesMicrosoftFilesName}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesMicrosoftFilesName')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @signout-button-click="${this.onSignoutButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<ntp-file-suggestion module-name="MicrosoftFiles"
    id="microsoft-files"
    .files="${this.files_}">
</ntp-file-suggestion>
${this.showInfoDialog_ ? html `
  <ntp-info-dialog show-on-attach
      .innerHTML="${this.i18nAdvanced('modulesMicrosoftFilesInfo')}"
      @close="${this.onInfoDialogClose_}">
  </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MicrosoftFilesProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance$i ||
            (instance$i = new MicrosoftFilesProxyImpl(MicrosoftFilesPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance$i = newInstance;
    }
}
let instance$i = null;

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MicrosoftFilesModuleElementBase = I18nMixinLit(CrLitElement);
/**
 * The SharePoint/OneDrive module, which serves as an inside look to recent
 * activity within a user's Microsoft SharePoint and OneDrive.
 */
class MicrosoftFilesModuleElement extends MicrosoftFilesModuleElementBase {
    static get is() {
        return 'ntp-microsoft-files-module';
    }
    render() {
        return getHtml$e.bind(this)();
    }
    static get properties() {
        return {
            files_: { type: Array },
            showInfoDialog_: { type: Boolean },
        };
    }
    #files__accessor_storage = [];
    get files_() { return this.#files__accessor_storage; }
    set files_(value) { this.#files__accessor_storage = value; }
    #showInfoDialog__accessor_storage = false;
    get showInfoDialog_() { return this.#showInfoDialog__accessor_storage; }
    set showInfoDialog_(value) { this.#showInfoDialog__accessor_storage = value; }
    constructor(files) {
        super();
        this.files_ = files;
        this.recordFileTypesShown_(files);
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18n('modulesMicrosoftFilesDisableButtonText'),
            },
            {
                action: 'signout',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:logout' :
                    'modules:logout-old',
                text: this.i18n('modulesMicrosoftSignOutButtonText'),
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
        const disableEvent = new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesMicrosoftFilesName')),
            },
        });
        this.dispatchEvent(disableEvent);
    }
    onInfoButtonClick_() {
        this.showInfoDialog_ = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog_ = false;
    }
    onSignoutButtonClick_() {
        ParentTrustedDocumentProxy.getInstance()?.getChildDocument().signOut();
    }
    recordFileTypesShown_(files) {
        const numOfFiles = new Map();
        numOfFiles.set(RecommendationType.kUsed, 0);
        numOfFiles.set(RecommendationType.kShared, 0);
        numOfFiles.set(RecommendationType.kTrending, 0);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const recommendationType = file.recommendationType;
            if (recommendationType !== null) {
                numOfFiles.set(recommendationType, numOfFiles.get(recommendationType) + 1);
            }
        }
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Used', numOfFiles.get(RecommendationType.kUsed));
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Shared', numOfFiles.get(RecommendationType.kShared));
        recordSmallCount('NewTabPage.MicrosoftFiles.ShownFiles.Trending', numOfFiles.get(RecommendationType.kTrending));
    }
}
customElements.define(MicrosoftFilesModuleElement.is, MicrosoftFilesModuleElement);
async function createMicrosoftFilesElement() {
    const { files } = await MicrosoftFilesProxyImpl.getInstance().handler.getFiles();
    return files.length > 0 ? new MicrosoftFilesModuleElement(files) : null;
}
const microsoftFilesModuleDescriptor = new ModuleDescriptor(
/*id*/ 'microsoft_files', createMicrosoftFilesElement);

const div$2 = document.createElement('div');
div$2.innerHTML = getTrustedHTML `<cr-iconset name="tab_resumption" size="20">
  <svg>
    <defs>
      <g id="computer-old" viewBox="0 -960 960 960">
        <path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z">
        </path>
      </g>
      <g id="desktop-windows">
        <path d="M8.5 15.484V13.98h-5c-.414 0-.766-.148-1.059-.44A1.449 1.449 0 0 1 2 12.48v-8c0-.414.148-.765.441-1.062A1.439 1.439 0 0 1 3.5 2.98h13c.414 0 .766.145 1.059.438.293.297.441.648.441 1.062v8c0 .41-.148.766-.441 1.06a1.443 1.443 0 0 1-1.059.44h-5v1.5h.75c.21 0 .39.07.535.215.145.14.215.317.215.532 0 .21-.07.386-.215.535a.725.725 0 0 1-.535.218H7.754A.743.743 0 0 1 7 16.234c0-.21.07-.39.215-.535a.727.727 0 0 1 .535-.215Zm-5-3.004h13v-8h-13Zm0 0v-8Zm0 0"></path>
      </g>
      <g id="globe-old" viewBox="0 -960 960 960">
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z">
        </path>
      </g>
      <g id="public">
        <path d="M6.895 17.375a8.068 8.068 0 0 1-2.551-1.719 8.068 8.068 0 0 1-1.719-2.55A7.81 7.81 0 0 1 2 9.987a7.72 7.72 0 0 1 .625-3.101 8.122 8.122 0 0 1 1.719-2.543c.73-.73 1.578-1.301 2.55-1.719A7.81 7.81 0 0 1 10.013 2a7.72 7.72 0 0 1 3.101.625 8.122 8.122 0 0 1 2.543 1.719c.73.73 1.301 1.578 1.719 2.543.418.965.625 2 .625 3.101a7.81 7.81 0 0 1-.625 3.117 8.068 8.068 0 0 1-1.719 2.551c-.73.73-1.578 1.301-2.543 1.719a7.72 7.72 0 0 1-3.101.625 7.81 7.81 0 0 1-3.117-.625ZM9 16.418V15a.955.955 0 0 1-.707-.293A.955.955 0 0 1 8 14v-1L3.645 8.645A6.459 6.459 0 0 0 3.5 10c0 1.598.516 3.008 1.55 4.23 1.036 1.223 2.352 1.95 3.95 2.188Zm6-2.273c.5-.582.875-1.227 1.125-1.938.25-.707.375-1.441.375-2.207 0-1.32-.36-2.52-1.082-3.605A6.432 6.432 0 0 0 12.5 4v.5c0 .418-.145.77-.438 1.063A1.442 1.442 0 0 1 11 6H9v1a.955.955 0 0 1-.293.707A.955.955 0 0 1 8 8H7v2h5c.277 0 .516.098.707.293.195.191.293.43.293.707v2h.855c.317 0 .59.11.813.332.223.223.332.496.332.813Zm0 0"></path>
      </g>
      <g id="phone-custom" viewBox="0 -960 960 960">
        <path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z">
        </path>
      </g>
      <g id="tablet-old" viewBox="0 -960 960 960">
        <path d="M200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-200v120h560v-120H200Zm200 80h160v-40H400v40ZM200-320h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z">
        </path>
      </g>
      <g id="tablet-android">
        <path d="M4.5 19c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 3 17.5v-15c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 4.5 1h11c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v15c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 15.5 19Zm0-4.5v3h11v-3Zm4.5 2h2a.49.49 0 0 0 .352-.145A.484.484 0 0 0 11.5 16c0-.14-.05-.258-.148-.355A.49.49 0 0 0 11 15.5H9a.49.49 0 0 0-.352.145A.484.484 0 0 0 8.5 16c0 .14.05.258.148.355A.49.49 0 0 0 9 16.5ZM4.5 13h11V5h-11Zm0-9.5h11v-1h-11Zm0 0v-1Zm0 11v3Zm0 0"></path>
      </g>
      <g id="automotive-custom" viewBox="0 0 24 24">
        <path d="M6 19V20C6 20.2833 5.9 20.525 5.7 20.725C5.51667 20.9083 5.28333 21 5 21H4C3.71667 21 3.475 20.9083 3.275 20.725C3.09167 20.525 3 20.2833 3 20V12L5.1 6C5.2 5.7 5.375 5.45833 5.625 5.275C5.89167 5.09167 6.18333 5 6.5 5H17.5C17.8167 5 18.1 5.09167 18.35 5.275C18.6167 5.45833 18.8 5.7 18.9 6L21 12V20C21 20.2833 20.9 20.525 20.7 20.725C20.5167 20.9083 20.2833 21 20 21H19C18.7167 21 18.475 20.9083 18.275 20.725C18.0917 20.525 18 20.2833 18 20V19H6ZM5.8 10H18.2L17.15 7H6.85L5.8 10ZM5 12V17V12ZM7.5 16C7.91667 16 8.26667 15.8583 8.55 15.575C8.85 15.275 9 14.9167 9 14.5C9 14.0833 8.85 13.7333 8.55 13.45C8.26667 13.15 7.91667 13 7.5 13C7.08333 13 6.725 13.15 6.425 13.45C6.14167 13.7333 6 14.0833 6 14.5C6 14.9167 6.14167 15.275 6.425 15.575C6.725 15.8583 7.08333 16 7.5 16ZM16.5 16C16.9167 16 17.2667 15.8583 17.55 15.575C17.85 15.275 18 14.9167 18 14.5C18 14.0833 17.85 13.7333 17.55 13.45C17.2667 13.15 16.9167 13 16.5 13C16.0833 13 15.725 13.15 15.425 13.45C15.1417 13.7333 15 14.0833 15 14.5C15 14.9167 15.1417 15.275 15.425 15.575C15.725 15.8583 16.0833 16 16.5 16ZM5 17H19V12H5V17Z" fill="#444746">
        </path>
      </g>
      <g id="wearable-custom" viewBox="0 0 14 20">
        <path d="M5.5 2H8.5C8.36667 2 8.15833 2 7.875 2C7.60833 2 7.31667 2 7 2C6.68333 2 6.38333 2 6.1 2C5.83333 2 5.63333 2 5.5 2ZM5.5 18C5.63333 18 5.83333 18 6.1 18C6.38333 18 6.68333 18 7 18C7.31667 18 7.60833 18 7.875 18C8.15833 18 8.36667 18 8.5 18H5.5ZM4 20L2.65 15.45C1.85 14.8167 1.20833 14.025 0.725 13.075C0.241667 12.125 2.38419e-07 11.1 2.38419e-07 10C2.38419e-07 8.9 0.241667 7.875 0.725 6.925C1.20833 5.975 1.85 5.18333 2.65 4.55L4 -4.76837e-07H10L11.35 4.55C12.15 5.18333 12.7917 5.975 13.275 6.925C13.7583 7.875 14 8.9 14 10C14 11.1 13.7583 12.125 13.275 13.075C12.7917 14.025 12.15 14.8167 11.35 15.45L10 20H4ZM7 15C8.38333 15 9.55833 14.5167 10.525 13.55C11.5083 12.5667 12 11.3833 12 10C12 8.61667 11.5083 7.44167 10.525 6.475C9.55833 5.49167 8.38333 5 7 5C5.61667 5 4.43333 5.49167 3.45 6.475C2.48333 7.44167 2 8.61667 2 10C2 11.3833 2.48333 12.5667 3.45 13.55C4.43333 14.5167 5.61667 15 7 15ZM5.1 3.25C5.43333 3.16667 5.75 3.1 6.05 3.05C6.36667 3 6.68333 2.975 7 2.975C7.31667 2.975 7.625 3 7.925 3.05C8.24167 3.1 8.56667 3.16667 8.9 3.25L8.5 2H5.5L5.1 3.25ZM5.5 18H8.5L8.9 16.75C8.56667 16.8333 8.24167 16.9 7.925 16.95C7.625 16.9833 7.31667 17 7 17C6.68333 17 6.36667 16.9833 6.05 16.95C5.75 16.9 5.43333 16.8333 5.1 16.75L5.5 18Z" fill="#444746">
        </path>
      </g>
      <g id="tv" viewBox="0 0 24 24">
        <path d="M8 16H10V10H11.75L14 16H16L19 8H16.5L15 12.5L13.5 8H5V10H8V16ZM5 21C4.45 21 3.975 20.8083 3.575 20.425C3.19167 20.025 3 19.55 3 19V5C3 4.45 3.19167 3.98333 3.575 3.6C3.975 3.2 4.45 3 5 3H19C19.55 3 20.0167 3.2 20.4 3.6C20.8 3.98333 21 4.45 21 5V19C21 19.55 20.8 20.025 20.4 20.425C20.0167 20.8083 19.55 21 19 21H5ZM5 19H19V5H5V19ZM5 5V19V5Z" fill="#444746">
        </path>
      </g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets$2 = div$2.querySelectorAll('cr-iconset');
for (const iconset of iconsets$2) {
    document.head.appendChild(iconset);
}

let instance$h = null;
function getCss$c() {
    return instance$h || (instance$h = [...[], css `:host{align-items:center;background-position:center;background-repeat:no-repeat;border-radius:5px;display:flex;flex-shrink:0;height:36px;justify-content:center;margin-inline:0 12px;width:36px}@media (forced-colors:active){:host{forced-color-adjust:none}}`]);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file provides a custom element displaying a page favicon.
 */
class PageFaviconElement extends CrLitElement {
    static get is() {
        return 'page-favicon';
    }
    static get styles() {
        return getCss$c();
    }
    static get properties() {
        return {
            /* The URL for which the favicon is shown. */
            url: { type: String },
            /**
             * Whether the favicon should use fallback to host. Used for the purpose
             * of fetching fallback favicons when there is no local exact match.
             */
            fallbackToHost: { type: Boolean },
            /**
             * Whether this visit is known to sync already. Used for the purpose of
             * fetching higher quality favicons in that case.
             */
            isKnownToSync: { type: Boolean },
            size: { type: Number },
        };
    }
    #url_accessor_storage;
    //============================================================================
    // Properties
    //============================================================================
    get url() { return this.#url_accessor_storage; }
    set url(value) { this.#url_accessor_storage = value; }
    #fallbackToHost_accessor_storage = true;
    get fallbackToHost() { return this.#fallbackToHost_accessor_storage; }
    set fallbackToHost(value) { this.#fallbackToHost_accessor_storage = value; }
    #isKnownToSync_accessor_storage = false;
    get isKnownToSync() { return this.#isKnownToSync_accessor_storage; }
    set isKnownToSync(value) { this.#isKnownToSync_accessor_storage = value; }
    #size_accessor_storage = 16;
    get size() { return this.#size_accessor_storage; }
    set size(value) { this.#size_accessor_storage = value; }
    //============================================================================
    // Helper methods
    //============================================================================
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('url')) {
            if (!this.url) {
                // Pages with a pre-set image URL or no favicon URL don't show the
                // favicon.
                this.style.setProperty('background-image', '');
            }
            else {
                this.style.setProperty('background-image', getFaviconForPageURL(this.url, this.isKnownToSync, '', 
                /* --favicon-size */ this.size, 
                /* forceLightMode */ false, 
                /* fallbackToHost */ this.fallbackToHost));
            }
        }
    }
}
customElements.define(PageFaviconElement.is, PageFaviconElement);

let instance$g = null;
function getCss$b() {
    return instance$g || (instance$g = [...[getCss$t()], css `@media (forced-colors:active){a{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm)}.url-visit{overflow:visible}}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:none}#urlVisits{background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);overflow:hidden;margin:8px}.url-visit{align-items:center;display:flex;height:56px;position:relative;text-decoration:none;overflow:hidden}.url-visit:hover #hoverLayer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#hoverLayer{display:none}.url-visit:first-of-type{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0;padding-top:var(--ntp-module-first-element-top-padding)}.icon{background-color:var(--color-new-tab-page-module-icon-background);border-radius:8px;height:var(--ntp-module-icon-size);margin-inline:8px;position:relative;width:var(--ntp-module-icon-size)}.url-visit-info{color:var(--color-new-tab-page-secondary-foreground);min-width:0;padding-inline-end:16px;position:relative}.url-visit-title,.url-visit-domain,.url-visit-device{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.url-visit-title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);line-height:var(--ntp-module-line-height)}.url-visit-description{display:flex;flex-direction:row;font-size:var(--ntp-module-secondary-text-size);line-height:var(--ntp-module-secondary-line-height)}.url-visit-reason{white-space:nowrap}:host([should-show-device-icon_]) .url-visit-device{flex-shrink:0;height:14px;margin-bottom:auto;margin-inline:0 4px;margin-top:auto;width:14px}cr-icon-button{--cr-icon-button-fill-color:var(--color-new-tab-page-primary-foreground);--cr-icon-button-hover-background-color:var(--color-new-tab-page-active-background);display:none;justify-content:flex-end;margin-left:auto;margin-right:16px}.url-visit:hover cr-icon-button{display:block}#seeMoreButtonContainer{padding:4px 0 8px 0}#seeMoreButtonContainer a{color:var(--color-new-tab-page-link);font-size:13px;display:block;font-weight:var(--ntp-module-see-more-font-weight);line-height:20px;padding:4px 16px 4px 16px;position:relative;text-decoration:none}#seeMoreButtonContainer:hover #hoverContainer{background:var(--color-new-tab-page-module-item-background-hovered);display:block;inset:0;pointer-events:none;position:absolute}#seeMoreButtonContainer #hoverContainer{display:none}`]);
}

function getHtml$d() {
    return html `<!--_html_template_start_--><ntp-module-header
    id="moduleHeader"
    header-text="${this.i18n('modulesMostRelevantTabResumptionTitle')}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesTabResumptionTitle')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<div id="urlVisits">
  ${this.getVisibleUrlVisits_().map((item, index) => html `
    <a class="url-visit" href="${item.url}"
        @click="${this.onUrlVisitClick_}" data-index="${index}"
        title="${item.title}">
      <div id="hoverLayer"></div>
      <page-favicon class="icon" .fallbackToHost="${this.fallbackToHost_}"
                    .url="${item.url}" size="24"
                    .isKnownToSync="${item.isKnownToSync ||
        this.allowFaviconServerFallback_}">
      </page-favicon>
      <div class="url-visit-info">
        <div class="url-visit-title">${item.title}</div>
        <div class="url-visit-description">
          <div class="url-visit-domain">${this.computeDomain_(item)}</div>
          <span class="dot"
              ?hidden="${!this.computeShouldShowDeviceName_(item)}">
            &nbsp;&#8226;&nbsp;
          </span>
          <div class="url-visit-device"
              ?hidden="${!this.computeShouldShowDeviceName_(item)}">
            ${this.computeDeviceName_(item)}
          </div>
          <span class="dot">
            &nbsp;&#8226;&nbsp;
          </span>
          <span class="url-visit-reason">
            ${item.decoration.displayString}
          </span>
        </div>
      </div>
      <cr-icon-button iron-icon="${this.getCheckSmallIcon_()}"
          @click="${this.onDismissButtonClick_}"
          title="$i18n{modulesHistoryDoneButton}">
      </cr-icon-button>
    </a>
  `)}
  <div id="seeMoreButtonContainer">
    <a href="chrome://history/syncedTabs"
        @click="${this.onSeeMoreButtonClick_}"
        aria-label="$i18n{modulesMostRelevantTabResumptionSeeMoreAcc}">
      $i18n{modulesMostRelevantTabResumptionSeeMore}
      <div id="hoverContainer"></div>
    </a>
  </div>
</div>
${this.showInfoDialog_ ? html `
    <ntp-info-dialog show-on-attach
        .innerHTML="${this.i18nAdvanced('modulesTabResumptionInfo')}"
        @close="${this.onInfoDialogClose_}">>
    </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MostRelevantTabResumptionProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        if (instance$f) {
            return instance$f;
        }
        const handler = PageHandler.getRemote();
        return instance$f = new MostRelevantTabResumptionProxyImpl(handler);
    }
    static setInstance(obj) {
        instance$f = obj;
    }
}
let instance$f = null;

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_URL_VISITS = 5;
class MostRelevantTabResumptionModuleElement extends I18nMixinLit(CrLitElement) {
    static get is() {
        return 'ntp-most-relevant-tab-resumption-module';
    }
    static get styles() {
        return getCss$b();
    }
    render() {
        return getHtml$d.bind(this)();
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
async function createElement$1() {
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
const mostRelevantTabResumptionDescriptor = new ModuleDescriptor(
/*id=*/ 'tab_resumption', createElement$1);

const div$1 = document.createElement('div');
div$1.innerHTML = getTrustedHTML `<cr-iconset name="tab_groups" size="20">
  <svg>
    <defs>
      <g id="create_new_tab_group-old" height="20px" viewBox="0 -960 960 960" width="20px">
        <path d="M516-384h72v-132h132v-72H588v-132h-72v132H384v72h132v132ZM312-240q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z">
      </g>
      <g id="group">
        <path d="M2 14.082c0-.355.086-.687.262-.984.172-.301.41-.543.718-.723a9.809 9.809 0 0 1 2.383-1.02A9.614 9.614 0 0 1 8 11c.918 0 1.797.117 2.637.355.84.235 1.633.575 2.383 1.02.308.18.546.422.718.723.176.297.262.629.262.984v.418c0 .414-.148.766-.441 1.059A1.449 1.449 0 0 1 12.5 16H3.496c-.414 0-.766-.148-1.058-.441A1.439 1.439 0 0 1 2 14.5ZM16.5 16h-1.395c.125-.234.223-.48.29-.734.07-.25.105-.508.105-.766v-.418c0-.582-.137-1.125-.406-1.625-.27-.5-.637-.91-1.094-1.227.543.11 1.066.258 1.574.446.504.187.989.422 1.446.699.308.18.546.422.718.723.176.3.262.629.262.984v.418c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 16.5 16ZM5.875 9.125A2.898 2.898 0 0 1 5 7c0-.832.293-1.543.875-2.125A2.898 2.898 0 0 1 8 4c.832 0 1.543.293 2.125.875C10.707 5.457 11 6.168 11 7c0 .832-.293 1.543-.875 2.125A2.898 2.898 0 0 1 8 10a2.898 2.898 0 0 1-2.125-.875Zm8.25 0A2.898 2.898 0 0 1 12 10c-.11 0-.215-.004-.313-.012a1.574 1.574 0 0 1-.312-.05 4.9 4.9 0 0 0 .824-1.344c.2-.492.301-1.024.301-1.594 0-.57-.102-1.102-.3-1.594a4.9 4.9 0 0 0-.825-1.343c.11-.028.215-.047.313-.051C11.784 4.004 11.89 4 12 4c.832 0 1.543.293 2.125.875C14.707 5.457 15 6.168 15 7c0 .832-.293 1.543-.875 2.125ZM3.5 14.5h9v-.418c0-.09-.02-.172-.063-.242a.444.444 0 0 0-.167-.172 9.02 9.02 0 0 0-2.063-.867C9.484 12.6 8.75 12.5 8 12.5c-.75 0-1.484.098-2.207.293a7.974 7.974 0 0 0-2.063.875.451.451 0 0 0-.23.414Zm5.563-6.441c.292-.297.437-.649.437-1.063 0-.414-.148-.766-.441-1.059A1.454 1.454 0 0 0 7.996 5.5c-.414 0-.766.148-1.059.441A1.454 1.454 0 0 0 6.5 7.004c0 .414.148.766.441 1.059.297.292.649.437 1.063.437.414 0 .766-.148 1.059-.441ZM8 14.5ZM8 7Zm0 0"></path>
      </g>
      <g id="library-add">
        <path d="M12.031 11.785a.73.73 0 0 0 .219-.535v-2h2c.21 0 .39-.07.535-.215A.713.713 0 0 0 15 8.504c0-.211-.07-.39-.215-.535a.73.73 0 0 0-.535-.219h-2v-2c0-.21-.07-.39-.215-.535A.713.713 0 0 0 11.504 5c-.211 0-.39.07-.535.215a.73.73 0 0 0-.219.535v2h-2c-.21 0-.39.07-.535.215A.713.713 0 0 0 8 8.496c0 .211.07.39.215.535a.73.73 0 0 0 .535.219h2v2c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215ZM6.5 15c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 5 13.5v-10c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 6.5 2h10c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v10c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 16.5 15Zm0-1.5h10v-10h-10Zm-3 4.5c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 2 16.5V5.75c0-.21.07-.39.215-.535A.713.713 0 0 1 2.746 5c.211 0 .39.07.535.215a.73.73 0 0 1 .219.535V16.5h10.75c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm3-14.5v10Zm0 0"></path>
      </g>
      <g id="shared_tab_group-old" height="20px" viewBox="0 -960 960 960" width="20px">
        <path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z">
      </g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets$1 = div$1.querySelectorAll('cr-iconset');
for (const iconset of iconsets$1) {
    document.head.appendChild(iconset);
}

let instance$e = null;
function getCss$a() {
    return instance$e || (instance$e = [...[], css `:host{--icon-container-size:56px;--icon-size:16px;--cell-size:26px;--cell-inner-radius:2px;--cell-outer-radius:6px;align-items:center;border-radius:8px;display:flex;gap:4px;height:var(--icon-container-size);justify-content:center;padding:4px;width:var(--icon-container-size)}.icons-container{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:4px;height:100%;place-items:center;width:100%}.cell{background-color:color-mix(in srgb,var(--color-sys-surface) 60%,transparent);border-radius:var(--cell-inner-radius);height:100%;overflow:hidden;width:100%}.cell.empty{height:var(--cell-size);width:var(--cell-size)}.cell:nth-child(1){border-top-left-radius:var(--cell-outer-radius)}.cell:nth-child(2){border-top-right-radius:var(--cell-outer-radius)}.cell:nth-child(3){border-bottom-left-radius:var(--cell-outer-radius)}.cell:nth-child(4){border-bottom-right-radius:var(--cell-outer-radius)}.cell.overflow-count{align-items:center;color:var(--color-new-tab-page-secondary-foreground);display:flex;flex-direction:column;font-size:var(--ntp-module-secondary-text-size);font-style:normal;font-weight:400;height:var(--cell-size);justify-content:center;line-height:var(--ntp-module-secondary-line-height);width:var(--cell-size)}.cell.icon{background-color:var(--color-sys-surface);display:grid;height:var(--cell-size);place-items:center;width:var(--cell-size)}.cell.icon>.icon{height:var(--icon-size);width:var(--icon-size)}`]);
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div class="icons-container">
  ${this.getFaviconCells().map(item => html `
    <div class="cell icon">
      <div class="icon"
          .style="background-image: ${getFaviconForPageURL(item, false)};">
      </div>
    </div>
  `)}
  ${this.getEmptyCells().map(() => html `<div class="cell empty"></div>`)}
  ${this.shouldShowOverflow() ? html `
    <div class="cell overflow-count" aria-hidden="true">
      ${this.getOverflowCount() <= 99 ? html `
        +${this.getOverflowCount()}
      ` : html `99+`}
    </div>
  ` : ''}
  </div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_CELL_COUNT = 4;
class IconContainerElement extends CrLitElement {
    static get is() {
        return 'ntp-icon-container';
    }
    static get styles() {
        return getCss$a();
    }
    render() {
        return getHtml$c.bind(this)();
    }
    static get properties() {
        return {
            faviconUrls: { type: Array },
            totalTabCount: { type: Number },
        };
    }
    #faviconUrls_accessor_storage = [];
    get faviconUrls() { return this.#faviconUrls_accessor_storage; }
    set faviconUrls(value) { this.#faviconUrls_accessor_storage = value; }
    #totalTabCount_accessor_storage = 0;
    get totalTabCount() { return this.#totalTabCount_accessor_storage; }
    set totalTabCount(value) { this.#totalTabCount_accessor_storage = value; }
    getOverflowCount() {
        return this.totalTabCount - MAX_CELL_COUNT + 1;
    }
    getFaviconCells() {
        const overflowCount = this.getOverflowCount();
        const overflowCellsCount = overflowCount > 1 ? 1 : 0;
        return this.faviconUrls.slice(0, MAX_CELL_COUNT - overflowCellsCount);
    }
    getEmptyCells() {
        const overflowCount = this.getOverflowCount();
        const overflowCellsCount = overflowCount > 1 ? 1 : 0;
        const faviconCells = this.getFaviconCells();
        return Array(MAX_CELL_COUNT - faviconCells.length - overflowCellsCount)
            .fill(null);
    }
    shouldShowOverflow() {
        return this.getOverflowCount() > 1;
    }
}
customElements.define(IconContainerElement.is, IconContainerElement);

let instance$d = null;
function getCss$9() {
    return instance$d || (instance$d = [...[getCss$t(), getCss$r()], css `:host{height:100%;width:100%}@media (forced-colors:active){.tab-group{border-radius:var(--ntp-module-item-border-radius);outline:var(--cr-border-hcm);overflow:visible}}:host-context(.focus-outline-visible) cr-button:focus,cr-button:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:none}#tabGroups{align-items:flex-start;align-self:stretch;background-color:var(--color-new-tab-page-module-item-background);border-radius:var(--ntp-module-item-border-radius);container-type:inline-size;display:flex;flex-direction:column;margin:8px}#tabGroupsContainer{width:100%}.tab-group{--cr-hover-background-color:var(--color-new-tab-page-module-item-background-hovered);background:transparent;border:0;border-radius:0;display:block;height:auto;margin:0;padding:4px 16px 4px 8px;position:relative}.row-content{display:flex;align-items:center;gap:16px}#zeroTabGroupsContainer{align-items:center;align-self:stretch;border-radius:12px;display:flex;flex-direction:column;gap:24px;justify-content:center;padding:32px 40px;position:relative}@container (max-width:312px){#zeroTabGroupsContainer{padding:8px 40px 32px}}#zeroTabGroupsImageContainer{align-items:center;background-color:var(--color-sys-surface5);border-radius:8px;display:flex;flex-direction:column;justify-content:flex-end;padding:40px 22px 0 22px;overflow:hidden}.zero-tab-groups-image{display:none;width:236px;height:93px;flex-shrink:0;transform:translateY(4px)}@media (prefers-color-scheme:light){#zeroTabGroupsImageLight{display:block}}@media (prefers-color-scheme:dark){#zeroTabGroupsImageDark{display:block}}#zeroTabGroupsContentContainer{display:flex;flex-direction:column;align-items:center;gap:16px;align-self:stretch}#zeroTabGroupsTextContainer{align-items:center;align-self:stretch;display:flex;flex-direction:column;gap:4px}#zeroTabGroupsTitle{color:var(--color-sys-on-surface);font-size:16px;font-style:normal;font-weight:500;line-height:24px;align-self:stretch;text-align:center}#zeroTabGroupsText{color:var(--color-sys-on-surface-subtle);font-size:13px;font-style:normal;font-weight:400;line-height:20px;text-align:center}#createNewTabGroupButton{--cr-hover-background-color:var(--color-new-tab-page-button-background-hovered);--cr-button-text-color:var(--color-new-tab-page-button-foreground);--cr-button-background-color:var(--color-new-tab-page-button-background);display:flex;height:36px;padding:8px 16px;align-items:center;gap:8px;border-radius:var(--corner-radii-fully-round,100px);border:none}cr-icon{width:20px;height:20px;flex-shrink:0}#createNewTabGroupButtonIcon{color:var(--color-new-tab-page-button-foreground)}.tab-group:first-of-type{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0;padding-top:calc(var(--ntp-module-first-element-top-padding) + 4px)}.tab-group-info{display:flex;flex-direction:column;align-items:stretch;flex:1 1 0;min-width:0;gap:4px}.color-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0}.tab-group-title-row{display:flex;align-items:center;gap:6px}.tab-group-title-row,.tab-group-description{overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}.tab-group-title{align-self:stretch;color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);font-style:normal;height:20px;line-height:var(--ntp-module-line-height);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tab-group-description{color:var(--color-new-tab-page-secondary-foreground);font-size:var(--ntp-module-secondary-text-size);font-weight:400;line-height:var(--ntp-module-secondary-line-height)}#footer{display:flex;flex-direction:column}#divider{padding:4px 0;position:relative}#divider::before{content:'';position:absolute;left:0;right:0;top:50%;height:1px;background:var(--color-new-tab-page-module-background)}#createNewTabGroupFooterButton{--cr-hover-background-color:var(--color-new-tab-page-module-item-background-hovered);background:transparent;border:0;display:block;height:auto;padding-block-end:12px;border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius)}#createNewTabGroupFooterButton>.row-content{gap:8px}#createNewTabGroupIcon,#sharedTabGroupIcon{color:var(--color-new-tab-page-secondary-foreground)}`]);
}

function getHtml$b() {
    return html `<!--_html_template_start_--><ntp-module-header
    header-text="${this.i18n('modulesTabGroupsTitle')}"
    .menuItems="${this.getMenuItems_()}"
    more-actions-text="${this.i18nRecursive('', 'modulesMoreActions', 'modulesTabGroupsTitle')}"
    @disable-button-click="${this.onDisableButtonClick_}"
    @info-button-click="${this.onInfoButtonClick_}">
</ntp-module-header>
<div id="tabGroups">
  ${this.showZeroState ? html `
    <div id="zeroTabGroupsContainer" class="tab-groups">
      <div id="zeroTabGroupsImageContainer">
        <img id="zeroTabGroupsImageLight" class="zero-tab-groups-image"
            src="modules/tab_groups/icons/chrome_tab_groups_light.svg">
        <img id="zeroTabGroupsImageDark" class="zero-tab-groups-image"
            src="modules/tab_groups/icons/chrome_tab_groups_dark.svg">
      </div>
      <div id="zeroTabGroupsContentContainer">
        <div id="zeroTabGroupsTextContainer">
          <div id="zeroTabGroupsTitle">
            ${this.i18n('modulesTabGroupsZeroStateTitle')}
          </div>
          <div id="zeroTabGroupsText">
            ${this.i18n('modulesTabGroupsZeroStateText')}
          </div>
        </div>
        <div id="zeroTabGroupsCreateNewTabGroup">
          <cr-button id="createNewTabGroupButton" class="create-new-tab-group"
                @click="${this.onCreateNewTabGroupFromZeroStateClick_}">
            <cr-icon id="createNewTabGroupButtonIcon"
                icon="${this.getLibraryAddIcon_()}" slot="prefix-icon">
            </cr-icon>
            <div id="createNewTabGroupButtonText">
              ${this.i18n('modulesTabGroupsCreateNewTabGroup')}
            </div>
          </cr-button>
        </div>
      </div>
    </div>
  ` : html `
    <div id="tabGroupsContainer">
      ${this.getTabGroups_().map((item, index) => html `
        <cr-button class="tab-group"
            data-index="${index}" data-id="${item.id}"
            @click="${this.onTabGroupClick_}"
            aria-label="${this.ariaLabels.get(item.id)}">
          <div class="row-content">
            <ntp-icon-container class="icon-container"
                .style="background-color: var(${this.computeTabGroupColor_(item.color)})"
                .faviconUrls="${item.faviconUrls}"
                .totalTabCount="${item.totalTabCount}">
            </ntp-icon-container>
            <div class="tab-group-info">
              <div class="tab-group-title-row">
                <div class="color-dot"
                    style="background-color: var(${this.computeTabGroupDotColor_(item.color)})">
                </div>
                <div class="tab-group-title">${item.title}</div>
              </div>
              <div class="tab-group-description">${this.computeDescription_(item.updateTime, item.deviceName)}</div>
            </div>
            ${item.isSharedTabGroup ? html `
              <cr-icon id="sharedTabGroupIcon"
                  icon="${this.getGroupIcon_()}" slot="icon">
              </cr-icon>
            ` : ''}
          </div>
        </cr-button>
      `)}
      <div id="footer">
        <div id="divider"></div>
        <cr-button id="createNewTabGroupFooterButton"
            class="create-new-tab-group"
            @click="${this.onCreateNewTabGroupFromSteadyStateClick_}">
          <div class="row-content">
            <cr-icon id="createNewTabGroupIcon"
                icon="${this.getLibraryAddIcon_()}" slot="icon">
            </cr-icon>
            <div id="createNewTabGroupText" class="tab-group-title">
              ${this.i18n('modulesTabGroupsCreateNewTabGroup')}
            </div>
          </div>
        </cr-button>
      </div>
    </div>
  `}
</div>
${this.showInfoDialog ? html `
  <ntp-info-dialog show-on-attach
      .innerHTML="${this.i18nAdvanced('modulesTabGroupsInfo')}"
      @close="${this.onInfoDialogClose_}">
  </ntp-info-dialog>
` : ''}
<!--_html_template_end_-->`;
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class TabGroupsProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance$c ||
            (instance$c = new TabGroupsProxyImpl(PageHandler$1.getRemote()));
    }
    static setInstance(newInstance) {
        instance$c = newInstance;
    }
}
let instance$c = null;

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_TAB_GROUPS = 4;
const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX = '--color-new-tab-page-module-tab-groups-';
const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX = '--color-new-tab-page-module-tab-groups-dot-';
const TabGroupsModuleElementBase = I18nMixinLit(CrLitElement);
function colorIdToString(colorPrefix, id) {
    const colorMap = new Map([
        [Color.kGrey, 'grey'],
        [Color.kBlue, 'blue'],
        [Color.kRed, 'red'],
        [Color.kYellow, 'yellow'],
        [Color.kGreen, 'green'],
        [Color.kPink, 'pink'],
        [Color.kPurple, 'purple'],
        [Color.kCyan, 'cyan'],
        [Color.kOrange, 'orange'],
    ]);
    assert(colorMap.has(id));
    return colorPrefix + colorMap.get(id);
}
/**
 * The Tab Groups module, which helps users resume journey and discover tab
 * groups.
 */
class TabGroupsModuleElement extends TabGroupsModuleElementBase {
    static get is() {
        return 'ntp-tab-groups-module';
    }
    static get styles() {
        return getCss$9();
    }
    render() {
        return getHtml$b.bind(this)();
    }
    static get properties() {
        return {
            ariaLabels: { type: Object },
            tabGroups: { type: Array },
            showInfoDialog: { type: Boolean },
        };
    }
    #ariaLabels_accessor_storage = new Map();
    get ariaLabels() { return this.#ariaLabels_accessor_storage; }
    set ariaLabels(value) { this.#ariaLabels_accessor_storage = value; }
    #tabGroups_accessor_storage = [];
    get tabGroups() { return this.#tabGroups_accessor_storage; }
    set tabGroups(value) { this.#tabGroups_accessor_storage = value; }
    #showInfoDialog_accessor_storage = false;
    get showInfoDialog() { return this.#showInfoDialog_accessor_storage; }
    set showInfoDialog(value) { this.#showInfoDialog_accessor_storage = value; }
    showZeroState = false;
    handler_;
    constructor() {
        super();
        this.handler_ = TabGroupsProxyImpl.getInstance().handler;
    }
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('tabGroups')) {
            const entries = await Promise.all(this.tabGroups.map(async (group) => {
                const label = await this.computeTabGroupButtonAriaLabel_(group);
                return [group.id, label];
            }));
            this.ariaLabels = new Map(entries);
        }
    }
    computeDescription_(time, device) {
        return (device && device.length > 0) ? `${time} • ${device.trim()}` : time;
    }
    computeTabGroupColor_(color) {
        return colorIdToString(COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX, color);
    }
    computeTabGroupDotColor_(color) {
        return colorIdToString(COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX, color);
    }
    async computeTabGroupButtonAriaLabel_(group) {
        const totalTabsStr = await MojoPluralStringProxy.getInstance().getPluralString('modulesTabGroupsTabsText', group.totalTabCount);
        const description = this.computeDescription_(group.updateTime, group.deviceName);
        const sharedStr = group.isSharedTabGroup ? 'shared' : '';
        return [totalTabsStr, group.title, description, sharedStr]
            .filter(Boolean)
            .join(' ');
    }
    getMenuItems_() {
        return [
            {
                action: 'disable',
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'modules:block' :
                    'modules:block-old',
                text: this.i18nRecursive('', 'modulesDisableButtonTextV2', 'modulesTabGroupsTitle'),
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
    getTabGroups_() {
        return this.tabGroups.slice(0, MAX_TAB_GROUPS);
    }
    onDisableButtonClick_() {
        this.fire('disable-module', {
            message: this.i18n('modulesTabGroupsDisableToastMessage'),
        });
    }
    onInfoButtonClick_() {
        this.showInfoDialog = true;
    }
    onInfoDialogClose_() {
        this.showInfoDialog = false;
    }
    onCreateNewTabGroupFromZeroStateClick_() {
        this.onCreateNewTabGroupClick_(true);
    }
    onCreateNewTabGroupFromSteadyStateClick_() {
        this.onCreateNewTabGroupClick_(false);
    }
    onCreateNewTabGroupClick_(fromZeroStateCard) {
        this.fire('usage');
        const histogram = 'NewTabPage.TabGroups.CreateNewTabGroup';
        recordOccurrence(histogram);
        recordOccurrence(`${histogram}.${fromZeroStateCard ? 'ZeroState' : 'SteadyState'}`);
        this.handler_.createNewTabGroup();
    }
    onTabGroupClick_(e) {
        const target = e.currentTarget;
        const id = target.dataset['id'];
        const index = Number(target.dataset['index']);
        this.fire('usage');
        recordSmallCount('NewTabPage.TabGroups.ClickTabGroupIndex', index);
        this.handler_.openTabGroup(id);
    }
    getLibraryAddIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'tab_groups:library-add' :
            'tab_groups:create_new_tab_group-old';
    }
    getGroupIcon_() {
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'tab_groups:group' :
            'tab_groups:shared_tab_group-old';
    }
}
customElements.define(TabGroupsModuleElement.is, TabGroupsModuleElement);
async function createElement() {
    const { tabGroups, showZeroState } = await TabGroupsProxyImpl.getInstance().handler.getTabGroups();
    if (!tabGroups) {
        // Still within the dismissal time window--skip rendering module.
        return null;
    }
    if (!showZeroState && tabGroups.length === 0) {
        // If zero-state is disabled and there are no groups, skip rendering module.
        return null;
    }
    const element = new TabGroupsModuleElement();
    element.tabGroups = tabGroups;
    element.showZeroState = showZeroState;
    return element;
}
const tabGroupsDescriptor = new ModuleDescriptor(
/*id=*/ 'tab_groups', createElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Registers all NTP modules given their respective descriptors.
 */
const descriptors = [];
descriptors.push(mostRelevantTabResumptionDescriptor);
descriptors.push(driveModuleDescriptor);
descriptors.push(googleCalendarDescriptor);
descriptors.push(microsoftAuthModuleDescriptor);
descriptors.push(outlookCalendarDescriptor);
descriptors.push(microsoftFilesModuleDescriptor);
descriptors.push(tabGroupsDescriptor);
// 
descriptors.push(dummyV2Descriptor);
//

let instance$b = null;
function getCss$8() {
    return instance$b || (instance$b = [...[], css `:host{--cr-toast-background:var(--color-toast-background,var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,var(--cr-fallback-color-inverse-on-surface));--cr-focus-outline-color:var(--cr-focus-outline-inverse-color);align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,0.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity 300ms,transform 300ms;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host(:not([open])) ::slotted(*){display:none}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent !important;border:none !important;color:var(--cr-toast-button-color) !important;margin-inline-start:32px !important;min-width:52px !important;padding:8px !important}:host ::slotted(cr-button:hover){background-color:transparent !important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a() {
    return html `<slot></slot>`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends CrLitElement {
    static get is() {
        return 'cr-toast';
    }
    static get styles() {
        return getCss$8();
    }
    render() {
        return getHtml$a.bind(this)();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
            },
            open: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #duration_accessor_storage = 0;
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    #open_accessor_storage = false;
    get open() { return this.#open_accessor_storage; }
    set open(value) { this.#open_accessor_storage = value; }
    hideTimeoutId_ = null;
    constructor() {
        super();
        this.addEventListener('focusin', this.clearTimeout_);
        this.addEventListener('focusout', this.resetAutoHide_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('duration') || changedProperties.has('open')) {
            this.resetAutoHide_();
        }
    }
    clearTimeout_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        this.clearTimeout_();
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    async show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        this.open = true;
        await this.updateComplete;
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that its contents can not be focused while
     * hidden.
     */
    async hide() {
        this.open = false;
        await this.updateComplete;
    }
}
customElements.define(CrToastElement.is, CrToastElement);

let instance$a = null;
function getCss$7() {
    return instance$a || (instance$a = [...[], css `:host{background-color:var(--color-new-tab-page-module-background);border:none;border-radius:var(--ntp-module-border-radius);box-sizing:border-box;display:block;height:fit-content;overflow:visible;position:relative}#impressionProbe{height:27px;pointer-events:none;position:absolute;width:100%}#moduleElement{align-items:center;background:var(--color-new-tab-page-module-background);border-radius:var(--ntp-module-border-radius);display:flex;height:100%;justify-content:center}`]);
}

function getHtml$9() {
    return html `<!--_html_template_start_--><div id="impressionProbe"></div>
<div id="moduleElement">
  <slot id="slot"></slot>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ModuleWrapperElement extends CrLitElement {
    static get is() {
        return 'ntp-module-wrapper';
    }
    static get styles() {
        return getCss$7();
    }
    render() {
        // Update the light DOM element(s) and allow Lit to handle the shadow DOM
        // with a slotted module's UI element.
        if (this.module) {
            render(this.module.element, this, { host: this });
        }
        return getHtml$9.bind(this)();
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

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The module registry holds the descriptors of NTP modules and
 * provides management function such as instantiating the local module UIs.
 */
let instance$9 = null;
class ModuleRegistry {
    static getInstance() {
        return instance$9 || (instance$9 = new ModuleRegistry(descriptors));
    }
    static setInstance(newInstance) {
        instance$9 = newInstance;
    }
    descriptors_;
    /** Creates a registry populated with a list of descriptors. */
    constructor(descriptors) {
        this.descriptors_ = descriptors;
    }
    /**
     * Initializes enabled modules as reported by `getModulesIdNames` excluding
     * those that have been disabled for the current profile and returns the
     * initialized modules.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     particular module aborts.
     */
    async initializeModules(timeout) {
        const modulesIdNames = (await browserProxyFactory.getInstance().handler.getModulesIdNames())
            .data;
        return this.initializeModulesHavingIds(modulesIdNames.map(m => m.id), timeout);
    }
    /**
     * Initializes a given list of modules based on the provided module ids.
     * Serves as a convenience method for cases where the caller already knows the
     * desired list of module ids to load.
     *
     * @param moduleIds A list of module ids to be leveraged when determining the
     *     modules to be initialized.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     particular module aborts.
     */
    async initializeModulesHavingIds(modulesIds, timeout) {
        // Capture updateDisabledModules -> setDisabledModules round trip in a
        // promise for convenience.
        const disabledIds = await new Promise((resolve, _) => {
            const callbackRouter = browserProxyFactory.getInstance().callbackRouter;
            const listenerId = callbackRouter.setDisabledModules.addListener((all, ids) => {
                callbackRouter.removeListener(listenerId);
                resolve(all ? this.descriptors_.map(({ id }) => id) : ids);
            });
            browserProxyFactory.getInstance().handler.updateDisabledModules();
        });
        const descriptorsMap = new Map(this.descriptors_.map(d => [d.id, d]));
        const descriptors = modulesIds.filter(id => !disabledIds.includes(id))
            .map(id => descriptorsMap.get(id));
        // Modules may have an updated order, e.g. because of drag&drop or a Finch
        // param. Apply the updated order such that modules without a specified
        // order (e.g. because they were just enabled or launched) land at the
        // bottom of the list.
        const orderedIds = (await browserProxyFactory.getInstance().handler.getModulesOrder())
            .moduleIds;
        if (orderedIds.length > 0) {
            descriptors.sort((a, b) => {
                const aHasOrder = orderedIds.includes(a.id);
                const bHasOrder = orderedIds.includes(b.id);
                if (aHasOrder && bHasOrder) {
                    // Apply order.
                    return orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id);
                }
                if (!aHasOrder && bHasOrder) {
                    return 1; // Move b up.
                }
                if (aHasOrder && !bHasOrder) {
                    return -1; // Move a up.
                }
                return 0; // Keep current order.
            });
        }
        const elements = await Promise.all(descriptors.map(d => d.initialize(timeout, /*onNtpLoad=*/ true)));
        return elements.map((e, i) => ({ elements: e, descriptor: descriptors[i] }))
            .filter(m => !!m.elements)
            .map(m => ({
            elements: Array.isArray(m.elements) ? m.elements :
                [m.elements],
            descriptor: m.descriptor,
        }))
            .filter(m => m.elements.length !== 0);
    }
    /**
     * Initializes a module based on the provided module id.
     * Serves as a convenience method for cases where the caller already knows the
     * desired module id to load.
     *
     * @param moduleId A module id to be leveraged when determining the
     *     module to be initialized.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     the module aborts.
     */
    async initializeModuleById(id, timeout) {
        const descriptor = this.descriptors_.find(d => d.id === id);
        if (!descriptor) {
            console.error('Missing descriptor for module id ', id);
            return null;
        }
        const elements = await descriptor.initialize(timeout, /*onNtpLoad=*/ false);
        if (!elements) {
            return null;
        }
        return {
            elements: Array.isArray(elements) ? elements : [elements],
            descriptor: descriptor,
        };
    }
}

let instance$8 = null;
function getCss$6() {
    return instance$8 || (instance$8 = [...[getCss$s()], css `#container{display:flex;flex-flow:row wrap;gap:var(--container-gap);justify-content:center;margin-top:8px;max-width:var(--container-max-width,inherit)}#undoToastMessage{flex-grow:1}`]);
}

function getHtml$8() {
    return html `<!--_html_template_start_--><div id="container">
  ${this.moduleInstances_.map(item => html `
    <ntp-module-wrapper .module="${item}"
        ?hidden="${this.moduleDisabled_(item)}"
        @disable-module="${this.onDisableModule_}"
        @dismiss-module-element="${this.onDismissModuleElement_}"
        @dismiss-module-instance="${this.onDismissModuleInstance_}">
    </ntp-module-wrapper>
  `)}
</div>
<cr-toast id="undoToast" duration="10000">
  <div id="undoToastMessage">${this.undoData_?.message || ''}</div>
  ${this.undoData_?.undo ? html `
    <cr-button id="undoButton"
        aria-label="$i18n{undoDescription}"
        @click="${this.onUndoButtonClick_}">
      $i18n{undo}
    </cr-button>
  ` : ''}
</cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_MODULE_WIDTHS = [
    { name: 'narrow', value: 312 },
    { name: 'medium', value: 360 },
    { name: 'wide', value: 728 },
];
const CONTAINER_GAP_WIDTH = 8;
const MARGIN_WIDTH = 48;
const METRIC_NAME_MODULE_DISABLED = 'NewTabPage.Modules.Disabled';
function createModuleInstances(module) {
    return module.elements.map(element => {
        return {
            element,
            descriptor: module.descriptor,
            initialized: false,
            impressed: false,
        };
    });
}
/** Container for the NTP modules. */
class ModulesElement extends CrLitElement {
    static get is() {
        return 'ntp-modules';
    }
    static get styles() {
        return getCss$6();
    }
    render() {
        return getHtml$8.bind(this)();
    }
    static get properties() {
        return {
            modulesShownToUser: {
                type: Boolean,
                notify: true,
            },
            moduleInstances_: { type: Array },
            disabledModules_: { type: Object },
            pendingAutoRemovedModules_: { type: Array },
            /** Data about the most recent un-doable action. */
            undoData_: { type: Object },
            /**
             * The width of the element's container. If null, the window's width is
             * used for calculating the number of modules per row and their widths.
             */
            containerWidth: { type: Number },
        };
    }
    #modulesShownToUser_accessor_storage = false;
    get modulesShownToUser() { return this.#modulesShownToUser_accessor_storage; }
    set modulesShownToUser(value) { this.#modulesShownToUser_accessor_storage = value; }
    #containerWidth_accessor_storage = null;
    get containerWidth() { return this.#containerWidth_accessor_storage; }
    set containerWidth(value) { this.#containerWidth_accessor_storage = value; }
    waitToLoadModules_ = loadTimeData.getBoolean('waitToLoadModules');
    #moduleInstances__accessor_storage = [];
    get moduleInstances_() { return this.#moduleInstances__accessor_storage; }
    set moduleInstances_(value) { this.#moduleInstances__accessor_storage = value; }
    #disabledModules__accessor_storage = { all: true, ids: [] };
    get disabledModules_() { return this.#disabledModules__accessor_storage; }
    set disabledModules_(value) { this.#disabledModules__accessor_storage = value; }
    #pendingAutoRemovedModules__accessor_storage = [];
    get pendingAutoRemovedModules_() { return this.#pendingAutoRemovedModules__accessor_storage; }
    set pendingAutoRemovedModules_(value) { this.#pendingAutoRemovedModules__accessor_storage = value; }
    #undoData__accessor_storage = null;
    get undoData_() { return this.#undoData__accessor_storage; }
    set undoData_(value) { this.#undoData__accessor_storage = value; }
    maxColumnCount_ = loadTimeData.getInteger('modulesMaxColumnCount');
    availableWidth_ = 0;
    containerMaxWidth_ = 0;
    eventTracker_ = new EventTracker();
    setDisabledModulesListenerId_ = null;
    setModulesLoadableListenerId_ = null;
    availableModulesIds_ = null;
    moduleLoadPromise_ = null;
    // TODO(crbug.com/385174675): Remove |modulesReloadable_| flag when safe.
    // Otherwise, when Microsoft modules are enabled ToT, the current
    // behavior gated by |modulesReloadable_| should become the default module
    // loading behavior.
    modulesReloadable_ = loadTimeData.getBoolean('modulesReloadable');
    connectedCallback() {
        super.connectedCallback();
        if (!loadTimeData.getBoolean('enableThreadsRail')) {
            const widths = new Set();
            for (let i = 0; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
                const namedWidth = SUPPORTED_MODULE_WIDTHS[i];
                for (let u = 1; u <= this.maxColumnCount_ - i; u++) {
                    const width = (namedWidth.value * u) + (CONTAINER_GAP_WIDTH * (u - 1));
                    if (width <= this.containerMaxWidth_) {
                        widths.add(width);
                    }
                }
            }
            // Widths must be deduped and sorted to ensure the min-width and max-with
            // media features in the queries produced below are correctly generated.
            const thresholds = [...widths];
            thresholds.sort((i, j) => i - j);
            const queries = [];
            for (let i = 1; i < thresholds.length - 1; i++) {
                queries.push({
                    maxWidth: (thresholds[i + 1] - 1),
                    query: `(min-width: ${thresholds[i] + 2 * MARGIN_WIDTH}px) and (max-width: ${thresholds[i + 1] - 1 + (2 * MARGIN_WIDTH)}px)`,
                });
            }
            queries.splice(0, 0, {
                maxWidth: thresholds[0],
                query: `(max-width: ${thresholds[0] - 1 + (2 * MARGIN_WIDTH)}px)`,
            });
            queries.push({
                maxWidth: thresholds[thresholds.length - 1],
                query: `(min-width: ${thresholds[thresholds.length - 1] + (2 * MARGIN_WIDTH)}px)`,
            });
            // Produce media queries with relevant view thresholds at which module
            // instance optimal widths should be re-evaluated.
            queries.forEach(details => {
                const query = WindowProxy.getInstance().matchMedia(details.query);
                this.eventTracker_.add(query, 'change', (e) => {
                    if (e.matches) {
                        this.updateContainerAndChildrenStyles_(details.maxWidth);
                    }
                });
            });
        }
        this.eventTracker_.add(window, 'keydown', this.onWindowKeydown_.bind(this));
        this.setDisabledModulesListenerId_ =
            this.callbackRouter_.setDisabledModules.addListener((all, ids) => {
                this.disabledModules_ = { all, ids };
                // The pending auto removed modules need to be updated here to
                // reflect their current state. If not cleaned up properly, their
                // state is considered disabled for rendering purposes, and will
                // remain so until the NTP is refreshed.
                this.pendingAutoRemovedModules_ =
                    this.pendingAutoRemovedModules_.filter(id => !ids.includes(id));
            });
        this.pageHandler_.updateDisabledModules();
        this.setModulesLoadableListenerId_ =
            this.callbackRouter_.setModulesLoadable.addListener(() => {
                if (this.waitToLoadModules_) {
                    this.waitToLoadModules_ = false;
                    this.moduleLoadPromise_ = this.loadModules_();
                }
                else if (this.modulesReloadable_) {
                    this.handleModuleEnablement_(this.disabledModules_);
                }
            });
        if (this.waitToLoadModules_) {
            this.pageHandler_.updateModulesLoadable();
        }
        else {
            this.moduleLoadPromise_ = this.loadModules_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setDisabledModulesListenerId_);
        this.callbackRouter_.removeListener(this.setDisabledModulesListenerId_);
        assert(this.setModulesLoadableListenerId_);
        this.callbackRouter_.removeListener(this.setModulesLoadableListenerId_);
        this.eventTracker_.removeAll();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('moduleInstances_') ||
            changedProperties.has('disabledModules_')) {
            this.updateContainerAndChildrenStyles_(this.availableWidth_);
        }
    }
    firstUpdated() {
        this.style.setProperty('--container-gap', `${CONTAINER_GAP_WIDTH}px`);
        assert(SUPPORTED_MODULE_WIDTHS[0]);
        this.containerMaxWidth_ =
            this.maxColumnCount_ * SUPPORTED_MODULE_WIDTHS[0].value +
                (this.maxColumnCount_ - 1) * CONTAINER_GAP_WIDTH;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (!loadTimeData.getBoolean('enableThreadsRail')) {
            this.availableWidth_ =
                this.computeAvailableWidth_(document.body.clientWidth);
        }
        else if (changedProperties.has('containerWidth') &&
            this.containerWidth !== null) {
            const availableWidth = this.computeAvailableWidth_(this.containerWidth);
            if (availableWidth !== this.availableWidth_) {
                this.availableWidth_ = availableWidth;
                this.updateContainerAndChildrenStyles_(availableWidth);
            }
        }
    }
    get pageHandler_() {
        return browserProxyFactory.getInstance().handler;
    }
    get callbackRouter_() {
        return browserProxyFactory.getInstance().callbackRouter;
    }
    moduleDisabled_(instance) {
        return this.disabledModules_.all ||
            this.disabledModules_.ids.includes(instance.descriptor.id) ||
            this.pendingAutoRemovedModules_.includes(instance.descriptor.id);
    }
    /**
     * Initializes the module container by loading all currently enabled modules.
     * This method uses the `ModuleRegistry` to determine which modules to load
     * and is called only when the container is empty.
     */
    async loadModules_() {
        const [modulesIdNamesResponse, modulesEligibleForRemovalResponse] = await Promise.all([
            this.pageHandler_.getModulesIdNames(),
            this.pageHandler_.getModulesEligibleForRemoval(),
        ]);
        const modulesIdNames = modulesIdNamesResponse.data;
        const modules = await ModuleRegistry.getInstance().initializeModulesHavingIds(modulesIdNames.map((m) => m.id), loadTimeData.getInteger('modulesLoadTimeout'));
        // We only want to remove modules that are both eligible for auto removal
        // and will currently load on the NTP. Otherwise, we postpone the auto
        // removal until the module is eligible to be loaded on the NTP.
        const modulesEligibleForRemoval = modulesEligibleForRemovalResponse.moduleIds.filter(id => modules.some(module => module.descriptor.id === id));
        if (modules.length > 0) {
            this.pageHandler_.onModulesLoadedWithData(modules.map(module => module.descriptor.id)
                .filter(id => !modulesEligibleForRemoval.includes(id)));
            this.moduleInstances_ = modules
                .map(module => {
                return createModuleInstances(module);
            })
                .flat();
            this.handleModulesAutoRemoval_(modulesEligibleForRemoval);
        }
        this.recordInitialLoadMetrics_(modules, modulesIdNames);
        this.dispatchEvent(new CustomEvent('modules-loaded', { detail: modules.length }));
    }
    recordInitialLoadMetrics_(modules, modulesIdNames) {
        recordSmallCount('NewTabPage.Modules.LoadedModulesCount', modules.length);
        modulesIdNames.forEach(({ id }) => {
            recordBoolean(`NewTabPage.Modules.EnabledOnNTPLoad.${id}`, !this.disabledModules_.all &&
                !this.disabledModules_.ids.includes(id));
        });
        recordSmallCount('NewTabPage.Modules.InstanceCount', this.moduleInstances_.length);
        recordBoolean('NewTabPage.Modules.VisibleOnNTPLoad', !this.disabledModules_.all);
        this.recordModuleLoadedWithModules_(/*onNtpLoad=*/ true);
    }
    recordModuleLoadedWithModules_(onNtpLoad) {
        const moduleDescriptorIds = [...new Set(this.moduleInstances_.map(instance => instance.descriptor.id))];
        const histogramBase = onNtpLoad ? 'NewTabPage.Modules.LoadedWith' :
            'NewTabPage.Modules.ReloadedWith';
        for (const moduleDescriptorId of moduleDescriptorIds) {
            moduleDescriptorIds.forEach(id => {
                if (id !== moduleDescriptorId) {
                    recordSparseValueWithPersistentHash(`${histogramBase}.${moduleDescriptorId}`, id);
                }
            });
        }
    }
    recordModuleAutoRemovalMetrics_(moduleIds, disabled) {
        const histogramBase = disabled ? 'NewTabPage.Modules.AutoRemoval' :
            'NewTabPage.Modules.AutoRemovalUndone';
        recordOccurrence(histogramBase);
        for (const moduleId of moduleIds) {
            recordSparseValueWithPersistentHash(`${histogramBase}ModuleId`, moduleId);
        }
    }
    /**
     * Handles the the auto-removal of stale modules, which are defined as modules
     * that have not been interacted with by the user within a certain period of
     * time. The removal is undone if the user clicks on the undo button in the
     * toast.
     *
     * Due to the asynchronous nature of module loading, it is possible for the
     * modules to be loaded before the auto-removal is processed by the browser.
     * Therefore, pending modules are added to a pending list, and removed after
     * the browser has processed the auto-removal during the `setDisabledModules`
     * callback.
     *
     * @param moduleIds - An array of module ids that have been auto-removed.
     */
    handleModulesAutoRemoval_(moduleIds) {
        if (moduleIds.length > 0) {
            const isSingleModuleRemoval = moduleIds.length === 1;
            const undoToastMessage = isSingleModuleRemoval ?
                loadTimeData.getString('moduleInactivityRemovalMsg') :
                loadTimeData.getString('modulesInactivityRemovalMsg');
            this.pendingAutoRemovedModules_ = moduleIds;
            this.pageHandler_.setModulesDisabled(moduleIds, /*disabled=*/ true, /*is_user_action=*/ false);
            this.recordModuleAutoRemovalMetrics_(moduleIds, /*disabled=*/ true);
            this.fire('modules-auto-removed', {
                message: undoToastMessage,
                undo: () => {
                    this.pageHandler_.setModulesDisabled(moduleIds, /*disabled=*/ false, /*is_user_action=*/ true);
                    this.recordModuleAutoRemovalMetrics_(moduleIds, /*disabled=*/ false);
                },
            });
        }
    }
    /**
     * Manages the reloading of modules within the container based on
     * updates to the disabled modules list.
     *
     * Subsequent calls handle potential reloads. Newly enabled modules are
     * queued and loaded individually. The user does not see these modules until
     * the entire container is reloaded after all queued modules have been loaded.
     *
     * @param disabledModules - An object containing the current list of disabled
     * module ids.
     */
    async handleModuleEnablement_(disabledModules) {
        if (this.moduleLoadPromise_) {
            await this.moduleLoadPromise_;
        }
        if (!this.availableModulesIds_) {
            const modulesIdNames = (await this.pageHandler_.getModulesIdNames()).data;
            // TODO(crbug.com/385174675): Set |this.availableModulesIds_| in
            // |this.loadModules_()| when Microsoft modules are enabled ToT, as this
            // experimental behavior is currently gated to the Microsoft modules.
            this.availableModulesIds_ = new Set(modulesIdNames.map((m) => m.id));
        }
        const disabledModuleIds = disabledModules.ids;
        const newlyEnabledModuleIds = [...this.availableModulesIds_.difference(new Set(disabledModuleIds.concat(this.moduleInstances_.map((m) => m.descriptor.id))))];
        if (newlyEnabledModuleIds.length === 0) {
            return;
        }
        // Load modules one by one until the queue is empty.
        const newModuleInstances = [];
        while (newlyEnabledModuleIds.length > 0) {
            const moduleId = newlyEnabledModuleIds.shift();
            const module = await ModuleRegistry.getInstance().initializeModuleById(moduleId, loadTimeData.getInteger('modulesLoadTimeout'));
            if (module) {
                newModuleInstances.push(...createModuleInstances(module));
            }
        }
        if (newModuleInstances.length > 0) {
            newModuleInstances.push(...this.moduleInstances_);
            const orderedIds = (await this.pageHandler_.getModulesOrder()).moduleIds;
            if (orderedIds && orderedIds.length > 0) {
                newModuleInstances.sort((a, b) => {
                    const aId = a.descriptor.id;
                    const bId = b.descriptor.id;
                    const aHasOrder = orderedIds.includes(aId);
                    const bHasOrder = orderedIds.includes(bId);
                    if (aHasOrder && bHasOrder) {
                        return orderedIds.indexOf(aId) - orderedIds.indexOf(bId);
                    }
                    return +bHasOrder - +aHasOrder;
                });
            }
            this.moduleInstances_ = newModuleInstances;
            recordSmallCount('NewTabPage.Modules.ReloadedModulesCount', this.moduleInstances_.length);
            this.recordModuleLoadedWithModules_(/*onNtpLoad=*/ false);
        }
    }
    computeAvailableWidth_(containerWidth) {
        return Math.min(containerWidth - 2 * MARGIN_WIDTH, this.containerMaxWidth_);
    }
    updateContainerAndChildrenStyles_(availableWidth) {
        const visibleModuleInstances = this.disabledModules_.all ?
            [] :
            this.moduleInstances_.filter(instance => !this.disabledModules_.ids.includes(instance.descriptor.id));
        this.modulesShownToUser = visibleModuleInstances.length !== 0;
        if (visibleModuleInstances.length === 0) {
            return;
        }
        this.style.setProperty('--container-max-width', `${availableWidth}px`);
        const clamp = (min, val, max) => Math.max(min, Math.min(val, max));
        const rowMaxInstanceCount = clamp(1, Math.floor((availableWidth + CONTAINER_GAP_WIDTH) /
            (CONTAINER_GAP_WIDTH + SUPPORTED_MODULE_WIDTHS[0].value)), this.maxColumnCount_);
        let index = 0;
        while (index < visibleModuleInstances.length) {
            const instances = visibleModuleInstances.slice(index, index + rowMaxInstanceCount);
            let namedWidth = SUPPORTED_MODULE_WIDTHS[0];
            for (let i = 1; i < SUPPORTED_MODULE_WIDTHS.length; i++) {
                const moduleWidth = SUPPORTED_MODULE_WIDTHS[i];
                assert(moduleWidth);
                if (Math.floor((availableWidth -
                    (CONTAINER_GAP_WIDTH * (instances.length - 1))) /
                    moduleWidth.value) < instances.length) {
                    break;
                }
                namedWidth = moduleWidth;
            }
            instances.slice(0, instances.length).forEach(instance => {
                // The `format` attribute is leveraged by modules whose layout should
                // change based on the available width.
                instance.element.setAttribute('format', namedWidth.name);
                instance.element.style.width = `${namedWidth.value}px`;
            });
            index += instances.length;
        }
    }
    onDisableModule_(e) {
        const moduleWrapper = e.target.parentNode;
        assert(moduleWrapper);
        const module = moduleWrapper.module;
        assert(module);
        const id = module.descriptor.id;
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: () => {
                if (restoreCallback) {
                    restoreCallback();
                }
                this.pageHandler_.setModulesDisabled([id], /*disabled=*/ false, /*is_user_action=*/ true);
                recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled', id);
                recordSparseValueWithPersistentHash('NewTabPage.Modules.Enabled.Toast', id);
            },
        };
        this.pageHandler_.setModulesDisabled([id], /*disabled=*/ true, /*is_user_action=*/ true);
        this.$.undoToast.show();
        recordSparseValueWithPersistentHash(METRIC_NAME_MODULE_DISABLED, id);
        recordSparseValueWithPersistentHash(`${METRIC_NAME_MODULE_DISABLED}.ModuleRequest`, id);
    }
    /**
     * @param e Event notifying a module instance was dismissed. Contains the
     *     message to show in the toast.
     */
    onDismissModuleInstance_(e) {
        const wrapper = e.target.parentNode;
        const index = Array.from(wrapper.parentNode.children).indexOf(wrapper);
        const module = this.moduleInstances_[index];
        assert(module);
        this.moduleInstances_ = this.moduleInstances_.toSpliced(index, 1);
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: restoreCallback ?
                () => {
                    this.moduleInstances_ =
                        this.moduleInstances_.toSpliced(index, 0, module);
                    restoreCallback();
                    recordOccurrence('NewTabPage.Modules.Restored');
                    recordOccurrence(`NewTabPage.Modules.Restored.${module.descriptor.id}`);
                } :
                undefined,
        };
        // Notify the user.
        this.$.undoToast.show();
        this.pageHandler_.onDismissModule(module.descriptor.id);
    }
    onDismissModuleElement_(e) {
        const restoreCallback = e.detail.restoreCallback;
        this.undoData_ = {
            message: e.detail.message,
            undo: restoreCallback ?
                () => {
                    restoreCallback();
                } :
                undefined,
        };
        // Notify the user.
        this.$.undoToast.show();
    }
    onUndoButtonClick_() {
        if (!this.undoData_) {
            return;
        }
        // Restore to the previous state.
        this.undoData_.undo();
        // Notify the user.
        this.$.undoToast.hide();
        this.undoData_ = null;
    }
    onWindowKeydown_(e) {
        let ctrlKeyPressed = e.ctrlKey;
        // 
        if (ctrlKeyPressed && e.key === 'z') {
            this.onUndoButtonClick_();
        }
    }
}
customElements.define(ModulesElement.is, ModulesElement);

const div = document.createElement('div');
div.innerHTML = getTrustedHTML `<cr-iconset name="ntp-promo" size="20">
  <svg>
    <defs>
      <g id="account-circle-custom" viewBox="0 -960 960 960"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"></path></g>
      <g id="my-extensions-custom" viewBox="0 -960 960 960"><path d="M216-135.869q-33.287 0-56.709-23.422-23.422-23.422-23.422-56.709v-172.304q37.609-2 63.218-28.424 25.608-26.424 25.608-63.272t-25.608-63.272q-25.609-26.424-63.218-28.424V-744q0-33.287 23.422-56.709 23.422-23.422 56.709-23.422h161.065q2.631-40.956 31.96-69.315 29.329-28.359 70.75-28.359t70.975 28.199q29.554 28.199 32.185 69.475H744q33.287 0 56.709 23.422 23.422 23.422 23.422 56.709v161.065q40.956 2.631 69.315 31.96 28.359 29.329 28.359 70.75t-28.199 70.975q-28.199 29.554-69.475 32.185V-216q0 33.287-23.422 56.709-23.422 23.422-56.709 23.422H216Zm2.87-83.001h522.26v-522.26H218.87v108.652q42.13 22.63 65.597 63.772 23.468 41.141 23.468 88.706 0 49.01-23.468 90.168Q261-348.674 218.87-327.283v108.413ZM480-480Z"></path></g>
      <g id="palette-custom" viewBox="0 -960 960 960"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"></path></g>
    </defs>
  </svg>
</cr-iconset>
`;
const iconsets = div.querySelectorAll('cr-iconset');
for (const iconset of iconsets) {
    document.head.appendChild(iconset);
}

let instance$7 = null;
function getCss$5() {
    return instance$7 || (instance$7 = [...[], css `:host{--ntp-promo-action-icon-foreground:var(--color-sys-on-surface-subtle);--ntp-promo-action-icon-image-size:24px;--ntp-promo-background-hovered:var(--color-sys-state-hover-on-subtle);--ntp-promo-background:var(--color-sys-surface3);--ntp-promo-border-radius:12px;--ntp-promo-element-spacing:16px;--ntp-promo-foreground:var(--color-sys-on-surface);--ntp-promo-icon-background:var(--color-sys-tonal-container);--ntp-promo-icon-border-radius:8px;--ntp-promo-icon-foreground:var(--color-sys-on-tonal-container);--ntp-promo-icon-image-size:20px;--ntp-promo-icon-size:40px;--ntp-promo-menu-button-foreground:var(--color-sys-on-surface-subtle);--ntp-promo-menu-button-image-size:24px;--ntp-promo-padding:16px;--ntp-promo-spacing:8px;--ntp-promo-text-line-height:20px;--ntp-promo-text-width:382px;align-items:center;display:none;justify-content:center;margin-block-start:30px;margin-inline:40px;position:relative}#promos{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--ntp-promo-spacing);justify-content:center}#promo{align-items:center;align-self:stretch;background-color:var(--ntp-promo-background);border:none;border-radius:var(--ntp-promo-border-radius);color:var(--ntp-promo-foreground);cursor:pointer;display:flex;flex-direction:row;font:inherit;gap:var(--ntp-promo-element-spacing);isolation:isolate;padding:var(--ntp-promo-padding);position:relative;text-align:start}#promo::before{background-color:transparent;border-radius:inherit;content:'';inset:0;position:absolute;z-index:-1}#promo:hover::before{background-color:var(--ntp-promo-background-hovered)}#bodyIcon{--iron-icon-height:var(--ntp-promo-icon-image-size);--iron-icon-width:var(--ntp-promo-icon-image-size);background-color:var(--ntp-promo-icon-background);border-radius:var(--ntp-promo-icon-border-radius);box-sizing:border-box;color:var(--ntp-promo-icon-foreground);display:inline-block;height:var(--ntp-promo-icon-size);margin:0;padding:calc((var(--ntp-promo-icon-size) - var(--ntp-promo-icon-image-size)) / 2);text-align:center;width:var(--ntp-promo-icon-size);flex:none}#bodyText{display:inline-block;line-height:var(--ntp-promo-text-line-height);margin-block:0;vertical-align:middle;width:var(--ntp-promo-text-width)}#actionIcon{--iron-icon-height:var(--ntp-promo-action-icon-image-size);--iron-icon-width:var(--ntp-promo-action-icon-image-size);background-color:transparent;box-sizing:border-box;color:var(--ntp-promo-action-icon-foreground);display:inline-block;flex:none;height:var(--ntp-promo-action-icon-image-size);margin:0;text-align:center;width:var(--ntp-promo-action-icon-image-size)}#actionIcon:dir(rtl){transform:scaleX(-1)}#menuButton{--cr-icon-button-fill-color:var(--ntp-promo-menu-button-foreground);--cr-icon-button-icon-size:var(--ntp-promo-menu-button-image-size);box-sizing:border-box;display:inline-block;flex:none;margin:0}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="promos">
  ${this.promo_ ? html `
    <button id="promo" @click="${this.onClick_.bind(this, this.promo_.id)}"
        aria-label="${this.promo_.buttonText}">
      <cr-icon id="bodyIcon" icon="ntp-promo:${this.promo_.iconName}"></cr-icon>
      <p id="bodyText" class="${this.getBodyTextCssClass_()}">
        ${this.promo_.bodyText}
      </p>
      <cr-icon id="actionIcon" icon="cr:chevron-right"></cr-icon>
      <cr-icon-button id="menuButton" iron-icon="cr:more-vert"
          @click="${this.onMenuButtonClick_}"
          aria-label="$i18n{ntpPromoMenuA11yLabel}"
          title="$i18n{ntpPromoMenu}">
      </cr-icon-button>
    </button>
    <cr-action-menu id="actionMenu">
      <button class="dropdown-item" @click="${this.onPromoDismissed_}">
        $i18n{ntpPromoDismiss}
      </button>
    </cr-action-menu>` : ''}
</div>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A component for displaying a single NTP Promo.
 */
class IndividualPromosElement extends CrLitElement {
    static get is() {
        return 'individual-promos';
    }
    static get styles() {
        return getCss$5();
    }
    render() {
        return getHtml$7.bind(this)();
    }
    static get properties() {
        return {
            promo_: { type: Object },
        };
    }
    #promo__accessor_storage = null;
    get promo_() { return this.#promo__accessor_storage; }
    set promo_(value) { this.#promo__accessor_storage = value; }
    handler_;
    callbackRouter_;
    listenerIds_ = [];
    notifiedShown_ = false;
    constructor() {
        super();
        this.handler_ = browserProxyFactory$1.getInstance().handler;
        this.callbackRouter_ = browserProxyFactory$1.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds_.push(this.callbackRouter_.setPromo.addListener(this.onSetPromo.bind(this)));
        this.handler_.requestPromos();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        for (const listenerId of this.listenerIds_) {
            this.callbackRouter_.removeListener(listenerId);
        }
        this.listenerIds_ = [];
    }
    // Public for testing purposes only.
    onSetPromo(promo) {
        this.promo_ = promo;
        if (this.promo_) {
            this.style.display = 'block';
        }
        else {
            this.style.display = 'none';
        }
        if (!this.notifiedShown_ && this.promo_) {
            this.notifiedShown_ = true;
            this.handler_.onPromoShown(this.promo_.id);
        }
    }
    onClick_(promoId) {
        assert(promoId, 'Button should not be able to display if no promoId.');
        this.handler_.onPromoClicked(promoId);
    }
    onMenuButtonClick_(e) {
        e.stopPropagation();
        this.shadowRoot.querySelector('#actionMenu').showAt(e.target);
    }
    onPromoDismissed_(e) {
        e.stopPropagation();
        this.shadowRoot.querySelector('#actionMenu').close();
        if (this.promo_) {
            this.handler_.onPromoDismissed(this.promo_.id);
            this.promo_ = null;
        }
    }
    getBodyTextCssClass_() {
        return 'singlePromo';
    }
}
customElements.define(IndividualPromosElement.is, IndividualPromosElement);

let instance$6 = null;
function getCss$4() {
    return instance$6 || (instance$6 = [...[getCss$s()], css `#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:var(--cr-toast-white-space,nowrap)}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6() {
    return html `
<cr-toast id="toast" .duration="${this.duration}">
  <div id="content" class="elided-text"></div>
  <slot id="slotted"></slot>
</cr-toast>`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Element which shows toasts with optional undo button. */
let toastManagerInstance = null;
function setInstance(instance) {
    assert(!instance || !toastManagerInstance);
    toastManagerInstance = instance;
}
class CrToastManagerElement extends CrLitElement {
    static get is() {
        return 'cr-toast-manager';
    }
    static get styles() {
        return getCss$4();
    }
    render() {
        return getHtml$6.bind(this)();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
            },
        };
    }
    #duration_accessor_storage = 0;
    get duration() { return this.#duration_accessor_storage; }
    set duration(value) { this.#duration_accessor_storage = value; }
    get isToastOpen() {
        return this.$.toast.open;
    }
    get slottedHidden() {
        return this.$.slotted.hidden;
    }
    connectedCallback() {
        super.connectedCallback();
        setInstance(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        setInstance(null);
    }
    /**
     * @param label The label to display inside the toast.
     */
    show(label, hideSlotted = false) {
        this.$.content.textContent = label;
        this.showInternal_(hideSlotted);
    }
    /**
     * Shows the toast, making certain text fragments collapsible.
     */
    showForStringPieces(pieces, hideSlotted = false) {
        const content = this.$.content;
        content.textContent = '';
        pieces.forEach(function (p) {
            if (p.value.length === 0) {
                return;
            }
            const span = document.createElement('span');
            span.textContent = p.value;
            if (p.collapsible) {
                span.classList.add('collapsible');
            }
            content.appendChild(span);
        });
        this.showInternal_(hideSlotted);
    }
    showInternal_(hideSlotted) {
        this.$.slotted.hidden = hideSlotted;
        this.$.toast.show();
    }
    hide() {
        this.$.toast.hide();
    }
}
customElements.define(CrToastManagerElement.is, CrToastManagerElement);

let instance$5 = null;
function getCss$3() {
    return instance$5 || (instance$5 = [...[getCss$t()], css `:host{display:flex}cr-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color,var(--google-grey-700))}@media (prefers-color-scheme:dark){cr-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color,var(--google-grey-500))}}`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5() {
    return html `
<cr-icon id="indicator" tabindex="0" aria-label="${this.iconAriaLabel}"
    aria-describedby="tooltip" icon="${this.iconClass}" role="img">
</cr-icon>
<cr-tooltip id="tooltip" for="indicator" position="${this.tooltipPosition}"
    fit-to-visible-bounds part="tooltip">
  <slot name="tooltip-text">${this.tooltipText}</slot>
</cr-tooltip>`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends CrLitElement {
    static get is() {
        return 'cr-tooltip-icon';
    }
    static get styles() {
        return getCss$3();
    }
    render() {
        return getHtml$5.bind(this)();
    }
    static get properties() {
        return {
            iconAriaLabel: { type: String },
            iconClass: { type: String },
            tooltipText: { type: String },
            /** Position of tooltip popup related to the icon. */
            tooltipPosition: { type: String },
        };
    }
    #iconAriaLabel_accessor_storage = '';
    get iconAriaLabel() { return this.#iconAriaLabel_accessor_storage; }
    set iconAriaLabel(value) { this.#iconAriaLabel_accessor_storage = value; }
    #iconClass_accessor_storage = '';
    get iconClass() { return this.#iconClass_accessor_storage; }
    set iconClass(value) { this.#iconClass_accessor_storage = value; }
    #tooltipText_accessor_storage = '';
    get tooltipText() { return this.#tooltipText_accessor_storage; }
    set tooltipText(value) { this.#tooltipText_accessor_storage = value; }
    #tooltipPosition_accessor_storage = 'top';
    get tooltipPosition() { return this.#tooltipPosition_accessor_storage; }
    set tooltipPosition(value) { this.#tooltipPosition_accessor_storage = value; }
    getFocusableElement() {
        return this.$.indicator;
    }
}
customElements.define(CrTooltipIconElement.is, CrTooltipIconElement);

let instance$4 = null;
function getCss$2() {
    return instance$4 || (instance$4 = [...[getCss$s()], css ``]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4() {
    return html `
<cr-tooltip-icon ?hidden="${!this.getIndicatorVisible_()}"
    tooltip-text="${this.getIndicatorTooltip_()}"
    icon-class="${this.getIndicatorIcon_()}"
    icon-aria-label="${this.iconAriaLabel}"
    tooltip-position="${this.tooltipPosition}">
</cr-tooltip-icon>`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Possible policy indicators that can be shown in settings.
 */
var CrPolicyIndicatorType;
(function (CrPolicyIndicatorType) {
    CrPolicyIndicatorType["DEVICE_POLICY"] = "devicePolicy";
    CrPolicyIndicatorType["EXTENSION"] = "extension";
    CrPolicyIndicatorType["NONE"] = "none";
    CrPolicyIndicatorType["OWNER"] = "owner";
    CrPolicyIndicatorType["PRIMARY_USER"] = "primary_user";
    CrPolicyIndicatorType["RECOMMENDED"] = "recommended";
    CrPolicyIndicatorType["USER_POLICY"] = "userPolicy";
    CrPolicyIndicatorType["PARENT"] = "parent";
    CrPolicyIndicatorType["CHILD_RESTRICTION"] = "childRestriction";
})(CrPolicyIndicatorType || (CrPolicyIndicatorType = {}));

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Lit element for indicating policies by type. */
class CrPolicyIndicatorElement extends CrLitElement {
    static get is() {
        return 'cr-policy-indicator';
    }
    static get styles() {
        return getCss$2();
    }
    render() {
        return getHtml$4.bind(this)();
    }
    static get properties() {
        return {
            iconAriaLabel: { type: String },
            /**
             * Which indicator type to show (or NONE).
             */
            indicatorType: { type: String },
            /**
             * The name associated with the policy source. See
             * chrome.settingsPrivate.PrefObject.controlledByName.
             */
            indicatorSourceName: { type: String },
            tooltipPosition: { type: String },
        };
    }
    #iconAriaLabel_accessor_storage = '';
    get iconAriaLabel() { return this.#iconAriaLabel_accessor_storage; }
    set iconAriaLabel(value) { this.#iconAriaLabel_accessor_storage = value; }
    #indicatorType_accessor_storage = CrPolicyIndicatorType.NONE;
    get indicatorType() { return this.#indicatorType_accessor_storage; }
    set indicatorType(value) { this.#indicatorType_accessor_storage = value; }
    #indicatorSourceName_accessor_storage = '';
    get indicatorSourceName() { return this.#indicatorSourceName_accessor_storage; }
    set indicatorSourceName(value) { this.#indicatorSourceName_accessor_storage = value; }
    #tooltipPosition_accessor_storage = 'top';
    get tooltipPosition() { return this.#tooltipPosition_accessor_storage; }
    set tooltipPosition(value) { this.#tooltipPosition_accessor_storage = value; }
    /**
     * @return True if the indicator should be shown.
     */
    getIndicatorVisible_() {
        return this.indicatorType !== CrPolicyIndicatorType.NONE;
    }
    /**
     * @return The iron-icon icon name.
     */
    getIndicatorIcon_() {
        switch (this.indicatorType) {
            case CrPolicyIndicatorType.EXTENSION:
                return 'cr:chrome-extension-filled';
            case CrPolicyIndicatorType.NONE:
                return '';
            case CrPolicyIndicatorType.PRIMARY_USER:
                return 'cr:group-filled';
            case CrPolicyIndicatorType.OWNER:
                return 'cr:person-filled';
            case CrPolicyIndicatorType.USER_POLICY:
            case CrPolicyIndicatorType.DEVICE_POLICY:
            case CrPolicyIndicatorType.RECOMMENDED:
                return 'cr20:domain';
            case CrPolicyIndicatorType.PARENT:
            case CrPolicyIndicatorType.CHILD_RESTRICTION:
                return 'cr20:family-link';
            default:
                assertNotReachedCase(this.indicatorType);
        }
    }
    /**
     * @param indicatorSourceName The name associated with the indicator.
     *     See chrome.settingsPrivate.PrefObject.controlledByName
     * @return The tooltip text for |type|.
     */
    getIndicatorTooltip_() {
        if (!window.CrPolicyStrings) {
            return '';
        } // Tooltips may not be defined, e.g. in OOBE.
        const CrPolicyStrings = window.CrPolicyStrings;
        switch (this.indicatorType) {
            case CrPolicyIndicatorType.EXTENSION:
                return this.indicatorSourceName.length > 0 ?
                    CrPolicyStrings.controlledSettingExtension.replace('$1', this.indicatorSourceName) :
                    CrPolicyStrings.controlledSettingExtensionWithoutName;
            // 
            case CrPolicyIndicatorType.USER_POLICY:
            case CrPolicyIndicatorType.DEVICE_POLICY:
                return CrPolicyStrings.controlledSettingPolicy;
            case CrPolicyIndicatorType.RECOMMENDED:
                return CrPolicyStrings.controlledSettingRecommendedDiffers;
            case CrPolicyIndicatorType.PARENT:
                return CrPolicyStrings.controlledSettingParent;
            case CrPolicyIndicatorType.CHILD_RESTRICTION:
                return CrPolicyStrings.controlledSettingChildRestriction;
            case CrPolicyIndicatorType.NONE:
            case CrPolicyIndicatorType.OWNER:
            case CrPolicyIndicatorType.PRIMARY_USER:
                return '';
            default:
                assertNotReachedCase(this.indicatorType);
        }
    }
}
customElements.define(CrPolicyIndicatorElement.is, CrPolicyIndicatorElement);

// components/ntp_tiles/tile_source.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
({ $: mojo.internal.Enum() });
var TileSource;
(function (TileSource) {
    TileSource[TileSource["MIN_VALUE"] = 0] = "MIN_VALUE";
    TileSource[TileSource["MAX_VALUE"] = 7] = "MAX_VALUE";
    TileSource[TileSource["TOP_SITES"] = 0] = "TOP_SITES";
    TileSource[TileSource["POPULAR"] = 1] = "POPULAR";
    TileSource[TileSource["POPULAR_BAKED_IN"] = 2] = "POPULAR_BAKED_IN";
    TileSource[TileSource["CUSTOM_LINKS"] = 3] = "CUSTOM_LINKS";
    TileSource[TileSource["ALLOWLIST"] = 4] = "ALLOWLIST";
    TileSource[TileSource["HOMEPAGE"] = 5] = "HOMEPAGE";
    TileSource[TileSource["ENTERPRISE_SHORTCUTS"] = 6] = "ENTERPRISE_SHORTCUTS";
    TileSource[TileSource["AI_MODE"] = 7] = "AI_MODE";
})(TileSource || (TileSource = {}));

let instance$3 = null;
function getCss$1() {
    return instance$3 || (instance$3 = [...[getCss$s(), getCss$r()], css `:host{--cr-tooltip-icon-fill-color:var(--cr-fallback-color-on-surface-subtle);--icon-button-color-active:var(--google-grey-700);--icon-button-color:var(--google-grey-600);--icon-size:var(--most-visited-icon-size,48px);--managed-tile-background-color:var(--cr-fallback-color-neutral-container);--tile-background-color:rgb(229,231,232);--tile-hover-color:rgba(var(--google-grey-900-rgb),.1);--tile-size:var(--most-visited-tile-size,112px);--title-height:var(--most-visited-title-height,32px)}@media (prefers-color-scheme:dark){:host{--tile-background-color:var(--google-grey-100)}}:host([is-dark_]){--icon-button-color-active:var(--google-grey-300);--icon-button-color:white;--tile-hover-color:rgba(255,255,255,.1)}#container{--content-width:calc(var(--column-count) * var(--tile-size) + max(0,var(--column-count) - 1) * var(--most-visited-gap,0px) + 1px);column-gap:var(--most-visited-gap,0);display:flex;flex-wrap:wrap;height:calc(var(--row-count) * var(--tile-size));justify-content:center;margin-bottom:8px;opacity:0;overflow:hidden;padding:2px;transition:opacity 300ms ease-in-out;width:calc(var(--content-width) + 12px)}:host([visible_]) #container{opacity:1}#addShortcutIcon,#showMoreIcon,#showLessIcon,.query-tile-icon{-webkit-mask-repeat:no-repeat;-webkit-mask-size:100%;height:24px;width:24px}.tile-icon-container{background-color:var(--add-shortcut-background-color,var(--tile-background-color));margin-inline-start:auto;margin-inline-end:auto}#addShortcutIcon{-webkit-mask-image:url(chrome://resources/images/add_old.svg);background-color:var(--add-shortcut-foreground-color,var(--google-grey-900))}#showMoreIcon{-webkit-mask-image:url(chrome://resources/cr_components/most_visited/expand_content_old.svg);background-color:var(--add-shortcut-foreground-color,var(--google-grey-900))}#showLessIcon{-webkit-mask-image:url(chrome://resources/cr_components/most_visited/collapse_content_old.svg);background-color:var(--add-shortcut-foreground-color,var(--google-grey-900))}.query-tile-icon{-webkit-mask-image:url(chrome://resources/images/icon_search.svg);background-color:var(--google-grey-700)}:host([use-white-tile-icon_]) #addShortcutIcon,:host([use-white-tile-icon_]) #showMoreIcon,:host([use-white-tile-icon_]) #showLessIcon{background-color:white}:host([use-white-tile-icon_]) .query-tile-icon{background-color:var(--google-grey-400)}.tile,#addShortcut,#showMore,#showLess{-webkit-app-region:no-drag;-webkit-tap-highlight-color:transparent;align-items:center;border-radius:4px;box-sizing:border-box;cursor:pointer;display:flex;flex-direction:column;height:var(--tile-size);opacity:1;outline:none;position:relative;text-decoration:none;transition-duration:300ms;transition-property:left,top;transition-timing-function:ease-in-out;user-select:none;width:var(--tile-size)}.tile a{border-radius:4px;display:inline-block;height:100%;outline:none;position:absolute;touch-action:none;width:100%}:host-context(.focus-outline-visible):host(:not([hide-title]):not([non-editable])) .tile a:focus,:host-context(.focus-outline-visible):host([hide-title]) .tile a:focus~.tile-icon,:host-context(.focus-outline-visible):host([non-editable]) .tile a:focus~.tile-icon,:host-context(.focus-outline-visible) #addShortcut:focus,:host-context(.focus-outline-visible) #showMore:focus,:host-context(.focus-outline-visible) #showLess:focus{box-shadow:var(--most-visited-focus-shadow)}#addShortcut,#showMore,#showLess{--cr-hover-background-color:transparent;background-color:transparent;border:none;box-shadow:none;justify-content:unset;padding:0}:host(:not([reordering_])) .tile:hover,:host(:not([reordering_])) #addShortcut:hover,:host(:not([reordering_])) #showMore:hover,:host(:not([reordering_])) #showLess:hover,.force-hover{background-color:var(--tile-hover-color)}@media (forced-colors:active){#addShortcutIcon,#showMoreIcon,#showLessIcon,:host([use-white-tile-icon_]) #addShortcutIcon,:host([use-white-tile-icon_]) #showMoreIcon,:host([use-white-tile-icon_]) #showLessIcon,.query-tile-icon{background-color:ButtonText}:host-context(.focus-outline-visible):host(:not([hide-title]):not([non-editable])) .tile a:focus,:host-context(.focus-outline-visible):host([hide-title]) .tile a:focus~.tile-icon,:host-context(.focus-outline-visible):host([non-editable]) .tile a:focus~.tile-icon,:host-context(.focus-outline-visible) #addShortcut:focus,:host-context(.focus-outline-visible) #showMore:focus,:host-context(.focus-outline-visible) #showLess:focus{outline:var(--cr-focus-outline-hcm)}:host(:not([reordering_])) .tile:hover,:host(:not([reordering_])) #addShortcut:hover,:host(:not([reordering_])) #showMore:hover,:host(:not([reordering_])) #showLess:hover,.force-hover{outline:1px solid Highlight;outline-offset:-1px}.tile-icon{background-color:Canvas;border:1px solid CanvasText;box-sizing:border-box}.tile-icon-container{background-color:ButtonFace;border-color:ButtonText}#addShortcut:hover .tile-icon-container,#showMore:hover .tile-icon-container,#showLess:hover .tile-icon-container{background-color:Highlight;border-color:Highlight}#addShortcut:hover #addShortcutIcon,#showMore:hover #showMoreIcon,#showLess:hover #showLessIcon{background-color:HighlightText}.tile-title{color:CanvasText}:host(:not([reordering_])) cr-icon-button:hover{outline:1px solid Highlight;outline-offset:-1px}}.tile-icon{align-items:center;background-color:var(--tile-background-color);border-radius:50%;display:flex;flex-shrink:0;height:var(--icon-size);justify-content:center;margin-top:var(--most-visited-icon-margin-top,16px);width:var(--icon-size)}.tile-icon img{height:24px;width:24px}.managed-tile-icon{align-items:center;background-color:var(--managed-tile-background-color);border-radius:50%;display:flex;flex-shrink:0;height:24px;justify-content:center;left:var(--most-visited-managed-icon-left,68px);position:absolute;top:var(--most-visited-managed-icon-top,40px);width:24px}cr-policy-indicator{--cr-icon-size:16px}.tile-title{align-items:center;border-radius:calc(var(--title-height) / 2 + 2px);color:var(--most-visited-text-color);display:flex;font-size:var(--most-visited-title-font-size,inherit);height:var(--title-height);line-height:var(--most-visited-title-line-height,calc(var(--title-height) / 2));margin-top:var(--most-visited-title-margin-top,6px);max-width:calc(var(--tile-size) - 10px);padding:2px 8px}.tile-title span{font-weight:400;overflow:hidden;text-align:center;text-overflow:ellipsis;text-shadow:var(--most-visited-text-shadow);white-space:nowrap;width:100%}.tile[query-tile] .tile-title span{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;white-space:initial}.title-rtl{direction:rtl}.title-ltr{direction:ltr}:host([hide-title]) #container,:host([non-editable]) #container{margin-bottom:0;padding:0;width:var(--content-width)}:host([hide-title]) .tile-title{display:none}:host([hide-title]) .tile,:host([hide-title]) #addShortcut,:host([hide-title]) #showMore,:host([hide-title]) #showLess{justify-content:center}:host([hide-title]) .tile-icon{margin:0}.tile.dragging{background-color:var(--tile-hover-color);transition-property:none;z-index:2}cr-icon-button{--cr-icon-button-fill-color:var(--icon-button-color);--cr-icon-button-size:28px;--cr-icon-button-transition:none;margin:4px 2px;opacity:0;position:absolute;right:0;top:0;transition:opacity 100ms ease-in-out}:host-context([dir=rtl]) cr-icon-button{left:0;right:unset}:host(:not([reordering_])) .tile:hover cr-icon-button,.force-hover cr-icon-button{opacity:1;transition-delay:400ms}:host(:not([reordering_])) cr-icon-button:active,:host-context(.focus-outline-visible):host(:not([reordering_])) cr-icon-button:focus,:host(:not([reordering_])) cr-icon-button:hover{--cr-icon-button-fill-color:var(--icon-button-color-active);opacity:1;transition-delay:0s}#dialogContent{height:160px}#dialogContent:has(#policySubtitleContainer:not([hidden])){height:196px}#policySubtitleContainer{--iron-icon-height:20px;--iron-icon-width:20px;gap:10px;display:flex;margin-bottom:16px}cr-toast-manager{--cr-toast-white-space:normal}:host-context([webui-rounded-icons]) #addShortcutIcon{-webkit-mask-image:url(chrome://resources/images/add.svg)}:host-context([webui-rounded-icons]) #showMoreIcon{-webkit-mask-image:url(chrome://resources/cr_components/most_visited/expand_content.svg)}:host-context([webui-rounded-icons]) #showLessIcon{-webkit-mask-image:url(chrome://resources/cr_components/most_visited/collapse_content.svg)}

`]);
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3() {
    // clang-format off
    return html `<!--_html_template_start_-->
<div id="container" ?hidden="${!this.visible_}"
    role="${this.inReorderMode_ ? 'application' : nothing}"
    .style="--tile-background-color: ${this.getBackgroundColorStyle_()};
            --column-count: ${this.columnCount_};
            --row-count: ${this.rowCount_};">
  ${this.tiles_.map((item, index) => html `
    <div class="tile" ?query-tile="${item.isQueryTile}"
        ?hidden="${this.isHidden_(index)}" title="${item.title}"
        @dragstart="${this.onDragstart_}" @touchstart="${this.onTouchstart_}"
        @click="${this.onTileClick_}" @mouseenter="${this.onTileMouseenter_}"
        @mouseleave="${this.onTileMouseleave_}"
        @mousedown="${this.onTileMousedown_}" @keydown="${this.onTileKeydown_}"
        draggable="${!this.nonEditable}" data-index="${index}">
      <a href="${this.inReorderMode_ ? '' : item.url}"
          aria-label="${this.getTileAriaLabel_(item.title)}" draggable="false">
      </a>
      <cr-icon-button id="actionMenuButton" class="icon-more-vert"
          title="${this.getMoreActionText_(item.title)}"
          @click="${this.onTileActionButtonClick_}" tabindex="0"
          ?hidden="${this.nonEditable ||
        (!this.customLinksEnabled_ &&
            !this.isFromEnterpriseShortcut_(item.source))}"
          ?disabled="${this.inReorderMode_}" data-index="${index}">
      </cr-icon-button>
      <cr-icon-button id="removeButton" class="icon-clear"
          title="${this.getRemoveButtonText_(item.title)}"
          @click="${this.onTileRemoveButtonClick_}" tabindex="0"
          ?hidden="${this.nonEditable ||
        (this.customLinksEnabled_ ||
            this.isFromEnterpriseShortcut_(item.source))}"
          ?disabled="${this.inReorderMode_}" data-index="${index}">
      </cr-icon-button>
      <div class="tile-icon">
        <img src="${this.getFaviconUrl_(item.url)}" draggable="false"
            ?hidden="${item.isQueryTile}" alt="">
        <div class="query-tile-icon" draggable="false"
            ?hidden="${!item.isQueryTile}">
        </div>
        <div class="managed-tile-icon"
            ?hidden="${!this.isFromEnterpriseShortcut_(item.source)}">
          <cr-policy-indicator indicator-type="userPolicy">
          </cr-policy-indicator>
        </div>
      </div>
      <div class="tile-title ${this.getTileTitleDirectionClass_(item)}"
          ?hidden="${this.hideTitle}">
        <span>${item.title}</span>
      </div>
    </div>
  `)}
  <cr-button id="addShortcut" tabindex="0" @click="${this.onAddClick_}"
      ?hidden="${!this.showAdd_}" ?disabled="${this.inReorderMode_}"
      @keydown="${this.onAddShortcutKeydown_}"
      aria-label="${this.i18n('addLinkTitle')}"
      title="${this.i18n('addLinkTitle')}" noink>
    <div class="tile-icon tile-icon-container">
      <div id="addShortcutIcon" draggable="false"></div>
    </div>
    <div class="tile-title" ?hidden="${this.hideTitle}">
      <span>${this.i18n('addLinkTitle')}</span>
    </div>
  </cr-button>
  <div>
    <cr-button id="showMore" tabindex="0" @click="${this.onShowMoreClick_}"
        ?hidden="${!this.showShowMore_}" ?disabled="${this.inReorderMode_}"
        @keydown="${this.onShowMoreKeydown_}"
        aria-label="${this.i18n('showMore')}" title="${this.i18n('showMore')}"
        noink>
      <div class="tile-icon tile-icon-container">
        <div id="showMoreIcon" draggable="false"></div>
      </div>
      <div class="tile-title" ?hidden="${this.hideTitle}">
        <span>${this.i18n('showMore')}</span>
      </div>
    </cr-button>
    <cr-button id="showLess" tabindex="0" @click="${this.onShowLessClick_}"
        ?hidden="${!this.showShowLess_}" ?disabled="${this.inReorderMode_}"
        @keydown="${this.onShowLessKeydown_}"
        aria-label="${this.i18n('showLess')}" title="${this.i18n('showLess')}"
        noink>
      <div class="tile-icon tile-icon-container">
        <div id="showLessIcon" draggable="false"></div>
      </div>
      <div class="tile-title" ?hidden="${this.hideTitle}">
        <span>${this.i18n('showLess')}</span>
      </div>
    </cr-button>
  </div>
  <cr-dialog id="dialog" consume-keydown-event
      @keydown="${this.onDialogKeydown_}" @close="${this.onDialogClose_}">
    <div slot="title">${this.dialogTitle_}</div>
    <div slot="body" id="dialogContent">
      ${this.isFromEnterpriseShortcut_(this.dialogSource_) ? html `
        <div id="policySubtitleContainer">
          <cr-icon icon="cr:domain"></cr-icon>
          <span class="secondary">
            ${this.i18n('enterpriseShortcutSubtitle')}
          </span>
        </div>
      ` : ''}
      <cr-input id="dialogInputName" label="${this.i18n('nameField')}"
          .value="${this.dialogTileTitle_}"
          ?readonly="${this.dialogIsReadonly_}" spellcheck="false" autofocus
          @value-changed="${this.onDialogTileNameValueChanged_}">
      </cr-input>
      <cr-input id="dialogInputUrl" label="${this.i18n('urlField')}"
          .value="${this.dialogTileUrl_}"
          ?invalid="${this.dialogTileUrlInvalid_}"
          .errorMessage="${this.dialogTileUrlError_}" spellcheck="false"
          type="url" @blur="${this.onDialogTileUrlBlur_}"
          @value-changed="${this.onDialogTileUrlValueChanged_}"
          ?readonly="${this.dialogIsReadonly_ ||
        this.isFromEnterpriseShortcut_(this.dialogSource_)}">
      </cr-input>
    </div>
    <div slot="button-container">
      <cr-button class="cancel-button" @click="${this.onDialogCancelClick_}"
          ?hidden="${this.dialogIsReadonly_}">
        ${this.i18n('linkCancel')}
      </cr-button>
      <cr-button class="action-button" @click="${this.onSaveClick_}"
          ?disabled="${this.dialogSaveDisabled_}">
        ${this.i18n('linkDone')}
      </cr-button>
    </div>
  </cr-dialog>
  <cr-action-menu id="actionMenu">
    <button id="actionMenuViewOrEdit" class="dropdown-item"
        @click="${this.onViewOrEditClick_}">
      ${this.actionMenuViewOrEditTitle_}
    </button>
    ${this.shortcutsReorderEnabled ? html `
      <button id="actionMenuReorder" class="dropdown-item"
          @click="${this.onReorderClick_}">
        ${this.i18n('shortcutReorder')}
      </button>
    ` : ''}
    <button id="actionMenuRemove" class="dropdown-item"
        @click="${this.onRemoveClick_}"
        ?disabled="${this.actionMenuRemoveDisabled_}">
      ${this.i18n('linkRemove')}
    </button>
  </cr-action-menu>
</div>
<cr-toast-manager id="toastManager" duration="10000">
  <cr-button id="undo" aria-label="${this.i18n('undoDescription')}"
      @click="${this.onUndoClick_}">
    ${this.i18n('undo')}
  </cr-button>
  <cr-button id="restore" aria-label="${this.getRestoreButtonText_()}"
      @click="${this.onRestoreDefaultsClick_}">
    ${this.getRestoreButtonText_()}
  </cr-button>
</cr-toast-manager>
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Abstracts built-in JS functions in order to mock in tests.
 */
class MostVisitedWindowProxy {
    matchMedia(query) {
        return window.matchMedia(query);
    }
    now() {
        return Date.now();
    }
    static getInstance() {
        return instance$2 || (instance$2 = new MostVisitedWindowProxy());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function resetTilePosition(tile) {
    tile.style.position = '';
    tile.style.left = '';
    tile.style.top = '';
}
function setTilePosition(tile, { x, y }) {
    tile.style.position = 'fixed';
    tile.style.left = `${x}px`;
    tile.style.top = `${y}px`;
}
function getHitIndex(rects, x, y) {
    return rects.findIndex(r => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
}
/**
 * Returns null if URL is not valid.
 */
function normalizeUrl(urlString) {
    try {
        const url = new URL(urlString.includes('://') ? urlString : `https://${urlString}/`);
        if (['http:', 'https:'].includes(url.protocol)) {
            return url;
        }
    }
    catch (e) {
    }
    return null;
}
const MostVisitedElementBase = I18nMixinLit(CrLitElement);
class MostVisitedElement extends MostVisitedElementBase {
    static get is() {
        return 'cr-most-visited';
    }
    static get styles() {
        return getCss$1();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    static get properties() {
        return {
            theme: { type: Object },
            /**
             * If true, disables editing/removing shortcuts, hides action buttons and
             * the add shortcut button, and prevents tile dragging.
             */
            nonEditable: {
                type: Boolean,
                reflect: true,
            },
            /** If true, hides the text title under each tile/button. */
            hideTitle: {
                type: Boolean,
                reflect: true,
            },
            /**
             * If true, renders MV tiles in a single row up to 10 columns wide.
             * If false, renders MV tiles in up to 2 rows up to 5 columns wide.
             */
            singleRow: { type: Boolean },
            /** If true, reflows tiles that are overflowing. */
            reflowOnOverflow: { type: Boolean },
            /**
             * When the tile icon background is dark, the icon color is white for
             * contrast. This can be used to determine the color of the tile hover as
             * well.
             */
            useWhiteTileIcon_: {
                type: Boolean,
                reflect: true,
            },
            columnCount_: { type: Number, state: true },
            rowCount_: { type: Number, state: true },
            customLinksEnabled_: {
                type: Boolean,
                reflect: true,
            },
            enterpriseShortcutsEnabled_: {
                type: Boolean,
                reflect: true,
            },
            dialogTileTitle_: { type: String, state: true },
            dialogTileUrl_: { type: String, state: true },
            dialogTileUrlInvalid_: { type: Boolean, state: true },
            dialogTitle_: { type: String, state: true },
            dialogSaveDisabled_: { type: Boolean, state: true },
            dialogShortcutAlreadyExists_: { type: Boolean, state: true },
            dialogTileUrlError_: { type: String, state: true },
            dialogIsReadonly_: { type: Boolean, state: true },
            dialogSource_: { type: Number, state: true },
            info_: { type: Object, state: true },
            actionMenuRemoveDisabled_: { type: Boolean, state: true },
            actionMenuViewOrEditTitle_: { type: String, state: true },
            isDark_: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Used to hide hover style and cr-icon-button of tiles while the tiles
             * are being reordered.
             */
            reordering_: {
                type: Boolean,
                reflect: true,
            },
            maxTiles_: { type: Number, state: true },
            maxVisibleTiles_: { type: Number, state: true },
            showAdd_: { type: Boolean, state: true },
            maxVisibleColumnCount_: { type: Number, state: true },
            tiles_: { type: Array, state: true },
            toastSource_: { type: Number, state: true },
            expandableTilesEnabled: { type: Boolean, reflect: true },
            shortcutsReorderEnabled: { type: Boolean, reflect: true },
            maxTilesInCollapsedState: { type: Number, reflect: true },
            maxShortcutsInExpandedState: { type: Number, reflect: true },
            maxMostVisitedTilesInExpandedState: { type: Number, reflect: true },
            maxEnterpriseShortcuts: { type: Number, reflect: true },
            /**
             * If greater than 0, caps the total number of tiles to this value.
             */
            maxTiles: { type: Number, reflect: true },
            showAll_: { type: Boolean, state: true },
            showShowMore_: { type: Boolean, state: true },
            showShowLess_: { type: Boolean, state: true },
            visible_: {
                type: Boolean,
                reflect: true,
            },
            inReorderMode_: { type: Boolean, reflect: true },
            /**
             * The width of the element's container. If null, the window's width is
             * used for calculating the number of MVTs per row.
             */
            containerWidth: { type: Number },
        };
    }
    #theme_accessor_storage = null;
    get theme() { return this.#theme_accessor_storage; }
    set theme(value) { this.#theme_accessor_storage = value; }
    #nonEditable_accessor_storage = false;
    get nonEditable() { return this.#nonEditable_accessor_storage; }
    set nonEditable(value) { this.#nonEditable_accessor_storage = value; }
    #hideTitle_accessor_storage = false;
    get hideTitle() { return this.#hideTitle_accessor_storage; }
    set hideTitle(value) { this.#hideTitle_accessor_storage = value; }
    #reflowOnOverflow_accessor_storage = false;
    get reflowOnOverflow() { return this.#reflowOnOverflow_accessor_storage; }
    set reflowOnOverflow(value) { this.#reflowOnOverflow_accessor_storage = value; }
    #singleRow_accessor_storage = false;
    get singleRow() { return this.#singleRow_accessor_storage; }
    set singleRow(value) { this.#singleRow_accessor_storage = value; }
    #expandableTilesEnabled_accessor_storage = false;
    get expandableTilesEnabled() { return this.#expandableTilesEnabled_accessor_storage; }
    set expandableTilesEnabled(value) { this.#expandableTilesEnabled_accessor_storage = value; }
    #shortcutsReorderEnabled_accessor_storage = false;
    get shortcutsReorderEnabled() { return this.#shortcutsReorderEnabled_accessor_storage; }
    set shortcutsReorderEnabled(value) { this.#shortcutsReorderEnabled_accessor_storage = value; }
    #maxTilesInCollapsedState_accessor_storage = 6;
    get maxTilesInCollapsedState() { return this.#maxTilesInCollapsedState_accessor_storage; }
    set maxTilesInCollapsedState(value) { this.#maxTilesInCollapsedState_accessor_storage = value; }
    #maxShortcutsInExpandedState_accessor_storage = 10;
    get maxShortcutsInExpandedState() { return this.#maxShortcutsInExpandedState_accessor_storage; }
    set maxShortcutsInExpandedState(value) { this.#maxShortcutsInExpandedState_accessor_storage = value; }
    #maxMostVisitedTilesInExpandedState_accessor_storage = 8;
    get maxMostVisitedTilesInExpandedState() { return this.#maxMostVisitedTilesInExpandedState_accessor_storage; }
    set maxMostVisitedTilesInExpandedState(value) { this.#maxMostVisitedTilesInExpandedState_accessor_storage = value; }
    #maxEnterpriseShortcuts_accessor_storage = 10;
    get maxEnterpriseShortcuts() { return this.#maxEnterpriseShortcuts_accessor_storage; }
    set maxEnterpriseShortcuts(value) { this.#maxEnterpriseShortcuts_accessor_storage = value; }
    #maxTiles_accessor_storage = 0;
    get maxTiles() { return this.#maxTiles_accessor_storage; }
    set maxTiles(value) { this.#maxTiles_accessor_storage = value; }
    #containerWidth_accessor_storage = null;
    get containerWidth() { return this.#containerWidth_accessor_storage; }
    set containerWidth(value) { this.#containerWidth_accessor_storage = value; }
    #showAll__accessor_storage = false;
    get showAll_() { return this.#showAll__accessor_storage; }
    set showAll_(value) { this.#showAll__accessor_storage = value; }
    #showShowMore__accessor_storage = false;
    get showShowMore_() { return this.#showShowMore__accessor_storage; }
    set showShowMore_(value) { this.#showShowMore__accessor_storage = value; }
    #showShowLess__accessor_storage = false;
    get showShowLess_() { return this.#showShowLess__accessor_storage; }
    set showShowLess_(value) { this.#showShowLess__accessor_storage = value; }
    #inReorderMode__accessor_storage = false;
    get inReorderMode_() { return this.#inReorderMode__accessor_storage; }
    set inReorderMode_(value) { this.#inReorderMode__accessor_storage = value; }
    #useWhiteTileIcon__accessor_storage = false;
    get useWhiteTileIcon_() { return this.#useWhiteTileIcon__accessor_storage; }
    set useWhiteTileIcon_(value) { this.#useWhiteTileIcon__accessor_storage = value; }
    #columnCount__accessor_storage = 3;
    get columnCount_() { return this.#columnCount__accessor_storage; }
    set columnCount_(value) { this.#columnCount__accessor_storage = value; }
    #rowCount__accessor_storage = 1;
    get rowCount_() { return this.#rowCount__accessor_storage; }
    set rowCount_(value) { this.#rowCount__accessor_storage = value; }
    #customLinksEnabled__accessor_storage = false;
    get customLinksEnabled_() { return this.#customLinksEnabled__accessor_storage; }
    set customLinksEnabled_(value) { this.#customLinksEnabled__accessor_storage = value; }
    #enterpriseShortcutsEnabled__accessor_storage = false;
    get enterpriseShortcutsEnabled_() { return this.#enterpriseShortcutsEnabled__accessor_storage; }
    set enterpriseShortcutsEnabled_(value) { this.#enterpriseShortcutsEnabled__accessor_storage = value; }
    #dialogTileTitle__accessor_storage = '';
    get dialogTileTitle_() { return this.#dialogTileTitle__accessor_storage; }
    set dialogTileTitle_(value) { this.#dialogTileTitle__accessor_storage = value; }
    #dialogTileUrl__accessor_storage = '';
    get dialogTileUrl_() { return this.#dialogTileUrl__accessor_storage; }
    set dialogTileUrl_(value) { this.#dialogTileUrl__accessor_storage = value; }
    #dialogTileUrlInvalid__accessor_storage = false;
    get dialogTileUrlInvalid_() { return this.#dialogTileUrlInvalid__accessor_storage; }
    set dialogTileUrlInvalid_(value) { this.#dialogTileUrlInvalid__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    #dialogSaveDisabled__accessor_storage = true;
    get dialogSaveDisabled_() { return this.#dialogSaveDisabled__accessor_storage; }
    set dialogSaveDisabled_(value) { this.#dialogSaveDisabled__accessor_storage = value; }
    #dialogShortcutAlreadyExists__accessor_storage = false;
    get dialogShortcutAlreadyExists_() { return this.#dialogShortcutAlreadyExists__accessor_storage; }
    set dialogShortcutAlreadyExists_(value) { this.#dialogShortcutAlreadyExists__accessor_storage = value; }
    #dialogTileUrlError__accessor_storage = '';
    get dialogTileUrlError_() { return this.#dialogTileUrlError__accessor_storage; }
    set dialogTileUrlError_(value) { this.#dialogTileUrlError__accessor_storage = value; }
    #dialogIsReadonly__accessor_storage = false;
    get dialogIsReadonly_() { return this.#dialogIsReadonly__accessor_storage; }
    set dialogIsReadonly_(value) { this.#dialogIsReadonly__accessor_storage = value; }
    #dialogSource__accessor_storage = TileSource.CUSTOM_LINKS;
    get dialogSource_() { return this.#dialogSource__accessor_storage; }
    set dialogSource_(value) { this.#dialogSource__accessor_storage = value; }
    #actionMenuRemoveDisabled__accessor_storage = false;
    get actionMenuRemoveDisabled_() { return this.#actionMenuRemoveDisabled__accessor_storage; }
    set actionMenuRemoveDisabled_(value) { this.#actionMenuRemoveDisabled__accessor_storage = value; }
    #actionMenuViewOrEditTitle__accessor_storage = '';
    get actionMenuViewOrEditTitle_() { return this.#actionMenuViewOrEditTitle__accessor_storage; }
    set actionMenuViewOrEditTitle_(value) { this.#actionMenuViewOrEditTitle__accessor_storage = value; }
    #isDark__accessor_storage = false;
    get isDark_() { return this.#isDark__accessor_storage; }
    set isDark_(value) { this.#isDark__accessor_storage = value; }
    #reordering__accessor_storage = false;
    get reordering_() { return this.#reordering__accessor_storage; }
    set reordering_(value) { this.#reordering__accessor_storage = value; }
    #maxTiles__accessor_storage = 0;
    get maxTiles_() { return this.#maxTiles__accessor_storage; }
    set maxTiles_(value) { this.#maxTiles__accessor_storage = value; }
    #maxVisibleTiles__accessor_storage = 0;
    get maxVisibleTiles_() { return this.#maxVisibleTiles__accessor_storage; }
    set maxVisibleTiles_(value) { this.#maxVisibleTiles__accessor_storage = value; }
    #showAdd__accessor_storage = false;
    get showAdd_() { return this.#showAdd__accessor_storage; }
    set showAdd_(value) { this.#showAdd__accessor_storage = value; }
    #maxVisibleColumnCount__accessor_storage = 0;
    get maxVisibleColumnCount_() { return this.#maxVisibleColumnCount__accessor_storage; }
    set maxVisibleColumnCount_(value) { this.#maxVisibleColumnCount__accessor_storage = value; }
    #tiles__accessor_storage = [];
    get tiles_() { return this.#tiles__accessor_storage; }
    set tiles_(value) { this.#tiles__accessor_storage = value; }
    #toastSource__accessor_storage = TileSource.CUSTOM_LINKS;
    get toastSource_() { return this.#toastSource__accessor_storage; }
    set toastSource_(value) { this.#toastSource__accessor_storage = value; }
    #visible__accessor_storage = false;
    get visible_() { return this.#visible__accessor_storage; }
    set visible_(value) { this.#visible__accessor_storage = value; }
    adding_ = false;
    isTileMoveInProgress_ = false;
    browserProxy_;
    windowProxy_;
    actionMenuTargetIndex_ = -1;
    dragOffset_;
    tileRects_ = [];
    isRtl_ = false;
    mediaEventTracker_;
    eventTracker_;
    boundOnDocumentKeyDown_ = (_e) => null;
    prefetchTimer_ = null;
    preconnectTimer_ = null;
    dragImage_;
    mostVisitedHighDpiFaviconsEnabled_ = loadTimeData.getBoolean('mostVisitedHighDpiFaviconsEnabled');
    #info__accessor_storage = null;
    get info_() { return this.#info__accessor_storage; }
    set info_(value) { this.#info__accessor_storage = value; }
    get tileElements_() {
        return Array.from(this.shadowRoot.querySelectorAll('.tile:not([hidden])'));
    }
    constructor() {
        performance.mark('most-visited-creation-start');
        super();
        this.browserProxy_ = browserProxyFactory$2.getInstance();
        this.windowProxy_ = MostVisitedWindowProxy.getInstance();
        // Position of the mouse with respect to the top-left corner of the tile
        // being dragged.
        this.dragOffset_ = null;
        // Create a transparent 1x1 pixel image that will replace the default drag
        // "ghost" image. The image is preloaded to ensure it's available when
        // dragging starts.
        this.dragImage_ = new Image(1, 1);
        this.dragImage_.src =
            'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAA' +
                'ABAAEAAAICTAEAOw==';
        this.mediaEventTracker_ = new EventTracker();
        this.eventTracker_ = new EventTracker();
    }
    connectedCallback() {
        super.connectedCallback();
        this.isRtl_ = window.getComputedStyle(this)['direction'] === 'rtl';
        this.onSingleRowChange_();
        this.browserProxy_.callbackRouter.setMostVisitedInfo.addListener(info => {
            performance.measure('most-visited-mojo', 'most-visited-mojo-start');
            this.info_ = info;
        });
        this.browserProxy_.callbackRouter.onMostVisitedTilesAutoRemoval.addListener(() => {
            this.autoRemovalToast_();
        });
        this.browserProxy_.handler.getMostVisitedExpandedState().then(({ isExpanded }) => {
            this.showAll_ = isExpanded;
        });
        performance.mark('most-visited-mojo-start');
        this.eventTracker_.add(document, 'visibilitychange', () => {
            // This updates the most visited tiles every time the NTP tab gets
            // activated.
            if (document.visibilityState === 'visible') {
                this.browserProxy_.handler.updateMostVisitedInfo();
            }
        });
        this.eventTracker_.add(document, 'click', (e) => this.onDocumentClick_(e));
        this.browserProxy_.handler.updateMostVisitedInfo();
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.mediaEventTracker_.removeAll();
        this.eventTracker_.removeAll();
        this.ownerDocument.removeEventListener('keydown', this.boundOnDocumentKeyDown_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('theme')) {
            this.useWhiteTileIcon_ = this.computeUseWhiteTileIcon_();
            this.isDark_ = this.computeIsDark_();
        }
        // Re-slice `tiles_` when `maxTiles` updates dynamically.
        if ((changedPrivateProperties.has('info_') ||
            changedProperties.has('maxTiles')) &&
            this.info_ !== null) {
            this.visible_ = this.info_.visible;
            this.customLinksEnabled_ = this.info_.customLinksEnabled;
            this.enterpriseShortcutsEnabled_ = this.info_.enterpriseShortcutsEnabled;
            const totalMax = (this.customLinksEnabled_ ? this.maxShortcutsInExpandedState :
                this.maxMostVisitedTilesInExpandedState) +
                (this.enterpriseShortcutsEnabled_ ? this.maxEnterpriseShortcuts : 0);
            this.maxTiles_ =
                this.maxTiles > 0 ? Math.min(this.maxTiles, totalMax) : totalMax;
            this.tiles_ = this.info_.tiles.slice(0, this.maxTiles_);
        }
        this.showShowMore_ = this.computeShowShowMore_();
        this.showShowLess_ = this.computeShowShowLess_();
        this.showAdd_ = this.computeShowAdd_();
        this.columnCount_ = this.computeColumnCount_();
        this.rowCount_ = this.computeRowCount_();
        if (changedPrivateProperties.has('tiles_') ||
            changedPrivateProperties.has('dialogTileUrl_')) {
            this.dialogShortcutAlreadyExists_ =
                this.computeDialogShortcutAlreadyExists_();
        }
        if (changedPrivateProperties.has('dialogShortcutAlreadyExists_')) {
            this.dialogTileUrlError_ = this.computeDialogTileUrlError_();
        }
        if (changedPrivateProperties.has('dialogTitle_') ||
            changedPrivateProperties.has('dialogTileUrl_')) {
            this.dialogSaveDisabled_ = this.computeDialogSaveDisabled_();
        }
    }
    firstUpdated() {
        this.boundOnDocumentKeyDown_ = e => this.onDocumentKeyDown_(e);
        this.ownerDocument.addEventListener('keydown', this.boundOnDocumentKeyDown_);
        performance.measure('most-visited-creation', 'most-visited-creation-start');
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.maxVisibleTiles_ = this.computeMaxVisibleTiles_();
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('singleRow') ||
            changedProperties.has('containerWidth')) {
            this.onSingleRowChange_();
        }
        if (changedPrivateProperties.has('tiles_')) {
            if (this.tiles_.length > 0) {
                this.onTilesRendered_();
            }
        }
    }
    getBackgroundColorStyle_() {
        const skColor = this.theme ? this.theme.backgroundColor : null;
        return skColor ? skColorToRgba(skColor) : 'inherit';
    }
    // Adds "force-hover" class to the tile element positioned at `index`.
    enableForceHover_(index) {
        this.tileElements_[index].classList.add('force-hover');
    }
    clearForceHover_() {
        const forceHover = this.shadowRoot.querySelector('.force-hover');
        if (forceHover) {
            forceHover.classList.remove('force-hover');
        }
    }
    computeColumnCount_() {
        const shortcutCount = this.tiles_ ? this.tiles_.length : 0;
        const canShowAdd = this.expandableTilesEnabled ?
            this.showAdd_ :
            !this.nonEditable && this.maxTiles_ > shortcutCount;
        const canShowShowMore = this.expandableTilesEnabled && this.showShowMore_;
        const canShowShowLess = this.expandableTilesEnabled && this.showShowLess_;
        const visibleShortcutCount = canShowShowMore ? this.maxTilesInCollapsedState : shortcutCount;
        const totalTileCount = visibleShortcutCount + (canShowAdd ? 1 : 0) +
            (canShowShowMore || canShowShowLess ? 1 : 0);
        const columnCount = totalTileCount <= this.maxVisibleColumnCount_ ?
            totalTileCount :
            Math.min(this.maxVisibleColumnCount_, Math.ceil(totalTileCount / (this.singleRow ? 1 : 2)));
        return columnCount || 3;
    }
    computeRowCount_() {
        if (this.columnCount_ === 0) {
            return 0;
        }
        if (this.reflowOnOverflow && this.tiles_) {
            const visibleShortcutCount = this.expandableTilesEnabled && this.showShowMore_ ?
                this.maxTilesInCollapsedState :
                this.tiles_.length;
            return Math.ceil((visibleShortcutCount + (this.showAdd_ ? 1 : 0) +
                (this.showShowMore_ || this.showShowLess_ ? 1 : 0)) /
                this.columnCount_);
        }
        if (this.singleRow) {
            return 1;
        }
        const shortcutCount = this.tiles_ ? this.tiles_.length : 0;
        return this.columnCount_ <= shortcutCount ? 2 : 1;
    }
    computeMaxVisibleTiles_() {
        if (this.expandableTilesEnabled && this.showShowMore_) {
            return this.maxTilesInCollapsedState;
        }
        if (this.reflowOnOverflow) {
            return this.maxTiles_;
        }
        return this.columnCount_ * this.rowCount_;
    }
    computeShowAdd_() {
        if (this.nonEditable || this.showShowMore_) {
            return false;
        }
        if (!this.customLinksEnabled_) {
            return false;
        }
        // When uninitialized, the custom links may have a different source like
        // TOP_SITES or POPULAR.
        const customLinkTilesCount = this.tiles_.filter(tile => !this.isFromEnterpriseShortcut_(tile.source))
            .length;
        return this.tiles_.length < (this.expandableTilesEnabled && this.showAll_ ?
            this.maxTiles_ :
            this.maxVisibleTiles_) &&
            customLinkTilesCount < this.maxShortcutsInExpandedState;
    }
    computeShowShowMore_() {
        return this.expandableTilesEnabled && !this.showAll_ && this.tiles_ &&
            this.tiles_.length >= this.maxTilesInCollapsedState;
    }
    computeShowShowLess_() {
        return this.expandableTilesEnabled && this.showAll_ && this.tiles_ &&
            this.tiles_.length >= this.maxTilesInCollapsedState;
    }
    async onShowMoreClick_() {
        this.showAll_ = true;
        this.browserProxy_.handler.setMostVisitedExpandedState(this.showAll_);
        await this.updateComplete;
        this.tileFocus_(this.maxTilesInCollapsedState);
    }
    async onShowLessClick_() {
        this.showAll_ = false;
        this.browserProxy_.handler.setMostVisitedExpandedState(this.showAll_);
        await this.updateComplete;
        this.$.showMore.focus();
    }
    computeDialogSaveDisabled_() {
        return !this.dialogTileUrl_.trim() ||
            normalizeUrl(this.dialogTileUrl_) === null ||
            this.dialogShortcutAlreadyExists_;
    }
    computeDialogShortcutAlreadyExists_() {
        const dialogTileHref = (normalizeUrl(this.dialogTileUrl_) || {}).href;
        if (!dialogTileHref) {
            return false;
        }
        // Bypass check for enteprise shortcuts.
        if (this.dialogSource_ === TileSource.ENTERPRISE_SHORTCUTS) {
            return false;
        }
        return (this.tiles_ || []).some(({ url }, index) => {
            if (index === this.actionMenuTargetIndex_) {
                return false;
            }
            const otherUrl = normalizeUrl(url);
            return otherUrl && otherUrl.href === dialogTileHref &&
                this.tiles_[index].source !== TileSource.ENTERPRISE_SHORTCUTS;
        });
    }
    computeDialogTileUrlError_() {
        return loadTimeData.getString(this.dialogShortcutAlreadyExists_ ? 'shortcutAlreadyExists' :
            'invalidUrl');
    }
    computeIsDark_() {
        return this.theme ? this.theme.isDark : false;
    }
    computeUseWhiteTileIcon_() {
        return this.theme ? this.theme.useWhiteTileIcon : false;
    }
    /**
     * This method is always called when the drag and drop was finished (even when
     * the drop was canceled). If the tiles were reordered successfully, there
     * should be a tile with the "dropped" class.
     *
     * |reordering_| is not set to false when the tiles are reordered. The callers
     * will need to set it to false. This is necessary to handle a mouse drag
     * issue.
     */
    dragEnd_() {
        if (!this.customLinksEnabled_ && !this.enterpriseShortcutsEnabled_) {
            this.reordering_ = false;
            return;
        }
        this.dragOffset_ = null;
        const dragElement = this.shadowRoot.querySelector('.tile.dragging');
        const droppedElement = this.shadowRoot.querySelector('.tile.dropped');
        if (!dragElement && !droppedElement) {
            this.reordering_ = false;
            return;
        }
        if (dragElement) {
            dragElement.classList.remove('dragging');
            this.tileElements_.forEach(el => resetTilePosition(el));
            resetTilePosition(this.$.addShortcut);
            resetTilePosition(this.$.showMore);
            resetTilePosition(this.$.showLess);
        }
        else if (droppedElement) {
            droppedElement.classList.remove('dropped');
            // Note that resetTilePosition has already been called on drop_.
        }
    }
    /**
     * This method is called on "drop" events (i.e. when the user drops the tile
     * on a valid region.)
     *
     * If a pointer is over a tile rect that is different from the one being
     * dragged, the dragging tile is moved to the new position. The reordering is
     * done in the DOM and by the |reorderMostVisitedTile()| call. This is done to
     * prevent flicking between the time when the tiles are moved back to their
     * original positions (by removing position absolute) and when the tiles are
     * updated via the |setMostVisitedInfo| handler.
     *
     * We remove the "dragging" class in this method, and add "dropped" to
     * indicate that the dragged tile was successfully dropped.
     */
    drop_(x, y) {
        if (!this.customLinksEnabled_ && !this.enterpriseShortcutsEnabled_) {
            return;
        }
        const dragElement = this.shadowRoot.querySelector('.tile.dragging');
        if (!dragElement) {
            return;
        }
        const dragIndex = Number(dragElement.dataset['index']);
        const dropIndex = getHitIndex(this.tileRects_, x, y);
        if (dragIndex !== dropIndex && dropIndex > -1) {
            const dragTile = this.tiles_[dragIndex];
            assert(dragTile);
            const dropTile = this.tiles_[dropIndex];
            assert(dropTile);
            if (this.isFromEnterpriseShortcut_(dragTile.source) !==
                this.isFromEnterpriseShortcut_(dropTile.source)) {
                return;
            }
            const [draggingTile] = this.tiles_.splice(dragIndex, 1);
            assert(draggingTile);
            this.tiles_.splice(dropIndex, 0, draggingTile);
            this.requestUpdate();
            let newDropIndex = dropIndex;
            // When reordering custom links, the index needs to be adjusted by the
            // number of enterprise shortcuts, which are always shown first.
            if (!this.isFromEnterpriseShortcut_(draggingTile.source)) {
                newDropIndex -=
                    this.tiles_.filter(t => this.isFromEnterpriseShortcut_(t.source))
                        .length;
            }
            this.browserProxy_.handler.reorderMostVisitedTile(draggingTile, newDropIndex);
            // Remove the "dragging" class here to prevent flickering.
            dragElement.classList.remove('dragging');
            // Add "dropped" class so that we can skip disabling `reordering_` in
            // `dragEnd_`.
            dragElement.classList.add('dropped');
            this.tileElements_.forEach(el => resetTilePosition(el));
            resetTilePosition(this.$.addShortcut);
            resetTilePosition(this.$.showMore);
            resetTilePosition(this.$.showLess);
        }
    }
    /**
     * The positions of the tiles are updated based on the location of the
     * pointer.
     */
    dragOver_(x, y) {
        const dragElement = this.shadowRoot.querySelector('.tile.dragging');
        if (!dragElement) {
            this.reordering_ = false;
            return;
        }
        const dragIndex = Number(dragElement.dataset['index']);
        setTilePosition(dragElement, {
            x: x - this.dragOffset_.x,
            y: y - this.dragOffset_.y,
        });
        let dropIndex = getHitIndex(this.tileRects_, x, y);
        if (dropIndex > -1) {
            const dragTile = this.tiles_[dragIndex];
            const dropTile = this.tiles_[dropIndex];
            if (this.isFromEnterpriseShortcut_(dragTile.source) !==
                this.isFromEnterpriseShortcut_(dropTile.source)) {
                dropIndex = -1;
            }
        }
        this.tileElements_.forEach((element, i) => {
            let positionIndex;
            if (i === dragIndex) {
                return;
            }
            else if (dropIndex === -1) {
                positionIndex = i;
            }
            else if (dragIndex < dropIndex && dragIndex <= i && i <= dropIndex) {
                positionIndex = i - 1;
            }
            else if (dragIndex > dropIndex && dragIndex >= i && i >= dropIndex) {
                positionIndex = i + 1;
            }
            else {
                positionIndex = i;
            }
            setTilePosition(element, this.tileRects_[positionIndex]);
        });
    }
    /**
     * Sets up tile reordering for both drag and touch events. This method stores
     * the following to be used in |dragOver_()| and |dragEnd_()|.
     *   |dragOffset_|: This is the mouse/touch offset with respect to the
     *       top/left corner of the tile being dragged. It is used to update the
     *       dragging tile location during the drag.
     *   |reordering_|: This is property/attribute used to hide the hover style
     *       and cr-icon-button of the tiles while they are being reordered.
     *   |tileRects_|: This is the rects of the tiles before the drag start. It is
     *       to determine which tile the pointer is over while dragging.
     */
    dragStart_(dragElement, x, y) {
        // Need to clear the tile that has a forced hover style for when the drag
        // started without moving the mouse after the last drag/drop.
        this.clearForceHover_();
        dragElement.classList.add('dragging');
        const dragElementRect = dragElement.getBoundingClientRect();
        this.dragOffset_ = {
            x: x - dragElementRect.x,
            y: y - dragElementRect.y,
        };
        const visibleElements = this.tileElements_;
        const numTiles = visibleElements.length;
        if (this.showAdd_) {
            visibleElements.push(this.$.addShortcut);
        }
        if (this.showShowMore_) {
            visibleElements.push(this.$.showMore);
        }
        if (this.showShowLess_) {
            visibleElements.push(this.$.showLess);
        }
        // Get all the rects first before setting the absolute positions.
        const allRects = visibleElements.map(t => t.getBoundingClientRect());
        this.tileRects_ = allRects.slice(0, numTiles);
        visibleElements.forEach((el, i) => {
            setTilePosition(el, allRects[i]);
        });
        this.reordering_ = true;
    }
    getFaviconUrl_(url) {
        const faviconUrl = new URL('chrome://favicon2/');
        faviconUrl.searchParams.set('size', '24');
        const scaleFactor = this.mostVisitedHighDpiFaviconsEnabled_ ?
            `${window.devicePixelRatio || 1}x` :
            '1x';
        faviconUrl.searchParams.set('scaleFactor', scaleFactor);
        faviconUrl.searchParams.set('showFallbackMonogram', '');
        faviconUrl.searchParams.set('pageUrl', url);
        return faviconUrl.href;
    }
    getRestoreButtonText_() {
        return loadTimeData.getString(this.isFromEnterpriseShortcut_(this.toastSource_) ?
            'restoreDefaultEnterpriseShortcuts' :
            this.customLinksEnabled_ ? 'restoreDefaultLinks' :
                'restoreThumbnailsShort');
    }
    getTileTitleDirectionClass_(tile) {
        return tile.titleDirection === TextDirection.RIGHT_TO_LEFT ? 'title-rtl' :
            'title-ltr';
    }
    isHidden_(index) {
        if (this.reflowOnOverflow && !this.showShowMore_) {
            return false;
        }
        return index >= this.maxVisibleTiles_;
    }
    onSingleRowChange_() {
        if (!this.isConnected) {
            return;
        }
        this.mediaEventTracker_.removeAll();
        const tileSize = parseInt(getComputedStyle(this).getPropertyValue('--most-visited-tile-size'), 10) ||
            112;
        const maxColumnCount = this.singleRow ? 10 : 5;
        if (this.containerWidth !== null) {
            // Same breakpoints as the media queries below: N columns need a width of
            // at least N + 1 tiles.
            this.maxVisibleColumnCount_ = Math.min(maxColumnCount, Math.max(3, Math.floor(this.containerWidth / tileSize) - 1));
        }
        else {
            const queryLists = [];
            const updateCount = () => {
                const index = queryLists.findIndex(listener => listener.matches);
                this.maxVisibleColumnCount_ =
                    3 + (index > -1 ? queryLists.length - index : 0);
            };
            for (let i = maxColumnCount; i >= 4; i--) {
                const query = `(min-width: ${tileSize * (i + 1)}px)`;
                const queryList = this.windowProxy_.matchMedia(query);
                this.mediaEventTracker_.add(queryList, 'change', updateCount);
                queryLists.push(queryList);
            }
            updateCount();
        }
    }
    onAddClick_() {
        this.dialogIsReadonly_ = false;
        this.dialogSource_ = TileSource.CUSTOM_LINKS;
        this.dialogTitle_ = loadTimeData.getString('addLinkTitle');
        this.dialogTileTitle_ = '';
        this.dialogTileUrl_ = '';
        this.dialogTileUrlInvalid_ = false;
        this.adding_ = true;
        this.$.dialog.showModal();
    }
    onAddShortcutKeydown_(e) {
        if (hasKeyModifiers(e)) {
            return;
        }
        if (!this.tiles_ || this.tiles_.length === 0) {
            return;
        }
        const backKey = this.isRtl_ ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === backKey || e.key === 'ArrowUp') {
            this.tileFocus_(this.tiles_.length - 1);
        }
        const advanceKey = this.isRtl_ ? 'ArrowLeft' : 'ArrowRight';
        if (e.key === advanceKey || e.key === 'ArrowDown') {
            if (this.showShowLess_) {
                this.$.showLess.focus();
            }
        }
    }
    onShowMoreKeydown_(e) {
        if (hasKeyModifiers(e)) {
            return;
        }
        const backKey = this.isRtl_ ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === backKey || e.key === 'ArrowUp') {
            this.tileFocus_(this.maxTilesInCollapsedState - 1);
        }
    }
    onShowLessKeydown_(e) {
        if (hasKeyModifiers(e)) {
            return;
        }
        const backKey = this.isRtl_ ? 'ArrowRight' : 'ArrowLeft';
        if (e.key === backKey || e.key === 'ArrowUp') {
            if (this.showAdd_) {
                this.$.addShortcut.focus();
            }
            else {
                this.tileFocus_(this.tiles_.length - 1);
            }
        }
    }
    onDialogCancelClick_() {
        this.actionMenuTargetIndex_ = -1;
        this.$.dialog.cancel();
    }
    onDialogClose_() {
        this.dialogTileUrl_ = '';
        if (this.adding_) {
            this.$.addShortcut.focus();
        }
        this.adding_ = false;
    }
    onDialogKeydown_(e) {
        if (e.key !== 'Tab') {
            return;
        }
        const focusable = Array.from(this.$.dialog.querySelectorAll('cr-input, cr-button:not([disabled]):not([hidden])'));
        if (focusable.length === 0) {
            return;
        }
        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];
        const path = e.composedPath();
        if (e.shiftKey && path.includes(firstEl)) {
            e.preventDefault();
            lastEl.focus();
        }
        else if (!e.shiftKey && path.includes(lastEl)) {
            e.preventDefault();
            firstEl.focus();
        }
    }
    onDialogTileUrlBlur_() {
        if (this.dialogTileUrl_.length > 0 &&
            (normalizeUrl(this.dialogTileUrl_) === null ||
                this.dialogShortcutAlreadyExists_)) {
            this.dialogTileUrlInvalid_ = true;
        }
    }
    onDialogTileUrlValueChanged_(e) {
        this.dialogTileUrl_ = e.target.value;
        this.dialogTileUrlInvalid_ = false;
    }
    onDialogTileNameValueChanged_(e) {
        this.dialogTileTitle_ = e.target.value;
    }
    onDocumentKeyDown_(e) {
        if (this.nonEditable || e.altKey || e.shiftKey) {
            return;
        }
        const modifier = isMac ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
        if (modifier && e.key === 'z') {
            if (this.onUndoClick_()) {
                e.preventDefault();
            }
        }
    }
    onDragstart_(e) {
        if (this.nonEditable) {
            return;
        }
        const item = this.tiles_[this.getCurrentTargetIndex_(e)];
        assert(item);
        if (!this.customLinksEnabled_ &&
            !this.isFromEnterpriseShortcut_(item.source)) {
            return;
        }
        // |dataTransfer| is null in tests.
        if (e.dataTransfer) {
            // Replace the ghost image that appears when dragging with a transparent
            // 1x1 pixel image.
            e.dataTransfer.setDragImage(this.dragImage_, 0, 0);
        }
        this.dragStart_(e.target, e.x, e.y);
        const dragOver = (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            this.dragOver_(e.x, e.y);
        };
        const drop = (e) => {
            this.drop_(e.x, e.y);
            const dropIndex = getHitIndex(this.tileRects_, e.x, e.y);
            if (dropIndex !== -1) {
                this.enableForceHover_(dropIndex);
            }
        };
        this.ownerDocument.addEventListener('dragover', dragOver);
        this.ownerDocument.addEventListener('drop', drop);
        this.ownerDocument.addEventListener('dragend', _ => {
            this.ownerDocument.removeEventListener('dragover', dragOver);
            this.ownerDocument.removeEventListener('drop', drop);
            this.dragEnd_();
            this.addEventListener('pointermove', () => {
                this.clearForceHover_();
                // When |reordering_| is true, the normal hover style is not shown.
                // After a drop, the element that has hover is not correct. It will be
                // after the mouse moves.
                this.reordering_ = false;
            }, { once: true });
        }, { once: true });
    }
    onViewOrEditClick_() {
        this.$.actionMenu.close();
        const tile = this.tiles_[this.actionMenuTargetIndex_];
        const isReadonly = !tile.allowUserEdit;
        this.dialogIsReadonly_ = isReadonly;
        this.dialogSource_ = tile.source;
        this.dialogTitle_ =
            loadTimeData.getString(isReadonly ? 'viewLinkTitle' : 'editLinkTitle');
        this.dialogTileTitle_ = tile.title;
        this.dialogTileUrl_ = tile.url;
        this.dialogTileUrlInvalid_ = false;
        this.$.dialog.showModal();
    }
    async onReorderClick_() {
        this.$.actionMenu.close();
        this.inReorderMode_ = true;
        this.reordering_ = true;
        await this.updateComplete;
        await new Promise(requestAnimationFrame);
        if (this.inReorderMode_) {
            this.tileFocus_(this.actionMenuTargetIndex_);
        }
    }
    onRestoreDefaultsClick_() {
        if (!this.$.toastManager.isToastOpen || this.$.toastManager.slottedHidden) {
            return;
        }
        this.$.toastManager.hide();
        this.browserProxy_.handler.restoreMostVisitedDefaults(this.toastSource_);
    }
    async onRemoveClick_() {
        this.$.actionMenu.close();
        await this.tileRemove_(this.actionMenuTargetIndex_);
        this.actionMenuTargetIndex_ = -1;
    }
    async onSaveClick_() {
        if (this.dialogIsReadonly_) {
            this.$.dialog.close();
            return;
        }
        const newUrl = normalizeUrl(this.dialogTileUrl_).href;
        this.$.dialog.close();
        let newTitle = this.dialogTileTitle_.trim();
        if (newTitle.length === 0) {
            newTitle = this.dialogTileUrl_;
        }
        if (this.adding_) {
            const { success } = await this.browserProxy_.handler.addMostVisitedTile(newUrl, newTitle);
            this.toast_(success ? 'linkAddedMsg' : 'linkCantCreate', success, TileSource.TOP_SITES);
        }
        else {
            const oldTile = this.tiles_[this.actionMenuTargetIndex_];
            if (oldTile.url !== newUrl || oldTile.title !== newTitle) {
                const { success } = await this.browserProxy_.handler.updateMostVisitedTile(oldTile, newUrl, newTitle);
                this.toast_(success ? 'linkEditedMsg' : 'linkCantEdit', success, oldTile.source);
            }
            this.actionMenuTargetIndex_ = -1;
        }
    }
    getCurrentTargetIndex_(e) {
        const target = e.currentTarget;
        return Number(target.dataset['index']);
    }
    onTileActionButtonClick_(e) {
        e.preventDefault();
        this.actionMenuTargetIndex_ = this.getCurrentTargetIndex_(e);
        const item = this.tiles_[this.getCurrentTargetIndex_(e)];
        assert(item);
        this.actionMenuRemoveDisabled_ = !item.allowUserDelete;
        this.actionMenuViewOrEditTitle_ = loadTimeData.getString(item.allowUserEdit ? 'editLinkTitle' : 'viewLink');
        this.$.actionMenu.showAt(e.target);
    }
    onTileRemoveButtonClick_(e) {
        e.preventDefault();
        this.tileRemove_(this.getCurrentTargetIndex_(e));
    }
    onTileClick_(e) {
        if (e.defaultPrevented) {
            // Ignore previously handled events.
            return;
        }
        e.preventDefault(); // Prevents default browser action (navigation).
        if (this.inReorderMode_) {
            return;
        }
        const index = this.getCurrentTargetIndex_(e);
        const item = this.tiles_[index];
        this.browserProxy_.handler.onMostVisitedTileNavigation(item, index, e.button || 0, e.altKey, e.ctrlKey, e.metaKey, e.shiftKey);
    }
    async onTileKeydown_(e) {
        if (hasKeyModifiers(e)) {
            return;
        }
        if (this.shortcutsReorderEnabled && this.inReorderMode_) {
            if (!this.isReorderModeKey_(e.key)) {
                return;
            }
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === 'Tab') {
                e.preventDefault();
                const targetIndex = this.actionMenuTargetIndex_;
                await this.exitReorderMode_();
                this.tileElements_[targetIndex]
                    ?.querySelector('#actionMenuButton')
                    ?.focus();
                return;
            }
            if (this.isTileMoveInProgress_) {
                return;
            }
            // Handle reordering key events.
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                this.isTileMoveInProgress_ = true;
                const currentIndex = this.actionMenuTargetIndex_;
                const isForward = e.key === (this.isRtl_ ? 'ArrowLeft' : 'ArrowRight');
                const direction = isForward ? 1 : -1;
                const visibleTileCount = this.tileElements_.length;
                const newIndex = (currentIndex + direction + visibleTileCount) % visibleTileCount;
                const [selectedTile] = this.tiles_.splice(currentIndex, 1);
                assert(selectedTile);
                this.tiles_.splice(newIndex, 0, selectedTile);
                this.requestUpdate();
                this.browserProxy_.handler.reorderMostVisitedTile(selectedTile, newIndex);
                this.actionMenuTargetIndex_ = newIndex;
                await this.updateComplete;
                if (this.inReorderMode_) {
                    this.tileFocus_(newIndex);
                }
                this.isTileMoveInProgress_ = false;
                return;
            }
        }
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' &&
            e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Delete') {
            return;
        }
        const index = this.getCurrentTargetIndex_(e);
        if (e.key === 'Delete') {
            if (!this.nonEditable) {
                this.tileRemove_(index);
            }
            return;
        }
        const advanceKey = this.isRtl_ ? 'ArrowLeft' : 'ArrowRight';
        const delta = (e.key === advanceKey || e.key === 'ArrowDown') ? 1 : -1;
        const newIndex = Math.max(0, index + delta);
        if (this.showShowMore_ && newIndex === this.maxTilesInCollapsedState) {
            this.$.showMore.focus();
        }
        else {
            this.tileFocus_(newIndex);
        }
    }
    onTileMouseenter_(e) {
        if (e.defaultPrevented) {
            // Ignore previously handled events.
            return;
        }
        const item = this.tiles_[this.getCurrentTargetIndex_(e)];
        assert(item);
        // Preconnect is intended to be run on mouse hover when prerender is
        // enabled.
        if (loadTimeData.getBoolean('prerenderOnPressEnabled') &&
            loadTimeData.getInteger('preconnectStartTimeThreshold') >= 0) {
            this.preconnectTimer_ = setTimeout(() => {
                this.browserProxy_.handler.preconnectMostVisitedTile(item);
            }, loadTimeData.getInteger('preconnectStartTimeThreshold'));
        }
        if (loadTimeData.getBoolean('prefetchTriggerEnabled') &&
            loadTimeData.getInteger('prefetchStartTimeThreshold') >= 0) {
            this.prefetchTimer_ = setTimeout(() => {
                this.browserProxy_.handler.prefetchMostVisitedTile(item);
            }, loadTimeData.getInteger('prefetchStartTimeThreshold'));
        }
    }
    onTileMousedown_(e) {
        if (e.defaultPrevented) {
            // Ignore previously handled events.
            return;
        }
        if (loadTimeData.getBoolean('prerenderOnPressEnabled')) {
            const item = this.tiles_[this.getCurrentTargetIndex_(e)];
            assert(item);
            // prefetchMostVisitedTile is called explicitly to guarantee prefetch
            // ahead of prerender, and the duplicate prefetch requests will be
            // prevented at `StartPrefetch`.
            if (loadTimeData.getBoolean('prefetchTriggerEnabled')) {
                this.browserProxy_.handler.prefetchMostVisitedTile(item);
            }
            this.browserProxy_.handler.prerenderMostVisitedTile(item);
        }
    }
    onTileMouseleave_(e) {
        if (e.defaultPrevented) {
            // Ignore previously handled events.
            return;
        }
        if (this.prefetchTimer_) {
            clearTimeout(this.prefetchTimer_);
        }
        if (this.preconnectTimer_) {
            clearTimeout(this.preconnectTimer_);
        }
        if (loadTimeData.getBoolean('prerenderOnPressEnabled')) {
            this.browserProxy_.handler.cancelPrerender();
        }
    }
    onUndoClick_() {
        if (!this.$.toastManager.isToastOpen || this.$.toastManager.slottedHidden) {
            return false;
        }
        this.$.toastManager.hide();
        this.browserProxy_.handler.undoMostVisitedTileAction(this.toastSource_);
        return true;
    }
    onTouchstart_(e) {
        if (this.nonEditable || this.reordering_) {
            return;
        }
        const item = this.tiles_[this.getCurrentTargetIndex_(e)];
        assert(item);
        if (!this.customLinksEnabled_ &&
            !this.isFromEnterpriseShortcut_(item.source)) {
            return;
        }
        const tileElement = e.composedPath()
            .find(el => el.classList && el.classList.contains('tile'));
        if (!tileElement) {
            return;
        }
        const { clientX, clientY } = e.changedTouches[0];
        this.dragStart_(tileElement, clientX, clientY);
        const touchMove = (e) => {
            const { clientX, clientY } = e.changedTouches[0];
            this.dragOver_(clientX, clientY);
        };
        const touchEnd = (e) => {
            this.ownerDocument.removeEventListener('touchmove', touchMove);
            tileElement.removeEventListener('touchend', touchEnd);
            tileElement.removeEventListener('touchcancel', touchEnd);
            const { clientX, clientY } = e.changedTouches[0];
            this.drop_(clientX, clientY);
            this.dragEnd_();
            this.reordering_ = false;
        };
        this.ownerDocument.addEventListener('touchmove', touchMove);
        tileElement.addEventListener('touchend', touchEnd, { once: true });
        tileElement.addEventListener('touchcancel', touchEnd, { once: true });
    }
    tileFocus_(index) {
        if (index < 0) {
            return;
        }
        const tileElements = this.tileElements_;
        if (index < tileElements.length) {
            tileElements[index].querySelector('a').focus();
        }
        else if (this.showAdd_ && index === tileElements.length) {
            this.$.addShortcut.focus();
        }
        else if (this.showShowLess_ && index === tileElements.length) {
            this.$.showLess.focus();
        }
    }
    autoRemovalToast_() {
        this.fire('most-visited-auto-removed', {
            message: loadTimeData.getString('shortcutsInactivityRemovalMsg'),
            undo: () => {
                this.browserProxy_.handler.undoMostVisitedAutoRemoval();
            },
        });
    }
    toast_(msgId, showButtons, source) {
        this.toastSource_ = source;
        this.$.toastManager.show(loadTimeData.getString(msgId), !showButtons);
    }
    async tileRemove_(index) {
        const tile = this.tiles_[index];
        this.browserProxy_.handler.deleteMostVisitedTile(tile);
        // Do not show the toast buttons when a query tile is removed unless it is
        // a custom link. Removal is not reversible for non custom link query tiles.
        this.toast_('linkRemovedMsg', 
        /* showButtons= */ this.customLinksEnabled_ ||
            this.enterpriseShortcutsEnabled_ || !tile.isQueryTile, tile.source);
        // Move focus after the next render so that tileElements_ is updated.
        await this.updateComplete;
        this.tileFocus_(index);
    }
    async exitReorderMode_() {
        this.inReorderMode_ = false;
        this.reordering_ = false;
        this.actionMenuTargetIndex_ = -1;
        await this.updateComplete;
    }
    isReorderModeKey_(key) {
        return key === 'Escape' || key === 'Enter' || key === 'ArrowLeft' ||
            key === 'ArrowRight' || key === 'Tab';
    }
    async onDocumentClick_(e) {
        if (!this.inReorderMode_) {
            return;
        }
        if (!e.composedPath().includes(this.$.container)) {
            await this.exitReorderMode_();
        }
    }
    onTilesRendered_() {
        performance.measure('most-visited-rendered');
        assert(this.maxVisibleTiles_ > 0);
        this.browserProxy_.handler.onMostVisitedTilesRendered(this.tiles_.slice(0, this.maxVisibleTiles_), this.windowProxy_.now());
    }
    getMoreActionText_(title) {
        // Check that 'shortcutMoreActions' is set to more than an empty string,
        // since we do not use this text for third party NTP.
        return loadTimeData.getString('shortcutMoreActions') ?
            loadTimeData.getStringF('shortcutMoreActions', title) :
            '';
    }
    getRemoveButtonText_(title) {
        return this.i18n('linkRemoveA11y', htmlEscape(title));
    }
    getTileAriaLabel_(title) {
        if (this.shortcutsReorderEnabled && this.inReorderMode_) {
            return this.i18n('shortcutReorderA11y', htmlEscape(title));
        }
        return title;
    }
    isFromEnterpriseShortcut_(source) {
        return source === TileSource.ENTERPRISE_SHORTCUTS;
    }
}
customElements.define(MostVisitedElement.is, MostVisitedElement);

let instance$1 = null;
function getCss() {
    return instance$1 || (instance$1 = [...[], css `#lensIcon{--cr-icon-button-fill-color:var(--color-composebox-font-light);--cr-icon-button-hover-background-color:var(--color-composebox-voice-button-hover-background);--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px}:host([has-virtual-focus]) #lensIcon,:host([has-virtual-focus]) #lensSearchPill{box-shadow:inset 0 0 0 2px var(--cr-focus-outline-color)}#lensSearchPill{background-color:var(--color-composebox-context-entrypoint-hover-background);border:none;border-radius:100px;color:var(--color-searchbox-results-foreground);display:block;flex-shrink:1;font-size:13px;height:var(--cr-icon-button-height,32px);line-height:20px;max-width:100%;min-width:0;overflow:hidden;padding:6px 12px;text-align:center;text-overflow:ellipsis;white-space:nowrap}#lensSearchPill:focus{outline-offset:-2px}#content,#content>div{display:block;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}`]);
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2() {
    // clang-format off
    return html `
    ${this.isIcon ? html `
      <cr-icon-button id="lensIcon"
          part="lens-icon"
          iron-icon="composebox:google-lens-2"
          title="${this.i18n('lensSearchHint')}"
          aria-label="${this.i18n('lensSearchHint')}"
          @click="${this.onLensSearchClick_}">
      </cr-icon-button>
    ` : html `
      <cr-button id="lensSearchPill"
          part="lens-search-pill"
          title="${this.i18n('lensSearchHint')}"
          aria-label="${this.i18n('lensSearchHint')}"
          @click="${this.onLensSearchClick_}">
        <div id="content">
          <div>${this.i18n('lensSearchHint')}</div>
        </div>
      </cr-button>
    `}
  `;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ComposeboxLensSearchElement extends I18nMixinLit(CrLitElement) {
    static get is() {
        return 'cr-composebox-lens-search';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml$2.bind(this)();
    }
    static get properties() {
        return {
            isIcon: {
                type: Boolean,
                attribute: 'is-icon',
                reflect: true,
            },
            hasVirtualFocus: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #isIcon_accessor_storage = false;
    get isIcon() { return this.#isIcon_accessor_storage; }
    set isIcon(value) { this.#isIcon_accessor_storage = value; }
    #hasVirtualFocus_accessor_storage = false;
    get hasVirtualFocus() { return this.#hasVirtualFocus_accessor_storage; }
    set hasVirtualFocus(value) { this.#hasVirtualFocus_accessor_storage = value; }
    // Whether gaining virtual focus announces the hint. Hosts that narrate
    // virtual focus themselves set this to false, so the two don't compete.
    announcesVirtualFocus = true;
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('hasVirtualFocus') && this.hasVirtualFocus &&
            this.announcesVirtualFocus) {
            const message = this.getA11yLabel();
            if (message) {
                getInstance(this).announce(message);
            }
        }
    }
    /** Returns the label screen readers narrate for this element. */
    getA11yLabel() {
        return this.i18n('lensSearchHint');
    }
    /**
     * Returns the icon button, or null outside icon mode. Unlike the host's, its
     * bounds exclude the leading margin, so it suits anchoring a help bubble.
     */
    getIconButtonElement() {
        return this.shadowRoot.querySelector('#lensIcon');
    }
    onLensSearchClick_(e) {
        e.stopPropagation();
        this.fire('lens-search-click');
    }
}
customElements.define(ComposeboxLensSearchElement.is, ComposeboxLensSearchElement);

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1() {
    // Show `contextual-entrypoint-and-menu` if should show menu; otherwise
    // just show button.
    // clang-format off
    return html `
<div class="context-menu-container" id="contextMenuContainer"
    part="context-menu-and-tools"
    @mousedown="${this.onContextMenuContainerMousedown}"
    @click="${this.onContextMenuContainerClick}">
  ${this.showMenuOnClick ? html `
    <cr-composebox-contextual-entrypoint-and-menu
        id="contextEntrypoint"
        part="composebox-entrypoint"
        exportparts="context-menu-entrypoint-icon, entrypoint-button"
        class="upload-button no-overlap"
        @add-tab-context="${this.onAddTabContext}"
        @delete-tab-context="${this.onDeleteTabContext}"
        @tool-click="${this.onToolClick}"
        @model-click="${this.onModelClick}"
        @get-tab-preview="${this.onGetTabPreview}"
        @wait-for-tab-load="${this.onWaitForTabLoad}"
        @context-menu-closed="${this.onContextMenuClosed}"
        @context-menu-opened="${this.onContextMenuOpened}"
        @open-image-upload="${this.onOpenImageUpload}"
        @open-file-upload="${this.onOpenFileUpload}"
        @open-drive-upload="${this.onOpenDriveUpload}"
        @smart-tab-sharing-active-changed="${this.onSmartTabSharingActiveChanged}"
        @share-tabs-flyout-open-changed="${this.onShareTabsFlyoutOpenChanged}"
        @request-tab-suggestions-load="${this.onRequestTabSuggestionsLoad}"
        .inputState="${this.inputState}"
        .usePecApi="${this.usePecApi}"
        .smartTabSharingActive="${this.smartTabSharingActive}"
        .smartTabSharingVisible="${this.smartTabSharingVisible}"
        .shareTabsFlyoutOpen="${this.shareTabsFlyoutOpen}"
        .contextManagementInComposeboxEnabled="${this.contextManagementInComposeboxEnabled}"
        .composeboxContextMenuTooltipsEnabled="${this.composeboxContextMenuTooltipsEnabled}"
        .searchboxLayoutMode="${this.searchboxLayoutMode}"
        .tabSuggestions="${this.tabSuggestions}"
        .tabSuggestionsState="${this.tabSuggestionsState}"
        .recentTabId="${this.recentTabId}"
        .hasImageFiles="${this.hasImageFiles()}"
        .selectedTabIds="${this.addedTabsIds}"
        .aimThreadRestoredTabs="${this.aimThreadRestoredTabs}"
        .fileNum="${this.attachedContext.size}"
        .nonTabFileNum="${this.getNonTabFileNum()}"
        .sharedTabs="${this.getSharedTabs()}"
        .isSidePanel="${this.isSidePanel}"
        ?show-context-menu-description="${this.showContextMenuDescription}"
        .energyEffectAnimationEnabled="${this.energyEffectAnimationEnabled}">
    </cr-composebox-contextual-entrypoint-and-menu>
  ` : html `
    ${hasAllowedInputs(this.inputState, this.usePecApi) ? html `
      <cr-composebox-contextual-entrypoint-button
          id="contextEntrypoint"
          part="composebox-entrypoint"
          exportparts="context-menu-entrypoint-icon, entrypoint-button"
          class="upload-button no-overlap"
          @wait-for-tab-load="${this.onWaitForTabLoad}"
          .inputState="${this.inputState}"
          .isOblongShape="${this.isOblongShape}"
          .applyContextButtonBackground="${this.applyContextButtonBackground}"
          .sharedTabs="${this.getSharedTabs()}"
          .restoredTabs="${this.aimThreadRestoredTabs}"
          ?show-context-menu-description="${this.showContextMenuDescription}"
          .energyEffectAnimationEnabled="${this.energyEffectAnimationEnabled}">
      </cr-composebox-contextual-entrypoint-button>
    ` : ''}
  `}
  ${this.searchboxLayoutMode === 'Compact' && this.shouldShowVoiceSearch() ? html `
    <cr-icon-button id="voiceSearchButton" class="voice-icon"
        part="voice-icon" iron-icon="cr:mic-filled"
        @click="${this.onVoiceSearchButtonClick}"
        title="${this.i18n('voiceSearchButtonLabel')}">
    </cr-icon-button>
  ` : ''}
  ${this.searchboxLayoutMode !== 'Compact' ? html `
    ${this.inToolMode ? html `
      <cr-composebox-tool-chip
        exportparts="tool-chip-label"
        .inputState="${this.inputState}"
        .isCanvasQuerySubmitted="${this.isCanvasQuerySubmitted}"
        @tool-click="${this.onToolClick}">
      </cr-composebox-tool-chip>
    ` : ''}
  ` : ''}
</div>
  `;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml() {
    // clang-format off
    return html `<!--_html_template_start_-->
  ${!this.disableComposeboxAnimation ? html `
    <search-animated-glow id="animatedSearchElement"
        animation-state="${this.animationState}"
        glow-mode="inner-glow"
        .coloredTicTacVoiceAnimationEnabled=
            "${this.voiceSearchCoherenceEnabled}"
        .isListening="${this.isListening}"
        .requiresVoice="${this.shouldShowVoiceSearchAnimation()}"
        .transcript="${this.transcript}"
        .receivedSpeech="${this.receivedSpeech}"
        .energyEffectAnimationEnabled="${this.energyEffectAnimationEnabled}"
        .darkThemeColorsEnabled="${this.entrypointName !== ''}"
        .showingOnlyCarouselOnTopOfInput="${this.showFileCarousel
        && !this.inToolMode
        && this.carouselOnTop_
        && this.voiceSearchCoherenceEnabled}"
        exportparts="composebox-background">
      ${this.showFileCarousel && this.shouldShowVoiceSearchAnimation() &&
        this.voiceSearchCoherenceEnabled ? html `
        <div id="voiceCarouselContainer"
            slot="carousel"
            part="carousel-container">
          <div id="voiceCarouselContainerInner"
              class="carousel-container-inner">
            <cr-composebox-file-carousel
              id="voiceSearchCarousel"
              class="${this.carouselOnTop_ ? 'top'
        : ''}"
              .files="${this.getFilteredCarouselFiles()}"
              enable-scrolling
              @delete-file="${this.onDeleteFile}">
            </cr-composebox-file-carousel>
          </div>
        </div>
      ` : ''}
      ${this.shouldShowVoiceSearchAnimation() &&
        this.voiceSearchCoherenceEnabled && this.inToolMode
        ? html `<div class=
              "context-menu-container voice-context-menu-container"
                    id="voiceToolChipsContainer"
                    slot="tool-chip"
                    part="tool-chips-container">
                  <cr-composebox-tool-chip
                    exportparts="tool-chip-label"
                    .inputState="${this.inputState}"
                    .isCanvasQuerySubmitted="
                        ${this.isCanvasQuerySubmitted}"
                    @tool-click="${this.onToolClick}"
                    part="tool-chip">
                  </cr-composebox-tool-chip>
                </div>
      ` : ''}
    </search-animated-glow>
  ` : ''}
  ${this.errorMessage ?
        html `<ntp-error-scrim id="errorScrim" part="error-scrim"
          ?compact-mode="${this.searchboxLayoutMode === 'Compact' &&
            !this.hasFiles()}"
          .errorMessage="${this.errorMessage}"
          @dismiss-error-scrim="${this.onDismissErrorScrim}">
      </ntp-error-scrim>`
        : ''}
  <div id="composebox" part="composebox" ?inert="${!!this.errorMessage}"
        @keydown="${this.onKeydown}"
        @focusin="${this.onComposeboxFocusin_}"
        @focusout="${this.onComposeboxFocusout_}"
        @dragenter="${this.dragAndDropHandler.handleDragEnter}"
        @dragover="${this.dragAndDropHandler.handleDragOver}"
        @dragleave="${this.dragAndDropHandler.handleDragLeave}"
        @drop="${this.dragAndDropHandler.handleDrop}"
        @paste="${this.onPaste}">
      <div id="inputContainer" part="input-container">
        <cr-composebox-input id="composeboxInput"
            class="${this.hasTabs() ? 'has-tabs' : ''}"
            exportparts="text-container, icon-container, mirror, input, smart-compose, cancel, action-icon, cancel-icon"
            .disableCaretColorAnimation="${this.disableCaretColorAnimation}"
            .showDropdown="${this.showDropdown}"
            .inputPlaceholder="${this.inputPlaceholder}"
            .input="${this.input}"
            .smartComposeEnabled="${this.smartComposeEnabled}"
            .smartComposeInlineHint="${this.smartComposeInlineHint}"
            .isCollapsible="${this.isCollapsible}"
            .submitEnabled="${this.submitEnabled}"
            .entrypointName="${this.entrypointName}"
            .cancelButtonTitle="${this.computeCancelButtonTitle()}"
            @input-input="${this.onInputInput}"
            @input-focusin="${this.onInputFocusin}"
            @cancel-click="${this.onCancelClick}"
            @clear-smart-compose="${this.onClearSmartCompose}">
        </cr-composebox-input>
        <div id="context" part="context-entrypoint"
            class="${this.carouselOnTop_ && this.isCollapsible ? 'icon-fade' : ''}">
          <cr-composebox-file-inputs id="fileInputs"
              @file-change="${this.onFileChange}"
              .disableFileInputs="${this.shouldDisableFileInputs()}">
           ${this.searchboxLayoutMode === 'Compact' && !this.isOmniboxInCompactMode_ ?
        (this.hasTabs() ? '' : getHtml$1.bind(this)())
        : ''}
            <div id="carouselContainer" part="carousel-container">
              <div class="carousel-container-inner">
                ${this.showFileCarousel ? html `
                  <cr-composebox-file-carousel
                    part="cr-composebox-file-carousel"
                    exportparts="thumbnail, thumbnail-title"
                    id="carousel"
                    class="${this.carouselOnTop_ ? 'top' : ''}"
                    .files="${this.getFilteredCarouselFiles()}"
                    @delete-file="${this.onDeleteFile}">
                  </cr-composebox-file-carousel> ` : ''}
                  ${this.searchboxLayoutMode === 'Compact' && !this.isOmniboxInCompactMode_ && this.hasTabs() ? html `
                    ${this.contextMenuEnabled ? getHtml$1.bind(this)() : ''}
                  ` : ''}
                  ${this.searchboxLayoutMode === 'Compact' && this.inToolMode ? html `
                  <div class="context-menu-container" id="toolChipsContainer"
                      part="tool-chips-container">
                      <cr-composebox-tool-chip
                        exportparts="tool-chip-label"
                        .inputState="${this.inputState}"
                        .isCanvasQuerySubmitted="${this.isCanvasQuerySubmitted}"
                        @tool-click="${this.onToolClick}"
                        part="tool-chip">
                      </cr-composebox-tool-chip>
                  </div>
                  ` : ''}
              </div>
              ${this.shouldShowSubmitButton() && this.searchboxLayoutMode === 'Compact' ? html `
              <cr-composebox-submit
                exportparts="action-icon, submit, submit-icon, submit-overlay"
                ?disabled="${!this.canSubmitFilesAndInput}"
                .iconType="${this.submitButtonIconType}"
                .submitButtonTitle="${this.i18n('composeboxSubmitButtonTitle')}"
                @submit-click="${this.onSubmitClick}"
                @submit-focusin="${this.onSubmitFocusin}">
              </cr-composebox-submit>
              ` : ''}
            </div>
            ${this.shouldShowDivider() ? html `
            <div class="carousel-divider" part="carousel-divider"></div>
            ` : ''}
            <cr-composebox-dropdown
                id="matches"
                part="dropdown"
                exportparts="match-text-container"
                role="listbox"
                .result="${this.result}"
                .selectedMatchIndex="${this.selectedMatchIndex}"
                .maxSuggestions="${this.maxSuggestions}"
                .toolMode="${this.inputState?.activeTool || ToolMode.kUnspecified}"
                @selected-match-index-changed="${this.onSelectedMatchIndexChanged}"
                @match-focusin="${this.onMatchFocusin}"
                @match-click="${this.onMatchClick}"
                ?hidden="${this.shouldHideDropdown()}"
                .lastQueriedInput="${this.lastQueriedInput}">
            </cr-composebox-dropdown>
            ${this.searchboxLayoutMode === 'TallBottomContext' || this.searchboxLayoutMode === '' || this.isOmniboxInCompactMode_ ? html `
              ${this.contextMenuEnabled ? getHtml$1.bind(this)() : ''}
            ` : ''}
            ${this.shouldShowVoiceSearchAtBottom() ? html `
              <cr-icon-button id="voiceSearchButton" class="voice-icon" part="voice-icon"
                  iron-icon="cr:mic-filled" @click="${this.onVoiceSearchButtonClick}"
                  title="${this.i18n('voiceSearchButtonLabel')}">
              </cr-icon-button>
            ` : ''}
            ${this.shouldShowSubmitButton() &&
        this.searchboxLayoutMode === 'TallBottomContext' ? html `
                <cr-composebox-submit
                  exportparts="action-icon, submit, submit-icon, submit-overlay"
                  ?disabled="${!this.canSubmitFilesAndInput}"
                  .iconType="${this.submitButtonIconType}"
                  .submitButtonTitle="${this.i18n('composeboxSubmitButtonTitle')}"
                  @submit-click="${this.onSubmitClick}"
                  @submit-focusin="${this.onSubmitFocusin}">
                </cr-composebox-submit>
            ` : ''}
          </cr-composebox-file-inputs>
        </div>
      </div>
      ${this.showLensButton ? html `<cr-icon-button
          class="action-icon"
          id="lensIcon"
          part="action-icon lens-icon"
          title="${this.i18n('lensSearchButtonLabel')}"
          @click="${this.onLensClick_}"
          ?disabled="${this.lensButtonDisabled}"
          @mousedown="${this.onLensIconMousedown_}">
      </cr-icon-button>` : ''}
      <!-- Elements rendered under the input container. -->
      <!-- TODO: Move the submit button and Lens icon into this slot. -->
      <slot name="footer"></slot>
      <!-- A seperate container is needed for the submit button so the
        expand/collapse animation can be applied without affecting the submit
        button enabled/disabled state. -->
      ${!this.searchboxNextEnabled ? html `
        <cr-composebox-submit
          exportparts="action-icon, submit, submit-icon, submit-overlay"
          ?disabled="${!this.canSubmitFilesAndInput}"
          .iconType="${this.submitButtonIconType}"
          .submitButtonTitle="${this.i18n('composeboxSubmitButtonTitle')}"
          @submit-click="${this.onSubmitClick}"
          @submit-focusin="${this.onSubmitFocusin}">
        </cr-composebox-submit>
      ` : ''}
    </div>
  ${this.shouldShowVoiceSearch() ? html `
    <cr-composebox-voice-search id="voiceSearch"
        @voice-permission-changed="${this.onVoicePermissionChanged}"
        @voice-search-cancel="${this.onVoiceSearchCancel}"
        @voice-search-final-result="${this.onVoiceSearchFinalResult}"
        @voice-search-error="${this.onVoiceSearchError}"
        @transcript-update="${this.onTranscriptUpdate}"
        @speech-received="${this.onSpeechReceived}"
        @recording-stopped="${this.onRecordingStopped}"
        .submitStopButtonsEnabled="${this.voiceSearchCoherenceEnabled}"
        .liveTranscriptEnabled="${!this.voiceSearchCoherenceEnabled}"
        .submitButtonIconType="${this.submitButtonIconType}"
        .dynamicTimeoutEnabled="${false}"
        .pageCallbackRouter="${this.searchboxCallbackRouter_}"
        exportparts="voice-close-button, voice-details-link, voice-stop-button, voice-submit-button">
    </cr-composebox-voice-search>
  ` : ''}
  ${this.shouldShowSuggestionActivityLink()
        && this.suggestionActivityEnabled ? html `
    <div id="suggestionActivity">
      <localized-link
        .localizedString="${this.i18nAdvanced('suggestionActivityLink')}"
        @link-clicked="${this.onLinkClicked}">
      </localized-link>
    </div>
  ` : ''}
<!--_html_template_end_-->`;
    // clang-format on
}

// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DEBOUNCE_TIMEOUT_MS = 20;
function debounce(context, func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}
// LINT.IfChange
class ComposeboxElement extends ComposeboxEmbedderMixin(CrLitElement) {
    static get is() {
        return 'cr-composebox';
    }
    static get styles() {
        return getCss$u();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showLensButton: { type: Boolean },
            lensButtonTriggersOverlay: { type: Boolean },
            isCollapsible: {
                reflect: true,
                type: Boolean,
            },
            expanding_: {
                reflect: true,
                type: Boolean,
            },
            /**
             * Feature flag for New Tab Page Realbox Next.
             */
            ntpRealboxNextEnabled: {
                type: Boolean,
                // NOTE: Do not reflect this property. For shared UI, use
                // `searchboxNextEnabled`. For NTP-specific styling, use CSS from the
                // embedding component (e.g., `new_tab_page/app.css`).
            },
            lensButtonDisabled: {
                reflect: true,
                type: Boolean,
            },
            carouselOnTop_: {
                type: Boolean,
            },
            entrypointName: { type: String, reflect: true },
            disableComposeboxAnimation: { type: Boolean },
            // Embedders can opt out of public composebox resize events when they do
            // not use them.
            observeResize: { type: Boolean },
            isOmniboxInCompactMode_: {
                type: Boolean,
                reflect: true,
            },
            isFollowupQuery: { type: Boolean },
            enableFileHint: { type: Boolean },
            isSidePanel: { type: Boolean },
            inputPlaceholderOverride: { type: String },
            // Must be property so can pass it down to children.
            searchboxCallbackRouter_: { type: Object },
            applyContextButtonBackground: {
                reflect: true,
                type: Boolean,
            },
        };
    }
    #isSidePanel_accessor_storage = false;
    get isSidePanel() { return this.#isSidePanel_accessor_storage; }
    set isSidePanel(value) { this.#isSidePanel_accessor_storage = value; }
    #isFollowupQuery_accessor_storage = false;
    get isFollowupQuery() { return this.#isFollowupQuery_accessor_storage; }
    set isFollowupQuery(value) { this.#isFollowupQuery_accessor_storage = value; }
    #enableFileHint_accessor_storage = false;
    get enableFileHint() { return this.#enableFileHint_accessor_storage; }
    set enableFileHint(value) { this.#enableFileHint_accessor_storage = value; }
    #inputPlaceholderOverride_accessor_storage = '';
    get inputPlaceholderOverride() { return this.#inputPlaceholderOverride_accessor_storage; }
    set inputPlaceholderOverride(value) { this.#inputPlaceholderOverride_accessor_storage = value; }
    #disableComposeboxAnimation_accessor_storage = false;
    get disableComposeboxAnimation() { return this.#disableComposeboxAnimation_accessor_storage; }
    set disableComposeboxAnimation(value) { this.#disableComposeboxAnimation_accessor_storage = value; }
    #observeResize_accessor_storage = true;
    get observeResize() { return this.#observeResize_accessor_storage; }
    set observeResize(value) { this.#observeResize_accessor_storage = value; }
    #lensButtonTriggersOverlay_accessor_storage = false;
    get lensButtonTriggersOverlay() { return this.#lensButtonTriggersOverlay_accessor_storage; }
    set lensButtonTriggersOverlay(value) { this.#lensButtonTriggersOverlay_accessor_storage = value; }
    #showLensButton_accessor_storage = true;
    get showLensButton() { return this.#showLensButton_accessor_storage; }
    set showLensButton(value) { this.#showLensButton_accessor_storage = value; }
    #ntpRealboxNextEnabled_accessor_storage = false;
    get ntpRealboxNextEnabled() { return this.#ntpRealboxNextEnabled_accessor_storage; }
    set ntpRealboxNextEnabled(value) { this.#ntpRealboxNextEnabled_accessor_storage = value; }
    #carouselOnTop__accessor_storage = false;
    get carouselOnTop_() { return this.#carouselOnTop__accessor_storage; }
    set carouselOnTop_(value) { this.#carouselOnTop__accessor_storage = value; }
    #entrypointName_accessor_storage = '';
    get entrypointName() { return this.#entrypointName_accessor_storage; }
    set entrypointName(value) { this.#entrypointName_accessor_storage = value; }
    #lensButtonDisabled_accessor_storage = false;
    get lensButtonDisabled() { return this.#lensButtonDisabled_accessor_storage; }
    set lensButtonDisabled(value) { this.#lensButtonDisabled_accessor_storage = value; }
    #applyContextButtonBackground_accessor_storage = false;
    get applyContextButtonBackground() { return this.#applyContextButtonBackground_accessor_storage; }
    set applyContextButtonBackground(value) { this.#applyContextButtonBackground_accessor_storage = value; }
    isRtl_ = document.documentElement.dir === 'rtl';
    #isCollapsible_accessor_storage = false;
    // If isCollapsible is set to true, the composebox will be a pill shape until
    // it gets focused, at which point it will expand. If false, defaults to the
    // expanded state.
    get isCollapsible() { return this.#isCollapsible_accessor_storage; }
    set isCollapsible(value) { this.#isCollapsible_accessor_storage = value; }
    #expanding__accessor_storage = false;
    // Whether the composebox is currently expanded. Always true if isCollapsible
    // is false.
    get expanding_() { return this.#expanding__accessor_storage; }
    set expanding_(value) { this.#expanding__accessor_storage = value; }
    #isOmniboxInCompactMode__accessor_storage = false;
    get isOmniboxInCompactMode_() { return this.#isOmniboxInCompactMode__accessor_storage; }
    set isOmniboxInCompactMode_(value) { this.#isOmniboxInCompactMode__accessor_storage = value; }
    #searchboxCallbackRouter__accessor_storage;
    get searchboxCallbackRouter_() { return this.#searchboxCallbackRouter__accessor_storage; }
    set searchboxCallbackRouter_(value) { this.#searchboxCallbackRouter__accessor_storage = value; }
    get webUIOmniboxAskGAboutThisPageEnabled_() {
        return loadTimeData.valueExists('webUIOmniboxAskGAboutThisPageEnabled') &&
            loadTimeData.getBoolean('webUIOmniboxAskGAboutThisPageEnabled');
    }
    pageHandler_;
    searchboxHandler_;
    resizeObservers_ = [];
    shouldShowDivider() {
        // TODO(crbug.com/476175193): Remove `entrypointName` condition.
        if (this.entrypointName === 'Omnibox' &&
            this.searchboxLayoutMode === 'TallBottomContext' &&
            !this.showFileCarousel) {
            return false;
        }
        // TODO(crbug.com/486707841): Move to the NTP embedder.
        // Retain the divider for NTP when only tab favicons are present.
        // Omnibox is excluded as it does not need this divider.
        if (this.entrypointName !== 'Omnibox' && this.hasTabs() &&
            !this.hasNonTabFiles()) {
            return this.showDropdown;
        }
        return super.shouldShowDivider();
    }
    getDropdownElement() {
        return this.$.matches;
    }
    getActiveElement() {
        return this.shadowRoot?.activeElement || null;
    }
    getPageHandler() {
        return this.pageHandler_;
    }
    getSearchboxCallbackRouter() {
        return this.searchboxCallbackRouter_;
    }
    getSearchboxHandler() {
        return this.searchboxHandler_;
    }
    getContextEntrypointElement() {
        return this.shadowRoot?.querySelector('#contextEntrypoint') ||
            null;
    }
    getLensButtonElement() {
        return this.shadowRoot?.querySelector('#lensIcon') || null;
    }
    getFileInputsElement() {
        return this.shouldDisableFileInputs() ? null : this.$.fileInputs;
    }
    constructor() {
        super();
        this.pageHandler_ = ComposeboxProxyImpl.getInstance().handler;
        this.searchboxCallbackRouter_ =
            ComposeboxProxyImpl.getInstance().searchboxCallbackRouter;
        this.searchboxHandler_ = ComposeboxProxyImpl.getInstance().searchboxHandler;
    }
    getInputElement() {
        return this.$.composeboxInput;
    }
    connectedCallback() {
        super.connectedCallback();
        // Set the initial expanded state based on the inputted property.
        this.expanding_ = !this.isCollapsible;
        this.animationState = this.isCollapsible ? GlowAnimationState.NONE :
            GlowAnimationState.EXPANDING;
        this.searchboxListenerIds.push(this.getSearchboxCallbackRouter()
            .updateAutoSuggestedTabContext.addListener(this.updateAutoSuggestedTabContext_.bind(this)));
        this.focusInput();
        this.syncResizeObservers_();
    }
    setupResizeObservers_() {
        const composeboxResizeObserver = new ResizeObserver(debounce(this, () => {
            this.fire('composebox-resize', { height: this.offsetHeight });
        }, DEBOUNCE_TIMEOUT_MS));
        this.resizeObservers_.push(composeboxResizeObserver);
        composeboxResizeObserver.observe(this);
        const composeboxDropdownResizeObserver = new ResizeObserver(debounce(this, () => {
            this.fire('composebox-resize', { dropdownHeight: this.$.matches.offsetHeight });
        }, DEBOUNCE_TIMEOUT_MS));
        this.resizeObservers_.push(composeboxDropdownResizeObserver);
        composeboxDropdownResizeObserver.observe(this.$.matches);
    }
    tearDownResizeObservers_() {
        for (const observer of this.resizeObservers_) {
            observer.disconnect();
        }
        this.resizeObservers_ = [];
    }
    syncResizeObservers_() {
        this.tearDownResizeObservers_();
        if (!this.isConnected || !this.observeResize) {
            return;
        }
        this.setupResizeObservers_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tearDownResizeObservers_();
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('entrypointName') ||
            changedProperties.has('searchboxLayoutMode')) {
            this.isOmniboxInCompactMode_ = this.entrypointName === 'Omnibox' &&
                this.searchboxLayoutMode === 'Compact';
        }
        if (changedProperties.has('inputState') ||
            changedProperties.has('entrypointName') ||
            changedProperties.has('webuiOmniboxSimplificationEnabled')) {
            const inToolMode = this.inputState?.activeTool !== ToolMode.kUnspecified;
            const hasBackground = this.entrypointName === 'Omnibox' ?
                this.webuiOmniboxSimplificationEnabled :
                false;
            this.applyContextButtonBackground = hasBackground && !inToolMode;
        }
        if (changedProperties.has('inputPlaceholderOverride') ||
            changedProperties.has('enableFileHint')) {
            this.updateInputPlaceholder();
        }
        // If it is the first render, or 'entrypointName' has changed from its default.
        if (!this.hasUpdated || changedProperties.has('entrypointName')) {
            this.voiceSearchCoherenceEnabled =
                this.computeVoiceSearchCoherenceEnabled();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('observeResize')) {
            this.syncResizeObservers_();
        }
    }
    playGlowAnimation() {
        // If |animationState_| were still EXPANDING, this function would have no
        // effect because nothing changes in CSS and therefore animations wouldn't
        // be re-trigered. Resetting it to NONE forces the animation related styles
        // to reset before switching to EXPANDING.
        this.animationState = GlowAnimationState.NONE;
        // Wait for the style change for NONE to commit. This ensures the browser
        // detects a state change when we switch to EXPANDING.
        // If the composebox is not submittable or it is already expanded, do not
        // trigger the animation.
        if (this.expanding_ && !this.submitEnabled) {
            requestAnimationFrame(() => {
                this.animationState = GlowAnimationState.EXPANDING;
            });
        }
    }
    getHasAutomaticActiveTabChipToken() {
        return this.automaticActiveTab !== null;
    }
    getAutomaticActiveTabChipElement() {
        if (!this.automaticActiveTab) {
            return null;
        }
        const carousel = this.shadowRoot?.querySelector('#carousel');
        if (!carousel) {
            return null;
        }
        return carousel.getThumbnailElementByUuid(this.automaticActiveTab.uuid);
    }
    isExpanded() {
        return this.expanding_;
    }
    setExpandingForTesting(expanding) {
        this.expanding_ = expanding;
    }
    // Default logic moved to mixin. This override is for contextual_tasks.
    hasValidQuery() {
        // If there is at least one file that supports unimodal search, query is
        // valid.
        if (this.attachedContext.values().find((file) => file.supportsUnimodal)) {
            return true;
        }
        // If an autocomplete match is selected, it's a valid query.
        if (this.selectedMatchIndex >= 0 && !!this.result) {
            return true;
        }
        if (this.input.trim().length > 0) {
            return true;
        }
        // TODO(crbug.com/485648942): Update to drive Deep Search behavior from the
        //   PEC API's ToolSubstateConfig.
        // Allow empty query for Deep Search follow-ups.
        if (this.inputState?.activeTool === ToolMode.kDeepSearch &&
            this.isFollowupQuery) {
            return true;
        }
        return false;
    }
    // TODO(crbug.com/486706573): common logic moved to mixin. Move embedder
    // specific logic to the embedder class (contextual_tasks).
    deleteFile(uuidToDelete, fromUserAction) {
        const fromAutoSuggestedChip = uuidToDelete === this.automaticActiveTab?.uuid &&
            (fromUserAction === true);
        const file = super.deleteFile(uuidToDelete, fromUserAction, fromAutoSuggestedChip);
        if (!file) {
            return null;
        }
        if (fromAutoSuggestedChip) {
            // TODO(crbug.com/492797638): Consider folding this into the
            // `InputStateDeletion` metric.
            const metricName = 'ContextualSearch.UserAction.DeleteAutoSuggestedTab.' +
                this.composeboxSource;
            recordUserAction(metricName);
            recordBoolean$1(metricName, true);
            this.automaticActiveTab = null;
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
        }
        // We should not be querying autocomplete in the presence of a tab
        // with delayed upload until URL suggestions are implemented.
        // `deleteContext_` gets called before the active tab chip token is cleared,
        // therefore, check if we're removing this chip to see if the delayed tab
        // is getting removed.
        if (fromAutoSuggestedChip || !this.getHasAutomaticActiveTabChipToken()) {
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        else {
            // TODO(crbug.com/482150500): Have URL-suggestions for tabs with delayed
            // uploads.
            this.clearAutocompleteMatches();
        }
        return file;
    }
    onFileChange_(e) {
        this.processFiles(e.detail.files);
        recordContextAdditionMethod(0 /* ComposeboxContextAddedMethod.CONTEXT_MENU */, this.composeboxSource);
    }
    // TODO(crbug.com/486707842): Move this to contextual tasks composebox.
    async updateAutoSuggestedTabContext_(tab, invocationSource) {
        if (this.smartTabSharingActive) {
            if (this.automaticActiveTab) {
                this.deleteFile(this.automaticActiveTab.uuid);
                this.automaticActiveTab = null;
            }
            return;
        }
        // AutoSuggestedTabContext is routed differently for Omnibox Page Action.
        // when it opens a side panel to cobrowse.
        // TODO(crbug.com/486707842): Move check to the
        // Contextual Tasks embedder.
        const askGAndPageAction = this.webUIOmniboxAskGAboutThisPageEnabled_ &&
            invocationSource === 'OmniboxPageAction' && this.isSidePanel;
        // We should delete the automatic active tab if it is different from the
        // current tab when webUIOmniboxAskGAboutThisPageEnabled_ is true. Make sure
        // to keep the existing tab if we are returning from another tab.
        const hasTabMismatch = !!this.automaticActiveTab && !!tab &&
            this.automaticActiveTab.url !== tab.url;
        const shouldDeleteAutomaticActiveTab = askGAndPageAction ?
            hasTabMismatch :
            this.automaticActiveTab && (!tab || hasTabMismatch);
        if (shouldDeleteAutomaticActiveTab) {
            this.deleteFile(this.automaticActiveTab.uuid);
            this.automaticActiveTab = null;
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
            // TODO(crbug.com/482150500): Correctly query for url based suggestions
            // when delayed tab is present. Right now, while url-based suggestions are
            // not set-up, clear the autocomplete matches.
            if (!askGAndPageAction && !tab) {
                this.queryAutocomplete(/* clearMatches= */ true);
            }
            return;
        }
        if (!tab) {
            this.pendingAutomaticActiveTabUrl = '';
            this.pendingAutomaticActiveTabTitle = '';
            return;
        }
        if (tab) {
            // Ignore the `TabInfo` update if there is a matching
            // `automaticActiveTab`, unless the title has changed.
            if (this.automaticActiveTab && tab.url === this.automaticActiveTab.url &&
                tab.tabId === this.automaticActiveTab.tabId) {
                if (this.automaticActiveTab.name !== tab.title) {
                    const updatedFile = new ComposeboxFile(this.automaticActiveTab.uuid, tab.title, this.automaticActiveTab.type, this.automaticActiveTab.inputType, this.automaticActiveTab);
                    this.automaticActiveTab = updatedFile;
                    const fileMap = new Map(this.attachedContext);
                    fileMap.set(updatedFile.uuid, updatedFile);
                    this.attachedContext = fileMap;
                }
                return;
            }
            // If an autochip is currently being uploaded but carousel attachment has
            // not been created yet, allow updates to its title. Absence of this
            // url means that there is no currently no auto active tab uploading.
            // If the url is the same, this is an update for the same tab so just
            // allow updates to the uploading tab's title from this update,
            // but do not upload it again.
            if (this.pendingAutomaticActiveTabUrl === tab.url) {
                this.pendingAutomaticActiveTabTitle = tab.title;
                return;
            }
            // Otherwise, prepare to replace the auto chip:
            this.pendingAutomaticActiveTabUrl = tab.url;
            this.pendingAutomaticActiveTabTitle = tab.title;
            // Do not reset above pending states in this async callback since
            // later requests make any older async callback updates irrelevant.
            // Add the `TabInfo` as `ComposeboxFile` in carousel.
            const attachment = await this.addTabContextHandleCallback({
                tabId: tab.tabId,
                title: tab.title,
                url: tab.url,
                delayUpload: !askGAndPageAction,
                origin: TabAttachmentSource.kAutoActive,
            }, 
            /*replaceAutoActiveTabToken=*/ true);
            if (!askGAndPageAction || !attachment) {
                this.clearAutocompleteMatches();
            }
        }
    }
    async addTabContextHandleCallback(tabUpload, replaceAutoActiveTabToken = false) {
        const attachment = await super.addTabContextHandleCallback(tabUpload, replaceAutoActiveTabToken, (attachment) => {
            // Do not reset pending active tab to avoid overwriting
            // synchronous "pending statuses" that are queued (since this
            // function is asynchronous and can run much later).
            if (replaceAutoActiveTabToken) {
                this.automaticActiveTab =
                    Object.assign(attachment, { uuid: attachment.uuid });
            }
        });
        if (!attachment) {
            return null;
        }
        // Adding a tab is asynchronous. For auto active tabs, a title update
        // might be received after the upload process has been started. In order
        // to prevent adding duplicate chips from this update, simply update the
        // title of the initial upload instead based on whatever the latest
        // title update received is.
        if (replaceAutoActiveTabToken && this.automaticActiveTab) {
            if (this.automaticActiveTab.name !==
                this.pendingAutomaticActiveTabTitle) {
                const updatedFile = new ComposeboxFile(this.automaticActiveTab.uuid, this.pendingAutomaticActiveTabTitle, this.automaticActiveTab.type, this.automaticActiveTab.inputType, this.automaticActiveTab);
                this.automaticActiveTab = updatedFile;
                const fileMap = new Map(this.attachedContext);
                fileMap.set(updatedFile.uuid, updatedFile);
                this.attachedContext = fileMap;
            }
        }
        return attachment;
    }
    onLensClick_() {
        if (this.lensButtonTriggersOverlay) {
            this.pageHandler_.handleLensButtonClick();
        }
        else {
            this.pageHandler_.handleFileUpload(/*is_image=*/ true);
        }
    }
    onLensIconMousedown_(e) {
        // Prevent the composebox from expanding due to being focused by capturing
        // the mousedown event. This is needed to allow the Lens icon to be
        // clicked when the composebox does not have focus without expanding the
        // composebox.
        e.preventDefault();
    }
    // TODO(crbug.com/486706573): Refactor this function and move the common logic
    // to the mixin class. Move embedder specific logic to the embedder class.
    updateInputPlaceholder() {
        if (this.inputPlaceholderOverride) {
            this.inputPlaceholder = this.inputPlaceholderOverride;
            return;
        }
        // The file hint should only be shown when there is context that was
        // deliberately added by the user (i.e. not the automatic active tab).
        const isOnlyAutoTab = this.attachedContext.size === 1
            && !!this.automaticActiveTab;
        const shouldUseFileHint = this.enableFileHint && this.hasFiles() &&
            !isOnlyAutoTab && this.inputState?.activeTool === ToolMode.kUnspecified;
        if (shouldUseFileHint) {
            if (this.attachedContext.size > 1) {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThese');
                return;
            }
            const file = this.attachedContext.values().next().value;
            if (file.type === 'tab') {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThisTab');
                return;
            }
            else if (file.type.includes('image')) {
                this.inputPlaceholder =
                    this.i18n('composeboxHintTextAskAboutThisImage');
                return;
            }
            else if (file.type === 'pdf' || file.type === 'application/pdf') {
                this.inputPlaceholder = this.i18n('composeboxHintTextAskAboutThisDoc');
                return;
            }
        }
        super.updateInputPlaceholder();
    }
    onComposeboxFocusin_(e) {
        // Exit early if the focus is still within the composebox.
        if (this.$.composebox.contains(e.relatedTarget)) {
            return;
        }
        // If the composebox was focused out, collapsed and now focused in,
        // requery autocomplete to get fresh contextual suggestions.
        if (this.isCollapsible) {
            this.queryAutocomplete(/* clearMatches= */ true);
        }
        this.expanding_ = true;
        this.pageHandler_.focusChanged(true);
        this.fire('composebox-focus-in');
    }
    onComposeboxFocusout_(e) {
        // Exit early if the focus is still within the composebox.
        if (this.$.composebox.contains(e.relatedTarget)) {
            return;
        }
        // If the the composebox is collapsible and empty, collapse it.
        // Else, keep the composebox expanded.
        this.expanding_ = this.isCollapsible ? this.submitEnabled : true;
        this.pageHandler_.focusChanged(false);
        this.fire('composebox-focus-out');
    }
    // TODO(crbug.com/486707998): Move this to omnibox composebox.
    addSearchContext(context) {
        if (context) {
            if (context.input.length > 0) {
                this.input = context.input;
            }
            for (const attachment of context.attachments) {
                if (attachment.fileAttachment) {
                    this.addFileFromAttachment_(attachment.fileAttachment);
                }
                else if (attachment.tabAttachment) {
                    this.addTabFromAttachment_(attachment.tabAttachment);
                }
            }
        }
        // Query for ZPS even if there's no context.
        if (this.showZps) {
            // Clear the autocomplete matches here, as failure to do so triggers a
            // DCHECK in `ZpsSection::InitMatches()` whenever the user tries to upload
            // a file after having uploaded an invalid file earlier in the session.
            this.queryAutocomplete(/* clearMatches= */ true);
        }
    }
    // TODO(crbug.com/486706573): Common logic is moved to the mixin class. Move
    // embedder specific logic to the embedder class.
    closeComposebox(afterSubmit = false) {
        super.closeComposebox(afterSubmit);
        if (this.isCollapsible) {
            this.expanding_ = false;
            this.animationState = GlowAnimationState.NONE;
            this.getInputElement().inputElement.blur();
        }
    }
    submitCleanup() {
        // TODO: crbug.com/486707842 - Move to the Contextual Tasks embedder
        this.cacheSubmittedTabs();
        if (this.isCollapsible) {
            this.clearAllInputs(/* querySubmitted= */ true, 
            /* shouldBlockAutoSuggestedTabs= */ false);
        }
        super.submitCleanup();
    }
    // TODO(crbug.com/486706573): common logic is moved
    // to the mixin class. Move embedder specific logic to the embedder class.
    clearAllInputs(querySubmitted, shouldBlockAutoSuggestedTabs) {
        // Reset side-panel specific suggested tab context URL/Title pointers
        this.automaticActiveTab = null;
        this.pendingAutomaticActiveTabUrl = '';
        this.pendingAutomaticActiveTabTitle = '';
        this.$.composeboxInput.resetHeight();
        super.clearAllInputs(querySubmitted, shouldBlockAutoSuggestedTabs);
    }
    // TODO(crbug.com/486707998): Move this to omnibox composebox.
    addFileFromAttachment_(fileAttachment) {
        const errorType = fileAttachment.errorType ?? null;
        if (errorType) {
            const processFilesError = mapUploadErrorToProcessFilesError(errorType);
            if (processFilesError !== ProcessFilesError.NONE) {
                this.handleProcessFilesError(processFilesError);
                this.deleteFileContext(fileAttachment.uuid);
                return;
            }
        }
        const pendingStatus = this.attachedContext.get(fileAttachment.uuid)?.status;
        const composeboxFile = ComposeboxFile.createFromFile(fileAttachment.uuid, { name: fileAttachment.name, type: fileAttachment.mimeType }, pendingStatus ?? ContextUploadStatus.kNotUploaded, {
            dataUrl: fileAttachment.imageDataUrl ?? null,
            iconUrl: fileAttachment.iconUrl ?? null,
            supportsUnimodal: true,
        });
        this.onFileContextAdded(composeboxFile);
    }
    // TODO(crbug.com/486707998): Move this to omnibox composebox.
    addTabFromAttachment_(tabAttachment) {
        this.addTabContextHandleCallback({
            tabId: tabAttachment.tabId,
            title: tabAttachment.title,
            url: tabAttachment.url,
            delayUpload: /*delay_upload=*/ false,
            origin: tabAttachment.source,
        });
    }
    // TODO(crbug.com/486707842): Move this to contextual tasks composebox.
    setAutomaticActiveTabForTesting(file) {
        this.automaticActiveTab = file;
    }
    // TODO(crbug.com/486707842): Move this to contextual tasks composebox.
    updateAutoSuggestedTabContextForTesting(tab, invocationSource = null) {
        this.updateAutoSuggestedTabContext_(tab, invocationSource);
    }
}
customElements.define(ComposeboxElement.is, ComposeboxElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageImageServiceBrowserProxy {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new PageImageServiceBrowserProxy(PageImageServiceHandler.getRemote()));
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

export { COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX, COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX, CalendarAction, CalendarElement, CalendarEventElement, ComposeboxElement, ComposeboxProxyImpl, CrToastElement, DriveModuleElement, ModuleElement as DummyModuleElement, FileAction, FileProxy, FileSuggestionElement, FooProxy, GoogleCalendarModuleElement, GoogleCalendarProxyImpl, IconContainerElement, IndividualPromosElement, InfoDialogElement, LensErrorType, LensFormElement, LensSubmitType, LensUploadDialogAction, LensUploadDialogElement, LensUploadDialogError, MicrosoftAuthModuleElement, MicrosoftFilesModuleElement, MicrosoftFilesProxyImpl, ModuleDescriptor, ModuleHeaderElement as ModuleHeaderElementV2, ModuleRegistry, ModuleWrapperElement, ModulesElement, MostRelevantTabResumptionModuleElement, MostRelevantTabResumptionProxyImpl, MojoPluralStringProxy as NTPPluralStringProxyImpl, OutlookCalendarModuleElement, OutlookCalendarProxyImpl, PageImageServiceBrowserProxy, ParentTrustedDocumentProxy, SUPPORTED_MODULE_WIDTHS, TabGroupsModuleElement, TabGroupsProxyImpl, colorIdToString, driveModuleDescriptor, dummyV2Descriptor, googleCalendarDescriptor, microsoftAuthModuleDescriptor, microsoftFilesModuleDescriptor, mostRelevantTabResumptionDescriptor, outlookCalendarDescriptor, tabGroupsDescriptor };
//# sourceMappingURL=lazy_load.rollup.js.map
