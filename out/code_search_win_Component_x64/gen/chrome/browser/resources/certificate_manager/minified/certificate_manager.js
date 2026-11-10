// Copyright (c) 2024 The Brave Authors. All rights reserved.
import{injectStyle}from"//resources/brave/lit_overriding.js";import{css}from"//resources/lit/v3_0/lit.rollup.js";import{CertificateManagerElement}from"./certificate_manager-chromium.js";injectStyle(CertificateManagerElement,css`
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
`);export*from"./certificate_manager-chromium.js";customElements.define(CertificateManagerElement.is,CertificateManagerElement);