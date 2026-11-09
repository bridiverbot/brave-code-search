// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './permission_chip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './permission_dashboard.css.js';
import { getHtml } from './permission_dashboard.html.js';
export class PermissionDashboardElement extends CrLitElement {
    static get is() {
        return 'permission-dashboard';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            dashboardState: { type: Object },
        };
    }
    #delegate_accessor_storage = null;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #dashboardState_accessor_storage = null;
    get dashboardState() { return this.#dashboardState_accessor_storage; }
    set dashboardState(value) { this.#dashboardState_accessor_storage = value; }
}
customElements.define(PermissionDashboardElement.is, PermissionDashboardElement);
