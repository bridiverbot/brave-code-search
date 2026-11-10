// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './initial_gradient.html.js';
/*
 * Element responsible for showing an initial gradient.
 */
export class InitialGradientElement extends PolymerElement {
    static get is() {
        return 'initial-gradient';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            scrimVisible: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            shouldHideScrim: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    setScrimVisible() {
        this.scrimVisible = true;
    }
    triggerHideScrimAnimation() {
        this.scrimVisible = false;
        this.shouldHideScrim = true;
    }
}
customElements.define(InitialGradientElement.is, InitialGradientElement);
