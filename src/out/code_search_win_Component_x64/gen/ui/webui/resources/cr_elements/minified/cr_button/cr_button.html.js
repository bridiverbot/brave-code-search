// Copyright (c) 2024 The Brave Authors. All rights reserved.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`
<leo-button id="button" kind="outline" size="${this.size}">
  <slot slot="icon-before" name="prefix-icon"></slot>
  <slot></slot>
  <slot slot="icon-after" name="suffix-icon"></slot>
</leo-button>`}