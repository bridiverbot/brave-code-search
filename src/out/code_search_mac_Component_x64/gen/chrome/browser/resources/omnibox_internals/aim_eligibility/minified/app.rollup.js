import"chrome://resources/brave/leo.bundle.js";import{html,CrLitElement,css}from"chrome://resources/lit/v3_0/lit.rollup.js";import"chrome://omnibox-internals/strings.m.js";import{PageCallbackRouter as PageCallbackRouter$1,PageHandler}from"chrome://resources/cr_components/color_change_listener/color_change_listener.mojom-webui.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import{JSTimeSpec}from"chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js";
// Copyright (c) 2024 The Brave Authors. All rights reserved.
function getHtml$1(){return html`
<leo-button id="button" kind="outline" size="${this.size}">
  <slot slot="icon-before" name="prefix-icon"></slot>
  <slot></slot>
  <slot slot="icon-after" name="suffix-icon"></slot>
</leo-button>`}
// Copyright (c) 2024 The Brave Authors. All rights reserved.
class CrButtonElement extends CrLitElement{static get is(){return"cr-button"}static get styles(){return css`
      :host {
        display: inline-block;
        height: min-content;
      }

      :host(.cancel-button) {
        margin-inline-end: var(--leo-spacing-m);
      }

      leo-button {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
      }
    `}render(){return getHtml$1.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},class:{type:String,reflect:true},size:{type:String,reflect:true},noink:{type:Boolean}}}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#class_accessor_storage="";get class(){return this.#class_accessor_storage}set class(value){this.#class_accessor_storage=value}#size_accessor_storage="small";get size(){return this.#size_accessor_storage}set size(value){this.#size_accessor_storage=value}#noink_accessor_storage=false;get noink(){return this.#noink_accessor_storage}set noink(value){this.#noink_accessor_storage=value}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}connectedCallback(){super.connectedCallback();this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("click",this.onClick_)}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("class")){this.classChanged()}if(changedProperties.has("disabled")){if(this.disabled){this.$.button.setAttribute("isDisabled","_")}else{this.$.button.removeAttribute("isDisabled")}}if(changedProperties.has("size")){this.$.button.setAttribute("size",this.size)}}classChanged(){let kind="outline";if(this.classList.contains("action-button")){kind="filled"}const avatar=this.classList.contains("avatar");if(avatar||this.classList.contains("plain")){kind="plain"}if(avatar){this.$.button.setAttribute("fab","")}this.$.button.setAttribute("kind",kind)}getRipple(){return null}hasRipple(){return false}}customElements.define(CrButtonElement.is,CrButtonElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+"")}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$3=null;let BrowserProxy$1=class BrowserProxy{callbackRouter;constructor(){this.callbackRouter=new PageCallbackRouter$1;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance$3||(instance$3=new BrowserProxy)}static setInstance(newInstance){instance$3=newInstance}};
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{listenerId_=null;root_;eventTarget=new EventTarget;constructor(root){assert(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy$1.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright (c) 2025 The Brave Authors. All rights reserved.
const DEFAULT_COLORS_HREF="//theme/colors.css?sets=ui";const oldStart=ColorChangeUpdater.prototype.start;ColorChangeUpdater.prototype.start=function(){const root=this.root_;const colorCssNode=root.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){const colorsCssLink=document.createElement("link");colorsCssLink.rel="stylesheet";colorsCssLink.type="text/css";colorsCssLink.setAttribute("href",DEFAULT_COLORS_HREF);if(root===document){document.getElementsByTagName("body")[0].appendChild(colorsCssLink)}else{root.appendChild(colorsCssLink)}}oldStart.call(this)};
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OpenWindowProxyImpl{openUrl(url){window.open(url)}static getInstance(){return instance$2||(instance$2=new OpenWindowProxyImpl)}static setInstance(obj){instance$2=obj}}let instance$2=null;
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DisclaimerStateSpec={$:mojo.internal.Enum()};var DisclaimerState;(function(DisclaimerState){DisclaimerState[DisclaimerState["MIN_VALUE"]=0]="MIN_VALUE";DisclaimerState[DisclaimerState["MAX_VALUE"]=2]="MAX_VALUE";DisclaimerState[DisclaimerState["kAccepted"]=0]="kAccepted";DisclaimerState[DisclaimerState["kNotAccepted"]=1]="kNotAccepted";DisclaimerState[DisclaimerState["kRestricted"]=2]="kRestricted"})(DisclaimerState||(DisclaimerState={}));class PagePendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"aim_eligibility.mojom.Page",scope)}}class PageRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onEligibilityStateChanged(state){this.proxy.sendMessage(0,Page_OnEligibilityStateChanged_ParamsSpec.$,null,[state],false)}onDriveStatusChanged(status){this.proxy.sendMessage(1,Page_OnDriveStatusChanged_ParamsSpec.$,null,[status],false)}}class PageCallbackRouter{helper_internal_;$;router_;onEligibilityStateChanged;onDriveStatusChanged;onConnectionError;constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onEligibilityStateChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnEligibilityStateChanged_ParamsSpec.$,null,this.onEligibilityStateChanged.createReceiverHandler(false),false);this.onDriveStatusChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,Page_OnDriveStatusChanged_ParamsSpec.$,null,this.onDriveStatusChanged.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class PageHandlerPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"aim_eligibility.mojom.PageHandler",scope)}}class PageHandlerRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}getEligibilityState(){return this.proxy.sendMessage(0,PageHandler_GetEligibilityState_ParamsSpec.$,PageHandler_GetEligibilityState_ResponseParamsSpec.$,[],false)}requestServerEligibilityForDebugging(){this.proxy.sendMessage(1,PageHandler_RequestServerEligibilityForDebugging_ParamsSpec.$,null,[],false)}setEligibilityResponseForDebugging(base64EncodedResponse){return this.proxy.sendMessage(2,PageHandler_SetEligibilityResponseForDebugging_ParamsSpec.$,PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec.$,[base64EncodedResponse],false)}}class PageHandlerFactoryPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"aim_eligibility.mojom.PageHandlerFactory",scope)}}class PageHandlerFactoryRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerFactoryPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}createPageHandler(page,handler){this.proxy.sendMessage(0,PageHandlerFactory_CreatePageHandler_ParamsSpec.$,null,[page,handler],false)}}class PageHandlerFactory{static get $interfaceName(){return"aim_eligibility.mojom.PageHandlerFactory"}static getRemote(){let remote=new PageHandlerFactoryRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}const DriveStatusSpec={$:{}};const EligibilityStateSpec={$:{}};const Page_OnEligibilityStateChanged_ParamsSpec={$:{}};const Page_OnDriveStatusChanged_ParamsSpec={$:{}};const PageHandler_GetEligibilityState_ParamsSpec={$:{}};const PageHandler_GetEligibilityState_ResponseParamsSpec={$:{}};const PageHandler_RequestServerEligibilityForDebugging_ParamsSpec={$:{}};const PageHandler_SetEligibilityResponseForDebugging_ParamsSpec={$:{}};const PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec={$:{}};const PageHandlerFactory_CreatePageHandler_ParamsSpec={$:{}};mojo.internal.Struct(DriveStatusSpec.$,"DriveStatus",[mojo.internal.StructField("isDriveSupported",0,0,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isPecEligible",0,1,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isIdentityMatch",0,2,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isIncognito",0,3,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isFeatureFlagEnabled",0,4,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isForceDriveDisclaimerAccepted",0,5,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isSearchContentSharingEnabled",0,6,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("disclaimerState",4,0,DisclaimerStateSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("isDisclaimerFlagEnabled",0,7,mojo.internal.Bool,false,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(EligibilityStateSpec.$,"EligibilityState",[mojo.internal.StructField("isEligible",0,0,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isEligibleByPolicy",0,1,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isThirdPartyEligibleByPolicy",0,2,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isEligibleByDse",0,3,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isAimEligibleByServer",0,4,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isFuseboxEligibleByServer",0,5,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isCobrowseEligibleByServer",0,6,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("isServerEligibilityEnabled",0,7,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("eligibilityResponseBase64Encoded",8,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("eligibilityResponseSource",16,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("eligibilityResponseAuthType",24,0,mojo.internal.String,null,true,0,undefined,undefined),mojo.internal.StructField("driveStatus",32,0,DriveStatusSpec.$,null,true,0,undefined,undefined),mojo.internal.StructField("lastUpdated",40,0,JSTimeSpec.$,null,false,0,undefined,undefined)],[[0,56]]);mojo.internal.Struct(Page_OnEligibilityStateChanged_ParamsSpec.$,"Page_OnEligibilityStateChanged_Params",[mojo.internal.StructField("state",0,0,EligibilityStateSpec.$,null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(Page_OnDriveStatusChanged_ParamsSpec.$,"Page_OnDriveStatusChanged_Params",[mojo.internal.StructField("status",0,0,DriveStatusSpec.$,null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(PageHandler_GetEligibilityState_ParamsSpec.$,"PageHandler_GetEligibilityState_Params",[],[[0,8]]);mojo.internal.Struct(PageHandler_GetEligibilityState_ResponseParamsSpec.$,"PageHandler_GetEligibilityState_ResponseParams",[mojo.internal.StructField("state",0,0,EligibilityStateSpec.$,null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(PageHandler_RequestServerEligibilityForDebugging_ParamsSpec.$,"PageHandler_RequestServerEligibilityForDebugging_Params",[],[[0,8]]);mojo.internal.Struct(PageHandler_SetEligibilityResponseForDebugging_ParamsSpec.$,"PageHandler_SetEligibilityResponseForDebugging_Params",[mojo.internal.StructField("base64EncodedResponse",0,0,mojo.internal.String,null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec.$,"PageHandler_SetEligibilityResponseForDebugging_ResponseParams",[mojo.internal.StructField("success",0,0,mojo.internal.Bool,false,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$,"PageHandlerFactory_CreatePageHandler_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0,undefined,undefined),mojo.internal.StructField("handler",8,0,mojo.internal.InterfaceRequest(PageHandlerPendingReceiver),null,false,0,undefined,undefined)],[[0,24]]);let instance$1=null;function getCss(){return instance$1||(instance$1=[...[],css`:host{--fail-color:var(--color-sys-error,var(--google-red-700));--pass-color:var(--color-sys-primary,var(--google-green-700));color:var(--color-sys-on-surface,var(--cr-primary-text-color))}@media (prefers-color-scheme:dark){:host{--fail-color:var(--color-sys-error,var(--google-red-300));--pass-color:var(--color-sys-primary,var(--google-green-300))}}.content{background-color:var(--color-sys-surface,var(--cr-card-background-color));border-radius:8px;box-shadow:var(--cr-card-shadow);margin-bottom:20px;padding:20px}.check-item{border-radius:8px;border:2px solid var(--color-sys-divider,var(--cr-separator-color));margin-bottom:12px;padding:12px}.check-item.pass{border-color:var(--pass-color)}.check-item.fail{border-color:var(--fail-color)}.check-label{color:var(--color-sys-on-surface-subtle,var(--cr-secondary-text-color));margin-bottom:12px}.drive-state-header{border-top:1px solid var(--color-sys-divider,var(--cr-separator-color));font-size:18px;font-weight:600;margin-bottom:20px;margin-top:20px;padding-top:20px}.check-value{font-size:16px;font-weight:500}.check-value.pass{color:var(--pass-color)}.check-value.fail{color:var(--fail-color)}.response-input{background-color:var(--color-sys-surface,var(--cr-card-background-color));border-radius:8px;border:2px solid var(--color-sys-divider,var(--cr-separator-color));box-sizing:border-box;color:var(--color-sys-on-surface,var(--cr-primary-text-color));margin-bottom:12px;padding:12px;width:100%}.response-input:focus{outline:2px solid var(--color-sys-outline,var(--cr-focus-outline-color))}.response-input.fail{border-color:var(--fail-color)}.response-button-row{display:flex;flex-wrap:wrap;gap:8px}.footer{color:var(--color-sys-on-surface-subtle,var(--cr-secondary-text-color));text-align:center}`])}
// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml(){return html`
    <div class="content">
      <div class="check-item ${this.getCheckClass_(this.eligibilityState_.isEligible)}">
        <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isEligible)}">
          ${this.getEligibilityText_()}
        </span>
      </div>
      <div class="check-label">AIModeSettings Policy:</div>
      <div class="check-item">
        <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isEligibleByPolicy)}">
          ${this.getPolicyEligibilityText_()}
        </span>
      </div>
      <div class="check-label">ThirdPartyAiChatSettings Policy:</div>
      <div class="check-item">
        <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isThirdPartyEligibleByPolicy)}">
          ${this.getThirdPartyPolicyEligibilityText_()}
        </span>
      </div>
      <div class="check-label">Default Search Engine:</div>
      <div class="check-item">
        <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isEligibleByDse)}">
          ${this.getDseEligibilityText_()}
        </span>
      </div>
      ${this.eligibilityState_.isServerEligibilityEnabled?html`
        <div class="check-label">Eligibility Response Source:</div>
        <div class="check-item">
          <span class="check-value">
            ${this.eligibilityState_.eligibilityResponseSource}
          </span>
        </div>
        ${this.eligibilityState_.eligibilityResponseAuthType?html`
          <div class="check-label">Auth Type:</div>
          <div class="check-item">
            <span class="check-value">
              ${this.eligibilityState_.eligibilityResponseAuthType}
            </span>
          </div>
        `:""}
        <div class="check-label">Eligibility Response:</div>
        <div class="check-item">
          <div class="check-label">AIM:</div>
          <div class="check-item">
            <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isAimEligibleByServer)}">
              ${this.getAimEligibilityText_()}
            </span>
          </div>
          <div class="check-label">Fusebox:</div>
          <div class="check-item">
            <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isFuseboxEligibleByServer)}">
              ${this.getFuseboxEligibilityText_()}
            </span>
          </div>
          <div class="check-label">Co-Browse:</div>
          <div class="check-item">
            <span class="check-value ${this.getCheckClass_(this.eligibilityState_.isCobrowseEligibleByServer)}">
              ${this.getCobrowseEligibilityText_()}
            </span>
          </div>
          <input class="response-input ${this.inputState_}"
              .value="${this.eligibilityState_.eligibilityResponseBase64Encoded}"
              @input="${this.onResponseInput_}"
              placeholder="Base64 encoded server response">
          </input>
          <div class="response-button-row">
            <cr-button @click="${this.onServerRequestClick_}">
              Request
            </cr-button>
            <cr-button
                ?disabled="${!this.eligibilityState_.eligibilityResponseBase64Encoded}"
                @click="${this.onViewResponseClick_}">
              View
            </cr-button>
            <cr-button @click="${this.onDraftResponseClick_}">
              Draft
            </cr-button>
            <cr-button @click="${this.onSaveResponseClick_}">
              Save
            </cr-button>
          </div>
        </div>
      `:""}

      <div class="drive-state-header">Drive State</div>
      ${this.eligibilityState_.driveStatus?html`
        <div class="check-label">OVERALL: Is Drive Supported?</div>
        <div class="check-item ${this.getCheckClass_(this.eligibilityState_.driveStatus.isDriveSupported)}">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isDriveSupported)}">
            ${this.getDriveSupportedText_()}
          </span>
        </div>

        <div class="check-label">PEC API (INPUT_TYPE_DRIVE):</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isPecEligible)}">
            ${this.getPecEligibleText_()}
          </span>
        </div>

        <div class="check-label">Identity Match:</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isIdentityMatch)}">
            ${this.getIdentityMatchText_()}
          </span>
        </div>

        <div class="check-label">Incognito:</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(!this.eligibilityState_.driveStatus.isIncognito)}">
            ${this.getIncognitoText_()}
          </span>
        </div>

        <div class="check-label">Feature Flag (kComposeboxDriveContextMenuOption):</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isFeatureFlagEnabled)}">
            ${this.getFeatureFlagText_()}
          </span>
        </div>

        <div class="check-label">Disclaimer Feature Flag (kComposeboxDriveContextMenuOptionDisclaimer):</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isDisclaimerFlagEnabled)}">
            ${this.getDisclaimerFlagText_()}
          </span>
        </div>

        <div class="check-label">Search Content Sharing Policy:</div>
        <div class="check-item">
          <span class="check-value ${this.getCheckClass_(this.eligibilityState_.driveStatus.isSearchContentSharingEnabled)}">
            ${this.getSearchSharingText_()}
          </span>
        </div>

        <div class="check-label">Disclaimer Accepted (FACS):</div>
        <div class="check-item">
          <span class="check-value ${this.getDisclaimerClass_()}">
            ${this.getDisclaimerAcceptedText_()}
          </span>
        </div>
      `:html`
        <div class="check-item">
          <span class="check-value">Loading Drive State...</span>
        </div>
      `}
    </div>
    ${this.showFooter_?html`
      <div class="footer">
        Last updated: ${this.getLastUpdatedTimestamp_()}
      </div>
    `:""}
  `}
// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxy{handler;callbackRouter;constructor(){this.handler=new PageHandlerRemote;this.callbackRouter=new PageCallbackRouter;PageHandlerFactory.getRemote().createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(),this.handler.$.bindNewPipeAndPassReceiver())}getCallbackRouter(){return this.callbackRouter}getPageHandler(){return this.handler}static getInstance(){return instance||(instance=new BrowserProxy)}}let instance=null;
// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var InputState;(function(InputState){InputState["NONE"]="";InputState["FAIL"]="fail"})(InputState||(InputState={}));var CheckClass;(function(CheckClass){CheckClass["PASS"]="pass";CheckClass["FAIL"]="fail"})(CheckClass||(CheckClass={}));class AimEligibilityAppElement extends CrLitElement{static get is(){return"aim-eligibility-app"}static get styles(){return getCss()}render(){return getHtml.bind(this)()}static get properties(){return{eligibilityState_:{type:Object},inputState_:{type:String},showFooter_:{type:Boolean}}}#eligibilityState__accessor_storage={isEligible:false,isEligibleByDse:false,isEligibleByPolicy:false,isThirdPartyEligibleByPolicy:false,isAimEligibleByServer:false,isFuseboxEligibleByServer:false,isCobrowseEligibleByServer:false,isServerEligibilityEnabled:false,lastUpdated:new Date(0),eligibilityResponseBase64Encoded:"",eligibilityResponseSource:"",eligibilityResponseAuthType:null,driveStatus:null};get eligibilityState_(){return this.#eligibilityState__accessor_storage}set eligibilityState_(value){this.#eligibilityState__accessor_storage=value}#inputState__accessor_storage=InputState.NONE;get inputState_(){return this.#inputState__accessor_storage}set inputState_(value){this.#inputState__accessor_storage=value}#showFooter__accessor_storage=loadTimeData.getBoolean("showAimEligibilityFooter");get showFooter_(){return this.#showFooter__accessor_storage}set showFooter_(value){this.#showFooter__accessor_storage=value}callbackRouter_=BrowserProxy.getInstance().getCallbackRouter();listenerIds_=[];openWindowProxy_=OpenWindowProxyImpl.getInstance();pageHandler_=BrowserProxy.getInstance().getPageHandler();connectedCallback(){super.connectedCallback();ColorChangeUpdater.forDocument().start();this.listenerIds_.push(this.callbackRouter_.onEligibilityStateChanged.addListener(this.onEligibilityStateChanged_.bind(this)));this.listenerIds_.push(this.callbackRouter_.onDriveStatusChanged.addListener(this.onDriveStatusChanged_.bind(this)));this.pageHandler_.getEligibilityState().then((({state:state})=>this.onEligibilityStateChanged_(state)))}disconnectedCallback(){super.disconnectedCallback();for(const listenerId of this.listenerIds_){this.callbackRouter_.removeListener(listenerId)}this.listenerIds_=[]}onResponseInput_(e){this.eligibilityState_={...this.eligibilityState_,eligibilityResponseBase64Encoded:e.target.value};this.inputState_=InputState.NONE}onServerRequestClick_(){this.pageHandler_.requestServerEligibilityForDebugging()}onViewResponseClick_(){this.openWindowProxy_.openUrl(this.getProtoshopUrl_(this.eligibilityState_.eligibilityResponseBase64Encoded))}onDraftResponseClick_(){this.openWindowProxy_.openUrl(this.getProtoshopUrl_(""))}async onSaveResponseClick_(){const result=await this.pageHandler_.setEligibilityResponseForDebugging(this.eligibilityState_.eligibilityResponseBase64Encoded);this.inputState_=result.success?InputState.NONE:InputState.FAIL}getCheckClass_(isPass){return isPass?CheckClass.PASS:CheckClass.FAIL}getEligibilityText_(){return this.eligibilityState_.isEligible?"✓ Eligible":"✗ Not Eligible"}getPolicyEligibilityText_(){return this.eligibilityState_.isEligibleByPolicy?"✓ Allowed":"✗ Blocked"}getThirdPartyPolicyEligibilityText_(){return this.eligibilityState_.isThirdPartyEligibleByPolicy?"✓ Allowed":"✗ Blocked"}getDseEligibilityText_(){return this.eligibilityState_.isEligibleByDse?"✓ Google":"✗ Not Google"}getAimEligibilityText_(){return this.eligibilityState_.isAimEligibleByServer?"✓ Eligible":"✗ Not Eligible"}getFuseboxEligibilityText_(){return this.eligibilityState_.isFuseboxEligibleByServer?"✓ Eligible":"✗ Not Eligible"}getCobrowseEligibilityText_(){return this.eligibilityState_.isCobrowseEligibleByServer?"✓ Eligible":"✗ Not Eligible"}getDriveSupportedText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isDriveSupported?"✓ Drive Supported":"✗ Drive Not Supported"}getPecEligibleText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isPecEligible?"✓ Yes":"✗ No"}getIdentityMatchText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isIdentityMatch?"✓ Match":"✗ No Match"}getIncognitoText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isIncognito?"✓ Yes":"✗ No"}getFeatureFlagText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isFeatureFlagEnabled?"✓ Enabled":"✗ Disabled"}getDisclaimerFlagText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isDisclaimerFlagEnabled?"✓ Enabled":"✗ Disabled"}getForceDisclaimerText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isForceDriveDisclaimerAccepted?"✓ Enabled":"✗ Disabled"}getSearchSharingText_(){if(!this.eligibilityState_.driveStatus){return""}return this.eligibilityState_.driveStatus.isSearchContentSharingEnabled?"✓ Enabled":"✗ Disabled"}getDisclaimerAcceptedText_(){const status=this.eligibilityState_.driveStatus;if(!status){return"Loading..."}const forced=status.isForceDriveDisclaimerAccepted;switch(status.disclaimerState){case DisclaimerState.kAccepted:return forced?"✓ Accepted (Forced by flag)":"✓ Accepted";case DisclaimerState.kNotAccepted:return"✗ Not Accepted";case DisclaimerState.kRestricted:return"✗ Restricted";default:return"Unknown"}}getDisclaimerClass_(){const status=this.eligibilityState_.driveStatus;if(!status){return""}switch(status.disclaimerState){case DisclaimerState.kAccepted:return CheckClass.PASS;case DisclaimerState.kNotAccepted:case DisclaimerState.kRestricted:return CheckClass.FAIL;default:return CheckClass.FAIL}}getLastUpdatedTimestamp_(){return this.eligibilityState_.lastUpdated.getTime()>0?this.eligibilityState_.lastUpdated.toLocaleString():""}onEligibilityStateChanged_(state){const oldDriveStatus=this.eligibilityState_.driveStatus;this.eligibilityState_=state;if(!this.eligibilityState_.driveStatus&&oldDriveStatus){this.eligibilityState_.driveStatus=oldDriveStatus}this.inputState_=InputState.NONE}onDriveStatusChanged_(status){this.eligibilityState_={...this.eligibilityState_,driveStatus:status}}getProtoshopUrl_(base64Proto){const protoType="com.google.gws.plugins.aim.AimEligibilityResponse";if(!base64Proto){return`http://protoshop/${protoType}`}return`http://protoshop/embed?tabs=textproto&type=${protoType}&protobytes=${encodeURIComponent(base64Proto)}`}}customElements.define(AimEligibilityAppElement.is,AimEligibilityAppElement);export{AimEligibilityAppElement};