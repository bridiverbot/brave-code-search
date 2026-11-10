// Copyright (c) 2024 The Brave Authors. All rights reserved.
import{injectStyle}from"//resources/brave/lit_overriding.js";import{css}from"//resources/lit/v3_0/lit.rollup.js";import{ManagedFootnoteElement}from"./managed_footnote-chromium.js";if(window.location.href==="chrome://downloads/"||window.location.href==="chrome://extensions/"||window.location.href.startsWith("chrome://settings/")){injectStyle(ManagedFootnoteElement,css`
    :host([is-managed_]) {
      display: none !important;
    }
  `)}export*from"./managed_footnote-chromium.js";