// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './organizer_zero_state.css.js';
import { getHtml } from './organizer_zero_state.html.js';
export class OrganizerZeroStateElement extends CrLitElement {
    static get is() {
        return 'organizer-zero-state';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
}
customElements.define(OrganizerZeroStateElement.is, OrganizerZeroStateElement);
