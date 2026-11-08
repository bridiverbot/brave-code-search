import{css,html,CrLitElement,render,nothing,directive,AsyncDirective,PartType}from"chrome://resources/lit/v3_0/lit.rollup.js";import"chrome://resources/brave/leo.bundle.js";import"chrome://extensions/strings.m.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{addWebUiListener,removeWebUiListener,sendWithPromise}from"chrome://resources/js/cr.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";const sheet$1=new CSSStyleSheet;sheet$1.replaceSync(`html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-100-rgb:244,199,195;--google-red-100:rgb(var(--google-red-100-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-red-700-rgb:197,57,41;--google-red-700:rgb(var(--google-red-700-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--google-yellow-700-rgb:240,147,0;--google-yellow-700:rgb(var(--google-yellow-700-rgb));--cr-card-background-color:white;--cr-shadow-key-color_:color-mix(in srgb,var(--cr-shadow-color) 30%,transparent);--cr-shadow-ambient-color_:color-mix(in srgb,var(--cr-shadow-color) 15%,transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb),0.1);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:var(--cr-elevation-2);--cr-separator-color:rgba(0,0,0,.06);--cr-title-text-color:rgb(90,90,90);--cr-scrollable-border-color:var(--google-grey-300);--cr-button-edge-spacing:12px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb),.14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1;--cr-fallback-color-outline:rgb(116,119,117);--cr-fallback-color-primary:rgb(11,87,208);--cr-fallback-color-on-primary:rgb(255,255,255);--cr-fallback-color-primary-container:rgb(211,227,253);--cr-fallback-color-on-primary-container:rgb(4,30,73);--cr-fallback-color-secondary-container:rgb(194,231,255);--cr-fallback-color-on-secondary-container:rgb(0,29,53);--cr-fallback-color-neutral-container:rgb(242,242,242);--cr-fallback-color-neutral-outline:rgb(199,199,199);--cr-fallback-color-surface:rgb(255,255,255);--cr-fallback-color-surface1:rgb(248,250,253);--cr-fallback-color-surface2:rgb(243,246,252);--cr-fallback-color-surface3:rgb(239,243,250);--cr-fallback-color-surface4:rgb(237,242,250);--cr-fallback-color-surface5:rgb(234,240,249);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225,227,225);--cr-fallback-color-on-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-subtle:rgb(71,71,71);--cr-fallback-color-inverse-primary:rgb(168,199,250);--cr-fallback-color-inverse-surface:rgb(48,48,48);--cr-fallback-color-inverse-on-surface:rgb(242,242,242);--cr-fallback-color-tonal-container:rgb(211,227,253);--cr-fallback-color-on-tonal-container:rgb(4,30,73);--cr-fallback-color-tonal-outline:rgb(168,199,250);--cr-fallback-color-error:rgb(179,38,30);--cr-fallback-color-divider:rgb(211,227,253);--cr-fallback-color-state-hover-on-prominent_:rgba(253,252,251,.1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(var(--cr-fallback-color-state-ripple-primary-rgb_),0.32);--cr-fallback-color-base-container:rgb(236,239,247);--cr-fallback-color-disabled-background:rgba(var(--cr-fallback-color-on-surface-rgb),.12);--cr-fallback-color-disabled-foreground:rgba(var(--cr-fallback-color-on-surface-rgb),var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,rgba(var(--cr-fallback-color-on-surface-rgb),.08));--cr-hover-on-prominent-background-color:var(--color-sys-state-hover-on-prominent,var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(--color-sys-state-hover-on-subtle,var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,rgba(var(--cr-fallback-color-on-surface-rgb),.12));--cr-active-on-primary-background-color:var(--color-sys-state-ripple-primary,var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(--color-sys-state-ripple-neutral-on-subtle,var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,var(--cr-fallback-color-primary));--cr-focus-outline-inverse-color:var(--color-sys-state-focus-ring-inverse,var(--cr-fallback-color-inverse-primary));--cr-primary-text-color:var(--color-primary-foreground,var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow,rgb(0,0,0));--cr-checked-color:var(--color-checkbox-foreground-checked,var(--cr-fallback-color-primary))}html[webui-refresh-2026]{--cr-card-background-color:var(--color-webui-card-background)}@media (prefers-color-scheme:dark){html{--cr-fallback-color-outline:rgb(142,145,143);--cr-fallback-color-primary:rgb(168,199,250);--cr-fallback-color-on-primary:rgb(6,46,111);--cr-fallback-color-primary-container:rgb(8,66,160);--cr-fallback-color-on-primary-container:rgb(211,227,253);--cr-fallback-color-secondary-container:rgb(0,74,119);--cr-fallback-color-on-secondary-container:rgb(194,231,255);--cr-fallback-color-neutral-container:rgb(40,40,40);--cr-fallback-color-neutral-outline:rgb(117,117,117);--cr-fallback-color-surface:rgb(31,31,31);--cr-fallback-color-surface1:rgb(39,40,42);--cr-fallback-color-surface2:rgb(45,47,49);--cr-fallback-color-surface3:rgb(51,52,56);--cr-fallback-color-surface4:rgb(52,54,58);--cr-fallback-color-surface5:rgb(56,58,62);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68,71,70);--cr-fallback-color-on-surface-variant:rgb(196,199,197);--cr-fallback-color-on-surface-subtle:rgb(199,199,199);--cr-fallback-color-inverse-primary:rgb(11,87,208);--cr-fallback-color-inverse-surface:rgb(227,227,227);--cr-fallback-color-inverse-on-surface:rgb(31,31,31);--cr-fallback-color-tonal-container:rgb(0,74,119);--cr-fallback-color-on-tonal-container:rgb(194,231,255);--cr-fallback-color-tonal-outline:rgb(4,125,183);--cr-fallback-color-error:rgb(242,184,181);--cr-fallback-color-divider:rgb(94,94,94);--cr-fallback-color-state-hover-on-prominent_:rgba(31,31,31,.06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(var(--cr-fallback-color-state-on-subtle-rgb_),.16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40,40,40,1);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb),0.1);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255,255,255,.06);--cr-menu-shadow:rgba(0,0,0,.3) 0 1px 2px 0,rgba(0,0,0,.15) 0 3px 6px 2px;--cr-separator-color:rgba(255,255,255,.1);--cr-title-text-color:var(--cr-primary-text-color);--cr-scrollable-border-color:var(--google-grey-700)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent;--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}@media (prefers-reduced-motion:reduce){html{--cr-animations-disabled:1}}`);document.adoptedStyleSheets=[...document.adoptedStyleSheets,sheet$1];
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertInstanceof(value,type,message){if(value instanceof type){return}throw new Error(`Value ${value} is not of type ${type.name||typeof type}`)}function assertNotReached(message="Unreachable code hit"){assert(false,message)}function assertNotReachedCase(_param,message){assertNotReached(message)}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function listenOnce(target,eventNames,callback){const eventNamesArray=Array.isArray(eventNames)?eventNames:eventNames.split(/ +/);const removeAllAndCallCallback=function(event){eventNamesArray.forEach((function(eventName){target.removeEventListener(eventName,removeAllAndCallCallback,false)}));return callback(event)};eventNamesArray.forEach((function(eventName){target.addEventListener(eventName,removeAllAndCallCallback,false)}))}function hasKeyModifiers(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}let instance$1e=null;function getCss$1b(){return instance$1e||(instance$1e=[...[],css`:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}:host dialog,#container{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,0.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:none}:host ::slotted([slot='body']){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}picture,#product-logo{height:24px;width:24px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$Y(){return html`
<dialog id="dialog" @cancel="${this.onDialogCancel_}"
    @click="${this.onDialogClick_}" @close="${this.onDialogClose_}">
  <div id="container" @click="${this.onContainerClick_}">
    <div class="drawer-header">
      <slot name="header-icon">
        <picture>
          <source media="(prefers-color-scheme: dark)"
              srcset="//resources/images/chrome_logo_dark.svg">
          <img id="product-logo"
              srcset="chrome://theme/current-channel-logo@1x 1x,
                      chrome://theme/current-channel-logo@2x 2x"
              role="presentation">
        </picture>
      </slot>
      <div id="heading" tabindex="-1">${this.heading}</div>
    </div>
    <slot name="body"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends CrLitElement{static get is(){return"cr-drawer"}static get styles(){return getCss$1b()}render(){return getHtml$Y.bind(this)()}static get properties(){return{heading:{type:String},show_:{type:Boolean,reflect:true},align:{type:String,reflect:true}}}#heading_accessor_storage="";get heading(){return this.#heading_accessor_storage}set heading(value){this.#heading_accessor_storage=value}#align_accessor_storage="ltr";get align(){return this.#align_accessor_storage}set align(value){this.#align_accessor_storage=value}#show__accessor_storage=false;get show_(){return this.#show__accessor_storage}set show_(value){this.#show__accessor_storage=value}get open(){return this.$.dialog.open}set open(_value){assertNotReached("Cannot set |open|.")}toggle(){if(this.open){this.cancel()}else{this.openDrawer()}}async openDrawer(){if(this.open){return}this.$.dialog.showModal();this.show_=true;await this.updateComplete;this.fire("cr-drawer-opening");listenOnce(this.$.dialog,"transitionend",(()=>{this.fire("cr-drawer-opened")}))}dismiss_(cancel){if(!this.open){return}this.show_=false;listenOnce(this.$.dialog,"transitionend",(()=>{this.$.dialog.close(cancel?"canceled":"closed")}))}cancel(){this.dismiss_(true)}close(){this.dismiss_(false)}wasCanceled(){return!this.open&&this.$.dialog.returnValue==="canceled"}onContainerClick_(event){event.stopPropagation()}onDialogClick_(){this.cancel()}onDialogCancel_(event){event.preventDefault();this.cancel()}onDialogClose_(){this.fire("close")}}customElements.define(CrDrawerElement.is,CrDrawerElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLazyRenderLitElement extends CrLitElement{static get is(){return"cr-lazy-render-lit"}render(){if(this.rendered_){render(this.template(),this.parentNode,{host:this.getRootNode().host,renderBefore:this})}return html``}static get properties(){return{template:{type:Object},rendered_:{type:Boolean,state:true}}}#rendered__accessor_storage=false;get rendered_(){return this.#rendered__accessor_storage}set rendered_(value){this.#rendered__accessor_storage=value}#template_accessor_storage=()=>html``;get template(){return this.#template_accessor_storage}set template(value){this.#template_accessor_storage=value}child_=null;get(){if(!this.rendered_){this.rendered_=true;this.performUpdate();this.child_=this.previousElementSibling}assert(this.child_);return this.child_}getIfExists(){return this.child_}}customElements.define(CrLazyRenderLitElement.is,CrLazyRenderLitElement);let instance$1d=null;function getCss$1a(){return instance$1d||(instance$1d=[...[],css`:host{--cr-toast-background:var(--color-toast-background,var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,var(--cr-fallback-color-inverse-on-surface));--cr-focus-outline-color:var(--cr-focus-outline-inverse-color);align-items:center;background:var(--cr-toast-background);border-radius:8px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,0.28);box-sizing:border-box;display:flex;line-height:20px;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 16px;position:fixed;transform:translateY(100px);transition:opacity 300ms,transform 300ms;visibility:hidden;z-index:1}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host(:not([open])) ::slotted(*){display:none}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent !important;border:none !important;color:var(--cr-toast-button-color) !important;margin-inline-start:32px !important;min-width:52px !important;padding:8px !important}:host ::slotted(cr-button:hover){background-color:transparent !important}::slotted(cr-button:last-of-type){margin-inline-end:-8px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$X(){return html`<slot></slot>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends CrLitElement{static get is(){return"cr-toast"}static get styles(){return getCss$1a()}render(){return getHtml$X.bind(this)()}static get properties(){return{duration:{type:Number},open:{type:Boolean,reflect:true}}}#duration_accessor_storage=0;get duration(){return this.#duration_accessor_storage}set duration(value){this.#duration_accessor_storage=value}#open_accessor_storage=false;get open(){return this.#open_accessor_storage}set open(value){this.#open_accessor_storage=value}hideTimeoutId_=null;constructor(){super();this.addEventListener("focusin",this.clearTimeout_);this.addEventListener("focusout",this.resetAutoHide_)}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("duration")||changedProperties.has("open")){this.resetAutoHide_()}}clearTimeout_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}}resetAutoHide_(){this.clearTimeout_();if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}async show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.open=true;await this.updateComplete;this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}async hide(){this.open=false;await this.updateComplete}}customElements.define(CrToastElement.is,CrToastElement);let instance$1c=null;function getCss$19(){return instance$1c||(instance$1c=[...[],css`[hidden],:host([hidden]){display:none !important}`])}let instance$1b=null;function getCss$18(){return instance$1b||(instance$1b=[...[getCss$19()],css`#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:var(--cr-toast-white-space,nowrap)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$W(){return html`
<cr-toast id="toast" .duration="${this.duration}">
  <div id="content" class="elided-text"></div>
  <slot id="slotted"></slot>
</cr-toast>`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let toastManagerInstance=null;function getToastManager(){assert(toastManagerInstance);return toastManagerInstance}function setInstance(instance){assert(!instance||!toastManagerInstance);toastManagerInstance=instance}class CrToastManagerElement extends CrLitElement{static get is(){return"cr-toast-manager"}static get styles(){return getCss$18()}render(){return getHtml$W.bind(this)()}static get properties(){return{duration:{type:Number}}}#duration_accessor_storage=0;get duration(){return this.#duration_accessor_storage}set duration(value){this.#duration_accessor_storage=value}get isToastOpen(){return this.$.toast.open}get slottedHidden(){return this.$.slotted.hidden}connectedCallback(){super.connectedCallback();setInstance(this)}disconnectedCallback(){super.disconnectedCallback();setInstance(null)}show(label,hideSlotted=false){this.$.content.textContent=label;this.showInternal_(hideSlotted)}showForStringPieces(pieces,hideSlotted=false){const content=this.$.content;content.textContent="";pieces.forEach((function(p){if(p.value.length===0){return}const span=document.createElement("span");span.textContent=p.value;if(p.collapsible){span.classList.add("collapsible")}content.appendChild(span)}));this.showInternal_(hideSlotted)}showInternal_(hideSlotted){this.$.slotted.hidden=hideSlotted;this.$.toast.show()}hide(){this.$.toast.hide()}}customElements.define(CrToastManagerElement.is,CrToastManagerElement);let instance$1a=null;function getCss$17(){return instance$1a||(instance$1a=[...[getCss$19()],css`:host{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle;fill:var(--iron-icon-fill-color,currentcolor);stroke:var(--iron-icon-stroke-color,none);width:var(--iron-icon-width,24px);height:var(--iron-icon-height,24px)}:host-context([webui-refresh-2026]){&:host(:focus){border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let iconsetMap=null;class IconsetMap extends EventTarget{iconsets_=new Map;static getInstance(){return iconsetMap||(iconsetMap=new IconsetMap)}static resetInstanceForTesting(instance){iconsetMap=instance}get(id){return this.iconsets_.get(id)||null}set(id,iconset){assert(!this.iconsets_.has(id),`Tried to add a second iconset with id '${id}'`);this.iconsets_.set(id,iconset);this.dispatchEvent(new CustomEvent("cr-iconset-added",{detail:id}))}}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrIconElement extends CrLitElement{static get is(){return"cr-icon"}static get styles(){return getCss$17()}static get properties(){return{icon:{type:String}}}#icon_accessor_storage="";get icon(){return this.#icon_accessor_storage}set icon(value){this.#icon_accessor_storage=value}iconsetName_="";iconName_="";iconset_=null;updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("icon")){const[iconsetName,iconName]=this.icon.split(":");this.iconName_=iconName||"";this.iconsetName_=iconsetName||"";this.updateIcon_()}}updateIcon_(){if(this.iconName_===""&&this.iconset_){this.iconset_.removeIcon(this)}else if(this.iconsetName_){const iconsetMap=IconsetMap.getInstance();this.iconset_=iconsetMap.get(this.iconsetName_);assert(this.iconset_,`Could not find iconset for: '${this.iconsetName_}:${this.iconName_}'`);this.iconset_.applyIcon(this,this.iconName_)}}}customElements.define(CrIconElement.is,CrIconElement);
// Copyright (c) 2024 The Brave Authors. All rights reserved.
function injectStyle(element,css){const originalStyles=element.styles;Object.defineProperty(element,"styles",{get(){return[...originalStyles,css]}});element.elementStyles=element.finalizeStyles(element.styles)}
// Copyright (c) 2024 The Brave Authors. All rights reserved.
const leoIcons=window.leoIcons;const iconMap={"app-management:location":"location-on","app-management:camera":"video-camera","app-management:microphone":"microphone","settings:accessibility":"accessibility","settings:security":"lock","settings:search":"search","settings:palette":"appearance","settings:password-manager":"list-checks","settings:language":"product-translate","settings:build":"settings","settings:restart-alt":"backward","settings:location-on":"location-on","privacy:location-on":"location-on","privacy:location-off":"location-off","cr:videocam":"video-camera","privacy:videocam-off":"video-camera-off","cr:mic":"microphone","privacy:mic":"microphone","privacy:mic-off":"microphone-off","privacy:sensors":"motion-sensor","privacy:sensors-off":"motion-sensor-off","privacy:notifications":"notification","privacy:notifications-off":"notification-off","privacy:code":"code","privacy:code-off":"code-off","settings:cookie":"cookie","privacy:cookie":"cookie","privacy:lock":"lock","privacy:imagesmode":"image","privacy:hide-image":"image-off","cr:open-in-new":"launch","privacy:open-in-new-off":"launch-off","settings:ads":"","cr:sync":"product-sync","privacy:volume-up":"volume-on","privacy:volume-off":"volume-off","cr:download":"download","privacy:protocol-handler":"protocol-handler","privacy:protocol-handler-off":"protocol-handler-off","privacy:file-download-off":"download-off","privacy:piano":"media-visualizer","privacy:piano-off":"media-visualizer-off","privacy:usb":"usb","privacy:usb-off":"usb-off","privacy:developer-board":"cpu-chip","privacy:developer-board-off":"cpu-chip-off","privacy:file-save":"file-edit","privacy:file-save-off":"file-corrupted","privacy:videogame-asset":"sparkles","privacy:videogame-asset-off":"sparkles-off","privacy:sync-saved-locally":"key-lock","privacy:web-asset-off":"key-lock-off","privacy:content-paste":"copy","privacy:content-paste-off":"copy-off","privacy:credit-card":"credit-card","privacy:credit-card-off":"credit-card-off","settings:bluetooth-searching":"bluetooth","settings:bluetooth-disabled":"bluetooth-off","privacy:warning":"warning-triangle-outline","privacy:federated-identity-api":"","privacy:cardboard":"virtual-reality","privacy:cardboard-off":"virtual-reality-off","privacy:select-window":"windows-open","privacy:select-window-off":"window-tab-close","privacy:font-download":"font-size","privacy:font-download-off":"font-size-off","privacy:zoom-in":"search-zoom-in","privacy:drive-pdf":"file","privacy:open-in-browser":"window","settings20:chrome-product":"hearts","settings20:incognito-unfilled":"product-private-window","settings20:incognito":"product-private-window","settings20:lightbulb":"idea","settings20:lightbulb-2":"idea","cr:delete":"trash","cr:security":"lock","privacy:page-info":"tune","cr:fullscreen":"fullscreen-on","settings:picture-in-picture":"picture-in-picture","cr:file-download":"download","cr:search":"search","cr:print":"print","cr:add":"plus-add","cr:expand-more":"carat-down","cr:chevron-right":"carat-right","cr:arrow-back":"browser-back","cr:more-vert":"more-vertical","cr:clear":"close","sp:filter-list":"filter","settings:download":"download","settings:performance":"cpu-chip","bookmarks:delete":"trash","bookmarks:move":"folder-export","bookmarks:bookmarks-bar":"window","bookmarks:visual-view":"list-bullet-default","bookmarks:compact-view":"content-compact","tab-search:auto-tab-groups":"product-brave-leo"};injectStyle(CrIconElement,css`:host {
  --leo-icon-size: var(--iron-icon-width, 24px);
  --leo-icon-color: var(--iron-icon-fill-color, currentColor);
 }`);const proto=CrIconElement.prototype;const old=proto.updateIcon_;proto.updateIcon_=function(...args){const removeAllOfType=type=>{for(const node of this.shadowRoot.querySelectorAll(type))node.remove()};const unroundedIcon=this.icon.replace(/-old$/,"");const name=iconMap[this.icon]??iconMap[unroundedIcon];if(name||leoIcons.has(this.icon)){removeAllOfType("svg");let leoIcon=this.shadowRoot.querySelector("leo-icon");if(!leoIcon){leoIcon=document.createElement("leo-icon");this.shadowRoot.append(leoIcon)}leoIcon.setAttribute("name",name??this.icon)}else{removeAllOfType("leo-icon");old.apply(this,args)}};
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const isMac=/Mac/.test(navigator.platform);const isWindows=/Win/.test(navigator.platform);const isChromeOS=(()=>{let returnValue=false;return returnValue})();const isAndroid=/Android/.test(navigator.userAgent);const isIOS=/CriOS/.test(navigator.userAgent);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{listeners_=[];add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}let instance$19=null;function getCss$16(){return instance$19||(instance$19=[...[],css`:host{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translate3d(0,0,0)}.ripple{background-color:currentcolor;left:0;opacity:var(--paper-ripple-opacity,0.25);pointer-events:none;position:absolute;will-change:height,transform,width}.ripple,:host(.circle){border-radius:50%}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_RADIUS_PX=300;const MIN_DURATION_MS=800;function distance(x1,y1,x2,y2){const xDelta=x1-x2;const yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)}class CrRippleElement extends CrLitElement{static get is(){return"cr-ripple"}static get styles(){return getCss$16()}static get properties(){return{holdDown:{type:Boolean},recenters:{type:Boolean},noink:{type:Boolean}}}#holdDown_accessor_storage=false;get holdDown(){return this.#holdDown_accessor_storage}set holdDown(value){this.#holdDown_accessor_storage=value}#recenters_accessor_storage=false;get recenters(){return this.#recenters_accessor_storage}set recenters(value){this.#recenters_accessor_storage=value}#noink_accessor_storage=false;get noink(){return this.#noink_accessor_storage}set noink(value){this.#noink_accessor_storage=value}ripples_=[];eventTracker_=new EventTracker;connectedCallback(){super.connectedCallback();assert(this.parentNode);const keyEventTarget=this.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?this.parentNode.host:this.parentElement;this.eventTracker_.add(keyEventTarget,"pointerdown",(e=>this.uiDownAction(e)));this.eventTracker_.add(keyEventTarget,"pointerup",(()=>this.uiUpAction()));this.eventTracker_.add(keyEventTarget,"pointerout",(()=>this.uiUpAction()));this.eventTracker_.add(keyEventTarget,"keydown",(e=>{if(e.defaultPrevented){return}if(e.key==="Enter"){this.onEnterKeydown_();return}if(e.key===" "){this.onSpaceKeydown_()}}));this.eventTracker_.add(keyEventTarget,"keyup",(e=>{if(e.defaultPrevented){return}if(e.key===" "){this.onSpaceKeyup_()}}))}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("holdDown")){this.holdDownChanged_(this.holdDown,changedProperties.get("holdDown"))}}uiDownAction(e){if(e!==undefined&&e.button!==0){return}if(!this.noink){this.downAction_(e)}}downAction_(e){if(this.ripples_.length&&this.holdDown){return}this.showRipple_(e)}clear(){this.hideRipple_();this.holdDown=false}showAndHoldDown(){this.ripples_.forEach((ripple=>{ripple.remove()}));this.ripples_=[];this.holdDown=true}showRipple_(e){const rect=this.getBoundingClientRect();const roundedCenterX=function(){return Math.round(rect.width/2)};const roundedCenterY=function(){return Math.round(rect.height/2)};let x=0;let y=0;const centered=!e;if(centered){x=roundedCenterX();y=roundedCenterY()}else{x=Math.round(e.clientX-rect.left);y=Math.round(e.clientY-rect.top)}const corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];const cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));const radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));const startTranslate=`${x-radius}px, ${y-radius}px`;let endTranslate=startTranslate;if(this.recenters&&!centered){endTranslate=`${roundedCenterX()-radius}px, ${roundedCenterY()-radius}px`}const ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples_.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:[`translate(${startTranslate}) scale(0)`,`translate(${endTranslate}) scale(1)`]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})}uiUpAction(){if(!this.noink){this.upAction_()}}upAction_(){if(!this.holdDown){this.hideRipple_()}}hideRipple_(){if(this.ripples_.length===0){return}this.ripples_.forEach((function(ripple){const opacity=ripple.computedStyleMap().get("opacity")??null;if(opacity===null){ripple.remove();return}const animation=ripple.animate({opacity:[opacity.value,0]},{duration:150,fill:"forwards"});animation.finished.then((()=>{ripple.remove()}))}));this.ripples_=[]}onEnterKeydown_(){this.uiDownAction();window.setTimeout((()=>{this.uiUpAction()}),1)}onSpaceKeydown_(){this.uiDownAction()}onSpaceKeyup_(){this.uiUpAction()}holdDownChanged_(newHoldDown,oldHoldDown){if(oldHoldDown===undefined){return}if(newHoldDown){this.downAction_()}else{this.upAction_()}}}customElements.define(CrRippleElement.is,CrRippleElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRippleMixin=superClass=>{class CrRippleMixin extends superClass{static get properties(){return{noink:{type:Boolean}}}#noink_accessor_storage=false;get noink(){return this.#noink_accessor_storage}set noink(value){this.#noink_accessor_storage=value}rippleContainer=null;ripple_=null;updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("noink")&&this.hasRipple()){assert(this.ripple_);this.ripple_.noink=this.noink}}ensureRippleOnPointerdown(){this.addEventListener("pointerdown",(()=>this.ensureRipple()),{capture:true})}ensureRipple(){if(this.hasRipple()){return}this.ripple_=this.createRipple();this.ripple_.noink=this.noink;const rippleContainer=this.rippleContainer||this.shadowRoot;assert(rippleContainer);rippleContainer.appendChild(this.ripple_)}getRipple(){this.ensureRipple();assert(this.ripple_);return this.ripple_}hasRipple(){return Boolean(this.ripple_)}createRipple(){const ripple=document.createElement("cr-ripple");ripple.id="ink";return ripple}}return CrRippleMixin};let instance$18=null;function getCss$15(){return instance$18||(instance$18=[...[],css`:host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:32px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:none;overflow:hidden;pointer-events:auto;position:relative;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host(:hover:not([disabled])){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}#ink{--paper-ripple-opacity:1;color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([suppress-rtl-flip]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([suppress-rtl-flip])[multiple-icons_]) cr-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);pointer-events:none;position:relative;width:100%}cr-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color,none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$V(){return html`
<div id="icon">
  <div id="maskedImage"></div>
</div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=CrRippleMixin(CrLitElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get styles(){return getCss$15()}render(){return getHtml$V.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},ironIcon:{type:String,reflect:true},suppressRtlFlip:{type:Boolean,value:false,reflect:true},multipleIcons_:{type:Boolean,reflect:true}}}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#ironIcon_accessor_storage;get ironIcon(){return this.#ironIcon_accessor_storage}set ironIcon(value){this.#ironIcon_accessor_storage=value}#suppressRtlFlip_accessor_storage=false;get suppressRtlFlip(){return this.#suppressRtlFlip_accessor_storage}set suppressRtlFlip(value){this.#suppressRtlFlip_accessor_storage=value}#multipleIcons__accessor_storage=false;get multipleIcons_(){return this.#multipleIcons__accessor_storage}set multipleIcons_(value){this.#multipleIcons__accessor_storage=value}spaceKeyDown_=false;constructor(){super();this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.ensureRippleOnPointerdown()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("ironIcon")){const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1}}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false");this.disabledChanged_(this.disabled,changedProperties.get("disabled"))}if(changedProperties.has("ironIcon")){this.onIronIconChanged_()}}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("tabindex",String(this.disabled?-1:0))}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("cr-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");icons.forEach((async icon=>{const crIcon=document.createElement("cr-icon");crIcon.icon=icon;crIcon.setAttribute("part","icon");this.$.icon.appendChild(crIcon);await crIcon.updateComplete;crIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}))}onKeyDown_(e){if(e.key!==" "&&(e.key!=="Enter"||isMac&&e.ctrlKey)){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"&&!(isMac&&e.ctrlKey)){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);let instance$17=null;function getCss$14(){return instance$17||(instance$17=[...[],css`:host{display:none}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$U(){return html`
<svg id="baseSvg" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${this.size} ${this.size}" preserveAspectRatio="xMidYMid meet"
    focusable="false">
</svg>
<slot></slot>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const APPLIED_ICON_CLASS="cr-iconset-svg-icon_";class CrIconsetElement extends CrLitElement{static get is(){return"cr-iconset"}static get styles(){return getCss$14()}render(){return getHtml$U.bind(this)()}static get properties(){return{name:{type:String},size:{type:Number}}}#name_accessor_storage="";get name(){return this.#name_accessor_storage}set name(value){this.#name_accessor_storage=value}#size_accessor_storage=24;get size(){return this.#size_accessor_storage}set size(value){this.#size_accessor_storage=value}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("name")){assert(changedProperties.get("name")===undefined);IconsetMap.getInstance().set(this.name,this)}}applyIcon(element,iconName){this.removeIcon(element);const svg=this.cloneIcon_(iconName);if(svg){svg.classList.add(APPLIED_ICON_CLASS);element.shadowRoot.insertBefore(svg,element.shadowRoot.childNodes[0]);return svg}return null}createIcon(iconName){return this.cloneIcon_(iconName)}removeIcon(element){const oldSvg=element.shadowRoot.querySelector(`.${APPLIED_ICON_CLASS}`);if(oldSvg){oldSvg.remove()}}cloneIcon_(id){const sourceSvg=this.querySelector(`g[id="${id}"]`);if(!sourceSvg){return null}const svgClone=this.$.baseSvg.cloneNode(true);const content=sourceSvg.cloneNode(true);content.removeAttribute("id");const contentViewBox=content.getAttribute("viewBox");if(contentViewBox){svgClone.setAttribute("viewBox",contentViewBox)}svgClone.style.display="block";svgClone.style.height="100%";svgClone.style.width="100%";svgClone.style.pointerEvents="none";svgClone.appendChild(content);return svgClone}}customElements.define(CrIconsetElement.is,CrIconsetElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedHTML(literal){return staticPolicy.createHTML("",literal)}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const div$1=document.createElement("div");if(document.documentElement.hasAttribute("webui-rounded-icons")){div$1.innerHTML=getTrustedHTML`
<cr-iconset name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="".
      -->
      <g id="cloud-off">
        <path d="M5 16c-1.113 0-2.063-.387-2.836-1.164C1.387 14.062 1 13.113 1 12a3.84 3.84 0 0 1 1.082-2.73A3.895 3.895 0 0 1 4.73 8.02c.047-.149.09-.293.137-.434.047-.14.106-.281.176-.418L2.395 4.52a.725.725 0 0 1-.227-.532c0-.199.074-.379.227-.531a.73.73 0 0 1 .53-.227c.204 0 .38.075.532.227l13.086 13.086a.712.712 0 0 1 .227.52.712.712 0 0 1-.227.519.729.729 0 0 1-1.063 0L13.875 16Zm0-1.5h7.375L6.207 8.332c-.055.184-.105.367-.156.555a8.152 8.152 0 0 1-.156.55l-1.063.083c-.664.058-1.223.32-1.664.785A2.375 2.375 0 0 0 2.5 12c0 .691.242 1.281.73 1.77A2.41 2.41 0 0 0 5 14.5Zm4.293-3.082Zm8.207 3.957-1.105-1.082c.32-.168.585-.41.793-.727.207-.316.312-.671.312-1.066 0-.559-.191-1.035-.578-1.422A1.936 1.936 0 0 0 15.5 10.5h-1.375L14 9.145a3.91 3.91 0 0 0-1.293-2.594A3.88 3.88 0 0 0 9.997 5.5c-.34 0-.669.043-.981.125a4.233 4.233 0 0 0-.91.355L7.02 4.895a6.34 6.34 0 0 1 1.41-.657A5.08 5.08 0 0 1 10 4c1.43 0 2.672.484 3.73 1.45 1.055.964 1.645 2.148 1.77 3.55.973 0 1.797.34 2.48 1.02.68.683 1.02 1.507 1.02 2.48 0 .598-.137 1.145-.406 1.645-.27.5-.637.91-1.094 1.23Zm-5.25-5.25Zm0 0"></path>
      </g>
      <g id="delete">
        <path d="M6.5 17c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 5 15.5v-10h-.25c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 4 4.754c0-.211.07-.39.215-.535A.73.73 0 0 1 4.75 4H8v-.25c0-.21.07-.39.215-.535A.727.727 0 0 1 8.75 3h2.5c.21 0 .39.07.535.215A.727.727 0 0 1 12 3.75V4h3.25c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219H15v9.992c0 .422-.148.778-.441 1.07A1.439 1.439 0 0 1 13.5 17Zm7-11.5h-7v10h7Zm-4.219 8.285a.73.73 0 0 0 .219-.535v-5.5c0-.21-.07-.39-.215-.535A.713.713 0 0 0 8.754 7c-.211 0-.39.07-.535.215A.73.73 0 0 0 8 7.75v5.5c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215Zm2.5 0A.73.73 0 0 0 12 13.25v-5.5c0-.21-.07-.39-.215-.535A.713.713 0 0 0 11.254 7c-.211 0-.39.07-.535.215a.73.73 0 0 0-.219.535v5.5c0 .21.07.39.215.535.14.145.32.215.531.215.211 0 .39-.07.535-.215ZM6.5 5.5v10Zm0 0"></path>
      </g>
      <g id="domain">
        <path d="M2 15.5v-11c0-.414.148-.766.441-1.059A1.443 1.443 0 0 1 3.5 3h5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059V6h6.5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v8c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 16.5 17h-13c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 2 15.5Zm1.5 0H5V14H3.5Zm0-3.168H5v-1.5H3.5Zm0-3.164H5v-1.5H3.5ZM3.5 6H5V4.5H3.5ZM7 15.5h1.5V14H7Zm0-3.168h1.5v-1.5H7Zm0-3.164h1.5v-1.5H7ZM7 6h1.5V4.5H7Zm3 9.5h6.5v-8H10v1.668h1.5v1.5H10v1.664h1.5v1.5H10Zm3.5-4.832v-1.5H15v1.5Zm0 3.164v-1.5H15v1.5Zm0 0"></path>
      </g>
      <g id="family-link">
        <path d="M11.105 15.293 16 7.688 11.082 2.5 6.02 7.688Zm-.085-6.398ZM8.875 19a2.49 2.49 0 0 1-1.762-.7 3.291 3.291 0 0 1-.968-1.718 1.267 1.267 0 0 0-.442-.695 1.167 1.167 0 0 0-.766-.282c-.207 0-.402.04-.582.125a.889.889 0 0 0-.418.395c-.07.14-.164.258-.285.355a.65.65 0 0 1-.422.145.742.742 0 0 1-.542-.23.74.74 0 0 1-.231-.54c0-.09.016-.168.043-.234.027-.066.063-.137.105-.203a2.83 2.83 0 0 1 1-.969 2.603 2.603 0 0 1 1.352-.367c.684 0 1.262.223 1.742.668.477.445.793 1.008.946 1.688.07.304.214.558.43.761.214.2.48.301.8.301.234 0 .477-.07.719-.207.242-.14.43-.309.554-.504l.02-.039L4.75 8.52a1.27 1.27 0 0 1-.191-.395 1.66 1.66 0 0 1 .035-.984c.062-.176.172-.344.324-.496L10 1.457A1.55 1.55 0 0 1 11.09 1a1.526 1.526 0 0 1 1.078.457l4.914 5.188c.14.148.246.312.313.488a1.584 1.584 0 0 1 .047.992 1.27 1.27 0 0 1-.192.395l-5.98 9.062c-.348.527-.723.898-1.133 1.105A2.752 2.752 0 0 1 8.875 19Zm0 0"></path>
      </g>
      <g id="menu">
        <path d="M3.75 14.5c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 13.754c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 13h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 10.004c0-.211.07-.39.215-.535a.73.73 0 0 1 .535-.219h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535a.73.73 0 0 1-.535.219Zm0-3.75c-.21 0-.39-.07-.535-.215A.713.713 0 0 1 3 6.254c0-.211.07-.39.215-.535A.73.73 0 0 1 3.75 5.5h12.5c.21 0 .39.07.535.215.145.14.215.32.215.531 0 .211-.07.39-.215.535A.73.73 0 0 1 16.25 7Zm0 0"></path>
      </g>
      <g id="password-manager">
        <path d="M7.418 11.418C7.805 11.028 8 10.555 8 10c0-.555-.195-1.027-.582-1.418A1.943 1.943 0 0 0 6 8c-.555 0-1.027.195-1.418.582C4.195 8.972 4 9.445 4 10c0 .555.195 1.027.582 1.418.39.387.863.582 1.418.582.555 0 1.027-.195 1.418-.582ZM6 15c-1.39 0-2.57-.484-3.543-1.457C1.484 12.57 1 11.391 1 10c0-1.39.484-2.57 1.457-3.543C3.43 5.484 4.609 5 6 5c1 0 1.91.27 2.73.813A5.086 5.086 0 0 1 10.582 8H17.5c.414 0 .766.148 1.059.441.293.293.441.645.441 1.059v4c0 .414-.148.766-.441 1.059A1.443 1.443 0 0 1 17.5 15h-3c-.414 0-.766-.148-1.059-.441A1.443 1.443 0 0 1 13 13.5V12h-2.418a5.086 5.086 0 0 1-1.852 2.188A4.84 4.84 0 0 1 6 15Zm3.457-4.5H14.5v3h1V12c0-.145.047-.266.145-.36A.492.492 0 0 1 16 11.5c.14 0 .258.047.355.14a.477.477 0 0 1 .145.36v1.5h1v-4H9.457a3.27 3.27 0 0 0-1.156-2.156A3.452 3.452 0 0 0 6 6.5c-.973 0-1.797.34-2.48 1.02C2.84 8.203 2.5 9.027 2.5 10c0 .973.34 1.797 1.02 2.48.683.68 1.507 1.02 2.48 1.02.871 0 1.637-.281 2.3-.844A3.27 3.27 0 0 0 9.458 10.5Zm0 0"></path>
      </g>
      
  </svg>
</cr-iconset>

<!-- NOTE: In the common case that the final icon will be 20x20, export the SVG
     at 20px and place it in the section above. -->
<cr-iconset name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      -->
      <g id="add">
        <path d="M11.102 12.898H6.898A.872.872 0 0 1 6 12.003c0-.253.086-.464.258-.64a.86.86 0 0 1 .64-.261h4.204V6.898A.872.872 0 0 1 11.997 6c.253 0 .464.086.64.258a.86.86 0 0 1 .261.64v4.204h4.204a.872.872 0 0 1 .898.895.878.878 0 0 1-.258.64.86.86 0 0 1-.64.261h-4.204v4.204a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.258.86.86 0 0 1-.261-.64Zm0 0"></path>
      </g>
      <g id="arrow-back">
        <path d="m8.25 12.898 4.406 4.407c.18.18.27.39.27.633a.913.913 0 0 1-.278.648.893.893 0 0 1-.636.266.855.855 0 0 1-.633-.274l-5.945-5.95a.894.894 0 0 1-.196-.292.891.891 0 0 1-.062-.34c0-.121.02-.234.062-.34.04-.105.102-.199.188-.281l5.949-5.95a.883.883 0 0 1 .64-.277c.247 0 .458.094.633.278a.847.847 0 0 1 .278.633c0 .246-.09.457-.274.636L8.25 11.102H18.3a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.64.261Zm0 0"></path>
      </g>
      <g id="arrow-drop-up">
        <path d="M8.273 14.398a.419.419 0 0 1-.324-.132.456.456 0 0 1-.125-.317c0-.015.051-.12.149-.32l3.55-3.555a.651.651 0 0 1 .227-.148.636.636 0 0 1 .5 0c.082.031.16.082.227.148l3.55 3.555a.47.47 0 0 1 .11.16c.027.059.039.113.039.172a.444.444 0 0 1-.125.309.43.43 0 0 1-.324.128Zm0 0"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="m11.523 13.926-3.55-3.555a.47.47 0 0 1-.11-.16.393.393 0 0 1-.039-.172c0-.117.043-.219.125-.309a.43.43 0 0 1 .324-.128h7.454c.132 0 .242.043.324.132.082.09.125.196.125.317 0 .015-.051.12-.149.32l-3.55 3.555a.651.651 0 0 1-.227.148.636.636 0 0 1-.5 0 .651.651 0 0 1-.227-.148Zm0 0"></path>
      </g>
      <g id="arrow-forward">
        <path d="M15.75 12.898H5.7a.872.872 0 0 1-.898-.895c-.001-.253.085-.464.257-.64a.86.86 0 0 1 .64-.261H15.75l-4.406-4.407a.866.866 0 0 1-.27-.633c0-.242.094-.457.278-.648a.893.893 0 0 1 .636-.266c.242 0 .453.09.633.274l5.945 5.95c.09.093.157.19.196.292a.891.891 0 0 1 .062.34c0 .121-.02.234-.062.34a.742.742 0 0 1-.188.281l-5.949 5.95c-.184.183-.39.273-.625.26a.923.923 0 0 1-.625-.273.918.918 0 0 1-.273-.652c0-.246.09-.457.273-.637Zm0 0"></path>
      </g>
      <g id="arrow-right">
        <path d="M10.04 16.176a.444.444 0 0 1-.31-.125.43.43 0 0 1-.128-.324V8.273c0-.132.043-.242.132-.324a.456.456 0 0 1 .317-.125c.015 0 .12.051.32.149l3.555 3.55a.651.651 0 0 1 .148.227.636.636 0 0 1 0 .5.651.651 0 0 1-.148.227l-3.555 3.55a.47.47 0 0 1-.16.11.393.393 0 0 1-.172.039Zm0 0"></path>
      </g>
      <g id="cancel-filled">
        <path d="m12 13.273 2.898 2.903c.184.183.399.27.641.262a.926.926 0 0 0 .637-.29.87.87 0 0 0 .273-.636.87.87 0 0 0-.273-.637L13.273 12l2.903-2.898a.879.879 0 0 0 0-1.278.879.879 0 0 0-1.277 0L12 10.727 9.102 7.824a.864.864 0 0 0-.625-.273.857.857 0 0 0-.625.273.88.88 0 0 0-.278.637c0 .242.094.457.278.64L10.727 12l-2.903 2.898a.822.822 0 0 0-.261.625.907.907 0 0 0 .289.625.874.874 0 0 0 .636.278.874.874 0 0 0 .637-.278Zm0 8.329a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0 0"></path>
      </g>
      <g id="check">
        <path d="m9.727 14.773 7.472-7.472a.88.88 0 0 1 .637-.278c.242 0 .457.094.64.278a.87.87 0 0 1 .274.636.87.87 0 0 1-.273.637L10.375 16.7a.874.874 0 0 1-.637.278.874.874 0 0 1-.636-.278l-3.579-3.574a.87.87 0 0 1-.273-.637.87.87 0 0 1 .273-.636.883.883 0 0 1 .641-.278.88.88 0 0 1 .637.278Zm0 0"></path>
      </g>
      <g id="check-circle">
        <path d="m10.727 13.05-1.5-1.476a.864.864 0 0 0-.625-.273.857.857 0 0 0-.625.273.88.88 0 0 0-.278.637c0 .242.094.457.278.64l2.125 2.126c.183.183.39.273.625.273.23 0 .441-.09.625-.273l4.671-4.676a.88.88 0 0 0 .278-.637.883.883 0 0 0-.278-.64.857.857 0 0 0-.625-.274c-.23 0-.441.09-.625.273ZM12 21.603a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0-1.801c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="chevron-left">
        <path d="m10.95 12 4.1 4.102a.87.87 0 0 1 .274.636.87.87 0 0 1-.273.637.879.879 0 0 1-1.277 0l-4.75-4.75a.84.84 0 0 1-.188-.29.967.967 0 0 1-.063-.335c0-.117.024-.23.063-.336a.84.84 0 0 1 .187-.289l4.75-4.75a.879.879 0 0 1 1.278 0 .87.87 0 0 1 .273.637.87.87 0 0 1-.273.636Zm0 0"></path>
      </g>
      <g id="chevron-right">
        <path d="m13.05 12-4.1-4.102a.87.87 0 0 1-.274-.636.87.87 0 0 1 .273-.637.879.879 0 0 1 1.277 0l4.75 4.75a.84.84 0 0 1 .188.29c.04.105.063.218.063.335 0 .117-.024.23-.063.336a.84.84 0 0 1-.187.289l-4.75 4.75a.822.822 0 0 1-.625.262.902.902 0 0 1-.625-.285.883.883 0 0 1-.278-.641.88.88 0 0 1 .278-.637Zm0 0"></path>
      </g>
      <g id="chrome-product">
        <path d="M9.45 14.574c.698.7 1.55 1.051 2.55 1.051 1 0 1.852-.352 2.55-1.05.7-.7 1.052-1.552 1.052-2.552s-.352-1.847-1.051-2.546C13.85 8.773 13 8.426 12 8.426c-1 0-1.852.347-2.55 1.05-.7.7-1.052 1.547-1.052 2.547 0 1 .352 1.852 1.051 2.551ZM12 17.426c.184 0 .371-.004.563-.012.19-.012.378-.039.562-.09l-2.45 4.2c-2.402-.266-4.378-1.31-5.937-3.126-1.558-1.816-2.34-3.941-2.34-6.375 0-.714.082-1.418.239-2.109.16-.691.398-1.371.715-2.039l4 6.852A4.988 4.988 0 0 0 9.3 16.71a5.346 5.346 0 0 0 2.699.715Zm0-10.801a5.114 5.114 0 0 0-3.164 1.05 5.499 5.499 0 0 0-1.938 2.7L4.45 6.125a8.93 8.93 0 0 1 3.313-2.738A9.61 9.61 0 0 1 12 2.426c1.582 0 3.074.375 4.477 1.125a9.739 9.739 0 0 1 3.449 3.074Zm8.898 1.8c.25.583.43 1.177.54 1.774.109.602.164 1.211.164 1.824 0 2.586-.836 4.754-2.5 6.516-1.668 1.758-3.793 2.777-6.375 3.063l3.921-6.875c.235-.418.418-.852.551-1.301a5.058 5.058 0 0 0-.176-3.324A5.943 5.943 0 0 0 16 8.426Zm0 0"></path>
      </g>
      <g id="close">
        <path d="m12 13.273-4.102 4.102a.816.816 0 0 1-.625.262.91.91 0 0 1-.625-.285.879.879 0 0 1 0-1.278L10.727 12 6.625 7.898a.83.83 0 0 1-.262-.636.914.914 0 0 1 .285-.637.879.879 0 0 1 1.278 0L12 10.727l4.102-4.102a.87.87 0 0 1 .636-.273.87.87 0 0 1 .637.273.87.87 0 0 1 .273.637.87.87 0 0 1-.273.636L13.273 12l4.102 4.102c.184.183.273.39.273.625 0 .23-.09.441-.273.625a.87.87 0 0 1-.637.273.87.87 0 0 1-.636-.273Zm0 0"></path>
      </g>
      <g id="computer">
        <path d="M2.102 20.398a.872.872 0 0 1-.902-.895c0-.253.085-.464.257-.64a.869.869 0 0 1 .645-.261h19.796a.872.872 0 0 1 .902.895.878.878 0 0 1-.257.64.869.869 0 0 1-.645.261Zm2.097-3c-.496 0-.918-.175-1.27-.527a1.738 1.738 0 0 1-.53-1.27V5.399c0-.492.18-.918.53-1.27a1.729 1.729 0 0 1 1.27-.526h15.602c.496 0 .918.175 1.27.527.35.351.53.777.53 1.27v10.203c0 .492-.18.918-.53 1.27a1.729 1.729 0 0 1-1.27.526Zm0-1.796h15.602V5.398H4.199Zm0 0V5.398Zm0 0"></path>
      </g>
      <g id="edit-filled">
        <path d="M4.504 20.398a.878.878 0 0 1-.64-.257.846.846 0 0 1-.262-.637v-2.172c0-.238.039-.465.125-.684.082-.214.214-.414.398-.597L16.051 4.125a1.728 1.728 0 0 1 1.27-.523c.238 0 .464.039.679.125.215.082.418.214.602.398l1.273 1.273a1.773 1.773 0 0 1 .523 1.266c0 .242-.039.469-.125.688a1.639 1.639 0 0 1-.398.597L7.949 19.875a1.706 1.706 0 0 1-.597.398 1.81 1.81 0 0 1-.68.125ZM17.324 7.95l1.278-1.273-1.278-1.278-1.273 1.278Zm0 0"></path>
      </g>
      <g id="delete">
        <path d="M7.8 20.398c-.495 0-.917-.175-1.273-.527A1.735 1.735 0 0 1 6 18.601v-12h-.3a.872.872 0 0 1-.641-.257.87.87 0 0 1-.258-.637c0-.254.086-.469.258-.644a.86.86 0 0 1 .64-.262h3.903V4.5c0-.254.085-.469.257-.64a.872.872 0 0 1 .641-.258h3c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v.3h3.903c.254 0 .469.087.64.259a.863.863 0 0 1 .258.636.872.872 0 0 1-.258.64.864.864 0 0 1-.64.267H18V18.59c0 .508-.176.933-.527 1.285a1.74 1.74 0 0 1-1.274.523Zm8.4-13.796H7.8v12h8.4Zm-5.063 9.941a.869.869 0 0 0 .261-.645V9.301a.884.884 0 0 0-.894-.903.866.866 0 0 0-.64.262.86.86 0 0 0-.262.64v6.598a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.257Zm3 0a.869.869 0 0 0 .261-.645V9.301a.884.884 0 0 0-.894-.903.866.866 0 0 0-.64.262.86.86 0 0 0-.262.64v6.598a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.257ZM7.8 6.602v12Zm0 0"></path>
      </g>
      <g id="devices">
        <path d="M12.602 10.5Zm-.903 8.7H3.301a.872.872 0 0 1-.64-.259.852.852 0 0 1-.263-.636.86.86 0 0 1 .262-.64.864.864 0 0 1 .64-.267h8.4c.253 0 .468.086.64.258a.858.858 0 0 1 .262.637.875.875 0 0 1-.262.645.86.86 0 0 1-.64.261Zm-6.3-3c-.547 0-.985-.16-1.313-.49-.324-.323-.484-.76-.484-1.312V6.602c0-.551.16-.989.484-1.313.328-.328.766-.488 1.312-.488H19.5c.254 0 .469.086.64.258a.863.863 0 0 1 .258.636.872.872 0 0 1-.257.64.864.864 0 0 1-.641.267H5.398v7.796H11.7c.254 0 .469.086.64.258a.858.858 0 0 1 .263.637.875.875 0 0 1-.262.645.86.86 0 0 1-.64.261ZM19.8 17.397V10.2h-3.602v7.2ZM15.75 19.2c-.418 0-.746-.12-.988-.363-.242-.238-.364-.57-.364-.984V9.75c0-.418.122-.746.364-.988s.57-.364.988-.364h4.5c.418 0 .746.122.988.364s.364.57.364.988v8.102c0 .414-.122.746-.364.984-.242.242-.57.363-.988.363ZM17.992 12a.578.578 0 0 0 .434-.18.564.564 0 0 0 .176-.414.592.592 0 0 0-.61-.605.57.57 0 0 0-.418.172.577.577 0 0 0-.176.433c0 .164.063.301.18.418a.57.57 0 0 0 .414.176ZM18 13.8Zm0 0"></path>
      </g>
      <g id="domain">
        <path d="M2.398 18.602V5.398c0-.492.18-.918.532-1.27a1.729 1.729 0 0 1 1.27-.526h6c.495 0 .917.175 1.273.527.351.351.527.777.527 1.27v1.8h7.8c.497 0 .919.176 1.27.531.352.352.532.774.532 1.27v9.602c0 .492-.18.918-.532 1.27a1.729 1.729 0 0 1-1.27.526H4.2c-.497 0-.919-.175-1.27-.527a1.738 1.738 0 0 1-.532-1.27Zm1.801 0H6V16.8H4.2Zm0-3.801H6V13H4.2ZM4.2 11H6V9.2H4.2Zm0-3.8H6V5.397H4.2Zm4.2 11.402h1.8V16.8H8.4Zm0-3.801h1.8V13H8.4Zm0-3.801h1.8V9.2H8.4Zm0-3.8h1.8V5.397H8.4ZM12 18.601h7.8V9H12v2h1.8v1.8H12v2h1.8v1.802H12Zm4.2-5.801V11H18v1.8Zm0 3.8v-1.8H18v1.8Zm0 0"></path>
      </g>
      <g id="download">
        <path d="M11.656 15.164a.845.845 0 0 1-.281-.187l-3.55-3.551a.83.83 0 0 1-.263-.637.949.949 0 0 1 .278-.64.909.909 0 0 1 .648-.274.87.87 0 0 1 .637.273l1.977 2V4.5a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.257a.86.86 0 0 1 .261.641v7.648l2-2c.18-.183.391-.27.637-.261a.97.97 0 0 1 .652.289.89.89 0 0 1-.011 1.273l-3.551 3.528a.983.983 0 0 1-.293.187.967.967 0 0 1-.336.063.972.972 0 0 1-.34-.063ZM6.594 19.2c-.496 0-.918-.176-1.27-.527a1.749 1.749 0 0 1-.523-1.274V16.5c0-.254.086-.469.258-.64a.863.863 0 0 1 .636-.258c.254 0 .47.085.64.257a.864.864 0 0 1 .267.641v.898h10.796V16.5c0-.254.086-.469.258-.64a.87.87 0 0 1 .637-.258c.254 0 .469.085.645.257a.86.86 0 0 1 .261.641v.898c0 .497-.176.922-.527 1.274a1.744 1.744 0 0 1-1.274.527Zm0 0"></path>
      </g>
      <!-- source: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:family_link:FILL@0;wght@0;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed -->
      <g id="family-link">
        <path d="M13.324 18.352 19.2 9.227 13.301 3 7.227 9.227Zm-.097-7.676ZM10.648 22.8c-.816 0-1.52-.281-2.109-.84a3.954 3.954 0 0 1-1.164-2.063 1.562 1.562 0 0 0-.531-.835 1.389 1.389 0 0 0-.918-.336c-.25 0-.48.046-.7.148a1.039 1.039 0 0 0-.5.477c-.085.164-.199.308-.343.421a.787.787 0 0 1-.508.176.883.883 0 0 1-.648-.273.896.896 0 0 1-.278-.653c0-.105.016-.199.051-.277.035-.082.074-.164.125-.246.3-.484.7-.871 1.2-1.164.5-.29 1.042-.438 1.624-.438.817 0 1.512.27 2.09.801.574.535.953 1.211 1.137 2.028.082.363.254.668.511.91.258.242.579.363.961.363.286 0 .575-.082.864-.25a1.9 1.9 0 0 0 .668-.602l.02-.046-6.5-9.875a1.625 1.625 0 0 1-.231-.477 1.881 1.881 0 0 1-.07-.512c0-.234.038-.457.113-.672.074-.21.203-.406.386-.59L12 1.75c.184-.184.39-.32.617-.414.23-.09.461-.137.688-.137.23 0 .457.047.683.137.223.094.43.23.614.414L20.5 7.977c.168.175.293.37.375.585a1.91 1.91 0 0 1 .055 1.188 1.533 1.533 0 0 1-.23.477l-7.177 10.875c-.414.632-.867 1.074-1.355 1.324a3.31 3.31 0 0 1-1.52.375Zm0 0"></path>
      </g>
      <g id="error-filled">
        <path d="M12.637 16.543a.852.852 0 0 0 .261-.637.9.9 0 0 0-.253-.644.86.86 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.875.875 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm0-3.602a.86.86 0 0 0 .261-.64V8.1a.872.872 0 0 0-.895-.902.878.878 0 0 0-.64.258.869.869 0 0 0-.261.645V12.3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.258Zm-.63 8.66c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.062 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm0 0"></path>
      </g>
      <g id="error">
        <path d="M12.637 16.543a.852.852 0 0 0 .261-.637.9.9 0 0 0-.253-.644.86.86 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.875.875 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm0-3.602a.86.86 0 0 0 .261-.64V8.1a.872.872 0 0 0-.895-.902.878.878 0 0 0-.64.258.869.869 0 0 0-.261.645V12.3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.258Zm-.63 8.66c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.062 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm-.007-1.8c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="keyboard-arrow-up">
        <path d="m12 10.875-4.102 4.102a.87.87 0 0 1-.636.273.87.87 0 0 1-.637-.273.879.879 0 0 1 0-1.278l4.75-4.75A.857.857 0 0 1 12 8.676c.234 0 .441.09.625.273l4.75 4.75c.184.184.273.39.273.625s-.09.442-.273.625a.874.874 0 0 1-.637.278.874.874 0 0 1-.636-.278Zm0 0"></path>
      </g>
      <g id="keyboard-arrow-down">
        <path d="M11.664 15.238a.84.84 0 0 1-.289-.187l-4.75-4.75a.835.835 0 0 1-.262-.637.923.923 0 0 1 .285-.64.879.879 0 0 1 1.278 0L12 13.124l4.102-4.102a.83.83 0 0 1 .636-.261.919.919 0 0 1 .637.289.87.87 0 0 1 .273.636.87.87 0 0 1-.273.637l-4.75 4.727a.84.84 0 0 1-.29.187.967.967 0 0 1-.335.063.967.967 0 0 1-.336-.063Zm0 0"></path>
      </g>
      <g id="chrome-extension-filled">
        <path d="M5.398 20.398c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27v-3.476c0-.219.066-.41.199-.578a.79.79 0 0 1 .523-.297 2.746 2.746 0 0 0 1.2-.875C5.84 12.977 6 12.515 6 12c0-.516-.16-.977-.477-1.375a2.746 2.746 0 0 0-1.199-.875.8.8 0 0 1-.523-.305.947.947 0 0 1-.2-.593V5.398c0-.492.176-.918.528-1.27a1.735 1.735 0 0 1 1.27-.526h4.203c0-.668.23-1.235.691-1.704a2.317 2.317 0 0 1 1.703-.699c.668 0 1.238.235 1.703.696.469.464.7 1.035.7 1.707h4.203c.492 0 .918.175 1.27.527.35.351.526.777.526 1.27v4.203c.668 0 1.235.23 1.704.691.464.465.699 1.031.699 1.703 0 .668-.235 1.238-.696 1.703-.464.469-1.035.7-1.707.7v4.203c0 .492-.175.918-.527 1.27a1.735 1.735 0 0 1-1.27.526Zm0 0"></path>
      </g>
      <g id="fullscreen">
        <path d="M5.398 18.602H7.5a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261h-3a.872.872 0 0 1-.64-.257.872.872 0 0 1-.258-.641v-3a.872.872 0 0 1 .895-.898c.253 0 .464.085.64.257a.86.86 0 0 1 .261.641Zm13.204 0V16.5a.872.872 0 0 1 .895-.898c.253 0 .464.085.64.257a.86.86 0 0 1 .261.641v3a.872.872 0 0 1-.257.64.872.872 0 0 1-.641.258h-3a.872.872 0 0 1-.898-.895c0-.253.085-.464.257-.64a.86.86 0 0 1 .641-.261ZM5.398 5.398V7.5a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641v-3c0-.254.086-.469.257-.64a.872.872 0 0 1 .641-.258h3a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm13.204 0H16.5a.872.872 0 0 1-.898-.895c0-.253.085-.464.257-.64a.86.86 0 0 1 .641-.261h3c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v3a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641Zm0 0"></path>
      </g>
      <g id="group-filled">
        <path d="M2.398 16.898a2.335 2.335 0 0 1 1.176-2.046 11.97 11.97 0 0 1 2.864-1.227 11.566 11.566 0 0 1 3.164-.426c1.097 0 2.152.14 3.16.426 1.008.285 1.965.691 2.863 1.227a2.335 2.335 0 0 1 1.176 2.047v.5c0 .5-.176.925-.528 1.277a1.736 1.736 0 0 1-1.273.523H4.2c-.5 0-.927-.176-1.274-.523a1.74 1.74 0 0 1-.528-1.278ZM18.125 19.2c.148-.281.266-.574.352-.875.082-.3.125-.61.125-.926v-.5c0-.699-.165-1.347-.489-1.949a4.215 4.215 0 0 0-1.312-1.472c.648.132 1.277.312 1.887.535.609.226 1.187.504 1.738.84a2.335 2.335 0 0 1 1.176 2.047v.5c0 .5-.176.925-.528 1.277a1.736 1.736 0 0 1-1.273.523ZM7.051 10.95C6.35 10.25 6 9.4 6 8.4c0-1 .352-1.848 1.05-2.547.7-.704 1.552-1.051 2.552-1.051s1.847.347 2.546 1.05c.704.7 1.051 1.547 1.051 2.547 0 1-.347 1.852-1.05 2.551-.7.7-1.547 1.051-2.547 1.051-1 0-1.852-.352-2.551-1.05Zm9.898 0C16.25 11.65 15.4 12 14.4 12c-.133 0-.258-.004-.376-.012a2.497 2.497 0 0 1-.375-.062 5.859 5.859 0 0 0 .989-1.614A5 5 0 0 0 15 8.399a4.98 4.98 0 0 0-.363-1.91 5.802 5.802 0 0 0-.989-1.613c.137-.035.262-.055.375-.063.118-.007.243-.011.375-.011 1 0 1.852.347 2.551 1.05.7.7 1.051 1.547 1.051 2.547 0 1-.352 1.852-1.05 2.551Zm0 0"></path>
      </g>
      <g id="help">
        <path d="M12.852 17.648c.23-.23.347-.515.347-.847 0-.336-.117-.617-.347-.852a1.158 1.158 0 0 0-.852-.347c-.332 0-.617.113-.852.347-.23.235-.347.516-.347.852 0 .332.117.617.347.847.235.235.52.352.852.352.332 0 .617-.117.852-.352ZM12 21.602a9.369 9.369 0 0 1-3.727-.75 9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062A9.369 9.369 0 0 1 2.398 12c0-1.332.25-2.578.75-3.738A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063c1.168-.5 2.41-.75 3.727-.75 1.332 0 2.578.25 3.738.75a9.743 9.743 0 0 1 3.051 2.063 9.743 9.743 0 0 1 2.063 3.05c.5 1.16.75 2.407.75 3.739 0 1.316-.25 2.559-.75 3.727a9.706 9.706 0 0 1-2.063 3.062 9.743 9.743 0 0 1-3.05 2.063c-1.16.5-2.407.75-3.739.75Zm0-1.801c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm.074-4.3c.434 0 .805.132 1.114.402.308.265.46.605.46 1.023 0 .367-.105.691-.324.977a4.67 4.67 0 0 1-.75.773A6.528 6.528 0 0 0 11.551 12c-.301.418-.442.883-.426 1.398 0 .235.082.422.25.563a.888.888 0 0 0 .602.215c.23 0 .433-.07.597-.215a.954.954 0 0 0 .324-.563 2.34 2.34 0 0 1 .477-.972c.234-.285.484-.551.75-.801.383-.367.695-.773.938-1.227a3.01 3.01 0 0 0 .363-1.449c0-.847-.328-1.554-.989-2.113C13.777 6.277 13 6 12.102 6a3.96 3.96 0 0 0-1.79.414 3.196 3.196 0 0 0-1.335 1.211.767.767 0 0 0-.114.648.71.71 0 0 0 .41.5.948.948 0 0 0 .704.079 1.14 1.14 0 0 0 .574-.375c.183-.235.406-.422.676-.563.265-.144.546-.215.847-.215Zm0 0"></path>
      </g>
      <g id="history">
        <path d="M12 20.398c-2.2 0-4.086-.726-5.664-2.187-1.574-1.457-2.469-3.254-2.688-5.387a.628.628 0 0 1 .215-.586A.908.908 0 0 1 4.5 12c.234 0 .441.066.625.2a.779.779 0 0 1 .324.55c.184 1.648.899 3.04 2.137 4.164C8.828 18.04 10.3 18.602 12 18.602c1.816 0 3.371-.649 4.664-1.938 1.29-1.293 1.938-2.848 1.938-4.664 0-1.816-.649-3.371-1.938-4.664-1.293-1.29-2.848-1.938-4.664-1.938a6.453 6.453 0 0 0-2.863.641 6.372 6.372 0 0 0-2.211 1.762h1.773c.254 0 .469.086.64.258a.852.852 0 0 1 .263.636.86.86 0 0 1-.262.64.864.864 0 0 1-.64.267H4.5a.86.86 0 0 1-.64-.262.872.872 0 0 1-.258-.64V4.5a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.257a.86.86 0 0 1 .261.641v2.352c.77-1 1.723-1.793 2.864-2.375 1.14-.586 2.386-.875 3.738-.875 1.168 0 2.258.218 3.277.664a8.502 8.502 0 0 1 2.66 1.796 8.502 8.502 0 0 1 1.797 2.66c.446 1.02.664 2.11.664 3.278a8.086 8.086 0 0 1-.664 3.277 8.502 8.502 0 0 1-1.797 2.66 8.502 8.502 0 0 1-2.66 1.797 8.086 8.086 0 0 1-3.277.664Zm.898-9.148 2.25 2.25c.184.184.274.39.266.625a.924.924 0 0 1-.289.625.87.87 0 0 1-.637.273.87.87 0 0 1-.636-.273l-2.47-2.469a.97.97 0 0 1-.206-.297.83.83 0 0 1-.074-.347V8.094c0-.254.085-.465.261-.637A.875.875 0 0 1 12 7.199c.25 0 .46.086.637.258a.869.869 0 0 1 .261.645Zm0 0"></path>
      </g>
      <g id="info-filled">
        <path d="M12.637 16.543a.869.869 0 0 0 .261-.645V11.7a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.2a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.258Zm0-7.8a.852.852 0 0 0 .261-.638.9.9 0 0 0-.253-.644.875.875 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.86.86 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm-.63 12.859c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75Zm0 0"></path>
      </g>
      <g id="info">
        <path d="M12.637 16.543a.869.869 0 0 0 .261-.645V11.7a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.2a.872.872 0 0 0 .895.902.878.878 0 0 0 .64-.258Zm0-7.8a.852.852 0 0 0 .261-.638.9.9 0 0 0-.253-.644.875.875 0 0 0-.641-.262.878.878 0 0 0-.64.258.852.852 0 0 0-.262.637.9.9 0 0 0 .253.644.86.86 0 0 0 .641.262.878.878 0 0 0 .64-.258Zm-.63 12.859c-1.32 0-2.566-.25-3.734-.75a9.706 9.706 0 0 1-3.062-2.063 9.706 9.706 0 0 1-2.063-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.566.75-3.726A9.743 9.743 0 0 1 5.211 5.21a9.706 9.706 0 0 1 3.062-2.063 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.566.25 3.726.75a9.743 9.743 0 0 1 3.051 2.063 9.688 9.688 0 0 1 2.063 3.059c.5 1.16.75 2.402.75 3.722 0 1.32-.25 2.567-.75 3.735a9.706 9.706 0 0 1-2.063 3.062 9.688 9.688 0 0 1-3.059 2.063 9.31 9.31 0 0 1-3.722.75ZM12 19.8c2.168 0 4.008-.758 5.523-2.278 1.52-1.515 2.278-3.355 2.278-5.523 0-2.168-.758-4.008-2.278-5.523-1.515-1.52-3.355-2.278-5.523-2.278-2.168 0-4.008.758-5.523 2.278C4.957 7.992 4.199 9.832 4.199 12c0 2.168.758 4.008 2.278 5.523 1.515 1.52 3.355 2.278 5.523 2.278ZM12 12Zm0 0"></path>
      </g>
      <g id="draft-filled">
        <path d="M6.594 21.602c-.496 0-.918-.18-1.27-.532a1.74 1.74 0 0 1-.523-1.27V4.2c0-.497.176-.919.527-1.27a1.74 1.74 0 0 1 1.274-.532h7.046c.235 0 .465.043.688.125.226.086.422.22.59.403l3.75 3.75c.183.164.316.363.398.586.086.226.125.453.125.687v11.852c0 .496-.176.918-.527 1.27a1.747 1.747 0 0 1-1.274.53ZM13.199 7.5a.88.88 0 0 0 .902.898h3.297L13.2 4.2Zm0 0"></path>
      </g>
      <g id="location-on-filled">
        <path d="M12.012 12.898c.742 0 1.375-.261 1.902-.785a2.629 2.629 0 0 0 .785-1.925c0-.743-.261-1.376-.785-1.899A2.603 2.603 0 0 0 12 7.5c-.75 0-1.387.262-1.914.79A2.6 2.6 0 0 0 9.3 10.2c0 .75.261 1.386.785 1.913a2.629 2.629 0 0 0 1.926.785ZM12 21.625a1.07 1.07 0 0 1-.504-.125.69.69 0 0 1-.328-.375l-.172-.352a9.497 9.497 0 0 0-.594-.953 17.9 17.9 0 0 0-.675-.894 26.445 26.445 0 0 0-2.23-2.113A10.273 10.273 0 0 1 5.5 14.55a7.304 7.304 0 0 1-.977-2.055 8.07 8.07 0 0 1-.324-2.27c0-2.164.75-4.007 2.254-5.535 1.5-1.527 3.336-2.293 5.512-2.293 2.172 0 4.023.766 5.547 2.29C19.039 6.21 19.8 8.063 19.8 10.233c0 .778-.117 1.532-.344 2.266a8.121 8.121 0 0 1-.98 2.05 11.185 11.185 0 0 1-2 2.266 25.79 25.79 0 0 0-2.176 2.11 9.348 9.348 0 0 0-.739.887 6.452 6.452 0 0 0-.585.96l-.176.352c-.086.148-.2.27-.344.363a.854.854 0 0 1-.457.137Zm0 0"></path>
      </g>
      <g id="mic-filled">
        <path d="M9.875 13.523A2.892 2.892 0 0 1 9 11.398v-6c0-.832.293-1.539.875-2.125A2.898 2.898 0 0 1 12 2.398c.832 0 1.543.293 2.125.875.582.586.875 1.293.875 2.125v6c0 .836-.293 1.543-.875 2.125-.582.586-1.293.875-2.125.875-.832 0-1.543-.289-2.125-.875Zm1.227 5.977v-1.574a6.285 6.285 0 0 1-3.766-1.84 6.399 6.399 0 0 1-1.86-3.762.768.768 0 0 1 .196-.652.817.817 0 0 1 .625-.274.87.87 0 0 1 .64.266c.176.172.29.387.336.637.22 1.148.774 2.086 1.665 2.812a4.722 4.722 0 0 0 3.05 1.086 4.716 4.716 0 0 0 3.075-1.097 4.676 4.676 0 0 0 1.664-2.801c.046-.25.16-.465.332-.637a.855.855 0 0 1 .636-.266c.254 0 .465.094.63.274.167.18.234.398.198.652a6.399 6.399 0 0 1-1.859 3.762 6.285 6.285 0 0 1-3.766 1.84V19.5a.872.872 0 0 1-.895.898.878.878 0 0 1-.64-.257.86.86 0 0 1-.261-.641Zm0 0"></path>
      </g>
      <g id="more-vert">
        <path d="M11.996 19.2c-.496 0-.922-.177-1.27-.532a1.737 1.737 0 0 1-.527-1.273c0-.497.176-.918.531-1.27a1.734 1.734 0 0 1 1.274-.523c.496 0 .922.175 1.27.527.351.355.527.781.527 1.277 0 .496-.176.918-.531 1.27a1.749 1.749 0 0 1-1.274.523Zm0-5.4c-.496 0-.922-.175-1.27-.53a1.737 1.737 0 0 1-.527-1.274c0-.496.176-.922.531-1.27a1.737 1.737 0 0 1 1.274-.527c.496 0 .922.176 1.27.531.351.352.527.778.527 1.274s-.176.922-.531 1.27a1.737 1.737 0 0 1-1.274.527Zm0-5.402c-.496 0-.922-.175-1.27-.527a1.752 1.752 0 0 1-.527-1.277c0-.496.176-.918.531-1.27a1.749 1.749 0 0 1 1.274-.523c.496 0 .922.176 1.27.531.351.352.527.777.527 1.273 0 .497-.176.918-.531 1.27a1.734 1.734 0 0 1-1.274.523Zm0 0"></path>
      </g>
      <g id="open-in-new">
        <path d="M5.398 20.398c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27V5.399c0-.492.175-.918.527-1.27a1.735 1.735 0 0 1 1.27-.526h5.703a.872.872 0 0 1 .898.895.878.878 0 0 1-.258.64.86.86 0 0 1-.64.261H5.398v13.204h13.204v-5.704a.872.872 0 0 1 .895-.898c.253 0 .464.086.64.258a.86.86 0 0 1 .261.64v5.704c0 .492-.175.918-.527 1.27a1.735 1.735 0 0 1-1.27.526ZM18.602 6.676l-8.301 8.3a.816.816 0 0 1-.625.262.907.907 0 0 1-.625-.289.874.874 0 0 1-.278-.636c0-.243.094-.454.278-.637l8.273-8.278h-2.023a.884.884 0 0 1-.903-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h4.2c.254 0 .469.086.64.257a.872.872 0 0 1 .258.641v4.2a.884.884 0 0 1-.894.902.866.866 0 0 1-.64-.262.86.86 0 0 1-.262-.64Zm0 0"></path>
      </g>
      <g id="person">
        <path
          d="M9.45 10.95c-.7-.7-1.052-1.552-1.052-2.552S8.75 6.551 9.45 5.852C10.15 5.148 11 4.8 12 4.8c1 0 1.852.347 2.55 1.05.7.7 1.052 1.547 1.052 2.547 0 1-.352 1.852-1.051 2.551C13.85 11.65 13 12 12 12c-1 0-1.852-.352-2.55-1.05ZM4.8 17.397v-.597c0-.383.102-.746.313-1.09a2.63 2.63 0 0 1 .864-.86 12.207 12.207 0 0 1 2.906-1.226 11.602 11.602 0 0 1 6.23 0c1.024.285 1.996.691 2.91 1.227.368.214.657.5.864.847.21.352.312.719.312 1.102v.597c0 .497-.176.922-.527 1.274a1.744 1.744 0 0 1-1.274.527H6.594c-.496 0-.918-.176-1.27-.527a1.749 1.749 0 0 1-.523-1.274Zm1.802 0h10.796v-.597a.39.39 0 0 0-.074-.235.49.49 0 0 0-.199-.168 9.306 9.306 0 0 0-2.45-1.046A10.203 10.203 0 0 0 12 15c-.918 0-1.809.117-2.676.352a9.306 9.306 0 0 0-2.449 1.046 1.357 1.357 0 0 0-.2.196.314.314 0 0 0-.073.207Zm6.671-7.73c.352-.352.528-.777.528-1.273 0-.497-.176-.918-.531-1.27a1.734 1.734 0 0 1-1.274-.523c-.496 0-.922.175-1.27.527a1.752 1.752 0 0 0-.527 1.277c0 .496.176.918.531 1.27.352.347.778.523 1.274.523s.922-.176 1.27-.531ZM12 8.398Zm0 9Zm0 0"
        </path>
      </g>
      <g id="person-filled">
        <path d="M9.45 10.95c-.7-.7-1.052-1.552-1.052-2.552S8.75 6.551 9.45 5.852C10.15 5.148 11 4.8 12 4.8c1 0 1.852.347 2.55 1.05.7.7 1.052 1.547 1.052 2.547 0 1-.352 1.852-1.051 2.551C13.85 11.65 13 12 12 12c-1 0-1.852-.352-2.55-1.05ZM4.8 17.397v-.597c0-.383.102-.746.313-1.09a2.63 2.63 0 0 1 .864-.86 12.235 12.235 0 0 1 2.91-1.226 11.573 11.573 0 0 1 6.226 0c1.024.285 1.996.691 2.91 1.227.368.214.657.5.864.847.21.352.312.719.312 1.102v.597c0 .5-.176.926-.523 1.278a1.751 1.751 0 0 1-1.278.523H6.602c-.5 0-.926-.176-1.278-.523a1.751 1.751 0 0 1-.523-1.278Zm0 0"></path>
      </g>
      <g id="print-filled">
        <path d="M7.8 20.398c-.495 0-.917-.175-1.273-.527A1.729 1.729 0 0 1 6 18.601v-1.796H4.2c-.497 0-.919-.176-1.27-.528A1.743 1.743 0 0 1 2.398 15v-4.2c0-.667.235-1.234.704-1.698A2.303 2.303 0 0 1 4.8 8.398h14.398c.668 0 1.235.235 1.7.704.468.464.703 1.03.703 1.699V15c0 .496-.176.918-.532 1.27a1.715 1.715 0 0 1-1.265.53h-1.801v1.802c0 .492-.176.918-.527 1.27a1.74 1.74 0 0 1-1.278.526ZM18 7.2H6V5.395c0-.497.176-.918.527-1.27a1.74 1.74 0 0 1 1.274-.523h8.398c.496 0 .918.175 1.274.527.351.351.527.777.527 1.27Zm-.305 5.403a.872.872 0 0 0 .64-.258.861.861 0 0 0 .267-.637.887.887 0 0 0-.258-.645.858.858 0 0 0-.637-.261.887.887 0 0 0-.645.258.852.852 0 0 0-.261.636c0 .254.086.47.258.64a.855.855 0 0 0 .636.267Zm-9.894 6h8.398V15H7.801Zm0 0"></path>
      </g>
      <g id="schedule">
        <path d="M12.898 11.25V6.898A.872.872 0 0 0 12.003 6a.878.878 0 0 0-.64.258.86.86 0 0 0-.261.64v4.727c0 .133.023.254.074.363.05.11.117.203.199.285l3.348 3.348a.828.828 0 0 0 .64.266.914.914 0 0 0 .637-.285.879.879 0 0 0 .273-.641.885.885 0 0 0-.28-.64ZM12 21.602a9.347 9.347 0 0 1-3.73-.75 9.688 9.688 0 0 1-3.06-2.063 9.706 9.706 0 0 1-2.062-3.062 9.398 9.398 0 0 1-.75-3.739c0-1.324.25-2.57.75-3.738A9.524 9.524 0 0 1 5.211 5.2a9.805 9.805 0 0 1 3.062-2.052 9.398 9.398 0 0 1 3.739-.75c1.324 0 2.57.254 3.738.758a9.689 9.689 0 0 1 3.047 2.051 9.762 9.762 0 0 1 2.047 3.05A9.342 9.342 0 0 1 21.602 12c0 1.324-.25 2.566-.75 3.73a9.788 9.788 0 0 1-2.051 3.06 9.541 9.541 0 0 1-3.055 2.062c-1.168.5-2.418.75-3.746.75ZM12 12Zm.012 7.8c2.156 0 3.996-.76 5.511-2.288 1.52-1.524 2.278-3.367 2.278-5.524 0-2.156-.758-3.996-2.278-5.511-1.515-1.52-3.355-2.278-5.511-2.278-2.157 0-4 .758-5.524 2.278C4.961 7.992 4.2 9.832 4.2 11.988c0 2.157.762 4 2.29 5.524 1.523 1.527 3.366 2.289 5.523 2.289Zm0 0"></path>
      </g>
      <g id="search">
        <path d="M9.602 15.602c-1.668 0-3.086-.586-4.25-1.75-1.168-1.168-1.75-2.586-1.75-4.25 0-1.668.582-3.086 1.75-4.25 1.164-1.168 2.582-1.75 4.25-1.75 1.664 0 3.082.582 4.25 1.75 1.164 1.164 1.75 2.582 1.75 4.25a5.75 5.75 0 0 1-.313 1.902 6.293 6.293 0 0 1-.863 1.644l5.347 5.352c.184.184.278.39.278.625a.862.862 0 0 1-.278.625.87.87 0 0 1-.636.273.87.87 0 0 1-.637-.273l-5.352-5.324c-.5.367-1.046.652-1.644.863a5.75 5.75 0 0 1-1.902.313Zm0-1.801c1.164 0 2.156-.41 2.972-1.227.817-.816 1.227-1.808 1.227-2.972 0-1.168-.41-2.16-1.227-2.977-.816-.816-1.808-1.227-2.972-1.227-1.168 0-2.16.41-2.977 1.227-.816.816-1.227 1.809-1.227 2.977 0 1.164.41 2.156 1.227 2.972.816.817 1.809 1.227 2.977 1.227Zm0 0"></path>
      </g>
      <g id="security">
        <path d="M12 19.727c1.617-.5 2.96-1.465 4.04-2.891A9.466 9.466 0 0 0 17.925 12H12V4.324L6 6.625v4.5c0 .148.008.297.023.438.02.14.036.289.051.437H12Zm-.3 1.761a1 1 0 0 1-.274-.062c-2.184-.719-3.934-2.043-5.25-3.977-1.317-1.933-1.977-4.039-1.977-6.324v-4.5a1.763 1.763 0 0 1 1.152-1.676l6-2.3A1.82 1.82 0 0 1 12 2.522c.215 0 .434.043.648.125l6 2.301a1.763 1.763 0 0 1 1.153 1.676v4.5c0 2.285-.66 4.39-1.977 6.324-1.316 1.934-3.066 3.258-5.25 3.977a1 1 0 0 1-.273.062 3.87 3.87 0 0 1-.602 0Zm0 0"></path>
      </g>
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings-filled">
        <path d="M11 21.602c-.285 0-.523-.086-.727-.25a1.097 1.097 0 0 1-.375-.653l-.375-1.949a8.72 8.72 0 0 1-1.109-.523c-.36-.204-.7-.434-1.016-.704l-1.875.653c-.25.082-.503.078-.761-.012a1.066 1.066 0 0 1-.586-.488l-1-1.75a1.045 1.045 0 0 1-.125-.739 1.2 1.2 0 0 1 .375-.664l1.472-1.296a8.15 8.15 0 0 1-.074-.602 8.05 8.05 0 0 1 .074-1.852L3.426 9.477a1.2 1.2 0 0 1-.375-.665 1.045 1.045 0 0 1 .125-.738l1-1.75c.133-.234.328-.394.586-.488.258-.09.511-.094.761-.012l1.875.653c.317-.27.657-.5 1.016-.704a8.72 8.72 0 0 1 1.11-.523l.374-1.95c.051-.265.176-.484.375-.652.204-.164.442-.25.727-.25h2c.285 0 .523.086.727.25.199.168.324.387.375.653l.375 1.949a8.72 8.72 0 0 1 1.109.523c.36.204.7.434 1.016.704l1.875-.653c.25-.082.503-.078.761.012.258.094.453.254.586.488l1 1.75c.133.235.176.48.125.739a1.2 1.2 0 0 1-.375.664l-1.472 1.296c.03.204.058.403.074.602a8.05 8.05 0 0 1-.074 1.852l1.472 1.296c.2.184.324.407.375.665.051.257.008.503-.125.738l-1 1.75a1.066 1.066 0 0 1-.586.488c-.258.09-.511.094-.761.012l-1.875-.653c-.317.27-.657.5-1.016.704a8.72 8.72 0 0 1-1.11.523l-.374 1.95c-.051.265-.176.484-.375.652-.204.164-.442.25-.727.25Zm1-6c1 0 1.852-.352 2.55-1.051.7-.7 1.052-1.551 1.052-2.551 0-1-.352-1.852-1.051-2.55C13.85 8.75 13 8.397 12 8.397c-1 0-1.852.352-2.55 1.051-.7.7-1.052 1.551-1.052 2.551 0 1 .352 1.852 1.051 2.55.7.7 1.551 1.052 2.551 1.052Zm0 0"></path>
      </g>
      <g id="star-filled">
        <path d="m12 16.875-4.102 2.45a.892.892 0 0 1-1-.05.876.876 0 0 1-.296-.412.849.849 0 0 1-.028-.539l1.074-4.574-3.625-3.074a.834.834 0 0 1-.273-.465 1.08 1.08 0 0 1 .023-.512.83.83 0 0 1 .278-.41c.133-.11.3-.172.5-.187l4.75-.426 1.875-4.352c.082-.183.199-.32.347-.41a.89.89 0 0 1 .477-.14.89.89 0 0 1 .477.14c.148.09.265.227.347.41L14.7 8.7l4.75.403c.2.015.367.082.5.199a.91.91 0 0 1 .278.426c.046.164.05.332.011.5a.892.892 0 0 1-.289.449l-3.597 3.074 1.074 4.574c.05.184.039.363-.028.54a.876.876 0 0 1-.761.585.915.915 0 0 1-.535-.125Zm0 0"></path>
      </g>
      <g id="sync">
        <path d="M6.602 12c0 .8.16 1.543.484 2.227a5.47 5.47 0 0 0 1.312 1.75V15.3c0-.254.086-.469.258-.64a.858.858 0 0 1 .637-.263c.254 0 .469.086.645.262a.86.86 0 0 1 .261.64v3a.872.872 0 0 1-.258.641.872.872 0 0 1-.64.258h-3a.872.872 0 0 1-.64-.258.852.852 0 0 1-.263-.636.86.86 0 0 1 .262-.64.864.864 0 0 1 .64-.267h.95a7.418 7.418 0 0 1-1.79-2.386A6.906 6.906 0 0 1 4.8 12c0-1.418.368-2.695 1.098-3.836A7.072 7.072 0 0 1 8.813 5.57a.659.659 0 0 1 .636-.011.862.862 0 0 1 .45.52.9.9 0 0 1-.012.683.98.98 0 0 1-.45.511 5.425 5.425 0 0 0-2.066 1.942c-.516.824-.77 1.75-.77 2.785Zm10.796 0c0-.8-.16-1.543-.484-2.227a5.47 5.47 0 0 0-1.312-1.75V8.7a.872.872 0 0 1-.258.64.858.858 0 0 1-.637.263.875.875 0 0 1-.645-.262.86.86 0 0 1-.261-.64v-3c0-.255.086-.47.258-.641a.872.872 0 0 1 .64-.258h3c.254 0 .469.086.64.258a.852.852 0 0 1 .263.636.86.86 0 0 1-.262.64.864.864 0 0 1-.64.267h-.95a7.418 7.418 0 0 1 1.79 2.386c.44.926.66 1.93.66 3.012 0 1.418-.368 2.695-1.098 3.836a7.072 7.072 0 0 1-2.915 2.594.649.649 0 0 1-.636.008.87.87 0 0 1-.45-.524.911.911 0 0 1 .422-1.164 5.458 5.458 0 0 0 2.079-1.926c.53-.832.796-1.773.796-2.824Zm0 0"></path>
      </g>
      <g id="thumb-down">
        <path d="M3 15.602c-.45 0-.863-.188-1.238-.563-.375-.375-.563-.789-.563-1.238v-1.426c0-.133.012-.258.04-.375.023-.117.062-.227.113-.324l2.972-6.977c.153-.347.43-.625.84-.824.406-.2.8-.3 1.188-.3l11.046.027v12l-5.847 5.847c-.317.317-.68.524-1.09.613-.406.09-.774.047-1.098-.136-.324-.184-.535-.48-.625-.887-.093-.41-.09-.855.012-1.34l.852-4.097Zm12.602-.75V5.398H6l-3 6.977v1.426h8.8l-1.226 6.05ZM21 3.602c.516 0 .945.175 1.29.527.339.351.51.777.51 1.27V13.8c0 .496-.171.918-.51 1.27a1.732 1.732 0 0 1-1.29.53h-3.602v-1.8H21V5.398h-3.602V3.602Zm-5.398 1.796v9.454Zm0 0"></path>
      </g>
      <g id="thumb-down-filled">
        <path d="M3 15.602c-.45 0-.863-.184-1.238-.551-.375-.367-.563-.785-.563-1.25v-1.426c0-.133.012-.254.04-.363.023-.11.062-.219.113-.336l2.972-6.977a1.72 1.72 0 0 1 .653-.8c.296-.2.64-.297 1.023-.297h9.602c.5 0 .921.168 1.273.511.352.34.523.77.523 1.285v9.454c0 .25-.046.484-.148.71a1.943 1.943 0 0 1-.398.586l-5.028 5.028c-.3.3-.664.492-1.097.574-.434.082-.801.035-1.102-.148a1.496 1.496 0 0 1-.738-.954 2.596 2.596 0 0 1-.035-1.222l.75-3.824Zm18-12c.484 0 .902.175 1.262.535.36.36.539.781.539 1.261v8.403c0 .484-.18.902-.54 1.261-.359.36-.777.54-1.261.54-.484 0-.902-.18-1.262-.54-.36-.359-.539-.777-.539-1.261V5.398c0-.48.18-.902.54-1.261A1.72 1.72 0 0 1 21 3.602Zm0 0"></path>
      </g>
      <g id="thumb-up">
        <path d="M21 8.375c.45 0 .863.188 1.238.563.375.374.563.789.563 1.238v1.426c0 .132-.012.257-.04.375a1.33 1.33 0 0 1-.113.324l-2.972 6.972c-.153.352-.43.625-.84.829-.406.199-.8.296-1.188.296l-11.046-.023v-12l5.847-5.852a2.18 2.18 0 0 1 1.09-.609c.406-.094.774-.047 1.098.137.324.183.535.476.625.886.093.41.09.856-.012 1.336l-.852 4.102Zm-12.602.75v9.45H18l3-6.973v-1.426h-8.8l1.226-6.051ZM3 20.375c-.516 0-.945-.176-1.29-.527a1.776 1.776 0 0 1-.51-1.274v-8.398c0-.496.171-.918.51-1.274.345-.351.774-.527 1.29-.527h3.602v1.8H3v8.4h3.602v1.8Zm5.398-1.8v-9.45Zm0 0"></path>
      </g>
      <g id="thumb-up-filled">
        <path d="M21 8.398c.45 0 .863.184 1.238.551.375.367.563.785.563 1.25v1.426c0 .133-.012.254-.04.363-.023.11-.062.219-.113.336l-2.972 6.977a1.72 1.72 0 0 1-.653.8c-.296.2-.64.297-1.023.297H8.398c-.5 0-.921-.168-1.273-.511-.352-.34-.523-.77-.523-1.285V9.148c0-.25.046-.484.148-.71.102-.227.234-.422.398-.586l5.028-5.028c.3-.3.664-.492 1.097-.574.434-.082.801-.035 1.102.148.383.22.629.536.738.954.11.414.121.824.035 1.222l-.75 3.824Zm-18 12a1.72 1.72 0 0 1-1.262-.535c-.36-.36-.539-.781-.539-1.261v-8.403c0-.484.18-.902.54-1.261.359-.36.777-.54 1.261-.54.484 0 .902.18 1.262.54.36.359.539.777.539 1.261v8.403c0 .48-.18.902-.54 1.261A1.72 1.72 0 0 1 3 20.398Zm0 0"></path>
      </g>
      <g id="videocam">
        <path d="M5.398 19.2c-.48 0-.902-.18-1.261-.536a1.729 1.729 0 0 1-.535-1.266V6.602c0-.497.175-.922.535-1.274a1.75 1.75 0 0 1 1.261-.527H16.2c.496 0 .918.176 1.274.527.351.352.527.777.527 1.274V10.8l2.824-2.824c.133-.137.297-.168.488-.098.192.07.29.203.29.394v7.45c0 .203-.098.336-.29.402-.19.066-.355.035-.488-.102L18 13.2v4.2c0 .484-.176.906-.527 1.265a1.736 1.736 0 0 1-1.274.535Zm0-1.802H16.2V6.602H5.4Zm0 0V6.602Zm0 0"></path>
      </g>
      <g id="warning-filled">
        <path d="M2.797 20.398a.91.91 0 0 1-.477-.12.86.86 0 0 1-.32-.329.765.765 0 0 1-.113-.449c.008-.168.054-.324.136-.477l9.204-15.347a.727.727 0 0 1 .335-.324c.145-.067.29-.102.438-.102.148 0 .297.035.438.102.14.066.253.171.335.324l9.204 15.347c.082.153.128.309.136.477a.765.765 0 0 1-.113.45.99.99 0 0 1-.324.323.855.855 0 0 1-.473.125Zm9.84-3.253a.86.86 0 0 0 .261-.641.89.89 0 0 0-.253-.64.86.86 0 0 0-.641-.262.89.89 0 0 0-.64.253.86.86 0 0 0-.262.641.89.89 0 0 0 .253.64.86.86 0 0 0 .641.262.89.89 0 0 0 .64-.253Zm0-3.004a.86.86 0 0 0 .261-.641v-3a.872.872 0 0 0-.895-.898.878.878 0 0 0-.64.257.86.86 0 0 0-.261.641v3a.872.872 0 0 0 .895.898.878.878 0 0 0 .64-.257Zm0 0"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>`}else{div$1.innerHTML=getTrustedHTML`
<cr-iconset name="cr20" size="20">
  <svg>
    <defs>
      <!--
      Keep these in sorted order by id="".
      -->
      <g id="cloud-off">
        <path
          d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="delete">
        <path
          d="M 5.832031 17.5 C 5.375 17.5 4.984375 17.335938 4.65625 17.011719 C 4.328125 16.683594 4.167969 16.292969 4.167969 15.832031 L 4.167969 5 L 3.332031 5 L 3.332031 3.332031 L 7.5 3.332031 L 7.5 2.5 L 12.5 2.5 L 12.5 3.332031 L 16.667969 3.332031 L 16.667969 5 L 15.832031 5 L 15.832031 15.832031 C 15.832031 16.292969 15.671875 16.683594 15.34375 17.011719 C 15.015625 17.335938 14.625 17.5 14.167969 17.5 Z M 14.167969 5 L 5.832031 5 L 5.832031 15.832031 L 14.167969 15.832031 Z M 7.5 14.167969 L 9.167969 14.167969 L 9.167969 6.667969 L 7.5 6.667969 Z M 10.832031 14.167969 L 12.5 14.167969 L 12.5 6.667969 L 10.832031 6.667969 Z M 5.832031 5 L 5.832031 15.832031 Z M 5.832031 5 ">
        </path>
      </g>
      <g id="domain" viewBox="0 -960 960 960">
        <path d="M96-144v-672h384v144h384v528H96Zm72-72h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm168 456h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm0-152h72v-72h-72v72Zm144 456h312v-384H480v80h72v72h-72v80h72v72h-72v80Zm168-232v-72h72v72h-72Zm0 152v-72h72v72h-72Z"></path>
      </g>
      <g id="family-link">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      <g id="password-manager">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
      </g>
      
  </svg>
</cr-iconset>

<!-- NOTE: In the common case that the final icon will be 20x20, export the SVG
     at 20px and place it in the section above. -->
<cr-iconset name="cr" size="24">
  <svg>
    <defs>
      <!--
      These icons are copied from Polymer's iron-icons and kept in sorted order.
      -->
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </g>
      <g id="arrow-back">
        <path
          d="m7.824 13 5.602 5.602L12 20l-8-8 8-8 1.426 1.398L7.824 11H20v2Zm0 0">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      <g id="cancel-filled">
        <path
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle" viewBox="0 -960 960 960">
        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="chrome-product" viewBox="0 -960 960 960">
        <path d="M336-479q0 60 42 102t102 42q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102Zm144 216q11 0 22.5-.5T525-267L427-99q-144-16-237.5-125T96-479q0-43 9.5-84.5T134-645l160 274q28 51 78 79.5T480-263Zm0-432q-71 0-126.5 42T276-545l-98-170q53-71 132.5-109.5T480-863q95 0 179 45t138 123H480Zm356 72q15 35 21.5 71t6.5 73q0 155-100 260.5T509-96l157-275q14-25 22-52t8-56q0-40-15-77t-41-67h196Z">
        </path>
      </g>
      <g id="close">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path
          d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="edit-filled">
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete" viewBox="0 -960 960 960">
        <path
          d="M309.37-135.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.5h-53.5v-83H378.5v-53.5h202.52v53.5h206.11v83h-53.5v474.07q0 35.21-24.26 59.32t-58.74 24.11H309.37Zm341.26-557.5H309.37v474.5h341.26v-474.5ZM379.7-288.24h77.5v-336h-77.5v336Zm123.1 0h77.5v-336h-77.5v336ZM309.37-693.37v474.5-474.5Z">
        </path>
      </g>
      <g id="devices">
        <path
          d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="domain">
        <path
          d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="download" viewBox="0 -960 960 960">
        <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"></path>
      </g>
      <g id="draft-filled">
        <path
          d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <!-- source: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:family_link:FILL@0;wght@0;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed -->
      <g id="family-link" viewBox="0 -960 960 960">
        <path
          d="M390-40q-51 0-90.5-30.5T246-149q-6-23-25-37t-43-14q-16 0-30 6.5T124-175l-61-51q21-26 51.5-40t63.5-14q51 0 91 30t54 79q6 23 25 37t42 14q19 0 34-10t26-25l1-2-276-381q-8-11-11.5-23t-3.5-24q0-16 6-30.5t18-26.5l260-255q11-11 26-17t30-6q15 0 30 6t26 17l260 255q12 12 18 26.5t6 30.5q0 12-3.5 24T825-538L500-88q-18 25-48 36.5T390-40Zm110-185 260-360-260-255-259 256 259 359Zm1-308Z"/>
        </path>
      </g>
      <g id="error-filled">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error">
        <path
          d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="keyboard-arrow-up">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="keyboard-arrow-down">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="chrome-extension-filled">
        <path
          d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="fullscreen">
        <path
          d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group-filled">
        <path
          d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help">
        <path
          d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path
          d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info-filled">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info">
        <path
          d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path
          d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on-filled">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic-filled">
        <path
          d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new" viewBox="0 -960 960 960">
        <path
          d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h264v72H216v528h528v-264h72v264q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm171-192-51-51 357-357H576v-72h240v240h-72v-117L387-336Z">
        </path>
      </g>
      <g id="person">
        <path
          d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="person-filled">
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="print-filled">
        <path
          d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      <!-- The <g> IDs are exposed as global variables in Vulcanized mode, which
        conflicts with the "settings" namespace of MD Settings. Using an "_icon"
        suffix prevents the naming conflict. -->
      <g id="settings-filled">
        <path
          d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star-filled">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync" viewBox="0 -960 960 960">
        <path
          d="M216-192v-72h74q-45-40-71.5-95.5T192-480q0-101 61-177.5T408-758v75q-63 23-103.5 77.5T264-480q0 48 19.5 89t52.5 70v-63h72v192H216Zm336-10v-75q63-23 103.5-77.5T696-480q0-48-19.5-89T624-639v63h-72v-192h192v72h-74q45 40 71.5 95.5T768-480q0 101-61 177.5T552-202Z">
        </path>
      </g>
      <g id="thumb-down">
        <path
            d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumb-down-filled">
        <path
            d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumb-up">
        <path
            d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumb-up-filled">
        <path
            d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </g>
      <g id="videocam" viewBox="0 -960 960 960">
        <path
          d="M216-192q-29 0-50.5-21.5T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h432q29.7 0 50.85 21.15Q720-725.7 720-696v168l144-144v384L720-432v168q0 29-21.15 50.5T648-192H216Zm0-72h432v-432H216v432Zm0 0v-432 432Z">
        </path>
      </g>
      <g id="warning-filled">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</cr-iconset>`}const iconsets$1=div$1.querySelectorAll("cr-iconset");for(const iconset of iconsets$1){document.head.appendChild(iconset)}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldMixinLit=superClass=>{class CrSearchFieldMixinLit extends superClass{static get properties(){return{label:{type:String},clearLabel:{type:String},hasSearchText:{type:Boolean,reflect:true},searchDelay:{type:Number}}}#label_accessor_storage="";get label(){return this.#label_accessor_storage}set label(value){this.#label_accessor_storage=value}#clearLabel_accessor_storage="";get clearLabel(){return this.#clearLabel_accessor_storage}set clearLabel(value){this.#clearLabel_accessor_storage=value}#hasSearchText_accessor_storage=false;get hasSearchText(){return this.#hasSearchText_accessor_storage}set hasSearchText(value){this.#hasSearchText_accessor_storage=value}#searchDelay_accessor_storage=undefined;get searchDelay(){return this.#searchDelay_accessor_storage}set searchDelay(value){this.#searchDelay_accessor_storage=value}effectiveValue_="";searchDelayTimer_=-1;getSearchInput(){assertNotReached()}getValue(){return this.getSearchInput().value}setValue(value,noEvent){const updated=this.updateEffectiveValue_(value);this.getSearchInput().value=this.effectiveValue_;if(!updated){if(value===""&&this.hasSearchText){this.hasSearchText=false}return}this.onSearchTermInput();if(!noEvent){this.fire("search-changed",this.effectiveValue_)}}scheduleSearch_(){if(this.searchDelayTimer_>=0){clearTimeout(this.searchDelayTimer_)}const length=this.getValue().length;let timeoutMs=0;if(length>0){timeoutMs=this.searchDelay??500-100*(Math.min(length,4)-1)}this.searchDelayTimer_=setTimeout((()=>{this.getSearchInput().dispatchEvent(new CustomEvent("search",{composed:true,detail:this.getValue()}));this.searchDelayTimer_=-1}),timeoutMs)}onSearchTermSearch(){this.onValueChanged_(this.getValue(),false)}onSearchTermInput(){this.hasSearchText=this.getSearchInput().value!=="";this.scheduleSearch_()}onValueChanged_(newValue,noEvent){const updated=this.updateEffectiveValue_(newValue);if(updated&&!noEvent){this.fire("search-changed",this.effectiveValue_)}}updateEffectiveValue_(value){const effectiveValue=value.replace(/\s+/g," ").replace(/^\s/,"");if(effectiveValue===this.effectiveValue_){return false}this.effectiveValue_=effectiveValue;return true}}return CrSearchFieldMixinLit};let instance$16=null;function getCss$13(){return instance$16||(instance$16=[...[],css`.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back_old.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown_old.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23_old.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23_old.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward_old.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward_old.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel_old.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear_old.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content_old.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray_old.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit_old.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic_old.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open_old.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete_old.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less_old.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more_old.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new_old.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert_old.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh_old.svg)}.icon-search{--cr-icon-image:url(//resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings_old.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility_old.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off_old.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right_old.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}:host-context([webui-rounded-icons]){.icon-arrow-back{--cr-icon-image:url(//resources/images/icon_arrow_back.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(//resources/images/icon_arrow_drop_up_cr23.svg)}.icon-arrow-dropdown{--cr-icon-image:url(//resources/images/icon_arrow_dropdown.svg)}.icon-arrow-forward{--cr-icon-image:url(//resources/images/icon_arrow_forward.svg)}.icon-arrow-upward{--cr-icon-image:url(//resources/images/icon_arrow_upward.svg)}.icon-cancel{--cr-icon-image:url(//resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(//resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(//resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(//resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(//resources/images/icon_edit.svg)}.icon-expand-less{--cr-icon-image:url(//resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(//resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(//resources/images/open_in_new.svg)}.icon-file{--cr-icon-image:url(//resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(//resources/images/icon_folder_open.svg)}.icon-more-vert{--cr-icon-image:url(//resources/images/icon_more_vert.svg)}.icon-picture-delete{--cr-icon-image:url(//resources/images/icon_picture_delete.svg)}.icon-refresh{--cr-icon-image:url(//resources/images/icon_refresh.svg)}.icon-settings{--cr-icon-image:url(//resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(//resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(//resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(//resources/images/arrow_right.svg)}}`])}let instance$15=null;function getCss$12(){return instance$15||(instance$15=[...[getCss$13()],css`.icon-folder-open{--cr-icon-image:url(//resources/brave-icons/folder.svg)}.icon-edit{--cr-icon-image:url(//resources/brave-icons/edit-pencil.svg)}`])}let instance$14=null;function getCss$11(){return instance$14||(instance$14=[...[getCss$19(),getCss$12()],css`[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}.cr-separators>*:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--cr-scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--cr-scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus-visible,[selectable]:focus-visible,[selectable]>:focus-visible{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.first,.cr-row.continuation{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip),cr-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}`])}let instance$13=null;function getCss$10(){return instance$13||(instance$13=[...[],css`.spinner{--cr-spinner-size:28px;mask-image:url(//resources/images/throbber_small.svg);mask-position:center;mask-repeat:no-repeat;mask-size:var(--cr-spinner-size) var(--cr-spinner-size);background-color:var(--cr-spinner-color,var(--google-blue-500));height:var(--cr-spinner-size);width:var(--cr-spinner-size)}@media (prefers-color-scheme:dark){.spinner{background-color:var(--cr-spinner-color,var(--google-blue-300))}}`])}let instance$12=null;function getCss$$(){return instance$12||(instance$12=[...[getCss$11(),getCss$12(),getCss$10()],css`:host{display:block;height:40px;isolation:isolate;transition:background-color 150ms cubic-bezier(0.4,0,0.2,1),width 150ms cubic-bezier(0.4,0,0.2,1);width:44px}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none !important}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-icon-button-focus-outline-color:var(--cr-toolbar-icon-button-focus-outline-color,var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-500))}}cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,var(--color-toolbar-search-field-icon,var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size,28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}#icon{transition:margin 150ms,opacity 200ms}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)));opacity:0;transition:opacity 200ms}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,white)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,white)}}.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,var(--google-grey-700));--cr-spinner-size:var(--cr-icon-size);margin:0;opacity:1;padding:2px;position:absolute}@media (prefers-color-scheme:dark){.spinner{--cr-spinner-color:var(--cr-toolbar-search-field-input-icon-color,white)}}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;font-size:12px;font-weight:500;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0);min-width:0;position:relative}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;text-overflow:ellipsis;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:transparent;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font:inherit;font-size:12px;font-weight:500;outline:none;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,white)}}input[type='search']::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:none;border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,default);height:36px;max-width:var(--cr-toolbar-field-max-width,none);overflow:hidden;padding:0 6px;position:relative;width:var(--cr-toolbar-field-width,680px);--cr-toolbar-search-field-border-radius:100px}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,0.22))}}#background,#stateBackground{display:none}:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([webui-refresh-2026]){&:host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-surface4)))}}:host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) .spinner{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%;position:relative;z-index:2}`])}let instance$11=null;function getCss$_(){return instance$11||(instance$11=[...[getCss$$()],css`:host(:not([narrow])){border-radius:var(--leo-radius-m);height:44px}:host(:not([narrow])) #background{border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);background:var(--leo-color-container-background)}@media (prefers-color-scheme:dark){:host(:not([narrow])) #background{background:transparent;border-color:var(--leo-color-divider-subtle)}}input{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px}#prompt{font-family:system-ui,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.1px;color:var(--leo-color-text-tertiary)}cr-icon-button{--cr-icon-button-fill-color:var(--leo-color-icon-default)}:host(:hover:not([search-focused_],[narrow])) #stateBackground{background:rgba(0,0,0,0.05)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$T(){return html`
<div id="background"></div>
<div id="stateBackground"></div>
<div id="content">
  ${this.shouldShowSpinner_()?html`
    <div class="spinner"></div>
  `:""}
  <cr-icon-button id="icon" iron-icon="${this.iconOverride||"cr:search"}"
      title="${this.label}" tabindex="${this.getIconTabIndex_()}"
      aria-hidden="${this.getIconAriaHidden_()}" suppress-rtl-flip
      @click="${this.onSearchIconClick_}" ?disabled="${this.disabled}">
  </cr-icon-button>
  <div id="searchTerm">
    <label id="prompt" for="searchInput" aria-hidden="true">
      ${this.label}
    </label>
    <input id="searchInput" aria-labelledby="prompt"
        aria-description="${this.inputAriaDescription}" autocapitalize="off"
        autocomplete="off" type="search"
        @beforeinput="${this.onSearchTermNativeBeforeinput}"
        @input="${this.onSearchTermNativeInput}"
        @search="${this.onSearchTermSearch}"
        @keydown="${this.onSearchTermKeydown_}" @focus="${this.onInputFocus_}"
        @blur="${this.onInputBlur_}" ?autofocus="${this.autofocus}"
        spellcheck="false" ?disabled="${this.disabled}">
  </div>
  ${this.hasSearchText?html`
    <cr-icon-button id="clearSearch" iron-icon="cr:cancel-filled"
        title="${this.clearLabel}" @click="${this.onClearSearchClick_}"
        ?disabled="${this.disabled}">
    </cr-icon-button>
  `:html`
    <slot name="suffixElement"></slot>
  `}
</div>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase=CrSearchFieldMixinLit(CrLitElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{static get is(){return"cr-toolbar-search-field"}static get styles(){return getCss$_()}render(){return getHtml$T.bind(this)()}static get properties(){return{narrow:{type:Boolean,reflect:true},showingSearch:{type:Boolean,notify:true,reflect:true},disabled:{type:Boolean,reflect:true},autofocus:{type:Boolean,reflect:true},spinnerActive:{type:Boolean,reflect:true},searchFocused_:{type:Boolean,reflect:true},iconOverride:{type:String},inputAriaDescription:{type:String}}}#narrow_accessor_storage=false;get narrow(){return this.#narrow_accessor_storage}set narrow(value){this.#narrow_accessor_storage=value}#showingSearch_accessor_storage=false;get showingSearch(){return this.#showingSearch_accessor_storage}set showingSearch(value){this.#showingSearch_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#autofocus_accessor_storage=false;get autofocus(){return this.#autofocus_accessor_storage}set autofocus(value){this.#autofocus_accessor_storage=value}#spinnerActive_accessor_storage=false;get spinnerActive(){return this.#spinnerActive_accessor_storage}set spinnerActive(value){this.#spinnerActive_accessor_storage=value}#searchFocused__accessor_storage=false;get searchFocused_(){return this.#searchFocused__accessor_storage}set searchFocused_(value){this.#searchFocused__accessor_storage=value}#iconOverride_accessor_storage;get iconOverride(){return this.#iconOverride_accessor_storage}set iconOverride(value){this.#iconOverride_accessor_storage=value}#inputAriaDescription_accessor_storage="";get inputAriaDescription(){return this.#inputAriaDescription_accessor_storage}set inputAriaDescription(value){this.#inputAriaDescription_accessor_storage=value}firstUpdated(){this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}async showAndFocus(){this.showingSearch=true;await this.updateComplete;this.focus_()}onSearchTermNativeBeforeinput(e){this.fire("search-term-native-before-input",{e:e})}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchTermNativeInput(e){this.onSearchTermInput();this.fire("search-term-native-input",{e:e,inputValue:this.getValue()})}getIconTabIndex_(){return this.narrow&&!this.hasSearchText?0:-1}getIconAriaHidden_(){return(!this.narrow||this.hasSearchText).toString()}shouldShowSpinner_(){return this.spinnerActive&&this.showingSearch}onSearchIconClick_(){this.fire("search-icon-clicked")}focus_(){this.getSearchInput().focus()}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false;this.setValue("");this.getSearchInput().blur()}}async showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}if(this.narrow){await this.updateComplete;this.focus_()}}onClearSearchClick_(){this.setValue("");this.focus_();this.spinnerActive=false;this.fire("search-term-cleared")}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);let instance$10=null;function getCss$Z(){return instance$10||(instance$10=[...[getCss$19(),getCss$12()],css`:host{align-items:center;box-sizing:border-box;color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity 100ms}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host([always-show-logo]) picture,:host(:not([narrow])) picture{display:initial;margin-inline-end:16px}:host([always-show-logo]) #leftSpacer,:host(:not([narrow])) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host([always-show-logo]) :is(picture,#product-logo),:host(:not([narrow])) :is(picture,#product-logo){height:24px;width:24px}`])}let instance$$=null;function getCss$Y(){return instance$$||(instance$$=[...[getCss$Z(),getCss$19(),getCss$12()],css`:host(:not([narrow])) #leftContent{flex:0 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:center;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:0 1 0;text-align:end}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$S(){return html`
<div id="leftContent">
  <div id="leftSpacer">
    ${this.showMenu?html`
      <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu"
          @click="${this.onMenuClick_}"
          aria-label="${this.menuLabel||nothing}" title="${this.menuLabel}">
      </cr-icon-button>
    `:""}
    <slot name="product-logo">
      <picture>
        <source media="(prefers-color-scheme: dark)"
            srcset="//resources/images/chrome_logo_dark.svg">
        <img id="product-logo"
            srcset="chrome://theme/current-channel-logo@1x 1x,
                    chrome://theme/current-channel-logo@2x 2x"
            role="presentation">
      </picture>
    </slot>
    <h1>${this.pageName}</h1>
  </div>
</div>

<div id="centeredContent" ?hidden="${!this.showSearch}">
  <cr-toolbar-search-field id="search" ?narrow="${this.narrow}"
      part="search-field" exportparts="search-input"
      label="${this.searchPrompt}" clear-label="${this.clearLabel}"
      ?spinner-active="${this.spinnerActive}"
      ?showing-search="${this.showingSearch_}"
      @showing-search-changed="${this.onShowingSearchChanged_}"
      ?autofocus="${this.autofocus}" icon-override="${this.searchIconOverride}"
      input-aria-description="${this.searchInputAriaDescription}">
  </cr-toolbar-search-field>
</div>

<div id="rightContent">
  <div id="rightSpacer">
    <slot></slot>
  </div>
</div>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends CrLitElement{static get is(){return"cr-toolbar"}static get styles(){return getCss$Y()}render(){return getHtml$S.bind(this)()}static get properties(){return{pageName:{type:String},searchPrompt:{type:String},clearLabel:{type:String},menuLabel:{type:String},spinnerActive:{type:Boolean},showMenu:{type:Boolean},showSearch:{type:Boolean},autofocus:{type:Boolean,reflect:true},narrow:{type:Boolean,reflect:true,notify:true},narrowThreshold:{type:Number},alwaysShowLogo:{type:Boolean,reflect:true},showingSearch_:{type:Boolean,reflect:true},searchIconOverride:{type:String},searchInputAriaDescription:{type:String}}}#pageName_accessor_storage="";get pageName(){return this.#pageName_accessor_storage}set pageName(value){this.#pageName_accessor_storage=value}#searchPrompt_accessor_storage="";get searchPrompt(){return this.#searchPrompt_accessor_storage}set searchPrompt(value){this.#searchPrompt_accessor_storage=value}#clearLabel_accessor_storage="";get clearLabel(){return this.#clearLabel_accessor_storage}set clearLabel(value){this.#clearLabel_accessor_storage=value}#menuLabel_accessor_storage;get menuLabel(){return this.#menuLabel_accessor_storage}set menuLabel(value){this.#menuLabel_accessor_storage=value}#spinnerActive_accessor_storage=false;get spinnerActive(){return this.#spinnerActive_accessor_storage}set spinnerActive(value){this.#spinnerActive_accessor_storage=value}#showMenu_accessor_storage=false;get showMenu(){return this.#showMenu_accessor_storage}set showMenu(value){this.#showMenu_accessor_storage=value}#showSearch_accessor_storage=true;get showSearch(){return this.#showSearch_accessor_storage}set showSearch(value){this.#showSearch_accessor_storage=value}#autofocus_accessor_storage=false;get autofocus(){return this.#autofocus_accessor_storage}set autofocus(value){this.#autofocus_accessor_storage=value}#narrow_accessor_storage=false;get narrow(){return this.#narrow_accessor_storage}set narrow(value){this.#narrow_accessor_storage=value}#narrowThreshold_accessor_storage=900;get narrowThreshold(){return this.#narrowThreshold_accessor_storage}set narrowThreshold(value){this.#narrowThreshold_accessor_storage=value}#alwaysShowLogo_accessor_storage=false;get alwaysShowLogo(){return this.#alwaysShowLogo_accessor_storage}set alwaysShowLogo(value){this.#alwaysShowLogo_accessor_storage=value}#showingSearch__accessor_storage=false;get showingSearch_(){return this.#showingSearch__accessor_storage}set showingSearch_(value){this.#showingSearch__accessor_storage=value}#searchIconOverride_accessor_storage;get searchIconOverride(){return this.#searchIconOverride_accessor_storage}set searchIconOverride(value){this.#searchIconOverride_accessor_storage=value}#searchInputAriaDescription_accessor_storage="";get searchInputAriaDescription(){return this.#searchInputAriaDescription_accessor_storage}set searchInputAriaDescription(value){this.#searchInputAriaDescription_accessor_storage=value}narrowQuery_=null;willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("narrowThreshold")){this.narrowQuery_=window.matchMedia(`(max-width: ${this.narrowThreshold}px)`);this.narrow=this.narrowQuery_.matches;this.narrowQuery_.addListener((()=>this.onQueryChanged_()))}}getSearchField(){return this.$.search}onMenuClick_(){this.fire("cr-toolbar-menu-click")}async focusMenuButton(){assert(this.showMenu);await this.updateComplete;const menuButton=this.shadowRoot.querySelector("#menuButton");assert(!!menuButton);menuButton.focus()}isMenuFocused(){return!!this.shadowRoot.activeElement&&this.shadowRoot.activeElement.id==="menuButton"}onShowingSearchChanged_(e){this.showingSearch_=e.detail.value}onQueryChanged_(){assert(this.narrowQuery_);this.narrow=this.narrowQuery_.matches}}customElements.define(CrToolbarElement.is,CrToolbarElement);let instance$_=null;function getCss$X(){return instance$_||(instance$_=[...[],css`:host ::slotted([slot=view]){bottom:0;display:none;left:0;position:absolute;right:0;top:0}:host([show-all]) ::slotted([slot=view]){display:block;position:initial}:host ::slotted(.active),:host ::slotted(.closing){display:block}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$R(){return html`<slot name="view"></slot>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getEffectiveView(element){return element.matches("cr-lazy-render, cr-lazy-render-lit")?element.get():element}function dispatchCustomEvent(element,eventType){element.dispatchEvent(new CustomEvent(eventType,{bubbles:true,composed:true}))}const viewAnimations=new Map;viewAnimations.set("fade-in",(element=>{const animation=element.animate([{opacity:0},{opacity:1}],{duration:180,easing:"ease-in-out",iterations:1});return animation.finished}));viewAnimations.set("fade-out",(element=>{const animation=element.animate([{opacity:1},{opacity:0}],{duration:180,easing:"ease-in-out",iterations:1});return animation.finished}));viewAnimations.set("slide-in-fade-in-ltr",(element=>{const animation=element.animate([{transform:"translateX(-8px)",opacity:0},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.0, 0.0, 0.2, 1)",fill:"forwards",iterations:1});return animation.finished}));viewAnimations.set("slide-in-fade-in-rtl",(element=>{const animation=element.animate([{transform:"translateX(8px)",opacity:0},{transform:"translateX(0)",opacity:1}],{duration:300,easing:"cubic-bezier(0.0, 0.0, 0.2, 1)",fill:"forwards",iterations:1});return animation.finished}));class CrViewManagerElement extends CrLitElement{static get is(){return"cr-view-manager"}static get styles(){return getCss$X()}render(){return getHtml$R.bind(this)()}exit_(element,animation){const animationFunction=viewAnimations.get(animation);element.classList.remove("active");element.classList.add("closing");dispatchCustomEvent(element,"view-exit-start");if(!animationFunction){element.classList.remove("closing");dispatchCustomEvent(element,"view-exit-finish");return Promise.resolve()}return animationFunction(element).then((()=>{element.classList.remove("closing");dispatchCustomEvent(element,"view-exit-finish")}))}enter_(view,animation){const animationFunction=viewAnimations.get(animation);const effectiveView=getEffectiveView(view);effectiveView.classList.add("active");dispatchCustomEvent(effectiveView,"view-enter-start");if(!animationFunction){dispatchCustomEvent(effectiveView,"view-enter-finish");return Promise.resolve()}return animationFunction(effectiveView).then((()=>{dispatchCustomEvent(effectiveView,"view-enter-finish")}))}switchView(newViewId,enterAnimation,exitAnimation){return this.switchViews([newViewId],enterAnimation,exitAnimation)}switchViews(newViewIds,enterAnimation,exitAnimation){let previousViews=new Set(this.querySelectorAll(".active"));let newViews=new Set(newViewIds.length===0?[]:this.querySelectorAll(newViewIds.map((id=>`#${id}`)).join(",")));assert(newViews.size===newViewIds.length);const commonViews=previousViews.intersection(newViews);previousViews=previousViews.difference(commonViews);newViews=newViews.difference(commonViews);const promises=[];for(const view of previousViews){promises.push(this.exit_(view,exitAnimation||"fade-out"))}for(const view of newViews){promises.push(this.enter_(view,enterAnimation||(previousViews.size===0?"no-animation":"fade-in")))}return Promise.all(promises).then((()=>{}))}}customElements.define(CrViewManagerElement.is,CrViewManagerElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSelectableMixin=superClass=>{class CrSelectableMixin extends superClass{static get properties(){return{attrForSelected:{type:String},selected:{type:String,notify:true},selectedAttribute:{type:String},selectable:{type:String}}}#attrForSelected_accessor_storage=null;get attrForSelected(){return this.#attrForSelected_accessor_storage}set attrForSelected(value){this.#attrForSelected_accessor_storage=value}#selectable_accessor_storage;get selectable(){return this.#selectable_accessor_storage}set selectable(value){this.#selectable_accessor_storage=value}#selected_accessor_storage;get selected(){return this.#selected_accessor_storage}set selected(value){this.#selected_accessor_storage=value}#selectedAttribute_accessor_storage=null;get selectedAttribute(){return this.#selectedAttribute_accessor_storage}set selectedAttribute(value){this.#selectedAttribute_accessor_storage=value}selectOnClick=true;items_=[];selectedItem_=null;observeItems(){this.getSlot().addEventListener("slotchange",(()=>this.itemsChanged()))}connectedCallback(){super.connectedCallback();this.updateItems_()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("attrForSelected")){if(this.selectedItem_){assert(this.attrForSelected);const value=this.selectedItem_.getAttribute(this.attrForSelected);assert(value!==null);this.selected=value}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.selectOnClick){this.addEventListener("click",(e=>this.onClick_(e)))}this.observeItems()}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("selected")){this.updateSelectedItem_()}}select(value){this.selected=value}selectPrevious(){const length=this.items_.length;let index=length-1;if(this.selected!==undefined){index=(this.valueToIndex_(this.selected)-1+length)%length}this.selected=this.indexToValue_(index)}selectNext(){const index=this.selected===undefined?0:(this.valueToIndex_(this.selected)+1)%this.items_.length;this.selected=this.indexToValue_(index)}getItemsForTest(){return this.items_}getSlot(){const slot=this.shadowRoot.querySelector("slot");assert(slot);return slot}queryItems(){const selectable=this.selectable===undefined?"*":this.selectable;return Array.from(this.querySelectorAll(`:scope > ${selectable}`))}queryMatchingItem(selector){const selectable=this.selectable||"*";return this.querySelector(`:scope > :is(${selectable})${selector}`)}updateItems_(){this.items_=this.queryItems();this.items_.forEach(((item,index)=>item.setAttribute("data-selection-index",index.toString())))}get selectedItem(){return this.selectedItem_}updateSelectedItem_(){if(!this.items_){return}const item=this.selected==null?null:this.items_[this.valueToIndex_(this.selected)];if(!!item&&this.selectedItem_!==item){this.setItemSelected_(this.selectedItem_,false);this.setItemSelected_(item,true)}else if(!item){this.setItemSelected_(this.selectedItem_,false)}}setItemSelected_(item,isSelected){if(!item){return}item.classList.toggle("selected",isSelected);if(this.selectedAttribute){item.toggleAttribute(this.selectedAttribute,isSelected)}this.selectedItem_=isSelected?item:null;this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})}valueToIndex_(value){if(!this.attrForSelected){return Number(value)}const match=this.queryMatchingItem(`[${this.attrForSelected}="${value}"]`);return match?Number(match.dataset["selectionIndex"]):-1}indexToValue_(index){if(!this.attrForSelected){return index.toString()}const item=this.items_[index];if(!item){return index.toString()}return item.getAttribute(this.attrForSelected)||index.toString()}itemsChanged(){this.updateItems_();this.updateSelectedItem_();this.fire("iron-items-changed")}onClick_(e){let element=e.target;while(element&&element!==this){const idx=this.items_.indexOf(element);if(idx>=0){const value=this.indexToValue_(idx);assert(value!==null);this.fire("iron-activate",{item:element,selected:value});this.select(value);return}element=element.parentNode}}}return CrSelectableMixin};let instance$Z=null;function getCss$W(){return instance$Z||(instance$Z=[...[],css`:host{display:block}:host(:not([show-all]))>::slotted(:not(slot):not(.selected)){display:none !important}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$Q(){return html`<slot></slot>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPageSelectorElementBase=CrSelectableMixin(CrLitElement);class CrPageSelectorElement extends CrPageSelectorElementBase{static get is(){return"cr-page-selector"}static get styles(){return getCss$W()}render(){return getHtml$Q.bind(this)()}static get properties(){return{hasNestedSlots:{type:Boolean}}}#hasNestedSlots_accessor_storage=false;get hasNestedSlots(){return this.#hasNestedSlots_accessor_storage}set hasNestedSlots(value){this.#hasNestedSlots_accessor_storage=value}constructor(){super();this.selectOnClick=false}queryItems(){return this.hasNestedSlots?Array.from(this.getSlot().assignedElements({flatten:true})):super.queryItems()}queryMatchingItem(selector){if(this.hasNestedSlots){const match=this.queryItems().find((el=>el.matches(selector)));return match?match:null}return super.queryMatchingItem(selector)}observeItems(){if(this.hasNestedSlots){this.addEventListener("slotchange",(()=>this.itemsChanged()))}super.observeItems()}}customElements.define(CrPageSelectorElement.is,CrPageSelectorElement);let instance$Y=null;function getCss$V(){return instance$Y||(instance$Y=[...[getCss$19()],css`:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}:host-context([webui-refresh-2026]){&:host{--cr-tabs-selected-color:var(--color-tab-nav-item-selected,var(--google-blue-600))}@media (prefers-color-scheme:dark){&:host{--cr-tabs-selected-color:var(--color-tab-nav-item-selected,var(--google-blue-300))}}}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:var(--cr-tabs-flex,auto);height:100%;justify-content:center;opacity:1;outline:none;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity 100ms cubic-bezier(.4,0,1,1)}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto);outline-offset:var(--cr-tabs-focus-outline-offset,0)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator,.tab-indicator-background{bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);position:absolute;right:var(--cr-tabs-tab-inline-padding,0)}.tab-indicator{border-top-left-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));border-top-right-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));opacity:0;transform-origin:left center;transition:transform}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-600));opacity:var(--cr-tabs-selection-bar-unselected-opacity,0);z-index:-1}@media (prefers-color-scheme:dark){.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-300))}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator-background{background:SelectedItem}.selected .tab-indicator{background:SelectedItem}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$P(){return html`
${this.tabNames.map(((item,index)=>html`
  <div role="tab" class="tab ${this.getSelectedClass_(index)}"
      aria-selected="${this.getAriaSelected_(index)}"
      tabindex="${this.getTabindex_(index)}" data-index="${index}"
      @click="${this.onTabClick_}">
    <div class="tab-icon" .style="${this.getIconStyle_(index)}"></div>
    ${item}
    <div class="tab-indicator-background"></div>
    <div class="tab-indicator"></div>
  </div>
`))}`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NONE_SELECTED=-1;class CrTabsElement extends CrLitElement{static get is(){return"cr-tabs"}static get styles(){return getCss$V()}render(){return getHtml$P.bind(this)()}static get properties(){return{tabIcons:{type:Array},tabNames:{type:Array},selected:{type:Number,notify:true}}}#tabIcons_accessor_storage=[];get tabIcons(){return this.#tabIcons_accessor_storage}set tabIcons(value){this.#tabIcons_accessor_storage=value}#tabNames_accessor_storage=[];get tabNames(){return this.#tabNames_accessor_storage}set tabNames(value){this.#tabNames_accessor_storage=value}#selected_accessor_storage=NONE_SELECTED;get selected(){return this.#selected_accessor_storage}set selected(value){this.#selected_accessor_storage=value}isRtl_=false;connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-tabs")}firstUpdated(){this.setAttribute("role","tablist");this.addEventListener("keydown",this.onKeyDown_.bind(this))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("selected")){this.onSelectedChanged_(this.selected,changedProperties.get("selected"))}}getAriaSelected_(index){return index===this.selected?"true":"false"}getIconStyle_(index){const icon=this.tabIcons[index];return icon?`-webkit-mask-image: url(${icon}); display: block;`:""}getTabindex_(index){return index===this.selected?"0":"-1"}getSelectedClass_(index){return index===this.selected?"selected":""}onSelectedChanged_(newSelected,oldSelected){if(newSelected===NONE_SELECTED||oldSelected===NONE_SELECTED||oldSelected===undefined){return}const tabs=this.shadowRoot.querySelectorAll(".tab");if(tabs.length<=oldSelected){return}const oldTabRect=tabs[oldSelected].getBoundingClientRect();const newTabRect=tabs[newSelected].getBoundingClientRect();const newIndicator=tabs[newSelected].querySelector(".tab-indicator");newIndicator.classList.remove("expand","contract");this.updateIndicator_(newIndicator,newTabRect,oldTabRect.left,oldTabRect.width);newIndicator.getBoundingClientRect();newIndicator.classList.add("expand");newIndicator.addEventListener("transitionend",(e=>this.onIndicatorTransitionEnd_(e)),{once:true});const leftmostEdge=Math.min(oldTabRect.left,newTabRect.left);const fullWidth=newTabRect.left>oldTabRect.left?newTabRect.right-oldTabRect.left:oldTabRect.right-newTabRect.left;this.updateIndicator_(newIndicator,newTabRect,leftmostEdge,fullWidth)}async onKeyDown_(e){const count=this.tabNames.length;let newSelection;if(e.key==="Home"){newSelection=0}else if(e.key==="End"){newSelection=count-1}else if(e.key==="ArrowLeft"||e.key==="ArrowRight"){const delta=e.key==="ArrowLeft"?this.isRtl_?1:-1:this.isRtl_?-1:1;newSelection=(count+this.selected+delta)%count}else{return}e.preventDefault();e.stopPropagation();this.selected=newSelection;await this.updateComplete;this.shadowRoot.querySelector(".tab.selected").focus()}onIndicatorTransitionEnd_(event){const indicator=event.target;indicator.classList.replace("expand","contract");indicator.style.transform=`translateX(0) scaleX(1)`}onTabClick_(e){const target=e.currentTarget;this.selected=Number(target.dataset["index"])}updateIndicator_(indicator,originRect,newLeft,newWidth){const leftDiff=100*(newLeft-originRect.left)/originRect.width;const widthRatio=newWidth/originRect.width;const transform=`translateX(${leftDiff}%) scaleX(${widthRatio})`;indicator.style.transform=transform}}customElements.define(CrTabsElement.is,CrTabsElement);
// Copyright (c) 2024 The Brave Authors. All rights reserved.
function getHtml$O(){return html`
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
    `}render(){return getHtml$O.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},class:{type:String,reflect:true},size:{type:String,reflect:true},noink:{type:Boolean}}}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#class_accessor_storage="";get class(){return this.#class_accessor_storage}set class(value){this.#class_accessor_storage=value}#size_accessor_storage="small";get size(){return this.#size_accessor_storage}set size(value){this.#size_accessor_storage=value}#noink_accessor_storage=false;get noink(){return this.#noink_accessor_storage}set noink(value){this.#noink_accessor_storage=value}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}connectedCallback(){super.connectedCallback();this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("click",this.onClick_)}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("class")){this.classChanged()}if(changedProperties.has("disabled")){if(this.disabled){this.$.button.setAttribute("isDisabled","_")}else{this.$.button.removeAttribute("isDisabled")}}if(changedProperties.has("size")){this.$.button.setAttribute("size",this.size)}}classChanged(){let kind="outline";if(this.classList.contains("action-button")){kind="filled"}const avatar=this.classList.contains("avatar");if(avatar||this.classList.contains("plain")){kind="plain"}if(avatar){this.$.button.setAttribute("fab","")}this.$.button.setAttribute("kind",kind)}getRipple(){return null}hasRipple(){return false}}customElements.define(CrButtonElement.is,CrButtonElement);let instance$X=null;function getCss$U(){return instance$X||(instance$X=[...[],css`:host{--cr-input-background-color:var(--color-textfield-filled-background,var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--color-textfield-filled-error,var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,var(--cr-fallback-on-surface-subtle));display:block;isolation:isolate;outline:none}:host([readonly]){--cr-input-border-radius:8px 8px}#label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}#inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,var(--cr-fallback-color-on-surface-subtle))}#inner-input-content ::slotted([slot='inline-prefix']){--cr-icon-button-margin-start:-8px}#inner-input-content ::slotted([slot='inline-suffix']){--cr-icon-button-margin-end:-4px}:host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{background-color:var(--cr-input-hover-background-color);display:none;inset:0;pointer-events:none;position:absolute;z-index:0}:host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:var(--cr-input-font-size,12px);font-weight:inherit;line-height:16px;min-height:var(--cr-input-min-height,auto);outline:none;padding:0;text-align:inherit;text-overflow:ellipsis;width:100%}#inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([invalid]) #underline,:host([force-underline]) #underline,:host([focused_]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host([readonly]) #underline{display:none}:host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,var(--cr-fallback-color-disabled-background))}:host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}`])}let instance$W=null;function getCss$T(){return instance$W||(instance$W=[...[getCss$19(),getCss$U(),getCss$11()],css`:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing) !important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:none;letter-spacing:var(--cr-input-letter-spacing)}#input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,0.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:11px;min-height:var(--cr-form-field-label-height);line-height:16px;margin:4px 10px;visibility:hidden;white-space:var(--cr-input-error-white-space);height:auto;overflow:hidden;text-overflow:ellipsis}:host([invalid]) #error{visibility:visible}#row-container,#inner-input-content{align-items:center;display:flex;justify-content:space-between;position:relative}#inner-input-content{gap:4px;height:16px;z-index:1}#input[type='search']::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$N(){return html`
<div id="label" class="cr-form-field-label" ?hidden="${!this.label}"
    aria-hidden="${this.getLabelAriaHidden_()||nothing}">
  ${this.label}
</div>
<div id="row-container" part="row-container">
  <div id="input-container">
    <div id="inner-input-container">
      <div id="hover-layer"></div>
      <div id="inner-input-content">
        <slot name="inline-prefix"></slot>
        <input id="input" ?disabled="${this.disabled}"
            ?autofocus="${this.autofocus}" .value="${this.internalValue_}"
            tabindex="${this.inputTabindex}" .type="${this.type}"
            ?readonly="${this.readonly}" maxlength="${this.maxlength}"
            pattern="${this.pattern||nothing}" ?required="${this.required}"
            minlength="${this.minlength}" inputmode="${this.inputmode}"
            aria-description="${this.ariaDescription||nothing}"
            aria-errormessage="${this.getAriaErrorMessage_()||nothing}"
            aria-labelledby="${this.getAriaLabelledBy_()||nothing}"
            aria-label="${this.getAriaLabel_()}"
            aria-invalid="${this.getAriaInvalid_()}"
            .max="${this.max||nothing}" .min="${this.min||nothing}"
            @focus="${this.onInputFocus_}" @blur="${this.onInputBlur_}"
            @change="${this.onInputChange_}" @input="${this.onInput_}"
            part="input" autocomplete="off">
        <slot name="inline-suffix"></slot>
      </div>
    </div>
    <div id="underline-base"></div>
    <div id="underline"></div>
  </div>
  <slot name="suffix"></slot>
</div>
<div id="error" role="${this.getErrorRole_()||nothing}"
    aria-live="assertive"><!--
  -->${this.getErrorMessage_()}<!--
--></div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends CrLitElement{static get is(){return"cr-input"}static get styles(){return getCss$T()}render(){return getHtml$N.bind(this)()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String},autofocus:{type:Boolean,reflect:true},autoValidate:{type:Boolean},disabled:{type:Boolean,reflect:true},errorMessage:{type:String},focused_:{type:Boolean,reflect:true},invalid:{type:Boolean,notify:true,reflect:true},max:{type:Number,reflect:true},min:{type:Number,reflect:true},maxlength:{type:Number,reflect:true},minlength:{type:Number,reflect:true},pattern:{type:String,reflect:true},inputmode:{type:String},label:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflect:true},required:{type:Boolean,reflect:true},inputTabindex:{type:Number},type:{type:String},value:{type:String,notify:true},internalValue_:{type:String,state:true}}}#ariaDescription_accessor_storage=null;get ariaDescription(){return this.#ariaDescription_accessor_storage}set ariaDescription(value){this.#ariaDescription_accessor_storage=value}#ariaLabel_accessor_storage="";get ariaLabel(){return this.#ariaLabel_accessor_storage}set ariaLabel(value){this.#ariaLabel_accessor_storage=value}#autofocus_accessor_storage=false;get autofocus(){return this.#autofocus_accessor_storage}set autofocus(value){this.#autofocus_accessor_storage=value}#autoValidate_accessor_storage=false;get autoValidate(){return this.#autoValidate_accessor_storage}set autoValidate(value){this.#autoValidate_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#errorMessage_accessor_storage="";get errorMessage(){return this.#errorMessage_accessor_storage}set errorMessage(value){this.#errorMessage_accessor_storage=value}#inputmode_accessor_storage;get inputmode(){return this.#inputmode_accessor_storage}set inputmode(value){this.#inputmode_accessor_storage=value}#inputTabindex_accessor_storage=0;get inputTabindex(){return this.#inputTabindex_accessor_storage}set inputTabindex(value){this.#inputTabindex_accessor_storage=value}#invalid_accessor_storage=false;get invalid(){return this.#invalid_accessor_storage}set invalid(value){this.#invalid_accessor_storage=value}#label_accessor_storage="";get label(){return this.#label_accessor_storage}set label(value){this.#label_accessor_storage=value}#max_accessor_storage;get max(){return this.#max_accessor_storage}set max(value){this.#max_accessor_storage=value}#min_accessor_storage;get min(){return this.#min_accessor_storage}set min(value){this.#min_accessor_storage=value}#maxlength_accessor_storage;get maxlength(){return this.#maxlength_accessor_storage}set maxlength(value){this.#maxlength_accessor_storage=value}#minlength_accessor_storage;get minlength(){return this.#minlength_accessor_storage}set minlength(value){this.#minlength_accessor_storage=value}#pattern_accessor_storage;get pattern(){return this.#pattern_accessor_storage}set pattern(value){this.#pattern_accessor_storage=value}#placeholder_accessor_storage=null;get placeholder(){return this.#placeholder_accessor_storage}set placeholder(value){this.#placeholder_accessor_storage=value}#readonly_accessor_storage=false;get readonly(){return this.#readonly_accessor_storage}set readonly(value){this.#readonly_accessor_storage=value}#required_accessor_storage=false;get required(){return this.#required_accessor_storage}set required(value){this.#required_accessor_storage=value}#type_accessor_storage="text";get type(){return this.#type_accessor_storage}set type(value){this.#type_accessor_storage=value}#value_accessor_storage="";get value(){return this.#value_accessor_storage}set value(value){this.#value_accessor_storage=value}#internalValue__accessor_storage="";get internalValue_(){return this.#internalValue__accessor_storage}set internalValue_(value){this.#internalValue__accessor_storage=value}#focused__accessor_storage=false;get focused_(){return this.#focused__accessor_storage}set focused_(value){this.#focused__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("value")){this.internalValue_=this.value===undefined||this.value===null?"":this.value}if(changedProperties.has("inputTabindex")){assert(this.inputTabindex===0||this.inputTabindex===-1)}if(changedProperties.has("type")){assert(SUPPORTED_INPUT_TYPES.has(this.type))}}firstUpdated(){assert(!this.hasAttribute("tabindex"))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("value")){const previous=changedProperties.get("value");if((!!this.value||!!previous)&&this.autoValidate){this.invalid=!this.inputElement.checkValidity()}}if(changedProperties.has("placeholder")){if(this.placeholder===null||this.placeholder===undefined){this.inputElement.removeAttribute("placeholder")}else{this.inputElement.setAttribute("placeholder",this.placeholder)}}}get inputElement(){return this.$.input}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}async onInputChange_(e){await this.updateComplete;this.fire("change",{sourceEvent:e})}onInput_(e){this.internalValue_=e.target.value;this.value=this.internalValue_}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}getAriaLabel_(){return this.ariaLabel||this.label||this.placeholder}getAriaLabelledBy_(){if(this.label&&!this.ariaLabel){return"label"}return null}getLabelAriaHidden_(){return this.getAriaLabelledBy_()?null:"true"}getAriaInvalid_(){return this.invalid?"true":"false"}getErrorMessage_(){return this.invalid?this.errorMessage:""}getErrorRole_(){return this.invalid?"alert":""}getAriaErrorMessage_(){return this.invalid?"error":""}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.performUpdate();this.invalid=!this.inputElement.checkValidity();this.performUpdate();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);let instance$V=null;function getCss$S(){return instance$V||(instance$V=[...[getCss$11(),getCss$U()],css`:host{display:flex;user-select:none;--cr-search-field-clear-icon-fill:var(--google-grey-700);--cr-search-field-clear-icon-margin-end:-4px;--cr-search-field-input-border-bottom:1px solid var(--cr-secondary-text-color)}#searchIcon{align-self:center;display:var(--cr-search-field-search-icon-display,inherit);height:16px;padding:4px;vertical-align:middle;width:16px}#searchIconInline{--iron-icon-fill-color:var(--cr-search-field-search-icon-fill,inherit);display:var(--cr-search-field-search-icon-inline-display,none);margin-inline-start:var(--cr-search-field-search-icon-inline-margin-start,0)}#searchInput{--cr-input-background-color:transparent;--cr-input-border-bottom:var(--cr-search-field-input-border-bottom);--cr-input-border-radius:0;--cr-input-error-display:none;--cr-input-min-height:var(--cr-search-field-input-min-height,24px);--cr-input-padding-end:0;--cr-input-padding-start:var(--cr-search-field-input-padding-start,0);--cr-input-padding-bottom:var(--cr-search-field-input-padding-bottom,2px);--cr-input-padding-top:var(--cr-search-field-input-padding-top,2px);--cr-input-placeholder-color:var(--cr-search-field-placeholder-color);--cr-input-underline-display:var(--cr-search-field-underline-display);--cr-input-underline-border-radius:var(--cr-search-field-input-underline-border-radius,0);--cr-input-underline-height:var(--cr-search-field-input-underline-height,0);align-self:stretch;color:var(--cr-primary-text-color);display:block;font-size:92.3076923%;width:var(--cr-search-field-input-width,160px)}:host([has-search-text]) #searchInput{--cr-input-padding-end:calc(24px + var(--cr-search-field-clear-icon-margin-end))}#clearSearch{--cr-icon-button-fill-color:var(--cr-search-field-clear-icon-fill);--cr-icon-button-icon-size:var(--cr-search-field-clear-icon-size,16px);--cr-icon-button-size:var(--cr-search-field-clear-button-size,24px);margin-inline-end:var(--cr-search-field-clear-icon-margin-end);margin-inline-start:4px;position:absolute;right:0;z-index:1}:host-context([dir='rtl']) #clearSearch{left:0;right:auto}:host-context([settings-refresh-2026]){--cr-search-field-clear-icon-fill:var(--cr-secondary-text-color);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-search-icon-fill:var(--cr-secondary-text-color);--cr-search-field-underline-display:none;#searchIcon{--iron-icon-fill-color:var(--cr-secondary-text-color)}#searchInput{--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-focusable-border-unfocused,var(--cr-fallback-color-outline));--cr-input-border-radius:4px;--cr-input-error-display:none;--cr-input-min-height:36px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:10px;--cr-input-padding-top:9px;line-height:16px;margin-inline-start:8px;width:var(--cr-search-field-input-width,240px);&[focused_]{--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:9px;--cr-input-padding-top:8px}}&:host([has-search-text]) #searchInput{--cr-input-padding-end:calc(24px + var(--cr-search-field-clear-icon-margin-end));&[focused_]{--cr-input-padding-end:calc(24px + var(--cr-search-field-clear-icon-margin-end) - 1px)}}#clearSearch{top:50%;transform:translateY(-50%)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$M(){return html`
<cr-icon id="searchIcon" icon="${this.iconOverride}" part="searchIcon">
</cr-icon>
<cr-input id="searchInput" part="searchInput"
    @search="${this.onSearchTermSearch}" @input="${this.onSearchTermInput}"
    aria-label="${this.label}" type="search" ?autofocus="${this.autofocus}"
    .placeholder="${this.label}" spellcheck="false">
  <cr-icon id="searchIconInline" slot="inline-prefix" icon="cr:search">
  </cr-icon>
  <cr-icon-button id="clearSearch" class="icon-cancel" slot="suffix"
      ?hidden="${!this.hasSearchText}" @click="${this.onClearSearchClick_}"
      .title="${this.clearLabel}">
  </cr-icon-button>
</cr-input>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldElementBase=CrSearchFieldMixinLit(CrLitElement);class CrSearchFieldElement extends CrSearchFieldElementBase{static get is(){return"cr-search-field"}static get styles(){return getCss$S()}render(){return getHtml$M.bind(this)()}static get properties(){return{autofocus:{type:Boolean},iconOverride:{type:String}}}#autofocus_accessor_storage=false;get autofocus(){return this.#autofocus_accessor_storage}set autofocus(value){this.#autofocus_accessor_storage=value}#iconOverride_accessor_storage="cr:search";get iconOverride(){return this.#iconOverride_accessor_storage}set iconOverride(value){this.#iconOverride_accessor_storage=value}getSearchInput(){return this.$.searchInput}onClearSearchClick_(){this.setValue("");setTimeout((()=>{this.$.searchInput.focus()}))}}customElements.define(CrSearchFieldElement.is,CrSearchFieldElement);let instance$U=null;function getCss$R(){return instance$U||(instance$U=[...[],css`:host{display:block;position:relative}:host([chunk-size='0']) #container>::slotted(*){box-sizing:border-box;contain-intrinsic-size:var(--list-item-size,100px) auto;content-visibility:auto;width:100%}:host(:not([chunk-size='0'])) #container>::slotted(.chunk){box-sizing:border-box;contain-intrinsic-size:calc(var(--chunk-size) * var(--list-item-size,100px)) auto;content-visibility:auto;width:100%}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLazyListElement extends CrLitElement{static get is(){return"cr-lazy-list"}static get styles(){return getCss$R()}render(){const host=this.listItemHost===undefined?this.getRootNode().host:this.listItemHost;if(this.chunkSize===0){render(this.items.slice(0,this.numItemsDisplayed_).map(((item,index)=>this.template(item,index))),this,{host:host})}else{const chunks=Math.ceil(this.numItemsDisplayed_/this.chunkSize);const chunkArray=new Array(chunks).fill(0);render(chunkArray.map(((_item,index)=>html`<div id="chunk-${index}" class="chunk">
                                     </div>`)),this,{host:host});for(let chunkIndex=0;chunkIndex<chunks;chunkIndex++){const start=chunkIndex*this.chunkSize;const end=Math.min(this.numItemsDisplayed_,(chunkIndex+1)*this.chunkSize);const chunk=this.querySelector(`#chunk-${chunkIndex}`);assert(chunk);render(this.items.slice(start,end).map(((item,index)=>this.template(item,start+index))),chunk,{host:host})}}return html`<div id="container"><slot id="slot"></slot></div>`}static get properties(){return{chunkSize:{type:Number,reflect:true},items:{type:Array},itemSize:{type:Number},listItemHost:{type:Object},minViewportHeight:{type:Number},scrollOffset:{type:Number},scrollTarget:{type:Object},restoreFocusElement:{type:Object},template:{type:Object},numItemsDisplayed_:{state:true,type:Number}}}#items_accessor_storage=[];get items(){return this.#items_accessor_storage}set items(value){this.#items_accessor_storage=value}#itemSize_accessor_storage=undefined;get itemSize(){return this.#itemSize_accessor_storage}set itemSize(value){this.#itemSize_accessor_storage=value}#listItemHost_accessor_storage;get listItemHost(){return this.#listItemHost_accessor_storage}set listItemHost(value){this.#listItemHost_accessor_storage=value}#minViewportHeight_accessor_storage;get minViewportHeight(){return this.#minViewportHeight_accessor_storage}set minViewportHeight(value){this.#minViewportHeight_accessor_storage=value}#scrollOffset_accessor_storage=0;get scrollOffset(){return this.#scrollOffset_accessor_storage}set scrollOffset(value){this.#scrollOffset_accessor_storage=value}#scrollTarget_accessor_storage=document.documentElement;get scrollTarget(){return this.#scrollTarget_accessor_storage}set scrollTarget(value){this.#scrollTarget_accessor_storage=value}#restoreFocusElement_accessor_storage=null;get restoreFocusElement(){return this.#restoreFocusElement_accessor_storage}set restoreFocusElement(value){this.#restoreFocusElement_accessor_storage=value}#template_accessor_storage=()=>html``;get template(){return this.#template_accessor_storage}set template(value){this.#template_accessor_storage=value}#chunkSize_accessor_storage=0;get chunkSize(){return this.#chunkSize_accessor_storage}set chunkSize(value){this.#chunkSize_accessor_storage=value}#numItemsDisplayed__accessor_storage=0;get numItemsDisplayed_(){return this.#numItemsDisplayed__accessor_storage}set numItemsDisplayed_(value){this.#numItemsDisplayed__accessor_storage=value}lastItemsLength_=0;lastRenderedHeight_=0;resizeObserver_=null;scrollListener_=()=>this.onScroll_();willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("items")){this.lastItemsLength_=this.items.length;this.numItemsDisplayed_=this.items.length===0?0:Math.min(this.numItemsDisplayed_,this.items.length)}else{assert(this.items.length===this.lastItemsLength_,"Items array changed in place; rendered result may be incorrect.")}if(changedProperties.has("itemSize")){this.style.setProperty("--list-item-size",`${this.itemSize}px`)}if(changedProperties.has("chunkSize")){this.style.setProperty("--chunk-size",`${this.chunkSize}`)}}updated(changedProperties){super.updated(changedProperties);let itemsChanged=false;if(changedProperties.has("items")||changedProperties.has("minViewportHeight")||changedProperties.has("scrollOffset")){const previous=changedProperties.get("items");if(previous!==undefined||this.items.length!==0){this.onItemsChanged_();itemsChanged=true}}if(changedProperties.has("scrollTarget")){this.addRemoveScrollTargetListeners_(changedProperties.get("scrollTarget")||null);if(this.scrollTarget&&this.items.length>0&&!itemsChanged){this.fillCurrentViewport()}}}fillCurrentViewport(){if(this.items.length===0){return Promise.resolve()}return this.update_(this.$.container.style.height==="0px")}async ensureItemRendered(index){if(index<this.numItemsDisplayed_){return this.domItems()[index]}assert(index<this.items.length);await this.updateNumItemsDisplayed_(index+1);return this.domItems()[index]}addRemoveScrollTargetListeners_(oldTarget){if(oldTarget){const target=oldTarget===document.documentElement?window:oldTarget;target.removeEventListener("scroll",this.scrollListener_);assert(this.resizeObserver_);this.resizeObserver_.disconnect()}if(this.scrollTarget){const target=this.scrollTarget===document.documentElement?window:this.scrollTarget;target.addEventListener("scroll",this.scrollListener_);this.resizeObserver_=new ResizeObserver((()=>{requestAnimationFrame((()=>{const newHeight=this.getViewHeight_();if(newHeight>0&&newHeight!==this.lastRenderedHeight_){this.fillCurrentViewport()}}))}));this.resizeObserver_.observe(this.scrollTarget)}}shouldRestoreFocus_(){if(!this.restoreFocusElement){return false}const active=getDeepActiveElement();return this.restoreFocusElement===active||!!this.restoreFocusElement.shadowRoot&&this.restoreFocusElement.shadowRoot.activeElement===active}async onItemsChanged_(){if(this.items.length>0){const restoreFocus=this.shouldRestoreFocus_();await this.update_(true);if(restoreFocus){setTimeout((()=>{if(!this.restoreFocusElement){return}this.restoreFocusElement.focus();this.fire("focus-restored-for-test")}),0)}}else{this.$.container.style.height="0px";this.fire("items-rendered");this.fire("viewport-filled")}}getScrollTop_(){return this.scrollTarget===document.documentElement?window.pageYOffset:this.scrollTarget.scrollTop}getViewHeight_(){const offsetHeight=this.scrollTarget===document.documentElement?window.innerHeight:this.scrollTarget.offsetHeight;return this.getScrollTop_()-this.scrollOffset+Math.max(this.minViewportHeight||0,offsetHeight)}async update_(forceUpdateHeight){if(!this.scrollTarget){return}const height=this.getViewHeight_();if(height<=0){return}const added=await this.fillViewHeight_(height);this.fire("items-rendered");if(added||forceUpdateHeight){await this.updateHeight_();this.fire("viewport-filled")}}async fillViewHeight_(height){this.fire("fill-height-start");this.lastRenderedHeight_=height;assert(this.items.length);const initialDomItemCount=this.domItems().length;if(initialDomItemCount===0){await this.updateNumItemsDisplayed_(1)}const itemHeight=this.domItemAverageHeight_();if(itemHeight===0){this.lastRenderedHeight_=0;return false}const desiredDomItemCount=Math.min(Math.ceil(height/itemHeight),this.items.length);if(desiredDomItemCount>this.numItemsDisplayed_){await this.updateNumItemsDisplayed_(desiredDomItemCount)}const added=initialDomItemCount!==desiredDomItemCount;if(added){this.fire("fill-height-end")}return added}async updateNumItemsDisplayed_(itemsToDisplay){this.numItemsDisplayed_=itemsToDisplay;if(this.numItemsDisplayed_>200&&this.chunkSize<2){console.warn(`cr-lazy-list: ${this.numItemsDisplayed_} list items rendered. `+"If this is expected, consider chunking mode (chunkSize > 1) "+"to improve scrolling performance.")}await this.updateComplete}domItems(){return this.chunkSize===0?this.$.slot.assignedElements():Array.from(this.querySelectorAll(".chunk > *"))}domItemAverageHeight_(){assert(this.items.length>0);const domItems=this.domItems();assert(domItems.length>0);const firstDomItem=domItems.at(0);const lastDomItem=domItems.at(-1);const lastDomItemHeight=lastDomItem.offsetHeight;if(firstDomItem===lastDomItem&&lastDomItemHeight===0){return 0}else if(this.itemSize){return this.itemSize}let totalHeight=lastDomItem.offsetTop+lastDomItemHeight;if(this.chunkSize>0){totalHeight+=lastDomItem.offsetParent.offsetTop-firstDomItem.offsetParent.offsetTop}else{totalHeight-=firstDomItem.offsetTop}return totalHeight/domItems.length}async updateHeight_(){await new Promise((resolve=>setTimeout(resolve,0)));const estScrollHeight=this.items.length>0?this.items.length*this.domItemAverageHeight_():0;this.$.container.style.height=estScrollHeight+"px"}async onScroll_(){const scrollTop=this.getScrollTop_();if(scrollTop<=0||this.numItemsDisplayed_===this.items.length){return}await this.fillCurrentViewport()}}customElements.define(CrLazyListElement.is,CrLazyListElement);let instance$T=null;function getCss$Q(){return instance$T||(instance$T=[...[],css`:host{display:block;position:relative}:host([using-default-scroll-target]){overflow-y:auto}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrInfiniteListElement extends CrLitElement{static get is(){return"cr-infinite-list"}static get styles(){return getCss$Q()}render(){render(html`<cr-lazy-list id="list" .scrollTarget="${this.scrollTarget}"
          .chunkSize="${this.chunkSize}"
          .scrollOffset="${this.scrollOffset}"
          .listItemHost="${this.getRootNode().host}"
          .items="${this.items}" .itemSize="${this.itemSize}"
          .template="${(item,index)=>this.template(item,index,index===this.focusedIndex?0:-1)}"
          @keydown="${this.onKeyDown_}"
          @focusin="${this.onFocusIn_}"
          @viewport-filled="${this.onViewportFilled_}">
        </cr-lazy-list>`,this,{host:this});return html`<slot></slot>`}static get properties(){return{chunkSize:{type:Number},scrollOffset:{type:Number},scrollTarget:{type:Object},usingDefaultScrollTarget:{type:Boolean,reflect:true},items:{type:Array},focusedIndex:{type:Number},itemSize:{type:Number},template:{type:Object}}}#chunkSize_accessor_storage=0;get chunkSize(){return this.#chunkSize_accessor_storage}set chunkSize(value){this.#chunkSize_accessor_storage=value}#scrollOffset_accessor_storage=0;get scrollOffset(){return this.#scrollOffset_accessor_storage}set scrollOffset(value){this.#scrollOffset_accessor_storage=value}#scrollTarget_accessor_storage=this;get scrollTarget(){return this.#scrollTarget_accessor_storage}set scrollTarget(value){this.#scrollTarget_accessor_storage=value}#usingDefaultScrollTarget_accessor_storage=true;get usingDefaultScrollTarget(){return this.#usingDefaultScrollTarget_accessor_storage}set usingDefaultScrollTarget(value){this.#usingDefaultScrollTarget_accessor_storage=value}#items_accessor_storage=[];get items(){return this.#items_accessor_storage}set items(value){this.#items_accessor_storage=value}#itemSize_accessor_storage=undefined;get itemSize(){return this.#itemSize_accessor_storage}set itemSize(value){this.#itemSize_accessor_storage=value}#template_accessor_storage=()=>html``;get template(){return this.#template_accessor_storage}set template(value){this.#template_accessor_storage=value}#focusedIndex_accessor_storage=-1;get focusedIndex(){return this.#focusedIndex_accessor_storage}set focusedIndex(value){this.#focusedIndex_accessor_storage=value}restoreFocus_=false;willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("scrollTarget")){this.usingDefaultScrollTarget=this.scrollTarget===this}if(changedProperties.has("items")){if(this.isFocusWithinList_()){this.restoreFocus_=true}if(this.focusedIndex>=this.items.length){this.focusedIndex=this.items.length-1}else if(this.focusedIndex===-1&&this.items.length>0){this.focusedIndex=0}}}isFocusWithinList_(){if(this.focusedIndex===-1){return false}const list=this.querySelector("cr-lazy-list");assert(list);const renderedItems=list.domItems();if(renderedItems.length<=this.focusedIndex){return false}return renderedItems[this.focusedIndex].matches(":focus-within")}fillCurrentViewport(){const list=this.querySelector("cr-lazy-list");assert(list);return list.fillCurrentViewport()}ensureItemRendered(index){const list=this.querySelector("cr-lazy-list");assert(list);return list.ensureItemRendered(index)}onViewportFilled_(){if(!this.restoreFocus_){return}this.restoreFocus_=false;this.fire("restore-list-focus");setTimeout((async()=>{if(this.focusedIndex>=0&&this.focusedIndex<this.items.length){const item=await this.ensureItemRendered(this.focusedIndex);item.focus()}}),0)}onFocusIn_(e){const list=this.querySelector("cr-lazy-list");assert(list);const renderedItems=list.domItems();const focusedIdx=Array.from(renderedItems).findIndex((item=>item===e.target||item.contains(e.target)||item.shadowRoot?.activeElement===e.target));if(focusedIdx!==-1){this.focusedIndex=focusedIdx}}async onKeyDown_(e){if(e.shiftKey||e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}e.stopPropagation();e.preventDefault();const newIndex=e.key==="ArrowUp"?Math.max(0,this.focusedIndex-1):Math.min(this.items.length-1,this.focusedIndex+1);if(newIndex===this.focusedIndex){return}this.focusedIndex=newIndex;await this.updateComplete;const list=this.querySelector("cr-lazy-list");assert(list);const element=await list.ensureItemRendered(this.focusedIndex);element.focus();element.scrollIntoViewIfNeeded()}}customElements.define(CrInfiniteListElement.is,CrInfiniteListElement);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);function focusWithoutInk(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}const toFocusWithNoInk=toFocus;assert(document===toFocusWithNoInk.ownerDocument);const{noink:noink}=toFocusWithNoInk;toFocusWithNoInk.noink=true;toFocusWithNoInk.focus();toFocusWithNoInk.noink=noink}let instance$S=null;function getCss$P(){return instance$S||(instance$S=[...[],css`:host{align-items:center;align-self:stretch;background-color:var(--cr-actionable-row-background-color,transparent);display:flex;margin:0;outline:none}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}`])}let instance$R=null;function getCss$O(){return instance$R||(instance$R=[...[getCss$P()],css`:host([disabled]){opacity:0.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size,20px);--cr-icon-button-size:var(--cr-expand-button-size,36px)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$L(){return html`
<div id="label" aria-hidden="true">
  <slot></slot>
</div>
<cr-icon-button id="icon" aria-labelledby="label" ?disabled="${this.disabled}"
    aria-expanded="${this.getAriaExpanded_()}" tabindex="${this.tabIndex}"
    part="icon" iron-icon="${this.getIcon_()}">
</cr-icon-button>`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrExpandButtonElement extends CrLitElement{static get is(){return"cr-expand-button"}static get styles(){return getCss$O()}render(){return getHtml$L.bind(this)()}static get properties(){return{expanded:{type:Boolean,notify:true},disabled:{type:Boolean,reflect:true},ariaLabel:{type:String},tabIndex:{type:Number},expandIcon:{type:String},collapseIcon:{type:String},expandTitle:{type:String},collapseTitle:{type:String}}}#expanded_accessor_storage=false;get expanded(){return this.#expanded_accessor_storage}set expanded(value){this.#expanded_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#ariaLabel_accessor_storage="";get ariaLabel(){return this.#ariaLabel_accessor_storage}set ariaLabel(value){this.#ariaLabel_accessor_storage=value}#expandIcon_accessor_storage="cr:keyboard-arrow-down";get expandIcon(){return this.#expandIcon_accessor_storage}set expandIcon(value){this.#expandIcon_accessor_storage=value}#collapseIcon_accessor_storage="cr:keyboard-arrow-up";get collapseIcon(){return this.#collapseIcon_accessor_storage}set collapseIcon(value){this.#collapseIcon_accessor_storage=value}#expandTitle_accessor_storage;get expandTitle(){return this.#expandTitle_accessor_storage}set expandTitle(value){this.#expandTitle_accessor_storage=value}#collapseTitle_accessor_storage;get collapseTitle(){return this.#collapseTitle_accessor_storage}set collapseTitle(value){this.#collapseTitle_accessor_storage=value}#tabIndex_accessor_storage=0;get tabIndex(){return this.#tabIndex_accessor_storage}set tabIndex(value){this.#tabIndex_accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("expanded")||changedProperties.has("collapseTitle")||changedProperties.has("expandTitle")){this.title=(this.expanded?this.collapseTitle:this.expandTitle)||""}}firstUpdated(){this.addEventListener("click",this.toggleExpand_)}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("ariaLabel")){this.onAriaLabelChange_()}}focus(){this.$.icon.focus()}getIcon_(){return this.expanded?this.collapseIcon:this.expandIcon}getAriaExpanded_(){return this.expanded?"true":"false"}onAriaLabelChange_(){if(this.ariaLabel){this.$.icon.removeAttribute("aria-labelledby");this.$.icon.setAttribute("aria-label",this.ariaLabel)}else{this.$.icon.removeAttribute("aria-label");this.$.icon.setAttribute("aria-labelledby","label")}}toggleExpand_(event){event.stopPropagation();event.preventDefault();this.scrollIntoViewIfNeeded();this.expanded=!this.expanded;focusWithoutInk(this.$.icon)}}customElements.define(CrExpandButtonElement.is,CrExpandButtonElement);const sheet=new CSSStyleSheet;sheet.replaceSync(`html{--error-color:var(--google-red-700);--warning-color:rgb(242,153,0);--warning-text-color:#B16300;--extensions-card-height:160px;--separator-gap:9px;--sidebar-width:256px;--cr-toolbar-field-width:680px;--paper-grey-300:#e0e0e0;--panel-icon-color:var(--google-grey-700)}@media (prefers-color-scheme:dark){html{--panel-icon-color:var(--google-grey-500);--error-color:var(--google-red-300);--warning-color:var(--google-yellow-300)}}`);document.adoptedStyleSheets=[...document.adoptedStyleSheets,sheet];let instance$Q=null;function getCss$N(){return instance$Q||(instance$Q=[...[getCss$11()],css`a[href]{color:var(--cr-link-color)}.activity-message{color:var(--md-loading-message-color);font-size:123%;font-weight:500;margin-top:80px;text-align:center}.activity-subpage-header{display:flex;justify-content:flex-end;padding:12px 12px}.activity-table-headings{align-items:center;display:flex;flex-direction:row;font-weight:500;margin-inline-end:auto;min-height:calc(var(--cr-section-min-height) - var(--separator-gap));padding:0 var(--cr-section-padding)}.clear-activities-button{margin:0 8px}.matching-restricted-sites-warning{align-items:flex-start;display:flex;flex-direction:row}.matching-restricted-sites-warning cr-icon{fill:var(--warning-color);margin-inline-end:8px;min-height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.page-container{height:100%}.page-content{background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);box-sizing:border-box;margin:auto;min-height:100%;padding-bottom:64px;width:var(--cr-toolbar-field-width)}.page-header{align-items:center;display:flex;height:40px;margin-bottom:12px;padding:8px 12px 0}.link-icon-button{align-items:center;display:flex;justify-content:center}.separator{border-inline-start:var(--cr-separator-line);flex-shrink:0;height:calc(var(--cr-section-min-height) - var(--separator-gap));margin-inline-end:var(--cr-section-padding);margin-inline-start:0}.site-favicon{background-size:100% 100%;height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.panel-title{font-size:15px;font-weight:400;margin:0 0 16px 5px}.panel-background{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:0 var(--cr-section-padding);container-type:inline-size}.panel-header{align-items:center;display:flex;padding:var(--cr-section-padding) 0}.panel-header-text{padding-inline-start:20px}.panel-header-text h3{margin:0;font-weight:400}.panel-header-icon{align-items:center;fill:var(--panel-icon-color)}.panel-extensions{border-top:var(--cr-separator-line);padding:calc(var(--cr-section-padding) - 6px) 0}.panel-extension-row{border-top:none}.panel-extension-info{padding-inline-start:18px;margin-inline:8px;max-width:100%;overflow:hidden;text-overflow:ellipsis}.panel-extension-icon{height:var(--cr-icon-size);width:var(--cr-icon-size)}@container (max-width:450px){.panel-header-icon{display:none}.panel-header-text{padding-inline-start:0}}`])}let instance$P=null;function getCss$M(){return instance$P||(instance$P=[...[getCss$12(),getCss$N()],css`:host{border-top:var(--cr-separator-line);display:block;padding:8px var(--cr-section-padding)}cr-expand-button{--cr-expand-button-disabled-display:none;height:calc(var(--cr-section-min-height) - var(--separator-gap))}cr-expand-button[disabled]{opacity:1}#activity-call-and-time{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-time-width)}#activity-type{min-width:var(--activity-type-width)}#activity-name{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-time{min-width:var(--activity-time-width);text-align:end}#expanded-data{display:flex;flex-direction:column;margin-inline-start:16px;max-width:var(--activity-log-call-and-time-width)}#page-url-link{margin-bottom:10px;margin-inline-end:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}#args-list,#web-request-section{display:flex;flex-direction:column;margin-bottom:10px}.expanded-data-heading{font-weight:500}.list-item{display:flex;margin-top:10px}.index{min-width:3em}.arg,#web-request-details{overflow:hidden;overflow-wrap:break-word}#web-request-details{margin-top:10px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$K(){return html`<!--_html_template_start_-->
<cr-expand-button ?expanded="${this.expanded_}"
    ?disabled="${!this.isExpandable_}" @click="${this.onExpandClick_}">
  <div id="activity-call-and-time">
    <span id="activity-type">${this.data.activityType}</span>
    <span id="activity-name" title="${this.data.name}">${this.data.name}</span>
    <span id="activity-time">${this.getFormattedTime_()}</span>
  </div>
</cr-expand-button>
<div id="expanded-data" ?hidden="${!this.expanded_}">
  <a id="page-url-link" href="${this.data.pageUrl}" target="_blank"
      ?hidden="${!this.hasPageUrl_()}" title="${this.data.pageUrl}">
    ${this.data.pageUrl}
  </a>
  <div id="args-list" ?hidden="${!this.hasArgs_()}">
    <span class="expanded-data-heading">
      $i18n{activityArgumentsHeading}
    </span>
    ${this.argsList_.map((item=>html`
      <div class="list-item">
        <span class="index">${item.index}</span>
        <span class="arg">${item.arg}</span>
      </div>
    `))}
  </div>
  <div id="web-request-section" ?hidden="${!this.hasWebRequestInfo_()}">
    <span class="expanded-data-heading">$i18n{webRequestInfoHeading}</span>
    <span id="web-request-details">${this.data.webRequestInfo}</span>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ARG_URL_PLACEHOLDER="<arg_url>";const ARG_URL_PLACEHOLDER_REGEX=/"<arg_url>"/g;class ActivityLogStreamItemElement extends CrLitElement{static get is(){return"activity-log-stream-item"}static get styles(){return getCss$M()}render(){return getHtml$K.bind(this)()}static get properties(){return{data:{type:Object},expanded_:{type:Boolean},argsList_:{type:Array},isExpandable_:{type:Boolean}}}#data_accessor_storage={timestamp:0,activityType:chrome.activityLogPrivate.ExtensionActivityType.API_CALL,argUrl:"",args:"{}",expanded:false};get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#expanded__accessor_storage=false;get expanded_(){return this.#expanded__accessor_storage}set expanded_(value){this.#expanded__accessor_storage=value}#argsList__accessor_storage=[];get argsList_(){return this.#argsList__accessor_storage}set argsList_(value){this.#argsList__accessor_storage=value}#isExpandable__accessor_storage=false;get isExpandable_(){return this.#isExpandable__accessor_storage}set isExpandable_(value){this.#isExpandable__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("data")){this.argsList_=this.computeArgsList_();this.isExpandable_=this.hasPageUrl_()||this.hasArgs_()||this.hasWebRequestInfo_();this.expanded_=this.data.expanded}}getFormattedTime_(){if(!this.data){return""}const activityDate=new Date(this.data.timestamp);const timeString=activityDate.toLocaleTimeString(undefined,{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"});const ms=activityDate.getMilliseconds().toString().padStart(3,"0");return`${timeString}.${ms}`}hasPageUrl_(){return!!this.data.pageUrl}hasArgs_(){return this.argsList_.length>0}hasWebRequestInfo_(){return!!this.data.webRequestInfo&&this.data.webRequestInfo!=="{}"}computeArgsList_(){const parsedArgs=JSON.parse(this.data.args);if(!Array.isArray(parsedArgs)){return[]}return parsedArgs.map(((arg,i)=>({arg:JSON.stringify(arg).replace(ARG_URL_PLACEHOLDER_REGEX,`"${this.data.argUrl}"`),index:i+1})))}onExpandClick_(){if(this.isExpandable_){this.expanded_=!this.expanded_;this.fire("resize-stream")}}}customElements.define(ActivityLogStreamItemElement.is,ActivityLogStreamItemElement);
// Copyright (c) 2024 The Brave Authors. All rights reserved.
function getHtml$J(){return html`
<leo-toggle id="toggle" size="small" ?checked="${this.checked}" ?disabled="${this.disabled}" @change="${this.onChange_}">
  <slot></slot>
</leo-toggle>
`}
// Copyright (c) 2024 The Brave Authors. All rights reserved.
class CrToggleElement extends CrLitElement{static get is(){return"cr-toggle"}static get styles(){return css``}render(){return getHtml$J.bind(this)()}static get properties(){return{checked:{type:Boolean,reflect:true,notify:true},disabled:{type:Boolean,reflect:true}}}#checked_accessor_storage=false;get checked(){return this.#checked_accessor_storage}set checked(value){this.#checked_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}firstUpdated(){this.addEventListener("click",(e=>{e.stopPropagation();e.preventDefault()}))}async onChange_(e){this.checked=e.checked;await this.updateComplete;this.fire("change",this.checked)}}customElements.define(CrToggleElement.is,CrToggleElement);let instance$O=null;function getCss$L(){return instance$O||(instance$O=[...[getCss$19()],css`:host{display:block;position:absolute;outline:none;z-index:1002;user-select:none;cursor:default}#tooltip{display:block;outline:none;font-size:10px;line-height:1;background-color:var(--paper-tooltip-background,#616161);color:var(--paper-tooltip-text-color,white);padding:8px;border-radius:2px}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--paper-tooltip-opacity,0.9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--paper-tooltip-opacity,0.9)}100%{opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--paper-tooltip-delay-in,500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-in,500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--paper-tooltip-opacity,0.9);animation-delay:var(--paper-tooltip-delay-out,0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--paper-tooltip-duration-out,500ms);animation-fill-mode:forwards}#tooltipOffsetFiller{position:absolute;:host([position='top']) &{top:100%}:host([position='bottom']) &{bottom:100%}:host([position='left']) &{left:100%}:host([position='right']) &{right:100%}:host(:is([position='top'],[position='bottom'])) &{left:0;height:var(--cr-tooltip-offset);width:100%}:host(:is([position='left'],[position='right'])) &{top:0;height:100%;width:var(--cr-tooltip-offset)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$I(){return html`
<div id="tooltip" hidden part="tooltip">
  <slot></slot>
</div>
<div id="tooltipOffsetFiller"></div>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TooltipPosition;(function(TooltipPosition){TooltipPosition["TOP"]="top";TooltipPosition["BOTTOM"]="bottom";TooltipPosition["LEFT"]="left";TooltipPosition["RIGHT"]="right"})(TooltipPosition||(TooltipPosition={}));class CrTooltipElement extends CrLitElement{static get is(){return"cr-tooltip"}static get styles(){return getCss$L()}render(){return getHtml$I.bind(this)()}static get properties(){return{for:{type:String},manualMode:{type:Boolean},position:{type:String,reflect:true},fitToVisibleBounds:{type:Boolean},offset:{type:Number},animationDelay:{type:Number},hideDelay:{type:Number}}}#animationDelay_accessor_storage=500;get animationDelay(){return this.#animationDelay_accessor_storage}set animationDelay(value){this.#animationDelay_accessor_storage=value}#fitToVisibleBounds_accessor_storage=false;get fitToVisibleBounds(){return this.#fitToVisibleBounds_accessor_storage}set fitToVisibleBounds(value){this.#fitToVisibleBounds_accessor_storage=value}#hideDelay_accessor_storage=600;get hideDelay(){return this.#hideDelay_accessor_storage}set hideDelay(value){this.#hideDelay_accessor_storage=value}#for_accessor_storage="";get for(){return this.#for_accessor_storage}set for(value){this.#for_accessor_storage=value}#manualMode_accessor_storage=false;get manualMode(){return this.#manualMode_accessor_storage}set manualMode(value){this.#manualMode_accessor_storage=value}#offset_accessor_storage=14;get offset(){return this.#offset_accessor_storage}set offset(value){this.#offset_accessor_storage=value}#position_accessor_storage=TooltipPosition.BOTTOM;get position(){return this.#position_accessor_storage}set position(value){this.#position_accessor_storage=value}animationPlaying_=false;showing_=false;manualTarget_;target_=null;tracker_=new EventTracker;hideTimeout_=null;connectedCallback(){super.connectedCallback();this.findTarget_()}disconnectedCallback(){super.disconnectedCallback();if(!this.manualMode){this.removeListeners_()}this.resetHideTimeout_()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("animationDelay")){this.style.setProperty("--paper-tooltip-delay-in",`${this.animationDelay}ms`)}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.addEventListener("animationend",(()=>this.onAnimationEnd_()))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("for")){this.findTarget_()}if(changedProperties.has("manualMode")){if(this.manualMode){this.removeListeners_()}else{this.addListeners_()}}if(changedProperties.has("offset")){this.style.setProperty("--cr-tooltip-offset",`${this.offset}px`)}}get target(){if(this.manualTarget_){return this.manualTarget_}const ownerRoot=this.getRootNode();if(this.for){return ownerRoot.querySelector(`#${this.for}`)}const parentNode=this.parentNode;return!!parentNode&&parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}set target(target){this.manualTarget_=target;this.findTarget_()}show(){this.resetHideTimeout_();if(this.showing_){return}if(!!this.textContent&&this.textContent.trim()===""){const children=this.shadowRoot.querySelector("slot").assignedElements();const hasNonEmptyChild=Array.from(children).some((el=>!!el.textContent&&el.textContent.trim()!==""));if(!hasNonEmptyChild){return}}this.showing_=true;this.$.tooltip.hidden=false;this.$.tooltip.classList.remove("fade-out-animation");this.updatePosition();this.animationPlaying_=true;this.$.tooltip.classList.add("fade-in-animation")}hide(){if(!this.showing_){return}if(this.animationPlaying_){this.showing_=false;this.$.tooltip.classList.remove("fade-in-animation","fade-out-animation");this.$.tooltip.hidden=true;return}this.$.tooltip.classList.remove("fade-in-animation");this.$.tooltip.classList.add("fade-out-animation");this.showing_=false;this.animationPlaying_=true}queueHide_(){this.resetHideTimeout_();this.hideTimeout_=setTimeout((()=>{this.hide();this.hideTimeout_=null}),this.hideDelay)}resetHideTimeout_(){if(this.hideTimeout_!==null){clearTimeout(this.hideTimeout_);this.hideTimeout_=null}}updatePosition(){if(!this.target_){return}const offsetParent=this.offsetParent||this.composedOffsetParent_();if(!offsetParent){return}const offset=this.offset;const parentRect=offsetParent.getBoundingClientRect();const targetRect=this.target_.getBoundingClientRect();const tooltipRect=this.$.tooltip.getBoundingClientRect();const horizontalCenterOffset=(targetRect.width-tooltipRect.width)/2;const verticalCenterOffset=(targetRect.height-tooltipRect.height)/2;const targetLeft=targetRect.left-parentRect.left;const targetTop=targetRect.top-parentRect.top;let tooltipLeft;let tooltipTop;switch(this.position){case TooltipPosition.TOP:tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-tooltipRect.height-offset;break;case TooltipPosition.BOTTOM:tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case TooltipPosition.LEFT:tooltipLeft=targetLeft-tooltipRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case TooltipPosition.RIGHT:tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break;default:assertNotReachedCase(this.position)}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+tooltipRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+tooltipRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}}findTarget_(){if(!this.manualMode){this.removeListeners_()}this.target_=this.target;if(!this.manualMode){this.addListeners_()}}onAnimationEnd_(){this.animationPlaying_=false;if(!this.showing_){this.$.tooltip.classList.remove("fade-out-animation");this.$.tooltip.hidden=true}}addListeners_(){if(this.target_){this.tracker_.add(this.target_,"pointerenter",(()=>this.show()));this.tracker_.add(this.target_,"focus",(()=>this.show()));this.tracker_.add(this.target_,"pointerleave",(()=>this.queueHide_()));this.tracker_.add(this.target_,"blur",(()=>this.hide()));this.tracker_.add(this.target_,"click",(()=>this.hide()))}this.tracker_.add(this.$.tooltip,"animationend",(()=>this.onAnimationEnd_()));this.tracker_.add(this,"pointerenter",(()=>this.show()));this.tracker_.add(this,"pointerleave",(()=>this.queueHide_()))}removeListeners_(){this.tracker_.removeAll()}composedOffsetParent_(){if(this.computedStyleMap().get("display").value==="none"){return null}for(let ancestor=flatTreeParent(this);ancestor!==null;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element)){continue}const style=ancestor.computedStyleMap();if(style.get("display").value==="none"){return null}if(style.get("display").value==="contents"){continue}if(style.get("position").value!=="static"){return ancestor}if(ancestor.tagName==="BODY"){return ancestor}}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentElement}}}customElements.define(CrTooltipElement.is,CrTooltipElement);let instance$N=null;function getCss$K(){return instance$N||(instance$N=[...[getCss$11()],css`:host{display:flex}cr-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color,var(--google-grey-700))}@media (prefers-color-scheme:dark){cr-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color,var(--google-grey-500))}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$H(){return html`
<cr-icon id="indicator" tabindex="0" aria-label="${this.iconAriaLabel}"
    aria-describedby="tooltip" icon="${this.iconClass}" role="img">
</cr-icon>
<cr-tooltip id="tooltip" for="indicator" position="${this.tooltipPosition}"
    fit-to-visible-bounds part="tooltip">
  <slot name="tooltip-text">${this.tooltipText}</slot>
</cr-tooltip>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends CrLitElement{static get is(){return"cr-tooltip-icon"}static get styles(){return getCss$K()}render(){return getHtml$H.bind(this)()}static get properties(){return{iconAriaLabel:{type:String},iconClass:{type:String},tooltipText:{type:String},tooltipPosition:{type:String}}}#iconAriaLabel_accessor_storage="";get iconAriaLabel(){return this.#iconAriaLabel_accessor_storage}set iconAriaLabel(value){this.#iconAriaLabel_accessor_storage=value}#iconClass_accessor_storage="";get iconClass(){return this.#iconClass_accessor_storage}set iconClass(value){this.#iconClass_accessor_storage=value}#tooltipText_accessor_storage="";get tooltipText(){return this.#tooltipText_accessor_storage}set tooltipText(value){this.#tooltipText_accessor_storage=value}#tooltipPosition_accessor_storage="top";get tooltipPosition(){return this.#tooltipPosition_accessor_storage}set tooltipPosition(value){this.#tooltipPosition_accessor_storage=value}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActionLink extends HTMLAnchorElement{boundOnKeyDown_=null;boundOnMouseDown_=null;boundOnBlur_=null;connectedCallback(){this.tabIndex=this.disabled?-1:0;if(!this.hasAttribute("role")){this.setAttribute("role","link")}this.boundOnKeyDown_=e=>{if(!this.disabled&&e.key==="Enter"&&!this.href){window.setTimeout((()=>this.click()),0)}};this.addEventListener("keydown",this.boundOnKeyDown_);function preventDefault(e){e.preventDefault()}function removePreventDefault(){document.removeEventListener("selectstart",preventDefault);document.removeEventListener("mouseup",removePreventDefault)}this.boundOnMouseDown_=()=>{document.addEventListener("selectstart",preventDefault);document.addEventListener("mouseup",removePreventDefault);if(document.activeElement!==this){this.classList.add("no-outline")}};this.addEventListener("mousedown",this.boundOnMouseDown_);this.boundOnBlur_=()=>this.classList.remove("no-outline");this.addEventListener("blur",this.boundOnBlur_)}disconnectedCallback(){this.removeEventListener("keydown",this.boundOnKeyDown_);this.boundOnKeyDown_=null;this.removeEventListener("mousedown",this.boundOnMouseDown_);this.boundOnMouseDown_=null;this.removeEventListener("blur",this.boundOnBlur_);this.boundOnBlur_=null}set disabled(disabled){if(disabled){HTMLAnchorElement.prototype.setAttribute.call(this,"disabled","")}else{HTMLAnchorElement.prototype.removeAttribute.call(this,"disabled")}this.tabIndex=disabled?-1:0}get disabled(){return this.hasAttribute("disabled")}setAttribute(attr,val){if(attr.toLowerCase()==="disabled"){this.disabled=true}else{super.setAttribute(attr,val)}}removeAttribute(attr){if(attr.toLowerCase()==="disabled"){this.disabled=false}else{super.removeAttribute(attr)}}}customElements.define("action-link",ActionLink,{extends:"a"});const div=document.createElement("div");div.innerHTML=getTrustedHTML`<cr-iconset name="extensions-icons" size="24">
<svg>
<defs>
  <!-- Custom SVG (bettes). -->
  <g id="unpacked-custom">
    <path class="cls-1" fill="none" d="M0,0H24V24H0V0Z"></path>
    <circle cx="9" cy="12" r="1"></circle>
    <path d="M20,5H4A2,2,0,0,0,2,7V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5ZM9,17a5,5,0,1,1,5-5A5,5,0,0,1,9,17Zm11,1a1,1,0,1,1,1-1A1,1,0,0,1,20,18ZM20,8a1,1,0,1,1,1-1A1,1,0,0,1,20,8Z"></path>
  </g>

  <!-- Material Design icons. -->
  <!-- Material icon name: 'gpp_maybe' -->
  <g id="android-security-privacy-alert">
    <path d="M12.863 11.863c.242-.242.364-.531.364-.863V7.797c0-.332-.122-.617-.364-.86a1.184 1.184 0 0 0-.867-.363c-.336 0-.617.121-.848.364a1.188 1.188 0 0 0-.347.859V11c0 .332.113.621.347.863.23.242.512.364.848.364.336 0 .625-.122.867-.364Zm-1.168 9.7a1.456 1.456 0 0 1-.289-.11C9.051 20.25 7.262 18.75 6.04 16.945c-1.226-1.8-1.84-3.992-1.84-6.57V6.352c0-.383.11-.73.324-1.04.22-.308.512-.527.875-.664l6-2.125c.106-.027.207-.054.301-.082.098-.027.196-.043.301-.043.082 0 .285.043.602.125l6 2.125c.363.137.656.356.875.66.214.305.324.653.324 1.044v4.023c0 2.582-.613 4.773-1.84 6.574-1.223 1.801-3.012 3.301-5.367 4.504a1.357 1.357 0 0 1-.598.148c-.105 0-.207-.015-.3-.038ZM12 19.602c1.965-1.036 3.434-2.293 4.398-3.778.97-1.484 1.454-3.3 1.454-5.449v-3.96L12 4.351 6.148 6.414v3.961c0 2.168.48 3.984 1.438 5.45.96 1.468 2.43 2.726 4.414 3.777Zm0-7.625Zm.863 4.351c.242-.23.364-.515.364-.851 0-.332-.122-.622-.364-.864a1.184 1.184 0 0 0-.867-.363c-.336 0-.617.121-.848.363a1.197 1.197 0 0 0-.347.864c0 .335.113.62.347.851.23.23.512.348.848.348.336 0 .625-.117.867-.348Zm0 0"></path>
  </g>
  <g id="safebrowsing_warning-old">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 4.24l6 3v4.1c0 3.9-2.55 7.5-6 8.59-3.45-1.09-6-4.7-6-8.59v-4.1l6-3M12 2L4 6v5.33c0 4.93 3.41 9.55 8 10.67 4.59-1.12 8-5.73 8-10.67V6l-8-4zm-1 13h2v2h-2v-2zm2-7h-2v5h2V8z"></path>
  </g>

  <!-- Copied from iron-icons. -->
  <g id="input-old"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
  <g id="input"><path d="M4.2 19.2c-.497 0-.919-.177-1.27-.528a1.74 1.74 0 0 1-.532-1.274v-2.097c0-.254.086-.469.258-.64a.858.858 0 0 1 .637-.263c.254 0 .469.086.644.262a.86.86 0 0 1 .262.64v2.098h15.602V6.602H4.199v2.097a.872.872 0 0 1-.258.64.852.852 0 0 1-.636.263.86.86 0 0 1-.64-.262.864.864 0 0 1-.267-.64V6.601c0-.497.18-.922.532-1.274a1.729 1.729 0 0 1 1.27-.527h15.6c.497 0 .919.176 1.27.527.352.356.532.777.532 1.274v10.804c0 .496-.18.918-.532 1.27a1.74 1.74 0 0 1-1.27.523Zm6.75-6.302H3.3a.884.884 0 0 1-.902-.894c0-.254.086-.465.262-.64a.86.86 0 0 1 .64-.262h7.65l-1.4-1.403a.874.874 0 0 1-.277-.636c0-.243.09-.454.266-.637a.913.913 0 0 1 .649-.278c.242 0 .453.094.636.278l2.95 2.949a.835.835 0 0 1 .277.621.87.87 0 0 1-.278.629l-2.949 2.95c-.183.183-.39.273-.625.26a.944.944 0 0 1-.636-.284.896.896 0 0 1 .011-1.278Zm0 0"></path></g>
  <g id="business-old"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
  <g id="domain"><path d="M2.398 18.602V5.398c0-.492.18-.918.532-1.27a1.729 1.729 0 0 1 1.27-.526h6c.495 0 .917.175 1.273.527.351.351.527.777.527 1.27v1.8h7.8c.497 0 .919.176 1.27.531.352.352.532.774.532 1.27v9.602c0 .492-.18.918-.532 1.27a1.729 1.729 0 0 1-1.27.526H4.2c-.497 0-.919-.175-1.27-.527a1.738 1.738 0 0 1-.532-1.27Zm1.801 0H6V16.8H4.2Zm0-3.801H6V13H4.2ZM4.2 11H6V9.2H4.2Zm0-3.8H6V5.397H4.2Zm4.2 11.402h1.8V16.8H8.4Zm0-3.801h1.8V13H8.4Zm0-3.801h1.8V9.2H8.4Zm0-3.8h1.8V5.397H8.4ZM12 18.601h7.8V9H12v2h1.8v1.8H12v2h1.8v1.802H12Zm4.2-5.801V11H18v1.8Zm0 3.8v-1.8H18v1.8Zm0 0"></path></g>

  <!-- Icons for the extensions page sidebar. -->
  <g id="my_extensions-old" viewBox="0 -960 960 960"><path d="M216-135.869q-33.287 0-56.709-23.422-23.422-23.422-23.422-56.709v-172.304q37.609-2 63.218-28.424 25.608-26.424 25.608-63.272t-25.608-63.272q-25.609-26.424-63.218-28.424V-744q0-33.287 23.422-56.709 23.422-23.422 56.709-23.422h161.065q2.631-40.956 31.96-69.315 29.329-28.359 70.75-28.359t70.975 28.199q29.554 28.199 32.185 69.475H744q33.287 0 56.709 23.422 23.422 23.422 23.422 56.709v161.065q40.956 2.631 69.315 31.96 28.359 29.329 28.359 70.75t-28.199 70.975q-28.199 29.554-69.475 32.185V-216q0 33.287-23.422 56.709-23.422 23.422-56.709 23.422H216Zm2.87-83.001h522.26v-522.26H218.87v108.652q42.13 22.63 65.597 63.772 23.468 41.141 23.468 88.706 0 49.01-23.468 90.168Q261-348.674 218.87-327.283v108.413ZM480-480Z"></path></g>
  <g id="chrome-extension"><path d="M5.398 20.398c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27v-3.476c0-.219.066-.41.199-.578a.79.79 0 0 1 .523-.297 2.746 2.746 0 0 0 1.2-.875C5.84 12.977 6 12.515 6 12c0-.516-.16-.977-.477-1.375a2.746 2.746 0 0 0-1.199-.875.8.8 0 0 1-.523-.305.947.947 0 0 1-.2-.593V5.398c0-.492.176-.918.528-1.27a1.735 1.735 0 0 1 1.27-.526h4.203c0-.668.23-1.235.691-1.704a2.317 2.317 0 0 1 1.703-.699c.668 0 1.238.235 1.703.696.469.464.7 1.035.7 1.707h4.203c.492 0 .918.175 1.27.527.35.351.526.777.526 1.27v4.203c.668 0 1.235.23 1.704.691.464.465.699 1.031.699 1.703 0 .668-.235 1.238-.696 1.703-.464.469-1.035.7-1.707.7v4.203c0 .492-.175.918-.527 1.27a1.735 1.735 0 0 1-1.27.526Zm0-1.796h13.204V5.398H5.398V8.2c.75.336 1.34.848 1.766 1.54.422.69.637 1.445.637 2.261a4.3 4.3 0 0 1-.637 2.29 3.726 3.726 0 0 1-1.766 1.51ZM12 12Zm0 0"></path></g>
  <g id="site_permissions-old" viewBox="0 -960 960 960"><path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z"></path></g>
  <g id="tune"><path d="M11.664 20.14a.864.864 0 0 1-.266-.64v-4.2c0-.253.086-.468.258-.64a.858.858 0 0 1 .637-.262c.254 0 .469.086.645.262a.86.86 0 0 1 .261.64v1.2h6.293c.254 0 .469.086.645.258a.852.852 0 0 1 .261.637.887.887 0 0 1-.898.906h-6.3V19.5a.872.872 0 0 1-.259.64.863.863 0 0 1-.636.258.872.872 0 0 1-.64-.257ZM4.5 18.3a.872.872 0 0 1-.64-.257.863.863 0 0 1-.258-.637c0-.254.086-.468.257-.644A.86.86 0 0 1 4.5 16.5h4.2c.253 0 .468.086.64.258a.852.852 0 0 1 .262.637.875.875 0 0 1-.262.644.875.875 0 0 1-.64.262Zm2.96-3.558a.875.875 0 0 1-.26-.64v-1.204H4.507a.9.9 0 0 1-.645-.253.86.86 0 0 1-.261-.641c0-.254.086-.465.257-.64a.86.86 0 0 1 .641-.262h2.7V9.898c0-.253.085-.468.257-.64A.863.863 0 0 1 8.094 9c.254 0 .469.086.644.258a.86.86 0 0 1 .262.64v4.204a.872.872 0 0 1-.258.64.863.863 0 0 1-.637.258.887.887 0 0 1-.644-.258Zm4.24-1.844a.872.872 0 0 1-.898-.895c-.001-.253.085-.464.257-.64a.86.86 0 0 1 .64-.261H19.5a.872.872 0 0 1 .898.895.878.878 0 0 1-.257.64.86.86 0 0 1-.641.261Zm2.964-3.558a.864.864 0 0 1-.266-.64V4.5c0-.254.086-.469.258-.64a.87.87 0 0 1 .637-.258c.254 0 .469.086.645.257a.86.86 0 0 1 .261.641v1.2H19.5c.254 0 .469.085.64.257a.863.863 0 0 1 .258.637.887.887 0 0 1-.257.644.86.86 0 0 1-.641.262h-3.3v1.2a.872.872 0 0 1-.259.64.852.852 0 0 1-.636.262.86.86 0 0 1-.64-.262ZM4.5 7.5a.872.872 0 0 1-.64-.258.863.863 0 0 1-.258-.637A.887.887 0 0 1 4.5 5.7h7.8c.255 0 .47.086.641.258a.863.863 0 0 1 .258.637.887.887 0 0 1-.258.644.86.86 0 0 1-.64.262Zm0 0"></path></g>
  <g id="keyboard_shortcuts-old" viewBox="0 -960 960 960"><path d="M168-229q-34.483 0-58.741-24.259-24.26-24.258-24.26-58.741v-336q0-34.483 24.26-58.741Q133.517-731 168-731h624q34.483 0 58.741 24.259Q875-682.483 875-648v336q0 34.483-24.259 58.741Q826.483-229 792-229H168Zm0-83h624v-336H168v336Zm168-24h288v-72H336v72Zm-96-120h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm-408-96h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72ZM168-312v-336 336Z"></path></g>
  <g id="keyboard"><path d="M4.2 18c-.497 0-.919-.176-1.27-.527a1.747 1.747 0 0 1-.532-1.274V7.801c0-.496.18-.918.532-1.274A1.729 1.729 0 0 1 4.2 6h15.6c.497 0 .919.176 1.27.527.352.356.532.778.532 1.274v8.398c0 .496-.18.918-.532 1.274A1.729 1.729 0 0 1 19.8 18Zm0-1.8h15.6V7.8H4.2Zm5.1-.598h5.391a.874.874 0 0 0 .645-.258.861.861 0 0 0 .266-.637.875.875 0 0 0-.262-.645.854.854 0 0 0-.64-.261H9.308a.874.874 0 0 0-.645.258.855.855 0 0 0-.266.636.86.86 0 0 0 .262.64.857.857 0 0 0 .64.267Zm-5.1.597V7.801Zm3.34-6.258a.866.866 0 0 0 .26-.636.872.872 0 0 0-.257-.64.855.855 0 0 0-.637-.267.887.887 0 0 0-.644.258.858.858 0 0 0-.262.637c0 .254.086.469.258.645a.852.852 0 0 0 .637.261.887.887 0 0 0 .644-.258Zm2.546 0a.855.855 0 0 0 .266-.636.872.872 0 0 0-.258-.64.861.861 0 0 0-.637-.267.887.887 0 0 0-.645.258.858.858 0 0 0-.261.637c0 .254.086.469.258.645a.852.852 0 0 0 .636.261.872.872 0 0 0 .64-.258Zm2.55 0a.852.852 0 0 0 .262-.636.884.884 0 0 0-.253-.64.864.864 0 0 0-.641-.267.878.878 0 0 0-.64.258.858.858 0 0 0-.262.637.9.9 0 0 0 .253.645.86.86 0 0 0 .641.261.878.878 0 0 0 .64-.258Zm2.552 0a.852.852 0 0 0 .261-.636.872.872 0 0 0-.258-.64.855.855 0 0 0-.636-.267.872.872 0 0 0-.64.258.861.861 0 0 0-.267.637c0 .254.086.469.258.645a.858.858 0 0 0 .637.261.887.887 0 0 0 .645-.258Zm2.55 0A.852.852 0 0 0 18 9.305a.872.872 0 0 0-.258-.64.855.855 0 0 0-.637-.267.887.887 0 0 0-.906.895c0 .254.086.469.258.645a.852.852 0 0 0 .637.261.887.887 0 0 0 .644-.258ZM7.54 12.344a.873.873 0 0 0 .262-.637.887.887 0 0 0-.258-.645.852.852 0 0 0-.637-.261.887.887 0 0 0-.644.258.852.852 0 0 0-.262.636c0 .254.086.47.258.64a.855.855 0 0 0 .637.267.887.887 0 0 0 .644-.258Zm2.547 0a.861.861 0 0 0 .266-.637.887.887 0 0 0-.258-.645.858.858 0 0 0-.637-.261.887.887 0 0 0-.645.258.852.852 0 0 0-.261.636c0 .254.086.47.258.64a.855.855 0 0 0 .636.267.872.872 0 0 0 .64-.258Zm2.55 0a.858.858 0 0 0 .262-.637.9.9 0 0 0-.253-.645.86.86 0 0 0-.641-.261.878.878 0 0 0-.64.258.852.852 0 0 0-.262.636c0 .254.085.47.253.64a.864.864 0 0 0 .641.267.878.878 0 0 0 .64-.258Zm2.552 0a.858.858 0 0 0 .261-.637.887.887 0 0 0-.258-.645.852.852 0 0 0-.636-.261.872.872 0 0 0-.64.258.855.855 0 0 0-.267.636c0 .254.086.47.258.64a.861.861 0 0 0 .637.267.887.887 0 0 0 .645-.258Zm2.55 0a.858.858 0 0 0 .262-.637.887.887 0 0 0-.258-.645.852.852 0 0 0-.637-.261.887.887 0 0 0-.906.894c0 .254.086.47.258.64a.855.855 0 0 0 .637.267.887.887 0 0 0 .644-.258Zm0 0"></path></g>
  <g id="web_store-custom" enable-background="new 0 0 192 192" height="24px" viewBox="0 0 192 192" width="24px"><path fill="none" d="M0 0h192v192H0z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#E8EAED" d="M20 28h152v66.35H20z"></path><path fill="#FFF" d="M113.27 56.34H78.73c-3.82 0-6.91-3.09-6.91-6.91 0-3.82 3.09-6.91 6.91-6.91h34.54c3.82 0 6.91 3.09 6.91 6.91 0 3.81-3.09 6.91-6.91 6.91z"></path><defs><path id="a" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><g clip-path="url(#b)"><linearGradient id="c" x1="39.161" x2="152.841" y1="125.013" y2="125.013" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#d93025"></stop><stop offset="1" style="stop-color:#ea4335"></stop></linearGradient><path fill="url(#c)" d="m39.16 116.8 9.05 27.61 19.38 21.63L96 116.81l56.84-.01C141.49 97.18 120.29 83.99 96 83.99c-24.29 0-45.49 13.19-56.84 32.81z"></path><linearGradient id="d" x1="-3.897" x2="109.806" y1="36.608" y2="36.608" gradientTransform="rotate(-120 100 93.002)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1e8e3e"></stop><stop offset="1" style="stop-color:#34a853"></stop></linearGradient><path fill="url(#d)" d="m95.99 215.28 19.38-21.64 9.04-27.6H67.58L39.16 116.8c-11.31 19.64-12.14 44.61.01 65.65 12.14 21.04 34.17 32.81 56.82 32.83z"></path><linearGradient id="e" x1="96.791" x2="210.494" y1="8.387" y2="8.387" gradientTransform="rotate(120 88.856 76)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#fbbc04"></stop><stop offset="1" style="stop-color:#fcc934"></stop></linearGradient><path fill="url(#e)" d="M152.84 116.81H96l28.42 49.23L96 215.28c22.66-.02 44.69-11.79 56.83-32.83 12.15-21.04 11.32-46 .01-65.64z"></path><ellipse cx="96" cy="149.63" fill="#F1F3F4" rx="32.81" ry="32.82"></ellipse><ellipse cx="96" cy="149.63" fill="#1A73E8" rx="26.66" ry="26.67"></ellipse></g><path fill="#BDC1C6" d="M20 94.35h152v.86H20zM20 93.48h152v.86H20z" opacity=".1"></path></g>

  <!-- Icons for the mv2 deprecation panel. -->
  <g id="chrome-extension-off"><path d="M18.574 21.098 2.88 5.426a.879.879 0 0 1-.004-1.277.879.879 0 0 1 .64-.274c.247 0 .458.09.633.273l15.7 15.7a.872.872 0 0 1 .277.632c0 .235-.09.442-.273.622a.858.858 0 0 1-.637.273.883.883 0 0 1-.64-.277Zm4.227-9.102c0 .668-.235 1.238-.696 1.703-.464.469-1.035.7-1.707.7v1.5c0 .3-.093.527-.28.675a.95.95 0 0 1-.618.227.954.954 0 0 1-.617-.23c-.188-.157-.281-.38-.281-.673v-10.5h-10.5c-.301 0-.528-.093-.676-.28a.95.95 0 0 1 0-1.235c.148-.188.375-.281.676-.281h1.5c0-.672.23-1.243.691-1.707a2.328 2.328 0 0 1 1.703-.696c.668 0 1.238.235 1.703.696.469.464.7 1.035.7 1.707h4.203c.492 0 .918.175 1.27.527.35.351.526.777.526 1.27v4.203c.668 0 1.235.23 1.704.691.464.465.699 1.031.699 1.703Zm-8.95-1.77Zm-2.578 2.575Zm-5.875 7.597c-.492 0-.918-.175-1.27-.527a1.735 1.735 0 0 1-.526-1.27v-3.476c0-.219.066-.41.199-.578a.79.79 0 0 1 .523-.297 2.746 2.746 0 0 0 1.2-.875C5.84 12.977 6 12.515 6 12c0-.516-.16-.977-.477-1.375a2.746 2.746 0 0 0-1.199-.875.8.8 0 0 1-.523-.305.947.947 0 0 1-.2-.593V5.426c0-.242.051-.465.16-.668.11-.207.255-.39.438-.559l1.2 1.2v2.8c.75.336 1.34.848 1.765 1.54.422.69.637 1.445.637 2.261a4.3 4.3 0 0 1-.637 2.29 3.726 3.726 0 0 1-1.766 1.51v2.802h13.204L19.8 19.8c-.184.164-.38.3-.59.398a2.121 2.121 0 0 1-.66.2Zm0 0"></path></g>
  <g id="extension_off-old" viewBox="0 -960 960 960"><path d="M791-55 55-791l57-57 736 736-57 57Zm9-219-80-80v-366H354l-80-80h86q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v86ZM537-537ZM423-423ZM200-120q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-17 6-31.5t17-25.5l57 57v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h520l57 57q-11 11-25.5 17t-31.5 6H200Z"></path></g>

  <!-- Icon for uploading an extension to the user's account. -->
  <g id="cloud-upload"><path d="m11.102 13.05-.801.802a.879.879 0 0 1-.64.273.858.858 0 0 1-.638-.273.879.879 0 0 1 0-1.278l2.356-2.351a.851.851 0 0 1 .625-.274c.238 0 .445.094.621.278l2.352 2.347c.183.184.273.39.273.625s-.09.442-.273.625a.883.883 0 0 1-.641.278.88.88 0 0 1-.637-.278l-.8-.773v4.347h5.703c.671 0 1.238-.23 1.703-.691.465-.465.695-1.031.695-1.703a2.32 2.32 0 0 0-.695-1.703c-.465-.469-1.032-.7-1.703-.7H16.8v-1.8c0-1.219-.48-2.223-1.438-3.012-.96-.793-2.086-1.187-3.375-1.187-1.293 0-2.386.468-3.289 1.41-.898.941-1.441 2.07-1.625 3.386H6c-.828 0-1.535.293-2.121.883A2.893 2.893 0 0 0 3 14.406c0 .828.293 1.535.879 2.117A2.887 2.887 0 0 0 6 17.398h2.398a.88.88 0 0 1 .903.895.887.887 0 0 1-.903.906H6c-1.332 0-2.465-.469-3.398-1.41-.934-.941-1.403-2.082-1.403-3.414 0-1.266.43-2.363 1.29-3.29.859-.92 1.921-1.417 3.187-1.483.39-1.43 1.172-2.59 2.34-3.473C9.187 5.242 10.516 4.8 12 4.8c1.785 0 3.328.57 4.637 1.71 1.308 1.141 1.965 2.571 1.965 4.29 1.164 0 2.156.406 2.972 1.222.817.817 1.227 1.801 1.227 2.954 0 1.171-.41 2.168-1.227 2.992-.816.82-1.808 1.23-2.972 1.23h-5.704c-.492 0-.918-.176-1.27-.527a1.737 1.737 0 0 1-.526-1.274Zm.898 0Zm0 0"></path></g>
  <g id="extension_cloud_upload-old" viewBox="0 -960 960 960"><path d="M240-192q-80 0-136-56.5T48-385q0-76 51.5-131.5T227-576q23.43-85.75 93.7-138.87Q390.98-768 480-768q107 0 185.5 68.5T744-528q70 0 119 49t49 118q0 70.42-49 119.71Q814-192 744-192H516q-29.7 0-50.85-21.15Q444-234.3 444-264v-174l-57 57-51-51 144-144 144 144-51 51-57-57v174h228q40.32 0 68.16-27.77 27.84-27.78 27.84-68Q840-400 812.16-428q-27.84-28-68.16-28h-72v-72q0-73-57.5-120.5t-135-47.5Q402-696 348-639.5T283-504h-43q-49.71 0-84.86 35.2-35.14 35.2-35.14 85t35.14 84.8q35.15 35 84.86 35h132v72H240Zm240-246Z"></path></g>
</defs>
</svg>
</cr-iconset>
`;const iconsets=div.querySelectorAll("cr-iconset");for(const iconset of iconsets){document.head.appendChild(iconset)}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-description",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixinLit=superClass=>{class I18nMixinLit extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData.getString(id):loadTimeData.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData.valueExists(id)}}return I18nMixinLit};let instance$M=null;function getCss$J(){return instance$M||(instance$M=[...[],css`[is='action-link']{cursor:pointer;display:inline-block;text-decoration:underline}[is='action-link'],[is='action-link']:active,[is='action-link']:hover,[is='action-link']:visited{color:var(--cr-link-color)}[is='action-link'][disabled]{color:var(--cr-fallback-color-disabled-foreground);cursor:default;pointer-events:none}[is='action-link'].no-outline{outline:none}`])}let instance$L=null;function getCss$I(){return instance$L||(instance$L=[...[getCss$12(),getCss$19(),getCss$11(),getCss$J(),getCss$N()],css`.layout-horizontal-center{display:flex;flex-direction:row;align-items:center}.flex{flex:1}.bounded-text,.multiline-clippable-text,.clippable-flex-text{overflow:hidden;text-overflow:ellipsis}.bounded-text,.clippable-flex-text{white-space:nowrap}.clippable-flex-text{flex-shrink:1}cr-tooltip-icon{margin-inline-end:8px}#icon-wrapper{align-self:flex-start;display:flex;padding:6px;position:relative}#icon{height:36px;width:36px}#card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:flex;flex-direction:column;height:var(--extensions-card-height);transition:height 300ms cubic-bezier(.25,.1,.25,1)}#card.review-prompting-enabled{height:180px}#card.dev-mode{height:208px}#card.dev-mode.review-prompting-enabled{height:228px}#card.dev-mode.review-prompting-enabled #description{min-height:60px}#main{display:flex;flex:1;min-height:0;padding:16px 20px}#card.review-prompting-enabled #main{padding:12px 20px 8px}#content{display:flex;flex:1;flex-direction:column;margin-inline-start:24px;overflow:hidden}#name-and-version{color:var(--cr-primary-text-color);margin-bottom:4px}#card.review-prompting-enabled #name-and-version{margin-bottom:2px}#name{margin-inline-end:8px}#description{flex:1}#card.review-prompting-enabled #description{flex:initial;flex-shrink:0;margin-bottom:0;max-height:60px}#rate-link-container{flex-shrink:0;margin-top:3px}#rate-link{align-items:center;color:var(--cr-link-color);display:inline-flex;gap:4px}#rate-link cr-icon{height:16px;width:16px}#warnings{display:flex;flex:1;flex-direction:row;margin-bottom:8px}#allowlist-warning{flex:1;margin-bottom:8px}.message-icon{color:var(--error-color);height:18px;margin-inline-end:4px;vertical-align:top;width:18px;flex-shrink:0}#allowlist-warning .message-icon{--iron-icon-fill-color:var(--warning-color)}#extension-id{flex-shrink:0}#card.review-prompting-enabled #extension-id{margin-top:8px}#inspect-views{display:flex;white-space:nowrap}#inspect-views>span{margin-inline-end:4px}#button-strip{box-sizing:border-box;flex-shrink:0;height:var(--cr-section-min-height);padding-bottom:8px;padding-inline-end:20px;padding-top:8px}#button-strip cr-button{margin-inline-start:8px}#source-indicator{margin-inline-start:24px;margin-top:24px;position:absolute}.source-icon-wrapper{align-items:center;background:rgb(241,89,43);border-radius:50%;box-shadow:0 1px 1px 0 rgba(0,0,0,0.22),0 2px 2px 0 rgba(0,0,0,0.12);display:flex;height:22px;justify-content:center;width:22px}#source-indicator cr-icon{color:white;height:16px;width:16px}cr-tooltip{--paper-tooltip-min-width:0}#errors-button.error{--cr-button-text-color:var(--error-color)}#errors-button.warning{--cr-button-text-color:var(--warning-text-color)}#account-upload-button{color:var(--cr-fallback-color-on-surface-subtle)}#enableToggle{margin-inline-start:12px}#blocklisted-warning:empty{display:none}#a11yAssociation{height:0;overflow:hidden}`])}let instance$K=null;function getCss$H(){return instance$K||(instance$K=[...[getCss$I()],css`#card{height:calc(var(--extensions-card-height) + 32px)}#card.dev-mode{height:calc(208px + 32px)}.brave-hosted{padding-inline:var(--leo-spacing-s);padding-block:var(--leo-spacing-xs);margin-block:calc(-1 * var(--leo-spacing-s)) var(--leo-spacing-s);border-radius:var(--leo-radius-xs);background-color:var(--leo-color-schemes-surface-variant);color:var(--leo-color-text-tertiary);font:var(--leo-font-components-button-small);width:fit-content}#brave-socket-learn-more{margin-inline-start:var(--leo-spacing-s)}`])}function getHtml$G(){return html`<!--_html_template_start_-->
<!-- Invisible instead of hidden because VoiceOver refuses to read text of
  element that's hidden when referenced by an aria label.  Unfortunately,
  this text can be found by Ctrl + F because it isn't hidden. -->
<div id="a11yAssociation" aria-hidden="true">
  ${this.a11yAssociation(this.data.name)}
</div>
<div id="card" class="${this.computeClasses_()}">
  <div id="main">
    <div id="icon-wrapper">
      <img id="icon" src="${this.data.iconUrl}" aria-describedby="a11yAssociation" alt="">
      ${this.computeSourceIndicatorIcon_()?html`
        <div id="source-indicator">
          <div class="source-icon-wrapper" role="img"
              aria-describedby="a11yAssociation"
              aria-label="${this.computeSourceIndicatorText_()}">
            <cr-icon .icon="${this.computeSourceIndicatorIcon_()}"></cr-icon>
          </div>
        </div>
      `:""}
    </div>

    <!-- This needs to be separate from the source-indicator since it can't
     be contained inside of a position:relative parent element. -->
    ${this.computeSourceIndicatorIcon_()?html`
      <cr-tooltip id="source-indicator-text" for="source-indicator"
          position="top" fit-to-visible-bounds aria-hidden="true">
        ${this.computeSourceIndicatorText_()}
      </cr-tooltip>
    `:""}
    <div id="content">
      <!--Note: We wrap inspect-views in a div so that the outer div
          doesn't shrink (because it's not display: flex).-->
      <div>
        <div id="name-and-version" class="layout-horizontal-center">
          <div id="name" role="heading" aria-level="3" class="clippable-flex-text">
            ${this.data.name}
          </div>
          <span id="version" class="cr-secondary-text" ?hidden="${!this.inDevMode}">
            ${this.data.version}
          </span>
        </div><div ?hidden="${!this.isBraveHosted_(this.data.id)}" class="brave-hosted">
          $i18n{braveHosted}
       </div>
      </div>
      <div id="description" class="cr-secondary-text multiline-clippable-text" ?hidden="${!this.showDescription_()}">
        ${this.data.description}
      </div>
      ${this.showSevereWarnings()?html`
        <div id="warnings">
          <cr-icon class="message-icon" icon="cr:error"></cr-icon>
          <span id="runtime-warnings" class="cr-secondary-text" aria-describedby="a11yAssociation" ?hidden="${!this.data.runtimeWarnings.length}">
            ${this.data.runtimeWarnings.map((item=>html`${item}`))}
          </span>
          <span id="suspicious-warning" class="cr-secondary-text" aria-describedby="a11yAssociation" ?hidden="${!this.data.disableReasons.suspiciousInstall}">
            $i18n{itemSuspiciousInstall}
            <a target="_blank" href="$i18n{suspiciousInstallHelpUrl}" aria-label="$i18n{itemSuspiciousInstallLearnMore}">
              $i18n{learnMore}
            </a>
          </span>
          <span id="corrupted-warning" class="cr-secondary-text" aria-describedby="a11yAssociation" ?hidden="${!this.data.disableReasons.corruptInstall}">
            $i18n{itemCorruptInstall}
          </span>
          <span id="blocklisted-warning" class="cr-secondary-text"><!--
            -->${this.data.blocklistText}<!-- No whitespace; use :empty in css.
       --></span><a id="brave-socket-learn-more" target="_blank" ?hidden="${!this.isFlaggedBySocket_(this.data.blocklistText)}" href="$i18n{braveBlocklistedMalwareSocketLearnMoreUrl}" aria-label="$i18n{braveBlocklistedMalwareSocketLearnMore}">
        $i18n{learnMore}
      </a>
          <span id="unsupported-developer-extension-warning" class="cr-secondary-text" ?hidden="${!this.data.disableReasons.unsupportedDeveloperExtension}">
            $i18n{itemUnsupportedDeveloperMode}
          </span>
          <span id="disabled-by-another-extension-warning" class="cr-secondary-text" ?hidden="${!this.isDisabledByAnotherExtension_()}">
            ${this.getDisabledByExtensionWarningText_()}
          </span>
        </div>
      `:""}
      ${this.showMv2DeprecationWarning_()?html`
        <div id="warnings">
          <cr-icon class="message-icon" icon="cr:error"></cr-icon>
          <span id="mv2-deprecation-warning" class="cr-secondary-text"
              aria-describedby="a11yAssociation">
            $i18n{mv2DeprecationUnsupportedExtensionOffText}
          </span>
        </div>
      `:""}
      ${this.showAllowlistWarning_()?html`
        <div id="allowlist-warning">
          <cr-icon class="message-icon"
              icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:android-security-privacy-alert":"extensions-icons:safebrowsing_warning-old"}">
          </cr-icon>
          <span class="cr-secondary-text" aria-describedby="a11yAssociation">
            $i18n{itemAllowlistWarning}
            <a href="$i18n{enhancedSafeBrowsingWarningHelpUrl}" target="_blank"
                aria-label="$i18n{itemAllowlistWarningLearnMoreLabel}">
              $i18n{learnMore}
            </a>
          </span>
        </div>
      `:""}
      ${this.inDevMode?html`
        <div id="extension-id" class="bounded-text cr-secondary-text">
          ${this.getIdElementText_()}
        </div>
        ${!this.computeInspectViewsHidden_()?html`
          <!--Note: We wrap inspect-views in a div so that the outer div
              doesn't shrink (because it's not display: flex).-->
          <div>
            <div id="inspect-views" class="cr-secondary-text">
              <span aria-describedby="a11yAssociation">
                $i18n{itemInspectViews}
              </span>
              <a class="clippable-flex-text" is="action-link"
                  title="${this.computeFirstInspectTitle_()}"
                  @click="${this.onInspectClick_}">
                ${this.computeFirstInspectLabel_()}
              </a>
              <a is="action-link" ?hidden="${this.computeExtraViewsHidden_()}"
                  @click="${this.onExtraInspectClick_}">
                 ${this.computeExtraInspectLabel_()}
              </a>
            </div>
          </div>
        `:""}
      `:""}
      <div id="rate-link-container" ?hidden="${!this.showOpenReviewPageLink_()}">
        <a id="rate-link" is="action-link" @click="${this.onOpenReviewPageClick_}" aria-describedby="a11yAssociation">
          $i18n{itemRateExtension}
          <cr-icon icon="cr:open-in-new"></cr-icon>
        </a>
      </div>
    </div>
  </div>
  <div id="button-strip" class="layout-horizontal-center cr-secondary-text">
    <div class="layout-horizontal-center flex">
      <cr-button id="detailsButton" @click="${this.onDetailsClick_}" aria-describedby="a11yAssociation">
        $i18n{itemDetails}
      </cr-button>
      <cr-button id="removeButton" @click="${this.onRemoveClick_}" aria-describedby="a11yAssociation" ?hidden="${this.data.mustRemainInstalled}">
        $i18n{remove}
      </cr-button>
      ${this.shouldShowErrorsButton_()?html`
        <cr-button id="errors-button"
            class="${this.showErrorsAsWarningsButtonLabel_()?"warning":"error"}"
            @click="${this.onErrorsClick_}" aria-describedby="a11yAssociation">
          ${this.showErrorsAsWarningsButtonLabel_()?"$i18n{itemWarnings}":"$i18n{itemErrors}"}
        </cr-button>
      `:""}
    </div>
    ${this.showAccountUploadButton_()?html`
      <cr-icon-button id="account-upload-button" class="no-overlap"
          title="$i18n{itemUpload}" aria-label="$i18n{itemUpload}"
          iron-icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:cloud-upload":"extensions-icons:extension_cloud_upload-old"}"
          aria-describedby="a11yAssociation" @click="${this.onUploadClick_}">
      </cr-icon-button>
    `:""}
    ${this.showDevReloadButton_()?html`
      <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap"
          title="$i18n{itemReload}" aria-label="$i18n{itemReload}"
          aria-describedby="a11yAssociation" @click="${this.onReloadClick_}">
      </cr-icon-button>
    `:""}
    ${this.showRepairButton_()?html`
      <cr-button id="repair-button" class="action-button"
          aria-describedby="a11yAssociation" @click="${this.onRepairClick_}">
        $i18n{itemRepair}
      </cr-button>
    `:""}
    ${this.showReloadButton_()?html`
      <cr-button id="terminated-reload-button" @click="${this.onReloadClick_}"
          aria-describedby="a11yAssociation" class="action-button">
        $i18n{itemReload}
      </cr-button>
    `:""}
    <cr-tooltip-icon id="parentDisabledPermissionsToolTip" ?hidden="${!this.data.disableReasons.parentDisabledPermissions}" tooltip-text="$i18n{parentDisabledPermissions}" icon-class="cr20:family-link" icon-aria-label="$i18n{parentDisabledPermissions}">
    </cr-tooltip-icon>
    <cr-toggle id="enableToggle" aria-label="${this.getEnableToggleAriaLabel_()}" aria-describedby="a11yAssociation" ?checked="${this.isEnabled_()}" @change="${this.onEnableToggleChange_}" ?disabled="${!this.isEnableToggleEnabled_()}" ?hidden="${!this.showEnableToggle_()}">
    </cr-toggle>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var SafetyCheckWarningReason;(function(SafetyCheckWarningReason){SafetyCheckWarningReason[SafetyCheckWarningReason["UNPUBLISHED"]=1]="UNPUBLISHED";SafetyCheckWarningReason[SafetyCheckWarningReason["POLICY"]=2]="POLICY";SafetyCheckWarningReason[SafetyCheckWarningReason["MALWARE"]=3]="MALWARE";SafetyCheckWarningReason[SafetyCheckWarningReason["OFFSTORE"]=4]="OFFSTORE";SafetyCheckWarningReason[SafetyCheckWarningReason["UNWANTED"]=5]="UNWANTED";SafetyCheckWarningReason[SafetyCheckWarningReason["NO_PRIVACY_PRACTICE"]=6]="NO_PRIVACY_PRACTICE"})(SafetyCheckWarningReason||(SafetyCheckWarningReason={}));var SourceType;(function(SourceType){SourceType["WEBSTORE"]="webstore";SourceType["POLICY"]="policy";SourceType["SIDELOADED"]="sideloaded";SourceType["UNPACKED"]="unpacked";SourceType["INSTALLED_BY_DEFAULT"]="installed-by-default";SourceType["UNKNOWN"]="unknown"})(SourceType||(SourceType={}));var EnableControl;(function(EnableControl){EnableControl["RELOAD"]="RELOAD";EnableControl["REPAIR"]="REPAIR";EnableControl["ENABLE_TOGGLE"]="ENABLE_TOGGLE"})(EnableControl||(EnableControl={}));const TOAST_DURATION_MS=3e3;function isEnabled$1(state){switch(state){case chrome.developerPrivate.ExtensionState.ENABLED:case chrome.developerPrivate.ExtensionState.TERMINATED:return true;case chrome.developerPrivate.ExtensionState.BLOCKLISTED:case chrome.developerPrivate.ExtensionState.DISABLED:return false;default:assertNotReachedCase()}}function userCanChangeEnablement(item){if(!item.userMayModify){return false}if(item.disableReasons.corruptInstall||item.disableReasons.suspiciousInstall||item.disableReasons.updateRequired||item.disableReasons.publishedInStoreRequired||item.disableReasons.blockedByPolicy||item.disableReasons.unsupportedDeveloperExtension||item.disableReasons.unsupportedManifestVersion){return false}if(item.dependentExtensions.length>0){return false}if(item.state===chrome.developerPrivate.ExtensionState.BLOCKLISTED){return false}return true}function getItemSource(item){if(item.controlledInfo){return SourceType.POLICY}switch(item.location){case chrome.developerPrivate.Location.THIRD_PARTY:return SourceType.SIDELOADED;case chrome.developerPrivate.Location.UNPACKED:return SourceType.UNPACKED;case chrome.developerPrivate.Location.UNKNOWN:return SourceType.UNKNOWN;case chrome.developerPrivate.Location.FROM_STORE:return SourceType.WEBSTORE;case chrome.developerPrivate.Location.INSTALLED_BY_DEFAULT:return SourceType.INSTALLED_BY_DEFAULT;default:assertNotReachedCase(item.location)}}function getItemSourceString(source){switch(source){case SourceType.POLICY:return loadTimeData.getString("itemSourcePolicy");case SourceType.SIDELOADED:return loadTimeData.getString("itemSourceSideloaded");case SourceType.UNPACKED:return loadTimeData.getString("itemSourceUnpacked");case SourceType.WEBSTORE:return loadTimeData.getString("itemSourceWebstore");case SourceType.INSTALLED_BY_DEFAULT:return loadTimeData.getString("itemSourceInstalledByDefault");case SourceType.UNKNOWN:return"";default:assertNotReachedCase()}}function convertSafetyCheckReason(reason){switch(reason){case chrome.developerPrivate.SafetyCheckWarningReason.UNPUBLISHED:{return SafetyCheckWarningReason.UNPUBLISHED}case chrome.developerPrivate.SafetyCheckWarningReason.POLICY:{return SafetyCheckWarningReason.POLICY}case chrome.developerPrivate.SafetyCheckWarningReason.MALWARE:{return SafetyCheckWarningReason.MALWARE}case chrome.developerPrivate.SafetyCheckWarningReason.OFFSTORE:{return SafetyCheckWarningReason.OFFSTORE}case chrome.developerPrivate.SafetyCheckWarningReason.UNWANTED:{return SafetyCheckWarningReason.UNWANTED}case chrome.developerPrivate.SafetyCheckWarningReason.NO_PRIVACY_PRACTICE:{return SafetyCheckWarningReason.NO_PRIVACY_PRACTICE}default:{assertNotReachedCase()}}}function computeInspectableViewLabel(view){let label=view.url;try{const url=new URL(view.url);if(url.protocol==="chrome-extension:"){label=url.pathname.substring(1)}}catch(e){}if(label==="_generated_background_page.html"){label=loadTimeData.getString("viewBackgroundPage")}if(view.type==="EXTENSION_SERVICE_WORKER_BACKGROUND"){label=loadTimeData.getString("viewServiceWorker")}if(view.incognito){label+=" "+loadTimeData.getString("viewIncognito")}if(view.renderProcessId===-1){label+=" "+loadTimeData.getString("viewInactive")}if(view.isIframe){label+=" "+loadTimeData.getString("viewIframe")}return label}function getEnableToggleAriaLabel(toggleEnabled,extensionsDataType,appEnabled,extensionEnabled,itemOff){if(!toggleEnabled){return itemOff}const ExtensionType=chrome.developerPrivate.ExtensionType;switch(extensionsDataType){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return appEnabled;case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return extensionEnabled;case ExtensionType.THEME:assertNotReached("Don't send themes to the chrome://extensions page");default:assertNotReachedCase(extensionsDataType,"Item type is not App or Extension.")}}function sortViews(views){function getSortValue(view){switch(view.type){case chrome.developerPrivate.ViewType.EXTENSION_SERVICE_WORKER_BACKGROUND:return 2;case chrome.developerPrivate.ViewType.EXTENSION_BACKGROUND_PAGE:return 1;default:return 0}}return[...views].sort(((a,b)=>getSortValue(b)-getSortValue(a)))}function isTerminated(state){return state===chrome.developerPrivate.ExtensionState.TERMINATED}function getEnableControl(data){if(isTerminated(data.state)){return EnableControl.RELOAD}if(data.disableReasons.corruptInstall&&data.userMayModify){return EnableControl.REPAIR}return EnableControl.ENABLE_TOGGLE}function createDummyExtensionInfo(){return{commands:[],isCommandRegistrationHandledExternally:false,dependentExtensions:[],description:"",disableReasons:{suspiciousInstall:false,corruptInstall:false,updateRequired:false,publishedInStoreRequired:false,blockedByPolicy:false,reloading:false,custodianApprovalRequired:false,parentDisabledPermissions:false,unsupportedManifestVersion:false,unsupportedDeveloperExtension:false,disabledByAnotherExtension:false},errorCollection:{isEnabled:false,isActive:false},fileAccess:{isEnabled:false,isActive:false},fileAccessPendingChange:false,homePage:{url:"",specified:false},iconUrl:"",id:"",incognitoAccess:{isEnabled:false,isActive:false},userScriptsAccess:{isEnabled:false,isActive:false},incognitoAccessPendingChange:false,installWarnings:[],location:chrome.developerPrivate.Location.UNKNOWN,manifestErrors:[],manifestHomePageUrl:"",mustRemainInstalled:false,name:"",offlineEnabled:false,permissions:{simplePermissions:[]},runtimeErrors:[],runtimeWarnings:[],state:chrome.developerPrivate.ExtensionState.ENABLED,type:chrome.developerPrivate.ExtensionType.EXTENSION,updateUrl:"",userMayModify:false,version:"2.0",views:[],webStoreUrl:"",showSafeBrowsingAllowlistWarning:false,showAccessRequestsInToolbar:false,safetyCheckWarningReason:chrome.developerPrivate.SafetyCheckWarningReason.UNPUBLISHED,isAffectedByMV2Deprecation:false,canUploadAsAccountExtension:false,canShowReviewPrompt:false}}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ItemMixin=superClass=>{class ItemMixin extends superClass{static get properties(){return{data:{type:Object},delegate:{type:Object}}}#data_accessor_storage;get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}isReloading_=false;appOrExtension(type,appLabel,extensionLabel){const ExtensionType=chrome.developerPrivate.ExtensionType;switch(type){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return appLabel;case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return extensionLabel;case ExtensionType.THEME:assertNotReached("Don't send themes to the chrome://extensions page");default:assertNotReachedCase(type,"Item type is not App or Extension.")}}a11yAssociation(name){return loadTimeData.getStringF("extensionA11yAssociation",name)}canReloadItem(){if(!this.data){return false}const showIcon=this.data.location===chrome.developerPrivate.Location.UNPACKED&&(this.data.state===chrome.developerPrivate.ExtensionState.ENABLED||this.data.disableReasons.reloading);return showIcon}async reloadItem(){if(this.isReloading_){return}this.isReloading_=true;const toastManager=getToastManager();toastManager.duration=0;toastManager.show(loadTimeData.getString("itemReloading"));assert(this.delegate);assert(this.data);try{await this.delegate.reloadItem(this.data.id);toastManager.hide();toastManager.duration=TOAST_DURATION_MS;toastManager.show(loadTimeData.getString("itemReloaded"))}catch(loadError){toastManager.hide();throw loadError}finally{this.isReloading_=false}}}return ItemMixin};
// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var UserAction;(function(UserAction){UserAction["ALL_TOGGLED_ON"]="Extensions.Settings.HostList.AllHostsToggledOn";UserAction["ALL_TOGGLED_OFF"]="Extensions.Settings.HostList.AllHostsToggledOff";UserAction["SPECIFIC_TOGGLED_ON"]="Extensions.Settings.HostList.SpecificHostToggledOn";UserAction["SPECIFIC_TOGGLED_OFF"]="Extensions.Settings.HostList.SpecificHostToggledOff";UserAction["LEARN_MORE"]="Extensions.Settings.HostList.LearnMoreActivated"})(UserAction||(UserAction={}));const SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME="SafeBrowsing.ExtensionSafetyHub.Trigger.Kept";const SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME="SafeBrowsing.ExtensionSafetyHub.Trigger.Removed";const SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME="SafeBrowsing.ExtensionSafetyHub.Trigger.Shown";const SAFETY_HUB_WARNING_REASON_MAX_SIZE=7;const UPLOAD_EXTENSION_TO_ACCOUNT_ITEMS_LIST_PAGE_HISTOGRAM_NAME="Extensions.UploadExtensionToAccount.ItemsListPage";const UPLOAD_EXTENSION_TO_ACCOUNT_DETAILS_VIEW_PAGE_HISTOGRAM_NAME="Extensions.UploadExtensionToAccount.DetailsViewPage";
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Page;(function(Page){Page["LIST"]="itemsList";Page["DETAILS"]="details-view";Page["ACTIVITY_LOG"]="activity-log";Page["SITE_PERMISSIONS"]="site-permissions";Page["SITE_PERMISSIONS_ALL_SITES"]="site-permissions-by-site";Page["SHORTCUTS"]="keyboard-shortcuts";Page["ERRORS"]="error-page"})(Page||(Page={}));var Dialog;(function(Dialog){Dialog["OPTIONS"]="options"})(Dialog||(Dialog={}));function isPageStateEqual(a,b){return a.page===b.page&&a.subpage===b.subpage&&a.extensionId===b.extensionId}const CANONICAL_PATH_REGEX=/(^\/)([\/-\w]+)(\/$)/;class NavigationHelper{nextListenerId_=1;listeners_=new Map;previousPage_;constructor(){this.processRoute_();window.addEventListener("popstate",(()=>{this.notifyRouteChanged_(this.getCurrentPage())}))}get currentPath_(){return location.pathname.replace(CANONICAL_PATH_REGEX,"$1$2")}processRoute_(){if(this.currentPath_==="/configureCommands"||this.currentPath_==="/shortcuts"){window.history.replaceState(undefined,"","/shortcuts")}else if(this.currentPath_==="/sitePermissions"){window.history.replaceState(undefined,"","/sitePermissions")}else if(this.currentPath_==="/sitePermissions/allSites"){window.history.replaceState(undefined,"","/sitePermissions/allSites")}else if(this.currentPath_!=="/"){window.history.replaceState(undefined,"","/")}}getCurrentPage(){const search=new URLSearchParams(location.search);let id=search.get("id");if(id){return{page:Page.DETAILS,extensionId:id}}id=search.get("activity");if(id){return{page:Page.ACTIVITY_LOG,extensionId:id}}id=search.get("options");if(id){return{page:Page.DETAILS,extensionId:id,subpage:Dialog.OPTIONS}}id=search.get("errors");if(id){return{page:Page.ERRORS,extensionId:id}}if(this.currentPath_==="/shortcuts"){return{page:Page.SHORTCUTS}}if(this.currentPath_==="/sitePermissions"){return{page:Page.SITE_PERMISSIONS}}if(this.currentPath_==="/sitePermissions/allSites"){return{page:Page.SITE_PERMISSIONS_ALL_SITES}}return{page:Page.LIST}}addListener(listener){const nextListenerId=this.nextListenerId_++;this.listeners_.set(nextListenerId,listener);return nextListenerId}removeListener(id){return this.listeners_.delete(id)}notifyRouteChanged_(newPage){for(const listener of this.listeners_.values()){listener(newPage)}}navigateTo(newPage){const currentPage=this.getCurrentPage();if(currentPage&&isPageStateEqual(currentPage,newPage)){return}this.updateHistory(newPage,false);this.notifyRouteChanged_(newPage)}replaceWith(newPage){this.updateHistory(newPage,true);if(this.previousPage_&&isPageStateEqual(this.previousPage_,newPage)){history.back();return}this.notifyRouteChanged_(newPage)}updateHistory(entry,replaceState){let path;switch(entry.page){case Page.LIST:path="/";break;case Page.ACTIVITY_LOG:path="/?activity="+entry.extensionId;break;case Page.DETAILS:if(entry.subpage){assert(entry.subpage===Dialog.OPTIONS);path="/?options="+entry.extensionId}else{path="/?id="+entry.extensionId}break;case Page.SITE_PERMISSIONS:path="/sitePermissions";break;case Page.SITE_PERMISSIONS_ALL_SITES:path="/sitePermissions/allSites";break;case Page.SHORTCUTS:path="/shortcuts";break;case Page.ERRORS:path="/?errors="+entry.extensionId;break;default:assertNotReachedCase(entry.page)}assert(path);const state={url:path};const currentPage=this.getCurrentPage();const isDialogNavigation=currentPage.page===entry.page&&currentPage.extensionId===entry.extensionId;if(replaceState||isDialogNavigation){history.replaceState(state,"",path)}else{this.previousPage_=currentPage;history.pushState(state,"",path)}}}const navigation=new NavigationHelper;
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FakeChromeEvent{addListener(_listener){}removeListener(_listener){}callListeners(..._args){}}class DummyItemDelegate{deleteItem(_id){}deleteItems(_ids){return Promise.resolve()}uninstallItem(_id){return Promise.resolve()}openReviewPage(_id){return Promise.resolve()}setItemEnabled(_id,_isEnabled){return Promise.resolve()}setItemAllowedIncognito(_id,_isAllowedIncognito){}setItemAllowedUserScripts(_id,_isAllowedUserScripts){}setItemAllowedOnFileUrls(_id,_isAllowedOnFileUrls){}setItemHostAccess(_id,_hostAccess){}setItemCollectsErrors(_id,_collectsErrors){}inspectItemView(_id,_view){}openUrl(_url){}reloadItem(_id){return Promise.resolve()}repairItem(_id){}showItemOptionsPage(_extension){}showInFolder(_id){}getExtensionSize(_id){return Promise.resolve("")}addRuntimeHostPermission(_id,_host){return Promise.resolve()}removeRuntimeHostPermission(_id,_host){return Promise.resolve()}setItemSafetyCheckWarningAcknowledged(_id,_reason){}setShowAccessRequestsInToolbar(_id,_showRequests){}setItemPinnedToToolbar(_id,_pinnedToToolbar){}uploadItemToAccount(_id){return Promise.resolve(false)}setProfileExtensionsPinnedByDefault(_extensionsPinnedByDefault){}recordUserAction(_metricName){}getItemStateChangedTarget(){return new FakeChromeEvent}showSiteSettings(_id){}}const ExtensionsItemElementBase=I18nMixinLit(ItemMixin(CrLitElement));class ExtensionsItemElement extends ExtensionsItemElementBase{static get is(){return"extensions-item"}static get styles(){return getCss$H()}render(){return getHtml$G.bind(this)()}static get properties(){return{delegate:{type:Object},inDevMode:{type:Boolean},safetyCheckShowing:{type:Boolean},data:{type:Object},firstInspectView_:{type:Object},enableToggleTooltipPosition_:{type:String},webuiRoundedIconsEnabled_:{type:Boolean}}}#delegate_accessor_storage=null;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#safetyCheckShowing_accessor_storage=false;get safetyCheckShowing(){return this.#safetyCheckShowing_accessor_storage}set safetyCheckShowing(value){this.#safetyCheckShowing_accessor_storage=value}#data_accessor_storage=createDummyExtensionInfo();get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#firstInspectView__accessor_storage;get firstInspectView_(){return this.#firstInspectView__accessor_storage}set firstInspectView_(value){this.#firstInspectView__accessor_storage=value}#enableToggleTooltipPosition__accessor_storage=TooltipPosition.LEFT;get enableToggleTooltipPosition_(){return this.#enableToggleTooltipPosition__accessor_storage}set enableToggleTooltipPosition_(value){this.#enableToggleTooltipPosition__accessor_storage=value}#webuiRoundedIconsEnabled__accessor_storage=loadTimeData.getBoolean("webuiRoundedIconsEnabled");get webuiRoundedIconsEnabled_(){return this.#webuiRoundedIconsEnabled__accessor_storage}set webuiRoundedIconsEnabled_(value){this.#webuiRoundedIconsEnabled__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("data")){this.firstInspectView_=this.computeFirstInspectView_()}}firstUpdated(){this.enableToggleTooltipPosition_=isRTL()?TooltipPosition.RIGHT:TooltipPosition.LEFT}getDetailsButton(){return this.$.detailsButton}getRemoveButton(){return this.data.mustRemainInstalled?null:this.$.removeButton}getErrorsButton(){return this.shadowRoot.querySelector("#errors-button")}getEnableToggleAriaLabel_(){return getEnableToggleAriaLabel(this.isEnabled_(),this.data.type,this.i18n("appEnabled"),this.i18n("extensionEnabled"),this.i18n("itemOff"))}getIdElementText_(){return this.i18n("itemId",this.data.id)}shouldShowErrorsButton_(){if(this.data.installWarnings&&this.data.installWarnings.length>0){return true}return this.data.manifestErrors.length>0||this.data.runtimeErrors.length>0}onRemoveClick_(){if(this.safetyCheckShowing){const actionToRecord=this.data.safetyCheckText?"SafetyCheck.ReviewPanelRemoveClicked":"SafetyCheck.NonTriggeringExtensionRemoved";chrome.metricsPrivate.recordUserAction(actionToRecord)}assert(this.delegate);this.delegate.deleteItem(this.data.id)}onOpenReviewPageClick_(){assert(this.delegate);this.delegate.openReviewPage(this.data.id)}onEnableToggleChange_(){assert(this.delegate);this.delegate.setItemEnabled(this.data.id,this.$.enableToggle.checked);this.$.enableToggle.checked=this.isEnabled_()}onErrorsClick_(){if(this.data.installWarnings&&this.data.installWarnings.length>0){this.fire("show-install-warnings",this.data.installWarnings);return}navigation.navigateTo({page:Page.ERRORS,extensionId:this.data.id})}onDetailsClick_(){navigation.navigateTo({page:Page.DETAILS,extensionId:this.data.id})}computeFirstInspectView_(){return this.data.views.length===0?undefined:sortViews(this.data.views)[0]}onInspectClick_(){assert(this.delegate&&this.firstInspectView_);this.delegate.inspectItemView(this.data.id,this.firstInspectView_)}onExtraInspectClick_(){navigation.navigateTo({page:Page.DETAILS,extensionId:this.data.id})}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire("load-error",loadError)))}async onUploadClick_(){assert(this.delegate);const uploaded=await this.delegate.uploadItemToAccount(this.data.id);chrome.metricsPrivate.recordBoolean(UPLOAD_EXTENSION_TO_ACCOUNT_ITEMS_LIST_PAGE_HISTOGRAM_NAME,uploaded)}onRepairClick_(){assert(this.delegate);this.delegate.repairItem(this.data.id)}isEnabled_(){return isEnabled$1(this.data.state)}isEnableToggleEnabled_(){return userCanChangeEnablement(this.data)}showReloadButton_(){return getEnableControl(this.data)===EnableControl.RELOAD}showRepairButton_(){return getEnableControl(this.data)===EnableControl.REPAIR}showEnableToggle_(){return getEnableControl(this.data)===EnableControl.ENABLE_TOGGLE}computeClasses_(){let classes=this.isEnabled_()?"enabled":"disabled";if(this.inDevMode){classes+=" dev-mode"}if(loadTimeData.getBoolean("cwsReviewPromptingEnabled")){classes+=" review-prompting-enabled"}return classes}computeSourceIndicatorIcon_(){switch(getItemSource(this.data)){case SourceType.POLICY:return loadTimeData.getBoolean("webuiRoundedIconsEnabled")?"extensions-icons:domain":"extensions-icons:business-old";case SourceType.SIDELOADED:return loadTimeData.getBoolean("webuiRoundedIconsEnabled")?"extensions-icons:input":"extensions-icons:input-old";case SourceType.UNKNOWN:return loadTimeData.getBoolean("webuiRoundedIconsEnabled")?"extensions-icons:input":"extensions-icons:input-old";case SourceType.UNPACKED:return"extensions-icons:unpacked-custom";case SourceType.WEBSTORE:case SourceType.INSTALLED_BY_DEFAULT:return"";default:assertNotReached()}}computeSourceIndicatorText_(){if(this.data.locationText){return this.data.locationText}const sourceType=getItemSource(this.data);return sourceType===SourceType.WEBSTORE?"":getItemSourceString(sourceType)}computeInspectViewsHidden_(){return!this.data.views||this.data.views.length===0}computeFirstInspectTitle_(){return this.data.views.length>0?computeInspectableViewLabel(this.firstInspectView_):""}computeFirstInspectLabel_(){const label=this.computeFirstInspectTitle_();return label&&this.data.views.length>1?label+",":label}computeExtraViewsHidden_(){return this.data.views.length<=1}showAccountUploadButton_(){return this.data.canUploadAsAccountExtension}showDevReloadButton_(){return this.canReloadItem()}computeExtraInspectLabel_(){return this.i18n("itemInspectViewsExtra",(this.data.views.length-1).toString())}hasSevereWarnings_(){return this.data.disableReasons.corruptInstall||this.data.disableReasons.suspiciousInstall||this.data.disableReasons.unsupportedDeveloperExtension||this.isDisabledByAnotherExtension_()||this.data.runtimeWarnings.length>0||!!this.data.blocklistText}hasMv2DeprecationWarning_(){return this.data.disableReasons.unsupportedManifestVersion}hasAllowlistWarning_(){return this.data.showSafeBrowsingAllowlistWarning}showDescription_(){return!this.hasSevereWarnings_()&&!this.hasMv2DeprecationWarning_()&&!this.hasAllowlistWarning_()}showSevereWarnings(){return this.hasSevereWarnings_()}showMv2DeprecationWarning_(){return this.hasMv2DeprecationWarning_()&&!this.hasSevereWarnings_()}showAllowlistWarning_(){return this.hasAllowlistWarning_()&&!this.hasSevereWarnings_()&&!this.hasMv2DeprecationWarning_()}showOpenReviewPageLink_(){return this.data.canShowReviewPrompt&&this.showDescription_()}getDisabledByExtensionWarningText_(){if(!this.data.disableReasons.disabledByExtensionName){return this.i18n("itemDisabledByExtensionGeneric")}return this.i18n("itemDisabledByExtension",this.data.disableReasons.disabledByExtensionName)}isDisabledByAnotherExtension_(){return this.data.disableReasons.disabledByAnotherExtension}showErrorsAsWarningsButtonLabel_(){if(this.data.runtimeErrors?.length||this.data.installWarnings?.length){return false}return true}}customElements.define(ExtensionsItemElement.is,ExtensionsItemElement);
// Copyright (c) 2025 The Brave Authors. All rights reserved.
ExtensionsItemElement.prototype.isBraveHosted_=extensionId=>loadTimeData.getString("braveHostedExtensions").includes(extensionId);ExtensionsItemElement.prototype.isFlaggedBySocket_=blocklistText=>blocklistText===loadTimeData.getString("braveBlocklistedMalwareSocket");let instance$J=null;function getCss$G(){return instance$J||(instance$J=[...[getCss$N()],css`:host{--activity-log-call-and-time-width:575px;--activity-type-width:85px;--activity-time-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}.activity-table-headings{width:var(--activity-log-call-and-time-width)}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-time{flex:0 var(--activity-time-width);text-align:end}cr-infinite-list{flex:1}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$F(){return html`<!--_html_template_start_-->
<div class="activity-subpage-header">
  <cr-search-field label="$i18n{activityLogSearchLabel}"
      @search-changed="${this.onSearchChanged_}">
  </cr-search-field>
  <cr-button id="toggle-stream-button" @click="${this.onToggleButtonClick_}">
    <span>
      ${this.isStreamOn_?html`
        $i18n{stopActivityStream}
      `:html`
        $i18n{startActivityStream}
      `}
    </span>
  </cr-button>
  <cr-button class="clear-activities-button"
      @click="${this.onClearStreamClick_}">
    $i18n{clearActivities}
  </cr-button>
</div>
<div id="empty-stream-message" class="activity-message"
    ?hidden="${!this.isStreamEmpty_()}">
  <span id="stream-stopped-message" ?hidden="${this.isStreamOn_}">
    $i18n{emptyStreamStopped}
  </span>
  <span id="stream-started-message" ?hidden="${!this.isStreamOn_}">
    $i18n{emptyStreamStarted}
  </span>
</div>
<div id="empty-search-message" class="activity-message"
    ?hidden="${!this.shouldShowEmptySearchMessage_()}">
  $i18n{noSearchResults}
</div>
<div class="activity-table-headings" ?hidden="${this.isFilteredStreamEmpty_()}">
  <span id="activity-type">$i18n{activityLogTypeColumn}</span>
  <span id="activity-key">$i18n{activityLogNameColumn}</span>
  <span id="activity-time">$i18n{activityLogTimeColumn}</span>
</div>
<cr-infinite-list id="activityList" .items="${this.filteredActivityStream_}"
    item-size="56" chunk-size="10"
    .template="${item=>html`
      <activity-log-stream-item .data="${item}"></activity-log-stream-item>
    `}">
</cr-infinite-list>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyActivityLogEventDelegate{getOnExtensionActivity(){return new FakeChromeEvent}}function processActivityForStream(activity){const activityType=activity.activityType;const timestamp=activity.time;const isContentScript=activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;const args=isContentScript?JSON.stringify([]):activity.args;let streamItemNames=[activity.apiCall];if(isContentScript){streamItemNames=activity.args?JSON.parse(activity.args):[];assert(Array.isArray(streamItemNames),"Invalid data for script names.")}const other=activity.other;const webRequestInfo=other&&other.webRequest;return streamItemNames.map((name=>({args:args,argUrl:activity.argUrl,activityType:activityType,name:name,pageUrl:activity.pageUrl,timestamp:timestamp,webRequestInfo:webRequestInfo,expanded:false})))}class ActivityLogStreamElement extends CrLitElement{static get is(){return"activity-log-stream"}static get styles(){return getCss$G()}render(){return getHtml$F.bind(this)()}static get properties(){return{extensionId:{type:String},delegate:{type:Object},isStreamOn_:{type:Boolean},activityStream_:{type:Array},filteredActivityStream_:{type:Array},lastSearch_:{type:String}}}#extensionId_accessor_storage="";get extensionId(){return this.#extensionId_accessor_storage}set extensionId(value){this.#extensionId_accessor_storage=value}#delegate_accessor_storage=new DummyActivityLogEventDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#isStreamOn__accessor_storage=false;get isStreamOn_(){return this.#isStreamOn__accessor_storage}set isStreamOn_(value){this.#isStreamOn__accessor_storage=value}#activityStream__accessor_storage=[];get activityStream_(){return this.#activityStream__accessor_storage}set activityStream_(value){this.#activityStream__accessor_storage=value}#filteredActivityStream__accessor_storage=[];get filteredActivityStream_(){return this.#filteredActivityStream__accessor_storage}set filteredActivityStream_(value){this.#filteredActivityStream__accessor_storage=value}#lastSearch__accessor_storage="";get lastSearch_(){return this.#lastSearch__accessor_storage}set lastSearch_(value){this.#lastSearch__accessor_storage=value}listenerInstance_=()=>{};connectedCallback(){super.connectedCallback();this.listenerInstance_=this.extensionActivityListener_.bind(this);this.startStream()}willUpdate(changedProperties){super.willUpdate(changedProperties);const changedPrivateProperties=changedProperties;if(changedPrivateProperties.has("activityStream_")||changedPrivateProperties.has("lastSearch_")){this.filteredActivityStream_=this.computeFilteredActivityStream_()}}onClearStreamClick_(){this.clearStream()}clearStream(){this.activityStream_=[]}startStream(){if(this.isStreamOn_){return}this.isStreamOn_=true;this.delegate.getOnExtensionActivity().addListener(this.listenerInstance_)}pauseStream(){if(!this.isStreamOn_){return}this.delegate.getOnExtensionActivity().removeListener(this.listenerInstance_);this.isStreamOn_=false}onToggleButtonClick_(){if(this.isStreamOn_){this.pauseStream()}else{this.startStream()}}isStreamEmpty_(){return this.activityStream_.length===0}isFilteredStreamEmpty_(){return this.filteredActivityStream_.length===0}shouldShowEmptySearchMessage_(){return!this.isStreamEmpty_()&&this.isFilteredStreamEmpty_()}extensionActivityListener_(activity){if(activity.extensionId!==this.extensionId){return}this.activityStream_=[...this.activityStream_,...processActivityForStream(activity)]}onSearchChanged_(e){const searchTerm=e.detail.replace(/\s+/g,"").toLowerCase();if(searchTerm===this.lastSearch_){return}this.lastSearch_=searchTerm}computeFilteredActivityStream_(){if(!this.lastSearch_){return this.activityStream_.slice()}const propNames=["name","pageUrl","activityType"];return this.activityStream_.filter((act=>propNames.some((prop=>{const value=act[prop];return value&&value.toLowerCase().includes(this.lastSearch_)}))))}}customElements.define(ActivityLogStreamElement.is,ActivityLogStreamElement);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{focusByKeyboard_=true;classList_;constructor(doc){this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(e=>this.onEvent_(true,e)),true);doc.addEventListener("mousedown",(e=>this.onEvent_(false,e)),true);this.updateVisibility()}onEvent_(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}if(e instanceof KeyboardEvent&&e.repeat){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIVE_CLASS="focus-row-active";class FocusRow{root;delegate;eventTracker=new EventTracker;boundary_;constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){const withFocusable=element;if(withFocusable.getFocusableElement){return withFocusable.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(_sampleElement){const focusable=this.getFirstFocusable();assert(focusable);return focusable}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(type){const element=this.getFocusableElements().find((el=>!type||el.getAttribute("focus-type")===type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}const target=e.currentTarget;if(!target.disabled){target.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}let instance$I=null;function getCss$F(){return instance$I||(instance$I=[...[],css`:host{--cr-hairline:1px solid var(--color-menu-separator,var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,var(--cr-fallback-color-on-surface))}:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:none;overflow:var(--cr-action-menu-overflow,auto);padding:0;position:absolute}:host([use-unbounded]) dialog{max-height:none;position:fixed}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:none;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,0.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:none}:host dialog[open] ::slotted(.dropdown-item){user-select:auto}:host ::slotted(.dropdown-item:focus-visible){outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{outline:none;padding:var(--cr-action-menu-padding,8px 0)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$E(){return html`
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}"
    @beforetoggle="${this.onDialogBeforetoggle_}"
    ?unbounded="${this.useUnbounded_}" role="application"
    aria-roledescription="${this.roleDescription||nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1"
      aria-label="${this.accessibilityLabel||nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function hasFocusoutOutside(e,element){return!element||!element.contains(e.relatedTarget)}function isUnboundedSupported(){return"showUnboundedElement"in HTMLElement.prototype}var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max,unbounded=false){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=start-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break;default:assertNotReachedCase()}if(unbounded){const isForward=anchorAlignment===AnchorAlignment.AFTER_END||anchorAlignment===AnchorAlignment.AFTER_START;const isBackward=anchorAlignment===AnchorAlignment.BEFORE_START||anchorAlignment===AnchorAlignment.BEFORE_END;const spaceForward=max-end;const spaceBackward=start-min;if(isForward&&Number.isFinite(max)&&startPoint+menuLength>max){if(spaceBackward>=menuLength||spaceBackward>spaceForward){startPoint=anchorAlignment===AnchorAlignment.AFTER_END?start-menuLength:end-menuLength}}else if(isBackward&&Number.isFinite(min)&&startPoint<min){if(spaceForward>=menuLength||spaceForward>spaceBackward){startPoint=anchorAlignment===AnchorAlignment.BEFORE_START?end:start}}else if(anchorAlignment===AnchorAlignment.CENTER){if(Number.isFinite(max)&&startPoint+menuLength>max){startPoint=max-menuLength}if(Number.isFinite(min)&&startPoint<min){startPoint=min}}return startPoint}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends CrLitElement{static get is(){return"cr-action-menu"}static get styles(){return getCss$F()}render(){return getHtml$E.bind(this)()}static get properties(){return{accessibilityLabel:{type:String},autoReposition:{type:Boolean},autoCloseOnFocusout:{type:Boolean},open:{type:Boolean,notify:true},nonModal:{type:Boolean,reflect:true},roleDescription:{type:String},useUnbounded_:{type:Boolean}}}#accessibilityLabel_accessor_storage;get accessibilityLabel(){return this.#accessibilityLabel_accessor_storage}set accessibilityLabel(value){this.#accessibilityLabel_accessor_storage=value}#autoReposition_accessor_storage=false;get autoReposition(){return this.#autoReposition_accessor_storage}set autoReposition(value){this.#autoReposition_accessor_storage=value}#autoCloseOnFocusout_accessor_storage=false;get autoCloseOnFocusout(){return this.#autoCloseOnFocusout_accessor_storage}set autoCloseOnFocusout(value){this.#autoCloseOnFocusout_accessor_storage=value}#open_accessor_storage=false;get open(){return this.#open_accessor_storage}set open(value){this.#open_accessor_storage=value}#roleDescription_accessor_storage;get roleDescription(){return this.#roleDescription_accessor_storage}set roleDescription(value){this.#roleDescription_accessor_storage=value}#nonModal_accessor_storage=false;get nonModal(){return this.#nonModal_accessor_storage}set nonModal(value){this.#nonModal_accessor_storage=value}#useUnbounded__accessor_storage=false;get useUnbounded_(){return this.#useUnbounded__accessor_storage}set useUnbounded_(value){this.#useUnbounded__accessor_storage=value}async setUnbounded(){if(!isUnboundedSupported()){console.warn("CrActionMenu: Unbounded Element API is not supported in this "+"environment.");return false}this.useUnbounded_=true;await this.updateComplete;return true}boundClose_=null;resizeObserver_=null;hasMousemoveListener_=false;anchorElement_=null;lastConfig_=null;disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}firstUpdated(){this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_);this.addEventListener("focusout",this.onFocusout_.bind(this))}getDialog(){return this.$.dialog}getUnboundedDialog_(){return this.$.dialog}showUnboundedDialog_(){this.getUnboundedDialog_().showUnboundedElement().then((()=>{this.fire("unbounded-shown")})).catch((err=>this.handleUnboundedError_("showUnboundedElement",err)))}hideUnboundedDialog_(){this.getUnboundedDialog_().hideUnboundedElement().catch((err=>this.handleUnboundedError_("hideUnboundedElement",err)))}handleUnboundedError_(operation,err){if(err instanceof DOMException&&err.name==="AbortError"){return}console.error(`${operation} failed:`,err);if(operation==="showUnboundedElement"){this.fire("unbounded-show-error")}}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onFocusout_(e){if(this.autoCloseOnFocusout&&hasFocusoutOutside(e,this)){this.close()}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire("close")}onClick_(e){if(e.composedPath()[0]===this.$.dialog){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if((e.key!=="Enter"||isMac&&e.ctrlKey)&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}focusElement_(el){el.focus({preventScroll:this.useUnbounded_})}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));this.focusElement_(item||this.$.wrapper)}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}this.focusElement_(options[index])}close(unboundedAlreadyDismissed=false){if(!this.open){return}this.open=false;if(this.useUnbounded_&&!unboundedAlreadyDismissed){this.hideUnboundedDialog_()}this.removeListeners_();this.$.dialog.close();if(this.anchorElement_){assert(this.anchorElement_);focusWithoutInk(this.anchorElement_);this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.focusElement_(this.$.wrapper)}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.nonModal?this.$.dialog.show():this.$.dialog.showModal();this.open=true;if(this.useUnbounded_){this.positionDialog_(config);this.showUnboundedDialog_()}else{config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config))}doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{this.focusElement_(firstSelectableItem)}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);if(this.useUnbounded_){const screenLeft=window.screenX;const screenTop=window.screenY;const screenWidth=window.screen.availWidth;const screenHeight=window.screen.availHeight;if(config.minX===undefined){c.minX=-screenLeft}if(config.minY===undefined){c.minY=-screenTop}if(config.maxX===undefined){c.maxX=screenWidth-screenLeft}if(config.maxY===undefined){c.maxY=screenHeight-screenTop}}const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX,this.useUnbounded_);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY,this.useUnbounded_);this.$.dialog.style.top=menuTop+"px"}onSlotchange_(){for(const node of this.$.contentNode.assignedElements({flatten:true})){if(node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}}onDialogBeforetoggle_(e){if(!this.useUnbounded_){return}const toggleEvent=e;if(toggleEvent.newState==="closed"&&this.open){this.close(true)}}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);let instance$H=null;function getCss$E(){return instance$H||(instance$H=[...[getCss$12(),getCss$11(),getCss$N()],css`:host{border-top:var(--cr-separator-line);display:block;padding-bottom:8px;padding-inline-end:8px;padding-inline-start:var(--cr-section-padding);padding-top:8px}#activity-item-main-row{align-items:center;display:flex;flex-direction:row;min-height:calc(var(--cr-section-min-height) - var(--separator-gap))}#activity-item-main-row .separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}#activity-item-main-row cr-expand-button{margin-inline-end:6px}#activity-call-and-count{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-count-width)}#activity-delete{margin:0}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-count{flex:0 var(--activity-count-width);text-align:end}.page-url{display:flex;flex-direction:row;margin-bottom:10px;max-width:var(--activity-log-call-and-count-width)}.page-url-link{flex-grow:1;margin-inline-end:20px;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$D(){return html`<!--_html_template_start_-->
<div ?actionable="${this.isExpandable_}" id="activity-item-main-row"
    @click="${this.onExpandClick_}">
  <div id="activity-call-and-count">
    <span id="activity-type">${this.data.activityType}</span>
    <span id="activity-key" title="${this.data.key}">${this.data.key}</span>
    <span id="activity-count">${this.data.count}</span>
  </div>
  <cr-expand-button no-hover ?expanded="${this.expanded_}"
      ?hidden="${!this.isExpandable_}"
      @expanded-changed="${this.onExpandedChanged_}">
  </cr-expand-button>
  <div class="separator" ?hidden="${!this.isExpandable_}"></div>
  <cr-icon-button id="activity-delete" class="icon-delete-gray"
      aria-describedby="api-call" aria-label="$i18n{clearEntry}"
      @click="${this.onDeleteClick_}">
  </cr-icon-button>
</div>
<div id="page-url-list" ?hidden="${!this.expanded_}">
  ${this.getPageUrls_().map((item=>html`
    <div class="page-url">
      <a class="page-url-link" href="${item.page}" target="_blank"
          title="${item.page}">
        ${item.page}
      </a>
      <span class="page-url-count" ?hidden="${!this.shouldShowPageUrlCount_()}">
        ${item.count}
      </span>
    </div>
  `))}
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActivityLogHistoryItemElement extends CrLitElement{static get is(){return"activity-log-history-item"}static get styles(){return getCss$E()}render(){return getHtml$D.bind(this)()}static get properties(){return{data:{type:Object},expanded_:{type:Boolean},isExpandable_:{type:Boolean}}}#data_accessor_storage={activityIds:new Set,key:"",count:0,activityType:chrome.activityLogPrivate.ExtensionActivityFilter.API_CALL,countsByUrl:new Map,expanded:false};get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#expanded__accessor_storage=false;get expanded_(){return this.#expanded__accessor_storage}set expanded_(value){this.#expanded__accessor_storage=value}#isExpandable__accessor_storage=false;get isExpandable_(){return this.#isExpandable__accessor_storage}set isExpandable_(value){this.#isExpandable__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("data")){this.isExpandable_=this.data.countsByUrl.size>0;this.expanded_=this.data.expanded}}expand(expanded){if(this.isExpandable_){this.expanded_=expanded}}getPageUrls_(){return Array.from(this.data.countsByUrl.entries()).map((e=>({page:e[0],count:e[1]}))).sort((function(a,b){if(a.count!==b.count){return b.count-a.count}return a.page<b.page?-1:a.page>b.page?1:0}))}onDeleteClick_(e){e.stopPropagation();this.fire("delete-activity-log-item",Array.from(this.data.activityIds.values()))}onExpandClick_(){if(this.isExpandable_){this.expanded_=!this.expanded_}}onExpandedChanged_(e){this.expanded_=e.detail.value}shouldShowPageUrlCount_(){return this.data.countsByUrl.size>1}}customElements.define(ActivityLogHistoryItemElement.is,ActivityLogHistoryItemElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PromiseResolver{resolve_=()=>{};reject_=()=>{};isFulfilled_=false;promise_;constructor(){this.promise_=new Promise(((resolve,reject)=>{this.resolve_=resolution=>{resolve(resolution);this.isFulfilled_=true};this.reject_=reason=>{reject(reason);this.isFulfilled_=true}}))}get isFulfilled(){return this.isFulfilled_}get promise(){return this.promise_}get resolve(){return this.resolve_}get reject(){return this.reject_}}let instance$G=null;function getCss$D(){return instance$G||(instance$G=[...[getCss$N()],css`:host{--activity-log-call-and-count-width:514px;--activity-type-width:85px;--activity-count-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}cr-icon-button{margin:0}.activity-table-headings{width:var(--activity-log-call-and-count-width)}#activity-list{overflow-y:auto}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-count{flex:0 var(--activity-count-width);text-align:end}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$C(){return html`<!--_html_template_start_-->
<div class="activity-subpage-header">
  <cr-search-field label="$i18n{activityLogSearchLabel}"
      @search-changed="${this.onSearchChanged_}">
  </cr-search-field>
  <cr-button class="clear-activities-button"
      @click="${this.onClearActivitiesClick_}">
    $i18n{clearActivities}
  </cr-button>
  <cr-icon-button id="more-actions" iron-icon="cr:more-vert"
      title="$i18n{activityLogMoreActionsLabel}"
      @click="${this.onMoreActionsClick_}">
  </cr-icon-button>
  <cr-action-menu role-description="$i18n{menu}">
    <button id="expand-all-button" class="dropdown-item"
        @click="${this.onExpandAllClick_}">
      $i18n{activityLogExpandAll}
    </button>
    <button id="collapse-all-button" class="dropdown-item"
        @click="${this.onCollapseAllClick_}">
      $i18n{activityLogCollapseAll}
    </button>
    <button id="export-button" class="dropdown-item"
        @click="${this.onExportClick_}">
      $i18n{activityLogExportHistory}
    </button>
  </cr-action-menu>
</div>
<div id="loading-activities" class="activity-message"
    ?hidden="${!this.shouldShowLoadingMessage_()}">
  <span>$i18n{loadingActivities}</span>
</div>
<div id="no-activities" class="activity-message"
    ?hidden="${!this.shouldShowEmptyActivityLogMessage_()}">
  <span>$i18n{noActivities}</span>
</div>
<div class="activity-table-headings" ?hidden="${!this.shouldShowActivities_()}">
  <span id="activity-type">$i18n{activityLogTypeColumn}</span>
  <span id="activity-key">$i18n{activityLogNameColumn}</span>
  <span id="activity-count">$i18n{activityLogCountColumn}</span>
</div>
<div id="activity-list" ?hidden="${!this.shouldShowActivities_()}">
  ${this.activityData_.map((item=>html`
    <activity-log-history-item .data="${item}"></activity-log-history-item>
  `))}
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ActivityLogPageState;(function(ActivityLogPageState){ActivityLogPageState["LOADING"]="loading";ActivityLogPageState["LOADED"]="loaded"})(ActivityLogPageState||(ActivityLogPageState={}));class DummyActivityLogDelegate{getExtensionActivityLog(_extensionId){return Promise.resolve({activities:[]})}getFilteredExtensionActivityLog(_extensionId,_searchTerm){return Promise.resolve({activities:[]})}deleteActivitiesById(_activityIds){return Promise.resolve()}deleteActivitiesFromExtension(_extensionId){return Promise.resolve()}downloadActivities(_rawActivityData,_fileName){}}function getActivityGroupKeysForContentScript(activity){assert(activity.activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT);if(!activity.args){return[]}const parsedArgs=JSON.parse(activity.args);assert(Array.isArray(parsedArgs),"Invalid API data.");return parsedArgs}function getActivityGroupKeysForWebRequest(activity){assert(activity.activityType===chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST);const apiCall=activity.apiCall;const other=activity.other;if(!other||!other.webRequest){return[apiCall]}const webRequest=JSON.parse(other.webRequest);assert(typeof webRequest==="object","Invalid API data");return Object.keys(webRequest).length===0?[apiCall]:Object.keys(webRequest).map((field=>`${apiCall} (${field})`))}function groupActivities(activityData){const groupedActivities=new Map;for(const activity of activityData){const activityId=activity.activityId;const activityType=activity.activityType;const count=activity.count;const pageUrl=activity.pageUrl;const isContentScript=activityType===chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;const isWebRequest=activityType===chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST;let activityGroupKeys=[activity.apiCall];if(isContentScript){activityGroupKeys=getActivityGroupKeysForContentScript(activity)}else if(isWebRequest){activityGroupKeys=getActivityGroupKeysForWebRequest(activity)}for(const key of activityGroupKeys){if(!groupedActivities.has(key)){const activityGroup={activityIds:new Set([activityId]),key:key,count:count,activityType:activityType,countsByUrl:pageUrl?new Map([[pageUrl,count]]):new Map,expanded:false};groupedActivities.set(key,activityGroup)}else{const activityGroup=groupedActivities.get(key);activityGroup.activityIds.add(activityId);activityGroup.count+=count;if(pageUrl){const currentCount=activityGroup.countsByUrl.get(pageUrl)||0;activityGroup.countsByUrl.set(pageUrl,currentCount+count)}}}}return groupedActivities}function sortActivitiesByCallCount(groupedActivities){return Array.from(groupedActivities.values()).sort(((a,b)=>{if(a.count!==b.count){return b.count-a.count}if(a.key<b.key){return-1}if(a.key>b.key){return 1}return 0}))}class ActivityLogHistoryElement extends CrLitElement{static get is(){return"activity-log-history"}static get styles(){return getCss$D()}render(){return getHtml$C.bind(this)()}static get properties(){return{extensionId:{type:String},delegate:{type:Object},activityData_:{type:Array},pageState_:{type:String},lastSearch_:{type:String}}}#extensionId_accessor_storage="";get extensionId(){return this.#extensionId_accessor_storage}set extensionId(value){this.#extensionId_accessor_storage=value}#delegate_accessor_storage=new DummyActivityLogDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#activityData__accessor_storage=[];get activityData_(){return this.#activityData__accessor_storage}set activityData_(value){this.#activityData__accessor_storage=value}#pageState__accessor_storage=ActivityLogPageState.LOADING;get pageState_(){return this.#pageState__accessor_storage}set pageState_(value){this.#pageState__accessor_storage=value}#lastSearch__accessor_storage="";get lastSearch_(){return this.#lastSearch__accessor_storage}set lastSearch_(value){this.#lastSearch__accessor_storage=value}dataFetchedResolver_=null;rawActivities_="";connectedCallback(){super.connectedCallback();this.dataFetchedResolver_=new PromiseResolver;this.refreshActivities_()}firstUpdated(){this.addEventListener("delete-activity-log-item",(e=>this.deleteItem_(e)))}setPageStateForTest(state){this.pageState_=state}whenDataFetched(){return this.dataFetchedResolver_.promise}shouldShowEmptyActivityLogMessage_(){return this.pageState_===ActivityLogPageState.LOADED&&this.activityData_.length===0}shouldShowLoadingMessage_(){return this.pageState_===ActivityLogPageState.LOADING}shouldShowActivities_(){return this.pageState_===ActivityLogPageState.LOADED&&this.activityData_.length>0}onClearActivitiesClick_(){this.delegate.deleteActivitiesFromExtension(this.extensionId).then((()=>{this.processActivities_([])}))}onMoreActionsClick_(){const moreButton=this.shadowRoot.querySelector("cr-icon-button");assert(moreButton);this.shadowRoot.querySelector("cr-action-menu").showAt(moreButton)}expandItems_(expanded){const items=this.shadowRoot.querySelectorAll("activity-log-history-item");items.forEach((item=>item.expand(expanded)));this.shadowRoot.querySelector("cr-action-menu").close()}onExpandAllClick_(){this.expandItems_(true)}onCollapseAllClick_(){this.expandItems_(false)}onExportClick_(){const fileName=`exported_activity_log_${this.extensionId}.json`;this.delegate.downloadActivities(this.rawActivities_,fileName)}deleteItem_(e){const activityIds=e.detail;this.delegate.deleteActivitiesById(activityIds).then((()=>{this.refreshActivities_()}))}processActivities_(activityData){this.pageState_=ActivityLogPageState.LOADED;activityData.sort(((a,b)=>a.time-b.time));this.rawActivities_=JSON.stringify(activityData);this.activityData_=sortActivitiesByCallCount(groupActivities(activityData));if(!this.dataFetchedResolver_.isFulfilled){this.dataFetchedResolver_.resolve()}}refreshActivities_(){if(this.lastSearch_===""){return this.getActivityLog_()}return this.getFilteredActivityLog_(this.lastSearch_)}getActivityLog_(){this.pageState_=ActivityLogPageState.LOADING;return this.delegate.getExtensionActivityLog(this.extensionId).then((result=>{this.processActivities_(result.activities)}))}getFilteredActivityLog_(searchTerm){this.pageState_=ActivityLogPageState.LOADING;return this.delegate.getFilteredExtensionActivityLog(this.extensionId,searchTerm).then((result=>{this.processActivities_(result.activities)}))}onSearchChanged_(e){const searchTerm=e.detail.replace(/\s+/g,"");if(searchTerm===this.lastSearch_){return}this.lastSearch_=searchTerm;this.refreshActivities_()}}customElements.define(ActivityLogHistoryElement.is,ActivityLogHistoryElement);let instance$F=null;function getCss$C(){return instance$F||(instance$F=[...[getCss$11(),getCss$N()],css`#clear-activities-button{margin-inline-start:8px}#closeButton{margin-inline-end:16px}#icon{height:24px;margin-inline-end:12px;width:24px}cr-tabs{--cr-tabs-font-size:inherit;--cr-tabs-height:40px;border-bottom:1px solid var(--google-grey-300)}.page-content{display:flex;flex-direction:column;padding-bottom:0}cr-page-selector{flex:1;position:relative}activity-log-history,activity-log-stream{bottom:0;position:absolute;top:0;width:100%}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$B(){return html`<!--_html_template_start_-->
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton"
          aria-label="$i18n{back}" @click="${this.onCloseButtonClick_}">
      </cr-icon-button>
      ${!this.isPlaceholder_()?html`
        <img id="icon" src="${this.getExtensionIconUrl_()}" alt="">
      `:""}
      <div class="cr-title-text">
        ${this.getActivityLogHeading_()}
      </div>
    </div>
    <cr-tabs id="tabs" selected="${this.selectedSubpage_}"
        @selected-changed="${this.onTabsSelectedChanged_}"
        .tabNames="${this.tabNames_}">
    </cr-tabs>
    <cr-page-selector selected="${this.selectedSubpage_}">
      <div>
        ${this.isHistoryTabSelected_()?html`
          <activity-log-history extension-id="${this.extensionInfo.id}"
              .delegate="${this.delegate}">
          </activity-log-history>
        `:""}
      </div>
      <div>
        <activity-log-stream extension-id="${this.extensionInfo.id}"
            .delegate="${this.delegate}"
            ?hidden="${!this.isStreamTabSelected_()}">
        </activity-log-stream>
      </div>
    </cr-page-selector>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsActivityLogElementBase=I18nMixinLit(CrLitElement);class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase{static get is(){return"extensions-activity-log"}static get styles(){return getCss$C()}render(){return getHtml$B.bind(this)()}static get properties(){return{extensionInfo:{type:Object},delegate:{type:Object},selectedSubpage_:{type:Number},tabNames_:{type:Array}}}#extensionInfo_accessor_storage={isPlaceholder:true,id:""};get extensionInfo(){return this.#extensionInfo_accessor_storage}set extensionInfo(value){this.#extensionInfo_accessor_storage=value}#delegate_accessor_storage=new DummyActivityLogDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#selectedSubpage__accessor_storage=NONE_SELECTED;get selectedSubpage_(){return this.#selectedSubpage__accessor_storage}set selectedSubpage_(value){this.#selectedSubpage__accessor_storage=value}#tabNames__accessor_storage=[loadTimeData.getString("activityLogHistoryTabHeading"),loadTimeData.getString("activityLogStreamTabHeading")];get tabNames_(){return this.#tabNames__accessor_storage}set tabNames_(value){this.#tabNames__accessor_storage=value}firstUpdated(){this.addEventListener("view-enter-start",this.onViewEnterStart_);this.addEventListener("view-exit-finish",this.onViewExitFinish_)}updated(changedProperties){super.updated(changedProperties);const changedPrivateProperties=changedProperties;if(changedPrivateProperties.has("selectedSubpage_")){let oldValue=changedPrivateProperties.get("selectedSubpage_");if(oldValue===undefined){oldValue=NONE_SELECTED}this.onSelectedSubpageChanged_(this.selectedSubpage_,oldValue)}}isPlaceholder_(){return this.extensionInfo.isPlaceholder}getExtensionIconUrl_(){if(this.isPlaceholder_()){return""}return this.extensionInfo.iconUrl}async onViewEnterStart_(){this.selectedSubpage_=0;await this.updateComplete;focusWithoutInk(this.$.closeButton)}onViewExitFinish_(){this.selectedSubpage_=NONE_SELECTED;const activityLogStream=this.shadowRoot.querySelector("activity-log-stream");if(activityLogStream){activityLogStream.clearStream()}}getActivityLogHeading_(){const headingName=this.extensionInfo.isPlaceholder?this.i18n("missingOrUninstalledExtension"):this.extensionInfo.name;return this.i18n("activityLogPageHeading",headingName)}isHistoryTabSelected_(){return this.selectedSubpage_===0}isStreamTabSelected_(){return this.selectedSubpage_===1}onTabsSelectedChanged_(e){this.selectedSubpage_=e.detail.value}onSelectedSubpageChanged_(newTab,oldTab){const activityLogStream=this.shadowRoot.querySelector("activity-log-stream");if(activityLogStream){if(newTab===1){activityLogStream.startStream()}else if(oldTab===1){activityLogStream.pauseStream()}}}onCloseButtonClick_(){if(this.extensionInfo.isPlaceholder){navigation.navigateTo({page:Page.LIST})}else{navigation.navigateTo({page:Page.DETAILS,extensionId:this.extensionInfo.id})}}}customElements.define(ExtensionsActivityLogElement.is,ExtensionsActivityLogElement);let instance$E=null;function getCss$B(){return instance$E||(instance$E=[...[getCss$P(),getCss$11(),getCss$19()],css`:host{box-sizing:border-box;flex:1;font-family:inherit;font-size:100%;line-height:154%;min-height:var(--cr-section-min-height);padding:0}:host(:not([embedded])){padding:0 var(--cr-section-padding)}#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,var(--google-grey-700));display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}@media (prefers-color-scheme:dark){#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,var(--google-grey-500))}}#labelWrapper{flex:1;flex-basis:0.000000001px;padding-bottom:var(--cr-section-vertical-padding);padding-top:var(--cr-section-vertical-padding);text-align:start}#label,#subLabel{display:flex}#buttonAriaDescription{clip:rect(0,0,0,0);display:block;position:fixed}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$A(){return html`
${this.startIcon?html`
  <cr-icon id="startIcon" .icon="${this.startIcon}" aria-hidden="true">
  </cr-icon>
`:""}
<div id="labelWrapper" ?hidden="${this.shouldHideLabelWrapper_()}">
  <div id="label" aria-hidden="${!this.ariaShowLabel}">
    ${this.label}
    <slot name="label"></slot>
  </div>
  <div id="subLabel" class="cr-secondary-text"
      aria-hidden="${!this.ariaShowSublabel}">
    ${this.subLabel}
    <slot name="sub-label"></slot>
  </div>
</div>
<slot></slot>
<div id="buttonAriaDescription" aria-hidden="true">
  ${this.getButtonAriaDescription_()}
</div>
<slot name="icon-label"></slot>
<cr-icon-button id="icon" iron-icon="${this.getIcon_()}" role="link" part="icon"
    aria-roledescription="${this.roleDescription||nothing}"
    aria-describedby="buttonAriaDescription" aria-labelledby="label subLabel"
    ?disabled="${this.disabled}">
</cr-icon-button>`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLinkRowElement extends CrLitElement{static get is(){return"cr-link-row"}static get styles(){return getCss$B()}render(){return getHtml$A.bind(this)()}static get properties(){return{ariaShowLabel:{type:Boolean,reflect:true},ariaShowSublabel:{type:Boolean,reflect:true},startIcon:{type:String},label:{type:String},subLabel:{type:String},disabled:{type:Boolean,reflect:true},external:{type:Boolean},usingSlottedLabel:{type:Boolean},roleDescription:{type:String},buttonAriaDescription:{type:String}}}#ariaShowLabel_accessor_storage=false;get ariaShowLabel(){return this.#ariaShowLabel_accessor_storage}set ariaShowLabel(value){this.#ariaShowLabel_accessor_storage=value}#ariaShowSublabel_accessor_storage=false;get ariaShowSublabel(){return this.#ariaShowSublabel_accessor_storage}set ariaShowSublabel(value){this.#ariaShowSublabel_accessor_storage=value}#startIcon_accessor_storage="";get startIcon(){return this.#startIcon_accessor_storage}set startIcon(value){this.#startIcon_accessor_storage=value}#label_accessor_storage="";get label(){return this.#label_accessor_storage}set label(value){this.#label_accessor_storage=value}#subLabel_accessor_storage="";get subLabel(){return this.#subLabel_accessor_storage}set subLabel(value){this.#subLabel_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#external_accessor_storage=false;get external(){return this.#external_accessor_storage}set external(value){this.#external_accessor_storage=value}#usingSlottedLabel_accessor_storage=false;get usingSlottedLabel(){return this.#usingSlottedLabel_accessor_storage}set usingSlottedLabel(value){this.#usingSlottedLabel_accessor_storage=value}#roleDescription_accessor_storage;get roleDescription(){return this.#roleDescription_accessor_storage}set roleDescription(value){this.#roleDescription_accessor_storage=value}#buttonAriaDescription_accessor_storage;get buttonAriaDescription(){return this.#buttonAriaDescription_accessor_storage}set buttonAriaDescription(value){this.#buttonAriaDescription_accessor_storage=value}focus(){this.$.icon.focus()}shouldHideLabelWrapper_(){return!(this.label||this.usingSlottedLabel)}getIcon_(){return this.external?"cr:open-in-new":"cr:chevron-right"}getButtonAriaDescription_(){return this.buttonAriaDescription??(this.external?loadTimeData.getString("opensInNewTab"):"")}}customElements.define(CrLinkRowElement.is,CrLinkRowElement);let instance$D=null;function getCss$A(){return instance$D||(instance$D=[...[],css`.cr-scrollable{anchor-name:--cr-scrollable;anchor-scope:--cr-scrollable;container-type:scroll-state;overflow:auto}.cr-scrollable-top,.cr-scrollable-top-shadow,.cr-scrollable-bottom,.cr-scrollable-bottom-shadow{display:none;position:fixed;position-anchor:--cr-scrollable;left:anchor(left);width:anchor-size(width);pointer-events:none;&:where(.force-on){display:block}}.cr-scrollable-top{top:anchor(top);border-top:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:top){display:block}}.cr-scrollable-bottom{bottom:anchor(bottom);border-bottom:1px solid var(--cr-scrollable-border-color);@container scroll-state(scrollable:bottom){display:block}}.cr-scrollable-top-shadow,.cr-scrollable-bottom-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);display:block;height:8px;opacity:0;top:anchor(top);transition:opacity 500ms;z-index:1;&:where(.force-on){opacity:1}}.cr-scrollable-top-shadow{@container scroll-state(scrollable:top){opacity:1}}.cr-scrollable-bottom-shadow{top:auto;bottom:anchor(bottom);transform:scale(-1);@container scroll-state(scrollable:bottom){opacity:1}}`])}let instance$C=null;function getCss$z(){return instance$C||(instance$C=[...[getCss$19(),getCss$12(),getCss$A()],css`dialog{background-color:var(--cr-dialog-background-color,white);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.24);color:inherit;line-height:20px;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}:host-context([webui-refresh-2026]){dialog{background-color:var(--cr-dialog-background-color,var(--color-webui-dialog-background))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,0.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:none}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}@container style(--cr-dialog-body-border-top){.cr-scrollable-top{display:block;border-top:var(--cr-dialog-body-border-top)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$z(){return html`
<dialog id="dialog" @close="${this.onNativeDialogClose_}"
    @cancel="${this.onNativeDialogCancel_}" part="dialog"
    aria-labelledby="title"
    aria-description="${this.ariaDescriptionText||nothing}"
    closedby="${this.noCancel?"none":nothing}">
  <!-- This wrapper is necessary, such that the "pulse" animation is not
    erroneously played when the user clicks on the outer-most scrollbar. -->
  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      ${this.showCloseButton?html`
        <cr-icon-button id="close" class="icon-clear"
            aria-label="${this.closeText||nothing}"
            title="${this.closeText||nothing}" @click="${this.onCloseClick_}"
            @keypress="${this.onCloseKeypress_}">
        </cr-icon-button>
      `:""}
    </div>
    <slot name="header"></slot>
    <div class="body-container cr-scrollable" id="container"
        part="body-container">
      <div class="cr-scrollable-top"></div>
      <slot name="body"></slot>
      <div class="cr-scrollable-bottom"></div>
    </div>
    <slot name="button-container"></slot>
    <slot name="footer"></slot>
  </div>
</dialog>`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDialogElement extends CrLitElement{static get is(){return"cr-dialog"}static get styles(){return getCss$z()}render(){return getHtml$z.bind(this)()}static get properties(){return{open:{type:Boolean,reflect:true},closeText:{type:String},ignorePopstate:{type:Boolean},ignoreEnterKey:{type:Boolean},consumeKeydownEvent:{type:Boolean},noCancel:{type:Boolean},showCloseButton:{type:Boolean},showOnAttach:{type:Boolean},ariaDescriptionText:{type:String}}}#closeText_accessor_storage;get closeText(){return this.#closeText_accessor_storage}set closeText(value){this.#closeText_accessor_storage=value}#consumeKeydownEvent_accessor_storage=false;get consumeKeydownEvent(){return this.#consumeKeydownEvent_accessor_storage}set consumeKeydownEvent(value){this.#consumeKeydownEvent_accessor_storage=value}#ignoreEnterKey_accessor_storage=false;get ignoreEnterKey(){return this.#ignoreEnterKey_accessor_storage}set ignoreEnterKey(value){this.#ignoreEnterKey_accessor_storage=value}#ignorePopstate_accessor_storage=false;get ignorePopstate(){return this.#ignorePopstate_accessor_storage}set ignorePopstate(value){this.#ignorePopstate_accessor_storage=value}#noCancel_accessor_storage=false;get noCancel(){return this.#noCancel_accessor_storage}set noCancel(value){this.#noCancel_accessor_storage=value}#open_accessor_storage=false;get open(){return this.#open_accessor_storage}set open(value){this.#open_accessor_storage=value}#showCloseButton_accessor_storage=false;get showCloseButton(){return this.#showCloseButton_accessor_storage}set showCloseButton(value){this.#showCloseButton_accessor_storage=value}#showOnAttach_accessor_storage=false;get showOnAttach(){return this.#showOnAttach_accessor_storage}set showOnAttach(value){this.#showOnAttach_accessor_storage=value}#ariaDescriptionText_accessor_storage;get ariaDescriptionText(){return this.#ariaDescriptionText_accessor_storage}set ariaDescriptionText(value){this.#ariaDescriptionText_accessor_storage=value}mutationObserver_=null;boundKeydown_=null;tracker_=new EventTracker;connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.addKeydownListener_()}else{this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}this.tracker_.add(window,"popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}))}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}this.tracker_.removeAll()}firstUpdated(){if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}async showModal(){if(this.showOnAttach){const element=this.querySelector("[autofocus]");if(element&&element instanceof CrLitElement&&!element.shadowRoot){element.ensureInitialRender()}}this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;await this.updateComplete;this.fire("cr-dialog-open")}onCloseClick_(){this.cancel()}cancel(){this.fire("cancel");this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.fire("close")}async onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}this.open=false;await this.updateComplete;this.fire("cancel")}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"||el.tagName==="LEO-INPUT"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$y(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">${this.getDialogTitle_()}</div>
  <div class="matching-restricted-sites-warning" slot="body">
    <cr-icon icon="cr:info"></cr-icon>
    <span>${this.getDialogWarning_()}</span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" @click="${this.onSubmitClick_}">
      $i18n{matchingRestrictedSitesAllow}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsRestrictedSitesDialogElementBase=I18nMixinLit(CrLitElement);class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase{static get is(){return"extensions-restricted-sites-dialog"}static get styles(){return getCss$N()}render(){return getHtml$y.bind(this)()}static get properties(){return{firstRestrictedSite:{type:String}}}#firstRestrictedSite_accessor_storage="";get firstRestrictedSite(){return this.#firstRestrictedSite_accessor_storage}set firstRestrictedSite(value){this.#firstRestrictedSite_accessor_storage=value}isOpen(){return this.$.dialog.open}wasConfirmed(){return this.$.dialog.getNative().returnValue==="success"}onCancelClick_(){this.$.dialog.cancel()}onSubmitClick_(){this.$.dialog.close()}getDialogTitle_(){return this.i18n("matchingRestrictedSitesTitle",this.firstRestrictedSite)}getDialogWarning_(){return this.i18n("matchingRestrictedSitesWarning",this.firstRestrictedSite)}}customElements.define(ExtensionsRestrictedSitesDialogElement.is,ExtensionsRestrictedSitesDialogElement);let instance$B=null;function getCss$y(){return instance$B||(instance$B=[...[getCss$11()],css`:host{align-items:center;display:flex;touch-action:none}input{display:none}label{box-sizing:border-box;cursor:pointer;flex:1}cr-toggle{display:inline-block}:host ::slotted(*){flex:1;margin-inline-end:20px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$x(){return html`<!--_html_template_start_-->
<label id="label" aria-hidden="true">
  <input id="native" type="checkbox" .checked="${this.checked}"
      @change="${this.onNativeChange_}" @click="${this.onNativeClick_}"
      .disabled="${this.disabled}">
  <slot></slot>
</label>
<cr-toggle id="crToggle" ?checked="${this.checked}" aria-labelledby="label"
    @change="${this.onCrToggleChange_}" ?disabled="${this.disabled}">
</cr-toggle>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsToggleRowElement extends CrLitElement{static get is(){return"extensions-toggle-row"}static get styles(){return getCss$y()}render(){return getHtml$x.bind(this)()}static get properties(){return{checked:{type:Boolean,reflect:true},disabled:{type:Boolean,reflect:true}}}#checked_accessor_storage=false;get checked(){return this.#checked_accessor_storage}set checked(value){this.#checked_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}getLabel(){return this.$.label}onNativeClick_(e){e.stopPropagation()}async updateChecked_(value){this.checked=value;await this.updateComplete;this.fire("change",this.checked)}onNativeChange_(e){e.stopPropagation();this.updateChecked_(this.$.native.checked)}onCrToggleChange_(e){e.stopPropagation();this.updateChecked_(e.detail)}}customElements.define(ExtensionsToggleRowElement.is,ExtensionsToggleRowElement);let instance$A=null;function getCss$x(){return instance$A||(instance$A=[...[getCss$11(),getCss$N()],css`cr-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}#section-heading{align-items:center;color:var(--cr-primary-text-color);display:flex;justify-content:space-between;margin-top:12px}.toggle-section{display:flex;flex-direction:column;justify-content:center;min-height:var(--cr-section-min-height)}.new-all-hosts-toggle-label{color:var(--cr-primary-text-color);margin-inline-start:var(--cr-section-indent-width)}.site-row{display:flex}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}.site-toggle{border-top:var(--cr-separator-line);margin-inline-start:var(--cr-section-indent-width)}:host-context([webui-refresh-2026]){a:focus{border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$w(){return html`<!--_html_template_start_-->
<div id="section-heading" ?hidden="${this.enableEnhancedSiteControls}">
  <span>$i18n{hostPermissionsDescription}</span>
  <a id="linkIconButton" aria-label="$i18n{permissionsLearnMoreLabel}"
      href="$i18n{hostPermissionsLearnMoreLink}" target="_blank"
      @click="${this.onLearnMoreClick_}">
    <cr-icon icon="cr:help"></cr-icon>
  </a>
</div>
<div class="toggle-section">
  <extensions-toggle-row ?checked="${this.allowedOnAllHosts_()}"
      id="allHostsToggle" @change="${this.onAllHostsToggleChange_}">
    <span class="${this.getAllHostsToggleLabelClass_()}">
      $i18n{itemAllowOnFollowingSites}
    </span>
    <a id="linkIconButton" aria-label="$i18n{permissionsLearnMoreLabel}"
        href="$i18n{hostPermissionsLearnMoreLink}" target="_blank"
        @click="${this.onLearnMoreClick_}"
        ?hidden="${!this.enableEnhancedSiteControls}">
      <cr-icon icon="cr:help"></cr-icon>
    </a>
  </extensions-toggle-row>
</div>

${this.getSortedHosts_().map((item=>html`
  <div class="toggle-section site-toggle">
    <extensions-toggle-row ?checked="${this.isItemChecked_(item)}"
        class="host-toggle no-end-padding"
        ?disabled="${this.allowedOnAllHosts_()}" data-host="${item.host}"
        @change="${this.onHostAccessChange_}">
      <div class="site-row">
        <div class="site-favicon"
            .style="background-image:${this.getFaviconUrl_(item.host)}"
            ?hidden="${!this.enableEnhancedSiteControls}">
        </div>
        <span>${item.host}</span>
      </div>
    </extensions-toggle-row>
  </div>
`))}

${this.showMatchingRestrictedSitesDialog_?html`
  <extensions-restricted-sites-dialog
      .firstRestrictedSite="${this.matchingRestrictedSites_[0]}"
      @close="${this.onMatchingRestrictedSitesDialogClose_}">
  </extensions-restricted-sites-dialog>
`:""}
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$v(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">${this.computeDialogTitle_()}</div>
  <div slot="body">
    <cr-input id="input" label="$i18n{runtimeHostsDialogInputLabel}"
        placeholder="http://example.com" .value="${this.site_}"
        @value-changed="${this.onSiteValueChanged_}" @input="${this.onInput_}"
        ?invalid="${this.inputInvalid_}"
        error-message="$i18n{runtimeHostsDialogInputError}" spellcheck="false"
        autofocus>
    </cr-input>
    <div class="matching-restricted-sites-warning"
        ?hidden="${!this.matchingRestrictedSites_.length}">
      <cr-icon icon="cr:info"></cr-icon>
      <span>${this.computeMatchingRestrictedSitesWarning_()}</span>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit" @click="${this.onSubmitClick_}"
        ?disabled="${this.computeSubmitButtonDisabled_()}">
      ${this.computeSubmitButtonLabel_()}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$u(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">${this.computeDialogTitle_()}</div>
  <div slot="body">
    <cr-input id="input" label="$i18n{sitePermissionsDialogInputLabel}"
        placeholder="https://example.com" .value="${this.site_}"
        @value-changed="${this.onSiteValueChanged_}" @input="${this.onInput_}"
        ?invalid="${!this.inputValid_}"
        error-message="$i18n{sitePermissionsDialogInputError}"
        spellcheck="false" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit" @click="${this.onSubmitClick_}"
        ?disabled="${this.computeSubmitButtonDisabled_()}">
      ${this.computeSubmitButtonLabel_()}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummySiteSettingsDelegate{getUserSiteSettings(){return Promise.resolve({permittedSites:[],restrictedSites:[]})}addUserSpecifiedSites(_siteSet,_hosts){return Promise.resolve()}removeUserSpecifiedSites(_siteSet,_hosts){return Promise.resolve()}getUserAndExtensionSitesByEtld(){return Promise.resolve([])}getMatchingExtensionsForSite(_site){return Promise.resolve([])}updateSiteAccess(_site,_updates){return Promise.resolve()}getUserSiteSettingsChangedTarget(){return new FakeChromeEvent}}class DummySiteSettingsMixinDelegate extends DummyItemDelegate{getUserSiteSettings(){return Promise.resolve({permittedSites:[],restrictedSites:[]})}addUserSpecifiedSites(_siteSet,_hosts){return Promise.resolve()}removeUserSpecifiedSites(_siteSet,_hosts){return Promise.resolve()}getUserAndExtensionSitesByEtld(){return Promise.resolve([])}getMatchingExtensionsForSite(_site){return Promise.resolve([])}updateSiteAccess(_site,_updates){return Promise.resolve()}getUserSiteSettingsChangedTarget(){return new FakeChromeEvent}}const SiteSettingsMixin=superClass=>{class SiteSettingsMixin extends superClass{static get properties(){return{delegate:{type:Object},enableEnhancedSiteControls:{type:Boolean},restrictedSites:{type:Array},permittedSites:{type:Array}}}#delegate_accessor_storage=new DummySiteSettingsMixinDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#enableEnhancedSiteControls_accessor_storage=false;get enableEnhancedSiteControls(){return this.#enableEnhancedSiteControls_accessor_storage}set enableEnhancedSiteControls(value){this.#enableEnhancedSiteControls_accessor_storage=value}#restrictedSites_accessor_storage=[];get restrictedSites(){return this.#restrictedSites_accessor_storage}set restrictedSites(value){this.#restrictedSites_accessor_storage=value}#permittedSites_accessor_storage=[];get permittedSites(){return this.#permittedSites_accessor_storage}set permittedSites(value){this.#permittedSites_accessor_storage=value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.enableEnhancedSiteControls){this.delegate.getUserSiteSettings().then(this.onUserSiteSettingsChanged_.bind(this));this.delegate.getUserSiteSettingsChangedTarget().addListener(this.onUserSiteSettingsChanged_.bind(this))}}onUserSiteSettingsChanged_({permittedSites:permittedSites,restrictedSites:restrictedSites}){this.permittedSites=permittedSites;this.restrictedSites=restrictedSites}}return SiteSettingsMixin};
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sitePermissionsPatternRegExp=new RegExp("^"+"((http|https)://)?"+"([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)"+"(:[0-9]+)?"+"$");function getSitePermissionsPatternFromSite(site){const res=sitePermissionsPatternRegExp.exec(site);assert(res);const scheme=res[1]||"https://";const host=res[3];const port=res[4]||"";return scheme+host+port}class SitePermissionsEditUrlDialogElement extends CrLitElement{static get is(){return"site-permissions-edit-url-dialog"}static get styles(){return getCss$11()}render(){return getHtml$u.bind(this)()}static get properties(){return{delegate:{type:Object},siteSet:{type:String},siteToEdit:{type:String},site_:{type:String},inputValid_:{type:Boolean}}}#delegate_accessor_storage=new DummySiteSettingsDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#siteSet_accessor_storage=chrome.developerPrivate.SiteSet.USER_PERMITTED;get siteSet(){return this.#siteSet_accessor_storage}set siteSet(value){this.#siteSet_accessor_storage=value}#siteToEdit_accessor_storage=null;get siteToEdit(){return this.#siteToEdit_accessor_storage}set siteToEdit(value){this.#siteToEdit_accessor_storage=value}#site__accessor_storage="";get site_(){return this.#site__accessor_storage}set site_(value){this.#site__accessor_storage=value}#inputValid__accessor_storage=true;get inputValid_(){return this.#inputValid__accessor_storage}set inputValid_(value){this.#inputValid__accessor_storage=value}connectedCallback(){super.connectedCallback();if(this.siteToEdit!==null){this.site_=this.siteToEdit;this.validate_()}}validate_(){this.inputValid_=this.site_.trim().length===0||sitePermissionsPatternRegExp.test(this.site_)}computeDialogTitle_(){return loadTimeData.getString(this.siteToEdit===null?"sitePermissionsAddSiteDialogTitle":"sitePermissionsEditSiteDialogTitle")}computeSubmitButtonDisabled_(){return!this.inputValid_||this.site_.trim().length===0}computeSubmitButtonLabel_(){return loadTimeData.getString(this.siteToEdit===null?"add":"save")}onCancelClick_(){this.$.dialog.cancel()}onSubmitClick_(){const pattern=getSitePermissionsPatternFromSite(this.site_);if(this.siteToEdit!==null){this.handleEdit_(pattern)}else{this.handleAdd_(pattern)}}onSiteValueChanged_(e){this.site_=e.detail.value}onInput_(){this.validate_()}handleEdit_(pattern){assert(this.siteToEdit);if(pattern===this.siteToEdit){this.$.dialog.close();return}this.delegate.removeUserSpecifiedSites(this.siteSet,[this.siteToEdit]).then((()=>{this.addUserSpecifiedSite_(pattern)}))}handleAdd_(pattern){assert(!this.siteToEdit);this.addUserSpecifiedSite_(pattern)}addUserSpecifiedSite_(pattern){this.delegate.addUserSpecifiedSites(this.siteSet,[pattern]).then((()=>{this.$.dialog.close()}),(()=>{this.inputValid_=false}))}}customElements.define(SitePermissionsEditUrlDialogElement.is,SitePermissionsEditUrlDialogElement);
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const runtimeHostsPatternRegExp=new RegExp("^"+"((http|https|\\*)://)?"+"(\\*\\.)?"+"([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)"+"(:[0-9]+)?"+"(\\/\\*|\\/)?"+"$");function getPatternFromSite(site){const res=runtimeHostsPatternRegExp.exec(site);assert(res);const scheme=res[1]||"*://";const host=(res[3]||"")+res[4];const port=res[5]||"";const path="/*";return scheme+host+port+path}function getMatchingUserSpecifiedSites(userSites,host){if(!runtimeHostsPatternRegExp.test(host)){return[]}const newHostRes=runtimeHostsPatternRegExp.exec(host);assert(newHostRes);const matchAllSchemes=!newHostRes[1]||newHostRes[1]==="*://";const matchAllSubdomains=newHostRes[3]==="*.";return userSites.filter((userSite=>{const siteRes=sitePermissionsPatternRegExp.exec(userSite);assert(siteRes);if(!matchAllSchemes&&newHostRes[1]!==siteRes[1]){return false}if(matchAllSubdomains&&!siteRes[3].endsWith(newHostRes[4])){return false}if(!matchAllSubdomains&&siteRes[3]!==newHostRes[4]){return false}return!newHostRes[5]||newHostRes[5]===siteRes[4]}))}const ExtensionsRuntimeHostsDialogElementBase=I18nMixinLit(SiteSettingsMixin(CrLitElement));class ExtensionsRuntimeHostsDialogElement extends ExtensionsRuntimeHostsDialogElementBase{static get is(){return"extensions-runtime-hosts-dialog"}static get styles(){return getCss$N()}render(){return getHtml$v.bind(this)()}static get properties(){return{itemId:{type:String},currentSite:{type:String},updateHostAccess:{type:Boolean},site_:{type:String},inputInvalid_:{type:Boolean},matchingRestrictedSites_:{type:Array}}}#itemId_accessor_storage="";get itemId(){return this.#itemId_accessor_storage}set itemId(value){this.#itemId_accessor_storage=value}#currentSite_accessor_storage=null;get currentSite(){return this.#currentSite_accessor_storage}set currentSite(value){this.#currentSite_accessor_storage=value}#updateHostAccess_accessor_storage=false;get updateHostAccess(){return this.#updateHostAccess_accessor_storage}set updateHostAccess(value){this.#updateHostAccess_accessor_storage=value}#site__accessor_storage="";get site_(){return this.#site__accessor_storage}set site_(value){this.#site__accessor_storage=value}#inputInvalid__accessor_storage=false;get inputInvalid_(){return this.#inputInvalid__accessor_storage}set inputInvalid_(value){this.#inputInvalid__accessor_storage=value}#matchingRestrictedSites__accessor_storage=[];get matchingRestrictedSites_(){return this.#matchingRestrictedSites__accessor_storage}set matchingRestrictedSites_(value){this.#matchingRestrictedSites__accessor_storage=value}connectedCallback(){super.connectedCallback();if(this.currentSite!==null&&this.currentSite!==undefined){this.site_=this.currentSite;this.validate_()}this.$.dialog.showModal()}willUpdate(changedProperties){super.willUpdate(changedProperties);const changedPrivateProperties=changedProperties;if(changedProperties.has("restrictedSites")||changedPrivateProperties.has("site_")){this.matchingRestrictedSites_=this.computeMatchingRestrictedSites_()}}isOpen(){return this.$.dialog.open}onInput_(){this.validate_()}validate_(){if(this.site_.trim().length===0){this.inputInvalid_=false;return}this.inputInvalid_=!runtimeHostsPatternRegExp.test(this.site_)}onSiteValueChanged_(e){this.site_=e.detail.value}computeDialogTitle_(){const stringId=this.currentSite===null?"runtimeHostsDialogTitle":"hostPermissionsEdit";return loadTimeData.getString(stringId)}computeSubmitButtonDisabled_(){return this.inputInvalid_||this.site_===undefined||this.site_.trim().length===0}computeSubmitButtonLabel_(){const stringId=this.currentSite===null?"add":"save";return loadTimeData.getString(stringId)}computeMatchingRestrictedSites_(){return getMatchingUserSpecifiedSites(this.restrictedSites,this.site_)}onCancelClick_(){this.$.dialog.cancel()}onSubmitClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostDialogSubmitted");if(this.currentSite!==null){this.handleEdit_()}else{this.handleAdd_()}}handleAdd_(){assert(!this.currentSite);if(this.updateHostAccess){this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES)}this.addPermission_()}handleEdit_(){assert(this.currentSite);assert(!this.updateHostAccess,"Editing host permissions should only be possible if the host "+"access is already set to specific sites.");if(this.currentSite===this.site_){this.$.dialog.close();return}this.delegate.removeRuntimeHostPermission(this.itemId,this.currentSite).then((()=>{this.addPermission_()}))}addPermission_(){const pattern=getPatternFromSite(this.site_);const restrictedSites=this.matchingRestrictedSites_;this.delegate.addRuntimeHostPermission(this.itemId,pattern).then((()=>{if(restrictedSites.length){this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED,restrictedSites)}this.$.dialog.close()}),(()=>{this.inputInvalid_=true}))}computeMatchingRestrictedSitesWarning_(){return this.matchingRestrictedSites_.length?this.i18n("matchingRestrictedSitesWarning",this.matchingRestrictedSites_[0]):""}}customElements.define(ExtensionsRuntimeHostsDialogElement.is,ExtensionsRuntimeHostsDialogElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getSupportedScaleFactors(){const supportedScaleFactors=[];if(!isIOS){supportedScaleFactors.push(1)}if(!isIOS&&!isAndroid){supportedScaleFactors.push(2)}else{supportedScaleFactors.push(window.devicePixelRatio)}return supportedScaleFactors}function getUrlForCss(s){const s2=s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g,"\\$1");return`url("${s2}")`}function getImageSet(path){const supportedScaleFactors=getSupportedScaleFactors();const replaceStartIndex=path.indexOf("SCALEFACTOR");if(replaceStartIndex<0){return getUrlForCss(path)}let s="";for(let i=0;i<supportedScaleFactors.length;++i){const scaleFactor=supportedScaleFactors[i];const pathWithScaleFactor=path.substr(0,replaceStartIndex)+scaleFactor+path.substr(replaceStartIndex+"scalefactor".length);s+=getUrlForCss(pathWithScaleFactor)+" "+scaleFactor+"x";if(i!==supportedScaleFactors.length-1){s+=", "}}return"image-set("+s+")"}function getBaseFaviconUrl(){const baseUrl=window.location.protocol==="chrome-extension:"?"/_favicon/":"chrome://favicon2/";const faviconUrl=new URL(baseUrl,window.location.origin);faviconUrl.searchParams.set("size","16");faviconUrl.searchParams.set("scaleFactor","SCALEFACTORx");return faviconUrl}function getDefaultFaviconUrlParams(){return{isSyncedUrlForHistoryUi:false,remoteIconUrlForUma:"",size:16,forceLightMode:false,fallbackToHost:true,forceEmptyDefaultFavicon:false,scaleFactor:""}}function getFaviconUrl$1(url,optionalParams){const params=Object.assign(getDefaultFaviconUrlParams(),optionalParams);const faviconUrl=getBaseFaviconUrl();faviconUrl.searchParams.set("pageUrl",url);faviconUrl.searchParams.set("size",params.size.toString());const fallback=params.isSyncedUrlForHistoryUi?"1":"0";faviconUrl.searchParams.set("allowGoogleServerFallback",fallback);if(params.isSyncedUrlForHistoryUi){faviconUrl.searchParams.set("iconUrl",params.remoteIconUrlForUma)}if(params.forceLightMode){faviconUrl.searchParams.set("forceLightMode","true")}if(!params.fallbackToHost){faviconUrl.searchParams.set("fallbackToHost","0")}if(params.forceEmptyDefaultFavicon){faviconUrl.searchParams.set("forceEmptyDefaultFavicon","1")}if(params.scaleFactor){faviconUrl.searchParams.set("scaleFactor",params.scaleFactor)}return faviconUrl.toString()}function getFaviconForPageURL(url,isSyncedUrlForHistoryUi,remoteIconUrlForUma="",size=16,forceLightMode=false,fallbackToHost=true,forceEmptyDefaultFavicon=false,scaleFactor=""){return getImageSet(getFaviconUrl$1(url,{isSyncedUrlForHistoryUi:isSyncedUrlForHistoryUi,remoteIconUrlForUma:remoteIconUrlForUma,size:size,forceLightMode:forceLightMode,fallbackToHost:fallbackToHost,forceEmptyDefaultFavicon:forceEmptyDefaultFavicon,scaleFactor:scaleFactor}))}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUBDOMAIN_SPECIFIER="*.";function getFaviconUrl(site){let faviconUrl=site.startsWith("*://")?site.replace("*://","http://"):site;if(faviconUrl.endsWith("/*")){faviconUrl=faviconUrl.substring(0,faviconUrl.length-2)}return getFaviconForPageURL(faviconUrl,false,"",20)}function matchesSubdomains(site){return site.includes(SUBDOMAIN_SPECIFIER)}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsHostPermissionsToggleListElementBase=SiteSettingsMixin(CrLitElement);class ExtensionsHostPermissionsToggleListElement extends ExtensionsHostPermissionsToggleListElementBase{static get is(){return"extensions-host-permissions-toggle-list"}static get styles(){return getCss$x()}render(){return getHtml$w.bind(this)()}static get properties(){return{permissions:{type:Object},itemId:{type:String},selectedHost_:{type:String},matchingRestrictedSites_:{type:Array},showMatchingRestrictedSitesDialog_:{type:Boolean}}}#permissions_accessor_storage={hasAllHosts:true,hostAccess:chrome.developerPrivate.HostAccess.ON_CLICK,hosts:[]};get permissions(){return this.#permissions_accessor_storage}set permissions(value){this.#permissions_accessor_storage=value}#itemId_accessor_storage="";get itemId(){return this.#itemId_accessor_storage}set itemId(value){this.#itemId_accessor_storage=value}#matchingRestrictedSites__accessor_storage=[];get matchingRestrictedSites_(){return this.#matchingRestrictedSites__accessor_storage}set matchingRestrictedSites_(value){this.#matchingRestrictedSites__accessor_storage=value}#showMatchingRestrictedSitesDialog__accessor_storage=false;get showMatchingRestrictedSitesDialog_(){return this.#showMatchingRestrictedSitesDialog__accessor_storage}set showMatchingRestrictedSitesDialog_(value){this.#showMatchingRestrictedSitesDialog__accessor_storage=value}#selectedHost__accessor_storage="";get selectedHost_(){return this.#selectedHost__accessor_storage}set selectedHost_(value){this.#selectedHost__accessor_storage=value}getRestrictedSitesDialog(){return this.shadowRoot.querySelector("extensions-restricted-sites-dialog")}allowedOnAllHosts_(){return this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_ALL_SITES}getSortedHosts_(){return this.permissions.hosts.sort(((a,b)=>{if(a.host<b.host){return-1}if(a.host>b.host){return 1}return 0}))}onAllHostsToggleChange_(e){const checked=e.detail;if(checked){this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_ALL_SITES);this.delegate.recordUserAction(UserAction.ALL_TOGGLED_ON)}else{this.delegate.setItemHostAccess(this.itemId,chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);this.delegate.recordUserAction(UserAction.ALL_TOGGLED_OFF)}}onHostAccessChange_(e){const host=e.target.dataset["host"]||"";const checked=e.target.checked;if(!checked){this.delegate.removeRuntimeHostPermission(this.itemId,host);this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_OFF);return}this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_ON);const matchingRestrictedSites=getMatchingUserSpecifiedSites(this.restrictedSites,host);if(matchingRestrictedSites.length){this.selectedHost_=host;this.matchingRestrictedSites_=matchingRestrictedSites;this.showMatchingRestrictedSitesDialog_=true;return}this.delegate.addRuntimeHostPermission(this.itemId,host)}isItemChecked_(item){return item.granted||this.selectedHost_===item.host}getAllHostsToggleLabelClass_(){return this.enableEnhancedSiteControls?"new-all-hosts-toggle-label":""}onLearnMoreClick_(){this.delegate.recordUserAction(UserAction.LEARN_MORE)}getFaviconUrl_(url){return getFaviconUrl(url)}unselectHost_(){this.showMatchingRestrictedSitesDialog_=false;this.selectedHost_="";this.matchingRestrictedSites_=[]}onMatchingRestrictedSitesDialogClose_(){const dialog=this.getRestrictedSitesDialog();assert(dialog);if(dialog.wasConfirmed()){assert(this.matchingRestrictedSites_.length);this.delegate.addRuntimeHostPermission(this.itemId,this.selectedHost_).then((()=>{this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED,this.matchingRestrictedSites_)})).finally((()=>{this.unselectHost_()}))}else{this.unselectHost_()}}}customElements.define(ExtensionsHostPermissionsToggleListElement.is,ExtensionsHostPermissionsToggleListElement);let instance$z=null;function getCss$w(){return instance$z||(instance$z=[...[],css`:host{--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-ink-size:32px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color);--ink-to-circle:calc((var(--cr-radio-button-ink-size) - var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:none}:host-context(html:not([webui-refresh-2026])){@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb),.4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb),.4)}}}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem;--cr-radio-button-unchecked-color:CanvasText}.disc-wrapper{forced-color-adjust:none}}:host([disabled]){opacity:1;pointer-events:none;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,var(--cr-fallback-color-disabled-foreground))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc-border,.disc,.disc-wrapper,cr-ripple,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc-border,.disc{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:none}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color 200ms,transform 200ms}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(0.5)}#overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}#button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}#button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}cr-ripple,paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) cr-ripple,:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) cr-ripple,:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}`])}let instance$y=null;function getCss$v(){return instance$y||(instance$y=[...[getCss$w(),getCss$19()],css``])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$t(){return html`
<div aria-checked="${this.getAriaChecked()}" aria-describedby="slotted-content"
    aria-disabled="${this.getAriaDisabled()}" aria-labelledby="label"
    class="disc-wrapper" id="button" role="radio"
    tabindex="${this.getButtonTabIndex()}" @keydown="${this.onInputKeydown}">
  <div class="disc-border"></div>
  <div class="disc"></div>
  <div id="overlay"></div>
</div>

<div id="labelWrapper">
  <span id="label" ?hidden="${!this.label}" aria-hidden="true">
    ${this.label}
  </span>
  <span id="slotted-content">
    <slot></slot>
  </span>
</div>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixinLit=superClass=>{class CrRadioButtonMixinLit extends superClass{static get properties(){return{checked:{type:Boolean,reflect:true},disabled:{type:Boolean,reflect:true,notify:true},focusable:{type:Boolean},hideLabelText:{type:Boolean,reflect:true},label:{type:String},name:{type:String,notify:true,reflect:true},ariaCheckedString:{type:String},ariaDisabledString:{type:String}}}#checked_accessor_storage=false;get checked(){return this.#checked_accessor_storage}set checked(value){this.#checked_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#focusable_accessor_storage=false;get focusable(){return this.#focusable_accessor_storage}set focusable(value){this.#focusable_accessor_storage=value}#hideLabelText_accessor_storage=false;get hideLabelText(){return this.#hideLabelText_accessor_storage}set hideLabelText(value){this.#hideLabelText_accessor_storage=value}#label_accessor_storage="";get label(){return this.#label_accessor_storage}set label(value){this.#label_accessor_storage=value}#name_accessor_storage;get name(){return this.#name_accessor_storage}set name(value){this.#name_accessor_storage=value}noRipple=false;#ariaCheckedString_accessor_storage="false";get ariaCheckedString(){return this.#ariaCheckedString_accessor_storage}set ariaCheckedString(value){this.#ariaCheckedString_accessor_storage=value}#ariaDisabledString_accessor_storage="false";get ariaDisabledString(){return this.#ariaDisabledString_accessor_storage}set ariaDisabledString(value){this.#ariaDisabledString_accessor_storage=value}connectedCallback(){super.connectedCallback();if(!this.noRipple){this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("up",this.hideRipple_.bind(this))}}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("focusable")){const links=this.querySelectorAll("a");links.forEach((link=>{link.tabIndex=this.checked?0:-1}))}}getAriaDisabled(){return this.disabled?"true":"false"}getAriaChecked(){return this.checked?"true":"false"}getButtonTabIndex(){return this.focusable?0:-1}focus(){const button=this.shadowRoot.querySelector("#button");assert(button);button.focus()}getRipple(){assertNotReached()}hideRipple_(){assert(!this.noRipple);this.getRipple().clear()}onInputKeydown(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}}}return CrRadioButtonMixinLit};
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase=CrRippleMixin(CrRadioButtonMixinLit(CrLitElement));class CrRadioButtonElement extends CrRadioButtonElementBase{static get is(){return"cr-radio-button"}static get styles(){return getCss$v()}render(){return getHtml$t.bind(this)()}createRipple(){this.rippleContainer=this.shadowRoot.querySelector(".disc-wrapper");const ripple=super.createRipple();ripple.setAttribute("recenters","");ripple.classList.add("circle");return ripple}}customElements.define(CrRadioButtonElement.is,CrRadioButtonElement);let instance$x=null;function getCss$u(){return instance$x||(instance$x=[...[],css`:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}
`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$s(){return html`<slot></slot>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio){return radio.matches(":not([disabled]):not([hidden])")&&radio.style.display!=="none"&&radio.style.visibility!=="hidden"}class CrRadioGroupElement extends CrLitElement{static get is(){return"cr-radio-group"}static get styles(){return getCss$u()}render(){return getHtml$s.bind(this)()}static get properties(){return{disabled:{type:Boolean,reflect:true},selected:{type:String,notify:true},selectableElements:{type:String},nestedSelectable:{type:Boolean},selectableRegExp_:{type:Object}}}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#selected_accessor_storage;get selected(){return this.#selected_accessor_storage}set selected(value){this.#selected_accessor_storage=value}#selectableElements_accessor_storage="cr-radio-button, cr-card-radio-button, controlled-radio-button";get selectableElements(){return this.#selectableElements_accessor_storage}set selectableElements(value){this.#selectableElements_accessor_storage=value}#nestedSelectable_accessor_storage=false;get nestedSelectable(){return this.#nestedSelectable_accessor_storage}set nestedSelectable(value){this.#nestedSelectable_accessor_storage=value}#selectableRegExp__accessor_storage=new RegExp("");get selectableRegExp_(){return this.#selectableRegExp__accessor_storage}set selectableRegExp_(value){this.#selectableRegExp__accessor_storage=value}buttons_=null;buttonEventTracker_=new EventTracker;deltaKeyMap_=null;isRtl_=false;populateBound_=null;connectedCallback(){super.connectedCallback();this.isRtl_=this.matches(":host-context([dir=rtl]) cr-radio-group");this.deltaKeyMap_=new Map([["ArrowDown",1],["ArrowLeft",this.isRtl_?1:-1],["ArrowRight",this.isRtl_?-1:1],["ArrowUp",-1],["PageDown",1],["PageUp",-1]]);this.populateBound_=()=>this.populate_();assert(this.populateBound_);this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.populateBound_);this.populate_()}disconnectedCallback(){super.disconnectedCallback();assert(this.populateBound_);this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.populateBound_);this.buttonEventTracker_.removeAll()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("selectableElements")){const tags=this.selectableElements.split(", ").join("|");this.selectableRegExp_=new RegExp(`^(${tags})$`,"i")}}firstUpdated(){this.addEventListener("keydown",(e=>this.onKeyDown_(e)));this.addEventListener("click",(e=>this.onClick_(e)));if(!this.hasAttribute("role")){this.setAttribute("role","radiogroup")}}updated(changedProperties){if(changedProperties.has("nestedSelectable")){this.populate_()}if(changedProperties.has("disabled")||changedProperties.has("selected")){this.update_()}this.setAttribute("aria-disabled",`${this.disabled}`);super.updated(changedProperties)}focus(){if(this.disabled||!this.buttons_){return}const radio=this.buttons_.find((radio=>this.isButtonEnabledAndSelected_(radio)));if(radio){radio.focus()}}onKeyDown_(event){if(this.disabled){return}if(event.ctrlKey||event.shiftKey||event.metaKey||event.altKey){return}const targetElement=event.target;if(!this.buttons_||!this.buttons_.includes(targetElement)){return}if(event.key===" "||event.key==="Enter"){event.preventDefault();this.select_(targetElement);return}const enabledRadios=this.buttons_.filter(isEnabled);if(enabledRadios.length===0){return}assert(this.deltaKeyMap_);let selectedIndex;const max=enabledRadios.length-1;if(event.key==="Home"){selectedIndex=0}else if(event.key==="End"){selectedIndex=max}else if(this.deltaKeyMap_.has(event.key)){const delta=this.deltaKeyMap_.get(event.key);const lastSelection=enabledRadios.findIndex((radio=>radio.checked));selectedIndex=Math.max(0,lastSelection)+delta;if(selectedIndex>max){selectedIndex=0}else if(selectedIndex<0){selectedIndex=max}}else{return}const radio=enabledRadios[selectedIndex];const name=`${radio.name}`;if(this.selected!==name){event.preventDefault();event.stopPropagation();this.selected=name;radio.focus()}}onClick_(event){const path=event.composedPath();if(path.some((target=>/^a$/i.test(target.tagName)))){return}const target=path.find((n=>this.selectableRegExp_.test(n.tagName)));if(target&&this.buttons_&&this.buttons_.includes(target)){this.select_(target)}}populate_(){const elements=this.shadowRoot.querySelector("slot").assignedElements({flatten:true});this.buttons_=Array.from(elements).flatMap((el=>{let result=[];if(el.matches(this.selectableElements)){result.push(el)}if(this.nestedSelectable){result=result.concat(Array.from(el.querySelectorAll(this.selectableElements)))}return result}));this.buttonEventTracker_.removeAll();this.buttons_.forEach((el=>{this.buttonEventTracker_.add(el,"disabled-changed",(()=>this.populate_()));this.buttonEventTracker_.add(el,"name-changed",(()=>this.populate_()))}));this.update_()}select_(button){if(!isEnabled(button)){return}const name=`${button.name}`;if(this.selected!==name){this.selected=name}}isButtonEnabledAndSelected_(button){return!this.disabled&&button.checked&&isEnabled(button)}update_(){if(!this.buttons_){return}let noneMadeFocusable=true;this.buttons_.forEach((radio=>{radio.checked=this.selected!==undefined&&`${radio.name}`===`${this.selected}`;const disabled=this.disabled||!isEnabled(radio);const canBeFocused=radio.checked&&!disabled;if(canBeFocused){radio.focusable=true;noneMadeFocusable=false}else{radio.focusable=false}radio.setAttribute("aria-disabled",`${disabled}`)}));if(noneMadeFocusable&&!this.disabled){const radio=this.buttons_.find(isEnabled);if(radio){radio.focusable=true}}}}customElements.define(CrRadioGroupElement.is,CrRadioGroupElement);let instance$w=null;function getCss$t(){return instance$w||(instance$w=[...[],css`.md-select{--md-arrow-width:7px;--md-select-bg-color:transparent;--md-select-option-bg-color:white;--md-select-side-padding:10px;--md-select-text-color:inherit;-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:12px;height:36px;max-width:100%;outline:none;padding-block-end:0;padding-block-start:0;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}.md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1;pointer-events:none}.md-select:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}`])}let instance$v=null;function getCss$s(){return instance$v||(instance$v=[...[getCss$t()],css`select.md-select:not(.z){appearance:base-select;background:transparent;background-image:none !important;border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);padding:var(--leo-spacing-m);color:var(--leo-color-text-primary);display:flex;align-items:center;min-width:var(--md-select-width,240px);width:fit-content;height:unset;font-size:inherit;transition:border-color 0.12s ease-in-out}.md-select:hover{background:transparent;border-color:var(--leo-color-divider-strong)}.md-select::picker(select){margin-top:var(--leo-spacing-m);appearance:base-select;background:var(--leo-color-container-background);border:1px solid var(--leo-color-divider-subtle);border-radius:var(--leo-radius-m);position-area:block-end span-inline-end}.md-select option:not(.z){margin:var(--leo-spacing-s);padding:var(--leo-spacing-s) var(--leo-spacing-m);border-radius:var(--leo-radius-s);background-color:var(--leo-color-container-background)}.md-select option:hover{background-color:var(--leo-color-container-highlight)}.md-select option:checked{background-color:var(--leo-color-container-highlight)}.md-select option::checkmark{display:none}.md-select::picker-icon{content:'';width:20px;height:20px;background-color:currentColor;mask-image:url(//resources/brave-icons/carat-down.svg);transition:transform 0.12s ease-in-out}.md-select option:focus{background-color:var(--leo-color-container-interactive);color:var(--leo-color-text-interactive)}.md-select option:focus-visible{box-shadow:0 0 0 1.5px rgba(255,255,255,0.5),0 0 4px 2px #423eee}`])}let instance$u=null;function getCss$r(){return instance$u||(instance$u=[...[getCss$J(),getCss$s(),getCss$11(),getCss$N()],css`cr-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}.link-icon-button{margin-inline-start:6px}#section-heading{--md-select-width:160px;align-items:center;display:flex}#section-heading-heading{display:flex;flex:1}#section-heading .link-icon-button{margin-inline-start:6px}#hostAccess{margin-inline-start:12px;width:100%}#hosts{margin-bottom:0;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#hosts li{align-items:center;border-top:var(--cr-separator-line);display:flex;height:var(--cr-section-min-height)}#hosts li:first-child{border-top:none}#add-host{font-weight:500;width:100%}#permissions-mode{color:var(--cr-primary-text-color);margin-top:12px}#new-permissions-mode{color:var(--cr-primary-text-color);margin-top:12px;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#new-section-heading{align-items:flex-start;display:flex;flex-direction:column}#new-section-heading-title{display:flex}#new-section-heading-subtext{color:var(--cr-secondary-text-color);margin-top:3px}#new-section-heading-override-warning{color:var(--cr-secondary-text-color);margin-top:3px}#host-access-row{display:flex;justify-content:space-between;margin-top:18px;width:100%}.site{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$r(){return html`<!--_html_template_start_-->
${!this.enableEnhancedSiteControls?html`
  <div id="permissions-mode">
    <div id="section-heading">
      <div id="section-heading-heading">
        <span id="section-heading-text">
          $i18n{hostPermissionsHeading}
        </span>
        <a class="link-icon-button"
            aria-label="$i18n{permissionsLearnMoreLabel}"
            href="$i18n{hostPermissionsLearnMoreLink}" target="_blank"
            @click="${this.onLearnMoreClick_}">
          <cr-icon icon="cr:help"></cr-icon>
        </a>
      </div>
      <div>
        <select id="hostAccess" class="md-select"
            @change="${this.onHostAccessChange_}"
            aria-labelledby="section-heading-text">
          <option value="${chrome.developerPrivate.HostAccess.ON_CLICK}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_CLICK)}">
            $i18n{hostAccessOnClick}
          </option>
          <option
              value="${chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES)}">
            $i18n{hostAccessOnSpecificSites}
          </option>
          <option value="${chrome.developerPrivate.HostAccess.ON_ALL_SITES}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_ALL_SITES)}">
            $i18n{hostAccessOnAllSites}
          </option>
        </select>
      </div>
    </div>
  </div>
`:html`
  <div id="new-permissions-mode">
    <div id="new-section-heading">
      <div id="new-section-heading-title">
        <span id="new-section-heading-text">
          $i18n{newHostPermissionsHeading}
        </span>
        <a class="link-icon-button"
            aria-label="$i18n{permissionsLearnMoreLabel}"
            href="$i18n{hostPermissionsLearnMoreLink}" target="_blank"
            @click="${this.onLearnMoreClick_}">
          <cr-icon icon="cr:help"></cr-icon>
        </a>
      </div>
      <span id="new-section-heading-subtext">
        $i18n{hostPermissionsSubHeading}
      </span>
      <span id="new-section-heading-override-warning">
        $i18n{hostPermissionsOverrideWarning}
      </span>
      <div id="host-access-row">
        <select id="newHostAccess" class="md-select"
            @change="${this.onHostAccessChange_}"
            aria-labelledby="new-section-heading-text">
          <option value="${chrome.developerPrivate.HostAccess.ON_CLICK}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_CLICK)}">
            $i18n{hostAccessAskOnEveryVisit}
          </option>
          <option
              value="${chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES)}">
            $i18n{hostAccessAllowOnSpecificSites}
          </option>
          <option value="${chrome.developerPrivate.HostAccess.ON_ALL_SITES}"
              ?selected="${this.isHostAccessSelected_(chrome.developerPrivate.HostAccess.ON_ALL_SITES)}">
            $i18n{hostAccessAllowOnAllSites}
          </option>
        </select>
        <cr-button id="add-site-button" ?hidden="${!this.showSpecificSites_()}"
            @click="${this.onAddHostClick_}">
          $i18n{add}
        </cr-button>
      </div>
    </div>
  </div>
`}

${this.showSpecificSites_()?html`
  <ul id="hosts">
    ${this.getRuntimeHosts_().map(((item,index)=>html`
      <li>
        <div class="site-favicon"
            .style="background-image:${this.getFaviconUrl_(item)}"
            ?hidden="${!this.enableEnhancedSiteControls}">
        </div>
        <div class="site">${item}</div>
        <cr-icon-button class="icon-edit edit-host"
            @click="${this.onEditHostClick_}" data-index="${index}"
            ?hidden="${!this.enableEnhancedSiteControls}">
        </cr-icon-button>
        <cr-icon-button class="icon-delete-gray remove-host"
            @click="${this.onDeleteHostClick_}" data-index="${index}"
            ?hidden="${!this.enableEnhancedSiteControls}">
        </cr-icon-button>
        <cr-icon-button class="icon-more-vert open-edit-host"
            @click="${this.onOpenEditHostClick_}" data-index="${index}"
            title="$i18n{hostPermissionsEdit}"
            ?hidden="${this.enableEnhancedSiteControls}">
        </cr-icon-button>
      </li>
    `))}
    <li ?hidden="${this.enableEnhancedSiteControls}">
      <a id="add-host" is="action-link" @click="${this.onAddHostClick_}">
        $i18n{itemSiteAccessAddHost}
      </a>
    </li>
  </ul>
`:""}

<cr-action-menu id="hostActionMenu" role-description="$i18n{menu}">
  <button class="dropdown-item" id="action-menu-edit"
      @click="${this.onActionMenuEditClick_}">
    $i18n{hostPermissionsEdit}
  </button>
  <button class="dropdown-item" id="action-menu-remove"
      @click="${this.onActionMenuRemoveClick_}">
    $i18n{remove}
  </button>
</cr-action-menu>
${this.showHostDialog_?html`
  <extensions-runtime-hosts-dialog
      .delegate="${this.delegate}" .itemId="${this.itemId}"
      .enableEnhancedSiteControls="${this.enableEnhancedSiteControls}"
      .currentSite="${this.hostDialogModel_}"
      .updateHostAccess="${this.dialogShouldUpdateHostAccess_()}"
      @close="${this.onHostDialogClose_}" @cancel="${this.onHostDialogCancel_}">
  </extensions-runtime-hosts-dialog>
`:""}
${this.showRemoveSiteDialog_?html`
  <cr-dialog id="removeSitesDialog"
      @cancel="${this.onRemoveSitesWarningCancel_}" show-on-attach>
    <div slot="title">$i18n{removeSitesDialogTitle}</div>
    <div slot="button-container">
      <cr-button class="cancel-button"
          @click="${this.onRemoveSitesWarningCancelClick_}">
        $i18n{cancel}
      </cr-button>
      <cr-button class="action-button"
          @click="${this.onRemoveSitesWarningConfirmClick_}">
        $i18n{remove}
      </cr-button>
    </div>
  </cr-dialog>
`:""}
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getEventTargetIndex(e){return Number(e.target.dataset["index"])}class ExtensionsRuntimeHostPermissionsElement extends CrLitElement{static get is(){return"extensions-runtime-host-permissions"}static get styles(){return getCss$r()}render(){return getHtml$r.bind(this)()}static get properties(){return{permissions:{type:Object},itemId:{type:String},delegate:{type:Object},enableEnhancedSiteControls:{type:Boolean},showHostDialog_:{type:Boolean},showRemoveSiteDialog_:{type:Boolean},hostDialogModel_:{type:String},hostDialogAnchorElement_:{type:Object},actionMenuModel_:{type:String},actionMenuAnchorElement_:{type:Object},oldHostAccess_:{type:String},revertingHostAccess_:{type:Boolean}}}#permissions_accessor_storage={hasAllHosts:true,hostAccess:chrome.developerPrivate.HostAccess.ON_CLICK,hosts:[]};get permissions(){return this.#permissions_accessor_storage}set permissions(value){this.#permissions_accessor_storage=value}#itemId_accessor_storage="";get itemId(){return this.#itemId_accessor_storage}set itemId(value){this.#itemId_accessor_storage=value}#delegate_accessor_storage=new DummyItemDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#enableEnhancedSiteControls_accessor_storage=false;get enableEnhancedSiteControls(){return this.#enableEnhancedSiteControls_accessor_storage}set enableEnhancedSiteControls(value){this.#enableEnhancedSiteControls_accessor_storage=value}#showHostDialog__accessor_storage=false;get showHostDialog_(){return this.#showHostDialog__accessor_storage}set showHostDialog_(value){this.#showHostDialog__accessor_storage=value}#showRemoveSiteDialog__accessor_storage=false;get showRemoveSiteDialog_(){return this.#showRemoveSiteDialog__accessor_storage}set showRemoveSiteDialog_(value){this.#showRemoveSiteDialog__accessor_storage=value}#hostDialogModel__accessor_storage=null;get hostDialogModel_(){return this.#hostDialogModel__accessor_storage}set hostDialogModel_(value){this.#hostDialogModel__accessor_storage=value}#hostDialogAnchorElement__accessor_storage=null;get hostDialogAnchorElement_(){return this.#hostDialogAnchorElement__accessor_storage}set hostDialogAnchorElement_(value){this.#hostDialogAnchorElement__accessor_storage=value}#actionMenuModel__accessor_storage=null;get actionMenuModel_(){return this.#actionMenuModel__accessor_storage}set actionMenuModel_(value){this.#actionMenuModel__accessor_storage=value}#actionMenuAnchorElement__accessor_storage=null;get actionMenuAnchorElement_(){return this.#actionMenuAnchorElement__accessor_storage}set actionMenuAnchorElement_(value){this.#actionMenuAnchorElement__accessor_storage=value}#oldHostAccess__accessor_storage=null;get oldHostAccess_(){return this.#oldHostAccess__accessor_storage}set oldHostAccess_(value){this.#oldHostAccess__accessor_storage=value}#revertingHostAccess__accessor_storage=false;get revertingHostAccess_(){return this.#revertingHostAccess__accessor_storage}set revertingHostAccess_(value){this.#revertingHostAccess__accessor_storage=value}getSelectMenu(){const selectMenuId=this.enableEnhancedSiteControls?"#newHostAccess":"#hostAccess";return this.shadowRoot.querySelector(selectMenuId)}getRemoveSiteDialog(){return this.shadowRoot.querySelector("#removeSitesDialog")}onHostAccessChange_(){const selectMenu=this.getSelectMenu();const access=selectMenu.value;if(!this.revertingHostAccess_){switch(access){case chrome.developerPrivate.HostAccess.ON_CLICK:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnClickSelected");break;case chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnSpecificSitesSelected");break;case chrome.developerPrivate.HostAccess.ON_ALL_SITES:chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.OnAllSitesSelected");break;default:assertNotReachedCase()}}const kOnSpecificSites=chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;if(access===kOnSpecificSites&&this.permissions.hostAccess!==kOnSpecificSites){this.oldHostAccess_=this.permissions.hostAccess;this.doShowHostDialog_(selectMenu,null)}else if(this.enableEnhancedSiteControls&&access!==kOnSpecificSites&&this.permissions.hostAccess===kOnSpecificSites){this.showRemoveSiteDialog_=true}else{this.delegate.setItemHostAccess(this.itemId,access)}}showSpecificSites_(){return this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES}getRuntimeHosts_(){if(!this.permissions.hosts){return[]}return this.permissions.hosts.filter((control=>control.granted)).map((control=>control.host)).sort()}onAddHostClick_(e){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostActivated");this.doShowHostDialog_(e.target,null)}isHostAccessSelected_(access){return access===this.permissions.hostAccess}doShowHostDialog_(anchorElement,currentSite){this.hostDialogAnchorElement_=anchorElement;this.hostDialogModel_=currentSite;this.showHostDialog_=true}onHostDialogClose_(){this.hostDialogModel_=null;this.showHostDialog_=false;assert(this.hostDialogAnchorElement_);focusWithoutInk(this.hostDialogAnchorElement_);this.hostDialogAnchorElement_=null;this.oldHostAccess_=null}onHostDialogCancel_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.AddHostDialogCanceled");if(this.oldHostAccess_){assert(this.permissions.hostAccess===this.oldHostAccess_);this.revertingHostAccess_=true;this.getSelectMenu().value=this.oldHostAccess_;this.revertingHostAccess_=false;this.oldHostAccess_=null}}dialogShouldUpdateHostAccess_(){return!!this.oldHostAccess_}onOpenEditHostClick_(e){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuOpened");const index=getEventTargetIndex(e);this.actionMenuModel_=this.getRuntimeHosts_()[index]||null;this.actionMenuAnchorElement_=e.target;this.$.hostActionMenu.showAt(e.target)}onActionMenuEditClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuEditActivated");const site=this.actionMenuModel_;assert(this.actionMenuAnchorElement_,"Menu Anchor");const anchorElement=this.actionMenuAnchorElement_;this.actionMenuAnchorElement_=null;this.closeActionMenu_();this.doShowHostDialog_(anchorElement,site)}onActionMenuRemoveClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.ActionMenuRemoveActivated");assert(this.actionMenuModel_,"Action Menu Model");this.delegate.removeRuntimeHostPermission(this.itemId,this.actionMenuModel_);this.closeActionMenu_()}closeActionMenu_(){const menu=this.$.hostActionMenu;assert(menu.open);menu.close()}onLearnMoreClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Settings.Hosts.LearnMoreActivated")}onEditHostClick_(e){const index=getEventTargetIndex(e);const item=this.getRuntimeHosts_()[index];this.doShowHostDialog_(e.target,item)}onDeleteHostClick_(e){const index=getEventTargetIndex(e);const item=this.getRuntimeHosts_()[index];this.delegate.removeRuntimeHostPermission(this.itemId,item)}getFaviconUrl_(url){return getFaviconUrl(url)}onRemoveSitesWarningConfirmClick_(){this.delegate.setItemHostAccess(this.itemId,this.getSelectMenu().value);this.getRemoveSiteDialog().close();this.showRemoveSiteDialog_=false}onRemoveSitesWarningCancelClick_(){this.onRemoveSitesWarningCancel_()}onRemoveSitesWarningCancel_(){assert(this.permissions.hostAccess===chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);this.revertingHostAccess_=true;this.getSelectMenu().value=this.permissions.hostAccess;this.revertingHostAccess_=false;this.getRemoveSiteDialog().close();this.showRemoveSiteDialog_=false}}customElements.define(ExtensionsRuntimeHostPermissionsElement.is,ExtensionsRuntimeHostPermissionsElement);let instance$t=null;function getCss$q(){return instance$t||(instance$t=[...[getCss$11(),getCss$J(),getCss$10(),getCss$N()],css`:host{--iron-icon-fill-color:var(--cr-secondary-text-color);display:block;height:100%}#enable-section{margin-bottom:8px}#enable-section cr-tooltip-icon{margin-inline-end:20px}#enable-section span{color:var(--cr-secondary-text-color);font-weight:500}#enable-section .enabled-text{color:var(--google-blue-500)}@media (prefers-color-scheme:dark){#enable-section .enabled-text{color:var(--google-blue-300)}}:host-context([webui-refresh-2026]) #enable-section .enabled-text{color:var(--color-extension-manager-highlight-text)}#icon{height:24px;margin-inline-end:12px;margin-inline-start:16px;width:24px}#name{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.section{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.message-container{align-items:center;background-color:var(--google-grey-50);display:flex;padding:15px;margin-top:2px}.message-icon{align-items:center;align-self:flex-start;display:flex;height:var(--cr-icon-size);width:var(--cr-icon-size);fill:var(--panel-icon-color)}.message-container cr-icon{height:var(--cr-icon-size);padding:6px;width:var(--cr-icon-size)}.message-text{flex:1;margin-inline-start:15px}@media (prefers-color-scheme:dark){.message-container{background-color:var(--google-grey-800)}}#account-upload-button{color:var(--cr-fallback-color-on-surface-subtle)}.keep-button{margin-inline-end:10px;margin-inline-start:40px}.cr-row.control-line{justify-content:space-between}.section-content{color:var(--cr-secondary-text-color)}.actionable{cursor:pointer}.inspectable-view{display:inline;height:20px;overflow-wrap:anywhere;width:auto;word-break:normal}@media (prefers-color-scheme:light){.warning .action-button{background:white;color:var(--google-blue-500)}#reload-button{color:var(--google-blue-500)}}:host-context([webui-refresh-2026]) .warning .action-button,:host-context([webui-refresh-2026]) #reload-button{background:none;color:var(--color-extension-manager-highlight-text)}.warning span{color:var(--error-color);flex:1}.warning-icon{--iron-icon-fill-color:var(--error-color);flex-shrink:0;height:18px;margin-inline-end:8px;width:18px}.link-icon-button{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);margin-inline-start:6px}#allowlist-warning{flex:1}#allowlist-warning .warning-icon{--iron-icon-fill-color:var(--warning-color)}ul{margin:0;padding-inline-start:20px}#options-section .control-line:first-child{border-top:var(--cr-separator-line)}extensions-toggle-row{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}#show-access-requests-toggle{margin-inline-start:var(--cr-section-indent-width);min-height:var(--cr-section-min-height);padding:0}#access-toggle-and-link{color:var(--cr-primary-text-color);display:flex}#load-path{word-break:break-all}#load-path>a[is='action-link']{display:inline}#size{align-items:center;display:flex}.spinner{--cr-spinner-size:var(--cr-icon-size)}#a11yAssociation{height:0;overflow:hidden}.layout-horizontal{display:flex;flex-direction:row}`])}function getHtml$q(){return html`<!--_html_template_start_-->
<!-- Invisible instead of hidden because VoiceOver refuses to read text of
element that's hidden when referenced by an aria label. Unfortunately,
this text can be found by Ctrl + F because it isn't hidden. -->
<div id="a11yAssociation" aria-hidden="true">
  ${this.a11yAssociation(this.data.name)}
</div>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton"
          aria-label="${this.getBackButtonAriaLabel_()}"
          aria-roledescription="${this.getBackButtonAriaRoleDescription_()}"
          @click="${this.onCloseButtonClick_}">
      </cr-icon-button>
      <img id="icon" src="${this.data.iconUrl}" alt="">
      <span id="name" class="cr-title-text" role="heading" aria-level="1">
        ${this.data.name}
      </span>
      ${this.showAccountUploadButton_()?html`
        <cr-icon-button id="account-upload-button" class="no-overlap"
            title="$i18n{itemUpload}" aria-label="$i18n{itemUpload}"
            iron-icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:cloud-upload":"extensions-icons:extension_cloud_upload-old"}"
            aria-describedby="a11yAssociation" @click="${this.onUploadClick_}">
        </cr-icon-button>
      `:""}
      ${this.showDevReloadButton_()?html`
        <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap"
            title="$i18n{itemReload}" aria-label="$i18n{itemReload}"
            aria-describedby="a11yAssociation" @click="${this.onReloadClick_}">
        </cr-icon-button>
      `:""}
    </div>

    ${this.showSafetyCheck_?html`
      <div id="safetyCheckWarningContainer" class="message-container">
        <cr-icon aria-hidden="true"
            icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:chrome-extension":"extensions-icons:my_extensions-old"}"
            class="message-icon">
        </cr-icon>
        <div class="message-text">
          <span class="section-title" aria-level="2">
            $i18n{safetyCheckExtensionsDetailPagePrimaryLabel}
          </span>
          <div class="section-content">
            ${this.data.safetyCheckText.detailString}
          </div>
        </div>
        <cr-button class="keep-button" @click="${this.onKeepClick_}">
          $i18n{safetyCheckExtensionsKeep}
        </cr-button>
        <cr-button class="action-button" @click="${this.onRemoveClick_}">
          $i18n{remove}
        </cr-button>
      </div>
    `:""}

    ${this.shouldShowMv2DeprecationMessage_()?html`
      <div id="mv2DeprecationMessage" class="message-container">
        <cr-icon aria-hidden="true"
            icon="${this.getMv2DeprecationMessageIcon_()}" class="message-icon">
        </cr-icon>
        <div class="message-text">
          <span class="section-title" aria-level="2">
            ${this.getMv2DeprecationMessageHeader_()}
          </span>
          <div class="section-content"
              .innerHTML="${this.getMv2DeprecationMessageSubtitle_()}">
          </div>
        </div>
        <cr-button class="remove-button" @click="${this.onRemoveButtonClick_}"
            ?hidden="${!this.shouldShowMv2DeprecationRemoveButton_()}">
          $i18n{mv2DeprecationMessageRemoveButton}
        </cr-button>
        <cr-icon-button class="icon-more-vert header-aligned-button"
            id="actionMenuButton" @click="${this.onActionMenuButtonClick_}"
            title="$i18n{moreOptions}"
            aria-label="${this.getActionMenuButtonLabel_()}"
            ?hidden="${!this.shouldShowMv2DeprecationActionMenu_()}">
        </cr-icon-button>
        <cr-action-menu id="actionMenu">
          <button class="dropdown-item" id="findAlternativeAction"
              ?hidden="${!this.shouldShowMv2DeprecationFindAlternativeAction_()}"
              @click="${this.onFindAlternativeActionClick_}">
            $i18n{mv2DeprecationPanelFindAlternativeButton}
          </button>
        </cr-action-menu>
      </div>
    `:""}
    <div class="cr-row first control-line" id="enable-section">
      <span class="${this.computeEnabledStyle_()}">
        ${this.computeEnabledText_()}
      </span>
      <div class="layout-horizontal">
        <cr-tooltip-icon ?hidden="${!this.data.controlledInfo}"
            tooltip-text="${this.data.controlledInfo?.text||""}"
            icon-class="cr20:domain"
            icon-aria-label="${this.data.controlledInfo?.text||""}">
        </cr-tooltip-icon>
        ${this.showReloadButton_()?html`
          <cr-button id="terminated-reload-button" class="action-button"
              @click="${this.onReloadClick_}">
            $i18n{itemReload}
          </cr-button>
        `:""}
        <cr-tooltip-icon id="parentDisabledPermissionsToolTip"
            ?hidden="${!this.data.disableReasons.parentDisabledPermissions}"
            tooltip-text="$i18n{parentDisabledPermissions}"
            icon-class="cr20:family-link"
            icon-aria-label="$i18n{parentDisabledPermissions}">
        </cr-tooltip-icon>
        <cr-toggle id="enableToggle"
            aria-label="${this.getEnableToggleAriaLabel_()}"
            aria-describedby="name" ?checked="${this.isEnabled_()}"
            @change="${this.onEnableToggleChange_}"
            ?disabled="${!this.isEnableToggleEnabled_()}"
            ?hidden="${!this.showEnableToggle_()}">
        </cr-toggle>
      </div>
    </div>
    ${this.hasSevereWarnings_()?html`
      <div id="warnings">
        <div id="runtime-warnings"
            ?hidden="${!this.data.runtimeWarnings.length}"
            class="cr-row continuation warning control-line">
          <cr-icon class="warning-icon" icon="cr:error-filled"></cr-icon>
          <span>
            ${this.data.runtimeWarnings.map((item=>html`${item}`))}
          </span>
          ${!this.showReloadButton_()?html`
            <cr-button id="warnings-reload-button" class="action-button"
                @click="${this.onReloadClick_}">
              $i18n{itemReload}
            </cr-button>
          `:""}
        </div>
        <div class="cr-row continuation warning" id="suspicious-warning"
            ?hidden="${!this.data.disableReasons.suspiciousInstall}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>
            $i18n{itemSuspiciousInstall}
            <a target="_blank" href="$i18n{suspiciousInstallHelpUrl}"
                aria-label="$i18n{itemSuspiciousInstallLearnMore}">
              $i18n{learnMore}
            </a>
          </span>
        </div>
        <div class="cr-row continuation warning control-line"
            id="corrupted-warning" ?hidden="${!this.showRepairButton_()}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>$i18n{itemCorruptInstall}</span>
          <cr-button id="repair-button" class="action-button"
              @click="${this.onRepairClick_}">
            $i18n{itemRepair}
          </cr-button>
        </div>
        <div class="cr-row continuation warning" id="blocklisted-warning"
            ?hidden="${!this.shouldShowBlocklistText_()}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>${this.data.blocklistText}</span>
        </div>
        <div class="cr-row continuation warning" id="update-required-warning"
            ?hidden="${!this.data.disableReasons.updateRequired}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>$i18n{updateRequiredByPolicy}</span>
        </div>
        <div class="cr-row continuation warning"
            id="published-in-store-required-warning"
            ?hidden="${!this.data.disableReasons.publishedInStoreRequired}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>$i18n{publishedInStoreRequiredByPolicy}</span>
        </div>
        <div class="cr-row continuation warning"
            id="unsupported-developer-extension-warning"
            ?hidden="${!this.shouldShowUnsupportedDeveloperExtensionText_()}">
          <cr-icon class="warning-icon" icon="cr:warning-filled"></cr-icon>
          <span>$i18n{itemUnsupportedDeveloperModeDetails}</span>
        </div>
      </div>
    `:""}
    ${this.showAllowlistWarning_()?html`
      <div id="allowlist-warning" class="cr-row continuation">
        <cr-icon class="warning-icon"
            icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:android-security-privacy-alert":"extensions-icons:safebrowsing_warning-old"}">
        </cr-icon>
        <span class="cr-secondary-text">
          $i18n{itemAllowlistWarning}
          <a href="$i18n{enhancedSafeBrowsingWarningHelpUrl}" target="_blank"
              aria-label="$i18n{itemAllowlistWarningLearnMoreLabel}">
            $i18n{learnMore}
          </a>
        </span>
      </div>
    `:""}
    <div class="section">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemDescriptionLabel}
      </div>
      <div class="section-content" id="description">
        ${this.getDescription_()}
      </div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemVersion}
      </div>
      <div class="section-content">${this.data.version}</div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemSize}
      </div>
      <div class="section-content" id="size">
        <span>${this.size_}</span>
        <div class="spinner" ?hidden="${!!this.size_}"></div>
      </div>
    </div>
    <div class="section hr" id="id-section" ?hidden="${!this.inDevMode}">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemIdHeading}
      </div>
      <div class="section-content">${this.data.id}</div>
    </div>
    ${this.inDevMode?html`
      <div class="section hr" id="inspectable-views">
        <div class="section-title" role="heading" aria-level="2">
          $i18n{itemInspectViews}
        </div>
        <div class="section-content">
          <ul id="inspect-views">
            <li ?hidden="${this.data.views.length>0}">
              $i18n{noActiveViews}
            </li>
            ${this.sortedViews_.map(((item,index)=>html`
              <li>
                <a is="action-link" class="inspectable-view"
                    data-index="${index}" @click="${this.onInspectClick_}">
                  ${this.computeInspectLabel_(item)}
                </a>
              </li>
            `))}
          </ul>
        </div>
      </div>
    `:""}
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemPermissions}
      </div>
      <div class="section-content">
        <span id="no-permissions" ?hidden="${this.hasPermissions_()}">
          ${this.getNoPermissionsString_()}
        </span>
        <ul id="permissions-list"
            ?hidden="${!this.data.permissions.simplePermissions.length}">
          ${this.data.permissions.simplePermissions.map((item=>html`
            <li>
              ${item.message}
              <ul ?hidden="${!item.submessages.length}">
                ${item.submessages.map((submessage=>html`
                  <li>${submessage}</li>
                `))}
              </ul>
            </li>
          `))}
          <li ?hidden="${this.showSiteAccessSection_()}">
            $i18n{itemSiteAccessEmpty}
          </li>
        </ul>
      </div>
    </div>
    ${this.showSiteAccessSection_()?html`
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2"
            ?hidden="${this.enableEnhancedSiteControls}">
          $i18n{itemSiteAccess}
        </div>
        <div class="section-content">
          <span id="no-site-access" ?hidden="${this.showSiteAccessContent_()}">
            $i18n{itemSiteAccessEmpty}
          </span>
          ${this.showFreeformRuntimeHostPermissions_()?html`
            <extensions-runtime-host-permissions
                .permissions="${this.data.permissions.runtimeHostPermissions}"
                ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}"
                .delegate="${this.delegate}"
                item-id="${this.data.id}">
            </extensions-runtime-host-permissions>
          `:""}
          ${this.showHostPermissionsToggleList_()?html`
            <extensions-host-permissions-toggle-list
                .permissions="${this.data.permissions.runtimeHostPermissions}"
                ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}"
                .delegate="${this.delegate}"
                item-id="${this.data.id}">
            </extensions-host-permissions-toggle-list>
          `:""}
          ${this.showEnableAccessRequestsToggle_()?html`
            <extensions-toggle-row id="show-access-requests-toggle"
                ?checked="${this.data.showAccessRequestsInToolbar}" class="hr"
                @change="${this.onShowAccessRequestsChange_}">
              <div id="access-toggle-and-link">
                <span>$i18n{itemShowAccessRequestsInToolbar}</span>
                <a class="link-icon-button"
                    aria-label="$i18n{itemShowAccessRequestsLearnMore}"
                    href="$i18n{showAccessRequestsInToolbarLearnMoreLink}"
                    target="_blank">
                  <cr-icon icon="cr:help"></cr-icon>
                </a>
              </div>
            </extensions-toggle-row>
          `:""}
        </div>
      </div>
    `:""}
    ${this.showUserScriptSectionToggle_()?html`
      <extensions-toggle-row id="allow-user-scripts"
          ?checked="${this.data.userScriptsAccess.isActive}" class="hr"
          @change="${this.onAllowUserScriptsChange_}">
        <div>
          <div>$i18n{itemAllowUserScripts}</div>
          <div class="section-content">$i18n{userScriptInfoWarning}</div>
        </div>
      </extensions-toggle-row>
    `:""}
    ${this.hasDependentExtensions_()?html`
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2">
          $i18n{itemDependencies}
        </div>
        <div class="section-content">
          <ul id="dependent-extensions-list">
            ${this.data.dependentExtensions.map((item=>html`
              <li>${this.computeDependentEntry_(item)}</li>
            `))}
          </ul>
        </div>
      </div>
    `:""}
    <cr-link-row class="hr" id="siteSettings" label="$i18n{siteSettings}"
        @click="${this.onSiteSettingsClick_}" external>
    </cr-link-row>
    ${this.shouldShowOptionsSection_()?html`
      <div id="options-section">
        ${this.canPinToToolbar_()?html`
          <extensions-toggle-row id="pin-to-toolbar"
              ?checked="${this.data.pinnedToToolbar}" class="hr"
              @change="${this.onPinnedToToolbarChange_}">
            <span>$i18n{itemPinToToolbar}</span>
          </extensions-toggle-row>
        `:""}
        ${this.shouldShowIncognitoOption_()?html`
          <extensions-toggle-row id="allow-incognito" ?checked="${this.data.incognitoAccess.isActive}" class="hr" @change="${this.onAllowIncognitoChange_}">
            <div>
              <div>$i18n{itemAllowIncognito}</div>
              <div class="section-content">$i18n{privateInfoWarning}<span ?hidden="${!this.data.incognitoAccess.isActive}"> $i18n{spanningInfoWarning}</span><span> $i18n{privateAndTorInfoWarning}</span></div>
              <div class="section-content" id="allow-incognito-warning" ?hidden="${!this.data.incognitoAccessPendingChange}">
                $i18n{pendingChangeWarning}
              </div>
            </div>
          </extensions-toggle-row>
        `:""}
        ${this.data.fileAccess.isEnabled?html`
          <extensions-toggle-row id="allow-on-file-urls"
              ?checked="${this.data.fileAccess.isActive}" class="hr"
              @change="${this.onAllowOnFileUrlsChange_}">
            <div>
              <div>$i18n{itemAllowOnFileUrls}</div>
              <div class="section-content" id="allow-on-file-urls-warning"
                  ?hidden="${!this.data.fileAccessPendingChange}">
                $i18n{pendingChangeWarning}
              </div>
            </div>
          </extensions-toggle-row>
        `:""}
        ${this.data.errorCollection.isEnabled?html`
          <extensions-toggle-row id="collect-errors"
              ?checked="${this.data.errorCollection.isActive}" class="hr"
              @change="${this.onCollectErrorsChange_}">
            <span>$i18n{itemCollectErrors}</span>
          </extensions-toggle-row>
        `:""}
      </div>
    `:""}
    <cr-link-row class="hr" id="extensionsOptions"
        ?disabled="${!this.isEnabled_()}"
        ?hidden="${!this.shouldShowOptionsLink_()}" label="$i18n{itemOptions}"
        @click="${this.onExtensionOptionsClick_}" external>
    </cr-link-row>
    <cr-link-row class="hr" id="extensionsActivityLogLink"
        ?hidden="${!this.showActivityLog}" label="$i18n{viewActivityLog}"
        @click="${this.onActivityLogClick_}"
        role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
    <cr-link-row class="hr" ?hidden="${!this.data.manifestHomePageUrl.length}"
        id="extensionWebsite" label="$i18n{extensionWebsite}"
        @click="${this.onExtensionWebSiteClick_}" external>
    </cr-link-row>
    <cr-link-row class="hr" ?hidden="${!this.data.webStoreUrl.length}"
        id="viewInStore" label="$i18n{viewInStore}"
        @click="${this.onViewInStoreClick_}" external>
    </cr-link-row>
    <cr-link-row class="hr" ?hidden="${!this.showOpenReviewPageLink_()}"
        id="rateLink" label="$i18n{itemRateExtension}"
        @click="${this.onOpenReviewPageClick_}" external>
    </cr-link-row>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemSource}
      </div>
      <div id="source" class="section-content">
        ${this.computeSourceString_()}
      </div>
      <div id="load-path" class="section-content"
          ?hidden="${!this.data.prettifiedPath}">
        <span>$i18n{itemExtensionPath}</span>
        <a is="action-link" @click="${this.onLoadPathClick_}">
          ${this.data.prettifiedPath}
        </a>
      </div>
    </div>
    <cr-link-row class="hr" id="remove-extension"
        ?hidden="${this.data.mustRemainInstalled}"
        label="$i18n{itemRemoveExtension}" @click="${this.onRemoveClick_}">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyDetailViewDelegate extends DummyItemDelegate{dismissMv2DeprecationNotice(){}}const ExtensionsDetailViewElementBase=I18nMixinLit(ItemMixin(CrLitElement));class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase{static get is(){return"extensions-detail-view"}static get styles(){return getCss$q()}render(){return getHtml$q.bind(this)()}static get properties(){return{data:{type:Object},size_:{type:String},delegate:{type:Object},inDevMode:{type:Boolean},enableEnhancedSiteControls:{type:Boolean},incognitoAvailable:{type:Boolean},showActivityLog:{type:Boolean},fromActivityLog:{type:Boolean},sortedViews_:{type:Array},showSafetyCheck_:{type:Boolean},webuiRoundedIconsEnabled_:{type:Boolean}}}#data_accessor_storage=createDummyExtensionInfo();get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#delegate_accessor_storage=new DummyDetailViewDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#enableEnhancedSiteControls_accessor_storage=false;get enableEnhancedSiteControls(){return this.#enableEnhancedSiteControls_accessor_storage}set enableEnhancedSiteControls(value){this.#enableEnhancedSiteControls_accessor_storage=value}#incognitoAvailable_accessor_storage=false;get incognitoAvailable(){return this.#incognitoAvailable_accessor_storage}set incognitoAvailable(value){this.#incognitoAvailable_accessor_storage=value}#showActivityLog_accessor_storage=false;get showActivityLog(){return this.#showActivityLog_accessor_storage}set showActivityLog(value){this.#showActivityLog_accessor_storage=value}#fromActivityLog_accessor_storage=false;get fromActivityLog(){return this.#fromActivityLog_accessor_storage}set fromActivityLog(value){this.#fromActivityLog_accessor_storage=value}#showSafetyCheck__accessor_storage=false;get showSafetyCheck_(){return this.#showSafetyCheck__accessor_storage}set showSafetyCheck_(value){this.#showSafetyCheck__accessor_storage=value}#size__accessor_storage="";get size_(){return this.#size__accessor_storage}set size_(value){this.#size__accessor_storage=value}#sortedViews__accessor_storage=[];get sortedViews_(){return this.#sortedViews__accessor_storage}set sortedViews_(value){this.#sortedViews__accessor_storage=value}#webuiRoundedIconsEnabled__accessor_storage=loadTimeData.getBoolean("webuiRoundedIconsEnabled");get webuiRoundedIconsEnabled_(){return this.#webuiRoundedIconsEnabled__accessor_storage}set webuiRoundedIconsEnabled_(value){this.#webuiRoundedIconsEnabled__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("data")){this.sortedViews_=sortViews(this.data.views);this.showSafetyCheck_=this.computeShowSafetyCheck_()}if(changedProperties.has("data")||changedProperties.has("delegate")){this.onItemIdChanged_()}}firstUpdated(){this.addEventListener("view-enter-start",this.onViewEnterStart_)}updated(changedProperties){super.updated(changedProperties);const changedPrivateProperties=changedProperties;if(changedPrivateProperties.has("showSafetyCheck_")&&this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailWarningShown")}}focusOptionsButton(){this.$.extensionsOptions.focus()}async onViewEnterStart_(){const elementToFocus=this.fromActivityLog?this.$.extensionsActivityLogLink:this.$.closeButton;await this.updateComplete;focusWithoutInk(elementToFocus)}onItemIdChanged_(){this.size_="";this.delegate.getExtensionSize(this.data.id).then((size=>{this.size_=size}))}onActivityLogClick_(){navigation.navigateTo({page:Page.ACTIVITY_LOG,extensionId:this.data.id})}getDescription_(){return this.data.description||loadTimeData.getString("noDescription")}getBackButtonAriaLabel_(){return loadTimeData.getStringF("itemDetailsBackButtonAriaLabel",this.data.name)}getBackButtonAriaRoleDescription_(){return loadTimeData.getStringF("itemDetailsBackButtonRoleDescription",this.data.name)}getEnableToggleAriaLabel_(){return getEnableToggleAriaLabel(this.isEnabled_(),this.data.type,this.i18n("appEnabled"),this.i18n("extensionEnabled"),this.i18n("itemOff"))}onCloseButtonClick_(){navigation.navigateTo({page:Page.LIST})}isEnabled_(){return isEnabled$1(this.data.state)}isEnableToggleEnabled_(){return userCanChangeEnablement(this.data)}hasDependentExtensions_(){return this.data.dependentExtensions.length>0}hasSevereWarnings_(){return this.data.disableReasons.corruptInstall||this.data.disableReasons.suspiciousInstall||this.data.disableReasons.publishedInStoreRequired||this.data.disableReasons.unsupportedDeveloperExtension||this.data.disableReasons.updateRequired||!!this.data.blocklistText||this.data.runtimeWarnings.length>0}showAccountUploadButton_(){return this.data.canUploadAsAccountExtension}showDevReloadButton_(){return this.canReloadItem()}computeEnabledStyle_(){return this.isEnabled_()?"enabled-text":""}computeEnabledText_(){return loadTimeData.getString(isEnabled$1(this.data.state)?"itemOn":"itemOff")}computeInspectLabel_(view){return computeInspectableViewLabel(view)}shouldShowOptionsLink_(){return!!this.data.optionsPage}shouldShowOptionsSection_(){return this.canPinToToolbar_()||this.data.incognitoAccess.isEnabled||this.data.fileAccess.isEnabled||this.data.errorCollection.isEnabled}canPinToToolbar_(){return this.data.pinnedToToolbar!==undefined}shouldShowIncognitoOption_(){return this.data.incognitoAccess.isEnabled&&this.incognitoAvailable}showUserScriptSectionToggle_(){return this.data.userScriptsAccess.isEnabled}onEnableToggleChange_(){this.delegate.setItemEnabled(this.data.id,this.$.enableToggle.checked);this.$.enableToggle.checked=this.isEnabled_()}onInspectClick_(e){const index=Number(e.target.dataset["index"]);this.delegate.inspectItemView(this.data.id,this.sortedViews_[index])}onExtensionOptionsClick_(){this.delegate.showItemOptionsPage(this.data)}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire("load-error",loadError)))}async onUploadClick_(){const uploaded=await this.delegate.uploadItemToAccount(this.data.id);chrome.metricsPrivate.recordBoolean(UPLOAD_EXTENSION_TO_ACCOUNT_DETAILS_VIEW_PAGE_HISTOGRAM_NAME,uploaded)}onRemoveClick_(){if(this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailRemoveClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(this.data.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}this.delegate.deleteItem(this.data.id)}onKeepClick_(){if(this.showSafetyCheck_){chrome.metricsPrivate.recordUserAction("SafetyCheck.DetailKeepClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME,convertSafetyCheckReason(this.data.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}this.delegate.setItemSafetyCheckWarningAcknowledged(this.data.id,this.data.safetyCheckWarningReason)}onRemoveButtonClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Unsupported.RemoveExtension.DetailPage");this.delegate.deleteItem(this.data.id)}onRepairClick_(){this.delegate.repairItem(this.data.id)}onLoadPathClick_(){this.delegate.showInFolder(this.data.id)}onPinnedToToolbarChange_(){this.delegate.setItemPinnedToToolbar(this.data.id,this.shadowRoot.querySelector("#pin-to-toolbar").checked)}onAllowIncognitoChange_(){this.delegate.setItemAllowedIncognito(this.data.id,this.shadowRoot.querySelector("#allow-incognito").checked);if(this.data.controlledInfo){this.data={...this.data,incognitoAccessPendingChange:!this.data.incognitoAccessPendingChange}}}onAllowUserScriptsChange_(){this.delegate.setItemAllowedUserScripts(this.data.id,this.shadowRoot.querySelector("#allow-user-scripts").checked)}onAllowOnFileUrlsChange_(){this.delegate.setItemAllowedOnFileUrls(this.data.id,this.shadowRoot.querySelector("#allow-on-file-urls").checked);if(this.data.controlledInfo){this.data={...this.data,fileAccessPendingChange:!this.data.fileAccessPendingChange}}}onCollectErrorsChange_(){this.delegate.setItemCollectsErrors(this.data.id,this.shadowRoot.querySelector("#collect-errors").checked)}onExtensionWebSiteClick_(){this.delegate.openUrl(this.data.manifestHomePageUrl)}onSiteSettingsClick_(){this.delegate.openUrl(`chrome://settings/content/siteDetails?site=chrome-extension://${this.data.id}`)}onViewInStoreClick_(){this.delegate.openUrl(this.data.webStoreUrl)}showOpenReviewPageLink_(){return this.data.canShowReviewPrompt}onOpenReviewPageClick_(){this.delegate.openReviewPage(this.data.id)}computeDependentEntry_(item){return loadTimeData.getStringF("itemDependentEntry",item.name,item.id)}computeSourceString_(){return this.data.locationText||getItemSourceString(getItemSource(this.data))}hasPermissions_(){return this.data.permissions.simplePermissions.length>0||this.hasRuntimeHostPermissions_()}getNoPermissionsString_(){const showPermissionsAndSiteAccessStrings=this.enableEnhancedSiteControls&&!this.showSiteAccessContent_();return loadTimeData.getString(showPermissionsAndSiteAccessStrings?"itemPermissionsAndSiteAccessEmpty":"itemPermissionsEmpty")}hasRuntimeHostPermissions_(){return!!this.data.permissions.runtimeHostPermissions}showSiteAccessSection_(){return!this.enableEnhancedSiteControls||this.showSiteAccessContent_()}showSiteAccessContent_(){return this.showFreeformRuntimeHostPermissions_()||this.showHostPermissionsToggleList_()}showFreeformRuntimeHostPermissions_(){return this.hasRuntimeHostPermissions_()&&this.data.permissions.runtimeHostPermissions.hasAllHosts}showHostPermissionsToggleList_(){return this.hasRuntimeHostPermissions_()&&!this.data.permissions.runtimeHostPermissions.hasAllHosts}showEnableAccessRequestsToggle_(){return this.showSiteAccessContent_()&&this.enableEnhancedSiteControls}onShowAccessRequestsChange_(){const showAccessRequestsToggle=this.shadowRoot.querySelector("#show-access-requests-toggle");assert(showAccessRequestsToggle);this.delegate.setShowAccessRequestsInToolbar(this.data.id,showAccessRequestsToggle.checked)}showReloadButton_(){return getEnableControl(this.data)===EnableControl.RELOAD}computeShowSafetyCheck_(){const ExtensionType=chrome.developerPrivate.ExtensionType;if(!(this.data.type===ExtensionType.EXTENSION||this.data.type===ExtensionType.SHARED_MODULE)){return false}return!!(this.data.safetyCheckText&&this.data.safetyCheckText.detailString)}shouldShowMv2DeprecationMessage_(){return this.data.isAffectedByMV2Deprecation&&this.data.disableReasons.unsupportedManifestVersion}shouldShowMv2DeprecationRemoveButton_(){return!this.data.mustRemainInstalled}shouldShowMv2DeprecationActionMenu_(){return!!this.data.recommendationsUrl}shouldShowMv2DeprecationFindAlternativeAction_(){return!!this.data.recommendationsUrl}shouldShowBlocklistText_(){return!this.showSafetyCheck_&&!!this.data.blocklistText}shouldShowUnsupportedDeveloperExtensionText_(){return!this.showSafetyCheck_&&this.data.disableReasons.unsupportedDeveloperExtension}showRepairButton_(){return getEnableControl(this.data)===EnableControl.REPAIR}showEnableToggle_(){const enableControl=getEnableControl(this.data);return enableControl===EnableControl.ENABLE_TOGGLE||enableControl===EnableControl.REPAIR}showAllowlistWarning_(){return this.data.showSafeBrowsingAllowlistWarning&&!this.data.blocklistText}onActionMenuButtonClick_(event){this.shadowRoot.querySelector("#actionMenu").showAt(event.target,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onFindAlternativeActionClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Unsupported.FindAlternativeForExtension.DetailPage");this.shadowRoot.querySelector("#actionMenu").close();const recommendationsUrl=this.data.recommendationsUrl;assert(!!recommendationsUrl);this.delegate.openUrl(recommendationsUrl)}getMv2DeprecationMessageHeader_(){return this.i18n("mv2DeprecationMessageDisabledHeader")}getMv2DeprecationMessageSubtitle_(){return this.i18nAdvanced("mv2DeprecationMessageDisabledSubtitle",{substitutions:["https://support.google.com/chrome_webstore"+"?p=unsupported_extensions",this.i18n("opensInNewTab")],attrs:["aria-description"]})}getMv2DeprecationMessageIcon_(){return loadTimeData.getBoolean("webuiRoundedIconsEnabled")?"extensions-icons:chrome-extension-off":"extensions-icons:extension_off-old"}getActionMenuButtonLabel_(){return this.i18n("mv2DeprecationPanelExtensionActionMenuLabel",this.data.name)}}customElements.define(ExtensionsDetailViewElement.is,ExtensionsDetailViewElement);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DragWrapper{dragEnters_=0;target_;delegate_;constructor(target,delegate){this.target_=target;this.delegate_=delegate;target.addEventListener("dragenter",(e=>this.onDragEnter_(e)));target.addEventListener("dragover",(e=>this.onDragOver_(e)));target.addEventListener("drop",(e=>this.onDrop_(e)));target.addEventListener("dragleave",(e=>this.onDragLeave_(e)))}get isCurrentDragTarget(){return this.target_.classList.contains("drag-target")}onDragEnter_(e){if(++this.dragEnters_===1){if(this.delegate_.shouldAcceptDrag(e)){this.target_.classList.add("drag-target");this.delegate_.doDragEnter(e)}}else{this.onDragOver_(e)}}onDragOver_(e){if(!this.target_.classList.contains("drag-target")){return}this.delegate_.doDragOver(e)}onDrop_(e){this.dragEnters_=0;if(!this.target_.classList.contains("drag-target")){return}this.target_.classList.remove("drag-target");this.delegate_.doDrop(e)}onDragLeave_(e){if(--this.dragEnters_>0){return}this.target_.classList.remove("drag-target");this.delegate_.doDragLeave(e)}}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function throwIfIsUnexpectedError(error,functionName){if(error?.message!==`No such extension found for call to 'developerPrivate.${functionName}'.`){throw error}}class Service{isDeleting_=false;eventsToIgnoreOnce_=new Set;getProfileConfiguration(){return chrome.developerPrivate.getProfileConfiguration()}getItemStateChangedTarget(){return chrome.developerPrivate.onItemStateChanged}shouldIgnoreUpdate(extensionId,eventType){return this.eventsToIgnoreOnce_.delete(`${extensionId}_${eventType}`)}ignoreNextEvent(extensionId,eventType){this.eventsToIgnoreOnce_.add(`${extensionId}_${eventType}`)}getProfileStateChangedTarget(){return chrome.developerPrivate.onProfileStateChanged}getExtensionsInfo(){return chrome.developerPrivate.getExtensionsInfo({includeDisabled:true,includeTerminated:true})}getExtensionSize(id){return chrome.developerPrivate.getExtensionSize(id).catch((error=>{throwIfIsUnexpectedError(error,"getExtensionSize");return""}))}addRuntimeHostPermission(id,host){return chrome.developerPrivate.addHostPermission(id,host).catch((error=>{throwIfIsUnexpectedError(error,"addHostPermission")}))}removeRuntimeHostPermission(id,host){return chrome.developerPrivate.removeHostPermission(id,host).catch((error=>{throwIfIsUnexpectedError(error,"removeHostPermission")}))}recordUserAction(metricName){chrome.metricsPrivate.recordUserAction(metricName)}chooseFilePath_(selectType,fileType){return chrome.developerPrivate.choosePath(selectType,fileType).catch((error=>{if(error.message!=="File selection was canceled."){throw error}return""}))}updateExtensionCommandKeybinding(extensionId,commandName,keybinding){chrome.developerPrivate.updateExtensionCommand({extensionId:extensionId,commandName:commandName,keybinding:keybinding})}updateExtensionCommandScope(extensionId,commandName,scope){this.ignoreNextEvent(extensionId,chrome.developerPrivate.EventType.COMMAND_REMOVED);chrome.developerPrivate.updateExtensionCommand({extensionId:extensionId,commandName:commandName,scope:scope})}setShortcutHandlingSuspended(isCapturing){chrome.developerPrivate.setShortcutHandlingSuspended(isCapturing)}loadUnpackedHelper_(extraOptions){const options=Object.assign({failQuietly:true,populateError:true},extraOptions);return chrome.developerPrivate.loadUnpacked(options).then((loadError=>{if(loadError){throw loadError}return true})).catch((error=>{if(error.message!=="File selection was canceled."){throw error}return false}))}deleteItem(id){if(this.isDeleting_){return}chrome.metricsPrivate.recordUserAction("Extensions.RemoveExtensionClick");this.isDeleting_=true;chrome.management.uninstall(id,{showConfirmDialog:true}).catch((_=>{})).finally((()=>{this.isDeleting_=false}))}uninstallItem(id){chrome.metricsPrivate.recordUserAction("Extensions.RemoveExtensionClick");return chrome.management.uninstall(id,{showConfirmDialog:true})}openReviewPage(id){return chrome.developerPrivate.openReviewPage(id).catch((()=>{}))}deleteItems(ids){this.isDeleting_=true;return chrome.developerPrivate.removeMultipleExtensions(ids).finally((()=>{this.isDeleting_=false}))}updateExtensionConfiguration_(config){return chrome.developerPrivate.updateExtensionConfiguration(config).catch((error=>{throwIfIsUnexpectedError(error,"updateExtensionConfiguration")}))}openDevTools_(properties){return chrome.developerPrivate.openDevTools(properties).catch((error=>{throwIfIsUnexpectedError(error,"openDevTools")}))}setItemSafetyCheckWarningAcknowledged(id,reason){return this.updateExtensionConfiguration_({extensionId:id,acknowledgeSafetyCheckWarningReason:reason})}setItemEnabled(id,isEnabled){chrome.metricsPrivate.recordUserAction(isEnabled?"Extensions.ExtensionEnabled":"Extensions.ExtensionDisabled");return chrome.management.setEnabled(id,isEnabled).catch((_=>{}))}setItemAllowedIncognito(id,isAllowedIncognito){this.updateExtensionConfiguration_({extensionId:id,incognitoAccess:isAllowedIncognito})}setItemAllowedUserScripts(id,isAllowedUserScripts){this.updateExtensionConfiguration_({extensionId:id,userScriptsAccess:isAllowedUserScripts})}setItemAllowedOnFileUrls(id,isAllowedOnFileUrls){this.updateExtensionConfiguration_({extensionId:id,fileAccess:isAllowedOnFileUrls})}setItemHostAccess(id,hostAccess){this.updateExtensionConfiguration_({extensionId:id,hostAccess:hostAccess})}setItemCollectsErrors(id,collectsErrors){this.updateExtensionConfiguration_({extensionId:id,errorCollection:collectsErrors})}setItemPinnedToToolbar(id,pinnedToToolbar){this.updateExtensionConfiguration_({extensionId:id,pinnedToToolbar:pinnedToToolbar})}inspectItemView(id,view){this.openDevTools_({extensionId:id,renderProcessId:view.renderProcessId,renderViewId:view.renderViewId,incognito:view.incognito,isServiceWorker:view.type==="EXTENSION_SERVICE_WORKER_BACKGROUND"})}openDevToolsForError(error){const devToolsProperties={extensionId:error.extensionId,renderProcessId:error.renderProcessId,renderViewId:error.renderViewId,incognito:error.fromIncognito,isServiceWorker:error.isServiceWorker};const stackFrame=error.stackTrace&&error.stackTrace[0];if(stackFrame){devToolsProperties.url=stackFrame.url;devToolsProperties.lineNumber=stackFrame.lineNumber;devToolsProperties.columnNumber=stackFrame.columnNumber}this.openDevTools_(devToolsProperties)}openUrl(url){window.open(url)}reloadItem(id){return chrome.developerPrivate.reload(id,{failQuietly:true,populateErrorForUnpacked:true}).then((loadError=>{if(loadError){throw loadError}}))}repairItem(id){chrome.developerPrivate.repairExtension(id).catch((_=>{}))}showItemOptionsPage(extension){assert(extension&&extension.optionsPage);const openInTab=extension.optionsPage.openInTab;if(openInTab){chrome.developerPrivate.showOptions(extension.id).catch((error=>{throwIfIsUnexpectedError(error,"showOptions")}))}else{navigation.navigateTo({page:Page.DETAILS,subpage:Dialog.OPTIONS,extensionId:extension.id})}}setProfileInDevMode(inDevMode){chrome.developerPrivate.updateProfileConfiguration({inDeveloperMode:inDevMode})}loadUnpacked(){return this.loadUnpackedHelper_()}retryLoadUnpacked(retryGuid){return this.loadUnpackedHelper_({retryGuid:retryGuid})}choosePackRootDirectory(){return this.chooseFilePath_(chrome.developerPrivate.SelectType.FOLDER,chrome.developerPrivate.FileType.LOAD)}choosePrivateKeyPath(){return this.chooseFilePath_(chrome.developerPrivate.SelectType.FILE,chrome.developerPrivate.FileType.PEM)}packExtension(rootPath,keyPath,flag){return chrome.developerPrivate.packDirectory(rootPath,keyPath,flag)}updateAllExtensions(extensions){return chrome.developerPrivate.autoUpdate().then((()=>{chrome.metricsPrivate.recordUserAction("Options_UpdateExtensions");return new Promise(((resolve,reject)=>{const loadLocalExtensions=async()=>{const unpackedExtensions=extensions.filter((ext=>ext.location===chrome.developerPrivate.Location.UNPACKED));for(const extension of unpackedExtensions){try{await this.reloadItem(extension.id)}catch(loadError){reject(loadError);break}}resolve()};loadLocalExtensions()}))}))}deleteErrors(extensionId,errorIds,type){chrome.developerPrivate.deleteExtensionErrors({extensionId:extensionId,errorIds:errorIds,type:type})}requestFileSource(args){return chrome.developerPrivate.requestFileSource(args).catch((error=>{throwIfIsUnexpectedError(error,"requestFileSource");return null}))}showInFolder(id){chrome.developerPrivate.showPath(id).catch((error=>{throwIfIsUnexpectedError(error,"showPath")}))}getExtensionActivityLog(extensionId){return chrome.activityLogPrivate.getExtensionActivities({activityType:chrome.activityLogPrivate.ExtensionActivityFilter.ANY,extensionId:extensionId})}getFilteredExtensionActivityLog(extensionId,searchTerm){const anyType=chrome.activityLogPrivate.ExtensionActivityFilter.ANY;const activityLogFilters=[{activityType:anyType,extensionId:extensionId,apiCall:`%${searchTerm}%`},{activityType:anyType,extensionId:extensionId,pageUrl:`%${searchTerm}%`},{activityType:anyType,extensionId:extensionId,argUrl:`%${searchTerm}%`}];const promises=activityLogFilters.map((filter=>chrome.activityLogPrivate.getExtensionActivities(filter)));return Promise.all(promises).then((results=>{const activitiesById=new Map;for(const result of results){for(const activity of result.activities){activitiesById.set(activity.activityId,activity)}}return{activities:Array.from(activitiesById.values())}}))}deleteActivitiesById(activityIds){return chrome.activityLogPrivate.deleteActivities(activityIds)}deleteActivitiesFromExtension(extensionId){return chrome.activityLogPrivate.deleteActivitiesByExtension(extensionId)}getOnExtensionActivity(){return chrome.activityLogPrivate.onExtensionActivity}downloadActivities(rawActivityData,fileName){const blob=new Blob([rawActivityData],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=fileName;a.click()}loadUnpackedFromDrag(){return this.loadUnpackedHelper_({useDraggedPath:true})}installDroppedFile(){chrome.developerPrivate.installDroppedFile()}notifyDragInstallInProgress(){chrome.developerPrivate.notifyDragInstallInProgress()}getUserSiteSettings(){return chrome.developerPrivate.getUserSiteSettings()}addUserSpecifiedSites(siteSet,hosts){return chrome.developerPrivate.addUserSpecifiedSites({siteSet:siteSet,hosts:hosts})}removeUserSpecifiedSites(siteSet,hosts){return chrome.developerPrivate.removeUserSpecifiedSites({siteSet:siteSet,hosts:hosts})}getUserAndExtensionSitesByEtld(){return chrome.developerPrivate.getUserAndExtensionSitesByEtld()}getMatchingExtensionsForSite(site){return chrome.developerPrivate.getMatchingExtensionsForSite(site)}getUserSiteSettingsChangedTarget(){return chrome.developerPrivate.onUserSiteSettingsChanged}setShowAccessRequestsInToolbar(id,showRequests){chrome.developerPrivate.updateExtensionConfiguration({extensionId:id,showAccessRequestsInToolbar:showRequests})}updateSiteAccess(site,updates){return chrome.developerPrivate.updateSiteAccess(site,updates)}dismissSafetyHubExtensionsMenuNotification(){chrome.developerPrivate.dismissSafetyHubExtensionsMenuNotification()}dismissMv2DeprecationNotice(){chrome.developerPrivate.updateProfileConfiguration({isMv2DeprecationNoticeDismissed:true})}uploadItemToAccount(id){return chrome.developerPrivate.uploadExtensionToAccount(id)}showSiteSettings(extensionId){chrome.developerPrivate.showSiteSettings(extensionId)}setProfileExtensionsPinnedByDefault(extensionsPinnedByDefault){chrome.developerPrivate.updateProfileConfiguration({extensionsPinnedByDefault:extensionsPinnedByDefault})}static getInstance(){return instance$s||(instance$s=new Service)}static setInstance(obj){instance$s=obj}}let instance$s=null;
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DragAndDropHandler{dragEnabled;eventTarget_;constructor(dragEnabled,target){this.dragEnabled=dragEnabled;this.eventTarget_=target}shouldAcceptDrag(e){if(!this.dragEnabled){return false}return!!e.dataTransfer.types&&e.dataTransfer.types.indexOf("Files")>-1}doDragEnter(){Service.getInstance().notifyDragInstallInProgress();this.eventTarget_.dispatchEvent(new CustomEvent("extension-drag-started"))}doDragLeave(){this.fireDragEnded_()}doDragOver(e){e.preventDefault()}doDrop(e){this.fireDragEnded_();if(e.dataTransfer.files.length!==1){return}let handled=false;const item=e.dataTransfer.items[0];const entry=item.webkitGetAsEntry();if(item.kind==="file"&&entry&&entry.isDirectory){handled=true;this.handleDirectoryDrop_()}else if(/\.(crx|zip)$/i.test(e.dataTransfer.files[0].name)){handled=true;this.handleFileDrop_()}if(handled){e.preventDefault()}}handleFileDrop_(){Service.getInstance().installDroppedFile()}handleDirectoryDrop_(){Service.getInstance().loadUnpackedFromDrag().catch((loadError=>{this.eventTarget_.dispatchEvent(new CustomEvent("drag-and-drop-load-error",{detail:loadError}))}))}fireDragEnded_(){this.eventTarget_.dispatchEvent(new CustomEvent("extension-drag-ended"))}}let instance$r=null;function getCss$p(){return instance$r||(instance$r=[...[getCss$19()],css`:host{align-items:center;background-color:rgba(241,241,241,.9);color:var(--cr-secondary-text-color);display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:10}@media (prefers-color-scheme:dark){:host{background-color:rgba(0,0,0,.6)}}#container{align-items:center;display:flex;flex-direction:column}cr-icon{height:64px;margin-bottom:16px;width:64px}#text{color:#6e6e6e;font-size:123.1%;font-weight:500}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$p(){return html`<!--_html_template_start_-->
<div id="container">
  <cr-icon icon="cr:chrome-extension-filled"></cr-icon>
  <div id="text">$i18n{dropToInstall}</div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsDropOverlayElement extends CrLitElement{static get is(){return"extensions-drop-overlay"}static get styles(){return getCss$p()}render(){return getHtml$p.bind(this)()}static get properties(){return{dragEnabled:{type:Boolean}}}#dragEnabled_accessor_storage=false;get dragEnabled(){return this.#dragEnabled_accessor_storage}set dragEnabled(value){this.#dragEnabled_accessor_storage=value}dragWrapperHandler_;eventTracker_=new EventTracker;constructor(){super();this.hidden=true;this.dragWrapperHandler_=new DragAndDropHandler(true,document.documentElement)}connectedCallback(){super.connectedCallback();const dragTarget=document.documentElement;this.eventTracker_.add(dragTarget,"extension-drag-started",(()=>{this.hidden=false}));this.eventTracker_.add(dragTarget,"extension-drag-ended",(()=>{this.hidden=true}));this.eventTracker_.add(dragTarget,"drag-and-drop-load-error",(e=>{this.fire("load-error",e.detail)}));new DragWrapper(dragTarget,this.dragWrapperHandler_)}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("dragEnabled")){this.dragWrapperHandler_.dragEnabled=this.dragEnabled}}}customElements.define(ExtensionsDropOverlayElement.is,ExtensionsDropOverlayElement);let instance$q=null;function getCss$o(){return instance$q||(instance$q=[...[],css`:host{--collapse-duration:var(--iron-collapse-transition-duration,300ms);display:block;transition:max-height var(--collapse-duration) ease-out;overflow:visible}:host([no-animation]){transition:none}:host(.collapse-closed){display:none}:host(:not(.collapse-opened)){overflow:hidden}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$o(){return html`<slot></slot>`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrCollapseElement extends CrLitElement{static get is(){return"cr-collapse"}static get styles(){return getCss$o()}render(){return getHtml$o.bind(this)()}static get properties(){return{opened:{type:Boolean,notify:true},noAnimation:{type:Boolean,reflect:true}}}#opened_accessor_storage=false;get opened(){return this.#opened_accessor_storage}set opened(value){this.#opened_accessor_storage=value}#noAnimation_accessor_storage=false;get noAnimation(){return this.#noAnimation_accessor_storage}set noAnimation(value){this.#noAnimation_accessor_storage=value}toggle(){this.opened=!this.opened}show(){this.opened=true}hide(){this.opened=false}firstUpdated(){if(!this.hasAttribute("role")){this.setAttribute("role","group")}this.setAttribute("aria-hidden","true");this.addEventListener("transitionend",(e=>this.onTransitionEnd_(e)))}updated(changedProperties){super.updated(changedProperties);if(!changedProperties.has("opened")){return}this.setAttribute("aria-hidden",this.opened?"false":"true");this.classList.toggle("collapse-closed",false);this.classList.toggle("collapse-opened",false);this.updateHeight_(this.opened,changedProperties.get("opened"));if(this.opened){this.focus()}}updateHeight_(opening,lastOpened){const finalMaxHeight=opening?"":"0px";const animationStartSize=`${this.getBoundingClientRect().height}px`;const animationEndSize=opening?`${this.scrollHeight}px`:"0px";const willAnimate=lastOpened!==undefined&&!this.noAnimation&&this.style.maxHeight!==finalMaxHeight&&animationStartSize!==animationEndSize;if(willAnimate&&!opening){this.style.maxHeight=animationStartSize;this.scrollTop=this.scrollTop}this.style.maxHeight=animationEndSize;if(!willAnimate){this.updateStyles_()}}onTransitionEnd_(e){if(e.composedPath()[0]===this){this.updateStyles_()}}updateStyles_(){this.style.maxHeight=this.opened?"":"0px";this.classList.toggle("collapse-closed",!this.opened);this.classList.toggle("collapse-opened",this.opened)}}customElements.define(CrCollapseElement.is,CrCollapseElement);let instance$p=null;function getCss$n(){return instance$p||(instance$p=[...[getCss$19()],css`:host{--paper-grey-500:#9e9e9e;--paper-grey-800:#424242;--container-bg:white;--line-bg:var(--paper-grey-300);--main-color:var(--paper-grey-800);display:block}@media (prefers-color-scheme:dark){:host{--container-bg:rgba(0,0,0,.4);--line-bg:var(--google-grey-800);--main-color:var(--cr-primary-text-color)}}#scrollContainer{background:var(--container-bg);height:100%;overflow:auto;position:relative}@media (prefers-color-scheme:light){#scrollContainer{border:1px solid var(--paper-grey-500)}}#main{color:var(--main-color);display:flex;font-family:monospace;min-height:100%}#line-numbers{background:var(--line-bg);display:flex;flex-direction:column;padding:0 8px;text-align:end}@media (prefers-color-scheme:light){#line-numbers{border-inline-end:1px solid var(--paper-grey-500)}}#source{display:flex;flex-direction:column;margin-inline-start:4px}#line-numbers span,#source span{white-space:pre}#no-code{text-align:center}@media (prefers-color-scheme:light){#no-code{color:var(--paper-grey-800)}.more-code{color:var(--paper-grey-500)}}#highlight-description{height:0;overflow:hidden}@media (prefers-color-scheme:dark){mark{background-color:var(--google-yellow-300);color:var(--google-grey-900)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$n(){return html`<!--_html_template_start_-->
<div id="scrollContainer" ?hidden="${!this.highlighted_}" dir="ltr">
  <div id="main">
    <!-- Line numbers are not useful to a screenreader -->
    <div id="line-numbers" aria-hidden="true">
      <div class="more-code before" ?hidden="${!this.truncatedBefore_}">
        ...
      </div>
      <span>${this.lineNumbers_}</span>
      <div class="more-code after" ?hidden="${!this.truncatedAfter_}">
        ...
      </div>
    </div>
    <div id="source">
      <div class="more-code before" ?hidden="${!this.truncatedBefore_}">
        ${this.getLinesNotShownLabel_(this.truncatedBefore_)}
      </div>
      <span><!-- Whitespace is preserved in this span. Ignore new lines.
        --><span>${this.before_}</span><!--
        --><mark aria-description="${this.highlightDescription_}"><!--
          -->${this.highlighted_}<!--
        --></mark><!--
        --><span>${this.after_}</span><!--
      --></span>
      <div class="more-code after" ?hidden="${!this.truncatedAfter_}">
        ${this.getLinesNotShownLabel_(this.truncatedAfter_)}
      </div>
    </div>
  </div>
</div>
<div id="no-code" ?hidden="${!this.shouldShowNoCode_()}">
  ${this.couldNotDisplayCode}
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function visibleLineCount(totalCount,oppositeCount){const MAX_VISIBLE_LINES=1e3;const max=Math.max(MAX_VISIBLE_LINES/2,MAX_VISIBLE_LINES-oppositeCount);return Math.min(max,totalCount)}const ExtensionsCodeSectionElementBase=I18nMixinLit(CrLitElement);class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase{static get is(){return"extensions-code-section"}static get styles(){return getCss$n()}render(){return getHtml$n.bind(this)()}static get properties(){return{code:{type:Object},isActive:{type:Boolean},highlighted_:{type:String},before_:{type:String},after_:{type:String},highlightDescription_:{type:String},lineNumbers_:{type:String},truncatedBefore_:{type:Number},truncatedAfter_:{type:Number},couldNotDisplayCode:{type:String}}}#code_accessor_storage=null;get code(){return this.#code_accessor_storage}set code(value){this.#code_accessor_storage=value}#isActive_accessor_storage;get isActive(){return this.#isActive_accessor_storage}set isActive(value){this.#isActive_accessor_storage=value}#couldNotDisplayCode_accessor_storage="";get couldNotDisplayCode(){return this.#couldNotDisplayCode_accessor_storage}set couldNotDisplayCode(value){this.#couldNotDisplayCode_accessor_storage=value}#highlighted__accessor_storage="";get highlighted_(){return this.#highlighted__accessor_storage}set highlighted_(value){this.#highlighted__accessor_storage=value}#before__accessor_storage="";get before_(){return this.#before__accessor_storage}set before_(value){this.#before__accessor_storage=value}#after__accessor_storage="";get after_(){return this.#after__accessor_storage}set after_(value){this.#after__accessor_storage=value}#highlightDescription__accessor_storage="";get highlightDescription_(){return this.#highlightDescription__accessor_storage}set highlightDescription_(value){this.#highlightDescription__accessor_storage=value}#lineNumbers__accessor_storage="";get lineNumbers_(){return this.#lineNumbers__accessor_storage}set lineNumbers_(value){this.#lineNumbers__accessor_storage=value}#truncatedBefore__accessor_storage=0;get truncatedBefore_(){return this.#truncatedBefore__accessor_storage}set truncatedBefore_(value){this.#truncatedBefore__accessor_storage=value}#truncatedAfter__accessor_storage=0;get truncatedAfter_(){return this.#truncatedAfter__accessor_storage}set truncatedAfter_(value){this.#truncatedAfter__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("code")){this.onCodeChanged_()}}async onCodeChanged_(){if(!this.code?.source){this.highlighted_="";this.highlightDescription_="";this.before_="";this.after_="";this.lineNumbers_="";return}const before=this.code.source.beforeHighlight;const highlight=this.code.source.highlight;const after=this.code.source.afterHighlight;const linesBefore=before?before.split("\n"):[];const linesAfter=after?after.split("\n"):[];const visibleLineCountBefore=visibleLineCount(linesBefore.length,linesAfter.length);const visibleLineCountAfter=visibleLineCount(linesAfter.length,linesBefore.length);const visibleBefore=linesBefore.slice(linesBefore.length-visibleLineCountBefore).join("\n");let visibleAfter=linesAfter.slice(0,visibleLineCountAfter).join("\n");if(visibleAfter.charAt(visibleAfter.length-1)==="\n"){visibleAfter+=" "}this.highlighted_=highlight;this.highlightDescription_=this.getAccessibilityHighlightDescription_(linesBefore.length,highlight.split("\n").length);this.before_=visibleBefore;this.after_=visibleAfter;this.truncatedBefore_=linesBefore.length-visibleLineCountBefore;this.truncatedAfter_=linesAfter.length-visibleLineCountAfter;const visibleCode=visibleBefore+highlight+visibleAfter;this.setLineNumbers_(this.truncatedBefore_+1,this.truncatedBefore_+visibleCode.split("\n").length);await this.updateComplete;this.scrollToHighlight_(visibleLineCountBefore)}getLinesNotShownLabel_(lineCount){return lineCount===1?loadTimeData.getString("errorLinesNotShownSingular"):loadTimeData.substituteString(loadTimeData.getString("errorLinesNotShownPlural"),lineCount)}setLineNumbers_(start,end){let lineNumbers="";for(let i=start;i<=end;++i){lineNumbers+=i+"\n"}this.lineNumbers_=lineNumbers}scrollToHighlight_(linesBeforeHighlight){const CSS_LINE_HEIGHT=20;const highlightTop=linesBeforeHighlight*CSS_LINE_HEIGHT;const targetTop=highlightTop-this.clientHeight*.5;this.$.scrollContainer.scrollTo({top:targetTop})}getAccessibilityHighlightDescription_(lineStart,numLines){if(numLines>1){return this.i18n("accessibilityErrorMultiLine",lineStart.toString(),(lineStart+numLines-1).toString())}else{return this.i18n("accessibilityErrorLine",lineStart.toString())}}shouldShowNoCode_(){return(this.isActive===undefined||this.isActive)&&!this.highlighted_}}customElements.define(ExtensionsCodeSectionElement.is,ExtensionsCodeSectionElement);let instance$o=null;function getCss$m(){return instance$o||(instance$o=[...[getCss$12(),getCss$11()],css`:host{display:block;height:100%}cr-icon{--iron-icon-fill-color:var(--google-grey-700);flex-shrink:0;height:var(--cr-icon-size);width:var(--cr-icon-size)}cr-icon[icon='cr:warning-filled']{--iron-icon-fill-color:#ff9800}cr-icon[icon='cr:error-filled']{--iron-icon-fill-color:var(--error-color)}.section{padding:0 var(--cr-section-padding)}#heading{align-items:center;display:flex;height:40px;margin-bottom:30px;padding:8px 12px 0}#heading span{flex:1;margin:0 10px}#dev-reload-button{margin-inline-end:12px}#errorsList{min-height:100px}.error-item{padding-inline-start:0}.error-item cr-icon-button{margin:0}.error-item.selected{background-color:rgba(0,0,0,0.08)}.error-item .start{align-items:center;align-self:stretch;display:flex;flex:1;padding:0 var(--cr-section-padding)}.error-message{flex-grow:1;margin-inline-start:10px;word-break:break-word}.devtools-controls{padding:0 var(--cr-section-padding)}.details-heading{align-items:center;display:flex;height:var(--cr-section-min-height)}.stack-trace-container{list-style:none;margin-top:0;padding:0}.stack-trace-container li{cursor:pointer;font-family:monospace;padding:4px}.stack-trace-container li.selected,.stack-trace-container li:hover{background:var(--google-blue-100);color:var(--google-grey-900)}extensions-code-section{height:200px;margin-bottom:20px}:host-context(.focus-outline-visible) .start:focus{outline:-webkit-focus-ring-color auto 5px}.start:focus{outline:none}.context-url{word-wrap:break-word}.view-devtools-button{margin-bottom:10px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$m(){return html`<!--_html_template_start_-->
<div class="page-container" id="container">
  <div class="page-content">
    <div id="heading" class="cr-title-text">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton"
          aria-label="$i18n{back}" @click="${this.onCloseButtonClick_}">
      </cr-icon-button>
      <span role="heading" aria-level="2">$i18n{errorsPageHeading}</span>
      ${this.showReloadButton_()?html`
        <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap"
            title="$i18n{itemReload}" aria-label="$i18n{itemReload}"
            aria-describedby="a11yAssociation" @click="${this.onReloadClick_}">
        </cr-icon-button>
      `:""}
      <cr-button @click="${this.onClearAllClick_}"
          ?hidden="${!this.entries_.length}">
        $i18n{clearAll}
      </cr-button>
    </div>
    <div class="section">
      <div id="errorsList">
        ${this.entries_.map(((entry,index)=>html`
          <div class="item-container">
            <div class="cr-row error-item ${this.computeErrorClass_(index)}">
              <div actionable class="start" @click="${this.onErrorItemClick_}"
                  @keydown="${this.onErrorItemKeydown_}" tabindex="0"
                  data-error-index="${index}" role="button"
                  aria-expanded="${this.isAriaExpanded_(index)}">
                <cr-icon .icon="${this.computeErrorIcon_(entry)}"
                    title="${this.computeErrorTypeLabel_(entry)}">
                </cr-icon>
                <div id="${entry.id}" class="error-message">
                  ${entry.message}
                </div>
                <div class="cr-icon ${this.iconName_(index)}"></div>
              </div>
              <div class="separator"></div>
              <cr-icon-button class="icon-delete-gray"
                  data-error-id="${entry.id}"
                  @click="${this.onDeleteErrorClick_}"
                  aria-describedby="${entry.id}" aria-label="$i18n{clearEntry}">
              </cr-icon-button>
            </div>
            <cr-collapse ?opened="${this.isOpened_(index)}">
              <div class="devtools-controls">
                ${this.computeIsRuntimeError_(entry)?html`
                  <div class="details-heading cr-title-text" role="heading"
                      aria-level="3">
                    $i18n{errorContext}
                  </div>
                  <span class="context-url">
                    ${this.getContextUrl_(entry)}
                  </span>
                  <div class="details-heading cr-title-text" role="heading"
                      aria-level="3">
                    $i18n{stackTrace}
                  </div>
                  <ul class="stack-trace-container" data-error-index="${index}"
                      @keydown="${this.onStackKeydown_}">
                    ${entry.stackTrace.map(((item,frameIndex)=>html`
                      <li @click="${this.onStackFrameClick_}"
                          data-frame-index="${frameIndex}"
                          data-error-index="${index}"
                          tabindex="${this.getStackFrameTabIndex_(item)}"
                          ?hidden="${!this.shouldDisplayFrame_(item.url)}"
                          class="${this.getStackFrameClass_(item)}">
                        ${this.getStackTraceLabel_(item)}
                      </li>
                    `))}
                  </ul>
                  ${entry.canInspect?html`
                    <cr-button class="view-devtools-button"
                        data-error-index="${index}"
                        @click="${this.onViewInDevToolsClick_}">
                      $i18n{viewInDevTools}
                    </cr-button>
                  `:""}
                `:""}
                <extensions-code-section .code="${this.code_}"
                    ?is-active="${this.isOpened_(index)}"
                    could-not-display-code="$i18n{noErrorsToShow}">
                </extensions-code-section>
              </div>
            </cr-collapse>
          </div>
        `))}
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getRelativeUrl(url,error){const fullUrl=error?`chrome-extension://${error.extensionId}/`:"";return fullUrl&&url.startsWith(fullUrl)?url.substring(fullUrl.length):url}function getErrorSeverityText(item,log,warn,error){if(item.type===chrome.developerPrivate.ErrorType.RUNTIME){const severity=item.severity;switch(severity){case chrome.developerPrivate.ErrorLevel.LOG:return log;case chrome.developerPrivate.ErrorLevel.WARN:return warn;case chrome.developerPrivate.ErrorLevel.ERROR:return error;default:assertNotReachedCase()}}assert(item.type===chrome.developerPrivate.ErrorType.MANIFEST);return warn}const ExtensionsErrorPageElementBase=ItemMixin(CrLitElement);class ExtensionsErrorPageElement extends ExtensionsErrorPageElementBase{static get is(){return"extensions-error-page"}static get styles(){return getCss$m()}render(){return getHtml$m.bind(this)()}static get properties(){return{data:{type:Object},delegate:{type:Object},inDevMode:{type:Boolean},entries_:{type:Array},code_:{type:Object},selectedEntry_:{type:Number},selectedStackFrame_:{type:Object}}}#data_accessor_storage;get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#entries__accessor_storage=[];get entries_(){return this.#entries__accessor_storage}set entries_(value){this.#entries__accessor_storage=value}#code__accessor_storage=null;get code_(){return this.#code__accessor_storage}set code_(value){this.#code__accessor_storage=value}#selectedEntry__accessor_storage=-1;get selectedEntry_(){return this.#selectedEntry__accessor_storage}set selectedEntry_(value){this.#selectedEntry__accessor_storage=value}#selectedStackFrame__accessor_storage=null;get selectedStackFrame_(){return this.#selectedStackFrame__accessor_storage}set selectedStackFrame_(value){this.#selectedStackFrame__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("data")&&this.data){this.entries_=[...this.data.manifestErrors,...this.data.runtimeErrors];this.selectedEntry_=this.entries_.length>0?0:-1;this.onSelectedErrorChanged_()}}firstUpdated(){this.addEventListener("view-enter-start",this.onViewEnterStart_);FocusOutlineManager.forDocument(document)}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("inDevMode")&&!this.inDevMode){this.onCloseButtonClick_()}}getSelectedError(){return this.selectedEntry_===-1?null:this.entries_[this.selectedEntry_]}onViewEnterStart_(){this.updateComplete.then((()=>focusWithoutInk(this.$.closeButton)));chrome.metricsPrivate.recordUserAction("Options_ViewExtensionErrors")}getContextUrl_(error){return error.contextUrl?getRelativeUrl(error.contextUrl,error):loadTimeData.getString("errorContextUnknown")}onCloseButtonClick_(){navigation.navigateTo({page:Page.LIST})}onClearAllClick_(){const ids=this.entries_.map((entry=>entry.id));assert(this.data);assert(this.delegate);this.delegate.deleteErrors(this.data.id,ids)}computeErrorIcon_(error){return getErrorSeverityText(error,"cr:info-filled","cr:warning-filled","cr:error-filled")}computeErrorTypeLabel_(error){return getErrorSeverityText(error,loadTimeData.getString("logLevel"),loadTimeData.getString("warnLevel"),loadTimeData.getString("errorLevel"))}onDeleteErrorClick_(e){const id=Number(e.currentTarget.dataset["errorId"]);assert(this.data);assert(this.delegate);this.delegate.deleteErrors(this.data.id,[id]);e.stopPropagation()}onSelectedErrorChanged_(){this.code_=null;if(this.selectedEntry_<0){return}const error=this.getSelectedError();const args={extensionId:error.extensionId,message:error.message,pathSuffix:""};switch(error.type){case chrome.developerPrivate.ErrorType.MANIFEST:const manifestError=error;args.pathSuffix=manifestError.source;args.manifestKey=manifestError.manifestKey;args.manifestSpecific=manifestError.manifestSpecific;break;case chrome.developerPrivate.ErrorType.RUNTIME:const runtimeError=error;try{args.pathSuffix=new URL(runtimeError.source).pathname.slice(1)}catch(e){return}args.lineNumber=runtimeError.stackTrace&&runtimeError.stackTrace[0]?runtimeError.stackTrace[0].lineNumber:0;this.selectedStackFrame_=runtimeError.stackTrace&&runtimeError.stackTrace[0]?runtimeError.stackTrace[0]:null;break;default:assertNotReachedCase(error.type)}assert(this.delegate);this.delegate.requestFileSource(args).then((code=>this.code_=code))}computeIsRuntimeError_(item){return item.type===chrome.developerPrivate.ErrorType.RUNTIME}getStackTraceLabel_(frame){let description=getRelativeUrl(frame.url,this.getSelectedError())+":"+frame.lineNumber;if(frame.functionName){const functionName=frame.functionName==="(anonymous function)"?loadTimeData.getString("anonymousFunction"):frame.functionName;description+=" ("+functionName+")"}return description}getStackFrameClass_(frame){return frame===this.selectedStackFrame_?"selected":""}getStackFrameTabIndex_(frame){return frame===this.selectedStackFrame_?0:-1}shouldDisplayFrame_(url){return!/^extensions::/.test(url)}updateSelected_(frame){this.selectedStackFrame_=frame;const selectedError=this.getSelectedError();assert(selectedError);assert(this.delegate);this.delegate.requestFileSource({extensionId:selectedError.extensionId,message:selectedError.message,pathSuffix:getRelativeUrl(frame.url,selectedError),lineNumber:frame.lineNumber}).then((code=>this.code_=code))}onStackFrameClick_(e){const target=e.currentTarget;const frameIndex=Number(target.dataset["frameIndex"]);const errorIndex=Number(target.dataset["errorIndex"]);const error=this.entries_[errorIndex];const frame=error.stackTrace[frameIndex];this.updateSelected_(frame)}onStackKeydown_(e){let direction=0;if(e.key==="ArrowDown"){direction=1}else if(e.key==="ArrowUp"){direction=-1}else{return}e.preventDefault();const list=e.target.parentElement.querySelectorAll("li");for(let i=0;i<list.length;++i){if(list[i].classList.contains("selected")){const index=Number(e.currentTarget.dataset["errorIndex"]);const item=this.entries_[index];const frame=item.stackTrace[i+direction];if(frame){this.updateSelected_(frame);list[i+direction].focus()}return}}}computeErrorClass_(index){return index===this.selectedEntry_?"selected":""}iconName_(index){return index===this.selectedEntry_?"icon-expand-less":"icon-expand-more"}isOpened_(index){return index===this.selectedEntry_}isAriaExpanded_(index){return this.isOpened_(index).toString()}onErrorItemClick_(e){this.onErrorItemAction_(e)}onErrorItemKeydown_(e){this.onErrorItemAction_(e)}onErrorItemAction_(e){if(e.type==="keydown"&&!(e.code==="Space"||e.code==="Enter")){return}e.preventDefault();const index=Number(e.currentTarget.dataset["errorIndex"]);this.selectedEntry_=this.selectedEntry_===index?-1:index;this.onSelectedErrorChanged_()}showReloadButton_(){return this.canReloadItem()}onReloadClick_(){this.reloadItem().catch((loadError=>this.fire("load-error",loadError)))}onViewInDevToolsClick_(e){if(!this.data||!this.entries_){return}const target=e.currentTarget;const errorIndex=Number(target.dataset["errorIndex"]);const error=this.entries_[errorIndex];if(error.canInspect){assert(this.delegate);this.delegate.openDevToolsForError(error);return}console.warn("Cannot open DevTools for this error context.");return}}customElements.define(ExtensionsErrorPageElement.is,ExtensionsErrorPageElement);let instance$n=null;function getCss$l(){return instance$n||(instance$n=[...[getCss$11()],css`div[slot='body'] ul{background-color:#ffebee;margin:0;padding-bottom:10px;padding-inline-end:10px;padding-top:10px}@media (prefers-color-scheme:dark){div[slot='body'] ul{background-color:rgba(0,0,0,.3);color:var(--error-color)}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$l(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{installWarnings}</div>
  <div slot="body">
    <ul>
      ${this.installWarnings.map((item=>html`
        <li>${item}</li>
      `))}
    </ul>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" @click="${this.onOkClick_}">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsInstallWarningsDialogElement extends CrLitElement{static get is(){return"extensions-install-warnings-dialog"}static get styles(){return getCss$l()}render(){return getHtml$l.bind(this)()}static get properties(){return{installWarnings:{type:Array}}}#installWarnings_accessor_storage=[];get installWarnings(){return this.#installWarnings_accessor_storage}set installWarnings(value){this.#installWarnings_accessor_storage=value}onOkClick_(){this.$.dialog.close()}}customElements.define(ExtensionsInstallWarningsDialogElement.is,ExtensionsInstallWarningsDialogElement);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WebUiListenerMixinLit=superClass=>{class WebUiListenerMixinLit extends superClass{webUiListeners_=[];addWebUiListener(eventName,callback){this.webUiListeners_.push(addWebUiListener(eventName,callback))}disconnectedCallback(){super.disconnectedCallback();while(this.webUiListeners_.length>0){removeWebUiListener(this.webUiListeners_.pop())}}}return WebUiListenerMixinLit};let instance$m=null;function getCss$k(){return instance$m||(instance$m=[...[],css`:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:0.8125rem;justify-content:center;padding:0 24px}:host-context([webui-refresh-2026]){a:focus{border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}cr-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$k(){return html`
${this.isManaged_?html`
  <cr-icon .icon="${this.managedByIcon_}"></cr-icon>
  <div id="content" .innerHTML="${this.getManagementString_()}"></div>
`:""}`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedFootnoteElementBase=I18nMixinLit(WebUiListenerMixinLit(CrLitElement));class ManagedFootnoteElement extends ManagedFootnoteElementBase{static get is(){return"managed-footnote"}static get styles(){return getCss$k()}render(){return getHtml$k.bind(this)()}static get properties(){return{isManaged_:{reflect:true,type:Boolean},managedByIcon_:{reflect:true,type:String}}}#isManaged__accessor_storage=loadTimeData.getBoolean("isManaged");get isManaged_(){return this.#isManaged__accessor_storage}set isManaged_(value){this.#isManaged__accessor_storage=value}#managedByIcon__accessor_storage=loadTimeData.getString("managedByIcon");get managedByIcon_(){return this.#managedByIcon__accessor_storage}set managedByIcon_(value){this.#managedByIcon__accessor_storage=value}firstUpdated(){this.addWebUiListener("is-managed-changed",(managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed}))}getManagementString_(){return this.i18nAdvanced("browserManagedByOrg")}}customElements.define(ManagedFootnoteElement.is,ManagedFootnoteElement);chrome.send("observeManagedUI");
// Copyright (c) 2024 The Brave Authors. All rights reserved.
if(window.location.href==="chrome://downloads/"||window.location.href==="chrome://extensions/"||window.location.href.startsWith("chrome://settings/")){injectStyle(ManagedFootnoteElement,css`
    :host([is-managed_]) {
      display: none !important;
    }
  `)}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PluralStringProxyImpl{getPluralString(messageName,itemCount){return sendWithPromise("getPluralString",messageName,itemCount)}getPluralStringTupleWithComma(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithComma",messageName1,itemCount1,messageName2,itemCount2)}getPluralStringTupleWithPeriods(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithPeriods",messageName1,itemCount1,messageName2,itemCount2)}static getInstance(){return instance$l||(instance$l=new PluralStringProxyImpl)}static setInstance(obj){instance$l=obj}}let instance$l=null;let instance$k=null;function getCss$j(){return instance$k||(instance$k=[...[getCss$11(),getCss$N()],css`.cr-row{padding:0}.header-button,.extension-buttons{margin-inline-start:auto}@container (max-width:450px){.panel-extension-info{max-width:116px}}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$j(){return html`<!--_html_template_start_-->
<h2 class="panel-title" ?hidden="${!this.showTitle}">
  $i18n{mv2DeprecationPanelTitle}
</h2>

<div class="panel-background" id="panelContainer">
  <div class="panel-header">
    <cr-icon aria-hidden="true"
        icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:chrome-extension":"extensions-icons:my_extensions-old"}"
        class="panel-header-icon">
    </cr-icon>
    <div class="panel-header-text">
      <h3 id="headingText">${this.headerString_}</h3>
      <div class="cr-secondary-text" .innerHTML="${this.getSubtitleString_()}">
      </div>
    </div>
    <cr-button class="header-button" @click="${this.onDismissButtonClick_}">
      $i18n{mv2DeprecationPanelDismissButton}
    </cr-button>
  </div>

  <div class="panel-extensions">
    ${this.extensions.map(((item,index)=>html`
      <div class="panel-extension-row cr-row">
        <img class="panel-extension-icon" src="${item.iconUrl}"
            role="presentation">
        <div class="panel-extension-info text-elide">${item.name}</div>
        <div class="extension-buttons">
          <cr-icon-button id="removeButton" class="icon-delete-gray"
              data-id="${item.id}" @click="${this.onRemoveButtonClick_}"
              title="$i18n{remove}"
              aria-label="${this.getRemoveButtonLabelFor_(item.name)}"
              ?hidden="${!this.showExtensionRemoveButton_(item)}">
          </cr-icon-button>
          <cr-icon-button id="actionMenuButton" data-index="${index}"
              class="icon-more-vert header-aligned-button"
              @click="${this.onExtensionActionMenuClick_}"
              title="$i18n{moreOptions}"
              aria-label="${this.getActionMenuButtonLabelFor_(item.name)}"
              ?hidden="${!this.showActionMenu_(item)}">
          </cr-icon-button>
        </div>
      </div>
    `))}

    <cr-action-menu id="actionMenu">
      <button class="dropdown-item" id="findAlternativeAction"
          @click="${this.onFindAlternativeExtensionActionClick_}"
          ?hidden="${!this.showExtensionFindAlternativeAction_()}">
        Find alternatives
      </button>
    </cr-action-menu>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsMv2DeprecationPanelElementBase=I18nMixinLit(CrLitElement);class ExtensionsMv2DeprecationPanelElement extends ExtensionsMv2DeprecationPanelElementBase{static get is(){return"extensions-mv2-deprecation-panel"}static get styles(){return getCss$j()}render(){return getHtml$j.bind(this)()}static get properties(){return{delegate:{type:Object},extensions:{type:Array},showTitle:{type:Boolean,reflect:true},headerString_:{type:String},subtitleString_:{type:String},extensionWithActionMenuOpened_:{type:Object},webuiRoundedIconsEnabled_:{type:Boolean}}}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#showTitle_accessor_storage=false;get showTitle(){return this.#showTitle_accessor_storage}set showTitle(value){this.#showTitle_accessor_storage=value}#headerString__accessor_storage="";get headerString_(){return this.#headerString__accessor_storage}set headerString_(value){this.#headerString__accessor_storage=value}#webuiRoundedIconsEnabled__accessor_storage=loadTimeData.getBoolean("webuiRoundedIconsEnabled");get webuiRoundedIconsEnabled_(){return this.#webuiRoundedIconsEnabled__accessor_storage}set webuiRoundedIconsEnabled_(value){this.#webuiRoundedIconsEnabled__accessor_storage=value}#subtitleString__accessor_storage="";get subtitleString_(){return this.#subtitleString__accessor_storage}set subtitleString_(value){this.#subtitleString__accessor_storage=value}#extensionWithActionMenuOpened__accessor_storage;get extensionWithActionMenuOpened_(){return this.#extensionWithActionMenuOpened__accessor_storage}set extensionWithActionMenuOpened_(value){this.#extensionWithActionMenuOpened__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("extensions")){this.onExtensionsChanged_()}}async onExtensionsChanged_(){const headerVar="mv2DeprecationPanelDisabledHeader";const subtitleVar="mv2DeprecationPanelDisabledSubtitle";const subtitleLink="https://support.google.com/chrome_webstore?"+"p=unsupported_extensions";this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString(headerVar,this.extensions.length);const subtitle=await PluralStringProxyImpl.getInstance().getPluralString(subtitleVar,this.extensions.length);this.subtitleString_=subtitle.replace("$1",subtitleLink);this.subtitleString_=this.subtitleString_.replace("$2",this.i18n("opensInNewTab"))}showExtensionRemoveButton_(extension){return!extension.mustRemainInstalled}showActionMenu_(extension){return!!extension.recommendationsUrl}showExtensionFindAlternativeAction_(){return!!this.extensionWithActionMenuOpened_&&!!this.extensionWithActionMenuOpened_.recommendationsUrl}getRemoveButtonLabelFor_(extensionName){return this.i18n("mv2DeprecationPanelRemoveButtonAccLabel",extensionName)}getActionMenuButtonLabelFor_(extensionName){return this.i18n("mv2DeprecationPanelExtensionActionMenuLabel",extensionName)}getSubtitleString_(){return sanitizeInnerHtml(this.subtitleString_,{attrs:["aria-description"]})}onDismissButtonClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Unsupported.Dismissed");assert(this.delegate);this.delegate.dismissMv2DeprecationNotice()}onRemoveButtonClick_(event){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Unsupported.RemoveExtension");this.$.actionMenu.close();const id=event.target.dataset["id"];assert(!!id);assert(this.delegate);this.delegate.deleteItem(id)}onExtensionActionMenuClick_(event){const index=Number(event.target.dataset["index"]);this.extensionWithActionMenuOpened_=this.extensions[index];this.$.actionMenu.showAt(event.target,{anchorAlignmentY:AnchorAlignment.AFTER_END})}onFindAlternativeExtensionActionClick_(){chrome.metricsPrivate.recordUserAction("Extensions.Mv2Deprecation.Unsupported.FindAlternativeForExtension");const recommendationsUrl=this.extensionWithActionMenuOpened_?.recommendationsUrl;assert(!!recommendationsUrl);assert(this.delegate);this.delegate.openUrl(recommendationsUrl)}}customElements.define(ExtensionsMv2DeprecationPanelElement.is,ExtensionsMv2DeprecationPanelElement);let instance$j=null;function getCss$i(){return instance$j||(instance$j=[...[getCss$11(),getCss$N()],css`.panel-header{padding:calc(var(--cr-section-padding) - var(--cr-section-vertical-padding)) 0}.header-group-wrapper{flex:1;margin-inline-start:15px}cr-icon[icon='cr:check']{padding-inline-start:10px;fill:var(--google-green-700)}@media (prefers-color-scheme:dark){cr-icon[icon='cr:check']{fill:var(--google-green-300)}}.completion-container{font-weight:500;font-size:14px;margin-top:20px;min-height:42px}.panel-extension-info{flex:1;margin-top:15px;margin-bottom:0}.bulk-action-button{margin-inline-start:auto}.cr-row{padding:0}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$i(){return html`<!--_html_template_start_-->
<h2 id="safetyHubTitleContainer" class="panel-title"
    ?hidden="${!this.shouldShowExtensionsSafetyHub_()}">
  $i18n{safetyHubHeader}
</h2>

<div class="panel-background"
    ?hidden="${!this.shouldShowExtensionsSafetyHub_()}">
  <cr-expand-button no-hover id="expandButton"
      ?expanded="${this.unsafeExtensionsReviewListExpanded_}"
      @expanded-changed="${this.onUnsafeExtensionsReviewListExpandedChanged_}"
      ?hidden="${!this.shouldShowUnsafeExtensions_}">
    <div class="panel-header" id="reviewPanelContainer">
      <cr-icon aria-hidden="true"
          icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:chrome-extension":"extensions-icons:my_extensions-old"}"
          class="panel-header-icon">
      </cr-icon>
      <div class="panel-header-text">
        <h3 id="headingText">${this.headerString_}</h3>
        <div class="cr-secondary-text" id="secondaryText">
          ${this.subtitleString_}
        </div>
      </div>
      <cr-button class="action-button bulk-action-button"
          aria-label="$i18n{safetyCheckRemoveAll}" id="removeAllButton"
          @click="${this.onRemoveAllClick_}"
          ?hidden="${!this.shouldShowSafetyHubRemoveAllButton_()}">
        $i18n{safetyCheckRemoveAll}
      </cr-button>
    </div>
  </cr-expand-button>
  <cr-collapse class="panel-extensions"
      ?opened="${this.unsafeExtensionsReviewListExpanded_}"
      ?hidden="${!this.shouldShowUnsafeExtensions_}">
    ${this.extensions.map(((item,index)=>html`
      <div class="panel-extension-row cr-row">
        <img class="panel-extension-icon" src="${item.iconUrl}"
            role="presentation">
        <div class="panel-extension-info text-elide">
          <div class="extension-representation">${item.name}</div>
          <div class="cr-secondary-text">
            ${item.safetyCheckText?.panelString||""}
          </div>
        </div>
        <cr-icon-button iron-icon="cr:delete" data-index="${index}" actionable
            @click="${this.onRemoveExtensionClick_}"
            aria-label="${this.getRemoveButtonA11yLabel_(item.name)}">
        </cr-icon-button>
        <cr-icon-button class="icon-more-vert header-aligned-button"
            id="makeExceptionMenuButton" data-index="${index}"
            @click="${this.onMakeExceptionMenuClick_}"
            aria-label="${this.getOptionMenuA11yLabel_(item.name)}"
            focus-type="makeExceptionMenuButton">
        </cr-icon-button>
      </div>
    `))}
  </cr-collapse>
  <div class="header-with-icon completion-container"
      ?hidden="${!this.shouldShowCompletionInfo_}">
    <cr-icon role="img" icon="cr:check"></cr-icon>
    <span class="header-group-wrapper">${this.completionMessage_}</span>
  </div>
  <cr-action-menu id="makeExceptionMenu">
    <button id="menuKeepExtension" class="dropdown-item"
        @click="${this.onKeepExtensionClick_}">
      $i18n{safetyCheckKeepExtension}
    </button>
    <button id="detailsButton" class="dropdown-item"
        @click="${this.onDetailsClick_}"
        ?hidden="${!this.shouldShowThreeDotDetails_()}">
      $i18n{safetyCheckExtensionThreeDotDetails}
    </button>
  </cr-action-menu>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsReviewPanelElementBase=I18nMixinLit(CrLitElement);const SAFETY_HUB_EXTENSION_THREE_DOT_DETAILS="SafeBrowsing.ExtensionSafetyHub.ThreeDotDetails";class ExtensionsReviewPanelElement extends ExtensionsReviewPanelElementBase{static get is(){return"extensions-review-panel"}static get styles(){return getCss$i()}render(){return getHtml$i.bind(this)()}static get properties(){return{delegate:{type:Object},extensions:{type:Array},headerString_:{type:String},subtitleString_:{type:String},completionMessage_:{type:String},shouldShowUnsafeExtensions_:{type:Boolean},shouldShowCompletionInfo_:{type:Boolean},unsafeExtensionsReviewListExpanded_:{type:Boolean},webuiRoundedIconsEnabled_:{type:Boolean}}}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#headerString__accessor_storage="";get headerString_(){return this.#headerString__accessor_storage}set headerString_(value){this.#headerString__accessor_storage=value}#subtitleString__accessor_storage="";get subtitleString_(){return this.#subtitleString__accessor_storage}set subtitleString_(value){this.#subtitleString__accessor_storage=value}#unsafeExtensionsReviewListExpanded__accessor_storage=true;get unsafeExtensionsReviewListExpanded_(){return this.#unsafeExtensionsReviewListExpanded__accessor_storage}set unsafeExtensionsReviewListExpanded_(value){this.#unsafeExtensionsReviewListExpanded__accessor_storage=value}#completionMessage__accessor_storage="";get completionMessage_(){return this.#completionMessage__accessor_storage}set completionMessage_(value){this.#completionMessage__accessor_storage=value}#shouldShowCompletionInfo__accessor_storage=false;get shouldShowCompletionInfo_(){return this.#shouldShowCompletionInfo__accessor_storage}set shouldShowCompletionInfo_(value){this.#shouldShowCompletionInfo__accessor_storage=value}#shouldShowUnsafeExtensions__accessor_storage=false;get shouldShowUnsafeExtensions_(){return this.#shouldShowUnsafeExtensions__accessor_storage}set shouldShowUnsafeExtensions_(value){this.#shouldShowUnsafeExtensions__accessor_storage=value}#webuiRoundedIconsEnabled__accessor_storage=loadTimeData.getBoolean("webuiRoundedIconsEnabled");get webuiRoundedIconsEnabled_(){return this.#webuiRoundedIconsEnabled__accessor_storage}set webuiRoundedIconsEnabled_(value){this.#webuiRoundedIconsEnabled__accessor_storage=value}numberOfExtensionsChangedByLastReviewPanelAction_=0;completionMetricLogged_=false;lastClickedExtensionId_="";lastClickedExtensionTriggerReason_=chrome.developerPrivate.SafetyCheckWarningReason.UNPUBLISHED;willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("extensions")){this.shouldShowCompletionInfo_=this.computeShouldShowCompletionInfo_();this.shouldShowUnsafeExtensions_=this.computeShouldShowUnsafeExtensions_();this.onExtensionsChanged_()}}async onExtensionsChanged_(){this.headerString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckTitle",this.extensions.length);this.subtitleString_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckDescription",this.extensions.length);this.completionMessage_=await PluralStringProxyImpl.getInstance().getPluralString("safetyCheckAllDoneForNow",this.numberOfExtensionsChangedByLastReviewPanelAction_)}computeShouldShowCompletionInfo_(){if(this.extensions?.length===0&&this.numberOfExtensionsChangedByLastReviewPanelAction_!==0){if(!this.completionMetricLogged_){this.completionMetricLogged_=true;chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewCompletion")}return true}else{return false}}computeShouldShowUnsafeExtensions_(){if(this.extensions?.length!==0){if(!this.shouldShowUnsafeExtensions_){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelShown");for(const extension of this.extensions){chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_SHOWN_HISTOGRAM_NAME,convertSafetyCheckReason(extension.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}}this.completionMetricLogged_=false;if(this.shouldShowCompletionInfo_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}return true}return false}shouldShowExtensionsSafetyHub_(){return this.shouldShowUnsafeExtensions_||this.shouldShowCompletionInfo_}shouldShowSafetyHubRemoveAllButton_(){return this.extensions?.length!==1}shouldShowThreeDotDetails_(){return loadTimeData.getBoolean("safetyHubThreeDotDetails")}onDetailsClick_(){chrome.metricsPrivate.recordCount(SAFETY_HUB_EXTENSION_THREE_DOT_DETAILS,1);navigation.navigateTo({page:Page.DETAILS,extensionId:this.lastClickedExtensionId_});this.$.makeExceptionMenu.close()}onUnsafeExtensionsReviewListExpandedChanged_(e){this.unsafeExtensionsReviewListExpanded_=e.detail.value}onMakeExceptionMenuClick_(e){const index=Number(e.target.dataset["index"]);const item=this.extensions[index];this.lastClickedExtensionId_=item.id;this.lastClickedExtensionTriggerReason_=item.safetyCheckWarningReason;this.$.makeExceptionMenu.showAt(e.target)}onKeepExtensionClick_(){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelKeepClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_KEPT_HISTOGRAM_NAME,convertSafetyCheckReason(this.lastClickedExtensionTriggerReason_),SAFETY_HUB_WARNING_REASON_MAX_SIZE);if(this.extensions?.length===1){this.numberOfExtensionsChangedByLastReviewPanelAction_=1}this.$.makeExceptionMenu.close();if(this.lastClickedExtensionId_){assert(this.delegate);this.delegate.setItemSafetyCheckWarningAcknowledged(this.lastClickedExtensionId_,this.lastClickedExtensionTriggerReason_)}}getRemoveButtonA11yLabel_(extensionName){return loadTimeData.substituteString(this.i18n("safetyCheckRemoveButtonA11yLabel"),extensionName)}getOptionMenuA11yLabel_(extensionName){return loadTimeData.substituteString(this.i18n("safetyCheckOptionMenuA11yLabel"),extensionName)}async onRemoveExtensionClick_(e){const index=Number(e.target.dataset["index"]);const item=this.extensions[index];chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelRemoveClicked");chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(item.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE);if(this.extensions?.length===1){this.numberOfExtensionsChangedByLastReviewPanelAction_=1}try{assert(this.delegate);await this.delegate.uninstallItem(item.id)}catch(_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}}async onRemoveAllClick_(event){chrome.metricsPrivate.recordUserAction("SafetyCheck.ReviewPanelRemoveAllClicked");event.stopPropagation();this.numberOfExtensionsChangedByLastReviewPanelAction_=this.extensions.length;try{this.extensions.forEach((extension=>{chrome.metricsPrivate.recordEnumerationValue(SAFETY_HUB_EXTENSION_REMOVED_HISTOGRAM_NAME,convertSafetyCheckReason(extension.safetyCheckWarningReason),SAFETY_HUB_WARNING_REASON_MAX_SIZE)}));assert(this.delegate);await this.delegate.deleteItems(this.extensions.map((extension=>extension.id)))}catch(_){this.numberOfExtensionsChangedByLastReviewPanelAction_=0}}}customElements.define(ExtensionsReviewPanelElement.is,ExtensionsReviewPanelElement);let instance$i=null;function getCss$h(){return instance$i||(instance$i=[...[],css`:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}`])}
// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$h(){return html`
<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TIMEOUT_MS=150;const instances=new Map;function getInstance(container=document.body){if(instances.has(container)){return instances.get(container)}assert(container.isConnected);const instance=new CrA11yAnnouncerElement;container.appendChild(instance);instances.set(container,instance);return instance}class CrA11yAnnouncerElement extends CrLitElement{static get is(){return"cr-a11y-announcer"}static get styles(){return getCss$h()}render(){return getHtml$h.bind(this)()}currentTimeout_=null;messages_=[];disconnectedCallback(){super.disconnectedCallback();if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}for(const[parent,instance]of instances){if(instance===this){instances.delete(parent);break}}}announce(message,timeout=TIMEOUT_MS){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}this.messages_.push(message);this.currentTimeout_=setTimeout((()=>{const messagesDiv=this.shadowRoot.querySelector("#messages");messagesDiv.innerHTML=window.trustedTypes.emptyHTML;messagesDiv.removeAttribute("role");messagesDiv.setAttribute("role","alert");for(const message of this.messages_){const div=document.createElement("div");div.textContent=message;messagesDiv.appendChild(div)}this.dispatchEvent(new CustomEvent("cr-a11y-announcer-messages-sent",{bubbles:true,detail:{messages:this.messages_.slice()}}));this.messages_.length=0;this.currentTimeout_=null}),timeout)}}customElements.define(CrA11yAnnouncerElement.is,CrA11yAnnouncerElement);let instance$h=null;function getCss$g(){return instance$h||(instance$h=[...[getCss$N()],css`.items-container,#content-wrapper{--extensions-card-width:400px}#container{box-sizing:border-box;height:100%}#content-wrapper{min-width:var(--extensions-card-width);padding:24px 60px 64px}#content-wrapper:has(extensions-review-panel),#content-wrapper:has(extensions-mv2-deprecation-panel){padding-top:14px}.empty-list-message{color:#6e6e6e;font-size:123%;font-weight:500;margin-top:80px;text-align:center}@media (prefers-color-scheme:dark){.empty-list-message{color:var(--cr-secondary-text-color)}}.items-container{--grid-gutter:12px;display:grid;grid-column-gap:var(--grid-gutter);grid-row-gap:var(--grid-gutter);grid-template-columns:repeat(auto-fill,var(--extensions-card-width));justify-content:center;margin:auto;max-width:calc(var(--extensions-card-width) * var(--max-columns) + var(--grid-gutter) * var(--max-columns))}.items-container.panel :first-child{max-width:calc(var(--extensions-card-width) * 2 + var(--grid-gutter) * 2);grid-column:1/-1}extensions-review-panel,extensions-mv2-deprecation-panel{margin:15px auto;width:100%}#checkup-container{grid-column:1/-1;min-height:var(--extensions-card-height)}extensions-item{grid-column-start:auto;grid-row-start:auto}.section-header{color:var(--cr-primary-text-color);font-size:123%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:21px;padding-bottom:4px;padding-top:8px}.section-header-contents{align-items:center;display:flex;grid-column:1/-1;justify-content:space-between;width:100%}#pinned-toggle-container{align-items:center;display:flex;gap:8px}#pinned-toggle-label{color:var(--cr-secondary-text-color);font-size:13px;font-weight:normal}managed-footnote{border-top:none;margin-bottom:-24px;padding-bottom:12px;padding-top:12px;z-index:1}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class AsyncMapDirective extends AsyncDirective{template=_item=>html``;initialCount=-1;items=[];chunkSize_=-1;renderedItems_=[];renderStartTime_=0;targetElapsedTime_=50;requestId_=null;timeout_=null;constructor(partInfo){super(partInfo);assert(partInfo.type===PartType.CHILD,"asyncMap() can only be used in text expressions")}render(items,template,initialCount){if(this.timeout_){clearTimeout(this.timeout_);this.timeout_=null}if(this.requestId_){cancelAnimationFrame(this.requestId_);this.requestId_=null}this.renderStartTime_=0;this.template=template;this.items=items;assert(initialCount>0);this.initialCount=initialCount;if(this.chunkSize_===-1){this.chunkSize_=this.initialCount}const count=Math.min(items.length,this.renderedItems_.length+this.chunkSize_);this.renderedItems_=this.items.slice(0,count);if(count<items.length){this.timeout_=setTimeout((()=>this.renderInChunks_()),0)}return this.renderItems_()}renderItems_(){return this.renderedItems_.map((item=>this.template(item)))}async renderInChunks_(){this.timeout_=null;let length=this.renderedItems_.length;const arrayRef=this.items;while(length<arrayRef.length){await new Promise((resolve=>{this.requestId_=requestAnimationFrame((()=>{if(this.requestId_){cancelAnimationFrame(this.requestId_);this.requestId_=null}resolve()}))}));if(this.items!==arrayRef){return}if(this.renderStartTime_>0){const elapsed=performance.now()-this.renderStartTime_;if(elapsed<this.targetElapsedTime_){this.chunkSize_+=this.initialCount}else{this.chunkSize_=Math.max(this.initialCount,Math.floor(this.chunkSize_/2))}}const newLength=Math.min(length+this.chunkSize_,arrayRef.length);this.renderedItems_.push(...this.items.slice(length,newLength));length=newLength;this.renderStartTime_=performance.now();this.setValue(this.renderItems_())}}}const asyncMap=directive(AsyncMapDirective);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$g(){return html`<!--_html_template_start_-->
<div id="container">
  <managed-footnote ?hidden="${!!this.filter}"></managed-footnote>
  <div id="content-wrapper" .style="--max-columns: ${this.maxColumns_};">
    ${this.showSafetyCheckReviewPanel_?html`
      <div class="items-container panel">
        <extensions-review-panel .extensions="${this.unsafeExtensions_}"
            .delegate="${this.delegate}">
        </extensions-review-panel>
      </div>
    `:""}

    ${this.shouldShowMv2DeprecationPanel_()?html`
      <div class="items-container panel">
        <extensions-mv2-deprecation-panel
            .extensions="${this.mv2DeprecatedExtensions_}"
            .delegate="${this.delegate}"
            ?show-title="${this.showSafetyCheckReviewPanel_}">
        </extensions-mv2-deprecation-panel>
      </div>
    `:""}

    <div id="no-items" class="empty-list-message"
        ?hidden="${!this.shouldShowEmptyItemsMessage_()}">
      <span @click="${this.onNoExtensionsClick_}">
        $i18nRaw{noExtensionsOrApps}
      </span>
    </div>
    <div id="no-search-results" class="empty-list-message"
        ?hidden="${!this.shouldShowEmptySearchMessage_()}">
      <span>$i18n{noSearchResults}</span>
    </div>

    <div id="extensions-section" ?hidden="${!this.shownExtensionsCount_}">
      <!-- section-header needs to left-align with the grid content below, and
           the easiest way to achieve this is to make it a grid as well. -->
      <h2 class="section-header items-container">
        <span class="section-header-contents">
          <span>$i18n{extensionsSectionHeader}</span>
          <span id="pinned-toggle-container"
              ?hidden="${!this.showExtensionsPinnedByDefault_}">
            <span id="pinned-toggle-label">$i18n{pinNewExtensions}</span>
            <cr-toggle id="pinned-toggle"
                ?checked="${this.extensionsPinnedByDefault}"
                @change="${this.onExtensionsPinnedByDefaultChange_}"
                aria-labelledby="pinned-toggle-label">
            </cr-toggle>
          </span>
        </span>
      </h2>
      <div class="items-container">
        <!-- Render only a few items first, to improve initial render time,
             then render the remaining items on a different frame. Value of 6
             was chosen by experimentation, and it is a good trade-off between
             initial render time and total render time. -->
        ${asyncMap(this.filteredExtensions_,(item=>html`
          <extensions-item id="${item.id}" .data="${item}"
              ?safety-check-showing="${this.hasSafetyCheckTriggeringExtension_()}"
              .delegate="${this.delegate}"
              ?in-dev-mode="${this.inDevMode}">
          </extensions-item>
        `),6)}
      </div>
    </div>

    <div id="chrome-apps-section" ?hidden="${!this.shownAppsCount_}">
      <!-- section-header needs to left-align with the grid content below, and
           the easiest way to achieve this is to make it a grid as well. -->
      <h2 class="section-header items-container">$i18n{appsTitle}</h2>
      <div class="items-container">
        ${asyncMap(this.filteredApps_,(item=>html`
          <extensions-item id="${item.id}" .data="${item}"
              .delegate="${this.delegate}"
              ?in-dev-mode="${this.inDevMode}">
          </extensions-item>
        `),6)}
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsItemListElementBase=I18nMixinLit(CrLitElement);class ExtensionsItemListElement extends ExtensionsItemListElementBase{static get is(){return"extensions-item-list"}static get styles(){return getCss$g()}render(){return getHtml$g.bind(this)()}static get properties(){return{apps:{type:Array},extensions:{type:Array},delegate:{type:Object},inDevMode:{type:Boolean,reflect:true},isMv2DeprecationNoticeDismissed:{type:Boolean,notify:true,reflect:true},filter:{type:String},extensionsPinnedByDefault:{type:Boolean,reflect:true},computedFilter_:{type:Object},maxColumns_:{type:Number},filteredExtensions_:{type:Array},filteredApps_:{type:Array},unsafeExtensions_:{type:Array},mv2DeprecatedExtensions_:{type:Array},shownAppsCount_:{type:Number},shownExtensionsCount_:{type:Number},showSafetyCheckReviewPanel_:{type:Boolean},reviewPanelShown_:{type:Boolean,state:true},showExtensionsPinnedByDefault_:{type:Boolean,state:true}}}#apps_accessor_storage=[];get apps(){return this.#apps_accessor_storage}set apps(value){this.#apps_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#delegate_accessor_storage=new DummyItemDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#isMv2DeprecationNoticeDismissed_accessor_storage=false;get isMv2DeprecationNoticeDismissed(){return this.#isMv2DeprecationNoticeDismissed_accessor_storage}set isMv2DeprecationNoticeDismissed(value){this.#isMv2DeprecationNoticeDismissed_accessor_storage=value}#extensionsPinnedByDefault_accessor_storage=false;get extensionsPinnedByDefault(){return this.#extensionsPinnedByDefault_accessor_storage}set extensionsPinnedByDefault(value){this.#extensionsPinnedByDefault_accessor_storage=value}#filter_accessor_storage="";get filter(){return this.#filter_accessor_storage}set filter(value){this.#filter_accessor_storage=value}#showExtensionsPinnedByDefault__accessor_storage=loadTimeData.getBoolean("enableExtensionsPinnedByDefault");get showExtensionsPinnedByDefault_(){return this.#showExtensionsPinnedByDefault__accessor_storage}set showExtensionsPinnedByDefault_(value){this.#showExtensionsPinnedByDefault__accessor_storage=value}#filteredExtensions__accessor_storage=[];get filteredExtensions_(){return this.#filteredExtensions__accessor_storage}set filteredExtensions_(value){this.#filteredExtensions__accessor_storage=value}#filteredApps__accessor_storage=[];get filteredApps_(){return this.#filteredApps__accessor_storage}set filteredApps_(value){this.#filteredApps__accessor_storage=value}#computedFilter__accessor_storage=null;get computedFilter_(){return this.#computedFilter__accessor_storage}set computedFilter_(value){this.#computedFilter__accessor_storage=value}#maxColumns__accessor_storage=3;get maxColumns_(){return this.#maxColumns__accessor_storage}set maxColumns_(value){this.#maxColumns__accessor_storage=value}#unsafeExtensions__accessor_storage=[];get unsafeExtensions_(){return this.#unsafeExtensions__accessor_storage}set unsafeExtensions_(value){this.#unsafeExtensions__accessor_storage=value}#mv2DeprecatedExtensions__accessor_storage=[];get mv2DeprecatedExtensions_(){return this.#mv2DeprecatedExtensions__accessor_storage}set mv2DeprecatedExtensions_(value){this.#mv2DeprecatedExtensions__accessor_storage=value}#shownAppsCount__accessor_storage=0;get shownAppsCount_(){return this.#shownAppsCount__accessor_storage}set shownAppsCount_(value){this.#shownAppsCount__accessor_storage=value}#shownExtensionsCount__accessor_storage=0;get shownExtensionsCount_(){return this.#shownExtensionsCount__accessor_storage}set shownExtensionsCount_(value){this.#shownExtensionsCount__accessor_storage=value}#showSafetyCheckReviewPanel__accessor_storage=false;get showSafetyCheckReviewPanel_(){return this.#showSafetyCheckReviewPanel__accessor_storage}set showSafetyCheckReviewPanel_(value){this.#showSafetyCheckReviewPanel__accessor_storage=value}#reviewPanelShown__accessor_storage=false;get reviewPanelShown_(){return this.#reviewPanelShown__accessor_storage}set reviewPanelShown_(value){this.#reviewPanelShown__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("filter")){this.computedFilter_=this.computeFilter_()}if(changedProperties.has("filter")||changedProperties.has("extensions")){this.filteredExtensions_=this.computedFilter_?this.extensions.filter((extension=>this.computedFilter_(extension))):this.extensions;this.shownExtensionsCount_=this.filteredExtensions_.length}if(changedProperties.has("filter")||changedProperties.has("apps")){this.filteredApps_=this.computedFilter_?this.apps.filter((app=>this.computedFilter_(app))):this.apps;this.shownAppsCount_=this.filteredApps_.length}if(changedProperties.has("extensions")){this.unsafeExtensions_=this.computeUnsafeExtensions_();this.showSafetyCheckReviewPanel_=this.computeShowSafetyCheckReviewPanel_();this.mv2DeprecatedExtensions_=this.computeMv2DeprecatedExtensions_()}}updated(changedProperties){super.updated(changedProperties);const changedPrivateProperties=changedProperties;if(changedPrivateProperties.has("computedFilter_")){this.announceSearchResults_()}}getDetailsButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getDetailsButton()}getRemoveButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getRemoveButton()}getErrorsButton(id){const item=this.shadowRoot.querySelector(`#${id}`);return item&&item.getErrorsButton()}focusItemButton(id){const item=this.shadowRoot.querySelector(`#${id}`);if(!item){return false}const buttonToFocus=item.getRemoveButton()||item.getDetailsButton();buttonToFocus.focus();return true}computeFilter_(){const formattedFilter=this.filter.trim().toLowerCase();if(!formattedFilter){return null}return i=>[i.name,i.id].some((s=>s.toLowerCase().includes(formattedFilter)))}computeMv2DeprecatedExtensions_(){return this.extensions.filter((extension=>extension.isAffectedByMV2Deprecation&&extension.disableReasons.unsupportedManifestVersion))}computeUnsafeExtensions_(){return this.extensions.filter((extension=>!!(extension.safetyCheckText&&extension.safetyCheckText.panelString)))}computeShowSafetyCheckReviewPanel_(){if(this.unsafeExtensions_.length!==0){this.reviewPanelShown_=true}return this.unsafeExtensions_.length!==0||this.reviewPanelShown_}hasSafetyCheckTriggeringExtension_(){for(const extension of this.extensions){if(!!extension.safetyCheckText&&!!extension.safetyCheckText.panelString&&this.showSafetyCheckReviewPanel_){return true}}return false}shouldShowMv2DeprecationPanel_(){return!this.isMv2DeprecationNoticeDismissed&&this.mv2DeprecatedExtensions_?.length>0}shouldShowEmptyItemsMessage_(){return this.apps.length===0&&this.extensions.length===0}shouldShowEmptySearchMessage_(){return!this.shouldShowEmptyItemsMessage_()&&this.shownAppsCount_===0&&this.shownExtensionsCount_===0}onNoExtensionsClick_(e){if(e.target.tagName==="A"){chrome.metricsPrivate.recordUserAction("Options_GetMoreExtensions")}}announceSearchResults_(){if(this.computedFilter_){setTimeout((()=>{const total=this.shownAppsCount_+this.shownExtensionsCount_;getInstance().announce(this.shouldShowEmptySearchMessage_()?this.i18n("noSearchResults"):total===1?this.i18n("searchResultsSingular",this.filter):this.i18n("searchResultsPlural",total.toString(),this.filter))}),0)}}onExtensionsPinnedByDefaultChange_(e){this.delegate.setProfileExtensionsPinnedByDefault(e.detail)}}customElements.define(ExtensionsItemListElement.is,ExtensionsItemListElement);
// Copyright (c) 2025 The Brave Authors. All rights reserved.
ExtensionsItemListElement.prototype.shouldShowEmptyItemsMessage_=()=>true;let instance$g=null;function getCss$f(){return instance$g||(instance$g=[...[getCss$12(),getCss$19()],css`#main{position:relative;width:200px}#input{--cr-input-readonly-opacity:1}#input:not([invalid]){--cr-input-error-display:none}#edit,#clear{margin-inline-start:var(--cr-icon-ripple-padding)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$f(){return html`<!--_html_template_start_-->
<div id="main">
  <cr-input id="input" ?readonly="${this.readonly_}"
      aria-label="${this.inputAriaLabel}"
      .placeholder="${this.computePlaceholder_()}"
      ?invalid="${this.getIsInvalid_()}"
      .errorMessage="${this.getErrorString_()}"
      ?disabled="${this.inputDisabled}"
      .inputTabindex="${this.readonly_?-1:0}"
      .value="${this.computeText_()}">
    <cr-icon-button id="edit" title="${this.i18n("edit")}"
        aria-label="${this.editButtonAriaLabel}" slot="suffix"
        class="icon-edit no-overlap"
        ?disabled="${this.inputDisabled||!this.readonly_}"
        @click="${this.onEditClick_}">
    </cr-icon-button>
    <cr-icon-button id="clear" title="${this.i18n("shortcutClear")}"
        aria-label="${this.clearButtonAriaLabel}" slot="suffix"
        class="icon-clear no-overlap"
        ?disabled="${this.inputDisabled||!this.shortcut}"
        @click="${this.onClearClick_}">
    </cr-icon-button>
  </cr-input>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Key;(function(Key){Key[Key["COMMA"]=188]="COMMA";Key[Key["DEL"]=46]="DEL";Key[Key["DOWN"]=40]="DOWN";Key[Key["END"]=35]="END";Key[Key["ESCAPE"]=27]="ESCAPE";Key[Key["HOME"]=36]="HOME";Key[Key["INS"]=45]="INS";Key[Key["LEFT"]=37]="LEFT";Key[Key["MEDIA_NEXT_TRACK"]=176]="MEDIA_NEXT_TRACK";Key[Key["MEDIA_PLAY_PAUSE"]=179]="MEDIA_PLAY_PAUSE";Key[Key["MEDIA_PREV_TRACK"]=177]="MEDIA_PREV_TRACK";Key[Key["MEDIA_STOP"]=178]="MEDIA_STOP";Key[Key["PAGE_DOWN"]=34]="PAGE_DOWN";Key[Key["PAGE_UP"]=33]="PAGE_UP";Key[Key["PERIOD"]=190]="PERIOD";Key[Key["RIGHT"]=39]="RIGHT";Key[Key["SPACE"]=32]="SPACE";Key[Key["TAB"]=9]="TAB";Key[Key["UP"]=38]="UP"})(Key||(Key={}));var ModifierPolicy;(function(ModifierPolicy){ModifierPolicy[ModifierPolicy["NOT_ALLOWED"]=0]="NOT_ALLOWED";ModifierPolicy[ModifierPolicy["REQUIRED"]=1]="REQUIRED"})(ModifierPolicy||(ModifierPolicy={}));function getModifierPolicy(keyCode){switch(keyCode){case Key.MEDIA_NEXT_TRACK:case Key.MEDIA_PLAY_PAUSE:case Key.MEDIA_PREV_TRACK:case Key.MEDIA_STOP:return ModifierPolicy.NOT_ALLOWED;default:return ModifierPolicy.REQUIRED}}function hasModifier(e,countShiftAsModifier){return e.ctrlKey||e.altKey||isMac&&e.metaKey||isChromeOS||countShiftAsModifier&&e.shiftKey}function isValidKeyCode(keyCode){if(keyCode===Key.ESCAPE){return false}for(const k in Key){if(Key[k]===keyCode){return true}}return keyCode>="A".charCodeAt(0)&&keyCode<="Z".charCodeAt(0)||keyCode>="0".charCodeAt(0)&&keyCode<="9".charCodeAt(0)}function keystrokeToString(e){const output=[];if(isMac&&e.metaKey){output.push("Command")}if(e.ctrlKey){output.push("Ctrl")}if(e.altKey){output.push("Alt")}if(e.shiftKey){output.push("Shift")}const keyCode=e.keyCode;if(isValidKeyCode(keyCode)){if(keyCode>="A".charCodeAt(0)&&keyCode<="Z".charCodeAt(0)||keyCode>="0".charCodeAt(0)&&keyCode<="9".charCodeAt(0)){output.push(String.fromCharCode(keyCode))}else{switch(keyCode){case Key.COMMA:output.push("Comma");break;case Key.DEL:output.push("Delete");break;case Key.DOWN:output.push("Down");break;case Key.END:output.push("End");break;case Key.HOME:output.push("Home");break;case Key.INS:output.push("Insert");break;case Key.LEFT:output.push("Left");break;case Key.MEDIA_NEXT_TRACK:output.push("MediaNextTrack");break;case Key.MEDIA_PLAY_PAUSE:output.push("MediaPlayPause");break;case Key.MEDIA_PREV_TRACK:output.push("MediaPrevTrack");break;case Key.MEDIA_STOP:output.push("MediaStop");break;case Key.PAGE_DOWN:output.push("PageDown");break;case Key.PAGE_UP:output.push("PageUp");break;case Key.PERIOD:output.push("Period");break;case Key.RIGHT:output.push("Right");break;case Key.SPACE:output.push("Space");break;case Key.TAB:output.push("Tab");break;case Key.UP:output.push("Up");break}}}return output.join("+")}function hasValidModifiers(e){switch(getModifierPolicy(e.keyCode)){case ModifierPolicy.REQUIRED:return hasModifier(e,false);case ModifierPolicy.NOT_ALLOWED:return!hasModifier(e,true);default:assertNotReached()}}function formatShortcutText(text){const tokens=text.split("+");for(let i=0;i<tokens.length;i++){if(tokens[i]==="Alt"){tokens[i]="Option"}}return tokens.join(" + ")}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ShortcutError;(function(ShortcutError){ShortcutError[ShortcutError["NO_ERROR"]=0]="NO_ERROR";ShortcutError[ShortcutError["INCLUDE_START_MODIFIER"]=1]="INCLUDE_START_MODIFIER";ShortcutError[ShortcutError["TOO_MANY_MODIFIERS"]=2]="TOO_MANY_MODIFIERS";ShortcutError[ShortcutError["NEED_CHARACTER"]=3]="NEED_CHARACTER"})(ShortcutError||(ShortcutError={}));const CrShortcutInputElementBase=I18nMixinLit(CrLitElement);class CrShortcutInputElement extends CrShortcutInputElementBase{static get is(){return"cr-shortcut-input"}static get styles(){return getCss$f()}render(){return getHtml$f.bind(this)()}static get properties(){return{shortcut:{type:String},inputAriaLabel:{type:String},editButtonAriaLabel:{type:String},clearButtonAriaLabel:{type:String},inputDisabled:{type:Boolean},allowCtrlAltShortcuts:{type:Boolean},error_:{type:Number},readonly_:{type:Boolean,reflect:true}}}#shortcut_accessor_storage="";get shortcut(){return this.#shortcut_accessor_storage}set shortcut(value){this.#shortcut_accessor_storage=value}#inputAriaLabel_accessor_storage="";get inputAriaLabel(){return this.#inputAriaLabel_accessor_storage}set inputAriaLabel(value){this.#inputAriaLabel_accessor_storage=value}#editButtonAriaLabel_accessor_storage="";get editButtonAriaLabel(){return this.#editButtonAriaLabel_accessor_storage}set editButtonAriaLabel(value){this.#editButtonAriaLabel_accessor_storage=value}#clearButtonAriaLabel_accessor_storage="";get clearButtonAriaLabel(){return this.#clearButtonAriaLabel_accessor_storage}set clearButtonAriaLabel(value){this.#clearButtonAriaLabel_accessor_storage=value}#inputDisabled_accessor_storage=false;get inputDisabled(){return this.#inputDisabled_accessor_storage}set inputDisabled(value){this.#inputDisabled_accessor_storage=value}#allowCtrlAltShortcuts_accessor_storage=false;get allowCtrlAltShortcuts(){return this.#allowCtrlAltShortcuts_accessor_storage}set allowCtrlAltShortcuts(value){this.#allowCtrlAltShortcuts_accessor_storage=value}#readonly__accessor_storage=true;get readonly_(){return this.#readonly__accessor_storage}set readonly_(value){this.#readonly__accessor_storage=value}capturing_=false;#error__accessor_storage=ShortcutError.NO_ERROR;get error_(){return this.#error__accessor_storage}set error_(value){this.#error__accessor_storage=value}pendingShortcut_="";firstUpdated(){const node=this.$.input;node.addEventListener("mouseup",this.startCapture_.bind(this));node.addEventListener("blur",this.endCapture_.bind(this));node.addEventListener("focus",this.startCapture_.bind(this));node.addEventListener("keydown",this.onKeyDown_.bind(this));node.addEventListener("keyup",this.onKeyUp_.bind(this))}getBubbleAnchor(){return this.$.edit}async startCapture_(){if(this.capturing_||this.readonly_){return}this.capturing_=true;await this.updateComplete;this.fire("input-capture-change",true)}async endCapture_(){if(!this.capturing_){return}this.pendingShortcut_="";this.capturing_=false;this.$.input.blur();this.error_=ShortcutError.NO_ERROR;this.readonly_=true;await this.updateComplete;this.fire("input-capture-change",false)}async clearShortcut_(){this.pendingShortcut_="";await this.commitPending_();if(this.capturing_){await this.endCapture_()}else{this.fire("input-capture-change",false)}}onKeyDown_(e){if(this.readonly_){return}if(e.target===this.$.edit){return}if(e.keyCode===Key.ESCAPE){if(!this.capturing_){return}this.endCapture_();e.preventDefault();e.stopPropagation();return}if(e.keyCode===Key.TAB){return}if(!this.capturing_){this.startCapture_()}this.handleKey_(e)}onKeyUp_(e){if(this.readonly_){return}if(e.target===this.$.edit||e.key==="Enter"){return}if(e.keyCode===Key.ESCAPE||e.keyCode===Key.TAB){return}this.handleKey_(e)}getErrorString_(){switch(this.error_){case ShortcutError.INCLUDE_START_MODIFIER:return this.i18n("shortcutIncludeStartModifier");case ShortcutError.TOO_MANY_MODIFIERS:return this.i18n("shortcutTooManyModifiers");case ShortcutError.NEED_CHARACTER:return this.i18n("shortcutNeedCharacter");default:assert(this.error_===ShortcutError.NO_ERROR);return""}}handleKey_(e){e.preventDefault();e.stopPropagation();if(!this.allowCtrlAltShortcuts&&e.altKey&&(e.ctrlKey||isMac&&e.metaKey)){this.error_=ShortcutError.TOO_MANY_MODIFIERS;return}if(this.allowCtrlAltShortcuts&&e.metaKey&&e.altKey&&e.shiftKey&&e.ctrlKey){this.error_=ShortcutError.TOO_MANY_MODIFIERS;return}if(!hasValidModifiers(e)){this.pendingShortcut_="";this.error_=ShortcutError.INCLUDE_START_MODIFIER;return}this.pendingShortcut_=keystrokeToString(e);if(!isValidKeyCode(e.keyCode)){this.error_=ShortcutError.NEED_CHARACTER;return}this.error_=ShortcutError.NO_ERROR;getInstance().announce(this.i18n("shortcutSet",formatShortcutText(this.pendingShortcut_)));this.commitPending_();this.endCapture_()}async commitPending_(){this.shortcut=this.pendingShortcut_;await this.updateComplete;this.fire("shortcut-updated",this.shortcut)}computePlaceholder_(){if(this.readonly_){return this.shortcut?this.i18n("shortcutSet",this.computeText_()):this.i18n("shortcutNotSet")}return this.i18n("shortcutTypeAShortcut")}computeText_(){if(this.inputDisabled){return this.i18n("setShortcutInSystemSettings")}return formatShortcutText(this.readonly_?this.shortcut:"")}getIsInvalid_(){return this.error_!==ShortcutError.NO_ERROR}onEditClick_(){this.readonly_=false;this.$.input.focus()}onClearClick_(){void this.clearShortcut_()}}customElements.define(CrShortcutInputElement.is,CrShortcutInputElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyKeyboardShortcutDelegate{setShortcutHandlingSuspended(_isCapturing){}updateExtensionCommandKeybinding(_extensionId,_commandName,_keybinding){}updateExtensionCommandScope(_extensionId,_commandName,_scope){}}function createDummyKeyboardShortcutDelegate(){return new DummyKeyboardShortcutDelegate}let instance$f=null;function getCss$e(){return instance$f||(instance$f=[...[getCss$11(),getCss$s()],css`:host{height:100%}.shortcut-card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto 16px auto;padding-bottom:8px;width:var(--cr-toolbar-field-width)}.shortcut-card:last-of-type{margin-bottom:64px}#container{box-sizing:border-box;height:100%;padding-top:24px}.command-entry{align-items:center;display:flex;min-height:var(--cr-section-min-height);padding-bottom:8px;padding-top:8px}.command-name{flex:1;margin-inline-end:var(--cr-section-padding);overflow-wrap:break-word}.shortcut-input-container,.shortcut-scope-container{display:flex;flex-direction:column}.shortcut-input-container{margin-inline-end:var(--cr-section-padding)}.shortcut-input-label,.shortcut-scope-label{color:var(--cr-secondary-text-color);font-size:var(--cr-form-field-label-font-size,12px);font-weight:500;line-height:var(--cr-form-field-label-line-height,1.25);margin-bottom:4px}.command-entry .md-select{line-height:22px}.card-title{align-items:center;border-bottom:var(--cr-separator-line);display:flex;margin-bottom:9px;padding:16px var(--cr-section-padding)}.icon{height:20px;margin-inline-end:20px;width:20px}.card-controls{margin-inline-end:20px;margin-inline-start:60px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$e(){return html`<!--_html_template_start_--><div id="container">
  ${this.calculateShownItems_().map((item=>html`
    <div class="shortcut-card">
      <div class="card-title cr-title-text">
        <img class="icon" src="${item.iconUrl}" alt="">
        <span role="heading" aria-level="2">${item.name}</span>
      </div>
      <div class="card-controls">
        ${item.commands.map((command=>html`
          <div class="command-entry">
            <span class="command-name">${command.description}</span>
            <div class="shortcut-input-container">
              <span class="shortcut-input-label" aria-hidden="true">
                $i18n{shortcutInputLabel}
              </span>
              <cr-shortcut-input .shortcut="${command.keybinding}"
                  input-aria-label="${this.i18n("editShortcutInputLabel",command.description,item.name)}"
                  edit-button-aria-label="${this.i18n("editShortcutButtonLabel",command.description,item.name)}"
                  .inputDisabled="${this.computeInputDisabled_(item,command)}"
                  @input-capture-change="${this.onInputCaptureChange_}"
                  @shortcut-updated="${this.onShortcutUpdated_.bind(this,item.id,command.name)}">
              </cr-shortcut-input>
            </div>
            <div class="shortcut-scope-container">
              <span class="shortcut-scope-label" aria-hidden="true">
                $i18n{shortcutScope}
              </span>
              <select class="md-select" @change="${this.onScopeChanged_}"
                  data-extension-id="${item.id}"
                  data-command-name="${command.name}"
                  aria-label="${this.computeScopeAriaLabel_(item,command)}"
                  ?disabled="${this.computeScopeDisabled_(command)}">
                <option value="${chrome.developerPrivate.CommandScope.CHROME}"
                    ?selected="${this.isChromeScopeSelected_(command)}">
                  $i18n{shortcutScopeInChrome}
                </option>
                ${this.showGlobalScopeOption_?html`
                  <option value="${chrome.developerPrivate.CommandScope.GLOBAL}"
                      ?selected="${this.isGlobalScopeSelected_(command)}">
                    $i18n{shortcutScopeGlobal}
                  </option>
                `:""}
              </select>
            </div>
          </div>
        `))}
      </div>
    </div>
  `))}
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsKeyboardShortcutsElementBase=I18nMixinLit(CrLitElement);class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase{static get is(){return"extensions-keyboard-shortcuts"}static get styles(){return getCss$e()}render(){return getHtml$e.bind(this)()}static get properties(){return{delegate:{type:Object},items:{type:Array},showGlobalScopeOption_:{type:Boolean}}}#delegate_accessor_storage=createDummyKeyboardShortcutDelegate();get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#items_accessor_storage=[];get items(){return this.#items_accessor_storage}set items(value){this.#items_accessor_storage=value}#showGlobalScopeOption__accessor_storage=loadTimeData.getBoolean("enableGlobalScopedShortcuts");get showGlobalScopeOption_(){return this.#showGlobalScopeOption__accessor_storage}set showGlobalScopeOption_(value){this.#showGlobalScopeOption__accessor_storage=value}firstUpdated(){this.addEventListener("view-enter-start",this.onViewEnter_)}onInputCaptureChange_(event){this.delegate.setShortcutHandlingSuspended(event.detail)}onShortcutUpdated_(itemId,commandName,event){this.delegate.updateExtensionCommandKeybinding(itemId,commandName,event.detail)}onViewEnter_(){chrome.metricsPrivate.recordUserAction("Options_ExtensionCommands")}calculateShownItems_(){return this.items.filter((function(item){return item.commands.length>0}))}computeScopeAriaLabel_(item,command){return this.i18n("shortcutScopeLabel",command.description,item.name)}computeScopeDisabled_(command){return command.isExtensionAction||!command.isActive}onScopeChanged_(event){const target=event.target;const extensionId=target.dataset["extensionId"];const commandName=target.dataset["commandName"];this.delegate.updateExtensionCommandScope(extensionId,commandName,target.value)}isChromeScopeSelected_(command){return command.scope===chrome.developerPrivate.CommandScope.CHROME}isGlobalScopeSelected_(command){return command.scope===chrome.developerPrivate.CommandScope.GLOBAL}computeInputDisabled_(item,command){return item.isCommandRegistrationHandledExternally&&command.scope===chrome.developerPrivate.CommandScope.GLOBAL}}customElements.define(ExtensionsKeyboardShortcutsElement.is,ExtensionsKeyboardShortcutsElement);let instance$e=null;function getCss$d(){return instance$e||(instance$e=[...[getCss$11(),getCss$10()],css`.description-row{display:flex}.row-label{display:block;width:104px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$d(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{loadErrorHeading}</div>
  <div slot="body">
    <div id="info">
      <div id="file" class="description-row" ?hidden="${!this.file_}">
        <span class="row-label">$i18n{loadErrorFileLabel}</span>
        <span class="row-value">${this.file_}</span>
      </div>
      <div id="error" class="description-row">
        <span class="row-label">$i18n{loadErrorErrorLabel}</span>
        <span class="row-value">${this.error_}</span>
      </div>
    </div>
    <extensions-code-section id="code" .isActive="${this.isCodeSectionActive_}"
        .code="${this.codeSectionProperties_}"
        could-not-display-code="$i18n{loadErrorCouldNotLoadManifest}">
    </extensions-code-section>
  </div>
  <div slot="button-container">
    <div class="spinner" ?hidden="${!this.retrying_}"></div>
    <cr-button class="cancel-button" @click="${this.onCloseClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" ?disabled="${this.retrying_}"
        @click="${this.onRetryClick_}">
      $i18n{loadErrorRetry}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LoadErrorElement extends CrLitElement{static get is(){return"extensions-load-error"}static get styles(){return getCss$d()}render(){return getHtml$d.bind(this)()}static get properties(){return{delegate:{type:Object},loadError:{type:Object},file_:{type:String},error_:{type:String},retrying_:{type:Boolean},isCodeSectionActive_:{type:Boolean},codeSectionProperties_:{type:Object}}}static get observers(){return["observeLoadErrorChanges_(loadError)"]}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#loadError_accessor_storage;get loadError(){return this.#loadError_accessor_storage}set loadError(value){this.#loadError_accessor_storage=value}#codeSectionProperties__accessor_storage=null;get codeSectionProperties_(){return this.#codeSectionProperties__accessor_storage}set codeSectionProperties_(value){this.#codeSectionProperties__accessor_storage=value}#file__accessor_storage;get file_(){return this.#file__accessor_storage}set file_(value){this.#file__accessor_storage=value}#error__accessor_storage=null;get error_(){return this.#error__accessor_storage}set error_(value){this.#error__accessor_storage=value}#isCodeSectionActive__accessor_storage;get isCodeSectionActive_(){return this.#isCodeSectionActive__accessor_storage}set isCodeSectionActive_(value){this.#isCodeSectionActive__accessor_storage=value}#retrying__accessor_storage=false;get retrying_(){return this.#retrying__accessor_storage}set retrying_(value){this.#retrying__accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("loadError")){assert(this.loadError);if(this.loadError instanceof Error){this.file_=undefined;this.error_=this.loadError.message;this.isCodeSectionActive_=false;return}this.file_=this.loadError.path;this.error_=this.loadError.error;if(this.loadError.source){this.codeSectionProperties_={source:this.loadError.source,title:"",message:this.loadError.error};this.isCodeSectionActive_=true}else{this.isCodeSectionActive_=false}}}show(){this.$.dialog.showModal()}onCloseClick_(){this.close()}close(){this.$.dialog.close()}onRetryClick_(){this.retrying_=true;assert(this.delegate);assert(this.loadError);this.delegate.retryLoadUnpacked(this.loadError instanceof Error?undefined:this.loadError.retryGuid).then((()=>{this.close()}),(loadError=>{this.loadError=loadError;this.retrying_=false}))}}customElements.define(LoadErrorElement.is,LoadErrorElement);let instance$d=null;function getCss$c(){return instance$d||(instance$d=[...[],css`#icon{height:32px;margin-inline-end:10px;width:32px}#icon-and-name-wrapper{align-items:center;display:flex}ExtensionOptions{display:block;height:100%;overflow:hidden}cr-dialog::part(dialog){height:var(--dialog-height);opacity:var(--dialog-opacity,0);transition:opacity 100ms ease 100ms;width:var(--dialog-width)}cr-dialog::part(wrapper){height:100%;max-height:initial;overflow:hidden}cr-dialog #body{height:100%;padding:0}cr-dialog{--cr-scrollable-border-color:transparent}cr-dialog::part(body-container){height:100%;min-height:initial}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$c(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}" @close="${this.onClose_}"
    show-close-button>
  <div slot="title">
    <div id="icon-and-name-wrapper">
      <img id="icon" src="${this.data_?.iconUrl||""}" alt="">
      <span>${this.data_?.name||""}</span>
    </div>
  </div>
  <div slot="body" id="body"></div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function whenDocumentReady(){if(document.readyState==="complete"){return Promise.resolve()}return new Promise((function(resolve){document.addEventListener("readystatechange",(function f(){if(document.readyState==="complete"){document.removeEventListener("readystatechange",f);resolve()}}))}))}const OptionsDialogMinWidth=400;const OptionsDialogMaxHeight=640;class ExtensionsOptionsDialogElement extends CrLitElement{static get is(){return"extensions-options-dialog"}static get styles(){return getCss$c()}render(){return getHtml$c.bind(this)()}static get properties(){return{extensionOptions_:{type:Object},data_:{type:Object}}}#extensionOptions__accessor_storage;get extensionOptions_(){return this.#extensionOptions__accessor_storage}set extensionOptions_(value){this.#extensionOptions__accessor_storage=value}#data__accessor_storage;get data_(){return this.#data__accessor_storage}set data_(value){this.#data__accessor_storage=value}preferredSize_=null;eventTracker_=new EventTracker;updateDialogSizeTimeout_=null;get open(){return this.$.dialog.open}updateDialogSize_(){let headerHeight=this.$.body.offsetTop;if(this.$.body.assignedSlot&&this.$.body.assignedSlot.parentElement){headerHeight=this.$.body.assignedSlot.parentElement.offsetTop}const maxHeight=Math.min(.9*window.innerHeight,OptionsDialogMaxHeight);const effectiveHeight=Math.min(maxHeight,headerHeight+this.preferredSize_.height);const effectiveWidth=Math.max(OptionsDialogMinWidth,this.preferredSize_.width);this.$.dialog.style.setProperty("--dialog-height",`${effectiveHeight}px`);this.$.dialog.style.setProperty("--dialog-width",`${effectiveWidth}px`);this.$.dialog.style.setProperty("--dialog-opacity","1")}show(data){this.data_=data;whenDocumentReady().then((()=>{if(!this.extensionOptions_){this.extensionOptions_=document.createElement("ExtensionOptions")}this.extensionOptions_.extension=this.data_.id;this.extensionOptions_.onclose=()=>this.$.dialog.close();this.extensionOptions_.onpreferredsizechanged=e=>{if(!this.$.dialog.open){this.$.dialog.showModal()}this.preferredSize_=e;if(this.updateDialogSizeTimeout_){clearTimeout(this.updateDialogSizeTimeout_)}this.updateDialogSizeTimeout_=setTimeout((()=>{this.updateDialogSizeTimeout_=null;this.updateDialogSize_()}),50)};const boundUpdateDialogSize=this.updateDialogSize_.bind(this);this.eventTracker_.add(window,"resize",boundUpdateDialogSize);this.$.body.appendChild(this.extensionOptions_)}))}onClose_(){assert(this.extensionOptions_);this.extensionOptions_.onpreferredsizechanged=null;this.eventTracker_.removeAll();const currentPage=navigation.getCurrentPage();if(currentPage&&currentPage.page===Page.DETAILS){navigation.navigateTo({page:Page.DETAILS,extensionId:currentPage.extensionId})}}}customElements.define(ExtensionsOptionsDialogElement.is,ExtensionsOptionsDialogElement);
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$b(){return html`<slot></slot>`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorElementBase=CrSelectableMixin(CrLitElement);class CrMenuSelectorElement extends CrMenuSelectorElementBase{static get is(){return"cr-menu-selector"}render(){return getHtml$b.bind(this)()}connectedCallback(){super.connectedCallback();FocusOutlineManager.forDocument(document)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.setAttribute("role","menu");this.addEventListener("focusin",this.onFocusin_.bind(this));this.addEventListener("keydown",this.onKeydown_.bind(this));this.addEventListener("iron-deselect",(e=>this.onIronDeselected_(e)));this.addEventListener("iron-select",(e=>this.onIronSelected_(e)))}getAllFocusableItems_(){return Array.from(this.querySelectorAll("[role=menuitem]:not([disabled]):not([hidden])"))}onFocusin_(e){const focusMovedWithKeyboard=FocusOutlineManager.forDocument(document).visible;const focusMovedFromOutside=e.relatedTarget===null||!this.contains(e.relatedTarget);if(focusMovedWithKeyboard&&focusMovedFromOutside){this.getAllFocusableItems_()[0].focus()}}onIronDeselected_(e){e.detail.item.removeAttribute("aria-current")}onIronSelected_(e){e.detail.item.setAttribute("aria-current","page")}onKeydown_(event){const items=this.getAllFocusableItems_();assert(items.length>=1);const currentFocusedIndex=items.indexOf(this.querySelector(":focus"));let newFocusedIndex=currentFocusedIndex;switch(event.key){case"Tab":if(event.shiftKey){items[0].focus()}else{items[items.length-1].focus({preventScroll:true})}return;case"ArrowDown":newFocusedIndex=(currentFocusedIndex+1)%items.length;break;case"ArrowUp":newFocusedIndex=(currentFocusedIndex+items.length-1)%items.length;break;case"Home":newFocusedIndex=0;break;case"End":newFocusedIndex=items.length-1;break}if(newFocusedIndex===currentFocusedIndex){return}event.preventDefault();items[newFocusedIndex].focus()}}customElements.define(CrMenuSelectorElement.is,CrMenuSelectorElement);let instance$c=null;function getCss$b(){return instance$c||(instance$c=[...[],css`.cr-nav-menu-item{--cr-nav-menu-item-color:var(--google-grey-900);--cr-nav-menu-item-color-selected:var(--google-blue-700);--cr-nav-menu-item-background-color-hover:var(--google-grey-200);--cr-nav-menu-item-background-color-selected:var(--google-blue-50);--cr-nav-menu-item-icon-color:var(--google-grey-700);--cr-nav-menu-item-icon-color-hover:var(--google-grey-700);--cr-nav-menu-item-icon-color-selected:var(--google-blue-600);--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--cr-nav-menu-item-color);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;padding-inline-end:16px;position:relative;text-decoration:none}:host-context([webui-refresh-2026]){.cr-nav-menu-item{--cr-nav-menu-item-color:var(--color-nav-menu-item);--cr-nav-menu-item-color-selected:var(--color-nav-menu-item-selected);--cr-nav-menu-item-background-color-hover:var(--color-nav-menu-item-background-hover);--cr-nav-menu-item-background-color-selected:var(--color-nav-menu-item-background-selected);--cr-nav-menu-item-icon-color:var(--color-nav-menu-item);--cr-nav-menu-item-icon-color-selected:var(--color-nav-menu-item-selected)}.cr-nav-menu-item:focus{outline:solid 2px var(--cr-focus-outline-color);outline-offset:-2px;border-start-start-radius:10px;border-end-start-radius:10px}}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color-hover);background:var(--cr-nav-menu-item-background-color-hover)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--cr-nav-menu-item-icon-color-selected);background:var(--cr-nav-menu-item-background-color-selected);color:var(--cr-nav-menu-item-color-selected)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--cr-nav-menu-item-color:white;--cr-nav-menu-item-color-selected:var(--google-grey-900);--cr-nav-menu-item-background-color-hover:var(--google-grey-800);--cr-nav-menu-item-background-color-selected:var(--google-blue-300);--cr-nav-menu-item-icon-color:var(--google-grey-500);--cr-nav-menu-item-icon-color-hover:white;--cr-nav-menu-item-icon-color-selected:black}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:transparent}.cr-nav-menu-item cr-icon,.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}@media (forced-colors:active){.cr-nav-menu-item[selected]{background:Highlight;color:HighlightText;--iron-icon-fill-color:HighlightText;forced-color-adjust:none}}`])}let instance$b=null;function getCss$a(){return instance$b||(instance$b=[...[getCss$12(),getCss$19(),getCss$b(),getCss$11()],css`:host{--sidebar-inactive-color:#5a5a5a;color:var(--sidebar-inactive-color);display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--sidebar-width)}@media (prefers-color-scheme:dark){:host{--sidebar-inactive-color:var(--cr-primary-text-color)}}#sectionMenu{padding-top:8px}.separator{border-top:var(--cr-separator-line);margin:8px 0}#moreExtensions{align-items:center;display:flex;margin-bottom:8px}#web-store-icon{--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:18px;margin-inline-start:-2px}.cr-secondary-text{line-height:19px;margin-inline-end:10px}#discover-more-text a,#promo-message-text a{color:var(--cr-link-color)}:host-context([webui-refresh-2026]){#discover-more-text a:focus,#promo-message-text a:focus{border-radius:2px;outline:solid 2px var(--cr-focus-outline-color)}}#promo-message-text{overflow-wrap:anywhere;hyphens:auto}
`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$a(){return html`<!--_html_template_start_-->
<cr-menu-selector id="sectionMenu" selected-attribute="selected"
    attr-for-selected="data-path" .selected="${this.selectedPath_}">
  <!-- Values for "data-path" attribute must match the "Page" enum. -->
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsExtensions" href="/"
      @click="${this.onLinkClick_}" data-path="itemsList">
    <cr-icon
        icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:chrome-extension":"extensions-icons:my_extensions-old"}">
    </cr-icon>
    $i18n{sidebarExtensions}
    <cr-ripple></cr-ripple>
  </a>
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsSitePermissions"
      ?hidden="${!this.enableEnhancedSiteControls}" href="/sitePermissions"
      @click="${this.onLinkClick_}" data-path="site-permissions">
    <cr-icon
        icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:tune":"extensions-icons:site_permissions-old"}">
    </cr-icon>
    $i18n{sitePermissions}
    <cr-ripple></cr-ripple>
  </a>
  <a role="menuitem" class="cr-nav-menu-item" id="sectionsShortcuts"
      href="/shortcuts" @click="${this.onLinkClick_}"
      data-path="keyboard-shortcuts">
    <cr-icon
        icon="${this.webuiRoundedIconsEnabled_?"extensions-icons:keyboard":"extensions-icons:keyboard_shortcuts-old"}">
    </cr-icon>
    $i18n{keyboardShortcuts}
    <cr-ripple></cr-ripple>
  </a>
</cr-menu-selector>
<div class="separator" ?hidden="${!this.showDeveloperPromo_()}"></div>
${this.showDeveloperPromo_()?html`
  <div class="cr-nav-menu-item">
    <span id="promo-message-text" class="cr-secondary-text"
        .innerHTML="${this.computeDeveloperPromoText_()}">
    </span>
  </div>
`:""}
<div class="separator"></div>
<div class="cr-nav-menu-item" id="moreExtensions">
  <cr-icon id="web-store-icon" icon="extensions-icons:web_store-custom">
  </cr-icon>
  <span id="discover-more-text" class="cr-secondary-text"
      @click="${this.onMoreExtensionsClick_}"
      .innerHTML="${this.computeDiscoverMoreText_()}">
  </span>
  <cr-ripple></cr-ripple>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSidebarElementBase=I18nMixinLit(CrLitElement);class ExtensionsSidebarElement extends ExtensionsSidebarElementBase{static get is(){return"extensions-sidebar"}static get styles(){return getCss$a()}render(){return getHtml$a.bind(this)()}static get properties(){return{enableEnhancedSiteControls:{type:Boolean},inDevMode:{type:Boolean},selectedPath_:{type:String},webuiRoundedIconsEnabled_:{type:Boolean}}}#enableEnhancedSiteControls_accessor_storage=false;get enableEnhancedSiteControls(){return this.#enableEnhancedSiteControls_accessor_storage}set enableEnhancedSiteControls(value){this.#enableEnhancedSiteControls_accessor_storage=value}#selectedPath__accessor_storage=Page.LIST;get selectedPath_(){return this.#selectedPath__accessor_storage}set selectedPath_(value){this.#selectedPath__accessor_storage=value}#webuiRoundedIconsEnabled__accessor_storage=loadTimeData.getBoolean("webuiRoundedIconsEnabled");get webuiRoundedIconsEnabled_(){return this.#webuiRoundedIconsEnabled__accessor_storage}set webuiRoundedIconsEnabled_(value){this.#webuiRoundedIconsEnabled__accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}navigationListener_=null;connectedCallback(){super.connectedCallback();this.navigationListener_=navigation.addListener((newPage=>{this.computeSelectedPath_(newPage.page)}))}disconnectedCallback(){super.disconnectedCallback();assert(this.navigationListener_);assert(navigation.removeListener(this.navigationListener_));this.navigationListener_=null}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.setAttribute("role","navigation");this.computeSelectedPath_(navigation.getCurrentPage().page)}computeSelectedPath_(page){switch(page){case Page.SITE_PERMISSIONS:case Page.SITE_PERMISSIONS_ALL_SITES:this.selectedPath_=Page.SITE_PERMISSIONS;break;case Page.SHORTCUTS:this.selectedPath_=Page.SHORTCUTS;break;default:this.selectedPath_=Page.LIST}}onLinkClick_(e){e.preventDefault();navigation.navigateTo({page:e.currentTarget.dataset["path"]});this.fire("close-drawer")}onMoreExtensionsClick_(e){if(e.target.tagName==="A"){chrome.metricsPrivate.recordUserAction("Options_GetMoreExtensions")}}computeDiscoverMoreText_(){return this.i18nAdvanced("sidebarDiscoverMore",{tags:["a"],attrs:["target"],substitutions:[loadTimeData.getString("getMoreExtensionsUrl")]})}showDeveloperPromo_(){return this.inDevMode&&loadTimeData.getString("sidebarDeveloperPromo")!==""}computeDeveloperPromoText_(){return this.i18nAdvanced("sidebarDeveloperPromo",{tags:["a"],attrs:["target"],substitutions:[loadTimeData.getString("sidebarDeveloperPromoUrl")]})}}customElements.define(ExtensionsSidebarElement.is,ExtensionsSidebarElement);
// Copyright (c) 2023 The Brave Authors. All rights reserved.
injectStyle(ExtensionsSidebarElement,css`
  .cr-nav-menu-item {
    min-height: 20px !important;
    border-end-end-radius: 0px !important;
    border-start-end-radius: 0px !important;
    box-sizing: content-box !important;
  }

  .cr-nav-menu-item:hover {
    background: transparent !important;
  }

  .cr-nav-menu-item[selected] {
    --iron-icon-fill-color: var(--cr-link-color) !important;
    color: var(--cr-link-color) !important;
    background: transparent !important;
  }

  .cr-nav-menu-item cr-icon {
    display: none !important;
  }

  .cr-nav-menu-item cr-ripple {
    display: none !important;
  }

  .separator {
    display: none !important;
  }

  #moreExtensions cr-icon {
    display: none !important;
  }

  /* Hide the dev-mode "AI coding agents" docs promo. */
  .cr-nav-menu-item:has(#promo-message-text) {
    display: none !important;
  }
`);let instance$a=null;function getCss$9(){return instance$a||(instance$a=[...[getCss$11(),getCss$s()],css`:host{--radio-group-height:132px;--dialog-height:360px}#dialog-title{display:flex;flex-direction:column;gap:8px}#title-subtext{color:var(--cr-secondary-text-color);font-size:81.25%}cr-radio-group{padding-inline:8px}.site-access-list{max-height:var(--dialog-height)}.indented-site-access-list{margin-inline-start:36px;max-height:calc(var(--dialog-height) - var(--radio-group-height))}.extension-row{--md-select-width:180px;align-items:center;border-top:var(--cr-separator-line);display:flex;height:32px;padding:12px 0}.extension-row:first-child{border-top:none}.extension-icon{height:24px;margin-inline-end:12px;width:24px}.extension-name{flex-grow:1;margin-inline-end:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$9(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="dialog-title">
    <div>$i18n{sitePermissionsEditPermissionsDialogTitle}</div>
    <div id="title-subtext">
      <span id="site">${this.getSiteWithoutSubdomainSpecifier_()}</span>
      <span id="includesSubdomains" ?hidden="${!this.matchesSubdomains_()}">
        $i18n{sitePermissionsIncludesSubdomains}
      </span>
    </div>
  </div>
  <div slot="header">
    <!-- The cr-radio-group is in the header instead of the body slot so it is
     fixed in place while the list of extensions in the body slot can scroll
     if the dialog's contents exceed the max height. -->
    ${!this.matchesSubdomains_()?html`
      <cr-radio-group .selected="${this.siteSet_}"
          @selected-changed="${this.onSiteSetSelectedChanged_}">
        <cr-radio-button ?hidden="${!this.showPermittedOption_}"
            name="${chrome.developerPrivate.SiteSet.USER_PERMITTED}"
            label="${this.getPermittedSiteLabel_()}">
        </cr-radio-button>
        <cr-radio-button
            name="${chrome.developerPrivate.SiteSet.USER_RESTRICTED}"
            label="${this.getRestrictedSiteLabel_()}">
        </cr-radio-button>
        <cr-radio-button
            name="${chrome.developerPrivate.SiteSet.EXTENSION_SPECIFIED}"
            label="$i18n{editSitePermissionsCustomizePerExtension}">
        </cr-radio-button>
      </cr-radio-group>
    `:""}
  </div>
  <div slot="body">
    ${this.showExtensionSiteAccessData_()?html`
      <div class="${this.getDialogBodyContainerClass_()}">
        ${this.extensionSiteAccessData_.map(((item,index)=>html`
          <div class="extension-row">
            <img class="extension-icon" src="${item.iconUrl}" alt="">
            <span class="extension-name">${item.name}</span>
            <select class="extension-host-access md-select"
                ?disabled="${item.addedByPolicy}"
                @change="${this.onHostAccessChange_}" data-index="${index}">
              <option value="${chrome.developerPrivate.HostAccess.ON_CLICK}"
                  .selected="${this.isSelected_(item.id,item.siteAccess,chrome.developerPrivate.HostAccess.ON_CLICK)}">
                $i18n{sitePermissionsAskOnEveryVisit}
              </option>
              <option
                  value="${chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES}"
                  .selected="${this.isSelected_(item.id,item.siteAccess,chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES)}">
                $i18n{sitePermissionsAlwaysOnThisSite}
              </option>
              <option value="${chrome.developerPrivate.HostAccess.ON_ALL_SITES}"
                  .selected="${this.isSelected_(item.id,item.siteAccess,chrome.developerPrivate.HostAccess.ON_ALL_SITES)}"
                  ?disabled="${!item.canRequestAllSites}">
                $i18n{sitePermissionsAlwaysOnAllSites}
              </option>
            </select>
          </div>
        `))}
      </div>
    `:""}
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit"
        @click="${this.onSubmitClick_}">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EXTENSION_SPECIFIED=chrome.developerPrivate.SiteSet.EXTENSION_SPECIFIED;const VALID_SCHEMES=["*","http","https","file","ftp","chrome","chrome-extension","filesystem","ftp","ws","wss","data","uuid-in-package"];const SitePermissionsEditPermissionsDialogElementBase=I18nMixinLit(CrLitElement);class SitePermissionsEditPermissionsDialogElement extends SitePermissionsEditPermissionsDialogElementBase{static get is(){return"site-permissions-edit-permissions-dialog"}static get styles(){return getCss$9()}render(){return getHtml$9.bind(this)()}static get properties(){return{delegate:{type:Object},extensions:{type:Array},originalSiteSet:{type:String},site:{type:String},siteSet_:{type:String},extensionSiteAccessData_:{type:Array},showPermittedOption_:{type:Boolean}}}#delegate_accessor_storage=new DummySiteSettingsDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#originalSiteSet_accessor_storage=chrome.developerPrivate.SiteSet.USER_PERMITTED;get originalSiteSet(){return this.#originalSiteSet_accessor_storage}set originalSiteSet(value){this.#originalSiteSet_accessor_storage=value}#site_accessor_storage="";get site(){return this.#site_accessor_storage}set site(value){this.#site_accessor_storage=value}#siteSet__accessor_storage=chrome.developerPrivate.SiteSet.USER_PERMITTED;get siteSet_(){return this.#siteSet__accessor_storage}set siteSet_(value){this.#siteSet__accessor_storage=value}extensionsIdToInfo_=new Map;#extensionSiteAccessData__accessor_storage=[];get extensionSiteAccessData_(){return this.#extensionSiteAccessData__accessor_storage}set extensionSiteAccessData_(value){this.#extensionSiteAccessData__accessor_storage=value}#showPermittedOption__accessor_storage=loadTimeData.getBoolean("enableUserPermittedSites");get showPermittedOption_(){return this.#showPermittedOption__accessor_storage}set showPermittedOption_(value){this.#showPermittedOption__accessor_storage=value}unsavedExtensionsIdToHostAccess_=new Map;willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("extensions")){this.onExtensionsUpdated_()}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.siteSet_=this.originalSiteSet;this.updateExtensionSiteAccessData_(this.siteSet_);assert(!this.matchesSubdomains_()||this.originalSiteSet===EXTENSION_SPECIFIED)}onExtensionsUpdated_(){this.extensionsIdToInfo_=new Map;for(const extension of this.extensions){this.extensionsIdToInfo_.set(extension.id,extension)}this.updateExtensionSiteAccessData_(this.siteSet_)}onSiteSetSelectedChanged_(e){this.siteSet_=e.detail.value;this.updateExtensionSiteAccessData_(this.siteSet_)}isSiteHostOnly_(){return!VALID_SCHEMES.some((scheme=>this.site.startsWith(`${scheme}://`)))}async updateExtensionSiteAccessData_(siteSet){if(siteSet!==EXTENSION_SPECIFIED){return}const siteToCheck=this.isSiteHostOnly_()?`*://${this.site}/`:`${this.site}/`;const matchingExtensionsInfo=await this.delegate.getMatchingExtensionsForSite(siteToCheck);const extensionSiteAccessData=[];matchingExtensionsInfo.forEach((({id:id,siteAccess:siteAccess,canRequestAllSites:canRequestAllSites})=>{assert(this.extensionsIdToInfo_.has(id));const{name:name,iconUrl:iconUrl}=this.extensionsIdToInfo_.get(id);const addedByPolicy=getItemSource(this.extensionsIdToInfo_.get(id))===SourceType.POLICY;extensionSiteAccessData.push({id:id,name:name,iconUrl:iconUrl,siteAccess:siteAccess,addedByPolicy:addedByPolicy,canRequestAllSites:canRequestAllSites});if(this.unsavedExtensionsIdToHostAccess_.get(id)===siteAccess){this.unsavedExtensionsIdToHostAccess_.delete(id)}}));for(const extensionId of this.unsavedExtensionsIdToHostAccess_.keys()){if(!this.extensionsIdToInfo_.has(extensionId)){this.unsavedExtensionsIdToHostAccess_.delete(extensionId)}}this.extensionSiteAccessData_=extensionSiteAccessData}onCancelClick_(){this.$.dialog.cancel()}async onSubmitClick_(){if(this.siteSet_!==this.originalSiteSet){const sitesToChange=this.isSiteHostOnly_()?[`http://${this.site}`,`https://${this.site}`]:[this.site];if(this.siteSet_===EXTENSION_SPECIFIED){await this.delegate.removeUserSpecifiedSites(this.originalSiteSet,sitesToChange)}else{await this.delegate.addUserSpecifiedSites(this.siteSet_,sitesToChange)}}if(this.siteSet_===EXTENSION_SPECIFIED&&this.unsavedExtensionsIdToHostAccess_.size){const updates=[];this.unsavedExtensionsIdToHostAccess_.forEach(((val,key)=>{updates.push({id:key,siteAccess:val})}));const siteToUpdate=this.isSiteHostOnly_()?`*://${this.site}/`:`${this.site}/`;await this.delegate.updateSiteAccess(siteToUpdate,updates)}this.$.dialog.close()}getSiteWithoutSubdomainSpecifier_(){return this.site.replace(SUBDOMAIN_SPECIFIER,"")}getPermittedSiteLabel_(){return this.i18n("editSitePermissionsAllowAllExtensions",this.site)}getRestrictedSiteLabel_(){return this.i18n("editSitePermissionsRestrictExtensions",this.site)}matchesSubdomains_(){return matchesSubdomains(this.site)}showExtensionSiteAccessData_(){return this.siteSet_===EXTENSION_SPECIFIED}getDialogBodyContainerClass_(){return this.matchesSubdomains_()?"site-access-list":"indented-site-access-list"}isSelected_(extensionId,originalSiteAccess,option){const selectedValue=this.unsavedExtensionsIdToHostAccess_.get(extensionId)||originalSiteAccess;return selectedValue===option}onHostAccessChange_(e){const selectMenu=e.target;assert(selectMenu);const index=Number(selectMenu.dataset["index"]);const item=this.extensionSiteAccessData_[index];const originalSiteAccess=item.siteAccess;const newSiteAccess=selectMenu.value;assert(item.canRequestAllSites||newSiteAccess!==chrome.developerPrivate.HostAccess.ON_ALL_SITES);if(originalSiteAccess===newSiteAccess){this.unsavedExtensionsIdToHostAccess_.delete(item.id)}else{this.unsavedExtensionsIdToHostAccess_.set(item.id,newSiteAccess)}}}customElements.define(SitePermissionsEditPermissionsDialogElement.is,SitePermissionsEditPermissionsDialogElement);let instance$9=null;function getCss$8(){return instance$9||(instance$9=[...[getCss$11(),getCss$N()],css`#site-list-header-container{align-items:center;display:flex;justify-content:space-between}#no-sites{color:var(--cr-secondary-text-color);margin:var(--cr-section-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height);margin-inline-start:24px}#sites-list{margin:12px 0}.site{flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden;text-overflow:ellipsis}.separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$8(){return html`<!--_html_template_start_-->
<div id="site-list-header-container">
  <span>${this.header}</span>
  <cr-button id="addSite" @click="${this.onAddSiteClick_}">
    $i18n{add}
  </cr-button>
</div>
<div id="no-sites" ?hidden="${this.hasSites_()}">$i18n{noSitesAdded}</div>
<div id="sites-list" ?hidden="${!this.hasSites_()}">
  ${this.sites.map((item=>html`
    <div class="site-row">
      <div class="site-favicon"
          .style="background-image:${this.getFaviconUrl_(item)}">
      </div>
      <span class="site">${item}</span>
      <cr-icon-button class="icon-more-vert no-overlap" data-site="${item}"
          @click="${this.onDotsClick_}">
      </cr-icon-button>
    </div>
  `))}
</div>

<cr-action-menu id="siteActionMenu">
  <button class="dropdown-item" id="edit-site-url"
      @click="${this.onEditSiteUrlClick_}">
    $i18n{sitePermissionsEditUrl}
  </button>
  <button class="dropdown-item" id="edit-site-permissions"
      @click="${this.onEditSitePermissionsClick_}">
    $i18n{sitePermissionsEditPermissions}
  </button>
  <button class="dropdown-item" id="remove-site"
      @click="${this.onRemoveSiteClick_}">
    $i18n{remove}
  </button>
</cr-action-menu>

${this.showEditSiteUrlDialog_?html`
  <site-permissions-edit-url-dialog .delegate="${this.delegate}"
      .siteToEdit="${this.siteToEdit_}" .siteSet="${this.siteSet}"
      @close="${this.onEditSiteUrlDialogClose_}">
  </site-permissions-edit-url-dialog>
`:""}

${this.showEditSitePermissionsDialog_?html`
  <site-permissions-edit-permissions-dialog .delegate="${this.delegate}"
      .extensions="${this.extensions}" .site="${this.siteToEdit_||""}"
      .originalSiteSet="${this.siteSet}"
      @close="${this.onEditSitePermissionsDialogClose_}">
  </site-permissions-edit-permissions-dialog>
`:""}
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsListElement extends CrLitElement{static get is(){return"site-permissions-list"}static get styles(){return getCss$8()}render(){return getHtml$8.bind(this)()}static get properties(){return{delegate:{type:Object},extensions:{type:Array},header:{type:String},siteSet:{type:String},sites:{type:Array},showEditSiteUrlDialog_:{type:Boolean},showEditSitePermissionsDialog_:{type:Boolean},siteToEdit_:{type:String}}}#delegate_accessor_storage=new DummySiteSettingsDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#header_accessor_storage="";get header(){return this.#header_accessor_storage}set header(value){this.#header_accessor_storage=value}#siteSet_accessor_storage=chrome.developerPrivate.SiteSet.USER_PERMITTED;get siteSet(){return this.#siteSet_accessor_storage}set siteSet(value){this.#siteSet_accessor_storage=value}#sites_accessor_storage=[];get sites(){return this.#sites_accessor_storage}set sites(value){this.#sites_accessor_storage=value}#showEditSiteUrlDialog__accessor_storage=false;get showEditSiteUrlDialog_(){return this.#showEditSiteUrlDialog__accessor_storage}set showEditSiteUrlDialog_(value){this.#showEditSiteUrlDialog__accessor_storage=value}#showEditSitePermissionsDialog__accessor_storage=false;get showEditSitePermissionsDialog_(){return this.#showEditSitePermissionsDialog__accessor_storage}set showEditSitePermissionsDialog_(value){this.#showEditSitePermissionsDialog__accessor_storage=value}#siteToEdit__accessor_storage=null;get siteToEdit_(){return this.#siteToEdit__accessor_storage}set siteToEdit_(value){this.#siteToEdit__accessor_storage=value}siteToEditAnchorElement_=null;hasSites_(){return!!this.sites.length}getFaviconUrl_(url){return getFaviconUrl(url)}focusOnAnchor_(){assert(this.siteToEditAnchorElement_,"Site Anchor");focusWithoutInk(this.siteToEditAnchorElement_);this.siteToEditAnchorElement_=null}onAddSiteClick_(){assert(!this.showEditSitePermissionsDialog_);this.siteToEdit_=null;this.showEditSiteUrlDialog_=true}onEditSiteUrlDialogClose_(){this.showEditSiteUrlDialog_=false;if(this.siteToEdit_!==null){this.focusOnAnchor_()}this.siteToEdit_=null}onEditSitePermissionsDialogClose_(){this.showEditSitePermissionsDialog_=false;assert(this.siteToEdit_,"Site To Edit");this.focusOnAnchor_();this.siteToEdit_=null}onDotsClick_(e){const target=e.target;this.siteToEdit_=target.dataset["site"];assert(!this.showEditSitePermissionsDialog_);this.$.siteActionMenu.showAt(target);this.siteToEditAnchorElement_=target}onEditSitePermissionsClick_(){this.closeActionMenu_();assert(this.siteToEdit_!==null);this.showEditSitePermissionsDialog_=true}onEditSiteUrlClick_(){this.closeActionMenu_();assert(this.siteToEdit_!==null);this.showEditSiteUrlDialog_=true}onRemoveSiteClick_(){assert(this.siteToEdit_,"Site To Edit");this.delegate.removeUserSpecifiedSites(this.siteSet,[this.siteToEdit_]).then((()=>{this.closeActionMenu_();this.siteToEdit_=null}))}closeActionMenu_(){const menu=this.$.siteActionMenu;assert(menu.open);menu.close()}}customElements.define(ExtensionsSitePermissionsListElement.is,ExtensionsSitePermissionsListElement);let instance$8=null;function getCss$7(){return instance$8||(instance$8=[...[getCss$11(),getCss$N()],css`#container{box-sizing:border-box}#header{font-size:0.88rem;margin:31px auto 16px auto;width:var(--cr-toolbar-field-width)}#site-permissions-container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto;width:var(--cr-toolbar-field-width)}#site-lists{box-sizing:border-box;padding:var(--cr-section-padding) var(--cr-section-padding) 0}cr-link-row{padding-inline-end:28px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$7(){return html`<!--_html_template_start_-->
<div class="page-container" id="container">
  <div id="header">$i18n{sitePermissionsPageTitle}</div>
  <div id="site-permissions-container">
    <div id="site-lists">
      ${this.showPermittedSites_?html`
        <site-permissions-list .delegate="${this.delegate}"
            .extensions="${this.extensions}" header="$i18n{permittedSites}"
            .siteSet="${chrome.developerPrivate.SiteSet.USER_PERMITTED}"
            .sites="${this.permittedSites}">
        </site-permissions-list>
      `:""}
      <site-permissions-list .delegate="${this.delegate}"
          .extensions="${this.extensions}" header="$i18n{restrictedSites}"
          .siteSet="${chrome.developerPrivate.SiteSet.USER_RESTRICTED}"
          .sites="${this.restrictedSites}">
      </site-permissions-list>
    </div>
    <cr-link-row class="hr" id="allSitesLink"
        label="$i18n{sitePermissionsViewAllSites}"
        @click="${this.onAllSitesLinkClick_}">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSitePermissionsElementBase=SiteSettingsMixin(CrLitElement);class ExtensionsSitePermissionsElement extends ExtensionsSitePermissionsElementBase{static get is(){return"extensions-site-permissions"}static get styles(){return getCss$7()}render(){return getHtml$7.bind(this)()}static get properties(){return{extensions:{type:Array},showPermittedSites_:{type:Boolean}}}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#showPermittedSites__accessor_storage=loadTimeData.getBoolean("enableUserPermittedSites");get showPermittedSites_(){return this.#showPermittedSites__accessor_storage}set showPermittedSites_(value){this.#showPermittedSites__accessor_storage=value}onAllSitesLinkClick_(){navigation.navigateTo({page:Page.SITE_PERMISSIONS_ALL_SITES})}}customElements.define(ExtensionsSitePermissionsElement.is,ExtensionsSitePermissionsElement);let instance$7=null;function getCss$6(){return instance$7||(instance$7=[...[getCss$11(),getCss$N()],css`#etld-row{align-items:center;display:flex;height:var(--cr-section-two-line-min-height)}.site-and-subtext{display:flex;flex-direction:column;flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden}.site-wrapper{display:flex}.site{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.includes-subdomains{color:var(--cr-secondary-text-color);flex-shrink:0;margin-inline-start:4px}.site-subtext{color:var(--cr-secondary-text-color)}#sites-list{margin-inline-start:var(--cr-section-indent-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$6(){return html`<!--_html_template_start_-->
<div id="etld-row" class="${this.getClassForIndex_()}">
  <div class="site-favicon"
      .style="background-image:${this.getEtldOrSiteFaviconUrl_()}">
  </div>
  <div class="site-and-subtext">
    <div class="site-wrapper">
      <span id="etldOrSite" class="site">${this.getDisplayUrl_()}</span>
      <span id="etldOrSiteIncludesSubdomains" class="includes-subdomains"
          ?hidden="${!this.etldOrFirstSiteMatchesSubdomains_()}">
        $i18n{sitePermissionsIncludesSubdomains}
      </span>
    </div>
    <span id="etldOrSiteSubtext" class="site-subtext">
      ${this.getEtldOrSiteSubText_()}
    </span>
  </div>
  ${this.isExpandable_()?html`
    <cr-expand-button no-hover id="expand-sites-button"
        ?expanded="${this.expanded_}"
        @expanded-changed="${this.onExpandedChanged_}">
    </cr-expand-button>
  `:html`
    <cr-icon-button class="subpage-arrow" id="edit-one-site-button"
        @click="${this.onEditSiteClick_}">
    </cr-icon-button>
  `}
</div>
<div id="sites-list" ?hidden="${!this.expanded_}">
  ${this.data.sites.map(((item,index)=>html`
    <div class="site-row hr">
      <div class="site-favicon"
          .style="background-image:${this.getFaviconUrl_(item.site)}">
      </div>
      <div class="site-and-subtext">
        <div class="site-wrapper">
          <span class="site">
            ${this.getSiteWithoutSubdomainSpecifier_(item.site)}
          </span>
          <span class="includes-subdomains"
              ?hidden="${!this.matchesSubdomains_(item.site)}">
            $i18n{sitePermissionsIncludesSubdomains}
          </span>
        </div>
        <span class="site-subtext">${this.getSiteSubtext_(item)}</span>
      </div>
      <cr-icon-button class="subpage-arrow" data-index="${index}"
          @click="${this.onEditSiteInListClick_}">
      </cr-icon-button>
    </div>
  `))}
</div>

${this.showEditSitePermissionsDialog_?html`
  <site-permissions-edit-permissions-dialog .delegate="${this.delegate}"
      .extensions="${this.extensions}" .site="${this.siteToEdit_.site}"
      .originalSiteSet="${this.siteToEdit_.siteSet}"
      @close="${this.onEditSitePermissionsDialogClose_}">
  </site-permissions-edit-permissions-dialog>
`:""}
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SitePermissionsSiteGroupElement extends CrLitElement{static get is(){return"site-permissions-site-group"}static get styles(){return getCss$6()}render(){return getHtml$6.bind(this)()}static get properties(){return{data:{type:Object},delegate:{type:Object},extensions:{type:Array},listIndex:{type:Number},expanded_:{type:Boolean},showEditSitePermissionsDialog_:{type:Boolean},siteToEdit_:{type:Object}}}#data_accessor_storage={etldPlusOne:"",numExtensions:0,sites:[]};get data(){return this.#data_accessor_storage}set data(value){this.#data_accessor_storage=value}#delegate_accessor_storage=new DummySiteSettingsDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#listIndex_accessor_storage=-1;get listIndex(){return this.#listIndex_accessor_storage}set listIndex(value){this.#listIndex_accessor_storage=value}#expanded__accessor_storage=false;get expanded_(){return this.#expanded__accessor_storage}set expanded_(value){this.#expanded__accessor_storage=value}#showEditSitePermissionsDialog__accessor_storage=false;get showEditSitePermissionsDialog_(){return this.#showEditSitePermissionsDialog__accessor_storage}set showEditSitePermissionsDialog_(value){this.#showEditSitePermissionsDialog__accessor_storage=value}#siteToEdit__accessor_storage=null;get siteToEdit_(){return this.#siteToEdit__accessor_storage}set siteToEdit_(value){this.#siteToEdit__accessor_storage=value}getEtldOrSiteFaviconUrl_(){return getFaviconUrl(this.getDisplayUrl_())}getFaviconUrl_(url){return getFaviconUrl(url)}isExpandable_(){return this.data.sites.length>1}getClassForIndex_(){return this.listIndex>0?"hr":""}getDisplayUrl_(){return this.data.sites.length===1?this.getSiteWithoutSubdomainSpecifier_(this.data.sites[0].site):this.data.etldPlusOne}getEtldOrSiteSubText_(){if(this.data.sites.length===0){return""}const siteSet=this.data.sites[0].siteSet;const isSiteSetConsistent=this.data.sites.every((site=>site.siteSet===siteSet));if(!isSiteSetConsistent){return""}if(siteSet===chrome.developerPrivate.SiteSet.USER_PERMITTED){return loadTimeData.getString("permittedSites")}return siteSet===chrome.developerPrivate.SiteSet.USER_RESTRICTED?loadTimeData.getString("restrictedSites"):this.getExtensionCountText_(this.data.numExtensions)}getSiteWithoutSubdomainSpecifier_(site){return site.replace(SUBDOMAIN_SPECIFIER,"")}etldOrFirstSiteMatchesSubdomains_(){const site=this.data.sites.length===1?this.data.sites[0].site:this.data.etldPlusOne;return matchesSubdomains(site)}matchesSubdomains_(site){return matchesSubdomains(site)}getSiteSubtext_(siteInfo){if(siteInfo.numExtensions>0){return this.getExtensionCountText_(siteInfo.numExtensions)}return loadTimeData.getString(siteInfo.siteSet===chrome.developerPrivate.SiteSet.USER_PERMITTED?"permittedSites":"restrictedSites")}getExtensionCountText_(numExtensions){return numExtensions===1?loadTimeData.getString("sitePermissionsAllSitesOneExtension"):loadTimeData.getStringF("sitePermissionsAllSitesExtensionCount",numExtensions)}onEditSiteClick_(){this.siteToEdit_=this.data.sites[0]||null;this.showEditSitePermissionsDialog_=true}onEditSiteInListClick_(e){const index=Number(e.target.dataset["index"]);this.siteToEdit_=this.data.sites[index]||null;this.showEditSitePermissionsDialog_=true}onEditSitePermissionsDialogClose_(){this.showEditSitePermissionsDialog_=false;assert(this.siteToEdit_,"Site To Edit");this.siteToEdit_=null}onExpandedChanged_(e){this.expanded_=e.detail.value}}customElements.define(SitePermissionsSiteGroupElement.is,SitePermissionsSiteGroupElement);let instance$6=null;function getCss$5(){return instance$6||(instance$6=[...[getCss$11(),getCss$N()],css`#container{box-sizing:border-box}.cr-title-text{margin-inline-start:16px}#site-groups{margin:0 var(--cr-section-padding)}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$5(){return html`<!--_html_template_start_-->
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton"
          @click="${this.onCloseButtonClick_}">
      </cr-icon-button>
      <span class="cr-title-text">$i18n{sitePermissionsAllSitesPageTitle}</span>
    </div>
    <div id="site-groups">
      ${this.siteGroups_.map(((item,index)=>html`
        <site-permissions-site-group .data="${item}"
            .delegate="${this.delegate}"
            .extensions="${this.extensions}" list-index="${index}">
        </site-permissions-site-group>
      `))}
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsBySiteElement extends CrLitElement{static get is(){return"extensions-site-permissions-by-site"}static get styles(){return getCss$5()}render(){return getHtml$5.bind(this)()}static get properties(){return{delegate:{type:Object},extensions:{type:Array},siteGroups_:{type:Array}}}#delegate_accessor_storage;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#siteGroups__accessor_storage=[];get siteGroups_(){return this.#siteGroups__accessor_storage}set siteGroups_(value){this.#siteGroups__accessor_storage=value}firstUpdated(){assert(this.delegate);this.refreshUserAndExtensionSites_();this.delegate.getUserSiteSettingsChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));this.delegate.getItemStateChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this))}refreshUserAndExtensionSites_(){assert(this.delegate);this.delegate.getUserAndExtensionSitesByEtld().then((sites=>{this.siteGroups_=sites}))}onCloseButtonClick_(){navigation.navigateTo({page:Page.SITE_PERMISSIONS})}}customElements.define(ExtensionsSitePermissionsBySiteElement.is,ExtensionsSitePermissionsBySiteElement);let instance$5=null;function getCss$4(){return instance$5||(instance$5=[...[getCss$11()],css`.body{white-space:pre-wrap;word-break:break-word}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$4(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div class="title" slot="title">${this.title_}</div>
  <!-- No whitespace or new-lines allowed within the div.body tag. -->
  <div class="body" slot="body">${this.model.message}</div>
  <div class="button-container" slot="button-container">
    <cr-button class="${this.getCancelButtonClass_()}"
        @click="${this.onCancelClick_}" ?hidden="${!this.cancelLabel_}">
      ${this.cancelLabel_}
    </cr-button>
    <cr-button class="action-button" @click="${this.onConfirmClick_}"
        ?hidden="${!this.confirmLabel_}">
      ${this.confirmLabel_}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsPackDialogAlertElement extends CrLitElement{static get is(){return"extensions-pack-dialog-alert"}static get styles(){return getCss$4()}render(){return getHtml$4.bind(this)()}static get properties(){return{model:{type:Object},cancelLabel_:{type:String},confirmLabel_:{type:String},title_:{type:String}}}#model_accessor_storage={message:"",item_path:"",pem_path:"",override_flags:0,status:chrome.developerPrivate.PackStatus.SUCCESS};get model(){return this.#model_accessor_storage}set model(value){this.#model_accessor_storage=value}#cancelLabel__accessor_storage=null;get cancelLabel_(){return this.#cancelLabel__accessor_storage}set cancelLabel_(value){this.#cancelLabel__accessor_storage=value}#confirmLabel__accessor_storage="";get confirmLabel_(){return this.#confirmLabel__accessor_storage}set confirmLabel_(value){this.#confirmLabel__accessor_storage=value}#title__accessor_storage="";get title_(){return this.#title__accessor_storage}set title_(value){this.#title__accessor_storage=value}get returnValue(){return this.$.dialog.getNative().returnValue}firstUpdated(){this.cancelLabel_=null;this.confirmLabel_=null;switch(this.model.status){case chrome.developerPrivate.PackStatus.WARNING:this.title_=loadTimeData.getString("packDialogWarningTitle");this.cancelLabel_=loadTimeData.getString("cancel");this.confirmLabel_=loadTimeData.getString("packDialogProceedAnyway");break;case chrome.developerPrivate.PackStatus.ERROR:this.title_=loadTimeData.getString("packDialogErrorTitle");this.cancelLabel_=loadTimeData.getString("ok");break;case chrome.developerPrivate.PackStatus.SUCCESS:this.title_=loadTimeData.getString("packDialogTitle");this.cancelLabel_=loadTimeData.getString("ok");break;default:assertNotReached()}}getCancelButtonClass_(){return this.confirmLabel_?"cancel-button":"action-button"}onCancelClick_(){this.$.dialog.cancel()}onConfirmClick_(){assert(this.model.status===chrome.developerPrivate.PackStatus.WARNING);this.$.dialog.close()}}customElements.define(ExtensionsPackDialogAlertElement.is,ExtensionsPackDialogAlertElement);let instance$4=null;function getCss$3(){return instance$4||(instance$4=[...[getCss$11()],css`cr-input{margin-top:var(--cr-form-field-bottom-spacing);--cr-input-error-display:none;margin-bottom:4px}cr-button[slot='suffix']{margin-inline-start:10px}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$3(){return html`<!--_html_template_start_-->
<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{packDialogTitle}</div>
  <div slot="body">
    <div>$i18n{packDialogContent}</div>
    <cr-input id="rootDir" label="$i18n{packDialogExtensionRoot}"
        .value="${this.packDirectory_}"
        @value-changed="${this.onPackDirectoryValueChanged_}" autofocus>
      <cr-button id="rootDirBrowse" @click="${this.onRootBrowseClick_}"
          slot="suffix">
        $i18n{packDialogBrowse}
      </cr-button>
    </cr-input>
    <cr-input id="keyFile" label="$i18n{packDialogKeyFile}"
        .value="${this.keyFile_}"
        @value-changed="${this.onKeyFileValueChanged_}">
      <cr-button id="keyFileBrowse" @click="${this.onKeyBrowseClick_}"
          slot="suffix">
        $i18n{packDialogBrowse}
      </cr-button>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" @click="${this.onCancelClick_}">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" @click="${this.onConfirmClick_}"
        ?disabled="${!this.packDirectory_}">
      $i18n{packDialogConfirm}
    </cr-button>
  </div>
</cr-dialog>
${this.lastResponse_?html`
  <extensions-pack-dialog-alert .model="${this.lastResponse_}"
      @close="${this.onAlertClose_}">
  </extensions-pack-dialog-alert>
`:""}
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyPackDialogDelegate{choosePackRootDirectory(){return Promise.resolve("")}choosePrivateKeyPath(){return Promise.resolve("")}packExtension(_rootPath,_keyPath,_flag){return Promise.resolve({message:"",item_path:"",pem_path:"",override_flags:0,status:chrome.developerPrivate.PackStatus.SUCCESS})}}class ExtensionsPackDialogElement extends CrLitElement{static get is(){return"extensions-pack-dialog"}static get styles(){return getCss$3()}render(){return getHtml$3.bind(this)()}static get properties(){return{delegate:{type:Object},packDirectory_:{type:String},keyFile_:{type:String},lastResponse_:{type:Object}}}#delegate_accessor_storage=new DummyPackDialogDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#packDirectory__accessor_storage="";get packDirectory_(){return this.#packDirectory__accessor_storage}set packDirectory_(value){this.#packDirectory__accessor_storage=value}#keyFile__accessor_storage="";get keyFile_(){return this.#keyFile__accessor_storage}set keyFile_(value){this.#keyFile__accessor_storage=value}#lastResponse__accessor_storage=null;get lastResponse_(){return this.#lastResponse__accessor_storage}set lastResponse_(value){this.#lastResponse__accessor_storage=value}onKeyFileValueChanged_(e){this.keyFile_=e.detail.value}onPackDirectoryValueChanged_(e){this.packDirectory_=e.detail.value}onRootBrowseClick_(){this.delegate.choosePackRootDirectory().then((path=>{if(path){this.packDirectory_=path}}))}onKeyBrowseClick_(){this.delegate.choosePrivateKeyPath().then((path=>{if(path){this.keyFile_=path}}))}onCancelClick_(){this.$.dialog.cancel()}onConfirmClick_(){this.delegate.packExtension(this.packDirectory_,this.keyFile_,0).then((response=>this.onPackResponse_(response)))}onPackResponse_(response){this.lastResponse_=response}onAlertClose_(e){e.stopPropagation();if(this.lastResponse_.status===chrome.developerPrivate.PackStatus.SUCCESS){this.$.dialog.close();return}if(this.shadowRoot.querySelector("extensions-pack-dialog-alert").returnValue==="success"){this.delegate.packExtension(this.lastResponse_.item_path,this.lastResponse_.pem_path,this.lastResponse_.override_flags).then((response=>this.onPackResponse_(response)))}this.lastResponse_=null}}customElements.define(ExtensionsPackDialogElement.is,ExtensionsPackDialogElement);let instance$3=null;function getCss$2(){return instance$3||(instance$3=[...[getCss$19()],css`:host{--border-bottom-height:1px;--button-row-height:calc(2 * var(--padding-top-bottom) + var(--cr-button-height));--drawer-transition:0.3s cubic-bezier(.25,.1,.25,1);--padding-top-bottom:10px}cr-tooltip-icon{margin-inline-end:20px}#devDrawer[expanded] #buttonStrip{top:0}#devDrawer{background:#fff;border-bottom:1px solid var(--google-grey-300);height:0;overflow-x:hidden;overflow-y:auto;position:relative;transition:height var(--drawer-transition)}@media (prefers-color-scheme:dark){#devDrawer{background:none;border-bottom-color:var(--cr-separator-color)}}#devDrawer[expanded]{height:calc(var(--button-row-height) + var(--border-bottom-height))}#buttonStrip{margin-inline-end:auto;margin-inline-start:24px;padding:var(--padding-top-bottom) 0;position:absolute;top:calc(var(--button-row-height) * -1);transition:top var(--drawer-transition);user-select:none;width:100%}#buttonStrip cr-button{margin-inline-end:16px}.more-actions{align-items:center;display:flex;justify-content:flex-end;white-space:nowrap}.more-actions span{margin-inline-end:16px}cr-toolbar{--cr-toolbar-center-basis:680px;--cr-toolbar-field-max-width:var(--cr-toolbar-center-basis);--cr-toolbar-field-width:100%;--cr-toolbar-header-white-space:nowrap}cr-toolbar[narrow] picture[slot='product-logo']{display:none}picture[slot='product-logo']{display:inline-block;height:24px;margin-inline-end:16px;width:24px}picture[slot='product-logo'] img{display:block;height:100%;width:100%}
`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$2(){return html`<!--_html_template_start_-->
<cr-toolbar id="toolbar" page-name="$i18n{toolbarTitle}"
    search-prompt="$i18n{search}" clear-label="$i18n{clearSearch}" autofocus
    menu-label="$i18n{mainMenu}" ?narrow="${this.narrow}"
    @narrow-changed="${this.onNarrowChanged_}" narrow-threshold="1000"
    ?show-menu="${this.narrow}">
  <div class="more-actions">
    <span id="devModeLabel">$i18n{toolbarDevMode}</span>
    <cr-tooltip-icon ?hidden="${!this.shouldDisableDevMode_()}"
        tooltip-text="${this.getTooltipText_()}" icon-class="${this.getIcon_()}"
        icon-aria-label="${this.getTooltipText_()}">
    </cr-tooltip-icon>
    <cr-toggle id="devMode" @change="${this.onDevModeToggleChange_}"
        ?disabled="${this.shouldDisableDevMode_()}" ?checked="${this.inDevMode}"
        aria-labelledby="devModeLabel">
    </cr-toggle>
  </div>

</cr-toolbar>
${this.showPackDialog_?html`
  <extensions-pack-dialog .delegate="${this.delegate}"
      @close="${this.onPackDialogClose_}">
  </extensions-pack-dialog>
`:""}
<div id="devDrawer" ?expanded="${this.expanded_}">
  <div id="buttonStrip">
    <cr-button ?hidden="${!this.canLoadUnpacked_()}" id="loadUnpacked"
        @click="${this.onLoadUnpackedClick_}">
      $i18n{toolbarLoadUnpacked}
    </cr-button>
    <cr-button id="packExtensions" @click="${this.onPackClick_}">
      $i18n{toolbarPack}
    </cr-button>
    <cr-button id="updateNow" @click="${this.onUpdateNowClick_}"
        title="$i18n{toolbarUpdateNowTooltip}">
      $i18n{toolbarUpdateNow}
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyToolbarDelegate{setProfileInDevMode(_inDevMode){}loadUnpacked(){return Promise.resolve(true)}updateAllExtensions(_extensions){return Promise.resolve()}}const ExtensionsToolbarElementBase=I18nMixinLit(CrLitElement);class ExtensionsToolbarElement extends ExtensionsToolbarElementBase{static get is(){return"extensions-toolbar"}static get styles(){return getCss$2()}render(){return getHtml$2.bind(this)()}static get properties(){return{extensions:{type:Array},delegate:{type:Object},inDevMode:{type:Boolean,reflect:true},devModeControlledByPolicy:{type:Boolean},isChildAccount:{type:Boolean},narrow:{type:Boolean,notify:true},canLoadUnpacked:{type:Boolean},expanded_:{type:Boolean},showPackDialog_:{type:Boolean},isUpdating_:{type:Boolean}}}#extensions_accessor_storage=[];get extensions(){return this.#extensions_accessor_storage}set extensions(value){this.#extensions_accessor_storage=value}#delegate_accessor_storage=new DummyToolbarDelegate;get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=false;get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#devModeControlledByPolicy_accessor_storage=false;get devModeControlledByPolicy(){return this.#devModeControlledByPolicy_accessor_storage}set devModeControlledByPolicy(value){this.#devModeControlledByPolicy_accessor_storage=value}#isChildAccount_accessor_storage=false;get isChildAccount(){return this.#isChildAccount_accessor_storage}set isChildAccount(value){this.#isChildAccount_accessor_storage=value}#narrow_accessor_storage=false;get narrow(){return this.#narrow_accessor_storage}set narrow(value){this.#narrow_accessor_storage=value}#canLoadUnpacked_accessor_storage;get canLoadUnpacked(){return this.#canLoadUnpacked_accessor_storage}set canLoadUnpacked(value){this.#canLoadUnpacked_accessor_storage=value}#expanded__accessor_storage=false;get expanded_(){return this.#expanded__accessor_storage}set expanded_(value){this.#expanded__accessor_storage=value}#showPackDialog__accessor_storage=false;get showPackDialog_(){return this.#showPackDialog__accessor_storage}set showPackDialog_(value){this.#showPackDialog__accessor_storage=value}#isUpdating__accessor_storage=false;get isUpdating_(){return this.#isUpdating__accessor_storage}set isUpdating_(value){this.#isUpdating__accessor_storage=value}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.setAttribute("role","banner")}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("inDevMode")){const previous=changedProperties.get("inDevMode");this.onInDevModeChanged_(this.inDevMode,previous)}}focusSearchInput(){this.$.toolbar.getSearchField().showAndFocus()}isSearchFocused(){return this.$.toolbar.getSearchField().isSearchFocused()}shouldDisableDevMode_(){return this.devModeControlledByPolicy||this.isChildAccount}getTooltipText_(){return this.i18n(this.isChildAccount?"controlledSettingChildRestriction":"controlledSettingPolicy")}getIcon_(){return this.isChildAccount?"cr20:family-link":"cr20:domain"}onDevModeToggleChange_(e){this.delegate.setProfileInDevMode(e.detail);chrome.metricsPrivate.recordUserAction("Options_ToggleDeveloperMode_"+(e.detail?"Enabled":"Disabled"))}onInDevModeChanged_(_current,previous){const drawer=this.$.devDrawer;if(this.inDevMode){if(drawer.hidden){drawer.hidden=false;drawer.offsetTop}}else{if(previous===undefined){drawer.hidden=true;return}listenOnce(drawer,"transitionend",(()=>{if(!this.inDevMode){drawer.hidden=true}}))}this.expanded_=!this.expanded_}onLoadUnpackedClick_(){this.delegate.loadUnpacked().then((success=>{if(success){const toastManager=getToastManager();toastManager.duration=TOAST_DURATION_MS;toastManager.show(this.i18n("toolbarLoadUnpackedDone"))}})).catch((loadError=>{this.fire("load-error",loadError)}));chrome.metricsPrivate.recordUserAction("Options_LoadUnpackedExtension")}onPackClick_(){chrome.metricsPrivate.recordUserAction("Options_PackExtension");this.showPackDialog_=true}onPackDialogClose_(){this.showPackDialog_=false;this.$.packExtensions.focus()}onUpdateNowClick_(){if(this.isUpdating_){return}this.isUpdating_=true;const toastManager=getToastManager();toastManager.duration=0;toastManager.show(this.i18n("toolbarUpdatingToast"));this.delegate.updateAllExtensions(this.extensions).then((()=>{toastManager.hide();toastManager.duration=TOAST_DURATION_MS;toastManager.show(this.i18n("toolbarUpdateDone"));this.isUpdating_=false}),(loadError=>{this.fire("load-error",loadError);toastManager.hide();this.isUpdating_=false}))}onNarrowChanged_(e){this.narrow=e.detail.value}canLoadUnpacked_(){return this.canLoadUnpacked===undefined||this.canLoadUnpacked}}customElements.define(ExtensionsToolbarElement.is,ExtensionsToolbarElement);
// Copyright (c) 2024 The Brave Authors. All rights reserved.
injectStyle(ExtensionsToolbarElement,css`
  :host #devDrawer {
    overflow: hidden
  }`);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.PageHandler",scope)}}class PageHandlerRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setPage(page){this.proxy.sendMessage(0,PageHandler_SetPage_ParamsSpec.$,null,[page],false)}}class PageHandler{static get $interfaceName(){return"color_change_listener.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.Page",scope)}}class PageRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onColorProviderChanged(){this.proxy.sendMessage(0,Page_OnColorProviderChanged_ParamsSpec.$,null,[],false)}}class PageCallbackRouter{helper_internal_;$;router_;onColorProviderChanged;onConnectionError;constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onColorProviderChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnColorProviderChanged_ParamsSpec.$,null,this.onColorProviderChanged.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const PageHandler_SetPage_ParamsSpec={$:{}};const Page_OnColorProviderChanged_ParamsSpec={$:{}};mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$,"Page_OnColorProviderChanged_Params",[],[[0,8]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$2=null;class BrowserProxy{callbackRouter;constructor(){this.callbackRouter=new PageCallbackRouter;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance$2||(instance$2=new BrowserProxy)}static setInstance(newInstance){instance$2=newInstance}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{listenerId_=null;root_;eventTarget=new EventTarget;constructor(root){assert(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright (c) 2025 The Brave Authors. All rights reserved.
const DEFAULT_COLORS_HREF="//theme/colors.css?sets=ui";const oldStart=ColorChangeUpdater.prototype.start;ColorChangeUpdater.prototype.start=function(){const root=this.root_;const colorCssNode=root.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){const colorsCssLink=document.createElement("link");colorsCssLink.rel="stylesheet";colorsCssLink.type="text/css";colorsCssLink.setAttribute("href",DEFAULT_COLORS_HREF);if(root===document){document.getElementsByTagName("body")[0].appendChild(colorsCssLink)}else{root.appendChild(colorsCssLink)}}oldStart.call(this)};let instance$1=null;function getCss$1(){return instance$1||(instance$1=[...[getCss$19(),getCss$A(),getCss$N()],css`:host{color:var(--cr-primary-text-color);display:flex;flex-direction:column;height:100%}#viewManager{flex:1 1 var(--cr-toolbar-field-width);height:100%;position:relative}@media (min-width:1650px){#viewManager:has(extensions-item-list.active){flex-basis:1400px}}@media (max-width:1649px){#viewManager:has(extensions-item-list.active){flex-basis:950px}}extensions-item{display:inline-block}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#left{height:100%;min-width:var(--sidebar-width);position:sticky;top:0}#left extensions-sidebar{max-height:100%;overflow:auto;overscroll-behavior:contain}#left,#right{flex:1 1 0}picture[slot='header-icon']{display:inline-block;height:24px;margin-inline-end:16px;width:24px}picture[slot='header-icon'] img{display:block;height:100%;width:100%}
`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml$1(){return html`<!--_html_template_start_-->
<extensions-drop-overlay ?drag-enabled="${this.inDevMode}">
</extensions-drop-overlay>
<extensions-toolbar id="toolbar" ?in-dev-mode="${this.inDevMode}"
    ?can-load-unpacked="${this.canLoadUnpacked}"
    ?is-child-account="${this.isChildAccount_}"
    ?dev-mode-controlled-by-policy="${this.devModeControlledByPolicy}"
    .delegate="${this.delegate}"
    @cr-toolbar-menu-click="${this.onCrToolbarMenuClick_}"
    @search-changed="${this.onSearchChanged_}" .extensions="${this.extensions_}"
    ?narrow="${this.narrow_}" @narrow-changed="${this.onNarrowChanged_}">
</extensions-toolbar>
${this.showDrawer_?html`
  <cr-drawer id="drawer" heading="$i18n{toolbarTitle}"
      align="$i18n{textdirection}" @close="${this.onDrawerClose_}">
    <div slot="body">
      <extensions-sidebar @close-drawer="${this.onCloseDrawer_}"
          ?in-dev-mode="${this.inDevMode}"
          ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}">
      </extensions-sidebar>
    </div>

  </cr-drawer>
`:""}
<div id="container" class="cr-scrollable">
  <div id="scrollableShadow" class="cr-scrollable-top-shadow"></div>
  <div id="left" ?hidden="${this.narrow_}">
    <extensions-sidebar @close-drawer="${this.onCloseDrawer_}"
        ?in-dev-mode="${this.inDevMode}"
        ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}">
    </extensions-sidebar>
  </div>
  <cr-view-manager id="viewManager" role="main">
    <extensions-item-list id="itemsList" .delegate="${this.delegate}"
        ?in-dev-mode="${this.inDevMode}"
        ?is-mv2-deprecation-notice-dismissed="${this.isMv2DeprecationNoticeDismissed}"
        .filter="${this.filter}" ?hidden="${!this.didInitPage_}" slot="view"
        .apps="${this.apps_}" .extensions="${this.extensions_}"
        ?extensions-pinned-by-default="${this.extensionsPinnedByDefault}"
        @show-install-warnings="${this.onShowInstallWarnings_}">
    </extensions-item-list>
    <cr-lazy-render-lit id="details-view"
        .template="${()=>html`
          <extensions-detail-view .delegate="${this.delegate}" slot="view"
              ?in-dev-mode="${this.inDevMode}"
              ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}"
              ?from-activity-log="${this.fromActivityLog_}"
              ?show-activity-log="${this.showActivityLog}"
              ?incognito-available="${this.incognitoAvailable_}"
              .data="${this.detailViewItem_}">
          </extensions-detail-view>
        `}">
    </cr-lazy-render-lit>
    <cr-lazy-render-lit id="activity-log"
        .template="${()=>html`
          <extensions-activity-log .delegate="${this.delegate}" slot="view"
              .extensionInfo="${this.activityLogItem_}">
          </extensions-activity-log>
        `}">
    </cr-lazy-render-lit>
    <cr-lazy-render-lit id="site-permissions"
        .template="${()=>html`
          <extensions-site-permissions .delegate="${this.delegate}" slot="view"
              .extensions="${this.extensions_}"
              ?enable-enhanced-site-controls="${this.enableEnhancedSiteControls}">
          </extensions-site-permissions>
        `}">
    </cr-lazy-render-lit>
    <cr-lazy-render-lit id="site-permissions-by-site"
        .template="${()=>html`
          <extensions-site-permissions-by-site .delegate="${this.delegate}"
              slot="view" .extensions="${this.extensions_}">
          </extensions-site-permissions-by-site>
        `}">
    </cr-lazy-render-lit>
    <cr-lazy-render-lit id="keyboard-shortcuts"
        .template="${()=>html`
          <extensions-keyboard-shortcuts .delegate="${this.delegate}"
              slot="view" .items="${this.extensions_}">
          </extensions-keyboard-shortcuts>
        `}">
    </cr-lazy-render-lit>
    <cr-lazy-render-lit id="error-page"
        .template="${()=>html`
          <extensions-error-page .data="${this.errorPageItem_}" slot="view"
              .delegate="${this.delegate}" ?in-dev-mode="${this.inDevMode}">
          </extensions-error-page>
        `}">
    </cr-lazy-render-lit>
  </cr-view-manager>
  <div id="right" ?hidden="${this.narrow_}"></div>
</div>
${this.showOptionsDialog_?html`
  <extensions-options-dialog id="options-dialog"
      @close="${this.onOptionsDialogClose_}">
  </extensions-options-dialog>
`:""}
${this.showLoadErrorDialog_?html`
  <extensions-load-error id="load-error" .delegate="${this.delegate}"
      @close="${this.onLoadErrorDialogClose_}">
  </extensions-load-error>
`:""}
${this.showInstallWarningsDialog_?html`
  <extensions-install-warnings-dialog
      @close="${this.onInstallWarningsDialogClose_}"
      .installWarnings="${this.installWarnings_}">
  </extensions-install-warnings-dialog>
`:""}
<cr-toast-manager></cr-toast-manager>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function compareExtensions(a,b){function compare(x,y){return x<y?-1:x>y?1:0}function compareLocation(x,y){if(x.location===y.location){return 0}if(x.location===chrome.developerPrivate.Location.UNPACKED){return-1}if(y.location===chrome.developerPrivate.Location.UNPACKED){return 1}return 0}return compareLocation(a,b)||compare(a.name.toLowerCase(),b.name.toLowerCase())||compare(a.id,b.id)}const ExtensionsManagerElementBase=I18nMixinLit(CrLitElement);class ExtensionsManagerElement extends ExtensionsManagerElementBase{static get is(){return"extensions-manager"}static get styles(){return getCss$1()}render(){return getHtml$1.bind(this)()}static get properties(){return{canLoadUnpacked:{type:Boolean},delegate:{type:Object},inDevMode:{type:Boolean},isMv2DeprecationNoticeDismissed:{type:Boolean},extensionsPinnedByDefault:{type:Boolean},showActivityLog:{type:Boolean},enableEnhancedSiteControls:{type:Boolean},devModeControlledByPolicy:{type:Boolean},isChildAccount_:{type:Boolean},incognitoAvailable_:{type:Boolean},filter:{type:String},errorPageItem_:{type:Object},detailViewItem_:{type:Object},activityLogItem_:{type:Object},extensions_:{type:Array},apps_:{type:Array},didInitPage_:{type:Boolean},narrow_:{type:Boolean},showDrawer_:{type:Boolean},showLoadErrorDialog_:{type:Boolean},showInstallWarningsDialog_:{type:Boolean},installWarnings_:{type:Array},showOptionsDialog_:{type:Boolean},fromActivityLog_:{type:Boolean}}}#canLoadUnpacked_accessor_storage=false;get canLoadUnpacked(){return this.#canLoadUnpacked_accessor_storage}set canLoadUnpacked(value){this.#canLoadUnpacked_accessor_storage=value}#delegate_accessor_storage=Service.getInstance();get delegate(){return this.#delegate_accessor_storage}set delegate(value){this.#delegate_accessor_storage=value}#inDevMode_accessor_storage=loadTimeData.getBoolean("inDevMode");get inDevMode(){return this.#inDevMode_accessor_storage}set inDevMode(value){this.#inDevMode_accessor_storage=value}#isMv2DeprecationNoticeDismissed_accessor_storage=loadTimeData.getBoolean("MV2DeprecationNoticeDismissed");get isMv2DeprecationNoticeDismissed(){return this.#isMv2DeprecationNoticeDismissed_accessor_storage}set isMv2DeprecationNoticeDismissed(value){this.#isMv2DeprecationNoticeDismissed_accessor_storage=value}#extensionsPinnedByDefault_accessor_storage=true;get extensionsPinnedByDefault(){return this.#extensionsPinnedByDefault_accessor_storage}set extensionsPinnedByDefault(value){this.#extensionsPinnedByDefault_accessor_storage=value}#showActivityLog_accessor_storage=loadTimeData.getBoolean("showActivityLog");get showActivityLog(){return this.#showActivityLog_accessor_storage}set showActivityLog(value){this.#showActivityLog_accessor_storage=value}#enableEnhancedSiteControls_accessor_storage=loadTimeData.getBoolean("enableEnhancedSiteControls");get enableEnhancedSiteControls(){return this.#enableEnhancedSiteControls_accessor_storage}set enableEnhancedSiteControls(value){this.#enableEnhancedSiteControls_accessor_storage=value}#devModeControlledByPolicy_accessor_storage=false;get devModeControlledByPolicy(){return this.#devModeControlledByPolicy_accessor_storage}set devModeControlledByPolicy(value){this.#devModeControlledByPolicy_accessor_storage=value}#isChildAccount__accessor_storage=false;get isChildAccount_(){return this.#isChildAccount__accessor_storage}set isChildAccount_(value){this.#isChildAccount__accessor_storage=value}#incognitoAvailable__accessor_storage=false;get incognitoAvailable_(){return this.#incognitoAvailable__accessor_storage}set incognitoAvailable_(value){this.#incognitoAvailable__accessor_storage=value}#filter_accessor_storage="";get filter(){return this.#filter_accessor_storage}set filter(value){this.#filter_accessor_storage=value}#errorPageItem__accessor_storage;get errorPageItem_(){return this.#errorPageItem__accessor_storage}set errorPageItem_(value){this.#errorPageItem__accessor_storage=value}#detailViewItem__accessor_storage;get detailViewItem_(){return this.#detailViewItem__accessor_storage}set detailViewItem_(value){this.#detailViewItem__accessor_storage=value}#activityLogItem__accessor_storage;get activityLogItem_(){return this.#activityLogItem__accessor_storage}set activityLogItem_(value){this.#activityLogItem__accessor_storage=value}#extensions__accessor_storage=[];get extensions_(){return this.#extensions__accessor_storage}set extensions_(value){this.#extensions__accessor_storage=value}#apps__accessor_storage=[];get apps_(){return this.#apps__accessor_storage}set apps_(value){this.#apps__accessor_storage=value}#didInitPage__accessor_storage=false;get didInitPage_(){return this.#didInitPage__accessor_storage}set didInitPage_(value){this.#didInitPage__accessor_storage=value}#narrow__accessor_storage=false;get narrow_(){return this.#narrow__accessor_storage}set narrow_(value){this.#narrow__accessor_storage=value}#showDrawer__accessor_storage=false;get showDrawer_(){return this.#showDrawer__accessor_storage}set showDrawer_(value){this.#showDrawer__accessor_storage=value}#showLoadErrorDialog__accessor_storage=false;get showLoadErrorDialog_(){return this.#showLoadErrorDialog__accessor_storage}set showLoadErrorDialog_(value){this.#showLoadErrorDialog__accessor_storage=value}#showInstallWarningsDialog__accessor_storage=false;get showInstallWarningsDialog_(){return this.#showInstallWarningsDialog__accessor_storage}set showInstallWarningsDialog_(value){this.#showInstallWarningsDialog__accessor_storage=value}#installWarnings__accessor_storage=null;get installWarnings_(){return this.#installWarnings__accessor_storage}set installWarnings_(value){this.#installWarnings__accessor_storage=value}#showOptionsDialog__accessor_storage=false;get showOptionsDialog_(){return this.#showOptionsDialog__accessor_storage}set showOptionsDialog_(value){this.#showOptionsDialog__accessor_storage=value}#fromActivityLog__accessor_storage=false;get fromActivityLog_(){return this.#fromActivityLog__accessor_storage}set fromActivityLog_(value){this.#fromActivityLog__accessor_storage=value}pageInitializedResolver_=new PromiseResolver;currentPage_=null;navigationListener_=null;connectedCallback(){super.connectedCallback();const enableWebuiRefresh2026=loadTimeData.getString("webuiRefresh2026")!=="";if(enableWebuiRefresh2026){this.addThemedColors_();ColorChangeUpdater.forDocument().start()}document.documentElement.classList.remove("loading");document.fonts.load("bold 12px Roboto");this.navigationListener_=navigation.addListener((newPage=>{this.changePage_(newPage)}))}disconnectedCallback(){super.disconnectedCallback();assert(this.navigationListener_);assert(navigation.removeListener(this.navigationListener_));this.navigationListener_=null}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.addEventListener("load-error",this.onLoadError_);this.addEventListener("view-enter-start",this.onViewEnterStart_);this.addEventListener("view-exit-start",this.onViewExitStart_);this.addEventListener("view-exit-finish",this.onViewExitFinish_);const service=Service.getInstance();const onProfileStateChanged=profileInfo=>{this.isChildAccount_=profileInfo.isChildAccount;this.incognitoAvailable_=profileInfo.isIncognitoAvailable;this.devModeControlledByPolicy=profileInfo.isDeveloperModeControlledByPolicy;this.inDevMode=profileInfo.inDeveloperMode;this.canLoadUnpacked=profileInfo.canLoadUnpacked;this.isMv2DeprecationNoticeDismissed=profileInfo.isMv2DeprecationNoticeDismissed;this.extensionsPinnedByDefault=profileInfo.extensionsPinnedByDefault};service.getProfileStateChangedTarget().addListener(onProfileStateChanged);service.getProfileConfiguration().then(onProfileStateChanged);service.getExtensionsInfo().then((extensionsAndApps=>{this.initExtensionsAndApps_(extensionsAndApps);this.initPage_();service.getItemStateChangedTarget().addListener(this.onItemStateChanged_.bind(this))}))}updated(changedProperties){super.updated(changedProperties);const changedPrivateProperties=changedProperties;if(changedPrivateProperties.has("narrow_")){const drawer=this.shadowRoot.querySelector("cr-drawer");if(!this.narrow_&&drawer?.open){drawer.close()}}}whenPageInitializedForTest(){return this.pageInitializedResolver_.promise}initPage_(){this.didInitPage_=true;this.changePage_(navigation.getCurrentPage());this.pageInitializedResolver_.resolve()}onNarrowChanged_(e){this.narrow_=e.detail.value}onItemStateChanged_(eventData){const EventType=chrome.developerPrivate.EventType;switch(eventData.event_type){case EventType.VIEW_REGISTERED:case EventType.VIEW_UNREGISTERED:case EventType.INSTALLED:case EventType.LOADED:case EventType.UNLOADED:case EventType.ERROR_ADDED:case EventType.ERRORS_REMOVED:case EventType.PREFS_CHANGED:case EventType.WARNINGS_CHANGED:case EventType.COMMAND_ADDED:case EventType.COMMAND_REMOVED:case EventType.PERMISSIONS_CHANGED:case EventType.SERVICE_WORKER_STARTED:case EventType.SERVICE_WORKER_STOPPED:case EventType.PINNED_ACTIONS_CHANGED:if(!eventData.extensionInfo){break}if(this.delegate.shouldIgnoreUpdate(eventData.extensionInfo.id,eventData.event_type)){break}const listId=this.getListId_(eventData.extensionInfo);const currentIndex=this.getListFromId_(listId).findIndex((item=>item.id===eventData.extensionInfo.id));if(currentIndex>=0){this.updateItem_(listId,currentIndex,eventData.extensionInfo)}else if(eventData.event_type===EventType.INSTALLED){this.addItem_(listId,eventData.extensionInfo)}const toastManager=getToastManager();if(this.showUnsupportedDeveloperExtensionDisabledToast_(eventData.event_type,eventData.extensionInfo)&&!toastManager.isToastOpen){toastManager.duration=TOAST_DURATION_MS;toastManager.show(this.i18n("itemUnsupportedDeveloperModeToast"))}break;case EventType.UNINSTALLED:this.removeItem_(eventData.item_id);break;case EventType.CONFIGURATION_CHANGED:const index=this.getIndexInList_("extensions_",eventData.item_id);this.updateItem_("extensions_",index,Object.assign({},this.getData_(eventData.item_id),{safetyCheckText:eventData.extensionInfo?.safetyCheckText}));break;default:assertNotReached()}}onSearchChanged_(event){if(this.currentPage_.page!==Page.LIST){navigation.navigateTo({page:Page.LIST})}this.filter=event.detail}onCrToolbarMenuClick_(){this.showDrawer_=true;setTimeout((()=>{this.shadowRoot.querySelector("cr-drawer").openDrawer()}),0)}getListId_(item){const ExtensionType=chrome.developerPrivate.ExtensionType;switch(item.type){case ExtensionType.HOSTED_APP:case ExtensionType.LEGACY_PACKAGED_APP:case ExtensionType.PLATFORM_APP:return"apps_";case ExtensionType.EXTENSION:case ExtensionType.SHARED_MODULE:return"extensions_";case ExtensionType.THEME:assertNotReached("Don't send themes to the chrome://extensions page");default:assertNotReachedCase(item.type)}}getIndexInList_(listId,itemId){return this.getListFromId_(listId).findIndex((function(item){return item.id===itemId}))}getData_(id){return this.extensions_[this.getIndexInList_("extensions_",id)]||this.apps_[this.getIndexInList_("apps_",id)]}initExtensionsAndApps_(extensionsAndApps){extensionsAndApps.sort(compareExtensions);const apps=[];const extensions=[];for(const i of extensionsAndApps){const list=this.getListId_(i)==="apps_"?apps:extensions;list.push(i)}this.apps_=apps;this.extensions_=extensions}addItem_(listId,item){assert(this.getIndexInList_(listId,item.id)===-1);const list=this.getListFromId_(listId);let insertBeforeChild=list.findIndex((function(listEl){return compareExtensions(listEl,item)>0}));if(insertBeforeChild===-1){insertBeforeChild=list.length}this.updateList_(listId,insertBeforeChild,0,item)}getListFromId_(listId){assert(listId==="extensions_"||listId==="apps_");return listId==="extensions_"?this.extensions_:this.apps_}updateList_(listId,index,removeCount,newItem){const list=this.getListFromId_(listId);if(newItem){list.splice(index,removeCount,newItem)}else{list.splice(index,removeCount)}listId==="extensions_"?this.extensions_=list.slice():this.apps_=list.slice()}updateItem_(listId,index,item){assert(index>=0);this.updateList_(listId,index,1,item);if(this.detailViewItem_&&this.detailViewItem_.id===item.id&&this.currentPage_.page===Page.DETAILS){this.detailViewItem_=item}else if(this.errorPageItem_&&this.errorPageItem_.id===item.id&&this.currentPage_.page===Page.ERRORS){this.errorPageItem_=item}else if(this.activityLogItem_&&this.activityLogItem_.id===item.id&&this.currentPage_.page===Page.ACTIVITY_LOG){this.activityLogItem_=item}}focusAfterItemRemoved_(listId,index){setTimeout((()=>{const list=this.getListFromId_(listId);if(list.length){const focusIndex=Math.min(list.length-1,index);const itemToFocusId=list[focusIndex].id;if(!this.$.itemsList.focusItemButton(itemToFocusId)){this.$.toolbar.focusSearchInput()}}else{this.$.toolbar.focusSearchInput()}}),0)}removeItem_(itemId){let listId="extensions_";let index=this.getIndexInList_(listId,itemId);if(index===-1){listId="apps_";index=this.getIndexInList_(listId,itemId)}assert(index>=0);this.updateList_(listId,index,1);if(this.currentPage_.page===Page.LIST){this.$.itemsList.updateComplete.then((()=>{this.focusAfterItemRemoved_(listId,index)}))}else if((this.currentPage_.page===Page.ACTIVITY_LOG||this.currentPage_.page===Page.DETAILS||this.currentPage_.page===Page.ERRORS)&&this.currentPage_.extensionId===itemId){navigation.replaceWith({page:Page.LIST})}}onLoadError_(e){this.showLoadErrorDialog_=true;setTimeout((()=>{const dialog=this.shadowRoot.querySelector("extensions-load-error");dialog.loadError=e.detail;dialog.show()}),0)}changePage_(newPage){this.onCloseDrawer_();const optionsDialog=this.shadowRoot.querySelector("extensions-options-dialog");if(optionsDialog&&optionsDialog.open){this.showOptionsDialog_=false}const fromPage=this.currentPage_?this.currentPage_.page:null;const toPage=newPage.page;let data;let activityLogPlaceholder;if(toPage===Page.LIST){this.delegate.dismissSafetyHubExtensionsMenuNotification()}if(newPage.extensionId){data=this.getData_(newPage.extensionId);if(!data){if(this.showActivityLog&&toPage===Page.ACTIVITY_LOG){activityLogPlaceholder={id:newPage.extensionId,isPlaceholder:true}}else{navigation.replaceWith({page:Page.LIST});return}}}if(toPage===Page.DETAILS){this.detailViewItem_=data}else if(toPage===Page.ERRORS){this.errorPageItem_=data}else if(toPage===Page.ACTIVITY_LOG){if(!this.showActivityLog){navigation.replaceWith({page:Page.DETAILS,extensionId:newPage.extensionId});return}this.activityLogItem_=data||activityLogPlaceholder}else if((toPage===Page.SITE_PERMISSIONS||toPage===Page.SITE_PERMISSIONS_ALL_SITES)&&!this.enableEnhancedSiteControls){navigation.replaceWith({page:Page.LIST});return}if(fromPage!==toPage){this.$.viewManager.switchView(toPage,"no-animation","no-animation")}if(newPage.subpage){assert(newPage.subpage===Dialog.OPTIONS);assert(newPage.extensionId);this.showOptionsDialog_=true;setTimeout((()=>{this.shadowRoot.querySelector("extensions-options-dialog").show(data)}),0)}document.title=toPage===Page.DETAILS?`${loadTimeData.getString("title")} - ${this.detailViewItem_.name}`:loadTimeData.getString("title");this.currentPage_=newPage;this.$.scrollableShadow.classList.toggle("force-on",toPage===Page.DETAILS||toPage===Page.ERRORS||toPage===Page.SITE_PERMISSIONS_ALL_SITES)}onDrawerClose_(){this.showDrawer_=false}onCloseDrawer_(){const drawer=this.shadowRoot.querySelector("cr-drawer");if(drawer&&drawer.open){drawer.close()}}onLoadErrorDialogClose_(){this.showLoadErrorDialog_=false}onOptionsDialogClose_(){this.showOptionsDialog_=false;this.shadowRoot.querySelector("extensions-detail-view").focusOptionsButton()}onViewEnterStart_(){this.fromActivityLog_=false}onViewExitStart_(e){const viewType=e.composedPath()[0].tagName;this.fromActivityLog_=viewType==="EXTENSIONS-ACTIVITY-LOG"}onViewExitFinish_(e){const viewType=e.composedPath()[0].tagName;if(viewType==="EXTENSIONS-ITEM-LIST"||viewType==="EXTENSIONS-KEYBOARD-SHORTCUTS"||viewType==="EXTENSIONS-ACTIVITY-LOG"||viewType==="EXTENSIONS-SITE-PERMISSIONS"||viewType==="EXTENSIONS-SITE-PERMISSIONS-BY-SITE"){return}const extensionId=e.composedPath()[0].data.id;const list=this.shadowRoot.querySelector("extensions-item-list");const button=viewType==="EXTENSIONS-DETAIL-VIEW"?list.getDetailsButton(extensionId):list.getErrorsButton(extensionId);if(button){button.focus()}}onShowInstallWarnings_(e){this.installWarnings_=e.detail;this.showInstallWarningsDialog_=true}onInstallWarningsDialogClose_(){this.installWarnings_=null;this.showInstallWarningsDialog_=false}showUnsupportedDeveloperExtensionDisabledToast_(eventType,extensionInfo){if(eventType!==chrome.developerPrivate.EventType.UNLOADED){return false}return!this.inDevMode&&extensionInfo.state===chrome.developerPrivate.ExtensionState.DISABLED&&extensionInfo.location===chrome.developerPrivate.Location.UNPACKED&&extensionInfo.disableReasons.unsupportedDeveloperExtension}addThemedColors_(){assert(document.body.querySelector(COLORS_CSS_SELECTOR)===null);const link=document.createElement("link");link.rel="stylesheet";link.href="chrome://theme/colors.css?sets=ui,chrome";document.body.appendChild(link)}}customElements.define(ExtensionsManagerElement.is,ExtensionsManagerElement);let instance=null;function getCss(){return instance||(instance=[...[],css`:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:none;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:32px;--cr-checkbox-ripple-offset:50%;--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-opacity:1;--cr-checkbox-mark-color:var(--color-checkbox-check,var(--cr-fallback-color-on-primary));--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,var(--cr-fallback-color-outline));--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-unchecked-ripple-opacity:.4}}:host([disabled]){cursor:initial;opacity:1;pointer-events:none;--cr-checkbox-checked-box-color:var(--color-checkbox-container-disabled,var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(--color-checkbox-outline-disabled,var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,var(--cr-fallback-color-disabled-foreground))}#checkbox{background:none;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:none;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host([disabled][checked]) #checkbox{border-color:transparent}#hover-layer{display:none}#checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}#checkbox:focus-visible{outline:var(--cr-checkbox-focus-outline,2px solid var(--cr-focus-outline-color));outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}#ink{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) #ink{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) #ink{left:auto;right:var(--cr-checkbox-ripple-offset);transform:translate(50%,-50%)}#labelContainer{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #labelContainer{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #labelContainer{display:none}#ariaDescription{height:0;overflow:hidden;width:0}`])}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getHtml(){return html`
<div id="checkbox" tabindex="${this.tabIndex}" role="checkbox"
    @keydown="${this.onKeydown_}" @keyup="${this.onKeyup_}"
    aria-disabled="${this.getAriaDisabled_()}"
    aria-checked="${this.getAriaChecked_()}"
    aria-label="${this.ariaLabelOverride||nothing}"
    aria-labelledby="${this.ariaLabelOverride?nothing:"labelContainer"}"
    aria-describedby="ariaDescription">
  <!-- Inline SVG paints faster than loading it from a separate file. -->
  <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none"
      xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
    </path>
  </svg>
  <div id="hover-layer"></div>
</div>
<div id="labelContainer" part="label-container">
  <slot></slot>
</div>
<div id="ariaDescription" aria-hidden="true">${this.ariaDescription}</div>`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrCheckboxElementBase=CrRippleMixin(CrLitElement);class CrCheckboxElement extends CrCheckboxElementBase{static get is(){return"cr-checkbox"}static get styles(){return getCss()}render(){return getHtml.bind(this)()}static get properties(){return{checked:{type:Boolean,reflect:true,notify:true},disabled:{type:Boolean,reflect:true},ariaDescription:{type:String},ariaLabelOverride:{type:String},tabIndex:{type:Number}}}#checked_accessor_storage=false;get checked(){return this.#checked_accessor_storage}set checked(value){this.#checked_accessor_storage=value}#disabled_accessor_storage=false;get disabled(){return this.#disabled_accessor_storage}set disabled(value){this.#disabled_accessor_storage=value}#ariaDescription_accessor_storage=null;get ariaDescription(){return this.#ariaDescription_accessor_storage}set ariaDescription(value){this.#ariaDescription_accessor_storage=value}#ariaLabelOverride_accessor_storage;get ariaLabelOverride(){return this.#ariaLabelOverride_accessor_storage}set ariaLabelOverride(value){this.#ariaLabelOverride_accessor_storage=value}#tabIndex_accessor_storage=0;get tabIndex(){return this.#tabIndex_accessor_storage}set tabIndex(value){this.#tabIndex_accessor_storage=value}willUpdate(changedProperties){super.willUpdate(changedProperties);if(changedProperties.has("disabled")){const previousTabIndex=changedProperties.get("disabled");if(previousTabIndex!==undefined||this.disabled){this.tabIndex=this.disabled?-1:0}}}firstUpdated(){this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("pointerup",this.hideRipple_.bind(this));this.$.labelContainer.addEventListener("pointerdown",this.showRipple_.bind(this));this.$.labelContainer.addEventListener("pointerleave",this.hideRipple_.bind(this))}updated(changedProperties){super.updated(changedProperties);if(changedProperties.has("tabIndex")){this.removeAttribute("tabindex")}}focus(){this.$.checkbox.focus()}getFocusableElement(){return this.$.checkbox}getAriaDisabled_(){return this.disabled?"true":"false"}getAriaChecked_(){return this.checked?"true":"false"}showRipple_(){if(this.noink){return}this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}async onClick_(e){if(this.disabled||e.target.tagName==="A"){return}e.stopPropagation();e.preventDefault();this.checked=!this.checked;await this.updateComplete;this.fire("change",this.checked)}onKeydown_(e){if(e.key!==" "&&(e.key!=="Enter"||isMac&&e.ctrlKey)){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}}onKeyup_(e){if(e.key===" "||e.key==="Enter"&&!(isMac&&e.ctrlKey)){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}}createRipple(){this.rippleContainer=this.$.checkbox;const ripple=super.createRipple();ripple.setAttribute("recenters","");ripple.classList.add("circle");return ripple}}customElements.define(CrCheckboxElement.is,CrCheckboxElement);export{ARG_URL_PLACEHOLDER,ActivityLogHistoryElement,ActivityLogHistoryItemElement,ActivityLogPageState,ActivityLogStreamElement,ActivityLogStreamItemElement,COLORS_CSS_SELECTOR,CrCheckboxElement,CrIconElement,Dialog,DragAndDropHandler,ExtensionsActivityLogElement,ExtensionsCodeSectionElement,ExtensionsDetailViewElement,ExtensionsErrorPageElement,ExtensionsHostPermissionsToggleListElement,ExtensionsItemElement,ExtensionsItemListElement,ExtensionsKeyboardShortcutsElement,ExtensionsManagerElement,ExtensionsMv2DeprecationPanelElement,ExtensionsOptionsDialogElement,ExtensionsPackDialogAlertElement,ExtensionsPackDialogElement,ExtensionsRestrictedSitesDialogElement,ExtensionsReviewPanelElement,ExtensionsRuntimeHostPermissionsElement,ExtensionsRuntimeHostsDialogElement,ExtensionsSidebarElement,ExtensionsSitePermissionsBySiteElement,ExtensionsSitePermissionsElement,ExtensionsSitePermissionsListElement,ExtensionsToggleRowElement,ExtensionsToolbarElement,LoadErrorElement,NavigationHelper,OptionsDialogMaxHeight,OptionsDialogMinWidth,Page,PluralStringProxyImpl,Service,SitePermissionsEditPermissionsDialogElement,SitePermissionsEditUrlDialogElement,SitePermissionsSiteGroupElement,SiteSettingsMixin,TooltipPosition,UserAction,asyncMap,createDummyExtensionInfo,getFaviconUrl,getMatchingUserSpecifiedSites,getPatternFromSite,getSitePermissionsPatternFromSite,getToastManager,getTrustedHTML,navigation};