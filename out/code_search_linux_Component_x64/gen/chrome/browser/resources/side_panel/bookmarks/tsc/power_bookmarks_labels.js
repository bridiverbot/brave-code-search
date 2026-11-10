// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import './icons.html.js';
import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { assert } from 'chrome://resources/js/assert.js';
import { getHtml } from './power_bookmarks_labels.html.js';
export class PowerBookmarksLabelsElement extends CrLitElement {
    static get is() {
        return 'power-bookmarks-labels';
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            disabled: { type: Boolean },
            labels: {
                type: Array,
                notify: true,
            },
            trackedProductInfos: { type: Object },
        };
    }
    #disabled_accessor_storage = false;
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #labels_accessor_storage = [];
    get labels() { return this.#labels_accessor_storage; }
    set labels(value) { this.#labels_accessor_storage = value; }
    #trackedProductInfos_accessor_storage = {};
    get trackedProductInfos() { return this.#trackedProductInfos_accessor_storage; }
    set trackedProductInfos(value) { this.#trackedProductInfos_accessor_storage = value; }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('trackedProductInfos')) {
            this.labels = this.computeLabels();
        }
    }
    computeLabels() {
        const labels = [];
        const hasTrackedProducts = Object.keys(this.trackedProductInfos)
            .some(key => this.trackedProductInfos[key] !== null);
        if (hasTrackedProducts) {
            // Reuse the current price tracking label if one exists, to maintain its
            // active state.
            const currentLabel = this.labels[0];
            labels.push(Object.assign({}, {
                label: loadTimeData.getString('priceTrackingLabel'),
                icon: loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                    'bookmarks:notifications-active' :
                    'bookmarks:price-tracking-old',
                active: false,
            }, { active: currentLabel ? currentLabel.active : false }));
        }
        return labels;
    }
    getLabelIcon(label) {
        return label.active ? (loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'bookmarks:check' :
            'bookmarks:check-old') :
            label.icon;
    }
    onLabelClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const index = Number(event.currentTarget.dataset['index']);
        const labels = [...this.labels];
        assert(index >= 0 && index < labels.length);
        labels[index] = { ...labels[index], active: !labels[index].active };
        this.labels = labels;
    }
}
customElements.define(PowerBookmarksLabelsElement.is, PowerBookmarksLabelsElement);
