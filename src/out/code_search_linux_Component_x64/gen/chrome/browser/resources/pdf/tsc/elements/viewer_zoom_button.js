// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './viewer_zoom_button.css.js';
import { getHtml } from './viewer_zoom_button.html.js';
export class ViewerZoomButtonElement extends CrLitElement {
    static get is() {
        return 'viewer-zoom-button';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /** Index of the icon currently being displayed. */
            activeIndex: { type: Number },
            disabled: { type: Boolean },
            /**
             * Icons to be displayed on the FAB. Multiple icons should be separated
             * with spaces, and will be cycled through every time the FAB is clicked.
             */
            icons: { type: String },
            /**
             * Used to show the appropriate drop shadow when buttons are focused with
             * the keyboard.
             */
            keyboardNavigationActive: {
                type: Boolean,
                reflect: true,
            },
            tooltips: { type: String },
            /**
             * Array version of the list of icons. The public property is a string for
             * convenience so that either a single icon or multiple icons can be
             * easily specified without a data binding in the parent's HTML template.
             */
            icons_: { type: Array },
            tooltips_: { type: Array },
        };
    }
    #activeIndex_accessor_storage = 0;
    get activeIndex() { return this.#activeIndex_accessor_storage; }
    set activeIndex(value) { this.#activeIndex_accessor_storage = value; }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #icons_accessor_storage = '';
    get icons() { return this.#icons_accessor_storage; }
    set icons(value) { this.#icons_accessor_storage = value; }
    #keyboardNavigationActive_accessor_storage = false;
    get keyboardNavigationActive() { return this.#keyboardNavigationActive_accessor_storage; }
    set keyboardNavigationActive(value) { this.#keyboardNavigationActive_accessor_storage = value; }
    #tooltips_accessor_storage = '';
    get tooltips() { return this.#tooltips_accessor_storage; }
    set tooltips(value) { this.#tooltips_accessor_storage = value; }
    #icons__accessor_storage = [''];
    get icons_() { return this.#icons__accessor_storage; }
    set icons_(value) { this.#icons__accessor_storage = value; }
    #tooltips__accessor_storage = [];
    get tooltips_() { return this.#tooltips__accessor_storage; }
    set tooltips_(value) { this.#tooltips__accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('icons')) {
            this.icons_ = this.icons.split(' ');
        }
        if (changedProperties.has('tooltips')) {
            this.tooltips_ = this.tooltips.split(',');
        }
    }
    /**
     * @return Icon name for the currently visible icon.
     */
    computeVisibleIcon_() {
        return this.icons_[this.activeIndex];
    }
    /**
     * @return Tooltip for the currently visible icon.
     */
    computeVisibleTooltip_() {
        return this.tooltips_ === undefined ? '' : this.tooltips_[this.activeIndex];
    }
    onClick_() {
        // We cannot attach an on-click to the entire viewer-zoom-button, as this
        // will include clicks on the margins. Instead, proxy clicks on the FAB
        // through.
        this.fire('fabclick');
        this.activeIndex = (this.activeIndex + 1) % this.icons_.length;
    }
}
customElements.define(ViewerZoomButtonElement.is, ViewerZoomButtonElement);
