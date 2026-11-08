// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { html, repeat } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_-->
${repeat(this.pageActionStates, item => item.pageActionId, item => html `
  <page-action-icon .state="${item}"></page-action-icon>
`)}
<!--_html_template_end_-->`;
}
