// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './side_panel_ghost_loader.css.js';
import { getHtml } from './side_panel_ghost_loader.html.js';
/*
 * Element responsible for rendering the side panel ghost loader.
 */
export class SidePanelGhostLoaderElement extends CrLitElement {
    static get is() {
        return 'side-panel-ghost-loader';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            darkMode: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #darkMode_accessor_storage = loadTimeData.getBoolean('darkMode');
    // Whether the loading results should render in dark mode.
    get darkMode() { return this.#darkMode_accessor_storage; }
    set darkMode(value) { this.#darkMode_accessor_storage = value; }
}
customElements.define(SidePanelGhostLoaderElement.is, SidePanelGhostLoaderElement);
