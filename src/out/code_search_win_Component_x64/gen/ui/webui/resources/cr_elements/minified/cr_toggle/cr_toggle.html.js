// Copyright (c) 2024 The Brave Authors. All rights reserved.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`
<leo-toggle id="toggle" size="small" ?checked="${this.checked}" ?disabled="${this.disabled}" @change="${this.onChange_}">
  <slot></slot>
</leo-toggle>
`}